/**
* Series_object.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  autoCreatedAt: false,
	autoUpdatedAt: false,
  	attributes: {
  		series_id:{
  			type: 'integer',
  			primaryKey: true
  		},
  		series_name:{
  			type: 'string'
  		},
  		round_id:{
  			type: 'integer'
  		},
  		round_name:{
  			type: 'string'
  		},
  		class_id:{
  			type: 'integer'
  		},
  		class_name:{
  			type:'string'
  		},
  		rider_id:{
  			type:'integer'
  		},
  		rider_name:{
  			type:'string'
  		}
  }
};

