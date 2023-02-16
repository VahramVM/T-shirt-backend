const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const autheRotes = require('./routes/auth');
const analyticsRotes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/products');
const productscolorRoutes = require('./routes/productscolor');
const fontRotes = require('./routes/fonts');
const keys = require('./config/keys');
const path = require ('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleweare/passport')(passport)

app.use(morgan('dev'));



app.use(bodyParser.json({ limit: '15mb' }));
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }))
app.use(require('morgan')('dev'))
app.use(require('cors')())
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json())

app.use('/uploads', express.static('uploads'));
app.use('/api/auth', autheRotes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/productcolor', productscolorRoutes);
app.use('/api/font', fontRotes);
app.use('/api/analytics', analyticsRotes);

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname,  't-shirt-frontend', 'dist', 'client')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 't-shirt-frontend', 'dist', 'client', 'index.html'))
    })
}

// app.use('/api/mail', analyticsRotes)

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const inlineBase64 = require('nodemailer-plugin-inline-base64');

// const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON

app.use(cors({ origin: "*" }));
// app.use(cors({
//     origin: 'http://localhost:4200'
// }));

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });


app.get('/main', (req, res) => {
    res.json({name:'lolo'})
    console.log(req.render('contact'));
    res.send('Node');
});

// app.use(function(err){
//     console.error(err.stack);
// });

app.post('/sendmail', (req, res) => {
    console.log('request came!');
    sendMail(req.body, info => {
        console.log(`The mail has been send and id is ${info.messageId}`);
        res.sendStatus(info);
    });
})

app.use(function (err) {
    console.log(err.stack);
})

//start application server on port 3000
// app.listen(3000, () => {
//     console.log("The server started on port 3000");
// });


function sendMail(image) {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        // requireTLS: true,
        auth: {
            user: 'vahram.keleshyan@gmail.com',
            pass: 'lijgekdchpjuhovz'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    transporter.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));


    let mailOptions = {
        from: 'vahram.keleshyan@gmail.com',
        to: 'vakell85@gmail.com',
        subject: 'Sending Email using Node.js',
        forceEmbeddedImages: true,
        html: '<p>Շնորհակալություն!!</p>',
       
        attachments: [{
            // filename: 'image.png',

            // path: 'https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w',
           
            //  filename: 'text1.png',

            path: image.image,
           
            // encoding: 'base64' 
        },

        {
            // path: __dirname + '/client/src/assets/img/Trafaret.png',
            path: image.image1,

        }
        ],
    };



    let info = transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    callback(info)
}



module.exports = app


