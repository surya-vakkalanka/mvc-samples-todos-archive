enyo.kind({
	name: "TodoApp.TodoDetail",
	layoutKind: "FittableRowsLayout",
    style: "background: #eee;", 
	classes: "todoapp-padded", 
    controller: "TodoApp.todosRowController", 
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
    		components: [
                {kind:"onyx.GroupboxHeader", content:"Summary"},
                {
                	kind:"onyx.InputDecorator", style:"background:white;", 
	                components: [
                        {name: "doneCheck", kind:"onyx.Checkbox", onchange: "onDoneChange"},
                		{name: "title", kind:"onyx.Input", oninput: "onInput"}
            		]
        		}
    		]
    	},
    	{
    		name: "descSection",
    		kind:"onyx.Groupbox", fit:true, layoutKind:"FittableRowsLayout", style:"padding-bottom:10px;height:100%;", 
    		components: [
        		{kind:"onyx.GroupboxHeader", content:"Details"},
        		{
        			kind:"onyx.InputDecorator", style:"background:white;height:100%;", fit:true, 
        			components: [
            			{name: "description", kind:"onyx.TextArea", style:"width: 100%;height:100%;background:white;", oninput: "onInput"}
        			]
        		}
    		]
    	},
        {
            name: "debugListSection",
            kind:"onyx.Groupbox", layoutKind:"FittableRowsLayout", style:"padding-bottom:10px;height:100%;", 
            components: [
                {kind:"onyx.GroupboxHeader", content:"Debug (Lists)"},
                {
                    kind:"onyx.InputDecorator", style:"background:white;height:100%;", fit:true, 
                    controller: "TodoApp.listsRowController",
                    bindings: [
                        {from: "controller.model.title", to: "$.listsTitle.content", oneWay: true},
                        {from: "controller.model.selected", to: "$.listsSelected.content", oneWay: true}
                    ],
                    components: [
                        {content: "Selected List Title"}, 
                        {name: "listsTitle"},
                        {tag: "hr"},
                        {content: "Selected"}, 
                        {name: "listsSelected"}
                    ]
                }
            ]
        },
        {
            name: "debugTodosSection",
            kind:"onyx.Groupbox", layoutKind:"FittableRowsLayout", style:"padding-bottom:10px;height:100%;", 
            components: [
                {kind:"onyx.GroupboxHeader", content:"Debug (Todos)"},
                {
                    kind:"onyx.InputDecorator", style:"background:white;height:100%;", fit:true, 
                    controller: "TodoApp.todosRowController",
                    bindings: [
                        {from: "controller.model.title", to: "$.todosTitle.content", oneWay: true},
                        {from: "controller.model.selected", to: "$.todosSelected.content", oneWay: true}
                    ],
                    components: [
                        {content: "Selected List Title"}, 
                        {name: "todosTitle"},
                        {tag: "hr"},
                        {content: "Selected"}, 
                        {name: "todosSelected"}
                    ]
                }
            ]
        }
	]
});