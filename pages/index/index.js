(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["pages/index/index"], {
        "0277": function (t, n, e) {
            "use strict";
            e.r(n);
            var i = e("33e5"),
                a = e("740e");
            for (var o in a) "default" !== o && function (t) {
                e.d(n, t, function () {
                    return a[t]
                })
            }(o);
            e("8e1d");
            var u = e("2877"),
                r = Object(u["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
            n["default"] = r.exports
        },
        "312e": function (t, n, e) {
            "use strict";
            (function (t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var e = {
                    data: function () {
                        return {
                            imageURL: "../../static/22.jpg",
                            love: [],
                            timer: {},
                            title_list: ["小姐姐，要不要再想一想？", "小姐姐再考虑一下嘛~", "小姐姐不要拒绝人家~", "小姐姐你再好好想想(...>_<...)", "小姐姐你真的不再考虑一下下吗？", "小姐姐，我相信你是一不小心手滑了，再来一次好么：）"]
                        }
                    },
                    onLoad: function () {
                        this.back = t.getBackgroundAudioManager(), this.back.src = "http://140.143.132.225/love/pdd.mp3", this.back.title = "音乐", this.back.play()
                    },
                    onShow: function () {
                        this.love = [], this.timer = {};
                        var t = {
                                2000: "王语嫣，我爱你！",
                                4000: "Wang yuyan, I love you! (英语)",
                                6000: "王語嫣、愛しています (日语)",
                                8000: "Wang Yuyan, ich liebe dich! (德语)",
                                10000: "Ван Цзюнь, я люблю тебя! (俄语)",
                                12000: "Wang Yuyan, ti amo! (意大利语)",
                                14000: "¡Wang yuyan, te amo! (西班牙语)",
                                16000: "왕언언,나 사랑해요! (韩语)",
                                18000: "Wang Yuyan, jeg elsker dig! (丹麦语)",
                                20000: "Wang Yuyan, σ 'αγαπώ! (希腊语)"
                            },
                            n = this,
                            e = function (e) {
                                var i = setTimeout(function () {
                                    n.love.push(t[e]), delete n.timer[e]
                                }, e);
                                n.timer[e] = i
                            };
                        for (var i in t) e(i)
                    },
                    onHide: function () {
                        for (var t in this.timer) clearTimeout(this.timer[t])
                    },
                    methods: {
                        agree: function () {
                            t.showToast({
                                icon: "none",
                                title: "小姐姐，明天一起看电影吧",
                                duration: 4e3
                            })
                        },
                        disagree: function () {
                            var n = this,
                                e = Math.round(4 * Math.random() + 1);
                            t.showModal({
                                title: n.title_list[e],
                                content: "拒绝了可就没有大红包了：）",
                                cancelText: "拒绝",
                                confirmText: "同意",
                                success: function (e) {
                                    e.confirm ? t.showToast({
                                        icon: "none",
                                        title: "我就知道小姐姐一定会同意的：）",
                                        duration: 4e3
                                    }) : n.disagree()
                                }
                            })
                        }
                    }
                };
                n.default = e
            }).call(this, e("543d")["default"])
        },
        "33e5": function (t, n, e) {
            "use strict";
            var i = function () {
                    var t = this,
                        n = t.$createElement;
                    t._self._c
                },
                a = [];
            e.d(n, "a", function () {
                return i
            }), e.d(n, "b", function () {
                return a
            })
        },
        "740e": function (t, n, e) {
            "use strict";
            e.r(n);
            var i = e("312e"),
                a = e.n(i);
            for (var o in i) "default" !== o && function (t) {
                e.d(n, t, function () {
                    return i[t]
                })
            }(o);
            n["default"] = a.a
        },
        8719: function (t, n, e) {},
        "8e1d": function (t, n, e) {
            "use strict";
            var i = e("8719"),
                a = e.n(i);
            a.a
        }
    },
    [
        ["df51", "common/runtime", "common/vendor"]
    ]
]);