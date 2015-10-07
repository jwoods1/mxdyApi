/**
 * Series_objectController
 *
 * @description :: Server-side logic for managing series_objects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var _ = require('lodash');
 
module.exports = {
	find: function(req,res,next){
		var id = req.params.id;
		
		 var idShortCut = isShortcut(id);
	
			if (idShortCut === true) {
				return next();
			}
		
		Series_object.find(function(err, series){
			
			var series_list = [];
			var objects = [];
			
			if(series === undefined)return res.notFound();
			
			if(err) return next(err);
			
			var s = [];
			_.forEach(series, function(series){
				s.push(series.series_id);
			})
			var ss = _.uniq(s);
			objects.push(ss);
			
			/*
			for (var i = 0; i < series.length; i++) {
				var object = {};
				var item = series[i];
				object.seriesId = item.series_id;
				if(objects.length < 1){
					objects.push(object);
				}
				for (var j = 0; j < objects.length; j++) {
					var element = objects[j];
					
					if(element.seriesId === item.series_id){
						if(element.classId === undefined){
							element.classId = item.class_id;
						}else if(element.classId === item.class_id){
							if(element.rounds === undefined){
								element.rounds = ['']
							}
						}
						
					}
					
				}
				}
			*/
				
				
				
				
				
				
				
			
			res.json(objects);
			
		});
		
		 function isShortcut(id) {
            if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
                return true;
            }
        }
	}
};

