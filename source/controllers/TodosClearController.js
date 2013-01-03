enyo.kind({
	name: "TodoApp.TodosClearController",
    handlers: {
	    ontap: "tapped"
	},
	tapped: function (inSender, inEvent) {
		TodoApp.todosController.removeAll();
	}
});