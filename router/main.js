module.exports = function (app) {
    app.get('/main', function (req, res) {
        console.log(req.query.code);
        res.render("index.html", {
          code: req.query.code
        });
        
    });
    app.get('/getqrcode', function (req, res) {
        console.log(req);
        res.render('getqrcode.html');

    });
    //http://goqr.me/api/
    //https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=www.intuseer.co.kr
    //https://developers.google.com/chart/infographics/docs/qr_codes
}