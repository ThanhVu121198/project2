var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("sever is running....");
});
app.use(express.static("public"));
app.set("view engine","ejs");
//------------ THANH--------------//

app.get("/home",function (req,res) {
    res.render("home");
});

app.get("/about",function (req,res) {
    res.render("about");
});

//------------ TRANG--------------//
app.get("/question",function (req,res) {
    res.render("question");
});
app.get("/video",function (req,res) {
    res.render("video");
});
app.get("/video1",function (req,res) {
    res.render("video1");
});
app.get("/video2",function (req,res) {
    res.render("video2");
});
app.get("/video3",function (req,res) {
    res.render("video3");
});

