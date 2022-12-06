var cron = require('node-cron');
const request = require('request');

// THAY SỐ 2 THÀNH SỐ GIÂY CẦN CRON

/** 
 * CRON ĐĂNG NHẬP LẠI - SỐ PHÚT
 */
cron.schedule('*/15 * * * *', () => {
    request('https://joker.clmm48.com/ref-token', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        console.log("da chay cron dang nhap lai - cho 15p");
    });
});
