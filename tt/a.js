var cron = require('node-cron');
const request = require('request');

// THAY SỐ 2 THÀNH SỐ GIÂY CẦN CRON

/** 
 * CRON MINIGAME - SỐ GIÂY
 */
cron.schedule('*/7 * * * * *', () => {
    request('https://joker.clmm48.com/xu-ly-minigame', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        console.log("da chay cron minigame - cho 7s");
    });
});

