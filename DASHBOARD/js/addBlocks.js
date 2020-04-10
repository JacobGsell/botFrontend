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