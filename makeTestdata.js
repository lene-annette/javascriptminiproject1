require("./dbSetup.js")();

var User = require("./models/User.js");
var LocationBlog = require("./models/LocationBlog.js");
var Position = require("./models/Position.js");

//Utility Function to create users
function userCreate(firstName,lastName,userName,password,email,type,company,companyURL){
    const job = [{type,company,companyURL},{type,company,companyURL}];
    const userDetail = {firstName,lastName,userName,password,email,job};
    const user = new User(userDetail);
    return user.save();
    
}
//Utility Function to create Positions
function positionCreator(lon,lat,userId,dateInFuture){
    var posDetail = {user: userID, loc: {coordinates: [lon,lat]}}
    if(dateInFutere){
        posDetail.created = "2022-09-25T20:40:21.899Z";
    }
    var pos = new Position(posDetail);
    return pos.save();
}
//Utility Function to create LocationBlogs
function LocationBlogCreator(info, author, longitude, latitude) {
}
// Here we will setup users
async function createUsers(){
    await User.deleteMany({});
    await Position.deleteMany({});
    await LocationBlog.deleteMany({});

    const userPromises =[
        userCreate("Kurt","Wonnegut","kw0","test","kw@ab.dk","A type","comp as","compas.com"),
        userCreate("Hanne","Wonnegut","kw1","test","kw@ab.dk","A type","comp as","compas.com"),
        userCreate("Janne","Wonnegut","kw2","test","kw@ab.dk","A type","comp as","compas.com"),
        userCreate("Iris","Wonnegut","kw3","test","kw@ab.dk","A type","comp as","compas.com"),
        userCreate("Mini","Wonnegut","kw4","test","kw@ab.dk","A type","comp as","compas.com"),
        userCreate("Thomas","Wonnegut","kw5","test","kw@ab.dk","A type","comp as","compas.com")
    ];
    var users = await Promise.all(userPromises);
    var positionPromises= [
        positionCreator(10,11,users[0]._id),
        positionCreator(11,12,users[1]._id,true),
        positionCreator(11,13,users[2]._id,true)
    ];
    var positions = await Promise.all(positionPromises);
    console.log("Expecting three: " + positions.length);
      
}

createUsers();
