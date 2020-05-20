/** Class responsible for creating new topic cards */
class TopicFactory {
    static show(self) {
        //alert($(self).find('h5').html());
    }

    /**
     * Prepares the HTML for a new plus button
     * @returns {String} HTML structure
     */
    static drawPlus() {
        return '<div id="topicPlus" class="col-xl-2 col-sm-2 p-5 m-auto" onclick="TopicFactory.add()">'
            + '<div class="card card-common pb-5 pt-5">'
            + '<div class="text-center">'
            + '<i class="fas fa-plus fa-2x text-success"></i>'
            + '</div></div></div>';
    }

    static drawAccordion() {
        return '<!-- New accordion -->'
            + '<div class="accordion col-xl-12 col-sm-12 p-0" id="Topic_arsch">'
            + this.drawCard()
            // + '<div id="collapseArsch" class="collapse" aria-labelledby="#headingArsch">'
            // + '<div class="col-7 m-auto">'
            // + TopicDetailFactory.drawPlus()
            + '</div>'
            + '<div id="collapseArsch" class="collapse" aria-labelledby="#headingArsch">'
            + '<div class="col-7 m-auto">'
            + TopicDetailFactory.drawPlus()
            + '</div></div>'
            + '<!-- check -->'
            + '<!-- End of new accordion -->';
    }


    /**
     * Prepares the HTML for a new topic card
     * @returns {String} HTML structure
     */
    static drawCard() {
        return '<div class="topic-card col-xl-12 col-sm-12 p-2">'
            + '<div class="card card-common" onclick="TopicFactory.show(this)" '
            + 'type="button" id="headingArsch" data-toggle="collapse" data-target="#collapseArsch"'
            + 'aria-expanded="true" aria-controls="collapse-1">'
            + '<span class="badge badge-info">-1</span>'
            + '<div class="card-body">'
            + '<div class="display-flex justify-content-between">'
            + '<div class="text-right text-secondary">'
            + '<h5>Titel</h5>'
            + '<h6> 0 Dialoge </h6>'
            + '</div></div></div>'
            + '<div class="card-footer text-secondary">'
            + '<span> 0 Slots </span>'
            + '</div></div><div/>';
    }

    /**
     * Adds a new topic card
     */
    static add() {
        let row = $('#topicWrapper');
        $('#topicPlus').remove();
        row.append(this.drawAccordion());
        row.append(this.drawPlus());

        window.scrollTo(0, document.body.scrollHeight);
    }
}

class TopicDetailFactory {

    static drawPlus() {
        return '<div id="topicDetailPlus" '
            + 'class="card card-common col-3 p-4 ml-auto mr-auto mb-3 text-center" '
            + ' onclick="TopicDetailFactory.add(this)">'
            + '<div class="text-center">'
            + '<i class="fas fa-plus fa-2x text-info"></i>'
            + '</div></div>';
    }

    static drawCard() {
        return '<div class="topic-detail-card col-xl-12 col-sm-12 p-2">'
            + '<div class="card card-common">'
            + '<span class="badge badge-dark">0</span>'
            + '<div class="card-body">'
            + '<b class="text-left"> text </b>'
            + '</div>'
            + '<div class="card-footer text-info">'
            + '<i class="fas fa-ellipsis-h text-info fa-lg"></i>'
            + '</div></div></div>';
    }

    static add(self) {
        let row = $(self).parent();
        $(self).remove();
        row.append(this.drawCard());
        row.append(this.drawPlus());
    }
}

/** Class responsible for creating new bot cards */
class BotFactory {

    static show(self) {
        alert($(self).find('h5').html());
    }

    /**
     * Prepares the HTML for a new plus button
     * @returns {String} HTML structure
     */
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

