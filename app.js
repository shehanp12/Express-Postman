const  express = require('express');
const path = require('path');
const app = express();
const members = require('./Members')
const moment = require('moment')
const logger = (req,res,next ) => {
    console.log(`${req.protocol} ://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();


}

//Init middleware
app.use(logger);

//Gets All the members
app.get('/api/members',(req,res) =>{
 res.json(members);
});

//Get Single Member
app.get('/api/members/:id',(req,res)=>{
 const found = members.some(member => member.id === parseInt(req.params.id) )

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg:`No members with the id  of ${req.params.id}`})
    }
});





//Set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server is Started at  ${PORT}`));

