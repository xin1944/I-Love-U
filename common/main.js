(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["common/main"], {
        "57bf": function (n, o, t) {
            "use strict";
            var u = t("5a0c"),
                e = t.n(u);
            e.a
        },
        "5a0c": function (n, o, t) {},
        "8e1f": function (n, o, t) {
            "use strict";
            t.r(o);
            var u = t("da5d");
            for (var e in u) "default" !== e && function (n) {
                t.d(o, n, function () {
                    return u[n]
                })
            }(e);
            t("57bf");
            var a, c, f = t("2877"),
                l = Object(f["a"])(u["default"], a, c, !1, null, null, null);
            o["default"] = l.exports
        },
        a926: function (n, o, t) {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var u = {
                onLaunch: function () {
                    console.log("App Launch")
                },
                onShow: function () {
                    console.log("App Show")
                },
                onHide: function () {
                    console.log("App Hide")
                }
            };
            o.default = u
        },
        da5d: function (n, o, t) {
            "use strict";
            t.r(o);
            var u = t("a926"),
                e = t.n(u);
            for (var a in u) "default" !== a && function (n) {
                t.d(o, n, function () {
                    return u[n]
                })
            }(a);
            o["default"] = e.a
        }
    },
    [
        ["604d", "common/runtime", "common/vendor"]
    ]
]);