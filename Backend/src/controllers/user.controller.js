const express = require("express");
// const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();


router.post("/",async(req,res)=>{
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user);

    }catch(err){
        return res.status(500).send({ err: err });
    }
})



router.get('/', async (req, res) => {
    try {
        const user = await User.find({}).lean().exec()
        return res.status(200).send({user : user})
    } catch (error) {
        return res.status(500).send({error : error})
    }
})


  
  module.exports = router;