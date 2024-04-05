const model = require('../Model/db')
const db = require('mongoose')

// const { create } = require("domain")



exports.create=(req,res)=>{

    const{ name,imgsource } = req.body
    let createdata = new model({name,imgsource})

    createdata.save()
    .then(data =>{
        res.json(data)
    })
}

// exports.create =(req,res)=>{


//    model.find()
//    .then(data =>{
//     res.json(data)
//     console.log(data)
//    })
// }

exports.getdata =(req,res)=>{

    model.find()
    .then(data =>{
     res.json(data)
     console.log(data)
    })
 }

exports.updatedata =(req,res)=>{
  const getid = req.params.id;
  const {name ,imgsource}=req.body;
  model.findByIdAndUpdate(getid,{name,imgsource})
  .then(data =>{
    res.json(data)
  })
} ;

exports.deletedata =(req,res)=>{
    const getid = req.params.id;
    model.findByIdAndDelete(getid)
    .then(data =>{
      res.json(data)
    })
  } ;



