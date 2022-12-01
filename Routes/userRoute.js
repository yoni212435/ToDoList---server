const express = require('express')
const router = express.Router();
const userLogic = require('../BL/userLogic');
const { authJWT } = require('../middlewere/auth');



router.post('/login', async (req, res) => {

    try {
        const token = await userLogic.login(req.body)
        res.send({ token: token })
    }
    catch (err) {
        console.log("eror from login userRout:",err.message);
        res.send(err.message);
    }
})

router.put('/addtodo' , async (req,res)=>{
console.log("info:", req.body);
    try{
        const user = await userLogic.updateUser(req.body.email,req.body.todo)
        console.log("user from router:",user);
        res.send(user.todos)

    }
    catch(err){
        res.status(403).send(err)

    }
})
router.put('/deltodo' , async (req,res)=>{
console.log("info123:", req);
    try{
        const user = await userLogic.deltodo(req.body.email,req.body.todo)
        console.log("user from router:",user);
        res.send(user.todos)

    }
    catch(err){
        res.status(403).send(err)

    }
})

router.post('/register', async (req, res) => {
    try {
        const newUserToken = await userLogic.register(req.body)
        console.log("token:", newUserToken);
        res.send(newUserToken)
    } catch (err) {
        console.log("eror from register rout.js", err);
    }
})


module.exports = router;