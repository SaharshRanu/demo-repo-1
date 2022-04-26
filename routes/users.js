var express = require('express');
var router = express.Router();
var db=require('../database');

router.post('/user-list', function(request,response,next){
  var query = "SELECT * FROM user_details WHERE user_id = userid";
  database.query(query,function(error, data){
    if(error)
    {
      throw error;
    } else {
      response.render('userData', {title:"User Details",
      action:'list', userData:data
    });
    };
  });
});

router.post('/create', function(req, res, next) {  
  // store all the user input data
  const userDetails=req.body;
  var sql = 'INSERT INTO user_details SET ?';
  // var submit_button = window.getElementById("endBtn");
  // submit_button.onclick = function(){
    db.query(sql, userDetails,function (err, data) { 
        if (err) throw err;
           console.log("User data is inserted successfully "); 
          //  alert("User data is inserted successfully");
    });
  // }
 res.redirect('/users/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;