module.exports = {


  friendlyName: 'View pending appointments',


  description: 'Display "Pending appointments" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pending-appointments'
    }

  },


  fn: async function () {

  let pending = await appointments.find({
  where: {status:1},
  select: ['id','name', 'doctorName','time','phone']
  });

  return {
    pending: pending
  }

  }

  

};
