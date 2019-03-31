const functions = require('firebase-functions');
const admin = require('firebase-admin');

var config = {
    apiKey: "AIzaSyDHiE-_J792xlawMe6-0TFJ7MIlcaSSJBo",
    authDomain: "mahe-utsav-2019.firebaseapp.com",
    databaseURL: "https://mahe-utsav-2019.firebaseio.com",
    projectId: "mahe-utsav-2019",
    storageBucket: "mahe-utsav-2019.appspot.com",
    messagingSenderId: "601223662559"
  };

admin.initializeApp(config);


exports.sendNotification = functions.https.onRequest((request, response) => {
    let title = request.body.title;
    let body = request.body.body;
    admin.messaging().send({
        notification: {
        title,
        body
        },
        topic: "general"
    }).then((data)=>
        response.status(200).json({
            status:"200",
            message:"SUCCESS",
            data
        })).catch((err)=>{
        response.status(400).json({
            status:"400",
            message:err
        })
    })
});
   