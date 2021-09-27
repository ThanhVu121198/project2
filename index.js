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
app.get("/sapgo",function (req,res) {
    res.render("sapgo");
});
app.get("/tugo",function (req,res) {
    res.render("tugo");
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














// ---------------DATABASE----------------//
var sql = require('mssql');


// khai bao de ket noi database
var mssql = require("mssql");
var config = { // thong tin may chu
    server: "localhost",
    user:"sa",
    password:"sa123",
    database:"Data",
    stream: false,
    port:1433,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
};
var ConnectionConfig = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: { userName: 'sa', password: 'sa123'}
    },
    database:"Data",
    options: { encrypt:false }};

mssql.connect(ConnectionConfig,function (err){
    if(err) console.log(err)
    else console.log("Connected")
})













var sql = new mssql.Request();


app.get("/",function (req,res){
    res.send("banghe");
});

// app.get("/san-pham",function (req,res){
//     var kw = req.query.keyword||"";
//     var txt_sql = "SELECT TenSP FROM SanPham";
//     sql.query(txt_sql,function (err,rs){
//         if(err) res.send(err);
//         else res.render("banghe",{
//             SanPham:rs.recordset
//         })
//     })
// });
app.get("/san-pham",function (req,res){
    // lay thong tin tu form tim kiem
    var kw = req.query.keyword||"";
    // can lay danh sach khach hang
    var txt_sql = "select * from SanPham where TenSP like '%"+kw+"%';";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("product",{
            SanPham:rs.recordset // array
        })
    })
});




app.get("/san-pham",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("product",{
            SanPham:rs.recordset
        })
    })
});

app.get("/san-pham1",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 1";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("banghe",{
            SanPham:rs.recordset
        })
    })
});



app.get("/san-pham2",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 2";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("giuong",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham5",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 5";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("dongho",{
            SanPham:rs.recordset
        })
    })
});

app.get("/san-pham6",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 6";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("hoptrangsuc",{
            SanPham:rs.recordset
        })
    })
});




app.get("/san-pham9",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 9";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("tuonggo2",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham10",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 10";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("diaphongthuy",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham3",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 3";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("sapgo",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham4",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 4";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("tugo",{
            SanPham:rs.recordset
        })
    })
});

app.get("/san-pham7",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 7";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("hopkeo",{
            SanPham:rs.recordset
        })
    })
});

app.get("/san-pham8",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 8";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("khaytra",{
            SanPham:rs.recordset
        })
    })
});

app.get("/san-pham8",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 8";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("khaytra",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham11",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 11";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("binhhutloc",{
            SanPham:rs.recordset
        })
    })
});



app.get("/san-pham12",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 12";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("ngocphongthuy",{
            SanPham:rs.recordset
        })
    })
});



app.get("/san-pham13",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 13";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("thoitrangthucong",{
            SanPham:rs.recordset
        })
    })
});




app.get("/san-pham14",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 14";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("dotrangtri",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham15",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 15";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("noithattredan",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham16",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 17";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("thaythedonhua",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham17",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 17";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("tranhda",{
            SanPham:rs.recordset
        })
    })
});

app.get("/san-pham18",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 18";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("tuongda",{
            SanPham:rs.recordset
        })
    })
});


app.get("/san-pham19",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 19";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("honnonbo",{
            SanPham:rs.recordset
        })
    })
});

app.get("/san-pham20",function (req,res){
    var kw = req.query.keyword||"";
    var txt_sql = "SELECT * FROM SanPham Where Maloai = 20";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("trangsuc",{
            SanPham:rs.recordset
        })
    })
});





//----------------------------------- CHI TIET SAN PHAM------------------------------------------//



app.get("/chi-tiet-sp",function (req,res){
    var id = req.query.id;
    var txt_sql = "select * from SanPham where MaSP = "+id+";";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else if(rs.recordset.length > 0){
            res.render("buy",{
                SanPham:rs.recordset[0]
            })
        }else res.status(404).send('Not found?');
    })
})






// ------------------------------------THÊM KHÁCH HÀNG-------------------------------------------------//



app.get("/khach-hang",function (req,res){
    // can lay danh sach khach hang
    var txt_sql = "select * from KhachHang;";
    sql.query(txt_sql,function (err,rs){ // callback
        if(err) res.send(err);
        else res.send(rs.recordset);// rows.recordset : 1 array, mỗi element là 1 object từ able
    })
});

// them khach hang
// 1. Tao giao dien form de nap thong tin khach hang
app.get("/them-khach-hang",function (req,res){
    res.render("home");
})
// 2. Tao routing nhận dữ liệu từ form gửi lên
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/luu-khach-hang",function (req, res) {
    var ten = req.body.HovaTen;
    var dt = req.body.SDT;
    var dc = req.body.DiaChi;
    var em = req.body.Email;
    var mt = req.body.MoTa;
    var txt_sql = "insert into KhachHang(HovaTen,SDT,DiaChi,Email,MoTa) values(N'"+ten+"','"+dt+"',N'"+dc+"',N'"+em+"',N'"+mt+"')";
    sql.query(txt_sql,function (err, rs) {
        if(err) res.status(403).send('Errors');
        else res.redirect("/home");
    })
})









