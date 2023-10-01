let apprenticeArray = JSON.parse(localStorage.getItem('apprentice'));
let expArray = JSON.parse(localStorage.getItem('exps'));
let userData = JSON.parse(localStorage.getItem('data'));
let language = JSON.parse(localStorage.getItem('language'));

//baustelle
let uploadedImage = "";
let profilePictureInput = document.getElementById('file-input');

profilePictureInput.addEventListener("change", function () {
    console.log('hello world')
})

// let reader = new FileReader();
// reader.addEventListener("load", () => {
//     uploadedImage = reader.result;
//     document.getElementById('profile-picture').src = uploadedImage;
// });
// reader.readAsDataURL(this.files[0]);

//bis hier

function loadUserData() {
    document.getElementById('name').innerHTML = userData.name;
    document.getElementById('mobile').innerHTML = userData.tNumber;
    document.getElementById('email').innerHTML = userData.mail;
    document.getElementById('birth').innerHTML = userData.birth;
    document.getElementById('marital').innerHTML = userData.marital;
    document.getElementById('address').innerHTML = userData.address;
}

function loadCompetence() {
    let currentData = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < 4; i++) {
        let listElement = document.createElement('li');
        listElement.classList.add('font-size18');
        listElement.setAttribute('id', `competence${i}`);
        document.getElementById('compList1').appendChild(listElement);
        document.getElementById(`competence${i}`).innerHTML += `${currentData.competences[i]}`;
    }
    if (currentData.competences.length > 4) {
        for (let i = 4; i < currentData.competences.length; i++) {
            let listElement = document.createElement('li');
            listElement.classList.add('font-size18');
            listElement.setAttribute('id', `competence${i}`);
            document.getElementById('compList2').appendChild(listElement);
            document.getElementById(`competence${i}`).innerHTML += `${currentData.competences[i]}`;
        }
    }
}

function loadExps() {
    let display = document.getElementById('erfahrung');
    for (let i = 0; i < expArray.length; i++) {
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
    for (let i = 0; i < expArray[p][0].data[0].aufgaben[0].length; i++) {
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

function loadLanguages() {
    for (let i = 0; i < language.length; i++) {
        document.getElementById('lang-display').innerHTML += generateLanguageHTML(i);
    }
}

function generateLanguageHTML(p) {
    let html = `
    <p class="font-size20"><b>${language[p][0].data[0].sprache}:</b> ${language[p][0].data[0].grad}</p>
    `;
    return html;
}
