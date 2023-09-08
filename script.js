let cVProcess = [
    {
        'title': 'Persönliche Daten',
        'question1': 'Wie lautet dein Vor und Nachname?',
        'question2': 'Wie lautet deine E-mail?',
        'question3': 'Wann wurdest du geboren?',
        'question4': 'Welches ist dein Geburtsort?',
        'question5': 'Wie ist dein Familienstand?',
        'question6': 'Wie lautet deine Addresse?',
        'question7': 'Besitzt du einen Führerschein?'
    },
    {
        'title': 'Kompetenzen',
        'question1': 'Gebe hier, bis zu 8 verschiedene Kompetenzen ein. Füge sie mit dem Button "hinzufügen" hinzu. Bedenke, nur die ersten 8 werden auch später angezeigt',
    },
    {
        'title': 'Erfahrung',
        'question1': 'Gebe hier deine Erfahrungen ein. Du kannst so viele Aufgaben zu einer Erfahrung hinzufügen wie du möchtest. Du kannst eben so viele Erfahrungen hinzufügen.'
    },
    {
        'title': 'Ausbildung',
        'question1': 'Ähnlich wie bei den Erfahrungen, kannst du hier die Daten deine Ausbildung angeben. Hast du Mehrere Ausbildungs stellen gehabt? Dann kannst du auch hier mehrere Ausbildungsplätze hinzufügen.'
    },
    {
        'title': 'Sprachen',
        'question1': 'Welche Sprachen sprichst du? du kannst in den Sprachen Input die Sprache nennen und im zweiten input, den Beherrschungsgrad auswählen.'
    }
]

function loadPersDataInput() {
    let display = document.getElementById('card-content-frame');
    display.innerHTML = ``;
    display.innerHTML += `${generateCard(cVProcess[0].title, cVProcess[0].question1)}`
    document.getElementById('if').innerHTML += `${generateInputAndButton()}`;
}

function generateInputAndButton() {
    let html = /*html*/`
    <input type="text" placeholder="Vorname Nachname"><button class="btn btn-secondary">Füge deinen Namen hinzu</button>
    `;
    return html;
}

function generateCard(cardTitle, cardQuestion) {
    let html = /*html*/`
    <div class="card-body">
        <span class="w-100 d-flex justify-content-center align-items-center me-margin-bottom-2"><h5 class="card-title display-5">${cardTitle}</h5></span>
        <p class="card-text" style="text-align: center;">${cardQuestion}</p>
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