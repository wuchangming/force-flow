require("babel-polyfill");
var asFunc = async(callbackStep1, callbackStep2, next) => {
    var a = await callbackStep1();
    var b = await callbackStep2();
    await next;

    console.log(a);
    console.log(b);
}

var r = asFunc(function() {
    console.log('calling');
    return Promise.resolve('sss');
}, function () {
    return new Promise((r) => {
        setTimeout(() => {
            r('2')
        }, 2000);
    });
}, function () {

});
