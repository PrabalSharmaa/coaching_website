const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// Express
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded())

//pug
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname,'views')) //set the views directory

//endpoints
app.get('/',(req,res)=>{
    const con ="Some Content"
    const params ={'title': 'some title', 'content':con}
    res.status(200).render('index.pug', params);
})
//start the server
app.listen(port,()=>{
    console.log(`The appication started successfully on port ${port}`);
})