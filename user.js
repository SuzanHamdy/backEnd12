
const express = require('express')
const User = require('../model/user')
const router = express.Router()
 router.post('/users' ,(req , res) =>{
    console.log(req.body)
   const user = new User(req.body)
  user.save()
  .then((user) => { res.status(200).send(user)})
  .catch((error) => { res.status(400).send(error)})

 })

module.exports = router



