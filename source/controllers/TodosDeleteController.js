enyo.kind({
	name: "TodoApp.TodosDeleteController",
    handlers: {
	    ontap: "tapped"
	},
	tapped: function (inSender, inEvent) {
		TodoApp.todosController.removeTodo(inEvent.index);
	}
});