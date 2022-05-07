// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const inlineBase64 = require('nodemailer-plugin-inline-base64');

// const app = express();

// configure the Express middleware to accept CORS requests and parse request body into JSON

// app.use(cors({ origin: "*" }));
// app.use(bodyParser.json({ limit: '5mb' }));
// app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))


// app.get('/sendmail', (req, res) => {
//     console.log(req.render('contact'));
//     res.send('Node');
// });



// app.post('/sendmail', (req, res) => {
//     console.log('request came!');
//     sendMail(req.body, info => {
//         console.log(`The mail has been send and id is ${info.messageId}`);
//         res.sendStatus(info);
//     });
// })

// app.use(function(err){
//     console.log(err.stack);
// })

// start application server on port 3000
// app.listen(3000, () => {
//     console.log("The server started on port 3000");
// });


function sendMail(image) {
    
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         // requireTLS: true,
//         auth: {
//             user: 'vahram.keleshyan@gmail.com',
//             pass: '!!!120485ga'
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
//     transporter.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));


    let mailOptions = {
        from: 'vahram.keleshyan@gmail.com',
        to: 'vakell85@gmail.com',
        subject: 'Sending Email using Node.js',
        forceEmbeddedImages: true,
        html: '<p>Շնորհակալություն!!</p>',
        // html: '&lt;img src="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAcwCAYAAAAiWeOiAAAgAElEQVR4XuzdTYzc933f8e/vP7NLaknxyZIs02lRhWraFK0c5LFGGte1gKSWKKkqIBdtrz0UBQI0RW6ynbUCJG0PcQ+99JBLLy1SJLVIKYXiAG4L9FTABIokSAATRVHARFDACWlRMrm78y9mZmd39oHc5cNH4g5fRBhSy90vZ177JSG99+fftPKNAAECBAgQIECAAAECBAgQIECAAAECBAgEBFpgppEECBAgQIAAAQIECBAgQIAAAQIECBAgQKAEaEtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lA">',
        // html: 'Embedded image: <img src="cid:data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAcwCAYAAAAiWeOiAAAgAElEQVR4XuzdTYzc933f8e/vP7NLaknxyZIs02lRhWraFK0c5LFGGte1gKSWKKkqIBdtrz0UBQI0RW6ynbUCJG0PcQ+99JBLLy1SJLVIKYXiAG4L9FTABIokSAATRVHARFDACWlRMrm78y9mZmd39oHc5cNH4g5fRBhSy90vZ177JSG99+fftPKNAAECBAgQIECAAAECBAgQIECAAAECBAgEBFpgppEECBAgQIAAAQIECBAgQIAAAQIECBAgQKAEaEtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lA"/>',
        attachments: [{
            // filename: 'image.png',

            // path: 'https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w',
            // path: 'data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAcwCAYAAAAiWeOiAAAgAElEQVR4XuzdTYzc933f8e/vP7NLaknxyZIs02lRhWraFK0c5LFGGte1gKSWKKkqIBdtrz0UBQI0RW6ynbUCJG0PcQ+99JBLLy1SJLVIKYXiAG4L9FTABIokSAATRVHARFDACWlRMrm78y9mZmd39oHc5cNH4g5fRBhSy90vZ177JSG99+fftPKNAAECBAgQIECAAAECBAgQIECAAAECBAgEBFpgppEECBAgQIAAAQIECBAgQIAAAQIECBAgQKAEaEtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lA',

            // path:  'data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAcwCAYAAAAiWeOiAAAgAElEQVR4XuzdTYzc933f8e/vP7NLaknxyZIs02lRhWraFK0c5LFGGte1gKSWKKkqIBdtrz0UBQI0RW6ynbUCJG0PcQ+99JBLLy1SJLVIKYXiAG4L9FTABIokSAATRVHARFDACWlRMrm78y9mZmd39oHc5cNH4g5fRBhSy90vZ177JSG99+fftPKNAAECBAgQIECAAAECBAgQIECAAAECBAgEBFpgppEECBAgQIAAAQIECBAgQIAAAQIECBAgQKAEaEtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lA'
            //  filename: 'text1.png',

            path: image.image,
            // content: '<img src= data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAcwCAYAAAAiWeOiAAAgAElEQVR4XuzdTYzc933f8e/vP7NLaknxyZIs02lRhWraFK0c5LFGGte1gKSWKKkqIBdtrz0UBQI0RW6ynbUCJG0PcQ+99JBLLy1SJLVIKYXiAG4L9FTABIokSAATRVHARFDACWlRMrm78y9mZmd39oHc5cNH4g5fRBhSy90vZ177JSG99+fftPKNAAECBAgQIECAAAECBAgQIECAAAECBAgEBFpgppEECBAgQIAAAQIECBAgQIAAAQIECBAgQKAEaEtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lAABAgQIECBAgAABAgQIECBAgAABAgQEaDtAgAABAgQIECBAgAABAgQIECBAgAABAhEBATrCaigBAgQIECBAgAABAgQIECBAgAABAgQICNB2gAABAgQIECBAgAABAgQIECBAgAABAgQiAgJ0hNVQAgQIECBAgAABAgQIECBAgAABAgQIEBCg7QABAgQIECBAgAABAgQIECBAgAABAgQIRAQE6AiroQQIECBAgAABAgQIECBAgAABAgQIECAgQNsBAgQIECBAgAABAgQIECBAgAABAgQIEIgICNARVkMJECBAgAABAgQIECBAgAABAgQIECBAQIC2AwQIECBAgAABAgQIECBAgAABAgQIECAQERCgI6yGEiBAgAABAgQIECBAgAABAgQIECBAgIAAbQcIECBAgAABAgQIECBAgAABAgQIECBAICIgQEdYDSVAgAABAgQIECBAgAABAgQIECBAgAABAdoOECBAgAABAgQIECBAgAABAgQIECBAgEBEQICOsBpKgAABAgQIECBAgAABAgQIECBAgAABAgK0HSBAgAABAgQIECBAgAABAgQIECBAgACBiIAAHWE1lA>',
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

