'use strict';

    var app = angular.module('todo-directives', []);

    app.directive('taskTemplate', function () {
    	return {
    		restrict	:	'E',
    		templateUrl :	'views/task-template.html',
        controller  : function ($scope, $timeout, taskProvider, tagsProvider) {

            $scope.todos = taskProvider.getTodos();

            $scope.tagList = tagsProvider.getTags();

            $scope.currentTodo = {
              'text'          : '',
              'description'   : '',
              'tags'          : [],
              'duedate'       : '',
              'id'            : '',
              'color'         : '',
              'isDone'        : false
            };

            for (var i = 0; i < $scope.todos.length; i++) {
              $scope.todos[i].ready = $scope.todos[i].isDone;
            }

            $scope.getTodoTags = function(todo) {
              var todoTags = [];
              for (var i = 0; i < todo.tags.length; i++) {
                todoTags.push(tagsProvider.findTagById(todo.tags[i]));
              }
              return todoTags;
            }

            var todoToAdd = {};

            $scope.createTodo = function(todo){

              for (var i = 0; i < $scope.todos.length; i++) {
                $scope.todos[i].status = 'old';
              }

              $scope.todoTags = todo.tags.map( function (tags) {
                return tags.id;
              });

              $scope.newTodoDuedate = todo.duedate.getFullYear() + '-' + String(todo.duedate.getMonth()+1).replace(/^(.)$/, "0$1") +'-'+ String(todo.duedate.getDate()).replace(/^(.)$/, "0$1");

          		todoToAdd = {
                'text'          : todo.text,
                'description'   : todo.description,
                'tags'          : $scope.todoTags,
                'duedate'       : $scope.newTodoDuedate,
                'id'            : $scope.todos.length + 1,
                'color'         : todo.color,
                'isDone'        : false,
                'status'        : 'new'
          		};
              taskProvider.addTodo(todoToAdd);

              return true;
        	  }

            $scope.resetTodo = function (todo) {
                todo.text = '';
                todo.description = '';
                todo.tags = [];
                todo.duedate = '';
                todo.id = '';
                todo.color = '';
                todo.isDone = false;
            }

            $scope.updateStatusTodo = function(todo){
                todo.ready = !todo.isDone;
              $timeout(function() {
                todo.isDone = !todo.isDone;
              }, 400);
          	}

          	$scope.deleteTodo = function(index){
              taskProvider.removeTodo(index);
          	}

            $scope.isActual = function (duedate) {
              $scope.dtSDate = new Date(duedate);
              return new Date() < $scope.dtSDate;
            }

            $scope.editTodo = function (todo) {

              $scope.changedTodo = angular.copy(todo);
              $scope.changedTodo.duedate = new Date(todo.duedate);
              var tagsList = [];
              for ( var i=0 ; i< todo.tags.length ; i++) {
                tagsList.push(tagsProvider.findTagById(todo.tags[i]));
              }
              $scope.changedTodo.tags = tagsList;
              $scope.currentTodo = angular.copy($scope.changedTodo);
            }

            $scope.saveTodo = function (todo) {
              todo.tags = todo.tags.map( function (tag) {
                return tag.id;
              });
              todo.duedate = todo.duedate.getFullYear() + '-' + String(todo.duedate.getMonth()+1).replace(/^(.)$/, "0$1") +'-'+ String(todo.duedate.getDate()).replace(/^(.)$/, "0$1");
              taskProvider.updateTodo(todo.id, todo);              
            }

        },
        controllerAs: 'task'
    	};
    });

    app.directive('addPopup', function () {
        return {
            restrict    : 'E',
            templateUrl : 'views/add-popup.html',
            controller  : function ($scope, taskProvider, radioProvider) {
                $scope.radios = radioProvider.getRadio();
                $scope.selected = {index: null};

                $scope.submitForm = function (todo) {
                  if ($scope.popupState.isCreating) {
                    $scope.createTodo(todo);
                    $scope.resetTodo(todo);
                  }
                  if ($scope.popupState.isEditing) {
                    $scope.saveTodo(todo);
                    $scope.resetTodo(todo);
                  }
                }
            },
            controllerAs: 'popup'
        };
    });
