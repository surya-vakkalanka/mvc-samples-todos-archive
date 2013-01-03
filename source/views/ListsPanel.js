enyo.kind({
    name: "TodoApp.ListsPanel",
    style: "width:25%; min-width: 320px; background: #ccc;",
    layoutKind: "FittableRowsLayout", 
    components: [
        {kind: "TodoApp.ListsHeader"},
        {
            name: "listsContent",
            fit: true,
            components: [
                {
                    name: "empty", classes: "todoapp-padded", content: "No TodoLists found. Create one by tapping on '+'.", 
                    controller: "TodoApp.listsController", 
                    bindings: [
                        {from: "controller.length", to: "length"}
                    ],
                    lengthChanged: function() {
                        this.setShowing(this.length == 0);
                    }
                },
                {
                    name: "listsList",
                    kind: "enyo.CollectionRepeater", 
                    controller: "TodoApp.listsController", 
                    components: [
                        {name: "item", kind: "TodoApp.ListsRow"}
                    ]
                }
            ]
        },
        {kind: "TodoApp.ListsFooter"}
    ]
});