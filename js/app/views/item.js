define([
	'jquery',
	'underscore',
	'backbone',
	'mustache',
	'app/models/itemModel'
], function ($, _, Backbone, Mustache, ItemModel) {

	'use strict';

	var ItemView = Backbone.View.extend({

		model: new ItemModel(),

		template: [
			'<item>',
			'<p>{{title}}</p>',
			'<button type="button">EDIT</button>',
			'</item>'
		].join(''),

		initialize: function() {
			this.model.on('change', this.render, this);
		},

		events: {
			'click button': 'onClickHandler'
		},

		onClickHandler: function (evt) {
			console.log(this.model.get('title'));
			var editedItem = prompt(this.model.get('title'));
			this.model.set('title', editedItem);
		},

		render: function() {
			
			var _html = Mustache.to_html(this.template, this.model.toJSON());

			console.log(this.model, _html);
			this.$el.html(_html);
			return this;
		}

	});

	return ItemView;
});