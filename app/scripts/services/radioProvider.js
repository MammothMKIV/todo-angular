'use strict';

var radios = [
    {
        'color'     : 'brown',
        'checked'   : true
    }, {
        'color'     : 'darkseawave',
        'checked'   : false
    }, {
        'color'     : 'beige',
        'checked'   : false
    }, {
        'color'     : 'lightbrown',
        'checked'   : false
    }, {
        'color'     : 'lightseawave',
        'checked'   : false
    }, {
        'color'     : 'darkblue',
        'checked'   : false
    }
];

app.service('radioProvider',function(){

	this.getRadio = function(){
		return radios;
	}

});
