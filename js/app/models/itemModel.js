define([
	'backbone'
],function(Backbone) {
	'use strict';

	var ItemModel =  Backbone.Model.extend({
		defaults: {
			title:'Return the itme'
		},
		parse: function (data) {
			var map = {
				
			};
			return map;
		}
	});

	return ItemModel;
});