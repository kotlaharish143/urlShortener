const mongoose=require('mongoose')
const Schema=mongoose.Schema
const connection= mongoose.connect("mongodb+srv://harish143:12345678@@cluster0.5b5nr.mongodb.net/urlShortener?retryWrites=true&w=majority",{
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
