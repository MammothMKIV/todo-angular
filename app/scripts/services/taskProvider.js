'use strict';

var todos = [
    {
        'text'          : 'Buy the present for granny.',
        'description'   : '',
        'tags'          : [2, 3],
        'duedate'       : '2015-12-20',
        'id'            : '0',
        'color'         : 'brown',
        'isDone'        : true
    }, {
        'text'          : 'Call Dr.Shredinger and learn how his cat.',
        'description'   : '',
        'tags'          : [2],
        'duedate'       : '2017-04-30',
        'id'            : '1',
        'color'         : 'beige',
        'isDone'        : false
    }, {
        'text'          : 'Buy the tickets to the Moon.',
        'description'   : '',
        'tags'          : [2, 3, 4],
        'duedate'       : '2016-02-11',
        'id'            : '2',
        'color'         : 'darkseawave',
        'isDone'        : false
    }, {
        'text'          : 'Learn AngularJS.',
        'description'   : '',
        'tags'          : [1],
        'duedate'       : '2016-04-22',
        'id'            : '3',
        'color'         : 'lightbrown',
        'isDone'        : false
    }, {
        'text'          : 'Learn how to do templates for Wordpress.',
        'description'   : '',
        'tags'          : [1],
        'duedate'       : '2016-06-01',
        'id'            : '4',
        'color'         : 'beige',
        'isDone'        : false
    }, {
        'text'          : 'To visit in Tbilisi.',
        'description'   : '',
        'tags'          : [2],
        'duedate'       : '2016-10-01',
        'id'            : '5',
        'color'         : 'darkseawave',
        'isDone'        : false
    }, {
        'text'          : 'Learn ReactJS.',
        'description'   : '',
        'tags'          : [1],
        'duedate'       : '2016-08-25',
        'id'            : '6',
        'color'         : 'lightseawave',
        'isDone'        : false
    }, {
        'text'          : 'To pump the abdominals.',
        'description'   : '',
        'tags'          : [2, 3],
        'duedate'       : '2016-06-01',
        'id'            : '7',
        'color'         : 'lightseawave',
        'isDone'        : false
    }, {
        'text'          : 'Become sunburnt.',
        'description'   : '',
        'tags'          : [2],
        'duedate'       : '2016-05-15',
        'id'            : '8',
        'color'         : 'darkseawave',
        'isDone'        : true
    }, {
        'text'          : 'Learn BEM.',
        'description'   : '',
        'tags'          : [1],
        'duedate'       : '2016-07-25',
        'id'            : '9',
        'color'         : 'lightbrown',
        'isDone'        : false
    }
];

app.service('taskProvider',function(){

		this.getTodos = function(){
			return todos;
		}

		this.addTodo = function(todo){
			todos.push(todo);
		}

		this.removeTodo = function(id){
			for (var i = 0; i < todos.length; i++) {
        var currentTodo = todos[i];
        if ( currentTodo.id == id) {
          todos.splice(i, 1);
          break;
        }
      }
		}

		this.updateTodo = function(id, el){
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
          angular.copy(el, todos[i]);
          break;
        }
      }
      console.log(el);
		}
});
