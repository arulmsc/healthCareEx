// setings Configuration for initial loading libraries
require.config({
paths:{
		jquery:'../lib/jquery',
		underscore:'../lib/underscore',
		backbone:'../lib/backboneJs',
		handlebars:'../lib/handlebars',
		home:'../view/Home',		
		routers:'../view/Router',
		newModels:'../model/newModel',
		newCollections:'../collection/newCollection',
		commonCollection : '../js/commonCollection'
},
});
define(['home'],function(home){
new home();
})