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

//--------------------HUNG-------------------//
app.get("/cart",function (req,res) {
    res.render("cart");
});

app.get("/favorite",function (req,res) {
    res.render("favorite");
});

app.get("/contact",function (req,res) {
    res.render("contact");
});


app.get("/log",function (req,res) {
    res.render("log-in");
});

//--------------Q.ANH---------------------//
app.get("/banghe",function (req,res) {
    res.render("banghe");
});
app.get("/product",function (req,res) {
    res.render("product");
});
app.get("/buy",function (req,res) {
    res.render("buy");
});
app.get("/dia",function (req,res) {
    res.render("diaphongthuy");
});
app.get("/dongho",function (req,res) {
    res.render("dongho");
});
app.get("/giuong",function (req,res) {
    res.render("giuong");
});
app.get("/hoptrangsuc",function (req,res) {
    res.render("hoptrangsuc");
});
app.get("/tuonggo2",function (req,res) {
    res.render("tuonggo2");
});
app.get("/diaphongthuy",function (req,res) {
    res.render("diaphongthuy");
});




