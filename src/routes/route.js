const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const aws =  require("../middleware/aws")
const {authentication,authorization} = require("../middleware/middleware")
const productController = require("../controller/productController")



router.post('/register',userController.createUser)
router.post('/login',userController.userlogin)
router.get('/user/:userId/profile' ,authentication, userController.getuserprofile)
router.put('/user/:userId/profile',authentication,userController.updateprofile)



router.post('/products',productController.createproduct)
router.get('/products',productController.getProduct)
router.get('/products/:productId',productController.getProductsById)

    




router.all("/**",  (req, res) => {
    res.status(400).send({ status: false, msg: "The api you request is not available" })
});






module.exports = router