const express = require('express');
const {addUser,getUsers,getUser,setUser,deleteUser}  = require('../controllers/controller.js')
const router = express.Router()

router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getUser)
router.post('/:id',setUser)
router.delete('/:id',deleteUser)
module.exports = router

