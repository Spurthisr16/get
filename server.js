const express = require("express");
const ejs = require("ejs")
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://Admin:123@post-shard-00-00.qavag.mongodb.net:27017,post-shard-00-01.qavag.mongodb.net:27017,post-shard-00-02.qavag.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-96jc7u-shard-0&authSource=admin&retryWrites=true&w=majority")
const noteSchema = {
    title:String,
    content:String
}
const Note = mongoose.model("Note", noteSchema);
app.get("/",function(req,res){
    Note.find({},function(req,note){
        res.render(__dirname + "/views/index.ejs",{
            noteList: note
        })
    })
});
app.listen(2000, function(){
    console.log("Server running on port 2000")
});