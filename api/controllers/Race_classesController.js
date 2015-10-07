/**
 * Race_classesController
 *
 * @description :: Server-side logic for managing race_classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function(req,res,next){
		Race_classes.find(function(err, rclass){
			_.forEach(rclass, function(r){
				r.rounds = [];
			});
			Rounds.find(function(err,rounds){
				
				_.forEach(rounds, function(round){
					
					_.forEach(rclass,function(rc){
						
						if(rc.id === round.race_class_id){
							var cround = {};
							cround.id = round.id;
							cround.name = round.name;
							rc.rounds.push(cround);
							
						}
						
					})
					
				})
				res.json(rclass);
			})
			
		})
	},
};

