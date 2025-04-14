const express = require('express');
const app = express();
const path = require('path');

// Set EJS sebagai templating engine
app.set('view engine', 'ejs');

// Middleware untuk mengakses file statis di folder public
app.use(express.static(path.join(__dirname, 'public')));

// Route utama untuk halaman utama
app.get('/', (req, res) => {
    res.render('index', { title: "Scholar Home" });
});

app.get('/home', (req, res) => {
    res.render('home', { title: "Scholar Home-reg" });
});

app.get('/order', (req, res) => {
    res.render('order', { title: "Scholar Home" });

});

app.get('/profile', (req, res) => {
    res.render('profile');
  });

app.get('/detailproduct', (req, res) => {
    res.render('detailproduct', { title: "Scholar Home" });
});

app.get('/webdesignreg', (req, res) => {
    res.render('webdesignreg', { title: "Scholar Home" });
});


app.get('/detailproductwebdev', (req, res) => {
    res.render('detailproductwebdev', { title: "Detail WebDev Product" });
});

app.get('/webdevreg', (req, res) => {
    res.render('webdevreg', { title: "Detail WebDev Product" });
});

app.get('/detailproductdataanl', (req, res) => {
    res.render('detailproductdataanl', { title: "Detail Data Analisis Product" });
});

app.get('/dataanlreg', (req, res) => {
    res.render('dataanlreg', { title: "Scholar Home" });
});

app.get('/detailproductappdev', (req, res) => {
    res.render('detailproductappdev', { title: "Detail APP Development" });
});

app.get('/appdevreg', (req, res) => {
    res.render('appdevreg', { title: "Detail APP Development" });
});

app.get('/detailproductml', (req, res) => {
    res.render('detailproductml', { title: "Detail Machine Learning" });
});

app.get('/malearnreg', (req, res) => {
    res.render('malearnreg', { title: "Detail Machine Learning" });
});
  
app.get('/detailproductbp', (req, res) => {
    res.render('detailproductbp', { title: "Detail Basic Program" });
});

app.get('/bapromreg', (req, res) => {
    res.render('bapromreg', { title: "Detail Basic Program" });
});
  

app.get('/register', (req, res) => {
    res.render('register', { title: "Scholar Home" });
});

app.get('/login', (req, res) => {
    res.render('login', { title: "Scholar Home" });
});

app.get('/home', (req, res) => {
    res.render('home', { title: "Scholar Home" });
});

app.get('/ubahemail', (req, res) => {
    res.render('ubahemail', { title: "Scholar Home" });
});

app.get('/ubahpassword', (req, res) => {
    res.render('ubahpassword', { title: "Scholar Home" });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
