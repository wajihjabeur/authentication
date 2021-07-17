const express = require("express");
const router = express.Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth=require('../middleware/passport')

// register

router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    const newUser = new user({ name, lastName, email, password });

    // check if the email exist

    const searchedUser = await user.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    // hash password

    const saltRounds = 10;

    const genSalt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;

    // save the user
    let result = await newUser.save();

    // generate a token
    const paylaod = {
      _id: result._id,
      name: result.name,
    };
    const token = await jwt.sign(paylaod, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    res.status(200).send({ result: newUser, msg: "user is saved ", token :`bearer ${token}`});
  } catch (error) {
    res.status(500).send("cannot save the user");
  }
});

// login

router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await user.findOne({ email });
    // if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    // password are equal

    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }

    // cree token
    const paylaod = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(paylaod, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });

    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "cannot get the user" });
  }
});

router.get('/current',isAuth(),(req,res)=>{
    res.status(200).send({user:req.user})
})
module.exports = router;
