class TopicFactory {
    static drawPlus() {
        return '<div id="topicPlus" class="col-xl-2 col-sm-2 p-5 m-auto" onclick="TopicFactory.add()">'
        + '<div class="card card-common pb-5 pt-5">'
        + '<div class="text-center">'
        + '<i class="fas fa-plus fa-2x text-success"></i>'
        + '</div></div></div>';
    }

    static drawCard() {
        return '<div class="topic-card col-xl-12 col-sm-12 p-2">'
        + '<div class= "card card-common">'
        + '<div class="card-body">'
        + '<div class="display-flex justify-content-between">'
        + '<i class="far fa-square fa-3x"></i>'
        + '<div class="text-right text-secondary">'
        + '<h5>Titel</h5>'
        + '<h6> 0 Dialoge </h6>'
        + '</div></div></div>'
        + '<div class="card-footer text-secondary">'
        + '<span> 0 Slots </span>'
        + '</div></div><div/>';
    }

    static add() {
        let row = $('#topicsWrapper .row');
        $('#topicPlus').remove();
        row.append(this.drawCard());
        row.append(this.drawPlus());

        window.scrollTo(0,document.body.scrollHeight);
    }
}

class BotFactory {
    static drawPlus() {
        return '<div id="botPlus" class="col-xl-3 col-sm-4 p-2" onclick="BotFactory.add()">'
        + '<div class="card card-common bg-warning">'
        + '<div class="card-body">'
        + '<div class="display-flex text-center">'
        + '<h5>&nbsp;</h5>'
        + '<i class="fas fa-plus fa-3x" style="color: #eee;"></i>'
        + '<h6>&nbsp;</h6>'
        + '</div></div>'
        + '<div class="card-footer text-center">'
        + '<b>Neuen Chatbot anlegen</b>'
        + '</div></div></div>';
    }

    static drawCard() {
        return '<div class="bot-card col-xl-3 col-sm-4 p-2" onclick="BotFactory.add()">'
        + '<div class="card card-common">'
        + '<div class="card-body">'
        + '<div class="display-flex justify-content-between">'
        + '<i class="far fa-square fa-3x"></i>'
        + '<div class="text-right text-secondary">'
        + '<h5>Titel</h5>'
        + '<h6>0 Konversationen</h6>'
        + '</div></div></div>'
        + '<div class="card-footer text-secondary">'
        + '<i class="fas fa-eye mr-3"></i>'
        + '<span>0</span>'
        + '</div></div></div>';
    }

    static add() {
        let row = $('#botWrapper .row');
        $('#botPlus').remove();
        row.append(this.drawCard());
        console.log("arsch");
        row.append(this.drawPlus());
    }
}