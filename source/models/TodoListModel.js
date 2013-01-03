enyo.kind({
    name: "TodoApp.TodoListModel",
    kind: "enyo.Model",
    defaults: {
        title: 'TodoList',
        selected: false,
        todos: new TodoApp.TodoCollection()
    },
    localStorage: new Store("TodoApp.TodoListModel"),
    validate: function(attrs) {
    	var errors = this.errors = {};
      	if (!attrs.title) errors.title = 'title is required';
      	if (!_.isEmpty(errors)) return errors;
    }
});