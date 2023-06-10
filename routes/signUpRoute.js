const express = require('express')
const router = express.Router()
const {addNewUser} = require('../controllers/signUpControllers')

router.route('/').post(addNewUser)



module.exports = router;