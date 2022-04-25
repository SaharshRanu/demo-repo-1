const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, "public")));
app.use('/', require(path.join(__dirname, 'routes/profileroute.js')));

app.set('view engine', 'ejs');

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'profile.html'));
// });

app.get('/', (req,res)=>{
    res.render('profile.html');
});

app.listen(port,()=>{
    console.log(`App is listening on http://localhost:${port}`);
});