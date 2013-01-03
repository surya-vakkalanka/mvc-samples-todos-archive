enyo.kind({
    name: "TodoApp.TodosPanel",
    style: "width:25%; min-width: 320px; background: #ddd;",
    layoutKind: "FittableRowsLayout", 
    components: [
        {kind: "TodoApp.TodosHeader"},
        {
            name: "todosContent", fit: true,
            components: [
                {kind: "TodoApp.EmptyTodoList"},
                {
                    name: "todosList",
                    controller: "TodoApp.todosController",
                    kind: "enyo.CollectionRepeater", 
                    components: [
                        {name: "item", kind: "TodoApp.TodosRow"}
                    ]
                }
            ]
        },
        {
            kind: "onyx.Toolbar", classes: "todoapp-toolbar", layoutKind: "FittableColumnsLayout", 
            components: [
                {kind: "onyx.Grabber"},
                {fit: true},
                {kind: "TodoApp.TodosFilter"}
            ]
        }
    ]
});