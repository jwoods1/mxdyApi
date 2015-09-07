/**
* Rider_positions.js
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
  			primaryKey: true
  		},
  		round_id:{
  			type: 'integer'
  		},
  		rider_id:{
  			owner:{
          model: 'Riders'
        }

  		},
  		position:{
  			type:'integer'
  		},
  		created_at:{
  			type:'datetime'
  		},
  		updated_at:{
  			type:'datetime'
  		},
  		user_id:{
  			type:'integer'
  		},
  		score:{
  			type:'integer'
  		}
  }
};

