/**
 * ClassSeriesController
 *
 * @description :: Server-side logic for managing classseries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('lodash');
module.exports = {
	get: function(req,res,next){
		Series.find(function(err, series){
			_.forEach(series, function(ser){
				ser.raceclasses = [];
			});
			ClassSeries.find(function(err,classSeries){
				
				_.forEach(classSeries, function(cs){
					
					_.forEach(series,function(series){
						
						if(series.id === cs.seriesid){
							var raceClass = {};
							raceClass.id = cs.classid;
							raceClass.name = cs.class;
							series.raceclasses.push(raceClass);
						}
						console.log(series.raceclasses);
					})
					
				})
				res.json(series);
			})
			
		})
	}
};

