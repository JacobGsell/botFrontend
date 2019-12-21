// Dialog or Topic page
const isDialog = (window.location.href.indexOf('dialog.html') > -1) ? true : false;

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

        let ul = document.querySelector('.possible_answers');

        // First remove all entries for Answers
        let child = ul.lastElementChild;
        while (child) {
            ul.removeChild(child);
            child = ul.lastElementChild;
        }
        // Add title again:
        let text_wrapper = makeClassedElem('div', 'text-wrapper');
        let p = document.createElement('p');
        p.innerHTML = 'Mögliche Antworten';
        ul.appendChild(text_wrapper.appendChild(p));

        // Then Append the new ones

        for (let index = 0; index < this.possibleAnswers.length; index++) {
            let text_option = makeClassedElem('div', 'text_option');
            let h6 = document.createElement('h6');
            let lastText = makeClassedElem('div', 'lastText');
            let p = document.createElement('p');

            h6.innerHTML = 'Option';
            p.innerHTML = this.possibleAnswers[index];

            text_option.appendChild(h6);
            lastText.appendChild(p);
            text_option.appendChild(lastText);
            ul.appendChild(text_option);
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


let NewConvoBlock = makeAddConvoBlock();

let TextBlocks = [];
TextBlocks['answers'] = makeAddTextBlock('answers');
TextBlocks['texts'] = makeAddTextBlock('texts');



// Prints Topics
function printTopic(name) {
    testTopics[name].show();
}

// Print Dialogs
function printDialog(name) {
    testDialogs[name].show();
}

function printBlank() {
    if (isDialog) {
        new dialog("---", "---", [], 0).show();
    }
    else {
        new topic("---", "---", "---").show();
    }
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
    main.appendChild(NewConvoBlock);
}

// Add block for possible texts
function addTextBlock(block) {
    let div = document.createElement('div');
    let textarea = document.createElement('textarea');
    let h6 = document.createElement('h6');
    let holder = document.querySelector('.possible_' + block);

    div.className = "text_option";
    h6.innerHTML = "Option";

    div.appendChild(h6);
    div.appendChild(textarea);
    div.onclick = function () {
    }

    holder.appendChild(div);

    document.querySelector('.possible_' + block + ' > .add_text').remove()
    holder.appendChild(TextBlocks[block]);
}

function makeAddConvoBlock() {
    let add_block = makeClassedElem('div', 'add_block');
    let text_wrapper = makeClassedElem('div', 'text-wrapper');
    let plusIcon = makeClassedElem('i', 'fas fa-plus-circle');

    add_block.appendChild(text_wrapper.appendChild(plusIcon));
    add_block.onclick = function () { addConvoBlock(); }

    return add_block;
}

function makeAddTextBlock(block) {
    let add_block = makeClassedElem('div', 'add_text');
    let text_wrapper = makeClassedElem('div', 'text-wrapper');
    let plusIcon = makeClassedElem('i', 'fas fa-plus-circle');

    add_block.appendChild(text_wrapper.appendChild(plusIcon));
    plusIcon.onclick = function () { addTextBlock(block); }

    return add_block;
}

// Helper function for creating stuff
function makeClassedElem(tag, className) {
    let div = document.createElement(tag);
    div.className = className;
    return div;
}