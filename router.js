const express = require('express')
const router = express.Router()
const model = require('./model')

router.post("/", async(req, res)=>{
  const postData = await model.create(req.body)
  res.json(postData)
})

router.get("/", async(req,res)=>{
  const getData = await model.find()
  res.json(getData)
})

module.exports = router