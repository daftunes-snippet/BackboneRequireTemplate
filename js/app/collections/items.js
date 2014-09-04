define([
	'backbone',
	'app/models/itemModel'
],function(Backbone, ItemModel) {
	'use strict';

	var ItemsCollection =  Backbone.Collection.extend({
	
		model: ItemModel
	
		// sync: function(method, model, options){  
	
		// 	options.timeout = 8000;  
		// 	options.dataType = "jsonp";
		// 	return Backbone.sync(method, model, options);  
			
		// },
	
		// parse: function(response) {
			
		// 	return response.path;
	
		// }
	});

	return ItemsCollection;
});