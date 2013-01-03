enyo.kind({
    name: "TodoApp.TodosRowController",
    kind: "enyo.ModelController",
    handlers: {
        onhold: "onHoldRow"
    },
    onDoneCheck: function(inSender, inEvent) {
        this.model.set("done", inEvent.originator.get("checked"));
    },
    onDelete: function (inSender, inEvent) {
        TodoApp.todosController.removeItem(this.model);
    },
    onInput: function(inSender, inEvent) {
        this.set(inEvent.originator.name, inEvent.originator.get("value"));
    },
    onInputChange: function(inSender, inEvent) {
        this.model.set(inEvent.originator.name, inEvent.originator.get("value"));
    },
    onHoldRow: function(inSender, inEvent) {
        if (this.owner)
            this.owner.$.deleteBtn.setShowing(true);
    },
    selectedChanged: function() {
        if (this.owner)
            this.owner.$.deleteBtn.setShowing(false);
    }
});