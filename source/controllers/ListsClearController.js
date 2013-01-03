enyo.kind({
	name: "TodoApp.ListsClearController",
    handlers: {
	    ontap: "tapped"
	},
	tapped: function (inSender, inEvent) {
		this.owner.owner.$.confirm.hide();
		TodoApp.listsController.removeAll();
	}
});