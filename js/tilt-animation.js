! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function r(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function b(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function A(t) {
        return "string" == typeof t
    }

    function f(t) {
        return "function" == typeof t
    }

    function M(t) {
        return "number" == typeof t
    }

    function n(t) {
        return void 0 === t
    }

    function O(t) {
        return "object" == typeof t
    }

    function R(t) {
        return !1 !== t
    }

    function e() {
        return "undefined" != typeof window
    }

    function k(t) {
        return f(t) || A(t)
    }

    function i(t) {
        return (xt = ct(t, se)) && ai
    }

    function D(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function C(t, e) {
        return !e && console.warn(t)
    }

    function s(t, e) {
        return t && (se[t] = e) && xt && (xt[t] = e) || se
    }

    function S() {
        return 0
    }

    function E(t) {
        var e, i, r = t[0];
        if (O(r) || f(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
            for (i = pe.length; i-- && !pe[i].targetTest(r););
            e = pe[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Pe(t[i], e))) || t.splice(i, 1);
        return t
    }

    function B(t) {
        return t._gsap || E(ge(t))[0]._gsap
    }

    function a(t, e, i) {
        return (i = t[e]) && f(i) ? t[e]() : n(i) && t.getAttribute && t.getAttribute(e) || i
    }

    function c(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function L(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function o(t, e, i) {
        var r, n = M(t[1]),
            s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
        if (n && (a.duration = t[1]), a.parent = i, e) {
            for (r = a; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = R(i.vars.inherit) && i.parent;
            a.immediateRender = R(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
        }
        return a
    }

    function Y() {
        var t, e, i = oe.length,
            r = oe.slice(0);
        for (ue = {}, t = oe.length = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function u(t, e, i, r) {
        oe.length && Y(), t.render(e, i, r), oe.length && Y()
    }

    function h(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ne).length < 2 ? e : A(t) ? t.trim() : t
    }

    function l(t) {
        return t
    }

    function I(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function p(t, e) {
        for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
    }

    function _(t, e) {
        for (var i in e) t[i] = O(e[i]) ? _(t[i] || (t[i] = {}), e[i]) : e[i];
        return t
    }

    function X(t, e) {
        var i, r = {};
        for (i in t) i in e || (r[i] = t[i]);
        return r
    }

    function P(t) {
        var e = t.parent || gt,
            i = t.keyframes ? p : I;
        if (R(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function d(t, e, i, r) {
        void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
        var n = e._prev,
            s = e._next;
        n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
    }

    function N(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function m(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    }

    function g(t) {
        return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function v(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function x(t) {
        return t._end = L(t._start + (t._tDur / Math.abs(t._ts || t._rts || Vt) || 0))
    }

    function y(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = L(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), x(t), i._dirty || m(i, t)), t
    }

    function z(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = v(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), i) - e._tTime > Vt) && e.render(i, !0)), m(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp;) 0 <= i.rawTime() && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -Vt
        }
    }

    function w(t, e, i, r) {
        return e.parent && N(e), e._start = L(i + e._delay), e._end = L(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function (t, e, i, r, n) {
                void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                var s, a = t[r];
                if (n)
                    for (s = e[n]; a && a[n] > s;) a = a._prev;
                a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || z(t, e), t
    }

    function F(t, e) {
        return (se.ScrollTrigger || D("scrollTrigger", e)) && se.ScrollTrigger.create(e, t)
    }

    function U(t, e, i, r) {
        return Le(t, e), !t._initted || !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && bt !== Te.frame && (oe.push(t), t._lazy = [e, r])
    }

    function q(t, e, i, r) {
        var n = t._repeat,
            s = L(e) || 0,
            e = t._tTime / t._tDur;
        return e && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : L(s * (n + 1) + t._rDelay * n) : s, e && !r ? y(t, t._tTime = t._tDur * e) : t.parent && x(t), i || m(t.parent, t), t
    }

    function T(t) {
        return t instanceof Re ? m(t) : q(t, t._dur)
    }

    function V(t, e) {
        var i, r = t.labels,
            n = t._recent || _e,
            s = t.duration() >= qt ? n.endTime(!1) : t._dur;
        return A(e) && (isNaN(e) || e in r) ? "<" === (i = e.charAt(0)) || ">" === i ? ("<" === i ? n._start : n.endTime(0 <= n._repeat)) + (parseFloat(e.substr(1)) || 0) : (i = e.indexOf("=")) < 0 ? (e in r || (r[e] = s), r[e]) : (r = +(e.charAt(i - 1) + e.substr(i + 1)), 1 < i ? V(t, e.substr(0, i - 1)) + r : s + r) : null == e ? s : +e
    }

    function j(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Q(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
    }

    function G(t, e) {
        return t && O(t) && "length" in t && (!e && !t.length || t.length - 1 in t && O(t[0])) && !t.nodeType && t !== vt
    }

    function W(t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }

    function H(t) {
        if (f(t)) return t;
        var c = O(t) ? t : {
                each: t
            },
            _ = Ae(c.ease),
            d = c.from || 0,
            m = parseFloat(c.base) || 0,
            g = {},
            t = 0 < d && d < 1,
            v = isNaN(d) || t,
            y = c.axis,
            w = d,
            x = d;
        return A(d) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            } [d] || 0 : !t && v && (w = d[0], x = d[1]),
            function (t, e, i) {
                var r, n, s, a, o, u, h, l, f = (i || c).length,
                    p = g[f];
                if (!p) {
                    if (!(l = "auto" === c.grid ? 0 : (c.grid || [1, qt])[1])) {
                        for (u = -qt; u < (u = i[l++].getBoundingClientRect().left) && l < f;);
                        l--
                    }
                    for (p = g[f] = [], r = v ? Math.min(l, f) * w - .5 : d % l, n = v ? f * x / l - .5 : d / l | 0, h = qt, o = u = 0; o < f; o++) s = o % l - r, a = n - (o / l | 0), p[o] = a = y ? Math.abs("y" === y ? a : s) : Wt(s * s + a * a), u < a && (u = a), a < h && (h = a);
                    "random" === d && W(p), p.max = u - h, p.min = h, p.v = f = (parseFloat(c.amount) || parseFloat(c.each) * (f < l ? f - 1 : y ? "y" === y ? f / l : l : Math.max(l, f / l)) || 0) * ("edges" === d ? -1 : 1), p.b = f < 0 ? m - f : m, p.u = Q(c.amount || c.each) || 0, _ = _ && f < 0 ? Ce(_) : _
                }
                return f = (p[t] - p.min) / p.max || 0, L(p.b + (_ ? _(f) : f) * p.v) + p.u
            }
    }

    function Z(e) {
        var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function (t) {
            return Math.floor(Math.round(parseFloat(t) / e) * e * i) / i + (M(t) ? 0 : Q(t))
        }
    }

    function $(u, t) {
        var h, l, e = Jt(u);
        return !e && O(u) && (h = e = u.radius || qt, u.values ? (u = ge(u.values), (l = !M(u[0])) && (h *= h)) : u = Z(u.increment)), j(t, e ? f(u) ? function (t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t
        } : function (t) {
            for (var e, i, r = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), s = qt, a = 0, o = u.length; o--;)(e = l ? (e = u[o].x - r) * e + (i = u[o].y - n) * i : Math.abs(u[o] - r)) < s && (s = e, a = o);
            return a = !h || s <= h ? u[a] : t, l || a === t || M(t) ? a : a + Q(t)
        } : Z(u))
    }

    function J(t, e, i, r) {
        return j(Jt(t) ? !e : !0 === i ? !!(i = 0) : !r, function () {
            return Jt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / i) * i * r) / r
        })
    }

    function K(e, i, t) {
        return j(t, function (t) {
            return e[~~i(t)]
        })
    }

    function tt(t) {
        for (var e, i, r, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) r = t.indexOf(")", e), n = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(n ? ne : Kt), a += t.substr(s, e - s) + J(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5), s = r + 1;
        return a + t.substr(s, t.length - s)
    }

    function et(t, e, i) {
        var r, n, s, a = t.labels,
            o = qt;
        for (r in a)(n = a[r] - e) < 0 == !!i && n && o > (n = Math.abs(n)) && (s = r, o = n);
        return s
    }

    function it(t) {
        return N(t), t.progress() < 1 && mt(t, "onInterrupt"), t
    }

    function rt(t, e, i) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * ve + .5 | 0
    }

    function nt(t, e, i) {
        var r, n, s, a, o, u, h, l = t ? M(t) ? [t >> 16, t >> 8 & ve, t & ve] : 0 : ye.black;
        if (!l) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) l = ye[t];
            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s), l = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ve, t & ve];
            else if ("hsl" === t.substr(0, 3))
                if (l = h = t.match(Kt), e) {
                    if (~t.indexOf("=")) return l = t.match(te), i && l.length < 4 && (l[3] = 1), l
                } else a = +l[0] % 360 / 360, o = l[1] / 100, r = 2 * (u = l[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < l.length && (l[3] *= 1), l[0] = rt(a + 1 / 3, r, n), l[1] = rt(a, r, n), l[2] = rt(a - 1 / 3, r, n);
            else l = t.match(Kt) || ye.transparent;
            l = l.map(Number)
        }
        return e && !h && (r = l[0] / ve, n = l[1] / ve, s = l[2] / ve, u = ((t = Math.max(r, n, s)) + (e = Math.min(r, n, s))) / 2, t === e ? a = o = 0 : (h = t - e, o = .5 < u ? h / (2 - t - e) : h / (t + e), a = t === r ? (n - s) / h + (n < s ? 6 : 0) : t === n ? (s - r) / h + 2 : (r - n) / h + 4, a *= 60), l[0] = ~~(a + .5), l[1] = ~~(100 * o + .5), l[2] = ~~(100 * u + .5)), i && l.length < 4 && (l[3] = 1), l
    }

    function st(t) {
        var e = [],
            i = [],
            r = -1;
        return t.split(we).forEach(function (t) {
            t = t.match(ee) || [];
            e.push.apply(e, t), i.push(r += t.length + 1)
        }), e.c = i, e
    }

    function at(t, e, i) {
        var r, n, s, a, o = "",
            u = (t + o).match(we),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function (t) {
                return (t = nt(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), i && (s = st(t), (r = i.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(we, "1").split(ee)).length - 1; l < a; l++) o += n[l] + (~r.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : i).shift());
        if (!n)
            for (a = (n = t.split(we)).length - 1; l < a; l++) o += n[l] + u[l];
        return o + n[a]
    }

    function ot(t) {
        var e = t.join(" ");
        if (we.lastIndex = 0, we.test(e)) return e = xe.test(e), t[1] = at(t[1], e), t[0] = at(t[0], e, st(t[1])), !0
    }

    function ut(t, e) {
        for (var i, r = t._first; r;) r instanceof Re ? ut(r, e) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === e || (r.timeline ? ut(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next
    }

    function ht(t, e, i, r) {
        void 0 === i && (i = function (t) {
            return 1 - e(1 - t)
        }), void 0 === r && (r = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, s = {
            easeIn: e,
            easeOut: i,
            easeInOut: r
        };
        return c(t, function (t) {
            for (var e in Me[t] = se[t] = s, Me[n = t.toLowerCase()] = i, s) Me[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Me[t + "." + e] = s[e]
        }), 1
    }

    function lt(e) {
        return function (t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function ft(i, t, e) {
        function r(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Zt((t - s) * a) + 1
        }
        var n = 1 <= t ? t : 1,
            s = (a = (e || (i ? .3 : .45)) / (t < 1 ? t : 1)) / jt * (Math.asin(1 / n) || 0),
            t = "out" === i ? r : "in" === i ? function (t) {
                return 1 - r(1 - t)
            } : lt(r),
            a = jt / a;
        return t.config = function (t, e) {
            return ft(i, t, e)
        }, t
    }

    function pt(e, i) {
        function r(t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
        }
        void 0 === i && (i = 1.70158);
        var t = "out" === e ? r : "in" === e ? function (t) {
            return 1 - r(1 - t)
        } : lt(r);
        return t.config = function (t) {
            return pt(e, t)
        }, t
    }

    function ct(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function _t(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    }

    function dt(e, t, i, r, n) {
        var s = t - e,
            a = r - i;
        return j(n, function (t) {
            return i + ((t - e) / s * a || 0)
        })
    }

    function mt(t, e, i) {
        var r = t.vars,
            n = r[e];
        return n && (e = r[e + "Params"], t = r.callbackScope || t, i && oe.length && Y(), e ? n.apply(t, e) : n.call(t))
    }
    var gt, vt, yt, wt, xt, Tt, bt, Mt, Ot, kt, Ct, At, Dt, St, Pt, zt, Ft, Rt, Et, Bt, Lt, Yt, It, Xt, Nt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Ut = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        qt = 1e8,
        Vt = 1 / qt,
        jt = 2 * Math.PI,
        Qt = jt / 4,
        Gt = 0,
        Wt = Math.sqrt,
        Ht = Math.cos,
        Zt = Math.sin,
        $t = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        Jt = Array.isArray,
        Kt = /(?:-?\.?\d|\.)+/gi,
        te = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        ee = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ie = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        re = /[+-]=-?[\.\d]+/,
        ne = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        se = {},
        ae = {},
        oe = [],
        ue = {},
        he = {},
        le = {},
        fe = 30,
        pe = [],
        ce = "",
        _e = {
            _start: 0,
            endTime: S
        },
        de = function (t, e, i) {
            return i < t ? t : e < i ? e : i
        },
        me = [].slice,
        ge = function (t, e) {
            return !A(t) || e || !yt && be() ? Jt(t) ? (i = e, void 0 === r && (r = []), t.forEach(function (t) {
                return A(t) && !i || G(t, 1) ? r.push.apply(r, ge(t)) : r.push(t)
            }) || r) : G(t) ? me.call(t, 0) : t ? [t] : [] : me.call(wt.querySelectorAll(t), 0);
            var i, r
        },
        ve = 255,
        ye = {
            aqua: [0, ve, ve],
            lime: [0, ve, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, ve],
            navy: [0, 0, 128],
            white: [ve, ve, ve],
            olive: [128, 128, 0],
            yellow: [ve, ve, 0],
            orange: [ve, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [ve, 0, 0],
            pink: [ve, 192, 203],
            cyan: [0, ve, ve],
            transparent: [ve, ve, ve, 0]
        },
        we = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in ye) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        xe = /hsl[a]?\(/,
        Te = (zt = Date.now, Ft = 500, Rt = 33, Et = zt(), Bt = Et, Yt = Lt = 1e3 / 240, Dt = {
            time: 0,
            frame: 0,
            tick: function () {
                De(!0)
            },
            deltaRatio: function (t) {
                return St / (1e3 / (t || 60))
            },
            wake: function () {
                Tt && (!yt && e() && (vt = yt = window, wt = vt.document || {}, se.gsap = ai, (vt.gsapVersions || (vt.gsapVersions = [])).push(ai.version), i(xt || vt.GreenSockGlobals || !vt.gsap && vt || {}), At = vt.requestAnimationFrame), kt && Dt.sleep(), Ct = At || function (t) {
                    return setTimeout(t, Yt - 1e3 * Dt.time + 1 | 0)
                }, Ot = 1, De(2))
            },
            sleep: function () {
                (At ? vt.cancelAnimationFrame : clearTimeout)(kt), Ot = 0, Ct = S
            },
            lagSmoothing: function (t, e) {
                Ft = t || 1e8, Rt = Math.min(e, Ft, 0)
            },
            fps: function (t) {
                Lt = 1e3 / (t || 240), Yt = 1e3 * Dt.time + Lt
            },
            add: function (t) {
                It.indexOf(t) < 0 && It.push(t), be()
            },
            remove: function (t) {
                ~(t = It.indexOf(t)) && It.splice(t, 1) && t <= Pt && Pt--
            },
            _listeners: It = []
        }),
        be = function () {
            return !Ot && Te.wake()
        },
        Me = {},
        Oe = /^[\d.\-M][\d.\-,\s]/,
        ke = /["']/g,
        Ce = function (e) {
            return function (t) {
                return 1 - e(1 - t)
            }
        },
        Ae = function (t, e) {
            return t && (f(t) ? t : Me[t] || (s = ((i = t) + "").split("("), (a = Me[s[0]]) && 1 < s.length && a.config ? a.config.apply(null, ~i.indexOf("{") ? [function (t) {
                for (var e, i, r, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) i = s[o], e = o !== u - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), n[a] = isNaN(r) ? r.replace(ke, "").trim() : +r, a = i.substr(e + 1).trim();
                return n
            }(s[1])] : (n = (r = i).indexOf("(") + 1, t = r.indexOf(")"), s = r.indexOf("(", n), r.substring(n, ~s && s < t ? r.indexOf(")", t + 1) : t).split(",").map(h))) : Me._CE && Oe.test(i) ? Me._CE("", i) : a)) || e;
            var i, r, n, s, a
        };

    function De(t) {
        var e, i, r, n = zt() - Bt,
            s = !0 === t;
        if (Ft < n && (Et += n - Rt), (0 < (n = (i = (Bt += n) - Et) - Yt) || s) && (r = ++Dt.frame, St = i - 1e3 * Dt.time, Dt.time = i /= 1e3, Yt += n + (Lt <= n ? 4 : Lt - n), e = 1), s || (kt = Ct(De)), e)
            for (Pt = 0; Pt < It.length; Pt++) It[Pt](i, St, r, t)
    }

    function Se(t) {
        return t < 1 / 2.75 ? Xt * t * t : t < .7272727272727273 ? Xt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Xt * (t -= 2.25 / 2.75) * t + .9375 : Xt * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    c("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var i = e < 5 ? e + 1 : e;
        ht(t + ",Power" + (i - 1), e ? function (t) {
            return Math.pow(t, i)
        } : function (t) {
            return t
        }, function (t) {
            return 1 - Math.pow(1 - t, i)
        }, function (t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        })
    }), Me.Linear.easeNone = Me.none = Me.Linear.easeIn, ht("Elastic", ft("in"), ft("out"), ft()), Xt = 7.5625, ht("Bounce", function (t) {
        return 1 - Se(1 - t)
    }, Se), ht("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), ht("Circ", function (t) {
        return -(Wt(1 - t * t) - 1)
    }), ht("Sine", function (t) {
        return 1 === t ? 1 : 1 - Ht(t * Qt)
    }), ht("Back", pt("in"), pt("out"), pt()), Me.SteppedEase = Me.steps = se.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
                r = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function (t) {
                return ((r * de(0, .99999999, t) | 0) + n) * i
            }
        }
    }, Ut.ease = Me["quad.out"], c("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return ce += t + "," + t + "Params,"
    });
    var Pe = function (t, e) {
            this.id = Gt++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : a, this.set = e ? e.getSetter : $e
        },
        ze = ((Er = Fe.prototype).delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Er.duration = function (t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Er.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, q(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Er.totalTime = function (t, e) {
            if (be(), !arguments.length) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for (y(this, t); i.parent;) i.parent._time !== i._start + (0 <= i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && w(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Vt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), u(this, t, e)), this
        }, Er.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + g(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }, Er.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Er.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + g(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Er.iteration = function (t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? _t(this._tTime, i) + 1 : 1
        }, Er.timeScale = function (t) {
            if (!arguments.length) return this._rts === -Vt ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? v(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -Vt ? 0 : this._rts,
                function (t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this.totalTime(de(-this._delay, this._tDur, e), !0))
        }, Er.paused = function (t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (be(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Vt) && Math.abs(this._zTime) !== Vt))), this) : this._ps
        }, Er.startTime = function (t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || w(e, this, t - this._delay), this
            }
            return this._start
        }, Er.endTime = function (t) {
            return this._start + (R(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, Er.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? v(e.rawTime(t), this) : this._tTime : this._tTime
        }, Er.globalTime = function (t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
            return i
        }, Er.repeat = function (t) {
            return arguments.length ? (this._repeat = t, T(this)) : this._repeat
        }, Er.repeatDelay = function (t) {
            return arguments.length ? (this._rDelay = t, T(this)) : this._rDelay
        }, Er.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Er.seek = function (t, e) {
            return this.totalTime(V(this, t), R(e))
        }, Er.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, R(e))
        }, Er.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Er.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Er.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Er.resume = function () {
            return this.paused(!1)
        }, Er.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Vt : 0)), this) : this._rts < 0
        }, Er.invalidate = function () {
            return this._initted = 0, this._zTime = -Vt, this
        }, Er.isActive = function () {
            var t, e = this.parent || this._dp,
                i = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - Vt))
        }, Er.eventCallback = function (t, e, i) {
            var r = this.vars;
            return 1 < arguments.length ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
        }, Er.then = function (r) {
            var n = this;
            return new Promise(function (e) {
                function t() {
                    var t = n.then;
                    n.then = null, f(i) && (i = i(n)) && (i.then || i === n) && (n.then = t), e(i), n.then = t
                }
                var i = f(r) ? r : l;
                n._initted && 1 === n.totalProgress() && 0 <= n._ts || !n._tTime && n._ts < 0 ? t() : n._prom = t
            })
        }, Er.kill = function () {
            it(this)
        }, Fe);

    function Fe(t, e) {
        var i = t.parent || gt;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, q(this, +t.duration, 1, 1), this.data = t.data, Ot || Te.wake(), i && w(i, this, e || 0 === e ? e : i._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }
    I(ze.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Vt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Re = function (i) {
        function t(t, e) {
            return void 0 === t && (t = {}), (e = i.call(this, t, e) || this).labels = {}, e.smoothChildTiming = !!t.smoothChildTiming, e.autoRemoveChildren = !!t.autoRemoveChildren, e._sort = R(t.sortChildren), e.parent && z(e.parent, b(e)), t.scrollTrigger && F(b(e), t.scrollTrigger), e
        }
        r(t, i);
        var e = t.prototype;
        return e.to = function (t, e, i, r) {
            return new Ue(t, o(arguments, 0, this), V(this, M(e) ? r : i)), this
        }, e.from = function (t, e, i, r) {
            return new Ue(t, o(arguments, 1, this), V(this, M(e) ? r : i)), this
        }, e.fromTo = function (t, e, i, r, n) {
            return new Ue(t, o(arguments, 2, this), V(this, M(e) ? n : r)), this
        }, e.set = function (t, e, i) {
            return e.duration = 0, e.parent = this, P(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ue(t, e, V(this, i), 1), this
        }, e.call = function (t, e, i) {
            return w(this, Ue.delayedCall(0, t, e), V(this, i))
        }, e.staggerTo = function (t, e, i, r, n, s, a) {
            return i.duration = e, i.stagger = i.stagger || r, i.onComplete = s, i.onCompleteParams = a, i.parent = this, new Ue(t, i, V(this, n)), this
        }, e.staggerFrom = function (t, e, i, r, n, s, a) {
            return i.runBackwards = 1, P(i).immediateRender = R(i.immediateRender), this.staggerTo(t, e, i, r, n, s, a)
        }, e.staggerFromTo = function (t, e, i, r, n, s, a, o) {
            return r.startAt = i, P(r).immediateRender = R(r.immediateRender), this.staggerTo(t, e, r, n, s, a, o)
        }, e.render = function (t, e, i) {
            var r, n, s, a, o, u, h, l, f, p, c, _ = this._time,
                d = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                g = this !== gt && d - Vt < t && 0 <= t ? d : t < Vt ? 0 : t,
                v = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (g !== this._tTime || i || v) {
                if (_ !== this._time && m && (g += this._time - _, t += this._time - _), r = g, f = this._start, u = !(l = this._ts), v && (m || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat && (y = this._yoyo, r = L(g % (o = m + this._rDelay)), g === d ? (a = this._repeat, r = m) : ((a = ~~(g / o)) && a === g / o && (r = m, a--), m < r && (r = m)), p = _t(this._tTime, o), !_ && this._tTime && p !== a && (p = a), y && 1 & a && (r = m - r, c = 1), a !== p && !this._lock)) {
                    var v = y && 1 & p,
                        y = v === (y && 1 & a);
                    if (a < p && (v = !v), _ = v ? 0 : m, this._lock = 1, this.render(_ || (c ? 0 : L(a * o)), e, !m)._lock = 0, !e && this.parent && mt(this, "onRepeat"), this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1), _ !== this._time || u != !this._ts) return this;
                    if (m = this._dur, d = this._tDur, y && (this._lock = 2, _ = v ? m : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !c && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    ut(this, c)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function (t, e, i) {
                        var r;
                        if (e < i)
                            for (r = t._first; r && r._start <= i;) {
                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= i;) {
                                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, L(_), L(r))) && (g -= r - (r = h._start)), this._tTime = g, this._time = r, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), _ || !r || e || mt(this, "onStart"), _ <= r && 0 <= t)
                    for (n = this._first; n;) {
                        if (s = n._next, (n._act || r >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, i);
                            if (n.render(0 < n._ts ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, e, i), r !== this._time || !this._ts && !u) {
                                h = 0, s && (g += this._zTime = -Vt);
                                break
                            }
                        }
                        n = s
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : r; n;) {
                            if (s = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, i);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, i), r !== this._time || !this._ts && !u) {
                                    h = 0, s && (g += this._zTime = w ? -Vt : Vt);
                                    break
                                }
                            }
                            n = s
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= r ? 0 : -Vt)._zTime = _ <= r ? 1 : -1, this._ts)) return this._start = f, x(this), this.render(t, e, i);
                this._onUpdate && !e && mt(this, "onUpdate", !0), (g === d && d >= this.totalDuration() || !g && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && m || !(g === d && 0 < this._ts || !g && this._ts < 0) || N(this, 1), e || t < 0 && !_ || !g && !_ || (mt(this, g === d ? "onComplete" : "onReverseComplete", !0), !this._prom || g < d && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function (t, e) {
            var i = this;
            if (M(e) || (e = V(this, e)), !(t instanceof ze)) {
                if (Jt(t)) return t.forEach(function (t) {
                    return i.add(t, e)
                }), this;
                if (A(t)) return this.addLabel(t, e);
                if (!f(t)) return this;
                t = Ue.delayedCall(0, t)
            }
            return this !== t ? w(this, t, e) : this
        }, e.getChildren = function (t, e, i, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -qt);
            for (var n = [], s = this._first; s;) s._start >= r && (s instanceof Ue ? e && n.push(s) : (i && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, i)))), s = s._next;
            return n
        }, e.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                if (e[i].vars.id === t) return e[i]
        }, e.remove = function (t) {
            return A(t) ? this.removeLabel(t) : f(t) ? this.killTweensOf(t) : (d(this, t), t === this._recent && (this._recent = this._last), m(this))
        }, e.totalTime = function (t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = L(Te.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function (t, e) {
            return this.labels[t] = V(this, e), this
        }, e.removeLabel = function (t) {
            return delete this.labels[t], this
        }, e.addPause = function (t, e, i) {
            i = Ue.delayedCall(0, e || S, i);
            return i.data = "isPause", this._hasPause = 1, w(this, i, V(this, t))
        }, e.removePause = function (t) {
            var e = this._first;
            for (t = V(this, t); e;) e._start === t && "isPause" === e.data && N(e), e = e._next
        }, e.killTweensOf = function (t, e, i) {
            for (var r = this.getTweensOf(t, i), n = r.length; n--;) Ye !== r[n] && r[n].kill(t, e);
            return this
        }, e.getTweensOf = function (t, e) {
            for (var i, r = [], n = ge(t), s = this._first, a = M(e); s;) s instanceof Ue ? function (t, e) {
                for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
                return r < i
            }(s._targets, n) && (a ? (!Ye || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s) : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i), s = s._next;
            return r
        }, e.tweenTo = function (t, e) {
            e = e || {};
            var i = this,
                r = V(i, t),
                t = e.startAt,
                n = e.onStart,
                s = e.onStartParams,
                a = Ue.to(i, I(e, {
                    ease: "none",
                    lazy: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (t && "time" in t ? t.time : i._time)) / i.timeScale()) || Vt,
                    onStart: function () {
                        i.pause();
                        var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                        a._dur !== t && q(a, t, 0, 1).render(a._time, !0, !0), n && n.apply(a, s || [])
                    }
                }));
            return a
        }, e.tweenFromTo = function (t, e, i) {
            return this.tweenTo(e, I({
                startAt: {
                    time: V(this, t)
                }
            }, i))
        }, e.recent = function () {
            return this._recent
        }, e.nextLabel = function (t) {
            return void 0 === t && (t = this._time), et(this, V(this, t))
        }, e.previousLabel = function (t) {
            return void 0 === t && (t = this._time), et(this, V(this, t), 1)
        }, e.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Vt)
        }, e.shiftChildren = function (t, e, i) {
            void 0 === i && (i = 0);
            for (var r, n = this._first, s = this.labels; n;) n._start >= i && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (r in s) s[r] >= i && (s[r] += t);
            return m(this)
        }, e.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this)
        }, e.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), m(this)
        }, e.totalDuration = function (t) {
            var e, i, r, n = 0,
                s = this,
                a = s._last,
                o = qt;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (r = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), o < (i = a._start) && s._sort && a._ts && !s._lock ? (s._lock = 1, w(s, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (n -= i, (!r && !s._dp || r && r.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = e;
                q(s, s === gt && s._time > n ? s._time : n, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, t.updateRoot = function (t) {
            if (gt._ts && (u(gt, v(t, gt)), bt = Te.frame), Te.frame >= fe) {
                fe += Nt.autoSleep || 120;
                var e = gt._first;
                if ((!e || !e._ts) && Nt.autoSleep && Te._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Te.sleep()
                }
            }
        }, t
    }(ze);

    function Ee(t, e, i, r, n, s) {
        var a, o, u, h;
        if (he[t] && !1 !== (a = new he[t]).init(n, a.rawVars ? e[t] : function (t, e, i, r, n) {
                if (f(t) && (t = Ie(t, n, e, i, r)), !O(t) || t.style && t.nodeType || Jt(t) || $t(t)) return A(t) ? Ie(t, n, e, i, r) : t;
                var s, a = {};
                for (s in t) a[s] = Ie(t[s], n, e, i, r);
                return a
            }(e[t], r, n, s, i), i, r, s) && (i._pt = o = new ii(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Mt))
            for (u = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
        return a
    }
    I(Re.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function Be(t, e, i, r, n, s, a, o, u) {
        f(r) && (r = r(n || 0, t, s));
        var n = t[e],
            s = "get" !== i ? i : f(n) ? u ? t[e.indexOf("set") || !f(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : n,
            i = f(n) ? u ? Ze : He : We;
        if (A(r) && (~r.indexOf("random(") && (r = tt(r)), "=" === r.charAt(1) && (r = parseFloat(s) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Q(s) || 0))), s !== r) return isNaN(s * r) ? (n || e in t || D(e, r), function (t, e, i, r, n, s, a) {
            var o, u, h, l, f, p = new ii(this._pt, t, e, 0, 1, ti, null, n),
                c = 0,
                _ = 0;
            for (p.b = i, p.e = r, i += "", (n = ~(r += "").indexOf("random(")) && (r = tt(r)), s && (s(s = [i, r], t, e), i = s[0], r = s[1]), o = i.match(ie) || []; f = ie.exec(r);) h = f[0], l = r.substring(c, f.index), u ? u = (u + 1) % 5 : "rgba(" === l.substr(-5) && (u = 1), h !== o[_++] && (f = parseFloat(o[_ - 1]) || 0, p._pt = {
                _next: p._pt,
                p: l || 1 === _ ? l : ",",
                s: f,
                c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - f,
                m: u && u < 4 ? Math.round : 0
            }, c = ie.lastIndex);
            return p.c = c < r.length ? r.substring(c, r.length) : "", p.fp = a, (re.test(r) || n) && (p.e = 0), this._pt = p
        }.call(this, t, e, s, r, i, o || Nt.stringFilter, u)) : (i = new ii(this._pt, t, e, +s || 0, r - (s || 0), "boolean" == typeof n ? Ke : Je, 0, i), u && (i.fp = u), a && i.modifier(a, this, t), this._pt = i)
    }

    function Le(t, e) {
        var i, r, n, s, a, o, u, h, l, f, p, c, _, d = t.vars,
            m = d.ease,
            g = d.startAt,
            v = d.immediateRender,
            y = d.lazy,
            w = d.onUpdate,
            x = d.onUpdateParams,
            T = d.callbackScope,
            b = d.runBackwards,
            M = d.yoyoEase,
            O = d.keyframes,
            k = d.autoRevert,
            C = t._dur,
            A = t._startAt,
            D = t._targets,
            S = t.parent,
            P = S && "nested" === S.data ? S.parent._targets : D,
            z = "auto" === t._overwrite,
            F = t.timeline;
        if (!F || O && m || (m = "none"), t._ease = Ae(m, Ut.ease), t._yEase = M ? Ce(Ae(!0 === M ? m : M, Ut.ease)) : 0, M && t._yoyo && !t._repeat && (M = t._yEase, t._yEase = t._ease, t._ease = M), !F) {
            if (c = (h = D[0] ? B(D[0]).harness : 0) && d[h.prop], i = X(d, ae), A && A.render(-1, !0).kill(), g) {
                if (N(t._startAt = Ue.set(D, I({
                        data: "isStart",
                        overwrite: !1,
                        parent: S,
                        immediateRender: !0,
                        lazy: R(y),
                        startAt: null,
                        delay: 0,
                        onUpdate: w,
                        onUpdateParams: x,
                        callbackScope: T,
                        stagger: 0
                    }, g))), v)
                    if (0 < e) k || (t._startAt = 0);
                    else if (C && !(e < 0 && A)) return void(e && (t._zTime = e))
            } else if (b && C)
                if (A) k || (t._startAt = 0);
                else if (e && (v = !1), n = I({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: v && R(y),
                    immediateRender: v,
                    stagger: 0,
                    parent: S
                }, i), c && (n[h.prop] = c), N(t._startAt = Ue.set(D, n)), v) {
                if (!e) return
            } else Le(t._startAt, Vt);
            for (t._pt = 0, y = C && R(y) || y && !C, r = 0; r < D.length; r++) {
                if (u = (a = D[r])._gsap || E(D)[r]._gsap, t._ptLookup[r] = f = {}, ue[u.id] && oe.length && Y(), p = P === D ? r : P.indexOf(a), h && !1 !== (l = new h).init(a, c || i, t, p, P) && (t._pt = s = new ii(t._pt, a, l.name, 0, 1, l.render, l, 0, l.priority), l._props.forEach(function (t) {
                        f[t] = s
                    }), l.priority && (o = 1)), !h || c)
                    for (n in i) he[n] && (l = Ee(n, i, t, p, a, P)) ? l.priority && (o = 1) : f[n] = s = Be.call(t, a, n, "get", i[n], p, P, 0, d.stringFilter);
                t._op && t._op[r] && t.kill(a, t._op[r]), z && t._pt && (Ye = t, gt.killTweensOf(a, f, t.globalTime(0)), _ = !t.parent, Ye = 0), t._pt && y && (ue[u.id] = 1)
            }
            o && ei(t), t._onInit && t._onInit(t)
        }
        t._from = !F && !!d.runBackwards, t._onUpdate = w, t._initted = (!t._op || t._pt) && !_
    }
    var Ye, Ie = function (t, e, i, r, n) {
            return f(t) ? t.call(e, i, r, n) : A(t) && ~t.indexOf("random(") ? tt(t) : t
        },
        Xe = ce + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ne = (Xe + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Ue = function (T) {
            function n(t, e, i, r) {
                var n;
                "number" == typeof e && (i.duration = e, e = i, i = null);
                var s, a, o, u, h, l, f, p, c = (n = T.call(this, r ? e : P(e), i) || this).vars,
                    _ = c.duration,
                    d = c.delay,
                    m = c.immediateRender,
                    g = c.stagger,
                    v = c.overwrite,
                    y = c.keyframes,
                    r = c.defaults,
                    i = c.scrollTrigger,
                    w = c.yoyoEase,
                    c = n.parent,
                    x = (Jt(t) || $t(t) ? M(t[0]) : "length" in e) ? [t] : ge(t);
                if (n._targets = x.length ? E(x) : C("GSAP target " + t + " not found. https://greensock.com", !Nt.nullTargetWarn) || [], n._ptLookup = [], n._overwrite = v, y || g || k(_) || k(d)) {
                    if (e = n.vars, (s = n.timeline = new Re({
                            data: "nested",
                            defaults: r || {}
                        })).kill(), s.parent = b(n), y) I(s.vars.defaults, {
                        ease: "none"
                    }), y.forEach(function (t) {
                        return s.to(x, t, ">")
                    });
                    else {
                        if (u = x.length, f = g ? H(g) : S, O(g))
                            for (h in g) ~Xe.indexOf(h) && ((p = p || {})[h] = g[h]);
                        for (a = 0; a < u; a++) {
                            for (h in o = {}, e) Ne.indexOf(h) < 0 && (o[h] = e[h]);
                            o.stagger = 0, w && (o.yoyoEase = w), p && ct(o, p), l = x[a], o.duration = +Ie(_, b(n), a, l, x), o.delay = (+Ie(d, b(n), a, l, x) || 0) - n._delay, !g && 1 === u && o.delay && (n._delay = d = o.delay, n._start += d, o.delay = 0), s.to(l, o, f(a, l, x))
                        }
                        s.duration() ? _ = d = 0 : n.timeline = 0
                    }
                    _ || n.duration(_ = s.duration())
                } else n.timeline = 0;
                return !0 === v && (Ye = b(n), gt.killTweensOf(x), Ye = 0), c && z(c, b(n)), (m || !_ && !y && n._start === L(c._time) && R(m) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(b(n)) && "nested" !== c.data) && (n._tTime = -Vt, n.render(Math.max(0, -d))), i && F(b(n), i), n
            }
            r(n, T);
            var t = n.prototype;
            return t.render = function (t, e, i) {
                var r, n, s, a, o, u, h, l, f, p = this._time,
                    c = this._tDur,
                    _ = this._dur,
                    d = c - Vt < t && 0 <= t ? c : t < Vt ? 0 : t;
                if (_) {
                    if (d !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
                        if (r = d, l = this.timeline, this._repeat) {
                            if (r = L(d % (a = _ + this._rDelay)), d === c ? (s = this._repeat, r = _) : ((s = ~~(d / a)) && s === d / a && (r = _, s--), _ < r && (r = _)), (u = this._yoyo && 1 & s) && (f = this._yEase, r = _ - r), o = _t(this._tTime, a), r === p && !i && this._initted) return this;
                            s !== o && (l && this._yEase && ut(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = i = 1, this.render(L(a * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (U(this, t < 0 ? t : r, i, e)) return this._tTime = 0, this;
                            if (_ !== this._dur) return this.render(t, e, i)
                        }
                        for (this._tTime = d, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(r / _), this._from && (this.ratio = h = 1 - h), !r || p || e || mt(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(t < 0 ? t : !r && u ? -Vt : l._dur * h, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), mt(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && mt(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && _ || !(d === this._tDur && 0 < this._ts || !d && this._ts < 0) || N(this, 1), e || t < 0 && !p || !d && !p || (mt(this, d === c ? "onComplete" : "onReverseComplete", !0), !this._prom || d < c && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function (t, e, i, r) {
                    var n, s, a = t.ratio,
                        o = e < 0 || !e && a && !t._start && t._zTime > Vt && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        u = t._rDelay,
                        h = 0;
                    if (u && t._repeat && (h = de(0, t._tDur, e), _t(h, u) !== (s = _t(t._tTime, u)) && (a = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== a || r || t._zTime === Vt || !e && t._zTime) {
                        if (t._initted || !U(t, e, r, i)) {
                            for (s = t._zTime, t._zTime = e || (i ? Vt : 0), i = i || e && !s, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, i || mt(t, "onStart"), n = t._pt; n;) n.r(o, n.d), n = n._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && mt(t, "onUpdate"), h && t._repeat && !i && t.parent && mt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && N(t, 1), i || (mt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        }
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, i);
                return this
            }, t.targets = function () {
                return this._targets
            }, t.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), T.prototype.invalidate.call(this)
            }, t.kill = function (t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return it(this);
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ye && !0 !== Ye.vars.overwrite)._first || it(this), this.parent && i !== this.timeline.totalDuration() && q(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var r, n, s, a, o, u, h, l = this._targets,
                    f = t ? ge(t) : l,
                    p = this._ptLookup,
                    t = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                        for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                        return i < 0
                    }(l, f)) return "all" === e && (this._pt = 0), it(this);
                for (r = this._op = this._op || [], "all" !== e && (A(e) && (o = {}, c(e, function (t) {
                        return o[t] = 1
                    }), e = o), e = function (t, e) {
                        var i, r, n, s, t = t[0] ? B(t[0]).harness : 0,
                            a = t && t.aliases;
                        if (!a) return e;
                        for (r in i = ct({}, e), a)
                            if (r in i)
                                for (n = (s = a[r].split(",")).length; n--;) i[s[n]] = i[r];
                        return i
                    }(l, e)), h = l.length; h--;)
                    if (~f.indexOf(l[h]))
                        for (o in n = p[h], "all" === e ? (r[h] = e, a = n, s = {}) : (s = r[h] = r[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || d(this, u, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
                return this._initted && !this._pt && t && it(this), this
            }, n.to = function (t, e, i) {
                return new n(t, e, i)
            }, n.from = function (t) {
                return new n(t, o(arguments, 1))
            }, n.delayedCall = function (t, e, i, r) {
                return new n(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: r
                })
            }, n.fromTo = function (t) {
                return new n(t, o(arguments, 2))
            }, n.set = function (t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new n(t, e)
            }, n.killTweensOf = function (t, e, i) {
                return gt.killTweensOf(t, e, i)
            }, n
        }(ze);

    function qe(t, e, i) {
        return t.setAttribute(e, i)
    }

    function Ve(t, e, i, r) {
        r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
    }
    I(Ue.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), c("staggerTo,staggerFrom,staggerFromTo", function (i) {
        Ue[i] = function () {
            var t = new Re,
                e = me.call(arguments, 0);
            return e.splice("staggerFromTo" === i ? 5 : 4, 0, 0), t[i].apply(t, e)
        }
    });

    function je(t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    }

    function Qe(t, e, i, r) {
        for (var n, s = this._pt; s;) n = s._next, s.p === r && s.modifier(t, e, i), s = n
    }

    function Ge(t) {
        for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? d(this, r, "_pt") : r.dep || (e = 1), r = i;
        return !e
    }
    var We = function (t, e, i) {
            return t[e] = i
        },
        He = function (t, e, i) {
            return t[e](i)
        },
        Ze = function (t, e, i, r) {
            return t[e](r.fp, i)
        },
        $e = function (t, e) {
            return f(t[e]) ? He : n(t[e]) && t.setAttribute ? qe : We
        },
        Je = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        Ke = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        ti = function (t, e) {
            var i = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        ei = function (t) {
            for (var e, i, r, n, s = t._pt; s;) {
                for (e = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                (s._prev = i ? i._prev : n) ? s._prev._next = s: r = s, (s._next = i) ? i._prev = s : n = s, s = e
            }
            t._pt = r
        },
        ii = (ri.prototype.modifier = function (t, e, i) {
            this.mSet = this.mSet || this.set, this.set = Ve, this.m = t, this.mt = i, this.tween = e
        }, ri);

    function ri(t, e, i, r, n, s, a, o, u) {
        this.t = e, this.s = r, this.c = n, this.p = i, this.r = s || Je, this.d = a || this, this.set = o || We, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    c(ce + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
        return ae[t] = 1
    }), se.TweenMax = se.TweenLite = Ue, se.TimelineLite = se.TimelineMax = Re, gt = new Re({
        sortChildren: !1,
        defaults: Ut,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Nt.stringFilter = ot;
    var ni = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function (t) {
                var e = (t = !t.name && t.default || t).name,
                    i = f(t),
                    r = e && !i && t.init ? function () {
                        this._props = []
                    } : t,
                    n = {
                        init: S,
                        render: je,
                        add: Be,
                        kill: Ge,
                        modifier: Qe,
                        rawVars: 0
                    },
                    i = {
                        targetTest: 0,
                        get: 0,
                        getSetter: $e,
                        aliases: {},
                        register: 0
                    };
                if (be(), t !== r) {
                    if (he[e]) return;
                    I(r, I(X(t, n), i)), ct(r.prototype, ct(n, X(t, i))), he[r.prop = e] = r, t.targetTest && (pe.push(r), ae[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                s(e, r), t.register && t.register(ai, r, ii)
            })
        },
        timeline: function (t) {
            return new Re(t)
        },
        getTweensOf: function (t, e) {
            return gt.getTweensOf(t, e)
        },
        getProperty: function (r, t, e, i) {
            A(r) && (r = ge(r)[0]);
            var n = B(r || {}).get,
                s = e ? l : h;
            return "native" === e && (e = ""), r && (t ? s((he[t] && he[t].get || n)(r, t, e, i)) : function (t, e, i) {
                return s((he[t] && he[t].get || n)(r, t, e, i))
            })
        },
        quickSetter: function (i, e, r) {
            if (1 < (i = ge(i)).length) {
                var n = i.map(function (t) {
                        return ai.quickSetter(t, e, r)
                    }),
                    s = n.length;
                return function (t) {
                    for (var e = s; e--;) n[e](t)
                }
            }
            i = i[0] || {};
            var a = he[e],
                o = B(i),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = a ? function (t) {
                    var e = new a;
                    Mt._pt = 0, e.init(i, r ? t + r : t, Mt, 0, [i]), e.render(1, e), Mt._pt && je(1, Mt)
                } : o.set(i, u);
            return a ? h : function (t) {
                return h(i, u, r ? t + r : t, o, 1)
            }
        },
        isTweening: function (t) {
            return 0 < gt.getTweensOf(t, !0).length
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = Ae(t.ease, Ut.ease)), _(Ut, t || {})
        },
        config: function (t) {
            return _(Nt, t || {})
        },
        registerEffect: function (t) {
            var r = t.name,
                n = t.effect,
                e = t.plugins,
                s = t.defaults,
                t = t.extendTimeline;
            (e || "").split(",").forEach(function (t) {
                return t && !he[t] && !se[t] && C(r + " effect requires " + t + " plugin.")
            }), le[r] = function (t, e, i) {
                return n(ge(t), I(e || {}, s), i)
            }, t && (Re.prototype[r] = function (t, e, i) {
                return this.add(le[r](t, O(e) ? e : (i = e) && {}, this), i)
            })
        },
        registerEase: function (t, e) {
            Me[t] = Ae(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? Ae(t, e) : Me
        },
        getById: function (t) {
            return gt.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i, r, n = new Re(t);
            for (n.smoothChildTiming = R(t.smoothChildTiming), gt.remove(n), n._dp = 0, n._time = n._tTime = gt._time, i = gt._first; i;) r = i._next, !e && !i._dur && i instanceof Ue && i.vars.onComplete === i._targets[0] || w(n, i, i._start - i._delay), i = r;
            return w(gt, n, 0), n
        },
        utils: {
            wrap: function t(e, i, r) {
                var n = i - e;
                return Jt(e) ? K(e, t(0, e.length), i) : j(r, function (t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, i, r) {
                var n = i - e,
                    s = 2 * n;
                return Jt(e) ? K(e, t(0, e.length - 1), i) : j(r, function (t) {
                    return e + (n < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: H,
            random: J,
            snap: $,
            normalize: function (t, e, i) {
                return dt(t, e, 0, 1, i)
            },
            getUnit: Q,
            clamp: function (e, i, t) {
                return j(t, function (t) {
                    return de(e, i, t)
                })
            },
            splitColor: nt,
            toArray: ge,
            mapRange: dt,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function (e, i) {
                return function (t) {
                    return e(parseFloat(t)) + (i || Q(t))
                }
            },
            interpolate: function t(e, i, r, n) {
                var s = isNaN(e + i) ? 0 : function (t) {
                    return (1 - t) * e + t * i
                };
                if (!s) {
                    var a, o, u, h, l, f = A(e),
                        p = {};
                    if (!0 === r && (n = 1) && (r = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (Jt(e) && !Jt(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                        h--, s = function (t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, r = i
                    } else n || (e = ct(Jt(e) ? [] : {}, e));
                    if (!u) {
                        for (a in i) Be.call(p, e, a, "get", i[a]);
                        s = function (t) {
                            return je(t, p), f ? e.p : e
                        }
                    }
                }
                return j(r, s)
            },
            shuffle: W
        },
        install: i,
        effects: le,
        ticker: Te,
        updateRoot: Re.updateRoot,
        plugins: he,
        globalTimeline: gt,
        core: {
            PropTween: ii,
            globals: s,
            Tween: Ue,
            Timeline: Re,
            Animation: ze,
            getCache: B,
            _removeLinkedListItem: d
        }
    };

    function si(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, r, e) {
                e._onInit = function (t) {
                    var e, i;
                    if (A(r) && (e = {}, c(r, function (t) {
                            return e[t] = 1
                        }), r = e), n) {
                        for (i in e = {}, r) e[i] = n(r[i]);
                        r = e
                    }! function (t, e) {
                        var i, r, n, s = t._targets;
                        for (i in e)
                            for (r = s.length; r--;)(n = (n = t._ptLookup[r][i]) && n.d) && (n._pt && (n = function (t, e) {
                                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                                return i
                            }(n, i)), n && n.modifier && n.modifier(e[i], t, s[r], i))
                    }(t, r)
                }
            }
        }
    }
    c("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return ni[t] = Ue[t]
    }), Te.add(Re.updateRoot), Mt = ni.to({}, {
        duration: 0
    });
    var ai = ni.registerPlugin({
        name: "attr",
        init: function (t, e, i, r, n) {
            var s, a;
            for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], r, n, 0, 0, s)) && (a.op = s), this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function (t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
        }
    }, si("roundProps", Z), si("modifiers"), si("snap", $)) || ni;

    function oi(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ui(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function hi(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function li(t, e) {
        t = e.s + e.c * t;
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }

    function fi(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function pi(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function ci(t, e, i) {
        return t.style[e] = i
    }

    function _i(t, e, i) {
        return t.style.setProperty(e, i)
    }

    function di(t, e, i) {
        return t._gsap[e] = i
    }

    function mi(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    }

    function gi(t, e, i, r, n) {
        t = t._gsap;
        t.scaleX = t.scaleY = i, t.renderTransform(n, t)
    }

    function vi(t, e, i, r, n) {
        t = t._gsap;
        t[e] = i, t.renderTransform(n, t)
    }

    function yi(t, e) {
        e = Li.createElementNS ? Li.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Li.createElement(t);
        return e.style ? e : Li.createElement(t)
    }

    function wi(t, e, i) {
        var r = getComputedStyle(t);
        return r[e] || r.getPropertyValue(e.replace(pr, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && wi(t, yr(e) || e, 1) || ""
    }

    function xi() {
        "undefined" != typeof window && window.document && (Yi = (Li = window.document).documentElement, Xi = yi("div") || {
            style: {}
        }, Ni = yi("div"), mr = yr(mr), gr = mr + "Origin", Xi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", qi = !!yr("perspective"), Ii = 1)
    }

    function Ti(t) {
        var e, i = yi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            n = this.nextSibling,
            s = this.style.cssText;
        if (Yi.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Ti
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), Yi.removeChild(i), this.style.cssText = s, e
    }

    function bi(t, e) {
        for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    }

    function Mi(e) {
        var i;
        try {
            i = e.getBBox()
        } catch (t) {
            i = Ti.call(e, !0)
        }
        return i && (i.width || i.height) || e.getBBox === Ti || (i = Ti.call(e, !0)), !i || i.width || i.x || i.y ? i : {
            x: +bi(e, ["x", "cx", "x1"]) || 0,
            y: +bi(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Oi(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Mi(t))
    }

    function ki(t, e) {
        e && (t = t.style, e in ur && e !== gr && (e = mr), t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(pr, "-$1").toLowerCase())) : t.removeAttribute(e))
    }

    function Ci(t, e, i, r, n, s) {
        s = new ii(t._pt, e, i, 0, 1, s ? pi : fi);
        return (t._pt = s).b = r, s.e = n, t._props.push(i), s
    }

    function Ai(t, e, i, r) {
        var n = parseFloat(i) || 0,
            s = (i + "").trim().substr((n + "").length) || "px",
            a = Xi.style,
            o = cr.test(e),
            u = "svg" === t.tagName.toLowerCase(),
            h = (u ? "client" : "offset") + (o ? "Width" : "Height"),
            l = "px" === r,
            f = "%" === r;
        return r === s || !n || wr[r] || wr[s] ? n : ("px" === s || l || (n = Ai(t, e, i, "px")), i = t.getCTM && Oi(t), f && (ur[e] || ~e.indexOf("adius")) ? L(n / (i ? t.getBBox()[o ? "width" : "height"] : t[h]) * 100) : (a[o ? "width" : "height"] = 100 + (l ? s : r), u = ~e.indexOf("adius") || "em" === r && t.appendChild && !u ? t : t.parentNode, i && (u = (t.ownerSVGElement || {}).parentNode), u && u !== Li && u.appendChild || (u = Li.body), (i = u._gsap) && f && i.width && o && i.time === Te.time ? L(n / i.width * 100) : (!f && "%" !== s || (a.position = wi(t, "position")), u === t && (a.position = "static"), u.appendChild(Xi), t = Xi[h], u.removeChild(Xi), a.position = "absolute", o && f && ((i = B(u)).time = Te.time, i.width = u[h]), L(l ? t * n / 100 : t && n ? 100 / t * n : 0))))
    }

    function Di(t, e, i, r) {
        var n;
        return Ii || xi(), e in dr && "transform" !== e && ~(e = dr[e]).indexOf(",") && (e = e.split(",")[0]), ur[e] && "transform" !== e ? (n = Or(t, r), n = "transformOrigin" !== e ? n[e] : kr(wi(t, gr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !r && !~(n + "").indexOf("calc(") || (n = Tr[e] && Tr[e](t, e, i) || wi(t, e) || a(t, e) || ("opacity" === e ? 1 : 0)), i && !~(n + "").indexOf(" ") ? Ai(t, e, n, i) + i : n
    }

    function Si(t, e, i, r) {
        var n;
        i && "none" !== i || ((s = (n = yr(e, t, 1)) && wi(t, n, 1)) && s !== i ? (e = n, i = s) : "borderColor" === e && (i = wi(t, "borderTopColor")));
        var s, a, o, u, h, l, f, p, c, _, d = new ii(this._pt, t.style, e, 0, 1, ti),
            m = 0,
            g = 0;
        if (d.b = i, d.e = r, i += "", "auto" == (r += "") && (t.style[e] = r, r = wi(t, e) || r, t.style[e] = i), ot(s = [i, r]), r = s[1], a = (i = s[0]).match(ee) || [], (r.match(ee) || []).length) {
            for (; l = ee.exec(r);) p = l[0], f = r.substring(m, l.index), u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1), p !== (h = a[g++] || "") && (o = parseFloat(h) || 0, c = h.substr((o + "").length), (_ = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), l = parseFloat(p), p = p.substr((l + "").length), m = ee.lastIndex - p.length, p || (p = p || Nt.units[e] || c, m === r.length && (r += p, d.e += p)), c !== p && (o = Ai(t, e, h, p) || 0), d._pt = {
                _next: d._pt,
                p: f || 1 === g ? f : ",",
                s: o,
                c: _ ? _ * l : l - o,
                m: u && u < 4 ? Math.round : 0
            });
            d.c = m < r.length ? r.substring(m, r.length) : ""
        } else d.r = "display" === e && "none" === r ? pi : fi;
        return re.test(r) && (d.e = 0), this._pt = d
    }

    function Pi(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, r, n, s = e.t,
                a = s.style,
                o = e.u,
                e = s._gsap;
            if ("all" === o || !0 === o) a.cssText = "", r = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) i = o[n], ur[i] && (r = 1, i = "transformOrigin" === i ? gr : mr), ki(s, i);
            r && (ki(s, mr), e && (e.svg && s.removeAttribute("transform"), Or(s, 1), e.uncache = 1))
        }
    }

    function zi(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Fi(t) {
        t = wi(t, mr);
        return zi(t) ? br : t.substr(7).match(te).map(L)
    }

    function Ri(t, e) {
        var i, r, n, s = t._gsap || B(t),
            a = t.style,
            o = Fi(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (o = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? br : o : (o !== br || t.offsetParent || t === Yi || s.svg || (r = a.display, a.display = "block", (s = t.parentNode) && t.offsetParent || (n = 1, i = t.nextSibling, Yi.appendChild(t)), o = Fi(t), r ? a.display = r : ki(t, "display"), n && (i ? s.insertBefore(t, i) : s ? s.appendChild(t) : Yi.removeChild(t))), e && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    }

    function Ei(t, e, i, r, n, s) {
        var a, o, u = t._gsap,
            h = n || Ri(t, !0),
            l = u.xOrigin || 0,
            f = u.yOrigin || 0,
            p = u.xOffset || 0,
            c = u.yOffset || 0,
            _ = h[0],
            d = h[1],
            m = h[2],
            g = h[3],
            v = h[4],
            y = h[5],
            w = e.split(" "),
            x = parseFloat(w[0]) || 0,
            n = parseFloat(w[1]) || 0;
        i ? h !== br && (a = _ * g - d * m) && (o = x * (-d / a) + n * (_ / a) - (_ * y - d * v) / a, x = x * (g / a) + n * (-m / a) + (m * y - g * v) / a, n = o) : (x = (o = Mi(t)).x + (~w[0].indexOf("%") ? x / 100 * o.width : x), n = o.y + (~(w[1] || w[0]).indexOf("%") ? n / 100 * o.height : n)), r || !1 !== r && u.smooth ? (v = x - l, y = n - f, u.xOffset = p + (v * _ + y * m) - v, u.yOffset = c + (v * d + y * g) - y) : u.xOffset = u.yOffset = 0, u.xOrigin = x, u.yOrigin = n, u.smooth = !!r, u.origin = e, u.originIsAbsolute = !!i, t.style[gr] = "0px 0px", s && (Ci(s, u, "xOrigin", l, x), Ci(s, u, "yOrigin", f, n), Ci(s, u, "xOffset", p, u.xOffset), Ci(s, u, "yOffset", c, u.yOffset)), t.setAttribute("data-svg-origin", x + " " + n)
    }

    function Bi(t, e, i) {
        var r = Q(e);
        return L(parseFloat(e) + parseFloat(Ai(t, "x", i + "px", r))) + r
    }
    Ue.version = Re.version = ai.version = "3.5.1", Tt = 1, e() && be();
    var Li, Yi, Ii, Xi, Ni, Ui, qi, Vi = Me.Power0,
        ji = Me.Power1,
        Qi = Me.Power2,
        Gi = Me.Power3,
        Wi = Me.Power4,
        Hi = Me.Linear,
        Zi = Me.Quad,
        $i = Me.Cubic,
        Ji = Me.Quart,
        Ki = Me.Quint,
        tr = Me.Strong,
        er = Me.Elastic,
        ir = Me.Back,
        rr = Me.SteppedEase,
        nr = Me.Bounce,
        sr = Me.Sine,
        ar = Me.Expo,
        or = Me.Circ,
        ur = {},
        hr = 180 / Math.PI,
        lr = Math.PI / 180,
        fr = Math.atan2,
        pr = /([A-Z])/g,
        cr = /(?:left|right|width|margin|padding|x)/i,
        _r = /[\s,\(]\S/,
        dr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        mr = "transform",
        gr = mr + "Origin",
        vr = "O,Moz,ms,Ms,Webkit".split(","),
        yr = function (t, e, i) {
            var r = (e || Xi).style,
                n = 5;
            if (t in r && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(vr[n] + t in r););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? vr[n] : "") + t
        },
        wr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        xr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Tr = {
            clearProps: function (t, e, i, r, n) {
                if ("isFromStart" !== n.data) {
                    e = t._pt = new ii(t._pt, e, i, 0, 0, Pi);
                    return e.u = r, e.pr = -10, e.tween = n, t._props.push(i), 1
                }
            }
        },
        br = [1, 0, 0, 1, 0, 0],
        Mr = {},
        Or = function (t, e) {
            var i = t._gsap || new Pe(t);
            if ("x" in i && !e && !i.uncache) return i;
            var r, n, s, a, o, u, h, l, f, p, c, _, d, m, g, v, y, w, x, T, b, M, O, k, C, A = t.style,
                D = i.scaleX < 0,
                S = "deg",
                P = wi(t, gr) || "0",
                z = r = n = a = o = u = h = l = 0,
                F = s = 1;
            return i.svg = !(!t.getCTM || !Oi(t)), f = Ri(t, i.svg), i.svg && (w = !i.uncache && t.getAttribute("data-svg-origin"), Ei(t, w || P, !!w || i.originIsAbsolute, !1 !== i.smooth, f)), M = i.xOrigin || 0, k = i.yOrigin || 0, f !== br && (_ = f[0], d = f[1], m = f[2], g = f[3], z = v = f[4], r = y = f[5], 6 === f.length ? (F = Math.sqrt(_ * _ + d * d), s = Math.sqrt(g * g + m * m), a = _ || d ? fr(d, _) * hr : 0, (h = m || g ? fr(m, g) * hr + a : 0) && (s *= Math.cos(h * lr)), i.svg && (z -= M - (M * _ + k * m), r -= k - (M * d + k * g))) : (C = f[6], O = f[7], b = f[8], e = f[9], M = f[10], k = f[11], z = f[12], r = f[13], n = f[14], o = (f = fr(C, M)) * hr, f && (w = v * (p = Math.cos(-f)) + b * (c = Math.sin(-f)), x = y * p + e * c, T = C * p + M * c, b = v * -c + b * p, e = y * -c + e * p, M = C * -c + M * p, k = O * -c + k * p, v = w, y = x, C = T), u = (f = fr(-m, M)) * hr, f && (p = Math.cos(-f), k = g * (c = Math.sin(-f)) + k * p, _ = w = _ * p - b * c, d = x = d * p - e * c, m = T = m * p - M * c), a = (f = fr(d, _)) * hr, f && (w = _ * (p = Math.cos(f)) + d * (c = Math.sin(f)), x = v * p + y * c, d = d * p - _ * c, y = y * p - v * c, _ = w, v = x), o && 359.9 < Math.abs(o) + Math.abs(a) && (o = a = 0, u = 180 - u), F = L(Math.sqrt(_ * _ + d * d + m * m)), s = L(Math.sqrt(y * y + C * C)), f = fr(v, y), h = 2e-4 < Math.abs(f) ? f * hr : 0, l = k ? 1 / (k < 0 ? -k : k) : 0), i.svg && (w = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !zi(wi(t, mr)), w && t.setAttribute("transform", w))), 90 < Math.abs(h) && Math.abs(h) < 270 && (D ? (F *= -1, h += a <= 0 ? 180 : -180, a += a <= 0 ? 180 : -180) : (s *= -1, h += h <= 0 ? 180 : -180)), i.x = ((i.xPercent = z && Math.round(t.offsetWidth / 2) === Math.round(-z) ? -50 : 0) ? 0 : z) + "px", i.y = ((i.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", i.z = n + "px", i.scaleX = L(F), i.scaleY = L(s), i.rotation = L(a) + S, i.rotationX = L(o) + S, i.rotationY = L(u) + S, i.skewX = h + S, i.skewY = 0 + S, i.transformPerspective = l + "px", (i.zOrigin = parseFloat(P.split(" ")[2]) || 0) && (A[gr] = kr(P)), i.xOffset = i.yOffset = 0, i.force3D = Nt.force3D, i.renderTransform = i.svg ? zr : qi ? Pr : Cr, i.uncache = 0, i
        },
        kr = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Cr = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Pr(t, e)
        },
        Ar = "0deg",
        Dr = "0px",
        Sr = ") ",
        Pr = function (t, e) {
            var i = e || this,
                r = i.xPercent,
                n = i.yPercent,
                s = i.x,
                a = i.y,
                o = i.z,
                u = i.rotation,
                h = i.rotationY,
                l = i.rotationX,
                f = i.skewX,
                p = i.skewY,
                c = i.scaleX,
                _ = i.scaleY,
                d = i.transformPerspective,
                m = i.force3D,
                g = i.target,
                v = i.zOrigin,
                y = "",
                e = "auto" === m && t && 1 !== t || !0 === m;
            !v || l === Ar && h === Ar || (i = parseFloat(h) * lr, t = Math.sin(i), m = Math.cos(i), i = parseFloat(l) * lr, s = Bi(g, s, t * (t = Math.cos(i)) * -v), a = Bi(g, a, -Math.sin(i) * -v), o = Bi(g, o, m * t * -v + v)), d !== Dr && (y += "perspective(" + d + Sr), (r || n) && (y += "translate(" + r + "%, " + n + "%) "), !e && s === Dr && a === Dr && o === Dr || (y += o !== Dr || e ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Sr), u !== Ar && (y += "rotate(" + u + Sr), h !== Ar && (y += "rotateY(" + h + Sr), l !== Ar && (y += "rotateX(" + l + Sr), f === Ar && p === Ar || (y += "skew(" + f + ", " + p + Sr), 1 === c && 1 === _ || (y += "scale(" + c + ", " + _ + Sr), g.style[mr] = y || "translate(0, 0)"
        },
        zr = function (t, e) {
            var i, r, n, s, a, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                p = o.rotation,
                c = o.skewX,
                _ = o.skewY,
                d = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                w = o.xOffset,
                x = o.yOffset,
                T = o.forceCSS,
                e = parseFloat(l),
                o = parseFloat(f),
                p = parseFloat(p),
                c = parseFloat(c);
            (_ = parseFloat(_)) && (c += _ = parseFloat(_), p += _), p || c ? (p *= lr, c *= lr, i = Math.cos(p) * d, r = Math.sin(p) * d, n = Math.sin(p - c) * -m, s = Math.cos(p - c) * m, c && (_ *= lr, a = Math.tan(c - _), n *= a = Math.sqrt(1 + a * a), s *= a, _ && (a = Math.tan(_), i *= a = Math.sqrt(1 + a * a), r *= a)), i = L(i), r = L(r), n = L(n), s = L(s)) : (i = d, s = m, r = n = 0), (e && !~(l + "").indexOf("px") || o && !~(f + "").indexOf("px")) && (e = Ai(g, "x", l, "px"), o = Ai(g, "y", f, "px")), (v || y || w || x) && (e = L(e + v - (v * i + y * n) + w), o = L(o + y - (v * r + y * s) + x)), (u || h) && (e = L(e + u / 100 * (a = g.getBBox()).width), o = L(o + h / 100 * a.height)), a = "matrix(" + i + "," + r + "," + n + "," + s + "," + e + "," + o + ")", g.setAttribute("transform", a), T && (g.style[mr] = a)
        };
    c("padding,margin,Width,Radius", function (e, i) {
        var t = "Right",
            r = "Bottom",
            n = "Left",
            o = (i < 3 ? ["Top", t, r, n] : ["Top" + n, "Top" + t, r + t, r + n]).map(function (t) {
                return i < 2 ? e + t : "border" + t + e
            });
        Tr[1 < i ? "border" + e : e] = function (e, t, i, r, n) {
            var s, a;
            if (arguments.length < 4) return s = o.map(function (t) {
                return Di(e, t, i)
            }), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (r + "").split(" "), a = {}, o.forEach(function (t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }), e.init(t, a, n)
        }
    });
    var Fr, Rr = {
        name: "css",
        register: xi,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, i, r, n) {
            var s, a, o, u, h, l, f, p, c, _, d, m, g, v, y, w, x, T, b, M, O, k = this._props,
                C = t.style;
            for (h in Ii || xi(), e)
                if ("autoRound" !== h && (a = e[h], !he[h] || !Ee(h, e, i, r, t, n)))
                    if (x = typeof a, w = Tr[h], "function" === x && (x = typeof (a = a.call(i, r, t, n))), "string" === x && ~a.indexOf("random(") && (a = tt(a)), w) w(this, t, h, a, i) && (m = 1);
                    else if ("--" === h.substr(0, 2)) this.add(C, "setProperty", getComputedStyle(t).getPropertyValue(h) + "", a + "", r, n, 0, 0, h);
            else if ("undefined" !== x) {
                if (s = Di(t, h), u = parseFloat(s), (f = "string" === x && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), h in dr && ("autoAlpha" === h && (1 === u && "hidden" === Di(t, "visibility") && o && (u = 0), Ci(this, C, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== h && "transform" !== h && ~(h = dr[h]).indexOf(",") && (h = h.split(",")[0])), p = h in ur)
                    if (c || ((_ = t._gsap).renderTransform || Or(t), d = !1 !== e.smoothOrigin && _.smooth, (c = this._pt = new ii(this._pt, C, mr, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === h) this._pt = new ii(this._pt, _, "scaleY", _.scaleY, f ? f * o : o - _.scaleY), k.push("scaleY", h), h += "X";
                    else {
                        if ("transformOrigin" === h) {
                            O = M = b = void 0, b = (T = a).split(" "), M = b[0], O = b[1] || "50%", "top" !== M && "bottom" !== M && "left" !== O && "right" !== O || (T = M, M = O, O = T), b[0] = xr[M] || M, b[1] = xr[O] || O, a = b.join(" "), _.svg ? Ei(t, a, 0, d, 0, this) : ((l = parseFloat(a.split(" ")[2]) || 0) !== _.zOrigin && Ci(this, _, "zOrigin", _.zOrigin, l), Ci(this, C, h, kr(s), kr(a)));
                            continue
                        }
                        if ("svgOrigin" === h) {
                            Ei(t, a, 1, d, 0, this);
                            continue
                        }
                        if (h in Mr) {
                            g = this, v = _, y = h, w = u, x = f, O = O = M = T = void 0, T = 360, M = A(b = a), O = parseFloat(b) * (M && ~b.indexOf("rad") ? hr : 1), O = w + (x = x ? O * x : O - w) + "deg", M && ("short" === (b = b.split("_")[1]) && (x %= T) != x % 180 && (x += x < 0 ? T : -T), "cw" === b && x < 0 ? x = (x + 36e9) % T - ~~(x / T) * T : "ccw" === b && 0 < x && (x = (x - 36e9) % T - ~~(x / T) * T)), g._pt = x = new ii(g._pt, v, y, w, x, ui), x.e = O, x.u = "deg", g._props.push(y);
                            continue
                        }
                        if ("smoothOrigin" === h) {
                            Ci(this, _, "smooth", _.smooth, a);
                            continue
                        }
                        if ("force3D" === h) {
                            _[h] = a;
                            continue
                        }
                        if ("transform" === h) {
                            ! function (t, e, i) {
                                var r, n, s, a, o, u = Ni.style,
                                    h = i._gsap;
                                for (n in u.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", u[mr] = e, Li.body.appendChild(Ni), r = Or(Ni, 1), ur)(s = h[n]) !== (a = r[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (s = Q(s) !== (o = Q(a)) ? Ai(i, n, s, o) : parseFloat(s), a = parseFloat(a), t._pt = new ii(t._pt, h, n, s, a - s, oi), t._pt.u = o || 0, t._props.push(n));
                                Li.body.removeChild(Ni)
                            }(this, a, t);
                            continue
                        }
                    }
                else h in C || (h = yr(h) || h);
                if (p || (o || 0 === o) && (u || 0 === u) && !_r.test(a) && h in C) o = o || 0, (y = (s + "").substr((u + "").length)) !== (l = Q(a) || (h in Nt.units ? Nt.units[h] : y)) && (u = Ai(t, h, s, l)), this._pt = new ii(this._pt, p ? _ : C, h, u, f ? f * o : o - u, "px" !== l || !1 === e.autoRound || p ? oi : li), this._pt.u = l || 0, y !== l && (this._pt.b = s, this._pt.r = hi);
                else if (h in C) Si.call(this, t, h, s, a);
                else {
                    if (!(h in t)) {
                        D(h, a);
                        continue
                    }
                    this.add(t, h, t[h], a, r, n)
                }
                k.push(h)
            }
            m && ei(this)
        },
        get: Di,
        aliases: dr,
        getSetter: function (t, e, i) {
            var r = dr[e];
            return r && r.indexOf(",") < 0 && (e = r), e in ur && e !== gr && (t._gsap.x || Di(t, "x")) ? i && Ui === i ? "scale" === e ? mi : di : (Ui = i || {}) && ("scale" === e ? gi : vi) : t.style && !n(t.style[e]) ? ci : ~e.indexOf("-") ? _i : $e(t, e)
        },
        core: {
            _removeProperty: ki,
            _getMatrix: Ri
        }
    };
    ai.utils.checkPrefix = yr, Fr = c("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Br = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
        ur[t] = 1
    }), c(Br, function (t) {
        Nt.units[t] = "deg", Mr[t] = 1
    }), dr[Fr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Br, c("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
        t = t.split(":");
        dr[t[1]] = Fr[t[0]]
    }), c("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        Nt.units[t] = "px"
    }), ai.registerPlugin(Rr);
    var Er = ai.registerPlugin(Rr) || ai,
        Br = Er.core.Tween;
    t.Back = ir, t.Bounce = nr, t.CSSPlugin = Rr, t.Circ = or, t.Cubic = $i, t.Elastic = er, t.Expo = ar, t.Linear = Hi, t.Power0 = Vi, t.Power1 = ji, t.Power2 = Qi, t.Power3 = Gi, t.Power4 = Wi, t.Quad = Zi, t.Quart = Ji, t.Quint = Ki, t.Sine = sr, t.SteppedEase = rr, t.Strong = tr, t.TimelineLite = Re, t.TimelineMax = Re, t.TweenLite = Ue, t.TweenMax = Br, t.default = Er, t.gsap = Er, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}), 

document.addEventListener("DOMContentLoaded", function () {
    var t = document.querySelector(".index-page-hero");

    if (window.innerWidth > 1100) {
        function e() {
            dx = clientX - cx, dy = clientY - cy, tiltx = dy / cy, tilty = dx / cx, radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)), degree = 2 * radius, gsap.to(".index-page-hero__cards-container", 1, {
                transform: "rotate3d( ".concat(tiltx, ", ").concat(tilty, ", 0, ").concat(degree, "deg )")
            })
        }

        cx = window.innerWidth / 2, cy = window.innerHeight / 2, t.addEventListener("mousemove", function (t) {
            clientX = t.pageX, clientY = t.pageY, request = requestAnimationFrame(e)
        })
    }
});