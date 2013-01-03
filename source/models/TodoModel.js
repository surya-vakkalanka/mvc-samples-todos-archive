enyo.kind({
    name: "TodoApp.TodoModel",
    kind: "enyo.Model",
    defaults: {
        title: 'Todo Item',
        description: 'Details of the Todo Item', 
        selected: false, 
        done: false
    },
    localStorage: new Store("TodoApp.TodoModel"),
    validate: function(attrs) {
    	var errors = this.errors = {};
        if (!attrs.title) errors.title = 'title is required';
      	if (!_.isEmpty(errors)) return errors;
    }
});