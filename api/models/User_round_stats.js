/**
* User_round_stats.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
  		id:{
  			type: 'integer',
  			
  		},
  		round_id:{
  			type:'integer',

  		},
  		series_id:{
  			type:'integer',

  		},
  		race_class_id:{
  			type:'integer',

  		},
  		user_id:{
  			type:'integer',
  			primaryKey: true

  		},
  		rider_score:{
  			type:'integer',

  		},
  		heat_winner_score:{
  			type:'integer',

  		},
  		pole_position_score:{
  			type:'integer',

  		},
  		hole_shot_score:{
  			type:'integer',

  		},
  		created_at:{
  			type:'datetime'
  		},
  		updated_at:{
  			type:'datetime'
  		},
  		total:{
  			type:'integer'
  		},
  		paid_round_license:{
  			type:'boolean',

  		},
  		paid_race_class_license:{
  			type:'boolean',

  		}
     
	}

};

