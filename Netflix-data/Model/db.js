const db = require('mongoose')


const data = db.Schema({
    name:{
        type:String,
       
    },
    
    imgsource:String
})

const dbdata = new db.model('datas',data) 
module.exports=dbdata
