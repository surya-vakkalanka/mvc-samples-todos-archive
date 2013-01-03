enyo.kind({
	name: "TodoApp.ListsSelectedController",
    kind: "enyo.ModelController", 
    onInputChange: function(inSender, inEvent) {
        this.set(inEvent.originator.name, inEvent.originator.get("value"));
    },
    onInput: function(inSender, inEvent) {
        this.set(inEvent.originator.name, inEvent.originator.get("value"));
    }
});