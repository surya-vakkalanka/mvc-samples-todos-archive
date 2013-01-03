enyo.kind({
    name: "TodoApp.TodoListCollection",
    kind: "enyo.Collection",
    model: "TodoApp.TodoListModel",
    localStorage: new Store("TodoApp.TodoListCollection"),
    published: {
    	title: 'TodoLists'
    },
    didAdd: function (model, collection, params) {
        this.log("Saving TodoList model ", model);
    	model.save();
        this.inherited(arguments);
  	},
    didRemove: function (model, collection, params) {
        this.log("Destroying TodoList model ", model);
        model.destroy();
        this.inherited(arguments);
    },
    didReset: function (collection, params) {
        this.log("Destroying TodoListCollection ", collection);
        this.inherited(arguments);
    }
});