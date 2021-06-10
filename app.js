const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const User = require('./Backend/models/user');
const Link = require('./Backend/models/link');

dotenv.config();

//Express App
const app = express();
app.listen(3001);

const uri = process.env.DB_URI;
//console.log('Uri Defined', uri);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('Connection estabislished with MongoDB');
    })
    .catch(error => console.error(error.message));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method :', req.method);
    next();
});

//Static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Frontend'));

const user = new User({
    username: 'codechef-admin',
    password: '1234',
});

const link = new Link({
    name: 'abc2',
    redirectTo: 'xyz2.com',
    clicks: '0'
});

// Main Page
app.get('/', (req, res) => {
    const index = path.join(__dirname, '/Frontend', 'index.html');
    res.sendFile(index);
});

// For Updating No of Clicks
app.put('/updateCount/:id', (req, res) => {
    //const link = req.body.link;
    const id = req.params.id;

    Link.updateOne({ _id: id }, { $inc: { clicks: 1 } })
        .then(result => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

// All links
app.get('/allLinks', (req, res) => {
    Link.find()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});


// Login Page
app.get('/login', (req, res) => {
    const index = path.join(__dirname, '/Frontend', 'login.html');
    res.sendFile(index);
});

// Admin Page
app.get('/admin', (req, res) => {
    const index = path.join(__dirname, './Frontend', 'admin.html');
    res.sendFile(index);
});

app.post('/admin', (req, res) => {
    //const link = req.body.link;

    //console.log(req.body);

    const link = new Link({
        name: 'abc25',
        redirectTo: 'xyz3.com',
        clicks: '0'
    });

    link.save()
        .then(result => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
        });

})

app.put('/admin/:id', (req, res) => {

    //const link = req.body.link;
    const id = req.params.id;

    Link.updateOne({ _id: id }, {
        name: 'abc4',
        redirectTo: 'xyz4.com',
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.delete('/admin/:id', (req, res) => {
    const id = req.params.id;

    Link.findByIdAndDelete(id)
        .then(result => {
            //console.log('yup');
            res.status(200).send(result);

        })
        .catch((err) => {
            console.log(err);
        });
})