var AWS = require('aws-sdk');
var ses = new AWS.SES();
 
var RECEIVER = 'mrashed@dellainfotech.com';
var SENDER = 'aravindha@vrdconstructions.com';

var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
 };

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
};
 
function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Name: ' + event.name + '\nPhone: ' + event.phone + '\nEmail: ' + event.email + '\nLocation: ' + event.location + '\nInterested: ' + event.interested + '\nBudget: ' + event.budget + '\nPreferred Location: ' + event.prelocation+ '\nSubject: ' + event.subject ,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Mail Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}