//打开抖音短视频
launchApp('抖音短视频');
// console.show();
sleep(10000);

// 关注
var guanzhu = id("bhk").findOne();
console.log(guanzhu)
guanzhu.click();
sleep(2000);

// // 点赞
var dianzan = id("asy").findOne();
console.log(dianzan)
dianzan.click();
sleep(2000);

// 上滑，观看下一条 （Android 7.0 以上）
swipe(500, 1200, 500, 300, 500);
sleep(2000);