enyo.kind({
    name: "TodoApp.TodoCollection",
    kind: "enyo.Collection",
    model: "TodoApp.TodoModel",
    published: {
    	title: 'Todos'
    },
    localStorage: new Store("TodoApp.TodoCollection"),
    /*
    didAdd: function (model, collection, params) {
        this.log("Saving Todo model ", model);
        this.inherited(arguments);
        model.save();
    },
    didRemove: function (model) {
        this.inherited(arguments);
        model.destroy();
    },
    */
    activeList: enyo.Computed(function () {
       return enyo.filter(this.models, function (model) {
            return !model.get("done");
       });
    }),
    doneList: enyo.Computed(function () {
        return enyo.filter(this.models, function (model) {
            return model.get("done");
        });
    })
});