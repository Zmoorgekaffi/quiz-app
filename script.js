let currentSection = 0;
let currentQuestion = 0;
let tasks = [];

let data = [
    {
        title: 'Persönliche Daten',
        questions: [
            {
                question: 'Wie lautet dein Vor- und Nachname?',
                content: '<form class="me-form" id="my-form" onsubmit="nextStep(); return false;"><div class="input-group w-50">\
                                <input id="input-data" type="text" class="form-control text-center" name="name" placeholder="Vorname Nachname" required>\
                            </div></form>'
            },
            {
                question: 'Wie lautet deine E-Mail-Adresse?',
                content: '  <form class="me-form" id="my-form" onsubmit="nextStep(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data" type="email" class="form-control text-center" name="mail" placeholder="E-Mail-Adresse" required>\
                                </div>\
                            </form>'
            },
            {
                question: 'Wann wurdest du Geboren?',
                content: '  <form class="me-form" id="my-form" onsubmit="nextStep(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data" type="text" pattern="[0-9\.]{10}" class="form-control text-center" name="birth" placeholder="Tag.Monat.Jahr" required>\
                                </div>\
                            </form>'
            },
            {
                question: 'Wie lautet dein Geburtsort?',
                content: '  <form class="me-form" id="my-form" onsubmit="nextStep(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data" type="text" minlength="2" class="form-control text-center" name="birthPlace" placeholder="Gebe hier deinen Geburtsort ein" required>\
                                </div>\
                            </form>'
            },
            {
                question: 'Wie sieht es mit deinem Familienstand aus?',
                content: '  <form class="me-form" id="my-form" onsubmit="nextStep(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data" type="text" class="form-control text-center" name="marital" placeholder="Familienstand: zb. Ledig, Verheiratet, etc." required>\
                                </div>\
                            </form>'
            },
            {
                question: 'Wie lautet deine Addresse?',
                content: '  <form class="me-form" id="my-form" onsubmit="nextStep(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data" type="text" class="form-control text-center" name="address" placeholder="Addresse: zb. Musterstrasse 42, 0000 Beispielsplatz" required>\
                                </div>\
                            </form>'
            },
        ]
    },
    {
        title: 'Kompetenzen',
        questions: [
            {
                question: 'Gebe hier deine Kompetenzen an. Gebe mindestens 4 an, dass Maximum ist 8.',
                content: '  <form class="me-form" id="my-form" onsubmit="nextStepSaveCompetence(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data1" type="text" class="form-control text-center" name="competence1" placeholder="Deine Lieblingseigenschaft" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data2" type="text" class="form-control text-center" name="competence2" placeholder="Deine Lieblingseigenschaft" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data3" type="text" class="form-control text-center" name="competence3" placeholder="Deine Lieblingseigenschaft" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data4" type="text" class="form-control text-center" name="competence4" placeholder="Deine Lieblingseigenschaft" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data5" type="text" class="form-control text-center" name="competence5" placeholder="Deine Lieblingseigenschaft">\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data6" type="text" class="form-control text-center" name="competence6" placeholder="Deine Lieblingseigenschaft">\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data7" type="text" class="form-control text-center" name="competence7" placeholder="Deine Lieblingseigenschaft">\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data8" type="text" class="form-control text-center" name="competence8" placeholder="Deine Lieblingseigenschaft">\
                                </div>\
                            </form>'
            },
        ]
    },
    {
        title: 'Erfahrungen',
        questions: [
            {
                question: 'Gebe hier deine Erfahrungen an, du kannst mit dem Hinzufügen Button, so viele Erfahrungen hinzufügen wie du willst',
                content: '  <form class="me-form" id="my-form1" onsubmit="nextStepSaveExp(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data1" type="text" class="form-control text-center" name="Berufsbezeichnung" placeholder="Berufsbezeichnung" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data2" type="text" class="form-control text-center" name="Arbeitgeber" placeholder="Arbeitgeber" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data3" type="text" class="form-control text-center" name="Anstellungszeit" placeholder="Anstellungszeit: zb. 08/1998 - 01/2000" required>\
                                </div>\
                            </form>\
                            <div style="margin: 0 auto;" class="d-flex justify-content-center align-items-center flex-column">\
                                <input style= "width: 400px;" id="input-data4" type="text" class="form-control text-center" name="Aufgaben" placeholder="Füge bis zu 6 Aufgaben deiner Erfahrung hinzu">\
                                <button style=" margin:24px 0!important;" onclick="addTaskToArray()" class="btn btn-secondary">Aufgabe hinzufügen</button>\
                            <div style="min-height: 40px;" class="form-control" id="display-tasks"></div>\
                            </div>\
                            '
            },
        ]
    },
]

