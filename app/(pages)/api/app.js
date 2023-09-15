const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const encypt = require('mongoose-encryption');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//Database Connection
const mongoose = require('mongoose');

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to Database.');
    })
    .catch(() => {
        console.log("Failed to Connect to Database!");
    })

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    user_name: String,
    email: String,

    password:  String
  
});

//Secret Key
userSchema.plugin(encypt, { secret: process.env.SECRET, encryptedFields: ['password']});

const User = mongoose.model('User', userSchema);


// app.get('/', (req, res) => {
//     res.render('home');
// });

app.get('/ministry', (req, res) => {
    res.render('login');
});

app.get('/registration', (req, res) => {
    res.render('registration');
});

app.get('/profile', (req, res) => {
    res.render('profile');
})


app.post('/registration', (req, res) => {


    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const data = new User({ 
            user_name : req.body.user_name,
            email : req.body.email,
            password : hash
        });

        data.save()
            .then((data) => {
                console.log('Client Data Inserted Successfully.');
            })
            .catch((err) => {
                console.log('Failed to Insert Client Data!');
            });
    
        res.redirect('/login');
    });


});

app.post('/login', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const foundUser = await User.findOne({email: email});

    if(foundUser)
    {
        bcrypt.compare(password, foundUser.password, function(err, result) {
            if(result)
            {
                console.log("Accesses Granted.");
                res.render('/ministry');
            }
            else
            {
                console.log("Password are Not Correcte!");
                res.redirect('/login');
            }
        });
    }
    else
    {
        console.log("User Not Found!");
    }    

});


app.listen(port, () => {
    console.log(`Server is Runing on port http://localhost:${port}`);
});