enyo.kind({
    name: "TodoApp.TodosCollectionController",
    kind: "enyo.CollectionRepeaterController",
    bindings: [
        {from: "TodoApp.listsSelectedController.todos", to: "collection", oneWay: false}
    ],
    addItem: function(inSender, inEvent) {
        var collection = this.collection;
        var index = (collection.length + 1);
        this.add({title: collection.model.prototype.defaults.title + " " + index});
        this.log(this.length);
    },
    removeItem: function(model) {
        var collection = this.collection;
        var index = collection.indexOf(model);
        if (index == -1) {
            this.error("Model " + model.id + " not found in collection");
            return;
        }
        var model = this.at(index);
        model.destroy();
        var nextIndex = Math.max(index - 1, 0);
        this.select(this.at(nextIndex));
    },
    removeAll: function() {
        if (this.get("filter") == "all") {
            this.reset();
        } else {
            var fc = this.get("filteredContent"), model;
            for (var i=0; i < fc.length; i++) {
                model = fc[i];
                model.destroy();
            };
        }
    },
    filteredContent: enyo.Computed(function () {
            var f = this.get("filter"), ret;
            if (f === "all") ret = this.get("models");
            else if (f === "done") ret = this.get("collection.doneList");
            else if (f === "active") ret = this.get("collection.activeList");
            else ret = [];
            return ret;
        }, "filter", "models"
    ),
    filteredContentChanged: function() {
        this.renderAllRows();
    },
    title: enyo.Computed(function() {
        return this.collection ? this.collection.title : '';
    }),
    data: enyo.Computed(function () {
        return this.get("filteredContent");
    }, "models", "filteredContent")
});