enyo.kind({
	name: "TodoApp.App",
	kind: "enyo.Application",
	bindings: [
		{from: "listsController.selection", to: "listsSelectedController.model"},
		{from: "todosController.selection", to: "todosSelectedController.model"}
	],
	controllers: [
        {name: "todoListCollection", kind: "TodoApp.TodoListCollection"},

        {name: "listsSelectedController", kind: "TodoApp.ListsSelectedController"},
        {name: "listsController", kind: "TodoApp.ListsCollectionController"},
		
		{name: "todosSelectedController", kind: "TodoApp.TodosSelectedController"},
		{name: "todosController", kind: "TodoApp.TodosCollectionController"}
	],
	view: "TodoApp.AppView"
});