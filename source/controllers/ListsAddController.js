enyo.kind({
	name: "TodoApp.ListsAddController",
    handlers: {
	    ontap: "tapped"
	},
	tapped: function (inSender, inEvent) {
		TodoApp.listsController.addTodoList({});
	}
});