/** Class that contains functions to control the sidebar */
class Sidebar {
    // Changes the icon of the active topic:

    /**
     * Changes the topic's icons.
     * @param  {Number} id The icon's id
     */
    static topicIcon(id) {
        // ToBeChanged:
        id = 1;

        $('#Topic_' + id + ' svg')[0].remove();
        $('#Topic_' + id + ' .card-body .display-flex').prepend(this.getIcon());
    }

    /**
     * Changes the bot's icons.
     * @param  {Number} id The bot's id
     */
    static botIcon(id) {
        // ToBeChanged:
        id = 1;

        $('#Bot_' + id + ' svg')[0].remove();
        $('#Bot_' + id + ' .card-body .display-flex').prepend(this.getIcon());
    }

    /**
     * Gets HTML of the FontAwesome-icons
     * @returns {String} The selected icon's HTML
     */
    static getIcon() {
        let icon = '';
        let value = parseInt($('#IconSelect').val());
        switch (value) {
            case 1:
                icon = '<i class="fas fa-exclamation fa-3x"></i>';
                break;

            case 2:
                icon = '<i class="fas fa-smile fa-3x"></i>';
                break;

            case 3:
                icon = '<i class="fas fa-moon fa-3x"></i>';
                break;

            case 4:
                icon = '<i class="fas fa-home fa-3x"></i>';
                break;

            case 5:
                icon = '<i class="fas fa-utensils fa-3x"></i>';
                break;

            case 6:
                icon = '<i class="fas fa-user fa-3x"></i>';
                break;

            case 7:
                icon = '<i class="fas fa-envelope fa-3x"></i>';
                break;

            default:
                icon = '';
                break;
        }
        return icon;
    }

    /**
     * Toggles whether the selected topic's slots are active or not
     * @param  {Number} id Topic's id
     */
    static ToggleTopicSlots(id) {
        // ToBeChanged:
        id = 1;

        let checked = $('#deActivateTopicSlots').is(':checked');

        // Store footer:
        $('#Topic_' + id + ' #heading_' + id + ' > .card-footer').css('display', checked ? 'none' : 'block');

        if (checked) {
            $('#Topic_' + id + ' .card-common').addClass('bg-dark');
            $('#Topic_' + id + ' .text-secondary, #Topic_' + id + ' .col-7 .card, #Topic_' + id + ' .card-body').addClass('text-light');
        }
        else {
            $('#Topic_' + id + ' .card-common').removeClass('bg-dark');
            $('#Topic_' + id + ' .text-secondary, #Topic_' + id + ' .col-7 .card, #Topic_' + id + ' .card-body').removeClass('text-light');
        }
    }

    /**
     * Toggles whether the selected topic is active or not
     * @param  {Number} id Topic's id
     */
    static ToggleTopic(id) {
        // ToBeChanged:
        id = 1;

        $('#Topic_' + id).css('opacity', $('#deActivateTopic').is(':checked') ? 0.3 : 1);
    }

    /**
     * Replaces the topic title by the edit field.
     */
    static EditTopicTitle() {
        $('#topic-title').css('display', 'none');
        $('#topic-title-edit').css('display', 'flex');
    }

    /**
     * Replaces the edit field by the topic title
     */
    static CloseTopicEdit() {
        $('#topic-title').css('display', 'block');
        $('#topic-title-edit').css('display', 'none');
    }

    /**
     * Replaces the bot title by the edit field 
     */
    static EditBotTitle() {
        $('#bot-title').css('display', 'none');
        $('#bot-title-edit').css('display', 'flex');
    }

    /**
     * Replaces the edit field by the bot title
     */
    static CloseBotEdit() {
        $('#bot-title').css('display', 'block');
        $('#bot-title-edit').css('display', 'none');
    }

    /**
     * Saves the created topic title and closes the edit field.
     * @param {Number} id Topic's id
     */
    static SaveTopicTitle(id) {
        // ToBeChanged:
        id = 1;

        let newTitle = $('#topic-title-edit input').val();

        if (!newTitle) {
            this.CloseDetailEdit();
            return
        }

        $('#topic-title').html(newTitle + '<span class="badge badge-warning float-right"><i class="fas fa-pen"></i></span>');
        $('#Topic_' + id + ' h5').html(newTitle);

        this.CloseTopicEdit();
    }

    /**
     * Saves the created bot title and closes the edit field.
     * @param  {Number} id Bot's id
     */
    static SaveBotTitle(id) {
        // ToBeChanged:
        id = 1;

        let newTitle = $('#bot-title-edit input').val();

        if (!newTitle) {
            this.CloseDetailEdit();
            return
        }
        $('#bot-title').html(newTitle + '<span class="badge badge-warning float-right"><i class="fas fa-pen"></i></span>');
        $('#Bot_' + id + ' h5').html(newTitle);

        this.CloseBotEdit();
    }

