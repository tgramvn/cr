var cron = require('node-cron');
const request = require('request');

// THAY SỐ 2 THÀNH SỐ GIÂY CẦN CRON

/** 
 * CRON MINIGAME - SỐ GIÂY
 */
cron.schedule('*/5 * * * * *', () => {
    request('https://joker.clmm48.com/xu-ly-pay', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        console.log("da chay cron pay - cho 5s");
    });
});

/** 
 * CRON CHUYỂN TIỀN - SỐ GIÂY
 */
cron.schedule('*/5 * * * * *', () => {
    request('https://joker.clmm48.com/xu-ly-pay-error', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        console.log("da chay cron pay loi - cho 5s");
    });
});
