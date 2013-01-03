enyo.kind({
	name: "TodoApp.TodosAddController",
    handlers: {
	    ontap: "tapped"
	},
	tapped: function (inSender, inEvent) {
		TodoApp.todosController.addItem(inSender, inEvent);
	}
});