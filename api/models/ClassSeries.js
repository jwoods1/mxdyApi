/**
* ClassSeries.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
  		seriesid:{
  			type: 'integer',
  			primaryKey: true
  		},
  		series:{
  			type:'string'
  		},
  		seriescost:{
  			type:'integer',

  		},
  		roundcost:{
  			type:'integer'
  		},
  		classid:{
  			type:'integer'
  		},
  		class:{
  			type:'string'
  		}
	}
};

