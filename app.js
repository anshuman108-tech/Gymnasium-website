const express = require("express")
const path = require("path");
const app = express();
const port =8000;

//app.use(express.static('static',options))

app.use('/static', express.static('static'))     //app.use('filename', express.static('foldername));
app.use(express.urlencoded())                    //this middleware helps in bringing the data of the form to express

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')  //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //Set the views directory

//ENDPOINTS
app.get('/', (req, res)=>{
    const params = {  }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = {  }
    res.status(200).render('contact.pug', params);
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});