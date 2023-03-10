/*! UIkit 3.15.6 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */ (function (
  ue,
  de
) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = de())
    : typeof define == "function" && define.amd
    ? define("uikit", de)
    : ((ue = typeof globalThis < "u" ? globalThis : ue || self),
      (ue.UIkit = de()));
})(this, function () {
  "use strict";
  const { hasOwnProperty: ue, toString: de } = Object.prototype;
  function Ot(t, e) {
    return ue.call(t, e);
  }
  const uo = /\B([A-Z])/g,
    Bt = rt((t) => t.replace(uo, "-$1").toLowerCase()),
    fo = /-(\w)/g,
    Xt = rt((t) => t.replace(fo, ps)),
    kt = rt((t) => (t.length ? ps(null, t.charAt(0)) + t.slice(1) : ""));
  function ps(t, e) {
    return e ? e.toUpperCase() : "";
  }
  function et(t, e) {
    return t == null || t.startsWith == null ? void 0 : t.startsWith(e);
  }
  function Gt(t, e) {
    return t == null || t.endsWith == null ? void 0 : t.endsWith(e);
  }
  function p(t, e) {
    return t == null || t.includes == null ? void 0 : t.includes(e);
  }
  function bt(t, e) {
    return t == null || t.findIndex == null ? void 0 : t.findIndex(e);
  }
  const { isArray: Q, from: yi } = Array,
    { assign: xt } = Object;
  function mt(t) {
    return typeof t == "function";
  }
  function St(t) {
    return t !== null && typeof t == "object";
  }
  function Tt(t) {
    return de.call(t) === "[object Object]";
  }
  function Jt(t) {
    return St(t) && t === t.window;
  }
  function De(t) {
    return ki(t) === 9;
  }
  function $i(t) {
    return ki(t) >= 1;
  }
  function Kt(t) {
    return ki(t) === 1;
  }
  function ki(t) {
    return !Jt(t) && St(t) && t.nodeType;
  }
  function Ne(t) {
    return typeof t == "boolean";
  }
  function B(t) {
    return typeof t == "string";
  }
  function Zt(t) {
    return typeof t == "number";
  }
  function Mt(t) {
    return Zt(t) || (B(t) && !isNaN(t - parseFloat(t)));
  }
  function fe(t) {
    return !(Q(t) ? t.length : St(t) ? Object.keys(t).length : !1);
  }
  function j(t) {
    return t === void 0;
  }
  function Si(t) {
    return Ne(t)
      ? t
      : t === "true" || t === "1" || t === ""
      ? !0
      : t === "false" || t === "0"
      ? !1
      : t;
  }
  function Ct(t) {
    const e = Number(t);
    return isNaN(e) ? !1 : e;
  }
  function m(t) {
    return parseFloat(t) || 0;
  }
  function R(t) {
    return y(t)[0];
  }
  function y(t) {
    return (t && ($i(t) ? [t] : Array.from(t).filter($i))) || [];
  }
  function Dt(t) {
    var e;
    if (Jt(t)) return t;
    t = R(t);
    const i = De(t) ? t : (e = t) == null ? void 0 : e.ownerDocument;
    return (i == null ? void 0 : i.defaultView) || window;
  }
  function pe(t, e) {
    return (
      t === e ||
      (St(t) &&
        St(e) &&
        Object.keys(t).length === Object.keys(e).length &&
        yt(t, (i, s) => i === e[s]))
    );
  }
  function Ti(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "g"), (s) => (s === e ? i : e));
  }
  function Qt(t) {
    return t[t.length - 1];
  }
  function yt(t, e) {
    for (const i in t) if (e(t[i], i) === !1) return !1;
    return !0;
  }
  function ze(t, e) {
    return t.slice().sort((i, s) => {
      let { [e]: n = 0 } = i,
        { [e]: o = 0 } = s;
      return n > o ? 1 : o > n ? -1 : 0;
    });
  }
  function gs(t, e) {
    const i = new Set();
    return t.filter((s) => {
      let { [e]: n } = s;
      return i.has(n) ? !1 : i.add(n);
    });
  }
  function U(t, e, i) {
    return (
      e === void 0 && (e = 0),
      i === void 0 && (i = 1),
      Math.min(Math.max(Ct(t) || 0, e), i)
    );
  }
  function T() {}
  function Ci() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return [
      ["bottom", "top"],
      ["right", "left"],
    ].every((s) => {
      let [n, o] = s;
      return (
        Math.min(
          ...e.map((r) => {
            let { [n]: a } = r;
            return a;
          })
        ) -
          Math.max(
            ...e.map((r) => {
              let { [o]: a } = r;
              return a;
            })
          ) >
        0
      );
    });
  }
  function He(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  function Ii(t, e, i) {
    const s = e === "width" ? "height" : "width";
    return { [s]: t[e] ? Math.round((i * t[s]) / t[e]) : t[s], [e]: i };
  }
  function ms(t, e) {
    t = { ...t };
    for (const i in t) t = t[i] > e[i] ? Ii(t, i, e[i]) : t;
    return t;
  }
  function po(t, e) {
    t = ms(t, e);
    for (const i in t) t = t[i] < e[i] ? Ii(t, i, e[i]) : t;
    return t;
  }
  const Fe = { ratio: Ii, contain: ms, cover: po };
  function Ut(t, e, i, s) {
    i === void 0 && (i = 0), s === void 0 && (s = !1), (e = y(e));
    const { length: n } = e;
    return n
      ? ((t = Mt(t)
          ? Ct(t)
          : t === "next"
          ? i + 1
          : t === "previous"
          ? i - 1
          : e.indexOf(R(t))),
        s ? U(t, 0, n - 1) : ((t %= n), t < 0 ? t + n : t))
      : -1;
  }
  function rt(t) {
    const e = Object.create(null);
    return (i) => e[i] || (e[i] = t(i));
  }
  class Le {
    constructor() {
      this.promise = new Promise((e, i) => {
        (this.reject = i), (this.resolve = e);
      });
    }
  }
  function $(t, e, i) {
    if (St(e)) {
      for (const n in e) $(t, n, e[n]);
      return;
    }
    if (j(i)) {
      var s;
      return (s = R(t)) == null ? void 0 : s.getAttribute(e);
    } else for (const n of y(t)) mt(i) && (i = i.call(n, $(n, e))), i === null ? ge(n, e) : n.setAttribute(e, i);
  }
  function It(t, e) {
    return y(t).some((i) => i.hasAttribute(e));
  }
  function ge(t, e) {
    const i = y(t);
    for (const s of e.split(" ")) for (const n of i) n.removeAttribute(s);
  }
  function at(t, e) {
    for (const i of [e, "data-" + e]) if (It(t, i)) return $(t, i);
  }
  const go = {
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
    menuitem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  function Ai(t) {
    return y(t).some((e) => go[e.tagName.toLowerCase()]);
  }
  function q(t) {
    return y(t).some(
      (e) => e.offsetWidth || e.offsetHeight || e.getClientRects().length
    );
  }
  const me = "input,select,textarea,button";
  function Pi(t) {
    return y(t).some((e) => H(e, me));
  }
  const We = me + ",a[href],[tabindex]";
  function je(t) {
    return H(t, We);
  }
  function E(t) {
    var e;
    return (e = R(t)) == null ? void 0 : e.parentElement;
  }
  function ve(t, e) {
    return y(t).filter((i) => H(i, e));
  }
  function H(t, e) {
    return y(t).some((i) => i.matches(e));
  }
  function it(t, e) {
    return Kt(t)
      ? t.closest(et(e, ">") ? e.slice(1) : e)
      : y(t)
          .map((i) => it(i, e))
          .filter(Boolean);
  }
  function _(t, e) {
    return B(e) ? !!it(t, e) : R(e).contains(R(t));
  }
  function te(t, e) {
    const i = [];
    for (; (t = E(t)); ) (!e || H(t, e)) && i.push(t);
    return i;
  }
  function M(t, e) {
    t = R(t);
    const i = t ? y(t.children) : [];
    return e ? ve(i, e) : i;
  }
  function ee(t, e) {
    return e ? y(t).indexOf(R(e)) : M(E(t)).indexOf(t);
  }
  function ct(t, e) {
    return Ei(t, ws(t, e));
  }
  function we(t, e) {
    return be(t, ws(t, e));
  }
  function Ei(t, e) {
    return R(bs(t, e, "querySelector"));
  }
  function be(t, e) {
    return y(bs(t, e, "querySelectorAll"));
  }
  const mo = /(^|[^\\],)\s*[!>+~-]/,
    vs = rt((t) => t.match(mo));
  function ws(t, e) {
    return (
      e === void 0 && (e = document),
      (B(t) && vs(t)) || De(e) ? e : e.ownerDocument
    );
  }
  const vo = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
    wo = rt((t) => t.replace(vo, "$1 *"));
  function bs(t, e, i) {
    if ((e === void 0 && (e = document), !t || !B(t))) return t;
    if (((t = wo(t)), vs(t))) {
      const s = xo(t);
      t = "";
      for (let n of s) {
        let o = e;
        if (n[0] === "!") {
          const r = n.substr(1).trim().split(" ");
          if (
            ((o = it(E(e), r[0])),
            (n = r.slice(1).join(" ").trim()),
            !n.length && s.length === 1)
          )
            return o;
        }
        if (n[0] === "-") {
          const r = n.substr(1).trim().split(" "),
            a = (o || e).previousElementSibling;
          (o = H(a, n.substr(1)) ? a : null), (n = r.slice(1).join(" "));
        }
        o && (t += (t ? "," : "") + yo(o) + " " + n);
      }
      e = document;
    }
    try {
      return e[i](t);
    } catch {
      return null;
    }
  }
  const bo = /.*?[^\\](?:,|$)/g,
    xo = rt((t) => t.match(bo).map((e) => e.replace(/,$/, "").trim()));
  function yo(t) {
    const e = [];
    for (; t.parentNode; ) {
      const i = $(t, "id");
      if (i) {
        e.unshift("#" + _i(i));
        break;
      } else {
        let { tagName: s } = t;
        s !== "HTML" && (s += ":nth-child(" + (ee(t) + 1) + ")"),
          e.unshift(s),
          (t = t.parentNode);
      }
    }
    return e.join(" > ");
  }
  function _i(t) {
    return B(t) ? CSS.escape(t) : "";
  }
  function k() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    let [s, n, o, r, a = !1] = Oi(e);
    r.length > 1 && (r = ko(r)),
      a != null && a.self && (r = So(r)),
      o && (r = $o(o, r));
    for (const l of n) for (const u of s) u.addEventListener(l, r, a);
    return () => Nt(s, n, r, a);
  }
  function Nt() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    let [s, n, , o, r = !1] = Oi(e);
    for (const a of n) for (const l of s) l.removeEventListener(a, o, r);
  }
  function N() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    const [s, n, o, r, a = !1, l] = Oi(e),
      u = k(
        s,
        n,
        o,
        (h) => {
          const d = !l || l(h);
          d && (u(), r(h, d));
        },
        a
      );
    return u;
  }
  function g(t, e, i) {
    return Bi(t).every((s) => s.dispatchEvent(zt(e, !0, !0, i)));
  }
  function zt(t, e, i, s) {
    return (
      e === void 0 && (e = !0),
      i === void 0 && (i = !1),
      B(t) &&
        (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })),
      t
    );
  }
  function Oi(t) {
    return (
      (t[0] = Bi(t[0])),
      B(t[1]) && (t[1] = t[1].split(" ")),
      mt(t[2]) && t.splice(2, 0, !1),
      t
    );
  }
  function $o(t, e) {
    return (i) => {
      const s =
        t[0] === ">"
          ? be(t, i.currentTarget)
              .reverse()
              .filter((n) => _(i.target, n))[0]
          : it(i.target, t);
      s && ((i.current = s), e.call(this, i));
    };
  }
  function ko(t) {
    return (e) => (Q(e.detail) ? t(e, ...e.detail) : t(e));
  }
  function So(t) {
    return function (e) {
      if (e.target === e.currentTarget || e.target === e.current)
        return t.call(null, e);
    };
  }
  function xs(t) {
    return t && "addEventListener" in t;
  }
  function To(t) {
    return xs(t) ? t : R(t);
  }
  function Bi(t) {
    return Q(t) ? t.map(To).filter(Boolean) : B(t) ? be(t) : xs(t) ? [t] : y(t);
  }
  function $t(t) {
    return t.pointerType === "touch" || !!t.touches;
  }
  function ie(t) {
    var e, i;
    const { clientX: s, clientY: n } =
      ((e = t.touches) == null ? void 0 : e[0]) ||
      ((i = t.changedTouches) == null ? void 0 : i[0]) ||
      t;
    return { x: s, y: n };
  }
  function ys(t, e) {
    const i = {
      data: null,
      method: "GET",
      headers: {},
      xhr: new XMLHttpRequest(),
      beforeSend: T,
      responseType: "",
      ...e,
    };
    return Promise.resolve()
      .then(() => i.beforeSend(i))
      .then(() => Co(t, i));
  }
  function Co(t, e) {
    return new Promise((i, s) => {
      const { xhr: n } = e;
      for (const o in e)
        if (o in n)
          try {
            n[o] = e[o];
          } catch {}
      n.open(e.method.toUpperCase(), t);
      for (const o in e.headers) n.setRequestHeader(o, e.headers[o]);
      k(n, "load", () => {
        n.status === 0 ||
        (n.status >= 200 && n.status < 300) ||
        n.status === 304
          ? i(n)
          : s(xt(Error(n.statusText), { xhr: n, status: n.status }));
      }),
        k(n, "error", () => s(xt(Error("Network Error"), { xhr: n }))),
        k(n, "timeout", () => s(xt(Error("Network Timeout"), { xhr: n }))),
        n.send(e.data);
    });
  }
  function $s(t, e, i) {
    return new Promise((s, n) => {
      const o = new Image();
      (o.onerror = (r) => {
        n(r);
      }),
        (o.onload = () => {
          s(o);
        }),
        i && (o.sizes = i),
        e && (o.srcset = e),
        (o.src = t);
    });
  }
  const Io = {
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
    zoom: !0,
  };
  function c(t, e, i, s) {
    s === void 0 && (s = "");
    const n = y(t);
    for (const o of n)
      if (B(e)) {
        if (((e = Mi(e)), j(i))) return getComputedStyle(o).getPropertyValue(e);
        o.style.setProperty(
          e,
          Mt(i) && !Io[e] ? i + "px" : i || Zt(i) ? i : "",
          s
        );
      } else if (Q(e)) {
        const r = {};
        for (const a of e) r[a] = c(o, a);
        return r;
      } else St(e) && ((s = i), yt(e, (r, a) => c(o, a, r, s)));
    return n[0];
  }
  const Mi = rt((t) => Ao(t));
  function Ao(t) {
    if (et(t, "--")) return t;
    t = Bt(t);
    const { style: e } = document.documentElement;
    if (t in e) return t;
    for (const i of ["webkit", "moz"]) {
      const s = "-" + i + "-" + t;
      if (s in e) return s;
    }
  }
  function b(t) {
    for (
      var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1;
      s < e;
      s++
    )
      i[s - 1] = arguments[s];
    ks(t, i, "add");
  }
  function O(t) {
    for (
      var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1;
      s < e;
      s++
    )
      i[s - 1] = arguments[s];
    ks(t, i, "remove");
  }
  function Di(t, e) {
    $(t, "class", (i) =>
      (i || "").replace(new RegExp("\\b" + e + "\\b\\s?", "g"), "")
    );
  }
  function Ni(t) {
    !(arguments.length <= 1) &&
      arguments[1] &&
      O(t, arguments.length <= 1 ? void 0 : arguments[1]),
      !(arguments.length <= 2) &&
        arguments[2] &&
        b(t, arguments.length <= 2 ? void 0 : arguments[2]);
  }
  function C(t, e) {
    return ([e] = zi(e)), !!e && y(t).some((i) => i.classList.contains(e));
  }
  function F(t, e, i) {
    const s = zi(e);
    j(i) || (i = !!i);
    for (const n of y(t)) for (const o of s) n.classList.toggle(o, i);
  }
  function ks(t, e, i) {
    e = e.reduce((s, n) => s.concat(zi(n)), []);
    for (const s of y(t)) s.classList[i](...e);
  }
  function zi(t) {
    return String(t).split(/\s|,/).filter(Boolean);
  }
  function Po(t, e, i, s) {
    return (
      i === void 0 && (i = 400),
      s === void 0 && (s = "linear"),
      (i = Math.round(i)),
      Promise.all(
        y(t).map(
          (n) =>
            new Promise((o, r) => {
              for (const l in e) {
                const u = c(n, l);
                u === "" && c(n, l, u);
              }
              const a = setTimeout(() => g(n, "transitionend"), i);
              N(
                n,
                "transitionend transitioncanceled",
                (l) => {
                  let { type: u } = l;
                  clearTimeout(a),
                    O(n, "uk-transition"),
                    c(n, {
                      transitionProperty: "",
                      transitionDuration: "",
                      transitionTimingFunction: "",
                    }),
                    u === "transitioncanceled" ? r() : o(n);
                },
                { self: !0 }
              ),
                b(n, "uk-transition"),
                c(n, {
                  transitionProperty: Object.keys(e).map(Mi).join(","),
                  transitionDuration: i + "ms",
                  transitionTimingFunction: s,
                  ...e,
                });
            })
        )
      )
    );
  }
  const S = {
      start: Po,
      async stop(t) {
        g(t, "transitionend"), await Promise.resolve();
      },
      async cancel(t) {
        g(t, "transitioncanceled"), await Promise.resolve();
      },
      inProgress(t) {
        return C(t, "uk-transition");
      },
    },
    xe = "uk-animation-";
  function Ss(t, e, i, s, n) {
    return (
      i === void 0 && (i = 200),
      Promise.all(
        y(t).map(
          (o) =>
            new Promise((r, a) => {
              g(o, "animationcanceled");
              const l = setTimeout(() => g(o, "animationend"), i);
              N(
                o,
                "animationend animationcanceled",
                (u) => {
                  let { type: h } = u;
                  clearTimeout(l),
                    h === "animationcanceled" ? a() : r(o),
                    c(o, "animationDuration", ""),
                    Di(o, xe + "\\S*");
                },
                { self: !0 }
              ),
                c(o, "animationDuration", i + "ms"),
                b(o, e, xe + (n ? "leave" : "enter")),
                et(e, xe) &&
                  (s && b(o, "uk-transform-origin-" + s),
                  n && b(o, xe + "reverse"));
            })
        )
      )
    );
  }
  const Eo = new RegExp(xe + "(enter|leave)"),
    ft = {
      in: Ss,
      out(t, e, i, s) {
        return Ss(t, e, i, s, !0);
      },
      inProgress(t) {
        return Eo.test($(t, "class"));
      },
      cancel(t) {
        g(t, "animationcanceled");
      },
    },
    Ht = { width: ["left", "right"], height: ["top", "bottom"] };
  function x(t) {
    const e = Kt(t)
      ? R(t).getBoundingClientRect()
      : { height: J(t), width: ye(t), top: 0, left: 0 };
    return {
      height: e.height,
      width: e.width,
      top: e.top,
      left: e.left,
      bottom: e.top + e.height,
      right: e.left + e.width,
    };
  }
  function I(t, e) {
    const i = x(t);
    if (t) {
      const { scrollY: n, scrollX: o } = Dt(t),
        r = { height: n, width: o };
      for (const a in Ht) for (const l of Ht[a]) i[l] += r[a];
    }
    if (!e) return i;
    const s = c(t, "position");
    yt(c(t, ["left", "top"]), (n, o) =>
      c(t, o, e[o] - i[o] + m(s === "absolute" && n === "auto" ? Re(t)[o] : n))
    );
  }
  function Re(t) {
    let { top: e, left: i } = I(t);
    const {
      ownerDocument: { body: s, documentElement: n },
      offsetParent: o,
    } = R(t);
    let r = o || n;
    for (; r && (r === s || r === n) && c(r, "position") === "static"; )
      r = r.parentNode;
    if (Kt(r)) {
      const a = I(r);
      (e -= a.top + m(c(r, "borderTopWidth"))),
        (i -= a.left + m(c(r, "borderLeftWidth")));
    }
    return { top: e - m(c(t, "marginTop")), left: i - m(c(t, "marginLeft")) };
  }
  function Ft(t) {
    t = R(t);
    const e = [t.offsetTop, t.offsetLeft];
    for (; (t = t.offsetParent); )
      if (
        ((e[0] += t.offsetTop + m(c(t, "borderTopWidth"))),
        (e[1] += t.offsetLeft + m(c(t, "borderLeftWidth"))),
        c(t, "position") === "fixed")
      ) {
        const i = Dt(t);
        return (e[0] += i.scrollY), (e[1] += i.scrollX), e;
      }
    return e;
  }
  const J = Ts("height"),
    ye = Ts("width");
  function Ts(t) {
    const e = kt(t);
    return (i, s) => {
      if (j(s)) {
        if (Jt(i)) return i["inner" + e];
        if (De(i)) {
          const n = i.documentElement;
          return Math.max(n["offset" + e], n["scroll" + e]);
        }
        return (
          (i = R(i)),
          (s = c(i, t)),
          (s = s === "auto" ? i["offset" + e] : m(s) || 0),
          s - se(i, t)
        );
      } else return c(i, t, !s && s !== 0 ? "" : +s + se(i, t) + "px");
    };
  }
  function se(t, e, i) {
    return (
      i === void 0 && (i = "border-box"),
      c(t, "boxSizing") === i
        ? Ht[e]
            .map(kt)
            .reduce(
              (s, n) =>
                s + m(c(t, "padding" + n)) + m(c(t, "border" + n + "Width")),
              0
            )
        : 0
    );
  }
  function qe(t) {
    for (const e in Ht)
      for (const i in Ht[e]) if (Ht[e][i] === t) return Ht[e][1 - i];
    return t;
  }
  function K(t, e, i, s) {
    return (
      e === void 0 && (e = "width"),
      i === void 0 && (i = window),
      s === void 0 && (s = !1),
      B(t)
        ? Oo(t).reduce((n, o) => {
            const r = Mo(o);
            return (
              r &&
                (o = Do(
                  r === "vh"
                    ? J(Dt(i))
                    : r === "vw"
                    ? ye(Dt(i))
                    : s
                    ? i["offset" + kt(e)]
                    : x(i)[e],
                  o
                )),
              n + m(o)
            );
          }, 0)
        : m(t)
    );
  }
  const _o = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
    Oo = rt((t) => t.toString().replace(/\s/g, "").match(_o) || []),
    Bo = /(?:v[hw]|%)$/,
    Mo = rt((t) => (t.match(Bo) || [])[0]);
  function Do(t, e) {
    return (t * m(e)) / 100;
  }
  function Hi(t) {
    if (document.readyState !== "loading") {
      t();
      return;
    }
    N(document, "DOMContentLoaded", t);
  }
  function pt(t, e) {
    var i;
    return (
      (t == null || (i = t.tagName) == null ? void 0 : i.toLowerCase()) ===
      e.toLowerCase()
    );
  }
  function Cs(t) {
    return (t = v(t)), (t.innerHTML = ""), t;
  }
  function At(t, e) {
    return j(e) ? v(t).innerHTML : L(Cs(t), e);
  }
  const No = Ve("prepend"),
    L = Ve("append"),
    Fi = Ve("before"),
    Ye = Ve("after");
  function Ve(t) {
    return function (e, i) {
      var s;
      const n = y(B(i) ? Lt(i) : i);
      return (s = v(e)) == null || s[t](...n), Is(n);
    };
  }
  function ut(t) {
    y(t).forEach((e) => e.remove());
  }
  function Xe(t, e) {
    for (e = R(Fi(t, e)); e.firstChild; ) e = e.firstChild;
    return L(e, t), e;
  }
  function Li(t, e) {
    return y(
      y(t).map((i) => (i.hasChildNodes() ? Xe(y(i.childNodes), e) : L(i, e)))
    );
  }
  function $e(t) {
    y(t)
      .map(E)
      .filter((e, i, s) => s.indexOf(e) === i)
      .forEach((e) => e.replaceWith(...e.childNodes));
  }
  const zo = /^\s*<(\w+|!)[^>]*>/,
    Ho = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function Lt(t) {
    const e = Ho.exec(t);
    if (e) return document.createElement(e[1]);
    const i = document.createElement("div");
    return (
      zo.test(t)
        ? i.insertAdjacentHTML("beforeend", t.trim())
        : (i.textContent = t),
      Is(i.childNodes)
    );
  }
  function Is(t) {
    return t.length > 1 ? t : t[0];
  }
  function vt(t, e) {
    if (!!Kt(t))
      for (e(t), t = t.firstElementChild; t; ) {
        const i = t.nextElementSibling;
        vt(t, e), (t = i);
      }
  }
  function v(t, e) {
    return As(t) ? R(Lt(t)) : Ei(t, e);
  }
  function D(t, e) {
    return As(t) ? y(Lt(t)) : be(t, e);
  }
  function As(t) {
    return B(t) && et(t.trim(), "<");
  }
  const Wt = typeof window < "u",
    X = Wt && $(document.documentElement, "dir") === "rtl",
    jt = Wt && "ontouchstart" in window,
    ne = Wt && window.PointerEvent,
    gt = ne ? "pointerdown" : jt ? "touchstart" : "mousedown",
    Ge = ne ? "pointermove" : jt ? "touchmove" : "mousemove",
    Pt = ne ? "pointerup" : jt ? "touchend" : "mouseup",
    Rt = ne ? "pointerenter" : jt ? "" : "mouseenter",
    oe = ne ? "pointerleave" : jt ? "" : "mouseleave",
    Je = ne ? "pointercancel" : "touchcancel",
    G = {
      reads: [],
      writes: [],
      read(t) {
        return this.reads.push(t), ji(), t;
      },
      write(t) {
        return this.writes.push(t), ji(), t;
      },
      clear(t) {
        Es(this.reads, t), Es(this.writes, t);
      },
      flush: Wi,
    };
  function Wi(t) {
    Ps(G.reads),
      Ps(G.writes.splice(0)),
      (G.scheduled = !1),
      (G.reads.length || G.writes.length) && ji(t + 1);
  }
  const Fo = 4;
  function ji(t) {
    G.scheduled ||
      ((G.scheduled = !0),
      t && t < Fo
        ? Promise.resolve().then(() => Wi(t))
        : requestAnimationFrame(() => Wi(1)));
  }
  function Ps(t) {
    let e;
    for (; (e = t.shift()); )
      try {
        e();
      } catch (i) {
        console.error(i);
      }
  }
  function Es(t, e) {
    const i = t.indexOf(e);
    return ~i && t.splice(i, 1);
  }
  function Ri() {}
  Ri.prototype = {
    positions: [],
    init() {
      this.positions = [];
      let t;
      (this.unbind = k(document, "mousemove", (e) => (t = ie(e)))),
        (this.interval = setInterval(() => {
          !t ||
            (this.positions.push(t),
            this.positions.length > 5 && this.positions.shift());
        }, 50));
    },
    cancel() {
      var t;
      (t = this.unbind) == null || t.call(this),
        this.interval && clearInterval(this.interval);
    },
    movesTo(t) {
      if (this.positions.length < 2) return !1;
      const e = t.getBoundingClientRect(),
        { left: i, right: s, top: n, bottom: o } = e,
        [r] = this.positions,
        a = Qt(this.positions),
        l = [r, a];
      return He(a, e)
        ? !1
        : [
            [
              { x: i, y: n },
              { x: s, y: o },
            ],
            [
              { x: i, y: o },
              { x: s, y: n },
            ],
          ].some((h) => {
            const d = Lo(l, h);
            return d && He(d, e);
          });
    },
  };
  function Lo(t, e) {
    let [{ x: i, y: s }, { x: n, y: o }] = t,
      [{ x: r, y: a }, { x: l, y: u }] = e;
    const h = (u - a) * (n - i) - (l - r) * (o - s);
    if (h === 0) return !1;
    const d = ((l - r) * (s - a) - (u - a) * (i - r)) / h;
    return d < 0 ? !1 : { x: i + d * (n - i), y: s + d * (o - s) };
  }
  function re(t, e, i, s) {
    s === void 0 && (s = !0);
    const n = new IntersectionObserver(
      s
        ? (o, r) => {
            o.some((a) => a.isIntersecting) && e(o, r);
          }
        : e,
      i
    );
    for (const o of y(t)) n.observe(o);
    return n;
  }
  const Wo = Wt && window.ResizeObserver;
  function Ke(t, e, i) {
    return (
      i === void 0 && (i = { box: "border-box" }),
      Wo
        ? _s(ResizeObserver, t, e, i)
        : (jo(),
          ke.add(e),
          {
            disconnect() {
              ke.delete(e);
            },
          })
    );
  }
  let ke;
  function jo() {
    if (ke) return;
    ke = new Set();
    let t;
    const e = () => {
      if (!t) {
        (t = !0), requestAnimationFrame(() => (t = !1));
        for (const i of ke) i();
      }
    };
    k(window, "load resize", e), k(document, "loadedmetadata load", e, !0);
  }
  function qi(t, e, i) {
    return _s(MutationObserver, t, e, i);
  }
  function _s(t, e, i, s) {
    const n = new t(i);
    for (const o of y(e)) n.observe(o, s);
    return n;
  }
  const Z = {};
  (Z.events =
    Z.created =
    Z.beforeConnect =
    Z.connected =
    Z.beforeDisconnect =
    Z.disconnected =
    Z.destroy =
      Yi),
    (Z.args = function (t, e) {
      return e !== !1 && Yi(e || t);
    }),
    (Z.update = function (t, e) {
      return ze(Yi(t, mt(e) ? { read: e } : e), "order");
    }),
    (Z.props = function (t, e) {
      if (Q(e)) {
        const i = {};
        for (const s of e) i[s] = String;
        e = i;
      }
      return Z.methods(t, e);
    }),
    (Z.computed = Z.methods =
      function (t, e) {
        return e ? (t ? { ...t, ...e } : e) : t;
      }),
    (Z.data = function (t, e, i) {
      return i
        ? Os(t, e, i)
        : e
        ? t
          ? function (s) {
              return Os(t, e, s);
            }
          : e
        : t;
    });
  function Os(t, e, i) {
    return Z.computed(mt(t) ? t.call(i, i) : t, mt(e) ? e.call(i, i) : e);
  }
  function Yi(t, e) {
    return (
      (t = t && !Q(t) ? [t] : t), e ? (t ? t.concat(e) : Q(e) ? e : [e]) : t
    );
  }
  function Ro(t, e) {
    return j(e) ? t : e;
  }
  function ae(t, e, i) {
    const s = {};
    if (
      (mt(e) && (e = e.options),
      e.extends && (t = ae(t, e.extends, i)),
      e.mixins)
    )
      for (const o of e.mixins) t = ae(t, o, i);
    for (const o in t) n(o);
    for (const o in e) Ot(t, o) || n(o);
    function n(o) {
      s[o] = (Z[o] || Ro)(t[o], e[o], i);
    }
    return s;
  }
  function Se(t, e) {
    e === void 0 && (e = []);
    try {
      return t
        ? et(t, "{")
          ? JSON.parse(t)
          : e.length && !p(t, ":")
          ? { [e[0]]: t }
          : t.split(";").reduce((i, s) => {
              const [n, o] = s.split(/:(.*)/);
              return n && !j(o) && (i[n.trim()] = o.trim()), i;
            }, {})
        : {};
    } catch {
      return {};
    }
  }
  function Bs(t) {
    if ((Qe(t) && Vi(t, { func: "playVideo", method: "play" }), Ze(t)))
      try {
        t.play().catch(T);
      } catch {}
  }
  function Ms(t) {
    Qe(t) && Vi(t, { func: "pauseVideo", method: "pause" }), Ze(t) && t.pause();
  }
  function Ds(t) {
    Qe(t) && Vi(t, { func: "mute", method: "setVolume", value: 0 }),
      Ze(t) && (t.muted = !0);
  }
  function Ns(t) {
    return Ze(t) || Qe(t);
  }
  function Ze(t) {
    return pt(t, "video");
  }
  function Qe(t) {
    return pt(t, "iframe") && (zs(t) || Hs(t));
  }
  function zs(t) {
    return !!t.src.match(
      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
    );
  }
  function Hs(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }
  async function Vi(t, e) {
    await Yo(t), Fs(t, e);
  }
  function Fs(t, e) {
    try {
      t.contentWindow.postMessage(
        JSON.stringify({ event: "command", ...e }),
        "*"
      );
    } catch {}
  }
  const Xi = "_ukPlayer";
  let qo = 0;
  function Yo(t) {
    if (t[Xi]) return t[Xi];
    const e = zs(t),
      i = Hs(t),
      s = ++qo;
    let n;
    return (t[Xi] = new Promise((o) => {
      e &&
        N(t, "load", () => {
          const r = () => Fs(t, { event: "listening", id: s });
          (n = setInterval(r, 100)), r();
        }),
        N(window, "message", o, !1, (r) => {
          let { data: a } = r;
          try {
            return (
              (a = JSON.parse(a)),
              a &&
                ((e && a.id === s && a.event === "onReady") ||
                  (i && Number(a.player_id) === s))
            );
          } catch {}
        }),
        (t.src =
          "" +
          t.src +
          (p(t.src, "?") ? "&" : "?") +
          (e ? "enablejsapi=1" : "api=1&player_id=" + s));
    }).then(() => clearInterval(n)));
  }
  function Ue(t, e, i) {
    return (
      e === void 0 && (e = 0),
      i === void 0 && (i = 0),
      q(t)
        ? Ci(
            ...tt(t)
              .map((s) => {
                const { top: n, left: o, bottom: r, right: a } = lt(s);
                return { top: n - e, left: o - i, bottom: r + e, right: a + i };
              })
              .concat(I(t))
          )
        : !1
    );
  }
  function Gi(t, e) {
    let { offset: i = 0 } = e === void 0 ? {} : e;
    const s = q(t) ? tt(t) : [];
    return s.reduce(
      (a, l, u) => {
        const { scrollTop: h, scrollHeight: d, offsetHeight: f } = l,
          w = lt(l),
          A = d - w.height,
          { height: P, top: W } = s[u - 1] ? lt(s[u - 1]) : I(t);
        let V = Math.ceil(W - w.top - i + h);
        return (
          i > 0 && f < P + i ? (V += i) : (i = 0),
          V > A ? ((i -= V - A), (V = A)) : V < 0 && ((i -= V), (V = 0)),
          () => n(l, V - h).then(a)
        );
      },
      () => Promise.resolve()
    )();
    function n(a, l) {
      return new Promise((u) => {
        const h = a.scrollTop,
          d = o(Math.abs(l)),
          f = Date.now();
        (function w() {
          const A = r(U((Date.now() - f) / d));
          (a.scrollTop = h + l * A), A === 1 ? u() : requestAnimationFrame(w);
        })();
      });
    }
    function o(a) {
      return 40 * Math.pow(a, 0.375);
    }
    function r(a) {
      return 0.5 * (1 - Math.cos(Math.PI * a));
    }
  }
  function Ji(t, e, i) {
    if ((e === void 0 && (e = 0), i === void 0 && (i = 0), !q(t))) return 0;
    const [s] = tt(t, /auto|scroll/, !0),
      { scrollHeight: n, scrollTop: o } = s,
      { height: r } = lt(s),
      a = n - r,
      l = Ft(t)[0] - Ft(s)[0],
      u = Math.max(0, l - r + e),
      h = Math.min(a, l + t.offsetHeight - i);
    return U((o - u) / (h - u));
  }
  function tt(t, e, i) {
    e === void 0 && (e = /auto|scroll|hidden|clip/), i === void 0 && (i = !1);
    const s = Ls(t);
    let n = te(t).reverse();
    n = n.slice(n.indexOf(s) + 1);
    const o = bt(n, (r) => c(r, "position") === "fixed");
    return (
      ~o && (n = n.slice(o)),
      [s]
        .concat(
          n.filter(
            (r) =>
              e.test(c(r, "overflow")) && (!i || r.scrollHeight > lt(r).height)
          )
        )
        .reverse()
    );
  }
  function lt(t) {
    const e = Dt(t),
      {
        document: { documentElement: i },
      } = e;
    let s = t === Ls(t) ? e : t;
    const { visualViewport: n } = e;
    if (Jt(s) && n) {
      let { height: r, width: a, scale: l, pageTop: u, pageLeft: h } = n;
      return (
        (r = Math.round(r * l)),
        (a = Math.round(a * l)),
        { height: r, width: a, top: u, left: h, bottom: u + r, right: h + a }
      );
    }
    let o = I(s);
    for (let [r, a, l, u] of [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"],
    ])
      Jt(s) ? (s = i) : (o[l] += m(c(s, "border-" + l + "-width"))),
        (o[r] = o[a] = s["client" + kt(r)]),
        (o[u] = o[r] + o[l]);
    return o;
  }
  function Ls(t) {
    return Dt(t).document.scrollingElement;
  }
  const ht = [
    ["width", "x", "left", "right"],
    ["height", "y", "top", "bottom"],
  ];
  function Ws(t, e, i) {
    (i = {
      attach: {
        element: ["left", "top"],
        target: ["left", "top"],
        ...i.attach,
      },
      offset: [0, 0],
      placement: [],
      ...i,
    }),
      Q(e) || (e = [e, e]),
      I(t, js(t, e, i));
  }
  function js(t, e, i) {
    const s = Rs(t, e, i),
      { boundary: n, viewportOffset: o = 0, placement: r } = i;
    let a = s;
    for (const [l, [u, , h, d]] of Object.entries(ht)) {
      const f = Vo(e[l], o, n, l);
      if (ti(s, f, l)) continue;
      let w = 0;
      if (r[l] === "flip") {
        const A = i.attach.target[l];
        if ((A === d && s[d] <= f[d]) || (A === h && s[h] >= f[h])) continue;
        w = Go(t, e, i, l)[h] - s[h];
        const P = Xo(e[l], o, l);
        if (!ti(Ki(s, w, l), P, l)) {
          if (ti(s, P, l)) continue;
          if (i.recursion) return !1;
          const W = Jo(t, e, i);
          if (W && ti(W, P, 1 - l)) return W;
          continue;
        }
      } else if (r[l] === "shift") {
        const A = I(e[l]),
          { offset: P } = i;
        w =
          U(U(s[h], f[h], f[d] - s[u]), A[h] - s[u] + P[l], A[d] - P[l]) - s[h];
      }
      a = Ki(a, w, l);
    }
    return a;
  }
  function Rs(t, e, i) {
    let { attach: s, offset: n } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach,
        },
        offset: [0, 0],
        ...i,
      },
      o = I(t);
    for (const [r, [a, , l, u]] of Object.entries(ht)) {
      const h = s.target[r] === s.element[r] ? lt(e[r]) : I(e[r]);
      o = Ki(
        o,
        h[l] -
          o[l] +
          qs(s.target[r], u, h[a]) -
          qs(s.element[r], u, o[a]) +
          +n[r],
        r
      );
    }
    return o;
  }
  function Ki(t, e, i) {
    const [, s, n, o] = ht[i],
      r = { ...t };
    return (r[n] = t[s] = t[n] + e), (r[o] += e), r;
  }
  function qs(t, e, i) {
    return t === "center" ? i / 2 : t === e ? i : 0;
  }
  function Vo(t, e, i, s) {
    let n = Ys(...tt(t).map(lt));
    return (
      e && ((n[ht[s][2]] += e), (n[ht[s][3]] -= e)),
      i && (n = Ys(n, I(Q(i) ? i[s] : i))),
      n
    );
  }
  function Xo(t, e, i) {
    const [s, , n, o] = ht[i],
      [r] = tt(t),
      a = lt(r);
    return (
      (a[n] -= r["scroll" + kt(n)] - e),
      (a[o] = a[n] + r["scroll" + kt(s)] - e),
      a
    );
  }
  function Ys() {
    let t = {};
    for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
      i[s] = arguments[s];
    for (const n of i)
      for (const [, , o, r] of ht)
        (t[o] = Math.max(t[o] || 0, n[o])),
          (t[r] = Math.min(...[t[r], n[r]].filter(Boolean)));
    return t;
  }
  function ti(t, e, i) {
    const [, , s, n] = ht[i];
    return t[s] >= e[s] && t[n] <= e[n];
  }
  function Go(t, e, i, s) {
    let { offset: n, attach: o } = i;
    return Rs(t, e, {
      attach: { element: Vs(o.element, s), target: Vs(o.target, s) },
      offset: Ko(n, s),
    });
  }
  function Jo(t, e, i) {
    return js(t, e, {
      ...i,
      attach: {
        element: i.attach.element.map(Xs).reverse(),
        target: i.attach.target.map(Xs).reverse(),
      },
      offset: i.offset.reverse(),
      placement: i.placement.reverse(),
      recursion: !0,
    });
  }
  function Vs(t, e) {
    const i = [...t],
      s = ht[e].indexOf(t[e]);
    return ~s && (i[e] = ht[e][1 - (s % 2) + 2]), i;
  }
  function Xs(t) {
    for (let e = 0; e < ht.length; e++) {
      const i = ht[e].indexOf(t);
      if (~i) return ht[1 - e][(i % 2) + 2];
    }
  }
  function Ko(t, e) {
    return (t = [...t]), (t[e] *= -1), t;
  }
  var Zo = Object.freeze({
    __proto__: null,
    ajax: ys,
    getImage: $s,
    Transition: S,
    Animation: ft,
    attr: $,
    hasAttr: It,
    removeAttr: ge,
    data: at,
    addClass: b,
    removeClass: O,
    removeClasses: Di,
    replaceClass: Ni,
    hasClass: C,
    toggleClass: F,
    dimensions: x,
    offset: I,
    position: Re,
    offsetPosition: Ft,
    height: J,
    width: ye,
    boxModelAdjust: se,
    flipPosition: qe,
    toPx: K,
    ready: Hi,
    isTag: pt,
    empty: Cs,
    html: At,
    prepend: No,
    append: L,
    before: Fi,
    after: Ye,
    remove: ut,
    wrapAll: Xe,
    wrapInner: Li,
    unwrap: $e,
    fragment: Lt,
    apply: vt,
    $: v,
    $$: D,
    inBrowser: Wt,
    isRtl: X,
    hasTouch: jt,
    pointerDown: gt,
    pointerMove: Ge,
    pointerUp: Pt,
    pointerEnter: Rt,
    pointerLeave: oe,
    pointerCancel: Je,
    on: k,
    off: Nt,
    once: N,
    trigger: g,
    createEvent: zt,
    toEventTargets: Bi,
    isTouch: $t,
    getEventPos: ie,
    fastdom: G,
    isVoidElement: Ai,
    isVisible: q,
    selInput: me,
    isInput: Pi,
    selFocusable: We,
    isFocusable: je,
    parent: E,
    filter: ve,
    matches: H,
    closest: it,
    within: _,
    parents: te,
    children: M,
    index: ee,
    hasOwn: Ot,
    hyphenate: Bt,
    camelize: Xt,
    ucfirst: kt,
    startsWith: et,
    endsWith: Gt,
    includes: p,
    findIndex: bt,
    isArray: Q,
    toArray: yi,
    assign: xt,
    isFunction: mt,
    isObject: St,
    isPlainObject: Tt,
    isWindow: Jt,
    isDocument: De,
    isNode: $i,
    isElement: Kt,
    isBoolean: Ne,
    isString: B,
    isNumber: Zt,
    isNumeric: Mt,
    isEmpty: fe,
    isUndefined: j,
    toBoolean: Si,
    toNumber: Ct,
    toFloat: m,
    toNode: R,
    toNodes: y,
    toWindow: Dt,
    isEqual: pe,
    swap: Ti,
    last: Qt,
    each: yt,
    sortBy: ze,
    uniqueBy: gs,
    clamp: U,
    noop: T,
    intersectRect: Ci,
    pointInRect: He,
    Dimensions: Fe,
    getIndex: Ut,
    memoize: rt,
    Deferred: Le,
    MouseTracker: Ri,
    observeIntersection: re,
    observeResize: Ke,
    observeMutation: qi,
    mergeOptions: ae,
    parseOptions: Se,
    play: Bs,
    pause: Ms,
    mute: Ds,
    isVideo: Ns,
    positionAt: Ws,
    query: ct,
    queryAll: we,
    find: Ei,
    findAll: be,
    escape: _i,
    css: c,
    propName: Mi,
    isInView: Ue,
    scrollIntoView: Gi,
    scrolledOver: Ji,
    scrollParents: tt,
    offsetViewport: lt,
  });
  function Qo(t) {
    const e = t.data;
    (t.use = function (n) {
      if (!n.installed) return n.call(null, this), (n.installed = !0), this;
    }),
      (t.mixin = function (n, o) {
        (o = (B(o) ? t.component(o) : o) || this),
          (o.options = ae(o.options, n));
      }),
      (t.extend = function (n) {
        n = n || {};
        const o = this,
          r = function (l) {
            this._init(l);
          };
        return (
          (r.prototype = Object.create(o.prototype)),
          (r.prototype.constructor = r),
          (r.options = ae(o.options, n)),
          (r.super = o),
          (r.extend = o.extend),
          r
        );
      }),
      (t.update = function (n, o) {
        n = n ? R(n) : document.body;
        for (const r of te(n).reverse()) s(r[e], o);
        vt(n, (r) => s(r[e], o));
      });
    let i;
    Object.defineProperty(t, "container", {
      get() {
        return i || document.body;
      },
      set(n) {
        i = v(n);
      },
    });
    function s(n, o) {
      if (!!n) for (const r in n) n[r]._connected && n[r]._callUpdate(o);
    }
  }
  function Uo(t) {
    (t.prototype._callHook = function (s) {
      var n;
      (n = this.$options[s]) == null || n.forEach((o) => o.call(this));
    }),
      (t.prototype._callConnected = function () {
        this._connected ||
          ((this._data = {}),
          (this._computed = {}),
          this._initProps(),
          this._callHook("beforeConnect"),
          (this._connected = !0),
          this._initEvents(),
          this._initObservers(),
          this._callHook("connected"),
          this._callUpdate());
      }),
      (t.prototype._callDisconnected = function () {
        !this._connected ||
          (this._callHook("beforeDisconnect"),
          this._disconnectObservers(),
          this._unbindEvents(),
          this._callHook("disconnected"),
          (this._connected = !1),
          delete this._watch);
      }),
      (t.prototype._callUpdate = function (s) {
        s === void 0 && (s = "update"),
          this._connected &&
            ((s === "update" || s === "resize") && this._callWatches(),
            this.$options.update &&
              (this._updates ||
                ((this._updates = new Set()),
                G.read(() => {
                  this._connected && e.call(this, this._updates),
                    delete this._updates;
                })),
              this._updates.add(s.type || s)));
      }),
      (t.prototype._callWatches = function () {
        if (this._watch) return;
        const s = !Ot(this, "_watch");
        this._watch = G.read(() => {
          this._connected && i.call(this, s), (this._watch = null);
        });
      });
    function e(s) {
      for (const { read: n, write: o, events: r = [] } of this.$options
        .update) {
        if (!s.has("update") && !r.some((l) => s.has(l))) continue;
        let a;
        n &&
          ((a = n.call(this, this._data, s)), a && Tt(a) && xt(this._data, a)),
          o &&
            a !== !1 &&
            G.write(() => {
              this._connected && o.call(this, this._data, s);
            });
      }
    }
    function i(s) {
      const {
          $options: { computed: n },
        } = this,
        o = { ...this._computed };
      this._computed = {};
      for (const r in n) {
        const { watch: a, immediate: l } = n[r];
        a &&
          ((s && l) || (Ot(o, r) && !pe(o[r], this[r]))) &&
          a.call(this, this[r], o[r]);
      }
    }
  }
  function tr(t) {
    let e = 0;
    (t.prototype._init = function (i) {
      (i = i || {}),
        (i.data = nr(i, this.constructor.options)),
        (this.$options = ae(this.constructor.options, i, this)),
        (this.$el = null),
        (this.$props = {}),
        (this._uid = e++),
        this._initData(),
        this._initMethods(),
        this._initComputeds(),
        this._callHook("created"),
        i.el && this.$mount(i.el);
    }),
      (t.prototype._initData = function () {
        const { data: i = {} } = this.$options;
        for (const s in i) this.$props[s] = this[s] = i[s];
      }),
      (t.prototype._initMethods = function () {
        const { methods: i } = this.$options;
        if (i) for (const s in i) this[s] = i[s].bind(this);
      }),
      (t.prototype._initComputeds = function () {
        const { computed: i } = this.$options;
        if (((this._computed = {}), i)) for (const s in i) er(this, s, i[s]);
      }),
      (t.prototype._initProps = function (i) {
        let s;
        i = i || Gs(this.$options, this.$name);
        for (s in i) j(i[s]) || (this.$props[s] = i[s]);
        const n = [this.$options.computed, this.$options.methods];
        for (s in this.$props) s in i && ir(n, s) && (this[s] = this.$props[s]);
      }),
      (t.prototype._initEvents = function () {
        this._events = [];
        for (const i of this.$options.events || [])
          if (Ot(i, "handler")) ei(this, i);
          else for (const s in i) ei(this, i[s], s);
      }),
      (t.prototype._unbindEvents = function () {
        this._events.forEach((i) => i()), delete this._events;
      }),
      (t.prototype._initObservers = function () {
        (this._observers = [rr(this)]),
          this.$options.computed && this.registerObserver(or(this));
      }),
      (t.prototype.registerObserver = function (i) {
        this._observers.push(i);
      }),
      (t.prototype._disconnectObservers = function () {
        this._observers.forEach((i) => (i == null ? void 0 : i.disconnect()));
      });
  }
  function Gs(t, e) {
    const i = {},
      { args: s = [], props: n = {}, el: o } = t;
    if (!n) return i;
    for (const a in n) {
      const l = Bt(a);
      let u = at(o, l);
      j(u) ||
        ((u = n[a] === Boolean && u === "" ? !0 : Zi(n[a], u)),
        !(l === "target" && et(u, "_")) && (i[a] = u));
    }
    const r = Se(at(o, e), s);
    for (const a in r) {
      const l = Xt(a);
      j(n[l]) || (i[l] = Zi(n[l], r[a]));
    }
    return i;
  }
  function er(t, e, i) {
    Object.defineProperty(t, e, {
      enumerable: !0,
      get() {
        const { _computed: s, $props: n, $el: o } = t;
        return Ot(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e];
      },
      set(s) {
        const { _computed: n } = t;
        (n[e] = i.set ? i.set.call(t, s) : s), j(n[e]) && delete n[e];
      },
    });
  }
  function ei(t, e, i) {
    Tt(e) || (e = { name: i, handler: e });
    let {
      name: s,
      el: n,
      handler: o,
      capture: r,
      passive: a,
      delegate: l,
      filter: u,
      self: h,
    } = e;
    if (((n = mt(n) ? n.call(t) : n || t.$el), Q(n))) {
      n.forEach((d) => ei(t, { ...e, el: d }, i));
      return;
    }
    !n ||
      (u && !u.call(t)) ||
      t._events.push(
        k(n, s, l ? (B(l) ? l : l.call(t)) : null, B(o) ? t[o] : o.bind(t), {
          passive: a,
          capture: r,
          self: h,
        })
      );
  }
  function ir(t, e) {
    return t.every((i) => !i || !Ot(i, e));
  }
  function Zi(t, e) {
    return t === Boolean
      ? Si(e)
      : t === Number
      ? Ct(e)
      : t === "list"
      ? sr(e)
      : t
      ? t(e)
      : e;
  }
  function sr(t) {
    return Q(t)
      ? t
      : B(t)
      ? t.split(/,(?![^(]*\))/).map((e) => (Mt(e) ? Ct(e) : Si(e.trim())))
      : [t];
  }
  function nr(t, e) {
    let { data: i = {} } = t,
      { args: s = [], props: n = {} } = e;
    Q(i) &&
      (i = i
        .slice(0, s.length)
        .reduce((o, r, a) => (Tt(r) ? xt(o, r) : (o[s[a]] = r), o), {}));
    for (const o in i) j(i[o]) ? delete i[o] : n[o] && (i[o] = Zi(n[o], i[o]));
    return i;
  }
  function or(t) {
    const { el: e } = t.$options,
      i = new MutationObserver(() => t._callWatches());
    return i.observe(e, { childList: !0, subtree: !0 }), i;
  }
  function rr(t) {
    const { $name: e, $options: i, $props: s } = t,
      { attrs: n, props: o, el: r } = i;
    if (!o || n === !1) return;
    const a = Q(n) ? n : Object.keys(o),
      l = a.map((h) => Bt(h)).concat(e),
      u = new MutationObserver((h) => {
        const d = Gs(i, e);
        h.some((f) => {
          let { attributeName: w } = f;
          const A = w.replace("data-", "");
          return (A === e ? a : [Xt(A), Xt(w)]).some(
            (P) => !j(d[P]) && d[P] !== s[P]
          );
        }) && t.$reset();
      });
    return (
      u.observe(r, {
        attributes: !0,
        attributeFilter: l.concat(l.map((h) => "data-" + h)),
      }),
      u
    );
  }
  function ar(t) {
    const e = t.data;
    (t.prototype.$create = function (s, n, o) {
      return t[s](n, o);
    }),
      (t.prototype.$mount = function (s) {
        const { name: n } = this.$options;
        s[e] || (s[e] = {}),
          !s[e][n] &&
            ((s[e][n] = this),
            (this.$el = this.$options.el = this.$options.el || s),
            _(s, document) && this._callConnected());
      }),
      (t.prototype.$reset = function () {
        this._callDisconnected(), this._callConnected();
      }),
      (t.prototype.$destroy = function (s) {
        s === void 0 && (s = !1);
        const { el: n, name: o } = this.$options;
        n && this._callDisconnected(),
          this._callHook("destroy"),
          n != null &&
            n[e] &&
            (delete n[e][o], fe(n[e]) || delete n[e], s && ut(this.$el));
      }),
      (t.prototype.$emit = function (s) {
        this._callUpdate(s);
      }),
      (t.prototype.$update = function (s, n) {
        s === void 0 && (s = this.$el), t.update(s, n);
      }),
      (t.prototype.$getComponent = t.getComponent);
    const i = rt((s) => t.prefix + Bt(s));
    Object.defineProperties(t.prototype, {
      $container: Object.getOwnPropertyDescriptor(t, "container"),
      $name: {
        get() {
          return i(this.$options.name);
        },
      },
    });
  }
  function lr(t) {
    const e = t.data,
      i = {};
    (t.component = function (s, n) {
      const o = Bt(s);
      if (((s = Xt(o)), !n)) return Tt(i[s]) && (i[s] = t.extend(i[s])), i[s];
      t[s] = function (a, l) {
        const u = t.component(s);
        return u.options.functional
          ? new u({ data: Tt(a) ? a : [...arguments] })
          : a
          ? D(a).map(h)[0]
          : h();
        function h(d) {
          const f = t.getComponent(d, s);
          if (f)
            if (l) f.$destroy();
            else return f;
          return new u({ el: d, data: l });
        }
      };
      const r = Tt(n) ? { ...n } : n.options;
      return (
        (r.name = s),
        r.install == null || r.install(t, r, s),
        t._initialized &&
          !r.functional &&
          requestAnimationFrame(() =>
            t[s]("[uk-" + o + "],[data-uk-" + o + "]")
          ),
        (i[s] = Tt(n) ? r : n)
      );
    }),
      (t.getComponents = (s) => (s == null ? void 0 : s[e]) || {}),
      (t.getComponent = (s, n) => t.getComponents(s)[n]),
      (t.connect = (s) => {
        if (s[e]) for (const n in s[e]) s[e][n]._callConnected();
        for (const n of s.attributes) {
          const o = Js(n.name);
          o && o in i && t[o](s);
        }
      }),
      (t.disconnect = (s) => {
        for (const n in s[e]) s[e][n]._callDisconnected();
      });
  }
  const Js = rt((t) =>
      et(t, "uk-") || et(t, "data-uk-")
        ? Xt(t.replace("data-uk-", "").replace("uk-", ""))
        : !1
    ),
    st = function (t) {
      this._init(t);
    };
  (st.util = Zo),
    (st.data = "__uikit__"),
    (st.prefix = "uk-"),
    (st.options = {}),
    (st.version = "3.15.6"),
    Qo(st),
    Uo(st),
    tr(st),
    lr(st),
    ar(st);
  function hr(t) {
    const { connect: e, disconnect: i } = t;
    if (!Wt || !window.MutationObserver) return;
    requestAnimationFrame(function () {
      document.body && vt(document.body, e),
        new MutationObserver((o) => o.forEach(s)).observe(document, {
          childList: !0,
          subtree: !0,
        }),
        new MutationObserver((o) => o.forEach(n)).observe(document, {
          attributes: !0,
          subtree: !0,
        }),
        (t._initialized = !0);
    });
    function s(o) {
      let { addedNodes: r, removedNodes: a } = o;
      for (const l of r) vt(l, e);
      for (const l of a) vt(l, i);
    }
    function n(o) {
      var r;
      let { target: a, attributeName: l } = o;
      const u = Js(l);
      if (!(!u || !(u in t))) {
        if (It(a, l)) {
          t[u](a);
          return;
        }
        (r = t.getComponent(a, u)) == null || r.$destroy();
      }
    }
  }
  var nt = {
      connected() {
        !C(this.$el, this.$name) && b(this.$el, this.$name);
      },
    },
    Te = {
      data: { preload: 5 },
      methods: {
        lazyload(t, e) {
          t === void 0 && (t = this.$el),
            e === void 0 && (e = this.$el),
            this.registerObserver(
              re(t, (i, s) => {
                for (const n of y(mt(e) ? e() : e))
                  D('[loading="lazy"]', n)
                    .slice(0, this.preload - 1)
                    .forEach((o) => ge(o, "loading"));
                for (const n of i
                  .filter((o) => {
                    let { isIntersecting: r } = o;
                    return r;
                  })
                  .map((o) => {
                    let { target: r } = o;
                    return r;
                  }))
                  s.unobserve(n);
              })
            );
        },
      },
    },
    Et = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String,
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        velocity: 0.2,
        origin: !1,
        transition: "ease",
        clsEnter: "uk-togglabe-enter",
        clsLeave: "uk-togglabe-leave",
      },
      computed: {
        hasAnimation(t) {
          let { animation: e } = t;
          return !!e[0];
        },
        hasTransition(t) {
          let { animation: e } = t;
          return ["slide", "reveal"].some((i) => et(e[0], i));
        },
      },
      methods: {
        toggleElement(t, e, i) {
          return new Promise((s) =>
            Promise.all(
              y(t).map((n) => {
                const o = Ne(e) ? e : !this.isToggled(n);
                if (!g(n, "before" + (o ? "show" : "hide"), [this]))
                  return Promise.reject();
                const r = (
                    mt(i)
                      ? i
                      : i === !1 || !this.hasAnimation
                      ? cr
                      : this.hasTransition
                      ? ur
                      : dr
                  )(n, o, this),
                  a = o ? this.clsEnter : this.clsLeave;
                b(n, a), g(n, o ? "show" : "hide", [this]);
                const l = () => {
                  O(n, a), g(n, o ? "shown" : "hidden", [this]);
                };
                return r ? r.then(l, () => (O(n, a), Promise.reject())) : l();
              })
            ).then(s, T)
          );
        },
        isToggled(t) {
          return (
            t === void 0 && (t = this.$el),
            ([t] = y(t)),
            C(t, this.clsEnter)
              ? !0
              : C(t, this.clsLeave)
              ? !1
              : this.cls
              ? C(t, this.cls.split(" ")[0])
              : q(t)
          );
        },
        _toggle(t, e) {
          if (!t) return;
          e = Boolean(e);
          let i;
          this.cls
            ? ((i = p(this.cls, " ") || e !== C(t, this.cls)),
              i && F(t, this.cls, p(this.cls, " ") ? void 0 : e))
            : ((i = e === t.hidden), i && (t.hidden = !e)),
            D("[autofocus]", t).some((s) =>
              q(s) ? s.focus() || !0 : s.blur()
            ),
            i && g(t, "toggled", [e, this]);
        },
      },
    };
  function cr(t, e, i) {
    let { _toggle: s } = i;
    return ft.cancel(t), S.cancel(t), s(t, e);
  }
  async function ur(t, e, i) {
    var s;
    let {
      animation: n,
      duration: o,
      velocity: r,
      transition: a,
      _toggle: l,
    } = i;
    const [u = "reveal", h = "top"] =
        ((s = n[0]) == null ? void 0 : s.split("-")) || [],
      d = [
        ["left", "right"],
        ["top", "bottom"],
      ],
      f = d[p(d[0], h) ? 0 : 1],
      w = f[1] === h,
      P = ["width", "height"][d.indexOf(f)],
      W = "margin-" + f[0],
      V = "margin-" + h;
    let _t = x(t)[P];
    const ds = S.inProgress(t);
    await S.cancel(t), e && l(t, !0);
    const Dl = Object.fromEntries(
        [
          "padding",
          "border",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "overflowY",
          "overflowX",
          W,
          V,
        ].map((co) => [co, t.style[co]])
      ),
      Me = x(t),
      fs = m(c(t, W)),
      ao = m(c(t, V)),
      Vt = Me[P] + ao;
    !ds && !e && (_t += ao);
    const [xi] = Li(t, "<div>");
    c(xi, {
      boxSizing: "border-box",
      height: Me.height,
      width: Me.width,
      ...c(t, [
        "overflow",
        "padding",
        "borderTop",
        "borderRight",
        "borderBottom",
        "borderLeft",
        "borderImage",
        V,
      ]),
    }),
      c(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [V]: 0,
        width: Me.width,
        height: Me.height,
        overflow: "hidden",
        [P]: _t,
      });
    const lo = _t / Vt;
    o = (r * Vt + o) * (e ? 1 - lo : lo);
    const ho = { [P]: e ? Vt : 0 };
    w && (c(t, W, Vt - _t + fs), (ho[W] = e ? fs : Vt + fs)),
      !w ^ (u === "reveal") &&
        (c(xi, W, -Vt + _t), S.start(xi, { [W]: e ? 0 : -Vt }, o, a));
    try {
      await S.start(t, ho, o, a);
    } finally {
      c(t, Dl), $e(xi.firstChild), e || l(t, !1);
    }
  }
  function dr(t, e, i) {
    ft.cancel(t);
    const { animation: s, duration: n, _toggle: o } = i;
    return e
      ? (o(t, !0), ft.in(t, s[0], n, i.origin))
      : ft.out(t, s[1] || s[0], n, i.origin).then(() => o(t, !1));
  }
  var Ks = {
    mixins: [nt, Te, Et],
    props: {
      animation: Boolean,
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      offset: Number,
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
      offset: 0,
    },
    computed: {
      items: {
        get(t, e) {
          let { targets: i } = t;
          return D(i, e);
        },
        watch(t, e) {
          if (e || C(t, this.clsOpen)) return;
          const i =
            (this.active !== !1 && t[Number(this.active)]) ||
            (!this.collapsible && t[0]);
          i && this.toggle(i, !1);
        },
        immediate: !0,
      },
      toggles(t) {
        let { toggle: e } = t;
        return this.items.map((i) => v(e, i));
      },
      contents: {
        get(t) {
          let { content: e } = t;
          return this.items.map((i) => v(e, i));
        },
        watch(t) {
          for (const e of t)
            ii(
              e,
              !C(
                this.items.find((i) => _(e, i)),
                this.clsOpen
              )
            );
        },
        immediate: !0,
      },
    },
    connected() {
      this.lazyload();
    },
    events: [
      {
        name: "click",
        delegate() {
          return this.targets + " " + this.$props.toggle;
        },
        handler(t) {
          t.preventDefault(), this.toggle(ee(this.toggles, t.current));
        },
      },
    ],
    methods: {
      toggle(t, e) {
        let i = [this.items[Ut(t, this.items)]];
        const s = ve(this.items, "." + this.clsOpen);
        if (
          (!this.multiple && !p(s, i[0]) && (i = i.concat(s)),
          !(
            !this.collapsible &&
            s.length < 2 &&
            !ve(i, ":not(." + this.clsOpen + ")").length
          ))
        )
          for (const n of i)
            this.toggleElement(n, !C(n, this.clsOpen), (o, r) => {
              if (
                (F(o, this.clsOpen, r),
                $(v(this.$props.toggle, o), "aria-expanded", r),
                e === !1 || !this.animation)
              ) {
                ii(v(this.content, o), !r);
                return;
              }
              return fr(o, r, this).then(() => {
                if (r) {
                  const a = v(this.$props.toggle, o);
                  requestAnimationFrame(() => {
                    Ue(a) || Gi(a, { offset: this.offset });
                  });
                }
              }, T);
            });
      },
    },
  };
  function ii(t, e) {
    t && (t.hidden = e);
  }
  async function fr(t, e, i) {
    var s;
    let { content: n, duration: o, velocity: r, transition: a } = i;
    (n = ((s = t._wrapper) == null ? void 0 : s.firstElementChild) || v(n, t)),
      t._wrapper || (t._wrapper = Xe(n, "<div>"));
    const l = t._wrapper;
    c(l, "overflow", "hidden");
    const u = m(c(l, "height"));
    await S.cancel(l), ii(n, !1);
    const h =
        m(c(n, "height")) + m(c(n, "marginTop")) + m(c(n, "marginBottom")),
      d = u / h;
    (o = (r * h + o) * (e ? 1 - d : d)),
      c(l, "height", u),
      await S.start(l, { height: e ? h : 0 }, o, a),
      $e(n),
      delete t._wrapper,
      e || ii(n, !0);
  }
  var pr = {
    mixins: [nt, Et],
    args: "animation",
    props: { animation: Boolean, close: String },
    data: { animation: !0, selClose: ".uk-alert-close", duration: 150 },
    events: {
      name: "click",
      delegate() {
        return this.selClose;
      },
      handler(t) {
        t.preventDefault(), this.close();
      },
    },
    methods: {
      async close() {
        await this.toggleElement(this.$el, !1, gr), this.$destroy(!0);
      },
    },
  };
  function gr(t, e, i) {
    let { duration: s, transition: n, velocity: o } = i;
    const r = m(c(t, "height"));
    return (
      c(t, "height", r),
      S.start(
        t,
        {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0,
        },
        o * r + s,
        n
      )
    );
  }
  var Zs = {
      args: "autoplay",
      props: { automute: Boolean, autoplay: Boolean },
      data: { automute: !1, autoplay: !0 },
      connected() {
        (this.inView = this.autoplay === "inview"),
          this.inView &&
            !It(this.$el, "preload") &&
            (this.$el.preload = "none"),
          pt(this.$el, "iframe") &&
            !It(this.$el, "allow") &&
            (this.$el.allow = "autoplay"),
          this.automute && Ds(this.$el),
          this.registerObserver(re(this.$el, () => this.$emit(), {}, !1));
      },
      update: {
        read() {
          return Ns(this.$el)
            ? {
                visible: q(this.$el) && c(this.$el, "visibility") !== "hidden",
                inView: this.inView && Ue(this.$el),
              }
            : !1;
        },
        write(t) {
          let { visible: e, inView: i } = t;
          !e || (this.inView && !i)
            ? Ms(this.$el)
            : (this.autoplay === !0 || (this.inView && i)) && Bs(this.$el);
        },
      },
    },
    wt = {
      connected() {
        var t;
        this.registerObserver(
          Ke(
            ((t = this.$options.resizeTargets) == null
              ? void 0
              : t.call(this)) || this.$el,
            () => this.$emit("resize")
          )
        );
      },
    },
    mr = {
      mixins: [wt, Zs],
      props: { width: Number, height: Number },
      data: { automute: !0 },
      events: {
        "load loadedmetadata"() {
          this.$emit("resize");
        },
      },
      resizeTargets() {
        return [this.$el, Qs(this.$el) || E(this.$el)];
      },
      update: {
        read() {
          const { ratio: t, cover: e } = Fe,
            { $el: i, width: s, height: n } = this;
          let o = { width: s, height: n };
          if (!o.width || !o.height) {
            const u = {
              width: i.naturalWidth || i.videoWidth || i.clientWidth,
              height: i.naturalHeight || i.videoHeight || i.clientHeight,
            };
            o.width
              ? (o = t(u, "width", o.width))
              : n
              ? (o = t(u, "height", o.height))
              : (o = u);
          }
          const { offsetHeight: r, offsetWidth: a } = Qs(i) || E(i),
            l = e(o, {
              width: a + (a % 2 ? 1 : 0),
              height: r + (r % 2 ? 1 : 0),
            });
          return !l.width || !l.height ? !1 : l;
        },
        write(t) {
          let { height: e, width: i } = t;
          c(this.$el, { height: e, width: i });
        },
        events: ["resize"],
      },
    };
  function Qs(t) {
    for (; (t = E(t)); ) if (c(t, "position") !== "static") return t;
  }
  var le = {
      props: { container: Boolean },
      data: { container: !0 },
      computed: {
        container(t) {
          let { container: e } = t;
          return (e === !0 && this.$container) || (e && v(e));
        },
      },
    },
    Us = {
      props: {
        pos: String,
        offset: null,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean,
      },
      data: {
        pos: "bottom-" + (X ? "right" : "left"),
        offset: !1,
        flip: !0,
        shift: !0,
        inset: !1,
      },
      connected() {
        (this.pos = this.$props.pos.split("-").concat("center").slice(0, 2)),
          ([this.dir, this.align] = this.pos),
          (this.axis = p(["top", "bottom"], this.dir) ? "y" : "x");
      },
      methods: {
        positionAt(t, e, i) {
          let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const n = [this.flip && "flip", this.shift && "shift"],
            o = {
              element: [this.inset ? this.dir : qe(this.dir), this.align],
              target: [this.dir, this.align],
            };
          if (this.axis === "y") {
            for (const h in o) o[h].reverse();
            s.reverse(), n.reverse();
          }
          const [r] = tt(t, /auto|scroll/),
            { scrollTop: a, scrollLeft: l } = r,
            u = x(t);
          c(t, { top: -u.height, left: -u.width }),
            Ws(t, e, {
              attach: o,
              offset: s,
              boundary: i,
              placement: n,
              viewportOffset: this.getViewportOffset(t),
            }),
            (r.scrollTop = a),
            (r.scrollLeft = l);
        },
        getPositionOffset(t) {
          return (
            K(
              this.offset === !1 ? c(t, "--uk-position-offset") : this.offset,
              this.axis === "x" ? "width" : "height",
              t
            ) *
            (p(["left", "top"], this.dir) ? -1 : 1) *
            (this.inset ? -1 : 1)
          );
        },
        getShiftOffset(t) {
          return this.align === "center"
            ? 0
            : K(
                c(t, "--uk-position-shift-offset"),
                this.axis === "y" ? "width" : "height",
                t
              ) * (p(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return K(c(t, "--uk-position-viewport-offset"));
        },
      },
    },
    vr = {
      beforeConnect() {
        this._style = $(this.$el, "style");
      },
      disconnected() {
        $(this.$el, "style", this._style);
      },
    };
  const ot = [];
  var Qi = {
    mixins: [nt, le, Et],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean,
    },
    data: { cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1 },
    computed: {
      panel(t, e) {
        let { selPanel: i } = t;
        return v(i, e);
      },
      transitionElement() {
        return this.panel;
      },
      bgClose(t) {
        let { bgClose: e } = t;
        return e && this.panel;
      },
    },
    beforeDisconnect() {
      p(ot, this) && this.toggleElement(this.$el, !1, !1);
    },
    events: [
      {
        name: "click",
        delegate() {
          return this.selClose;
        },
        handler(t) {
          t.preventDefault(), this.hide();
        },
      },
      {
        name: "click",
        delegate() {
          return 'a[href*="#"]';
        },
        handler(t) {
          let { current: e, defaultPrevented: i } = t;
          const { hash: s } = e;
          !i &&
            s &&
            ts(e) &&
            !_(s, this.$el) &&
            v(s, document.body) &&
            this.hide();
        },
      },
      {
        name: "toggle",
        self: !0,
        handler(t) {
          t.defaultPrevented ||
            (t.preventDefault(),
            this.isToggled() === p(ot, this) && this.toggle());
        },
      },
      {
        name: "beforeshow",
        self: !0,
        handler(t) {
          if (p(ot, this)) return !1;
          !this.stack && ot.length
            ? (Promise.all(ot.map((e) => e.hide())).then(this.show),
              t.preventDefault())
            : ot.push(this);
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          N(
            this.$el,
            "hide",
            k(document, "focusin", (t) => {
              Qt(ot) === this && !_(t.target, this.$el) && this.$el.focus();
            })
          ),
            this.overlay &&
              (N(this.$el, "hidden", en(this.$el), { self: !0 }),
              N(this.$el, "hidden", sn(), { self: !0 })),
            this.stack &&
              c(this.$el, "zIndex", m(c(this.$el, "zIndex")) + ot.length),
            b(document.documentElement, this.clsPage),
            this.bgClose &&
              N(
                this.$el,
                "hide",
                k(document, gt, (t) => {
                  let { target: e } = t;
                  Qt(ot) !== this ||
                    (this.overlay && !_(e, this.$el)) ||
                    _(e, this.panel) ||
                    N(
                      document,
                      Pt + " " + Je + " scroll",
                      (i) => {
                        let { defaultPrevented: s, type: n, target: o } = i;
                        !s && n === Pt && e === o && this.hide();
                      },
                      !0
                    );
                }),
                { self: !0 }
              ),
            this.escClose &&
              N(
                this.$el,
                "hide",
                k(document, "keydown", (t) => {
                  t.keyCode === 27 && Qt(ot) === this && this.hide();
                }),
                { self: !0 }
              );
        },
      },
      {
        name: "shown",
        self: !0,
        handler() {
          je(this.$el) || $(this.$el, "tabindex", "-1"),
            v(":focus", this.$el) || this.$el.focus();
        },
      },
      {
        name: "hidden",
        self: !0,
        handler() {
          p(ot, this) && ot.splice(ot.indexOf(this), 1),
            c(this.$el, "zIndex", ""),
            ot.some((t) => t.clsPage === this.clsPage) ||
              O(document.documentElement, this.clsPage);
        },
      },
    ],
    methods: {
      toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show() {
        return this.container && E(this.$el) !== this.container
          ? (L(this.container, this.$el),
            new Promise((t) =>
              requestAnimationFrame(() => this.show().then(t))
            ))
          : this.toggleElement(this.$el, !0, tn);
      },
      hide() {
        return this.toggleElement(this.$el, !1, tn);
      },
    },
  };
  function tn(t, e, i) {
    let { transitionElement: s, _toggle: n } = i;
    return new Promise((o, r) =>
      N(t, "show hide", () => {
        t._reject == null || t._reject(), (t._reject = r), n(t, e);
        const a = N(
            s,
            "transitionstart",
            () => {
              N(s, "transitionend transitioncancel", o, { self: !0 }),
                clearTimeout(l);
            },
            { self: !0 }
          ),
          l = setTimeout(() => {
            a(), o();
          }, wr(c(s, "transitionDuration")));
      })
    ).then(() => delete t._reject);
  }
  function wr(t) {
    return t ? (Gt(t, "ms") ? m(t) : m(t) * 1e3) : 0;
  }
  function en(t) {
    if (CSS.supports("overscroll-behavior", "contain")) {
      const s = br(t, (n) => /auto|scroll/.test(c(n, "overflow")));
      return (
        c(s, "overscrollBehavior", "contain"),
        () => c(s, "overscrollBehavior", "")
      );
    }
    let e;
    const i = [
      k(
        t,
        "touchstart",
        (s) => {
          let { targetTouches: n } = s;
          n.length === 1 && (e = n[0].clientY);
        },
        { passive: !0 }
      ),
      k(
        t,
        "touchmove",
        (s) => {
          if (s.targetTouches.length !== 1) return;
          let [n] = tt(s.target, /auto|scroll/);
          _(n, t) || (n = t);
          const o = s.targetTouches[0].clientY - e,
            { scrollTop: r, scrollHeight: a, clientHeight: l } = n;
          (l >= a || (r === 0 && o > 0) || (a - r <= l && o < 0)) &&
            s.cancelable &&
            s.preventDefault();
        },
        { passive: !1 }
      ),
    ];
    return () => i.forEach((s) => s());
  }
  let Ui;
  function sn() {
    if (Ui) return T;
    Ui = !0;
    const { scrollingElement: t } = document;
    return (
      c(t, {
        overflowY: "hidden",
        touchAction: "none",
        paddingRight: ye(window) - t.clientWidth,
      }),
      () => {
        (Ui = !1), c(t, { overflowY: "", touchAction: "", paddingRight: "" });
      }
    );
  }
  function br(t, e) {
    const i = [];
    return (
      vt(t, (s) => {
        e(s) && i.push(s);
      }),
      i
    );
  }
  function ts(t) {
    return ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
  }
  let Y;
  var nn = {
    mixins: [le, Te, Us, vr, Et],
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
      bgScroll: Boolean,
    },
    data: {
      mode: ["click", "hover"],
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
      animation: ["uk-animation-fade"],
      cls: "uk-open",
      container: !1,
    },
    computed: {
      boundary(t, e) {
        let { boundary: i, boundaryX: s, boundaryY: n } = t;
        return [ct(s || i, e) || window, ct(n || i, e) || window];
      },
      target(t, e) {
        let { target: i, targetX: s, targetY: n } = t;
        return (
          (s = s || i || this.targetEl),
          (n = n || i || this.targetEl),
          [s === !0 ? window : ct(s, e), n === !0 ? window : ct(n, e)]
        );
      },
    },
    created() {
      this.tracker = new Ri();
    },
    beforeConnect() {
      this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
    },
    connected() {
      b(this.$el, this.clsDrop),
        this.toggle &&
          !this.targetEl &&
          ((this.targetEl = this.$create("toggle", ct(this.toggle, this.$el), {
            target: this.$el,
            mode: this.mode,
          }).$el),
          $(this.targetEl, "aria-haspopup", !0),
          this.lazyload(this.targetEl));
    },
    disconnected() {
      this.isActive() && (this.hide(!1), (Y = null));
    },
    events: [
      {
        name: "click",
        delegate() {
          return "." + this.clsDrop + "-close";
        },
        handler(t) {
          t.preventDefault(), this.hide(!1);
        },
      },
      {
        name: "click",
        delegate() {
          return 'a[href*="#"]';
        },
        handler(t) {
          let { defaultPrevented: e, current: i } = t;
          const { hash: s } = i;
          !e && s && ts(i) && !_(s, this.$el) && this.hide(!1);
        },
      },
      {
        name: "beforescroll",
        handler() {
          this.hide(!1);
        },
      },
      {
        name: "toggle",
        self: !0,
        handler(t, e) {
          t.preventDefault(),
            this.isToggled()
              ? this.hide(!1)
              : this.show(e == null ? void 0 : e.$el, !1);
        },
      },
      {
        name: "toggleshow",
        self: !0,
        handler(t, e) {
          t.preventDefault(), this.show(e == null ? void 0 : e.$el);
        },
      },
      {
        name: "togglehide",
        self: !0,
        handler(t) {
          t.preventDefault(), H(this.$el, ":focus,:hover") || this.hide();
        },
      },
      {
        name: Rt + " focusin",
        filter() {
          return p(this.mode, "hover");
        },
        handler(t) {
          $t(t) || this.clearTimers();
        },
      },
      {
        name: oe + " focusout",
        filter() {
          return p(this.mode, "hover");
        },
        handler(t) {
          !$t(t) && t.relatedTarget && this.hide();
        },
      },
      {
        name: "toggled",
        self: !0,
        handler(t, e) {
          !e || (this.clearTimers(), this.position());
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          (Y = this), this.tracker.init();
          const t = () => this.$emit(),
            e = [
              k(document, gt, (i) => {
                let { target: s } = i;
                return (
                  !_(s, this.$el) &&
                  N(
                    document,
                    Pt + " " + Je + " scroll",
                    (n) => {
                      let { defaultPrevented: o, type: r, target: a } = n;
                      !o &&
                        r === Pt &&
                        s === a &&
                        !(this.targetEl && _(s, this.targetEl)) &&
                        this.hide(!1);
                    },
                    !0
                  )
                );
              }),
              k(document, "keydown", (i) => {
                i.keyCode === 27 && this.hide(!1);
              }),
              k(window, "resize", t),
              (() => {
                const i = Ke(tt(this.$el).concat(this.target), t);
                return () => i.disconnect();
              })(),
              ...(this.autoUpdate
                ? [k([document, tt(this.$el)], "scroll", t, { passive: !0 })]
                : []),
              ...(this.bgScroll ? [] : [en(this.$el), sn()]),
            ];
          N(this.$el, "hide", () => e.forEach((i) => i()), { self: !0 });
        },
      },
      {
        name: "beforehide",
        self: !0,
        handler() {
          this.clearTimers();
        },
      },
      {
        name: "hide",
        handler(t) {
          let { target: e } = t;
          if (this.$el !== e) {
            Y = Y === null && _(e, this.$el) && this.isToggled() ? this : Y;
            return;
          }
          (Y = this.isActive() ? null : Y), this.tracker.cancel();
        },
      },
    ],
    update: {
      write() {
        this.isToggled() && !C(this.$el, this.clsEnter) && this.position();
      },
    },
    methods: {
      show(t, e) {
        if (
          (t === void 0 && (t = this.targetEl),
          e === void 0 && (e = !0),
          this.isToggled() &&
            t &&
            this.targetEl &&
            t !== this.targetEl &&
            this.hide(!1, !1),
          (this.targetEl = t),
          this.clearTimers(),
          !this.isActive())
        ) {
          if (Y) {
            if (e && Y.isDelaying) {
              this.showTimer = setTimeout(
                () => H(t, ":hover") && this.show(),
                10
              );
              return;
            }
            let i;
            for (; Y && i !== Y && !_(this.$el, Y.$el); )
              (i = Y), Y.hide(!1, !1);
          }
          this.container &&
            E(this.$el) !== this.container &&
            L(this.container, this.$el),
            (this.showTimer = setTimeout(
              () => this.toggleElement(this.$el, !0),
              (e && this.delayShow) || 0
            ));
        }
      },
      hide(t, e) {
        t === void 0 && (t = !0), e === void 0 && (e = !0);
        const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
        this.clearTimers(),
          (this.isDelaying = xr(this.$el).some((s) => this.tracker.movesTo(s))),
          t && this.isDelaying
            ? (this.hideTimer = setTimeout(this.hide, 50))
            : t && this.delayHide
            ? (this.hideTimer = setTimeout(i, this.delayHide))
            : i();
      },
      clearTimers() {
        clearTimeout(this.showTimer),
          clearTimeout(this.hideTimer),
          (this.showTimer = null),
          (this.hideTimer = null),
          (this.isDelaying = !1);
      },
      isActive() {
        return Y === this;
      },
      position() {
        O(this.$el, this.clsDrop + "-stack"),
          $(this.$el, "style", this._style),
          (this.$el.hidden = !0);
        const t = this.target.map((n) => lt(tt(n)[0])),
          e = this.getViewportOffset(this.$el),
          i = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]],
          ];
        for (const [n, [o, r]] of i)
          this.axis !== o &&
            p([o, !0], this.stretch) &&
            c(this.$el, {
              [r]: Math.min(I(this.boundary[n])[r], t[n][r] - 2 * e),
              ["overflow-" + o]: "auto",
            });
        const s = t[0].width - 2 * e;
        this.$el.offsetWidth > s && b(this.$el, this.clsDrop + "-stack"),
          c(this.$el, "maxWidth", s),
          (this.$el.hidden = !1),
          this.positionAt(this.$el, this.target, this.boundary);
        for (const [n, [o, r, a, l]] of i)
          if (this.axis === o && p([o, !0], this.stretch)) {
            const u = Math.abs(this.getPositionOffset(this.$el)),
              h = I(this.target[n]),
              d = I(this.$el);
            c(this.$el, {
              [r]:
                (h[a] > d[a]
                  ? h[a] - Math.max(I(this.boundary[n])[a], t[n][a] + e)
                  : Math.min(I(this.boundary[n])[l], t[n][l] - e) - h[l]) - u,
              ["overflow-" + o]: "auto",
            }),
              this.positionAt(this.$el, this.target, this.boundary);
          }
      },
    },
  };
  function xr(t) {
    const e = [];
    return vt(t, (i) => c(i, "position") !== "static" && e.push(i)), e;
  }
  var yr = {
      mixins: [nt],
      args: "target",
      props: { target: Boolean },
      data: { target: !1 },
      computed: {
        input(t, e) {
          return v(me, e);
        },
        state() {
          return this.input.nextElementSibling;
        },
        target(t, e) {
          let { target: i } = t;
          return (
            i &&
            ((i === !0 &&
              E(this.input) === e &&
              this.input.nextElementSibling) ||
              v(i, e))
          );
        },
      },
      update() {
        var t;
        const { target: e, input: i } = this;
        if (!e) return;
        let s;
        const n = Pi(e) ? "value" : "textContent",
          o = e[n],
          r =
            (t = i.files) != null && t[0]
              ? i.files[0].name
              : H(i, "select") &&
                (s = D("option", i).filter((a) => a.selected)[0])
              ? s.textContent
              : i.value;
        o !== r && (e[n] = r);
      },
      events: [
        {
          name: "change",
          handler() {
            this.$emit();
          },
        },
        {
          name: "reset",
          el() {
            return it(this.$el, "form");
          },
          handler() {
            this.$emit();
          },
        },
      ],
    },
    on = {
      mixins: [wt],
      props: { margin: String, firstColumn: Boolean },
      data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
      resizeTargets() {
        return [this.$el, ...yi(this.$el.children)];
      },
      connected() {
        this.registerObserver(
          qi(this.$el, () => this.$reset(), { childList: !0 })
        );
      },
      update: {
        read() {
          const t = es(this.$el.children);
          return { rows: t, columns: $r(t) };
        },
        write(t) {
          let { columns: e, rows: i } = t;
          for (const s of i)
            for (const n of s)
              F(n, this.margin, i[0] !== s),
                F(n, this.firstColumn, e[0].includes(n));
        },
        events: ["resize"],
      },
    };
  function es(t) {
    return rn(t, "top", "bottom");
  }
  function $r(t) {
    const e = [];
    for (const i of t) {
      const s = rn(i, "left", "right");
      for (let n = 0; n < s.length; n++) e[n] = e[n] ? e[n].concat(s[n]) : s[n];
    }
    return X ? e.reverse() : e;
  }
  function rn(t, e, i) {
    const s = [[]];
    for (const n of t) {
      if (!q(n)) continue;
      let o = si(n);
      for (let r = s.length - 1; r >= 0; r--) {
        const a = s[r];
        if (!a[0]) {
          a.push(n);
          break;
        }
        let l;
        if (
          (a[0].offsetParent === n.offsetParent
            ? (l = si(a[0]))
            : ((o = si(n, !0)), (l = si(a[0], !0))),
          o[e] >= l[i] - 1 && o[e] !== l[e])
        ) {
          s.push([n]);
          break;
        }
        if (o[i] - 1 > l[e] || o[e] === l[e]) {
          a.push(n);
          break;
        }
        if (r === 0) {
          s.unshift([n]);
          break;
        }
      }
    }
    return s;
  }
  function si(t, e) {
    e === void 0 && (e = !1);
    let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o } = t;
    return (
      e && ([i, s] = Ft(t)), { top: i, left: s, bottom: i + n, right: s + o }
    );
  }
  var ni = {
    connected() {
      an(this._uid, () => this.$emit("scroll"));
    },
    disconnected() {
      ln(this._uid);
    },
  };
  const oi = new Map();
  let Ce;
  function an(t, e) {
    (Ce =
      Ce ||
      k(window, "scroll", () => oi.forEach((i) => i()), {
        passive: !0,
        capture: !0,
      })),
      oi.set(t, e);
  }
  function ln(t) {
    oi.delete(t), Ce && !oi.size && (Ce(), (Ce = null));
  }
  var kr = {
    extends: on,
    mixins: [nt],
    name: "grid",
    props: { masonry: Boolean, parallax: Number },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0,
    },
    connected() {
      this.masonry && b(this.$el, "uk-flex-top uk-flex-wrap-top"),
        this.parallax && an(this._uid, () => this.$emit("scroll"));
    },
    disconnected() {
      ln(this._uid);
    },
    update: [
      {
        write(t) {
          let { columns: e } = t;
          F(this.$el, this.clsStack, e.length < 2);
        },
        events: ["resize"],
      },
      {
        read(t) {
          let { columns: e, rows: i } = t;
          if (!e.length || (!this.masonry && !this.parallax) || hn(this.$el))
            return (t.translates = !1), !1;
          let s = !1;
          const n = M(this.$el),
            o = Cr(e),
            r = Tr(n, this.margin) * (i.length - 1),
            a = Math.max(...o) + r;
          this.masonry &&
            ((e = e.map((u) => ze(u, "offsetTop"))), (s = Sr(i, e)));
          let l = Math.abs(this.parallax);
          return (
            l &&
              (l = o.reduce(
                (u, h, d) => Math.max(u, h + r + (d % 2 ? l : l / 8) - a),
                0
              )),
            { padding: l, columns: e, translates: s, height: s ? a : "" }
          );
        },
        write(t) {
          let { height: e, padding: i } = t;
          c(this.$el, "paddingBottom", i || ""),
            e !== !1 && c(this.$el, "height", e);
        },
        events: ["resize"],
      },
      {
        read() {
          return this.parallax && hn(this.$el)
            ? !1
            : {
                scrolled: this.parallax
                  ? Ji(this.$el) * Math.abs(this.parallax)
                  : !1,
              };
        },
        write(t) {
          let { columns: e, scrolled: i, translates: s } = t;
          (i === !1 && !s) ||
            e.forEach((n, o) =>
              n.forEach((r, a) =>
                c(
                  r,
                  "transform",
                  !i && !s
                    ? ""
                    : "translateY(" +
                        ((s && -s[o][a]) + (i ? (o % 2 ? i : i / 8) : 0)) +
                        "px)"
                )
              )
            );
        },
        events: ["scroll", "resize"],
      },
    ],
  };
  function hn(t) {
    return M(t).some((e) => c(e, "position") === "absolute");
  }
  function Sr(t, e) {
    const i = t.map((s) => Math.max(...s.map((n) => n.offsetHeight)));
    return e.map((s) => {
      let n = 0;
      return s.map((o, r) => (n += r ? i[r - 1] - s[r - 1].offsetHeight : 0));
    });
  }
  function Tr(t, e) {
    const [i] = t.filter((s) => C(s, e));
    return m(i ? c(i, "marginTop") : c(t[0], "paddingLeft"));
  }
  function Cr(t) {
    return t.map((e) => e.reduce((i, s) => i + s.offsetHeight, 0));
  }
  var Ir = {
    mixins: [wt],
    args: "target",
    props: { target: String, row: Boolean },
    data: { target: "> *", row: !0 },
    computed: {
      elements: {
        get(t, e) {
          let { target: i } = t;
          return D(i, e);
        },
        watch() {
          this.$reset();
        },
      },
    },
    resizeTargets() {
      return [this.$el, ...this.elements];
    },
    update: {
      read() {
        return {
          rows: (this.row ? es(this.elements) : [this.elements]).map(Ar),
        };
      },
      write(t) {
        let { rows: e } = t;
        for (const { heights: i, elements: s } of e)
          s.forEach((n, o) => c(n, "minHeight", i[o]));
      },
      events: ["resize"],
    },
  };
  function Ar(t) {
    if (t.length < 2) return { heights: [""], elements: t };
    c(t, "minHeight", "");
    let e = t.map(Pr);
    const i = Math.max(...e);
    return {
      heights: t.map((s, n) => (e[n].toFixed(2) === i.toFixed(2) ? "" : i)),
      elements: t,
    };
  }
  function Pr(t) {
    let e = !1;
    q(t) || ((e = t.style.display), c(t, "display", "block", "important"));
    const i = x(t).height - se(t, "height", "content-box");
    return e !== !1 && c(t, "display", e), i;
  }
  var Er = {
      mixins: [wt],
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number,
      },
      data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
      resizeTargets() {
        return [this.$el, ...tt(this.$el, /auto|scroll/)];
      },
      update: {
        read(t) {
          let { minHeight: e } = t;
          if (!q(this.$el)) return !1;
          let i = "";
          const s = se(this.$el, "height", "content-box"),
            { body: n, scrollingElement: o } = document,
            [r] = tt(this.$el, /auto|scroll/),
            { height: a } = lt(r === n ? o : r);
          if (this.expand)
            i = Math.max(a - (x(r).height - x(this.$el).height) - s, 0);
          else {
            const l = o === r || n === r;
            if (((i = "calc(" + (l ? "100vh" : a + "px")), this.offsetTop))
              if (l) {
                const u = Ft(this.$el)[0] - Ft(r)[0];
                i += u > 0 && u < a / 2 ? " - " + u + "px" : "";
              } else i += " - " + c(r, "paddingTop");
            this.offsetBottom === !0
              ? (i += " - " + x(this.$el.nextElementSibling).height + "px")
              : Mt(this.offsetBottom)
              ? (i += " - " + this.offsetBottom + "vh")
              : this.offsetBottom && Gt(this.offsetBottom, "px")
              ? (i += " - " + m(this.offsetBottom) + "px")
              : B(this.offsetBottom) &&
                (i += " - " + x(ct(this.offsetBottom, this.$el)).height + "px"),
              (i += (s ? " - " + s + "px" : "") + ")");
          }
          return { minHeight: i, prev: e };
        },
        write(t) {
          let { minHeight: e } = t;
          c(this.$el, { minHeight: e }),
            this.minHeight &&
              m(c(this.$el, "minHeight")) < this.minHeight &&
              c(this.$el, "minHeight", this.minHeight);
        },
        events: ["resize"],
      },
    },
    cn = {
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
        focusable: Boolean,
        attributes: "list",
      },
      data: {
        ratio: 1,
        include: ["style", "class", "focusable"],
        class: "",
        strokeAnimation: !1,
      },
      beforeConnect() {
        this.class += " uk-svg";
      },
      connected() {
        !this.icon &&
          p(this.src, "#") &&
          ([this.src, this.icon] = this.src.split("#")),
          (this.svg = this.getSvg().then((t) => {
            if (this._connected) {
              const e = Mr(t, this.$el);
              return (
                this.svgEl && e !== this.svgEl && ut(this.svgEl),
                this.applyAttributes(e, t),
                (this.svgEl = e)
              );
            }
          }, T)),
          this.strokeAnimation &&
            this.svg.then((t) => {
              this._connected &&
                (dn(t),
                this.registerObserver(
                  re(t, (e, i) => {
                    dn(t), i.disconnect();
                  })
                ));
            });
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected ||
            (Ai(this.$el) && (this.$el.hidden = !1),
            ut(t),
            (this.svgEl = null));
        }),
          (this.svg = null);
      },
      methods: {
        async getSvg() {
          return pt(this.$el, "img") &&
            !this.$el.complete &&
            this.$el.loading === "lazy"
            ? new Promise((t) => N(this.$el, "load", () => t(this.getSvg())))
            : Or(await _r(this.src), this.icon) ||
                Promise.reject("SVG not found.");
        },
        applyAttributes(t, e) {
          for (const o in this.$options.props)
            p(this.include, o) && o in this && $(t, o, this[o]);
          for (const o in this.attributes) {
            const [r, a] = this.attributes[o].split(":", 2);
            $(t, r, a);
          }
          this.id || ge(t, "id");
          const i = ["width", "height"];
          let s = i.map((o) => this[o]);
          s.some((o) => o) || (s = i.map((o) => $(e, o)));
          const n = $(e, "viewBox");
          n && !s.some((o) => o) && (s = n.split(" ").slice(2)),
            s.forEach((o, r) => $(t, i[r], m(o) * this.ratio || null));
        },
      },
    };
  const _r = rt(async (t) =>
    t
      ? et(t, "data:")
        ? decodeURIComponent(t.split(",")[1])
        : (await fetch(t)).text()
      : Promise.reject()
  );
  function Or(t, e) {
    var i;
    return (
      e && p(t, "<symbol") && (t = Br(t, e) || t),
      (t = v(t.substr(t.indexOf("<svg")))),
      ((i = t) == null ? void 0 : i.hasChildNodes()) && t
    );
  }
  const un = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
    ri = {};
  function Br(t, e) {
    if (!ri[t]) {
      (ri[t] = {}), (un.lastIndex = 0);
      let i;
      for (; (i = un.exec(t)); )
        ri[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
    }
    return ri[t][e];
  }
  function dn(t) {
    const e = fn(t);
    e && t.style.setProperty("--uk-animation-stroke", e);
  }
  function fn(t) {
    return Math.ceil(
      Math.max(
        0,
        ...D("[stroke]", t).map((e) => {
          try {
            return e.getTotalLength();
          } catch {
            return 0;
          }
        })
      )
    );
  }
  function Mr(t, e) {
    if (Ai(e) || pt(e, "canvas")) {
      e.hidden = !0;
      const s = e.nextElementSibling;
      return pn(t, s) ? s : Ye(e, t);
    }
    const i = e.lastElementChild;
    return pn(t, i) ? i : L(e, t);
  }
  function pn(t, e) {
    return pt(t, "svg") && pt(e, "svg") && gn(t) === gn(e);
  }
  function gn(t) {
    return (
      t.innerHTML ||
      new XMLSerializer()
        .serializeToString(t)
        .replace(/<svg.*?>(.*?)<\/svg>/g, "$1")
    ).replace(/\s/g, "");
  }
  var Dr =
      '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
    Nr =
      '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
    zr =
      '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
    Hr =
      '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    Fr =
      '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
    Lr =
      '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    Wr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.uk-navbar-toggle-animate svg > [class*='line-'] {
            transition: 0.2s ease-in-out;
            transition-property: transform, opacity,;
            transform-origin: center;
            opacity: 1;
        }

        .uk-navbar-toggle svg > .line-3 { opacity: 0; }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-3 { opacity: 1; }

        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-2 { transform: rotate(45deg); }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-3 { transform: rotate(-45deg); }

        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-1,
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-4 { opacity: 0; }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-1 { transform: translateY(6px) scaleX(0); }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-4 { transform: translateY(-6px) scaleX(0); }</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>`,
    jr =
      '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
    Rr =
      '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
    qr =
      '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
    Yr =
      '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
    Vr =
      '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
    Xr =
      '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    Gr =
      '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
    Jr =
      '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
    Kr =
      '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
    Zr =
      '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
    Qr =
      '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
    Ur =
      '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
  const ai = {
      spinner: Qr,
      totop: Ur,
      marker: zr,
      "close-icon": Dr,
      "close-large": Nr,
      "nav-parent-icon": Hr,
      "nav-parent-icon-large": Fr,
      "navbar-parent-icon": Lr,
      "navbar-toggle-icon": Wr,
      "overlay-icon": jr,
      "pagination-next": Rr,
      "pagination-previous": qr,
      "search-icon": Yr,
      "search-large": Vr,
      "search-navbar": Xr,
      "slidenav-next": Gr,
      "slidenav-next-large": Jr,
      "slidenav-previous": Kr,
      "slidenav-previous-large": Zr,
    },
    is = {
      install: na,
      extends: cn,
      args: "icon",
      props: ["icon"],
      data: { include: ["focusable"] },
      isIcon: !0,
      beforeConnect() {
        b(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = oa(this.icon);
          if (!t) throw "Icon not found.";
          return t;
        },
      },
    },
    dt = {
      args: !1,
      extends: is,
      data: (t) => ({ icon: Bt(t.constructor.options.name) }),
      beforeConnect() {
        b(this.$el, this.$name);
      },
    },
    ta = {
      extends: dt,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = it(this.$el, ".uk-nav-primary") ? t + "-large" : t;
      },
    },
    mn = {
      extends: dt,
      beforeConnect() {
        b(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = C(this.$el, "uk-slidenav-large") ? t + "-large" : t;
      },
    },
    ea = {
      extends: dt,
      beforeConnect() {
        this.icon =
          C(this.$el, "uk-search-icon") &&
          te(this.$el, ".uk-search-large").length
            ? "search-large"
            : te(this.$el, ".uk-search-navbar").length
            ? "search-navbar"
            : this.$props.icon;
      },
    },
    ia = {
      extends: dt,
      beforeConnect() {
        this.icon =
          "close-" + (C(this.$el, "uk-close-large") ? "large" : "icon");
      },
    },
    sa = {
      extends: dt,
      methods: {
        async getSvg() {
          const t = await is.methods.getSvg.call(this);
          return (
            this.ratio !== 1 &&
              c(v("circle", t), "strokeWidth", 1 / this.ratio),
            t
          );
        },
      },
    },
    li = {};
  function na(t) {
    t.icon.add = (e, i) => {
      const s = B(e) ? { [e]: i } : e;
      yt(s, (n, o) => {
        (ai[o] = n), delete li[o];
      }),
        t._initialized &&
          vt(document.body, (n) =>
            yt(t.getComponents(n), (o) => {
              o.$options.isIcon && o.icon in s && o.$reset();
            })
          );
    };
  }
  function oa(t) {
    return ai[t]
      ? (li[t] || (li[t] = v((ai[ra(t)] || ai[t]).trim())), li[t].cloneNode(!0))
      : null;
  }
  function ra(t) {
    return X ? Ti(Ti(t, "left", "right"), "previous", "next") : t;
  }
  const aa = Wt && "loading" in HTMLImageElement.prototype;
  var la = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      sources: String,
      offsetTop: String,
      offsetLeft: String,
      target: String,
      loading: String,
    },
    data: {
      dataSrc: "",
      sources: !1,
      offsetTop: "50vh",
      offsetLeft: "50vw",
      target: !1,
      loading: "lazy",
    },
    connected() {
      if (this.loading !== "lazy") {
        this.load();
        return;
      }
      const t = [this.$el, ...we(this.$props.target, this.$el)];
      (aa &&
        hi(this.$el) &&
        ((this.$el.loading = "lazy"), ss(this.$el), t.length === 1)) ||
        (fa(this.$el),
        this.registerObserver(
          re(
            t,
            (e, i) => {
              this.load(), i.disconnect();
            },
            {
              rootMargin:
                K(this.offsetTop, "height") +
                "px " +
                K(this.offsetLeft, "width") +
                "px",
            }
          )
        ));
    },
    disconnected() {
      this._data.image && (this._data.image.onload = "");
    },
    methods: {
      load() {
        if (this._data.image) return this._data.image;
        const t = hi(this.$el)
          ? this.$el
          : ca(this.$el, this.dataSrc, this.sources);
        return (
          ge(t, "loading"), ss(this.$el, t.currentSrc), (this._data.image = t)
        );
      },
    },
  };
  function ss(t, e) {
    if (hi(t)) {
      const i = E(t);
      (pa(i) ? M(i) : [t]).forEach((n) => vn(n, n));
    } else e && !p(t.style.backgroundImage, e) && (c(t, "backgroundImage", "url(" + _i(e) + ")"), g(t, zt("load", !1)));
  }
  const ha = ["data-src", "data-srcset", "sizes"];
  function vn(t, e) {
    ha.forEach((i) => {
      const s = at(t, i);
      s && $(e, i.replace(/^(data-)+/, ""), s);
    });
  }
  function ca(t, e, i) {
    const s = new Image();
    return (
      ua(s, i),
      vn(t, s),
      (s.onload = () => {
        ss(t, s.currentSrc);
      }),
      $(s, "src", e),
      s
    );
  }
  function ua(t, e) {
    if (((e = da(e)), e.length)) {
      const i = Lt("<picture>");
      for (const s of e) {
        const n = Lt("<source>");
        $(n, s), L(i, n);
      }
      L(i, t);
    }
  }
  function da(t) {
    if (!t) return [];
    if (et(t, "["))
      try {
        t = JSON.parse(t);
      } catch {
        t = [];
      }
    else t = Se(t);
    return Q(t) || (t = [t]), t.filter((e) => !fe(e));
  }
  function fa(t) {
    hi(t) &&
      !It(t, "src") &&
      $(
        t,
        "src",
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'
      );
  }
  function pa(t) {
    return pt(t, "picture");
  }
  function hi(t) {
    return pt(t, "img");
  }
  var ci = {
    props: { media: Boolean },
    data: { media: !1 },
    connected() {
      const t = ga(this.media, this.$el);
      if (((this.matchMedia = !0), t)) {
        this.mediaObj = window.matchMedia(t);
        const e = () => {
          (this.matchMedia = this.mediaObj.matches),
            g(this.$el, zt("mediachange", !1, !0, [this.mediaObj]));
        };
        (this.offMediaObj = k(this.mediaObj, "change", () => {
          e(), this.$emit("resize");
        })),
          e();
      }
    },
    disconnected() {
      var t;
      (t = this.offMediaObj) == null || t.call(this);
    },
  };
  function ga(t, e) {
    if (B(t)) {
      if (et(t, "@")) t = m(c(e, "--uk-breakpoint-" + t.substr(1)));
      else if (isNaN(t)) return t;
    }
    return t && Mt(t) ? "(min-width: " + t + "px)" : "";
  }
  var ma = {
      mixins: [nt, ci, wt],
      props: { fill: String },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill",
      },
      computed: {
        fill(t) {
          let { fill: e } = t;
          return e || c(this.$el, "--uk-leader-fill-content");
        },
      },
      connected() {
        [this.wrapper] = Li(this.$el, '<span class="' + this.clsWrapper + '">');
      },
      disconnected() {
        $e(this.wrapper.childNodes);
      },
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia,
          };
        },
        write(t) {
          let { width: e, fill: i, hide: s } = t;
          F(this.wrapper, this.clsHide, s),
            $(this.wrapper, this.attrFill, new Array(e).join(i));
        },
        events: ["resize"],
      },
    },
    va = {
      install: wa,
      mixins: [Qi],
      data: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose:
          ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
      },
      events: [
        {
          name: "show",
          self: !0,
          handler() {
            C(this.panel, "uk-margin-auto-vertical")
              ? b(this.$el, "uk-flex")
              : c(this.$el, "display", "block"),
              J(this.$el);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            c(this.$el, "display", ""), O(this.$el, "uk-flex");
          },
        },
      ],
    };
  function wa(t) {
    let { modal: e } = t;
    (e.dialog = function (s, n) {
      const o = e(
        '<div class="uk-modal"> <div class="uk-modal-dialog">' +
          s +
          "</div> </div>",
        n
      );
      return (
        o.show(),
        k(
          o.$el,
          "hidden",
          async () => {
            await Promise.resolve(), o.$destroy(!0);
          },
          { self: !0 }
        ),
        o
      );
    }),
      (e.alert = function (s, n) {
        return i(
          (o) => {
            let { labels: r } = o;
            return (
              '<div class="uk-modal-body">' +
              (B(s) ? s : At(s)) +
              '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
              r.ok +
              "</button> </div>"
            );
          },
          n,
          (o) => o.resolve()
        );
      }),
      (e.confirm = function (s, n) {
        return i(
          (o) => {
            let { labels: r } = o;
            return (
              '<form> <div class="uk-modal-body">' +
              (B(s) ? s : At(s)) +
              '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
              r.cancel +
              '</button> <button class="uk-button uk-button-primary" autofocus>' +
              r.ok +
              "</button> </div> </form>"
            );
          },
          n,
          (o) => o.reject()
        );
      }),
      (e.prompt = function (s, n, o) {
        return i(
          (r) => {
            let { labels: a } = r;
            return (
              '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
              (B(s) ? s : At(s)) +
              '</label> <input class="uk-input" value="' +
              (n || "") +
              '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
              a.cancel +
              '</button> <button class="uk-button uk-button-primary">' +
              a.ok +
              "</button> </div> </form>"
            );
          },
          o,
          (r) => r.resolve(null),
          (r) => v("input", r.$el).value
        );
      }),
      (e.labels = { ok: "Ok", cancel: "Cancel" });
    function i(s, n, o, r) {
      n = { bgClose: !1, escClose: !0, labels: e.labels, ...n };
      const a = e.dialog(s(n), n),
        l = new Le();
      let u = !1;
      return (
        k(a.$el, "submit", "form", (h) => {
          h.preventDefault(),
            l.resolve(r == null ? void 0 : r(a)),
            (u = !0),
            a.hide();
        }),
        k(a.$el, "hide", () => !u && o(l)),
        (l.promise.dialog = a),
        l.promise
      );
    }
  }
  var ba = {
      extends: Ks,
      data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
    },
    xa = {
      mixins: [nt, le],
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
        animateOut: Boolean,
      },
      data: {
        dropdown: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
        align: X ? "right" : "left",
        clsDrop: "uk-navbar-dropdown",
        boundary: !0,
        dropbar: !1,
        dropbarAnchor: !1,
        duration: 200,
        container: !1,
      },
      computed: {
        dropbarAnchor(t, e) {
          let { dropbarAnchor: i } = t;
          return ct(i, e) || e;
        },
        dropbar: {
          get(t) {
            let { dropbar: e } = t;
            return e
              ? ((e =
                  this._dropbar ||
                  ct(e, this.$el) ||
                  v("+ .uk-navbar-dropbar", this.$el)),
                e || (this._dropbar = v("<div></div>")))
              : null;
          },
          watch(t) {
            b(t, "uk-dropbar", "uk-dropbar-top", "uk-navbar-dropbar");
          },
          immediate: !0,
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns: {
          get(t, e) {
            let { clsDrop: i } = t;
            const s = D("." + i, e);
            if (this.dropContainer !== e)
              for (const o of D("." + i, this.dropContainer)) {
                var n;
                const r =
                  (n = this.getDropdown(o)) == null ? void 0 : n.targetEl;
                !p(s, o) && r && _(r, this.$el) && s.push(o);
              }
            return s;
          },
          watch(t) {
            this.$create(
              "drop",
              t.filter((e) => !this.getDropdown(e)),
              {
                ...this.$props,
                flip: !1,
                shift: !0,
                pos: "bottom-" + this.align,
                boundary: this.boundary === !0 ? this.$el : this.boundary,
              }
            );
          },
          immediate: !0,
        },
        toggles: {
          get(t, e) {
            let { dropdown: i } = t;
            return D(i, e);
          },
          watch() {
            const t = C(this.$el, "uk-navbar-justify");
            for (const e of D(
              ".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",
              this.$el
            ))
              c(e, "flexGrow", t ? D(this.dropdown, e).length : "");
          },
          immediate: !0,
        },
      },
      disconnected() {
        this.dropbar && ut(this.dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate() {
            return this.dropdown;
          },
          handler(t) {
            let { current: e } = t;
            const i = this.getActive();
            i &&
              p(i.mode, "hover") &&
              i.targetEl &&
              !_(i.targetEl, e) &&
              !i.isDelaying &&
              i.hide(!1);
          },
        },
        {
          name: "keydown",
          delegate() {
            return this.dropdown;
          },
          handler(t) {
            const { current: e, keyCode: i } = t,
              s = this.getActive();
            i === qt.DOWN &&
              It(e, "aria-expanded") &&
              (t.preventDefault(),
              !s || s.targetEl !== e
                ? (e.click(),
                  N(this.dropContainer, "show", (n) => {
                    let { target: o } = n;
                    return bn(o);
                  }))
                : bn(s.$el)),
              wn(t, this.toggles, s);
          },
        },
        {
          name: "keydown",
          el() {
            return this.dropContainer;
          },
          delegate() {
            return "." + this.clsDrop;
          },
          handler(t) {
            const { current: e, keyCode: i } = t;
            if (!p(this.dropdowns, e)) return;
            const s = this.getActive(),
              n = D(We, e),
              o = bt(n, (a) => H(a, ":focus"));
            if (
              (i === qt.UP && (t.preventDefault(), o > 0 && n[o - 1].focus()),
              i === qt.DOWN &&
                (t.preventDefault(), o < n.length - 1 && n[o + 1].focus()),
              i === qt.ESC)
            ) {
              var r;
              s == null || (r = s.targetEl) == null || r.focus();
            }
            wn(t, this.toggles, s);
          },
        },
        {
          name: "mouseleave",
          el() {
            return this.dropbar;
          },
          filter() {
            return this.dropbar;
          },
          handler() {
            const t = this.getActive();
            t &&
              p(t.mode, "hover") &&
              !this.dropdowns.some((e) => H(e, ":hover")) &&
              t.hide();
          },
        },
        {
          name: "beforeshow",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler(t) {
            let { target: e } = t;
            !this.isDropbarDrop(e) ||
              (this.dropbar.previousElementSibling !== this.dropbarAnchor &&
                Ye(this.dropbarAnchor, this.dropbar),
              b(e, this.clsDrop + "-dropbar"));
          },
        },
        {
          name: "show",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler(t) {
            let { target: e } = t;
            if (!this.isDropbarDrop(e)) return;
            const i = this.getDropdown(e);
            this._observer = Ke([i.$el, ...i.target], () => {
              const s = te(e, "." + this.clsDrop)
                  .concat(e)
                  .map((a) => I(a)),
                n = Math.min(
                  ...s.map((a) => {
                    let { top: l } = a;
                    return l;
                  })
                ),
                o = Math.max(
                  ...s.map((a) => {
                    let { bottom: l } = a;
                    return l;
                  })
                ),
                r = I(this.dropbar);
              c(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)),
                this.transitionTo(o - n + m(c(e, "marginBottom")), e);
            });
          },
        },
        {
          name: "beforehide",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler(t) {
            const e = this.getActive();
            H(this.dropbar, ":hover") &&
              (e == null ? void 0 : e.$el) === t.target &&
              !this.toggles.some((i) => e.targetEl !== i && H(i, ":focus")) &&
              t.preventDefault();
          },
        },
        {
          name: "hide",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler(t) {
            var e;
            let { target: i } = t;
            if (!this.isDropbarDrop(i)) return;
            (e = this._observer) == null || e.disconnect();
            const s = this.getActive();
            (!s || (s == null ? void 0 : s.$el) === i) && this.transitionTo(0);
          },
        },
      ],
      methods: {
        getActive() {
          return p(this.dropdowns, Y == null ? void 0 : Y.$el) && Y;
        },
        transitionTo(t, e) {
          const { dropbar: i } = this,
            s = J(i);
          (e = s < t && e),
            c(
              e,
              "clipPath",
              "polygon(0 0,100% 0,100% " + s + "px,0 " + s + "px)"
            ),
            J(i, s),
            S.cancel([e, i]),
            Promise.all([
              S.start(i, { height: t }, this.duration),
              S.start(
                e,
                {
                  clipPath:
                    "polygon(0 0,100% 0,100% " + t + "px,0 " + t + "px)",
                },
                this.duration
              ),
            ])
              .catch(T)
              .then(() => c(e, { clipPath: "" }));
        },
        getDropdown(t) {
          return (
            this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
          );
        },
        isDropbarDrop(t) {
          return this.getDropdown(t) && C(t, this.clsDrop);
        },
      },
    };
  function wn(t, e, i) {
    const { current: s, keyCode: n } = t,
      o = (i == null ? void 0 : i.targetEl) || s,
      r = e.indexOf(o);
    n === qt.LEFT && r > 0 && (i == null || i.hide(!1), e[r - 1].focus()),
      n === qt.RIGHT &&
        r < e.length - 1 &&
        (i == null || i.hide(!1), e[r + 1].focus()),
      n === qt.TAB && (o.focus(), i == null || i.hide(!1));
  }
  function bn(t) {
    if (!v(":focus", t)) {
      var e;
      (e = v(We, t)) == null || e.focus();
    }
  }
  const qt = { TAB: 9, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
  var xn = {
    props: { swiping: Boolean },
    data: { swiping: !0 },
    computed: {
      swipeTarget(t, e) {
        return e;
      },
    },
    connected() {
      !this.swiping ||
        ei(this, {
          el: this.swipeTarget,
          name: gt,
          passive: !0,
          handler(t) {
            if (!$t(t)) return;
            const e = ie(t),
              i = "tagName" in t.target ? t.target : E(t.target);
            N(document, Pt + " " + Je + " scroll", (s) => {
              const { x: n, y: o } = ie(s);
              ((s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100) ||
                (o && Math.abs(e.y - o) > 100)) &&
                setTimeout(() => {
                  g(i, "swipe"), g(i, "swipe" + ya(e.x, e.y, n, o));
                });
            });
          },
        });
    },
  };
  function ya(t, e, i, s) {
    return Math.abs(t - i) >= Math.abs(e - s)
      ? t - i > 0
        ? "Left"
        : "Right"
      : e - s > 0
      ? "Up"
      : "Down";
  }
  var $a = {
    mixins: [Qi, xn],
    args: "mode",
    props: { mode: String, flip: Boolean, overlay: Boolean },
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
    },
    computed: {
      clsFlip(t) {
        let { flip: e, clsFlip: i } = t;
        return e ? i : "";
      },
      clsOverlay(t) {
        let { overlay: e, clsOverlay: i } = t;
        return e ? i : "";
      },
      clsMode(t) {
        let { mode: e, clsMode: i } = t;
        return i + "-" + e;
      },
      clsSidebarAnimation(t) {
        let { mode: e, clsSidebarAnimation: i } = t;
        return e === "none" || e === "reveal" ? "" : i;
      },
      clsContainerAnimation(t) {
        let { mode: e, clsContainerAnimation: i } = t;
        return e !== "push" && e !== "reveal" ? "" : i;
      },
      transitionElement(t) {
        let { mode: e } = t;
        return e === "reveal" ? E(this.panel) : this.panel;
      },
    },
    update: {
      read() {
        this.isToggled() && !q(this.$el) && this.hide();
      },
      events: ["resize"],
    },
    events: [
      {
        name: "touchmove",
        self: !0,
        passive: !1,
        filter() {
          return this.overlay;
        },
        handler(t) {
          t.cancelable && t.preventDefault();
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          this.mode === "reveal" &&
            !C(E(this.panel), this.clsMode) &&
            (Xe(this.panel, "<div>"), b(E(this.panel), this.clsMode));
          const { body: t, scrollingElement: e } = document;
          b(t, this.clsContainer, this.clsFlip),
            c(t, "touch-action", "pan-y pinch-zoom"),
            c(this.$el, "display", "block"),
            c(this.panel, "maxWidth", e.clientWidth),
            b(this.$el, this.clsOverlay),
            b(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ),
            J(t),
            b(t, this.clsContainerAnimation),
            this.clsContainerAnimation && ka();
        },
      },
      {
        name: "hide",
        self: !0,
        handler() {
          O(document.body, this.clsContainerAnimation),
            c(document.body, "touch-action", "");
        },
      },
      {
        name: "hidden",
        self: !0,
        handler() {
          this.clsContainerAnimation && Sa(),
            this.mode === "reveal" && $e(this.panel),
            O(this.panel, this.clsSidebarAnimation, this.clsMode),
            O(this.$el, this.clsOverlay),
            c(this.$el, "display", ""),
            c(this.panel, "maxWidth", ""),
            O(document.body, this.clsContainer, this.clsFlip);
        },
      },
      {
        name: "swipeLeft swipeRight",
        handler(t) {
          this.isToggled() && Gt(t.type, "Left") ^ this.flip && this.hide();
        },
      },
    ],
  };
  function ka() {
    yn().content += ",user-scalable=0";
  }
  function Sa() {
    const t = yn();
    t.content = t.content.replace(/,user-scalable=0$/, "");
  }
  function yn() {
    return (
      v('meta[name="viewport"]', document.head) ||
      L(document.head, '<meta name="viewport">')
    );
  }
  var Ta = {
      mixins: [nt, wt],
      props: { selContainer: String, selContent: String, minHeight: Number },
      data: {
        selContainer: ".uk-modal",
        selContent: ".uk-modal-dialog",
        minHeight: 150,
      },
      computed: {
        container(t, e) {
          let { selContainer: i } = t;
          return it(e, i);
        },
        content(t, e) {
          let { selContent: i } = t;
          return it(e, i);
        },
      },
      resizeTargets() {
        return [this.container, this.content];
      },
      update: {
        read() {
          return !this.content || !this.container || !q(this.$el)
            ? !1
            : {
                max: Math.max(
                  this.minHeight,
                  J(this.container) - (x(this.content).height - J(this.$el))
                ),
              };
        },
        write(t) {
          let { max: e } = t;
          c(this.$el, { minHeight: this.minHeight, maxHeight: e });
        },
        events: ["resize"],
      },
    },
    Ca = {
      mixins: [wt],
      props: ["width", "height"],
      resizeTargets() {
        return [this.$el, E(this.$el)];
      },
      connected() {
        b(this.$el, "uk-responsive-width");
      },
      update: {
        read() {
          return q(this.$el) && this.width && this.height
            ? { width: ye(E(this.$el)), height: this.height }
            : !1;
        },
        write(t) {
          J(
            this.$el,
            Fe.contain({ height: this.height, width: this.width }, t).height
          );
        },
        events: ["resize"],
      },
    },
    Ia = {
      props: { offset: Number },
      data: { offset: 0 },
      connected() {
        Aa(this);
      },
      disconnected() {
        Pa(this);
      },
      methods: {
        async scrollTo(t) {
          (t = (t && v(t)) || document.body),
            g(this.$el, "beforescroll", [this, t]) &&
              (await Gi(t, { offset: this.offset }),
              g(this.$el, "scrolled", [this, t]));
        },
      },
    };
  const Ie = new Set();
  function Aa(t) {
    Ie.size || k(document, "click", $n), Ie.add(t);
  }
  function Pa(t) {
    Ie.delete(t), Ie.size || Nt(document, "click", $n);
  }
  function $n(t) {
    if (!t.defaultPrevented)
      for (const e of Ie)
        _(t.target, e.$el) && (t.preventDefault(), e.scrollTo(kn(e.$el)));
  }
  function kn(t) {
    return document.getElementById(decodeURIComponent(t.hash).substring(1));
  }
  var Ea = {
      mixins: [ni],
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number,
      },
      data: () => ({
        cls: "",
        target: !1,
        hidden: !0,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview",
      }),
      computed: {
        elements: {
          get(t, e) {
            let { target: i } = t;
            return i ? D(i, e) : [e];
          },
          watch(t, e) {
            this.hidden &&
              c(
                ve(t, ":not(." + this.inViewClass + ")"),
                "visibility",
                "hidden"
              ),
              pe(t, e) || this.$reset();
          },
          immediate: !0,
        },
      },
      connected() {
        (this._data.elements = new Map()),
          this.registerObserver(
            re(
              this.elements,
              (t) => {
                const e = this._data.elements;
                for (const { target: i, isIntersecting: s } of t) {
                  e.has(i) ||
                    e.set(i, { cls: at(i, "uk-scrollspy-class") || this.cls });
                  const n = e.get(i);
                  (!this.repeat && n.show) || (n.show = s);
                }
                this.$emit();
              },
              {
                rootMargin:
                  K(this.offsetTop, "height") -
                  1 +
                  "px " +
                  (K(this.offsetLeft, "width") - 1) +
                  "px",
              },
              !1
            )
          );
      },
      disconnected() {
        for (const [t, e] of this._data.elements.entries())
          O(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
      },
      update: [
        {
          write(t) {
            for (const [e, i] of t.elements.entries())
              i.show && !i.inview && !i.queued
                ? ((i.queued = !0),
                  (t.promise = (t.promise || Promise.resolve())
                    .then(() => new Promise((s) => setTimeout(s, this.delay)))
                    .then(() => {
                      this.toggle(e, !0),
                        setTimeout(() => {
                          (i.queued = !1), this.$emit();
                        }, 300);
                    })))
                : !i.show &&
                  i.inview &&
                  !i.queued &&
                  this.repeat &&
                  this.toggle(e, !1);
          },
        },
      ],
      methods: {
        toggle(t, e) {
          const i = this._data.elements.get(t);
          if (!!i) {
            if (
              (i.off == null || i.off(),
              c(t, "visibility", !e && this.hidden ? "hidden" : ""),
              F(t, this.inViewClass, e),
              F(t, i.cls),
              /\buk-animation-/.test(i.cls))
            ) {
              const s = () => Di(t, "uk-animation-[\\w-]+");
              e ? (i.off = N(t, "animationcancel animationend", s)) : s();
            }
            g(t, e ? "inview" : "outview"), (i.inview = e), this.$update(t);
          }
        },
      },
    },
    _a = {
      mixins: [ni],
      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number,
      },
      data: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0,
      },
      computed: {
        links: {
          get(t, e) {
            return D('a[href*="#"]', e).filter((i) => i.hash && ts(i));
          },
          watch(t) {
            this.scroll &&
              this.$create("scroll", t, { offset: this.offset || 0 });
          },
          immediate: !0,
        },
        elements(t) {
          let { closest: e } = t;
          return it(this.links, e || "*");
        },
      },
      update: [
        {
          read() {
            const t = this.links.map(kn).filter(Boolean),
              { length: e } = t;
            if (!e || !q(this.$el)) return !1;
            const [i] = tt(t, /auto|scroll/, !0),
              { scrollTop: s, scrollHeight: n } = i,
              o = lt(i),
              r = n - o.height;
            let a = !1;
            if (s === r) a = e - 1;
            else {
              for (
                let l = 0;
                l < t.length && !(I(t[l]).top - o.top - this.offset > 0);
                l++
              )
                a = +l;
              a === !1 && this.overflow && (a = 0);
            }
            return { active: a };
          },
          write(t) {
            let { active: e } = t;
            const i = e !== !1 && !C(this.elements[e], this.cls);
            this.links.forEach((s) => s.blur());
            for (let s = 0; s < this.elements.length; s++)
              F(this.elements[s], this.cls, +s === e);
            i && g(this.$el, "active", [e, this.elements[e]]);
          },
          events: ["scroll", "resize"],
        },
      ],
    },
    Oa = {
      mixins: [nt, ci, wt, ni],
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
        targetOffset: Number,
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
        targetOffset: !1,
      },
      computed: {
        selTarget(t, e) {
          let { selTarget: i } = t;
          return (i && v(i, e)) || e;
        },
      },
      resizeTargets() {
        return document.documentElement;
      },
      connected() {
        (this.start = Tn(this.start || this.top)),
          (this.end = Tn(this.end || this.bottom)),
          (this.placeholder =
            v("+ .uk-sticky-placeholder", this.$el) ||
            v('<div class="uk-sticky-placeholder"></div>')),
          (this.isFixed = !1),
          this.setActive(!1);
      },
      disconnected() {
        this.isFixed && (this.hide(), O(this.selTarget, this.clsInactive)),
          ut(this.placeholder),
          (this.placeholder = null);
      },
      events: [
        {
          name: "resize",
          el() {
            return window;
          },
          handler() {
            this.$emit("resize");
          },
        },
        {
          name: "load hashchange popstate",
          el() {
            return window;
          },
          filter() {
            return this.targetOffset !== !1;
          },
          handler() {
            const { scrollingElement: t } = document;
            !location.hash ||
              t.scrollTop === 0 ||
              setTimeout(() => {
                const e = I(v(location.hash)),
                  i = I(this.$el);
                this.isFixed &&
                  Ci(e, i) &&
                  (t.scrollTop =
                    e.top -
                    i.height -
                    K(this.targetOffset, "height", this.placeholder) -
                    K(this.offset, "height", this.placeholder));
              });
          },
        },
      ],
      update: [
        {
          read(t, e) {
            let { height: i, margin: s } = t;
            if (
              ((this.inactive = !this.matchMedia || !q(this.$el)),
              this.inactive)
            )
              return !1;
            const n = this.active && e.has("resize");
            n && (c(this.selTarget, "transition", "0s"), this.hide()),
              this.active ||
                ((i = I(this.$el).height), (s = c(this.$el, "margin"))),
              n &&
                (this.show(),
                requestAnimationFrame(() =>
                  c(this.selTarget, "transition", "")
                ));
            const o = this.isFixed ? this.placeholder : this.$el,
              r = J(window);
            let a = this.position;
            this.overflowFlip && i > r && (a = a === "top" ? "bottom" : "top");
            let l = K(this.offset, "height", o);
            a === "bottom" && (i < r || this.overflowFlip) && (l += r - i);
            const u = this.overflowFlip ? 0 : Math.max(0, i + l - r),
              h = I(o).top,
              d = (this.start === !1 ? h : Sn(this.start, this.$el, h)) - l,
              f =
                this.end === !1
                  ? document.scrollingElement.scrollHeight - r
                  : Sn(this.end, this.$el, h + i, !0) -
                    I(this.$el).height +
                    u -
                    l;
            return {
              start: d,
              end: f,
              offset: l,
              overflow: u,
              topOffset: h,
              height: i,
              margin: s,
              width: x(o).width,
              top: Ft(o)[0],
            };
          },
          write(t) {
            let { height: e, margin: i } = t;
            const { placeholder: s } = this;
            c(s, { height: e, margin: i }),
              _(s, document) || (Ye(this.$el, s), (s.hidden = !0));
          },
          events: ["resize"],
        },
        {
          read(t) {
            let {
              scroll: e = 0,
              dir: i = "down",
              overflow: s,
              overflowScroll: n = 0,
              start: o,
              end: r,
            } = t;
            const a = document.scrollingElement.scrollTop;
            return {
              dir: e <= a ? "down" : "up",
              prevDir: i,
              scroll: a,
              prevScroll: e,
              offsetParentTop: I(
                (this.isFixed ? this.placeholder : this.$el).offsetParent
              ).top,
              overflowScroll: U(n + U(a, o, r) - U(e, o, r), 0, s),
            };
          },
          write(t, e) {
            const i = e.has("scroll"),
              {
                initTimestamp: s = 0,
                dir: n,
                prevDir: o,
                scroll: r,
                prevScroll: a = 0,
                top: l,
                start: u,
                topOffset: h,
                height: d,
              } = t;
            if (
              r < 0 ||
              (r === a && i) ||
              (this.showOnUp && !i && !this.isFixed)
            )
              return;
            const f = Date.now();
            if (
              ((f - s > 300 || n !== o) &&
                ((t.initScroll = r), (t.initTimestamp = f)),
              !(
                this.showOnUp &&
                !this.isFixed &&
                Math.abs(t.initScroll - r) <= 30 &&
                Math.abs(a - r) <= 10
              ))
            )
              if (
                this.inactive ||
                r < u ||
                (this.showOnUp &&
                  (r <= u ||
                    (n === "down" && i) ||
                    (n === "up" && !this.isFixed && r <= h + d)))
              ) {
                if (!this.isFixed) {
                  ft.inProgress(this.$el) &&
                    l > r &&
                    (ft.cancel(this.$el), this.hide());
                  return;
                }
                (this.isFixed = !1),
                  this.animation && r > h
                    ? (ft.cancel(this.$el),
                      ft
                        .out(this.$el, this.animation)
                        .then(() => this.hide(), T))
                    : this.hide();
              } else
                this.isFixed
                  ? this.update()
                  : this.animation && r > h
                  ? (ft.cancel(this.$el),
                    this.show(),
                    ft.in(this.$el, this.animation).catch(T))
                  : this.show();
          },
          events: ["resize", "scroll"],
        },
      ],
      methods: {
        show() {
          (this.isFixed = !0), this.update(), (this.placeholder.hidden = !1);
        },
        hide() {
          this.setActive(!1),
            O(this.$el, this.clsFixed, this.clsBelow),
            c(this.$el, { position: "", top: "", width: "" }),
            (this.placeholder.hidden = !0);
        },
        update() {
          let {
            width: t,
            scroll: e = 0,
            overflow: i,
            overflowScroll: s = 0,
            start: n,
            end: o,
            offset: r,
            topOffset: a,
            height: l,
            offsetParentTop: u,
          } = this._data;
          const h = n !== 0 || e > n;
          let d = "fixed";
          e > o && ((r += o - u), (d = "absolute")),
            i && (r -= s),
            c(this.$el, { position: d, top: r + "px", width: t }),
            this.setActive(h),
            F(this.$el, this.clsBelow, e > a + l),
            b(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          (this.active = t),
            t
              ? (Ni(this.selTarget, this.clsInactive, this.clsActive),
                e !== t && g(this.$el, "active"))
              : (Ni(this.selTarget, this.clsActive, this.clsInactive),
                e !== t && g(this.$el, "inactive"));
        },
      },
    };
  function Sn(t, e, i, s) {
    if (!t) return 0;
    if (Mt(t) || (B(t) && t.match(/^-?\d/))) return i + K(t, "height", e, !0);
    {
      const n = t === !0 ? E(e) : ct(t, e);
      return I(n).bottom - (s && n && _(e, n) ? m(c(n, "paddingBottom")) : 0);
    }
  }
  function Tn(t) {
    return t === "true" ? !0 : t === "false" ? !1 : t;
  }
  var Cn = {
      mixins: [Te, xn, Et],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        itemNav: !1,
        active: 0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
      },
      computed: {
        connects: {
          get(t, e) {
            let { connect: i } = t;
            return we(i, e);
          },
          watch(t) {
            var e;
            this.swiping && c(t, "touchAction", "pan-y pinch-zoom"),
              (e = this._observer) == null || e.disconnect(),
              this.registerObserver(
                (this._observer = qi(
                  t,
                  (i) => {
                    const s = this.index();
                    for (const { target: n } of i)
                      M(n).forEach((o, r) => F(o, this.cls, r === s)),
                        this.lazyload(this.$el, M(n));
                  },
                  { childList: !0 }
                ))
              );
          },
          immediate: !0,
        },
        toggles: {
          get(t, e) {
            let { toggle: i } = t;
            return D(i, e).filter(
              (s) => !H(s, ".uk-disabled *, .uk-disabled, [disabled]")
            );
          },
          watch(t) {
            const e = this.index();
            this.show(~e ? e : t[this.active] || t[0]);
          },
          immediate: !0,
        },
        children() {
          return M(this.$el).filter((t) => this.toggles.some((e) => _(e, t)));
        },
        swipeTarget() {
          return this.connects;
        },
      },
      connected() {
        Hi(() => this.$emit());
      },
      events: [
        {
          name: "click",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            t.preventDefault(), this.show(t.current);
          },
        },
        {
          name: "click",
          el() {
            return this.connects.concat(
              this.itemNav ? we(this.itemNav, this.$el) : []
            );
          },
          delegate() {
            return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
          },
          handler(t) {
            t.preventDefault(), this.show(at(t.current, this.attrItem));
          },
        },
        {
          name: "swipeRight swipeLeft",
          filter() {
            return this.swiping;
          },
          el() {
            return this.connects;
          },
          handler(t) {
            let { type: e } = t;
            this.show(Gt(e, "Left") ? "next" : "previous");
          },
        },
      ],
      methods: {
        index() {
          return bt(this.children, (t) => C(t, this.cls));
        },
        show(t) {
          const e = this.index(),
            i = Ut(t, this.toggles, e),
            s = Ut(this.children[i], M(this.$el));
          M(this.$el).forEach((o, r) => {
            F(o, this.cls, s === r),
              $(this.toggles[r], "aria-expanded", s === r);
          });
          const n = e >= 0 && e !== i;
          this.connects.forEach(async (o) => {
            let { children: r } = o;
            await this.toggleElement(
              y(r).filter((a) => C(a, this.cls)),
              !1,
              n
            ),
              await this.toggleElement(r[s], !0, n);
          });
        },
      },
    },
    Ba = {
      mixins: [nt],
      extends: Cn,
      props: { media: Boolean },
      data: { media: 960, attrItem: "uk-tab-item" },
      connected() {
        const t = C(this.$el, "uk-tab-left")
          ? "uk-tab-left"
          : C(this.$el, "uk-tab-right")
          ? "uk-tab-right"
          : !1;
        t &&
          this.$create("toggle", this.$el, {
            cls: t,
            mode: "media",
            media: this.media,
          });
      },
    };
  const Ma = 32;
  var Da = {
      mixins: [Te, ci, Et],
      args: "target",
      props: { href: String, target: null, mode: "list", queued: Boolean },
      data: { href: !1, target: !1, mode: "click", queued: !0 },
      computed: {
        target: {
          get(t, e) {
            let { href: i, target: s } = t;
            return (s = we(s || i, e)), (s.length && s) || [e];
          },
          watch() {
            this.updateAria(), this.lazyload(this.$el, this.target);
          },
          immediate: !0,
        },
      },
      connected() {
        !p(this.mode, "media") && !je(this.$el) && $(this.$el, "tabindex", "0"),
          Hi(() => this.$emit());
      },
      events: [
        {
          name: gt,
          filter() {
            return p(this.mode, "hover");
          },
          handler(t) {
            (this._preventClick = null),
              !(!$t(t) || this._showState) &&
                (g(this.$el, "focus"),
                N(
                  document,
                  gt,
                  () => g(this.$el, "blur"),
                  !0,
                  (e) => !_(e.target, this.$el)
                ),
                p(this.mode, "click") && (this._preventClick = !0));
          },
        },
        {
          name: Rt + " " + oe + " focus blur",
          filter() {
            return p(this.mode, "hover");
          },
          handler(t) {
            if ($t(t)) return;
            const e = p([Rt, "focus"], t.type),
              i = $(this.$el, "aria-expanded");
            if (
              !(
                !e &&
                ((t.type === oe && H(this.$el, ":focus")) ||
                  (t.type === "blur" && H(this.$el, ":hover")))
              )
            ) {
              if (this._showState && e && i !== this._showState) {
                e || (this._showState = null);
                return;
              }
              (this._showState = e ? i : null),
                this.toggle("toggle" + (e ? "show" : "hide"));
            }
          },
        },
        {
          name: "keydown",
          filter() {
            return p(this.mode, "click") && !pt(this.$el, "input");
          },
          handler(t) {
            t.keyCode === Ma && (t.preventDefault(), this.$el.click());
          },
        },
        {
          name: "click",
          filter() {
            return ["click", "hover"].some((t) => p(this.mode, t));
          },
          handler(t) {
            let e;
            (this._preventClick ||
              it(t.target, 'a[href="#"], a[href=""]') ||
              ((e = it(t.target, "a[href]")) &&
                ($(this.$el, "aria-expanded") !== "true" ||
                  (e.hash && H(this.target, e.hash))))) &&
              t.preventDefault(),
              !this._preventClick && p(this.mode, "click") && this.toggle();
          },
        },
        {
          name: "hide show",
          self: !0,
          el() {
            return this.target;
          },
          handler(t) {
            let { type: e } = t;
            this.updateAria(e === "show");
          },
        },
        {
          name: "mediachange",
          filter() {
            return p(this.mode, "media");
          },
          el() {
            return this.target;
          },
          handler(t, e) {
            e.matches ^ this.isToggled(this.target) && this.toggle();
          },
        },
      ],
      methods: {
        async toggle(t) {
          if (!g(this.target, t || "toggle", [this])) return;
          if (!this.queued) return this.toggleElement(this.target);
          const e = this.target.filter((s) => C(s, this.clsLeave));
          if (e.length) {
            for (const s of this.target) {
              const n = p(e, s);
              this.toggleElement(s, n, n);
            }
            return;
          }
          const i = this.target.filter(this.isToggled);
          await this.toggleElement(i, !1),
            await this.toggleElement(
              this.target.filter((s) => !p(i, s)),
              !0
            );
        },
        updateAria(t) {
          p(this.mode, "media") ||
            $(
              this.$el,
              "aria-expanded",
              Ne(t) ? t : this.isToggled(this.target)
            );
        },
      },
    },
    Na = Object.freeze({
      __proto__: null,
      Accordion: Ks,
      Alert: pr,
      Cover: mr,
      Drop: nn,
      Dropdown: nn,
      FormCustom: yr,
      Grid: kr,
      HeightMatch: Ir,
      HeightViewport: Er,
      Icon: is,
      Img: la,
      Leader: ma,
      Margin: on,
      Modal: va,
      Nav: ba,
      Navbar: xa,
      Offcanvas: $a,
      OverflowAuto: Ta,
      Responsive: Ca,
      Scroll: Ia,
      Scrollspy: Ea,
      ScrollspyNav: _a,
      Sticky: Oa,
      Svg: cn,
      Switcher: Cn,
      Tab: Ba,
      Toggle: Da,
      Video: Zs,
      Close: ia,
      Spinner: sa,
      NavParentIcon: ta,
      SlidenavNext: mn,
      SlidenavPrevious: mn,
      SearchIcon: ea,
      Marker: dt,
      NavbarParentIcon: dt,
      NavbarToggleIcon: dt,
      OverlayIcon: dt,
      PaginationNext: dt,
      PaginationPrevious: dt,
      Totop: dt,
    });
  yt(Na, (t, e) => st.component(e, t)), hr(st);
  const za = ["days", "hours", "minutes", "seconds"];
  var Ha = {
    mixins: [nt],
    props: { date: String, clsWrapper: String },
    data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
    connected() {
      (this.date = Date.parse(this.$props.date)), this.start();
    },
    disconnected() {
      this.stop();
    },
    events: [
      {
        name: "visibilitychange",
        el() {
          return document;
        },
        handler() {
          document.hidden ? this.stop() : this.start();
        },
      },
    ],
    methods: {
      start() {
        this.stop(),
          this.update(),
          (this.timer = setInterval(this.update, 1e3));
      },
      stop() {
        clearInterval(this.timer);
      },
      update() {
        const t = Fa(this.date);
        (!this.date || t.total <= 0) &&
          (this.stop(), (t.days = t.hours = t.minutes = t.seconds = 0));
        for (const e of za) {
          const i = v(this.clsWrapper.replace("%unit%", e), this.$el);
          if (!i) continue;
          let s = String(Math.trunc(t[e]));
          (s = s.length < 2 ? "0" + s : s),
            i.textContent !== s &&
              ((s = s.split("")),
              s.length !== i.children.length &&
                At(i, s.map(() => "<span></span>").join("")),
              s.forEach((n, o) => (i.children[o].textContent = n)));
        }
      },
    },
  };
  function Fa(t) {
    const e = t - Date.now();
    return {
      total: e,
      seconds: (e / 1e3) % 60,
      minutes: (e / 1e3 / 60) % 60,
      hours: (e / 1e3 / 60 / 60) % 24,
      days: e / 1e3 / 60 / 60 / 24,
    };
  }
  const ns = "uk-transition-leave",
    os = "uk-transition-enter";
  function In(t, e, i, s) {
    s === void 0 && (s = 0);
    const n = ui(e, !0),
      o = { opacity: 1 },
      r = { opacity: 0 },
      a = (h) => () => n === ui(e) ? h() : Promise.reject(),
      l = a(async () => {
        b(e, ns),
          await Promise.all(
            Pn(e).map(
              (h, d) =>
                new Promise((f) =>
                  setTimeout(() => S.start(h, r, i / 2, "ease").then(f), d * s)
                )
            )
          ),
          O(e, ns);
      }),
      u = a(async () => {
        const h = J(e);
        b(e, os), t(), c(M(e), { opacity: 0 }), await La();
        const d = M(e),
          f = J(e);
        c(e, "alignContent", "flex-start"), J(e, h);
        const w = Pn(e);
        c(d, r);
        const A = w.map(async (P, W) => {
          await Wa(W * s), await S.start(P, o, i / 2, "ease");
        });
        h !== f &&
          A.push(S.start(e, { height: f }, i / 2 + w.length * s, "ease")),
          await Promise.all(A).then(() => {
            O(e, os),
              n === ui(e) &&
                (c(e, { height: "", alignContent: "" }),
                c(d, { opacity: "" }),
                delete e.dataset.transition);
          });
      });
    return C(e, ns)
      ? An(e).then(u)
      : C(e, os)
      ? An(e).then(l).then(u)
      : l().then(u);
  }
  function ui(t, e) {
    return (
      e && (t.dataset.transition = 1 + ui(t)), Ct(t.dataset.transition) || 0
    );
  }
  function An(t) {
    return Promise.all(
      M(t)
        .filter(S.inProgress)
        .map(
          (e) => new Promise((i) => N(e, "transitionend transitioncanceled", i))
        )
    );
  }
  function Pn(t) {
    return es(M(t)).reduce(
      (e, i) =>
        e.concat(
          ze(
            i.filter((s) => Ue(s)),
            "offsetLeft"
          )
        ),
      []
    );
  }
  function La() {
    return new Promise((t) => requestAnimationFrame(t));
  }
  function Wa(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  async function ja(t, e, i) {
    await Bn();
    let s = M(e);
    const n = s.map((h) => En(h, !0)),
      o = c(e, ["height", "padding"]);
    S.cancel(e),
      s.forEach(S.cancel),
      _n(e),
      t(),
      (s = s.concat(M(e).filter((h) => !p(s, h)))),
      await Promise.resolve(),
      G.flush();
    const r = c(e, ["height", "padding"]),
      [a, l] = Ra(e, s, n);
    s.forEach((h, d) => l[d] && c(h, l[d])),
      c(e, { display: "block", ...o }),
      await Bn();
    const u = s
      .map((h, d) => E(h) === e && S.start(h, a[d], i, "ease"))
      .concat(S.start(e, r, i, "ease"));
    await Promise.all(u).then(() => {
      s.forEach(
        (h, d) =>
          E(h) === e && c(h, "display", a[d].opacity === 0 ? "none" : "")
      ),
        _n(e);
    }, T);
  }
  function En(t, e) {
    const i = c(t, "zIndex");
    return q(t)
      ? {
          display: "",
          opacity: e ? c(t, "opacity") : "0",
          pointerEvents: "none",
          position: "absolute",
          zIndex: i === "auto" ? ee(t) : i,
          ...On(t),
        }
      : !1;
  }
  function Ra(t, e, i) {
    const s = e.map((o, r) =>
        E(o) && r in i
          ? i[r]
            ? q(o)
              ? On(o)
              : { opacity: 0 }
            : { opacity: q(o) ? 1 : 0 }
          : !1
      ),
      n = s.map((o, r) => {
        const a = E(e[r]) === t && (i[r] || En(e[r]));
        if (!a) return !1;
        if (!o) delete a.opacity;
        else if (!("opacity" in o)) {
          const { opacity: l } = a;
          l % 1 ? (o.opacity = 1) : delete a.opacity;
        }
        return a;
      });
    return [s, n];
  }
  function _n(t) {
    c(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      marginTop: "",
      marginLeft: "",
      transform: "",
      width: "",
      zIndex: "",
    }),
      c(t, { height: "", display: "", padding: "" });
  }
  function On(t) {
    const { height: e, width: i } = I(t),
      { top: s, left: n } = Re(t),
      { marginLeft: o, marginTop: r } = c(t, ["marginTop", "marginLeft"]);
    return {
      top: s,
      left: n,
      height: e,
      width: i,
      marginLeft: o,
      marginTop: r,
      transform: "",
    };
  }
  function Bn() {
    return new Promise((t) => requestAnimationFrame(t));
  }
  var Mn = {
      props: { duration: Number, animation: Boolean },
      data: { duration: 150, animation: "slide" },
      methods: {
        animate(t, e) {
          e === void 0 && (e = this.$el);
          const i = this.animation;
          return (
            i === "fade"
              ? In
              : i === "delayed-fade"
              ? function () {
                  for (
                    var n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  return In(...o, 40);
                }
              : i
              ? ja
              : () => (t(), Promise.resolve())
          )(t, e, this.duration).then(() => this.$update(e, "resize"), T);
        },
      },
    },
    qa = {
      mixins: [Mn],
      args: "target",
      props: { target: Boolean, selActive: Boolean },
      data: {
        target: null,
        selActive: !1,
        attrItem: "uk-filter-control",
        cls: "uk-active",
        duration: 250,
      },
      computed: {
        toggles: {
          get(t, e) {
            let { attrItem: i } = t;
            return D("[" + i + "],[data-" + i + "]", e);
          },
          watch() {
            if ((this.updateState(), this.selActive !== !1)) {
              const t = D(this.selActive, this.$el);
              this.toggles.forEach((e) => F(e, this.cls, p(t, e)));
            }
          },
          immediate: !0,
        },
        children: {
          get(t, e) {
            let { target: i } = t;
            return D(i + " > *", e);
          },
          watch(t, e) {
            e && !Ga(t, e) && this.updateState();
          },
          immediate: !0,
        },
      },
      events: [
        {
          name: "click",
          delegate() {
            return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
          },
          handler(t) {
            t.preventDefault(), this.apply(t.current);
          },
        },
      ],
      methods: {
        apply(t) {
          const e = this.getState(),
            i = Nn(t, this.attrItem, this.getState());
          Ya(e, i) || this.setState(i);
        },
        getState() {
          return this.toggles
            .filter((t) => C(t, this.cls))
            .reduce((t, e) => Nn(e, this.attrItem, t), {
              filter: { "": "" },
              sort: [],
            });
        },
        async setState(t, e) {
          e === void 0 && (e = !0),
            (t = { filter: { "": "" }, sort: [], ...t }),
            g(this.$el, "beforeFilter", [this, t]),
            this.toggles.forEach((i) =>
              F(i, this.cls, !!Xa(i, this.attrItem, t))
            ),
            await Promise.all(
              D(this.target, this.$el).map((i) => {
                const s = () => {
                  Va(t, i, M(i)), this.$update(this.$el);
                };
                return e ? this.animate(s, i) : s();
              })
            ),
            g(this.$el, "afterFilter", [this]);
        },
        updateState() {
          G.write(() => this.setState(this.getState(), !1));
        },
      },
    };
  function Dn(t, e) {
    return Se(at(t, e), ["filter"]);
  }
  function Ya(t, e) {
    return ["filter", "sort"].every((i) => pe(t[i], e[i]));
  }
  function Va(t, e, i) {
    const s = Ja(t);
    i.forEach((r) => c(r, "display", s && !H(r, s) ? "none" : ""));
    const [n, o] = t.sort;
    if (n) {
      const r = Ka(i, n, o);
      pe(r, i) || L(e, r);
    }
  }
  function Nn(t, e, i) {
    const s = Dn(t, e),
      { filter: n, group: o, sort: r, order: a = "asc" } = s;
    return (
      (n || j(r)) &&
        (o
          ? n
            ? (delete i.filter[""], (i.filter[o] = n))
            : (delete i.filter[o],
              (fe(i.filter) || "" in i.filter) && (i.filter = { "": n || "" }))
          : (i.filter = { "": n || "" })),
      j(r) || (i.sort = [r, a]),
      i
    );
  }
  function Xa(t, e, i) {
    let {
      filter: s = { "": "" },
      sort: [n, o],
    } = i;
    const {
      filter: r = "",
      group: a = "",
      sort: l,
      order: u = "asc",
    } = Dn(t, e);
    return j(l)
      ? (a in s && r === s[a]) || (!r && a && !(a in s) && !s[""])
      : n === l && o === u;
  }
  function Ga(t, e) {
    return t.length === e.length && t.every((i) => e.includes(i));
  }
  function Ja(t) {
    let { filter: e } = t,
      i = "";
    return yt(e, (s) => (i += s || "")), i;
  }
  function Ka(t, e, i) {
    return [...t].sort(
      (s, n) =>
        at(s, e).localeCompare(at(n, e), void 0, { numeric: !0 }) *
        (i === "asc" || -1)
    );
  }
  var rs = {
    slide: {
      show(t) {
        return [{ transform: z(t * -100) }, { transform: z() }];
      },
      percent(t) {
        return Ae(t);
      },
      translate(t, e) {
        return [
          { transform: z(e * -100 * t) },
          { transform: z(e * 100 * (1 - t)) },
        ];
      },
    },
  };
  function Ae(t) {
    return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }
  function z(t, e) {
    return (
      t === void 0 && (t = 0),
      e === void 0 && (e = "%"),
      (t += t ? e : ""),
      "translate3d(" + t + ", 0, 0)"
    );
  }
  function he(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }
  var zn = {
    ...rs,
    fade: {
      show() {
        return [{ opacity: 0 }, { opacity: 1 }];
      },
      percent(t) {
        return 1 - c(t, "opacity");
      },
      translate(t) {
        return [{ opacity: 1 - t }, { opacity: t }];
      },
    },
    scale: {
      show() {
        return [
          { opacity: 0, transform: he(1 - 0.2) },
          { opacity: 1, transform: he(1) },
        ];
      },
      percent(t) {
        return 1 - c(t, "opacity");
      },
      translate(t) {
        return [
          { opacity: 1 - t, transform: he(1 - 0.2 * t) },
          { opacity: t, transform: he(1 - 0.2 + 0.2 * t) },
        ];
      },
    },
  };
  function Za(t, e, i, s) {
    let { animation: n, easing: o } = s;
    const { percent: r, translate: a, show: l = T } = n,
      u = l(i),
      h = new Le();
    return {
      dir: i,
      show(d, f, w) {
        f === void 0 && (f = 0);
        const A = w ? "linear" : o;
        return (
          (d -= Math.round(d * U(f, -1, 1))),
          this.translate(f),
          di(e, "itemin", { percent: f, duration: d, timing: A, dir: i }),
          di(t, "itemout", { percent: 1 - f, duration: d, timing: A, dir: i }),
          Promise.all([S.start(e, u[1], d, A), S.start(t, u[0], d, A)]).then(
            () => {
              this.reset(), h.resolve();
            },
            T
          ),
          h.promise
        );
      },
      cancel() {
        S.cancel([e, t]);
      },
      reset() {
        for (const d in u[0]) c([e, t], d, "");
      },
      forward(d, f) {
        return (
          f === void 0 && (f = this.percent()),
          S.cancel([e, t]),
          this.show(d, f, !0)
        );
      },
      translate(d) {
        this.reset();
        const f = a(d, i);
        c(e, f[1]),
          c(t, f[0]),
          di(e, "itemtranslatein", { percent: d, dir: i }),
          di(t, "itemtranslateout", { percent: 1 - d, dir: i });
      },
      percent() {
        return r(t || e, e, i);
      },
      getDistance() {
        return t == null ? void 0 : t.offsetWidth;
      },
    };
  }
  function di(t, e, i) {
    g(t, zt(e, !1, !1, i));
  }
  var Qa = {
    props: {
      autoplay: Boolean,
      autoplayInterval: Number,
      pauseOnHover: Boolean,
    },
    data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
    connected() {
      this.autoplay && this.startAutoplay();
    },
    disconnected() {
      this.stopAutoplay();
    },
    update() {
      $(this.slides, "tabindex", "-1");
    },
    events: [
      {
        name: "visibilitychange",
        el() {
          return document;
        },
        filter() {
          return this.autoplay;
        },
        handler() {
          document.hidden ? this.stopAutoplay() : this.startAutoplay();
        },
      },
    ],
    methods: {
      startAutoplay() {
        this.stopAutoplay(),
          (this.interval = setInterval(
            () =>
              (!this.draggable || !v(":focus", this.$el)) &&
              (!this.pauseOnHover || !H(this.$el, ":hover")) &&
              !this.stack.length &&
              this.show("next"),
            this.autoplayInterval
          ));
      },
      stopAutoplay() {
        this.interval && clearInterval(this.interval);
      },
    },
  };
  const Pe = { passive: !1, capture: !0 },
    Ua = "touchstart mousedown",
    as = "touchmove mousemove",
    ls = "touchend touchcancel mouseup click input";
  var tl = {
    props: { draggable: Boolean },
    data: { draggable: !0, threshold: 10 },
    created() {
      for (const t of ["start", "move", "end"]) {
        const e = this[t];
        this[t] = (i) => {
          const s = ie(i).x * (X ? -1 : 1);
          (this.prevPos = s === this.pos ? this.prevPos : this.pos),
            (this.pos = s),
            e(i);
        };
      }
    },
    events: [
      {
        name: Ua,
        delegate() {
          return this.selSlides;
        },
        handler(t) {
          !this.draggable ||
            (!$t(t) && el(t.target)) ||
            it(t.target, me) ||
            t.button > 0 ||
            this.length < 2 ||
            this.start(t);
        },
      },
      {
        name: "dragstart",
        handler(t) {
          t.preventDefault();
        },
      },
      {
        name: as + " " + ls,
        el() {
          return this.list;
        },
        handler: T,
        ...Pe,
      },
    ],
    methods: {
      start() {
        (this.drag = this.pos),
          this._transitioner
            ? ((this.percent = this._transitioner.percent()),
              (this.drag +=
                this._transitioner.getDistance() * this.percent * this.dir),
              this._transitioner.cancel(),
              this._transitioner.translate(this.percent),
              (this.dragging = !0),
              (this.stack = []))
            : (this.prevIndex = this.index),
          k(document, as, this.move, Pe),
          k(document, ls, this.end, Pe),
          c(this.list, "userSelect", "none");
      },
      move(t) {
        const e = this.pos - this.drag;
        if (
          e === 0 ||
          this.prevPos === this.pos ||
          (!this.dragging && Math.abs(e) < this.threshold)
        )
          return;
        c(this.list, "pointerEvents", "none"),
          t.cancelable && t.preventDefault(),
          (this.dragging = !0),
          (this.dir = e < 0 ? 1 : -1);
        const { slides: i } = this;
        let { prevIndex: s } = this,
          n = Math.abs(e),
          o = this.getIndex(s + this.dir, s),
          r = this._getDistance(s, o) || i[s].offsetWidth;
        for (; o !== s && n > r; )
          (this.drag -= r * this.dir),
            (s = o),
            (n -= r),
            (o = this.getIndex(s + this.dir, s)),
            (r = this._getDistance(s, o) || i[s].offsetWidth);
        this.percent = n / r;
        const a = i[s],
          l = i[o],
          u = this.index !== o,
          h = s === o;
        let d;
        [this.index, this.prevIndex]
          .filter((f) => !p([o, s], f))
          .forEach((f) => {
            g(i[f], "itemhidden", [this]),
              h && ((d = !0), (this.prevIndex = s));
          }),
          ((this.index === s && this.prevIndex !== s) || d) &&
            g(i[this.index], "itemshown", [this]),
          u &&
            ((this.prevIndex = s),
            (this.index = o),
            !h && g(a, "beforeitemhide", [this]),
            g(l, "beforeitemshow", [this])),
          (this._transitioner = this._translate(
            Math.abs(this.percent),
            a,
            !h && l
          )),
          u && (!h && g(a, "itemhide", [this]), g(l, "itemshow", [this]));
      },
      end() {
        if (
          (Nt(document, as, this.move, Pe),
          Nt(document, ls, this.end, Pe),
          this.dragging)
        )
          if (((this.dragging = null), this.index === this.prevIndex))
            (this.percent = 1 - this.percent),
              (this.dir *= -1),
              this._show(!1, this.index, !0),
              (this._transitioner = null);
          else {
            const t =
              (X ? this.dir * (X ? 1 : -1) : this.dir) < 0 ==
              this.prevPos > this.pos;
            (this.index = t ? this.index : this.prevIndex),
              t && (this.percent = 1 - this.percent),
              this.show(
                (this.dir > 0 && !t) || (this.dir < 0 && t)
                  ? "next"
                  : "previous",
                !0
              );
          }
        c(this.list, { userSelect: "", pointerEvents: "" }),
          (this.drag = this.percent = null);
      },
    },
  };
  function el(t) {
    return (
      c(t, "userSelect") !== "none" &&
      y(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim())
    );
  }
  var il = {
      data: { selNav: !1 },
      computed: {
        nav(t, e) {
          let { selNav: i } = t;
          return v(i, e);
        },
        selNavItem(t) {
          let { attrItem: e } = t;
          return "[" + e + "],[data-" + e + "]";
        },
        navItems(t, e) {
          return D(this.selNavItem, e);
        },
      },
      update: {
        write() {
          this.nav &&
            this.length !== this.nav.children.length &&
            At(
              this.nav,
              this.slides
                .map(
                  (t, e) =>
                    "<li " + this.attrItem + '="' + e + '"><a href></a></li>'
                )
                .join("")
            ),
            this.navItems
              .concat(this.nav)
              .forEach((t) => t && (t.hidden = !this.maxIndex)),
            this.updateNav();
        },
        events: ["resize"],
      },
      events: [
        {
          name: "click",
          delegate() {
            return this.selNavItem;
          },
          handler(t) {
            t.preventDefault(), this.show(at(t.current, this.attrItem));
          },
        },
        { name: "itemshow", handler: "updateNav" },
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const i = at(e, this.attrItem);
            F(e, this.clsActive, Ct(i) === t),
              F(
                e,
                "uk-invisible",
                this.finite &&
                  ((i === "previous" && t === 0) ||
                    (i === "next" && t >= this.maxIndex))
              );
          }
        },
      },
    },
    Hn = {
      mixins: [Qa, tl, il, wt],
      props: {
        clsActivated: Boolean,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number,
        selSlides: String,
      },
      data: () => ({
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
        transitionOptions: {},
      }),
      connected() {
        (this.prevIndex = -1),
          (this.index = this.getValidIndex(this.$props.index)),
          (this.stack = []);
      },
      disconnected() {
        O(this.slides, this.clsActive);
      },
      computed: {
        duration(t, e) {
          let { velocity: i } = t;
          return Fn(e.offsetWidth / i);
        },
        list(t, e) {
          let { selList: i } = t;
          return v(i, e);
        },
        maxIndex() {
          return this.length - 1;
        },
        selSlides(t) {
          let { selList: e, selSlides: i } = t;
          return e + " " + (i || "> *");
        },
        slides: {
          get() {
            return D(this.selSlides, this.$el);
          },
          watch() {
            this.$emit("resize");
          },
        },
        length() {
          return this.slides.length;
        },
      },
      methods: {
        show(t, e) {
          if ((e === void 0 && (e = !1), this.dragging || !this.length)) return;
          const { stack: i } = this,
            s = e ? 0 : i.length,
            n = () => {
              i.splice(s, 1), i.length && this.show(i.shift(), !0);
            };
          if ((i[e ? "unshift" : "push"](t), !e && i.length > 1)) {
            i.length === 2 &&
              this._transitioner.forward(Math.min(this.duration, 200));
            return;
          }
          const o = this.getIndex(this.index),
            r = C(this.slides, this.clsActive) && this.slides[o],
            a = this.getIndex(t, this.index),
            l = this.slides[a];
          if (r === l) {
            n();
            return;
          }
          if (
            ((this.dir = sl(t, o)),
            (this.prevIndex = o),
            (this.index = a),
            (r && !g(r, "beforeitemhide", [this])) ||
              !g(l, "beforeitemshow", [this, r]))
          ) {
            (this.index = this.prevIndex), n();
            return;
          }
          const u = this._show(r, l, e).then(
            () => (
              r && g(r, "itemhidden", [this]),
              g(l, "itemshown", [this]),
              new Promise((h) => {
                requestAnimationFrame(() => {
                  i.shift(),
                    i.length
                      ? this.show(i.shift(), !0)
                      : (this._transitioner = null),
                    h();
                });
              })
            )
          );
          return r && g(r, "itemhide", [this]), g(l, "itemshow", [this]), u;
        },
        getIndex(t, e) {
          return (
            t === void 0 && (t = this.index),
            e === void 0 && (e = this.index),
            U(Ut(t, this.slides, e, this.finite), 0, this.maxIndex)
          );
        },
        getValidIndex(t, e) {
          return (
            t === void 0 && (t = this.index),
            e === void 0 && (e = this.prevIndex),
            this.getIndex(t, e)
          );
        },
        _show(t, e, i) {
          if (
            ((this._transitioner = this._getTransitioner(t, e, this.dir, {
              easing: i
                ? e.offsetWidth < 600
                  ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                : this.easing,
              ...this.transitionOptions,
            })),
            !i && !t)
          )
            return this._translate(1), Promise.resolve();
          const { length: s } = this.stack;
          return this._transitioner[s > 1 ? "forward" : "show"](
            s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration,
            this.percent
          );
        },
        _getDistance(t, e) {
          return this._getTransitioner(t, t !== e && e).getDistance();
        },
        _translate(t, e, i) {
          e === void 0 && (e = this.prevIndex),
            i === void 0 && (i = this.index);
          const s = this._getTransitioner(e !== i ? e : !1, i);
          return s.translate(t), s;
        },
        _getTransitioner(t, e, i, s) {
          return (
            t === void 0 && (t = this.prevIndex),
            e === void 0 && (e = this.index),
            i === void 0 && (i = this.dir || 1),
            s === void 0 && (s = this.transitionOptions),
            new this.Transitioner(
              Zt(t) ? this.slides[t] : t,
              Zt(e) ? this.slides[e] : e,
              i * (X ? -1 : 1),
              s
            )
          );
        },
      },
    };
  function sl(t, e) {
    return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
  }
  function Fn(t) {
    return 0.5 * t + 300;
  }
  var Ln = {
      mixins: [Hn],
      props: { animation: String },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: rs,
        Transitioner: Za,
      },
      computed: {
        animation(t) {
          let { animation: e, Animations: i } = t;
          return { ...(i[e] || i.slide), name: e };
        },
        transitionOptions() {
          return { animation: this.animation };
        },
      },
      events: {
        beforeitemshow(t) {
          let { target: e } = t;
          b(e, this.clsActive);
        },
        itemshown(t) {
          let { target: e } = t;
          b(e, this.clsActivated);
        },
        itemhidden(t) {
          let { target: e } = t;
          O(e, this.clsActive, this.clsActivated);
        },
      },
    },
    Wn = {
      mixins: [le, Qi, Et, Ln],
      functional: !0,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String,
      },
      data: () => ({
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
        Animations: zn,
        template:
          '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
      }),
      created() {
        const t = v(this.template),
          e = v(this.selList, t);
        this.items.forEach(() => L(e, "<li>")),
          this.$mount(L(this.container, t));
      },
      computed: {
        caption(t, e) {
          let { selCaption: i } = t;
          return v(i, e);
        },
      },
      events: [
        { name: Ge + " " + gt + " keydown", handler: "showControls" },
        {
          name: "click",
          self: !0,
          delegate() {
            return this.selSlides;
          },
          handler(t) {
            t.defaultPrevented || this.hide();
          },
        },
        {
          name: "shown",
          self: !0,
          handler() {
            this.showControls();
          },
        },
        {
          name: "hide",
          self: !0,
          handler() {
            this.hideControls(),
              O(this.slides, this.clsActive),
              S.stop(this.slides);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.$destroy(!0);
          },
        },
        {
          name: "keyup",
          el() {
            return document;
          },
          handler(t) {
            if (!(!this.isToggled(this.$el) || !this.draggable))
              switch (t.keyCode) {
                case 37:
                  this.show("previous");
                  break;
                case 39:
                  this.show("next");
                  break;
              }
          },
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() ||
              ((this.draggable = !1),
              t.preventDefault(),
              this.toggleElement(this.$el, !0, !1),
              (this.animation = zn.scale),
              O(t.target, this.clsActive),
              this.stack.splice(1, 0, this.index));
          },
        },
        {
          name: "itemshow",
          handler() {
            At(this.caption, this.getItem().caption || "");
            for (let t = -this.preload; t <= this.preload; t++)
              this.loadItem(this.index + t);
          },
        },
        {
          name: "itemshown",
          handler() {
            this.draggable = this.$props.draggable;
          },
        },
        {
          name: "itemload",
          async handler(t, e) {
            const {
              source: i,
              type: s,
              alt: n = "",
              poster: o,
              attrs: r = {},
            } = e;
            if ((this.setItem(e, "<span uk-spinner></span>"), !i)) return;
            let a;
            const l = {
              frameborder: "0",
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "uk-responsive": "",
              "uk-video": "" + this.videoAutoplay,
            };
            if (
              s === "image" ||
              i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)
            )
              try {
                const { width: u, height: h } = await $s(i, r.srcset, r.size);
                this.setItem(
                  e,
                  Ee("img", { src: i, width: u, height: h, alt: n, ...r })
                );
              } catch {
                this.setError(e);
              }
            else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const u = Ee("video", {
                src: i,
                poster: o,
                controls: "",
                playsinline: "",
                "uk-video": "" + this.videoAutoplay,
                ...r,
              });
              k(u, "loadedmetadata", () => {
                $(u, { width: u.videoWidth, height: u.videoHeight }),
                  this.setItem(e, u);
              }),
                k(u, "error", () => this.setError(e));
            } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
              this.setItem(
                e,
                Ee("iframe", {
                  src: i,
                  frameborder: "0",
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...r,
                })
              );
            else if (
              (a = i.match(
                /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
              ))
            )
              this.setItem(
                e,
                Ee("iframe", {
                  src:
                    "https://www.youtube" +
                    (a[1] || "") +
                    ".com/embed/" +
                    a[2] +
                    (a[3] ? "?" + a[3] : ""),
                  width: 1920,
                  height: 1080,
                  ...l,
                  ...r,
                })
              );
            else if ((a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)))
              try {
                const { height: u, width: h } = await (
                  await fetch(
                    "https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                      encodeURI(i),
                    { credentials: "omit" }
                  )
                ).json();
                this.setItem(
                  e,
                  Ee("iframe", {
                    src:
                      "https://player.vimeo.com/video/" +
                      a[1] +
                      (a[2] ? "?" + a[2] : ""),
                    width: h,
                    height: u,
                    ...l,
                    ...r,
                  })
                );
              } catch {
                this.setError(e);
              }
          },
        },
      ],
      methods: {
        loadItem(t) {
          t === void 0 && (t = this.index);
          const e = this.getItem(t);
          this.getSlide(e).childElementCount || g(this.$el, "itemload", [e]);
        },
        getItem(t) {
          return (
            t === void 0 && (t = this.index), this.items[Ut(t, this.slides)]
          );
        },
        setItem(t, e) {
          g(this.$el, "itemloaded", [this, At(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer),
            (this.controlsTimer = setTimeout(
              this.hideControls,
              this.delayControls
            )),
            b(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          O(this.$el, "uk-active", "uk-transition-active");
        },
      },
    };
  function Ee(t, e) {
    const i = Lt("<" + t + ">");
    return $(i, e), i;
  }
  var nl = {
    install: ol,
    props: { toggle: String },
    data: { toggle: "a" },
    computed: {
      toggles: {
        get(t, e) {
          let { toggle: i } = t;
          return D(i, e);
        },
        watch() {
          this.hide();
        },
      },
    },
    disconnected() {
      this.hide();
    },
    events: [
      {
        name: "click",
        delegate() {
          return this.toggle + ":not(.uk-disabled)";
        },
        handler(t) {
          t.preventDefault(), this.show(t.current);
        },
      },
    ],
    methods: {
      show(t) {
        const e = gs(this.toggles.map(jn), "source");
        if (Kt(t)) {
          const { source: i } = jn(t);
          t = bt(e, (s) => {
            let { source: n } = s;
            return i === n;
          });
        }
        return (
          (this.panel =
            this.panel ||
            this.$create("lightboxPanel", { ...this.$props, items: e })),
          k(this.panel.$el, "hidden", () => (this.panel = !1)),
          this.panel.show(t)
        );
      },
      hide() {
        var t;
        return (t = this.panel) == null ? void 0 : t.hide();
      },
    },
  };
  function ol(t, e) {
    t.lightboxPanel || t.component("lightboxPanel", Wn),
      xt(e.props, t.component("lightboxPanel").options.props);
  }
  function jn(t) {
    const e = {};
    for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
      e[i === "href" ? "source" : i] = at(t, i);
    return (e.attrs = Se(e.attrs)), e;
  }
  var rl = {
    mixins: [le],
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "uk-notification",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message",
    },
    install: al,
    computed: {
      marginProp(t) {
        let { pos: e } = t;
        return "margin" + (et(e, "top") ? "Top" : "Bottom");
      },
      startProps() {
        return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
      },
    },
    created() {
      const t =
        v("." + this.clsContainer + "-" + this.pos, this.container) ||
        L(
          this.container,
          '<div class="' +
            this.clsContainer +
            " " +
            this.clsContainer +
            "-" +
            this.pos +
            '" style="display: block"></div>'
        );
      this.$mount(
        L(
          t,
          '<div class="' +
            this.clsMsg +
            (this.status ? " " + this.clsMsg + "-" + this.status : "") +
            '" role="alert"> <a href class="' +
            this.clsClose +
            '" data-uk-close></a> <div>' +
            this.message +
            "</div> </div>"
        )
      );
    },
    async connected() {
      const t = m(c(this.$el, this.marginProp));
      await S.start(c(this.$el, this.startProps), {
        opacity: 1,
        [this.marginProp]: t,
      }),
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    },
    events: {
      click(t) {
        it(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(),
          this.close();
      },
      [Rt]() {
        this.timer && clearTimeout(this.timer);
      },
      [oe]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      },
    },
    methods: {
      async close(t) {
        const e = (i) => {
          const s = E(i);
          g(i, "close", [this]),
            ut(i),
            (s != null && s.hasChildNodes()) || ut(s);
        };
        this.timer && clearTimeout(this.timer),
          t || (await S.start(this.$el, this.startProps)),
          e(this.$el);
      },
    },
  };
  function al(t) {
    t.notification.closeAll = function (e, i) {
      vt(document.body, (s) => {
        const n = t.getComponent(s, "notification");
        n && (!e || e === n.group) && n.close(i);
      });
    };
  }
  const fi = {
      x: pi,
      y: pi,
      rotate: pi,
      scale: pi,
      color: hs,
      backgroundColor: hs,
      borderColor: hs,
      blur: Yt,
      hue: Yt,
      fopacity: Yt,
      grayscale: Yt,
      invert: Yt,
      saturate: Yt,
      sepia: Yt,
      opacity: hl,
      stroke: cl,
      bgx: Yn,
      bgy: Yn,
    },
    { keys: Rn } = Object;
  var qn = {
    mixins: [ci],
    props: Jn(Rn(fi), "list"),
    data: Jn(Rn(fi), void 0),
    computed: {
      props(t, e) {
        const i = {};
        for (const n in t) n in fi && !j(t[n]) && (i[n] = t[n].slice());
        const s = {};
        for (const n in i) s[n] = fi[n](n, e, i[n], i);
        return s;
      },
    },
    events: {
      load() {
        this.$emit();
      },
    },
    methods: {
      reset() {
        for (const t in this.getCss(0)) c(this.$el, t, "");
      },
      getCss(t) {
        const e = { transform: "", filter: "" };
        for (const i in this.props) this.props[i](e, t);
        return e;
      },
    },
  };
  function pi(t, e, i) {
    let s = mi(i) || { x: "px", y: "px", rotate: "deg" }[t] || "",
      n;
    return (
      t === "x" || t === "y"
        ? ((t = "translate" + kt(t)),
          (n = (o) => m(m(o).toFixed(s === "px" ? 0 : 6))))
        : t === "scale" &&
          ((s = ""),
          (n = (o) => (mi([o]) ? K(o, "width", e, !0) / e.offsetWidth : o))),
      i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
      (i = ce(i, n)),
      (o, r) => {
        o.transform += " " + t + "(" + _e(i, r) + s + ")";
      }
    );
  }
  function hs(t, e, i) {
    return (
      i.length === 1 && i.unshift(Oe(e, t, "")),
      (i = ce(i, (s) => ll(e, s))),
      (s, n) => {
        const [o, r, a] = Gn(i, n),
          l = o
            .map(
              (u, h) => (
                (u += a * (r[h] - u)), h === 3 ? m(u) : parseInt(u, 10)
              )
            )
            .join(",");
        s[t] = "rgba(" + l + ")";
      }
    );
  }
  function ll(t, e) {
    return Oe(t, "color", e)
      .split(/[(),]/g)
      .slice(1, -1)
      .concat(1)
      .slice(0, 4)
      .map(m);
  }
  function Yt(t, e, i) {
    i.length === 1 && i.unshift(0);
    const s = mi(i) || { blur: "px", hue: "deg" }[t] || "%";
    return (
      (t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t),
      (i = ce(i)),
      (n, o) => {
        const r = _e(i, o);
        n.filter += " " + t + "(" + (r + s) + ")";
      }
    );
  }
  function hl(t, e, i) {
    return (
      i.length === 1 && i.unshift(Oe(e, t, "")),
      (i = ce(i)),
      (s, n) => {
        s[t] = _e(i, n);
      }
    );
  }
  function cl(t, e, i) {
    i.length === 1 && i.unshift(0);
    const s = mi(i),
      n = fn(e);
    return (
      (i = ce(i.reverse(), (o) => ((o = m(o)), s === "%" ? (o * n) / 100 : o))),
      i.some((o) => {
        let [r] = o;
        return r;
      })
        ? (c(e, "strokeDasharray", n),
          (o, r) => {
            o.strokeDashoffset = _e(i, r);
          })
        : T
    );
  }
  function Yn(t, e, i, s) {
    i.length === 1 && i.unshift(0);
    const n = t === "bgy" ? "height" : "width";
    s[t] = ce(i, (a) => K(a, n, e));
    const o = ["bgx", "bgy"].filter((a) => a in s);
    if (o.length === 2 && t === "bgx") return T;
    if (Oe(e, "backgroundSize", "") === "cover") return ul(t, e, i, s);
    const r = {};
    for (const a of o) r[a] = Vn(e, a);
    return Xn(o, r, s);
  }
  function ul(t, e, i, s) {
    const n = dl(e);
    if (!n.width) return T;
    const o = { width: e.offsetWidth, height: e.offsetHeight },
      r = ["bgx", "bgy"].filter((h) => h in s),
      a = {};
    for (const h of r) {
      const d = s[h].map((W) => {
          let [V] = W;
          return V;
        }),
        f = Math.min(...d),
        w = Math.max(...d),
        A = d.indexOf(f) < d.indexOf(w),
        P = w - f;
      (a[h] = (A ? -P : 0) - (A ? f : w) + "px"),
        (o[h === "bgy" ? "height" : "width"] += P);
    }
    const l = Fe.cover(n, o);
    for (const h of r) {
      const d = h === "bgy" ? "height" : "width",
        f = l[d] - o[d];
      a[h] = "max(" + Vn(e, h) + ",-" + f + "px) + " + a[h];
    }
    const u = Xn(r, a, s);
    return (h, d) => {
      u(h, d),
        (h.backgroundSize = l.width + "px " + l.height + "px"),
        (h.backgroundRepeat = "no-repeat");
    };
  }
  function Vn(t, e) {
    return Oe(t, "background-position-" + e.substr(-1), "");
  }
  function Xn(t, e, i) {
    return function (s, n) {
      for (const o of t) {
        const r = _e(i[o], n);
        s["background-position-" + o.substr(-1)] =
          "calc(" + e[o] + " + " + r + "px)";
      }
    };
  }
  const gi = {};
  function dl(t) {
    const e = c(t, "backgroundImage").replace(
      /^none|url\(["']?(.+?)["']?\)$/,
      "$1"
    );
    if (gi[e]) return gi[e];
    const i = new Image();
    return e && ((i.src = e), !i.naturalWidth)
      ? ((i.onload = () => {
          (gi[e] = cs(i)), g(t, zt("load", !1));
        }),
        cs(i))
      : (gi[e] = cs(i));
  }
  function cs(t) {
    return { width: t.naturalWidth, height: t.naturalHeight };
  }
  function ce(t, e) {
    e === void 0 && (e = m);
    const i = [],
      { length: s } = t;
    let n = 0;
    for (let o = 0; o < s; o++) {
      let [r, a] = B(t[o]) ? t[o].trim().split(" ") : [t[o]];
      if (
        ((r = e(r)),
        (a = a ? m(a) / 100 : null),
        o === 0
          ? a === null
            ? (a = 0)
            : a && i.push([r, 0])
          : o === s - 1 &&
            (a === null ? (a = 1) : a !== 1 && (i.push([r, a]), (a = 1))),
        i.push([r, a]),
        a === null)
      )
        n++;
      else if (n) {
        const l = i[o - n - 1][1],
          u = (a - l) / (n + 1);
        for (let h = n; h > 0; h--) i[o - h][1] = l + u * (n - h + 1);
        n = 0;
      }
    }
    return i;
  }
  function Gn(t, e) {
    const i =
      bt(t.slice(1), (s) => {
        let [, n] = s;
        return e <= n;
      }) + 1;
    return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
  }
  function _e(t, e) {
    const [i, s, n] = Gn(t, e);
    return Zt(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s;
  }
  const fl = /^-?\d+(\S+)/;
  function mi(t, e) {
    for (const i of t) {
      const s = i.match == null ? void 0 : i.match(fl);
      if (s) return s[1];
    }
    return e;
  }
  function Oe(t, e, i) {
    const s = t.style[e],
      n = c(c(t, e, i), e);
    return (t.style[e] = s), n;
  }
  function Jn(t, e) {
    return t.reduce((i, s) => ((i[s] = e), i), {});
  }
  var pl = {
    mixins: [qn, wt, ni],
    props: {
      target: String,
      viewport: Number,
      easing: Number,
      start: String,
      end: String,
    },
    data: { target: !1, viewport: 1, easing: 1, start: 0, end: 0 },
    computed: {
      target(t, e) {
        let { target: i } = t;
        return Kn((i && ct(i, e)) || e);
      },
      start(t) {
        let { start: e } = t;
        return K(e, "height", this.target, !0);
      },
      end(t) {
        let { end: e, viewport: i } = t;
        return K(
          e || ((i = (1 - i) * 100) && i + "vh+" + i + "%"),
          "height",
          this.target,
          !0
        );
      },
    },
    update: {
      read(t, e) {
        let { percent: i } = t;
        if ((e.has("scroll") || (i = !1), !this.matchMedia)) return;
        const s = i;
        return (
          (i = gl(Ji(this.target, this.start, this.end), this.easing)),
          { percent: i, style: s === i ? !1 : this.getCss(i) }
        );
      },
      write(t) {
        let { style: e } = t;
        if (!this.matchMedia) {
          this.reset();
          return;
        }
        e && c(this.$el, e);
      },
      events: ["scroll", "resize"],
    },
  };
  function gl(t, e) {
    return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
  }
  function Kn(t) {
    return t ? ("offsetTop" in t ? t : Kn(E(t))) : document.documentElement;
  }
  var Zn = {
      update: {
        write() {
          if (this.stack.length || this.dragging) return;
          const t = this.getValidIndex(this.index);
          !~this.prevIndex || this.index !== t
            ? this.show(t)
            : this._translate(1, this.prevIndex, this.index);
        },
        events: ["resize"],
      },
    },
    Qn = {
      mixins: [Te],
      connected() {
        this.lazyload(this.slides, this.getAdjacentSlides);
      },
    };
  function ml(t, e, i, s) {
    let { center: n, easing: o, list: r } = s;
    const a = new Le(),
      l = t ? Be(t, r, n) : Be(e, r, n) + x(e).width * i,
      u = e ? Be(e, r, n) : l + x(t).width * i * (X ? -1 : 1);
    return {
      dir: i,
      show(h, d, f) {
        d === void 0 && (d = 0);
        const w = f ? "linear" : o;
        return (
          (h -= Math.round(h * U(d, -1, 1))),
          this.translate(d),
          (d = t ? d : U(d, 0, 1)),
          us(this.getItemIn(), "itemin", {
            percent: d,
            duration: h,
            timing: w,
            dir: i,
          }),
          t &&
            us(this.getItemIn(!0), "itemout", {
              percent: 1 - d,
              duration: h,
              timing: w,
              dir: i,
            }),
          S.start(r, { transform: z(-u * (X ? -1 : 1), "px") }, h, w).then(
            a.resolve,
            T
          ),
          a.promise
        );
      },
      cancel() {
        S.cancel(r);
      },
      reset() {
        c(r, "transform", "");
      },
      forward(h, d) {
        return (
          d === void 0 && (d = this.percent()), S.cancel(r), this.show(h, d, !0)
        );
      },
      translate(h) {
        const d = this.getDistance() * i * (X ? -1 : 1);
        c(
          r,
          "transform",
          z(U(-u + (d - d * h), -vi(r), x(r).width) * (X ? -1 : 1), "px")
        );
        const f = this.getActives(),
          w = this.getItemIn(),
          A = this.getItemIn(!0);
        h = t ? U(h, -1, 1) : 0;
        for (const P of M(r)) {
          const W = p(f, P),
            V = P === w,
            _t = P === A,
            ds =
              V ||
              (!_t &&
                (W || (i * (X ? -1 : 1) === -1) ^ (wi(P, r) > wi(t || e))));
          us(P, "itemtranslate" + (ds ? "in" : "out"), {
            dir: i,
            percent: _t ? 1 - h : V ? h : W ? 1 : 0,
          });
        }
      },
      percent() {
        return Math.abs(
          (c(r, "transform").split(",")[4] * (X ? -1 : 1) + l) / (u - l)
        );
      },
      getDistance() {
        return Math.abs(u - l);
      },
      getItemIn(h) {
        h === void 0 && (h = !1);
        let d = this.getActives(),
          f = to(r, Be(e || t, r, n));
        if (h) {
          const w = d;
          (d = f), (f = w);
        }
        return f[bt(f, (w) => !p(d, w))];
      },
      getActives() {
        return to(r, Be(t || e, r, n));
      },
    };
  }
  function Be(t, e, i) {
    const s = wi(t, e);
    return i ? s - vl(t, e) : Math.min(s, Un(e));
  }
  function Un(t) {
    return Math.max(0, vi(t) - x(t).width);
  }
  function vi(t) {
    return M(t).reduce((e, i) => x(i).width + e, 0);
  }
  function vl(t, e) {
    return x(e).width / 2 - x(t).width / 2;
  }
  function wi(t, e) {
    return (
      (t && (Re(t).left + (X ? x(t).width - x(e).width : 0)) * (X ? -1 : 1)) ||
      0
    );
  }
  function to(t, e) {
    e -= 1;
    const i = x(t).width,
      s = e + i + 2;
    return M(t).filter((n) => {
      const o = wi(n, t),
        r = o + Math.min(x(n).width, i);
      return o >= e && r <= s;
    });
  }
  function us(t, e, i) {
    g(t, zt(e, !1, !1, i));
  }
  var wl = {
    mixins: [nt, Hn, Zn, Qn],
    props: { center: Boolean, sets: Boolean },
    data: {
      center: !1,
      sets: !1,
      attrItem: "uk-slider-item",
      selList: ".uk-slider-items",
      selNav: ".uk-slider-nav",
      clsContainer: "uk-slider-container",
      Transitioner: ml,
    },
    computed: {
      avgWidth() {
        return vi(this.list) / this.length;
      },
      finite(t) {
        let { finite: e } = t;
        return (
          e ||
          Math.ceil(vi(this.list)) <
            Math.trunc(x(this.list).width + bl(this.list) + this.center)
        );
      },
      maxIndex() {
        if (!this.finite || (this.center && !this.sets)) return this.length - 1;
        if (this.center) return Qt(this.sets);
        let t = 0;
        const e = Un(this.list),
          i = bt(this.slides, (s) => {
            if (t >= e) return !0;
            t += x(s).width;
          });
        return ~i ? i : this.length - 1;
      },
      sets(t) {
        let { sets: e } = t;
        if (!e) return;
        let i = 0;
        const s = [],
          n = x(this.list).width;
        for (let o = 0; o < this.slides.length; o++) {
          const r = x(this.slides[o]).width;
          i + r > n && (i = 0),
            this.center
              ? i < n / 2 &&
                i + r + x(this.slides[+o + 1]).width / 2 > n / 2 &&
                (s.push(+o), (i = n / 2 - r / 2))
              : i === 0 && s.push(Math.min(+o, this.maxIndex)),
            (i += r);
        }
        if (s.length) return s;
      },
      transitionOptions() {
        return { center: this.center, list: this.list };
      },
    },
    connected() {
      F(this.$el, this.clsContainer, !v("." + this.clsContainer, this.$el));
    },
    update: {
      write() {
        for (const t of this.navItems) {
          const e = Ct(at(t, this.attrItem));
          e !== !1 &&
            (t.hidden =
              !this.maxIndex ||
              e > this.maxIndex ||
              (this.sets && !p(this.sets, e)));
        }
        this.length &&
          !this.dragging &&
          !this.stack.length &&
          (this.reorder(), this._translate(1)),
          this.updateActiveClasses();
      },
      events: ["resize"],
    },
    events: {
      beforeitemshow(t) {
        !this.dragging &&
          this.sets &&
          this.stack.length < 2 &&
          !p(this.sets, this.index) &&
          (this.index = this.getValidIndex());
        const e = Math.abs(
          this.index -
            this.prevIndex +
            ((this.dir > 0 && this.index < this.prevIndex) ||
            (this.dir < 0 && this.index > this.prevIndex)
              ? (this.maxIndex + 1) * this.dir
              : 0)
        );
        if (!this.dragging && e > 1) {
          for (let s = 0; s < e; s++)
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
          return;
        }
        const i =
          this.dir < 0 || !this.slides[this.prevIndex]
            ? this.index
            : this.prevIndex;
        (this.duration =
          Fn(this.avgWidth / this.velocity) *
          (x(this.slides[i]).width / this.avgWidth)),
          this.reorder();
      },
      itemshow() {
        ~this.prevIndex &&
          b(this._getTransitioner().getItemIn(), this.clsActive);
      },
      itemshown() {
        this.updateActiveClasses();
      },
    },
    methods: {
      reorder() {
        if (this.finite) {
          c(this.slides, "order", "");
          return;
        }
        const t =
          this.dir > 0 && this.slides[this.prevIndex]
            ? this.prevIndex
            : this.index;
        if (
          (this.slides.forEach((n, o) =>
            c(
              n,
              "order",
              this.dir > 0 && o < t
                ? 1
                : this.dir < 0 && o >= this.index
                ? -1
                : ""
            )
          ),
          !this.center)
        )
          return;
        const e = this.slides[t];
        let i = x(this.list).width / 2 - x(e).width / 2,
          s = 0;
        for (; i > 0; ) {
          const n = this.getIndex(--s + t, t),
            o = this.slides[n];
          c(o, "order", n > t ? -2 : -1), (i -= x(o).width);
        }
      },
      updateActiveClasses() {
        const t = this._getTransitioner(this.index).getActives(),
          e = [
            this.clsActive,
            ((!this.sets || p(this.sets, m(this.index))) &&
              this.clsActivated) ||
              "",
          ];
        for (const i of this.slides) F(i, e, p(t, i));
      },
      getValidIndex(t, e) {
        if (
          (t === void 0 && (t = this.index),
          e === void 0 && (e = this.prevIndex),
          (t = this.getIndex(t, e)),
          !this.sets)
        )
          return t;
        let i;
        do {
          if (p(this.sets, t)) return t;
          (i = t), (t = this.getIndex(t + this.dir, e));
        } while (t !== i);
        return t;
      },
      getAdjacentSlides() {
        const { width: t } = x(this.list),
          e = -t,
          i = t * 2,
          s = x(this.slides[this.index]).width,
          n = this.center ? t / 2 - s / 2 : 0,
          o = new Set();
        for (const r of [-1, 1]) {
          let a = n + (r > 0 ? s : 0),
            l = 0;
          do {
            const u = this.slides[this.getIndex(this.index + r + l++ * r)];
            (a += x(u).width * r), o.add(u);
          } while (this.slides.length > l && a > e && a < i);
        }
        return Array.from(o);
      },
    },
  };
  function bl(t) {
    return Math.max(0, ...M(t).map((e) => x(e).width));
  }
  var eo = {
    mixins: [qn],
    data: { selItem: "!li" },
    beforeConnect() {
      this.item = ct(this.selItem, this.$el);
    },
    disconnected() {
      this.item = null;
    },
    events: [
      {
        name: "itemin itemout",
        self: !0,
        el() {
          return this.item;
        },
        handler(t) {
          let {
            type: e,
            detail: { percent: i, duration: s, timing: n, dir: o },
          } = t;
          G.read(() => {
            const r = this.getCss(so(e, o, i)),
              a = this.getCss(io(e) ? 0.5 : o > 0 ? 1 : 0);
            G.write(() => {
              c(this.$el, r), S.start(this.$el, a, s, n).catch(T);
            });
          });
        },
      },
      {
        name: "transitioncanceled transitionend",
        self: !0,
        el() {
          return this.item;
        },
        handler() {
          S.cancel(this.$el);
        },
      },
      {
        name: "itemtranslatein itemtranslateout",
        self: !0,
        el() {
          return this.item;
        },
        handler(t) {
          let {
            type: e,
            detail: { percent: i, dir: s },
          } = t;
          G.read(() => {
            const n = this.getCss(so(e, s, i));
            G.write(() => c(this.$el, n));
          });
        },
      },
    ],
  };
  function io(t) {
    return Gt(t, "in");
  }
  function so(t, e, i) {
    return (i /= 2), io(t) ^ (e < 0) ? i : 1 - i;
  }
  var xl = {
      ...rs,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        },
      },
      scale: {
        show() {
          return [
            { opacity: 0, transform: he(1 + 0.5), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: he(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
      },
      pull: {
        show(t) {
          return t < 0
            ? [
                { transform: z(30), zIndex: -1 },
                { transform: z(), zIndex: 0 },
              ]
            : [
                { transform: z(-100), zIndex: 0 },
                { transform: z(), zIndex: -1 },
              ];
        },
        percent(t, e, i) {
          return i < 0 ? 1 - Ae(e) : Ae(t);
        },
        translate(t, e) {
          return e < 0
            ? [
                { transform: z(30 * t), zIndex: -1 },
                { transform: z(-100 * (1 - t)), zIndex: 0 },
              ]
            : [
                { transform: z(-t * 100), zIndex: 0 },
                { transform: z(30 * (1 - t)), zIndex: -1 },
              ];
        },
      },
      push: {
        show(t) {
          return t < 0
            ? [
                { transform: z(100), zIndex: 0 },
                { transform: z(), zIndex: -1 },
              ]
            : [
                { transform: z(-30), zIndex: -1 },
                { transform: z(), zIndex: 0 },
              ];
        },
        percent(t, e, i) {
          return i > 0 ? 1 - Ae(e) : Ae(t);
        },
        translate(t, e) {
          return e < 0
            ? [
                { transform: z(t * 100), zIndex: 0 },
                { transform: z(-30 * (1 - t)), zIndex: -1 },
              ]
            : [
                { transform: z(-30 * t), zIndex: -1 },
                { transform: z(100 * (1 - t)), zIndex: 0 },
              ];
        },
      },
    },
    yl = {
      mixins: [nt, Ln, Zn, Qn],
      props: { ratio: String, minHeight: Number, maxHeight: Number },
      data: {
        ratio: "16:9",
        minHeight: !1,
        maxHeight: !1,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations: xl,
      },
      update: {
        read() {
          if (!this.list) return !1;
          let [t, e] = this.ratio.split(":").map(Number);
          return (
            (e = (e * this.list.offsetWidth) / t || 0),
            this.minHeight && (e = Math.max(this.minHeight, e)),
            this.maxHeight && (e = Math.min(this.maxHeight, e)),
            { height: e - se(this.list, "height", "content-box") }
          );
        },
        write(t) {
          let { height: e } = t;
          e > 0 && c(this.list, "minHeight", e);
        },
        events: ["resize"],
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        },
      },
    },
    $l = {
      mixins: [nt, Mn],
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
        handle: String,
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
        pos: {},
      },
      created() {
        for (const t of ["init", "start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            xt(this.pos, ie(i)), e(i);
          };
        }
      },
      events: { name: gt, passive: !1, handler: "init" },
      computed: {
        target() {
          return (this.$el.tBodies || [this.$el])[0];
        },
        items() {
          return M(this.target);
        },
        isEmpty: {
          get() {
            return fe(this.items);
          },
          watch(t) {
            F(this.target, this.clsEmpty, t);
          },
          immediate: !0,
        },
        handles: {
          get(t, e) {
            let { handle: i } = t;
            return i ? D(i, e) : this.items;
          },
          watch(t, e) {
            c(e, { touchAction: "", userSelect: "" }),
              c(t, { touchAction: jt ? "none" : "", userSelect: "none" });
          },
          immediate: !0,
        },
      },
      update: {
        write(t) {
          if (!this.drag || !E(this.placeholder)) return;
          const {
            pos: { x: e, y: i },
            origin: { offsetTop: s, offsetLeft: n },
            placeholder: o,
          } = this;
          c(this.drag, { top: i - s, left: e - n });
          const r = this.getSortable(document.elementFromPoint(e, i));
          if (!r) return;
          const { items: a } = r;
          if (a.some(S.inProgress)) return;
          const l = Cl(a, { x: e, y: i });
          if (a.length && (!l || l === o)) return;
          const u = this.getSortable(o),
            h = Il(r.target, l, o, e, i, r === u && t.moved !== l);
          h !== !1 &&
            ((h && o === h) ||
              (r !== u ? (u.remove(o), (t.moved = l)) : delete t.moved,
              r.insert(o, h),
              this.touched.add(r)));
        },
        events: ["move"],
      },
      methods: {
        init(t) {
          const { target: e, button: i, defaultPrevented: s } = t,
            [n] = this.items.filter((o) => _(e, o));
          !n ||
            s ||
            i > 0 ||
            Pi(e) ||
            _(e, "." + this.clsNoDrag) ||
            (this.handle && !_(e, this.handle)) ||
            (t.preventDefault(),
            (this.touched = new Set([this])),
            (this.placeholder = n),
            (this.origin = { target: e, index: ee(n), ...this.pos }),
            k(document, Ge, this.move),
            k(document, Pt, this.end),
            this.threshold || this.start(t));
        },
        start(t) {
          this.drag = Tl(this.$container, this.placeholder);
          const { left: e, top: i } = this.placeholder.getBoundingClientRect();
          xt(this.origin, {
            offsetLeft: this.pos.x - e,
            offsetTop: this.pos.y - i,
          }),
            b(this.drag, this.clsDrag, this.clsCustom),
            b(this.placeholder, this.clsPlaceholder),
            b(this.items, this.clsItem),
            b(document.documentElement, this.clsDragState),
            g(this.$el, "start", [this, this.placeholder]),
            kl(this.pos),
            this.move(t);
        },
        move(t) {
          this.drag
            ? this.$emit("move")
            : (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
              this.start(t);
        },
        end() {
          if (
            (Nt(document, Ge, this.move),
            Nt(document, Pt, this.end),
            !this.drag)
          )
            return;
          Sl();
          const t = this.getSortable(this.placeholder);
          this === t
            ? this.origin.index !== ee(this.placeholder) &&
              g(this.$el, "moved", [this, this.placeholder])
            : (g(t.$el, "added", [t, this.placeholder]),
              g(this.$el, "removed", [this, this.placeholder])),
            g(this.$el, "stop", [this, this.placeholder]),
            ut(this.drag),
            (this.drag = null);
          for (const { clsPlaceholder: e, clsItem: i } of this.touched)
            for (const s of this.touched) O(s.items, e, i);
          (this.touched = null), O(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          b(this.items, this.clsItem);
          const i = () => (e ? Fi(e, t) : L(this.target, t));
          this.animate(i);
        },
        remove(t) {
          !_(t, this.target) || this.animate(() => ut(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (
              e &&
              (e === this || (this.group !== !1 && e.group === this.group))
            )
              return e;
          } while ((t = E(t)));
        },
      },
    };
  let no;
  function kl(t) {
    let e = Date.now();
    no = setInterval(() => {
      let { x: i, y: s } = t;
      s += document.scrollingElement.scrollTop;
      const n = (Date.now() - e) * 0.3;
      (e = Date.now()),
        tt(document.elementFromPoint(i, t.y), /auto|scroll/)
          .reverse()
          .some((o) => {
            let { scrollTop: r, scrollHeight: a } = o;
            const { top: l, bottom: u, height: h } = lt(o);
            if (l < s && l + 35 > s) r -= n;
            else if (u > s && u - 35 < s) r += n;
            else return;
            if (r > 0 && r < a - h) return (o.scrollTop = r), !0;
          });
    }, 15);
  }
  function Sl() {
    clearInterval(no);
  }
  function Tl(t, e) {
    const i = L(
      t,
      e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2")
    );
    return (
      c(i, "margin", "0", "important"),
      c(i, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: c(e, "padding"),
      }),
      J(i.firstElementChild, J(e.firstElementChild)),
      i
    );
  }
  function Cl(t, e) {
    return t[bt(t, (i) => He(e, i.getBoundingClientRect()))];
  }
  function Il(t, e, i, s, n, o) {
    if (!M(t).length) return;
    const r = e.getBoundingClientRect();
    if (!o)
      return Al(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
    const a = i.getBoundingClientRect(),
      l = oo([r.top, r.bottom], [a.top, a.bottom]),
      u = l ? s : n,
      h = l ? "width" : "height",
      d = l ? "left" : "top",
      f = l ? "right" : "bottom",
      w = a[h] < r[h] ? r[h] - a[h] : 0;
    return a[d] < r[d]
      ? w && u < r[d] + w
        ? !1
        : e.nextElementSibling
      : w && u > r[f] - w
      ? !1
      : e;
  }
  function Al(t, e) {
    const i = M(t).length === 1;
    i && L(t, e);
    const s = M(t),
      n = s.some((o, r) => {
        const a = o.getBoundingClientRect();
        return s.slice(r + 1).some((l) => {
          const u = l.getBoundingClientRect();
          return !oo([a.left, a.right], [u.left, u.right]);
        });
      });
    return i && ut(e), n;
  }
  function oo(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }
  var Pl = {
    mixins: [le, Et, Us],
    args: "title",
    props: { delay: Number, title: String },
    data: {
      pos: "top",
      title: "",
      delay: 0,
      animation: ["uk-animation-scale-up"],
      duration: 100,
      cls: "uk-active",
    },
    beforeConnect() {
      (this._hasTitle = It(this.$el, "title")),
        $(this.$el, "title", ""),
        this.updateAria(!1),
        El(this.$el);
    },
    disconnected() {
      this.hide(), $(this.$el, "title", this._hasTitle ? this.title : null);
    },
    methods: {
      show() {
        this.isToggled(this.tooltip || null) ||
          !this.title ||
          ((this._unbind = N(
            document,
            "show keydown " + gt,
            this.hide,
            !1,
            (t) =>
              (t.type === gt && !_(t.target, this.$el)) ||
              (t.type === "keydown" && t.keyCode === 27) ||
              (t.type === "show" &&
                t.detail[0] !== this &&
                t.detail[0].$name === this.$name)
          )),
          clearTimeout(this.showTimer),
          (this.showTimer = setTimeout(this._show, this.delay)));
      },
      async hide() {
        H(this.$el, "input:focus") ||
          (clearTimeout(this.showTimer),
          this.isToggled(this.tooltip || null) &&
            (await this.toggleElement(this.tooltip, !1, !1),
            ut(this.tooltip),
            (this.tooltip = null),
            this._unbind()));
      },
      _show() {
        (this.tooltip = L(
          this.container,
          '<div class="uk-' +
            this.$options.name +
            '"> <div class="uk-' +
            this.$options.name +
            '-inner">' +
            this.title +
            "</div> </div>"
        )),
          k(this.tooltip, "toggled", (t, e) => {
            if ((this.updateAria(e), !e)) return;
            this.positionAt(this.tooltip, this.$el);
            const [i, s] = _l(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? qe(i) + "-" + s : s + "-" + qe(i);
          }),
          this.toggleElement(this.tooltip, !0);
      },
      updateAria(t) {
        $(this.$el, "aria-expanded", t);
      },
    },
    events: {
      focus: "show",
      blur: "hide",
      [Rt + " " + oe](t) {
        $t(t) || this[t.type === Rt ? "show" : "hide"]();
      },
      [gt](t) {
        $t(t) && this.show();
      },
    },
  };
  function El(t) {
    je(t) || $(t, "tabindex", "0");
  }
  function _l(t, e, i) {
    let [s, n] = i;
    const o = I(t),
      r = I(e),
      a = [
        ["left", "right"],
        ["top", "bottom"],
      ];
    for (const u of a) {
      if (o[u[0]] >= r[u[1]]) {
        s = u[1];
        break;
      }
      if (o[u[1]] <= r[u[0]]) {
        s = u[0];
        break;
      }
    }
    const l = p(a[0], s) ? a[1] : a[0];
    return (
      o[l[0]] === r[l[0]]
        ? (n = l[0])
        : o[l[1]] === r[l[1]]
        ? (n = l[1])
        : (n = "center"),
      [s, n]
    );
  }
  var Ol = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String,
    },
    data: {
      allow: !1,
      clsDragover: "uk-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      msgInvalidMime: "Invalid File Type: %s",
      msgInvalidName: "Invalid File Name: %s",
      msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: T,
      beforeAll: T,
      beforeSend: T,
      complete: T,
      completeAll: T,
      error: T,
      fail: T,
      load: T,
      loadEnd: T,
      loadStart: T,
      progress: T,
    },
    events: {
      change(t) {
        !H(t.target, 'input[type="file"]') ||
          (t.preventDefault(),
          t.target.files && this.upload(t.target.files),
          (t.target.value = ""));
      },
      drop(t) {
        bi(t);
        const e = t.dataTransfer;
        !(e != null && e.files) ||
          (O(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter(t) {
        bi(t);
      },
      dragover(t) {
        bi(t), b(this.$el, this.clsDragover);
      },
      dragleave(t) {
        bi(t), O(this.$el, this.clsDragover);
      },
    },
    methods: {
      async upload(t) {
        if (((t = yi(t)), !t.length)) return;
        g(this.$el, "upload", [t]);
        for (const s of t) {
          if (this.maxSize && this.maxSize * 1e3 < s.size) {
            this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
            return;
          }
          if (this.allow && !ro(this.allow, s.name)) {
            this.fail(this.msgInvalidName.replace("%s", this.allow));
            return;
          }
          if (this.mime && !ro(this.mime, s.type)) {
            this.fail(this.msgInvalidMime.replace("%s", this.mime));
            return;
          }
        }
        this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
        const e = Bl(t, this.concurrent),
          i = async (s) => {
            const n = new FormData();
            s.forEach((o) => n.append(this.name, o));
            for (const o in this.params) n.append(o, this.params[o]);
            try {
              const o = await ys(this.url, {
                data: n,
                method: this.method,
                responseType: this.type,
                beforeSend: (r) => {
                  const { xhr: a } = r;
                  a.upload && k(a.upload, "progress", this.progress);
                  for (const l of ["loadStart", "load", "loadEnd", "abort"])
                    k(a, l.toLowerCase(), this[l]);
                  return this.beforeSend(r);
                },
              });
              this.complete(o),
                e.length ? await i(e.shift()) : this.completeAll(o);
            } catch (o) {
              this.error(o);
            }
          };
        await i(e.shift());
      },
    },
  };
  function ro(t, e) {
    return e.match(
      new RegExp(
        "^" +
          t
            .replace(/\//g, "\\/")
            .replace(/\*\*/g, "(\\/[^\\/]+)*")
            .replace(/\*/g, "[^\\/]+")
            .replace(/((?!\\))\?/g, "$1.") +
          "$",
        "i"
      )
    );
  }
  function Bl(t, e) {
    const i = [];
    for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
    return i;
  }
  function bi(t) {
    t.preventDefault(), t.stopPropagation();
  }
  var Ml = Object.freeze({
    __proto__: null,
    Countdown: Ha,
    Filter: qa,
    Lightbox: nl,
    LightboxPanel: Wn,
    Notification: rl,
    Parallax: pl,
    Slider: wl,
    SliderParallax: eo,
    Slideshow: yl,
    SlideshowParallax: eo,
    Sortable: $l,
    Tooltip: Pl,
    Upload: Ol,
  });
  return yt(Ml, (t, e) => st.component(e, t)), st;
});
