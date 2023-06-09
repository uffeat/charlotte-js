/*! UIkit 3.16.6 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */ (function(me, ve) {
    typeof exports == "object" && typeof module < "u" ? module.exports = ve() : typeof define == "function" && define.amd ? define("uikit", ve) : (me = typeof globalThis < "u" ? globalThis : me || self, me.UIkit = ve());
})(this, function() {
    "use strict";
    const { hasOwnProperty: me , toString: ve  } = Object.prototype;
    function Et(t, e) {
        return me.call(t, e);
    }
    const Bo = /\B([A-Z])/g, Zt = pt((t)=>t.replace(Bo, "-$1").toLowerCase()), Mo = /-(\w)/g, we = pt((t)=>(t.charAt(0).toLowerCase() + t.slice(1)).replace(Mo, (e, i)=>i.toUpperCase())), Pt = pt((t)=>t.charAt(0).toUpperCase() + t.slice(1));
    function rt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
    }
    function Qt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
    }
    function g(t, e) {
        var i;
        return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
    }
    function $t(t, e) {
        var i;
        return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
    }
    const { isArray: Q , from: _i  } = Array, { assign: xt  } = Object;
    function tt(t) {
        return typeof t == "function";
    }
    function At(t) {
        return t !== null && typeof t == "object";
    }
    function yt(t) {
        return ve.call(t) === "[object Object]";
    }
    function te(t) {
        return At(t) && t === t.window;
    }
    function Ue(t) {
        return Oi(t) === 9;
    }
    function qe(t) {
        return Oi(t) >= 1;
    }
    function ee(t) {
        return Oi(t) === 1;
    }
    function Oi(t) {
        return !te(t) && At(t) && t.nodeType;
    }
    function Bi(t) {
        return typeof t == "boolean";
    }
    function M(t) {
        return typeof t == "string";
    }
    function ie(t) {
        return typeof t == "number";
    }
    function wt(t) {
        return ie(t) || M(t) && !isNaN(t - parseFloat(t));
    }
    function be(t) {
        return !(Q(t) ? t.length : At(t) && Object.keys(t).length);
    }
    function V(t) {
        return t === void 0;
    }
    function Mi(t) {
        return Bi(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function kt(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e;
    }
    function $(t) {
        return parseFloat(t) || 0;
    }
    function L(t) {
        return k(t)[0];
    }
    function k(t) {
        return qe(t) ? [
            t
        ] : Array.from(t || []).filter(qe);
    }
    function se(t) {
        if (te(t)) return t;
        t = L(t);
        const e = Ue(t) ? t : t == null ? void 0 : t.ownerDocument;
        return (e == null ? void 0 : e.defaultView) || window;
    }
    function $e(t, e) {
        return t === e || At(t) && At(e) && Object.keys(t).length === Object.keys(e).length && St(t, (i, s)=>i === e[s]);
    }
    function Di(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), (s)=>s === e ? i : e);
    }
    function ne(t) {
        return t[t.length - 1];
    }
    function St(t, e) {
        for(const i in t)if (e(t[i], i) === !1) return !1;
        return !0;
    }
    function Ve(t, e) {
        return t.slice().sort(({ [e]: i = 0  }, { [e]: s = 0  })=>i > s ? 1 : s > i ? -1 : 0);
    }
    function Nt(t, e) {
        return t.reduce((i, s)=>i + $(tt(e) ? e(s) : s[e]), 0);
    }
    function As(t, e) {
        const i = new Set;
        return t.filter(({ [e]: s  })=>i.has(s) ? !1 : i.add(s));
    }
    function Ni(t, e) {
        return e.reduce((i, s)=>({
                ...i,
                [s]: t[s]
            }), {});
    }
    function et(t, e = 0, i = 1) {
        return Math.min(Math.max(kt(t) || 0, e), i);
    }
    function S() {}
    function zi(...t) {
        return [
            [
                "bottom",
                "top"
            ],
            [
                "right",
                "left"
            ]
        ].every(([e, i])=>Math.min(...t.map(({ [e]: s  })=>s)) - Math.max(...t.map(({ [i]: s  })=>s)) > 0);
    }
    function Ye(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function Fi(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        };
    }
    function _s(t, e) {
        t = {
            ...t
        };
        for(const i in t)t = t[i] > e[i] ? Fi(t, i, e[i]) : t;
        return t;
    }
    function Do(t, e) {
        t = _s(t, e);
        for(const i in t)t = t[i] < e[i] ? Fi(t, i, e[i]) : t;
        return t;
    }
    const Ge = {
        ratio: Fi,
        contain: _s,
        cover: Do
    };
    function dt(t, e, i = 0, s = !1) {
        e = k(e);
        const { length: n  } = e;
        return n ? (t = wt(t) ? kt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(L(t)), s ? et(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
    }
    function pt(t) {
        const e = Object.create(null);
        return (i)=>e[i] || (e[i] = t(i));
    }
    class Xe {
        constructor(){
            this.promise = new Promise((e, i)=>{
                this.reject = i, this.resolve = e;
            });
        }
    }
    function f(t, e, i) {
        var s;
        if (At(e)) {
            for(const n in e)f(t, n, e[n]);
            return;
        }
        if (V(i)) return (s = L(t)) == null ? void 0 : s.getAttribute(e);
        for (const n of k(t))tt(i) && (i = i.call(n, f(n, e))), i === null ? xe(n, e) : n.setAttribute(e, i);
    }
    function bt(t, e) {
        return k(t).some((i)=>i.hasAttribute(e));
    }
    function xe(t, e) {
        k(t).forEach((i)=>i.removeAttribute(e));
    }
    function it(t, e) {
        for (const i of [
            e,
            `data-${e}`
        ])if (bt(t, i)) return f(t, i);
    }
    const No = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    function Hi(t) {
        return k(t).some((e)=>No[e.tagName.toLowerCase()]);
    }
    function U(t) {
        return k(t).some((e)=>e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }
    const ye = "input,select,textarea,button";
    function Li(t) {
        return k(t).some((e)=>E(e, ye));
    }
    const ke = `${ye},a[href],[tabindex]`;
    function Je(t) {
        return E(t, ke);
    }
    function _(t) {
        var e;
        return (e = L(t)) == null ? void 0 : e.parentElement;
    }
    function Se(t, e) {
        return k(t).filter((i)=>E(i, e));
    }
    function E(t, e) {
        return k(t).some((i)=>i.matches(e));
    }
    function Y(t, e) {
        return ee(t) ? t.closest(rt(e, ">") ? e.slice(1) : e) : k(t).map((i)=>Y(i, e)).filter(Boolean);
    }
    function D(t, e) {
        return M(e) ? !!Y(t, e) : L(e).contains(L(t));
    }
    function oe(t, e) {
        const i = [];
        for(; t = _(t);)(!e || E(t, e)) && i.push(t);
        return i;
    }
    function P(t, e) {
        t = L(t);
        const i = t ? k(t.children) : [];
        return e ? Se(i, e) : i;
    }
    function re(t, e) {
        return e ? k(t).indexOf(L(e)) : P(_(t)).indexOf(t);
    }
    function ae(t) {
        return t = L(t), t && [
            "origin",
            "pathname",
            "search"
        ].every((e)=>t[e] === location[e]);
    }
    function Wi(t) {
        if (ae(t)) {
            t = L(t);
            const e = decodeURIComponent(t.hash).substring(1);
            return document.getElementById(e) || document.getElementsByName(e)[0];
        }
    }
    function at(t, e) {
        return Ri(t, Bs(t, e));
    }
    function Ie(t, e) {
        return Ce(t, Bs(t, e));
    }
    function Ri(t, e) {
        return L(Ms(t, L(e), "querySelector"));
    }
    function Ce(t, e) {
        return k(Ms(t, L(e), "querySelectorAll"));
    }
    const zo = /(^|[^\\],)\s*[!>+~-]/, Os = pt((t)=>t.match(zo));
    function Bs(t, e = document) {
        return M(t) && Os(t) || Ue(e) ? e : e.ownerDocument;
    }
    const Fo = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, Ho = pt((t)=>t.replace(Fo, "$1 *"));
    function Ms(t, e = document, i) {
        if (!t || !M(t)) return t;
        if (t = Ho(t), Os(t)) {
            const s = Wo(t);
            t = "";
            for (let n of s){
                let o = e;
                if (n[0] === "!") {
                    const r = n.substr(1).trim().split(" ");
                    if (o = Y(_(e), r[0]), n = r.slice(1).join(" ").trim(), !n.length && s.length === 1) return o;
                }
                if (n[0] === "-") {
                    const r = n.substr(1).trim().split(" "), a = (o || e).previousElementSibling;
                    o = E(a, n.substr(1)) ? a : null, n = r.slice(1).join(" ");
                }
                o && (t += `${t ? "," : ""}${Ro(o)} ${n}`);
            }
            e = document;
        }
        try {
            return e[i](t);
        } catch  {
            return null;
        }
    }
    const Lo = /.*?[^\\](?:,|$)/g, Wo = pt((t)=>t.match(Lo).map((e)=>e.replace(/,$/, "").trim()));
    function Ro(t) {
        const e = [];
        for(; t.parentNode;){
            const i = f(t, "id");
            if (i) {
                e.unshift(`#${ji(i)}`);
                break;
            } else {
                let { tagName: s  } = t;
                s !== "HTML" && (s += `:nth-child(${re(t) + 1})`), e.unshift(s), t = t.parentNode;
            }
        }
        return e.join(" > ");
    }
    function ji(t) {
        return M(t) ? CSS.escape(t) : "";
    }
    function x(...t) {
        let [e, i, s, n, o = !1] = Ui(t);
        n.length > 1 && (n = Uo(n)), o != null && o.self && (n = qo(n)), s && (n = jo(s, n));
        for (const r of i)for (const a of e)a.addEventListener(r, n, o);
        return ()=>zt(e, i, n, o);
    }
    function zt(...t) {
        let [e, i, , s, n = !1] = Ui(t);
        for (const o of i)for (const r of e)r.removeEventListener(o, s, n);
    }
    function R(...t) {
        const [e, i, s, n, o = !1, r] = Ui(t), a = x(e, i, s, (l)=>{
            const c = !r || r(l);
            c && (a(), n(l, c));
        }, o);
        return a;
    }
    function m(t, e, i) {
        return qi(t).every((s)=>s.dispatchEvent(Ft(e, !0, !0, i)));
    }
    function Ft(t, e = !0, i = !1, s) {
        return M(t) && (t = new CustomEvent(t, {
            bubbles: e,
            cancelable: i,
            detail: s
        })), t;
    }
    function Ui(t) {
        return t[0] = qi(t[0]), M(t[1]) && (t[1] = t[1].split(" ")), tt(t[2]) && t.splice(2, 0, !1), t;
    }
    function jo(t, e) {
        return (i)=>{
            const s = t[0] === ">" ? Ce(t, i.currentTarget).reverse().filter((n)=>D(i.target, n))[0] : Y(i.target, t);
            s && (i.current = s, e.call(this, i), delete i.current);
        };
    }
    function Uo(t) {
        return (e)=>Q(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function qo(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e);
        };
    }
    function Ds(t) {
        return t && "addEventListener" in t;
    }
    function Vo(t) {
        return Ds(t) ? t : L(t);
    }
    function qi(t) {
        return Q(t) ? t.map(Vo).filter(Boolean) : M(t) ? Ce(t) : Ds(t) ? [
            t
        ] : k(t);
    }
    function It(t) {
        return t.pointerType === "touch" || !!t.touches;
    }
    function le(t) {
        var e, i;
        const { clientX: s , clientY: n  } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        };
    }
    const Yo = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };
    function h(t, e, i, s) {
        const n = k(t);
        for (const o of n)if (M(e)) {
            if (e = Vi(e), V(i)) return getComputedStyle(o).getPropertyValue(e);
            o.style.setProperty(e, wt(i) && !Yo[e] ? `${i}px` : i || ie(i) ? i : "", s);
        } else if (Q(e)) {
            const r = {};
            for (const a of e)r[a] = h(o, a);
            return r;
        } else At(e) && (s = i, St(e, (r, a)=>h(o, a, r, s)));
        return n[0];
    }
    const Vi = pt((t)=>Go(t));
    function Go(t) {
        if (rt(t, "--")) return t;
        t = Zt(t);
        const { style: e  } = document.documentElement;
        if (t in e) return t;
        for (const i of [
            "webkit",
            "moz"
        ]){
            const s = `-${i}-${t}`;
            if (s in e) return s;
        }
    }
    function y(t, ...e) {
        Ns(t, e, "add");
    }
    function F(t, ...e) {
        Ns(t, e, "remove");
    }
    function Yi(t, e) {
        f(t, "class", (i)=>(i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""));
    }
    function Gi(t, ...e) {
        e[0] && F(t, e[0]), e[1] && y(t, e[1]);
    }
    function N(t, e) {
        return [e] = Xi(e), !!e && k(t).some((i)=>i.classList.contains(e));
    }
    function q(t, e, i) {
        const s = Xi(e);
        V(i) || (i = !!i);
        for (const n of k(t))for (const o of s)n.classList.toggle(o, i);
    }
    function Ns(t, e, i) {
        e = e.reduce((s, n)=>s.concat(Xi(n)), []);
        for (const s of k(t))s.classList[i](...e);
    }
    function Xi(t) {
        return String(t).split(/[ ,]/).filter(Boolean);
    }
    function Xo(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(k(t).map((n)=>new Promise((o, r)=>{
                for(const l in e){
                    const c = h(n, l);
                    c === "" && h(n, l, c);
                }
                const a = setTimeout(()=>m(n, "transitionend"), i);
                R(n, "transitionend transitioncanceled", ({ type: l  })=>{
                    clearTimeout(a), F(n, "uk-transition"), h(n, {
                        transitionProperty: "",
                        transitionDuration: "",
                        transitionTimingFunction: ""
                    }), l === "transitioncanceled" ? r() : o(n);
                }, {
                    self: !0
                }), y(n, "uk-transition"), h(n, {
                    transitionProperty: Object.keys(e).map(Vi).join(","),
                    transitionDuration: `${i}ms`,
                    transitionTimingFunction: s,
                    ...e
                });
            })));
    }
    const I = {
        start: Xo,
        async stop (t) {
            m(t, "transitionend"), await Promise.resolve();
        },
        async cancel (t) {
            m(t, "transitioncanceled"), await Promise.resolve();
        },
        inProgress (t) {
            return N(t, "uk-transition");
        }
    }, Te = "uk-animation-";
    function zs(t, e, i = 200, s, n) {
        return Promise.all(k(t).map((o)=>new Promise((r, a)=>{
                m(o, "animationcanceled");
                const l = setTimeout(()=>m(o, "animationend"), i);
                R(o, "animationend animationcanceled", ({ type: c  })=>{
                    clearTimeout(l), c === "animationcanceled" ? a() : r(o), h(o, "animationDuration", ""), Yi(o, `${Te}\\S*`);
                }, {
                    self: !0
                }), h(o, "animationDuration", `${i}ms`), y(o, e, Te + (n ? "leave" : "enter")), rt(e, Te) && (s && y(o, `uk-transform-origin-${s}`), n && y(o, `${Te}reverse`));
            })));
    }
    const Jo = new RegExp(`${Te}(enter|leave)`), gt = {
        in: zs,
        out (t, e, i, s) {
            return zs(t, e, i, s, !0);
        },
        inProgress (t) {
            return Jo.test(f(t, "class"));
        },
        cancel (t) {
            m(t, "animationcanceled");
        }
    };
    function Ko(t) {
        if (document.readyState !== "loading") {
            t();
            return;
        }
        R(document, "DOMContentLoaded", t);
    }
    function J(t, ...e) {
        return e.some((i)=>{
            var s;
            return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase();
        });
    }
    function Fs(t) {
        return t = w(t), t.innerHTML = "", t;
    }
    function _t(t, e) {
        return V(e) ? w(t).innerHTML : j(Fs(t), e);
    }
    const Zo = Qe("prepend"), j = Qe("append"), Ke = Qe("before"), Ze = Qe("after");
    function Qe(t) {
        return function(e, i) {
            var s;
            const n = k(M(i) ? Ht(i) : i);
            return (s = w(e)) == null || s[t](...n), Hs(n);
        };
    }
    function lt(t) {
        k(t).forEach((e)=>e.remove());
    }
    function ti(t, e) {
        for(e = L(Ke(t, e)); e.firstChild;)e = e.firstChild;
        return j(e, t), e;
    }
    function Ji(t, e) {
        return k(k(t).map((i)=>i.hasChildNodes() ? ti(k(i.childNodes), e) : j(i, e)));
    }
    function Ee(t) {
        k(t).map(_).filter((e, i, s)=>s.indexOf(e) === i).forEach((e)=>e.replaceWith(...e.childNodes));
    }
    const Qo = /^\s*<(\w+|!)[^>]*>/, tr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Ht(t) {
        const e = tr.exec(t);
        if (e) return document.createElement(e[1]);
        const i = document.createElement("div");
        return Qo.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Hs(i.childNodes);
    }
    function Hs(t) {
        return t.length > 1 ? t : t[0];
    }
    function Ct(t, e) {
        if (ee(t)) for(e(t), t = t.firstElementChild; t;){
            const i = t.nextElementSibling;
            Ct(t, e), t = i;
        }
    }
    function w(t, e) {
        return Ls(t) ? L(Ht(t)) : Ri(t, e);
    }
    function O(t, e) {
        return Ls(t) ? k(Ht(t)) : Ce(t, e);
    }
    function Ls(t) {
        return M(t) && rt(t.trim(), "<");
    }
    const Lt = {
        width: [
            "left",
            "right"
        ],
        height: [
            "top",
            "bottom"
        ]
    };
    function b(t) {
        const e = ee(t) ? L(t).getBoundingClientRect() : {
            height: st(t),
            width: Pe(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        };
    }
    function A(t, e) {
        const i = b(t);
        if (t) {
            const { scrollY: n , scrollX: o  } = se(t), r = {
                height: n,
                width: o
            };
            for(const a in Lt)for (const l of Lt[a])i[l] += r[a];
        }
        if (!e) return i;
        const s = h(t, "position");
        St(h(t, [
            "left",
            "top"
        ]), (n, o)=>h(t, o, e[o] - i[o] + $(s === "absolute" && n === "auto" ? ei(t)[o] : n)));
    }
    function ei(t) {
        let { top: e , left: i  } = A(t);
        const { ownerDocument: { body: s , documentElement: n  } , offsetParent: o  } = L(t);
        let r = o || n;
        for(; r && (r === s || r === n) && h(r, "position") === "static";)r = r.parentNode;
        if (ee(r)) {
            const a = A(r);
            e -= a.top + $(h(r, "borderTopWidth")), i -= a.left + $(h(r, "borderLeftWidth"));
        }
        return {
            top: e - $(h(t, "marginTop")),
            left: i - $(h(t, "marginLeft"))
        };
    }
    function Wt(t) {
        t = L(t);
        const e = [
            t.offsetTop,
            t.offsetLeft
        ];
        for(; t = t.offsetParent;)if (e[0] += t.offsetTop + $(h(t, "borderTopWidth")), e[1] += t.offsetLeft + $(h(t, "borderLeftWidth")), h(t, "position") === "fixed") {
            const i = se(t);
            return e[0] += i.scrollY, e[1] += i.scrollX, e;
        }
        return e;
    }
    const st = Ws("height"), Pe = Ws("width");
    function Ws(t) {
        const e = Pt(t);
        return (i, s)=>{
            if (V(s)) {
                if (te(i)) return i[`inner${e}`];
                if (Ue(i)) {
                    const n = i.documentElement;
                    return Math.max(n[`offset${e}`], n[`scroll${e}`]);
                }
                return i = L(i), s = h(i, t), s = s === "auto" ? i[`offset${e}`] : $(s) || 0, s - he(i, t);
            } else return h(i, t, !s && s !== 0 ? "" : +s + he(i, t) + "px");
        };
    }
    function he(t, e, i = "border-box") {
        return h(t, "boxSizing") === i ? Nt(Lt[e].map(Pt), (s)=>$(h(t, `padding${s}`)) + $(h(t, `border${s}Width`))) : 0;
    }
    function ii(t) {
        for(const e in Lt)for(const i in Lt[e])if (Lt[e][i] === t) return Lt[e][1 - i];
        return t;
    }
    function ht(t, e = "width", i = window, s = !1) {
        return M(t) ? Nt(ir(t), (n)=>{
            const o = nr(n);
            return o ? or(o === "vh" ? rr() : o === "vw" ? Pe(se(i)) : s ? i[`offset${Pt(e)}`] : b(i)[e], n) : n;
        }) : $(t);
    }
    const er = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, ir = pt((t)=>t.toString().replace(/\s/g, "").match(er) || []), sr = /(?:v[hw]|%)$/, nr = pt((t)=>(t.match(sr) || [])[0]);
    function or(t, e) {
        return t * $(e) / 100;
    }
    let Ae, ce;
    function rr() {
        return Ae || (ce || (ce = w("<div>"), h(ce, {
            height: "100vh",
            position: "fixed"
        }), x(window, "resize", ()=>Ae = null)), j(document.body, ce), Ae = ce.clientHeight, lt(ce), Ae);
    }
    const Rt = typeof window < "u", K = Rt && document.dir === "rtl", jt = Rt && "ontouchstart" in window, ue = Rt && window.PointerEvent, mt = ue ? "pointerdown" : jt ? "touchstart" : "mousedown", si = ue ? "pointermove" : jt ? "touchmove" : "mousemove", Ot = ue ? "pointerup" : jt ? "touchend" : "mouseup", Tt = ue ? "pointerenter" : jt ? "" : "mouseenter", Bt = ue ? "pointerleave" : jt ? "" : "mouseleave", ni = ue ? "pointercancel" : "touchcancel", G = {
        reads: [],
        writes: [],
        read (t) {
            return this.reads.push(t), Zi(), t;
        },
        write (t) {
            return this.writes.push(t), Zi(), t;
        },
        clear (t) {
            js(this.reads, t), js(this.writes, t);
        },
        flush: Ki
    };
    function Ki(t) {
        Rs(G.reads), Rs(G.writes.splice(0)), G.scheduled = !1, (G.reads.length || G.writes.length) && Zi(t + 1);
    }
    const ar = 4;
    function Zi(t) {
        G.scheduled || (G.scheduled = !0, t && t < ar ? Promise.resolve().then(()=>Ki(t)) : requestAnimationFrame(()=>Ki(1)));
    }
    function Rs(t) {
        let e;
        for(; e = t.shift();)try {
            e();
        } catch (i) {
            console.error(i);
        }
    }
    function js(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1);
    }
    function Qi() {}
    Qi.prototype = {
        positions: [],
        init () {
            this.positions = [];
            let t;
            this.unbind = x(document, "mousemove", (e)=>t = le(e)), this.interval = setInterval(()=>{
                t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift());
            }, 50);
        },
        cancel () {
            var t;
            (t = this.unbind) == null || t.call(this), clearInterval(this.interval);
        },
        movesTo (t) {
            if (this.positions.length < 2) return !1;
            const e = t.getBoundingClientRect(), { left: i , right: s , top: n , bottom: o  } = e, [r] = this.positions, a = ne(this.positions), l = [
                r,
                a
            ];
            return Ye(a, e) ? !1 : [
                [
                    {
                        x: i,
                        y: n
                    },
                    {
                        x: s,
                        y: o
                    }
                ],
                [
                    {
                        x: i,
                        y: o
                    },
                    {
                        x: s,
                        y: n
                    }
                ]
            ].some((u)=>{
                const d = lr(l, u);
                return d && Ye(d, e);
            });
        }
    };
    function lr([{ x: t , y: e  }, { x: i , y: s  }], [{ x: n , y: o  }, { x: r , y: a  }]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0) return !1;
        const c = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return c < 0 ? !1 : {
            x: t + c * (i - t),
            y: e + c * (s - e)
        };
    }
    function ts(t, e, i = {}, s = !0) {
        const n = new IntersectionObserver(s ? (o, r)=>{
            o.some((a)=>a.isIntersecting) && e(o, r);
        } : e, i);
        for (const o of k(t))n.observe(o);
        return n;
    }
    const hr = Rt && window.ResizeObserver;
    function oi(t, e, i = {
        box: "border-box"
    }) {
        return hr ? qs(ResizeObserver, t, e, i) : (cr(), _e.add(e), {
            observe: S,
            unobserve: S,
            disconnect () {
                _e.delete(e);
            }
        });
    }
    let _e;
    function cr() {
        if (_e) return;
        _e = new Set;
        let t;
        const e = ()=>{
            if (!t) {
                t = !0, requestAnimationFrame(()=>t = !1);
                for (const i of _e)i();
            }
        };
        x(window, "load resize", e), x(document, "loadedmetadata load", e, !0);
    }
    function Us(t, e, i) {
        return qs(MutationObserver, t, e, i);
    }
    function qs(t, e, i, s) {
        const n = new t(i);
        for (const o of k(e))n.observe(o, s);
        return n;
    }
    function Vs(t) {
        if (ai(t) && es(t, {
            func: "playVideo",
            method: "play"
        }), ri(t)) try {
            t.play().catch(S);
        } catch  {}
    }
    function Ys(t) {
        ai(t) && es(t, {
            func: "pauseVideo",
            method: "pause"
        }), ri(t) && t.pause();
    }
    function Gs(t) {
        ai(t) && es(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), ri(t) && (t.muted = !0);
    }
    function Xs(t) {
        return ri(t) || ai(t);
    }
    function ri(t) {
        return J(t, "video");
    }
    function ai(t) {
        return J(t, "iframe") && (Js(t) || Ks(t));
    }
    function Js(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }
    function Ks(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function es(t, e) {
        await dr(t), Zs(t, e);
    }
    function Zs(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify({
                event: "command",
                ...e
            }), "*");
        } catch  {}
    }
    const is = "_ukPlayer";
    let ur = 0;
    function dr(t) {
        if (t[is]) return t[is];
        const e = Js(t), i = Ks(t), s = ++ur;
        let n;
        return t[is] = new Promise((o)=>{
            e && R(t, "load", ()=>{
                const r = ()=>Zs(t, {
                        event: "listening",
                        id: s
                    });
                n = setInterval(r, 100), r();
            }), R(window, "message", o, !1, ({ data: r  })=>{
                try {
                    return r = JSON.parse(r), e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s;
                } catch  {}
            }), t.src = `${t.src}${g(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
        }).then(()=>clearInterval(n));
    }
    function ss(t, e = 0, i = 0) {
        return U(t) ? zi(...Ut(t).map((s)=>{
            const { top: n , left: o , bottom: r , right: a  } = ct(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            };
        }).concat(A(t))) : !1;
    }
    function Qs(t, { offset: e = 0  } = {}) {
        const i = U(t) ? vt(t, !1, [
            "hidden"
        ]) : [];
        return i.reduce((r, a, l)=>{
            const { scrollTop: c , scrollHeight: u , offsetHeight: d  } = a, p = ct(a), v = u - p.height, { height: C , top: H  } = i[l - 1] ? ct(i[l - 1]) : A(t);
            let z = Math.ceil(H - p.top - e + c);
            return e > 0 && d < C + e ? z += e : e = 0, z > v ? (e -= z - v, z = v) : z < 0 && (e -= z, z = 0), ()=>s(a, z - c).then(r);
        }, ()=>Promise.resolve())();
        function s(r, a) {
            return new Promise((l)=>{
                const c = r.scrollTop, u = n(Math.abs(a)), d = Date.now();
                (function p() {
                    const v = o(et((Date.now() - d) / u));
                    r.scrollTop = c + a * v, v === 1 ? l() : requestAnimationFrame(p);
                })();
            });
        }
        function n(r) {
            return 40 * Math.pow(r, .375);
        }
        function o(r) {
            return .5 * (1 - Math.cos(Math.PI * r));
        }
    }
    function ns(t, e = 0, i = 0) {
        if (!U(t)) return 0;
        const [s] = vt(t, !0), { scrollHeight: n , scrollTop: o  } = s, { height: r  } = ct(s), a = n - r, l = Wt(t)[0] - Wt(s)[0], c = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
        return et((o - c) / (u - c));
    }
    function vt(t, e = !1, i = []) {
        const s = tn(t);
        let n = oe(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = $t(n, (r)=>h(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [
            s
        ].concat(n.filter((r)=>h(r, "overflow").split(" ").some((a)=>g([
                    "auto",
                    "scroll",
                    ...i
                ], a)) && (!e || r.scrollHeight > ct(r).height))).reverse();
    }
    function Ut(t) {
        return vt(t, !1, [
            "hidden",
            "clip"
        ]);
    }
    function ct(t) {
        const e = se(t), { visualViewport: i , document: { documentElement: s  }  } = e;
        let n = t === tn(t) ? e : t;
        if (te(n) && i) {
            let { height: r , width: a , scale: l , pageTop: c , pageLeft: u  } = i;
            return r = Math.round(r * l), a = Math.round(a * l), {
                height: r,
                width: a,
                top: c,
                left: u,
                bottom: c + r,
                right: u + a
            };
        }
        let o = A(n);
        if (h(n, "display") === "inline") return o;
        for (let [r, a, l, c] of [
            [
                "width",
                "x",
                "left",
                "right"
            ],
            [
                "height",
                "y",
                "top",
                "bottom"
            ]
        ])te(n) ? n = s : o[l] += $(h(n, `border-${l}-width`)), o[r] = o[a] = n[`client${Pt(r)}`], o[c] = o[r] + o[l];
        return o;
    }
    function tn(t) {
        return se(t).document.scrollingElement;
    }
    const ut = [
        [
            "width",
            "x",
            "left",
            "right"
        ],
        [
            "height",
            "y",
            "top",
            "bottom"
        ]
    ];
    function en(t, e, i) {
        i = {
            attach: {
                element: [
                    "left",
                    "top"
                ],
                target: [
                    "left",
                    "top"
                ],
                ...i.attach
            },
            offset: [
                0,
                0
            ],
            placement: [],
            ...i
        }, Q(e) || (e = [
            e,
            e
        ]), A(t, sn(t, e, i));
    }
    function sn(t, e, i) {
        const s = nn(t, e, i), { boundary: n , viewportOffset: o = 0 , placement: r  } = i;
        let a = s;
        for (const [l, [c, , u, d]] of Object.entries(ut)){
            const p = fr(t, e[l], o, n, l);
            if (li(s, p, l)) continue;
            let v = 0;
            if (r[l] === "flip") {
                const C = i.attach.target[l];
                if (C === d && s[d] <= p[d] || C === u && s[u] >= p[u]) continue;
                v = gr(t, e, i, l)[u] - s[u];
                const H = pr(t, e[l], o, l);
                if (!li(os(s, v, l), H, l)) {
                    if (li(s, H, l)) continue;
                    if (i.recursion) return !1;
                    const z = mr(t, e, i);
                    if (z && li(z, H, 1 - l)) return z;
                    continue;
                }
            } else if (r[l] === "shift") {
                const C = A(e[l]), { offset: H  } = i;
                v = et(et(s[u], p[u], p[d] - s[c]), C[u] - s[c] + H[l], C[d] - H[l]) - s[u];
            }
            a = os(a, v, l);
        }
        return a;
    }
    function nn(t, e, i) {
        let { attach: s , offset: n  } = {
            attach: {
                element: [
                    "left",
                    "top"
                ],
                target: [
                    "left",
                    "top"
                ],
                ...i.attach
            },
            offset: [
                0,
                0
            ],
            ...i
        }, o = A(t);
        for (const [r, [a, , l, c]] of Object.entries(ut)){
            const u = s.target[r] === s.element[r] ? ct(e[r]) : A(e[r]);
            o = os(o, u[l] - o[l] + on(s.target[r], c, u[a]) - on(s.element[r], c, o[a]) + +n[r], r);
        }
        return o;
    }
    function os(t, e, i) {
        const [, s, n, o] = ut[i], r = {
            ...t
        };
        return r[n] = t[s] = t[n] + e, r[o] += e, r;
    }
    function on(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0;
    }
    function fr(t, e, i, s, n) {
        let o = an(...rn(t, e).map(ct));
        return i && (o[ut[n][2]] += i, o[ut[n][3]] -= i), s && (o = an(o, A(Q(s) ? s[n] : s))), o;
    }
    function pr(t, e, i, s) {
        const [n, o, r, a] = ut[s], [l] = rn(t, e), c = ct(l);
        return [
            "auto",
            "scroll"
        ].includes(h(l, `overflow-${o}`)) && (c[r] -= l[`scroll${Pt(r)}`], c[a] = c[r] + l[`scroll${Pt(n)}`]), c[r] += i, c[a] -= i, c;
    }
    function rn(t, e) {
        return Ut(e).filter((i)=>D(t, i));
    }
    function an(...t) {
        let e = {};
        for (const i of t)for (const [, , s, n] of ut)e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[
            e[n],
            i[n]
        ].filter(Boolean));
        return e;
    }
    function li(t, e, i) {
        const [, , s, n] = ut[i];
        return t[s] >= e[s] && t[n] <= e[n];
    }
    function gr(t, e, { offset: i , attach: s  }, n) {
        return nn(t, e, {
            attach: {
                element: ln(s.element, n),
                target: ln(s.target, n)
            },
            offset: vr(i, n)
        });
    }
    function mr(t, e, i) {
        return sn(t, e, {
            ...i,
            attach: {
                element: i.attach.element.map(hn).reverse(),
                target: i.attach.target.map(hn).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        });
    }
    function ln(t, e) {
        const i = [
            ...t
        ], s = ut[e].indexOf(t[e]);
        return ~s && (i[e] = ut[e][1 - s % 2 + 2]), i;
    }
    function hn(t) {
        for(let e = 0; e < ut.length; e++){
            const i = ut[e].indexOf(t);
            if (~i) return ut[1 - e][i % 2 + 2];
        }
    }
    function vr(t, e) {
        return t = [
            ...t
        ], t[e] *= -1, t;
    }
    var wr = Object.freeze({
        __proto__: null,
        $: w,
        $$: O,
        Animation: gt,
        Deferred: Xe,
        Dimensions: Ge,
        MouseTracker: Qi,
        Transition: I,
        addClass: y,
        after: Ze,
        append: j,
        apply: Ct,
        assign: xt,
        attr: f,
        before: Ke,
        boxModelAdjust: he,
        camelize: we,
        children: P,
        clamp: et,
        closest: Y,
        createEvent: Ft,
        css: h,
        data: it,
        dimensions: b,
        each: St,
        empty: Fs,
        endsWith: Qt,
        escape: ji,
        fastdom: G,
        filter: Se,
        find: Ri,
        findAll: Ce,
        findIndex: $t,
        flipPosition: ii,
        fragment: Ht,
        getEventPos: le,
        getIndex: dt,
        getTargetedElement: Wi,
        hasAttr: bt,
        hasClass: N,
        hasOwn: Et,
        hasTouch: jt,
        height: st,
        html: _t,
        hyphenate: Zt,
        inBrowser: Rt,
        includes: g,
        index: re,
        intersectRect: zi,
        isArray: Q,
        isBoolean: Bi,
        isDocument: Ue,
        isElement: ee,
        isEmpty: be,
        isEqual: $e,
        isFocusable: Je,
        isFunction: tt,
        isInView: ss,
        isInput: Li,
        isNode: qe,
        isNumber: ie,
        isNumeric: wt,
        isObject: At,
        isPlainObject: yt,
        isRtl: K,
        isSameSiteAnchor: ae,
        isString: M,
        isTag: J,
        isTouch: It,
        isUndefined: V,
        isVideo: Xs,
        isVisible: U,
        isVoidElement: Hi,
        isWindow: te,
        last: ne,
        matches: E,
        memoize: pt,
        mute: Gs,
        noop: S,
        observeIntersection: ts,
        observeMutation: Us,
        observeResize: oi,
        off: zt,
        offset: A,
        offsetPosition: Wt,
        offsetViewport: ct,
        on: x,
        once: R,
        overflowParents: Ut,
        parent: _,
        parents: oe,
        pause: Ys,
        pick: Ni,
        play: Vs,
        pointInRect: Ye,
        pointerCancel: ni,
        pointerDown: mt,
        pointerEnter: Tt,
        pointerLeave: Bt,
        pointerMove: si,
        pointerUp: Ot,
        position: ei,
        positionAt: en,
        prepend: Zo,
        propName: Vi,
        query: at,
        queryAll: Ie,
        ready: Ko,
        remove: lt,
        removeAttr: xe,
        removeClass: F,
        removeClasses: Yi,
        replaceClass: Gi,
        scrollIntoView: Qs,
        scrollParents: vt,
        scrolledOver: ns,
        selFocusable: ke,
        selInput: ye,
        sortBy: Ve,
        startsWith: rt,
        sumBy: Nt,
        swap: Di,
        toArray: _i,
        toBoolean: Mi,
        toEventTargets: qi,
        toFloat: $,
        toNode: L,
        toNodes: k,
        toNumber: kt,
        toPx: ht,
        toWindow: se,
        toggleClass: q,
        trigger: m,
        ucfirst: Pt,
        uniqueBy: As,
        unwrap: Ee,
        width: Pe,
        within: D,
        wrapAll: ti,
        wrapInner: Ji
    });
    function br(t) {
        t._observers = [], t._observerUpdates = new Map;
        for (const e of t.$options.observe || [])if (Et(e, "handler")) cn(t, e);
        else for(const i in e)cn(t, e[i], i);
    }
    function hi(t, ...e) {
        t._observers.push(...e);
    }
    function $r(t) {
        for (const e of t._observers)e == null || e.disconnect(), t._observerUpdates.delete(e);
    }
    function xr(t) {
        for (const [e, i] of t._observerUpdates)i(e);
    }
    function cn(t, e, i) {
        let { observe: s , target: n = t.$el , handler: o , options: r , filter: a , args: l  } = yt(e) ? e : {
            type: i,
            handler: e
        };
        if (a && !a.call(t, t)) return;
        const c = tt(n) ? n.call(t, t) : n;
        o = M(o) ? t[o] : o.bind(t), tt(r) && (r = r.call(t, t));
        const u = s(c, o, r, l);
        tt(n) && Q(c) && u.unobserve && t._observerUpdates.set(u, yr(t, n, c)), hi(t, u);
    }
    function yr(t, e, i) {
        return (s)=>{
            const n = e.call(t, t);
            $e(i, n) || (i.forEach((o)=>!g(n, o) && s.unobserve(o)), n.forEach((o)=>!g(i, o) && s.observe(o)), i.splice(0, i.length, ...n));
        };
    }
    function un(t) {
        if (t._watch) return;
        const e = !Et(t, "_watch");
        t._watch = G.read(()=>{
            t._connected && kr(t, e), t._watch = null;
        });
    }
    function kr(t, e) {
        const i = {
            ...t._computed
        };
        t._computed = {};
        for (const [s, { watch: n , immediate: o  }] of Object.entries(t.$options.computed || {}))n && (e && o || Et(i, s) && !$e(i[s], t[s])) && n.call(t, t[s], e ? void 0 : i[s]);
        xr(t);
    }
    function rs(t, e = "update") {
        t._connected && ((e === "update" || e === "resize") && un(t), t.$options.update && (t._updates || (t._updates = new Set, G.read(()=>{
            t._connected && Sr(t, t._updates), delete t._updates;
        })), t._updates.add(e.type || e)));
    }
    function Sr(t, e) {
        for (const { read: i , write: s , events: n = []  } of t.$options.update){
            if (!e.has("update") && !n.some((r)=>e.has(r))) continue;
            let o;
            i && (o = i.call(t, t._data, e), o && yt(o) && xt(t._data, o)), s && o !== !1 && G.write(()=>{
                t._connected && s.call(t, t._data, e);
            });
        }
    }
    function Ir(t) {
        let { el: e , computed: i , observe: s  } = t.$options;
        if (!i && !(s != null && s.some((o)=>tt(o.target)))) return;
        for(const o in i || {})if (i[o].document) {
            e = e.ownerDocument;
            break;
        }
        const n = new MutationObserver(()=>un(t));
        n.observe(e, {
            childList: !0,
            subtree: !0
        }), hi(t, n);
    }
    function Cr(t) {
        t._events = [];
        for (const e of t.$options.events || [])if (Et(e, "handler")) as(t, e);
        else for(const i in e)as(t, e[i], i);
    }
    function Tr(t) {
        t._events.forEach((e)=>e()), delete t._events;
    }
    function as(t, e, i) {
        let { name: s , el: n , handler: o , capture: r , passive: a , delegate: l , filter: c , self: u  } = yt(e) ? e : {
            name: i,
            handler: e
        };
        if (n = tt(n) ? n.call(t, t) : n || t.$el, Q(n)) {
            n.forEach((d)=>as(t, {
                    ...e,
                    el: d
                }, i));
            return;
        }
        !n || c && !c.call(t) || t._events.push(x(n, s, l ? M(l) ? l : l.call(t, t) : null, M(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }));
    }
    const X = {};
    X.events = X.observe = X.created = X.beforeConnect = X.connected = X.beforeDisconnect = X.disconnected = X.destroy = ls, X.args = function(t, e) {
        return e !== !1 && ls(e || t);
    }, X.update = function(t, e) {
        return Ve(ls(t, tt(e) ? {
            read: e
        } : e), "order");
    }, X.props = function(t, e) {
        if (Q(e)) {
            const i = {};
            for (const s of e)i[s] = String;
            e = i;
        }
        return X.methods(t, e);
    }, X.computed = X.methods = function(t, e) {
        return e ? t ? {
            ...t,
            ...e
        } : e : t;
    }, X.i18n = X.data = function(t, e, i) {
        return i ? dn(t, e, i) : e ? t ? function(s) {
            return dn(t, e, s);
        } : e : t;
    };
    function dn(t, e, i) {
        return X.computed(tt(t) ? t.call(i, i) : t, tt(e) ? e.call(i, i) : e);
    }
    function ls(t, e) {
        return t = t && !Q(t) ? [
            t
        ] : t, e ? t ? t.concat(e) : Q(e) ? e : [
            e
        ] : t;
    }
    function Er(t, e) {
        return V(e) ? t : e;
    }
    function Oe(t, e, i) {
        const s = {};
        if (tt(e) && (e = e.options), e.extends && (t = Oe(t, e.extends, i)), e.mixins) for (const o of e.mixins)t = Oe(t, o, i);
        for(const o in t)n(o);
        for(const o in e)Et(t, o) || n(o);
        function n(o) {
            s[o] = (X[o] || Er)(t[o], e[o], i);
        }
        return s;
    }
    function Be(t, e = []) {
        try {
            return t ? rt(t, "{") ? JSON.parse(t) : e.length && !g(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s)=>{
                const [n, o] = s.split(/:(.*)/);
                return n && !V(o) && (i[n.trim()] = o.trim()), i;
            }, {}) : {};
        } catch  {
            return {};
        }
    }
    function hs(t, e) {
        return t === Boolean ? Mi(e) : t === Number ? kt(e) : t === "list" ? Pr(e) : t === Object && M(e) ? Be(e) : t ? t(e) : e;
    }
    function Pr(t) {
        return Q(t) ? t : M(t) ? t.split(/,(?![^(]*\))/).map((e)=>wt(e) ? kt(e) : Mi(e.trim())) : [
            t
        ];
    }
    function Ar(t) {
        const e = fn(t.$options);
        for(let s in e)V(e[s]) || (t.$props[s] = e[s]);
        const i = [
            t.$options.computed,
            t.$options.methods
        ];
        for(let s in t.$props)s in e && _r(i, s) && (t[s] = t.$props[s]);
    }
    function fn(t) {
        const e = {}, { args: i = [] , props: s = {} , el: n , id: o  } = t;
        if (!s) return e;
        for(const a in s){
            const l = Zt(a);
            let c = it(n, l);
            V(c) || (c = s[a] === Boolean && c === "" ? !0 : hs(s[a], c), !(l === "target" && rt(c, "_")) && (e[a] = c));
        }
        const r = Be(it(n, o), i);
        for(const a in r){
            const l = we(a);
            V(s[l]) || (e[l] = hs(s[l], r[a]));
        }
        return e;
    }
    function _r(t, e) {
        return t.every((i)=>!i || !Et(i, e));
    }
    function Or(t) {
        const { $options: e , $props: i  } = t, { id: s , attrs: n , props: o , el: r  } = e;
        if (!o || n === !1) return;
        const a = Q(n) ? n : Object.keys(o), l = a.map((u)=>Zt(u)).concat(s), c = new MutationObserver((u)=>{
            const d = fn(e);
            u.some(({ attributeName: p  })=>{
                const v = p.replace("data-", "");
                return (v === s ? a : [
                    we(v),
                    we(p)
                ]).some((C)=>!V(d[C]) && d[C] !== i[C]);
            }) && t.$reset();
        });
        c.observe(r, {
            attributes: !0,
            attributeFilter: l.concat(l.map((u)=>`data-${u}`))
        }), hi(t, c);
    }
    function de(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach((s)=>s.call(t));
    }
    function cs(t) {
        t._connected || (t._data = {}, t._computed = {}, Ar(t), de(t, "beforeConnect"), t._connected = !0, Cr(t), br(t), Or(t), Ir(t), de(t, "connected"), rs(t));
    }
    function us(t) {
        t._connected && (de(t, "beforeDisconnect"), $r(t), Tr(t), de(t, "disconnected"), t._connected = !1, delete t._watch);
    }
    function Br(t) {
        const { computed: e  } = t.$options;
        if (t._computed = {}, e) for(const i in e)Mr(t, i, e[i]);
    }
    function Mr(t, e, i) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get () {
                const { _computed: s , $props: n , $el: o  } = t;
                return Et(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e];
            },
            set (s) {
                const { _computed: n  } = t;
                n[e] = i.set ? i.set.call(t, s) : s, V(n[e]) && delete n[e];
            }
        });
    }
    let Dr = 0;
    function pn(t, e = {}) {
        e.data = Fr(e, t.constructor.options), t.$options = Oe(t.constructor.options, e, t), t.$props = {}, t._uid = Dr++, Nr(t), zr(t), Br(t), de(t, "created"), e.el && t.$mount(e.el);
    }
    function Nr(t) {
        const { data: e = {}  } = t.$options;
        for(const i in e)t.$props[i] = t[i] = e[i];
    }
    function zr(t) {
        const { methods: e  } = t.$options;
        if (e) for(const i in e)t[i] = e[i].bind(t);
    }
    function Fr({ data: t = {}  }, { args: e = [] , props: i = {}  }) {
        Q(t) && (t = t.slice(0, e.length).reduce((s, n, o)=>(yt(n) ? xt(s, n) : s[e[o]] = n, s), {}));
        for(const s in t)V(t[s]) ? delete t[s] : i[s] && (t[s] = hs(i[s], t[s]));
        return t;
    }
    const B = function(t) {
        pn(this, t);
    };
    B.util = wr, B.options = {}, B.version = "3.16.6";
    const Hr = "uk-", qt = "__uikit__", fe = {};
    function gn(t, e) {
        var i;
        const s = Hr + Zt(t);
        if (!e) return yt(fe[s]) && (fe[s] = B.extend(fe[s])), fe[s];
        t = we(t), B[t] = (o, r)=>Me(t, o, r);
        const n = yt(e) ? {
            ...e
        } : e.options;
        return n.id = s, n.name = t, (i = n.install) == null || i.call(n, B, n, t), B._initialized && !n.functional && requestAnimationFrame(()=>Me(t, `[${s}],[data-${s}]`)), fe[s] = n;
    }
    function Me(t, e, i, ...s) {
        const n = gn(t);
        return n.options.functional ? new n({
            data: yt(e) ? e : [
                e,
                i,
                ...s
            ]
        }) : e ? O(e).map(o)[0] : o();
        function o(r) {
            const a = ci(r, t);
            if (a) {
                if (i) a.$destroy();
                else return a;
            }
            return new n({
                el: r,
                data: i
            });
        }
    }
    function Vt(t) {
        return (t == null ? void 0 : t[qt]) || {};
    }
    function ci(t, e) {
        return Vt(t)[e];
    }
    function Lr(t, e) {
        t[qt] || (t[qt] = {}), t[qt][e.$options.name] = e;
    }
    function Wr(t, e) {
        var i;
        (i = t[qt]) == null || delete i[e.$options.name], be(t[qt]) || delete t[qt];
    }
    B.component = gn, B.getComponents = Vt, B.getComponent = ci, B.use = function(t) {
        if (!t.installed) return t.call(null, this), t.installed = !0, this;
    }, B.mixin = function(t, e) {
        e = (M(e) ? this.component(e) : e) || this, e.options = Oe(e.options, t);
    }, B.extend = function(t) {
        t = t || {};
        const e = this, i = function(n) {
            pn(this, n);
        };
        return i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.options = Oe(e.options, t), i.super = e, i.extend = e.extend, i;
    };
    function mn(t, e) {
        t = t ? L(t) : document.body;
        for (const i of oe(t).reverse())vn(i, e);
        Ct(t, (i)=>vn(i, e));
    }
    B.update = mn;
    function vn(t, e) {
        const i = Vt(t);
        for(const s in i)rs(i[s], e);
    }
    let wn;
    Object.defineProperty(B, "container", {
        get () {
            return wn || document.body;
        },
        set (t) {
            wn = w(t);
        }
    }), B.prototype.$mount = function(t) {
        const e = this;
        Lr(t, e), e.$options.el = t, D(t, document) && cs(e);
    }, B.prototype.$destroy = function(t = !1) {
        const e = this, { el: i  } = e.$options;
        i && us(e), de(e, "destroy"), Wr(i, e), t && lt(e.$el);
    }, B.prototype.$create = Me, B.prototype.$emit = function(t) {
        rs(this, t);
    }, B.prototype.$update = function(t = this.$el, e) {
        mn(t, e);
    }, B.prototype.$reset = function() {
        us(this), cs(this);
    }, B.prototype.$getComponent = ci, Object.defineProperties(B.prototype, {
        $el: {
            get () {
                return this.$options.el;
            }
        },
        $container: Object.getOwnPropertyDescriptor(B, "container")
    });
    function Mt(t, e = t.$el, i = "") {
        if (e.id) return e.id;
        let s = `${t.$options.id}-${t._uid}${i}`;
        return w(`#${s}`) && (s = Mt(t, e, `${i}-2`)), s;
    }
    function Rr(t) {
        Rt && window.MutationObserver && requestAnimationFrame(()=>jr(t));
    }
    function jr(t) {
        m(document, "uikit:init", t), document.body && Ct(document.body, bn), new MutationObserver((e)=>e.forEach(Ur)).observe(document, {
            childList: !0,
            subtree: !0
        }), new MutationObserver((e)=>e.forEach(qr)).observe(document, {
            attributes: !0,
            subtree: !0
        }), t._initialized = !0;
    }
    function Ur({ addedNodes: t , removedNodes: e  }) {
        for (const i of t)Ct(i, bn);
        for (const i of e)Ct(i, Vr);
    }
    function qr({ target: t , attributeName: e  }) {
        var i;
        const s = $n(e);
        if (s) {
            if (bt(t, e)) {
                Me(s, t);
                return;
            }
            (i = ci(t, s)) == null || i.$destroy();
        }
    }
    function bn(t) {
        const e = Vt(t);
        for(const i in Vt(t))cs(e[i]);
        for (const i of t.getAttributeNames()){
            const s = $n(i);
            s && Me(s, t);
        }
    }
    function Vr(t) {
        const e = Vt(t);
        for(const i in Vt(t))us(e[i]);
    }
    function $n(t) {
        rt(t, "data-") && (t = t.slice(5));
        const e = fe[t];
        return e && (yt(e) ? e : e.options).name;
    }
    var nt = {
        connected () {
            y(this.$el, this.$options.id);
        }
    }, Yt = {
        props: {
            cls: Boolean,
            animation: "list",
            duration: Number,
            velocity: Number,
            origin: String,
            transition: String
        },
        data: {
            cls: !1,
            animation: [
                !1
            ],
            duration: 200,
            velocity: .2,
            origin: !1,
            transition: "ease",
            clsEnter: "uk-togglabe-enter",
            clsLeave: "uk-togglabe-leave"
        },
        computed: {
            hasAnimation ({ animation: t  }) {
                return !!t[0];
            },
            hasTransition ({ animation: t  }) {
                return [
                    "slide",
                    "reveal"
                ].some((e)=>rt(t[0], e));
            }
        },
        methods: {
            toggleElement (t, e, i) {
                return new Promise((s)=>Promise.all(k(t).map((n)=>{
                        const o = Bi(e) ? e : !this.isToggled(n);
                        if (!m(n, `before${o ? "show" : "hide"}`, [
                            this
                        ])) return Promise.reject();
                        const r = (tt(i) ? i : i === !1 || !this.hasAnimation ? Yr : this.hasTransition ? Gr : Xr)(n, o, this), a = o ? this.clsEnter : this.clsLeave;
                        y(n, a), m(n, o ? "show" : "hide", [
                            this
                        ]);
                        const l = ()=>{
                            F(n, a), m(n, o ? "shown" : "hidden", [
                                this
                            ]);
                        };
                        return r ? r.then(l, ()=>(F(n, a), Promise.reject())) : l();
                    })).then(s, S));
            },
            isToggled (t = this.$el) {
                return [t] = k(t), N(t, this.clsEnter) ? !0 : N(t, this.clsLeave) ? !1 : this.cls ? N(t, this.cls.split(" ")[0]) : U(t);
            },
            _toggle (t, e) {
                if (!t) return;
                e = Boolean(e);
                let i;
                this.cls ? (i = g(this.cls, " ") || e !== N(t, this.cls), i && q(t, this.cls, g(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), O("[autofocus]", t).some((s)=>U(s) ? s.focus() || !0 : s.blur()), i && m(t, "toggled", [
                    e,
                    this
                ]);
            }
        }
    };
    function Yr(t, e, { _toggle: i  }) {
        return gt.cancel(t), I.cancel(t), i(t, e);
    }
    async function Gr(t, e, { animation: i , duration: s , velocity: n , transition: o , _toggle: r  }) {
        var a;
        const [l = "reveal", c = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [
            [
                "left",
                "right"
            ],
            [
                "top",
                "bottom"
            ]
        ], d = u[g(u[0], c) ? 0 : 1], p = d[1] === c, C = [
            "width",
            "height"
        ][u.indexOf(d)], H = `margin-${d[0]}`, z = `margin-${c}`;
        let Dt = b(t)[C];
        const Es = I.inProgress(t);
        await I.cancel(t), e && r(t, !0);
        const Nh = Object.fromEntries([
            "padding",
            "border",
            "width",
            "height",
            "minWidth",
            "minHeight",
            "overflowY",
            "overflowX",
            H,
            z
        ].map((Oo)=>[
                Oo,
                t.style[Oo]
            ])), je = b(t), Ps = $(h(t, H)), Po = $(h(t, z)), Kt = je[C] + Po;
        !Es && !e && (Dt += Po);
        const [Ai] = Ji(t, "<div>");
        h(Ai, {
            boxSizing: "border-box",
            height: je.height,
            width: je.width,
            ...h(t, [
                "overflow",
                "padding",
                "borderTop",
                "borderRight",
                "borderBottom",
                "borderLeft",
                "borderImage",
                z
            ])
        }), h(t, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [z]: 0,
            width: je.width,
            height: je.height,
            overflow: "hidden",
            [C]: Dt
        });
        const Ao = Dt / Kt;
        s = (n * Kt + s) * (e ? 1 - Ao : Ao);
        const _o = {
            [C]: e ? Kt : 0
        };
        p && (h(t, H, Kt - Dt + Ps), _o[H] = e ? Ps : Kt + Ps), !p ^ l === "reveal" && (h(Ai, H, -Kt + Dt), I.start(Ai, {
            [H]: e ? 0 : -Kt
        }, s, o));
        try {
            await I.start(t, _o, s, o);
        } finally{
            h(t, Nh), Ee(Ai.firstChild), e || r(t, !1);
        }
    }
    function Xr(t, e, i) {
        gt.cancel(t);
        const { animation: s , duration: n , _toggle: o  } = i;
        return e ? (o(t, !0), gt.in(t, s[0], n, i.origin)) : gt.out(t, s[1] || s[0], n, i.origin).then(()=>o(t, !1));
    }
    const T = {
        TAB: 9,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    function ft(t) {
        return fi(oi, t, "resize");
    }
    function ui(t) {
        return fi(ts, t);
    }
    function Jr(t) {
        return fi(Us, t);
    }
    function De(t = {}) {
        return ui({
            handler: function(e, i) {
                const { targets: s = this.$el , preload: n = 5  } = t;
                for (const o of k(tt(s) ? s(this) : s))O('[loading="lazy"]', o).slice(0, n - 1).forEach((r)=>xe(r, "loading"));
                for (const o of e.filter(({ isIntersecting: r  })=>r).map(({ target: r  })=>r))i.unobserve(o);
            },
            ...t
        });
    }
    function di(t) {
        return fi(function(e, i) {
            return {
                disconnect: x(e, "scroll", i, {
                    passive: !0,
                    capture: !0
                })
            };
        }, {
            target: window,
            ...t
        }, "scroll");
    }
    function xn(t) {
        return {
            observe (e, i) {
                return {
                    observe: S,
                    unobserve: S,
                    disconnect: x(e, mt, i, {
                        passive: !0
                    })
                };
            },
            handler (e) {
                if (!It(e)) return;
                const i = le(e), s = "tagName" in e.target ? e.target : _(e.target);
                R(document, `${Ot} ${ni} scroll`, (n)=>{
                    const { x: o , y: r  } = le(n);
                    (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout(()=>{
                        m(s, "swipe"), m(s, `swipe${Kr(i.x, i.y, o, r)}`);
                    });
                });
            },
            ...t
        };
    }
    function fi(t, e, i) {
        return {
            observe: t,
            handler () {
                this.$emit(i);
            },
            ...e
        };
    }
    function Kr(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
    }
    var yn = {
        mixins: [
            nt,
            Yt
        ],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            offset: 0
        },
        computed: {
            items: {
                get ({ targets: t  }, e) {
                    return O(t, e);
                },
                watch (t, e) {
                    if (e || N(t, this.clsOpen)) return;
                    const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                    i && this.toggle(i, !1);
                },
                immediate: !0
            },
            toggles: {
                get ({ toggle: t  }) {
                    return this.items.map((e)=>w(t, e));
                },
                watch () {
                    this.$emit();
                },
                immediate: !0
            },
            contents: {
                get ({ content: t  }) {
                    return this.items.map((e)=>{
                        var i;
                        return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || w(t, e);
                    });
                },
                watch (t) {
                    for (const e of t)pi(e, !N(this.items.find((i)=>D(e, i)), this.clsOpen));
                    this.$emit();
                },
                immediate: !0
            }
        },
        observe: De(),
        events: [
            {
                name: "click keydown",
                delegate () {
                    return `${this.targets} ${this.$props.toggle}`;
                },
                async handler (t) {
                    var e;
                    t.type === "keydown" && t.keyCode !== T.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = Qr(t.target), await this.toggle(re(this.toggles, t.current)), this._off());
                }
            },
            {
                name: "shown hidden",
                self: !0,
                delegate () {
                    return this.targets;
                },
                handler () {
                    this.$emit();
                }
            }
        ],
        update () {
            const t = Se(this.items, `.${this.clsOpen}`);
            for(const e in this.items){
                const i = this.toggles[e], s = this.contents[e];
                if (!i || !s) continue;
                i.id = Mt(this, i, `-title-${e}`), s.id = Mt(this, s, `-content-${e}`);
                const n = g(t, this.items[e]);
                f(i, {
                    role: J(i, "a") ? "button" : null,
                    "aria-controls": s.id,
                    "aria-expanded": n,
                    "aria-disabled": !this.collapsible && t.length < 2 && n
                }), f(s, {
                    role: "region",
                    "aria-labelledby": i.id
                });
            }
        },
        methods: {
            async toggle (t, e) {
                t = this.items[dt(t, this.items)];
                let i = [
                    t
                ];
                const s = Se(this.items, `.${this.clsOpen}`);
                !this.multiple && !g(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && g(s, t)) && await Promise.all(i.map((n)=>this.toggleElement(n, !g(s, n), (o, r)=>{
                        if (q(o, this.clsOpen, r), e === !1 || !this.animation) {
                            pi(w(this.content, o), !r);
                            return;
                        }
                        return Zr(o, r, this);
                    })));
            }
        }
    };
    function pi(t, e) {
        t && (t.hidden = e);
    }
    async function Zr(t, e, { content: i , duration: s , velocity: n , transition: o  }) {
        var r;
        i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || w(i, t), t._wrapper || (t._wrapper = ti(i, "<div>"));
        const a = t._wrapper;
        h(a, "overflow", "hidden");
        const l = $(h(a, "height"));
        await I.cancel(a), pi(i, !1);
        const c = Nt([
            "marginTop",
            "marginBottom"
        ], (d)=>h(i, d)) + b(i).height, u = l / c;
        s = (n * c + s) * (e ? 1 - u : u), h(a, "height", l), await I.start(a, {
            height: e ? c : 0
        }, s, o), Ee(i), delete t._wrapper, e || pi(i, !0);
    }
    function Qr(t) {
        const [e] = vt(t, !0);
        let i;
        return function s() {
            i = requestAnimationFrame(()=>{
                const { top: n  } = t.getBoundingClientRect();
                n < 0 && (e.scrollTop += n), s();
            });
        }(), ()=>requestAnimationFrame(()=>cancelAnimationFrame(i));
    }
    var ta = {
        mixins: [
            nt,
            Yt
        ],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".uk-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate () {
                return this.selClose;
            },
            handler (t) {
                t.preventDefault(), this.close();
            }
        },
        methods: {
            async close () {
                await this.toggleElement(this.$el, !1, ea), this.$destroy(!0);
            }
        }
    };
    function ea(t, e, { duration: i , transition: s , velocity: n  }) {
        const o = $(h(t, "height"));
        return h(t, "height", o), I.start(t, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
        }, n * o + i, s);
    }
    var kn = {
        args: "autoplay",
        props: {
            automute: Boolean,
            autoplay: Boolean
        },
        data: {
            automute: !1,
            autoplay: !0
        },
        connected () {
            this.inView = this.autoplay === "inview", this.inView && !bt(this.$el, "preload") && (this.$el.preload = "none"), J(this.$el, "iframe") && !bt(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && Gs(this.$el);
        },
        observe: ui({
            args: {
                intersecting: !1
            }
        }),
        update: {
            read ({ visible: t  }) {
                return Xs(this.$el) ? {
                    prev: t,
                    visible: U(this.$el) && h(this.$el, "visibility") !== "hidden",
                    inView: this.inView && ss(this.$el)
                } : !1;
            },
            write ({ prev: t , visible: e , inView: i  }) {
                !e || this.inView && !i ? Ys(this.$el) : (this.autoplay === !0 && !t || this.inView && i) && Vs(this.$el);
            }
        }
    }, ia = {
        mixins: [
            kn
        ],
        props: {
            width: Number,
            height: Number
        },
        data: {
            automute: !0
        },
        events: {
            "load loadedmetadata" () {
                this.$emit("resize");
            }
        },
        observe: ft({
            target: ({ $el: t  })=>[
                    t,
                    Sn(t) || _(t)
                ]
        }),
        update: {
            read () {
                const { ratio: t , cover: e  } = Ge, { $el: i , width: s , height: n  } = this;
                let o = {
                    width: s,
                    height: n
                };
                if (!s || !n) {
                    const c = {
                        width: i.naturalWidth || i.videoWidth || i.clientWidth,
                        height: i.naturalHeight || i.videoHeight || i.clientHeight
                    };
                    s ? o = t(c, "width", s) : n ? o = t(c, "height", n) : o = c;
                }
                const { offsetHeight: r , offsetWidth: a  } = Sn(i) || _(i), l = e(o, {
                    width: a + (a % 2 ? 1 : 0),
                    height: r + (r % 2 ? 1 : 0)
                });
                return !l.width || !l.height ? !1 : l;
            },
            write ({ height: t , width: e  }) {
                h(this.$el, {
                    height: t,
                    width: e
                });
            },
            events: [
                "resize"
            ]
        }
    };
    function Sn(t) {
        for(; t = _(t);)if (h(t, "position") !== "static") return t;
    }
    var In = {
        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            shift: Boolean,
            inset: Boolean
        },
        data: {
            pos: `bottom-${K ? "right" : "left"}`,
            offset: !1,
            flip: !0,
            shift: !0,
            inset: !1
        },
        connected () {
            this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = g([
                "top",
                "bottom"
            ], this.dir) ? "y" : "x";
        },
        methods: {
            positionAt (t, e, i) {
                let s = [
                    this.getPositionOffset(t),
                    this.getShiftOffset(t)
                ];
                const n = [
                    this.flip && "flip",
                    this.shift && "shift"
                ], o = {
                    element: [
                        this.inset ? this.dir : ii(this.dir),
                        this.align
                    ],
                    target: [
                        this.dir,
                        this.align
                    ]
                };
                if (this.axis === "y") {
                    for(const l in o)o[l].reverse();
                    s.reverse(), n.reverse();
                }
                const r = sa(t), a = b(t);
                h(t, {
                    top: -a.height,
                    left: -a.width
                }), en(t, e, {
                    attach: o,
                    offset: s,
                    boundary: i,
                    placement: n,
                    viewportOffset: this.getViewportOffset(t)
                }), r();
            },
            getPositionOffset (t) {
                return ht(this.offset === !1 ? h(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (g([
                    "left",
                    "top"
                ], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
            },
            getShiftOffset (t) {
                return this.align === "center" ? 0 : ht(h(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (g([
                    "left",
                    "top"
                ], this.align) ? 1 : -1);
            },
            getViewportOffset (t) {
                return ht(h(t, "--uk-position-viewport-offset"));
            }
        }
    };
    function sa(t) {
        const [e] = vt(t), { scrollTop: i  } = e;
        return ()=>{
            i !== e.scrollTop && (e.scrollTop = i);
        };
    }
    var Ne = {
        props: {
            container: Boolean
        },
        data: {
            container: !0
        },
        computed: {
            container ({ container: t  }) {
                return t === !0 && this.$container || t && w(t);
            }
        }
    };
    let ds;
    function Cn(t) {
        const e = x(t, "touchmove", (s)=>{
            if (s.targetTouches.length !== 1) return;
            let [{ scrollHeight: n , clientHeight: o  }] = vt(s.target);
            o >= n && s.cancelable && s.preventDefault();
        }, {
            passive: !1
        });
        if (ds) return e;
        ds = !0;
        const { scrollingElement: i  } = document;
        return h(i, {
            overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
            touchAction: "none",
            paddingRight: Pe(window) - i.clientWidth || ""
        }), ()=>{
            ds = !1, e(), h(i, {
                overflowY: "",
                touchAction: "",
                paddingRight: ""
            });
        };
    }
    let Z;
    var Tn = {
        mixins: [
            Ne,
            In,
            Yt
        ],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean
        },
        data: {
            mode: [
                "click",
                "hover"
            ],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: [
                "uk-animation-fade"
            ],
            cls: "uk-open",
            container: !1
        },
        computed: {
            boundary ({ boundary: t , boundaryX: e , boundaryY: i  }, s) {
                return [
                    at(e || t, s) || window,
                    at(i || t, s) || window
                ];
            },
            target ({ target: t , targetX: e , targetY: i  }, s) {
                return e = e || t || this.targetEl, i = i || t || this.targetEl, [
                    e === !0 ? window : at(e, s),
                    i === !0 ? window : at(i, s)
                ];
            }
        },
        created () {
            this.tracker = new Qi;
        },
        beforeConnect () {
            this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
        },
        connected () {
            y(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = ra(this)), this._style = Ni(this.$el.style, [
                "width",
                "height"
            ]);
        },
        disconnected () {
            this.isActive() && (this.hide(!1), Z = null), h(this.$el, this._style);
        },
        observe: De({
            target: ({ toggle: t , $el: e  })=>at(t, e),
            targets: ({ $el: t  })=>t
        }),
        events: [
            {
                name: "click",
                delegate () {
                    return ".uk-drop-close";
                },
                handler (t) {
                    t.preventDefault(), this.hide(!1);
                }
            },
            {
                name: "click",
                delegate () {
                    return 'a[href*="#"]';
                },
                handler ({ defaultPrevented: t , current: e  }) {
                    const { hash: i  } = e;
                    !t && i && ae(e) && !D(i, this.$el) && this.hide(!1);
                }
            },
            {
                name: "beforescroll",
                handler () {
                    this.hide(!1);
                }
            },
            {
                name: "toggle",
                self: !0,
                handler (t, e) {
                    t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
                }
            },
            {
                name: "toggleshow",
                self: !0,
                handler (t, e) {
                    t.preventDefault(), this.show(e == null ? void 0 : e.$el);
                }
            },
            {
                name: "togglehide",
                self: !0,
                handler (t) {
                    t.preventDefault(), E(this.$el, ":focus,:hover") || this.hide();
                }
            },
            {
                name: `${Tt} focusin`,
                filter () {
                    return g(this.mode, "hover");
                },
                handler (t) {
                    It(t) || this.clearTimers();
                }
            },
            {
                name: `${Bt} focusout`,
                filter () {
                    return g(this.mode, "hover");
                },
                handler (t) {
                    !It(t) && t.relatedTarget && this.hide();
                }
            },
            {
                name: "toggled",
                self: !0,
                handler (t, e) {
                    f(this.targetEl, "aria-expanded", e ? !0 : null), e && (this.clearTimers(), this.position());
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    Z = this, this.tracker.init();
                    const t = [
                        aa(this),
                        ha(this),
                        ca(this),
                        this.autoUpdate && la(this),
                        !this.bgScroll && Cn(this.$el)
                    ];
                    R(this.$el, "hide", ()=>t.forEach((e)=>e && e()), {
                        self: !0
                    });
                }
            },
            {
                name: "beforehide",
                self: !0,
                handler () {
                    this.clearTimers();
                }
            },
            {
                name: "hide",
                handler ({ target: t  }) {
                    if (this.$el !== t) {
                        Z = Z === null && D(t, this.$el) && this.isToggled() ? this : Z;
                        return;
                    }
                    Z = this.isActive() ? null : Z, this.tracker.cancel();
                }
            }
        ],
        update: {
            write () {
                this.isToggled() && !N(this.$el, this.clsEnter) && this.position();
            }
        },
        methods: {
            show (t = this.targetEl, e = !0) {
                if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
                    if (Z) {
                        if (e && Z.isDelaying) {
                            this.showTimer = setTimeout(()=>E(t, ":hover") && this.show(), 10);
                            return;
                        }
                        let i;
                        for(; Z && i !== Z && !D(this.$el, Z.$el);)i = Z, Z.hide(!1, !1);
                    }
                    this.container && _(this.$el) !== this.container && j(this.container, this.$el), this.showTimer = setTimeout(()=>this.toggleElement(this.$el, !0), e && this.delayShow || 0);
                }
            },
            hide (t = !0, e = !0) {
                const i = ()=>this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(), this.isDelaying = na(this.$el).some((s)=>this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
            },
            clearTimers () {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
            },
            isActive () {
                return Z === this;
            },
            position () {
                F(this.$el, "uk-drop-stack"), h(this.$el, this._style), this.$el.hidden = !0;
                const t = this.target.map((n)=>oa(this.$el, n)), e = this.getViewportOffset(this.$el), i = [
                    [
                        0,
                        [
                            "x",
                            "width",
                            "left",
                            "right"
                        ]
                    ],
                    [
                        1,
                        [
                            "y",
                            "height",
                            "top",
                            "bottom"
                        ]
                    ]
                ];
                for (const [n, [o, r]] of i)this.axis !== o && g([
                    o,
                    !0
                ], this.stretch) && h(this.$el, {
                    [r]: Math.min(A(this.boundary[n])[r], t[n][r] - 2 * e),
                    [`overflow-${o}`]: "auto"
                });
                const s = t[0].width - 2 * e;
                this.$el.hidden = !1, h(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && y(this.$el, "uk-drop-stack"), h(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
                for (const [n, [o, r, a, l]] of i)if (this.axis === o && g([
                    o,
                    !0
                ], this.stretch)) {
                    const c = Math.abs(this.getPositionOffset(this.$el)), u = A(this.target[n]), d = A(this.$el);
                    h(this.$el, {
                        [r]: (u[a] > d[a] ? u[a] - Math.max(A(this.boundary[n])[a], t[n][a] + e) : Math.min(A(this.boundary[n])[l], t[n][l] - e) - u[l]) - c,
                        [`overflow-${o}`]: "auto"
                    }), this.positionAt(this.$el, this.target, this.boundary);
                }
            }
        }
    };
    function na(t) {
        const e = [];
        return Ct(t, (i)=>h(i, "position") !== "static" && e.push(i)), e;
    }
    function oa(t, e) {
        return ct(Ut(e).find((i)=>D(t, i)));
    }
    function ra(t) {
        const { $el: e  } = t.$create("toggle", at(t.toggle, t.$el), {
            target: t.$el,
            mode: t.mode
        });
        return f(e, "aria-haspopup", !0), e;
    }
    function aa(t) {
        const e = ()=>t.$emit(), i = x(window, "resize", e), s = oi(Ut(t.$el).concat(t.target), e);
        return ()=>{
            s.disconnect(), i();
        };
    }
    function la(t) {
        return x([
            document,
            ...Ut(t.$el)
        ], "scroll", ()=>t.$emit(), {
            passive: !0
        });
    }
    function ha(t) {
        return x(document, "keydown", (e)=>{
            e.keyCode === T.ESC && t.hide(!1);
        });
    }
    function ca(t) {
        return x(document, mt, ({ target: e  })=>{
            D(e, t.$el) || R(document, `${Ot} ${ni} scroll`, ({ defaultPrevented: i , type: s , target: n  })=>{
                !i && s === Ot && e === n && !(t.targetEl && D(e, t.targetEl)) && t.hide(!1);
            }, !0);
        });
    }
    var En = {
        mixins: [
            nt,
            Ne
        ],
        props: {
            dropdown: String,
            align: String,
            clsDrop: String,
            boundary: Boolean,
            dropbar: Boolean,
            dropbarAnchor: Boolean,
            duration: Number,
            mode: Boolean,
            offset: Boolean,
            stretch: Boolean,
            delayShow: Boolean,
            delayHide: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            animation: Boolean,
            animateOut: Boolean
        },
        data: {
            dropdown: "> li > a, > ul > li > a",
            align: K ? "right" : "left",
            clsDrop: "uk-dropdown",
            clsDropbar: "uk-dropnav-dropbar",
            boundary: !0,
            dropbar: !1,
            dropbarAnchor: !1,
            duration: 200,
            container: !1
        },
        computed: {
            dropbarAnchor ({ dropbarAnchor: t  }, e) {
                return at(t, e) || e;
            },
            dropbar: {
                get ({ dropbar: t  }) {
                    return t ? (t = this._dropbar || at(t, this.$el) || w(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = w("<div></div>"))) : null;
                },
                watch (t) {
                    y(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
                },
                immediate: !0
            },
            dropContainer (t, e) {
                return this.container || e;
            },
            dropdowns: {
                get ({ clsDrop: t  }, e) {
                    var i;
                    const s = O(`.${t}`, e);
                    if (this.dropContainer !== e) for (const n of O(`.${t}`, this.dropContainer)){
                        const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
                        !g(s, n) && o && D(o, this.$el) && s.push(n);
                    }
                    return s;
                },
                watch (t) {
                    this.$create("drop", t.filter((e)=>!this.getDropdown(e)), {
                        ...this.$props,
                        flip: !1,
                        shift: !0,
                        pos: `bottom-${this.align}`,
                        boundary: this.boundary === !0 ? this.$el : this.boundary
                    });
                },
                immediate: !0
            },
            items: {
                get ({ dropdown: t  }, e) {
                    return O(t, e);
                },
                watch (t) {
                    f(P(this.$el), "role", "presentation"), f(t, {
                        tabindex: -1,
                        role: "menuitem"
                    }), f(t[0], "tabindex", 0);
                },
                immediate: !0
            }
        },
        connected () {
            f(this.$el, "role", "menubar");
        },
        disconnected () {
            lt(this._dropbar), delete this._dropbar;
        },
        events: [
            {
                name: "mouseover focusin",
                delegate () {
                    return this.dropdown;
                },
                handler ({ current: t , type: e  }) {
                    const i = this.getActive();
                    if (i && g(i.mode, "hover") && i.targetEl && !D(i.targetEl, t) && !i.isDelaying && i.hide(!1), e === "focusin") for (const s of this.items)f(s, "tabindex", t === s ? 0 : -1);
                }
            },
            {
                name: "keydown",
                delegate () {
                    return this.dropdown;
                },
                handler (t) {
                    const { current: e , keyCode: i  } = t, s = this.getActive();
                    i === T.DOWN && bt(e, "aria-expanded") && (t.preventDefault(), !s || s.targetEl !== e ? (e.click(), R(this.dropContainer, "show", ({ target: n  })=>An(n))) : An(s.$el)), Pn(t, this.items, s);
                }
            },
            {
                name: "keydown",
                el () {
                    return this.dropContainer;
                },
                delegate () {
                    return `.${this.clsDrop}`;
                },
                handler (t) {
                    var e;
                    const { current: i , keyCode: s  } = t;
                    if (!g(this.dropdowns, i)) return;
                    const n = this.getActive();
                    let o = -1;
                    if (s === T.HOME ? o = 0 : s === T.END ? o = "last" : s === T.UP ? o = "previous" : s === T.DOWN ? o = "next" : s === T.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
                        t.preventDefault();
                        const r = O(ke, i);
                        r[dt(o, r, $t(r, (a)=>E(a, ":focus")))].focus();
                    }
                    Pn(t, this.items, n);
                }
            },
            {
                name: "mouseleave",
                el () {
                    return this.dropbar;
                },
                filter () {
                    return this.dropbar;
                },
                handler () {
                    const t = this.getActive();
                    t && g(t.mode, "hover") && !this.dropdowns.some((e)=>E(e, ":hover")) && t.hide();
                }
            },
            {
                name: "beforeshow",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t  }) {
                    this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Ze(this.dropbarAnchor, this.dropbar), y(t, `${this.clsDrop}-dropbar`));
                }
            },
            {
                name: "show",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t  }) {
                    if (!this.isDropbarDrop(t)) return;
                    const e = this.getDropdown(t), i = ()=>{
                        const s = oe(t, `.${this.clsDrop}`).concat(t).map((a)=>A(a)), n = Math.min(...s.map(({ top: a  })=>a)), o = Math.max(...s.map(({ bottom: a  })=>a)), r = A(this.dropbar);
                        h(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)), this.transitionTo(o - n + $(h(t, "marginBottom")), t);
                    };
                    this._observer = oi([
                        e.$el,
                        ...e.target
                    ], i), i();
                }
            },
            {
                name: "beforehide",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler (t) {
                    const e = this.getActive();
                    E(this.dropbar, ":hover") && e.$el === t.target && !this.items.some((i)=>e.targetEl !== i && E(i, ":focus")) && t.preventDefault();
                }
            },
            {
                name: "hide",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t  }) {
                    var e;
                    if (!this.isDropbarDrop(t)) return;
                    (e = this._observer) == null || e.disconnect();
                    const i = this.getActive();
                    (!i || i.$el === t) && this.transitionTo(0);
                }
            }
        ],
        methods: {
            getActive () {
                var t;
                return g(this.dropdowns, (t = Z) == null ? void 0 : t.$el) && Z;
            },
            async transitionTo (t, e) {
                const { dropbar: i  } = this, s = st(i);
                e = s < t && e, await I.cancel([
                    e,
                    i
                ]), h(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), st(i, s), await Promise.all([
                    I.start(i, {
                        height: t
                    }, this.duration),
                    I.start(e, {
                        clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                    }, this.duration).finally(()=>h(e, {
                            clipPath: ""
                        }))
                ]).catch(S);
            },
            getDropdown (t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
            },
            isDropbarDrop (t) {
                return this.getDropdown(t) && N(t, this.clsDrop);
            }
        }
    };
    function Pn(t, e, i) {
        var s, n, o;
        const { current: r , keyCode: a  } = t;
        let l = -1;
        a === T.HOME ? l = 0 : a === T.END ? l = "last" : a === T.LEFT ? l = "previous" : a === T.RIGHT ? l = "next" : a === T.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, !1)), ~l && (t.preventDefault(), (o = i.hide) == null || o.call(i, !1), e[dt(l, e, e.indexOf(i.targetEl || r))].focus());
    }
    function An(t) {
        var e;
        w(":focus", t) || (e = w(ke, t)) == null || e.focus();
    }
    var ua = {
        mixins: [
            nt
        ],
        args: "target",
        props: {
            target: Boolean
        },
        data: {
            target: !1
        },
        computed: {
            input (t, e) {
                return w(ye, e);
            },
            state () {
                return this.input.nextElementSibling;
            },
            target ({ target: t  }, e) {
                return t && (t === !0 && _(this.input) === e && this.input.nextElementSibling || w(t, e));
            }
        },
        update () {
            var t;
            const { target: e , input: i  } = this;
            if (!e) return;
            let s;
            const n = Li(e) ? "value" : "textContent", o = e[n], r = (t = i.files) != null && t[0] ? i.files[0].name : E(i, "select") && (s = O("option", i).filter((a)=>a.selected)[0]) ? s.textContent : i.value;
            o !== r && (e[n] = r);
        },
        events: [
            {
                name: "change",
                handler () {
                    this.$emit();
                }
            },
            {
                name: "reset",
                el () {
                    return Y(this.$el, "form");
                },
                handler () {
                    this.$emit();
                }
            }
        ]
    }, _n = {
        props: {
            margin: String,
            firstColumn: Boolean
        },
        data: {
            margin: "uk-margin-small-top",
            firstColumn: "uk-first-column"
        },
        observe: [
            Jr({
                options: {
                    childList: !0,
                    attributes: !0,
                    attributeFilter: [
                        "style"
                    ]
                }
            }),
            ft({
                target: ({ $el: t  })=>[
                        t,
                        ..._i(t.children)
                    ]
            })
        ],
        update: {
            read () {
                const t = fs(this.$el.children);
                return {
                    rows: t,
                    columns: da(t)
                };
            },
            write ({ columns: t , rows: e  }) {
                for (const i of e)for (const s of i)q(s, this.margin, e[0] !== i), q(s, this.firstColumn, t[0].includes(s));
            },
            events: [
                "resize"
            ]
        }
    };
    function fs(t) {
        return On(t, "top", "bottom");
    }
    function da(t) {
        const e = [];
        for (const i of t){
            const s = On(i, "left", "right");
            for(let n = 0; n < s.length; n++)e[n] = e[n] ? e[n].concat(s[n]) : s[n];
        }
        return K ? e.reverse() : e;
    }
    function On(t, e, i) {
        const s = [
            []
        ];
        for (const n of t){
            if (!U(n)) continue;
            let o = gi(n);
            for(let r = s.length - 1; r >= 0; r--){
                const a = s[r];
                if (!a[0]) {
                    a.push(n);
                    break;
                }
                let l;
                if (a[0].offsetParent === n.offsetParent ? l = gi(a[0]) : (o = gi(n, !0), l = gi(a[0], !0)), o[e] >= l[i] - 1 && o[e] !== l[e]) {
                    s.push([
                        n
                    ]);
                    break;
                }
                if (o[i] - 1 > l[e] || o[e] === l[e]) {
                    a.push(n);
                    break;
                }
                if (r === 0) {
                    s.unshift([
                        n
                    ]);
                    break;
                }
            }
        }
        return s;
    }
    function gi(t, e = !1) {
        let { offsetTop: i , offsetLeft: s , offsetHeight: n , offsetWidth: o  } = t;
        return e && ([i, s] = Wt(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        };
    }
    var fa = {
        extends: _n,
        mixins: [
            nt
        ],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: !1,
            parallax: 0
        },
        connected () {
            this.masonry && y(this.$el, "uk-flex-top uk-flex-wrap-top");
        },
        observe: di({
            filter: ({ parallax: t  })=>t
        }),
        update: [
            {
                write ({ columns: t  }) {
                    q(this.$el, this.clsStack, t.length < 2);
                },
                events: [
                    "resize"
                ]
            },
            {
                read (t) {
                    let { columns: e , rows: i  } = t;
                    if (!e.length || !this.masonry && !this.parallax || Bn(this.$el)) return t.translates = !1, !1;
                    let s = !1;
                    const n = P(this.$el), o = e.map((c)=>Nt(c, "offsetHeight")), r = ga(n, this.margin) * (i.length - 1), a = Math.max(...o) + r;
                    this.masonry && (e = e.map((c)=>Ve(c, "offsetTop")), s = pa(i, e));
                    let l = Math.abs(this.parallax);
                    return l && (l = o.reduce((c, u, d)=>Math.max(c, u + r + (d % 2 ? l : l / 8) - a), 0)), {
                        padding: l,
                        columns: e,
                        translates: s,
                        height: s ? a : ""
                    };
                },
                write ({ height: t , padding: e  }) {
                    h(this.$el, "paddingBottom", e || ""), t !== !1 && h(this.$el, "height", t);
                },
                events: [
                    "resize"
                ]
            },
            {
                read () {
                    return this.parallax && Bn(this.$el) ? !1 : {
                        scrolled: this.parallax ? ns(this.$el) * Math.abs(this.parallax) : !1
                    };
                },
                write ({ columns: t , scrolled: e , translates: i  }) {
                    e === !1 && !i || t.forEach((s, n)=>s.forEach((o, r)=>h(o, "transform", !e && !i ? "" : `translateY(${(i && -i[n][r]) + (e ? n % 2 ? e : e / 8 : 0)}px)`)));
                },
                events: [
                    "scroll",
                    "resize"
                ]
            }
        ]
    };
    function Bn(t) {
        return P(t).some((e)=>h(e, "position") === "absolute");
    }
    function pa(t, e) {
        const i = t.map((s)=>Math.max(...s.map((n)=>n.offsetHeight)));
        return e.map((s)=>{
            let n = 0;
            return s.map((o, r)=>n += r ? i[r - 1] - s[r - 1].offsetHeight : 0);
        });
    }
    function ga(t, e) {
        const [i] = t.filter((s)=>N(s, e));
        return $(i ? h(i, "marginTop") : h(t[0], "paddingLeft"));
    }
    var ma = {
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements: {
                get ({ target: t  }, e) {
                    return O(t, e);
                },
                watch () {
                    this.$reset();
                }
            }
        },
        observe: ft({
            target: ({ $el: t , elements: e  })=>[
                    t,
                    ...e
                ]
        }),
        update: {
            read () {
                return {
                    rows: (this.row ? fs(this.elements) : [
                        this.elements
                    ]).map(va)
                };
            },
            write ({ rows: t  }) {
                for (const { heights: e , elements: i  } of t)i.forEach((s, n)=>h(s, "minHeight", e[n]));
            },
            events: [
                "resize"
            ]
        }
    };
    function va(t) {
        if (t.length < 2) return {
            heights: [
                ""
            ],
            elements: t
        };
        let e = t.map(wa);
        const i = Math.max(...e);
        return {
            heights: t.map((s, n)=>e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        };
    }
    function wa(t) {
        const e = Ni(t.style, [
            "display",
            "minHeight"
        ]);
        U(t) || h(t, "display", "block", "important"), h(t, "minHeight", "");
        const i = b(t).height - he(t, "height", "content-box");
        return h(t, e), i;
    }
    var ba = {
        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },
        data: {
            expand: !1,
            offsetTop: !1,
            offsetBottom: !1,
            minHeight: 0
        },
        observe: ft({
            target: ({ $el: t  })=>[
                    t,
                    ...vt(t)
                ]
        }),
        update: {
            read ({ minHeight: t  }) {
                if (!U(this.$el)) return !1;
                let e = "";
                const i = he(this.$el, "height", "content-box"), { body: s , scrollingElement: n  } = document, [o] = vt(this.$el), { height: r  } = ct(o === s ? n : o);
                if (this.expand) e = Math.max(r - (b(o).height - b(this.$el).height) - i, 0);
                else {
                    const a = n === o || s === o;
                    if (e = `calc(${a ? "100vh" : `${r}px`}`, this.offsetTop) {
                        if (a) {
                            const l = Wt(this.$el)[0] - Wt(o)[0];
                            e += l > 0 && l < r / 2 ? ` - ${l}px` : "";
                        } else e += ` - ${h(o, "paddingTop")}`;
                    }
                    this.offsetBottom === !0 ? e += ` - ${b(this.$el.nextElementSibling).height}px` : wt(this.offsetBottom) ? e += ` - ${this.offsetBottom}vh` : this.offsetBottom && Qt(this.offsetBottom, "px") ? e += ` - ${$(this.offsetBottom)}px` : M(this.offsetBottom) && (e += ` - ${b(at(this.offsetBottom, this.$el)).height}px`), e += `${i ? ` - ${i}px` : ""})`;
                }
                return {
                    minHeight: e,
                    prev: t
                };
            },
            write ({ minHeight: t  }) {
                h(this.$el, {
                    minHeight: t
                }), this.minHeight && $(h(this.$el, "minHeight")) < this.minHeight && h(this.$el, "minHeight", this.minHeight);
            },
            events: [
                "resize"
            ]
        }
    };
    function Mn(t) {
        return Math.ceil(Math.max(0, ...O("[stroke]", t).map((e)=>{
            try {
                return e.getTotalLength();
            } catch  {
                return 0;
            }
        })));
    }
    var Dn = {
        args: "src",
        props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            attributes: "list"
        },
        data: {
            ratio: 1,
            include: [
                "style",
                "class"
            ],
            class: "",
            strokeAnimation: !1
        },
        beforeConnect () {
            this.class += " uk-svg";
        },
        connected () {
            !this.icon && g(this.src, "#") && ([this.src, this.icon] = this.src.split("#")), this.svg = this.getSvg().then((t)=>{
                if (this._connected) {
                    const e = ka(t, this.$el);
                    return this.svgEl && e !== this.svgEl && lt(this.svgEl), this.applyAttributes(e, t), this.svgEl = e;
                }
            }, S), this.strokeAnimation && this.svg.then((t)=>{
                this._connected && t && (zn(t), hi(this, ts(t, (e, i)=>{
                    zn(t), i.disconnect();
                })));
            });
        },
        disconnected () {
            this.svg.then((t)=>{
                this._connected || (Hi(this.$el) && (this.$el.hidden = !1), lt(t), this.svgEl = null);
            }), this.svg = null;
        },
        methods: {
            async getSvg () {
                return J(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise((t)=>R(this.$el, "load", ()=>t(this.getSvg()))) : xa(await $a(this.src), this.icon) || Promise.reject("SVG not found.");
            },
            applyAttributes (t, e) {
                for(const o in this.$options.props)g(this.include, o) && o in this && f(t, o, this[o]);
                for(const o in this.attributes){
                    const [r, a] = this.attributes[o].split(":", 2);
                    f(t, r, a);
                }
                this.id || xe(t, "id");
                const i = [
                    "width",
                    "height"
                ];
                let s = i.map((o)=>this[o]);
                s.some((o)=>o) || (s = i.map((o)=>f(e, o)));
                const n = f(e, "viewBox");
                n && !s.some((o)=>o) && (s = n.split(" ").slice(2)), s.forEach((o, r)=>f(t, i[r], $(o) * this.ratio || null));
            }
        }
    };
    const $a = pt(async (t)=>t ? rt(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function xa(t, e) {
        return e && g(t, "<symbol") && (t = ya(t, e) || t), t = w(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t;
    }
    const Nn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, mi = {};
    function ya(t, e) {
        if (!mi[t]) {
            mi[t] = {}, Nn.lastIndex = 0;
            let i;
            for(; i = Nn.exec(t);)mi[t][i[3]] = `<svg xmlns="http://www.w3.org/2000/svg"${i[1]}svg>`;
        }
        return mi[t][e];
    }
    function zn(t) {
        const e = Mn(t);
        e && t.style.setProperty("--uk-animation-stroke", e);
    }
    function ka(t, e) {
        if (Hi(e) || J(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return Fn(t, s) ? s : Ze(e, t);
        }
        const i = e.lastElementChild;
        return Fn(t, i) ? i : j(e, t);
    }
    function Fn(t, e) {
        return J(t, "svg") && J(e, "svg") && t.innerHTML === e.innerHTML;
    }
    var ps = {
        props: {
            i18n: Object
        },
        data: {
            i18n: null
        },
        methods: {
            t (t, ...e) {
                var i, s, n;
                let o = 0;
                return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, ()=>e[o++] || "")) || "";
            }
        }
    }, Sa = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Ia = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Ca = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Ta = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>', Ea = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Pa = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', Aa = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', _a = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.uk-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg>.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>', Oa = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>', Ba = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Ma = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Da = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Na = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', za = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Fa = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>', Ha = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>', La = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>', Wa = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>', Ra = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', ja = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
    const vi = {
        spinner: Ra,
        totop: ja,
        marker: Ta,
        "close-icon": Sa,
        "close-large": Ia,
        "drop-parent-icon": Ca,
        "nav-parent-icon": Ea,
        "nav-parent-icon-large": Pa,
        "navbar-parent-icon": Aa,
        "navbar-toggle-icon": _a,
        "overlay-icon": Oa,
        "pagination-next": Ba,
        "pagination-previous": Ma,
        "search-icon": Da,
        "search-large": Na,
        "search-navbar": za,
        "slidenav-next": Fa,
        "slidenav-next-large": Ha,
        "slidenav-previous": La,
        "slidenav-previous-large": Wa
    }, gs = {
        install: Qa,
        extends: Dn,
        args: "icon",
        props: [
            "icon"
        ],
        data: {
            include: []
        },
        isIcon: !0,
        beforeConnect () {
            y(this.$el, "uk-icon");
        },
        methods: {
            async getSvg () {
                const t = tl(this.icon);
                if (!t) throw "Icon not found.";
                return t;
            }
        }
    }, Gt = {
        args: !1,
        extends: gs,
        data: (t)=>({
                icon: Zt(t.constructor.options.name)
            }),
        beforeConnect () {
            y(this.$el, this.$options.id);
        }
    }, Ua = {
        extends: Gt,
        beforeConnect () {
            const t = this.$props.icon;
            this.icon = Y(this.$el, ".uk-nav-primary") ? `${t}-large` : t;
        }
    }, qa = {
        extends: Gt,
        beforeConnect () {
            this.icon = N(this.$el, "uk-search-icon") && oe(this.$el, ".uk-search-large").length ? "search-large" : oe(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon;
        }
    }, Va = {
        extends: Gt,
        beforeConnect () {
            f(this.$el, "role", "status");
        },
        methods: {
            async getSvg () {
                const t = await gs.methods.getSvg.call(this);
                return this.ratio !== 1 && h(w("circle", t), "strokeWidth", 1 / this.ratio), t;
            }
        }
    }, Xt = {
        extends: Gt,
        mixins: [
            ps
        ],
        beforeConnect () {
            const t = Y(this.$el, "a,button");
            f(t, "role", this.role !== null && J(t, "a") ? "button" : this.role);
            const e = this.t("label");
            e && !bt(t, "aria-label") && f(t, "aria-label", e);
        }
    }, Hn = {
        extends: Xt,
        beforeConnect () {
            y(this.$el, "uk-slidenav");
            const t = this.$props.icon;
            this.icon = N(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
        }
    }, Ya = {
        extends: Xt,
        i18n: {
            label: "Open menu"
        }
    }, Ga = {
        extends: Xt,
        i18n: {
            label: "Close"
        },
        beforeConnect () {
            this.icon = `close-${N(this.$el, "uk-close-large") ? "large" : "icon"}`;
        }
    }, Xa = {
        extends: Xt,
        i18n: {
            label: "Open"
        }
    }, Ja = {
        extends: Xt,
        i18n: {
            label: "Back to top"
        }
    }, Ka = {
        extends: Xt,
        i18n: {
            label: "Next page"
        },
        data: {
            role: null
        }
    }, Za = {
        extends: Xt,
        i18n: {
            label: "Previous page"
        },
        data: {
            role: null
        }
    }, wi = {};
    function Qa(t) {
        t.icon.add = (e, i)=>{
            const s = M(e) ? {
                [e]: i
            } : e;
            St(s, (n, o)=>{
                vi[o] = n, delete wi[o];
            }), t._initialized && Ct(document.body, (n)=>St(t.getComponents(n), (o)=>{
                    o.$options.isIcon && o.icon in s && o.$reset();
                }));
        };
    }
    function tl(t) {
        return vi[t] ? (wi[t] || (wi[t] = w((vi[el(t)] || vi[t]).trim())), wi[t].cloneNode(!0)) : null;
    }
    function el(t) {
        return K ? Di(Di(t, "left", "right"), "previous", "next") : t;
    }
    const il = Rt && "loading" in HTMLImageElement.prototype;
    var sl = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            margin: "50%",
            target: !1,
            loading: "lazy"
        },
        connected () {
            if (this.loading !== "lazy") {
                this.load();
                return;
            }
            il && bi(this.$el) && (this.$el.loading = "lazy", ms(this.$el)), ll(this.$el);
        },
        disconnected () {
            this._data.image && (this._data.image.onload = "");
        },
        observe: ui({
            target: ({ $el: t , $props: e  })=>[
                    t,
                    ...Ie(e.target, t)
                ],
            handler (t, e) {
                this.load(), e.disconnect();
            },
            options: ({ margin: t  })=>({
                    rootMargin: t
                }),
            filter: ({ loading: t  })=>t === "lazy"
        }),
        methods: {
            load () {
                if (this._data.image) return this._data.image;
                const t = bi(this.$el) ? this.$el : ol(this.$el, this.dataSrc, this.sources);
                return xe(t, "loading"), ms(this.$el, t.currentSrc), this._data.image = t;
            }
        }
    };
    function ms(t, e) {
        if (bi(t)) {
            const i = _(t);
            (J(i, "picture") ? P(i) : [
                t
            ]).forEach((n)=>Ln(n, n));
        } else e && !g(t.style.backgroundImage, e) && (h(t, "backgroundImage", `url(${ji(e)})`), m(t, Ft("load", !1)));
    }
    const nl = [
        "data-src",
        "data-srcset",
        "sizes"
    ];
    function Ln(t, e) {
        nl.forEach((i)=>{
            const s = it(t, i);
            s && f(e, i.replace(/^(data-)+/, ""), s);
        });
    }
    function ol(t, e, i) {
        const s = new Image;
        return rl(s, i), Ln(t, s), s.onload = ()=>{
            ms(t, s.currentSrc);
        }, f(s, "src", e), s;
    }
    function rl(t, e) {
        if (e = al(e), e.length) {
            const i = Ht("<picture>");
            for (const s of e){
                const n = Ht("<source>");
                f(n, s), j(i, n);
            }
            j(i, t);
        }
    }
    function al(t) {
        if (!t) return [];
        if (rt(t, "[")) try {
            t = JSON.parse(t);
        } catch  {
            t = [];
        }
        else t = Be(t);
        return Q(t) || (t = [
            t
        ]), t.filter((e)=>!be(e));
    }
    function ll(t) {
        bi(t) && !bt(t, "src") && f(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
    }
    function bi(t) {
        return J(t, "img");
    }
    var $i = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected () {
            const t = hl(this.media, this.$el);
            if (this.matchMedia = !0, t) {
                this.mediaObj = window.matchMedia(t);
                const e = ()=>{
                    this.matchMedia = this.mediaObj.matches, m(this.$el, Ft("mediachange", !1, !0, [
                        this.mediaObj
                    ]));
                };
                this.offMediaObj = x(this.mediaObj, "change", ()=>{
                    e(), this.$emit("resize");
                }), e();
            }
        },
        disconnected () {
            var t;
            (t = this.offMediaObj) == null || t.call(this);
        }
    };
    function hl(t, e) {
        if (M(t)) {
            if (rt(t, "@")) t = $(h(e, `--uk-breakpoint-${t.substr(1)}`));
            else if (isNaN(t)) return t;
        }
        return t && wt(t) ? `(min-width: ${t}px)` : "";
    }
    var cl = {
        mixins: [
            nt,
            $i
        ],
        props: {
            fill: String
        },
        data: {
            fill: "",
            clsWrapper: "uk-leader-fill",
            clsHide: "uk-leader-hide",
            attrFill: "data-fill"
        },
        computed: {
            fill ({ fill: t  }) {
                return t || h(this.$el, "--uk-leader-fill-content");
            }
        },
        connected () {
            [this.wrapper] = Ji(this.$el, `<span class="${this.clsWrapper}">`);
        },
        disconnected () {
            Ee(this.wrapper.childNodes);
        },
        observe: ft(),
        update: {
            read () {
                return {
                    width: Math.trunc(this.$el.offsetWidth / 2),
                    fill: this.fill,
                    hide: !this.matchMedia
                };
            },
            write ({ width: t , fill: e , hide: i  }) {
                q(this.wrapper, this.clsHide, i), f(this.wrapper, this.attrFill, new Array(t).join(e));
            },
            events: [
                "resize"
            ]
        }
    };
    const ot = [];
    var vs = {
        mixins: [
            nt,
            Ne,
            Yt
        ],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            role: String
        },
        data: {
            cls: "uk-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1,
            role: "dialog"
        },
        computed: {
            panel ({ selPanel: t  }, e) {
                return w(t, e);
            },
            transitionElement () {
                return this.panel;
            },
            bgClose ({ bgClose: t  }) {
                return t && this.panel;
            }
        },
        connected () {
            f(this.panel || this.$el, "role", this.role), this.overlay && f(this.panel || this.$el, "aria-modal", !0);
        },
        beforeDisconnect () {
            g(ot, this) && this.toggleElement(this.$el, !1, !1);
        },
        events: [
            {
                name: "click",
                delegate () {
                    return `${this.selClose},a[href*="#"]`;
                },
                handler (t) {
                    const { current: e , defaultPrevented: i  } = t, { hash: s  } = e;
                    !i && s && ae(e) && !D(s, this.$el) && w(s, document.body) ? this.hide() : E(e, this.selClose) && (t.preventDefault(), this.hide());
                }
            },
            {
                name: "toggle",
                self: !0,
                handler (t) {
                    t.defaultPrevented || (t.preventDefault(), this.isToggled() === g(ot, this) && this.toggle());
                }
            },
            {
                name: "beforeshow",
                self: !0,
                handler (t) {
                    if (g(ot, this)) return !1;
                    !this.stack && ot.length ? (Promise.all(ot.map((e)=>e.hide())).then(this.show), t.preventDefault()) : ot.push(this);
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    this.stack && h(this.$el, "zIndex", $(h(this.$el, "zIndex")) + ot.length);
                    const t = [
                        this.overlay && dl(this),
                        this.overlay && Cn(this.$el),
                        this.bgClose && fl(this),
                        this.escClose && pl(this)
                    ];
                    R(this.$el, "hidden", ()=>t.forEach((e)=>e && e()), {
                        self: !0
                    }), y(document.documentElement, this.clsPage);
                }
            },
            {
                name: "shown",
                self: !0,
                handler () {
                    Je(this.$el) || f(this.$el, "tabindex", "-1"), E(this.$el, ":focus-within") || this.$el.focus();
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    g(ot, this) && ot.splice(ot.indexOf(this), 1), h(this.$el, "zIndex", ""), ot.some((t)=>t.clsPage === this.clsPage) || F(document.documentElement, this.clsPage);
                }
            }
        ],
        methods: {
            toggle () {
                return this.isToggled() ? this.hide() : this.show();
            },
            show () {
                return this.container && _(this.$el) !== this.container ? (j(this.container, this.$el), new Promise((t)=>requestAnimationFrame(()=>this.show().then(t)))) : this.toggleElement(this.$el, !0, Wn);
            },
            hide () {
                return this.toggleElement(this.$el, !1, Wn);
            }
        }
    };
    function Wn(t, e, { transitionElement: i , _toggle: s  }) {
        return new Promise((n, o)=>R(t, "show hide", ()=>{
                var r;
                (r = t._reject) == null || r.call(t), t._reject = o, s(t, e);
                const a = R(i, "transitionstart", ()=>{
                    R(i, "transitionend transitioncancel", n, {
                        self: !0
                    }), clearTimeout(l);
                }, {
                    self: !0
                }), l = setTimeout(()=>{
                    a(), n();
                }, ul(h(i, "transitionDuration")));
            })).then(()=>delete t._reject);
    }
    function ul(t) {
        return t ? Qt(t, "ms") ? $(t) : $(t) * 1e3 : 0;
    }
    function dl(t) {
        return x(document, "focusin", (e)=>{
            ne(ot) === t && !D(e.target, t.$el) && t.$el.focus();
        });
    }
    function fl(t) {
        return x(document, mt, ({ target: e  })=>{
            ne(ot) !== t || t.overlay && !D(e, t.$el) || D(e, t.panel) || R(document, `${Ot} ${ni} scroll`, ({ defaultPrevented: i , type: s , target: n  })=>{
                !i && s === Ot && e === n && t.hide();
            }, !0);
        });
    }
    function pl(t) {
        return x(document, "keydown", (e)=>{
            e.keyCode === 27 && ne(ot) === t && t.hide();
        });
    }
    var gl = {
        install: ml,
        mixins: [
            vs
        ],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [
            {
                name: "show",
                self: !0,
                handler () {
                    N(this.panel, "uk-margin-auto-vertical") ? y(this.$el, "uk-flex") : h(this.$el, "display", "block"), st(this.$el);
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    h(this.$el, "display", ""), F(this.$el, "uk-flex");
                }
            }
        ]
    };
    function ml({ modal: t  }) {
        t.dialog = function(i, s) {
            const n = t(`<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`, s);
            return n.show(), x(n.$el, "hidden", async ()=>{
                await Promise.resolve(), n.$destroy(!0);
            }, {
                self: !0
            }), n;
        }, t.alert = function(i, s) {
            return e(({ i18n: n  })=>`<div class="uk-modal-body">${M(i) ? i : _t(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`, s, (n)=>n.resolve());
        }, t.confirm = function(i, s) {
            return e(({ i18n: n  })=>`<form> <div class="uk-modal-body">${M(i) ? i : _t(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, (n)=>n.reject());
        }, t.prompt = function(i, s, n) {
            return e(({ i18n: o  })=>`<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${M(i) ? i : _t(i)}</label> <input class="uk-input" value="${s || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${o.cancel}</button> <button class="uk-button uk-button-primary">${o.ok}</button> </div> </form>`, n, (o)=>o.resolve(null), (o)=>w("input", o.$el).value);
        }, t.i18n = {
            ok: "Ok",
            cancel: "Cancel"
        };
        function e(i, s, n, o) {
            s = {
                bgClose: !1,
                escClose: !0,
                role: "alertdialog",
                ...s,
                i18n: {
                    ...t.i18n,
                    ...s == null ? void 0 : s.i18n
                }
            };
            const r = t.dialog(i(s), s), a = new Xe;
            let l = !1;
            return x(r.$el, "submit", "form", (c)=>{
                c.preventDefault(), a.resolve(o == null ? void 0 : o(r)), l = !0, r.hide();
            }), x(r.$el, "hide", ()=>!l && n(a)), a.promise.dialog = r, a.promise;
        }
    }
    var vl = {
        extends: yn,
        data: {
            targets: "> .uk-parent",
            toggle: "> a",
            content: "> ul"
        }
    }, wl = {
        extends: En,
        data: {
            dropdown: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
            clsDrop: "uk-navbar-dropdown"
        },
        computed: {
            items: {
                get ({ dropdown: t  }, e) {
                    return O(t, e);
                },
                watch (t) {
                    const e = N(this.$el, "uk-navbar-justify");
                    for (const i of O(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el))h(i, "flexGrow", e ? O(this.dropdown, i).length : "");
                    f(O(".uk-navbar-nav", this.$el), "role", "group"), f(O(".uk-navbar-nav > *", this.$el), "role", "presentation"), f(t, {
                        tabindex: -1,
                        role: "menuitem"
                    }), f(t[0], "tabindex", 0);
                },
                immediate: !0
            }
        }
    }, bl = {
        mixins: [
            vs
        ],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean,
            swiping: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: !1,
            swiping: !0
        },
        computed: {
            clsFlip ({ flip: t , clsFlip: e  }) {
                return t ? e : "";
            },
            clsOverlay ({ overlay: t , clsOverlay: e  }) {
                return t ? e : "";
            },
            clsMode ({ mode: t , clsMode: e  }) {
                return `${e}-${t}`;
            },
            clsSidebarAnimation ({ mode: t , clsSidebarAnimation: e  }) {
                return t === "none" || t === "reveal" ? "" : e;
            },
            clsContainerAnimation ({ mode: t , clsContainerAnimation: e  }) {
                return t !== "push" && t !== "reveal" ? "" : e;
            },
            transitionElement ({ mode: t  }) {
                return t === "reveal" ? _(this.panel) : this.panel;
            }
        },
        observe: xn({
            filter: ({ swiping: t  })=>t
        }),
        update: {
            read () {
                this.isToggled() && !U(this.$el) && this.hide();
            },
            events: [
                "resize"
            ]
        },
        events: [
            {
                name: "touchmove",
                self: !0,
                passive: !1,
                filter () {
                    return this.overlay;
                },
                handler (t) {
                    t.cancelable && t.preventDefault();
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    this.mode === "reveal" && !N(_(this.panel), this.clsMode) && (ti(this.panel, "<div>"), y(_(this.panel), this.clsMode));
                    const { body: t , scrollingElement: e  } = document;
                    y(t, this.clsContainer, this.clsFlip), h(t, "touch-action", "pan-y pinch-zoom"), h(this.$el, "display", "block"), h(this.panel, "maxWidth", e.clientWidth), y(this.$el, this.clsOverlay), y(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), st(t), y(t, this.clsContainerAnimation), this.clsContainerAnimation && $l();
                }
            },
            {
                name: "hide",
                self: !0,
                handler () {
                    F(document.body, this.clsContainerAnimation), h(document.body, "touch-action", "");
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    this.clsContainerAnimation && xl(), this.mode === "reveal" && Ee(this.panel), F(this.panel, this.clsSidebarAnimation, this.clsMode), F(this.$el, this.clsOverlay), h(this.$el, "display", ""), h(this.panel, "maxWidth", ""), F(document.body, this.clsContainer, this.clsFlip);
                }
            },
            {
                name: "swipeLeft swipeRight",
                handler (t) {
                    this.isToggled() && Qt(t.type, "Left") ^ this.flip && this.hide();
                }
            }
        ]
    };
    function $l() {
        Rn().content += ",user-scalable=0";
    }
    function xl() {
        const t = Rn();
        t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function Rn() {
        return w('meta[name="viewport"]', document.head) || j(document.head, '<meta name="viewport">');
    }
    var yl = {
        mixins: [
            nt
        ],
        props: {
            selContainer: String,
            selContent: String,
            minHeight: Number
        },
        data: {
            selContainer: ".uk-modal",
            selContent: ".uk-modal-dialog",
            minHeight: 150
        },
        computed: {
            container ({ selContainer: t  }, e) {
                return Y(e, t);
            },
            content ({ selContent: t  }, e) {
                return Y(e, t);
            }
        },
        observe: ft({
            target: ({ container: t , content: e  })=>[
                    t,
                    e
                ]
        }),
        update: {
            read () {
                return !this.content || !this.container || !U(this.$el) ? !1 : {
                    max: Math.max(this.minHeight, st(this.container) - (b(this.content).height - st(this.$el)))
                };
            },
            write ({ max: t  }) {
                h(this.$el, {
                    minHeight: this.minHeight,
                    maxHeight: t
                });
            },
            events: [
                "resize"
            ]
        }
    }, kl = {
        props: [
            "width",
            "height"
        ],
        connected () {
            y(this.$el, "uk-responsive-width");
        },
        observe: ft({
            target: ({ $el: t  })=>[
                    t,
                    _(t)
                ]
        }),
        update: {
            read () {
                return U(this.$el) && this.width && this.height ? {
                    width: Pe(_(this.$el)),
                    height: this.height
                } : !1;
            },
            write (t) {
                st(this.$el, Ge.contain({
                    height: this.height,
                    width: this.width
                }, t).height);
            },
            events: [
                "resize"
            ]
        }
    }, Sl = {
        props: {
            offset: Number
        },
        data: {
            offset: 0
        },
        connected () {
            Il(this);
        },
        disconnected () {
            Cl(this);
        },
        methods: {
            async scrollTo (t) {
                t = t && w(t) || document.body, m(this.$el, "beforescroll", [
                    this,
                    t
                ]) && (await Qs(t, {
                    offset: this.offset
                }), m(this.$el, "scrolled", [
                    this,
                    t
                ]));
            }
        }
    };
    const ze = new Set;
    function Il(t) {
        ze.size || x(document, "click", jn), ze.add(t);
    }
    function Cl(t) {
        ze.delete(t), ze.size || zt(document, "click", jn);
    }
    function jn(t) {
        if (!t.defaultPrevented) for (const e of ze)D(t.target, e.$el) && ae(e.$el) && (t.preventDefault(), window.history.pushState({}, "", e.$el.href), e.scrollTo(Wi(e.$el)));
    }
    var Tl = {
        args: "cls",
        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            margin: String,
            repeat: Boolean,
            delay: Number
        },
        data: ()=>({
                cls: "",
                target: !1,
                hidden: !0,
                margin: "-1px",
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview"
            }),
        computed: {
            elements: {
                get ({ target: t  }, e) {
                    return t ? O(t, e) : [
                        e
                    ];
                },
                watch (t) {
                    this.hidden && h(Se(t, `:not(.${this.inViewClass})`), "opacity", 0);
                },
                immediate: !0
            }
        },
        connected () {
            this._data.elements = new Map;
        },
        disconnected () {
            for (const [t, e] of this._data.elements.entries())F(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
        },
        observe: ui({
            target: ({ elements: t  })=>t,
            handler (t) {
                const e = this._data.elements;
                for (const { target: i , isIntersecting: s  } of t){
                    e.has(i) || e.set(i, {
                        cls: it(i, "uk-scrollspy-class") || this.cls
                    });
                    const n = e.get(i);
                    !this.repeat && n.show || (n.show = s);
                }
                this.$emit();
            },
            options: (t)=>({
                    rootMargin: t.margin
                }),
            args: {
                intersecting: !1
            }
        }),
        update: [
            {
                write (t) {
                    for (const [e, i] of t.elements.entries())i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(()=>new Promise((s)=>setTimeout(s, this.delay))).then(()=>{
                        this.toggle(e, !0), setTimeout(()=>{
                            i.queued = !1, this.$emit();
                        }, 300);
                    })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
                }
            }
        ],
        methods: {
            toggle (t, e) {
                var i;
                const s = this._data.elements.get(t);
                if (s) {
                    if ((i = s.off) == null || i.call(s), h(t, "opacity", !e && this.hidden ? 0 : ""), q(t, this.inViewClass, e), q(t, s.cls), /\buk-animation-/.test(s.cls)) {
                        const n = ()=>Yi(t, "uk-animation-[\\w-]+");
                        e ? s.off = R(t, "animationcancel animationend", n) : n();
                    }
                    m(t, e ? "inview" : "outview"), s.inview = e, this.$update(t);
                }
            }
        }
    }, El = {
        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },
        data: {
            cls: "uk-active",
            closest: !1,
            scroll: !1,
            overflow: !0,
            offset: 0
        },
        computed: {
            links: {
                get (t, e) {
                    return O('a[href*="#"]', e).filter((i)=>i.hash && ae(i));
                },
                watch (t) {
                    this.scroll && this.$create("scroll", t, {
                        offset: this.offset || 0
                    });
                },
                immediate: !0
            },
            elements ({ closest: t  }) {
                return Y(this.links, t || "*");
            }
        },
        observe: di(),
        update: [
            {
                read () {
                    const t = this.links.map(Wi).filter(Boolean), { length: e  } = t;
                    if (!e || !U(this.$el)) return !1;
                    const [i] = vt(t, !0), { scrollTop: s , scrollHeight: n  } = i, o = ct(i), r = n - o.height;
                    let a = !1;
                    if (s === r) a = e - 1;
                    else {
                        for(let l = 0; l < t.length && !(A(t[l]).top - o.top - this.offset > 0); l++)a = +l;
                        a === !1 && this.overflow && (a = 0);
                    }
                    return {
                        active: a
                    };
                },
                write ({ active: t  }) {
                    const e = t !== !1 && !N(this.elements[t], this.cls);
                    this.links.forEach((i)=>i.blur());
                    for(let i = 0; i < this.elements.length; i++)q(this.elements[i], this.cls, +i === t);
                    e && m(this.$el, "active", [
                        t,
                        this.elements[t]
                    ]);
                },
                events: [
                    "scroll",
                    "resize"
                ]
            }
        ]
    }, Pl = {
        mixins: [
            nt,
            $i
        ],
        props: {
            position: String,
            top: null,
            bottom: null,
            start: null,
            end: null,
            offset: String,
            overflowFlip: Boolean,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            showOnUp: Boolean,
            targetOffset: Number
        },
        data: {
            position: "top",
            top: !1,
            bottom: !1,
            start: !1,
            end: !1,
            offset: 0,
            overflowFlip: !1,
            animation: "",
            clsActive: "uk-active",
            clsInactive: "",
            clsFixed: "uk-sticky-fixed",
            clsBelow: "uk-sticky-below",
            selTarget: "",
            showOnUp: !1,
            targetOffset: !1
        },
        computed: {
            selTarget ({ selTarget: t  }, e) {
                return t && w(t, e) || e;
            }
        },
        connected () {
            this.start = Un(this.start || this.top), this.end = Un(this.end || this.bottom), this.placeholder = w("+ .uk-sticky-placeholder", this.$el) || w('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
        },
        disconnected () {
            this.isFixed && (this.hide(), F(this.selTarget, this.clsInactive)), qn(this.$el), lt(this.placeholder), this.placeholder = null;
        },
        observe: [
            ft({
                handler () {
                    !this.isFixed && this.$emit("resize");
                }
            }),
            ft({
                target: ()=>[
                        document.documentElement
                    ]
            }),
            di()
        ],
        events: [
            {
                name: "resize",
                el () {
                    return [
                        window,
                        window.visualViewport
                    ];
                },
                handler () {
                    this.$emit("resizeViewport");
                }
            },
            {
                name: "load hashchange popstate",
                el () {
                    return window;
                },
                filter () {
                    return this.targetOffset !== !1;
                },
                handler () {
                    const { scrollingElement: t  } = document;
                    !location.hash || t.scrollTop === 0 || setTimeout(()=>{
                        const e = A(w(location.hash)), i = A(this.$el);
                        this.isFixed && zi(e, i) && (t.scrollTop = e.top - i.height - ht(this.targetOffset, "height", this.placeholder) - ht(this.offset, "height", this.placeholder));
                    });
                }
            }
        ],
        update: [
            {
                read ({ height: t , width: e , margin: i , sticky: s  }, n) {
                    if (this.inactive = !this.matchMedia || !U(this.$el), this.inactive) return;
                    const o = this.isFixed && n.has("resize") && !s;
                    o && (h(this.selTarget, "transition", "0s"), this.hide()), this.active || ({ height: t , width: e  } = A(this.$el), i = h(this.$el, "margin")), o && (this.show(), requestAnimationFrame(()=>h(this.selTarget, "transition", "")));
                    const r = ht("100vh", "height"), a = st(window), l = document.scrollingElement.scrollHeight - r;
                    let c = this.position;
                    this.overflowFlip && t > r && (c = c === "top" ? "bottom" : "top");
                    const u = this.isFixed ? this.placeholder : this.$el;
                    let d = ht(this.offset, "height", s ? this.$el : u);
                    c === "bottom" && (t < a || this.overflowFlip) && (d += a - t);
                    const p = this.overflowFlip ? 0 : Math.max(0, t + d - r), v = A(u).top, C = A(this.$el).height, H = (this.start === !1 ? v : ws(this.start, this.$el, v)) - d, z = this.end === !1 ? l : Math.min(l, ws(this.end, this.$el, v + t, !0) - C - d + p);
                    return s = l && !this.showOnUp && H + d === v && z === Math.min(l, ws("!*", this.$el, 0, !0) - C - d + p) && h(_(this.$el), "overflowY") === "visible", {
                        start: H,
                        end: z,
                        offset: d,
                        overflow: p,
                        topOffset: v,
                        height: t,
                        elHeight: C,
                        width: e,
                        margin: i,
                        top: Wt(u)[0],
                        sticky: s
                    };
                },
                write ({ height: t , width: e , margin: i , offset: s , sticky: n  }) {
                    if ((this.inactive || n || !this.isFixed) && qn(this.$el), this.inactive) return;
                    n && (t = e = i = 0, h(this.$el, {
                        position: "sticky",
                        top: s
                    }));
                    const { placeholder: o  } = this;
                    h(o, {
                        height: t,
                        width: e,
                        margin: i
                    }), D(o, document) || (o.hidden = !0), (n ? Ke : Ze)(this.$el, o);
                },
                events: [
                    "resize",
                    "resizeViewport"
                ]
            },
            {
                read ({ scroll: t = 0 , dir: e = "down" , overflow: i , overflowScroll: s = 0 , start: n , end: o  }) {
                    const r = document.scrollingElement.scrollTop;
                    return {
                        dir: t <= r ? "down" : "up",
                        prevDir: e,
                        scroll: r,
                        prevScroll: t,
                        offsetParentTop: A((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                        overflowScroll: et(s + et(r, n, o) - et(t, n, o), 0, i)
                    };
                },
                write (t, e) {
                    const i = e.has("scroll"), { initTimestamp: s = 0 , dir: n , prevDir: o , scroll: r , prevScroll: a = 0 , top: l , start: c , topOffset: u , height: d  } = t;
                    if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed) return;
                    const p = Date.now();
                    if ((p - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = p), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10)) {
                        if (this.inactive || r < c || this.showOnUp && (r <= c || n === "down" && i || n === "up" && !this.isFixed && r <= u + d)) {
                            if (!this.isFixed) {
                                gt.inProgress(this.$el) && l > r && (gt.cancel(this.$el), this.hide());
                                return;
                            }
                            this.animation && r > u ? (gt.cancel(this.$el), gt.out(this.$el, this.animation).then(()=>this.hide(), S)) : this.hide();
                        } else this.isFixed ? this.update() : this.animation && r > u ? (gt.cancel(this.$el), this.show(), gt.in(this.$el, this.animation).catch(S)) : this.show();
                    }
                },
                events: [
                    "resize",
                    "resizeViewport",
                    "scroll"
                ]
            }
        ],
        methods: {
            show () {
                this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
            },
            hide () {
                const { offset: t , sticky: e  } = this._data;
                this.setActive(!1), F(this.$el, this.clsFixed, this.clsBelow), e ? h(this.$el, "top", t) : h(this.$el, {
                    position: "",
                    top: "",
                    width: "",
                    marginTop: ""
                }), this.placeholder.hidden = !0, this.isFixed = !1;
            },
            update () {
                let { width: t , scroll: e = 0 , overflow: i , overflowScroll: s = 0 , start: n , end: o , offset: r , topOffset: a , height: l , elHeight: c , offsetParentTop: u , sticky: d  } = this._data;
                const p = n !== 0 || e > n;
                if (!d) {
                    let v = "fixed";
                    e > o && (r += o - u, v = "absolute"), h(this.$el, {
                        position: v,
                        width: t
                    }), h(this.$el, "marginTop", 0, "important");
                }
                i && (r -= s), h(this.$el, "top", r), this.setActive(p), q(this.$el, this.clsBelow, e > a + (d ? Math.min(l, c) : l)), y(this.$el, this.clsFixed);
            },
            setActive (t) {
                const e = this.active;
                this.active = t, t ? (Gi(this.selTarget, this.clsInactive, this.clsActive), e !== t && m(this.$el, "active")) : (Gi(this.selTarget, this.clsActive, this.clsInactive), e !== t && m(this.$el, "inactive"));
            }
        }
    };
    function ws(t, e, i, s) {
        if (!t) return 0;
        if (wt(t) || M(t) && t.match(/^-?\d/)) return i + ht(t, "height", e, !0);
        {
            const n = t === !0 ? _(e) : at(t, e);
            return A(n).bottom - (s && n && D(e, n) ? $(h(n, "paddingBottom")) : 0);
        }
    }
    function Un(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function qn(t) {
        h(t, {
            position: "",
            top: "",
            marginTop: "",
            width: ""
        });
    }
    const bs = ".uk-disabled *, .uk-disabled, [disabled]";
    var Vn = {
        mixins: [
            Yt
        ],
        args: "connect",
        props: {
            connect: String,
            toggle: String,
            itemNav: String,
            active: Number,
            followFocus: Boolean,
            swiping: Boolean
        },
        data: {
            connect: "~.uk-switcher",
            toggle: "> * > :first-child",
            itemNav: !1,
            active: 0,
            cls: "uk-active",
            attrItem: "uk-switcher-item",
            selVertical: ".uk-nav",
            followFocus: !1,
            swiping: !0
        },
        computed: {
            connects: {
                get ({ connect: t  }, e) {
                    return Ie(t, e);
                },
                watch (t) {
                    this.swiping && h(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
                },
                document: !0,
                immediate: !0
            },
            connectChildren: {
                get () {
                    return this.connects.map((t)=>P(t)).flat();
                },
                watch () {
                    const t = this.index();
                    for (const e of this.connects)P(e).forEach((i, s)=>q(i, this.cls, s === t));
                    this.$emit();
                },
                immediate: !0
            },
            toggles: {
                get ({ toggle: t  }, e) {
                    return O(t, e);
                },
                watch (t) {
                    this.$emit();
                    const e = this.index();
                    this.show(~e ? e : t[this.active] || t[0]);
                },
                immediate: !0
            },
            children () {
                return P(this.$el).filter((t)=>this.toggles.some((e)=>D(e, t)));
            }
        },
        connected () {
            f(this.$el, "role", "tablist");
        },
        observe: [
            De({
                targets: ({ connectChildren: t  })=>t
            }),
            xn({
                target: ({ connects: t  })=>t,
                filter: ({ swiping: t  })=>t
            })
        ],
        events: [
            {
                name: "click keydown",
                delegate () {
                    return this.toggle;
                },
                handler (t) {
                    !E(t.current, bs) && (t.type === "click" || t.keyCode === T.SPACE) && (t.preventDefault(), this.show(t.current));
                }
            },
            {
                name: "keydown",
                delegate () {
                    return this.toggle;
                },
                handler (t) {
                    const { current: e , keyCode: i  } = t, s = E(this.$el, this.selVertical);
                    let n = i === T.HOME ? 0 : i === T.END ? "last" : i === T.LEFT && !s || i === T.UP && s ? "previous" : i === T.RIGHT && !s || i === T.DOWN && s ? "next" : -1;
                    if (~n) {
                        t.preventDefault();
                        const o = this.toggles.filter((a)=>!E(a, bs)), r = o[dt(n, o, o.indexOf(e))];
                        r.focus(), this.followFocus && this.show(r);
                    }
                }
            },
            {
                name: "click",
                el () {
                    return this.connects.concat(this.itemNav ? Ie(this.itemNav, this.$el) : []);
                },
                delegate () {
                    return `[${this.attrItem}],[data-${this.attrItem}]`;
                },
                handler (t) {
                    Y(t.target, "a,button") && (t.preventDefault(), this.show(it(t.current, this.attrItem)));
                }
            },
            {
                name: "swipeRight swipeLeft",
                filter () {
                    return this.swiping;
                },
                el () {
                    return this.connects;
                },
                handler ({ type: t  }) {
                    this.show(Qt(t, "Left") ? "next" : "previous");
                }
            }
        ],
        update () {
            var t;
            f(this.connects, "role", "presentation"), f(P(this.$el), "role", "presentation");
            for(const e in this.toggles){
                const i = this.toggles[e], s = (t = this.connects[0]) == null ? void 0 : t.children[e];
                f(i, "role", "tab"), s && (i.id = Mt(this, i, `-tab-${e}`), s.id = Mt(this, s, `-tabpanel-${e}`), f(i, "aria-controls", s.id), f(s, {
                    role: "tabpanel",
                    "aria-labelledby": i.id
                }));
            }
            f(this.$el, "aria-orientation", E(this.$el, this.selVertical) ? "vertical" : null);
        },
        methods: {
            index () {
                return $t(this.children, (t)=>N(t, this.cls));
            },
            show (t) {
                const e = this.toggles.filter((r)=>!E(r, bs)), i = this.index(), s = dt(!qe(t) || g(e, t) ? t : 0, e, dt(this.toggles[i], e)), n = dt(e[s], this.toggles);
                this.children.forEach((r, a)=>{
                    q(r, this.cls, n === a), f(this.toggles[a], {
                        "aria-selected": n === a,
                        tabindex: n === a ? null : -1
                    });
                });
                const o = i >= 0 && i !== s;
                this.connects.forEach(async ({ children: r  })=>{
                    await this.toggleElement(k(r).filter((a)=>N(a, this.cls)), !1, o), await this.toggleElement(r[n], !0, o);
                });
            }
        }
    }, Al = {
        mixins: [
            nt
        ],
        extends: Vn,
        props: {
            media: Boolean
        },
        data: {
            media: 960,
            attrItem: "uk-tab-item",
            selVertical: ".uk-tab-left,.uk-tab-right"
        },
        connected () {
            const t = N(this.$el, "uk-tab-left") ? "uk-tab-left" : N(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
            t && this.$create("toggle", this.$el, {
                cls: t,
                mode: "media",
                media: this.media
            });
        }
    };
    const _l = 32;
    var Ol = {
        mixins: [
            $i,
            Yt
        ],
        args: "target",
        props: {
            href: String,
            target: null,
            mode: "list",
            queued: Boolean
        },
        data: {
            href: !1,
            target: !1,
            mode: "click",
            queued: !0
        },
        computed: {
            target ({ href: t , target: e  }, i) {
                return e = Ie(e || t, i), e.length && e || [
                    i
                ];
            }
        },
        connected () {
            g(this.mode, "media") || (Je(this.$el) || f(this.$el, "tabindex", "0"), !this.cls && J(this.$el, "a") && f(this.$el, "role", "button"));
        },
        observe: De({
            target: ({ target: t  })=>t
        }),
        events: [
            {
                name: mt,
                filter () {
                    return g(this.mode, "hover");
                },
                handler (t) {
                    this._preventClick = null, !(!It(t) || this._showState || this.$el.disabled) && (m(this.$el, "focus"), R(document, mt, ()=>m(this.$el, "blur"), !0, (e)=>!D(e.target, this.$el)), g(this.mode, "click") && (this._preventClick = !0));
                }
            },
            {
                name: `${Tt} ${Bt} focus blur`,
                filter () {
                    return g(this.mode, "hover");
                },
                handler (t) {
                    if (It(t) || this.$el.disabled) return;
                    const e = g([
                        Tt,
                        "focus"
                    ], t.type), i = this.isToggled(this.target);
                    if (!(!e && (t.type === Bt && E(this.$el, ":focus") || t.type === "blur" && E(this.$el, ":hover")))) {
                        if (this._showState && e && i !== this._showState) {
                            e || (this._showState = null);
                            return;
                        }
                        this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`);
                    }
                }
            },
            {
                name: "keydown",
                filter () {
                    return g(this.mode, "click") && !J(this.$el, "input");
                },
                handler (t) {
                    t.keyCode === _l && (t.preventDefault(), this.$el.click());
                }
            },
            {
                name: "click",
                filter () {
                    return [
                        "click",
                        "hover"
                    ].some((t)=>g(this.mode, t));
                },
                handler (t) {
                    let e;
                    (this._preventClick || Y(t.target, 'a[href="#"], a[href=""]') || (e = Y(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && E(this.target, e.hash))) && t.preventDefault(), !this._preventClick && g(this.mode, "click") && this.toggle();
                }
            },
            {
                name: "mediachange",
                filter () {
                    return g(this.mode, "media");
                },
                el () {
                    return this.target;
                },
                handler (t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle();
                }
            }
        ],
        methods: {
            async toggle (t) {
                if (!m(this.target, t || "toggle", [
                    this
                ])) return;
                if (bt(this.$el, "aria-expanded") && f(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued) return this.toggleElement(this.target);
                const e = this.target.filter((s)=>N(s, this.clsLeave));
                if (e.length) {
                    for (const s of this.target){
                        const n = g(e, s);
                        this.toggleElement(s, n, n);
                    }
                    return;
                }
                const i = this.target.filter(this.isToggled);
                await this.toggleElement(i, !1), await this.toggleElement(this.target.filter((s)=>!g(i, s)), !0);
            }
        }
    }, Bl = Object.freeze({
        __proto__: null,
        Accordion: yn,
        Alert: ta,
        Close: Ga,
        Cover: ia,
        Drop: Tn,
        DropParentIcon: Gt,
        Dropdown: Tn,
        Dropnav: En,
        FormCustom: ua,
        Grid: fa,
        HeightMatch: ma,
        HeightViewport: ba,
        Icon: gs,
        Img: sl,
        Leader: cl,
        Margin: _n,
        Marker: Xa,
        Modal: gl,
        Nav: vl,
        NavParentIcon: Ua,
        Navbar: wl,
        NavbarParentIcon: Gt,
        NavbarToggleIcon: Ya,
        Offcanvas: bl,
        OverflowAuto: yl,
        OverlayIcon: Gt,
        PaginationNext: Ka,
        PaginationPrevious: Za,
        Responsive: kl,
        Scroll: Sl,
        Scrollspy: Tl,
        ScrollspyNav: El,
        SearchIcon: qa,
        SlidenavNext: Hn,
        SlidenavPrevious: Hn,
        Spinner: Va,
        Sticky: Pl,
        Svg: Dn,
        Switcher: Vn,
        Tab: Al,
        Toggle: Ol,
        Totop: Ja,
        Video: kn
    });
    St(Bl, (t, e)=>B.component(e, t)), Rr(B);
    const Ml = [
        "days",
        "hours",
        "minutes",
        "seconds"
    ];
    var Dl = {
        mixins: [
            nt
        ],
        props: {
            date: String,
            clsWrapper: String,
            role: String
        },
        data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%",
            role: "timer"
        },
        connected () {
            f(this.$el, "role", this.role), this.date = $(Date.parse(this.$props.date)), this.end = !1, this.start();
        },
        disconnected () {
            this.stop();
        },
        events: {
            name: "visibilitychange",
            el () {
                return document;
            },
            handler () {
                document.hidden ? this.stop() : this.start();
            }
        },
        methods: {
            start () {
                this.stop(), this.update(), this.timer || (m(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
            },
            stop () {
                this.timer && (clearInterval(this.timer), m(this.$el, "countdownstop"), this.timer = null);
            },
            update () {
                const t = Nl(this.date);
                t.total || (this.stop(), this.end || (m(this.$el, "countdownend"), this.end = !0));
                for (const e of Ml){
                    const i = w(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i) continue;
                    let s = String(Math.trunc(t[e]));
                    s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && _t(i, s.map(()=>"<span></span>").join("")), s.forEach((n, o)=>i.children[o].textContent = n));
                }
            }
        }
    };
    function Nl(t) {
        const e = Math.max(0, t - Date.now()) / 1e3;
        return {
            total: e,
            seconds: e % 60,
            minutes: e / 60 % 60,
            hours: e / 60 / 60 % 24,
            days: e / 60 / 60 / 24
        };
    }
    const $s = "uk-transition-leave", xs = "uk-transition-enter";
    function Yn(t, e, i, s = 0) {
        const n = xi(e, !0), o = {
            opacity: 1
        }, r = {
            opacity: 0
        }, a = (u)=>()=>n === xi(e) ? u() : Promise.reject(), l = a(async ()=>{
            y(e, $s), await Promise.all(Xn(e).map((u, d)=>new Promise((p)=>setTimeout(()=>I.start(u, r, i / 2, "ease").then(p), d * s)))), F(e, $s);
        }), c = a(async ()=>{
            const u = st(e);
            y(e, xs), t(), h(P(e), {
                opacity: 0
            }), await zl();
            const d = P(e), p = st(e);
            h(e, "alignContent", "flex-start"), st(e, u);
            const v = Xn(e);
            h(d, r);
            const C = v.map(async (H, z)=>{
                await Fl(z * s), await I.start(H, o, i / 2, "ease");
            });
            u !== p && C.push(I.start(e, {
                height: p
            }, i / 2 + v.length * s, "ease")), await Promise.all(C).then(()=>{
                F(e, xs), n === xi(e) && (h(e, {
                    height: "",
                    alignContent: ""
                }), h(d, {
                    opacity: ""
                }), delete e.dataset.transition);
            });
        });
        return N(e, $s) ? Gn(e).then(c) : N(e, xs) ? Gn(e).then(l).then(c) : l().then(c);
    }
    function xi(t, e) {
        return e && (t.dataset.transition = 1 + xi(t)), kt(t.dataset.transition) || 0;
    }
    function Gn(t) {
        return Promise.all(P(t).filter(I.inProgress).map((e)=>new Promise((i)=>R(e, "transitionend transitioncanceled", i))));
    }
    function Xn(t) {
        return fs(P(t)).reduce((e, i)=>e.concat(Ve(i.filter((s)=>ss(s)), "offsetLeft")), []);
    }
    function zl() {
        return new Promise((t)=>requestAnimationFrame(t));
    }
    function Fl(t) {
        return new Promise((e)=>setTimeout(e, t));
    }
    async function Hl(t, e, i) {
        await Zn();
        let s = P(e);
        const n = s.map((p)=>Jn(p, !0)), o = {
            ...h(e, [
                "height",
                "padding"
            ]),
            display: "block"
        };
        await Promise.all(s.concat(e).map(I.cancel)), t(), s = s.concat(P(e).filter((p)=>!g(s, p))), await Promise.resolve(), G.flush();
        const r = f(e, "style"), a = h(e, [
            "height",
            "padding"
        ]), [l, c] = Ll(e, s, n), u = s.map((p)=>({
                style: f(p, "style")
            }));
        s.forEach((p, v)=>c[v] && h(p, c[v])), h(e, o), m(e, "scroll"), G.flush(), await Zn();
        const d = s.map((p, v)=>_(p) === e && I.start(p, l[v], i, "ease")).concat(I.start(e, a, i, "ease"));
        try {
            await Promise.all(d), s.forEach((p, v)=>{
                f(p, u[v]), _(p) === e && h(p, "display", l[v].opacity === 0 ? "none" : "");
            }), f(e, "style", r);
        } catch  {
            f(s, "style", ""), Wl(e, o);
        }
    }
    function Jn(t, e) {
        const i = h(t, "zIndex");
        return U(t) ? {
            display: "",
            opacity: e ? h(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? re(t) : i,
            ...Kn(t)
        } : !1;
    }
    function Ll(t, e, i) {
        const s = e.map((o, r)=>_(o) && r in i ? i[r] ? U(o) ? Kn(o) : {
                opacity: 0
            } : {
                opacity: U(o) ? 1 : 0
            } : !1), n = s.map((o, r)=>{
            const a = _(e[r]) === t && (i[r] || Jn(e[r]));
            if (!a) return !1;
            if (!o) delete a.opacity;
            else if (!("opacity" in o)) {
                const { opacity: l  } = a;
                l % 1 ? o.opacity = 1 : delete a.opacity;
            }
            return a;
        });
        return [
            s,
            n
        ];
    }
    function Wl(t, e) {
        for(const i in e)h(t, i, "");
    }
    function Kn(t) {
        const { height: e , width: i  } = A(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...ei(t),
            ...h(t, [
                "marginTop",
                "marginLeft"
            ])
        };
    }
    function Zn() {
        return new Promise((t)=>requestAnimationFrame(t));
    }
    var Qn = {
        props: {
            duration: Number,
            animation: Boolean
        },
        data: {
            duration: 150,
            animation: "slide"
        },
        methods: {
            animate (t, e = this.$el) {
                const i = this.animation;
                return (i === "fade" ? Yn : i === "delayed-fade" ? (...n)=>Yn(...n, 40) : i ? Hl : ()=>(t(), Promise.resolve()))(t, e, this.duration).catch(S);
            }
        }
    }, Rl = {
        mixins: [
            Qn
        ],
        args: "target",
        props: {
            target: Boolean,
            selActive: Boolean
        },
        data: {
            target: null,
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            duration: 250
        },
        computed: {
            toggles: {
                get ({ attrItem: t  }, e) {
                    return O(`[${t}],[data-${t}]`, e);
                },
                watch (t) {
                    this.updateState();
                    const e = O(this.selActive, this.$el);
                    for (const i of t){
                        this.selActive !== !1 && q(i, this.cls, g(e, i));
                        const s = Gl(i);
                        J(s, "a") && f(s, "role", "button");
                    }
                },
                immediate: !0
            },
            children: {
                get ({ target: t  }, e) {
                    return O(`${t} > *`, e);
                },
                watch (t, e) {
                    e && this.updateState();
                },
                immediate: !0
            }
        },
        events: {
            name: "click keydown",
            delegate () {
                return `[${this.attrItem}],[data-${this.attrItem}]`;
            },
            handler (t) {
                t.type === "keydown" && t.keyCode !== T.SPACE || Y(t.target, "a,button") && (t.preventDefault(), this.apply(t.current));
            }
        },
        methods: {
            apply (t) {
                const e = this.getState(), i = eo(t, this.attrItem, this.getState());
                jl(e, i) || this.setState(i);
            },
            getState () {
                return this.toggles.filter((t)=>N(t, this.cls)).reduce((t, e)=>eo(e, this.attrItem, t), {
                    filter: {
                        "": ""
                    },
                    sort: []
                });
            },
            async setState (t, e = !0) {
                t = {
                    filter: {
                        "": ""
                    },
                    sort: [],
                    ...t
                }, m(this.$el, "beforeFilter", [
                    this,
                    t
                ]);
                for (const i of this.toggles)q(i, this.cls, ql(i, this.attrItem, t));
                await Promise.all(O(this.target, this.$el).map((i)=>{
                    const s = ()=>{
                        Ul(t, i, P(i)), this.$update(this.$el);
                    };
                    return e ? this.animate(s, i) : s();
                })), m(this.$el, "afterFilter", [
                    this
                ]);
            },
            updateState () {
                G.write(()=>this.setState(this.getState(), !1));
            }
        }
    };
    function to(t, e) {
        return Be(it(t, e), [
            "filter"
        ]);
    }
    function jl(t, e) {
        return [
            "filter",
            "sort"
        ].every((i)=>$e(t[i], e[i]));
    }
    function Ul(t, e, i) {
        const s = Vl(t);
        i.forEach((r)=>h(r, "display", s && !E(r, s) ? "none" : ""));
        const [n, o] = t.sort;
        if (n) {
            const r = Yl(i, n, o);
            $e(r, i) || j(e, r);
        }
    }
    function eo(t, e, i) {
        const { filter: s , group: n , sort: o , order: r = "asc"  } = to(t, e);
        return (s || V(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (be(i.filter) || "" in i.filter) && (i.filter = {
            "": s || ""
        })) : i.filter = {
            "": s || ""
        }), V(o) || (i.sort = [
            o,
            r
        ]), i;
    }
    function ql(t, e, { filter: i = {
        "": ""
    } , sort: [s, n]  }) {
        const { filter: o = "" , group: r = "" , sort: a , order: l = "asc"  } = to(t, e);
        return V(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l;
    }
    function Vl({ filter: t  }) {
        let e = "";
        return St(t, (i)=>e += i || ""), e;
    }
    function Yl(t, e, i) {
        return [
            ...t
        ].sort((s, n)=>it(s, e).localeCompare(it(n, e), void 0, {
                numeric: !0
            }) * (i === "asc" || -1));
    }
    function Gl(t) {
        return w("a,button", t) || t;
    }
    var ys = {
        slide: {
            show (t) {
                return [
                    {
                        transform: W(t * -100)
                    },
                    {
                        transform: W()
                    }
                ];
            },
            percent (t) {
                return Fe(t);
            },
            translate (t, e) {
                return [
                    {
                        transform: W(e * -100 * t)
                    },
                    {
                        transform: W(e * 100 * (1 - t))
                    }
                ];
            }
        }
    };
    function Fe(t) {
        return Math.abs(h(t, "transform").split(",")[4] / t.offsetWidth) || 0;
    }
    function W(t = 0, e = "%") {
        return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function pe(t) {
        return `scale3d(${t}, ${t}, 1)`;
    }
    var io = {
        ...ys,
        fade: {
            show () {
                return [
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                ];
            },
            percent (t) {
                return 1 - h(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t
                    },
                    {
                        opacity: t
                    }
                ];
            }
        },
        scale: {
            show () {
                return [
                    {
                        opacity: 0,
                        transform: pe(0.8)
                    },
                    {
                        opacity: 1,
                        transform: pe(1)
                    }
                ];
            },
            percent (t) {
                return 1 - h(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        transform: pe(1 - .2 * t)
                    },
                    {
                        opacity: t,
                        transform: pe(0.8 + .2 * t)
                    }
                ];
            }
        }
    };
    function Xl(t, e, i, { animation: s , easing: n  }) {
        const { percent: o , translate: r , show: a = S  } = s, l = a(i), c = new Xe;
        return {
            dir: i,
            show (u, d = 0, p) {
                const v = p ? "linear" : n;
                return u -= Math.round(u * et(d, -1, 1)), this.translate(d), yi(e, "itemin", {
                    percent: d,
                    duration: u,
                    timing: v,
                    dir: i
                }), yi(t, "itemout", {
                    percent: 1 - d,
                    duration: u,
                    timing: v,
                    dir: i
                }), Promise.all([
                    I.start(e, l[1], u, v),
                    I.start(t, l[0], u, v)
                ]).then(()=>{
                    this.reset(), c.resolve();
                }, S), c.promise;
            },
            cancel () {
                I.cancel([
                    e,
                    t
                ]);
            },
            reset () {
                for(const u in l[0])h([
                    e,
                    t
                ], u, "");
            },
            forward (u, d = this.percent()) {
                return I.cancel([
                    e,
                    t
                ]), this.show(u, d, !0);
            },
            translate (u) {
                this.reset();
                const d = r(u, i);
                h(e, d[1]), h(t, d[0]), yi(e, "itemtranslatein", {
                    percent: u,
                    dir: i
                }), yi(t, "itemtranslateout", {
                    percent: 1 - u,
                    dir: i
                });
            },
            percent () {
                return o(t || e, e, i);
            },
            getDistance () {
                return t == null ? void 0 : t.offsetWidth;
            }
        };
    }
    function yi(t, e, i) {
        m(t, Ft(e, !1, !1, i));
    }
    var Jl = {
        i18n: {
            next: "Next slide",
            previous: "Previous slide",
            slideX: "Slide %s",
            slideLabel: "%s of %s"
        },
        data: {
            selNav: !1
        },
        computed: {
            nav: {
                get ({ selNav: t  }, e) {
                    return w(t, e);
                },
                watch (t, e) {
                    f(t, "role", "tablist"), e && this.$emit();
                },
                immediate: !0
            },
            selNavItem ({ attrItem: t  }) {
                return `[${t}],[data-${t}]`;
            },
            navItems: {
                get (t, e) {
                    return O(this.selNavItem, e);
                },
                watch () {
                    this.$emit();
                }
            }
        },
        connected () {
            f(this.$el, "aria-roledescription", "carousel");
        },
        update: [
            {
                write () {
                    this.slides.forEach((t, e)=>f(t, {
                            role: this.nav ? "tabpanel" : "group",
                            "aria-label": this.t("slideLabel", e + 1, this.length),
                            "aria-roledescription": this.nav ? null : "slide"
                        })), this.nav && this.length !== this.nav.children.length && _t(this.nav, this.slides.map((t, e)=>`<li ${this.attrItem}="${e}"><a href></a></li>`).join("")), f(P(this.nav).concat(this.list), "role", "presentation");
                    for (const t of this.navItems){
                        const e = it(t, this.attrItem), i = w("a,button", t) || t;
                        let s, n = null;
                        if (wt(e)) {
                            const o = kt(e), r = this.slides[o];
                            r && (r.id || (r.id = Mt(this, r, `-item-${e}`)), n = r.id), s = this.t("slideX", $(e) + 1), f(i, "role", "tab");
                        } else this.list && (this.list.id || (this.list.id = Mt(this, this.list, "-items")), n = this.list.id), s = this.t(e);
                        f(i, {
                            "aria-controls": n,
                            "aria-label": f(i, "aria-label") || s
                        });
                    }
                }
            },
            {
                write () {
                    this.navItems.concat(this.nav).forEach((t)=>t && (t.hidden = !this.maxIndex)), this.updateNav();
                },
                events: [
                    "resize"
                ]
            }
        ],
        events: [
            {
                name: "click keydown",
                delegate () {
                    return this.selNavItem;
                },
                handler (t) {
                    Y(t.target, "a,button") && (t.type === "click" || t.keyCode === T.SPACE) && (t.preventDefault(), this.show(it(t.current, this.attrItem)));
                }
            },
            {
                name: "itemshow",
                handler: "updateNav"
            },
            {
                name: "keydown",
                delegate () {
                    return this.selNavItem;
                },
                handler (t) {
                    const { current: e , keyCode: i  } = t, s = it(e, this.attrItem);
                    if (!wt(s)) return;
                    let n = i === T.HOME ? 0 : i === T.END ? "last" : i === T.LEFT ? "previous" : i === T.RIGHT ? "next" : -1;
                    ~n && (t.preventDefault(), this.show(n));
                }
            }
        ],
        methods: {
            updateNav () {
                const t = this.getValidIndex();
                let e, i;
                for (const s of this.navItems){
                    const n = it(s, this.attrItem), o = w("a,button", s) || s;
                    if (wt(n)) {
                        const a = kt(n) === t;
                        q(s, this.clsActive, a), f(o, {
                            "aria-selected": a,
                            tabindex: a ? null : -1
                        }), a && (i = o), e = e || E(o, ":focus");
                    } else q(s, "uk-invisible", this.finite && (n === "previous" && t === 0 || n === "next" && t >= this.maxIndex));
                    e && i && i.focus();
                }
            }
        }
    };
    const ks = {
        passive: !1,
        capture: !0
    }, so = {
        passive: !0,
        capture: !0
    }, Kl = "touchstart mousedown", Ss = "touchmove mousemove", no = "touchend touchcancel mouseup click input scroll";
    var Zl = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created () {
            for (const t of [
                "start",
                "move",
                "end"
            ]){
                const e = this[t];
                this[t] = (i)=>{
                    const s = le(i).x * (K ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
                };
            }
        },
        events: [
            {
                name: Kl,
                passive: !0,
                delegate () {
                    return `${this.selList} > *`;
                },
                handler (t) {
                    !this.draggable || !It(t) && Ql(t.target) || Y(t.target, ye) || t.button > 0 || this.length < 2 || this.start(t);
                }
            },
            {
                name: "dragstart",
                handler (t) {
                    t.preventDefault();
                }
            },
            {
                name: Ss,
                el () {
                    return this.list;
                },
                handler: S,
                ...ks
            }
        ],
        methods: {
            start () {
                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, x(document, Ss, this.move, ks), x(document, no, this.end, so), h(this.list, "userSelect", "none");
            },
            move (t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                h(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                const { slides: i  } = this;
                let { prevIndex: s  } = this, n = Math.abs(e), o = this.getIndex(s + this.dir, s), r = this._getDistance(s, o) || i[s].offsetWidth;
                for(; o !== s && n > r;)this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir, s), r = this._getDistance(s, o) || i[s].offsetWidth;
                this.percent = n / r;
                const a = i[s], l = i[o], c = this.index !== o, u = s === o;
                let d;
                [
                    this.index,
                    this.prevIndex
                ].filter((p)=>!g([
                        o,
                        s
                    ], p)).forEach((p)=>{
                    m(i[p], "itemhidden", [
                        this
                    ]), u && (d = !0, this.prevIndex = s);
                }), (this.index === s && this.prevIndex !== s || d) && m(i[this.index], "itemshown", [
                    this
                ]), c && (this.prevIndex = s, this.index = o, !u && m(a, "beforeitemhide", [
                    this
                ]), m(l, "beforeitemshow", [
                    this
                ])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), c && (!u && m(a, "itemhide", [
                    this
                ]), m(l, "itemshow", [
                    this
                ]));
            },
            end () {
                if (zt(document, Ss, this.move, ks), zt(document, no, this.end, so), this.dragging) {
                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                    else {
                        const t = (K ? this.dir * (K ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0);
                    }
                }
                h(this.list, {
                    userSelect: "",
                    pointerEvents: ""
                }), this.drag = this.percent = null;
            }
        }
    };
    function Ql(t) {
        return h(t, "userSelect") !== "none" && k(t.childNodes).some((e)=>e.nodeType === 3 && e.textContent.trim());
    }
    var th = {
        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },
        data: {
            autoplay: !1,
            autoplayInterval: 7e3,
            pauseOnHover: !0
        },
        connected () {
            f(this.list, "aria-live", "polite"), this.autoplay && this.startAutoplay();
        },
        disconnected () {
            this.stopAutoplay();
        },
        update () {
            f(this.slides, "tabindex", "-1");
        },
        events: [
            {
                name: "visibilitychange",
                el () {
                    return document;
                },
                filter () {
                    return this.autoplay;
                },
                handler () {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay();
                }
            },
            {
                name: `${Tt} focusin`,
                filter () {
                    return this.autoplay;
                },
                handler (t) {
                    (t.type !== Tt || this.pauseOnHover) && this.stopAutoplay();
                }
            },
            {
                name: `${Bt} focusout`,
                filter () {
                    return this.autoplay;
                },
                handler (t) {
                    (t.type !== Bt || this.pauseOnHover) && this.startAutoplay();
                }
            }
        ],
        methods: {
            startAutoplay () {
                this.draggable && E(this.$el, ":focus-within") || this.pauseOnHover && E(this.$el, ":hover") || (this.stopAutoplay(), this.interval = setInterval(()=>!this.stack.length && this.show("next"), this.autoplayInterval), f(this.list, "aria-live", "off"));
            },
            stopAutoplay () {
                clearInterval(this.interval), f(this.list, "aria-live", "polite");
            }
        }
    }, oo = {
        mixins: [
            th,
            Zl,
            Jl,
            ps
        ],
        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },
        data: ()=>({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }),
        connected () {
            this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
        },
        disconnected () {
            F(this.slides, this.clsActive);
        },
        computed: {
            duration ({ velocity: t  }, e) {
                return ro(e.offsetWidth / t);
            },
            list ({ selList: t  }, e) {
                return w(t, e);
            },
            maxIndex () {
                return this.length - 1;
            },
            slides: {
                get () {
                    return P(this.list);
                },
                watch () {
                    this.$emit();
                }
            },
            length () {
                return this.slides.length;
            }
        },
        observe: ft(),
        methods: {
            show (t, e = !1) {
                var i;
                if (this.dragging || !this.length) return;
                const { stack: s  } = this, n = e ? 0 : s.length, o = ()=>{
                    s.splice(n, 1), s.length && this.show(s.shift(), !0);
                };
                if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
                    s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                    return;
                }
                const r = this.getIndex(this.index), a = N(this.slides, this.clsActive) && this.slides[r], l = this.getIndex(t, this.index), c = this.slides[l];
                if (a === c) {
                    o();
                    return;
                }
                if (this.dir = eh(t, r), this.prevIndex = r, this.index = l, a && !m(a, "beforeitemhide", [
                    this
                ]) || !m(c, "beforeitemshow", [
                    this,
                    a
                ])) {
                    this.index = this.prevIndex, o();
                    return;
                }
                const u = this._show(a, c, e).then(()=>{
                    a && m(a, "itemhidden", [
                        this
                    ]), m(c, "itemshown", [
                        this
                    ]), s.shift(), this._transitioner = null, requestAnimationFrame(()=>s.length && this.show(s.shift(), !0));
                });
                return a && m(a, "itemhide", [
                    this
                ]), m(c, "itemshow", [
                    this
                ]), u;
            },
            getIndex (t = this.index, e = this.index) {
                return et(dt(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
            },
            getValidIndex (t = this.index, e = this.prevIndex) {
                return this.getIndex(t, e);
            },
            _show (t, e, i) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                    easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                    ...this.transitionOptions
                }), !i && !t) return this._translate(1), Promise.resolve();
                const { length: s  } = this.stack;
                return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
            },
            _getDistance (t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance();
            },
            _translate (t, e = this.prevIndex, i = this.index) {
                const s = this._getTransitioner(e === i ? !1 : e, i);
                return s.translate(t), s;
            },
            _getTransitioner (t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
                return new this.Transitioner(ie(t) ? this.slides[t] : t, ie(e) ? this.slides[e] : e, i * (K ? -1 : 1), s);
            }
        }
    };
    function eh(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function ro(t) {
        return .5 * t + 300;
    }
    var ao = {
        mixins: [
            oo
        ],
        props: {
            animation: String
        },
        data: {
            animation: "slide",
            clsActivated: "uk-transition-active",
            Animations: ys,
            Transitioner: Xl
        },
        computed: {
            animation ({ animation: t , Animations: e  }) {
                return {
                    ...e[t] || e.slide,
                    name: t
                };
            },
            transitionOptions () {
                return {
                    animation: this.animation
                };
            }
        },
        events: {
            beforeitemshow ({ target: t  }) {
                y(t, this.clsActive);
            },
            itemshown ({ target: t  }) {
                y(t, this.clsActivated);
            },
            itemhidden ({ target: t  }) {
                F(t, this.clsActive, this.clsActivated);
            }
        }
    }, lo = {
        mixins: [
            vs,
            ao
        ],
        functional: !0,
        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },
        data: ()=>({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "uk-open",
                clsPage: "uk-lightbox-page",
                selList: ".uk-lightbox-items",
                attrItem: "uk-lightbox-item",
                selClose: ".uk-close-large",
                selCaption: ".uk-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: io,
                template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
            }),
        created () {
            const t = w(this.template), e = w(this.selList, t);
            this.items.forEach(()=>j(e, "<li>"));
            const i = w("[uk-close]", t), s = this.t("close");
            i && s && (i.dataset.i18n = JSON.stringify({
                label: s
            })), this.$mount(j(this.container, t));
        },
        computed: {
            caption ({ selCaption: t  }, e) {
                return w(t, e);
            }
        },
        events: [
            {
                name: `${si} ${mt} keydown`,
                handler: "showControls"
            },
            {
                name: "click",
                self: !0,
                delegate () {
                    return `${this.selList} > *`;
                },
                handler (t) {
                    t.defaultPrevented || this.hide();
                }
            },
            {
                name: "shown",
                self: !0,
                handler () {
                    this.showControls();
                }
            },
            {
                name: "hide",
                self: !0,
                handler () {
                    this.hideControls(), F(this.slides, this.clsActive), I.stop(this.slides);
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    this.$destroy(!0);
                }
            },
            {
                name: "keyup",
                el () {
                    return document;
                },
                handler ({ keyCode: t  }) {
                    if (!this.isToggled(this.$el) || !this.draggable) return;
                    let e = -1;
                    t === T.LEFT ? e = "previous" : t === T.RIGHT ? e = "next" : t === T.HOME ? e = 0 : t === T.END && (e = "last"), ~e && this.show(e);
                }
            },
            {
                name: "beforeitemshow",
                handler (t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = io.scale, F(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
                }
            },
            {
                name: "itemshow",
                handler () {
                    _t(this.caption, this.getItem().caption || "");
                    for(let t = -this.preload; t <= this.preload; t++)this.loadItem(this.index + t);
                }
            },
            {
                name: "itemshown",
                handler () {
                    this.draggable = this.$props.draggable;
                }
            },
            {
                name: "itemload",
                async handler (t, e) {
                    const { source: i , type: s , alt: n = "" , poster: o , attrs: r = {}  } = e;
                    if (this.setItem(e, "<span uk-spinner></span>"), !i) return;
                    let a;
                    const l = {
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "uk-responsive": "",
                        "uk-video": `${this.videoAutoplay}`
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                        const c = He("img", {
                            src: i,
                            alt: n,
                            ...r
                        });
                        x(c, "load", ()=>this.setItem(e, c)), x(c, "error", ()=>this.setError(e));
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const c = He("video", {
                            src: i,
                            poster: o,
                            controls: "",
                            playsinline: "",
                            "uk-video": `${this.videoAutoplay}`,
                            ...r
                        });
                        x(c, "loadedmetadata", ()=>this.setItem(e, c)), x(c, "error", ()=>this.setError(e));
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, He("iframe", {
                        src: i,
                        allowfullscreen: "",
                        class: "uk-lightbox-iframe",
                        ...r
                    }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, He("iframe", {
                        src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...r
                    }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                        const { height: c , width: u  } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, He("iframe", {
                            src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                            width: u,
                            height: c,
                            ...l,
                            ...r
                        }));
                    } catch  {
                        this.setError(e);
                    }
                }
            }
        ],
        methods: {
            loadItem (t = this.index) {
                const e = this.getItem(t);
                this.getSlide(e).childElementCount || m(this.$el, "itemload", [
                    e
                ]);
            },
            getItem (t = this.index) {
                return this.items[dt(t, this.slides)];
            },
            setItem (t, e) {
                m(this.$el, "itemloaded", [
                    this,
                    _t(this.getSlide(t), e)
                ]);
            },
            getSlide (t) {
                return this.slides[this.items.indexOf(t)];
            },
            setError (t) {
                this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },
            showControls () {
                clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), y(this.$el, "uk-active", "uk-transition-active");
            },
            hideControls () {
                F(this.$el, "uk-active", "uk-transition-active");
            }
        }
    };
    function He(t, e) {
        const i = Ht(`<${t}>`);
        return f(i, e), i;
    }
    var ih = {
        install: sh,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get ({ toggle: t  }, e) {
                    return O(t, e);
                },
                watch (t) {
                    this.hide();
                    for (const e of t)J(e, "a") && f(e, "role", "button");
                },
                immediate: !0
            }
        },
        disconnected () {
            this.hide();
        },
        events: {
            name: "click",
            delegate () {
                return `${this.toggle}:not(.uk-disabled)`;
            },
            handler (t) {
                t.preventDefault(), this.show(t.current);
            }
        },
        methods: {
            show (t) {
                const e = As(this.toggles.map(ho), "source");
                if (ee(t)) {
                    const { source: i  } = ho(t);
                    t = $t(e, ({ source: s  })=>i === s);
                }
                return this.panel = this.panel || this.$create("lightboxPanel", {
                    ...this.$props,
                    items: e
                }), x(this.panel.$el, "hidden", ()=>this.panel = null), this.panel.show(t);
            },
            hide () {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide();
            }
        }
    };
    function sh(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", lo), xt(e.props, t.component("lightboxPanel").options.props);
    }
    function ho(t) {
        const e = {};
        for (const i of [
            "href",
            "caption",
            "type",
            "poster",
            "alt",
            "attrs"
        ])e[i === "href" ? "source" : i] = it(t, i);
        return e.attrs = Be(e.attrs), e;
    }
    var nh = {
        mixins: [
            Ne
        ],
        functional: !0,
        args: [
            "message",
            "status"
        ],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
        },
        install: oh,
        computed: {
            marginProp ({ pos: t  }) {
                return `margin${rt(t, "top") ? "Top" : "Bottom"}`;
            },
            startProps () {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                };
            }
        },
        created () {
            const t = w(`.${this.clsContainer}-${this.pos}`, this.container) || j(this.container, `<div class="${this.clsContainer} ${this.clsContainer}-${this.pos}" style="display: block"></div>`);
            this.$mount(j(t, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
        },
        async connected () {
            const t = $(h(this.$el, this.marginProp));
            await I.start(h(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        },
        events: {
            click (t) {
                Y(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
            },
            [Tt] () {
                this.timer && clearTimeout(this.timer);
            },
            [Bt] () {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout));
            }
        },
        methods: {
            async close (t) {
                const e = (i)=>{
                    const s = _(i);
                    m(i, "close", [
                        this
                    ]), lt(i), s != null && s.hasChildNodes() || lt(s);
                };
                this.timer && clearTimeout(this.timer), t || await I.start(this.$el, this.startProps), e(this.$el);
            }
        }
    };
    function oh(t) {
        t.notification.closeAll = function(e, i) {
            Ct(document.body, (s)=>{
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i);
            });
        };
    }
    const ki = {
        x: Si,
        y: Si,
        rotate: Si,
        scale: Si,
        color: Is,
        backgroundColor: Is,
        borderColor: Is,
        blur: Jt,
        hue: Jt,
        fopacity: Jt,
        grayscale: Jt,
        invert: Jt,
        saturate: Jt,
        sepia: Jt,
        opacity: ah,
        stroke: lh,
        bgx: fo,
        bgy: fo
    }, { keys: co  } = Object;
    var uo = {
        mixins: [
            $i
        ],
        props: vo(co(ki), "list"),
        data: vo(co(ki), void 0),
        computed: {
            props (t, e) {
                const i = {};
                for(const n in t)n in ki && !V(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for(const n in i)s[n] = ki[n](n, e, i[n], i);
                return s;
            }
        },
        events: {
            load () {
                this.$emit();
            }
        },
        methods: {
            reset () {
                for(const t in this.getCss(0))h(this.$el, t, "");
            },
            getCss (t) {
                const e = {
                    transform: "",
                    filter: ""
                };
                for(const i in this.props)this.props[i](e, t);
                return e.willChange = Object.keys(e).filter((i)=>e[i] !== "").join(","), e;
            }
        }
    };
    function Si(t, e, i) {
        let s = Ci(i) || ({
            x: "px",
            y: "px",
            rotate: "deg"
        })[t] || "", n;
        return t === "x" || t === "y" ? (t = `translate${Pt(t)}`, n = (o)=>$($(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = (o)=>Ci([
                o
            ]) ? ht(o, "width", e, !0) / e.offsetWidth : o), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = ge(i, n), (o, r)=>{
            o.transform += ` ${t}(${Le(i, r)}${s})`;
        };
    }
    function Is(t, e, i) {
        return i.length === 1 && i.unshift(We(e, t, "")), i = ge(i, (s)=>rh(e, s)), (s, n)=>{
            const [o, r, a] = mo(i, n), l = o.map((c, u)=>(c += a * (r[u] - c), u === 3 ? $(c) : parseInt(c, 10))).join(",");
            s[t] = `rgba(${l})`;
        };
    }
    function rh(t, e) {
        return We(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map($);
    }
    function Jt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ci(i) || ({
            blur: "px",
            hue: "deg"
        })[t] || "%";
        return t = ({
            fopacity: "opacity",
            hue: "hue-rotate"
        })[t] || t, i = ge(i), (n, o)=>{
            const r = Le(i, o);
            n.filter += ` ${t}(${r + s})`;
        };
    }
    function ah(t, e, i) {
        return i.length === 1 && i.unshift(We(e, t, "")), i = ge(i), (s, n)=>{
            s[t] = Le(i, n);
        };
    }
    function lh(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ci(i), n = Mn(e);
        return i = ge(i.reverse(), (o)=>(o = $(o), s === "%" ? o * n / 100 : o)), i.some(([o])=>o) ? (h(e, "strokeDasharray", n), (o, r)=>{
            o.strokeDashoffset = Le(i, r);
        }) : S;
    }
    function fo(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = ge(i, (a)=>ht(a, n, e));
        const o = [
            "bgx",
            "bgy"
        ].filter((a)=>a in s);
        if (o.length === 2 && t === "bgx") return S;
        if (We(e, "backgroundSize", "") === "cover") return hh(t, e, i, s);
        const r = {};
        for (const a of o)r[a] = po(e, a);
        return go(o, r, s);
    }
    function hh(t, e, i, s) {
        const n = ch(e);
        if (!n.width) return S;
        const o = {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, r = [
            "bgx",
            "bgy"
        ].filter((u)=>u in s), a = {};
        for (const u of r){
            const d = s[u].map(([z])=>z), p = Math.min(...d), v = Math.max(...d), C = d.indexOf(p) < d.indexOf(v), H = v - p;
            a[u] = `${(C ? -H : 0) - (C ? p : v)}px`, o[u === "bgy" ? "height" : "width"] += H;
        }
        const l = Ge.cover(n, o);
        for (const u of r){
            const d = u === "bgy" ? "height" : "width", p = l[d] - o[d];
            a[u] = `max(${po(e, u)},-${p}px) + ${a[u]}`;
        }
        const c = go(r, a, s);
        return (u, d)=>{
            c(u, d), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat";
        };
    }
    function po(t, e) {
        return We(t, `background-position-${e.substr(-1)}`, "");
    }
    function go(t, e, i) {
        return function(s, n) {
            for (const o of t){
                const r = Le(i[o], n);
                s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`;
            }
        };
    }
    const Ii = {};
    function ch(t) {
        const e = h(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (Ii[e]) return Ii[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth) ? (i.onload = ()=>{
            Ii[e] = Cs(i), m(t, Ft("load", !1));
        }, Cs(i)) : Ii[e] = Cs(i);
    }
    function Cs(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        };
    }
    function ge(t, e = $) {
        const i = [], { length: s  } = t;
        let n = 0;
        for(let o = 0; o < s; o++){
            let [r, a] = M(t[o]) ? t[o].trim().split(" ") : [
                t[o]
            ];
            if (r = e(r), a = a ? $(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([
                r,
                0
            ]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([
                r,
                a
            ]), a = 1)), i.push([
                r,
                a
            ]), a === null) n++;
            else if (n) {
                const l = i[o - n - 1][1], c = (a - l) / (n + 1);
                for(let u = n; u > 0; u--)i[o - u][1] = l + c * (n - u + 1);
                n = 0;
            }
        }
        return i;
    }
    function mo(t, e) {
        const i = $t(t.slice(1), ([, s])=>e <= s) + 1;
        return [
            t[i - 1][0],
            t[i][0],
            (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])
        ];
    }
    function Le(t, e) {
        const [i, s, n] = mo(t, e);
        return ie(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s;
    }
    const uh = /^-?\d+(\S+)?/;
    function Ci(t, e) {
        var i;
        for (const s of t){
            const n = (i = s.match) == null ? void 0 : i.call(s, uh);
            if (n) return n[1];
        }
        return e;
    }
    function We(t, e, i) {
        const s = t.style[e], n = h(h(t, e, i), e);
        return t.style[e] = s, n;
    }
    function vo(t, e) {
        return t.reduce((i, s)=>(i[s] = e, i), {});
    }
    var dh = {
        mixins: [
            uo
        ],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target ({ target: t  }, e) {
                return wo(t && at(t, e) || e);
            },
            start ({ start: t  }) {
                return ht(t, "height", this.target, !0);
            },
            end ({ end: t , viewport: e  }) {
                return ht(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0);
            }
        },
        observe: [
            ft({
                target: ({ $el: t , target: e  })=>[
                        t,
                        e
                    ]
            }),
            di()
        ],
        update: {
            read ({ percent: t  }, e) {
                if (e.has("scroll") || (t = !1), !U(this.$el)) return !1;
                if (!this.matchMedia) return;
                const i = t;
                return t = fh(ns(this.target, this.start, this.end), this.easing), {
                    percent: t,
                    style: i === t ? !1 : this.getCss(t)
                };
            },
            write ({ style: t  }) {
                if (!this.matchMedia) {
                    this.reset();
                    return;
                }
                t && h(this.$el, t);
            },
            events: [
                "scroll",
                "resize"
            ]
        }
    };
    function fh(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    function wo(t) {
        return t ? "offsetTop" in t ? t : wo(_(t)) : document.documentElement;
    }
    var bo = {
        update: {
            write () {
                if (this.stack.length || this.dragging) return;
                const t = this.getValidIndex(this.index);
                !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index);
            },
            events: [
                "resize"
            ]
        }
    }, $o = {
        observe: De({
            target: ({ slides: t  })=>t,
            targets: (t)=>t.getAdjacentSlides()
        })
    };
    function ph(t, e, i, { center: s , easing: n , list: o  }) {
        const r = new Xe, a = t ? Re(t, o, s) : Re(e, o, s) + b(e).width * i, l = e ? Re(e, o, s) : a + b(t).width * i * (K ? -1 : 1);
        return {
            dir: i,
            show (c, u = 0, d) {
                const p = d ? "linear" : n;
                return c -= Math.round(c * et(u, -1, 1)), this.translate(u), u = t ? u : et(u, 0, 1), Ts(this.getItemIn(), "itemin", {
                    percent: u,
                    duration: c,
                    timing: p,
                    dir: i
                }), t && Ts(this.getItemIn(!0), "itemout", {
                    percent: 1 - u,
                    duration: c,
                    timing: p,
                    dir: i
                }), I.start(o, {
                    transform: W(-l * (K ? -1 : 1), "px")
                }, c, p).then(r.resolve, S), r.promise;
            },
            cancel () {
                I.cancel(o);
            },
            reset () {
                h(o, "transform", "");
            },
            forward (c, u = this.percent()) {
                return I.cancel(o), this.show(c, u, !0);
            },
            translate (c) {
                const u = this.getDistance() * i * (K ? -1 : 1);
                h(o, "transform", W(et(-l + (u - u * c), -Ti(o), b(o).width) * (K ? -1 : 1), "px"));
                const d = this.getActives(), p = this.getItemIn(), v = this.getItemIn(!0);
                c = t ? et(c, -1, 1) : 0;
                for (const C of P(o)){
                    const H = g(d, C), z = C === p, Dt = C === v, Es = z || !Dt && (H || i * (K ? -1 : 1) === -1 ^ Ei(C, o) > Ei(t || e));
                    Ts(C, `itemtranslate${Es ? "in" : "out"}`, {
                        dir: i,
                        percent: Dt ? 1 - c : z ? c : H ? 1 : 0
                    });
                }
            },
            percent () {
                return Math.abs((h(o, "transform").split(",")[4] * (K ? -1 : 1) + a) / (l - a));
            },
            getDistance () {
                return Math.abs(l - a);
            },
            getItemIn (c = !1) {
                let u = this.getActives(), d = yo(o, Re(e || t, o, s));
                if (c) {
                    const p = u;
                    u = d, d = p;
                }
                return d[$t(d, (p)=>!g(u, p))];
            },
            getActives () {
                return yo(o, Re(t || e, o, s));
            }
        };
    }
    function Re(t, e, i) {
        const s = Ei(t, e);
        return i ? s - gh(t, e) : Math.min(s, xo(e));
    }
    function xo(t) {
        return Math.max(0, Ti(t) - b(t).width);
    }
    function Ti(t) {
        return Nt(P(t), (e)=>b(e).width);
    }
    function gh(t, e) {
        return b(e).width / 2 - b(t).width / 2;
    }
    function Ei(t, e) {
        return t && (ei(t).left + (K ? b(t).width - b(e).width : 0)) * (K ? -1 : 1) || 0;
    }
    function yo(t, e) {
        e -= 1;
        const i = b(t).width, s = e + i + 2;
        return P(t).filter((n)=>{
            const o = Ei(n, t), r = o + Math.min(b(n).width, i);
            return o >= e && r <= s;
        });
    }
    function Ts(t, e, i) {
        m(t, Ft(e, !1, !1, i));
    }
    var mh = {
        mixins: [
            nt,
            oo,
            bo,
            $o
        ],
        props: {
            center: Boolean,
            sets: Boolean
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner: ph
        },
        computed: {
            avgWidth () {
                return Ti(this.list) / this.length;
            },
            finite ({ finite: t  }) {
                return t || vh(this.list, this.center);
            },
            maxIndex () {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return ne(this.sets);
                let t = 0;
                const e = xo(this.list), i = $t(this.slides, (s)=>{
                    if (t >= e) return !0;
                    t += b(s).width;
                });
                return ~i ? i : this.length - 1;
            },
            sets ({ sets: t  }) {
                if (!t) return;
                let e = 0;
                const i = [], s = b(this.list).width;
                for(let n = 0; n < this.length; n++){
                    const o = b(this.slides[n]).width;
                    e + o > s && (e = 0), this.center ? e < s / 2 && e + o + b(this.slides[+n + 1]).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o;
                }
                if (i.length) return i;
            },
            transitionOptions () {
                return {
                    center: this.center,
                    list: this.list
                };
            },
            slides () {
                return P(this.list).filter(U);
            }
        },
        connected () {
            q(this.$el, this.clsContainer, !w(`.${this.clsContainer}`, this.$el));
        },
        observe: ft({
            target: ({ slides: t  })=>t
        }),
        update: {
            write () {
                for (const t of this.navItems){
                    const e = kt(it(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !g(this.sets, e));
                }
                this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses();
            },
            events: [
                "resize"
            ]
        },
        events: {
            beforeitemshow (t) {
                !this.dragging && this.sets && this.stack.length < 2 && !g(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for(let s = 0; s < e; s++)this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return;
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = ro(this.avgWidth / this.velocity) * (b(this.slides[i]).width / this.avgWidth), this.reorder();
            },
            itemshow () {
                ~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive);
            },
            itemshown () {
                this.updateActiveClasses();
            }
        },
        methods: {
            reorder () {
                if (this.finite) {
                    h(this.slides, "order", "");
                    return;
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, o)=>h(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center) return;
                const e = this.slides[t];
                let i = b(this.list).width / 2 - b(e).width / 2, s = 0;
                for(; i > 0;){
                    const n = this.getIndex(--s + t, t), o = this.slides[n];
                    h(o, "order", n > t ? -2 : -1), i -= b(o).width;
                }
            },
            updateActiveClasses () {
                const t = this._getTransitioner(this.index).getActives(), e = [
                    this.clsActive,
                    (!this.sets || g(this.sets, $(this.index))) && this.clsActivated || ""
                ];
                for (const i of this.slides){
                    const s = g(t, i);
                    q(i, e, s), f(i, "aria-hidden", !s), f(O(ke, i), "tabindex", s ? null : -1);
                }
            },
            getValidIndex (t = this.index, e = this.prevIndex) {
                if (t = this.getIndex(t, e), !this.sets) return t;
                let i;
                do {
                    if (g(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e);
                }while (t !== i);
                return t;
            },
            getAdjacentSlides () {
                const { width: t  } = b(this.list), e = -t, i = t * 2, s = b(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = new Set;
                for (const r of [
                    -1,
                    1
                ]){
                    let a = n + (r > 0 ? s : 0), l = 0;
                    do {
                        const c = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += b(c).width * r, o.add(c);
                    }while (this.length > l && a > e && a < i);
                }
                return Array.from(o);
            }
        }
    };
    function vh(t, e) {
        if (!t || t.length < 2) return !0;
        const { width: i  } = b(t);
        if (!e) return Math.ceil(Ti(t)) < Math.trunc(i + wh(t));
        const s = P(t), n = Math.trunc(i / 2);
        for(const o in s){
            const r = s[o], a = b(r).width, l = new Set([
                r
            ]);
            let c = 0;
            for (const u of [
                -1,
                1
            ]){
                let d = a / 2, p = 0;
                for(; d < n;){
                    const v = s[dt(+o + u + p++ * u, s)];
                    if (l.has(v)) return !0;
                    d += b(v).width, l.add(v);
                }
                c = Math.max(c, a / 2 + b(s[dt(+o + u, s)]).width / 2 - (d - n));
            }
            if (c > Nt(s.filter((u)=>!l.has(u)), (u)=>b(u).width)) return !0;
        }
        return !1;
    }
    function wh(t) {
        return Math.max(0, ...P(t).map((e)=>b(e).width));
    }
    var ko = {
        mixins: [
            uo
        ],
        data: {
            selItem: "!li"
        },
        beforeConnect () {
            this.item = at(this.selItem, this.$el);
        },
        disconnected () {
            this.item = null;
        },
        events: [
            {
                name: "itemin itemout",
                self: !0,
                el () {
                    return this.item;
                },
                handler ({ type: t , detail: { percent: e , duration: i , timing: s , dir: n  }  }) {
                    G.read(()=>{
                        if (!this.matchMedia) return;
                        const o = this.getCss(Io(t, n, e)), r = this.getCss(So(t) ? .5 : n > 0 ? 1 : 0);
                        G.write(()=>{
                            h(this.$el, o), I.start(this.$el, r, i, s).catch(S);
                        });
                    });
                }
            },
            {
                name: "transitioncanceled transitionend",
                self: !0,
                el () {
                    return this.item;
                },
                handler () {
                    I.cancel(this.$el);
                }
            },
            {
                name: "itemtranslatein itemtranslateout",
                self: !0,
                el () {
                    return this.item;
                },
                handler ({ type: t , detail: { percent: e , dir: i  }  }) {
                    G.read(()=>{
                        if (!this.matchMedia) {
                            this.reset();
                            return;
                        }
                        const s = this.getCss(Io(t, i, e));
                        G.write(()=>h(this.$el, s));
                    });
                }
            }
        ]
    };
    function So(t) {
        return Qt(t, "in");
    }
    function Io(t, e, i) {
        return i /= 2, So(t) ^ e < 0 ? i : 1 - i;
    }
    var bh = {
        ...ys,
        fade: {
            show () {
                return [
                    {
                        opacity: 0,
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            },
            percent (t) {
                return 1 - h(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            }
        },
        scale: {
            show () {
                return [
                    {
                        opacity: 0,
                        transform: pe(1.5),
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            },
            percent (t) {
                return 1 - h(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        transform: pe(1 + .5 * t),
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            }
        },
        pull: {
            show (t) {
                return t < 0 ? [
                    {
                        transform: W(30),
                        zIndex: -1
                    },
                    {
                        transform: W(),
                        zIndex: 0
                    }
                ] : [
                    {
                        transform: W(-100),
                        zIndex: 0
                    },
                    {
                        transform: W(),
                        zIndex: -1
                    }
                ];
            },
            percent (t, e, i) {
                return i < 0 ? 1 - Fe(e) : Fe(t);
            },
            translate (t, e) {
                return e < 0 ? [
                    {
                        transform: W(30 * t),
                        zIndex: -1
                    },
                    {
                        transform: W(-100 * (1 - t)),
                        zIndex: 0
                    }
                ] : [
                    {
                        transform: W(-t * 100),
                        zIndex: 0
                    },
                    {
                        transform: W(30 * (1 - t)),
                        zIndex: -1
                    }
                ];
            }
        },
        push: {
            show (t) {
                return t < 0 ? [
                    {
                        transform: W(100),
                        zIndex: 0
                    },
                    {
                        transform: W(),
                        zIndex: -1
                    }
                ] : [
                    {
                        transform: W(-30),
                        zIndex: -1
                    },
                    {
                        transform: W(),
                        zIndex: 0
                    }
                ];
            },
            percent (t, e, i) {
                return i > 0 ? 1 - Fe(e) : Fe(t);
            },
            translate (t, e) {
                return e < 0 ? [
                    {
                        transform: W(t * 100),
                        zIndex: 0
                    },
                    {
                        transform: W(-30 * (1 - t)),
                        zIndex: -1
                    }
                ] : [
                    {
                        transform: W(-30 * t),
                        zIndex: -1
                    },
                    {
                        transform: W(100 * (1 - t)),
                        zIndex: 0
                    }
                ];
            }
        }
    }, $h = {
        mixins: [
            nt,
            ao,
            bo,
            $o
        ],
        props: {
            ratio: String,
            minHeight: Number,
            maxHeight: Number
        },
        data: {
            ratio: "16:9",
            minHeight: !1,
            maxHeight: !1,
            selList: ".uk-slideshow-items",
            attrItem: "uk-slideshow-item",
            selNav: ".uk-slideshow-nav",
            Animations: bh
        },
        update: {
            read () {
                if (!this.list) return !1;
                let [t, e] = this.ratio.split(":").map(Number);
                return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                    height: e - he(this.list, "height", "content-box")
                };
            },
            write ({ height: t  }) {
                t > 0 && h(this.list, "minHeight", t);
            },
            events: [
                "resize"
            ]
        },
        methods: {
            getAdjacentSlides () {
                return [
                    1,
                    -1
                ].map((t)=>this.slides[this.getIndex(this.index + t)]);
            }
        }
    }, xh = {
        mixins: [
            nt,
            Qn
        ],
        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },
        data: {
            group: !1,
            threshold: 5,
            clsItem: "uk-sortable-item",
            clsPlaceholder: "uk-sortable-placeholder",
            clsDrag: "uk-sortable-drag",
            clsDragState: "uk-drag",
            clsBase: "uk-sortable",
            clsNoDrag: "uk-sortable-nodrag",
            clsEmpty: "uk-sortable-empty",
            clsCustom: "",
            handle: !1,
            pos: {}
        },
        created () {
            for (const t of [
                "init",
                "start",
                "move",
                "end"
            ]){
                const e = this[t];
                this[t] = (i)=>{
                    xt(this.pos, le(i)), e(i);
                };
            }
        },
        events: {
            name: mt,
            passive: !1,
            handler: "init"
        },
        computed: {
            target () {
                return (this.$el.tBodies || [
                    this.$el
                ])[0];
            },
            items () {
                return P(this.target);
            },
            isEmpty: {
                get () {
                    return be(this.items);
                },
                watch (t) {
                    q(this.target, this.clsEmpty, t);
                },
                immediate: !0
            },
            handles: {
                get ({ handle: t  }, e) {
                    return t ? O(t, e) : this.items;
                },
                watch (t, e) {
                    h(e, {
                        touchAction: "",
                        userSelect: ""
                    }), h(t, {
                        touchAction: jt ? "none" : "",
                        userSelect: "none"
                    });
                },
                immediate: !0
            }
        },
        update: {
            write (t) {
                if (!this.drag || !_(this.placeholder)) return;
                const { pos: { x: e , y: i  } , origin: { offsetTop: s , offsetLeft: n  } , placeholder: o  } = this;
                h(this.drag, {
                    top: i - s,
                    left: e - n
                });
                const r = this.getSortable(document.elementFromPoint(e, i));
                if (!r) return;
                const { items: a  } = r;
                if (a.some(I.inProgress)) return;
                const l = Ih(a, {
                    x: e,
                    y: i
                });
                if (a.length && (!l || l === o)) return;
                const c = this.getSortable(o), u = Ch(r.target, l, o, e, i, r === c && t.moved !== l);
                u !== !1 && (u && o === u || (r !== c ? (c.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)));
            },
            events: [
                "move"
            ]
        },
        methods: {
            init (t) {
                const { target: e , button: i , defaultPrevented: s  } = t, [n] = this.items.filter((o)=>D(e, o));
                !n || s || i > 0 || Li(e) || D(e, `.${this.clsNoDrag}`) || this.handle && !D(e, this.handle) || (t.preventDefault(), this.touched = new Set([
                    this
                ]), this.placeholder = n, this.origin = {
                    target: e,
                    index: re(n),
                    ...this.pos
                }, x(document, si, this.move), x(document, Ot, this.end), this.threshold || this.start(t));
            },
            start (t) {
                this.drag = Sh(this.$container, this.placeholder);
                const { left: e , top: i  } = this.placeholder.getBoundingClientRect();
                xt(this.origin, {
                    offsetLeft: this.pos.x - e,
                    offsetTop: this.pos.y - i
                }), y(this.drag, this.clsDrag, this.clsCustom), y(this.placeholder, this.clsPlaceholder), y(this.items, this.clsItem), y(document.documentElement, this.clsDragState), m(this.$el, "start", [
                    this,
                    this.placeholder
                ]), yh(this.pos), this.move(t);
            },
            move (t) {
                this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
            },
            end () {
                if (zt(document, si, this.move), zt(document, Ot, this.end), !this.drag) return;
                kh();
                const t = this.getSortable(this.placeholder);
                this === t ? this.origin.index !== re(this.placeholder) && m(this.$el, "moved", [
                    this,
                    this.placeholder
                ]) : (m(t.$el, "added", [
                    t,
                    this.placeholder
                ]), m(this.$el, "removed", [
                    this,
                    this.placeholder
                ])), m(this.$el, "stop", [
                    this,
                    this.placeholder
                ]), lt(this.drag), this.drag = null;
                for (const { clsPlaceholder: e , clsItem: i  } of this.touched)for (const s of this.touched)F(s.items, e, i);
                this.touched = null, F(document.documentElement, this.clsDragState);
            },
            insert (t, e) {
                y(this.items, this.clsItem);
                const i = ()=>e ? Ke(e, t) : j(this.target, t);
                this.animate(i);
            },
            remove (t) {
                D(t, this.target) && this.animate(()=>lt(t));
            },
            getSortable (t) {
                do {
                    const e = this.$getComponent(t, "sortable");
                    if (e && (e === this || this.group !== !1 && e.group === this.group)) return e;
                }while (t = _(t));
            }
        }
    };
    let Co;
    function yh(t) {
        let e = Date.now();
        Co = setInterval(()=>{
            let { x: i , y: s  } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(), vt(document.elementFromPoint(i, t.y)).reverse().some((o)=>{
                let { scrollTop: r , scrollHeight: a  } = o;
                const { top: l , bottom: c , height: u  } = ct(o);
                if (l < s && l + 35 > s) r -= n;
                else if (c > s && c - 35 < s) r += n;
                else return;
                if (r > 0 && r < a - u) return o.scrollTop = r, !0;
            });
        }, 15);
    }
    function kh() {
        clearInterval(Co);
    }
    function Sh(t, e) {
        let i;
        if (J(e, "li", "tr")) {
            i = w("<div>"), j(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames())f(i, s, e.getAttribute(s));
        } else i = e.cloneNode(!0);
        return j(t, i), h(i, "margin", "0", "important"), h(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: h(e, "padding")
        }), st(i.firstElementChild, st(e.firstElementChild)), i;
    }
    function Ih(t, e) {
        return t[$t(t, (i)=>Ye(e, i.getBoundingClientRect()))];
    }
    function Ch(t, e, i, s, n, o) {
        if (!P(t).length) return;
        const r = e.getBoundingClientRect();
        if (!o) return Th(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = i.getBoundingClientRect(), l = To([
            r.top,
            r.bottom
        ], [
            a.top,
            a.bottom
        ]), [c, u, d, p] = l ? [
            s,
            "width",
            "left",
            "right"
        ] : [
            n,
            "height",
            "top",
            "bottom"
        ], v = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[d] < r[d] ? v && c < r[d] + v ? !1 : e.nextElementSibling : v && c > r[p] - v ? !1 : e;
    }
    function Th(t, e) {
        const i = P(t).length === 1;
        i && j(t, e);
        const s = P(t), n = s.some((o, r)=>{
            const a = o.getBoundingClientRect();
            return s.slice(r + 1).some((l)=>{
                const c = l.getBoundingClientRect();
                return !To([
                    a.left,
                    a.right
                ], [
                    c.left,
                    c.right
                ]);
            });
        });
        return i && lt(e), n;
    }
    function To(t, e) {
        return t[1] > e[0] && e[1] > t[0];
    }
    var Eh = {
        mixins: [
            Ne,
            Yt,
            In
        ],
        args: "title",
        props: {
            delay: Number,
            title: String
        },
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: [
                "uk-animation-scale-up"
            ],
            duration: 100,
            cls: "uk-active"
        },
        beforeConnect () {
            this.id = Mt(this), this._hasTitle = bt(this.$el, "title"), f(this.$el, {
                title: "",
                "aria-describedby": this.id
            }), Ph(this.$el);
        },
        disconnected () {
            this.hide(), f(this.$el, "title") || f(this.$el, "title", this._hasTitle ? this.title : null);
        },
        methods: {
            show () {
                this.isToggled(this.tooltip || null) || !this.title || (clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
            },
            async hide () {
                E(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1), lt(this.tooltip), this.tooltip = null));
            },
            _show () {
                this.tooltip = j(this.container, `<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`), x(this.tooltip, "toggled", (t, e)=>{
                    if (!e) return;
                    const i = ()=>this.positionAt(this.tooltip, this.$el);
                    i();
                    const [s, n] = Ah(this.tooltip, this.$el, this.pos);
                    this.origin = this.axis === "y" ? `${ii(s)}-${n}` : `${n}-${ii(s)}`;
                    const o = [
                        R(document, `keydown ${mt}`, this.hide, !1, (r)=>r.type === mt && !D(r.target, this.$el) || r.type === "keydown" && r.keyCode === T.ESC),
                        x([
                            document,
                            ...Ut(this.$el)
                        ], "scroll", i, {
                            passive: !0
                        })
                    ];
                    R(this.tooltip, "hide", ()=>o.forEach((r)=>r()), {
                        self: !0
                    });
                }), this.toggleElement(this.tooltip, !0);
            }
        },
        events: {
            focus: "show",
            blur: "hide",
            [`${Tt} ${Bt}`] (t) {
                It(t) || this[t.type === Tt ? "show" : "hide"]();
            },
            [mt] (t) {
                It(t) && this.show();
            }
        }
    };
    function Ph(t) {
        Je(t) || f(t, "tabindex", "0");
    }
    function Ah(t, e, [i, s]) {
        const n = A(t), o = A(e), r = [
            [
                "left",
                "right"
            ],
            [
                "top",
                "bottom"
            ]
        ];
        for (const l of r){
            if (n[l[0]] >= o[l[1]]) {
                i = l[1];
                break;
            }
            if (n[l[1]] <= o[l[0]]) {
                i = l[0];
                break;
            }
        }
        const a = g(r[0], i) ? r[1] : r[0];
        return n[a[0]] === o[a[0]] ? s = a[0] : n[a[1]] === o[a[1]] ? s = a[1] : s = "center", [
            i,
            s
        ];
    }
    var _h = {
        mixins: [
            ps
        ],
        i18n: {
            invalidMime: "Invalid File Type: %s",
            invalidName: "Invalid File Name: %s",
            invalidSize: "Invalid File Size: %s Kilobytes Max"
        },
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: S,
            beforeAll: S,
            beforeSend: S,
            complete: S,
            completeAll: S,
            error: S,
            fail: S,
            load: S,
            loadEnd: S,
            loadStart: S,
            progress: S
        },
        events: {
            change (t) {
                E(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
            },
            drop (t) {
                Pi(t);
                const e = t.dataTransfer;
                e != null && e.files && (F(this.$el, this.clsDragover), this.upload(e.files));
            },
            dragenter (t) {
                Pi(t);
            },
            dragover (t) {
                Pi(t), y(this.$el, this.clsDragover);
            },
            dragleave (t) {
                Pi(t), F(this.$el, this.clsDragover);
            }
        },
        methods: {
            async upload (t) {
                if (t = _i(t), !t.length) return;
                m(this.$el, "upload", [
                    t
                ]);
                for (const s of t){
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.t("invalidSize", this.maxSize));
                        return;
                    }
                    if (this.allow && !Eo(this.allow, s.name)) {
                        this.fail(this.t("invalidName", this.allow));
                        return;
                    }
                    if (this.mime && !Eo(this.mime, s.type)) {
                        this.fail(this.t("invalidMime", this.mime));
                        return;
                    }
                }
                this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                const e = Oh(t, this.concurrent), i = async (s)=>{
                    const n = new FormData;
                    s.forEach((o)=>n.append(this.name, o));
                    for(const o in this.params)n.append(o, this.params[o]);
                    try {
                        const o = await Bh(this.url, {
                            data: n,
                            method: this.method,
                            responseType: this.type,
                            beforeSend: (r)=>{
                                const { xhr: a  } = r;
                                x(a.upload, "progress", this.progress);
                                for (const l of [
                                    "loadStart",
                                    "load",
                                    "loadEnd",
                                    "abort"
                                ])x(a, l.toLowerCase(), this[l]);
                                return this.beforeSend(r);
                            }
                        });
                        this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o);
                    } catch (o) {
                        this.error(o);
                    }
                };
                await i(e.shift());
            }
        }
    };
    function Eo(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`, "i"));
    }
    function Oh(t, e) {
        const i = [];
        for(let s = 0; s < t.length; s += e)i.push(t.slice(s, s + e));
        return i;
    }
    function Pi(t) {
        t.preventDefault(), t.stopPropagation();
    }
    function Bh(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: S,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(()=>i.beforeSend(i)).then(()=>Mh(t, i));
    }
    function Mh(t, e) {
        return new Promise((i, s)=>{
            const { xhr: n  } = e;
            for(const o in e)if (o in n) try {
                n[o] = e[o];
            } catch  {}
            n.open(e.method.toUpperCase(), t);
            for(const o in e.headers)n.setRequestHeader(o, e.headers[o]);
            x(n, "load", ()=>{
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(xt(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }));
            }), x(n, "error", ()=>s(xt(Error("Network Error"), {
                    xhr: n
                }))), x(n, "timeout", ()=>s(xt(Error("Network Timeout"), {
                    xhr: n
                }))), n.send(e.data);
        });
    }
    var Dh = Object.freeze({
        __proto__: null,
        Countdown: Dl,
        Filter: Rl,
        Lightbox: ih,
        LightboxPanel: lo,
        Notification: nh,
        Parallax: dh,
        Slider: mh,
        SliderParallax: ko,
        Slideshow: $h,
        SlideshowParallax: ko,
        Sortable: xh,
        Tooltip: Eh,
        Upload: _h
    });
    return St(Dh, (t, e)=>B.component(e, t)), B;
});

//# sourceMappingURL=index.0bced744.js.map
