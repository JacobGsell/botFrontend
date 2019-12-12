class topic {
    constructor(name, prev, next) {
        this.name = name
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

// Test-Objects
const Tagesablauf = new topic("Tagesablauf", "---", "Essverhalten");
const Essverhalten = new topic("Essverhalten", "Tagesablauf", "Generelle Zufriedenheit");
const GenZuf = new topic("Generelle Zufriedenheit", "Essverhalten", "Kundenzufriedenheit");
const KunZuf = new topic("Kundenzufriedenheit", "Generelle Zufriedenheit", "---");

let testies = [];
testies["Tagesablauf"] = Tagesablauf;
testies["Essverhalten"] = Essverhalten;
testies["GenZuf"] = GenZuf;
testies["KunZuf"] = KunZuf;

const NewBlock = makeAddBlock();

// Prints Topics
function printTopic(name) {
    testies[name].show();
}

// Add conversation block
function addConvoBlock() {
    let tmp = document.createElement('div');
    let p = document.createElement('P');
    let main = document.querySelector('main');

    p.innerHTML = "Neuer Dialog";
    tmp.className = "convo_block";

    tmp.appendChild(p);
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