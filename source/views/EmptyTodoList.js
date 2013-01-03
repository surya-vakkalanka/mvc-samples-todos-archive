enyo.kind({
    name: "TodoApp.EmptyTodoList",
    classes: "todoapp-padded", 
    controller: "TodoApp.listsSelectedController",
    bindings: [
        {from: "controller.selected", to: "selected", oneWay: false},
        {from: "TodoApp.todosController.length", to: "length", oneWay: false}
    ],
    create: function() {
        this.inherited(arguments);
        this.selectedChanged();
    },
    selectedChanged: function() {
        if (this.selected) {
            this.setContent("No Todos found. You can create one by tapping on '+'.");
        } else {
            this.setContent("No TodoList selected.");
        }
    },
    lengthChanged: function() {
        this.setShowing(this.length == 0);
        this.parent.reflow();
    }
});