define(['newCollections'],function(newCollection) {

	var getCollectionRecord = function(objContext){
		var self = objContext;
		var thiscallback = {
		  success: self.render,
		  error: self.failure,
		  context: self
		};
		var collData = new newCollection([]);
		collectionResult = collData.fetch(thiscallback);
	}
	return {
		getCollectionRecord : getCollectionRecord
	}
})		