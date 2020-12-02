const  express = require('express');
const path = require('path');
const app = express();

const moment = require('moment')
const logger = (req,res,next ) => {
    console.log(`${req.protocol} ://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();

}

app.use('/api/members',require('./Routers/api/members'));

//Init middleware
app.use(logger);

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server is Started at  ${PORT}`));

