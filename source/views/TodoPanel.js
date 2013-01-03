enyo.kind({
	name: "TodoApp.TodoPanel",
	layoutKind: "FittableRowsLayout", 
	style: "background: #fff;",
	components: [
		{kind: "TodoApp.TodoHeader"},
		{kind: "TodoApp.TodoDetail", fit: true},
		{kind: "onyx.Toolbar", classes: "todoapp-toolbar", components: [ {kind: "onyx.Grabber"} ]}
	]
});