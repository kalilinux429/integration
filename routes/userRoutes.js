const express=require('express');
const controller=require('../controllers/controller')

const router=express.Router();

router.post('/',controller.createuser);
router.get('/',controller.getUsers);
router.get('/:id',controller.getUserById);
router.put('/:id',controller.updateUserById);
router.delete('/:id',controller.deletUserById); 
//this extention follo after like  http://localhost:3000/api/users/id 
//like that you can crate routes
//all api are working
//in all api extention is apply :id

module.exports=router;
