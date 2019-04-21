module.exports = {


  friendlyName: 'Update status',


  description: 'Update Status of an appointment',


  inputs: {
    id: {
      type: 'string',
    }

  },


  exits: {
     success: {
      viewTemplatePath: 'pages/pending-appointments'
    }

  },


  fn: async function (inputs, exits) {

    let id = inputs.id;
    await appointments.update({id:id}).set({status:0});

     return exits.success({
        status: "success"
    });

  }


};
