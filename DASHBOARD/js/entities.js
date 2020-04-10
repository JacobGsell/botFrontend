class Topic {
    constructor(name, prev, next, icon) {
        this.name = name;
        this.prev = prev;
        this.next = next;
        this.icon = icon;
    }
    update() {
        let name = document.getElementById('topic-title');
        name.innerHTML = this.name + '<span class="badge badge-warning float-right"><i class="fas fa-pen"></i></span>';
        name.onclick = function () { Sidebar.EditTopicTitle() };
    }
}

let EmailTopic = new Topic("Email");
EmailTopic.update();