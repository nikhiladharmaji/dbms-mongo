module.exports = {


  friendlyName: 'Update status',


  description: 'Update Status of an appointment',


  inputs: {
    id: {
      type: 'string',
    }

  },


  exits: {
  },


  fn: async function (inputs, exits) {

    let id = inputs.id;
    await appointments.update({id:id}).set({status:0});

     return exits.success({
        status: "success"
    });

  }


};
