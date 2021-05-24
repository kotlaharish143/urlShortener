const mongoose=require('mongoose')
const Schema=mongoose.Schema
const connection= mongoose.connect("mongodb://localhost:27017/urlShortener",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
})

const UrlSchema=new Schema({
  id:{
    type:Number,
    unique:true
  },
  code:{
    type:String,
    unique:true
  },
  link:{type:String}
})


const db=mongoose.model('url',UrlSchema)

module.exports={db}
