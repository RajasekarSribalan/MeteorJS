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

Template.todo.events({
  "click input" : function(){
    var isDone = Todos.findOne({_id: this._id}).done;
    Todos.update({_id: this._id},{$set : {done : !isDone}});
  },

  "click .delete": function (){
    Todos.remove({_id: this._id});
  }
});


Template.todo.helpers({
  done: function () {
    return Todos.findOne({_id: this._id}).done;
  }
});