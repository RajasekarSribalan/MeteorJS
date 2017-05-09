import { Session } from 'meteor/session'
import { Mongo } from 'meteor/mongo'

Todos = new Mongo.Collection("todos");

Session.set("sortOrder",1);

Template.todoList.helpers({
  todos: function () {
    return Todos.find({},{sort : {createdAt: Session.get("sortOrder")}});
  }
});

Template.todoList.events({
  "click .add-todo": function () {
    Todos.insert({
      label:"New todo345",
      createdAt:new Date()
    })
  },
  "click #reverse-sort": function(){
    Session.set("sortOrder",Session.get("sortOrder") * -1);
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