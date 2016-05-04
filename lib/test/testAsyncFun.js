'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

require("babel-polyfill");
var asFunc = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(callbackStep1, callbackStep2, next) {
        var a, b;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return callbackStep1();

                    case 2:
                        a = _context.sent;
                        _context.next = 5;
                        return callbackStep2();

                    case 5:
                        b = _context.sent;
                        _context.next = 8;
                        return next;

                    case 8:

                        console.log(a);
                        console.log(b);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function asFunc(_x, _x2, _x3) {
        return ref.apply(this, arguments);
    };
}();

var r = asFunc(function () {
    console.log('calling');
    return Promise.resolve('sss');
}, function () {
    return new Promise(function (r) {
        setTimeout(function () {
            r('2');
        }, 2000);
    });
}, function () {});