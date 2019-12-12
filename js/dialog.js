// Füge Konversationsblock ein
function addConvoBlock() {
    let tmp = document.createElement('div');
    let p = document.createElement('P');
    let main = document.querySelector('main');
    
    p.innerHTML = "Neuer Dialog";
    tmp.className = "convo_block";

    tmp.appendChild(p);
    main.prepend(tmp);
}