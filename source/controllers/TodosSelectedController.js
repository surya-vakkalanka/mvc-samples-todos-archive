enyo.kind({
	name: "TodoApp.TodosSelectedController",
    kind: "enyo.ModelController",
    onInput: function(inSender, inEvent) {
        this.model.set(inEvent.originator.name, inEvent.originator.get("value"));
    },
    onDoneCheck: function(inSender, inEvent) {
    	this.model.set("done", inEvent.originator.get("checked"));
    }
});