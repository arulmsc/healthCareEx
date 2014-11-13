define([ 'jquery', 'underscore', 'backbone', 'handlebars', 'newCollections','routers','commonCollection'], function(jquery, underscore, backbone, handlebars, newcollection,gayu,commonCollection) {	 
	var homeView = Backbone.View.extend({
		 el: $('body'), // attaches `this.el` to an existing element.
		 dynamicId: 0,
		 collectionResult: '',
		 
		initialize : function() {		
			_.bindAll(this, 'render','getCollectionData');		 
			this.routerObj = new gayu();			
			Backbone.history.start({hashChange: true, root: "stockticker/index.hbs"});			
			this.getCollectionData();			
		},
		render : function(res,flag) {
			console.log(res);
				var viewInfo = {'data':res.models[0].attributes.stockDetails};
				console.log('viewInfo ',viewInfo);
				var source   = $("#questionTemplate").html();
				var template = Handlebars.compile(source);			
				var ht = this.$el.find('#gridContent').append(template(viewInfo));
		},
		failure:function(){
			console.log("ERROR FETCHING COLLECTION DATA");
		},
		getCollectionData : function(){
			commonCollection.getCollectionRecord(this);			
		}
	});
	return homeView;
});