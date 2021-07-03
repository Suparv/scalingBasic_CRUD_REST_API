const express = require ('express');
const app = express();
require('dotenv/config')
const mongoose = require('mongoose')
const postsRoute = require('./routes/posts')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())


app.use(cors())

app.listen(3000, ()=>{
    console.log("server started")
})

// home
app.get('/', (req, res)=>{
    res.send("We are at home baby");
})

//posts
app.use('/posts', postsRoute) 



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log("Connected to mongo")
})





//  mongodb+srv://Suparv:<password>@deved.evprp.mongodb.net/myFirstDatabase?
// retryWrites=true&w=majority
// password is issearthkam