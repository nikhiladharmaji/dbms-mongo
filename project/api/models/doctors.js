/**
 * Doctors.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    id: {
        type: 'string',
        columnName: '_id'
    },
    doctorName: {
      type: 'string'
    },
    specialization: {
      type:  'string'
    },
    timings: {
      type: 'string'
    },
    contact: {
      type: 'string'
    },

   
  },
  datastore: 'mongodb'

};

