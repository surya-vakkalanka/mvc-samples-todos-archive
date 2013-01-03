enyo.kind({
	name: "TodoApp.TodoDetail",
	layoutKind: "FittableRowsLayout",
    style: "background: #eee;", 
	classes: "todoapp-padded", 
    controller: "TodoApp.todosSelectedController", 
	bindings: [
		{from: "controller.title", to: "$.title.value"},
		{from: "controller.description", to: "$.description.value"},
		{from: "controller.done", to: "$.doneCheck.checked"},
        {from: "controller.selected", to: "selected"}
	],
	create: function() {
		this.inherited(arguments);
		this.selectedChanged();
	},
    selectedChanged: function() {
    	this.$.titleSection.setShowing(this.selected);
		this.$.descSection.setShowing(this.selected);
	},
	components: [
    	{
    		name: "titleSection",
    		kind:"onyx.Groupbox", style:"padding-bottom:10px;", 
            controller: "TodoApp.todosSelectedController", 
    		components: [
                {kind:"onyx.GroupboxHeader", content:"Summary"},
                {
                	kind:"onyx.InputDecorator", style:"background:white;", 
                    controller: "TodoApp.todosSelectedController", 
	                components: [
                        {name: "doneCheck", kind:"onyx.Checkbox", onchange: "onDoneCheck"},
                		{name: "title", kind:"onyx.Input", oninput: "onInput", style: "margin-left: 10px;"}
            		]
        		}
    		]
    	},
    	{
    		name: "descSection",
    		kind:"onyx.Groupbox", fit:true, layoutKind:"FittableRowsLayout", style:"padding-bottom:10px;height:100%;", 
            controller: "TodoApp.todosSelectedController", 
    		components: [
        		{kind:"onyx.GroupboxHeader", content:"Details"},
        		{
        			kind:"onyx.InputDecorator", style:"background:white;height:100%;", fit:true, 
        			components: [
            			{name: "description", kind:"onyx.TextArea", style:"width: 100%; height:100%; background:white; padding: 10px;", oninput: "onInput"}
        			]
        		}
    		]
    	}
	]
});