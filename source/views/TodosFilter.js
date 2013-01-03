enyo.kind({
    name: "TodoApp.TodosFilter",
    kind: "onyx.RadioGroup", 
    controller: "TodoApp.TodosFilterController", 
    bindings: [
        {from: "controller.filter", to: "filter"},
        {from: "TodoApp.todosController.length", to: "length"}
    ],
    create: function() {
        this.inherited(arguments);
        this.lengthChanged();
    },
    lengthChanged: function() {
        this.setShowing(this.length > 0);
        this.parent.reflow();
    },
    components: [
        {name: "all", content: "All", active: true},
        {name: "active", content: "Active"},
        {name: "done", content: "Done"}
    ]
});