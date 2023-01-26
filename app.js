const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;  

//set the view engine to ejs

app.set('view engine', 'ejs');


let myName = 'Hau Huynh'; 

app.get('/', async (req, res) => {
//res.send('<!DOCTYPE html><html lang="en"><h1>Hello World, is it November?</h1>')

//res.send(myName);
  let result = await res.send(`<h3> Hi, ${ myName } </h3>`)
  console/log (myName);

})

app.get('/show', (req, res) => {

    // res.sendFile('index.html');
    res.sendFile('index.html' , { root : __dirname});
})


app.get('/ejs', (req,res) => {
    console.log("in/ejs render/ejs", myName);
    //ejs stuff goes here.     

    // use res.render to load up an ejs view file
    res.render('index', { myName: myName } ); // left one is ejs, right side is node land
    console.log("after res render/ejs", myName);

})


app.get('/name', (req, res) => {

  console.log("in get slash name:", req.query.ejsFormName);

})



console.log('in the node console');
app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})