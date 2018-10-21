var mongoose = require('mongoose');
const dbURI = "mongodb://testuser:psw1234@ds125273.mlab.com:25273/miniproject-test";

function connect(dbUriString){
 const conStr = dbUriString ? dbUriString : dbURI;
 // This returns a promise
 return mongoose.connect(conStr,{ useNewUrlParser: true, useCreateIndex: true }); 
}
mongoose.connection.on('connected', function () { 
 console.log('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.on('error',function (err) { 
 console.log('Mongoose default connection error: ' + err);
});

module.exports = connect;
