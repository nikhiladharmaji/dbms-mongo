module.exports = {


  friendlyName: 'Add appointments',


  description: 'Add an appointment',


  inputs: {

      name: {
        type: 'string',
        required:true
      },
      phone:{
        type:'string',
        required:true
      },
      pincode:{
        type:'string',
        required:true
      },
      doctorName: {
        type: 'string',
        required:true
      },
      time: {
        type: 'string',
        required:true
      },

  },


  exits: {

  },


  fn: async function (inputs, exits) {


    let name = inputs.name;
    let phone = inputs.phone;
    let pincode = inputs.pincode;
    let doctorName = inputs.doctorName;
    let time = inputs.time;
    let appointment = await appointments.create({name:name,phone:phone,pincode:pincode,doctorName:doctorName,time:time,status:1});
    
     return exits.success({
        status: "success"
    });


  }


};
