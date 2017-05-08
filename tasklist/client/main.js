import { Session } from 'meteor/session'
import { Mongo } from 'meteor/mongo'

Todos = new Mongo.Collection("todos");

Template.todoList.helpers({
  todos: function () {
    return Todos.find();
  }
});

Template.todoList.events({
  "click .add-todo": function () {
    Todos.insert({
      label:"New todo345",
      createdAt:new Date()
    })
  }
});
