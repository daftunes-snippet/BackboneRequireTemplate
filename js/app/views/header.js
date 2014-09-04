define([
	'jquery',
	'backbone',
	'mustache'
],function($, Backbone, Mustache) {
	'use strict';

	var HeaderView = Backbone.View.extend({	
		
		id:'',
	
		html:[
			'<header><h>Todo List--</h></header>'
		].join(''),
	
	
		events: {
				'click #header': 'onClickHander'
		},	
		
		onClickHander: function (evt) {
			alert('This is a todo application.');
			
		},

		initialize: function (){
			
		},
		
		render: function() {
			this.$el.html(this.html);
			return this;
		}
	});

	return HeaderView;
});
