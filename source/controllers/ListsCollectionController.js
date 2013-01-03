enyo.kind({
    name: "TodoApp.ListsCollectionController",
    kind: "enyo.CollectionRepeaterController",
    collection: "TodoApp.todoListCollection",
    addItem: function(inSender, inEvent) {
        var index = (this.collection.length + 1);
        this.add({
            title: this.collection.model.prototype.defaults.title + ' ' + index,
            todos: new TodoApp.TodoCollection()
        });
    },
    removeItem: function(model) {
        var index = this.collection.indexOf(model);
        if (index == -1) {
            this.error("Model " + model.id + " not found in collection");
            return;
        }
        this.remove(this.at(index));
        var nextIndex = Math.max(index - 1, 0);
        this.select(this.at(nextIndex));
    },
    removeAll: function(inSender, inEvent) {
        this.reset();
        inSender.owner.hideDialog();
    },
    title: enyo.Computed(function() {
        return this.collection ? this.collection.title : '';
    })
});