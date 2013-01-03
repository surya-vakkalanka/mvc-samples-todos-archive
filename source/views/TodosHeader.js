enyo.kind({
    name: "TodoApp.TodosHeader",
    kind: "onyx.Toolbar", 
    classes: "todoapp-toolbar",
    layoutKind: "FittableColumnsLayout", 
    controller: "TodoApp.listsSelectedController",
    bindings: [
        {from: "controller.title", to: "$.title.value", oneWay: false},
        {from: "controller.selected", to: "selected", oneWay: true},
        {from: "TodoApp.todosController.length", to: "length", oneWay: true}
    ], 
    create: function() {
        this.inherited(arguments);
        this.selectedChanged();
        this.lengthChanged();
    },
    selectedChanged: function() {
        this.$.title.setShowing(this.selected);
        this.$.addButton.setShowing(this.selected);
        this.reflow();
    },
    lengthChanged: function() {
        this.$.clearButton.setShowing(this.length > 0);
        this.reflow();
    },
    components: [
        {kind: "onyx.Grabber"},
        {name: "title", kind:"onyx.Input", fit: true, oninput: "onInput", onchange: "onInputChange", placeholder: "Todos"},
        {name: "clearButton", kind: "onyx.Button", content: "Clear Shown", controller: "TodoApp.TodosClearController", ontap: "removeAll", classes: "onyx-negative"},
        {name: "addButton", kind: "onyx.Button", content: "+", controller: "TodoApp.TodosAddController", classes: "onyx-affirmative"}
    ]
});