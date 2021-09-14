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
app.get("/video4",function (req,res) {
    res.render("video4");
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

// -----------PHƯƠNG---------------//

app.get("/news",function (req,res) {
    res.render("news");
});
app.get("/Promotional",function (req,res) {
    res.render("Promotional");
});
app.get("/trending",function (req,res) {
    res.render("trending");
});
app.get("/tip",function (req,res) {
    res.render("tip");
});
app.get("/libary",function (req,res) {
    res.render("libary");
});
app.get("/new2",function (req,res) {
    res.render("new2");
});
app.get("/new3",function (req,res) {
    res.render("new3");
});
app.get("/new4",function (req,res) {
    res.render("new4");
});
app.get("/new5",function (req,res) {
    res.render("new5");
});
app.get("/new6",function (req,res) {
    res.render("new6");
});
app.get("/new7",function (req,res) {
    res.render("new7");
});
app.get("/new8",function (req,res) {
    res.render("new8");
});
app.get("/new9",function (req,res) {
    res.render("new9");
});
app.get("/new1",function (req,res) {
    res.render("new1");
});
