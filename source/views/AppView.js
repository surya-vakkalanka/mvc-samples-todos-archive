enyo.kind({
	name: "TodoApp.AppView",
	components:[
  		{
  			kind: "enyo.Panels", 
			arrangerKind: "CollapsingArranger", 
			classes: "enyo-fit",
			realtimeFit: true, 
			fit: true,
			components: [
				{kind: "TodoApp.ListsPanel"},
				{kind: "TodoApp.TodosPanel"},
				{kind: "TodoApp.TodoPanel", fit: true}
			]
  		}
    ]
});