    static SaveDetailTitle(id) {
        // ToBeChanged:
        id = 4;
        let newTitle = $('#detail-title-edit input').val();

        if (!newTitle) {
            this.CloseDetailEdit();
            return
        }

        $('#detail-title').html(newTitle + '<span class="badge badge-warning float-right"><i class="fas fa-pen"></i></span>');
        $('#focus b').html(newTitle);

        this.CloseDetailEdit();
    }

    static EditDetailTitle(id) {
        $('#detail-title').css('display', 'none');
        $('#detail-title-edit').css('display', 'flex');
    }

    static CloseDetailEdit(id) {
        $('#detail-title').css('display', 'block');
        $('#detail-title-edit').css('display', 'none');
    }

    /**
     * Toggles whether the selected dialog needs a condition to be reached.
     */
    static ToggleCondition() {
        $('#ConditionWrapper').toggle();
        $('#focus .card-header').toggle();
    }

    static hideJump() {
        $('#focus .card-footer b').remove();
    }

    static showJump() {
        $('#focus .card-footer').show();
    }

    static changeJump() {
        $('#focus .card-footer b').html(this.getJump());
    }

    static getJump() {
        let jump = '';
        let value = parseInt($('#JumpWrapper select').val());

        // Muss später aus Datenbank geholt werden...
        switch (value) {
            case 1:
                jump = '[Name]';
                break;
            case 2:
                jump = '[Generelle Zufriedenheit]';
                break;

            default:
                jump = '[blanko]';
                break;
        }

        return jump;
    }

    static changeType() {
        $('#focus .card-footer svg').remove();
        $('#focus .card-footer').prepend(this.getType());
    }

    static getType() {
        let icon = '';
        let value = parseInt($('#TypeSelect').val());
        switch (value) {
            case 1:
                icon = '<i class="fas fa-ellipsis-h text-info fa-lg"></i>';
                $('#JumpWrapper').hide();
                this.hideJump();
                break;

            case 2:
                icon = '<i class="fas fa-question text-success fa-lg"></i>';
                $('#JumpWrapper').hide();
                this.hideJump();
                break;

            case 3:
                icon = '<i class="fas fa-arrow-right text-info fa-lg"></i><b class="text-info">&nbsp;</b>';
                $('#JumpWrapper').css('display', 'block');
                this.showJump();
                break;

            default:
                icon = '';
                $('#JumpWrapper').hide();
                this.hideJump();
                break;
        }
        return icon;
    }

    static ChangeSuccessor(self) {
        $('#successor_1 .dropdown-toggle').html($(self).html());
    }

    static ChangeConditionValue() {
        $('#focus-value').html(this.getConditionValue())
    }

    static getConditionValue() {
        return $('#ConditionWrapper input').val();
    }

    static ChangeConditionOperator() {
        $('#focus-operator').html(this.getConditionOperator());
    }

    static getConditionOperator() {
        let operator = '';
        let value = parseInt($('#ConditionSelect').val());
        switch (value) {
            case 1:
                operator = '>';
                break;

            case 2:
                operator = '<';
                break;

            case 3:
                operator = '=';
                break;

            default:
                operator = '!=';
                break;
        }
        return operator;
    }

    /**
     * Replaces the text field by the editor field
     */
    static EditPoolText(self) {       
        $(self).parent().parent().append(this.drawPoolEdit())
        $(self).parent().hide();
        $(self).parent().prev().hide();
    }

    static SavePoolEdit(self) {
        let newText = $('#pool-edit input').val();
        $(self).parent().parent().prev().prev().html(newText);
        this.ClosePoolEdit(self);
    }

    static ClosePoolEdit(self) {
        $(self).parent().parent().prev().prev().show();
        $(self).parent().parent().prev().show();
        $(self).parent().parent().remove();
    }

    static drawPoolEdit() {
        return '<div id="pool-edit" class="input-group mb-3">'
            + '<input type="text" class="form-control" placeholder="Neuer Text..." '
            + ' aria-label="Neuer Text..." aria-describedby="titel-save">'
            + '<div class="input-group-append">'
            + '<button class="btn btn-outline-success" type="button" onclick="Sidebar.SavePoolEdit(this)" id="titel-save">'
            + '<i class="fas fa-check"></i>'
            + '</button>'
            + '<button class="btn btn-outline-danger" type="button" onclick="Sidebar.ClosePoolEdit(this)" id="titel-cancel">'
            + '<i class="fas fa-times"></i>'
            + '</button>'
            + '</div></div>';
    }

    /**
     * Saves the edited input as the new text
     */
    static SaveTextPoolText() {

    }

    /**
     * Replaces the editor field by the text field
     */
    static CloseTextPoolText() {

    }
}