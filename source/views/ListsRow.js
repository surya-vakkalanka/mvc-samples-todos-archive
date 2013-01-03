enyo.kind({
    name: "TodoApp.ListsRow", 
    kind: "onyx.Item",
    classes: "todoapp-row", 
    controller: "TodoApp.ListsRowController", 
    components: [
        {
            kind: "onyx.InputDecorator",
            components: [
                {name: "title", kind: "onyx.Input", defaultFocus: true, oninput: "onInput", onchange: "onInputChange", bindProperty: "title", bindTarget: "value"}
            ]
        },
        {name: "deleteBtn", kind: "onyx.IconButton", src: "assets/remove-icon.png", showing: false, classes: "todoapp-remove-icon", ontap: "onDelete"}
    ]
});