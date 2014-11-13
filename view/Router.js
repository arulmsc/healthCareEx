define(['jquery','underscore','backbone','handlebars','home'],function(jquery, underscore, backbone, handlebars,home) {
var test = Backbone.Router.extend({			
	routes:{
		'empedit/:id':'renderempeditView',		
		},		
		renderempeditView:function(id){			
			var homeViews = new empeditview({router:this,editId:id});	 // the right hand side new homeView this will be in the top in function inside variable	 		
        }
});
return test; // need to return all the Fn
});