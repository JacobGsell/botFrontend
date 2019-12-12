class topic {
    constructor(name, prev, next) {
        this.name = name;
        this.prev = prev;
        this.next = next;
    }
    show() {
        let name = document.querySelector('.convo_name');
        name.innerHTML = this.name;

        let selects = document.querySelectorAll('select');
        let prev = selects[0].querySelector('option');
        let next = selects[1].querySelector('option');

        prev.innerHTML = this.prev;
        next.innerHTML = this.next;
    }
}

class dialog {
    constructor(name, type, possibleAnswers, timeout) {
        this.name = name;
        this.type = type;
        this.possibleAnswers = [];
        this.possibleAnswers = possibleAnswers;
        this.timeout = timeout;
    }
    show() {
        let name = document.querySelector('.convo_name');
        name.innerHTML = this.name;

        let selects = document.querySelectorAll('select');
        let typeOption = selects[0].querySelector('option');
        typeOption.innerHTML = this.type;

        let input = document.querySelector('input[type=number]');
        input.value = this.timeout;

        let ul = document.querySelector(".possible_answers ul");

        // First remove all entries for Answers
        let child = ul.lastElementChild;
        while (child) {
            ul.removeChild(child);
            child = ul.lastElementChild;
        }

        // Then Append the new ones

        for (let index = 0; index < this.possibleAnswers.length; index++) {
            let li = document.createElement('li');
            li.innerHTML = this.possibleAnswers[index];
            ul.appendChild(li);
        }
    }
}

// Test-Topics
const Tagesablauf = new topic("Tagesablauf", "---", "Essverhalten");
const Essverhalten = new topic("Essverhalten", "Tagesablauf", "Generelle Zufriedenheit");
const GenZuf = new topic("Generelle Zufriedenheit", "Essverhalten", "Kundenzufriedenheit");
const KunZuf = new topic("Kundenzufriedenheit", "Generelle Zufriedenheit", "---");

// Test-Dialogs
const Fruehstueck = new dialog("Frühstück", "Frage", ["Marmeladenbrot", "Kaffee", "Spiegelei", "Joghurt"], 0);
const Duschen = new dialog("Duschen", "Frage", ["ja", "nein", "vielleicht"], 2);
const GuteNacht = new dialog("Gute Nacht", "Aussage", [], 1);

let testTopics = [];
testTopics["Tagesablauf"] = Tagesablauf;
testTopics["Essverhalten"] = Essverhalten;
testTopics["GenZuf"] = GenZuf;
testTopics["KunZuf"] = KunZuf;

let testDialogs = [];
testDialogs['Fruehstueck'] = Fruehstueck;
testDialogs['Duschen'] = Duschen;
testDialogs['GuteNacht'] = GuteNacht;


let NewBlock = makeAddBlock();

// Prints Topics
function printTopic(name) {
    testTopics[name].show();
}

// Print Dialogs
function printDialog(name) {
    testDialogs[name].show();
}

function printBlank() {
    new dialog("---", "---", [], 0).show();
    new topic("---", "---", "---").show();
}

// Add conversation block
function addConvoBlock() {
    let tmp = document.createElement('div');
    let p = document.createElement('P');
    let main = document.querySelector('main');

    p.innerHTML = "Neuer Dialog";
    tmp.className = "convo_block";

    tmp.appendChild(p);
    tmp.onclick = function () {
        printBlank();
    }
    
    main.appendChild(tmp);

    document.querySelector('.add_block').remove()
    main.appendChild(NewBlock);
}

function makeAddBlock() {
    let add_block = makeClassedElem('div', 'add_block');
    let text_wrapper = makeClassedElem('div', 'text-wrapper');
    let plusIcon = makeClassedElem('i', 'fas fa-plus-circle');

    add_block.appendChild(text_wrapper.appendChild(plusIcon));
    add_block.onclick = function () { addConvoBlock(); }

    return add_block;
}

// Helper function for creating stuff
function makeClassedElem(tag, className) {
    let div = document.createElement(tag);
    div.className = className;
    return div;
}