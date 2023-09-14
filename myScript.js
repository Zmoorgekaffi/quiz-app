let myCurrentSection = 0;
let currentQuestion = 0;
let expCounter = 1;
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
                content: '  <form class="me-form" id="my-form" onsubmit="saveExp(); return false;">\
                                <div class="input-group w-50">\
                                    <input id="input-data1" type="text" class="form-control text-center" name="berufsbezeichnung" placeholder="Berufsbezeichnung" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data2" type="text" class="form-control text-center" name="arbeitgeber" placeholder="Arbeitgeber" required>\
                                </div>\
                                <div class="input-group w-50">\
                                <input id="input-data3" type="text" class="form-control text-center" name="ortschaft" placeholder="Gebe hier die Ortschaft des Betriebs ein" required>\
                                </div>\
                                <div class="input-group w-50">\
                                    <input id="input-data4" type="text" class="form-control text-center" name="anstellungszeit" placeholder="Anstellungszeit: zb. 08/1998 - 01/2000" required>\
                                </div>\
                             </form>\
                             <div style="margin: 0 auto;" class="d-flex justify-content-center align-items-center flex-column">\
                                 <input style= "width: 400px;" id="input-data5" type="text" class="form-control text-center" name="Aufgaben" placeholder="Füge bis zu 6 Aufgaben deiner Erfahrung hinzu">\
                                 <button style=" margin:24px 0!important;" onclick="addTaskToArray()" class="btn btn-secondary">Aufgabe hinzufügen</button>\
                             <div class="display-tasks form-control" id="display-tasks"></div>\
                             </div>\
                             '
            },
        ]
    },
    {
        title: 'Erfahrungen',
        questions: [
            {
                question: 'Gebe hier deine Ausbildungen an, du kannst mit dem Hinzufügen Button, so viele Ausbildungen hinzufügen wie du willst',
                content: '  <form class="me-form" id="my-form" onsubmit="saveApprentice(); return false;">\
                                 <div class="input-group w-50">\
                                     <input id="input-data1" type="text" class="form-control text-center" name="lehrstellenbezeichnung" placeholder="Lehrstellen-Bezeichnung" required>\
                                 </div>\
                                 <div class="input-group w-50">\
                                     <input id="input-data2" type="text" class="form-control text-center" name="arbeitgeber" placeholder="Arbeitgeber" required>\
                                 </div>\
                                 <div class="input-group w-50">\
                                     <input id="input-data3" type="text" class="form-control text-center" name="anstellungszeit" placeholder="Anstellungszeit: zb. 08/1998 - 01/2000" required>\
                                 </div>\
                             </form>\
                             <div style="margin: 0 auto;" class="d-flex justify-content-center align-items-center flex-column">\
                                 <input style= "width: 400px;" id="input-data4" type="text" class="form-control text-center" name="Aufgaben" placeholder="Füge bis zu 6 Aufgaben deiner Erfahrung hinzu">\
                                 <button style=" margin:24px 0!important;" onclick="addTaskToArray()" class="btn btn-secondary">Aufgabe hinzufügen</button>\
                             <div class="display-tasks form-control" id="display-tasks"></div>\
                             </div>\
                             '
            },
        ]
    },
]

function saveExp() {
    let currentData = JSON.parse(localStorage.getItem('exps'));
    let exp = [
        {
            title: `exp${expCounter}`,
            data: [
                {
                    berufsbezeichnung: `${document.getElementById('input-data1').value}`,
                    arbeitgeber: `${document.getElementById('input-data2').value}`,
                    ortschaft: `${document.getElementById('input-data3').value}`,
                    anstellungszeit: `${document.getElementById('input-data4').value}`,
                    aufgaben: [tasks]
                }
            ]
        }
    ]
    currentData.push(exp);
    localStorage.setItem('exps', JSON.stringify(currentData));
    tasks.splice(0, tasks.length);
    expCounter++;
    loadData();
}

function loadData() {
    document.getElementById('section-title').innerHTML = data[myCurrentSection].title
    document.getElementById('question').innerHTML = data[myCurrentSection].questions[currentQuestion].question
    document.getElementById('question-content').innerHTML = data[myCurrentSection].questions[currentQuestion].content
    document.getElementById('question-counter').innerHTML = "Frage " + (currentQuestion + 1) + " / " + data[myCurrentSection].questions.length
}

function save() {
    let currentData = JSON.parse(localStorage.getItem('data'));
    currentData[document.getElementById('input-data').getAttribute('name')] = document.getElementById('input-data').value;
    localStorage.setItem('data', JSON.stringify(currentData));
}

function SaveCompetence() {
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

function init() {
    loadData()
    localStorage.setItem('data', JSON.stringify({}));
    localStorage.setItem('exps', JSON.stringify([]));
}

function reInitCounter(z1) {
    myCurrentSection = z1;
    currentQuestion = 0;
    if (myCurrentSection === 2) {
        document.getElementById('next-btn').innerText = `Erfahrung hinzufügen`;
        tasks.splice(0, tasks.length);
    } else {
        document.getElementById('next-btn').innerText = `Nächste Frage`;
    }
    loadData();
}

function nextStep() {
    if (myCurrentSection + 1 === data.length) {
        myCurrentSection = 0
    } else {
        if (currentQuestion + 1 === data[myCurrentSection].questions.length) {
            myCurrentSection++;
            currentQuestion = 0;
        } else {
            currentQuestion++;
        }
    }
    save();
    loadData();
}

function nextStepSaveCompetence() {
    if (myCurrentSection + 1 === data.length) {
        myCurrentSection = 0
    } else {
        if (currentQuestion + 1 === data[myCurrentSection].questions.length) {
            myCurrentSection++;
            currentQuestion = 0;
            if (myCurrentSection === 2) {
                document.getElementById('next-btn').innerText = `Erfahrung hinzufügen`;
                tasks.splice(0, tasks.length);
            } else {
                document.getElementById('next-btn').innerText = `Nächste Frage`;
            }
        } else {
            currentQuestion++;
        }
    }
    SaveCompetence();
}

function addTaskToArray() {
    let taskinput = document.getElementById('input-data5');
    if (taskinput.value === ``) {
        alert('Du kannst keine Leere Aufgabe hinzufügen');
    } else {
        tasks.push(taskinput.value);
        loadTempTasks();
        taskinput.value = '';
    }
}


function loadTempTasks() {
    let taskDisplay = document.getElementById('display-tasks');
    taskDisplay.innerHTML = ``;
    for (i = 0; i < tasks.length; i++) {
        taskDisplay.innerHTML += `<span id="task${i}">${tasks[i]} <img onclick="deleteTask(${i})" class="delete-task" src="./img/circle-xmark-regular.svg">  </span>`;
    }
}

function deleteTask(p) {
    tasks.splice(p, 1);
    loadTempTasks();
}



