'use strict';

var tags = [
    {
        'id'     : 1,
        'name'   : 'work'
    }, {
        'id'     : 2,
        'name'   : 'home'
    }, {
        'id'     : 3,
        'name'   : 'hobby'
    }, {
        'id'     : 4,
        'name'   : 'purchases'
    }
];

app.service('tagsProvider',function(){

	this.getTags = function(){
		return tags;
	}

  this.findTagById = function (id) {
    var result;
    tags.some( function(tag) {
      if ( tag.id == id) {
        result = tag;
        return true;
      }
    });
    return result;
  }
  
  this.findTagByName = function (name) {
    var result;
    tags.some( function(tag) {
      if ( tag.name == name) {
        result = tag;
        return true;
      }
    });
    return result;
  }
});
