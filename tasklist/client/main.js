import { Session } from 'meteor/session'
Session.set("todos", [
  { label: "Buy milk", done: true },
  { label: "Upload photos" },
  { label: "Dess up quickly" }
]);


Template.todoList.helpers({
  todos: function () {
    return Session.get("todos");
  }
});

Template.todoList.events({
  "click .add-todo": function () {
    console.log("added todos...");
    var todos = Session.get("todos");
    todos.push({
      label: "New todo"
    });

    Session.set("todos", todos)
  }
});
