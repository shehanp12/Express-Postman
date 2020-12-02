const members = require('../../Members')
const express = require('express');
const router = express.Router();


//Gets All the members
router.get('/',(req,res) =>{
    res.json(members);
});

//Get Single Member
router.get('/:id',(req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id) )

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg:`No members with the id  of ${req.params.id}`})
    }
});


module.exports = router;
