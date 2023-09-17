let apprenticeArray = JSON.parse(localStorage.getItem('apprentice'));

let exp = [
    {
        'length': ['09/2023 - jetzt', '01/2023 - 08/2023', '06/2022 - 12/2022', '02/2022 - 06/2022', '08/2021 - 10/2021', '02/2021 - 07/2021', '08/2020 - 01/2021', '07/2017 - 08/2020', '02/2017 - 06/2017', '11/2016 - 01/2017', '08/2016 - 10/2016'],
        'job': ['Temporär als Koch EFZ', 'Festanstellung Koch EFZ (Tournant) / Pizzaiolo', 'Temporär als Koch EFZ', 'Chef de partie Mercato', 'Aushilfe an der Bar', 'Praktikant im Bereich Pflege', 'Selbstständig als Koch EFZ', 'Festanstellung als Koch EFZ (Alleinkoch)', 'Chef de partie entrémetier', 'Aushilfe als Koch EFZ', 'Festanstellung als Koch EFZ'],
        'standort': ['Adecco & Coople', 'Restaurant Villaggio - Baar / Root', 'Adecco & Coople', 'Verkhershaus Luzern - Luzern', 'Buddha Bar - Stans', 'Alterssiedlung Root', 'Club Vegas / Gleis 13 - Kriens / Kreuzstuz', 'Bäckerei Müller - Root', 'Hotel Seehof - Küssnacht', 'Steakhouse riverside saloon - Root', 'Gasthof Tell - Gisikon'],
        'aufgaben': [
            {
                'a': ['À la carte - Koch', 'Bankett - Koch', 'Produktions - Koch', 'Früstücks - Koch']
            },
            {
                'a': ['Gestaltung der Mittagsmenüs', 'Herstellung der Mise en place', 'Aufgabe und Annahme von Bestellungen']
            },
            {
                'a': ['À la carte - Koch', 'Bankett - Koch', 'Produktions - Koch', 'Früstücks - Koch']
            },
            {
                'a': ['Herstellung und Zubereitung der mise en place', 'Annehmen und aufgeben von Bestellungen', 'Mitgestaltung des Wochenspeiseplanes', 'Vorbereitung und Planung der Tagesproduktion', 'Kontroll und Checklisten führen (Öl kontrolle, Reinigung, Proben)', 'Mithilfe in der Bankett Küche und servieren an Anlässen', 'Koordinierung des "Mercato - Teams"']
            },
            {
                'a': ['Servieren von Getränken', 'Zubereitung von Speisen']
            },
            {
                'a': ['Betreuung und Pflege der Bewohner', 'Bereitstellen und Servieren des Frühstücks', 'Mithilfe in der Aktivierung der Bewohner']
            },
            {
                'a': ['Fertigung und Zubereitung der Speisen', 'Gestaltung der Speisekarte', 'Verkauf der Speisen']
            },
            {
                'a': ['Fertigung und Zubereitung des Mittagsmenüs', 'Fachgerechte Lagerung der Waren', 'Annehmen und aufgeben von Bestellung', 'Gestaltung des Wochenspeiseplanes','Verkauf von Lebensmitteln' , 'Aushelfen in der Backstube, Patisserie Bereich', 'Service im Kaffee']
            },
            {
                'a': ['Herstellung und Zubereitung von Speisen', 'Fachgerechte Lagerung der Waren', 'Mitgestaltung des Mittagmenüs']
            },
            {
                'a': ['Herstellung und Zubereitung von Speisen', 'Mithilfe im à la carte Bereich und Bankette']
            },
            {
                'a': ['Herstellung und Zubereitung von Speisen', 'Fachgerechte Lagerung der Waren', 'Tournant im Bereich: entrémetier, garde-manger, saucier']
            }
        ]
    }
];

function returnHTML(p) {
    let html = /*html*/`
        <div id="frame${p}" class="erfahrung-frame content-padding content-width">
            <div class="data-frame flex-top padding-top2">
                <p>${exp[0].length[p]}</p>
            </div>
            <div class="data-frame3 column border-left">
                <h2>${exp[0].job[p]}</h2>
                <h3>${exp[0].standort[p]}</h3>
                <ul>
                    ${returnAufgaben(p)}
                </ul>
            </div>
        </div>
    `
    return html;
}

function returnAufgaben(p) {
    let html = ``
    for(i = 0; i < exp[0].aufgaben[p].a.length; i++) {
        html += `<li>${exp[0].aufgaben[p].a[i]}</li>`;
    }
    return html;
}

//baustelle vonhier
function returnApprentice(p) {
    let html = /*html*/`
        <div class="erfahrung-frame content-padding content-width">
            <div class="data-frame flex-top padding-top2">
                <p>${apprenticeArray[p][0].data[0].anstellungszeit}</p>
            </div>
            <div class="data-frame3 column border-left">
                <h2>${apprenticeArray[p][0].data[0].berufsbezeichnung}</h2>
                <h3>${apprenticeArray[p][0].data[0].arbeitgeber} <i>${apprenticeArray[p][0].data[0].ortschaft}</i></h3>
                <p class="font-size18"><b>Notendurchschnitt: </b>${apprenticeArray[p][0].data[0].note}</p>
            </div>
        </div>
    `;
    return html;
}

function loadApprentice() {
    let display = document.getElementById('apprentices').innerHTML;
    for (let index = 0; index < apprenticeArray.length; index++) {
        display.innerHTML += returnApprentice(index);
    }
}
//bis hier

function loadExp() {
    let display = document.getElementById('erfahrung');
    for (let i = 0; i < exp[0].job.length; i++) {
        display.innerHTML += returnHTML(i);
    }
    forPrint();
}

function forPrint(){
    document.getElementById('frame1').classList.add('mediaAlways');
    document.getElementById('frame2').classList.add('printMarginTop');
    document.getElementById('frame6').classList.add('mediaAlways');
    document.getElementById('frame7').classList.add('printMarginTop');
    document.getElementById('frame10').classList.add('mediaAlways');
}