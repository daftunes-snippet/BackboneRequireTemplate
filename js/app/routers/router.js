define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home'
		},

		initialize: function (view) {
			this.appView = view;
		}
	});

	return Router;

});
