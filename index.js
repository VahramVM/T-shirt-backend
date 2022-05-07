const app = require('./app');
// const appMail = require('./mailer')
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));


