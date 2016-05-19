'use strict';

var filters = [
    {
        'status'    : 'all',
        'text'      : 'All Tasks'
    },
    {
        'status'    : 'toDo',
        'text'      : 'Incomplete Tasks'
    },
    {
        'status'    : 'complete',
        'text'      : 'Complete Tasks'
    }
];

app.service('filterProvider',function(){

	this.getFilters = function(){
		return filters;
	}

});
