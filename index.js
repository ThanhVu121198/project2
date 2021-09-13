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
app.get("/hoptrangsuc",function (req,res) {
    res.render("hoptrangsuc");
});
