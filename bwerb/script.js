let apprenticeArray = JSON.parse(localStorage.getItem('apprentice'));
let expArray = JSON.parse(localStorage.getItem('exps'));
let userData = JSON.parse(localStorage.getItem('data'));

function loadUserData() {
    document.getElementById('name').innerHTML = userData.name;
    document.getElementById('mobile').innerHTML = userData.tNumber;
    document.getElementById('email').innerHTML = userData.mail;
    document.getElementById('birth').innerHTML = userData.birth;
    document.getElementById('marital').innerHTML = userData.marital;
    document.getElementById('address').innerHTML = userData.address;
}
//baustelle von hier
function loadCompetence() {
    document.getElementById('competence1').innerHTML = userData.competence1;
    document.getElementById('competence2').innerHTML = userData.competence2;
    document.getElementById('competence3').innerHTML = userData.competence3;
    document.getElementById('competence4').innerHTML = userData.competence4;
    document.getElementById('competence5').innerHTML = userData.competence5;
    document.getElementById('competence6').innerHTML = userData.competence6;
    document.getElementById('competence7').innerHTML = userData.competence7;
    document.getElementById('competence8').innerHTML = userData.competence8;
}
//bis hier

function loadExps() {
    let display = document.getElementById('erfahrung');
    for(i = 0; i < expArray.length; i++) {
        display.innerHTML += returnExps(i);
    }
}

function returnExps(p) {
    let html = /* html */`
        <div id="frame${p}" class="erfahrung-frame content-padding content-width">
            <div class="data-frame flex-top padding-top2">
                <p>${expArray[p][0].data[0].anstellungszeit}</p>
            </div>
            <div class="data-frame3 column border-left">
                <h2>${expArray[p][0].data[0].berufsbezeichnung}</h2>
                <h3>${expArray[p][0].data[0].arbeitgeber} <i>${expArray[p][0].data[0].ortschaft}</i></h3>
                <ul>
                    ${returnExpTasks(p)}
                </ul>
            </div>
        </div>
    `;
    return html;
}

function returnExpTasks(p) {
    let html = ``;
    for (i = 0; i < expArray[p][0].data[0].aufgaben[0].length; i++){
        html += `<li>${expArray[p][0].data[0].aufgaben[0][i]}</li>`;
    }
    return html;
}

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
    let display = document.getElementById('apprentices');
    for (let index = 0; index < apprenticeArray.length; index++) {
        display.innerHTML += returnApprentice(index);
    }
}
