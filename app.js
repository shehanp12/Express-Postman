const  express = require('express');
const path = require('path');
const app = express();
const members = require('./Members')

const logger = (req,res,next ) => {
    console.log("Hello ");
    next();


}

//Init middleware
app.use(logger);

//Gets All the members
app.get('/api/members',(req,res) =>{
 res.json(members);
});
//Set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server is Started at  ${PORT}`));