    /**
     * Prepares the HTML for a new bot card
     * @returns {String} HTML structure
     */
    static drawCard() {
        return '<div class="bot-card col-xl-3 col-sm-4 p-2">'
            + '<div class="card card-common" onclick="BotFactory.show(this)">'
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

    /**
     * Adds a new bot card
     */
    static add() {
        let row = $('#botWrapper .row');
        $('#botPlus').remove();
        row.append(this.drawCard());
        row.append(this.drawPlus());
    }
}

/** Class responsible for creating new text pools in detail view */
class ButtonPoolFactory {
    /**
     * Prepares the HTML for a new plus button
     * @returns {String} HTML structure
     */
    static drawPlus() {
        return '<li id="ButtonPoolPlus" class="buttonpool-card list-group-item text-center">'
            + '<i class="fas fa-plus-square fa-lg text-warning" onclick="ButtonPoolFactory.add()">'
            + '</li>';
    }

    /**
     * Prepares the HTML for a new text block
     * @returns {String} HTML structure
     */
    static drawText() {
        return '<li class="list-group-item">'
            + '<span style="display: inline;" class="small font-weight-bold">'
            + 'Pooliger Text'
            + '</span>'
            + '<div style="display: inline;" class="col-6">'
            + '<i class="fas fa-trash-alt text-danger float-right" onclick="ButtonPoolFactory.delete(this)"></i>'
            + '<i class="fas fa-pen rounded text-secondary mr-2 float-right" onclick="Sidebar.EditButtonPoolText(this)"></i>'
            + '</div>'
            + '</li>';
    }

    /**
     * Adds a new text block to the text pool
     */
    static add() {
        let row = $('#ButtonPoolWrapper');
        $('#ButtonPoolPlus').remove();
        row.append(this.drawText());
        row.append(this.drawPlus());

        Sidebar.updateButton();
    }

    static delete(self) {
        $(self).parent().parent().remove();
        Sidebar.updateButton();
    }
}

/** Class responsible for creating new text pools in detail view */
class TextPoolFactory {
    /**
     * Prepares the HTML for a new plus button
     * @returns {String} HTML structure
     */
    static drawPlus() {
        return '<li id="TextPoolPlus" class="textpool-card list-group-item text-center">'
            + '<i class="fas fa-plus-square fa-lg text-warning" onclick="TextPoolFactory.add()">'
            + '</li>';
    }

    /**
     * Prepares the HTML for a new text block
     * @returns {String} HTML structure
     */
    static drawText() {
        return '<li class="list-group-item">'
            + '<span style="display: inline;" class="small font-weight-bold">'
            + 'Pooliger Text'
            + '</span>'
            + '<div style="display: inline;" class="col-6">'
            + '<i class="fas fa-trash-alt text-danger float-right" onclick="TextPoolFactory.delete(this)"></i>'
            + '<i class="fas fa-pen rounded text-secondary mr-2 float-right" onclick="Sidebar.EditPoolText(this)"></i>'
            + '</div>'
            + '</li>';
    }

    /**
     * Adds a new text block to the text pool
     */
    static add() {
        let row = $('#TextPoolWrapper');
        $('#TextPoolPlus').remove();
        row.append(this.drawText());
        row.append(this.drawPlus());

        Sidebar.updateNoticeText();
        Sidebar.updateQuestionText();
    }

    static delete(self) {
        $(self).parent().parent().remove();

        Sidebar.updateNoticeText();
        Sidebar.updateQuestionText();        
    }
}

/** Class responsible for creating new possible successors for a dialog */
class SuccessorFactory {
    /**
     * Prepares the HTML for a new plus button
     * @returns {String} HTML structure
     */
    static drawPlus() {
        return '<li id="SuccessorPlus" class="successor-card list-group-item text-center">'
            + '<i class="fas fa-plus-square fa-lg text-warning" onclick="SuccessorFactory.add()">'
            + '</li>';
    }

