/**
* Users.js
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
  		email:{
  			type:'string'
  		},
  		username:{
  			type:'string',
  		},
  		encrypted_password:{
  			type:'string',

  		},
  		reset_password_token:{
  			type:'string',

  		},
  		reset_password_sent_at:{
  			type:'datetime',

  		},
  		last_sign_in_at:{
  			type:'datetime',
  		},
  		address_1:{
  			type:'string',
  		},
  		address_2:{
  			type:'string',
  		},
  		state:{
  			type:'string',
  		},
  		zip:{
  			type:'string',
  		},
  		city:{
  			type:'string',
  		},
  		phone:{
  			type:'string',
  		},
  		point_total:{
  			type:'integer',
  		},
  		name:{
  			type:'string',
  		},
  		admin:{
  			type:'boolean',
  		},

  		created_at:{
  			type:'datetime'
  		},
  		updated_at:{
  			type:'datetime'
  		}
  		
	}
};

