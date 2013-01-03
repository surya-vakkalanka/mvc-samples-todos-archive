enyo.kind({
    name: "TodoApp.ListsHeader",
    kind: "onyx.Toolbar", 
    layoutKind: "FittableColumnsLayout", 
    classes: "todoapp-toolbar",
    controller: "TodoApp.listsController", 
    bindings: [
        {from: "controller.title", to: "$.title.content"},
        {from: "controller.length", to: "length"}
    ],
    create: function() {
        this.inherited(arguments);
        this.lengthChanged();
    },
    lengthChanged: function() {
        this.$.clearBtn.setShowing(this.length > 0);
        this.reflow();
    },
    components: [
        {name: "title", content: "", fit: true},
        {name: "clearBtn", kind: "onyx.Button", content: "Clear All", ontap: "showDialog", classes: "onyx-negative"},
        {name: "addBtn", kind: "onyx.Button", content: "+", classes: "onyx-affirmative", ontap: "addItem"},
        {name: "confirm", kind: "enyo.Popup", floating: true, centered: true, showing: false, 
            style: "background-color: #444; color: #fff; border-radius: 6px; padding: 20px;", 
            components: [
                {content: "Are you sure you want to delete all TodoLists?", style: "margin-bottom: 20px;"},
                {name: "removeAllBtn", kind: "onyx.Button", content: "Yes, Delete!", style: "margin-right: 20px;", classes: "onyx-affirmative", ontap: "removeAll"},
                {name: "cancelBtn", kind: "onyx.Button", content: "No, Cancel!", classes: "onyx-negative", ontap: "hideDialog"}
            ]
        }
    ],
    showDialog: function() {
        this.$.confirm.show();
    },
    hideDialog: function() {
        this.$.confirm.hide();
    }
});