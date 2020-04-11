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
        $('#Topic_' + id + ' #heading_'+id+ ' > .card-footer').css('display', checked ? 'none' : 'block');

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

        if(!newTitle) this.CloseTopicEdit();

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

        if(!newTitle) this.CloseTopicEdit();

        $('#bot-title').html(newTitle + '<span class="badge badge-warning float-right"><i class="fas fa-pen"></i></span>');
        $('#Bot_' + id + ' h5').html(newTitle);

        this.CloseBotEdit();
    }
}