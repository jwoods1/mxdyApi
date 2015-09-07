/**
* Rounds.js
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
  		name:{
  			type:'string'
  		},
  		race_class_id:{
  			type:'integer',

  		},
  		created_at:{
  			type:'datetime'
  		},
  		updated_at:{
  			type:'datetime'
  		},
  		finished:{
  			type:'boolean'
  		},
  		start_time:{
  			type: 'datetime'
  		},
  		end_time:{
  			type: 'datetime'
  		},
  		pole_position_start:{
  			type:'datetime'
  		},
  		pole_position_end:{
  			type:'datetime'
  		}

  }
};

