/**
 * Race_classesController
 *
 * @description :: Server-side logic for managing race_classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function(req,res,next){
		
		var id = req.params.id;
		
		if(id){
			Race_classes.find({id: id}).populate('series_id').exec(function(err, rclass){
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
							cround.start = round.start_time;
							cround.end = round.end_time;
							cround.finished = round.finished;
							cround.polePositionStart = round.pole_position_start;
							cround.polePositionEnd = round.pole_position_end;
							rc.rounds.push(cround);
							
						}
						
					})
					
				})
				res.json(rclass);
			})
			
		})
		}else{
			Race_classes.find().populate('series_id').exec(function(err, rclass){
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
							cround.start = round.start_time;
							cround.end = round.end_time;
							cround.finished = round.finished;
							cround.polePositionStart = round.pole_position_start;
							cround.polePositionEnd = round.pole_position_end;
							rc.rounds.push(cround);
							
						}
						
					})
					
				})
				res.json(rclass);
			})
			
		})
	
		}
	},
};

