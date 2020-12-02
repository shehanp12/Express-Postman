const  express = require('express');
const path = require('path');
const app = express();

const members = [
    {
        id:1,
        name:"Shehan Prasanna",
        email:"shehanp068@gmail.com",
        status:"active"
    },
    {
        id:2,
        name:"Charith Eranga",
        email:"charith068@gmail.com",
        status:"active"
    },
    {
        id:3,
        name:"Hashan Danapla",
        email:"hashan@gmail.com",
        status:"offline"
    },
];

app.get('/api/members',(req,res) =>{
 res.json(members);
});
//Set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server is Started at  ${PORT}`));

