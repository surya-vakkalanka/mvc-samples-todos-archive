enyo.kind({
    name: "TodoApp.TodosRow", 
    kind: "onyx.Item",
    classes: "todoapp-row", 
    controller: "TodoApp.TodosRowController", 
    components: [
        {name: "doneCheck", kind: "onyx.Checkbox", onchange: "onDoneCheck", bindProperty: "done", bindTarget: "checked"},
        {
            kind: "onyx.InputDecorator",
            style: "margin-left: 10px;", 
            components: [
                {name: "title", kind: "onyx.Input", defaultFocus: true, oninput: "onInput", onchange: "onInputChange", bindProperty: "title", bindTarget: "value"}
            ]
            
        },
        {name: "deleteBtn", kind: "onyx.IconButton", showing: false, src: "assets/remove-icon.png", classes: "todoapp-remove-icon", ontap: "onDelete"}
    ]
});