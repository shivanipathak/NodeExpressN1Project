var express = require('express');

var mongodb = require('mongodb');

var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

//**************************************************************************

//***** mongodb get all of the Routes in Routes collection where frequence>=1

//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs

router.get('/db', function (request, response) {

  //mongodb.MongoClient.connect('mongodb://localhost:27017', function(err, client) { //for local connection
mongodb.MongoClient.connect('mongodb+srv://shivani-admin:shivani-admin@cluster0.i6bgs.mongodb.net/', function(err, client) {


    if(err) throw err;

    //get collection of routes

    var db = client.db('secondDb');  // in v3 we need to get the db from the client

  //var users = db.collection('user'); // for local connection

    var users = db.collection('User');

    //get all Routes with frequency >=1

    users.find().toArray(function (err,docs){
      if(err)
        throw err;

      response.render('index',{results: docs});
    });


    client.close(function (err) {

      if(err) throw err;

    });

  });//end of connect

});//end app.get

module.exports = router;
