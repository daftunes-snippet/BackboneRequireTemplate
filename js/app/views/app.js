define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/header',
	'app/views/item'
], function ($, _, Backbone, HeaderView, ItemView) {

	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view',

		html: [

		].join(''),

		events: {
			
		},

		views: {},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);

			this.views.header = new HeaderView({
				id: 'header'
			});

			this.views.item = new ItemView();
			
			this.$el.append(this.views.header.render().el);
			this.$el.append(this.views.item.render().el);
			$('body').append(this.render().el);
		},

		render: function() {
			
			return this;
		}
	});

	return AppView;
});