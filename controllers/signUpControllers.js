
const userModel = require('../models/signUpModel')
const bcrypt = require('bcryptjs')
const addNewUser = async(req,res) => {

  const encryptedPassword = await bcrypt.hash(req.body.password , 10)
  const user = new userModel (
    {
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      email : req.body.email,
      password : encryptedPassword
    }
    )
    try{
      const existingUser = userModel.findOne(req.body.email)
      if(existingUser){
        return res.status(409).json({message:'email already exists'})
      }
      const newUser = await user.save()
      res.status(200).json(newUser)
    }
    catch(error){
      res.status(500).json({message:error})
    }
}

module.exports = {addNewUser}