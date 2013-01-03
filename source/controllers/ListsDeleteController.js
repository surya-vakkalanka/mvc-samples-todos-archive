enyo.kind({
	name: "TodoApp.ListsDeleteController",
    handlers: {
	    ontap: "tapped"
	},
	tapped: function (inSender, inEvent) {
	    this.log(inEvent);
		TodoApp.listsController.removeTodoList(inEvent.index);
	}
});