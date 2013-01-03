enyo.kind({
    name: "TodoApp.TodoHeader",
    kind: "onyx.Toolbar", 
    classes: "todoapp-toolbar",
    controller: "TodoApp.todosSelectedController",
    bindings: [
        {from: "controller.selected", to: "selected", oneWay: true},
        {from: "controller.title", to: "$.title.content", oneWay: true}
    ],
    create: function() {
        this.inherited(arguments);
        this.selectedChanged();
    },
    selectedChanged: function() {
        this.$.title.setShowing(this.selected);
    },
    components: [
        {kind: "onyx.Grabber"},
        {name: "title", content: "Todo Details", bindPropert: "title", bindTarget: "content"}
    ]
});