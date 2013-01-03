enyo.ready(function() {

    /*
    enyo.singleton({
        name: "TodoApp.todoListCollection",
        kind: "TodoApp.TodoListCollection"
    });
        
    enyo.singleton({
        name: "TodoApp.todosController",
        kind: "TodoApp.TodosCollectionController"
    });
    enyo.singleton({
        name: "TodoApp.todosSelectedController",
        kind: "enyo.ModelController",
        onInput: function(inSender, inEvent) {
            this.model.set(inEvent.originator.name, inEvent.originator.get("value"));
        },
        onDoneChange: function(inSender, inEvent) {
            this.model.set("done", inEvent.originator.get("checked"));
        },
        modelChanged: function() {
            this.inherited(arguments);
            if (!this.model)
                this.set("model", new TodoApp.TodoModel());
        }
    });
    enyo.singleton({
        name: "TodoApp.todosRowController",
        kind: "TodoApp.TodosRowController"
    });
    
    enyo.singleton({
        name: "TodoApp.listsController",
        kind: "TodoApp.ListsCollectionController"
    });
    enyo.singleton({
        name: "TodoApp.listsSelectedController",
        kind: "enyo.ModelController",
        modelChanged: function() {
            this.inherited(arguments);
            if (!this.model)
                this.set("model", new TodoApp.TodoListModel());
            TodoApp.todosController.set("collection", this.model.todos);
        },
        onInput: function(inSender, inEvent) {
            this.model.set(inEvent.originator.name, inEvent.originator.get("value"));
        }
    });
    enyo.singleton({
        name: "TodoApp.listsRowController",
        kind: "TodoApp.ListsRowController"
    });
    */

});