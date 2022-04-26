var db = require('./database');
const express = require('express');

// Setting the Views Directory
const path = require("path");
const fs = require('fs');

const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded()); // This will help us bring the data of our form to the express

// PUG SPECIFIC STUFF
var usersRouter = require('./routes/users');
const req = require('express/lib/request');
const res = require('express/lib/response');
app.set("view engine", 'pug'); // Setting template engine as pug
app.set('views', path.join(__dirname,'views')); // Setting the Views Directory
// Now we set a folder named views.

app.use(express.static(path.join(__dirname, "public")));
app.use('/', require(path.join(__dirname, 'routes/users.js')));

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = 'This is our content for the webpage using pug';
    const params = {'title': "Portfolio Builder", 'content': con};
    res.status(200).render('index', params);
}); 

app.get('/user-list', (req, res)=>{
  const con = 'This is our content for the webpage using ejs';
  const params = {'title': "Profile Page", 'content': con};
  res.status(200).render('profile1', params);
});

app.post('/', (req, res)=>{
  var sql = 'INSERT INTO user_detail SET ?';
  var submit_button = window.getElementById("endBtn");
  submit_button.onclick = function(){
    db.query(sql, userDetails,function (err, data) { 
        if (err) throw err;
           console.log("User data is inserted successfully "); 
        //    alert("User data is inserted successfully");
    });
  };
});

// STARTING THE SERVER
app.listen(port, ()=>{
    console.log(`The app started on port ${port}`);
});
 
