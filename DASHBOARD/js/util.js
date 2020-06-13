function log(title=null, content)
{
    if(title){
        console.log(title, content)
    }

    else {
        console.log(content)
    }
}

function json2Intent(json) {
    // Topic:
    log(json);
    let botName = json.Metadata.name;
    log("Name of bot: ", botName);
    let intents = json.Content.intents;
    log("Intents: ", intents);
    let dialogs = intents[0].dialogs;
    log("Dialog of 0: ", dialogs);
}

