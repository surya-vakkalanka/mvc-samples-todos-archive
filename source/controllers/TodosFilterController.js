enyo.kind({
	name: "TodoApp.TodosFilterController",
	handlers: {
	    ontap: "tapped"
	},
	filter: 'all',
	bindings: [
		{from: "filter", to: "TodoApp.todosController.filter"}
	],
	tapped: function (inSender, inEvent) {
		var f = inSender.name;
		this.log(f);
		this.set("filter", f);
	}
});