    /**
     * Prepares the HTML for a new successor of the current dialog
     * @returns {String} HTML structure
     */
    static drawText() {
        return '<li id="successor_n" class="list-group-item">'
            + '<input type="hidden" id="s_d_n" name="s_d" value="n">'
            + '<div class="dropdown">'
            + '<div style="display: inline-block;" class="col-6 display-inline dropdown-toggle" type="button" '
            + 'id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
            + 'N - ###'
            + '</div>'
            + '<div style="display: inline;" class="col-6">'
            + '<i class="fas fa-trash-alt text-danger float-right" onclick="SuccessorFactory.delete(this)"></i>'
            + '</div>'
            + '<input type="text" class="form-control form-control-sm" placeholder="Text">'
            + '<div id="successor-menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">'
            + '<a class="dropdown-item small font-weight-bold" href="#" onclick="Sidebar.ChangeSuccessor(this)">1 - Hervorr...</a>'
            + '<a class="dropdown-item small font-weight-bold" href="#" onclick="Sidebar.ChangeSuccessor(this)">2 - Was möc...</a>'
            + '<a class="dropdown-item small font-weight-bold" href="#" onclick="Sidebar.ChangeSuccessor(this)">3 - Bild</a>'
            + '<a href="#" class="dropdown-item small font-weight-bold" onclick="Sidebar.ChangeSuccessor(this)">4 - Ihre be...</a>'
            + '<a href="#" class="dropdown-item small font-weight-bold" onclick="Sidebar.ChangeSuccessor(this)">5 - Möchten...</a>'
            + '</div></div></li>'
    }

    /**
     * Adds a new successor to the list of successors.
     */
    static add() {
        let row = $('#SuccessorWrapper');
        $('#SuccessorPlus').remove();
        row.append(this.drawText());
        row.append(this.drawPlus());
    }

    static delete(self) {
        $(self).parent().parent().parent().remove();
    }
}

class ConditionFactory {
    static drawSlotContainer() {
        return '<div class="ConditionWrapper shadow p-1 rounded text-center mb-3">'
            + '<input style="display: inline;" type="text" onchange="Sidebar.ChangeConditionValue(this)" '
            + 'class="float-left col-6 form-control ml-auto mr-auto mb-1" placeholder="Slotname" aria-label="Username" aria-describedby="basic-addon1"'
            + 'style="display: flex;"> '
            + this.drawCheckbox()
            + '<input style="display: inline;" type="text"'
            + 'class="col-12 form-control" placeholder="Kommentar" aria-label="Username" aria-describedby="basic-addon1"'
            + 'style="display: flex;">'
            + '</div>'
    }

    static drawConditionLinker() {
        return '<div id="condition-linker" class="mb-4">'
            + '<div class="col-12 text-center ml-auto mr-auto">'
            + '<button onclick="ConditionFactory.addAnd()" class="btn btn-secondary float-left mb-2" type="button">Und</button>'
            + '<button onclick="ConditionFactory.delete(this)" class="btn btn-danger float-right" type="button"><i class="fas fa-trash"></i></button>'
            + '</div></div>';
    }

    static drawPeacefulLinker() {
        return '<div id="peaceful-linker" class="mb-4">'
            + '<div class="col-12 text-center m-auto">'
            + '<button onclick="ConditionFactory.addAnd()" class="btn btn-secondary float-left" type="button">Und</button>'
            + '</div></div>';
    }

    static drawCheckbox() {     
        let randy = Math.floor(Math.random() * 10)   
        return '<div class="rounded float-right col-6 mt-1">'
            + '<div class="custom-control custom-checkbox mb-4">'
            + '<input type="checkbox" class="custom-control-input" id="req_' + randy + '"'
            + 'onclick="">'
            + '<label class="custom-control-label text-dark small font-weight-bold" for="req_' + randy + '">Erforderlich</label>'
            + '</div></div>'
    }

    static addAnd() {
        let row = $('#condition-linker').parent();
        $('#condition-linker').remove();
        row.append(this.drawSlotContainer());
        row.append(this.drawConditionLinker());

        $('#focus .header-slot-container').append('<div class="focus-value ml-1 badge badge-light">{{}}</div>')
    }

    static delete(self) {
        let headerLength = $('#focus .header-slot-container').children().length;
        //headerLength = headerLength > 2 ? headerLength : 1;
        //alert(headerLength-1)
        $('#focus .header-slot-container').children()[headerLength - 1].remove();

        let parent = $(self).parent().parent();
        parent.prev().remove();

        if (parent.parent().children().length == 3) {
            parent.children().children()[1].remove();
        }
    }
}

class DetailFactory {
    static show(self) {
        alert($(self).find('.card-body>b').html());
    }
}