(function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VMoney = t() : e.VMoney = t()
})(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {i: r, l: !1, exports: {}};
      return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.i = function (e) {
      return e
    }, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = ".", t(t.s = 9)
  }([function (e, t, n) {
    "use strict";
    t.a = {prefix: "", suffix: "", thousands: ",", decimal: ".", precision: 2}
  }, function (e, t, n) {
    "use strict";
    var r = n(2), i = n(5), u = n(0);
    t.a = function (e, t) {
      if (t.value) {
        var o = n.i(i.a)(u.a, t.value);
        if ("INPUT" !== e.tagName.toLocaleUpperCase()) {
          var a = e.getElementsByTagName("input");
          1 !== a.length || (e = a[0])
        }
        e.oninput = function () {
          var t = e.value.length - e.selectionEnd;
          e.value = n.i(r.a)(e.value, o), t = Math.max(t, o.suffix.length), t = e.value.length - t, t = Math.max(t, o.prefix.length + 1), n.i(r.b)(e, t), e.dispatchEvent(n.i(r.c)("change"))
        }, e.onfocus = function () {
          n.i(r.b)(e, e.value.length - o.suffix.length)
        }, e.oninput(), e.dispatchEvent(n.i(r.c)("input"))
      }
    }
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.a;
      "number" == typeof e && (e = e.toFixed(o(t.precision)));
      var n = e.indexOf("-") >= 0 ? "-" : "", r = u(e), i = c(r, t.precision), a = d(i).split("."), p = a[0], l = a[1];
      return p = f(p, t.thousands), t.prefix + n + s(p, l, t.decimal) + t.suffix
    }

    function i(e, t) {
      var n = e.indexOf("-") >= 0 ? -1 : 1, r = u(e), i = c(r, t);
      return parseFloat(i) * n
    }

    function u(e) {
      return d(e).replace(/\D+/g, "") || "0"
    }

    function o(e) {
      return a(0, e, 20)
    }

    function a(e, t, n) {
      return Math.max(e, Math.min(t, n))
    }

    function c(e, t) {
      var n = Math.pow(10, t);
      return (parseFloat(e) / n).toFixed(o(t))
    }

    function f(e, t) {
      return e.replace(/(\d)(?=(?:\d{3})+\b)/gm, "$1" + t)
    }

    function s(e, t, n) {
      return t ? e + n + t : e
    }

    function d(e) {
      if(!e) return "";
      let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
      let arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

      for (let i = 0; i < 10; i++) {
        e = e.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
      return e ? e.toString() : ""
    }

    function p(e, t) {
      var n = function () {
        e.setSelectionRange(t, t)
      };
      e === document.activeElement && (n(), setTimeout(n, 1))
    }

    function l(e) {
      var t = document.createEvent("Event");
      return t.initEvent(e, !0, !0), t
    }

    var m = n(0);
    n.d(t, "a", function () {
      return r
    }), n.d(t, "d", function () {
      return i
    }), n.d(t, "b", function () {
      return p
    }), n.d(t, "c", function () {
      return l
    })
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      t && Object.keys(t).map(function (e) {
        a.a[e] = t[e]
      }), e.directive("money", o.a), e.component("money", u.a)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(6), u = n.n(i), o = n(1), a = n(0);
    n.d(t, "Money", function () {
      return u.a
    }), n.d(t, "VMoney", function () {
      return o.a
    }), n.d(t, "options", function () {
      return a.a
    }), n.d(t, "VERSION", function () {
      return c
    });
    var c = "0.8.1";
    t.default = r, "undefined" != typeof window && window.Vue && window.Vue.use(r)
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(1), i = n(0), u = n(2);
    t.default = {
      name: "Money",
      props: {
        value: {required: !0, type: [Number, String], default: 0},
        masked: {type: Boolean, default: !1},
        precision: {
          type: Number, default: function () {
            return i.a.precision
          }
        },
        decimal: {
          type: String, default: function () {
            return i.a.decimal
          }
        },
        thousands: {
          type: String, default: function () {
            return i.a.thousands
          }
        },
        prefix: {
          type: String, default: function () {
            return i.a.prefix
          }
        },
        suffix: {
          type: String, default: function () {
            return i.a.suffix
          }
        }
      },
      directives: {money: r.a},
      data: function () {
        return {formattedValue: ""}
      },
      watch: {
        value: {
          immediate: !0, handler: function (e, t) {
            var r = n.i(u.a)(e, this.$props);
            r !== this.formattedValue && (this.formattedValue = r)
          }
        }
      },
      methods: {
        change: function (e) {
          this.$emit("input", this.masked ? e.target.value : n.i(u.d)(e.target.value, this.precision))
        }
      }
    }
  }, function (e, t, n) {
    "use strict";
    t.a = function (e, t) {
      return e = e || {}, t = t || {}, Object.keys(e).concat(Object.keys(t)).reduce(function (n, r) {
        return n[r] = void 0 === t[r] ? e[r] : t[r], n
      }, {})
    }
  }, function (e, t, n) {
    var r = n(7)(n(4), n(8), null, null);
    e.exports = r.exports
  }, function (e, t) {
    e.exports = function (e, t, n, r) {
      var i, u = e = e || {}, o = typeof e.default;
      "object" !== o && "function" !== o || (i = e, u = e.default);
      var a = "function" == typeof u ? u.options : u;
      if (t && (a.render = t.render, a.staticRenderFns = t.staticRenderFns), n && (a._scopeId = n), r) {
        var c = a.computed || (a.computed = {});
        Object.keys(r).forEach(function (e) {
          var t = r[e];
          c[e] = function () {
            return t
          }
        })
      }
      return {esModule: i, exports: u, options: a}
    }
  }, function (e, t) {
    e.exports = {
      render: function () {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("input", {
          directives: [{
            name: "money",
            rawName: "v-money",
            value: {
              precision: e.precision,
              decimal: e.decimal,
              thousands: e.thousands,
              prefix: e.prefix,
              suffix: e.suffix
            },
            expression: "{precision, decimal, thousands, prefix, suffix}"
          }], staticClass: "v-money", attrs: {type: "tel"}, domProps: {value: e.formattedValue}, on: {change: e.change}
        })
      }, staticRenderFns: []
    }
  }, function (e, t, n) {
    e.exports = n(3)
  }])
});