function loadData() {
    document.getElementById('section-title').innerHTML = data[currentSection].title
    document.getElementById('question').innerHTML = data[currentSection].questions[currentQuestion].question
    document.getElementById('question-content').innerHTML = data[currentSection].questions[currentQuestion].content
    document.getElementById('question-counter').innerHTML = "Frage " + (currentQuestion + 1) + " / " + data[currentSection].questions.length
}

function nextStep() {
    if (currentSection + 1 === data.length) {
        currentSection = 0
    } else {
        if (currentQuestion + 1 === data[currentSection].questions.length) {
            currentSection++;
            currentQuestion = 0;
        } else {
            currentQuestion++;
        }
    }

    save();

    loadData();
}

function save() {
    let currentData = JSON.parse(localStorage.getItem('data'));
    currentData[document.getElementById('input-data').getAttribute('name')] = document.getElementById('input-data').value;
    localStorage.setItem('data', JSON.stringify(currentData));
}

function init() {
    loadData()
    localStorage.setItem('data', JSON.stringify({}))
}
/*** Bis hier Klemi Bang */

/* Andre */
function reInitCounter(z1) {
    currentSection = z1;
    currentQuestion = 0;
    if (currentSection === 2) {
        document.getElementById('next-btn').innerText = `Erfahrung hinzufügen`;
        tasks.splice(0, tasks.length);
    } else {
        document.getElementById('next-btn').innerText = `Nächste Frage`;
    }
    loadData();
}

function nextStepSaveCompetence() {
    if (currentSection + 1 === data.length) {
        currentSection = 0
    } else {
        if (currentQuestion + 1 === data[currentSection].questions.length) {
            currentSection++;
            currentQuestion = 0;
            if (currentSection === 2){
                document.getElementById('next-btn').innerText = `Erfahrung hinzufügen`;
                tasks.splice(0, tasks.length);
            } else {
                document.getElementById('next-btn').innerText = `Nächste Frage`;
            }
        } else {
            currentQuestion++;
        }
    }
    let currentData = JSON.parse(localStorage.getItem('data'));
    currentData[document.getElementById('input-data1').getAttribute('name')] = document.getElementById('input-data1').value;
    currentData[document.getElementById('input-data2').getAttribute('name')] = document.getElementById('input-data2').value;
    currentData[document.getElementById('input-data3').getAttribute('name')] = document.getElementById('input-data3').value;
    currentData[document.getElementById('input-data4').getAttribute('name')] = document.getElementById('input-data4').value;
    currentData[document.getElementById('input-data5').getAttribute('name')] = document.getElementById('input-data5').value;
    currentData[document.getElementById('input-data6').getAttribute('name')] = document.getElementById('input-data6').value;
    currentData[document.getElementById('input-data7').getAttribute('name')] = document.getElementById('input-data7').value;
    currentData[document.getElementById('input-data8').getAttribute('name')] = document.getElementById('input-data8').value;
    localStorage.setItem('data', JSON.stringify(currentData));
    loadData();
}

/* Baustelle (input feld lässt sich nicht leeren)*/
function addTaskToArray() {
    let taskinput = document.getElementById('input-data4').value;
    if (taskinput === ``) {
        alert('Du kannst keine Leere Aufgabe hinzufügen');
    } else {
        tasks.push(taskinput);
        loadTempTasks();
        taskinput.innerText = "";
    }
}
/* bis hier */

function loadTempTasks() {
    let taskDisplay = document.getElementById('display-tasks');
    taskDisplay.innerHTML = ``;
    for(i = 0; i < tasks.length; i++) {
        taskDisplay.innerHTML += `${tasks[i]}, `;
    }
}

/* Testarray */
let exp = [
    {
        berufsbezeichnung: "",
        arbeitgeber: "",
        anstellungszeit: "",
        aufgaben: []
    }
]

/* alt */

function generateInputAndButton() {
    let html = /*html*/`
                <div class="input-group w-50">
                    <input type="text" class="form-control" placeholder="Vorname Nachname">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Namen Hinzufügen</button>
                </div>
    `;
    return html;
}

function generateCard(cardTitle, cardQuestion) {
    let html = /*html*/`
    <div class="card-body">
        <span class="w-100 d-flex justify-content-center align-items-center me-margin-bottom-2"><h5 class="card-title display-5">${cardTitle}</h5></span>
        <p class="card-text me-flex-center" style="text-align: center;">${cardQuestion}</p>
    </div>
    <div class=" w-100 d-flex justify-content-center align-items-center" style="gap: 8px;" id="if">

    </div>
    <div class="card-body d-flex" style="padding: 4%;">
        <div class="me-card-next-frame">
            <span style="text-align: center;">Frage 1 / 1</span>
            <button id="next-btn" class="btn btn-primary">Nächste Frage</button>
        </div>
    </div>  
    `;
    return html;
}