enyo.kind({
    name: "TodoApp.ListsRowController",
    kind: "enyo.ModelController",
    handlers: {
    	onhold: "onHoldRow"
    },
    onDelete: function (inSender, inEvent) {
        TodoApp.listsController.removeItem(this.model);
    },
    onInput: function(inSender, inEvent) {
        this.set(inEvent.originator.name, inEvent.originator.get("value"));
    },
    onInputChange: function(inSender, inEvent) {
        this.set(inEvent.originator.name, inEvent.originator.get("value"));
    },
    onHoldRow: function(inSender, inEvent) {
    	this.owner.$.deleteBtn.setShowing(true);
    },
    selectedChanged: function() {
    	this.owner.$.deleteBtn.setShowing(false);	
    }
});