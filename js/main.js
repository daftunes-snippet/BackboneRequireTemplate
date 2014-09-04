require.config({

	paths: {
		'jquery': 'libs/jquery-1.10.1.min',
		'underscore': 'libs/underscore',
		'mustache': 'libs/mustache',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'backbone.localStorage': 'libs/backbone.localStorage'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		},
		'mustache' : {
			exports: 'Mustache'
		}
	}

});

require([
	'backbone',
	'app/app'
], function (Backbone, App) {
	'use strict';

	App.initialize();

});







