function Ar(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: Ha} = Object.prototype
  , {getPrototypeOf: jn} = Object
  , fi = (t => e => {
    const i = Ha.call(e);
    return t[i] || (t[i] = i.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , le = t => (t = t.toLowerCase(),
e => fi(e) === t)
  , hi = t => e => typeof e === t
  , {isArray: tt} = Array
  , xt = hi("undefined");
function qa(t) {
    return t !== null && !xt(t) && t.constructor !== null && !xt(t.constructor) && J(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const Lr = le("ArrayBuffer");
function Va(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Lr(t.buffer),
    e
}
const Wa = hi("string")
  , J = hi("function")
  , Ir = hi("number")
  , pi = t => t !== null && typeof t == "object"
  , Ga = t => t === !0 || t === !1
  , Xt = t => {
    if (fi(t) !== "object")
        return !1;
    const e = jn(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
  , Ua = le("Date")
  , Xa = le("File")
  , Ya = le("Blob")
  , Ka = le("FileList")
  , Za = t => pi(t) && J(t.pipe)
  , Ja = t => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || J(t.append) && ((e = fi(t)) === "formdata" || e === "object" && J(t.toString) && t.toString() === "[object FormData]"))
}
  , Qa = le("URLSearchParams")
  , [el,tl,il,nl] = ["ReadableStream", "Request", "Response", "Headers"].map(le)
  , sl = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Et(t, e, {allOwnKeys: i=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let n, s;
    if (typeof t != "object" && (t = [t]),
    tt(t))
        for (n = 0,
        s = t.length; n < s; n++)
            e.call(null, t[n], n, t);
    else {
        const r = i ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , o = r.length;
        let a;
        for (n = 0; n < o; n++)
            a = r[n],
            e.call(null, t[a], a, t)
    }
}
function Rr(t, e) {
    e = e.toLowerCase();
    const i = Object.keys(t);
    let n = i.length, s;
    for (; n-- > 0; )
        if (s = i[n],
        e === s.toLowerCase())
            return s;
    return null
}
const Re = ( () => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , kr = t => !xt(t) && t !== Re;
function ln() {
    const {caseless: t} = kr(this) && this || {}
      , e = {}
      , i = (n, s) => {
        const r = t && Rr(e, s) || s;
        Xt(e[r]) && Xt(n) ? e[r] = ln(e[r], n) : Xt(n) ? e[r] = ln({}, n) : tt(n) ? e[r] = n.slice() : e[r] = n
    }
    ;
    for (let n = 0, s = arguments.length; n < s; n++)
        arguments[n] && Et(arguments[n], i);
    return e
}
const rl = (t, e, i, {allOwnKeys: n}={}) => (Et(e, (s, r) => {
    i && J(s) ? t[r] = Ar(s, i) : t[r] = s
}
, {
    allOwnKeys: n
}),
t)
  , ol = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , al = (t, e, i, n) => {
    t.prototype = Object.create(e.prototype, n),
    t.prototype.constructor = t,
    Object.defineProperty(t, "super", {
        value: e.prototype
    }),
    i && Object.assign(t.prototype, i)
}
  , ll = (t, e, i, n) => {
    let s, r, o;
    const a = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (s = Object.getOwnPropertyNames(t),
        r = s.length; r-- > 0; )
            o = s[r],
            (!n || n(o, t, e)) && !a[o] && (e[o] = t[o],
            a[o] = !0);
        t = i !== !1 && jn(t)
    } while (t && (!i || i(t, e)) && t !== Object.prototype);
    return e
}
  , cl = (t, e, i) => {
    t = String(t),
    (i === void 0 || i > t.length) && (i = t.length),
    i -= e.length;
    const n = t.indexOf(e, i);
    return n !== -1 && n === i
}
  , dl = t => {
    if (!t)
        return null;
    if (tt(t))
        return t;
    let e = t.length;
    if (!Ir(e))
        return null;
    const i = new Array(e);
    for (; e-- > 0; )
        i[e] = t[e];
    return i
}
  , ul = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && jn(Uint8Array))
  , fl = (t, e) => {
    const n = (t && t[Symbol.iterator]).call(t);
    let s;
    for (; (s = n.next()) && !s.done; ) {
        const r = s.value;
        e.call(t, r[0], r[1])
    }
}
  , hl = (t, e) => {
    let i;
    const n = [];
    for (; (i = t.exec(e)) !== null; )
        n.push(i);
    return n
}
  , pl = le("HTMLFormElement")
  , ml = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(i, n, s) {
    return n.toUpperCase() + s
})
  , bs = ( ({hasOwnProperty: t}) => (e, i) => t.call(e, i))(Object.prototype)
  , gl = le("RegExp")
  , zr = (t, e) => {
    const i = Object.getOwnPropertyDescriptors(t)
      , n = {};
    Et(i, (s, r) => {
        let o;
        (o = e(s, r, t)) !== !1 && (n[r] = o || s)
    }
    ),
    Object.defineProperties(t, n)
}
  , vl = t => {
    zr(t, (e, i) => {
        if (J(t) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
            return !1;
        const n = t[i];
        if (J(n)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + i + "'")
            }
            )
        }
    }
    )
}
  , bl = (t, e) => {
    const i = {}
      , n = s => {
        s.forEach(r => {
            i[r] = !0
        }
        )
    }
    ;
    return tt(t) ? n(t) : n(String(t).split(e)),
    i
}
  , yl = () => {}
  , wl = (t, e) => t != null && Number.isFinite(t = +t) ? t : e
  , Pi = "abcdefghijklmnopqrstuvwxyz"
  , ys = "0123456789"
  , Dr = {
    DIGIT: ys,
    ALPHA: Pi,
    ALPHA_DIGIT: Pi + Pi.toUpperCase() + ys
}
  , xl = (t=16, e=Dr.ALPHA_DIGIT) => {
    let i = "";
    const {length: n} = e;
    for (; t--; )
        i += e[Math.random() * n | 0];
    return i
}
;
function Sl(t) {
    return !!(t && J(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator])
}
const El = t => {
    const e = new Array(10)
      , i = (n, s) => {
        if (pi(n)) {
            if (e.indexOf(n) >= 0)
                return;
            if (!("toJSON"in n)) {
                e[s] = n;
                const r = tt(n) ? [] : {};
                return Et(n, (o, a) => {
                    const l = i(o, s + 1);
                    !xt(l) && (r[a] = l)
                }
                ),
                e[s] = void 0,
                r
            }
        }
        return n
    }
    ;
    return i(t, 0)
}
  , Tl = le("AsyncFunction")
  , Cl = t => t && (pi(t) || J(t)) && J(t.then) && J(t.catch)
  , Fr = ( (t, e) => t ? setImmediate : e ? ( (i, n) => (Re.addEventListener("message", ({source: s, data: r}) => {
    s === Re && r === i && n.length && n.shift()()
}
, !1),
s => {
    n.push(s),
    Re.postMessage(i, "*")
}
))(`axios@${Math.random()}`, []) : i => setTimeout(i))(typeof setImmediate == "function", J(Re.postMessage))
  , Pl = typeof queueMicrotask < "u" ? queueMicrotask.bind(Re) : typeof process < "u" && process.nextTick || Fr
  , w = {
    isArray: tt,
    isArrayBuffer: Lr,
    isBuffer: qa,
    isFormData: Ja,
    isArrayBufferView: Va,
    isString: Wa,
    isNumber: Ir,
    isBoolean: Ga,
    isObject: pi,
    isPlainObject: Xt,
    isReadableStream: el,
    isRequest: tl,
    isResponse: il,
    isHeaders: nl,
    isUndefined: xt,
    isDate: Ua,
    isFile: Xa,
    isBlob: Ya,
    isRegExp: gl,
    isFunction: J,
    isStream: Za,
    isURLSearchParams: Qa,
    isTypedArray: ul,
    isFileList: Ka,
    forEach: Et,
    merge: ln,
    extend: rl,
    trim: sl,
    stripBOM: ol,
    inherits: al,
    toFlatObject: ll,
    kindOf: fi,
    kindOfTest: le,
    endsWith: cl,
    toArray: dl,
    forEachEntry: fl,
    matchAll: hl,
    isHTMLForm: pl,
    hasOwnProperty: bs,
    hasOwnProp: bs,
    reduceDescriptors: zr,
    freezeMethods: vl,
    toObjectSet: bl,
    toCamelCase: ml,
    noop: yl,
    toFiniteNumber: wl,
    findKey: Rr,
    global: Re,
    isContextDefined: kr,
    ALPHABET: Dr,
    generateString: xl,
    isSpecCompliantForm: Sl,
    toJSONObject: El,
    isAsyncFn: Tl,
    isThenable: Cl,
    setImmediate: Fr,
    asap: Pl
};
function L(t, e, i, n, s) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = t,
    this.name = "AxiosError",
    e && (this.code = e),
    i && (this.config = i),
    n && (this.request = n),
    s && (this.response = s,
    this.status = s.status ? s.status : null)
}
w.inherits(L, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: w.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Nr = L.prototype
  , jr = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
    jr[t] = {
        value: t
    }
}
);
Object.defineProperties(L, jr);
Object.defineProperty(Nr, "isAxiosError", {
    value: !0
});
L.from = (t, e, i, n, s, r) => {
    const o = Object.create(Nr);
    return w.toFlatObject(t, o, function(l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"),
    L.call(o, t.message, e, i, n, s),
    o.cause = t,
    o.name = t.name,
    r && Object.assign(o, r),
    o
}
;
const _l = null;
function cn(t) {
    return w.isPlainObject(t) || w.isArray(t)
}
function Br(t) {
    return w.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function ws(t, e, i) {
    return t ? t.concat(e).map(function(s, r) {
        return s = Br(s),
        !i && r ? "[" + s + "]" : s
    }).join(i ? "." : "") : e
}
function Ml(t) {
    return w.isArray(t) && !t.some(cn)
}
const Ol = w.toFlatObject(w, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function mi(t, e, i) {
    if (!w.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    i = w.toFlatObject(i, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(m, g) {
        return !w.isUndefined(g[m])
    });
    const n = i.metaTokens
      , s = i.visitor || d
      , r = i.dots
      , o = i.indexes
      , l = (i.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(e);
    if (!w.isFunction(s))
        throw new TypeError("visitor must be a function");
    function c(p) {
        if (p === null)
            return "";
        if (w.isDate(p))
            return p.toISOString();
        if (!l && w.isBlob(p))
            throw new L("Blob is not supported. Use a Buffer instead.");
        return w.isArrayBuffer(p) || w.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
    }
    function d(p, m, g) {
        let v = p;
        if (p && !g && typeof p == "object") {
            if (w.endsWith(m, "{}"))
                m = n ? m : m.slice(0, -2),
                p = JSON.stringify(p);
            else if (w.isArray(p) && Ml(p) || (w.isFileList(p) || w.endsWith(m, "[]")) && (v = w.toArray(p)))
                return m = Br(m),
                v.forEach(function(b, x) {
                    !(w.isUndefined(b) || b === null) && e.append(o === !0 ? ws([m], x, r) : o === null ? m : m + "[]", c(b))
                }),
                !1
        }
        return cn(p) ? !0 : (e.append(ws(g, m, r), c(p)),
        !1)
    }
    const u = []
      , h = Object.assign(Ol, {
        defaultVisitor: d,
        convertValue: c,
        isVisitable: cn
    });
    function f(p, m) {
        if (!w.isUndefined(p)) {
            if (u.indexOf(p) !== -1)
                throw Error("Circular reference detected in " + m.join("."));
            u.push(p),
            w.forEach(p, function(v, y) {
                (!(w.isUndefined(v) || v === null) && s.call(e, v, w.isString(y) ? y.trim() : y, m, h)) === !0 && f(v, m ? m.concat(y) : [y])
            }),
            u.pop()
        }
    }
    if (!w.isObject(t))
        throw new TypeError("data must be an object");
    return f(t),
    e
}
function xs(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
        return e[n]
    })
}
function Bn(t, e) {
    this._pairs = [],
    t && mi(t, this, e)
}
const $r = Bn.prototype;
$r.append = function(e, i) {
    this._pairs.push([e, i])
}
;
$r.toString = function(e) {
    const i = e ? function(n) {
        return e.call(this, n, xs)
    }
    : xs;
    return this._pairs.map(function(s) {
        return i(s[0]) + "=" + i(s[1])
    }, "").join("&")
}
;
function Al(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Hr(t, e, i) {
    if (!e)
        return t;
    const n = i && i.encode || Al
      , s = i && i.serialize;
    let r;
    if (s ? r = s(e, i) : r = w.isURLSearchParams(e) ? e.toString() : new Bn(e,i).toString(n),
    r) {
        const o = t.indexOf("#");
        o !== -1 && (t = t.slice(0, o)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + r
    }
    return t
}
class Ll {
    constructor() {
        this.handlers = []
    }
    use(e, i, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: i,
            synchronous: n ? n.synchronous : !1,
            runWhen: n ? n.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        w.forEach(this.handlers, function(n) {
            n !== null && e(n)
        })
    }
}
const Ss = Ll
  , qr = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Il = typeof URLSearchParams < "u" ? URLSearchParams : Bn
  , Rl = typeof FormData < "u" ? FormData : null
  , kl = typeof Blob < "u" ? Blob : null
  , zl = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Il,
        FormData: Rl,
        Blob: kl
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , $n = typeof window < "u" && typeof document < "u"
  , dn = typeof navigator == "object" && navigator || void 0
  , Dl = $n && (!dn || ["ReactNative", "NativeScript", "NS"].indexOf(dn.product) < 0)
  , Fl = ( () => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , Nl = $n && window.location.href || "http://localhost"
  , jl = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: $n,
    hasStandardBrowserEnv: Dl,
    hasStandardBrowserWebWorkerEnv: Fl,
    navigator: dn,
    origin: Nl
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Y = {
    ...jl,
    ...zl
};
function Bl(t, e) {
    return mi(t, new Y.classes.URLSearchParams, Object.assign({
        visitor: function(i, n, s, r) {
            return Y.isNode && w.isBuffer(i) ? (this.append(n, i.toString("base64")),
            !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, e))
}
function $l(t) {
    return w.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function Hl(t) {
    const e = {}
      , i = Object.keys(t);
    let n;
    const s = i.length;
    let r;
    for (n = 0; n < s; n++)
        r = i[n],
        e[r] = t[r];
    return e
}
function Vr(t) {
    function e(i, n, s, r) {
        let o = i[r++];
        if (o === "__proto__")
            return !0;
        const a = Number.isFinite(+o)
          , l = r >= i.length;
        return o = !o && w.isArray(s) ? s.length : o,
        l ? (w.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n,
        !a) : ((!s[o] || !w.isObject(s[o])) && (s[o] = []),
        e(i, n, s[o], r) && w.isArray(s[o]) && (s[o] = Hl(s[o])),
        !a)
    }
    if (w.isFormData(t) && w.isFunction(t.entries)) {
        const i = {};
        return w.forEachEntry(t, (n, s) => {
            e($l(n), s, i, 0)
        }
        ),
        i
    }
    return null
}
function ql(t, e, i) {
    if (w.isString(t))
        try {
            return (e || JSON.parse)(t),
            w.trim(t)
        } catch (n) {
            if (n.name !== "SyntaxError")
                throw n
        }
    return (i || JSON.stringify)(t)
}
const Hn = {
    transitional: qr,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, i) {
        const n = i.getContentType() || ""
          , s = n.indexOf("application/json") > -1
          , r = w.isObject(e);
        if (r && w.isHTMLForm(e) && (e = new FormData(e)),
        w.isFormData(e))
            return s ? JSON.stringify(Vr(e)) : e;
        if (w.isArrayBuffer(e) || w.isBuffer(e) || w.isStream(e) || w.isFile(e) || w.isBlob(e) || w.isReadableStream(e))
            return e;
        if (w.isArrayBufferView(e))
            return e.buffer;
        if (w.isURLSearchParams(e))
            return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let a;
        if (r) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return Bl(e, this.formSerializer).toString();
            if ((a = w.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return mi(a ? {
                    "files[]": e
                } : e, l && new l, this.formSerializer)
            }
        }
        return r || s ? (i.setContentType("application/json", !1),
        ql(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const i = this.transitional || Hn.transitional
          , n = i && i.forcedJSONParsing
          , s = this.responseType === "json";
        if (w.isResponse(e) || w.isReadableStream(e))
            return e;
        if (e && w.isString(e) && (n && !this.responseType || s)) {
            const o = !(i && i.silentJSONParsing) && s;
            try {
                return JSON.parse(e)
            } catch (a) {
                if (o)
                    throw a.name === "SyntaxError" ? L.from(a, L.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Y.classes.FormData,
        Blob: Y.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Hn.headers[t] = {}
}
);
const qn = Hn
  , Vl = w.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Wl = t => {
    const e = {};
    let i, n, s;
    return t && t.split(`
`).forEach(function(o) {
        s = o.indexOf(":"),
        i = o.substring(0, s).trim().toLowerCase(),
        n = o.substring(s + 1).trim(),
        !(!i || e[i] && Vl[i]) && (i === "set-cookie" ? e[i] ? e[i].push(n) : e[i] = [n] : e[i] = e[i] ? e[i] + ", " + n : n)
    }),
    e
}
  , Es = Symbol("internals");
function lt(t) {
    return t && String(t).trim().toLowerCase()
}
function Yt(t) {
    return t === !1 || t == null ? t : w.isArray(t) ? t.map(Yt) : String(t)
}
function Gl(t) {
    const e = Object.create(null)
      , i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    for (; n = i.exec(t); )
        e[n[1]] = n[2];
    return e
}
const Ul = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function _i(t, e, i, n, s) {
    if (w.isFunction(n))
        return n.call(this, e, i);
    if (s && (e = i),
    !!w.isString(e)) {
        if (w.isString(n))
            return e.indexOf(n) !== -1;
        if (w.isRegExp(n))
            return n.test(e)
    }
}
function Xl(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, i, n) => i.toUpperCase() + n)
}
function Yl(t, e) {
    const i = w.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(n => {
        Object.defineProperty(t, n + i, {
            value: function(s, r, o) {
                return this[n].call(this, e, s, r, o)
            },
            configurable: !0
        })
    }
    )
}
class gi {
    constructor(e) {
        e && this.set(e)
    }
    set(e, i, n) {
        const s = this;
        function r(a, l, c) {
            const d = lt(l);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const u = w.findKey(s, d);
            (!u || s[u] === void 0 || c === !0 || c === void 0 && s[u] !== !1) && (s[u || l] = Yt(a))
        }
        const o = (a, l) => w.forEach(a, (c, d) => r(c, d, l));
        if (w.isPlainObject(e) || e instanceof this.constructor)
            o(e, i);
        else if (w.isString(e) && (e = e.trim()) && !Ul(e))
            o(Wl(e), i);
        else if (w.isHeaders(e))
            for (const [a,l] of e.entries())
                r(l, a, n);
        else
            e != null && r(i, e, n);
        return this
    }
    get(e, i) {
        if (e = lt(e),
        e) {
            const n = w.findKey(this, e);
            if (n) {
                const s = this[n];
                if (!i)
                    return s;
                if (i === !0)
                    return Gl(s);
                if (w.isFunction(i))
                    return i.call(this, s, n);
                if (w.isRegExp(i))
                    return i.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, i) {
        if (e = lt(e),
        e) {
            const n = w.findKey(this, e);
            return !!(n && this[n] !== void 0 && (!i || _i(this, this[n], n, i)))
        }
        return !1
    }
    delete(e, i) {
        const n = this;
        let s = !1;
        function r(o) {
            if (o = lt(o),
            o) {
                const a = w.findKey(n, o);
                a && (!i || _i(n, n[a], a, i)) && (delete n[a],
                s = !0)
            }
        }
        return w.isArray(e) ? e.forEach(r) : r(e),
        s
    }
    clear(e) {
        const i = Object.keys(this);
        let n = i.length
          , s = !1;
        for (; n--; ) {
            const r = i[n];
            (!e || _i(this, this[r], r, e, !0)) && (delete this[r],
            s = !0)
        }
        return s
    }
    normalize(e) {
        const i = this
          , n = {};
        return w.forEach(this, (s, r) => {
            const o = w.findKey(n, r);
            if (o) {
                i[o] = Yt(s),
                delete i[r];
                return
            }
            const a = e ? Xl(r) : String(r).trim();
            a !== r && delete i[r],
            i[a] = Yt(s),
            n[a] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const i = Object.create(null);
        return w.forEach(this, (n, s) => {
            n != null && n !== !1 && (i[s] = e && w.isArray(n) ? n.join(", ") : n)
        }
        ),
        i
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,i]) => e + ": " + i).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...i) {
        const n = new this(e);
        return i.forEach(s => n.set(s)),
        n
    }
    static accessor(e) {
        const n = (this[Es] = this[Es] = {
            accessors: {}
        }).accessors
          , s = this.prototype;
        function r(o) {
            const a = lt(o);
            n[a] || (Yl(s, o),
            n[a] = !0)
        }
        return w.isArray(e) ? e.forEach(r) : r(e),
        this
    }
}
gi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(gi.prototype, ({value: t}, e) => {
    let i = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(n) {
            this[i] = n
        }
    }
}
);
w.freezeMethods(gi);
const oe = gi;
function Mi(t, e) {
    const i = this || qn
      , n = e || i
      , s = oe.from(n.headers);
    let r = n.data;
    return w.forEach(t, function(a) {
        r = a.call(i, r, s.normalize(), e ? e.status : void 0)
    }),
    s.normalize(),
    r
}
function Wr(t) {
    return !!(t && t.__CANCEL__)
}
function it(t, e, i) {
    L.call(this, t ?? "canceled", L.ERR_CANCELED, e, i),
    this.name = "CanceledError"
}
w.inherits(it, L, {
    __CANCEL__: !0
});
function Gr(t, e, i) {
    const n = i.config.validateStatus;
    !i.status || !n || n(i.status) ? t(i) : e(new L("Request failed with status code " + i.status,[L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],i.config,i.request,i))
}
function Kl(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function Zl(t, e) {
    t = t || 10;
    const i = new Array(t)
      , n = new Array(t);
    let s = 0, r = 0, o;
    return e = e !== void 0 ? e : 1e3,
    function(l) {
        const c = Date.now()
          , d = n[r];
        o || (o = c),
        i[s] = l,
        n[s] = c;
        let u = r
          , h = 0;
        for (; u !== s; )
            h += i[u++],
            u = u % t;
        if (s = (s + 1) % t,
        s === r && (r = (r + 1) % t),
        c - o < e)
            return;
        const f = d && c - d;
        return f ? Math.round(h * 1e3 / f) : void 0
    }
}
function Jl(t, e) {
    let i = 0, n = 1e3 / e, s, r;
    const o = (c, d=Date.now()) => {
        i = d,
        s = null,
        r && (clearTimeout(r),
        r = null),
        t.apply(null, c)
    }
    ;
    return [ (...c) => {
        const d = Date.now()
          , u = d - i;
        u >= n ? o(c, d) : (s = c,
        r || (r = setTimeout( () => {
            r = null,
            o(s)
        }
        , n - u)))
    }
    , () => s && o(s)]
}
const ei = (t, e, i=3) => {
    let n = 0;
    const s = Zl(50, 250);
    return Jl(r => {
        const o = r.loaded
          , a = r.lengthComputable ? r.total : void 0
          , l = o - n
          , c = s(l)
          , d = o <= a;
        n = o;
        const u = {
            loaded: o,
            total: a,
            progress: a ? o / a : void 0,
            bytes: l,
            rate: c || void 0,
            estimated: c && a && d ? (a - o) / c : void 0,
            event: r,
            lengthComputable: a != null,
            [e ? "download" : "upload"]: !0
        };
        t(u)
    }
    , i)
}
  , Ts = (t, e) => {
    const i = t != null;
    return [n => e[0]({
        lengthComputable: i,
        total: t,
        loaded: n
    }), e[1]]
}
  , Cs = t => (...e) => w.asap( () => t(...e))
  , Ql = Y.hasStandardBrowserEnv ? function() {
    const e = Y.navigator && /(msie|trident)/i.test(Y.navigator.userAgent)
      , i = document.createElement("a");
    let n;
    function s(r) {
        let o = r;
        return e && (i.setAttribute("href", o),
        o = i.href),
        i.setAttribute("href", o),
        {
            href: i.href,
            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
            host: i.host,
            search: i.search ? i.search.replace(/^\?/, "") : "",
            hash: i.hash ? i.hash.replace(/^#/, "") : "",
            hostname: i.hostname,
            port: i.port,
            pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
        }
    }
    return n = s(window.location.href),
    function(o) {
        const a = w.isString(o) ? s(o) : o;
        return a.protocol === n.protocol && a.host === n.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , ec = Y.hasStandardBrowserEnv ? {
    write(t, e, i, n, s, r) {
        const o = [t + "=" + encodeURIComponent(e)];
        w.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()),
        w.isString(n) && o.push("path=" + n),
        w.isString(s) && o.push("domain=" + s),
        r === !0 && o.push("secure"),
        document.cookie = o.join("; ")
    },
    read(t) {
        const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function tc(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function ic(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function Ur(t, e) {
    return t && !tc(e) ? ic(t, e) : e
}
const Ps = t => t instanceof oe ? {
    ...t
} : t;
function He(t, e) {
    e = e || {};
    const i = {};
    function n(c, d, u) {
        return w.isPlainObject(c) && w.isPlainObject(d) ? w.merge.call({
            caseless: u
        }, c, d) : w.isPlainObject(d) ? w.merge({}, d) : w.isArray(d) ? d.slice() : d
    }
    function s(c, d, u) {
        if (w.isUndefined(d)) {
            if (!w.isUndefined(c))
                return n(void 0, c, u)
        } else
            return n(c, d, u)
    }
    function r(c, d) {
        if (!w.isUndefined(d))
            return n(void 0, d)
    }
    function o(c, d) {
        if (w.isUndefined(d)) {
            if (!w.isUndefined(c))
                return n(void 0, c)
        } else
            return n(void 0, d)
    }
    function a(c, d, u) {
        if (u in e)
            return n(c, d);
        if (u in t)
            return n(void 0, c)
    }
    const l = {
        url: r,
        method: r,
        data: r,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (c, d) => s(Ps(c), Ps(d), !0)
    };
    return w.forEach(Object.keys(Object.assign({}, t, e)), function(d) {
        const u = l[d] || s
          , h = u(t[d], e[d], d);
        w.isUndefined(h) && u !== a || (i[d] = h)
    }),
    i
}
const Xr = t => {
    const e = He({}, t);
    let {data: i, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: r, headers: o, auth: a} = e;
    e.headers = o = oe.from(o),
    e.url = Hr(Ur(e.baseURL, e.url), t.params, t.paramsSerializer),
    a && o.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
    let l;
    if (w.isFormData(i)) {
        if (Y.hasStandardBrowserEnv || Y.hasStandardBrowserWebWorkerEnv)
            o.setContentType(void 0);
        else if ((l = o.getContentType()) !== !1) {
            const [c,...d] = l ? l.split(";").map(u => u.trim()).filter(Boolean) : [];
            o.setContentType([c || "multipart/form-data", ...d].join("; "))
        }
    }
    if (Y.hasStandardBrowserEnv && (n && w.isFunction(n) && (n = n(e)),
    n || n !== !1 && Ql(e.url))) {
        const c = s && r && ec.read(r);
        c && o.set(s, c)
    }
    return e
}
  , nc = typeof XMLHttpRequest < "u"
  , sc = nc && function(t) {
    return new Promise(function(i, n) {
        const s = Xr(t);
        let r = s.data;
        const o = oe.from(s.headers).normalize();
        let {responseType: a, onUploadProgress: l, onDownloadProgress: c} = s, d, u, h, f, p;
        function m() {
            f && f(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d)
        }
        let g = new XMLHttpRequest;
        g.open(s.method.toUpperCase(), s.url, !0),
        g.timeout = s.timeout;
        function v() {
            if (!g)
                return;
            const b = oe.from("getAllResponseHeaders"in g && g.getAllResponseHeaders())
              , S = {
                data: !a || a === "text" || a === "json" ? g.responseText : g.response,
                status: g.status,
                statusText: g.statusText,
                headers: b,
                config: t,
                request: g
            };
            Gr(function(O) {
                i(O),
                m()
            }, function(O) {
                n(O),
                m()
            }, S),
            g = null
        }
        "onloadend"in g ? g.onloadend = v : g.onreadystatechange = function() {
            !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(v)
        }
        ,
        g.onabort = function() {
            g && (n(new L("Request aborted",L.ECONNABORTED,t,g)),
            g = null)
        }
        ,
        g.onerror = function() {
            n(new L("Network Error",L.ERR_NETWORK,t,g)),
            g = null
        }
        ,
        g.ontimeout = function() {
            let x = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
            const S = s.transitional || qr;
            s.timeoutErrorMessage && (x = s.timeoutErrorMessage),
            n(new L(x,S.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,t,g)),
            g = null
        }
        ,
        r === void 0 && o.setContentType(null),
        "setRequestHeader"in g && w.forEach(o.toJSON(), function(x, S) {
            g.setRequestHeader(S, x)
        }),
        w.isUndefined(s.withCredentials) || (g.withCredentials = !!s.withCredentials),
        a && a !== "json" && (g.responseType = s.responseType),
        c && ([h,p] = ei(c, !0),
        g.addEventListener("progress", h)),
        l && g.upload && ([u,f] = ei(l),
        g.upload.addEventListener("progress", u),
        g.upload.addEventListener("loadend", f)),
        (s.cancelToken || s.signal) && (d = b => {
            g && (n(!b || b.type ? new it(null,t,g) : b),
            g.abort(),
            g = null)
        }
        ,
        s.cancelToken && s.cancelToken.subscribe(d),
        s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const y = Kl(s.url);
        if (y && Y.protocols.indexOf(y) === -1) {
            n(new L("Unsupported protocol " + y + ":",L.ERR_BAD_REQUEST,t));
            return
        }
        g.send(r || null)
    }
    )
}
  , rc = (t, e) => {
    const {length: i} = t = t ? t.filter(Boolean) : [];
    if (e || i) {
        let n = new AbortController, s;
        const r = function(c) {
            if (!s) {
                s = !0,
                a();
                const d = c instanceof Error ? c : this.reason;
                n.abort(d instanceof L ? d : new it(d instanceof Error ? d.message : d))
            }
        };
        let o = e && setTimeout( () => {
            o = null,
            r(new L(`timeout ${e} of ms exceeded`,L.ETIMEDOUT))
        }
        , e);
        const a = () => {
            t && (o && clearTimeout(o),
            o = null,
            t.forEach(c => {
                c.unsubscribe ? c.unsubscribe(r) : c.removeEventListener("abort", r)
            }
            ),
            t = null)
        }
        ;
        t.forEach(c => c.addEventListener("abort", r));
        const {signal: l} = n;
        return l.unsubscribe = () => w.asap(a),
        l
    }
}
  , oc = rc
  , ac = function*(t, e) {
    let i = t.byteLength;
    if (!e || i < e) {
        yield t;
        return
    }
    let n = 0, s;
    for (; n < i; )
        s = n + e,
        yield t.slice(n, s),
        n = s
}
  , lc = async function*(t, e) {
    for await(const i of cc(t))
        yield*ac(i, e)
}
  , cc = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: i, value: n} = await e.read();
            if (i)
                break;
            yield n
        }
    } finally {
        await e.cancel()
    }
}
  , _s = (t, e, i, n) => {
    const s = lc(t, e);
    let r = 0, o, a = l => {
        o || (o = !0,
        n && n(l))
    }
    ;
    return new ReadableStream({
        async pull(l) {
            try {
                const {done: c, value: d} = await s.next();
                if (c) {
                    a(),
                    l.close();
                    return
                }
                let u = d.byteLength;
                if (i) {
                    let h = r += u;
                    i(h)
                }
                l.enqueue(new Uint8Array(d))
            } catch (c) {
                throw a(c),
                c
            }
        },
        cancel(l) {
            return a(l),
            s.return()
        }
    },{
        highWaterMark: 2
    })
}
  , vi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , Yr = vi && typeof ReadableStream == "function"
  , dc = vi && (typeof TextEncoder == "function" ? (t => e => t.encode(e))(new TextEncoder) : async t => new Uint8Array(await new Response(t).arrayBuffer()))
  , Kr = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , uc = Yr && Kr( () => {
    let t = !1;
    const e = new Request(Y.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return t = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return t && !e
}
)
  , Ms = 64 * 1024
  , un = Yr && Kr( () => w.isReadableStream(new Response("").body))
  , ti = {
    stream: un && (t => t.body)
};
vi && (t => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
        !ti[e] && (ti[e] = w.isFunction(t[e]) ? i => i[e]() : (i, n) => {
            throw new L(`Response type '${e}' is not supported`,L.ERR_NOT_SUPPORT,n)
        }
        )
    }
    )
}
)(new Response);
const fc = async t => {
    if (t == null)
        return 0;
    if (w.isBlob(t))
        return t.size;
    if (w.isSpecCompliantForm(t))
        return (await new Request(Y.origin,{
            method: "POST",
            body: t
        }).arrayBuffer()).byteLength;
    if (w.isArrayBufferView(t) || w.isArrayBuffer(t))
        return t.byteLength;
    if (w.isURLSearchParams(t) && (t = t + ""),
    w.isString(t))
        return (await dc(t)).byteLength
}
  , hc = async (t, e) => {
    const i = w.toFiniteNumber(t.getContentLength());
    return i ?? fc(e)
}
  , pc = vi && (async t => {
    let {url: e, method: i, data: n, signal: s, cancelToken: r, timeout: o, onDownloadProgress: a, onUploadProgress: l, responseType: c, headers: d, withCredentials: u="same-origin", fetchOptions: h} = Xr(t);
    c = c ? (c + "").toLowerCase() : "text";
    let f = oc([s, r && r.toAbortSignal()], o), p;
    const m = f && f.unsubscribe && ( () => {
        f.unsubscribe()
    }
    );
    let g;
    try {
        if (l && uc && i !== "get" && i !== "head" && (g = await hc(d, n)) !== 0) {
            let S = new Request(e,{
                method: "POST",
                body: n,
                duplex: "half"
            }), T;
            if (w.isFormData(n) && (T = S.headers.get("content-type")) && d.setContentType(T),
            S.body) {
                const [O,M] = Ts(g, ei(Cs(l)));
                n = _s(S.body, Ms, O, M)
            }
        }
        w.isString(u) || (u = u ? "include" : "omit");
        const v = "credentials"in Request.prototype;
        p = new Request(e,{
            ...h,
            signal: f,
            method: i.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: n,
            duplex: "half",
            credentials: v ? u : void 0
        });
        let y = await fetch(p);
        const b = un && (c === "stream" || c === "response");
        if (un && (a || b && m)) {
            const S = {};
            ["status", "statusText", "headers"].forEach(N => {
                S[N] = y[N]
            }
            );
            const T = w.toFiniteNumber(y.headers.get("content-length"))
              , [O,M] = a && Ts(T, ei(Cs(a), !0)) || [];
            y = new Response(_s(y.body, Ms, O, () => {
                M && M(),
                m && m()
            }
            ),S)
        }
        c = c || "text";
        let x = await ti[w.findKey(ti, c) || "text"](y, t);
        return !b && m && m(),
        await new Promise( (S, T) => {
            Gr(S, T, {
                data: x,
                headers: oe.from(y.headers),
                status: y.status,
                statusText: y.statusText,
                config: t,
                request: p
            })
        }
        )
    } catch (v) {
        throw m && m(),
        v && v.name === "TypeError" && /fetch/i.test(v.message) ? Object.assign(new L("Network Error",L.ERR_NETWORK,t,p), {
            cause: v.cause || v
        }) : L.from(v, v && v.code, t, p)
    }
}
)
  , fn = {
    http: _l,
    xhr: sc,
    fetch: pc
};
w.forEach(fn, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const Os = t => `- ${t}`
  , mc = t => w.isFunction(t) || t === null || t === !1
  , Zr = {
    getAdapter: t => {
        t = w.isArray(t) ? t : [t];
        const {length: e} = t;
        let i, n;
        const s = {};
        for (let r = 0; r < e; r++) {
            i = t[r];
            let o;
            if (n = i,
            !mc(i) && (n = fn[(o = String(i)).toLowerCase()],
            n === void 0))
                throw new L(`Unknown adapter '${o}'`);
            if (n)
                break;
            s[o || "#" + r] = n
        }
        if (!n) {
            const r = Object.entries(s).map( ([a,l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let o = e ? r.length > 1 ? `since :
` + r.map(Os).join(`
`) : " " + Os(r[0]) : "as no adapter specified";
            throw new L("There is no suitable adapter to dispatch the request " + o,"ERR_NOT_SUPPORT")
        }
        return n
    }
    ,
    adapters: fn
};
function Oi(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new it(null,t)
}
function As(t) {
    return Oi(t),
    t.headers = oe.from(t.headers),
    t.data = Mi.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Zr.getAdapter(t.adapter || qn.adapter)(t).then(function(n) {
        return Oi(t),
        n.data = Mi.call(t, t.transformResponse, n),
        n.headers = oe.from(n.headers),
        n
    }, function(n) {
        return Wr(n) || (Oi(t),
        n && n.response && (n.response.data = Mi.call(t, t.transformResponse, n.response),
        n.response.headers = oe.from(n.response.headers))),
        Promise.reject(n)
    })
}
const Jr = "1.7.7"
  , Vn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    Vn[t] = function(n) {
        return typeof n === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const Ls = {};
Vn.transitional = function(e, i, n) {
    function s(r, o) {
        return "[Axios v" + Jr + "] Transitional option '" + r + "'" + o + (n ? ". " + n : "")
    }
    return (r, o, a) => {
        if (e === !1)
            throw new L(s(o, " has been removed" + (i ? " in " + i : "")),L.ERR_DEPRECATED);
        return i && !Ls[o] && (Ls[o] = !0,
        console.warn(s(o, " has been deprecated since v" + i + " and will be removed in the near future"))),
        e ? e(r, o, a) : !0
    }
}
;
function gc(t, e, i) {
    if (typeof t != "object")
        throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(t);
    let s = n.length;
    for (; s-- > 0; ) {
        const r = n[s]
          , o = e[r];
        if (o) {
            const a = t[r]
              , l = a === void 0 || o(a, r, t);
            if (l !== !0)
                throw new L("option " + r + " must be " + l,L.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (i !== !0)
            throw new L("Unknown option " + r,L.ERR_BAD_OPTION)
    }
}
const hn = {
    assertOptions: gc,
    validators: Vn
}
  , xe = hn.validators;
class ii {
    constructor(e) {
        this.defaults = e,
        this.interceptors = {
            request: new Ss,
            response: new Ss
        }
    }
    async request(e, i) {
        try {
            return await this._request(e, i)
        } catch (n) {
            if (n instanceof Error) {
                let s;
                Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error;
                const r = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                try {
                    n.stack ? r && !String(n.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + r) : n.stack = r
                } catch {}
            }
            throw n
        }
    }
    _request(e, i) {
        typeof e == "string" ? (i = i || {},
        i.url = e) : i = e || {},
        i = He(this.defaults, i);
        const {transitional: n, paramsSerializer: s, headers: r} = i;
        n !== void 0 && hn.assertOptions(n, {
            silentJSONParsing: xe.transitional(xe.boolean),
            forcedJSONParsing: xe.transitional(xe.boolean),
            clarifyTimeoutError: xe.transitional(xe.boolean)
        }, !1),
        s != null && (w.isFunction(s) ? i.paramsSerializer = {
            serialize: s
        } : hn.assertOptions(s, {
            encode: xe.function,
            serialize: xe.function
        }, !0)),
        i.method = (i.method || this.defaults.method || "get").toLowerCase();
        let o = r && w.merge(r.common, r[i.method]);
        r && w.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p => {
            delete r[p]
        }
        ),
        i.headers = oe.concat(o, r);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(m) {
            typeof m.runWhen == "function" && m.runWhen(i) === !1 || (l = l && m.synchronous,
            a.unshift(m.fulfilled, m.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(m) {
            c.push(m.fulfilled, m.rejected)
        });
        let d, u = 0, h;
        if (!l) {
            const p = [As.bind(this), void 0];
            for (p.unshift.apply(p, a),
            p.push.apply(p, c),
            h = p.length,
            d = Promise.resolve(i); u < h; )
                d = d.then(p[u++], p[u++]);
            return d
        }
        h = a.length;
        let f = i;
        for (u = 0; u < h; ) {
            const p = a[u++]
              , m = a[u++];
            try {
                f = p(f)
            } catch (g) {
                m.call(this, g);
                break
            }
        }
        try {
            d = As.call(this, f)
        } catch (p) {
            return Promise.reject(p)
        }
        for (u = 0,
        h = c.length; u < h; )
            d = d.then(c[u++], c[u++]);
        return d
    }
    getUri(e) {
        e = He(this.defaults, e);
        const i = Ur(e.baseURL, e.url);
        return Hr(i, e.params, e.paramsSerializer)
    }
}
w.forEach(["delete", "get", "head", "options"], function(e) {
    ii.prototype[e] = function(i, n) {
        return this.request(He(n || {}, {
            method: e,
            url: i,
            data: (n || {}).data
        }))
    }
});
w.forEach(["post", "put", "patch"], function(e) {
    function i(n) {
        return function(r, o, a) {
            return this.request(He(a || {}, {
                method: e,
                headers: n ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: r,
                data: o
            }))
        }
    }
    ii.prototype[e] = i(),
    ii.prototype[e + "Form"] = i(!0)
});
const Kt = ii;
class Wn {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let i;
        this.promise = new Promise(function(r) {
            i = r
        }
        );
        const n = this;
        this.promise.then(s => {
            if (!n._listeners)
                return;
            let r = n._listeners.length;
            for (; r-- > 0; )
                n._listeners[r](s);
            n._listeners = null
        }
        ),
        this.promise.then = s => {
            let r;
            const o = new Promise(a => {
                n.subscribe(a),
                r = a
            }
            ).then(s);
            return o.cancel = function() {
                n.unsubscribe(r)
            }
            ,
            o
        }
        ,
        e(function(r, o, a) {
            n.reason || (n.reason = new it(r,o,a),
            i(n.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const i = this._listeners.indexOf(e);
        i !== -1 && this._listeners.splice(i, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , i = n => {
            e.abort(n)
        }
        ;
        return this.subscribe(i),
        e.signal.unsubscribe = () => this.unsubscribe(i),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new Wn(function(s) {
                e = s
            }
            ),
            cancel: e
        }
    }
}
const vc = Wn;
function bc(t) {
    return function(i) {
        return t.apply(null, i)
    }
}
function yc(t) {
    return w.isObject(t) && t.isAxiosError === !0
}
const pn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(pn).forEach( ([t,e]) => {
    pn[e] = t
}
);
const wc = pn;
function Qr(t) {
    const e = new Kt(t)
      , i = Ar(Kt.prototype.request, e);
    return w.extend(i, Kt.prototype, e, {
        allOwnKeys: !0
    }),
    w.extend(i, e, null, {
        allOwnKeys: !0
    }),
    i.create = function(s) {
        return Qr(He(t, s))
    }
    ,
    i
}
const $ = Qr(qn);
$.Axios = Kt;
$.CanceledError = it;
$.CancelToken = vc;
$.isCancel = Wr;
$.VERSION = Jr;
$.toFormData = mi;
$.AxiosError = L;
$.Cancel = $.CanceledError;
$.all = function(e) {
    return Promise.all(e)
}
;
$.spread = bc;
$.isAxiosError = yc;
$.mergeConfig = He;
$.AxiosHeaders = oe;
$.formToJSON = t => Vr(w.isHTMLForm(t) ? new FormData(t) : t);
$.getAdapter = Zr.getAdapter;
$.HttpStatusCode = wc;
$.default = $;
const xc = $;
window.axios = xc;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var mn = !1
  , gn = !1
  , De = []
  , vn = -1;
function Sc(t) {
    Ec(t)
}
function Ec(t) {
    De.includes(t) || De.push(t),
    Cc()
}
function Tc(t) {
    let e = De.indexOf(t);
    e !== -1 && e > vn && De.splice(e, 1)
}
function Cc() {
    !gn && !mn && (mn = !0,
    queueMicrotask(Pc))
}
function Pc() {
    mn = !1,
    gn = !0;
    for (let t = 0; t < De.length; t++)
        De[t](),
        vn = t;
    De.length = 0,
    vn = -1,
    gn = !1
}
var nt, We, st, eo, bn = !0;
function _c(t) {
    bn = !1,
    t(),
    bn = !0
}
function Mc(t) {
    nt = t.reactive,
    st = t.release,
    We = e => t.effect(e, {
        scheduler: i => {
            bn ? Sc(i) : i()
        }
    }),
    eo = t.raw
}
function Is(t) {
    We = t
}
function Oc(t) {
    let e = () => {}
    ;
    return [n => {
        let s = We(n);
        return t._x_effects || (t._x_effects = new Set,
        t._x_runEffects = () => {
            t._x_effects.forEach(r => r())
        }
        ),
        t._x_effects.add(s),
        e = () => {
            s !== void 0 && (t._x_effects.delete(s),
            st(s))
        }
        ,
        s
    }
    , () => {
        e()
    }
    ]
}
function to(t, e) {
    let i = !0, n, s = We( () => {
        let r = t();
        JSON.stringify(r),
        i ? n = r : queueMicrotask( () => {
            e(r, n),
            n = r
        }
        ),
        i = !1
    }
    );
    return () => st(s)
}
var io = []
  , no = []
  , so = [];
function Ac(t) {
    so.push(t)
}
function Gn(t, e) {
    typeof e == "function" ? (t._x_cleanups || (t._x_cleanups = []),
    t._x_cleanups.push(e)) : (e = t,
    no.push(e))
}
function ro(t) {
    io.push(t)
}
function oo(t, e, i) {
    t._x_attributeCleanups || (t._x_attributeCleanups = {}),
    t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
    t._x_attributeCleanups[e].push(i)
}
function ao(t, e) {
    t._x_attributeCleanups && Object.entries(t._x_attributeCleanups).forEach( ([i,n]) => {
        (e === void 0 || e.includes(i)) && (n.forEach(s => s()),
        delete t._x_attributeCleanups[i])
    }
    )
}
function Lc(t) {
    var e, i;
    for ((e = t._x_effects) == null || e.forEach(Tc); (i = t._x_cleanups) != null && i.length; )
        t._x_cleanups.pop()()
}
var Un = new MutationObserver(Zn)
  , Xn = !1;
function Yn() {
    Un.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
    Xn = !0
}
function lo() {
    Ic(),
    Un.disconnect(),
    Xn = !1
}
var ct = [];
function Ic() {
    let t = Un.takeRecords();
    ct.push( () => t.length > 0 && Zn(t));
    let e = ct.length;
    queueMicrotask( () => {
        if (ct.length === e)
            for (; ct.length > 0; )
                ct.shift()()
    }
    )
}
function j(t) {
    if (!Xn)
        return t();
    lo();
    let e = t();
    return Yn(),
    e
}
var Kn = !1
  , ni = [];
function Rc() {
    Kn = !0
}
function kc() {
    Kn = !1,
    Zn(ni),
    ni = []
}
function Zn(t) {
    if (Kn) {
        ni = ni.concat(t);
        return
    }
    let e = new Set
      , i = new Set
      , n = new Map
      , s = new Map;
    for (let r = 0; r < t.length; r++)
        if (!t[r].target._x_ignoreMutationObserver && (t[r].type === "childList" && (t[r].addedNodes.forEach(o => o.nodeType === 1 && e.add(o)),
        t[r].removedNodes.forEach(o => o.nodeType === 1 && i.add(o))),
        t[r].type === "attributes")) {
            let o = t[r].target
              , a = t[r].attributeName
              , l = t[r].oldValue
              , c = () => {
                n.has(o) || n.set(o, []),
                n.get(o).push({
                    name: a,
                    value: o.getAttribute(a)
                })
            }
              , d = () => {
                s.has(o) || s.set(o, []),
                s.get(o).push(a)
            }
            ;
            o.hasAttribute(a) && l === null ? c() : o.hasAttribute(a) ? (d(),
            c()) : d()
        }
    s.forEach( (r, o) => {
        ao(o, r)
    }
    ),
    n.forEach( (r, o) => {
        io.forEach(a => a(o, r))
    }
    );
    for (let r of i)
        e.has(r) || no.forEach(o => o(r));
    e.forEach(r => {
        r._x_ignoreSelf = !0,
        r._x_ignore = !0
    }
    );
    for (let r of e)
        i.has(r) || r.isConnected && (delete r._x_ignoreSelf,
        delete r._x_ignore,
        so.forEach(o => o(r)),
        r._x_ignore = !0,
        r._x_ignoreSelf = !0);
    e.forEach(r => {
        delete r._x_ignoreSelf,
        delete r._x_ignore
    }
    ),
    e = null,
    i = null,
    n = null,
    s = null
}
function co(t) {
    return Ct(Qe(t))
}
function Tt(t, e, i) {
    return t._x_dataStack = [e, ...Qe(i || t)],
    () => {
        t._x_dataStack = t._x_dataStack.filter(n => n !== e)
    }
}
function Qe(t) {
    return t._x_dataStack ? t._x_dataStack : typeof ShadowRoot == "function" && t instanceof ShadowRoot ? Qe(t.host) : t.parentNode ? Qe(t.parentNode) : []
}
function Ct(t) {
    return new Proxy({
        objects: t
    },zc)
}
var zc = {
    ownKeys({objects: t}) {
        return Array.from(new Set(t.flatMap(e => Object.keys(e))))
    },
    has({objects: t}, e) {
        return e == Symbol.unscopables ? !1 : t.some(i => Object.prototype.hasOwnProperty.call(i, e) || Reflect.has(i, e))
    },
    get({objects: t}, e, i) {
        return e == "toJSON" ? Dc : Reflect.get(t.find(n => Reflect.has(n, e)) || {}, e, i)
    },
    set({objects: t}, e, i, n) {
        const s = t.find(o => Object.prototype.hasOwnProperty.call(o, e)) || t[t.length - 1]
          , r = Object.getOwnPropertyDescriptor(s, e);
        return r != null && r.set && (r != null && r.get) ? r.set.call(n, i) || !0 : Reflect.set(s, e, i)
    }
};
function Dc() {
    return Reflect.ownKeys(this).reduce( (e, i) => (e[i] = Reflect.get(this, i),
    e), {})
}
function uo(t) {
    let e = n => typeof n == "object" && !Array.isArray(n) && n !== null
      , i = (n, s="") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach( ([r,{value: o, enumerable: a}]) => {
            if (a === !1 || o === void 0 || typeof o == "object" && o !== null && o.__v_skip)
                return;
            let l = s === "" ? r : `${s}.${r}`;
            typeof o == "object" && o !== null && o._x_interceptor ? n[r] = o.initialize(t, l, r) : e(o) && o !== n && !(o instanceof Element) && i(o, l)
        }
        )
    }
    ;
    return i(t)
}
function fo(t, e= () => {}
) {
    let i = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(n, s, r) {
            return t(this.initialValue, () => Fc(n, s), o => yn(n, s, o), s, r)
        }
    };
    return e(i),
    n => {
        if (typeof n == "object" && n !== null && n._x_interceptor) {
            let s = i.initialize.bind(i);
            i.initialize = (r, o, a) => {
                let l = n.initialize(r, o, a);
                return i.initialValue = l,
                s(r, o, a)
            }
        } else
            i.initialValue = n;
        return i
    }
}
function Fc(t, e) {
    return e.split(".").reduce( (i, n) => i[n], t)
}
function yn(t, e, i) {
    if (typeof e == "string" && (e = e.split(".")),
    e.length === 1)
        t[e[0]] = i;
    else {
        if (e.length === 0)
            throw error;
        return t[e[0]] || (t[e[0]] = {}),
        yn(t[e[0]], e.slice(1), i)
    }
}
var ho = {};
function ce(t, e) {
    ho[t] = e
}
function wn(t, e) {
    let i = Nc(e);
    return Object.entries(ho).forEach( ([n,s]) => {
        Object.defineProperty(t, `$${n}`, {
            get() {
                return s(e, i)
            },
            enumerable: !1
        })
    }
    ),
    t
}
function Nc(t) {
    let[e,i] = yo(t)
      , n = {
        interceptor: fo,
        ...e
    };
    return Gn(t, i),
    n
}
function jc(t, e, i, ...n) {
    try {
        return i(...n)
    } catch (s) {
        St(s, t, e)
    }
}
function St(t, e, i=void 0) {
    t = Object.assign(t ?? {
        message: "No error message given."
    }, {
        el: e,
        expression: i
    }),
    console.warn(`Alpine Expression Error: ${t.message}

${i ? 'Expression: "' + i + `"

` : ""}`, e),
    setTimeout( () => {
        throw t
    }
    , 0)
}
var Zt = !0;
function po(t) {
    let e = Zt;
    Zt = !1;
    let i = t();
    return Zt = e,
    i
}
function Fe(t, e, i={}) {
    let n;
    return G(t, e)(s => n = s, i),
    n
}
function G(...t) {
    return mo(...t)
}
var mo = go;
function Bc(t) {
    mo = t
}
function go(t, e) {
    let i = {};
    wn(i, t);
    let n = [i, ...Qe(t)]
      , s = typeof e == "function" ? $c(n, e) : qc(n, e, t);
    return jc.bind(null, t, e, s)
}
function $c(t, e) {
    return (i= () => {}
    , {scope: n={}, params: s=[]}={}) => {
        let r = e.apply(Ct([n, ...t]), s);
        si(i, r)
    }
}
var Ai = {};
function Hc(t, e) {
    if (Ai[t])
        return Ai[t];
    let i = Object.getPrototypeOf(async function() {}).constructor
      , n = /^[\n\s]*if.*\(.*\)/.test(t.trim()) || /^(let|const)\s/.test(t.trim()) ? `(async()=>{ ${t} })()` : t
      , r = ( () => {
        try {
            let o = new i(["__self", "scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);
            return Object.defineProperty(o, "name", {
                value: `[Alpine] ${t}`
            }),
            o
        } catch (o) {
            return St(o, e, t),
            Promise.resolve()
        }
    }
    )();
    return Ai[t] = r,
    r
}
function qc(t, e, i) {
    let n = Hc(e, i);
    return (s= () => {}
    , {scope: r={}, params: o=[]}={}) => {
        n.result = void 0,
        n.finished = !1;
        let a = Ct([r, ...t]);
        if (typeof n == "function") {
            let l = n(n, a).catch(c => St(c, i, e));
            n.finished ? (si(s, n.result, a, o, i),
            n.result = void 0) : l.then(c => {
                si(s, c, a, o, i)
            }
            ).catch(c => St(c, i, e)).finally( () => n.result = void 0)
        }
    }
}
function si(t, e, i, n, s) {
    if (Zt && typeof e == "function") {
        let r = e.apply(i, n);
        r instanceof Promise ? r.then(o => si(t, o, i, n)).catch(o => St(o, s, e)) : t(r)
    } else
        typeof e == "object" && e instanceof Promise ? e.then(r => t(r)) : t(e)
}
var Jn = "x-";
function rt(t="") {
    return Jn + t
}
function Vc(t) {
    Jn = t
}
var ri = {};
function H(t, e) {
    return ri[t] = e,
    {
        before(i) {
            if (!ri[i]) {
                console.warn(String.raw`Cannot find directive \`${i}\`. \`${t}\` will use the default order of execution`);
                return
            }
            const n = ke.indexOf(i);
            ke.splice(n >= 0 ? n : ke.indexOf("DEFAULT"), 0, t)
        }
    }
}
function Wc(t) {
    return Object.keys(ri).includes(t)
}
function Qn(t, e, i) {
    if (e = Array.from(e),
    t._x_virtualDirectives) {
        let r = Object.entries(t._x_virtualDirectives).map( ([a,l]) => ({
            name: a,
            value: l
        }))
          , o = vo(r);
        r = r.map(a => o.find(l => l.name === a.name) ? {
            name: `x-bind:${a.name}`,
            value: `"${a.value}"`
        } : a),
        e = e.concat(r)
    }
    let n = {};
    return e.map(So( (r, o) => n[r] = o)).filter(To).map(Xc(n, i)).sort(Yc).map(r => Uc(t, r))
}
function vo(t) {
    return Array.from(t).map(So()).filter(e => !To(e))
}
var xn = !1
  , pt = new Map
  , bo = Symbol();
function Gc(t) {
    xn = !0;
    let e = Symbol();
    bo = e,
    pt.set(e, []);
    let i = () => {
        for (; pt.get(e).length; )
            pt.get(e).shift()();
        pt.delete(e)
    }
      , n = () => {
        xn = !1,
        i()
    }
    ;
    t(i),
    n()
}
function yo(t) {
    let e = []
      , i = a => e.push(a)
      , [n,s] = Oc(t);
    return e.push(s),
    [{
        Alpine: _t,
        effect: n,
        cleanup: i,
        evaluateLater: G.bind(G, t),
        evaluate: Fe.bind(Fe, t)
    }, () => e.forEach(a => a())]
}
function Uc(t, e) {
    let i = () => {}
      , n = ri[e.type] || i
      , [s,r] = yo(t);
    oo(t, e.original, r);
    let o = () => {
        t._x_ignore || t._x_ignoreSelf || (n.inline && n.inline(t, e, s),
        n = n.bind(n, t, e, s),
        xn ? pt.get(bo).push(n) : n())
    }
    ;
    return o.runCleanups = r,
    o
}
var wo = (t, e) => ({name: i, value: n}) => (i.startsWith(t) && (i = i.replace(t, e)),
{
    name: i,
    value: n
})
  , xo = t => t;
function So(t= () => {}
) {
    return ({name: e, value: i}) => {
        let {name: n, value: s} = Eo.reduce( (r, o) => o(r), {
            name: e,
            value: i
        });
        return n !== e && t(n, e),
        {
            name: n,
            value: s
        }
    }
}
var Eo = [];
function es(t) {
    Eo.push(t)
}
function To({name: t}) {
    return Co().test(t)
}
var Co = () => new RegExp(`^${Jn}([^:^.]+)\\b`);
function Xc(t, e) {
    return ({name: i, value: n}) => {
        let s = i.match(Co())
          , r = i.match(/:([a-zA-Z0-9\-_:]+)/)
          , o = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
          , a = e || t[i] || i;
        return {
            type: s ? s[1] : null,
            value: r ? r[1] : null,
            modifiers: o.map(l => l.replace(".", "")),
            expression: n,
            original: a
        }
    }
}
var Sn = "DEFAULT"
  , ke = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", Sn, "teleport"];
function Yc(t, e) {
    let i = ke.indexOf(t.type) === -1 ? Sn : t.type
      , n = ke.indexOf(e.type) === -1 ? Sn : e.type;
    return ke.indexOf(i) - ke.indexOf(n)
}
function bt(t, e, i={}) {
    t.dispatchEvent(new CustomEvent(e,{
        detail: i,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
function qe(t, e) {
    if (typeof ShadowRoot == "function" && t instanceof ShadowRoot) {
        Array.from(t.children).forEach(s => qe(s, e));
        return
    }
    let i = !1;
    if (e(t, () => i = !0),
    i)
        return;
    let n = t.firstElementChild;
    for (; n; )
        qe(n, e),
        n = n.nextElementSibling
}
function se(t, ...e) {
    console.warn(`Alpine Warning: ${t}`, ...e)
}
var Rs = !1;
function Kc() {
    Rs && se("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
    Rs = !0,
    document.body || se("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
    bt(document, "alpine:init"),
    bt(document, "alpine:initializing"),
    Yn(),
    Ac(e => we(e, qe)),
    Gn(e => ot(e)),
    ro( (e, i) => {
        Qn(e, i).forEach(n => n())
    }
    );
    let t = e => !bi(e.parentElement, !0);
    Array.from(document.querySelectorAll(Mo().join(","))).filter(t).forEach(e => {
        we(e)
    }
    ),
    bt(document, "alpine:initialized"),
    setTimeout( () => {
        Qc()
    }
    )
}
var ts = []
  , Po = [];
function _o() {
    return ts.map(t => t())
}
function Mo() {
    return ts.concat(Po).map(t => t())
}
function Oo(t) {
    ts.push(t)
}
function Ao(t) {
    Po.push(t)
}
function bi(t, e=!1) {
    return Pt(t, i => {
        if ((e ? Mo() : _o()).some(s => i.matches(s)))
            return !0
    }
    )
}
function Pt(t, e) {
    if (t) {
        if (e(t))
            return t;
        if (t._x_teleportBack && (t = t._x_teleportBack),
        !!t.parentElement)
            return Pt(t.parentElement, e)
    }
}
function Zc(t) {
    return _o().some(e => t.matches(e))
}
var Lo = [];
function Jc(t) {
    Lo.push(t)
}
function we(t, e=qe, i= () => {}
) {
    Gc( () => {
        e(t, (n, s) => {
            i(n, s),
            Lo.forEach(r => r(n, s)),
            Qn(n, n.attributes).forEach(r => r()),
            n._x_ignore && s()
        }
        )
    }
    )
}
function ot(t, e=qe) {
    e(t, i => {
        Lc(i),
        ao(i)
    }
    )
}
function Qc() {
    [["ui", "dialog", ["[x-dialog], [x-popover]"]], ["anchor", "anchor", ["[x-anchor]"]], ["sort", "sort", ["[x-sort]"]]].forEach( ([e,i,n]) => {
        Wc(i) || n.some(s => {
            if (document.querySelector(s))
                return se(`found "${s}", but missing ${e} plugin`),
                !0
        }
        )
    }
    )
}
var En = []
  , is = !1;
function ns(t= () => {}
) {
    return queueMicrotask( () => {
        is || setTimeout( () => {
            Tn()
        }
        )
    }
    ),
    new Promise(e => {
        En.push( () => {
            t(),
            e()
        }
        )
    }
    )
}
function Tn() {
    for (is = !1; En.length; )
        En.shift()()
}
function ed() {
    is = !0
}
function ss(t, e) {
    return Array.isArray(e) ? ks(t, e.join(" ")) : typeof e == "object" && e !== null ? td(t, e) : typeof e == "function" ? ss(t, e()) : ks(t, e)
}
function ks(t, e) {
    let i = s => s.split(" ").filter(r => !t.classList.contains(r)).filter(Boolean)
      , n = s => (t.classList.add(...s),
    () => {
        t.classList.remove(...s)
    }
    );
    return e = e === !0 ? e = "" : e || "",
    n(i(e))
}
function td(t, e) {
    let i = a => a.split(" ").filter(Boolean)
      , n = Object.entries(e).flatMap( ([a,l]) => l ? i(a) : !1).filter(Boolean)
      , s = Object.entries(e).flatMap( ([a,l]) => l ? !1 : i(a)).filter(Boolean)
      , r = []
      , o = [];
    return s.forEach(a => {
        t.classList.contains(a) && (t.classList.remove(a),
        o.push(a))
    }
    ),
    n.forEach(a => {
        t.classList.contains(a) || (t.classList.add(a),
        r.push(a))
    }
    ),
    () => {
        o.forEach(a => t.classList.add(a)),
        r.forEach(a => t.classList.remove(a))
    }
}
function yi(t, e) {
    return typeof e == "object" && e !== null ? id(t, e) : nd(t, e)
}
function id(t, e) {
    let i = {};
    return Object.entries(e).forEach( ([n,s]) => {
        i[n] = t.style[n],
        n.startsWith("--") || (n = sd(n)),
        t.style.setProperty(n, s)
    }
    ),
    setTimeout( () => {
        t.style.length === 0 && t.removeAttribute("style")
    }
    ),
    () => {
        yi(t, i)
    }
}
function nd(t, e) {
    let i = t.getAttribute("style", e);
    return t.setAttribute("style", e),
    () => {
        t.setAttribute("style", i || "")
    }
}
function sd(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function Cn(t, e= () => {}
) {
    let i = !1;
    return function() {
        i ? e.apply(this, arguments) : (i = !0,
        t.apply(this, arguments))
    }
}
H("transition", (t, {value: e, modifiers: i, expression: n}, {evaluate: s}) => {
    typeof n == "function" && (n = s(n)),
    n !== !1 && (!n || typeof n == "boolean" ? od(t, i, e) : rd(t, n, e))
}
);
function rd(t, e, i) {
    Io(t, ss, ""),
    {
        enter: s => {
            t._x_transition.enter.during = s
        }
        ,
        "enter-start": s => {
            t._x_transition.enter.start = s
        }
        ,
        "enter-end": s => {
            t._x_transition.enter.end = s
        }
        ,
        leave: s => {
            t._x_transition.leave.during = s
        }
        ,
        "leave-start": s => {
            t._x_transition.leave.start = s
        }
        ,
        "leave-end": s => {
            t._x_transition.leave.end = s
        }
    }[i](e)
}
function od(t, e, i) {
    Io(t, yi);
    let n = !e.includes("in") && !e.includes("out") && !i
      , s = n || e.includes("in") || ["enter"].includes(i)
      , r = n || e.includes("out") || ["leave"].includes(i);
    e.includes("in") && !n && (e = e.filter( (v, y) => y < e.indexOf("out"))),
    e.includes("out") && !n && (e = e.filter( (v, y) => y > e.indexOf("out")));
    let o = !e.includes("opacity") && !e.includes("scale")
      , a = o || e.includes("opacity")
      , l = o || e.includes("scale")
      , c = a ? 0 : 1
      , d = l ? dt(e, "scale", 95) / 100 : 1
      , u = dt(e, "delay", 0) / 1e3
      , h = dt(e, "origin", "center")
      , f = "opacity, transform"
      , p = dt(e, "duration", 150) / 1e3
      , m = dt(e, "duration", 75) / 1e3
      , g = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    s && (t._x_transition.enter.during = {
        transformOrigin: h,
        transitionDelay: `${u}s`,
        transitionProperty: f,
        transitionDuration: `${p}s`,
        transitionTimingFunction: g
    },
    t._x_transition.enter.start = {
        opacity: c,
        transform: `scale(${d})`
    },
    t._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }),
    r && (t._x_transition.leave.during = {
        transformOrigin: h,
        transitionDelay: `${u}s`,
        transitionProperty: f,
        transitionDuration: `${m}s`,
        transitionTimingFunction: g
    },
    t._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    },
    t._x_transition.leave.end = {
        opacity: c,
        transform: `scale(${d})`
    })
}
function Io(t, e, i={}) {
    t._x_transition || (t._x_transition = {
        enter: {
            during: i,
            start: i,
            end: i
        },
        leave: {
            during: i,
            start: i,
            end: i
        },
        in(n= () => {}
        , s= () => {}
        ) {
            Pn(t, e, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, n, s)
        },
        out(n= () => {}
        , s= () => {}
        ) {
            Pn(t, e, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, n, s)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(t, e, i, n) {
    const s = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let r = () => s(i);
    if (e) {
        t._x_transition && (t._x_transition.enter || t._x_transition.leave) ? t._x_transition.enter && (Object.entries(t._x_transition.enter.during).length || Object.entries(t._x_transition.enter.start).length || Object.entries(t._x_transition.enter.end).length) ? t._x_transition.in(i) : r() : t._x_transition ? t._x_transition.in(i) : r();
        return
    }
    t._x_hidePromise = t._x_transition ? new Promise( (o, a) => {
        t._x_transition.out( () => {}
        , () => o(n)),
        t._x_transitioning && t._x_transitioning.beforeCancel( () => a({
            isFromCancelledTransition: !0
        }))
    }
    ) : Promise.resolve(n),
    queueMicrotask( () => {
        let o = Ro(t);
        o ? (o._x_hideChildren || (o._x_hideChildren = []),
        o._x_hideChildren.push(t)) : s( () => {
            let a = l => {
                let c = Promise.all([l._x_hidePromise, ...(l._x_hideChildren || []).map(a)]).then( ([d]) => d == null ? void 0 : d());
                return delete l._x_hidePromise,
                delete l._x_hideChildren,
                c
            }
            ;
            a(t).catch(l => {
                if (!l.isFromCancelledTransition)
                    throw l
            }
            )
        }
        )
    }
    )
}
;
function Ro(t) {
    let e = t.parentNode;
    if (e)
        return e._x_hidePromise ? e : Ro(e)
}
function Pn(t, e, {during: i, start: n, end: s}={}, r= () => {}
, o= () => {}
) {
    if (t._x_transitioning && t._x_transitioning.cancel(),
    Object.keys(i).length === 0 && Object.keys(n).length === 0 && Object.keys(s).length === 0) {
        r(),
        o();
        return
    }
    let a, l, c;
    ad(t, {
        start() {
            a = e(t, n)
        },
        during() {
            l = e(t, i)
        },
        before: r,
        end() {
            a(),
            c = e(t, s)
        },
        after: o,
        cleanup() {
            l(),
            c()
        }
    })
}
function ad(t, e) {
    let i, n, s, r = Cn( () => {
        j( () => {
            i = !0,
            n || e.before(),
            s || (e.end(),
            Tn()),
            e.after(),
            t.isConnected && e.cleanup(),
            delete t._x_transitioning
        }
        )
    }
    );
    t._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o)
        },
        cancel: Cn(function() {
            for (; this.beforeCancels.length; )
                this.beforeCancels.shift()();
            r()
        }),
        finish: r
    },
    j( () => {
        e.start(),
        e.during()
    }
    ),
    ed(),
    requestAnimationFrame( () => {
        if (i)
            return;
        let o = Number(getComputedStyle(t).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
          , a = Number(getComputedStyle(t).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        o === 0 && (o = Number(getComputedStyle(t).animationDuration.replace("s", "")) * 1e3),
        j( () => {
            e.before()
        }
        ),
        n = !0,
        requestAnimationFrame( () => {
            i || (j( () => {
                e.end()
            }
            ),
            Tn(),
            setTimeout(t._x_transitioning.finish, o + a),
            s = !0)
        }
        )
    }
    )
}
function dt(t, e, i) {
    if (t.indexOf(e) === -1)
        return i;
    const n = t[t.indexOf(e) + 1];
    if (!n || e === "scale" && isNaN(n))
        return i;
    if (e === "duration" || e === "delay") {
        let s = n.match(/([0-9]+)ms/);
        if (s)
            return s[1]
    }
    return e === "origin" && ["top", "right", "left", "center", "bottom"].includes(t[t.indexOf(e) + 2]) ? [n, t[t.indexOf(e) + 2]].join(" ") : n
}
var Ce = !1;
function _e(t, e= () => {}
) {
    return (...i) => Ce ? e(...i) : t(...i)
}
function ld(t) {
    return (...e) => Ce && t(...e)
}
var ko = [];
function wi(t) {
    ko.push(t)
}
function cd(t, e) {
    ko.forEach(i => i(t, e)),
    Ce = !0,
    zo( () => {
        we(e, (i, n) => {
            n(i, () => {}
            )
        }
        )
    }
    ),
    Ce = !1
}
var _n = !1;
function dd(t, e) {
    e._x_dataStack || (e._x_dataStack = t._x_dataStack),
    Ce = !0,
    _n = !0,
    zo( () => {
        ud(e)
    }
    ),
    Ce = !1,
    _n = !1
}
function ud(t) {
    let e = !1;
    we(t, (n, s) => {
        qe(n, (r, o) => {
            if (e && Zc(r))
                return o();
            e = !0,
            s(r, o)
        }
        )
    }
    )
}
function zo(t) {
    let e = We;
    Is( (i, n) => {
        let s = e(i);
        return st(s),
        () => {}
    }
    ),
    t(),
    Is(e)
}
function Do(t, e, i, n=[]) {
    switch (t._x_bindings || (t._x_bindings = nt({})),
    t._x_bindings[e] = i,
    e = n.includes("camel") ? yd(e) : e,
    e) {
    case "value":
        fd(t, i);
        break;
    case "style":
        pd(t, i);
        break;
    case "class":
        hd(t, i);
        break;
    case "selected":
    case "checked":
        md(t, e, i);
        break;
    default:
        Fo(t, e, i);
        break
    }
}
function fd(t, e) {
    if (Bo(t))
        t.attributes.value === void 0 && (t.value = e),
        window.fromModel && (typeof e == "boolean" ? t.checked = Jt(t.value) === e : t.checked = zs(t.value, e));
    else if (rs(t))
        Number.isInteger(e) ? t.value = e : !Array.isArray(e) && typeof e != "boolean" && ![null, void 0].includes(e) ? t.value = String(e) : Array.isArray(e) ? t.checked = e.some(i => zs(i, t.value)) : t.checked = !!e;
    else if (t.tagName === "SELECT")
        bd(t, e);
    else {
        if (t.value === e)
            return;
        t.value = e === void 0 ? "" : e
    }
}
function hd(t, e) {
    t._x_undoAddedClasses && t._x_undoAddedClasses(),
    t._x_undoAddedClasses = ss(t, e)
}
function pd(t, e) {
    t._x_undoAddedStyles && t._x_undoAddedStyles(),
    t._x_undoAddedStyles = yi(t, e)
}
function md(t, e, i) {
    Fo(t, e, i),
    vd(t, e, i)
}
function Fo(t, e, i) {
    [null, void 0, !1].includes(i) && xd(e) ? t.removeAttribute(e) : (No(e) && (i = e),
    gd(t, e, i))
}
function gd(t, e, i) {
    t.getAttribute(e) != i && t.setAttribute(e, i)
}
function vd(t, e, i) {
    t[e] !== i && (t[e] = i)
}
function bd(t, e) {
    const i = [].concat(e).map(n => n + "");
    Array.from(t.options).forEach(n => {
        n.selected = i.includes(n.value)
    }
    )
}
function yd(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, i) => i.toUpperCase())
}
function zs(t, e) {
    return t == e
}
function Jt(t) {
    return [1, "1", "true", "on", "yes", !0].includes(t) ? !0 : [0, "0", "false", "off", "no", !1].includes(t) ? !1 : t ? !!t : null
}
var wd = new Set(["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected", "shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootserializable"]);
function No(t) {
    return wd.has(t)
}
function xd(t) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(t)
}
function Sd(t, e, i) {
    return t._x_bindings && t._x_bindings[e] !== void 0 ? t._x_bindings[e] : jo(t, e, i)
}
function Ed(t, e, i, n=!0) {
    if (t._x_bindings && t._x_bindings[e] !== void 0)
        return t._x_bindings[e];
    if (t._x_inlineBindings && t._x_inlineBindings[e] !== void 0) {
        let s = t._x_inlineBindings[e];
        return s.extract = n,
        po( () => Fe(t, s.expression))
    }
    return jo(t, e, i)
}
function jo(t, e, i) {
    let n = t.getAttribute(e);
    return n === null ? typeof i == "function" ? i() : i : n === "" ? !0 : No(e) ? !![e, "true"].includes(n) : n
}
function rs(t) {
    return t.type === "checkbox" || t.localName === "ui-checkbox" || t.localName === "ui-switch"
}
function Bo(t) {
    return t.type === "radio" || t.localName === "ui-radio"
}
function $o(t, e) {
    var i;
    return function() {
        var n = this
          , s = arguments
          , r = function() {
            i = null,
            t.apply(n, s)
        };
        clearTimeout(i),
        i = setTimeout(r, e)
    }
}
function Ho(t, e) {
    let i;
    return function() {
        let n = this
          , s = arguments;
        i || (t.apply(n, s),
        i = !0,
        setTimeout( () => i = !1, e))
    }
}
function qo({get: t, set: e}, {get: i, set: n}) {
    let s = !0, r, o = We( () => {
        let a = t()
          , l = i();
        if (s)
            n(Li(a)),
            s = !1;
        else {
            let c = JSON.stringify(a)
              , d = JSON.stringify(l);
            c !== r ? n(Li(a)) : c !== d && e(Li(l))
        }
        r = JSON.stringify(t()),
        JSON.stringify(i())
    }
    );
    return () => {
        st(o)
    }
}
function Li(t) {
    return typeof t == "object" ? JSON.parse(JSON.stringify(t)) : t
}
function Td(t) {
    (Array.isArray(t) ? t : [t]).forEach(i => i(_t))
}
var Le = {}
  , Ds = !1;
function Cd(t, e) {
    if (Ds || (Le = nt(Le),
    Ds = !0),
    e === void 0)
        return Le[t];
    Le[t] = e,
    uo(Le[t]),
    typeof e == "object" && e !== null && e.hasOwnProperty("init") && typeof e.init == "function" && Le[t].init()
}
function Pd() {
    return Le
}
var Vo = {};
function _d(t, e) {
    let i = typeof e != "function" ? () => e : e;
    return t instanceof Element ? Wo(t, i()) : (Vo[t] = i,
    () => {}
    )
}
function Md(t) {
    return Object.entries(Vo).forEach( ([e,i]) => {
        Object.defineProperty(t, e, {
            get() {
                return (...n) => i(...n)
            }
        })
    }
    ),
    t
}
function Wo(t, e, i) {
    let n = [];
    for (; n.length; )
        n.pop()();
    let s = Object.entries(e).map( ([o,a]) => ({
        name: o,
        value: a
    }))
      , r = vo(s);
    return s = s.map(o => r.find(a => a.name === o.name) ? {
        name: `x-bind:${o.name}`,
        value: `"${o.value}"`
    } : o),
    Qn(t, s, i).map(o => {
        n.push(o.runCleanups),
        o()
    }
    ),
    () => {
        for (; n.length; )
            n.pop()()
    }
}
var Go = {};
function Od(t, e) {
    Go[t] = e
}
function Ad(t, e) {
    return Object.entries(Go).forEach( ([i,n]) => {
        Object.defineProperty(t, i, {
            get() {
                return (...s) => n.bind(e)(...s)
            },
            enumerable: !1
        })
    }
    ),
    t
}
var Ld = {
    get reactive() {
        return nt
    },
    get release() {
        return st
    },
    get effect() {
        return We
    },
    get raw() {
        return eo
    },
    version: "3.14.3",
    flushAndStopDeferringMutations: kc,
    dontAutoEvaluateFunctions: po,
    disableEffectScheduling: _c,
    startObservingMutations: Yn,
    stopObservingMutations: lo,
    setReactivityEngine: Mc,
    onAttributeRemoved: oo,
    onAttributesAdded: ro,
    closestDataStack: Qe,
    skipDuringClone: _e,
    onlyDuringClone: ld,
    addRootSelector: Oo,
    addInitSelector: Ao,
    interceptClone: wi,
    addScopeToNode: Tt,
    deferMutations: Rc,
    mapAttributes: es,
    evaluateLater: G,
    interceptInit: Jc,
    setEvaluator: Bc,
    mergeProxies: Ct,
    extractProp: Ed,
    findClosest: Pt,
    onElRemoved: Gn,
    closestRoot: bi,
    destroyTree: ot,
    interceptor: fo,
    transition: Pn,
    setStyles: yi,
    mutateDom: j,
    directive: H,
    entangle: qo,
    throttle: Ho,
    debounce: $o,
    evaluate: Fe,
    initTree: we,
    nextTick: ns,
    prefixed: rt,
    prefix: Vc,
    plugin: Td,
    magic: ce,
    store: Cd,
    start: Kc,
    clone: dd,
    cloneNode: cd,
    bound: Sd,
    $data: co,
    watch: to,
    walk: qe,
    data: Od,
    bind: _d
}
  , _t = Ld;
function Id(t, e) {
    const i = Object.create(null)
      , n = t.split(",");
    for (let s = 0; s < n.length; s++)
        i[n[s]] = !0;
    return e ? s => !!i[s.toLowerCase()] : s => !!i[s]
}
var Rd = Object.freeze({}), kd = Object.prototype.hasOwnProperty, xi = (t, e) => kd.call(t, e), Ne = Array.isArray, yt = t => Uo(t) === "[object Map]", zd = t => typeof t == "string", os = t => typeof t == "symbol", Si = t => t !== null && typeof t == "object", Dd = Object.prototype.toString, Uo = t => Dd.call(t), Xo = t => Uo(t).slice(8, -1), as = t => zd(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Fd = t => {
    const e = Object.create(null);
    return i => e[i] || (e[i] = t(i))
}
, Nd = Fd(t => t.charAt(0).toUpperCase() + t.slice(1)), Yo = (t, e) => t !== e && (t === t || e === e), Mn = new WeakMap, ut = [], he, je = Symbol("iterate"), On = Symbol("Map key iterate");
function jd(t) {
    return t && t._isEffect === !0
}
function Bd(t, e=Rd) {
    jd(t) && (t = t.raw);
    const i = qd(t, e);
    return e.lazy || i(),
    i
}
function $d(t) {
    t.active && (Ko(t),
    t.options.onStop && t.options.onStop(),
    t.active = !1)
}
var Hd = 0;
function qd(t, e) {
    const i = function() {
        if (!i.active)
            return t();
        if (!ut.includes(i)) {
            Ko(i);
            try {
                return Wd(),
                ut.push(i),
                he = i,
                t()
            } finally {
                ut.pop(),
                Zo(),
                he = ut[ut.length - 1]
            }
        }
    };
    return i.id = Hd++,
    i.allowRecurse = !!e.allowRecurse,
    i._isEffect = !0,
    i.active = !0,
    i.raw = t,
    i.deps = [],
    i.options = e,
    i
}
function Ko(t) {
    const {deps: e} = t;
    if (e.length) {
        for (let i = 0; i < e.length; i++)
            e[i].delete(t);
        e.length = 0
    }
}
var et = !0
  , ls = [];
function Vd() {
    ls.push(et),
    et = !1
}
function Wd() {
    ls.push(et),
    et = !0
}
function Zo() {
    const t = ls.pop();
    et = t === void 0 ? !0 : t
}
function ae(t, e, i) {
    if (!et || he === void 0)
        return;
    let n = Mn.get(t);
    n || Mn.set(t, n = new Map);
    let s = n.get(i);
    s || n.set(i, s = new Set),
    s.has(he) || (s.add(he),
    he.deps.push(s),
    he.options.onTrack && he.options.onTrack({
        effect: he,
        target: t,
        type: e,
        key: i
    }))
}
function Pe(t, e, i, n, s, r) {
    const o = Mn.get(t);
    if (!o)
        return;
    const a = new Set
      , l = d => {
        d && d.forEach(u => {
            (u !== he || u.allowRecurse) && a.add(u)
        }
        )
    }
    ;
    if (e === "clear")
        o.forEach(l);
    else if (i === "length" && Ne(t))
        o.forEach( (d, u) => {
            (u === "length" || u >= n) && l(d)
        }
        );
    else
        switch (i !== void 0 && l(o.get(i)),
        e) {
        case "add":
            Ne(t) ? as(i) && l(o.get("length")) : (l(o.get(je)),
            yt(t) && l(o.get(On)));
            break;
        case "delete":
            Ne(t) || (l(o.get(je)),
            yt(t) && l(o.get(On)));
            break;
        case "set":
            yt(t) && l(o.get(je));
            break
        }
    const c = d => {
        d.options.onTrigger && d.options.onTrigger({
            effect: d,
            target: t,
            key: i,
            type: e,
            newValue: n,
            oldValue: s,
            oldTarget: r
        }),
        d.options.scheduler ? d.options.scheduler(d) : d()
    }
    ;
    a.forEach(c)
}
var Gd = Id("__proto__,__v_isRef,__isVue")
  , Jo = new Set(Object.getOwnPropertyNames(Symbol).map(t => Symbol[t]).filter(os))
  , Ud = Qo()
  , Xd = Qo(!0)
  , Fs = Yd();
function Yd() {
    const t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
        t[e] = function(...i) {
            const n = F(this);
            for (let r = 0, o = this.length; r < o; r++)
                ae(n, "get", r + "");
            const s = n[e](...i);
            return s === -1 || s === !1 ? n[e](...i.map(F)) : s
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
        t[e] = function(...i) {
            Vd();
            const n = F(this)[e].apply(this, i);
            return Zo(),
            n
        }
    }
    ),
    t
}
function Qo(t=!1, e=!1) {
    return function(n, s, r) {
        if (s === "__v_isReactive")
            return !t;
        if (s === "__v_isReadonly")
            return t;
        if (s === "__v_raw" && r === (t ? e ? uu : na : e ? du : ia).get(n))
            return n;
        const o = Ne(n);
        if (!t && o && xi(Fs, s))
            return Reflect.get(Fs, s, r);
        const a = Reflect.get(n, s, r);
        return (os(s) ? Jo.has(s) : Gd(s)) || (t || ae(n, "get", s),
        e) ? a : An(a) ? !o || !as(s) ? a.value : a : Si(a) ? t ? sa(a) : fs(a) : a
    }
}
var Kd = Zd();
function Zd(t=!1) {
    return function(i, n, s, r) {
        let o = i[n];
        if (!t && (s = F(s),
        o = F(o),
        !Ne(i) && An(o) && !An(s)))
            return o.value = s,
            !0;
        const a = Ne(i) && as(n) ? Number(n) < i.length : xi(i, n)
          , l = Reflect.set(i, n, s, r);
        return i === F(r) && (a ? Yo(s, o) && Pe(i, "set", n, s, o) : Pe(i, "add", n, s)),
        l
    }
}
function Jd(t, e) {
    const i = xi(t, e)
      , n = t[e]
      , s = Reflect.deleteProperty(t, e);
    return s && i && Pe(t, "delete", e, void 0, n),
    s
}
function Qd(t, e) {
    const i = Reflect.has(t, e);
    return (!os(e) || !Jo.has(e)) && ae(t, "has", e),
    i
}
function eu(t) {
    return ae(t, "iterate", Ne(t) ? "length" : je),
    Reflect.ownKeys(t)
}
var tu = {
    get: Ud,
    set: Kd,
    deleteProperty: Jd,
    has: Qd,
    ownKeys: eu
}
  , iu = {
    get: Xd,
    set(t, e) {
        return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, t),
        !0
    },
    deleteProperty(t, e) {
        return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, t),
        !0
    }
}
  , cs = t => Si(t) ? fs(t) : t
  , ds = t => Si(t) ? sa(t) : t
  , us = t => t
  , Ei = t => Reflect.getPrototypeOf(t);
function At(t, e, i=!1, n=!1) {
    t = t.__v_raw;
    const s = F(t)
      , r = F(e);
    e !== r && !i && ae(s, "get", e),
    !i && ae(s, "get", r);
    const {has: o} = Ei(s)
      , a = n ? us : i ? ds : cs;
    if (o.call(s, e))
        return a(t.get(e));
    if (o.call(s, r))
        return a(t.get(r));
    t !== s && t.get(e)
}
function Lt(t, e=!1) {
    const i = this.__v_raw
      , n = F(i)
      , s = F(t);
    return t !== s && !e && ae(n, "has", t),
    !e && ae(n, "has", s),
    t === s ? i.has(t) : i.has(t) || i.has(s)
}
function It(t, e=!1) {
    return t = t.__v_raw,
    !e && ae(F(t), "iterate", je),
    Reflect.get(t, "size", t)
}
function Ns(t) {
    t = F(t);
    const e = F(this);
    return Ei(e).has.call(e, t) || (e.add(t),
    Pe(e, "add", t, t)),
    this
}
function js(t, e) {
    e = F(e);
    const i = F(this)
      , {has: n, get: s} = Ei(i);
    let r = n.call(i, t);
    r ? ta(i, n, t) : (t = F(t),
    r = n.call(i, t));
    const o = s.call(i, t);
    return i.set(t, e),
    r ? Yo(e, o) && Pe(i, "set", t, e, o) : Pe(i, "add", t, e),
    this
}
function Bs(t) {
    const e = F(this)
      , {has: i, get: n} = Ei(e);
    let s = i.call(e, t);
    s ? ta(e, i, t) : (t = F(t),
    s = i.call(e, t));
    const r = n ? n.call(e, t) : void 0
      , o = e.delete(t);
    return s && Pe(e, "delete", t, void 0, r),
    o
}
function $s() {
    const t = F(this)
      , e = t.size !== 0
      , i = yt(t) ? new Map(t) : new Set(t)
      , n = t.clear();
    return e && Pe(t, "clear", void 0, void 0, i),
    n
}
function Rt(t, e) {
    return function(n, s) {
        const r = this
          , o = r.__v_raw
          , a = F(o)
          , l = e ? us : t ? ds : cs;
        return !t && ae(a, "iterate", je),
        o.forEach( (c, d) => n.call(s, l(c), l(d), r))
    }
}
function kt(t, e, i) {
    return function(...n) {
        const s = this.__v_raw
          , r = F(s)
          , o = yt(r)
          , a = t === "entries" || t === Symbol.iterator && o
          , l = t === "keys" && o
          , c = s[t](...n)
          , d = i ? us : e ? ds : cs;
        return !e && ae(r, "iterate", l ? On : je),
        {
            next() {
                const {value: u, done: h} = c.next();
                return h ? {
                    value: u,
                    done: h
                } : {
                    value: a ? [d(u[0]), d(u[1])] : d(u),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Se(t) {
    return function(...e) {
        {
            const i = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(`${Nd(t)} operation ${i}failed: target is readonly.`, F(this))
        }
        return t === "delete" ? !1 : this
    }
}
function nu() {
    const t = {
        get(r) {
            return At(this, r)
        },
        get size() {
            return It(this)
        },
        has: Lt,
        add: Ns,
        set: js,
        delete: Bs,
        clear: $s,
        forEach: Rt(!1, !1)
    }
      , e = {
        get(r) {
            return At(this, r, !1, !0)
        },
        get size() {
            return It(this)
        },
        has: Lt,
        add: Ns,
        set: js,
        delete: Bs,
        clear: $s,
        forEach: Rt(!1, !0)
    }
      , i = {
        get(r) {
            return At(this, r, !0)
        },
        get size() {
            return It(this, !0)
        },
        has(r) {
            return Lt.call(this, r, !0)
        },
        add: Se("add"),
        set: Se("set"),
        delete: Se("delete"),
        clear: Se("clear"),
        forEach: Rt(!0, !1)
    }
      , n = {
        get(r) {
            return At(this, r, !0, !0)
        },
        get size() {
            return It(this, !0)
        },
        has(r) {
            return Lt.call(this, r, !0)
        },
        add: Se("add"),
        set: Se("set"),
        delete: Se("delete"),
        clear: Se("clear"),
        forEach: Rt(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        t[r] = kt(r, !1, !1),
        i[r] = kt(r, !0, !1),
        e[r] = kt(r, !1, !0),
        n[r] = kt(r, !0, !0)
    }
    ),
    [t, i, e, n]
}
var [su,ru,ou,au] = nu();
function ea(t, e) {
    const i = e ? t ? au : ou : t ? ru : su;
    return (n, s, r) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? n : Reflect.get(xi(i, s) && s in n ? i : n, s, r)
}
var lu = {
    get: ea(!1, !1)
}
  , cu = {
    get: ea(!0, !1)
};
function ta(t, e, i) {
    const n = F(i);
    if (n !== i && e.call(t, n)) {
        const s = Xo(t);
        console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var ia = new WeakMap
  , du = new WeakMap
  , na = new WeakMap
  , uu = new WeakMap;
function fu(t) {
    switch (t) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function hu(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : fu(Xo(t))
}
function fs(t) {
    return t && t.__v_isReadonly ? t : ra(t, !1, tu, lu, ia)
}
function sa(t) {
    return ra(t, !0, iu, cu, na)
}
function ra(t, e, i, n, s) {
    if (!Si(t))
        return console.warn(`value cannot be made reactive: ${String(t)}`),
        t;
    if (t.__v_raw && !(e && t.__v_isReactive))
        return t;
    const r = s.get(t);
    if (r)
        return r;
    const o = hu(t);
    if (o === 0)
        return t;
    const a = new Proxy(t,o === 2 ? n : i);
    return s.set(t, a),
    a
}
function F(t) {
    return t && F(t.__v_raw) || t
}
function An(t) {
    return !!(t && t.__v_isRef === !0)
}
ce("nextTick", () => ns);
ce("dispatch", t => bt.bind(bt, t));
ce("watch", (t, {evaluateLater: e, cleanup: i}) => (n, s) => {
    let r = e(n)
      , a = to( () => {
        let l;
        return r(c => l = c),
        l
    }
    , s);
    i(a)
}
);
ce("store", Pd);
ce("data", t => co(t));
ce("root", t => bi(t));
ce("refs", t => (t._x_refs_proxy || (t._x_refs_proxy = Ct(pu(t))),
t._x_refs_proxy));
function pu(t) {
    let e = [];
    return Pt(t, i => {
        i._x_refs && e.push(i._x_refs)
    }
    ),
    e
}
var Ii = {};
function oa(t) {
    return Ii[t] || (Ii[t] = 0),
    ++Ii[t]
}
function mu(t, e) {
    return Pt(t, i => {
        if (i._x_ids && i._x_ids[e])
            return !0
    }
    )
}
function gu(t, e) {
    t._x_ids || (t._x_ids = {}),
    t._x_ids[e] || (t._x_ids[e] = oa(e))
}
ce("id", (t, {cleanup: e}) => (i, n=null) => {
    let s = `${i}${n ? `-${n}` : ""}`;
    return vu(t, s, e, () => {
        let r = mu(t, i)
          , o = r ? r._x_ids[i] : oa(i);
        return n ? `${i}-${o}-${n}` : `${i}-${o}`
    }
    )
}
);
wi( (t, e) => {
    t._x_id && (e._x_id = t._x_id)
}
);
function vu(t, e, i, n) {
    if (t._x_id || (t._x_id = {}),
    t._x_id[e])
        return t._x_id[e];
    let s = n();
    return t._x_id[e] = s,
    i( () => {
        delete t._x_id[e]
    }
    ),
    s
}
ce("el", t => t);
aa("Focus", "focus", "focus");
aa("Persist", "persist", "persist");
function aa(t, e, i) {
    ce(e, n => se(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${i}`, n))
}
H("modelable", (t, {expression: e}, {effect: i, evaluateLater: n, cleanup: s}) => {
    let r = n(e)
      , o = () => {
        let d;
        return r(u => d = u),
        d
    }
      , a = n(`${e} = __placeholder`)
      , l = d => a( () => {}
    , {
        scope: {
            __placeholder: d
        }
    })
      , c = o();
    l(c),
    queueMicrotask( () => {
        if (!t._x_model)
            return;
        t._x_removeModelListeners.default();
        let d = t._x_model.get
          , u = t._x_model.set
          , h = qo({
            get() {
                return d()
            },
            set(f) {
                u(f)
            }
        }, {
            get() {
                return o()
            },
            set(f) {
                l(f)
            }
        });
        s(h)
    }
    )
}
);
H("teleport", (t, {modifiers: e, expression: i}, {cleanup: n}) => {
    t.tagName.toLowerCase() !== "template" && se("x-teleport can only be used on a <template> tag", t);
    let s = Hs(i)
      , r = t.content.cloneNode(!0).firstElementChild;
    t._x_teleport = r,
    r._x_teleportBack = t,
    t.setAttribute("data-teleport-template", !0),
    r.setAttribute("data-teleport-target", !0),
    t._x_forwardEvents && t._x_forwardEvents.forEach(a => {
        r.addEventListener(a, l => {
            l.stopPropagation(),
            t.dispatchEvent(new l.constructor(l.type,l))
        }
        )
    }
    ),
    Tt(r, {}, t);
    let o = (a, l, c) => {
        c.includes("prepend") ? l.parentNode.insertBefore(a, l) : c.includes("append") ? l.parentNode.insertBefore(a, l.nextSibling) : l.appendChild(a)
    }
    ;
    j( () => {
        o(r, s, e),
        _e( () => {
            we(r),
            r._x_ignore = !0
        }
        )()
    }
    ),
    t._x_teleportPutBack = () => {
        let a = Hs(i);
        j( () => {
            o(t._x_teleport, a, e)
        }
        )
    }
    ,
    n( () => j( () => {
        r.remove(),
        ot(r)
    }
    ))
}
);
var bu = document.createElement("div");
function Hs(t) {
    let e = _e( () => document.querySelector(t), () => bu)();
    return e || se(`Cannot find x-teleport element for selector: "${t}"`),
    e
}
var la = () => {}
;
la.inline = (t, {modifiers: e}, {cleanup: i}) => {
    e.includes("self") ? t._x_ignoreSelf = !0 : t._x_ignore = !0,
    i( () => {
        e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore
    }
    )
}
;
H("ignore", la);
H("effect", _e( (t, {expression: e}, {effect: i}) => {
    i(G(t, e))
}
));
function Ln(t, e, i, n) {
    let s = t
      , r = l => n(l)
      , o = {}
      , a = (l, c) => d => c(l, d);
    if (i.includes("dot") && (e = yu(e)),
    i.includes("camel") && (e = wu(e)),
    i.includes("passive") && (o.passive = !0),
    i.includes("capture") && (o.capture = !0),
    i.includes("window") && (s = window),
    i.includes("document") && (s = document),
    i.includes("debounce")) {
        let l = i[i.indexOf("debounce") + 1] || "invalid-wait"
          , c = oi(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        r = $o(r, c)
    }
    if (i.includes("throttle")) {
        let l = i[i.indexOf("throttle") + 1] || "invalid-wait"
          , c = oi(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        r = Ho(r, c)
    }
    return i.includes("prevent") && (r = a(r, (l, c) => {
        c.preventDefault(),
        l(c)
    }
    )),
    i.includes("stop") && (r = a(r, (l, c) => {
        c.stopPropagation(),
        l(c)
    }
    )),
    i.includes("once") && (r = a(r, (l, c) => {
        l(c),
        s.removeEventListener(e, r, o)
    }
    )),
    (i.includes("away") || i.includes("outside")) && (s = document,
    r = a(r, (l, c) => {
        t.contains(c.target) || c.target.isConnected !== !1 && (t.offsetWidth < 1 && t.offsetHeight < 1 || t._x_isShown !== !1 && l(c))
    }
    )),
    i.includes("self") && (r = a(r, (l, c) => {
        c.target === t && l(c)
    }
    )),
    (Su(e) || ca(e)) && (r = a(r, (l, c) => {
        Eu(c, i) || l(c)
    }
    )),
    s.addEventListener(e, r, o),
    () => {
        s.removeEventListener(e, r, o)
    }
}
function yu(t) {
    return t.replace(/-/g, ".")
}
function wu(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, i) => i.toUpperCase())
}
function oi(t) {
    return !Array.isArray(t) && !isNaN(t)
}
function xu(t) {
    return [" ", "_"].includes(t) ? t : t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function Su(t) {
    return ["keydown", "keyup"].includes(t)
}
function ca(t) {
    return ["contextmenu", "click", "mouse"].some(e => t.includes(e))
}
function Eu(t, e) {
    let i = e.filter(r => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(r));
    if (i.includes("debounce")) {
        let r = i.indexOf("debounce");
        i.splice(r, oi((i[r + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (i.includes("throttle")) {
        let r = i.indexOf("throttle");
        i.splice(r, oi((i[r + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (i.length === 0 || i.length === 1 && qs(t.key).includes(i[0]))
        return !1;
    const s = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(r => i.includes(r));
    return i = i.filter(r => !s.includes(r)),
    !(s.length > 0 && s.filter(o => ((o === "cmd" || o === "super") && (o = "meta"),
    t[`${o}Key`])).length === s.length && (ca(t.type) || qs(t.key).includes(i[0])))
}
function qs(t) {
    if (!t)
        return [];
    t = xu(t);
    let e = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        comma: ",",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return e[t] = t,
    Object.keys(e).map(i => {
        if (e[i] === t)
            return i
    }
    ).filter(i => i)
}
H("model", (t, {modifiers: e, expression: i}, {effect: n, cleanup: s}) => {
    let r = t;
    e.includes("parent") && (r = t.parentNode);
    let o = G(r, i), a;
    typeof i == "string" ? a = G(r, `${i} = __placeholder`) : typeof i == "function" && typeof i() == "string" ? a = G(r, `${i()} = __placeholder`) : a = () => {}
    ;
    let l = () => {
        let h;
        return o(f => h = f),
        Vs(h) ? h.get() : h
    }
      , c = h => {
        let f;
        o(p => f = p),
        Vs(f) ? f.set(h) : a( () => {}
        , {
            scope: {
                __placeholder: h
            }
        })
    }
    ;
    typeof i == "string" && t.type === "radio" && j( () => {
        t.hasAttribute("name") || t.setAttribute("name", i)
    }
    );
    var d = t.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(t.type) || e.includes("lazy") ? "change" : "input";
    let u = Ce ? () => {}
    : Ln(t, d, e, h => {
        c(Ri(t, e, h, l()))
    }
    );
    if (e.includes("fill") && ([void 0, null, ""].includes(l()) || rs(t) && Array.isArray(l()) || t.tagName.toLowerCase() === "select" && t.multiple) && c(Ri(t, e, {
        target: t
    }, l())),
    t._x_removeModelListeners || (t._x_removeModelListeners = {}),
    t._x_removeModelListeners.default = u,
    s( () => t._x_removeModelListeners.default()),
    t.form) {
        let h = Ln(t.form, "reset", [], f => {
            ns( () => t._x_model && t._x_model.set(Ri(t, e, {
                target: t
            }, l())))
        }
        );
        s( () => h())
    }
    t._x_model = {
        get() {
            return l()
        },
        set(h) {
            c(h)
        }
    },
    t._x_forceModelUpdate = h => {
        h === void 0 && typeof i == "string" && i.match(/\./) && (h = ""),
        window.fromModel = !0,
        j( () => Do(t, "value", h)),
        delete window.fromModel
    }
    ,
    n( () => {
        let h = l();
        e.includes("unintrusive") && document.activeElement.isSameNode(t) || t._x_forceModelUpdate(h)
    }
    )
}
);
function Ri(t, e, i, n) {
    return j( () => {
        if (i instanceof CustomEvent && i.detail !== void 0)
            return i.detail !== null && i.detail !== void 0 ? i.detail : i.target.value;
        if (rs(t))
            if (Array.isArray(n)) {
                let s = null;
                return e.includes("number") ? s = ki(i.target.value) : e.includes("boolean") ? s = Jt(i.target.value) : s = i.target.value,
                i.target.checked ? n.includes(s) ? n : n.concat([s]) : n.filter(r => !Tu(r, s))
            } else
                return i.target.checked;
        else {
            if (t.tagName.toLowerCase() === "select" && t.multiple)
                return e.includes("number") ? Array.from(i.target.selectedOptions).map(s => {
                    let r = s.value || s.text;
                    return ki(r)
                }
                ) : e.includes("boolean") ? Array.from(i.target.selectedOptions).map(s => {
                    let r = s.value || s.text;
                    return Jt(r)
                }
                ) : Array.from(i.target.selectedOptions).map(s => s.value || s.text);
            {
                let s;
                return Bo(t) ? i.target.checked ? s = i.target.value : s = n : s = i.target.value,
                e.includes("number") ? ki(s) : e.includes("boolean") ? Jt(s) : e.includes("trim") ? s.trim() : s
            }
        }
    }
    )
}
function ki(t) {
    let e = t ? parseFloat(t) : null;
    return Cu(e) ? e : t
}
function Tu(t, e) {
    return t == e
}
function Cu(t) {
    return !Array.isArray(t) && !isNaN(t)
}
function Vs(t) {
    return t !== null && typeof t == "object" && typeof t.get == "function" && typeof t.set == "function"
}
H("cloak", t => queueMicrotask( () => j( () => t.removeAttribute(rt("cloak")))));
Ao( () => `[${rt("init")}]`);
H("init", _e( (t, {expression: e}, {evaluate: i}) => typeof e == "string" ? !!e.trim() && i(e, {}, !1) : i(e, {}, !1)));
H("text", (t, {expression: e}, {effect: i, evaluateLater: n}) => {
    let s = n(e);
    i( () => {
        s(r => {
            j( () => {
                t.textContent = r
            }
            )
        }
        )
    }
    )
}
);
H("html", (t, {expression: e}, {effect: i, evaluateLater: n}) => {
    let s = n(e);
    i( () => {
        s(r => {
            j( () => {
                t.innerHTML = r,
                t._x_ignoreSelf = !0,
                we(t),
                delete t._x_ignoreSelf
            }
            )
        }
        )
    }
    )
}
);
es(wo(":", xo(rt("bind:"))));
var da = (t, {value: e, modifiers: i, expression: n, original: s}, {effect: r, cleanup: o}) => {
    if (!e) {
        let l = {};
        Md(l),
        G(t, n)(d => {
            Wo(t, d, s)
        }
        , {
            scope: l
        });
        return
    }
    if (e === "key")
        return Pu(t, n);
    if (t._x_inlineBindings && t._x_inlineBindings[e] && t._x_inlineBindings[e].extract)
        return;
    let a = G(t, n);
    r( () => a(l => {
        l === void 0 && typeof n == "string" && n.match(/\./) && (l = ""),
        j( () => Do(t, e, l, i))
    }
    )),
    o( () => {
        t._x_undoAddedClasses && t._x_undoAddedClasses(),
        t._x_undoAddedStyles && t._x_undoAddedStyles()
    }
    )
}
;
da.inline = (t, {value: e, modifiers: i, expression: n}) => {
    e && (t._x_inlineBindings || (t._x_inlineBindings = {}),
    t._x_inlineBindings[e] = {
        expression: n,
        extract: !1
    })
}
;
H("bind", da);
function Pu(t, e) {
    t._x_keyExpression = e
}
Oo( () => `[${rt("data")}]`);
H("data", (t, {expression: e}, {cleanup: i}) => {
    if (_u(t))
        return;
    e = e === "" ? "{}" : e;
    let n = {};
    wn(n, t);
    let s = {};
    Ad(s, n);
    let r = Fe(t, e, {
        scope: s
    });
    (r === void 0 || r === !0) && (r = {}),
    wn(r, t);
    let o = nt(r);
    uo(o);
    let a = Tt(t, o);
    o.init && Fe(t, o.init),
    i( () => {
        o.destroy && Fe(t, o.destroy),
        a()
    }
    )
}
);
wi( (t, e) => {
    t._x_dataStack && (e._x_dataStack = t._x_dataStack,
    e.setAttribute("data-has-alpine-state", !0))
}
);
function _u(t) {
    return Ce ? _n ? !0 : t.hasAttribute("data-has-alpine-state") : !1
}
H("show", (t, {modifiers: e, expression: i}, {effect: n}) => {
    let s = G(t, i);
    t._x_doHide || (t._x_doHide = () => {
        j( () => {
            t.style.setProperty("display", "none", e.includes("important") ? "important" : void 0)
        }
        )
    }
    ),
    t._x_doShow || (t._x_doShow = () => {
        j( () => {
            t.style.length === 1 && t.style.display === "none" ? t.removeAttribute("style") : t.style.removeProperty("display")
        }
        )
    }
    );
    let r = () => {
        t._x_doHide(),
        t._x_isShown = !1
    }
    , o = () => {
        t._x_doShow(),
        t._x_isShown = !0
    }
    , a = () => setTimeout(o), l = Cn(u => u ? o() : r(), u => {
        typeof t._x_toggleAndCascadeWithTransitions == "function" ? t._x_toggleAndCascadeWithTransitions(t, u, o, r) : u ? a() : r()
    }
    ), c, d = !0;
    n( () => s(u => {
        !d && u === c || (e.includes("immediate") && (u ? a() : r()),
        l(u),
        c = u,
        d = !1)
    }
    ))
}
);
H("for", (t, {expression: e}, {effect: i, cleanup: n}) => {
    let s = Ou(e)
      , r = G(t, s.items)
      , o = G(t, t._x_keyExpression || "index");
    t._x_prevKeys = [],
    t._x_lookup = {},
    i( () => Mu(t, s, r, o)),
    n( () => {
        Object.values(t._x_lookup).forEach(a => j( () => {
            ot(a),
            a.remove()
        }
        )),
        delete t._x_prevKeys,
        delete t._x_lookup
    }
    )
}
);
function Mu(t, e, i, n) {
    let s = o => typeof o == "object" && !Array.isArray(o)
      , r = t;
    i(o => {
        Au(o) && o >= 0 && (o = Array.from(Array(o).keys(), g => g + 1)),
        o === void 0 && (o = []);
        let a = t._x_lookup
          , l = t._x_prevKeys
          , c = []
          , d = [];
        if (s(o))
            o = Object.entries(o).map( ([g,v]) => {
                let y = Ws(e, v, g, o);
                n(b => {
                    d.includes(b) && se("Duplicate key on x-for", t),
                    d.push(b)
                }
                , {
                    scope: {
                        index: g,
                        ...y
                    }
                }),
                c.push(y)
            }
            );
        else
            for (let g = 0; g < o.length; g++) {
                let v = Ws(e, o[g], g, o);
                n(y => {
                    d.includes(y) && se("Duplicate key on x-for", t),
                    d.push(y)
                }
                , {
                    scope: {
                        index: g,
                        ...v
                    }
                }),
                c.push(v)
            }
        let u = []
          , h = []
          , f = []
          , p = [];
        for (let g = 0; g < l.length; g++) {
            let v = l[g];
            d.indexOf(v) === -1 && f.push(v)
        }
        l = l.filter(g => !f.includes(g));
        let m = "template";
        for (let g = 0; g < d.length; g++) {
            let v = d[g]
              , y = l.indexOf(v);
            if (y === -1)
                l.splice(g, 0, v),
                u.push([m, g]);
            else if (y !== g) {
                let b = l.splice(g, 1)[0]
                  , x = l.splice(y - 1, 1)[0];
                l.splice(g, 0, x),
                l.splice(y, 0, b),
                h.push([b, x])
            } else
                p.push(v);
            m = v
        }
        for (let g = 0; g < f.length; g++) {
            let v = f[g];
            v in a && (j( () => {
                ot(a[v]),
                a[v].remove()
            }
            ),
            delete a[v])
        }
        for (let g = 0; g < h.length; g++) {
            let[v,y] = h[g]
              , b = a[v]
              , x = a[y]
              , S = document.createElement("div");
            j( () => {
                x || se('x-for ":key" is undefined or invalid', r, y, a),
                x.after(S),
                b.after(x),
                x._x_currentIfEl && x.after(x._x_currentIfEl),
                S.before(b),
                b._x_currentIfEl && b.after(b._x_currentIfEl),
                S.remove()
            }
            ),
            x._x_refreshXForScope(c[d.indexOf(y)])
        }
        for (let g = 0; g < u.length; g++) {
            let[v,y] = u[g]
              , b = v === "template" ? r : a[v];
            b._x_currentIfEl && (b = b._x_currentIfEl);
            let x = c[y]
              , S = d[y]
              , T = document.importNode(r.content, !0).firstElementChild
              , O = nt(x);
            Tt(T, O, r),
            T._x_refreshXForScope = M => {
                Object.entries(M).forEach( ([N,C]) => {
                    O[N] = C
                }
                )
            }
            ,
            j( () => {
                b.after(T),
                _e( () => we(T))()
            }
            ),
            typeof S == "object" && se("x-for key cannot be an object, it must be a string or an integer", r),
            a[S] = T
        }
        for (let g = 0; g < p.length; g++)
            a[p[g]]._x_refreshXForScope(c[d.indexOf(p[g])]);
        r._x_prevKeys = d
    }
    )
}
function Ou(t) {
    let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
      , i = /^\s*\(|\)\s*$/g
      , n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
      , s = t.match(n);
    if (!s)
        return;
    let r = {};
    r.items = s[2].trim();
    let o = s[1].replace(i, "").trim()
      , a = o.match(e);
    return a ? (r.item = o.replace(e, "").trim(),
    r.index = a[1].trim(),
    a[2] && (r.collection = a[2].trim())) : r.item = o,
    r
}
function Ws(t, e, i, n) {
    let s = {};
    return /^\[.*\]$/.test(t.item) && Array.isArray(e) ? t.item.replace("[", "").replace("]", "").split(",").map(o => o.trim()).forEach( (o, a) => {
        s[o] = e[a]
    }
    ) : /^\{.*\}$/.test(t.item) && !Array.isArray(e) && typeof e == "object" ? t.item.replace("{", "").replace("}", "").split(",").map(o => o.trim()).forEach(o => {
        s[o] = e[o]
    }
    ) : s[t.item] = e,
    t.index && (s[t.index] = i),
    t.collection && (s[t.collection] = n),
    s
}
function Au(t) {
    return !Array.isArray(t) && !isNaN(t)
}
function ua() {}
ua.inline = (t, {expression: e}, {cleanup: i}) => {
    let n = bi(t);
    n._x_refs || (n._x_refs = {}),
    n._x_refs[e] = t,
    i( () => delete n._x_refs[e])
}
;
H("ref", ua);
H("if", (t, {expression: e}, {effect: i, cleanup: n}) => {
    t.tagName.toLowerCase() !== "template" && se("x-if can only be used on a <template> tag", t);
    let s = G(t, e)
      , r = () => {
        if (t._x_currentIfEl)
            return t._x_currentIfEl;
        let a = t.content.cloneNode(!0).firstElementChild;
        return Tt(a, {}, t),
        j( () => {
            t.after(a),
            _e( () => we(a))()
        }
        ),
        t._x_currentIfEl = a,
        t._x_undoIf = () => {
            j( () => {
                ot(a),
                a.remove()
            }
            ),
            delete t._x_currentIfEl
        }
        ,
        a
    }
      , o = () => {
        t._x_undoIf && (t._x_undoIf(),
        delete t._x_undoIf)
    }
    ;
    i( () => s(a => {
        a ? r() : o()
    }
    )),
    n( () => t._x_undoIf && t._x_undoIf())
}
);
H("id", (t, {expression: e}, {evaluate: i}) => {
    i(e).forEach(s => gu(t, s))
}
);
wi( (t, e) => {
    t._x_ids && (e._x_ids = t._x_ids)
}
);
es(wo("@", xo(rt("on:"))));
H("on", _e( (t, {value: e, modifiers: i, expression: n}, {cleanup: s}) => {
    let r = n ? G(t, n) : () => {}
    ;
    t.tagName.toLowerCase() === "template" && (t._x_forwardEvents || (t._x_forwardEvents = []),
    t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
    let o = Ln(t, e, i, a => {
        r( () => {}
        , {
            scope: {
                $event: a
            },
            params: [a]
        })
    }
    );
    s( () => o())
}
));
Ti("Collapse", "collapse", "collapse");
Ti("Intersect", "intersect", "intersect");
Ti("Focus", "trap", "focus");
Ti("Mask", "mask", "mask");
function Ti(t, e, i) {
    H(e, n => se(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${i}`, n))
}
_t.setEvaluator(go);
_t.setReactivityEngine({
    reactive: fs,
    effect: Bd,
    release: $d,
    raw: F
});
var Lu = _t
  , Mt = Lu;
function Iu(t) {
    t.directive("resize", t.skipDuringClone( (e, {value: i, expression: n, modifiers: s}, {evaluateLater: r, cleanup: o}) => {
        let a = r(n)
          , l = (d, u) => {
            a( () => {}
            , {
                scope: {
                    $width: d,
                    $height: u
                }
            })
        }
          , c = s.includes("document") ? ku(l) : Ru(e, l);
        o( () => c())
    }
    ))
}
function Ru(t, e) {
    let i = new ResizeObserver(n => {
        let[s,r] = fa(n);
        e(s, r)
    }
    );
    return i.observe(t),
    () => i.disconnect()
}
var zi, Di = new Set;
function ku(t) {
    return Di.add(t),
    zi || (zi = new ResizeObserver(e => {
        let[i,n] = fa(e);
        Di.forEach(s => s(i, n))
    }
    ),
    zi.observe(document.documentElement)),
    () => {
        Di.delete(t)
    }
}
function fa(t) {
    let e, i;
    for (let n of t)
        e = n.borderBoxSize[0].inlineSize,
        i = n.borderBoxSize[0].blockSize;
    return [e, i]
}
var zu = Iu;
let In = () => {}
;
const Gs = (t, e=void 0) => (typeof t == "function" && (t = t()),
typeof t == "object" && (t = JSON.stringify(t)),
e !== void 0 ? window.navigator.clipboard.write([new ClipboardItem({
    [e]: new Blob([t],{
        type: e
    })
})]).then(In) : window.navigator.clipboard.writeText(t).then(In));
function Rn(t) {
    t.magic("clipboard", () => Gs),
    t.directive("clipboard", (e, {modifiers: i, expression: n}, {evaluateLater: s, cleanup: r}) => {
        const o = i.includes("raw") ? l => l(n) : s(n)
          , a = () => o(Gs);
        e.addEventListener("click", a),
        r( () => {
            e.removeEventListener("click", a)
        }
        )
    }
    )
}
Rn.configure = t => (t.hasOwnProperty("onCopy") && typeof t.onCopy == "function" && (In = t.onCopy),
Rn);
function Du(t) {
    t.directive("mask", (e, {value: i, expression: n}, {effect: s, evaluateLater: r, cleanup: o}) => {
        let a = () => n
          , l = "";
        queueMicrotask( () => {
            if (["function", "dynamic"].includes(i)) {
                let h = r(n);
                s( () => {
                    a = f => {
                        let p;
                        return t.dontAutoEvaluateFunctions( () => {
                            h(m => {
                                p = typeof m == "function" ? m(f) : m
                            }
                            , {
                                scope: {
                                    $input: f,
                                    $money: Nu.bind({
                                        el: e
                                    })
                                }
                            })
                        }
                        ),
                        p
                    }
                    ,
                    d(e, !1)
                }
                )
            } else
                d(e, !1);
            e._x_model && e._x_model.set(e.value)
        }
        );
        const c = new AbortController;
        o( () => {
            c.abort()
        }
        ),
        e.addEventListener("input", () => d(e), {
            signal: c.signal,
            capture: !0
        }),
        e.addEventListener("blur", () => d(e, !1), {
            signal: c.signal
        });
        function d(h, f=!0) {
            let p = h.value
              , m = a(p);
            if (!m || m === "false")
                return !1;
            if (l.length - h.value.length === 1)
                return l = h.value;
            let g = () => {
                l = h.value = u(p, m)
            }
            ;
            f ? Fu(h, m, () => {
                g()
            }
            ) : g()
        }
        function u(h, f) {
            if (h === "")
                return "";
            let p = ha(f, h);
            return pa(f, p)
        }
    }
    ).before("model")
}
function Fu(t, e, i) {
    let n = t.selectionStart
      , s = t.value;
    i();
    let r = s.slice(0, n)
      , o = pa(e, ha(e, r)).length;
    t.setSelectionRange(o, o)
}
function ha(t, e) {
    let i = e
      , n = ""
      , s = {
        9: /[0-9]/,
        a: /[a-zA-Z]/,
        "*": /[a-zA-Z0-9]/
    }
      , r = "";
    for (let o = 0; o < t.length; o++) {
        if (["9", "a", "*"].includes(t[o])) {
            r += t[o];
            continue
        }
        for (let a = 0; a < i.length; a++)
            if (i[a] === t[o]) {
                i = i.slice(0, a) + i.slice(a + 1);
                break
            }
    }
    for (let o = 0; o < r.length; o++) {
        let a = !1;
        for (let l = 0; l < i.length; l++)
            if (s[r[o]].test(i[l])) {
                n += i[l],
                i = i.slice(0, l) + i.slice(l + 1),
                a = !0;
                break
            }
        if (!a)
            break
    }
    return n
}
function pa(t, e) {
    let i = Array.from(e)
      , n = "";
    for (let s = 0; s < t.length; s++) {
        if (!["9", "a", "*"].includes(t[s])) {
            n += t[s];
            continue
        }
        if (i.length === 0)
            break;
        n += i.shift()
    }
    return n
}
function Nu(t, e=".", i, n=2) {
    if (t === "-")
        return "-";
    if (/^\D+$/.test(t))
        return "9";
    i == null && (i = e === "," ? "." : ",");
    let s = (l, c) => {
        let d = ""
          , u = 0;
        for (let h = l.length - 1; h >= 0; h--)
            l[h] !== c && (u === 3 ? (d = l[h] + c + d,
            u = 0) : d = l[h] + d,
            u++);
        return d
    }
      , r = t.startsWith("-") ? "-" : ""
      , o = t.replaceAll(new RegExp(`[^0-9\\${e}]`,"g"), "")
      , a = Array.from({
        length: o.split(e)[0].length
    }).fill("9").join("");
    return a = `${r}${s(a, i)}`,
    n > 0 && t.includes(e) && (a += `${e}` + "9".repeat(n)),
    queueMicrotask( () => {
        this.el.value.endsWith(e) || this.el.value[this.el.selectionStart - 1] === e && this.el.setSelectionRange(this.el.selectionStart - 1, this.el.selectionStart - 1)
    }
    ),
    a
}
var ju = Du;
function Us(t) {
    return t !== null && typeof t == "object" && "constructor"in t && t.constructor === Object
}
function hs(t, e) {
    t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(i => {
        typeof t[i] > "u" ? t[i] = e[i] : Us(e[i]) && Us(t[i]) && Object.keys(e[i]).length > 0 && hs(t[i], e[i])
    }
    )
}
const ma = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function Ge() {
    const t = typeof document < "u" ? document : {};
    return hs(t, ma),
    t
}
const Bu = {
    document: ma,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(t) {
        return typeof setTimeout > "u" ? (t(),
        null) : setTimeout(t, 0)
    },
    cancelAnimationFrame(t) {
        typeof setTimeout > "u" || clearTimeout(t)
    }
};
function Q() {
    const t = typeof window < "u" ? window : {};
    return hs(t, Bu),
    t
}
function $u(t) {
    return t === void 0 && (t = ""),
    t.trim().split(" ").filter(e => !!e.trim())
}
function Hu(t) {
    const e = t;
    Object.keys(e).forEach(i => {
        try {
            e[i] = null
        } catch {}
        try {
            delete e[i]
        } catch {}
    }
    )
}
function kn(t, e) {
    return e === void 0 && (e = 0),
    setTimeout(t, e)
}
function Be() {
    return Date.now()
}
function qu(t) {
    const e = Q();
    let i;
    return e.getComputedStyle && (i = e.getComputedStyle(t, null)),
    !i && t.currentStyle && (i = t.currentStyle),
    i || (i = t.style),
    i
}
function Vu(t, e) {
    e === void 0 && (e = "x");
    const i = Q();
    let n, s, r;
    const o = qu(t);
    return i.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform,
    s.split(",").length > 6 && (s = s.split(", ").map(a => a.replace(",", ".")).join(", ")),
    r = new i.WebKitCSSMatrix(s === "none" ? "" : s)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    n = r.toString().split(",")),
    e === "x" && (i.WebKitCSSMatrix ? s = r.m41 : n.length === 16 ? s = parseFloat(n[12]) : s = parseFloat(n[4])),
    e === "y" && (i.WebKitCSSMatrix ? s = r.m42 : n.length === 16 ? s = parseFloat(n[13]) : s = parseFloat(n[5])),
    s || 0
}
function mt(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}
function Wu(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}
function Z() {
    const t = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
        const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (n != null && !Wu(n)) {
            const s = Object.keys(Object(n)).filter(r => e.indexOf(r) < 0);
            for (let r = 0, o = s.length; r < o; r += 1) {
                const a = s[r]
                  , l = Object.getOwnPropertyDescriptor(n, a);
                l !== void 0 && l.enumerable && (mt(t[a]) && mt(n[a]) ? n[a].__swiper__ ? t[a] = n[a] : Z(t[a], n[a]) : !mt(t[a]) && mt(n[a]) ? (t[a] = {},
                n[a].__swiper__ ? t[a] = n[a] : Z(t[a], n[a])) : t[a] = n[a])
            }
        }
    }
    return t
}
function zt(t, e, i) {
    t.style.setProperty(e, i)
}
function ga(t) {
    let {swiper: e, targetPosition: i, side: n} = t;
    const s = Q()
      , r = -e.translate;
    let o = null, a;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    s.cancelAnimationFrame(e.cssModeFrameID);
    const c = i > r ? "next" : "prev"
      , d = (h, f) => c === "next" && h >= f || c === "prev" && h <= f
      , u = () => {
        a = new Date().getTime(),
        o === null && (o = a);
        const h = Math.max(Math.min((a - o) / l, 1), 0)
          , f = .5 - Math.cos(h * Math.PI) / 2;
        let p = r + f * (i - r);
        if (d(p, i) && (p = i),
        e.wrapperEl.scrollTo({
            [n]: p
        }),
        d(p, i)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [n]: p
                })
            }
            ),
            s.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = s.requestAnimationFrame(u)
    }
    ;
    u()
}
function re(t, e) {
    e === void 0 && (e = "");
    const i = [...t.children];
    return t instanceof HTMLSlotElement && i.push(...t.assignedElements()),
    e ? i.filter(n => n.matches(e)) : i
}
function Gu(t, e) {
    const i = e.contains(t);
    return !i && e instanceof HTMLSlotElement ? [...e.assignedElements()].includes(t) : i
}
function ai(t) {
    try {
        console.warn(t);
        return
    } catch {}
}
function li(t, e) {
    e === void 0 && (e = []);
    const i = document.createElement(t);
    return i.classList.add(...Array.isArray(e) ? e : $u(e)),
    i
}
function Uu(t, e) {
    const i = [];
    for (; t.previousElementSibling; ) {
        const n = t.previousElementSibling;
        e ? n.matches(e) && i.push(n) : i.push(n),
        t = n
    }
    return i
}
function Xu(t, e) {
    const i = [];
    for (; t.nextElementSibling; ) {
        const n = t.nextElementSibling;
        e ? n.matches(e) && i.push(n) : i.push(n),
        t = n
    }
    return i
}
function Te(t, e) {
    return Q().getComputedStyle(t, null).getPropertyValue(e)
}
function Xs(t) {
    let e = t, i;
    if (e) {
        for (i = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (i += 1);
        return i
    }
}
function Yu(t, e) {
    const i = [];
    let n = t.parentElement;
    for (; n; )
        e ? n.matches(e) && i.push(n) : i.push(n),
        n = n.parentElement;
    return i
}
function Fi(t, e) {
    function i(n) {
        n.target === t && (e.call(t, n),
        t.removeEventListener("transitionend", i))
    }
    e && t.addEventListener("transitionend", i)
}
function Ys(t, e, i) {
    const n = Q();
    return i ? t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : t.offsetWidth
}
function ge(t) {
    return (Array.isArray(t) ? t : [t]).filter(e => !!e)
}
let Ni;
function Ku() {
    const t = Q()
      , e = Ge();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch)
    }
}
function va() {
    return Ni || (Ni = Ku()),
    Ni
}
let ji;
function Zu(t) {
    let {userAgent: e} = t === void 0 ? {} : t;
    const i = va()
      , n = Q()
      , s = n.navigator.platform
      , r = e || n.navigator.userAgent
      , o = {
        ios: !1,
        android: !1
    }
      , a = n.screen.width
      , l = n.screen.height
      , c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = r.match(/(iPad).*OS\s([\d_]+)/);
    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , h = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , f = s === "Win32";
    let p = s === "MacIntel";
    const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && p && i.touch && m.indexOf(`${a}x${l}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/),
    d || (d = [0, 1, "13_0_0"]),
    p = !1),
    c && !f && (o.os = "android",
    o.android = !0),
    (d || h || u) && (o.os = "ios",
    o.ios = !0),
    o
}
function ba(t) {
    return t === void 0 && (t = {}),
    ji || (ji = Zu(t)),
    ji
}
let Bi;
function Ju() {
    const t = Q()
      , e = ba();
    let i = !1;
    function n() {
        const a = t.navigator.userAgent.toLowerCase();
        return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
    }
    if (n()) {
        const a = String(t.navigator.userAgent);
        if (a.includes("Version/")) {
            const [l,c] = a.split("Version/")[1].split(" ")[0].split(".").map(d => Number(d));
            i = l < 16 || l === 16 && c < 2
        }
    }
    const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      , r = n()
      , o = r || s && e.ios;
    return {
        isSafari: i || r,
        needPerspectiveFix: i,
        need3dFix: o,
        isWebView: s
    }
}
function Qu() {
    return Bi || (Bi = Ju()),
    Bi
}
function ef(t) {
    let {swiper: e, on: i, emit: n} = t;
    const s = Q();
    let r = null
      , o = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (n("beforeResize"),
        n("resize"))
    }
      , l = () => {
        !e || e.destroyed || !e.initialized || (r = new ResizeObserver(u => {
            o = s.requestAnimationFrame( () => {
                const {width: h, height: f} = e;
                let p = h
                  , m = f;
                u.forEach(g => {
                    let {contentBoxSize: v, contentRect: y, target: b} = g;
                    b && b !== e.el || (p = y ? y.width : (v[0] || v).inlineSize,
                    m = y ? y.height : (v[0] || v).blockSize)
                }
                ),
                (p !== h || m !== f) && a()
            }
            )
        }
        ),
        r.observe(e.el))
    }
      , c = () => {
        o && s.cancelAnimationFrame(o),
        r && r.unobserve && e.el && (r.unobserve(e.el),
        r = null)
    }
      , d = () => {
        !e || e.destroyed || !e.initialized || n("orientationchange")
    }
    ;
    i("init", () => {
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            l();
            return
        }
        s.addEventListener("resize", a),
        s.addEventListener("orientationchange", d)
    }
    ),
    i("destroy", () => {
        c(),
        s.removeEventListener("resize", a),
        s.removeEventListener("orientationchange", d)
    }
    )
}
function tf(t) {
    let {swiper: e, extendParams: i, on: n, emit: s} = t;
    const r = []
      , o = Q()
      , a = function(d, u) {
        u === void 0 && (u = {});
        const h = o.MutationObserver || o.WebkitMutationObserver
          , f = new h(p => {
            if (e.__preventObserver__)
                return;
            if (p.length === 1) {
                s("observerUpdate", p[0]);
                return
            }
            const m = function() {
                s("observerUpdate", p[0])
            };
            o.requestAnimationFrame ? o.requestAnimationFrame(m) : o.setTimeout(m, 0)
        }
        );
        f.observe(d, {
            attributes: typeof u.attributes > "u" ? !0 : u.attributes,
            childList: e.isElement || (typeof u.childList > "u" ? !0 : u).childList,
            characterData: typeof u.characterData > "u" ? !0 : u.characterData
        }),
        r.push(f)
    }
      , l = () => {
        if (e.params.observer) {
            if (e.params.observeParents) {
                const d = Yu(e.hostEl);
                for (let u = 0; u < d.length; u += 1)
                    a(d[u])
            }
            a(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            a(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , c = () => {
        r.forEach(d => {
            d.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    i({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    n("init", l),
    n("destroy", c)
}
var nf = {
    on(t, e, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        const s = i ? "unshift" : "push";
        return t.split(" ").forEach(r => {
            n.eventsListeners[r] || (n.eventsListeners[r] = []),
            n.eventsListeners[r][s](e)
        }
        ),
        n
    },
    once(t, e, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        function s() {
            n.off(t, s),
            s.__emitterProxy && delete s.__emitterProxy;
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                o[a] = arguments[a];
            e.apply(n, o)
        }
        return s.__emitterProxy = e,
        n.on(t, s, i)
    },
    onAny(t, e) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function")
            return i;
        const n = e ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t),
        i
    },
    offAny(t) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const i = e.eventsAnyListeners.indexOf(t);
        return i >= 0 && e.eventsAnyListeners.splice(i, 1),
        e
    },
    off(t, e) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach(n => {
            typeof e > "u" ? i.eventsListeners[n] = [] : i.eventsListeners[n] && i.eventsListeners[n].forEach( (s, r) => {
                (s === e || s.__emitterProxy && s.__emitterProxy === e) && i.eventsListeners[n].splice(r, 1)
            }
            )
        }
        ),
        i
    },
    emit() {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
            return t;
        let e, i, n;
        for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
            r[o] = arguments[o];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0],
        i = r.slice(1, r.length),
        n = t) : (e = r[0].events,
        i = r[0].data,
        n = r[0].context || t),
        i.unshift(n),
        (Array.isArray(e) ? e : e.split(" ")).forEach(l => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(c => {
                c.apply(n, [l, ...i])
            }
            ),
            t.eventsListeners && t.eventsListeners[l] && t.eventsListeners[l].forEach(c => {
                c.apply(n, i)
            }
            )
        }
        ),
        t
    }
};
function sf() {
    const t = this;
    let e, i;
    const n = t.el;
    typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = n.clientWidth,
    typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = n.clientHeight,
    !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(Te(n, "padding-left") || 0, 10) - parseInt(Te(n, "padding-right") || 0, 10),
    i = i - parseInt(Te(n, "padding-top") || 0, 10) - parseInt(Te(n, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(i) && (i = 0),
    Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i
    }))
}
function rf() {
    const t = this;
    function e(C, A) {
        return parseFloat(C.getPropertyValue(t.getDirectionLabel(A)) || 0)
    }
    const i = t.params
      , {wrapperEl: n, slidesEl: s, size: r, rtlTranslate: o, wrongRTL: a} = t
      , l = t.virtual && i.virtual.enabled
      , c = l ? t.virtual.slides.length : t.slides.length
      , d = re(s, `.${t.params.slideClass}, swiper-slide`)
      , u = l ? t.virtual.slides.length : d.length;
    let h = [];
    const f = []
      , p = [];
    let m = i.slidesOffsetBefore;
    typeof m == "function" && (m = i.slidesOffsetBefore.call(t));
    let g = i.slidesOffsetAfter;
    typeof g == "function" && (g = i.slidesOffsetAfter.call(t));
    const v = t.snapGrid.length
      , y = t.slidesGrid.length;
    let b = i.spaceBetween
      , x = -m
      , S = 0
      , T = 0;
    if (typeof r > "u")
        return;
    typeof b == "string" && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * r : typeof b == "string" && (b = parseFloat(b)),
    t.virtualSize = -b,
    d.forEach(C => {
        o ? C.style.marginLeft = "" : C.style.marginRight = "",
        C.style.marginBottom = "",
        C.style.marginTop = ""
    }
    ),
    i.centeredSlides && i.cssMode && (zt(n, "--swiper-centered-offset-before", ""),
    zt(n, "--swiper-centered-offset-after", ""));
    const O = i.grid && i.grid.rows > 1 && t.grid;
    O ? t.grid.initSlides(d) : t.grid && t.grid.unsetSlides();
    let M;
    const N = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(C => typeof i.breakpoints[C].slidesPerView < "u").length > 0;
    for (let C = 0; C < u; C += 1) {
        M = 0;
        let A;
        if (d[C] && (A = d[C]),
        O && t.grid.updateSlide(C, A, d),
        !(d[C] && Te(A, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                N && (d[C].style[t.getDirectionLabel("width")] = "");
                const I = getComputedStyle(A)
                  , P = A.style.transform
                  , k = A.style.webkitTransform;
                if (P && (A.style.transform = "none"),
                k && (A.style.webkitTransform = "none"),
                i.roundLengths)
                    M = t.isHorizontal() ? Ys(A, "width", !0) : Ys(A, "height", !0);
                else {
                    const V = e(I, "width")
                      , ue = e(I, "padding-left")
                      , Ci = e(I, "padding-right")
                      , Ot = e(I, "margin-left")
                      , at = e(I, "margin-right")
                      , vs = I.getPropertyValue("box-sizing");
                    if (vs && vs === "border-box")
                        M = V + Ot + at;
                    else {
                        const {clientWidth: Ba, offsetWidth: $a} = A;
                        M = V + ue + Ci + Ot + at + ($a - Ba)
                    }
                }
                P && (A.style.transform = P),
                k && (A.style.webkitTransform = k),
                i.roundLengths && (M = Math.floor(M))
            } else
                M = (r - (i.slidesPerView - 1) * b) / i.slidesPerView,
                i.roundLengths && (M = Math.floor(M)),
                d[C] && (d[C].style[t.getDirectionLabel("width")] = `${M}px`);
            d[C] && (d[C].swiperSlideSize = M),
            p.push(M),
            i.centeredSlides ? (x = x + M / 2 + S / 2 + b,
            S === 0 && C !== 0 && (x = x - r / 2 - b),
            C === 0 && (x = x - r / 2 - b),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            i.roundLengths && (x = Math.floor(x)),
            T % i.slidesPerGroup === 0 && h.push(x),
            f.push(x)) : (i.roundLengths && (x = Math.floor(x)),
            (T - Math.min(t.params.slidesPerGroupSkip, T)) % t.params.slidesPerGroup === 0 && h.push(x),
            f.push(x),
            x = x + M + b),
            t.virtualSize += M + b,
            S = M,
            T += 1
        }
    }
    if (t.virtualSize = Math.max(t.virtualSize, r) + g,
    o && a && (i.effect === "slide" || i.effect === "coverflow") && (n.style.width = `${t.virtualSize + b}px`),
    i.setWrapperSize && (n.style[t.getDirectionLabel("width")] = `${t.virtualSize + b}px`),
    O && t.grid.updateWrapperSize(M, h),
    !i.centeredSlides) {
        const C = [];
        for (let A = 0; A < h.length; A += 1) {
            let I = h[A];
            i.roundLengths && (I = Math.floor(I)),
            h[A] <= t.virtualSize - r && C.push(I)
        }
        h = C,
        Math.floor(t.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - r)
    }
    if (l && i.loop) {
        const C = p[0] + b;
        if (i.slidesPerGroup > 1) {
            const A = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup)
              , I = C * i.slidesPerGroup;
            for (let P = 0; P < A; P += 1)
                h.push(h[h.length - 1] + I)
        }
        for (let A = 0; A < t.virtual.slidesBefore + t.virtual.slidesAfter; A += 1)
            i.slidesPerGroup === 1 && h.push(h[h.length - 1] + C),
            f.push(f[f.length - 1] + C),
            t.virtualSize += C
    }
    if (h.length === 0 && (h = [0]),
    b !== 0) {
        const C = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
        d.filter( (A, I) => !i.cssMode || i.loop ? !0 : I !== d.length - 1).forEach(A => {
            A.style[C] = `${b}px`
        }
        )
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let C = 0;
        p.forEach(I => {
            C += I + (b || 0)
        }
        ),
        C -= b;
        const A = C > r ? C - r : 0;
        h = h.map(I => I <= 0 ? -m : I > A ? A + g : I)
    }
    if (i.centerInsufficientSlides) {
        let C = 0;
        p.forEach(I => {
            C += I + (b || 0)
        }
        ),
        C -= b;
        const A = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
        if (C + A < r) {
            const I = (r - C - A) / 2;
            h.forEach( (P, k) => {
                h[k] = P - I
            }
            ),
            f.forEach( (P, k) => {
                f[k] = P + I
            }
            )
        }
    }
    if (Object.assign(t, {
        slides: d,
        snapGrid: h,
        slidesGrid: f,
        slidesSizesGrid: p
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        zt(n, "--swiper-centered-offset-before", `${-h[0]}px`),
        zt(n, "--swiper-centered-offset-after", `${t.size / 2 - p[p.length - 1] / 2}px`);
        const C = -t.snapGrid[0]
          , A = -t.slidesGrid[0];
        t.snapGrid = t.snapGrid.map(I => I + C),
        t.slidesGrid = t.slidesGrid.map(I => I + A)
    }
    if (u !== c && t.emit("slidesLengthChange"),
    h.length !== v && (t.params.watchOverflow && t.checkOverflow(),
    t.emit("snapGridLengthChange")),
    f.length !== y && t.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    t.emit("slidesUpdated"),
    !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const C = `${i.containerModifierClass}backface-hidden`
          , A = t.el.classList.contains(C);
        u <= i.maxBackfaceHiddenSlides ? A || t.el.classList.add(C) : A && t.el.classList.remove(C)
    }
}
function of(t) {
    const e = this
      , i = []
      , n = e.virtual && e.params.virtual.enabled;
    let s = 0, r;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const o = a => n ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(a => {
                i.push(a)
            }
            );
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const a = e.activeIndex + r;
                if (a > e.slides.length && !n)
                    break;
                i.push(o(a))
            }
    else
        i.push(o(e.activeIndex));
    for (r = 0; r < i.length; r += 1)
        if (typeof i[r] < "u") {
            const a = i[r].offsetHeight;
            s = a > s ? a : s
        }
    (s || s === 0) && (e.wrapperEl.style.height = `${s}px`)
}
function af() {
    const t = this
      , e = t.slides
      , i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
    for (let n = 0; n < e.length; n += 1)
        e[n].swiperSlideOffset = (t.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - i - t.cssOverflowAdjustment()
}
const Ks = (t, e, i) => {
    e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
}
;
function lf(t) {
    t === void 0 && (t = this && this.translate || 0);
    const e = this
      , i = e.params
      , {slides: n, rtlTranslate: s, snapGrid: r} = e;
    if (n.length === 0)
        return;
    typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -t;
    s && (o = t),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let a = i.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < n.length; l += 1) {
        const c = n[l];
        let d = c.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (d -= n[0].swiperSlideOffset);
        const u = (o + (i.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + a)
          , h = (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + a)
          , f = -(o - d)
          , p = f + e.slidesSizesGrid[l]
          , m = f >= 0 && f <= e.size - e.slidesSizesGrid[l]
          , g = f >= 0 && f < e.size - 1 || p > 1 && p <= e.size || f <= 0 && p >= e.size;
        g && (e.visibleSlides.push(c),
        e.visibleSlidesIndexes.push(l)),
        Ks(c, g, i.slideVisibleClass),
        Ks(c, m, i.slideFullyVisibleClass),
        c.progress = s ? -u : u,
        c.originalProgress = s ? -h : h
    }
}
function cf(t) {
    const e = this;
    if (typeof t > "u") {
        const d = e.rtlTranslate ? -1 : 1;
        t = e && e.translate && e.translate * d || 0
    }
    const i = e.params
      , n = e.maxTranslate() - e.minTranslate();
    let {progress: s, isBeginning: r, isEnd: o, progressLoop: a} = e;
    const l = r
      , c = o;
    if (n === 0)
        s = 0,
        r = !0,
        o = !0;
    else {
        s = (t - e.minTranslate()) / n;
        const d = Math.abs(t - e.minTranslate()) < 1
          , u = Math.abs(t - e.maxTranslate()) < 1;
        r = d || s <= 0,
        o = u || s >= 1,
        d && (s = 0),
        u && (s = 1)
    }
    if (i.loop) {
        const d = e.getSlideIndexByData(0)
          , u = e.getSlideIndexByData(e.slides.length - 1)
          , h = e.slidesGrid[d]
          , f = e.slidesGrid[u]
          , p = e.slidesGrid[e.slidesGrid.length - 1]
          , m = Math.abs(t);
        m >= h ? a = (m - h) / p : a = (m + p - f) / p,
        a > 1 && (a -= 1)
    }
    Object.assign(e, {
        progress: s,
        progressLoop: a,
        isBeginning: r,
        isEnd: o
    }),
    (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t),
    r && !l && e.emit("reachBeginning toEdge"),
    o && !c && e.emit("reachEnd toEdge"),
    (l && !r || c && !o) && e.emit("fromEdge"),
    e.emit("progress", s)
}
const $i = (t, e, i) => {
    e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
}
;
function df() {
    const t = this
      , {slides: e, params: i, slidesEl: n, activeIndex: s} = t
      , r = t.virtual && i.virtual.enabled
      , o = t.grid && i.grid && i.grid.rows > 1
      , a = u => re(n, `.${i.slideClass}${u}, swiper-slide${u}`)[0];
    let l, c, d;
    if (r)
        if (i.loop) {
            let u = s - t.virtual.slidesBefore;
            u < 0 && (u = t.virtual.slides.length + u),
            u >= t.virtual.slides.length && (u -= t.virtual.slides.length),
            l = a(`[data-swiper-slide-index="${u}"]`)
        } else
            l = a(`[data-swiper-slide-index="${s}"]`);
    else
        o ? (l = e.filter(u => u.column === s)[0],
        d = e.filter(u => u.column === s + 1)[0],
        c = e.filter(u => u.column === s - 1)[0]) : l = e[s];
    l && (o || (d = Xu(l, `.${i.slideClass}, swiper-slide`)[0],
    i.loop && !d && (d = e[0]),
    c = Uu(l, `.${i.slideClass}, swiper-slide`)[0],
    i.loop && !c === 0 && (c = e[e.length - 1]))),
    e.forEach(u => {
        $i(u, u === l, i.slideActiveClass),
        $i(u, u === d, i.slideNextClass),
        $i(u, u === c, i.slidePrevClass)
    }
    ),
    t.emitSlidesClasses()
}
const Qt = (t, e) => {
    if (!t || t.destroyed || !t.params)
        return;
    const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`
      , n = e.closest(i());
    if (n) {
        let s = n.querySelector(`.${t.params.lazyPreloaderClass}`);
        !s && t.isElement && (n.shadowRoot ? s = n.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            n.shadowRoot && (s = n.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),
            s && s.remove())
        }
        )),
        s && s.remove()
    }
}
  , Hi = (t, e) => {
    if (!t.slides[e])
        return;
    const i = t.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading")
}
  , zn = t => {
    if (!t || t.destroyed || !t.params)
        return;
    let e = t.params.lazyPreloadPrevNext;
    const i = t.slides.length;
    if (!i || !e || e < 0)
        return;
    e = Math.min(e, i);
    const n = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView)
      , s = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
        const o = s
          , a = [o - e];
        a.push(...Array.from({
            length: e
        }).map( (l, c) => o + n + c)),
        t.slides.forEach( (l, c) => {
            a.includes(l.column) && Hi(t, c)
        }
        );
        return
    }
    const r = s + n - 1;
    if (t.params.rewind || t.params.loop)
        for (let o = s - e; o <= r + e; o += 1) {
            const a = (o % i + i) % i;
            (a < s || a > r) && Hi(t, a)
        }
    else
        for (let o = Math.max(s - e, 0); o <= Math.min(r + e, i - 1); o += 1)
            o !== s && (o > r || o < s) && Hi(t, o)
}
;
function uf(t) {
    const {slidesGrid: e, params: i} = t
      , n = t.rtlTranslate ? t.translate : -t.translate;
    let s;
    for (let r = 0; r < e.length; r += 1)
        typeof e[r + 1] < "u" ? n >= e[r] && n < e[r + 1] - (e[r + 1] - e[r]) / 2 ? s = r : n >= e[r] && n < e[r + 1] && (s = r + 1) : n >= e[r] && (s = r);
    return i.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0),
    s
}
function ff(t) {
    const e = this
      , i = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: n, params: s, activeIndex: r, realIndex: o, snapIndex: a} = e;
    let l = t, c;
    const d = f => {
        let p = f - e.virtual.slidesBefore;
        return p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        p
    }
    ;
    if (typeof l > "u" && (l = uf(e)),
    n.indexOf(i) >= 0)
        c = n.indexOf(i);
    else {
        const f = Math.min(s.slidesPerGroupSkip, l);
        c = f + Math.floor((l - f) / s.slidesPerGroup)
    }
    if (c >= n.length && (c = n.length - 1),
    l === r && !e.params.loop) {
        c !== a && (e.snapIndex = c,
        e.emit("snapIndexChange"));
        return
    }
    if (l === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = d(l);
        return
    }
    const u = e.grid && s.grid && s.grid.rows > 1;
    let h;
    if (e.virtual && s.virtual.enabled && s.loop)
        h = d(l);
    else if (u) {
        const f = e.slides.filter(m => m.column === l)[0];
        let p = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(p) && (p = Math.max(e.slides.indexOf(f), 0)),
        h = Math.floor(p / s.grid.rows)
    } else if (e.slides[l]) {
        const f = e.slides[l].getAttribute("data-swiper-slide-index");
        f ? h = parseInt(f, 10) : h = l
    } else
        h = l;
    Object.assign(e, {
        previousSnapIndex: a,
        snapIndex: c,
        previousRealIndex: o,
        realIndex: h,
        previousIndex: r,
        activeIndex: l
    }),
    e.initialized && zn(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function hf(t, e) {
    const i = this
      , n = i.params;
    let s = t.closest(`.${n.slideClass}, swiper-slide`);
    !s && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach(a => {
        !s && a.matches && a.matches(`.${n.slideClass}, swiper-slide`) && (s = a)
    }
    );
    let r = !1, o;
    if (s) {
        for (let a = 0; a < i.slides.length; a += 1)
            if (i.slides[a] === s) {
                r = !0,
                o = a;
                break
            }
    }
    if (s && r)
        i.clickedSlide = s,
        i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = o;
    else {
        i.clickedSlide = void 0,
        i.clickedIndex = void 0;
        return
    }
    n.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
var pf = {
    updateSize: sf,
    updateSlides: rf,
    updateAutoHeight: of,
    updateSlidesOffset: af,
    updateSlidesProgress: lf,
    updateProgress: cf,
    updateSlidesClasses: df,
    updateActiveIndex: ff,
    updateClickedSlide: hf
};
function mf(t) {
    t === void 0 && (t = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: i, rtlTranslate: n, translate: s, wrapperEl: r} = e;
    if (i.virtualTranslate)
        return n ? -s : s;
    if (i.cssMode)
        return s;
    let o = Vu(r, t);
    return o += e.cssOverflowAdjustment(),
    n && (o = -o),
    o || 0
}
function gf(t, e) {
    const i = this
      , {rtlTranslate: n, params: s, wrapperEl: r, progress: o} = i;
    let a = 0
      , l = 0;
    const c = 0;
    i.isHorizontal() ? a = n ? -t : t : l = t,
    s.roundLengths && (a = Math.floor(a),
    l = Math.floor(l)),
    i.previousTranslate = i.translate,
    i.translate = i.isHorizontal() ? a : l,
    s.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -a : -l : s.virtualTranslate || (i.isHorizontal() ? a -= i.cssOverflowAdjustment() : l -= i.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`);
    let d;
    const u = i.maxTranslate() - i.minTranslate();
    u === 0 ? d = 0 : d = (t - i.minTranslate()) / u,
    d !== o && i.updateProgress(t),
    i.emit("setTranslate", i.translate, e)
}
function vf() {
    return -this.snapGrid[0]
}
function bf() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function yf(t, e, i, n, s) {
    t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    n === void 0 && (n = !0);
    const r = this
      , {params: o, wrapperEl: a} = r;
    if (r.animating && o.preventInteractionOnTransition)
        return !1;
    const l = r.minTranslate()
      , c = r.maxTranslate();
    let d;
    if (n && t > l ? d = l : n && t < c ? d = c : d = t,
    r.updateProgress(d),
    o.cssMode) {
        const u = r.isHorizontal();
        if (e === 0)
            a[u ? "scrollLeft" : "scrollTop"] = -d;
        else {
            if (!r.support.smoothScroll)
                return ga({
                    swiper: r,
                    targetPosition: -d,
                    side: u ? "left" : "top"
                }),
                !0;
            a.scrollTo({
                [u ? "left" : "top"]: -d,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0),
    r.setTranslate(d),
    i && (r.emit("beforeTransitionStart", e, s),
    r.emit("transitionEnd"))) : (r.setTransition(e),
    r.setTranslate(d),
    i && (r.emit("beforeTransitionStart", e, s),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(h) {
        !r || r.destroyed || h.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        r.animating = !1,
        i && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var wf = {
    getTranslate: mf,
    setTranslate: gf,
    minTranslate: vf,
    maxTranslate: bf,
    translateTo: yf
};
function xf(t, e) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`,
    i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""),
    i.emit("setTransition", t, e)
}
function ya(t) {
    let {swiper: e, runCallbacks: i, direction: n, step: s} = t;
    const {activeIndex: r, previousIndex: o} = e;
    let a = n;
    if (a || (r > o ? a = "next" : r < o ? a = "prev" : a = "reset"),
    e.emit(`transition${s}`),
    i && r !== o) {
        if (a === "reset") {
            e.emit(`slideResetTransition${s}`);
            return
        }
        e.emit(`slideChangeTransition${s}`),
        a === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
    }
}
function Sf(t, e) {
    t === void 0 && (t = !0);
    const i = this
      , {params: n} = i;
    n.cssMode || (n.autoHeight && i.updateAutoHeight(),
    ya({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "Start"
    }))
}
function Ef(t, e) {
    t === void 0 && (t = !0);
    const i = this
      , {params: n} = i;
    i.animating = !1,
    !n.cssMode && (i.setTransition(0),
    ya({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "End"
    }))
}
var Tf = {
    setTransition: xf,
    transitionStart: Sf,
    transitionEnd: Ef
};
function Cf(t, e, i, n, s) {
    t === void 0 && (t = 0),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
    const r = this;
    let o = t;
    o < 0 && (o = 0);
    const {params: a, snapGrid: l, slidesGrid: c, previousIndex: d, activeIndex: u, rtlTranslate: h, wrapperEl: f, enabled: p} = r;
    if (!p && !n && !s || r.destroyed || r.animating && a.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = r.params.speed);
    const m = Math.min(r.params.slidesPerGroupSkip, o);
    let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const v = -l[g];
    if (a.normalizeSlideIndex)
        for (let S = 0; S < c.length; S += 1) {
            const T = -Math.floor(v * 100)
              , O = Math.floor(c[S] * 100)
              , M = Math.floor(c[S + 1] * 100);
            typeof c[S + 1] < "u" ? T >= O && T < M - (M - O) / 2 ? o = S : T >= O && T < M && (o = S + 1) : T >= O && (o = S)
        }
    if (r.initialized && o !== u && (!r.allowSlideNext && (h ? v > r.translate && v > r.minTranslate() : v < r.translate && v < r.minTranslate()) || !r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (u || 0) !== o))
        return !1;
    o !== (d || 0) && i && r.emit("beforeSlideChangeStart"),
    r.updateProgress(v);
    let y;
    o > u ? y = "next" : o < u ? y = "prev" : y = "reset";
    const b = r.virtual && r.params.virtual.enabled;
    if (!(b && s) && (h && -v === r.translate || !h && v === r.translate))
        return r.updateActiveIndex(o),
        a.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        a.effect !== "slide" && r.setTranslate(v),
        y !== "reset" && (r.transitionStart(i, y),
        r.transitionEnd(i, y)),
        !1;
    if (a.cssMode) {
        const S = r.isHorizontal()
          , T = h ? v : -v;
        if (e === 0)
            b && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            b && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                f[S ? "scrollLeft" : "scrollTop"] = T
            }
            )) : f[S ? "scrollLeft" : "scrollTop"] = T,
            b && requestAnimationFrame( () => {
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            );
        else {
            if (!r.support.smoothScroll)
                return ga({
                    swiper: r,
                    targetPosition: T,
                    side: S ? "left" : "top"
                }),
                !0;
            f.scrollTo({
                [S ? "left" : "top"]: T,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e),
    r.setTranslate(v),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, n),
    r.transitionStart(i, y),
    e === 0 ? r.transitionEnd(i, y) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(T) {
        !r || r.destroyed || T.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(i, y))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function Pf(t, e, i, n) {
    t === void 0 && (t = 0),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
    const s = this;
    if (s.destroyed)
        return;
    typeof e > "u" && (e = s.params.speed);
    const r = s.grid && s.params.grid && s.params.grid.rows > 1;
    let o = t;
    if (s.params.loop)
        if (s.virtual && s.params.virtual.enabled)
            o = o + s.virtual.slidesBefore;
        else {
            let a;
            if (r) {
                const h = o * s.params.grid.rows;
                a = s.slides.filter(f => f.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else
                a = s.getSlideIndexByData(o);
            const l = r ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length
              , {centeredSlides: c} = s.params;
            let d = s.params.slidesPerView;
            d === "auto" ? d = s.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(s.params.slidesPerView, 10)),
            c && d % 2 === 0 && (d = d + 1));
            let u = l - a < d;
            if (c && (u = u || a < Math.ceil(d / 2)),
            n && c && s.params.slidesPerView !== "auto" && !r && (u = !1),
            u) {
                const h = c ? a < s.activeIndex ? "prev" : "next" : a - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
                s.loopFix({
                    direction: h,
                    slideTo: !0,
                    activeSlideIndex: h === "next" ? a + 1 : a - l + 1,
                    slideRealIndex: h === "next" ? s.realIndex : void 0
                })
            }
            if (r) {
                const h = o * s.params.grid.rows;
                o = s.slides.filter(f => f.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else
                o = s.getSlideIndexByData(o)
        }
    return requestAnimationFrame( () => {
        s.slideTo(o, e, i, n)
    }
    ),
    s
}
function _f(t, e, i) {
    e === void 0 && (e = !0);
    const n = this
      , {enabled: s, params: r, animating: o} = n;
    if (!s || n.destroyed)
        return n;
    typeof t > "u" && (t = n.params.speed);
    let a = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
    const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a
      , c = n.virtual && r.virtual.enabled;
    if (r.loop) {
        if (o && !c && r.loopPreventsSliding)
            return !1;
        if (n.loopFix({
            direction: "next"
        }),
        n._clientLeft = n.wrapperEl.clientLeft,
        n.activeIndex === n.slides.length - 1 && r.cssMode)
            return requestAnimationFrame( () => {
                n.slideTo(n.activeIndex + l, t, e, i)
            }
            ),
            !0
    }
    return r.rewind && n.isEnd ? n.slideTo(0, t, e, i) : n.slideTo(n.activeIndex + l, t, e, i)
}
function Mf(t, e, i) {
    e === void 0 && (e = !0);
    const n = this
      , {params: s, snapGrid: r, slidesGrid: o, rtlTranslate: a, enabled: l, animating: c} = n;
    if (!l || n.destroyed)
        return n;
    typeof t > "u" && (t = n.params.speed);
    const d = n.virtual && s.virtual.enabled;
    if (s.loop) {
        if (c && !d && s.loopPreventsSliding)
            return !1;
        n.loopFix({
            direction: "prev"
        }),
        n._clientLeft = n.wrapperEl.clientLeft
    }
    const u = a ? n.translate : -n.translate;
    function h(v) {
        return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v)
    }
    const f = h(u)
      , p = r.map(v => h(v));
    let m = r[p.indexOf(f) - 1];
    if (typeof m > "u" && s.cssMode) {
        let v;
        r.forEach( (y, b) => {
            f >= y && (v = b)
        }
        ),
        typeof v < "u" && (m = r[v > 0 ? v - 1 : v])
    }
    let g = 0;
    if (typeof m < "u" && (g = o.indexOf(m),
    g < 0 && (g = n.activeIndex - 1),
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (g = g - n.slidesPerViewDynamic("previous", !0) + 1,
    g = Math.max(g, 0))),
    s.rewind && n.isBeginning) {
        const v = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
        return n.slideTo(v, t, e, i)
    } else if (s.loop && n.activeIndex === 0 && s.cssMode)
        return requestAnimationFrame( () => {
            n.slideTo(g, t, e, i)
        }
        ),
        !0;
    return n.slideTo(g, t, e, i)
}
function Of(t, e, i) {
    e === void 0 && (e = !0);
    const n = this;
    if (!n.destroyed)
        return typeof t > "u" && (t = n.params.speed),
        n.slideTo(n.activeIndex, t, e, i)
}
function Af(t, e, i, n) {
    e === void 0 && (e = !0),
    n === void 0 && (n = .5);
    const s = this;
    if (s.destroyed)
        return;
    typeof t > "u" && (t = s.params.speed);
    let r = s.activeIndex;
    const o = Math.min(s.params.slidesPerGroupSkip, r)
      , a = o + Math.floor((r - o) / s.params.slidesPerGroup)
      , l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[a]) {
        const c = s.snapGrid[a]
          , d = s.snapGrid[a + 1];
        l - c > (d - c) * n && (r += s.params.slidesPerGroup)
    } else {
        const c = s.snapGrid[a - 1]
          , d = s.snapGrid[a];
        l - c <= (d - c) * n && (r -= s.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, s.slidesGrid.length - 1),
    s.slideTo(r, t, e, i)
}
function Lf() {
    const t = this;
    if (t.destroyed)
        return;
    const {params: e, slidesEl: i} = t
      , n = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let s = t.clickedIndex, r;
    const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (t.animating)
            return;
        r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(),
        s = t.getSlideIndex(re(i, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        kn( () => {
            t.slideTo(s)
        }
        )) : t.slideTo(s) : s > t.slides.length - n ? (t.loopFix(),
        s = t.getSlideIndex(re(i, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        kn( () => {
            t.slideTo(s)
        }
        )) : t.slideTo(s)
    } else
        t.slideTo(s)
}
var If = {
    slideTo: Cf,
    slideToLoop: Pf,
    slideNext: _f,
    slidePrev: Mf,
    slideReset: Of,
    slideToClosest: Af,
    slideToClickedSlide: Lf
};
function Rf(t) {
    const e = this
      , {params: i, slidesEl: n} = e;
    if (!i.loop || e.virtual && e.params.virtual.enabled)
        return;
    const s = () => {
        re(n, `.${i.slideClass}, swiper-slide`).forEach( (u, h) => {
            u.setAttribute("data-swiper-slide-index", h)
        }
        )
    }
      , r = e.grid && i.grid && i.grid.rows > 1
      , o = i.slidesPerGroup * (r ? i.grid.rows : 1)
      , a = e.slides.length % o !== 0
      , l = r && e.slides.length % i.grid.rows !== 0
      , c = d => {
        for (let u = 0; u < d; u += 1) {
            const h = e.isElement ? li("swiper-slide", [i.slideBlankClass]) : li("div", [i.slideClass, i.slideBlankClass]);
            e.slidesEl.append(h)
        }
    }
    ;
    if (a) {
        if (i.loopAddBlankSlides) {
            const d = o - e.slides.length % o;
            c(d),
            e.recalcSlides(),
            e.updateSlides()
        } else
            ai("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else if (l) {
        if (i.loopAddBlankSlides) {
            const d = i.grid.rows - e.slides.length % i.grid.rows;
            c(d),
            e.recalcSlides(),
            e.updateSlides()
        } else
            ai("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else
        s();
    e.loopFix({
        slideRealIndex: t,
        direction: i.centeredSlides ? void 0 : "next"
    })
}
function kf(t) {
    let {slideRealIndex: e, slideTo: i=!0, direction: n, setTranslate: s, activeSlideIndex: r, byController: o, byMousewheel: a} = t === void 0 ? {} : t;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: c, allowSlidePrev: d, allowSlideNext: u, slidesEl: h, params: f} = l
      , {centeredSlides: p} = f;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && f.virtual.enabled) {
        i && (!f.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = d,
        l.allowSlideNext = u,
        l.emit("loopFix");
        return
    }
    let m = f.slidesPerView;
    m === "auto" ? m = l.slidesPerViewDynamic() : (m = Math.ceil(parseFloat(f.slidesPerView, 10)),
    p && m % 2 === 0 && (m = m + 1));
    const g = f.slidesPerGroupAuto ? m : f.slidesPerGroup;
    let v = g;
    v % g !== 0 && (v += g - v % g),
    v += f.loopAdditionalSlides,
    l.loopedSlides = v;
    const y = l.grid && f.grid && f.grid.rows > 1;
    c.length < m + v ? ai("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : y && f.grid.fill === "row" && ai("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const b = []
      , x = [];
    let S = l.activeIndex;
    typeof r > "u" ? r = l.getSlideIndex(c.filter(P => P.classList.contains(f.slideActiveClass))[0]) : S = r;
    const T = n === "next" || !n
      , O = n === "prev" || !n;
    let M = 0
      , N = 0;
    const C = y ? Math.ceil(c.length / f.grid.rows) : c.length
      , I = (y ? c[r].column : r) + (p && typeof s > "u" ? -m / 2 + .5 : 0);
    if (I < v) {
        M = Math.max(v - I, g);
        for (let P = 0; P < v - I; P += 1) {
            const k = P - Math.floor(P / C) * C;
            if (y) {
                const V = C - k - 1;
                for (let ue = c.length - 1; ue >= 0; ue -= 1)
                    c[ue].column === V && b.push(ue)
            } else
                b.push(C - k - 1)
        }
    } else if (I + m > C - v) {
        N = Math.max(I - (C - v * 2), g);
        for (let P = 0; P < N; P += 1) {
            const k = P - Math.floor(P / C) * C;
            y ? c.forEach( (V, ue) => {
                V.column === k && x.push(ue)
            }
            ) : x.push(k)
        }
    }
    if (l.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        l.__preventObserver__ = !1
    }
    ),
    O && b.forEach(P => {
        c[P].swiperLoopMoveDOM = !0,
        h.prepend(c[P]),
        c[P].swiperLoopMoveDOM = !1
    }
    ),
    T && x.forEach(P => {
        c[P].swiperLoopMoveDOM = !0,
        h.append(c[P]),
        c[P].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    f.slidesPerView === "auto" ? l.updateSlides() : y && (b.length > 0 && O || x.length > 0 && T) && l.slides.forEach( (P, k) => {
        l.grid.updateSlide(k, P, l.slides)
    }
    ),
    f.watchSlidesProgress && l.updateSlidesOffset(),
    i) {
        if (b.length > 0 && O) {
            if (typeof e > "u") {
                const P = l.slidesGrid[S]
                  , V = l.slidesGrid[S + M] - P;
                a ? l.setTranslate(l.translate - V) : (l.slideTo(S + Math.ceil(M), 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - V,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - V))
            } else if (s) {
                const P = y ? b.length / f.grid.rows : b.length;
                l.slideTo(l.activeIndex + P, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate
            }
        } else if (x.length > 0 && T)
            if (typeof e > "u") {
                const P = l.slidesGrid[S]
                  , V = l.slidesGrid[S - N] - P;
                a ? l.setTranslate(l.translate - V) : (l.slideTo(S - N, 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - V,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - V))
            } else {
                const P = y ? x.length / f.grid.rows : x.length;
                l.slideTo(l.activeIndex - P, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = d,
    l.allowSlideNext = u,
    l.controller && l.controller.control && !o) {
        const P = {
            slideRealIndex: e,
            direction: n,
            setTranslate: s,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(k => {
            !k.destroyed && k.params.loop && k.loopFix({
                ...P,
                slideTo: k.params.slidesPerView === f.slidesPerView ? i : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...P,
            slideTo: l.controller.control.params.slidesPerView === f.slidesPerView ? i : !1
        })
    }
    l.emit("loopFix")
}
function zf() {
    const t = this
      , {params: e, slidesEl: i} = t;
    if (!e.loop || t.virtual && t.params.virtual.enabled)
        return;
    t.recalcSlides();
    const n = [];
    t.slides.forEach(s => {
        const r = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
        n[r] = s
    }
    ),
    t.slides.forEach(s => {
        s.removeAttribute("data-swiper-slide-index")
    }
    ),
    n.forEach(s => {
        i.append(s)
    }
    ),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0)
}
var Df = {
    loopCreate: Rf,
    loopFix: kf,
    loopDestroy: zf
};
function Ff(t) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    i.style.cursor = "move",
    i.style.cursor = t ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    )
}
function Nf() {
    const t = this;
    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0),
    t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    t.isElement && requestAnimationFrame( () => {
        t.__preventObserver__ = !1
    }
    ))
}
var jf = {
    setGrabCursor: Ff,
    unsetGrabCursor: Nf
};
function Bf(t, e) {
    e === void 0 && (e = this);
    function i(n) {
        if (!n || n === Ge() || n === Q())
            return null;
        n.assignedSlot && (n = n.assignedSlot);
        const s = n.closest(t);
        return !s && !n.getRootNode ? null : s || i(n.getRootNode().host)
    }
    return i(e)
}
function Zs(t, e, i) {
    const n = Q()
      , {params: s} = t
      , r = s.edgeSwipeDetection
      , o = s.edgeSwipeThreshold;
    return r && (i <= o || i >= n.innerWidth - o) ? r === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function $f(t) {
    const e = this
      , i = Ge();
    let n = t;
    n.originalEvent && (n = n.originalEvent);
    const s = e.touchEventsData;
    if (n.type === "pointerdown") {
        if (s.pointerId !== null && s.pointerId !== n.pointerId)
            return;
        s.pointerId = n.pointerId
    } else
        n.type === "touchstart" && n.targetTouches.length === 1 && (s.touchId = n.targetTouches[0].identifier);
    if (n.type === "touchstart") {
        Zs(e, n, n.targetTouches[0].pageX);
        return
    }
    const {params: r, touches: o, enabled: a} = e;
    if (!a || !r.simulateTouch && n.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
        return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let l = n.target;
    if (r.touchEventsTarget === "wrapper" && !Gu(l, e.wrapperEl) || "which"in n && n.which === 3 || "button"in n && n.button > 0 || s.isTouched && s.isMoved)
        return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== ""
      , d = n.composedPath ? n.composedPath() : n.path;
    c && n.target && n.target.shadowRoot && d && (l = d[0]);
    const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , h = !!(n.target && n.target.shadowRoot);
    if (r.noSwiping && (h ? Bf(u, l) : l.closest(u))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !l.closest(r.swipeHandler))
        return;
    o.currentX = n.pageX,
    o.currentY = n.pageY;
    const f = o.currentX
      , p = o.currentY;
    if (!Zs(e, n, f))
        return;
    Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    o.startX = f,
    o.startY = p,
    s.touchStartTime = Be(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    r.threshold > 0 && (s.allowThresholdMove = !1);
    let m = !0;
    l.matches(s.focusableElements) && (m = !1,
    l.nodeName === "SELECT" && (s.isTouched = !1)),
    i.activeElement && i.activeElement.matches(s.focusableElements) && i.activeElement !== l && (n.pointerType === "mouse" || n.pointerType !== "mouse" && !l.matches(s.focusableElements)) && i.activeElement.blur();
    const g = m && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || g) && !l.isContentEditable && n.preventDefault(),
    r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", n)
}
function Hf(t) {
    const e = Ge()
      , i = this
      , n = i.touchEventsData
      , {params: s, touches: r, rtlTranslate: o, enabled: a} = i;
    if (!a || !s.simulateTouch && t.pointerType === "mouse")
        return;
    let l = t;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (n.touchId !== null || l.pointerId !== n.pointerId))
        return;
    let c;
    if (l.type === "touchmove") {
        if (c = [...l.changedTouches].filter(T => T.identifier === n.touchId)[0],
        !c || c.identifier !== n.touchId)
            return
    } else
        c = l;
    if (!n.isTouched) {
        n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", l);
        return
    }
    const d = c.pageX
      , u = c.pageY;
    if (l.preventedByNestedSwiper) {
        r.startX = d,
        r.startY = u;
        return
    }
    if (!i.allowTouchMove) {
        l.target.matches(n.focusableElements) || (i.allowClick = !1),
        n.isTouched && (Object.assign(r, {
            startX: d,
            startY: u,
            currentX: d,
            currentY: u
        }),
        n.touchStartTime = Be());
        return
    }
    if (s.touchReleaseOnEdges && !s.loop) {
        if (i.isVertical()) {
            if (u < r.startY && i.translate <= i.maxTranslate() || u > r.startY && i.translate >= i.minTranslate()) {
                n.isTouched = !1,
                n.isMoved = !1;
                return
            }
        } else if (d < r.startX && i.translate <= i.maxTranslate() || d > r.startX && i.translate >= i.minTranslate())
            return
    }
    if (e.activeElement && e.activeElement.matches(n.focusableElements) && e.activeElement !== l.target && l.pointerType !== "mouse" && e.activeElement.blur(),
    e.activeElement && l.target === e.activeElement && l.target.matches(n.focusableElements)) {
        n.isMoved = !0,
        i.allowClick = !1;
        return
    }
    n.allowTouchCallbacks && i.emit("touchMove", l),
    r.previousX = r.currentX,
    r.previousY = r.currentY,
    r.currentX = d,
    r.currentY = u;
    const h = r.currentX - r.startX
      , f = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold)
        return;
    if (typeof n.isScrolling > "u") {
        let T;
        i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : h * h + f * f >= 25 && (T = Math.atan2(Math.abs(f), Math.abs(h)) * 180 / Math.PI,
        n.isScrolling = i.isHorizontal() ? T > s.touchAngle : 90 - T > s.touchAngle)
    }
    if (n.isScrolling && i.emit("touchMoveOpposite", l),
    typeof n.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (n.startMoving = !0),
    n.isScrolling || l.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
        n.isTouched = !1;
        return
    }
    if (!n.startMoving)
        return;
    i.allowClick = !1,
    !s.cssMode && l.cancelable && l.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let p = i.isHorizontal() ? h : f
      , m = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    s.oneWayMovement && (p = Math.abs(p) * (o ? 1 : -1),
    m = Math.abs(m) * (o ? 1 : -1)),
    r.diff = p,
    p *= s.touchRatio,
    o && (p = -p,
    m = -m);
    const g = i.touchesDirection;
    i.swipeDirection = p > 0 ? "prev" : "next",
    i.touchesDirection = m > 0 ? "prev" : "next";
    const v = i.params.loop && !s.cssMode
      , y = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
    if (!n.isMoved) {
        if (v && y && i.loopFix({
            direction: i.swipeDirection
        }),
        n.startTranslate = i.getTranslate(),
        i.setTransition(0),
        i.animating) {
            const T = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            i.wrapperEl.dispatchEvent(T)
        }
        n.allowMomentumBounce = !1,
        s.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
        i.emit("sliderFirstMove", l)
    }
    let b;
    if (new Date().getTime(),
    n.isMoved && n.allowThresholdMove && g !== i.touchesDirection && v && y && Math.abs(p) >= 1) {
        Object.assign(r, {
            startX: d,
            startY: u,
            currentX: d,
            currentY: u,
            startTranslate: n.currentTranslate
        }),
        n.loopSwapReset = !0,
        n.startTranslate = n.currentTranslate;
        return
    }
    i.emit("sliderMove", l),
    n.isMoved = !0,
    n.currentTranslate = p + n.startTranslate;
    let x = !0
      , S = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (S = 0),
    p > 0 ? (v && y && !b && n.allowThresholdMove && n.currentTranslate > (s.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - (s.slidesPerView !== "auto" && i.slides.length - s.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    n.currentTranslate > i.minTranslate() && (x = !1,
    s.resistance && (n.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + n.startTranslate + p) ** S))) : p < 0 && (v && y && !b && n.allowThresholdMove && n.currentTranslate < (s.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + (s.slidesPerView !== "auto" && i.slides.length - s.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: i.slides.length - (s.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }),
    n.currentTranslate < i.maxTranslate() && (x = !1,
    s.resistance && (n.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - n.startTranslate - p) ** S))),
    x && (l.preventedByNestedSwiper = !0),
    !i.allowSlideNext && i.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
    !i.allowSlidePrev && i.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
    !i.allowSlidePrev && !i.allowSlideNext && (n.currentTranslate = n.startTranslate),
    s.threshold > 0)
        if (Math.abs(p) > s.threshold || n.allowThresholdMove) {
            if (!n.allowThresholdMove) {
                n.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                n.currentTranslate = n.startTranslate,
                r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            n.currentTranslate = n.startTranslate;
            return
        }
    !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && i.freeMode || s.watchSlidesProgress) && (i.updateActiveIndex(),
    i.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(n.currentTranslate),
    i.setTranslate(n.currentTranslate))
}
function qf(t) {
    const e = this
      , i = e.touchEventsData;
    let n = t;
    n.originalEvent && (n = n.originalEvent);
    let s;
    if (n.type === "touchend" || n.type === "touchcancel") {
        if (s = [...n.changedTouches].filter(S => S.identifier === i.touchId)[0],
        !s || s.identifier !== i.touchId)
            return
    } else {
        if (i.touchId !== null || n.pointerId !== i.pointerId)
            return;
        s = n
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    i.pointerId = null,
    i.touchId = null;
    const {params: o, touches: a, rtlTranslate: l, slidesGrid: c, enabled: d} = e;
    if (!d || !o.simulateTouch && n.pointerType === "mouse")
        return;
    if (i.allowTouchCallbacks && e.emit("touchEnd", n),
    i.allowTouchCallbacks = !1,
    !i.isTouched) {
        i.isMoved && o.grabCursor && e.setGrabCursor(!1),
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    o.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = Be()
      , h = u - i.touchStartTime;
    if (e.allowClick) {
        const S = n.path || n.composedPath && n.composedPath();
        e.updateClickedSlide(S && S[0] || n.target, S),
        e.emit("tap click", n),
        h < 300 && u - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", n)
    }
    if (i.lastClickTime = Be(),
    kn( () => {
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !i.isTouched || !i.isMoved || !e.swipeDirection || a.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
        i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    i.isTouched = !1,
    i.isMoved = !1,
    i.startMoving = !1;
    let f;
    if (o.followFinger ? f = l ? e.translate : -e.translate : f = -i.currentTranslate,
    o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: f
        });
        return
    }
    const p = f >= -e.maxTranslate() && !e.params.loop;
    let m = 0
      , g = e.slidesSizesGrid[0];
    for (let S = 0; S < c.length; S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const T = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof c[S + T] < "u" ? (p || f >= c[S] && f < c[S + T]) && (m = S,
        g = c[S + T] - c[S]) : (p || f >= c[S]) && (m = S,
        g = c[c.length - 1] - c[c.length - 2])
    }
    let v = null
      , y = null;
    o.rewind && (e.isBeginning ? y = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
    const b = (f - c[m]) / g
      , x = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (h > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (b >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? v : m + x) : e.slideTo(m)),
        e.swipeDirection === "prev" && (b > 1 - o.longSwipesRatio ? e.slideTo(m + x) : y !== null && b < 0 && Math.abs(b) > o.longSwipesRatio ? e.slideTo(y) : e.slideTo(m))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (n.target === e.navigation.nextEl || n.target === e.navigation.prevEl) ? n.target === e.navigation.nextEl ? e.slideTo(m + x) : e.slideTo(m) : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : m + x),
        e.swipeDirection === "prev" && e.slideTo(y !== null ? y : m))
    }
}
function Js() {
    const t = this
      , {params: e, el: i} = t;
    if (i && i.offsetWidth === 0)
        return;
    e.breakpoints && t.setBreakpoint();
    const {allowSlideNext: n, allowSlidePrev: s, snapGrid: r} = t
      , o = t.virtual && t.params.virtual.enabled;
    t.allowSlideNext = !0,
    t.allowSlidePrev = !0,
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !a ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !o ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout),
    t.autoplay.resizeTimeout = setTimeout( () => {
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
    }
    , 500)),
    t.allowSlidePrev = s,
    t.allowSlideNext = n,
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
}
function Vf(t) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (t.stopPropagation(),
    t.stopImmediatePropagation())))
}
function Wf() {
    const t = this
      , {wrapperEl: e, rtlTranslate: i, enabled: n} = t;
    if (!n)
        return;
    t.previousTranslate = t.translate,
    t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop,
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
    let s;
    const r = t.maxTranslate() - t.minTranslate();
    r === 0 ? s = 0 : s = (t.translate - t.minTranslate()) / r,
    s !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1)
}
function Gf(t) {
    const e = this;
    Qt(e, t.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Uf() {
    const t = this;
    t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0,
    t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
}
const wa = (t, e) => {
    const i = Ge()
      , {params: n, el: s, wrapperEl: r, device: o} = t
      , a = !!n.nested
      , l = e === "on" ? "addEventListener" : "removeEventListener"
      , c = e;
    !s || typeof s == "string" || (i[l]("touchstart", t.onDocumentTouchStart, {
        passive: !1,
        capture: a
    }),
    s[l]("touchstart", t.onTouchStart, {
        passive: !1
    }),
    s[l]("pointerdown", t.onTouchStart, {
        passive: !1
    }),
    i[l]("touchmove", t.onTouchMove, {
        passive: !1,
        capture: a
    }),
    i[l]("pointermove", t.onTouchMove, {
        passive: !1,
        capture: a
    }),
    i[l]("touchend", t.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointerup", t.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointercancel", t.onTouchEnd, {
        passive: !0
    }),
    i[l]("touchcancel", t.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointerout", t.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointerleave", t.onTouchEnd, {
        passive: !0
    }),
    i[l]("contextmenu", t.onTouchEnd, {
        passive: !0
    }),
    (n.preventClicks || n.preventClicksPropagation) && s[l]("click", t.onClick, !0),
    n.cssMode && r[l]("scroll", t.onScroll),
    n.updateOnWindowResize ? t[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Js, !0) : t[c]("observerUpdate", Js, !0),
    s[l]("load", t.onLoad, {
        capture: !0
    }))
}
;
function Xf() {
    const t = this
      , {params: e} = t;
    t.onTouchStart = $f.bind(t),
    t.onTouchMove = Hf.bind(t),
    t.onTouchEnd = qf.bind(t),
    t.onDocumentTouchStart = Uf.bind(t),
    e.cssMode && (t.onScroll = Wf.bind(t)),
    t.onClick = Vf.bind(t),
    t.onLoad = Gf.bind(t),
    wa(t, "on")
}
function Yf() {
    wa(this, "off")
}
var Kf = {
    attachEvents: Xf,
    detachEvents: Yf
};
const Qs = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Zf() {
    const t = this
      , {realIndex: e, initialized: i, params: n, el: s} = t
      , r = n.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
    if (!o || t.currentBreakpoint === o)
        return;
    const l = (o in r ? r[o] : void 0) || t.originalParams
      , c = Qs(t, n)
      , d = Qs(t, l)
      , u = t.params.grabCursor
      , h = l.grabCursor
      , f = n.enabled;
    c && !d ? (s.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`),
    t.emitContainerClasses()) : !c && d && (s.classList.add(`${n.containerModifierClass}grid`),
    (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && n.grid.fill === "column") && s.classList.add(`${n.containerModifierClass}grid-column`),
    t.emitContainerClasses()),
    u && !h ? t.unsetGrabCursor() : !u && h && t.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(b => {
        if (typeof l[b] > "u")
            return;
        const x = n[b] && n[b].enabled
          , S = l[b] && l[b].enabled;
        x && !S && t[b].disable(),
        !x && S && t[b].enable()
    }
    );
    const p = l.direction && l.direction !== n.direction
      , m = n.loop && (l.slidesPerView !== n.slidesPerView || p)
      , g = n.loop;
    p && i && t.changeDirection(),
    Z(t.params, l);
    const v = t.params.enabled
      , y = t.params.loop;
    Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev
    }),
    f && !v ? t.disable() : !f && v && t.enable(),
    t.currentBreakpoint = o,
    t.emit("_beforeBreakpoint", l),
    i && (m ? (t.loopDestroy(),
    t.loopCreate(e),
    t.updateSlides()) : !g && y ? (t.loopCreate(e),
    t.updateSlides()) : g && !y && t.loopDestroy()),
    t.emit("breakpoint", l)
}
function Jf(t, e, i) {
    if (e === void 0 && (e = "window"),
    !t || e === "container" && !i)
        return;
    let n = !1;
    const s = Q()
      , r = e === "window" ? s.innerHeight : i.clientHeight
      , o = Object.keys(t).map(a => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
            const l = parseFloat(a.substr(1));
            return {
                value: r * l,
                point: a
            }
        }
        return {
            value: a,
            point: a
        }
    }
    );
    o.sort( (a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
        const {point: l, value: c} = o[a];
        e === "window" ? s.matchMedia(`(min-width: ${c}px)`).matches && (n = l) : c <= i.clientWidth && (n = l)
    }
    return n || "max"
}
var Qf = {
    setBreakpoint: Zf,
    getBreakpoint: Jf
};
function eh(t, e) {
    const i = [];
    return t.forEach(n => {
        typeof n == "object" ? Object.keys(n).forEach(s => {
            n[s] && i.push(e + s)
        }
        ) : typeof n == "string" && i.push(e + n)
    }
    ),
    i
}
function th() {
    const t = this
      , {classNames: e, params: i, rtl: n, el: s, device: r} = t
      , o = eh(["initialized", i.direction, {
        "free-mode": t.params.freeMode && i.freeMode.enabled
    }, {
        autoheight: i.autoHeight
    }, {
        rtl: n
    }, {
        grid: i.grid && i.grid.rows > 1
    }, {
        "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": i.cssMode
    }, {
        centered: i.cssMode && i.centeredSlides
    }, {
        "watch-progress": i.watchSlidesProgress
    }], i.containerModifierClass);
    e.push(...o),
    s.classList.add(...e),
    t.emitContainerClasses()
}
function ih() {
    const t = this
      , {el: e, classNames: i} = t;
    !e || typeof e == "string" || (e.classList.remove(...i),
    t.emitContainerClasses())
}
var nh = {
    addClasses: th,
    removeClasses: ih
};
function sh() {
    const t = this
      , {isLocked: e, params: i} = t
      , {slidesOffsetBefore: n} = i;
    if (n) {
        const s = t.slides.length - 1
          , r = t.slidesGrid[s] + t.slidesSizesGrid[s] + n * 2;
        t.isLocked = t.size > r
    } else
        t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
var rh = {
    checkOverflow: sh
}
  , er = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function oh(t, e) {
    return function(n) {
        n === void 0 && (n = {});
        const s = Object.keys(n)[0]
          , r = n[s];
        if (typeof r != "object" || r === null) {
            Z(e, n);
            return
        }
        if (t[s] === !0 && (t[s] = {
            enabled: !0
        }),
        s === "navigation" && t[s] && t[s].enabled && !t[s].prevEl && !t[s].nextEl && (t[s].auto = !0),
        ["pagination", "scrollbar"].indexOf(s) >= 0 && t[s] && t[s].enabled && !t[s].el && (t[s].auto = !0),
        !(s in t && "enabled"in r)) {
            Z(e, n);
            return
        }
        typeof t[s] == "object" && !("enabled"in t[s]) && (t[s].enabled = !0),
        t[s] || (t[s] = {
            enabled: !1
        }),
        Z(e, n)
    }
}
const qi = {
    eventsEmitter: nf,
    update: pf,
    translate: wf,
    transition: Tf,
    slide: If,
    loop: Df,
    grabCursor: jf,
    events: Kf,
    breakpoints: Qf,
    checkOverflow: rh,
    classes: nh
}
  , Vi = {};
class K {
    constructor() {
        let e, i;
        for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
            s[r] = arguments[r];
        s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? i = s[0] : [e,i] = s,
        i || (i = {}),
        i = Z({}, i),
        e && !i.el && (i.el = e);
        const o = Ge();
        if (i.el && typeof i.el == "string" && o.querySelectorAll(i.el).length > 1) {
            const d = [];
            return o.querySelectorAll(i.el).forEach(u => {
                const h = Z({}, i, {
                    el: u
                });
                d.push(new K(h))
            }
            ),
            d
        }
        const a = this;
        a.__swiper__ = !0,
        a.support = va(),
        a.device = ba({
            userAgent: i.userAgent
        }),
        a.browser = Qu(),
        a.eventsListeners = {},
        a.eventsAnyListeners = [],
        a.modules = [...a.__modules__],
        i.modules && Array.isArray(i.modules) && a.modules.push(...i.modules);
        const l = {};
        a.modules.forEach(d => {
            d({
                params: i,
                swiper: a,
                extendParams: oh(i, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const c = Z({}, er, l);
        return a.params = Z({}, c, Vi, i),
        a.originalParams = Z({}, a.params),
        a.passedParams = Z({}, i),
        a.params && a.params.on && Object.keys(a.params.on).forEach(d => {
            a.on(d, a.params.on[d])
        }
        ),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: i, params: n} = this
          , s = re(i, `.${n.slideClass}, swiper-slide`)
          , r = Xs(s[0]);
        return Xs(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(i => i.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: i, params: n} = e;
        e.slides = re(i, `.${n.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, i) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = n.minTranslate()
          , o = (n.maxTranslate() - s) * e + s;
        n.translateTo(o, typeof i > "u" ? 0 : i),
        n.updateActiveIndex(),
        n.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = e.el.className.split(" ").filter(n => n.indexOf("swiper") === 0 || n.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(e) {
        const i = this;
        return i.destroyed ? "" : e.className.split(" ").filter(n => n.indexOf("swiper-slide") === 0 || n.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = [];
        e.slides.forEach(n => {
            const s = e.getSlideClasses(n);
            i.push({
                slideEl: n,
                classNames: s
            }),
            e.emit("_slideClass", n, s)
        }
        ),
        e.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(e, i) {
        e === void 0 && (e = "current"),
        i === void 0 && (i = !1);
        const n = this
          , {params: s, slides: r, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: c} = n;
        let d = 1;
        if (typeof s.slidesPerView == "number")
            return s.slidesPerView;
        if (s.centeredSlides) {
            let u = r[c] ? Math.ceil(r[c].swiperSlideSize) : 0, h;
            for (let f = c + 1; f < r.length; f += 1)
                r[f] && !h && (u += Math.ceil(r[f].swiperSlideSize),
                d += 1,
                u > l && (h = !0));
            for (let f = c - 1; f >= 0; f -= 1)
                r[f] && !h && (u += r[f].swiperSlideSize,
                d += 1,
                u > l && (h = !0))
        } else if (e === "current")
            for (let u = c + 1; u < r.length; u += 1)
                (i ? o[u] + a[u] - o[c] < l : o[u] - o[c] < l) && (d += 1);
        else
            for (let u = c - 1; u >= 0; u -= 1)
                o[c] - o[u] < l && (d += 1);
        return d
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: i, params: n} = e;
        n.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && Qt(e, o)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function s() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate
              , a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let r;
        if (n.freeMode && n.freeMode.enabled && !n.cssMode)
            s(),
            n.autoHeight && e.updateAutoHeight();
        else {
            if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
                const o = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(o.length - 1, 0, !1, !0)
            } else
                r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || s()
        }
        n.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, i) {
        i === void 0 && (i = !0);
        const n = this
          , s = n.params.direction;
        return e || (e = s === "horizontal" ? "vertical" : "horizontal"),
        e === s || e !== "horizontal" && e !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${s}`),
        n.el.classList.add(`${n.params.containerModifierClass}${e}`),
        n.emitContainerClasses(),
        n.params.direction = e,
        n.slides.forEach(r => {
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        n.emit("changeDirection"),
        i && n.update()),
        n
    }
    changeLanguageDirection(e) {
        const i = this;
        i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl",
        i.rtlTranslate = i.params.direction === "horizontal" && i.rtl,
        i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "ltr"),
        i.update())
    }
    mount(e) {
        const i = this;
        if (i.mounted)
            return !0;
        let n = e || i.params.el;
        if (typeof n == "string" && (n = document.querySelector(n)),
        !n)
            return !1;
        n.swiper = i,
        n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0);
        const s = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = ( () => n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(s()) : re(n, s())[0])();
        return !o && i.params.createElements && (o = li("div", i.params.wrapperClass),
        n.append(o),
        re(n, `.${i.params.slideClass}`).forEach(a => {
            o.append(a)
        }
        )),
        Object.assign(i, {
            el: n,
            wrapperEl: o,
            slidesEl: i.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : o,
            hostEl: i.isElement ? n.parentNode.host : n,
            mounted: !0,
            rtl: n.dir.toLowerCase() === "rtl" || Te(n, "direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || Te(n, "direction") === "rtl"),
            wrongRTL: Te(o, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const i = this;
        if (i.initialized || i.mount(e) === !1)
            return i;
        i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
        i.params.loop && i.loopCreate(),
        i.attachEvents();
        const s = [...i.el.querySelectorAll('[loading="lazy"]')];
        return i.isElement && s.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach(r => {
            r.complete ? Qt(i, r) : r.addEventListener("load", o => {
                Qt(i, o.target)
            }
            )
        }
        ),
        zn(i),
        i.initialized = !0,
        zn(i),
        i.emit("init"),
        i.emit("afterInit"),
        i
    }
    destroy(e, i) {
        e === void 0 && (e = !0),
        i === void 0 && (i = !0);
        const n = this
          , {params: s, el: r, wrapperEl: o, slides: a} = n;
        return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"),
        n.initialized = !1,
        n.detachEvents(),
        s.loop && n.loopDestroy(),
        i && (n.removeClasses(),
        r && typeof r != "string" && r.removeAttribute("style"),
        o && o.removeAttribute("style"),
        a && a.length && a.forEach(l => {
            l.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        n.emit("destroy"),
        Object.keys(n.eventsListeners).forEach(l => {
            n.off(l)
        }
        ),
        e !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null),
        Hu(n)),
        n.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        Z(Vi, e)
    }
    static get extendedDefaults() {
        return Vi
    }
    static get defaults() {
        return er
    }
    static installModule(e) {
        K.prototype.__modules__ || (K.prototype.__modules__ = []);
        const i = K.prototype.__modules__;
        typeof e == "function" && i.indexOf(e) < 0 && i.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(i => K.installModule(i)),
        K) : (K.installModule(e),
        K)
    }
}
Object.keys(qi).forEach(t => {
    Object.keys(qi[t]).forEach(e => {
        K.prototype[e] = qi[t][e]
    }
    )
}
);
K.use([ef, tf]);
function ah(t, e, i, n) {
    return t.params.createElements && Object.keys(n).forEach(s => {
        if (!i[s] && i.auto === !0) {
            let r = re(t.el, `.${n[s]}`)[0];
            r || (r = li("div", n[s]),
            r.className = n[s],
            t.el.append(r)),
            i[s] = r,
            e[s] = r
        }
    }
    ),
    i
}
function xa(t) {
    let {swiper: e, extendParams: i, on: n, emit: s} = t;
    i({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    function r(p) {
        let m;
        return p && typeof p == "string" && e.isElement && (m = e.el.querySelector(p) || e.hostEl.querySelector(p),
        m) ? m : (p && (typeof p == "string" && (m = [...document.querySelectorAll(p)]),
        e.params.uniqueNavElements && typeof p == "string" && m && m.length > 1 && e.el.querySelectorAll(p).length === 1 ? m = e.el.querySelector(p) : m && m.length === 1 && (m = m[0])),
        p && !m ? p : m)
    }
    function o(p, m) {
        const g = e.params.navigation;
        p = ge(p),
        p.forEach(v => {
            v && (v.classList[m ? "add" : "remove"](...g.disabledClass.split(" ")),
            v.tagName === "BUTTON" && (v.disabled = m),
            e.params.watchOverflow && e.enabled && v.classList[e.isLocked ? "add" : "remove"](g.lockClass))
        }
        )
    }
    function a() {
        const {nextEl: p, prevEl: m} = e.navigation;
        if (e.params.loop) {
            o(m, !1),
            o(p, !1);
            return
        }
        o(m, e.isBeginning && !e.params.rewind),
        o(p, e.isEnd && !e.params.rewind)
    }
    function l(p) {
        p.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        s("navigationPrev"))
    }
    function c(p) {
        p.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        s("navigationNext"))
    }
    function d() {
        const p = e.params.navigation;
        if (e.params.navigation = ah(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(p.nextEl || p.prevEl))
            return;
        let m = r(p.nextEl)
          , g = r(p.prevEl);
        Object.assign(e.navigation, {
            nextEl: m,
            prevEl: g
        }),
        m = ge(m),
        g = ge(g);
        const v = (y, b) => {
            y && y.addEventListener("click", b === "next" ? c : l),
            !e.enabled && y && y.classList.add(...p.lockClass.split(" "))
        }
        ;
        m.forEach(y => v(y, "next")),
        g.forEach(y => v(y, "prev"))
    }
    function u() {
        let {nextEl: p, prevEl: m} = e.navigation;
        p = ge(p),
        m = ge(m);
        const g = (v, y) => {
            v.removeEventListener("click", y === "next" ? c : l),
            v.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        p.forEach(v => g(v, "next")),
        m.forEach(v => g(v, "prev"))
    }
    n("init", () => {
        e.params.navigation.enabled === !1 ? f() : (d(),
        a())
    }
    ),
    n("toEdge fromEdge lock unlock", () => {
        a()
    }
    ),
    n("destroy", () => {
        u()
    }
    ),
    n("enable disable", () => {
        let {nextEl: p, prevEl: m} = e.navigation;
        if (p = ge(p),
        m = ge(m),
        e.enabled) {
            a();
            return
        }
        [...p, ...m].filter(g => !!g).forEach(g => g.classList.add(e.params.navigation.lockClass))
    }
    ),
    n("click", (p, m) => {
        let {nextEl: g, prevEl: v} = e.navigation;
        g = ge(g),
        v = ge(v);
        const y = m.target;
        let b = v.includes(y) || g.includes(y);
        if (e.isElement && !b) {
            const x = m.path || m.composedPath && m.composedPath();
            x && (b = x.find(S => g.includes(S) || v.includes(S)))
        }
        if (e.params.navigation.hideOnClick && !b) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === y || e.pagination.el.contains(y)))
                return;
            let x;
            g.length ? x = g[0].classList.contains(e.params.navigation.hiddenClass) : v.length && (x = v[0].classList.contains(e.params.navigation.hiddenClass)),
            s(x === !0 ? "navigationShow" : "navigationHide"),
            [...g, ...v].filter(S => !!S).forEach(S => S.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const h = () => {
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        d(),
        a()
    }
      , f = () => {
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        u()
    }
    ;
    Object.assign(e.navigation, {
        enable: h,
        disable: f,
        update: a,
        init: d,
        destroy: u
    })
}
function lh(t) {
    let {swiper: e, extendParams: i, on: n} = t;
    i({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let s = !1
      , r = !1;
    e.thumbs = {
        swiper: null
    };
    function o() {
        const c = e.thumbs.swiper;
        if (!c || c.destroyed)
            return;
        const d = c.clickedIndex
          , u = c.clickedSlide;
        if (u && u.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof d > "u" || d === null)
            return;
        let h;
        c.params.loop ? h = parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : h = d,
        e.params.loop ? e.slideToLoop(h) : e.slideTo(h)
    }
    function a() {
        const {thumbs: c} = e.params;
        if (s)
            return !1;
        s = !0;
        const d = e.constructor;
        if (c.swiper instanceof d)
            e.thumbs.swiper = c.swiper,
            Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            e.thumbs.swiper.update();
        else if (mt(c.swiper)) {
            const u = Object.assign({}, c.swiper);
            Object.assign(u, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            e.thumbs.swiper = new d(u),
            r = !0
        }
        return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", o),
        !0
    }
    function l(c) {
        const d = e.thumbs.swiper;
        if (!d || d.destroyed)
            return;
        const u = d.params.slidesPerView === "auto" ? d.slidesPerViewDynamic() : d.params.slidesPerView;
        let h = 1;
        const f = e.params.thumbs.slideThumbActiveClass;
        if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (h = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (h = 1),
        h = Math.floor(h),
        d.slides.forEach(g => g.classList.remove(f)),
        d.params.loop || d.params.virtual && d.params.virtual.enabled)
            for (let g = 0; g < h; g += 1)
                re(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + g}"]`).forEach(v => {
                    v.classList.add(f)
                }
                );
        else
            for (let g = 0; g < h; g += 1)
                d.slides[e.realIndex + g] && d.slides[e.realIndex + g].classList.add(f);
        const p = e.params.thumbs.autoScrollOffset
          , m = p && !d.params.loop;
        if (e.realIndex !== d.realIndex || m) {
            const g = d.activeIndex;
            let v, y;
            if (d.params.loop) {
                const b = d.slides.filter(x => x.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
                v = d.slides.indexOf(b),
                y = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else
                v = e.realIndex,
                y = v > e.previousIndex ? "next" : "prev";
            m && (v += y === "next" ? p : -1 * p),
            d.visibleSlidesIndexes && d.visibleSlidesIndexes.indexOf(v) < 0 && (d.params.centeredSlides ? v > g ? v = v - Math.floor(u / 2) + 1 : v = v + Math.floor(u / 2) - 1 : v > g && d.params.slidesPerGroup,
            d.slideTo(v, c ? 0 : void 0))
        }
    }
    n("beforeInit", () => {
        const {thumbs: c} = e.params;
        if (!(!c || !c.swiper))
            if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
                const d = Ge()
                  , u = () => {
                    const f = typeof c.swiper == "string" ? d.querySelector(c.swiper) : c.swiper;
                    if (f && f.swiper)
                        c.swiper = f.swiper,
                        a(),
                        l(!0);
                    else if (f) {
                        const p = `${e.params.eventsPrefix}init`
                          , m = g => {
                            c.swiper = g.detail[0],
                            f.removeEventListener(p, m),
                            a(),
                            l(!0),
                            c.swiper.update(),
                            e.update()
                        }
                        ;
                        f.addEventListener(p, m)
                    }
                    return f
                }
                  , h = () => {
                    if (e.destroyed)
                        return;
                    u() || requestAnimationFrame(h)
                }
                ;
                requestAnimationFrame(h)
            } else
                a(),
                l(!0)
    }
    ),
    n("slideChange update resize observerUpdate", () => {
        l()
    }
    ),
    n("setTransition", (c, d) => {
        const u = e.thumbs.swiper;
        !u || u.destroyed || u.setTransition(d)
    }
    ),
    n("beforeDestroy", () => {
        const c = e.thumbs.swiper;
        !c || c.destroyed || r && c.destroy()
    }
    ),
    Object.assign(e.thumbs, {
        init: a,
        update: l
    })
}
function ch(t) {
    let {swiper: e, extendParams: i, emit: n, once: s} = t;
    i({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });
    function r() {
        if (e.params.cssMode)
            return;
        const l = e.getTranslate();
        e.setTranslate(l),
        e.setTransition(0),
        e.touchEventsData.velocities.length = 0,
        e.freeMode.onTouchEnd({
            currentPos: e.rtl ? e.translate : -e.translate
        })
    }
    function o() {
        if (e.params.cssMode)
            return;
        const {touchEventsData: l, touches: c} = e;
        l.velocities.length === 0 && l.velocities.push({
            position: c[e.isHorizontal() ? "startX" : "startY"],
            time: l.touchStartTime
        }),
        l.velocities.push({
            position: c[e.isHorizontal() ? "currentX" : "currentY"],
            time: Be()
        })
    }
    function a(l) {
        let {currentPos: c} = l;
        if (e.params.cssMode)
            return;
        const {params: d, wrapperEl: u, rtlTranslate: h, snapGrid: f, touchEventsData: p} = e
          , g = Be() - p.touchStartTime;
        if (c < -e.minTranslate()) {
            e.slideTo(e.activeIndex);
            return
        }
        if (c > -e.maxTranslate()) {
            e.slides.length < f.length ? e.slideTo(f.length - 1) : e.slideTo(e.slides.length - 1);
            return
        }
        if (d.freeMode.momentum) {
            if (p.velocities.length > 1) {
                const M = p.velocities.pop()
                  , N = p.velocities.pop()
                  , C = M.position - N.position
                  , A = M.time - N.time;
                e.velocity = C / A,
                e.velocity /= 2,
                Math.abs(e.velocity) < d.freeMode.minimumVelocity && (e.velocity = 0),
                (A > 150 || Be() - M.time > 300) && (e.velocity = 0)
            } else
                e.velocity = 0;
            e.velocity *= d.freeMode.momentumVelocityRatio,
            p.velocities.length = 0;
            let v = 1e3 * d.freeMode.momentumRatio;
            const y = e.velocity * v;
            let b = e.translate + y;
            h && (b = -b);
            let x = !1, S;
            const T = Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
            let O;
            if (b < e.maxTranslate())
                d.freeMode.momentumBounce ? (b + e.maxTranslate() < -T && (b = e.maxTranslate() - T),
                S = e.maxTranslate(),
                x = !0,
                p.allowMomentumBounce = !0) : b = e.maxTranslate(),
                d.loop && d.centeredSlides && (O = !0);
            else if (b > e.minTranslate())
                d.freeMode.momentumBounce ? (b - e.minTranslate() > T && (b = e.minTranslate() + T),
                S = e.minTranslate(),
                x = !0,
                p.allowMomentumBounce = !0) : b = e.minTranslate(),
                d.loop && d.centeredSlides && (O = !0);
            else if (d.freeMode.sticky) {
                let M;
                for (let N = 0; N < f.length; N += 1)
                    if (f[N] > -b) {
                        M = N;
                        break
                    }
                Math.abs(f[M] - b) < Math.abs(f[M - 1] - b) || e.swipeDirection === "next" ? b = f[M] : b = f[M - 1],
                b = -b
            }
            if (O && s("transitionEnd", () => {
                e.loopFix()
            }
            ),
            e.velocity !== 0) {
                if (h ? v = Math.abs((-b - e.translate) / e.velocity) : v = Math.abs((b - e.translate) / e.velocity),
                d.freeMode.sticky) {
                    const M = Math.abs((h ? -b : b) - e.translate)
                      , N = e.slidesSizesGrid[e.activeIndex];
                    M < N ? v = d.speed : M < 2 * N ? v = d.speed * 1.5 : v = d.speed * 2.5
                }
            } else if (d.freeMode.sticky) {
                e.slideToClosest();
                return
            }
            d.freeMode.momentumBounce && x ? (e.updateProgress(S),
            e.setTransition(v),
            e.setTranslate(b),
            e.transitionStart(!0, e.swipeDirection),
            e.animating = !0,
            Fi(u, () => {
                !e || e.destroyed || !p.allowMomentumBounce || (n("momentumBounce"),
                e.setTransition(d.speed),
                setTimeout( () => {
                    e.setTranslate(S),
                    Fi(u, () => {
                        !e || e.destroyed || e.transitionEnd()
                    }
                    )
                }
                , 0))
            }
            )) : e.velocity ? (n("_freeModeNoMomentumRelease"),
            e.updateProgress(b),
            e.setTransition(v),
            e.setTranslate(b),
            e.transitionStart(!0, e.swipeDirection),
            e.animating || (e.animating = !0,
            Fi(u, () => {
                !e || e.destroyed || e.transitionEnd()
            }
            ))) : e.updateProgress(b),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        } else if (d.freeMode.sticky) {
            e.slideToClosest();
            return
        } else
            d.freeMode && n("_freeModeNoMomentumRelease");
        (!d.freeMode.momentum || g >= d.longSwipesMs) && (n("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses())
    }
    Object.assign(e, {
        freeMode: {
            onTouchStart: r,
            onTouchMove: o,
            onTouchEnd: a
        }
    })
}
const E = (t, e=1e4) => (t = parseFloat(t + "") || 0,
Math.round((t + Number.EPSILON) * e) / e)
  , Dn = function(t) {
    if (!(t && t instanceof Element && t.offsetParent))
        return !1;
    const e = t.scrollHeight > t.clientHeight
      , i = window.getComputedStyle(t).overflowY
      , n = i.indexOf("hidden") !== -1
      , s = i.indexOf("visible") !== -1;
    return e && !n && !s
}
  , ci = function(t, e=void 0) {
    return !(!t || t === document.body || e && t === e) && (Dn(t) ? t : ci(t.parentElement, e))
}
  , pe = function(t) {
    var e = new DOMParser().parseFromString(t, "text/html").body;
    if (e.childElementCount > 1) {
        for (var i = document.createElement("div"); e.firstChild; )
            i.appendChild(e.firstChild);
        return i
    }
    return e.firstChild
}
  , ps = t => `${t || ""}`.split(" ").filter(e => !!e)
  , me = (t, e, i) => {
    t && ps(e).forEach(n => {
        t.classList.toggle(n, i || !1)
    }
    )
}
;
class Ue {
    constructor(e) {
        Object.defineProperty(this, "pageX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "pageY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "clientX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "clientY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "time", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "nativePointer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.nativePointer = e,
        this.pageX = e.pageX,
        this.pageY = e.pageY,
        this.clientX = e.clientX,
        this.clientY = e.clientY,
        this.id = self.Touch && e instanceof Touch ? e.identifier : -1,
        this.time = Date.now()
    }
}
const Xe = {
    passive: !1
};
class dh {
    constructor(e, {start: i= () => !0, move: n= () => {}
    , end: s= () => {}
    }) {
        Object.defineProperty(this, "element", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "startCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "moveCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "endCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "currentPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }),
        Object.defineProperty(this, "startPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }),
        this.element = e,
        this.startCallback = i,
        this.moveCallback = n,
        this.endCallback = s;
        for (const r of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"])
            this[r] = this[r].bind(this);
        this.element.addEventListener("mousedown", this.onPointerStart, Xe),
        this.element.addEventListener("touchstart", this.onTouchStart, Xe),
        this.element.addEventListener("touchmove", this.onMove, Xe),
        this.element.addEventListener("touchend", this.onTouchEnd),
        this.element.addEventListener("touchcancel", this.onTouchEnd)
    }
    onPointerStart(e) {
        if (!e.buttons || e.button !== 0)
            return;
        const i = new Ue(e);
        this.currentPointers.some(n => n.id === i.id) || this.triggerPointerStart(i, e) && (window.addEventListener("mousemove", this.onMove),
        window.addEventListener("mouseup", this.onPointerEnd),
        window.addEventListener("blur", this.onWindowBlur))
    }
    onTouchStart(e) {
        for (const i of Array.from(e.changedTouches || []))
            this.triggerPointerStart(new Ue(i), e);
        window.addEventListener("blur", this.onWindowBlur)
    }
    onMove(e) {
        const i = this.currentPointers.slice()
          , n = "changedTouches"in e ? Array.from(e.changedTouches || []).map(r => new Ue(r)) : [new Ue(e)]
          , s = [];
        for (const r of n) {
            const o = this.currentPointers.findIndex(a => a.id === r.id);
            o < 0 || (s.push(r),
            this.currentPointers[o] = r)
        }
        s.length && this.moveCallback(e, this.currentPointers.slice(), i)
    }
    onPointerEnd(e) {
        e.buttons > 0 && e.button !== 0 || (this.triggerPointerEnd(e, new Ue(e)),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseup", this.onPointerEnd),
        window.removeEventListener("blur", this.onWindowBlur))
    }
    onTouchEnd(e) {
        for (const i of Array.from(e.changedTouches || []))
            this.triggerPointerEnd(e, new Ue(i))
    }
    triggerPointerStart(e, i) {
        return !!this.startCallback(i, e, this.currentPointers.slice()) && (this.currentPointers.push(e),
        this.startPointers.push(e),
        !0)
    }
    triggerPointerEnd(e, i) {
        const n = this.currentPointers.findIndex(s => s.id === i.id);
        n < 0 || (this.currentPointers.splice(n, 1),
        this.startPointers.splice(n, 1),
        this.endCallback(e, i, this.currentPointers.slice()))
    }
    onWindowBlur() {
        this.clear()
    }
    clear() {
        for (; this.currentPointers.length; ) {
            const e = this.currentPointers[this.currentPointers.length - 1];
            this.currentPointers.splice(this.currentPointers.length - 1, 1),
            this.startPointers.splice(this.currentPointers.length - 1, 1),
            this.endCallback(new Event("touchend",{
                bubbles: !0,
                cancelable: !0,
                clientX: e.clientX,
                clientY: e.clientY
            }), e, this.currentPointers.slice())
        }
    }
    stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, Xe),
        this.element.removeEventListener("touchstart", this.onTouchStart, Xe),
        this.element.removeEventListener("touchmove", this.onMove, Xe),
        this.element.removeEventListener("touchend", this.onTouchEnd),
        this.element.removeEventListener("touchcancel", this.onTouchEnd),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseup", this.onPointerEnd),
        window.removeEventListener("blur", this.onWindowBlur)
    }
}
function tr(t, e) {
    return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0
}
function ir(t, e) {
    return e ? {
        clientX: (t.clientX + e.clientX) / 2,
        clientY: (t.clientY + e.clientY) / 2
    } : t
}
const Fn = t => typeof t == "object" && t !== null && t.constructor === Object && Object.prototype.toString.call(t) === "[object Object]"
  , X = (t, ...e) => {
    const i = e.length;
    for (let n = 0; n < i; n++) {
        const s = e[n] || {};
        Object.entries(s).forEach( ([r,o]) => {
            const a = Array.isArray(o) ? [] : {};
            t[r] || Object.assign(t, {
                [r]: a
            }),
            Fn(o) ? Object.assign(t[r], X(a, o)) : Array.isArray(o) ? Object.assign(t, {
                [r]: [...o]
            }) : Object.assign(t, {
                [r]: o
            })
        }
        )
    }
    return t
}
  , Wi = function(t, e) {
    return t.split(".").reduce( (i, n) => typeof i == "object" ? i[n] : void 0, e)
};
class di {
    constructor(e={}) {
        Object.defineProperty(this, "options", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }),
        Object.defineProperty(this, "events", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        }),
        this.setOptions(e);
        for (const i of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
            i.startsWith("on") && typeof this[i] == "function" && (this[i] = this[i].bind(this))
    }
    setOptions(e) {
        this.options = e ? X({}, this.constructor.defaults, e) : {};
        for (const [i,n] of Object.entries(this.option("on") || {}))
            this.on(i, n)
    }
    option(e, ...i) {
        let n = Wi(e, this.options);
        return n && typeof n == "function" && (n = n.call(this, this, ...i)),
        n
    }
    optionFor(e, i, n, ...s) {
        let r = Wi(i, e);
        var o;
        typeof (o = r) != "string" || isNaN(o) || isNaN(parseFloat(o)) || (r = parseFloat(r)),
        r === "true" && (r = !0),
        r === "false" && (r = !1),
        r && typeof r == "function" && (r = r.call(this, this, e, ...s));
        let a = Wi(i, this.options);
        return a && typeof a == "function" ? r = a.call(this, this, e, ...s, r) : r === void 0 && (r = a),
        r === void 0 ? n : r
    }
    cn(e) {
        const i = this.options.classes;
        return i && i[e] || ""
    }
    localize(e, i=[]) {
        e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (n, s, r) => {
            let o = "";
            return r ? o = this.option(`${s[0] + s.toLowerCase().substring(1)}.l10n.${r}`) : s && (o = this.option(`l10n.${s}`)),
            o || (o = n),
            o
        }
        );
        for (let n = 0; n < i.length; n++)
            e = e.split(i[n][0]).join(i[n][1]);
        return e = e.replace(/\{\{(.*?)\}\}/g, (n, s) => s)
    }
    on(e, i) {
        let n = [];
        typeof e == "string" ? n = e.split(" ") : Array.isArray(e) && (n = e),
        this.events || (this.events = new Map),
        n.forEach(s => {
            let r = this.events.get(s);
            r || (this.events.set(s, []),
            r = []),
            r.includes(i) || r.push(i),
            this.events.set(s, r)
        }
        )
    }
    off(e, i) {
        let n = [];
        typeof e == "string" ? n = e.split(" ") : Array.isArray(e) && (n = e),
        n.forEach(s => {
            const r = this.events.get(s);
            if (Array.isArray(r)) {
                const o = r.indexOf(i);
                o > -1 && r.splice(o, 1)
            }
        }
        )
    }
    emit(e, ...i) {
        [...this.events.get(e) || []].forEach(n => n(this, ...i)),
        e !== "*" && this.emit("*", e, ...i)
    }
}
Object.defineProperty(di, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.36"
}),
Object.defineProperty(di, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
});
class ms extends di {
    constructor(e={}) {
        super(e),
        Object.defineProperty(this, "plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        })
    }
    attachPlugins(e={}) {
        const i = new Map;
        for (const [n,s] of Object.entries(e)) {
            const r = this.option(n)
              , o = this.plugins[n];
            o || r === !1 ? o && r === !1 && (o.detach(),
            delete this.plugins[n]) : i.set(n, new s(this,r || {}))
        }
        for (const [n,s] of i)
            this.plugins[n] = s,
            s.attach()
    }
    detachPlugins(e) {
        e = e || Object.keys(this.plugins);
        for (const i of e) {
            const n = this.plugins[i];
            n && n.detach(),
            delete this.plugins[i]
        }
        return this.emit("detachPlugins"),
        this
    }
}
var D;
(function(t) {
    t[t.Init = 0] = "Init",
    t[t.Error = 1] = "Error",
    t[t.Ready = 2] = "Ready",
    t[t.Panning = 3] = "Panning",
    t[t.Mousemove = 4] = "Mousemove",
    t[t.Destroy = 5] = "Destroy"
}
)(D || (D = {}));
const ve = ["a", "b", "c", "d", "e", "f"]
  , Sa = {
    PANUP: "Move up",
    PANDOWN: "Move down",
    PANLEFT: "Move left",
    PANRIGHT: "Move right",
    ZOOMIN: "Zoom in",
    ZOOMOUT: "Zoom out",
    TOGGLEZOOM: "Toggle zoom level",
    TOGGLE1TO1: "Toggle zoom level",
    ITERATEZOOM: "Toggle zoom level",
    ROTATECCW: "Rotate counterclockwise",
    ROTATECW: "Rotate clockwise",
    FLIPX: "Flip horizontally",
    FLIPY: "Flip vertically",
    FITX: "Fit horizontally",
    FITY: "Fit vertically",
    RESET: "Reset",
    TOGGLEFS: "Toggle fullscreen"
}
  , uh = {
    content: null,
    width: "auto",
    height: "auto",
    panMode: "drag",
    touch: !0,
    dragMinThreshold: 3,
    lockAxis: !1,
    mouseMoveFactor: 1,
    mouseMoveFriction: .12,
    zoom: !0,
    pinchToZoom: !0,
    panOnlyZoomed: "auto",
    minScale: 1,
    maxScale: 2,
    friction: .25,
    dragFriction: .35,
    decelFriction: .05,
    click: "toggleZoom",
    dblClick: !1,
    wheel: "zoom",
    wheelLimit: 7,
    spinner: !0,
    bounds: "auto",
    infinite: !1,
    rubberband: !0,
    bounce: !0,
    maxVelocity: 75,
    transformParent: !1,
    classes: {
        content: "f-panzoom__content",
        isLoading: "is-loading",
        canZoomIn: "can-zoom_in",
        canZoomOut: "can-zoom_out",
        isDraggable: "is-draggable",
        isDragging: "is-dragging",
        inFullscreen: "in-fullscreen",
        htmlHasFullscreen: "with-panzoom-in-fullscreen"
    },
    l10n: Sa
}
  , nr = '<circle cx="25" cy="25" r="20"></circle>'
  , gs = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + nr + nr + "</svg></div>"
  , U = t => t && t !== null && t instanceof Element && "nodeType"in t
  , z = (t, e) => {
    t && ps(e).forEach(i => {
        t.classList.remove(i)
    }
    )
}
  , _ = (t, e) => {
    t && ps(e).forEach(i => {
        t.classList.add(i)
    }
    )
}
  , Dt = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
}
  , fh = 1e5
  , Ft = 1e4
  , ee = "mousemove"
  , sr = "drag"
  , rr = "content"
  , te = "auto";
let Gi = null
  , Ui = null;
class Ve extends ms {
    get fits() {
        return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1
    }
    get isTouchDevice() {
        return Ui === null && (Ui = window.matchMedia("(hover: none)").matches),
        Ui
    }
    get isMobile() {
        return Gi === null && (Gi = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
        Gi
    }
    get panMode() {
        return this.options.panMode !== ee || this.isTouchDevice ? sr : ee
    }
    get panOnlyZoomed() {
        const e = this.options.panOnlyZoomed;
        return e === te ? this.isTouchDevice : e
    }
    get isInfinite() {
        return this.option("infinite")
    }
    get angle() {
        return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0
    }
    get targetAngle() {
        return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0
    }
    get scale() {
        const {a: e, b: i} = this.current;
        return Math.sqrt(e * e + i * i) || 1
    }
    get targetScale() {
        const {a: e, b: i} = this.target;
        return Math.sqrt(e * e + i * i) || 1
    }
    get minScale() {
        return this.option("minScale") || 1
    }
    get fullScale() {
        const {contentRect: e} = this;
        return e.fullWidth / e.fitWidth || 1
    }
    get maxScale() {
        return this.fullScale * (this.option("maxScale") || 1) || 1
    }
    get coverScale() {
        const {containerRect: e, contentRect: i} = this
          , n = Math.max(e.height / i.fitHeight, e.width / i.fitWidth) || 1;
        return Math.min(this.fullScale, n)
    }
    get isScaling() {
        return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
    }
    get isContentLoading() {
        const e = this.content;
        return !!(e && e instanceof HTMLImageElement) && !e.complete
    }
    get isResting() {
        if (this.isBouncingX || this.isBouncingY)
            return !1;
        for (const e of ve) {
            const i = e == "e" || e === "f" ? 1e-4 : 1e-5;
            if (Math.abs(this.target[e] - this.current[e]) > i)
                return !1
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds)
    }
    constructor(e, i={}, n={}) {
        var s;
        if (super(i),
        Object.defineProperty(this, "pointerTracker", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "resizeObserver", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "updateTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "rAF", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "isTicking", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "ignoreBounds", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "isBouncingX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "isBouncingY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "clicks", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "trackingPoints", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }),
        Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "cwd", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "pmme", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "friction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.Init
        }),
        Object.defineProperty(this, "isDragging", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "content", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "spinner", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "containerRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0
            }
        }),
        Object.defineProperty(this, "contentRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                fullWidth: 0,
                fullHeight: 0,
                fitWidth: 0,
                fitHeight: 0,
                width: 0,
                height: 0
            }
        }),
        Object.defineProperty(this, "dragStart", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                time: 0
            }
        }),
        Object.defineProperty(this, "dragOffset", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                x: 0,
                y: 0,
                time: 0
            }
        }),
        Object.defineProperty(this, "current", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, Dt)
        }),
        Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, Dt)
        }),
        Object.defineProperty(this, "velocity", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 0,
                f: 0
            }
        }),
        Object.defineProperty(this, "lockedAxis", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        !e)
            throw new Error("Container Element Not Found");
        this.container = e,
        this.initContent(),
        this.attachPlugins(Object.assign(Object.assign({}, Ve.Plugins), n)),
        this.emit("attachPlugins"),
        this.emit("init");
        const r = this.content;
        if (r.addEventListener("load", this.onLoad),
        r.addEventListener("error", this.onError),
        this.isContentLoading) {
            if (this.option("spinner")) {
                e.classList.add(this.cn("isLoading"));
                const o = pe(gs);
                !e.contains(r) || r.parentElement instanceof HTMLPictureElement ? this.spinner = e.appendChild(o) : this.spinner = ((s = r.parentElement) === null || s === void 0 ? void 0 : s.insertBefore(o, r)) || null
            }
            this.emit("beforeLoad")
        } else
            queueMicrotask( () => {
                this.enable()
            }
            )
    }
    initContent() {
        const {container: e} = this
          , i = this.cn(rr);
        let n = this.option(rr) || e.querySelector(`.${i}`);
        if (n || (n = e.querySelector("img,picture") || e.firstElementChild,
        n && _(n, i)),
        n instanceof HTMLPictureElement && (n = n.querySelector("img")),
        !n)
            throw new Error("No content found");
        this.content = n
    }
    onLoad() {
        const {spinner: e, container: i, state: n} = this;
        e && (e.remove(),
        this.spinner = null),
        this.option("spinner") && i.classList.remove(this.cn("isLoading")),
        this.emit("afterLoad"),
        n === D.Init ? this.enable() : this.updateMetrics()
    }
    onError() {
        this.state !== D.Destroy && (this.spinner && (this.spinner.remove(),
        this.spinner = null),
        this.stop(),
        this.detachEvents(),
        this.state = D.Error,
        this.emit("error"))
    }
    getNextScale(e) {
        const {fullScale: i, targetScale: n, coverScale: s, maxScale: r, minScale: o} = this;
        let a = o;
        switch (e) {
        case "toggleMax":
            a = n - o < .5 * (r - o) ? r : o;
            break;
        case "toggleCover":
            a = n - o < .5 * (s - o) ? s : o;
            break;
        case "toggleZoom":
            a = n - o < .5 * (i - o) ? i : o;
            break;
        case "iterateZoom":
            let l = [1, i, r].sort( (d, u) => d - u)
              , c = l.findIndex(d => d > n + 1e-5);
            a = l[c] || 1
        }
        return a
    }
    attachObserver() {
        var e;
        const i = () => {
            const {container: n, containerRect: s} = this;
            return Math.abs(s.width - n.getBoundingClientRect().width) > .1 || Math.abs(s.height - n.getBoundingClientRect().height) > .1
        }
        ;
        this.resizeObserver || window.ResizeObserver === void 0 || (this.resizeObserver = new ResizeObserver( () => {
            this.updateTimer || (i() ? (this.onResize(),
            this.isMobile && (this.updateTimer = setTimeout( () => {
                i() && this.onResize(),
                this.updateTimer = null
            }
            , 500))) : this.updateTimer && (clearTimeout(this.updateTimer),
            this.updateTimer = null))
        }
        )),
        (e = this.resizeObserver) === null || e === void 0 || e.observe(this.container)
    }
    detachObserver() {
        var e;
        (e = this.resizeObserver) === null || e === void 0 || e.disconnect()
    }
    attachEvents() {
        const {container: e} = this;
        e.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }),
        e.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.pointerTracker = new dh(e,{
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp
        }),
        document.addEventListener(ee, this.onMouseMove)
    }
    detachEvents() {
        var e;
        const {container: i} = this;
        i.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }),
        i.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        (e = this.pointerTracker) === null || e === void 0 || e.stop(),
        this.pointerTracker = null,
        document.removeEventListener(ee, this.onMouseMove),
        document.removeEventListener("keydown", this.onKeydown, !0),
        this.clickTimer && (clearTimeout(this.clickTimer),
        this.clickTimer = null),
        this.updateTimer && (clearTimeout(this.updateTimer),
        this.updateTimer = null)
    }
    animate() {
        this.setTargetForce();
        const e = this.friction
          , i = this.option("maxVelocity");
        for (const n of ve)
            e ? (this.velocity[n] *= 1 - e,
            i && !this.isScaling && (this.velocity[n] = Math.max(Math.min(this.velocity[n], i), -1 * i)),
            this.current[n] += this.velocity[n]) : this.current[n] = this.target[n];
        this.setTransform(),
        this.setEdgeForce(),
        !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame( () => this.animate()) : this.stop("current")
    }
    setTargetForce() {
        for (const e of ve)
            e === "e" && this.isBouncingX || e === "f" && this.isBouncingY || (this.velocity[e] = (1 / (1 - this.friction) - 1) * (this.target[e] - this.current[e]))
    }
    checkBounds(e=0, i=0) {
        const {current: n} = this
          , s = n.e + e
          , r = n.f + i
          , o = this.getBounds()
          , {x: a, y: l} = o
          , c = a.min
          , d = a.max
          , u = l.min
          , h = l.max;
        let f = 0
          , p = 0;
        return c !== 1 / 0 && s < c ? f = c - s : d !== 1 / 0 && s > d && (f = d - s),
        u !== 1 / 0 && r < u ? p = u - r : h !== 1 / 0 && r > h && (p = h - r),
        Math.abs(f) < 1e-4 && (f = 0),
        Math.abs(p) < 1e-4 && (p = 0),
        Object.assign(Object.assign({}, o), {
            xDiff: f,
            yDiff: p,
            inBounds: !f && !p
        })
    }
    clampTargetBounds() {
        const {target: e} = this
          , {x: i, y: n} = this.getBounds();
        i.min !== 1 / 0 && (e.e = Math.max(e.e, i.min)),
        i.max !== 1 / 0 && (e.e = Math.min(e.e, i.max)),
        n.min !== 1 / 0 && (e.f = Math.max(e.f, n.min)),
        n.max !== 1 / 0 && (e.f = Math.min(e.f, n.max))
    }
    calculateContentDim(e=this.current) {
        const {content: i, contentRect: n} = this
          , {fitWidth: s, fitHeight: r, fullWidth: o, fullHeight: a} = n;
        let l = o
          , c = a;
        if (this.option("zoom") || this.angle !== 0) {
            const d = !(i instanceof HTMLImageElement) && (window.getComputedStyle(i).maxWidth === "none" || window.getComputedStyle(i).maxHeight === "none")
              , u = d ? o : s
              , h = d ? a : r
              , f = this.getMatrix(e)
              , p = new DOMPoint(0,0).matrixTransform(f)
              , m = new DOMPoint(0 + u,0).matrixTransform(f)
              , g = new DOMPoint(0 + u,0 + h).matrixTransform(f)
              , v = new DOMPoint(0,0 + h).matrixTransform(f)
              , y = Math.abs(g.x - p.x)
              , b = Math.abs(g.y - p.y)
              , x = Math.abs(v.x - m.x)
              , S = Math.abs(v.y - m.y);
            l = Math.max(y, x),
            c = Math.max(b, S)
        }
        return {
            contentWidth: l,
            contentHeight: c
        }
    }
    setEdgeForce() {
        if (this.ignoreBounds || this.isDragging || this.panMode === ee || this.targetScale < this.scale)
            return this.isBouncingX = !1,
            void (this.isBouncingY = !1);
        const {target: e} = this
          , {x: i, y: n, xDiff: s, yDiff: r} = this.checkBounds()
          , o = this.option("maxVelocity");
        let a = this.velocity.e
          , l = this.velocity.f;
        s !== 0 ? (this.isBouncingX = !0,
        s * a <= 0 ? a += .14 * s : (a = .14 * s,
        i.min !== 1 / 0 && (this.target.e = Math.max(e.e, i.min)),
        i.max !== 1 / 0 && (this.target.e = Math.min(e.e, i.max))),
        o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1,
        r !== 0 ? (this.isBouncingY = !0,
        r * l <= 0 ? l += .14 * r : (l = .14 * r,
        n.min !== 1 / 0 && (this.target.f = Math.max(e.f, n.min)),
        n.max !== 1 / 0 && (this.target.f = Math.min(e.f, n.max))),
        o && (l = Math.max(Math.min(l, o), -1 * o))) : this.isBouncingY = !1,
        this.isBouncingX && (this.velocity.e = a),
        this.isBouncingY && (this.velocity.f = l)
    }
    enable() {
        const {content: e} = this
          , i = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
        for (const n of ve)
            this.current[n] = this.target[n] = i[n];
        this.updateMetrics(),
        this.attachObserver(),
        this.attachEvents(),
        this.state = D.Ready,
        this.emit("ready")
    }
    onClick(e) {
        var i;
        e.type === "click" && e.detail === 0 && (this.dragOffset.x = 0,
        this.dragOffset.y = 0),
        this.isDragging && ((i = this.pointerTracker) === null || i === void 0 || i.clear(),
        this.trackingPoints = [],
        this.startDecelAnim());
        const n = e.target;
        if (!n || e.defaultPrevented)
            return;
        if (n.hasAttribute("disabled"))
            return e.preventDefault(),
            void e.stopPropagation();
        if (( () => {
            const f = window.getSelection();
            return f && f.type === "Range"
        }
        )() && !n.closest("button"))
            return;
        const s = n.closest("[data-panzoom-action]")
          , r = n.closest("[data-panzoom-change]")
          , o = s || r
          , a = o && U(o) ? o.dataset : null;
        if (a) {
            const f = a.panzoomChange
              , p = a.panzoomAction;
            if ((f || p) && e.preventDefault(),
            f) {
                let m = {};
                try {
                    m = JSON.parse(f)
                } catch {
                    console && console.warn("The given data was not valid JSON")
                }
                return void this.applyChange(m)
            }
            if (p)
                return void (this[p] && this[p]())
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
            return e.preventDefault(),
            void e.stopPropagation();
        if (n.closest("[data-fancybox]"))
            return;
        const l = this.content.getBoundingClientRect()
          , c = this.dragStart;
        if (c.time && !this.canZoomOut() && (Math.abs(l.x - c.x) > 2 || Math.abs(l.y - c.y) > 2))
            return;
        this.dragStart.time = 0;
        const d = f => {
            this.option("zoom", e) && f && typeof f == "string" && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(f) && typeof this[f] == "function" && (e.preventDefault(),
            this[f]({
                event: e
            }))
        }
          , u = this.option("click", e)
          , h = this.option("dblClick", e);
        h ? (this.clicks++,
        this.clicks == 1 && (this.clickTimer = setTimeout( () => {
            this.clicks === 1 ? (this.emit("click", e),
            !e.defaultPrevented && u && d(u)) : (this.emit("dblClick", e),
            e.defaultPrevented || d(h)),
            this.clicks = 0,
            this.clickTimer = null
        }
        , 350))) : (this.emit("click", e),
        !e.defaultPrevented && u && d(u))
    }
    addTrackingPoint(e) {
        const i = this.trackingPoints.filter(n => n.time > Date.now() - 100);
        i.push(e),
        this.trackingPoints = i
    }
    onPointerDown(e, i, n) {
        var s;
        if (this.option("touch", e) === !1)
            return !1;
        this.pwt = 0,
        this.dragOffset = {
            x: 0,
            y: 0,
            time: 0
        },
        this.trackingPoints = [];
        const r = this.content.getBoundingClientRect();
        if (this.dragStart = {
            x: r.x,
            y: r.y,
            top: r.top,
            left: r.left,
            time: Date.now()
        },
        this.clickTimer)
            return !1;
        if (this.panMode === ee && this.targetScale > 1)
            return e.preventDefault(),
            e.stopPropagation(),
            !1;
        const o = e.composedPath()[0];
        if (!n.length) {
            if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"))
                return !1;
            (s = window.getSelection()) === null || s === void 0 || s.removeAllRanges()
        }
        if (e.type === "mousedown")
            ["A", "BUTTON"].includes(o.nodeName) || e.preventDefault();
        else if (Math.abs(this.velocity.a) > .3)
            return !1;
        return this.target.e = this.current.e,
        this.target.f = this.current.f,
        this.stop(),
        this.isDragging || (this.isDragging = !0,
        this.addTrackingPoint(i),
        this.emit("touchStart", e)),
        !0
    }
    onPointerMove(e, i, n) {
        if (this.option("touch", e) === !1 || !this.isDragging || i.length < 2 && this.panOnlyZoomed && E(this.targetScale) <= E(this.minScale) || (this.emit("touchMove", e),
        e.defaultPrevented))
            return;
        this.addTrackingPoint(i[0]);
        const {content: s} = this
          , r = ir(n[0], n[1])
          , o = ir(i[0], i[1]);
        let a = 0
          , l = 0;
        if (i.length > 1) {
            const b = s.getBoundingClientRect();
            a = r.clientX - b.left - .5 * b.width,
            l = r.clientY - b.top - .5 * b.height
        }
        const c = tr(n[0], n[1])
          , d = tr(i[0], i[1]);
        let u = c ? d / c : 1
          , h = o.clientX - r.clientX
          , f = o.clientY - r.clientY;
        this.dragOffset.x += h,
        this.dragOffset.y += f,
        this.dragOffset.time = Date.now() - this.dragStart.time;
        let p = E(this.targetScale) === E(this.minScale) && this.option("lockAxis");
        if (p && !this.lockedAxis)
            if (p === "xy" || p === "y" || e.type === "touchmove") {
                if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
                    return void e.preventDefault();
                const b = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                this.lockedAxis = b > 45 && b < 135 ? "y" : "x",
                this.dragOffset.x = 0,
                this.dragOffset.y = 0,
                h = 0,
                f = 0
            } else
                this.lockedAxis = p;
        if (ci(e.target, this.content) && (p = "x",
        this.dragOffset.y = 0),
        p && p !== "xy" && this.lockedAxis !== p && E(this.targetScale) === E(this.minScale))
            return;
        e.cancelable && e.preventDefault(),
        this.container.classList.add(this.cn("isDragging"));
        const m = this.checkBounds(h, f);
        this.option("rubberband") ? (this.isInfinite !== "x" && (m.xDiff > 0 && h < 0 || m.xDiff < 0 && h > 0) && (h *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * m.xDiff))),
        this.isInfinite !== "y" && (m.yDiff > 0 && f < 0 || m.yDiff < 0 && f > 0) && (f *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * m.yDiff)))) : (m.xDiff && (h = 0),
        m.yDiff && (f = 0));
        const g = this.targetScale
          , v = this.minScale
          , y = this.maxScale;
        g < .5 * v && (u = Math.max(u, v)),
        g > 1.5 * y && (u = Math.min(u, y)),
        this.lockedAxis === "y" && E(g) === E(v) && (h = 0),
        this.lockedAxis === "x" && E(g) === E(v) && (f = 0),
        this.applyChange({
            originX: a,
            originY: l,
            panX: h,
            panY: f,
            scale: u,
            friction: this.option("dragFriction"),
            ignoreBounds: !0
        })
    }
    onPointerUp(e, i, n) {
        if (n.length)
            return this.dragOffset.x = 0,
            this.dragOffset.y = 0,
            void (this.trackingPoints = []);
        this.container.classList.remove(this.cn("isDragging")),
        this.isDragging && (this.addTrackingPoint(i),
        this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []),
        ci(e.target, this.content) && this.lockedAxis === "y" && (this.trackingPoints = []),
        this.emit("touchEnd", e),
        this.isDragging = !1,
        this.lockedAxis = !1,
        this.state !== D.Destroy && (e.defaultPrevented || this.startDecelAnim()))
    }
    startDecelAnim() {
        var e;
        const i = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF),
        this.rAF = null),
        this.isBouncingX = !1,
        this.isBouncingY = !1;
        for (const b of ve)
            this.velocity[b] = 0;
        this.target.e = this.current.e,
        this.target.f = this.current.f,
        z(this.container, "is-scaling"),
        z(this.container, "is-animating"),
        this.isTicking = !1;
        const {trackingPoints: n} = this
          , s = n[0]
          , r = n[n.length - 1];
        let o = 0
          , a = 0
          , l = 0;
        r && s && (o = r.clientX - s.clientX,
        a = r.clientY - s.clientY,
        l = r.time - s.time);
        const c = ((e = window.visualViewport) === null || e === void 0 ? void 0 : e.scale) || 1;
        c !== 1 && (o *= c,
        a *= c);
        let d = 0
          , u = 0
          , h = 0
          , f = 0
          , p = this.option("decelFriction");
        const m = this.targetScale;
        if (l > 0) {
            h = Math.abs(o) > 3 ? o / (l / 30) : 0,
            f = Math.abs(a) > 3 ? a / (l / 30) : 0;
            const b = this.option("maxVelocity");
            b && (h = Math.max(Math.min(h, b), -1 * b),
            f = Math.max(Math.min(f, b), -1 * b))
        }
        h && (d = h / (1 / (1 - p) - 1)),
        f && (u = f / (1 / (1 - p) - 1)),
        (this.option("lockAxis") === "y" || this.option("lockAxis") === "xy" && this.lockedAxis === "y" && E(m) === this.minScale) && (d = h = 0),
        (this.option("lockAxis") === "x" || this.option("lockAxis") === "xy" && this.lockedAxis === "x" && E(m) === this.minScale) && (u = f = 0);
        const g = this.dragOffset.x
          , v = this.dragOffset.y
          , y = this.option("dragMinThreshold") || 0;
        Math.abs(g) < y && Math.abs(v) < y && (d = u = 0,
        h = f = 0),
        (this.option("zoom") && (m < this.minScale - 1e-5 || m > this.maxScale + 1e-5) || i && !d && !u) && (p = .35),
        this.applyChange({
            panX: d,
            panY: u,
            friction: p
        }),
        this.emit("decel", h, f, g, v)
    }
    onWheel(e) {
        var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function(r, o) {
            return Math.abs(o) > Math.abs(r) ? o : r
        });
        const n = Math.max(-1, Math.min(1, i));
        if (this.emit("wheel", e, n),
        this.panMode === ee || e.defaultPrevented)
            return;
        const s = this.option("wheel");
        s === "pan" ? (e.preventDefault(),
        this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
            panX: 2 * -e.deltaX,
            panY: 2 * -e.deltaY,
            bounce: !1
        })) : s === "zoom" && this.option("zoom") !== !1 && this.zoomWithWheel(e)
    }
    onMouseMove(e) {
        this.panWithMouse(e)
    }
    onKeydown(e) {
        e.key === "Escape" && this.toggleFS()
    }
    onResize() {
        this.updateMetrics(),
        this.checkBounds().inBounds || this.requestTick()
    }
    setTransform() {
        this.emit("beforeTransform");
        const {current: e, target: i, content: n, contentRect: s} = this
          , r = Object.assign({}, Dt);
        for (const g of ve) {
            const v = g == "e" || g === "f" ? Ft : fh;
            r[g] = E(e[g], v),
            Math.abs(i[g] - e[g]) < (g == "e" || g === "f" ? .51 : .001) && (e[g] = i[g])
        }
        let {a: o, b: a, c: l, d: c, e: d, f: u} = r
          , h = `matrix(${o}, ${a}, ${l}, ${c}, ${d}, ${u})`
          , f = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
        if (this.option("transformParent") && (f = f.parentElement || f),
        f.style.transform === h)
            return;
        f.style.transform = h;
        const {contentWidth: p, contentHeight: m} = this.calculateContentDim();
        s.width = p,
        s.height = m,
        this.emit("afterTransform")
    }
    updateMetrics(e=!1) {
        var i;
        if (!this || this.state === D.Destroy || this.isContentLoading)
            return;
        const n = Math.max(1, ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.scale) || 1)
          , {container: s, content: r} = this
          , o = r instanceof HTMLImageElement
          , a = s.getBoundingClientRect()
          , l = getComputedStyle(this.container);
        let c = a.width * n
          , d = a.height * n;
        const u = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom)
          , h = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight))
          , f = d - u;
        this.containerRect = {
            width: c,
            height: d,
            innerWidth: h,
            innerHeight: f
        };
        const p = parseFloat(r.dataset.width || "") || (P => {
            let k = 0;
            return k = P instanceof HTMLImageElement ? P.naturalWidth : P instanceof SVGElement ? P.width.baseVal.value : Math.max(P.offsetWidth, P.scrollWidth),
            k || 0
        }
        )(r)
          , m = parseFloat(r.dataset.height || "") || (P => {
            let k = 0;
            return k = P instanceof HTMLImageElement ? P.naturalHeight : P instanceof SVGElement ? P.height.baseVal.value : Math.max(P.offsetHeight, P.scrollHeight),
            k || 0
        }
        )(r);
        let g = this.option("width", p) || te
          , v = this.option("height", m) || te;
        const y = g === te
          , b = v === te;
        typeof g != "number" && (g = p),
        typeof v != "number" && (v = m),
        y && (g = p * (v / m)),
        b && (v = m / (p / g));
        let x = r.parentElement instanceof HTMLPictureElement ? r.parentElement : r;
        this.option("transformParent") && (x = x.parentElement || x);
        const S = x.getAttribute("style") || "";
        x.style.setProperty("transform", "none", "important"),
        o && (x.style.width = "",
        x.style.height = ""),
        x.offsetHeight;
        const T = r.getBoundingClientRect();
        let O = T.width * n
          , M = T.height * n
          , N = O
          , C = M;
        O = Math.min(O, g),
        M = Math.min(M, v),
        o ? {width: O, height: M} = ( (P, k, V, ue) => {
            const Ci = V / P
              , Ot = ue / k
              , at = Math.min(Ci, Ot);
            return {
                width: P *= at,
                height: k *= at
            }
        }
        )(g, v, O, M) : (O = Math.min(O, g),
        M = Math.min(M, v));
        let A = .5 * (C - M)
          , I = .5 * (N - O);
        this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
            top: T.top - a.top + A,
            bottom: a.bottom - T.bottom + A,
            left: T.left - a.left + I,
            right: a.right - T.right + I,
            fitWidth: O,
            fitHeight: M,
            width: O,
            height: M,
            fullWidth: g,
            fullHeight: v
        }),
        x.style.cssText = S,
        o && (x.style.width = `${O}px`,
        x.style.height = `${M}px`),
        this.setTransform(),
        e !== !0 && this.emit("refresh"),
        this.ignoreBounds || (E(this.targetScale) < E(this.minScale) ? this.zoomTo(this.minScale, {
            friction: 0
        }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
            friction: 0
        }) : this.state === D.Init || this.checkBounds().inBounds || this.requestTick()),
        this.updateControls()
    }
    calculateBounds() {
        const {contentWidth: e, contentHeight: i} = this.calculateContentDim(this.target)
          , {targetScale: n, lockedAxis: s} = this
          , {fitWidth: r, fitHeight: o} = this.contentRect;
        let a = 0
          , l = 0
          , c = 0
          , d = 0;
        const u = this.option("infinite");
        if (u === !0 || s && u === s)
            a = -1 / 0,
            c = 1 / 0,
            l = -1 / 0,
            d = 1 / 0;
        else {
            let {containerRect: h, contentRect: f} = this
              , p = E(r * n, Ft)
              , m = E(o * n, Ft)
              , {innerWidth: g, innerHeight: v} = h;
            if (h.width === p && (g = h.width),
            h.width === m && (v = h.height),
            e > g) {
                c = .5 * (e - g),
                a = -1 * c;
                let y = .5 * (f.right - f.left);
                a += y,
                c += y
            }
            if (r > g && e < g && (a -= .5 * (r - g),
            c -= .5 * (r - g)),
            i > v) {
                d = .5 * (i - v),
                l = -1 * d;
                let y = .5 * (f.bottom - f.top);
                l += y,
                d += y
            }
            o > v && i < v && (a -= .5 * (o - v),
            c -= .5 * (o - v))
        }
        return {
            x: {
                min: a,
                max: c
            },
            y: {
                min: l,
                max: d
            }
        }
    }
    getBounds() {
        const e = this.option("bounds");
        return e !== te ? e : this.calculateBounds()
    }
    updateControls() {
        const e = this
          , i = e.container
          , {panMode: n, contentRect: s, targetScale: r, minScale: o} = e;
        let a = o
          , l = e.option("click") || !1;
        l && (a = e.getNextScale(l));
        let c = e.canZoomIn()
          , d = e.canZoomOut()
          , u = n === sr && !!this.option("touch")
          , h = d && u;
        if (u && (E(r) < E(o) && !this.panOnlyZoomed && (h = !0),
        (E(s.width, 1) > E(s.fitWidth, 1) || E(s.height, 1) > E(s.fitHeight, 1)) && (h = !0)),
        E(s.width * r, 1) < E(s.fitWidth, 1) && (h = !1),
        n === ee && (h = !1),
        me(i, this.cn("isDraggable"), h),
        !this.option("zoom"))
            return;
        let f = c && E(a) > E(r)
          , p = !f && !h && d && E(a) < E(r);
        me(i, this.cn("canZoomIn"), f),
        me(i, this.cn("canZoomOut"), p);
        for (const m of i.querySelectorAll("[data-panzoom-action]")) {
            let g = !1
              , v = !1;
            switch (m.dataset.panzoomAction) {
            case "zoomIn":
                c ? g = !0 : v = !0;
                break;
            case "zoomOut":
                d ? g = !0 : v = !0;
                break;
            case "toggleZoom":
            case "iterateZoom":
                c || d ? g = !0 : v = !0;
                const y = m.querySelector("g");
                y && (y.style.display = c ? "" : "none")
            }
            g ? (m.removeAttribute("disabled"),
            m.removeAttribute("tabindex")) : v && (m.setAttribute("disabled", ""),
            m.setAttribute("tabindex", "-1"))
        }
    }
    panTo({x: e=this.target.e, y: i=this.target.f, scale: n=this.targetScale, friction: s=this.option("friction"), angle: r=0, originX: o=0, originY: a=0, flipX: l=!1, flipY: c=!1, ignoreBounds: d=!1}) {
        this.state !== D.Destroy && this.applyChange({
            panX: e - this.target.e,
            panY: i - this.target.f,
            scale: n / this.targetScale,
            angle: r,
            originX: o,
            originY: a,
            friction: s,
            flipX: l,
            flipY: c,
            ignoreBounds: d
        })
    }
    applyChange({panX: e=0, panY: i=0, scale: n=1, angle: s=0, originX: r=-this.current.e, originY: o=-this.current.f, friction: a=this.option("friction"), flipX: l=!1, flipY: c=!1, ignoreBounds: d=!1, bounce: u=this.option("bounce")}) {
        const h = this.state;
        if (h === D.Destroy)
            return;
        this.rAF && (cancelAnimationFrame(this.rAF),
        this.rAF = null),
        this.friction = a || 0,
        this.ignoreBounds = d;
        const {current: f} = this
          , p = f.e
          , m = f.f
          , g = this.getMatrix(this.target);
        let v = new DOMMatrix().translate(p, m).translate(r, o).translate(e, i);
        if (this.option("zoom")) {
            if (!d) {
                const y = this.targetScale
                  , b = this.minScale
                  , x = this.maxScale;
                y * n < b && (n = b / y),
                y * n > x && (n = x / y)
            }
            v = v.scale(n)
        }
        v = v.translate(-r, -o).translate(-p, -m).multiply(g),
        s && (v = v.rotate(s)),
        l && (v = v.scale(-1, 1)),
        c && (v = v.scale(1, -1));
        for (const y of ve)
            y !== "e" && y !== "f" && (v[y] > this.minScale + 1e-5 || v[y] < this.minScale - 1e-5) ? this.target[y] = v[y] : this.target[y] = E(v[y], Ft);
        (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === ee || u === !1) && !d && this.clampTargetBounds(),
        h === D.Init ? this.animate() : this.isResting || (this.state = D.Panning,
        this.requestTick())
    }
    stop(e=!1) {
        if (this.state === D.Init || this.state === D.Destroy)
            return;
        const i = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF),
        this.rAF = null),
        this.isBouncingX = !1,
        this.isBouncingY = !1;
        for (const n of ve)
            this.velocity[n] = 0,
            e === "current" ? this.current[n] = this.target[n] : e === "target" && (this.target[n] = this.current[n]);
        this.setTransform(),
        z(this.container, "is-scaling"),
        z(this.container, "is-animating"),
        this.isTicking = !1,
        this.state = D.Ready,
        i && (this.emit("endAnimation"),
        this.updateControls())
    }
    requestTick() {
        this.isTicking || (this.emit("startAnimation"),
        this.updateControls(),
        _(this.container, "is-animating"),
        this.isScaling && _(this.container, "is-scaling")),
        this.isTicking = !0,
        this.rAF || (this.rAF = requestAnimationFrame( () => this.animate()))
    }
    panWithMouse(e, i=this.option("mouseMoveFriction")) {
        if (this.pmme = e,
        this.panMode !== ee || !e || E(this.targetScale) <= E(this.minScale))
            return;
        this.emit("mouseMove", e);
        const {container: n, containerRect: s, contentRect: r} = this
          , o = s.width
          , a = s.height
          , l = n.getBoundingClientRect()
          , c = (e.clientX || 0) - l.left
          , d = (e.clientY || 0) - l.top;
        let {contentWidth: u, contentHeight: h} = this.calculateContentDim(this.target);
        const f = this.option("mouseMoveFactor");
        f > 1 && (u !== o && (u *= f),
        h !== a && (h *= f));
        let p = .5 * (u - o) - c / o * 100 / 100 * (u - o);
        p += .5 * (r.right - r.left);
        let m = .5 * (h - a) - d / a * 100 / 100 * (h - a);
        m += .5 * (r.bottom - r.top),
        this.applyChange({
            panX: p - this.target.e,
            panY: m - this.target.f,
            friction: i
        })
    }
    zoomWithWheel(e) {
        if (this.state === D.Destroy || this.state === D.Init)
            return;
        const i = Date.now();
        if (i - this.pwt < 45)
            return void e.preventDefault();
        this.pwt = i;
        var n = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function(c, d) {
            return Math.abs(d) > Math.abs(c) ? d : c
        });
        const s = Math.max(-1, Math.min(1, n))
          , {targetScale: r, maxScale: o, minScale: a} = this;
        let l = r * (100 + 45 * s) / 100;
        E(l) < E(a) && E(r) <= E(a) ? (this.cwd += Math.abs(s),
        l = a) : E(l) > E(o) && E(r) >= E(o) ? (this.cwd += Math.abs(s),
        l = o) : (this.cwd = 0,
        l = Math.max(Math.min(l, o), a)),
        this.cwd > this.option("wheelLimit") || (e.preventDefault(),
        E(l) !== E(r) && this.zoomTo(l, {
            event: e
        }))
    }
    canZoomIn() {
        return this.option("zoom") && (E(this.contentRect.width, 1) < E(this.contentRect.fitWidth, 1) || E(this.targetScale) < E(this.maxScale))
    }
    canZoomOut() {
        return this.option("zoom") && E(this.targetScale) > E(this.minScale)
    }
    zoomIn(e=1.25, i) {
        this.zoomTo(this.targetScale * e, i)
    }
    zoomOut(e=.8, i) {
        this.zoomTo(this.targetScale * e, i)
    }
    zoomToFit(e) {
        this.zoomTo("fit", e)
    }
    zoomToCover(e) {
        this.zoomTo("cover", e)
    }
    zoomToFull(e) {
        this.zoomTo("full", e)
    }
    zoomToMax(e) {
        this.zoomTo("max", e)
    }
    toggleZoom(e) {
        this.zoomTo(this.getNextScale("toggleZoom"), e)
    }
    toggleMax(e) {
        this.zoomTo(this.getNextScale("toggleMax"), e)
    }
    toggleCover(e) {
        this.zoomTo(this.getNextScale("toggleCover"), e)
    }
    iterateZoom(e) {
        this.zoomTo("next", e)
    }
    zoomTo(e=1, {friction: i=te, originX: n=te, originY: s=te, event: r}={}) {
        if (this.isContentLoading || this.state === D.Destroy)
            return;
        const {targetScale: o, fullScale: a, maxScale: l, coverScale: c} = this;
        if (this.stop(),
        this.panMode === ee && (r = this.pmme || r),
        r || n === te || s === te) {
            const u = this.content.getBoundingClientRect()
              , h = this.container.getBoundingClientRect()
              , f = r ? r.clientX : h.left + .5 * h.width
              , p = r ? r.clientY : h.top + .5 * h.height;
            n = f - u.left - .5 * u.width,
            s = p - u.top - .5 * u.height
        }
        let d = 1;
        typeof e == "number" ? d = e : e === "full" ? d = a : e === "cover" ? d = c : e === "max" ? d = l : e === "fit" ? d = 1 : e === "next" && (d = this.getNextScale("iterateZoom")),
        d = d / o || 1,
        i = i === te ? d > 1 ? .15 : .25 : i,
        this.applyChange({
            scale: d,
            originX: n,
            originY: s,
            friction: i
        }),
        r && this.panMode === ee && this.panWithMouse(r, i)
    }
    rotateCCW() {
        this.applyChange({
            angle: -90
        })
    }
    rotateCW() {
        this.applyChange({
            angle: 90
        })
    }
    flipX() {
        this.applyChange({
            flipX: !0
        })
    }
    flipY() {
        this.applyChange({
            flipY: !0
        })
    }
    fitX() {
        this.stop("target");
        const {containerRect: e, contentRect: i, target: n} = this;
        this.applyChange({
            panX: .5 * e.width - (i.left + .5 * i.fitWidth) - n.e,
            panY: .5 * e.height - (i.top + .5 * i.fitHeight) - n.f,
            scale: e.width / i.fitWidth / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0
        })
    }
    fitY() {
        this.stop("target");
        const {containerRect: e, contentRect: i, target: n} = this;
        this.applyChange({
            panX: .5 * e.width - (i.left + .5 * i.fitWidth) - n.e,
            panY: .5 * e.innerHeight - (i.top + .5 * i.fitHeight) - n.f,
            scale: e.height / i.fitHeight / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0
        })
    }
    toggleFS() {
        const {container: e} = this
          , i = this.cn("inFullscreen")
          , n = this.cn("htmlHasFullscreen");
        e.classList.toggle(i);
        const s = e.classList.contains(i);
        s ? (document.documentElement.classList.add(n),
        document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(n),
        document.removeEventListener("keydown", this.onKeydown, !0)),
        this.updateMetrics(),
        this.emit(s ? "enterFS" : "exitFS")
    }
    getMatrix(e=this.current) {
        const {a: i, b: n, c: s, d: r, e: o, f: a} = e;
        return new DOMMatrix([i, n, s, r, o, a])
    }
    reset(e) {
        if (this.state !== D.Init && this.state !== D.Destroy) {
            this.stop("current");
            for (const i of ve)
                this.target[i] = Dt[i];
            this.target.a = this.minScale,
            this.target.d = this.minScale,
            this.clampTargetBounds(),
            this.isResting || (this.friction = e === void 0 ? this.option("friction") : e,
            this.state = D.Panning,
            this.requestTick())
        }
    }
    destroy() {
        this.stop(),
        this.state = D.Destroy,
        this.detachEvents(),
        this.detachObserver();
        const {container: e, content: i} = this
          , n = this.option("classes") || {};
        for (const s of Object.values(n))
            e.classList.remove(s + "");
        i && (i.removeEventListener("load", this.onLoad),
        i.removeEventListener("error", this.onError)),
        this.detachPlugins()
    }
}
Object.defineProperty(Ve, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: uh
}),
Object.defineProperty(Ve, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
});
const or = function(t, e) {
    let i = !0;
    return (...n) => {
        i && (i = !1,
        t(...n),
        setTimeout( () => {
            i = !0
        }
        , e))
    }
}
  , ar = (t, e) => {
    let i = [];
    return t.childNodes.forEach(n => {
        n.nodeType !== Node.ELEMENT_NODE || e && !n.matches(e) || i.push(n)
    }
    ),
    i
}
  , hh = {
    viewport: null,
    track: null,
    enabled: !0,
    slides: [],
    axis: "x",
    transition: "fade",
    preload: 1,
    slidesPerPage: "auto",
    initialPage: 0,
    friction: .12,
    Panzoom: {
        decelFriction: .12
    },
    center: !0,
    infinite: !0,
    fill: !0,
    dragFree: !1,
    adaptiveHeight: !1,
    direction: "ltr",
    classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        inTransition: "in-transition",
        isSelected: "is-selected"
    },
    l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d"
    }
};
var B;
(function(t) {
    t[t.Init = 0] = "Init",
    t[t.Ready = 1] = "Ready",
    t[t.Destroy = 2] = "Destroy"
}
)(B || (B = {}));
const Xi = t => {
    if (typeof t == "string" || t instanceof HTMLElement)
        t = {
            html: t
        };
    else {
        const e = t.thumb;
        e !== void 0 && (typeof e == "string" && (t.thumbSrc = e),
        e instanceof HTMLImageElement && (t.thumbEl = e,
        t.thumbElSrc = e.src,
        t.thumbSrc = e.src),
        delete t.thumb)
    }
    return Object.assign({
        html: "",
        el: null,
        isDom: !1,
        class: "",
        customClass: "",
        index: -1,
        dim: 0,
        gap: 0,
        pos: 0,
        transition: !1
    }, t)
}
  , ph = (t={}) => Object.assign({
    index: -1,
    slides: [],
    dim: 0,
    pos: -1
}, t);
class de extends di {
    constructor(e, i) {
        super(i),
        Object.defineProperty(this, "instance", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        })
    }
    attach() {}
    detach() {}
}
const mh = {
    classes: {
        list: "f-carousel__dots",
        isDynamic: "is-dynamic",
        hasDots: "has-dots",
        dot: "f-carousel__dot",
        isBeforePrev: "is-before-prev",
        isPrev: "is-prev",
        isCurrent: "is-current",
        isNext: "is-next",
        isAfterNext: "is-after-next"
    },
    dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
    dynamicFrom: 11,
    maxCount: 1 / 0,
    minCount: 2
};
class Ea extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "isDynamic", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "list", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        })
    }
    onRefresh() {
        this.refresh()
    }
    build() {
        let e = this.list;
        if (!e) {
            e = document.createElement("ul"),
            _(e, this.cn("list")),
            e.setAttribute("role", "tablist");
            const i = this.instance.container;
            i.appendChild(e),
            _(i, this.cn("hasDots")),
            this.list = e
        }
        return e
    }
    refresh() {
        var e;
        const i = this.instance.pages.length
          , n = Math.min(2, this.option("minCount"))
          , s = Math.max(2e3, this.option("maxCount"))
          , r = this.option("dynamicFrom");
        if (i < n || i > s)
            return void this.cleanup();
        const o = typeof r == "number" && i > 5 && i >= r
          , a = !this.list || this.isDynamic !== o || this.list.children.length !== i;
        a && this.cleanup();
        const l = this.build();
        if (me(l, this.cn("isDynamic"), !!o),
        a)
            for (let u = 0; u < i; u++)
                l.append(this.createItem(u));
        let c, d = 0;
        for (const u of [...l.children]) {
            const h = d === this.instance.page;
            h && (c = u),
            me(u, this.cn("isCurrent"), h),
            (e = u.children[0]) === null || e === void 0 || e.setAttribute("aria-selected", h ? "true" : "false");
            for (const f of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
                z(u, this.cn(f));
            d++
        }
        if (c = c || l.firstChild,
        o && c) {
            const u = c.previousElementSibling
              , h = u && u.previousElementSibling;
            _(u, this.cn("isPrev")),
            _(h, this.cn("isBeforePrev"));
            const f = c.nextElementSibling
              , p = f && f.nextElementSibling;
            _(f, this.cn("isNext")),
            _(p, this.cn("isAfterNext"))
        }
        this.isDynamic = o
    }
    createItem(e=0) {
        var i;
        const n = document.createElement("li");
        n.setAttribute("role", "presentation");
        const s = pe(this.instance.localize(this.option("dotTpl"), [["%d", e + 1]]).replace(/\%i/g, e + ""));
        return n.appendChild(s),
        (i = n.children[0]) === null || i === void 0 || i.setAttribute("role", "tab"),
        n
    }
    cleanup() {
        this.list && (this.list.remove(),
        this.list = null),
        this.isDynamic = !1,
        z(this.instance.container, this.cn("hasDots"))
    }
    attach() {
        this.instance.on(["refresh", "change"], this.onRefresh)
    }
    detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
        this.cleanup()
    }
}
Object.defineProperty(Ea, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: mh
});
const Nt = "disabled"
  , jt = "next"
  , lr = "prev";
class Ta extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "prev", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "next", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "isDom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        })
    }
    onRefresh() {
        const e = this.instance
          , i = e.pages.length
          , n = e.page;
        if (i < 2)
            return void this.cleanup();
        this.build();
        let s = this.prev
          , r = this.next;
        s && r && (s.removeAttribute(Nt),
        r.removeAttribute(Nt),
        e.isInfinite || (n <= 0 && s.setAttribute(Nt, ""),
        n >= i - 1 && r.setAttribute(Nt, "")))
    }
    addBtn(e) {
        var i;
        const n = this.instance
          , s = document.createElement("button");
        s.setAttribute("tabindex", "0"),
        s.setAttribute("title", n.localize(`{{${e.toUpperCase()}}}`)),
        _(s, this.cn("button") + " " + this.cn(e === jt ? "isNext" : "isPrev"));
        const r = n.isRTL ? e === jt ? lr : jt : e;
        var o;
        return s.innerHTML = n.localize(this.option(`${r}Tpl`)),
        s.dataset[`carousel${o = e,
        o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : ""}`] = "true",
        (i = this.container) === null || i === void 0 || i.appendChild(s),
        s
    }
    build() {
        const e = this.instance.container
          , i = this.cn("container");
        let {container: n, prev: s, next: r} = this;
        n || (n = e.querySelector("." + i),
        this.isDom = !!n),
        n || (n = document.createElement("div"),
        _(n, i),
        e.appendChild(n)),
        this.container = n,
        r || (r = n.querySelector("[data-carousel-next]")),
        r || (r = this.addBtn(jt)),
        this.next = r,
        s || (s = n.querySelector("[data-carousel-prev]")),
        s || (s = this.addBtn(lr)),
        this.prev = s
    }
    cleanup() {
        this.isDom || (this.prev && this.prev.remove(),
        this.next && this.next.remove(),
        this.container && this.container.remove()),
        this.prev = null,
        this.next = null,
        this.container = null,
        this.isDom = !1
    }
    attach() {
        this.instance.on(["refresh", "change"], this.onRefresh)
    }
    detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
        this.cleanup()
    }
}
Object.defineProperty(Ta, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        classes: {
            container: "f-carousel__nav",
            button: "f-button",
            isNext: "is-next",
            isPrev: "is-prev"
        },
        nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
    }
});
class Ca extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "selectedIndex", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "nav", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        })
    }
    addAsTargetFor(e) {
        this.target = this.instance,
        this.nav = e,
        this.attachEvents()
    }
    addAsNavFor(e) {
        this.nav = this.instance,
        this.target = e,
        this.attachEvents()
    }
    attachEvents() {
        const {nav: e, target: i} = this;
        e && i && (e.options.initialSlide = i.options.initialPage,
        e.state === B.Ready ? this.onNavReady(e) : e.on("ready", this.onNavReady),
        i.state === B.Ready ? this.onTargetReady(i) : i.on("ready", this.onTargetReady))
    }
    onNavReady(e) {
        e.on("createSlide", this.onNavCreateSlide),
        e.on("Panzoom.click", this.onNavClick),
        e.on("Panzoom.touchEnd", this.onNavTouch),
        this.onTargetChange()
    }
    onTargetReady(e) {
        e.on("change", this.onTargetChange),
        e.on("Panzoom.refresh", this.onTargetChange),
        this.onTargetChange()
    }
    onNavClick(e, i, n) {
        this.onNavTouch(e, e.panzoom, n)
    }
    onNavTouch(e, i, n) {
        var s, r;
        if (Math.abs(i.dragOffset.x) > 3 || Math.abs(i.dragOffset.y) > 3)
            return;
        const o = n.target
          , {nav: a, target: l} = this;
        if (!a || !l || !o)
            return;
        const c = o.closest("[data-index]");
        if (n.stopPropagation(),
        n.preventDefault(),
        !c)
            return;
        const d = parseInt(c.dataset.index || "", 10) || 0
          , u = l.getPageForSlide(d)
          , h = a.getPageForSlide(d);
        a.slideTo(h),
        l.slideTo(u, {
            friction: ((r = (s = this.nav) === null || s === void 0 ? void 0 : s.plugins) === null || r === void 0 ? void 0 : r.Sync.option("friction")) || 0
        }),
        this.markSelectedSlide(d)
    }
    onNavCreateSlide(e, i) {
        i.index === this.selectedIndex && this.markSelectedSlide(i.index)
    }
    onTargetChange() {
        var e, i;
        const {target: n, nav: s} = this;
        if (!n || !s || s.state !== B.Ready || n.state !== B.Ready)
            return;
        const r = (i = (e = n.pages[n.page]) === null || e === void 0 ? void 0 : e.slides[0]) === null || i === void 0 ? void 0 : i.index
          , o = s.getPageForSlide(r);
        this.markSelectedSlide(r),
        s.slideTo(o, s.prevPage === null && n.prevPage === null ? {
            friction: 0
        } : void 0)
    }
    markSelectedSlide(e) {
        const i = this.nav;
        i && i.state === B.Ready && (this.selectedIndex = e,
        [...i.slides].map(n => {
            n.el && n.el.classList[n.index === e ? "add" : "remove"]("is-nav-selected")
        }
        ))
    }
    attach() {
        const e = this;
        let i = e.options.target
          , n = e.options.nav;
        i ? e.addAsNavFor(i) : n && e.addAsTargetFor(n)
    }
    detach() {
        const e = this
          , i = e.nav
          , n = e.target;
        i && (i.off("ready", e.onNavReady),
        i.off("createSlide", e.onNavCreateSlide),
        i.off("Panzoom.click", e.onNavClick),
        i.off("Panzoom.touchEnd", e.onNavTouch)),
        e.nav = null,
        n && (n.off("ready", e.onTargetReady),
        n.off("refresh", e.onTargetChange),
        n.off("change", e.onTargetChange)),
        e.target = null
    }
}
Object.defineProperty(Ca, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        friction: .35
    }
});
const gh = {
    Navigation: Ta,
    Dots: Ea,
    Sync: Ca
}
  , Bt = "animationend"
  , cr = "isSelected"
  , $t = "slide";
class $e extends ms {
    get axis() {
        return this.isHorizontal ? "e" : "f"
    }
    get isEnabled() {
        return this.state === B.Ready
    }
    get isInfinite() {
        let e = !1;
        const {contentDim: i, viewportDim: n, pages: s, slides: r} = this
          , o = r[0];
        return s.length >= 2 && o && i + o.dim >= n && (e = this.option("infinite")),
        e
    }
    get isRTL() {
        return this.option("direction") === "rtl"
    }
    get isHorizontal() {
        return this.option("axis") === "x"
    }
    constructor(e, i={}, n={}) {
        if (super(),
        Object.defineProperty(this, "bp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ""
        }),
        Object.defineProperty(this, "lp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "userOptions", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }),
        Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }),
        Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: B.Init
        }),
        Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "prevPage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "viewport", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "slides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }),
        Object.defineProperty(this, "pages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }),
        Object.defineProperty(this, "panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "inTransition", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Set
        }),
        Object.defineProperty(this, "contentDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "viewportDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        typeof e == "string" && (e = document.querySelector(e)),
        !e || !U(e))
            throw new Error("No Element found");
        this.container = e,
        this.slideNext = or(this.slideNext.bind(this), 150),
        this.slidePrev = or(this.slidePrev.bind(this), 150),
        this.userOptions = i,
        this.userPlugins = n,
        queueMicrotask( () => {
            this.processOptions()
        }
        )
    }
    processOptions() {
        var e, i;
        const n = X({}, $e.defaults, this.userOptions);
        let s = "";
        const r = n.breakpoints;
        if (r && Fn(r))
            for (const [o,a] of Object.entries(r))
                window.matchMedia(o).matches && Fn(a) && (s += o,
                X(n, a));
        s === this.bp && this.state !== B.Init || (this.bp = s,
        this.state === B.Ready && (n.initialSlide = ((i = (e = this.pages[this.page]) === null || e === void 0 ? void 0 : e.slides[0]) === null || i === void 0 ? void 0 : i.index) || 0),
        this.state !== B.Init && this.destroy(),
        super.setOptions(n),
        this.option("enabled") === !1 ? this.attachEvents() : setTimeout( () => {
            this.init()
        }
        , 0))
    }
    init() {
        this.state = B.Init,
        this.emit("init"),
        this.attachPlugins(Object.assign(Object.assign({}, $e.Plugins), this.userPlugins)),
        this.emit("attachPlugins"),
        this.initLayout(),
        this.initSlides(),
        this.updateMetrics(),
        this.setInitialPosition(),
        this.initPanzoom(),
        this.attachEvents(),
        this.state = B.Ready,
        this.emit("ready")
    }
    initLayout() {
        const {container: e} = this
          , i = this.option("classes");
        _(e, this.cn("container")),
        me(e, i.isLTR, !this.isRTL),
        me(e, i.isRTL, this.isRTL),
        me(e, i.isVertical, !this.isHorizontal),
        me(e, i.isHorizontal, this.isHorizontal);
        let n = this.option("viewport") || e.querySelector(`.${i.viewport}`);
        n || (n = document.createElement("div"),
        _(n, i.viewport),
        n.append(...ar(e, `.${i.slide}`)),
        e.prepend(n)),
        n.addEventListener("scroll", this.onScroll);
        let s = this.option("track") || e.querySelector(`.${i.track}`);
        s || (s = document.createElement("div"),
        _(s, i.track),
        s.append(...Array.from(n.childNodes))),
        s.setAttribute("aria-live", "polite"),
        n.contains(s) || n.prepend(s),
        this.viewport = n,
        this.track = s,
        this.emit("initLayout")
    }
    initSlides() {
        const {track: e} = this;
        if (!e)
            return;
        const i = [...this.slides]
          , n = [];
        [...ar(e, `.${this.cn($t)}`)].forEach(s => {
            if (U(s)) {
                const r = Xi({
                    el: s,
                    isDom: !0,
                    index: this.slides.length
                });
                n.push(r)
            }
        }
        );
        for (let s of [...this.option("slides", []) || [], ...i])
            n.push(Xi(s));
        this.slides = n;
        for (let s = 0; s < this.slides.length; s++)
            this.slides[s].index = s;
        for (const s of n)
            this.emit("beforeInitSlide", s, s.index),
            this.emit("initSlide", s, s.index);
        this.emit("initSlides")
    }
    setInitialPage() {
        const e = this.option("initialSlide");
        this.page = typeof e == "number" ? this.getPageForSlide(e) : parseInt(this.option("initialPage", 0) + "", 10) || 0
    }
    setInitialPosition() {
        const {track: e, pages: i, isHorizontal: n} = this;
        if (!e || !i.length)
            return;
        let s = this.page;
        i[s] || (this.page = s = 0);
        const r = (i[s].pos || 0) * (this.isRTL && n ? 1 : -1)
          , o = n ? `${r}px` : "0"
          , a = n ? "0" : `${r}px`;
        e.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`,
        this.option("adaptiveHeight") && this.setViewportHeight()
    }
    initPanzoom() {
        this.panzoom && (this.panzoom.destroy(),
        this.panzoom = null);
        const e = this.option("Panzoom") || {};
        this.panzoom = new Ve(this.viewport,X({}, {
            content: this.track,
            zoom: !1,
            panOnlyZoomed: !1,
            lockAxis: this.isHorizontal ? "x" : "y",
            infinite: this.isInfinite,
            click: !1,
            dblClick: !1,
            touch: i => !(this.pages.length < 2 && !i.options.infinite),
            bounds: () => this.getBounds(),
            maxVelocity: i => Math.abs(i.target[this.axis] - i.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
        }, e)),
        this.panzoom.on("*", (i, n, ...s) => {
            this.emit(`Panzoom.${n}`, i, ...s)
        }
        ),
        this.panzoom.on("decel", this.onDecel),
        this.panzoom.on("refresh", this.onRefresh),
        this.panzoom.on("beforeTransform", this.onBeforeTransform),
        this.panzoom.on("endAnimation", this.onEndAnimation)
    }
    attachEvents() {
        const e = this.container;
        e && (e.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }),
        e.addEventListener("slideTo", this.onSlideTo)),
        window.addEventListener("resize", this.onResize)
    }
    createPages() {
        let e = [];
        const {contentDim: i, viewportDim: n} = this;
        let s = this.option("slidesPerPage");
        s = (s === "auto" || i <= n) && this.option("fill") !== !1 ? 1 / 0 : parseFloat(s + "");
        let r = 0
          , o = 0
          , a = 0;
        for (const l of this.slides)
            (!e.length || o + l.dim - n > .05 || a >= s) && (e.push(ph()),
            r = e.length - 1,
            o = 0,
            a = 0),
            e[r].slides.push(l),
            o += l.dim + l.gap,
            a++;
        return e
    }
    processPages() {
        const e = this.pages
          , {contentDim: i, viewportDim: n, isInfinite: s} = this
          , r = this.option("center")
          , o = this.option("fill")
          , a = o && r && i > n && !s;
        if (e.forEach( (d, u) => {
            var h;
            d.index = u,
            d.pos = ((h = d.slides[0]) === null || h === void 0 ? void 0 : h.pos) || 0,
            d.dim = 0;
            for (const [f,p] of d.slides.entries())
                d.dim += p.dim,
                f < d.slides.length - 1 && (d.dim += p.gap);
            a && d.pos + .5 * d.dim < .5 * n ? d.pos = 0 : a && d.pos + .5 * d.dim >= i - .5 * n ? d.pos = i - n : r && (d.pos += -.5 * (n - d.dim))
        }
        ),
        e.forEach(d => {
            o && !s && i > n && (d.pos = Math.max(d.pos, 0),
            d.pos = Math.min(d.pos, i - n)),
            d.pos = E(d.pos, 1e3),
            d.dim = E(d.dim, 1e3),
            Math.abs(d.pos) <= .1 && (d.pos = 0)
        }
        ),
        s)
            return e;
        const l = [];
        let c;
        return e.forEach(d => {
            const u = Object.assign({}, d);
            c && u.pos === c.pos ? (c.dim += u.dim,
            c.slides = [...c.slides, ...u.slides]) : (u.index = l.length,
            c = u,
            l.push(u))
        }
        ),
        l
    }
    getPageFromIndex(e=0) {
        const i = this.pages.length;
        let n;
        return e = parseInt((e || 0).toString()) || 0,
        n = this.isInfinite ? (e % i + i) % i : Math.max(Math.min(e, i - 1), 0),
        n
    }
    getSlideMetrics(e) {
        var i, n;
        const s = this.isHorizontal ? "width" : "height";
        let r = 0
          , o = 0
          , a = e.el;
        const l = !(!a || a.parentNode);
        if (a ? r = parseFloat(a.dataset[s] || "") || 0 : (a = document.createElement("div"),
        a.style.visibility = "hidden",
        (this.track || document.body).prepend(a)),
        _(a, this.cn($t) + " " + e.class + " " + e.customClass),
        r)
            a.style[s] = `${r}px`,
            a.style[s === "width" ? "height" : "width"] = "";
        else {
            l && (this.track || document.body).prepend(a),
            r = a.getBoundingClientRect()[s] * Math.max(1, ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.scale) || 1);
            let d = a[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
            d - 1 > r && (r = d)
        }
        const c = getComputedStyle(a);
        return c.boxSizing === "content-box" && (this.isHorizontal ? (r += parseFloat(c.paddingLeft) || 0,
        r += parseFloat(c.paddingRight) || 0) : (r += parseFloat(c.paddingTop) || 0,
        r += parseFloat(c.paddingBottom) || 0)),
        o = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0,
        l ? (n = a.parentElement) === null || n === void 0 || n.removeChild(a) : e.el || a.remove(),
        {
            dim: E(r, 1e3),
            gap: E(o, 1e3)
        }
    }
    getBounds() {
        const {isInfinite: e, isRTL: i, isHorizontal: n, pages: s} = this;
        let r = {
            min: 0,
            max: 0
        };
        if (e)
            r = {
                min: -1 / 0,
                max: 1 / 0
            };
        else if (s.length) {
            const o = s[0].pos
              , a = s[s.length - 1].pos;
            r = i && n ? {
                min: o,
                max: a
            } : {
                min: -1 * a,
                max: -1 * o
            }
        }
        return {
            x: n ? r : {
                min: 0,
                max: 0
            },
            y: n ? {
                min: 0,
                max: 0
            } : r
        }
    }
    repositionSlides() {
        let e, {isHorizontal: i, isRTL: n, isInfinite: s, viewport: r, viewportDim: o, contentDim: a, page: l, pages: c, slides: d, panzoom: u} = this, h = 0, f = 0, p = 0, m = 0;
        u ? m = -1 * u.current[this.axis] : c[l] && (m = c[l].pos || 0),
        e = i ? n ? "right" : "left" : "top",
        n && i && (m *= -1);
        for (const b of d) {
            const x = b.el;
            x ? (e === "top" ? (x.style.right = "",
            x.style.left = "") : x.style.top = "",
            b.index !== h ? x.style[e] = f === 0 ? "" : `${E(f, 1e3)}px` : x.style[e] = "",
            p += b.dim + b.gap,
            h++) : f += b.dim + b.gap
        }
        if (s && p && r) {
            let b = getComputedStyle(r)
              , x = "padding"
              , S = i ? "Right" : "Bottom"
              , T = parseFloat(b[x + (i ? "Left" : "Top")]);
            m -= T,
            o += T,
            o += parseFloat(b[x + S]);
            for (const O of d)
                O.el && (E(O.pos) < E(o) && E(O.pos + O.dim + O.gap) < E(m) && E(m) > E(a - o) && (O.el.style[e] = `${E(f + p, 1e3)}px`),
                E(O.pos + O.gap) >= E(a - o) && E(O.pos) > E(m + o) && E(m) < E(o) && (O.el.style[e] = `-${E(p, 1e3)}px`))
        }
        let g, v, y = [...this.inTransition];
        if (y.length > 1 && (g = c[y[0]],
        v = c[y[1]]),
        g && v) {
            let b = 0;
            for (const x of d)
                x.el ? this.inTransition.has(x.index) && g.slides.indexOf(x) < 0 && (x.el.style[e] = `${E(b + (g.pos - v.pos), 1e3)}px`) : b += x.dim + x.gap
        }
    }
    createSlideEl(e) {
        const {track: i, slides: n} = this;
        if (!i || !e || e.el && e.el.parentNode)
            return;
        const s = e.el || document.createElement("div");
        _(s, this.cn($t)),
        _(s, e.class),
        _(s, e.customClass);
        const r = e.html;
        r && (r instanceof HTMLElement ? s.appendChild(r) : s.innerHTML = e.html + "");
        const o = [];
        n.forEach( (d, u) => {
            d.el && o.push(u)
        }
        );
        const a = e.index;
        let l = null;
        o.length && (l = n[o.reduce( (d, u) => Math.abs(u - a) < Math.abs(d - a) ? u : d)]);
        const c = l && l.el && l.el.parentNode ? l.index < e.index ? l.el.nextSibling : l.el : null;
        i.insertBefore(s, i.contains(c) ? c : null),
        e.el = s,
        this.emit("createSlide", e)
    }
    removeSlideEl(e, i=!1) {
        const n = e == null ? void 0 : e.el;
        if (!n || !n.parentNode)
            return;
        const s = this.cn(cr);
        if (n.classList.contains(s) && (z(n, s),
        this.emit("unselectSlide", e)),
        e.isDom && !i)
            return n.removeAttribute("aria-hidden"),
            n.removeAttribute("data-index"),
            void (n.style.left = "");
        this.emit("removeSlide", e);
        const r = new CustomEvent(Bt);
        n.dispatchEvent(r),
        e.el && (e.el.remove(),
        e.el = null)
    }
    transitionTo(e=0, i=this.option("transition")) {
        var n, s, r, o;
        if (!i)
            return !1;
        const a = this.page
          , {pages: l, panzoom: c} = this;
        e = parseInt((e || 0).toString()) || 0;
        const d = this.getPageFromIndex(e);
        if (!c || !l[d] || l.length < 2 || Math.abs((((s = (n = l[a]) === null || n === void 0 ? void 0 : n.slides[0]) === null || s === void 0 ? void 0 : s.dim) || 0) - this.viewportDim) > 1)
            return !1;
        let u = e > a ? 1 : -1;
        this.isInfinite && (a === 0 && e === l.length - 1 && (u = -1),
        a === l.length - 1 && e === 0 && (u = 1));
        const h = l[d].pos * (this.isRTL ? 1 : -1);
        if (a === d && Math.abs(h - c.target[this.axis]) < 1)
            return !1;
        this.clearTransitions();
        const f = c.isResting;
        _(this.container, this.cn("inTransition"));
        const p = ((r = l[a]) === null || r === void 0 ? void 0 : r.slides[0]) || null
          , m = ((o = l[d]) === null || o === void 0 ? void 0 : o.slides[0]) || null;
        this.inTransition.add(m.index),
        this.createSlideEl(m);
        let g = p.el
          , v = m.el;
        f || i === $t || (i = "fadeFast",
        g = null);
        const y = this.isRTL ? "next" : "prev"
          , b = this.isRTL ? "prev" : "next";
        return g && (this.inTransition.add(p.index),
        p.transition = i,
        g.addEventListener(Bt, this.onAnimationEnd),
        g.classList.add(`f-${i}Out`, `to-${u > 0 ? b : y}`)),
        v && (m.transition = i,
        v.addEventListener(Bt, this.onAnimationEnd),
        v.classList.add(`f-${i}In`, `from-${u > 0 ? y : b}`)),
        c.current[this.axis] = h,
        c.target[this.axis] = h,
        c.requestTick(),
        this.onChange(d),
        !0
    }
    manageSlideVisiblity() {
        const e = new Set
          , i = new Set
          , n = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
        for (const s of this.slides)
            n.has(s) ? e.add(s) : i.add(s);
        for (const s of this.inTransition)
            e.add(this.slides[s]);
        for (const s of e)
            this.createSlideEl(s),
            this.lazyLoadSlide(s);
        for (const s of i)
            e.has(s) || this.removeSlideEl(s);
        this.markSelectedSlides(),
        this.repositionSlides()
    }
    markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides)
            return;
        const e = "aria-hidden";
        let i = this.cn(cr);
        if (i)
            for (const n of this.slides) {
                const s = n.el;
                s && (s.dataset.index = `${n.index}`,
                s.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(n) ? s.removeAttribute(e) : s.setAttribute(e, "true") : this.pages[this.page].slides.includes(n) ? (s.classList.contains(i) || (_(s, i),
                this.emit("selectSlide", n)),
                s.removeAttribute(e)) : (s.classList.contains(i) && (z(s, i),
                this.emit("unselectSlide", n)),
                s.setAttribute(e, "true")))
            }
    }
    flipInfiniteTrack() {
        const {axis: e, isHorizontal: i, isInfinite: n, isRTL: s, viewportDim: r, contentDim: o} = this
          , a = this.panzoom;
        if (!a || !n)
            return;
        let l = a.current[e]
          , c = a.target[e] - l
          , d = 0
          , u = .5 * r;
        s && i ? (l < -u && (d = -1,
        l += o),
        l > o - u && (d = 1,
        l -= o)) : (l > u && (d = 1,
        l -= o),
        l < -o + u && (d = -1,
        l += o)),
        d && (a.current[e] = l,
        a.target[e] = l + c)
    }
    lazyLoadImg(e, i) {
        const n = this
          , s = "f-fadeIn"
          , r = "is-preloading";
        let o = !1
          , a = null;
        const l = () => {
            o || (o = !0,
            a && (a.remove(),
            a = null),
            z(i, r),
            i.complete && (_(i, s),
            setTimeout( () => {
                z(i, s)
            }
            , 350)),
            this.option("adaptiveHeight") && e.el && this.pages[this.page].slides.indexOf(e) > -1 && (n.updateMetrics(),
            n.setViewportHeight()),
            this.emit("load", e))
        }
        ;
        _(i, r),
        i.src = i.dataset.lazySrcset || i.dataset.lazySrc || "",
        delete i.dataset.lazySrc,
        delete i.dataset.lazySrcset,
        i.addEventListener("error", () => {
            l()
        }
        ),
        i.addEventListener("load", () => {
            l()
        }
        ),
        setTimeout( () => {
            const c = i.parentNode;
            c && e.el && (i.complete ? l() : o || (a = pe(gs),
            c.insertBefore(a, i)))
        }
        , 300)
    }
    lazyLoadSlide(e) {
        const i = e && e.el;
        if (!i)
            return;
        const n = new Set;
        let s = Array.from(i.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
        i.dataset.lazySrc && s.push(i),
        s.map(r => {
            r instanceof HTMLImageElement ? n.add(r) : r instanceof HTMLElement && r.dataset.lazySrc && (r.style.backgroundImage = `url('${r.dataset.lazySrc}')`,
            delete r.dataset.lazySrc)
        }
        );
        for (const r of n)
            this.lazyLoadImg(e, r)
    }
    onAnimationEnd(e) {
        var i;
        const n = e.target
          , s = n ? parseInt(n.dataset.index || "", 10) || 0 : -1
          , r = this.slides[s]
          , o = e.animationName;
        if (!n || !r || !o)
            return;
        const a = !!this.inTransition.has(s) && r.transition;
        a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(s),
        this.inTransition.size || this.clearTransitions(),
        s === this.page && (!((i = this.panzoom) === null || i === void 0) && i.isResting) && this.emit("settle")
    }
    onDecel(e, i=0, n=0, s=0, r=0) {
        if (this.option("dragFree"))
            return void this.setPageFromPosition();
        const {isRTL: o, isHorizontal: a, axis: l, pages: c} = this
          , d = c.length
          , u = Math.abs(Math.atan2(n, i) / (Math.PI / 180));
        let h = 0;
        if (h = u > 45 && u < 135 ? a ? 0 : n : a ? i : 0,
        !d)
            return;
        let f = this.page
          , p = o && a ? 1 : -1;
        const m = e.current[l] * p;
        let {pageIndex: g} = this.getPageFromPosition(m);
        Math.abs(h) > 5 ? (c[f].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (f = g),
        f = o && a ? h < 0 ? f - 1 : f + 1 : h < 0 ? f + 1 : f - 1) : f = s === 0 && r === 0 ? f : g,
        this.slideTo(f, {
            transition: !1,
            friction: e.option("decelFriction")
        })
    }
    onClick(e) {
        const i = e.target
          , n = i && U(i) ? i.dataset : null;
        let s, r;
        n && (n.carouselPage !== void 0 ? (r = "slideTo",
        s = n.carouselPage) : n.carouselNext !== void 0 ? r = "slideNext" : n.carouselPrev !== void 0 && (r = "slidePrev")),
        r ? (e.preventDefault(),
        e.stopPropagation(),
        i && !i.hasAttribute("disabled") && this[r](s)) : this.emit("click", e)
    }
    onSlideTo(e) {
        const i = e.detail || 0;
        this.slideTo(this.getPageForSlide(i), {
            friction: 0
        })
    }
    onChange(e, i=0) {
        const n = this.page;
        this.prevPage = n,
        this.page = e,
        this.option("adaptiveHeight") && this.setViewportHeight(),
        e !== n && (this.markSelectedSlides(),
        this.emit("change", e, n, i))
    }
    onRefresh() {
        let e = this.contentDim
          , i = this.viewportDim;
        this.updateMetrics(),
        this.contentDim === e && this.viewportDim === i || this.slideTo(this.page, {
            friction: 0,
            transition: !1
        })
    }
    onScroll() {
        var e;
        (e = this.viewport) === null || e === void 0 || e.scroll(0, 0)
    }
    onResize() {
        this.option("breakpoints") && this.processOptions()
    }
    onBeforeTransform(e) {
        this.lp !== e.current[this.axis] && (this.flipInfiniteTrack(),
        this.manageSlideVisiblity()),
        this.lp = e.current.e
    }
    onEndAnimation() {
        this.inTransition.size || this.emit("settle")
    }
    reInit(e=null, i=null) {
        this.destroy(),
        this.state = B.Init,
        this.prevPage = null,
        this.userOptions = e || this.userOptions,
        this.userPlugins = i || this.userPlugins,
        this.processOptions()
    }
    slideTo(e=0, {friction: i=this.option("friction"), transition: n=this.option("transition")}={}) {
        if (this.state === B.Destroy)
            return;
        e = parseInt((e || 0).toString()) || 0;
        const s = this.getPageFromIndex(e)
          , {axis: r, isHorizontal: o, isRTL: a, pages: l, panzoom: c} = this
          , d = l.length
          , u = a && o ? 1 : -1;
        if (!c || !d)
            return;
        if (this.page !== s) {
            const f = new Event("beforeChange",{
                bubbles: !0,
                cancelable: !0
            });
            if (this.emit("beforeChange", f, e),
            f.defaultPrevented)
                return
        }
        if (this.transitionTo(e, n))
            return;
        let h = l[s].pos;
        if (this.isInfinite) {
            const f = this.contentDim
              , p = c.target[r] * u;
            d === 2 ? h += f * Math.floor(parseFloat(e + "") / 2) : h = [h, h - f, h + f].reduce(function(m, g) {
                return Math.abs(g - p) < Math.abs(m - p) ? g : m
            })
        }
        h *= u,
        Math.abs(c.target[r] - h) < 1 || (c.panTo({
            x: o ? h : 0,
            y: o ? 0 : h,
            friction: i
        }),
        this.onChange(s))
    }
    slideToClosest(e) {
        if (this.panzoom) {
            const {pageIndex: i} = this.getPageFromPosition();
            this.slideTo(i, e)
        }
    }
    slideNext() {
        this.slideTo(this.page + 1)
    }
    slidePrev() {
        this.slideTo(this.page - 1)
    }
    clearTransitions() {
        this.inTransition.clear(),
        z(this.container, this.cn("inTransition"));
        const e = ["to-prev", "to-next", "from-prev", "from-next"];
        for (const i of this.slides) {
            const n = i.el;
            if (n) {
                n.removeEventListener(Bt, this.onAnimationEnd),
                n.classList.remove(...e);
                const s = i.transition;
                s && n.classList.remove(`f-${s}Out`, `f-${s}In`)
            }
        }
        this.manageSlideVisiblity()
    }
    addSlide(e, i) {
        var n, s, r, o;
        const a = this.panzoom
          , l = ((n = this.pages[this.page]) === null || n === void 0 ? void 0 : n.pos) || 0
          , c = ((s = this.pages[this.page]) === null || s === void 0 ? void 0 : s.dim) || 0
          , d = this.contentDim < this.viewportDim;
        let u = Array.isArray(i) ? i : [i];
        const h = [];
        for (const f of u)
            h.push(Xi(f));
        this.slides.splice(e, 0, ...h);
        for (let f = 0; f < this.slides.length; f++)
            this.slides[f].index = f;
        for (const f of h)
            this.emit("beforeInitSlide", f, f.index);
        if (this.page >= e && (this.page += h.length),
        this.updateMetrics(),
        a) {
            const f = ((r = this.pages[this.page]) === null || r === void 0 ? void 0 : r.pos) || 0
              , p = ((o = this.pages[this.page]) === null || o === void 0 ? void 0 : o.dim) || 0
              , m = this.pages.length || 1
              , g = this.isRTL ? c - p : p - c
              , v = this.isRTL ? l - f : f - l;
            d && m === 1 ? (e <= this.page && (a.current[this.axis] -= g,
            a.target[this.axis] -= g),
            a.panTo({
                [this.isHorizontal ? "x" : "y"]: -1 * f
            })) : v && e <= this.page && (a.target[this.axis] -= v,
            a.current[this.axis] -= v,
            a.requestTick())
        }
        for (const f of h)
            this.emit("initSlide", f, f.index)
    }
    prependSlide(e) {
        this.addSlide(0, e)
    }
    appendSlide(e) {
        this.addSlide(this.slides.length, e)
    }
    removeSlide(e) {
        const i = this.slides.length;
        e = (e % i + i) % i;
        const n = this.slides[e];
        if (n) {
            this.removeSlideEl(n, !0),
            this.slides.splice(e, 1);
            for (let s = 0; s < this.slides.length; s++)
                this.slides[s].index = s;
            this.updateMetrics(),
            this.slideTo(this.page, {
                friction: 0,
                transition: !1
            }),
            this.emit("destroySlide", n)
        }
    }
    updateMetrics() {
        const {panzoom: e, viewport: i, track: n, slides: s, isHorizontal: r, isInfinite: o} = this;
        if (!n)
            return;
        const a = r ? "width" : "height"
          , l = r ? "offsetWidth" : "offsetHeight";
        if (i) {
            let u = Math.max(i[l], E(i.getBoundingClientRect()[a], 1e3))
              , h = getComputedStyle(i)
              , f = "padding"
              , p = r ? "Right" : "Bottom";
            u -= parseFloat(h[f + (r ? "Left" : "Top")]) + parseFloat(h[f + p]),
            this.viewportDim = u
        }
        let c, d = 0;
        for (const [u,h] of s.entries()) {
            let f = 0
              , p = 0;
            !h.el && c ? (f = c.dim,
            p = c.gap) : ({dim: f, gap: p} = this.getSlideMetrics(h),
            c = h),
            f = E(f, 1e3),
            p = E(p, 1e3),
            h.dim = f,
            h.gap = p,
            h.pos = d,
            d += f,
            (o || u < s.length - 1) && (d += p)
        }
        d = E(d, 1e3),
        this.contentDim = d,
        e && (e.contentRect[a] = d,
        e.contentRect[r ? "fullWidth" : "fullHeight"] = d),
        this.pages = this.createPages(),
        this.pages = this.processPages(),
        this.state === B.Init && this.setInitialPage(),
        this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)),
        this.manageSlideVisiblity(),
        this.emit("refresh")
    }
    getProgress(e, i=!1, n=!1) {
        e === void 0 && (e = this.page);
        const s = this
          , r = s.panzoom
          , o = s.contentDim
          , a = s.pages[e] || 0;
        if (!a || !r)
            return e > this.page ? -1 : 1;
        let l = -1 * r.current.e
          , c = E((l - a.pos) / (1 * a.dim), 1e3)
          , d = c
          , u = c;
        this.isInfinite && n !== !0 && (d = E((l - a.pos + o) / (1 * a.dim), 1e3),
        u = E((l - a.pos - o) / (1 * a.dim), 1e3));
        let h = [c, d, u].reduce(function(f, p) {
            return Math.abs(p) < Math.abs(f) ? p : f
        });
        return i ? h : h > 1 ? 1 : h < -1 ? -1 : h
    }
    setViewportHeight() {
        const {page: e, pages: i, viewport: n, isHorizontal: s} = this;
        if (!n || !i[e])
            return;
        let r = 0;
        s && this.track && (this.track.style.height = "auto",
        i[e].slides.forEach(o => {
            o.el && (r = Math.max(r, o.el.offsetHeight))
        }
        )),
        n.style.height = r ? `${r}px` : ""
    }
    getPageForSlide(e) {
        for (const i of this.pages)
            for (const n of i.slides)
                if (n.index === e)
                    return i.index;
        return -1
    }
    getVisibleSlides(e=0) {
        var i;
        const n = new Set;
        let {panzoom: s, contentDim: r, viewportDim: o, pages: a, page: l} = this;
        if (o) {
            r = r + ((i = this.slides[this.slides.length - 1]) === null || i === void 0 ? void 0 : i.gap) || 0;
            let c = 0;
            c = s && s.state !== D.Init && s.state !== D.Destroy ? -1 * s.current[this.axis] : a[l] && a[l].pos || 0,
            this.isInfinite && (c -= Math.floor(c / r) * r),
            this.isRTL && this.isHorizontal && (c *= -1);
            const d = c - o * e
              , u = c + o * (e + 1)
              , h = this.isInfinite ? [-1, 0, 1] : [0];
            for (const f of this.slides)
                for (const p of h) {
                    const m = f.pos + p * r
                      , g = m + f.dim + f.gap;
                    m < u && g > d && n.add(f)
                }
        }
        return n
    }
    getPageFromPosition(e) {
        const {viewportDim: i, contentDim: n, slides: s, pages: r, panzoom: o} = this
          , a = r.length
          , l = s.length
          , c = s[0]
          , d = s[l - 1]
          , u = this.option("center");
        let h = 0
          , f = 0
          , p = 0
          , m = e === void 0 ? -1 * ((o == null ? void 0 : o.target[this.axis]) || 0) : e;
        u && (m += .5 * i),
        this.isInfinite ? (m < c.pos - .5 * d.gap && (m -= n,
        p = -1),
        m > d.pos + d.dim + .5 * d.gap && (m -= n,
        p = 1)) : m = Math.max(c.pos || 0, Math.min(m, d.pos));
        let g = d
          , v = s.find(y => {
            const b = y.pos - .5 * g.gap
              , x = y.pos + y.dim + .5 * y.gap;
            return g = y,
            m >= b && m < x
        }
        );
        return v || (v = d),
        f = this.getPageForSlide(v.index),
        h = f + p * a,
        {
            page: h,
            pageIndex: f
        }
    }
    setPageFromPosition() {
        const {pageIndex: e} = this.getPageFromPosition();
        this.onChange(e)
    }
    destroy() {
        if ([B.Destroy].includes(this.state))
            return;
        this.state = B.Destroy;
        const {container: e, viewport: i, track: n, slides: s, panzoom: r} = this
          , o = this.option("classes");
        e.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }),
        e.removeEventListener("slideTo", this.onSlideTo),
        window.removeEventListener("resize", this.onResize),
        r && (r.destroy(),
        this.panzoom = null),
        s && s.forEach(l => {
            this.removeSlideEl(l)
        }
        ),
        this.detachPlugins(),
        i && (i.removeEventListener("scroll", this.onScroll),
        i.offsetParent && n && n.offsetParent && i.replaceWith(...n.childNodes));
        for (const [l,c] of Object.entries(o))
            l !== "container" && c && e.classList.remove(c);
        this.track = null,
        this.viewport = null,
        this.page = 0,
        this.slides = [];
        const a = this.events.get("ready");
        this.events = new Map,
        a && this.events.set("ready", a)
    }
}
Object.defineProperty($e, "Panzoom", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Ve
}),
Object.defineProperty($e, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: hh
}),
Object.defineProperty($e, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: gh
});
const Pa = function(t) {
    if (!U(t))
        return 0;
    const e = window.scrollY
      , i = window.innerHeight
      , n = e + i
      , s = t.getBoundingClientRect()
      , r = s.y + e
      , o = s.height
      , a = r + o;
    if (e > a || n < r)
        return 0;
    if (e < r && n > a || r < e && a > n)
        return 100;
    let l = o;
    r < e && (l -= e - r),
    a > n && (l -= a - n);
    const c = l / i * 100;
    return Math.round(c)
}
  , wt = !(typeof window > "u" || !window.document || !window.document.createElement);
let Yi;
const Ki = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(",")
  , dr = t => {
    if (t && wt) {
        Yi === void 0 && document.createElement("div").focus({
            get preventScroll() {
                return Yi = !0,
                !1
            }
        });
        try {
            if (Yi)
                t.focus({
                    preventScroll: !0
                });
            else {
                const e = window.scrollY || document.body.scrollTop
                  , i = window.scrollX || document.body.scrollLeft;
                t.focus(),
                document.body.scrollTo({
                    top: e,
                    left: i,
                    behavior: "auto"
                })
            }
        } catch {}
    }
}
  , _a = () => {
    const t = document;
    let e, i = "", n = "", s = "";
    return t.fullscreenEnabled ? (i = "requestFullscreen",
    n = "exitFullscreen",
    s = "fullscreenElement") : t.webkitFullscreenEnabled && (i = "webkitRequestFullscreen",
    n = "webkitExitFullscreen",
    s = "webkitFullscreenElement"),
    i && (e = {
        request: function(r=t.documentElement) {
            return i === "webkitRequestFullscreen" ? r[i](Element.ALLOW_KEYBOARD_INPUT) : r[i]()
        },
        exit: function() {
            return t[s] && t[n]()
        },
        isFullscreen: function() {
            return t[s]
        }
    }),
    e
}
  , Nn = {
    animated: !0,
    autoFocus: !0,
    backdropClick: "close",
    Carousel: {
        classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide"
        }
    },
    closeButton: "auto",
    closeExisting: !1,
    commonCaption: !1,
    compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
    contentClick: "toggleZoom",
    contentDblClick: !1,
    defaultType: "image",
    defaultDisplay: "flex",
    dragToClose: !0,
    Fullscreen: {
        autoStart: !1
    },
    groupAll: !1,
    groupAttr: "data-fancybox",
    hideClass: "f-fadeOut",
    hideScrollbar: !0,
    idle: 3500,
    keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
    },
    l10n: Object.assign(Object.assign({}, Sa), {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download"
    }),
    parentEl: null,
    placeFocusBack: !0,
    showClass: "f-zoomInUp",
    startIndex: 0,
    tpl: {
        closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
    <div class="fancybox__backdrop"></div>
    <div class="fancybox__carousel"></div>
    <div class="fancybox__footer"></div>
  </div>`
    },
    trapFocus: !0,
    wheel: "zoom"
};
var q, W;
(function(t) {
    t[t.Init = 0] = "Init",
    t[t.Ready = 1] = "Ready",
    t[t.Closing = 2] = "Closing",
    t[t.CustomClosing = 3] = "CustomClosing",
    t[t.Destroy = 4] = "Destroy"
}
)(q || (q = {})),
function(t) {
    t[t.Loading = 0] = "Loading",
    t[t.Opening = 1] = "Opening",
    t[t.Ready = 2] = "Ready",
    t[t.Closing = 3] = "Closing"
}(W || (W = {}));
let ur = ""
  , gt = !1
  , Ht = !1
  , Ie = null;
const Ma = () => {
    let t = ""
      , e = "";
    const i = R.getInstance();
    if (i) {
        const n = i.carousel
          , s = i.getSlide();
        if (n && s) {
            let r = s.slug || void 0
              , o = s.triggerEl || void 0;
            e = r || i.option("slug") || "",
            !e && o && o.dataset && (e = o.dataset.fancybox || ""),
            e && e !== "true" && (t = "#" + e + (!r && n.slides.length > 1 ? "-" + (s.index + 1) : ""))
        }
    }
    return {
        hash: t,
        slug: e,
        index: 1
    }
}
  , ui = () => {
    const t = new URL(document.URL).hash
      , e = t.slice(1).split("-")
      , i = e[e.length - 1]
      , n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
    return {
        hash: t,
        slug: e.join("-"),
        index: n
    }
}
  , Oa = () => {
    const {slug: t, index: e} = ui();
    if (!t)
        return;
    let i = document.querySelector(`[data-slug="${t}"]`);
    if (i && i.dispatchEvent(new CustomEvent("click",{
        bubbles: !0,
        cancelable: !0
    })),
    R.getInstance())
        return;
    const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
    n.length && (i = n[e - 1],
    i && i.dispatchEvent(new CustomEvent("click",{
        bubbles: !0,
        cancelable: !0
    })))
}
  , Aa = () => {
    if (R.defaults.Hash === !1)
        return;
    const t = R.getInstance();
    if ((t == null ? void 0 : t.options.Hash) === !1)
        return;
    const {slug: e, index: i} = ui()
      , {slug: n} = Ma();
    t && (e === n ? t.jumpTo(i - 1) : (gt = !0,
    t.close())),
    Oa()
}
  , La = () => {
    Ie && clearTimeout(Ie),
    queueMicrotask( () => {
        Aa()
    }
    )
}
  , fr = () => {
    window.addEventListener("hashchange", La, !1),
    setTimeout( () => {
        Aa()
    }
    , 500)
}
;
wt && (/complete|interactive|loaded/.test(document.readyState) ? fr() : document.addEventListener("DOMContentLoaded", fr));
const qt = "is-zooming-in";
class Ia extends de {
    onCreateSlide(e, i, n) {
        const s = this.instance.optionFor(n, "src") || "";
        n.el && n.type === "image" && typeof s == "string" && this.setImage(n, s)
    }
    onRemoveSlide(e, i, n) {
        n.panzoom && n.panzoom.destroy(),
        n.panzoom = void 0,
        n.imageEl = void 0
    }
    onChange(e, i, n, s) {
        z(this.instance.container, qt);
        for (const r of i.slides) {
            const o = r.panzoom;
            o && r.index !== n && o.reset(.35)
        }
    }
    onClose() {
        var e;
        const i = this.instance
          , n = i.container
          , s = i.getSlide();
        if (!n || !n.parentElement || !s)
            return;
        const {el: r, contentEl: o, panzoom: a, thumbElSrc: l} = s;
        if (!r || !l || !o || !a || a.isContentLoading || a.state === D.Init || a.state === D.Destroy)
            return;
        a.updateMetrics();
        let c = this.getZoomInfo(s);
        if (!c)
            return;
        this.instance.state = q.CustomClosing,
        n.classList.remove(qt),
        n.classList.add("is-zooming-out"),
        o.style.backgroundImage = `url('${l}')`;
        const d = n.getBoundingClientRect();
        (((e = window.visualViewport) === null || e === void 0 ? void 0 : e.scale) || 1) === 1 && Object.assign(n.style, {
            position: "absolute",
            top: `${n.offsetTop + window.scrollY}px`,
            left: `${n.offsetLeft + window.scrollX}px`,
            bottom: "auto",
            right: "auto",
            width: `${d.width}px`,
            height: `${d.height}px`,
            overflow: "hidden"
        });
        const {x: u, y: h, scale: f, opacity: p} = c;
        if (p) {
            const m = ( (g, v, y, b) => {
                const x = v - g
                  , S = b - y;
                return T => y + ((T - g) / x * S || 0)
            }
            )(a.scale, f, 1, 0);
            a.on("afterTransform", () => {
                o.style.opacity = m(a.scale) + ""
            }
            )
        }
        a.on("endAnimation", () => {
            i.destroy()
        }
        ),
        a.target.a = f,
        a.target.b = 0,
        a.target.c = 0,
        a.target.d = f,
        a.panTo({
            x: u,
            y: h,
            scale: f,
            friction: p ? .2 : .33,
            ignoreBounds: !0
        }),
        a.isResting && i.destroy()
    }
    setImage(e, i) {
        const n = this.instance;
        e.src = i,
        this.process(e, i).then(s => {
            const {contentEl: r, imageEl: o, thumbElSrc: a, el: l} = e;
            if (n.isClosing() || !r || !o)
                return;
            r.offsetHeight;
            const c = !!n.isOpeningSlide(e) && this.getZoomInfo(e);
            if (this.option("protected") && l) {
                l.addEventListener("contextmenu", h => {
                    h.preventDefault()
                }
                );
                const u = document.createElement("div");
                _(u, "fancybox-protected"),
                r.appendChild(u)
            }
            if (a && c) {
                const u = s.contentRect
                  , h = Math.max(u.fullWidth, u.fullHeight);
                let f = null;
                !c.opacity && h > 1200 && (f = document.createElement("img"),
                _(f, "fancybox-ghost"),
                f.src = a,
                r.appendChild(f));
                const p = () => {
                    f && (_(f, "f-fadeFastOut"),
                    setTimeout( () => {
                        f && (f.remove(),
                        f = null)
                    }
                    , 200))
                }
                ;
                (d = a,
                new Promise( (m, g) => {
                    const v = new Image;
                    v.onload = m,
                    v.onerror = g,
                    v.src = d
                }
                )).then( () => {
                    n.hideLoading(e),
                    e.state = W.Opening,
                    this.instance.emit("reveal", e),
                    this.zoomIn(e).then( () => {
                        p(),
                        this.instance.done(e)
                    }
                    , () => {}
                    ),
                    f && setTimeout( () => {
                        p()
                    }
                    , h > 2500 ? 800 : 200)
                }
                , () => {
                    n.hideLoading(e),
                    n.revealContent(e)
                }
                )
            } else {
                const u = this.optionFor(e, "initialSize")
                  , h = this.optionFor(e, "zoom")
                  , f = {
                    event: n.prevMouseMoveEvent || n.options.event,
                    friction: h ? .12 : 0
                };
                let p = n.optionFor(e, "showClass") || void 0
                  , m = !0;
                n.isOpeningSlide(e) && (u === "full" ? s.zoomToFull(f) : u === "cover" ? s.zoomToCover(f) : u === "max" ? s.zoomToMax(f) : m = !1,
                s.stop("current")),
                m && p && (p = s.isDragging ? "f-fadeIn" : ""),
                n.hideLoading(e),
                n.revealContent(e, p)
            }
            var d
        }
        , () => {
            n.setError(e, "{{IMAGE_ERROR}}")
        }
        )
    }
    process(e, i) {
        return new Promise( (n, s) => {
            var r;
            const o = this.instance
              , a = e.el;
            o.clearContent(e),
            o.showLoading(e);
            let l = this.optionFor(e, "content");
            if (typeof l == "string" && (l = pe(l)),
            !l || !U(l)) {
                if (l = document.createElement("img"),
                l instanceof HTMLImageElement) {
                    let c = ""
                      , d = e.caption;
                    c = typeof d == "string" && d ? d.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${e.index + 1} of ${((r = o.carousel) === null || r === void 0 ? void 0 : r.pages.length) || 1}`,
                    l.src = i || "",
                    l.alt = c,
                    l.draggable = !1,
                    e.srcset && l.setAttribute("srcset", e.srcset),
                    this.instance.isOpeningSlide(e) && (l.fetchPriority = "high")
                }
                e.sizes && l.setAttribute("sizes", e.sizes)
            }
            _(l, "fancybox-image"),
            e.imageEl = l,
            o.setContent(e, l, !1),
            e.panzoom = new Ve(a,X({
                transformParent: !0
            }, this.option("Panzoom") || {}, {
                content: l,
                width: (c, d) => o.optionFor(e, "width", "auto", d) || "auto",
                height: (c, d) => o.optionFor(e, "height", "auto", d) || "auto",
                wheel: () => {
                    const c = o.option("wheel");
                    return (c === "zoom" || c == "pan") && c
                }
                ,
                click: (c, d) => {
                    var u, h;
                    if (o.isCompact || o.isClosing() || e.index !== ((u = o.getSlide()) === null || u === void 0 ? void 0 : u.index))
                        return !1;
                    if (d) {
                        const p = d.composedPath()[0];
                        if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(p.nodeName))
                            return !1
                    }
                    let f = !d || d.target && ((h = e.contentEl) === null || h === void 0 ? void 0 : h.contains(d.target));
                    return o.option(f ? "contentClick" : "backdropClick") || !1
                }
                ,
                dblClick: () => o.isCompact ? "toggleZoom" : o.option("contentDblClick") || !1,
                spinner: !1,
                panOnlyZoomed: !0,
                wheelLimit: 1 / 0,
                on: {
                    ready: c => {
                        n(c)
                    }
                    ,
                    error: () => {
                        s()
                    }
                    ,
                    destroy: () => {
                        s()
                    }
                }
            }))
        }
        )
    }
    zoomIn(e) {
        return new Promise( (i, n) => {
            const s = this.instance
              , r = s.container
              , {panzoom: o, contentEl: a, el: l} = e;
            o && o.updateMetrics();
            const c = this.getZoomInfo(e);
            if (!(c && l && a && o && r))
                return void n();
            const {x: d, y: u, scale: h, opacity: f} = c
              , p = () => {
                e.state !== W.Closing && (f && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - h)), 0) + ""),
                o.scale >= 1 && o.scale > o.targetScale - .1 && i(o))
            }
              , m = y => {
                (y.scale < .99 || y.scale > 1.01) && !y.isDragging || (z(r, qt),
                a.style.opacity = "",
                y.off("endAnimation", m),
                y.off("touchStart", m),
                y.off("afterTransform", p),
                i(y))
            }
            ;
            o.on("endAnimation", m),
            o.on("touchStart", m),
            o.on("afterTransform", p),
            o.on(["error", "destroy"], () => {
                n()
            }
            ),
            o.panTo({
                x: d,
                y: u,
                scale: h,
                friction: 0,
                ignoreBounds: !0
            }),
            o.stop("current");
            const g = {
                event: o.panMode === "mousemove" ? s.prevMouseMoveEvent || s.options.event : void 0
            }
              , v = this.optionFor(e, "initialSize");
            _(r, qt),
            s.hideLoading(e),
            v === "full" ? o.zoomToFull(g) : v === "cover" ? o.zoomToCover(g) : v === "max" ? o.zoomToMax(g) : o.reset(.172)
        }
        )
    }
    getZoomInfo(e) {
        const {el: i, imageEl: n, thumbEl: s, panzoom: r} = e
          , o = this.instance
          , a = o.container;
        if (!i || !n || !s || !r || Pa(s) < 3 || !this.optionFor(e, "zoom") || !a || o.state === q.Destroy || getComputedStyle(a).getPropertyValue("--f-images-zoom") === "0")
            return !1;
        const l = window.visualViewport || null;
        if ((l ? l.scale : 1) !== 1)
            return !1;
        let {top: c, left: d, width: u, height: h} = s.getBoundingClientRect()
          , {top: f, left: p, fitWidth: m, fitHeight: g} = r.contentRect;
        if (!(u && h && m && g))
            return !1;
        const v = r.container.getBoundingClientRect();
        p += v.left,
        f += v.top;
        const y = -1 * (p + .5 * m - (d + .5 * u))
          , b = -1 * (f + .5 * g - (c + .5 * h))
          , x = u / m;
        let S = this.option("zoomOpacity") || !1;
        return S === "auto" && (S = Math.abs(u / h - m / g) > .1),
        {
            x: y,
            y: b,
            scale: x,
            opacity: S
        }
    }
    attach() {
        const e = this
          , i = e.instance;
        i.on("Carousel.change", e.onChange),
        i.on("Carousel.createSlide", e.onCreateSlide),
        i.on("Carousel.removeSlide", e.onRemoveSlide),
        i.on("close", e.onClose)
    }
    detach() {
        const e = this
          , i = e.instance;
        i.off("Carousel.change", e.onChange),
        i.off("Carousel.createSlide", e.onCreateSlide),
        i.off("Carousel.removeSlide", e.onRemoveSlide),
        i.off("close", e.onClose)
    }
}
Object.defineProperty(Ia, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        initialSize: "fit",
        Panzoom: {
            maxScale: 1
        },
        protected: !1,
        zoom: !0,
        zoomOpacity: "auto"
    }
}),
typeof SuppressedError == "function" && SuppressedError;
const Zi = "html"
  , hr = "image"
  , Ji = "map"
  , be = "youtube"
  , Me = "vimeo"
  , ft = "html5video"
  , pr = (t, e={}) => {
    const i = new URL(t)
      , n = new URLSearchParams(i.search)
      , s = new URLSearchParams;
    for (const [a,l] of [...n, ...Object.entries(e)]) {
        let c = l + "";
        if (a === "t") {
            let d = c.match(/((\d*)m)?(\d*)s?/);
            d && s.set("start", 60 * parseInt(d[2] || "0") + parseInt(d[3] || "0") + "")
        } else
            s.set(a, c)
    }
    let r = s + ""
      , o = t.match(/#t=((.*)?\d+s)/);
    return o && (r += `#t=${o[1]}`),
    r
}
  , vh = {
    ajax: null,
    autoSize: !0,
    iframeAttr: {
        allow: "autoplay; fullscreen",
        scrolling: "auto"
    },
    preload: !0,
    videoAutoplay: !0,
    videoRatio: 16 / 9,
    videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
    videoFormat: "",
    vimeo: {
        byline: 1,
        color: "00adef",
        controls: 1,
        dnt: 1,
        muted: 0
    },
    youtube: {
        controls: 1,
        enablejsapi: 1,
        nocookie: 1,
        rel: 0,
        fs: 1
    }
}
  , bh = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
class Ra extends de {
    onBeforeInitSlide(e, i, n) {
        this.processType(n)
    }
    onCreateSlide(e, i, n) {
        this.setContent(n)
    }
    onClearContent(e, i) {
        i.xhr && (i.xhr.abort(),
        i.xhr = null);
        const n = i.iframeEl;
        n && (n.onload = n.onerror = null,
        n.src = "//about:blank",
        i.iframeEl = null);
        const s = i.contentEl
          , r = i.placeholderEl;
        if (i.type === "inline" && s && r)
            s.classList.remove("fancybox__content"),
            getComputedStyle(s).getPropertyValue("display") !== "none" && (s.style.display = "none"),
            setTimeout( () => {
                r && (s && r.parentNode && r.parentNode.insertBefore(s, r),
                r.remove())
            }
            , 0),
            i.contentEl = void 0,
            i.placeholderEl = void 0;
        else
            for (; i.el && i.el.firstChild; )
                i.el.removeChild(i.el.firstChild)
    }
    onSelectSlide(e, i, n) {
        n.state === W.Ready && this.playVideo()
    }
    onUnselectSlide(e, i, n) {
        var s, r;
        if (n.type === ft) {
            try {
                (r = (s = n.el) === null || s === void 0 ? void 0 : s.querySelector("video")) === null || r === void 0 || r.pause()
            } catch {}
            return
        }
        let o;
        n.type === Me ? o = {
            method: "pause",
            value: "true"
        } : n.type === be && (o = {
            event: "command",
            func: "pauseVideo"
        }),
        o && n.iframeEl && n.iframeEl.contentWindow && n.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
        n.poller && clearTimeout(n.poller)
    }
    onDone(e, i) {
        e.isCurrentSlide(i) && !e.isClosing() && this.playVideo()
    }
    onRefresh(e, i) {
        i.slides.forEach(n => {
            n.el && (this.resizeIframe(n),
            this.setAspectRatio(n))
        }
        )
    }
    onMessage(e) {
        try {
            let i = JSON.parse(e.data);
            if (e.origin === "https://player.vimeo.com") {
                if (i.event === "ready")
                    for (let n of Array.from(document.getElementsByClassName("fancybox__iframe")))
                        n instanceof HTMLIFrameElement && n.contentWindow === e.source && (n.dataset.ready = "true")
            } else if (e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && i.event === "onReady") {
                const n = document.getElementById(i.id);
                n && (n.dataset.ready = "true")
            }
        } catch {}
    }
    loadAjaxContent(e) {
        const i = this.instance.optionFor(e, "src") || "";
        this.instance.showLoading(e);
        const n = this.instance
          , s = new XMLHttpRequest;
        n.showLoading(e),
        s.onreadystatechange = function() {
            s.readyState === XMLHttpRequest.DONE && n.state === q.Ready && (n.hideLoading(e),
            s.status === 200 ? n.setContent(e, s.responseText) : n.setError(e, s.status === 404 ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
        }
        ;
        const r = e.ajax || null;
        s.open(r ? "POST" : "GET", i + ""),
        s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        s.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        s.send(r),
        e.xhr = s
    }
    setInlineContent(e) {
        let i = null;
        if (U(e.src))
            i = e.src;
        else if (typeof e.src == "string") {
            const n = e.src.split("#", 2).pop();
            i = n ? document.getElementById(n) : null
        }
        if (i) {
            if (e.type === "clone" || i.closest(".fancybox__slide")) {
                i = i.cloneNode(!0);
                const n = i.dataset.animationName;
                n && (i.classList.remove(n),
                delete i.dataset.animationName);
                let s = i.getAttribute("id");
                s = s ? `${s}--clone` : `clone-${this.instance.id}-${e.index}`,
                i.setAttribute("id", s)
            } else if (i.parentNode) {
                const n = document.createElement("div");
                n.classList.add("fancybox-placeholder"),
                i.parentNode.insertBefore(n, i),
                e.placeholderEl = n
            }
            this.instance.setContent(e, i)
        } else
            this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}")
    }
    setIframeContent(e) {
        const {src: i, el: n} = e;
        if (!i || typeof i != "string" || !n)
            return;
        n.classList.add("is-loading");
        const s = this.instance
          , r = document.createElement("iframe");
        r.className = "fancybox__iframe",
        r.setAttribute("id", `fancybox__iframe_${s.id}_${e.index}`);
        for (const [a,l] of Object.entries(this.optionFor(e, "iframeAttr") || {}))
            r.setAttribute(a, l);
        r.onerror = () => {
            s.setError(e, "{{IFRAME_ERROR}}")
        }
        ,
        e.iframeEl = r;
        const o = this.optionFor(e, "preload");
        if (e.type !== "iframe" || o === !1)
            return r.setAttribute("src", e.src + ""),
            s.setContent(e, r, !1),
            this.resizeIframe(e),
            void s.revealContent(e);
        s.showLoading(e),
        r.onload = () => {
            if (!r.src.length)
                return;
            const a = r.dataset.ready !== "true";
            r.dataset.ready = "true",
            this.resizeIframe(e),
            a ? s.revealContent(e) : s.hideLoading(e)
        }
        ,
        r.setAttribute("src", i),
        s.setContent(e, r, !1)
    }
    resizeIframe(e) {
        const {type: i, iframeEl: n} = e;
        if (i === be || i === Me)
            return;
        const s = n == null ? void 0 : n.parentElement;
        if (!n || !s)
            return;
        let r = e.autoSize;
        r === void 0 && (r = this.optionFor(e, "autoSize"));
        let o = e.width || 0
          , a = e.height || 0;
        o && a && (r = !1);
        const l = s && s.style;
        if (e.preload !== !1 && r !== !1 && l)
            try {
                const c = window.getComputedStyle(s)
                  , d = parseFloat(c.paddingLeft) + parseFloat(c.paddingRight)
                  , u = parseFloat(c.paddingTop) + parseFloat(c.paddingBottom)
                  , h = n.contentWindow;
                if (h) {
                    const f = h.document
                      , p = f.getElementsByTagName(Zi)[0]
                      , m = f.body;
                    l.width = "",
                    m.style.overflow = "hidden",
                    o = o || p.scrollWidth + d,
                    l.width = `${o}px`,
                    m.style.overflow = "",
                    l.flex = "0 0 auto",
                    l.height = `${m.scrollHeight}px`,
                    a = p.scrollHeight + u
                }
            } catch {}
        if (o || a) {
            const c = {
                flex: "0 1 auto",
                width: "",
                height: ""
            };
            o && o !== "auto" && (c.width = `${o}px`),
            a && a !== "auto" && (c.height = `${a}px`),
            Object.assign(l, c)
        }
    }
    playVideo() {
        const e = this.instance.getSlide();
        if (!e)
            return;
        const {el: i} = e;
        if (!i || !i.offsetParent || !this.optionFor(e, "videoAutoplay"))
            return;
        if (e.type === ft)
            try {
                const s = i.querySelector("video");
                if (s) {
                    const r = s.play();
                    r !== void 0 && r.then( () => {}
                    ).catch(o => {
                        s.muted = !0,
                        s.play()
                    }
                    )
                }
            } catch {}
        if (e.type !== be && e.type !== Me)
            return;
        const n = () => {
            if (e.iframeEl && e.iframeEl.contentWindow) {
                let s;
                if (e.iframeEl.dataset.ready === "true")
                    return s = e.type === be ? {
                        event: "command",
                        func: "playVideo"
                    } : {
                        method: "play",
                        value: "true"
                    },
                    s && e.iframeEl.contentWindow.postMessage(JSON.stringify(s), "*"),
                    void (e.poller = void 0);
                e.type === be && (s = {
                    event: "listening",
                    id: e.iframeEl.getAttribute("id")
                },
                e.iframeEl.contentWindow.postMessage(JSON.stringify(s), "*"))
            }
            e.poller = setTimeout(n, 250)
        }
        ;
        n()
    }
    processType(e) {
        if (e.html)
            return e.type = Zi,
            e.src = e.html,
            void (e.html = "");
        const i = this.instance.optionFor(e, "src", "");
        if (!i || typeof i != "string")
            return;
        let n = e.type
          , s = null;
        if (s = i.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
            const r = this.optionFor(e, be)
              , {nocookie: o} = r
              , a = function(u, h) {
                var f = {};
                for (var p in u)
                    Object.prototype.hasOwnProperty.call(u, p) && h.indexOf(p) < 0 && (f[p] = u[p]);
                if (u != null && typeof Object.getOwnPropertySymbols == "function") {
                    var m = 0;
                    for (p = Object.getOwnPropertySymbols(u); m < p.length; m++)
                        h.indexOf(p[m]) < 0 && Object.prototype.propertyIsEnumerable.call(u, p[m]) && (f[p[m]] = u[p[m]])
                }
                return f
            }(r, ["nocookie"])
              , l = `www.youtube${o ? "-nocookie" : ""}.com`
              , c = pr(i, a)
              , d = encodeURIComponent(s[2]);
            e.videoId = d,
            e.src = `https://${l}/embed/${d}?${c}`,
            e.thumbSrc = e.thumbSrc || `https://i.ytimg.com/vi/${d}/mqdefault.jpg`,
            n = be
        } else if (s = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
            const r = pr(i, this.optionFor(e, Me))
              , o = encodeURIComponent(s[1])
              , a = s[4] || "";
            e.videoId = o,
            e.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${r ? "&" : ""}` : ""}${r}`,
            n = Me
        }
        if (!n && e.triggerEl) {
            const r = e.triggerEl.dataset.type;
            bh.includes(r) && (n = r)
        }
        n || typeof i == "string" && (i.charAt(0) === "#" ? n = "inline" : (s = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = ft,
        e.videoFormat = e.videoFormat || "video/" + (s[1] === "ogv" ? "ogg" : s[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = hr : i.match(/\.(pdf)((\?|#).*)?$/i) && (n = "pdf")),
        (s = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (e.src = `https://maps.google.${s[1]}/?ll=${(s[2] ? s[2] + "&z=" + Math.floor(parseFloat(s[3])) + (s[4] ? s[4].replace(/^\//, "&") : "") : s[4] + "").replace(/\?/, "&")}&output=${s[4] && s[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`,
        n = Ji) : (s = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (e.src = `https://maps.google.${s[1]}/maps?q=${s[2].replace("query=", "q=").replace("api=1", "")}&output=embed`,
        n = Ji),
        n = n || this.instance.option("defaultType"),
        e.type = n,
        n === hr && (e.thumbSrc = e.thumbSrc || e.src)
    }
    setContent(e) {
        const i = this.instance.optionFor(e, "src") || "";
        if (e && e.type && i) {
            switch (e.type) {
            case Zi:
                this.instance.setContent(e, i);
                break;
            case ft:
                const n = this.option("videoTpl");
                n && this.instance.setContent(e, n.replace(/\{\{src\}\}/gi, i + "").replace(/\{\{format\}\}/gi, this.optionFor(e, "videoFormat") || "").replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || ""));
                break;
            case "inline":
            case "clone":
                this.setInlineContent(e);
                break;
            case "ajax":
                this.loadAjaxContent(e);
                break;
            case "pdf":
            case Ji:
            case be:
            case Me:
                e.preload = !1;
            case "iframe":
                this.setIframeContent(e)
            }
            this.setAspectRatio(e)
        }
    }
    setAspectRatio(e) {
        const i = e.contentEl;
        if (!(e.el && i && e.type && [be, Me, ft].includes(e.type)))
            return;
        let n, s = e.width || "auto", r = e.height || "auto";
        if (s === "auto" || r === "auto") {
            n = this.optionFor(e, "videoRatio");
            const c = (n + "").match(/(\d+)\s*\/\s?(\d+)/);
            n = c && c.length > 2 ? parseFloat(c[1]) / parseFloat(c[2]) : parseFloat(n + "")
        } else
            s && r && (n = s / r);
        if (!n)
            return;
        i.style.aspectRatio = "",
        i.style.width = "",
        i.style.height = "",
        i.offsetHeight;
        const o = i.getBoundingClientRect()
          , a = o.width || 1
          , l = o.height || 1;
        i.style.aspectRatio = n + "",
        n < a / l ? (r = r === "auto" ? l : Math.min(l, r),
        i.style.width = "auto",
        i.style.height = `${r}px`) : (s = s === "auto" ? a : Math.min(a, s),
        i.style.width = `${s}px`,
        i.style.height = "auto")
    }
    attach() {
        const e = this
          , i = e.instance;
        i.on("Carousel.beforeInitSlide", e.onBeforeInitSlide),
        i.on("Carousel.createSlide", e.onCreateSlide),
        i.on("Carousel.selectSlide", e.onSelectSlide),
        i.on("Carousel.unselectSlide", e.onUnselectSlide),
        i.on("Carousel.Panzoom.refresh", e.onRefresh),
        i.on("done", e.onDone),
        i.on("clearContent", e.onClearContent),
        window.addEventListener("message", e.onMessage)
    }
    detach() {
        const e = this
          , i = e.instance;
        i.off("Carousel.beforeInitSlide", e.onBeforeInitSlide),
        i.off("Carousel.createSlide", e.onCreateSlide),
        i.off("Carousel.selectSlide", e.onSelectSlide),
        i.off("Carousel.unselectSlide", e.onUnselectSlide),
        i.off("Carousel.Panzoom.refresh", e.onRefresh),
        i.off("done", e.onDone),
        i.off("clearContent", e.onClearContent),
        window.removeEventListener("message", e.onMessage)
    }
}
Object.defineProperty(Ra, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: vh
});
const Vt = "play"
  , Wt = "pause"
  , ht = "ready";
class ka extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ht
        }),
        Object.defineProperty(this, "inHover", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "timer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "progressBar", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        })
    }
    get isActive() {
        return this.state !== ht
    }
    onReady(e) {
        this.option("autoStart") && (e.isInfinite || e.page < e.pages.length - 1) && this.start()
    }
    onChange() {
        this.removeProgressBar(),
        this.pause()
    }
    onSettle() {
        this.resume()
    }
    onVisibilityChange() {
        document.visibilityState === "visible" ? this.resume() : this.pause()
    }
    onMouseEnter() {
        this.inHover = !0,
        this.pause()
    }
    onMouseLeave() {
        var e;
        this.inHover = !1,
        !((e = this.instance.panzoom) === null || e === void 0) && e.isResting && this.resume()
    }
    onTimerEnd() {
        const e = this.instance;
        this.state === "play" && (e.isInfinite || e.page !== e.pages.length - 1 ? e.slideNext() : e.slideTo(0))
    }
    removeProgressBar() {
        this.progressBar && (this.progressBar.remove(),
        this.progressBar = null)
    }
    createProgressBar() {
        var e;
        if (!this.option("showProgress"))
            return null;
        this.removeProgressBar();
        const i = this.instance
          , n = ((e = i.pages[i.page]) === null || e === void 0 ? void 0 : e.slides) || [];
        let s = this.option("progressParentEl");
        if (s || (s = (n.length === 1 ? n[0].el : null) || i.viewport),
        !s)
            return null;
        const r = document.createElement("div");
        return _(r, "f-progress"),
        s.prepend(r),
        this.progressBar = r,
        r.offsetHeight,
        r
    }
    set() {
        const e = this
          , i = e.instance;
        if (i.pages.length < 2 || e.timer)
            return;
        const n = e.option("timeout");
        e.state = Vt,
        _(i.container, "has-autoplay");
        let s = e.createProgressBar();
        s && (s.style.transitionDuration = `${n}ms`,
        s.style.transform = "scaleX(1)"),
        e.timer = setTimeout( () => {
            e.timer = null,
            e.inHover || e.onTimerEnd()
        }
        , n),
        e.emit("set")
    }
    clear() {
        const e = this;
        e.timer && (clearTimeout(e.timer),
        e.timer = null),
        e.removeProgressBar()
    }
    start() {
        const e = this;
        if (e.set(),
        e.state !== ht) {
            if (e.option("pauseOnHover")) {
                const i = e.instance.container;
                i.addEventListener("mouseenter", e.onMouseEnter, !1),
                i.addEventListener("mouseleave", e.onMouseLeave, !1)
            }
            document.addEventListener("visibilitychange", e.onVisibilityChange, !1),
            e.emit("start")
        }
    }
    stop() {
        const e = this
          , i = e.state
          , n = e.instance.container;
        e.clear(),
        e.state = ht,
        n.removeEventListener("mouseenter", e.onMouseEnter, !1),
        n.removeEventListener("mouseleave", e.onMouseLeave, !1),
        document.removeEventListener("visibilitychange", e.onVisibilityChange, !1),
        z(n, "has-autoplay"),
        i !== ht && e.emit("stop")
    }
    pause() {
        const e = this;
        e.state === Vt && (e.state = Wt,
        e.clear(),
        e.emit(Wt))
    }
    resume() {
        const e = this
          , i = e.instance;
        if (i.isInfinite || i.page !== i.pages.length - 1)
            if (e.state !== Vt) {
                if (e.state === Wt && !e.inHover) {
                    const n = new Event("resume",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    e.emit("resume", n),
                    n.defaultPrevented || e.set()
                }
            } else
                e.set();
        else
            e.stop()
    }
    toggle() {
        this.state === Vt || this.state === Wt ? this.stop() : this.start()
    }
    attach() {
        const e = this
          , i = e.instance;
        i.on("ready", e.onReady),
        i.on("Panzoom.startAnimation", e.onChange),
        i.on("Panzoom.endAnimation", e.onSettle),
        i.on("Panzoom.touchMove", e.onChange)
    }
    detach() {
        const e = this
          , i = e.instance;
        i.off("ready", e.onReady),
        i.off("Panzoom.startAnimation", e.onChange),
        i.off("Panzoom.endAnimation", e.onSettle),
        i.off("Panzoom.touchMove", e.onChange),
        e.stop()
    }
}
Object.defineProperty(ka, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        autoStart: !0,
        pauseOnHover: !0,
        progressParentEl: null,
        showProgress: !0,
        timeout: 3e3
    }
});
class za extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        })
    }
    onPrepare(e) {
        const i = e.carousel;
        if (!i)
            return;
        const n = e.container;
        n && (i.options.Autoplay = X({
            autoStart: !1
        }, this.option("Autoplay") || {}, {
            pauseOnHover: !1,
            timeout: this.option("timeout"),
            progressParentEl: () => this.option("progressParentEl") || null,
            on: {
                start: () => {
                    e.emit("startSlideshow")
                }
                ,
                set: s => {
                    var r;
                    n.classList.add("has-slideshow"),
                    ((r = e.getSlide()) === null || r === void 0 ? void 0 : r.state) !== W.Ready && s.pause()
                }
                ,
                stop: () => {
                    n.classList.remove("has-slideshow"),
                    e.isCompact || e.endIdle(),
                    e.emit("endSlideshow")
                }
                ,
                resume: (s, r) => {
                    var o, a, l;
                    !r || !r.cancelable || ((o = e.getSlide()) === null || o === void 0 ? void 0 : o.state) === W.Ready && (!((l = (a = e.carousel) === null || a === void 0 ? void 0 : a.panzoom) === null || l === void 0) && l.isResting) || r.preventDefault()
                }
            }
        }),
        i.attachPlugins({
            Autoplay: ka
        }),
        this.ref = i.plugins.Autoplay)
    }
    onReady(e) {
        const i = e.carousel
          , n = this.ref;
        n && i && this.option("playOnStart") && (i.isInfinite || i.page < i.pages.length - 1) && n.start()
    }
    onDone(e, i) {
        const n = this.ref
          , s = e.carousel;
        if (!n || !s)
            return;
        const r = i.panzoom;
        r && r.on("startAnimation", () => {
            e.isCurrentSlide(i) && n.stop()
        }
        ),
        e.isCurrentSlide(i) && n.resume()
    }
    onKeydown(e, i) {
        var n;
        const s = this.ref;
        s && i === this.option("key") && ((n = document.activeElement) === null || n === void 0 ? void 0 : n.nodeName) !== "BUTTON" && s.toggle()
    }
    attach() {
        const e = this
          , i = e.instance;
        i.on("Carousel.init", e.onPrepare),
        i.on("Carousel.ready", e.onReady),
        i.on("done", e.onDone),
        i.on("keydown", e.onKeydown)
    }
    detach() {
        const e = this
          , i = e.instance;
        i.off("Carousel.init", e.onPrepare),
        i.off("Carousel.ready", e.onReady),
        i.off("done", e.onDone),
        i.off("keydown", e.onKeydown)
    }
}
Object.defineProperty(za, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        key: " ",
        playOnStart: !1,
        progressParentEl: t => {
            var e;
            return ((e = t.instance.container) === null || e === void 0 ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container
        }
        ,
        timeout: 3e3
    }
});
const Da = {
    classes: {
        container: "f-thumbs f-carousel__thumbs",
        viewport: "f-thumbs__viewport",
        track: "f-thumbs__track",
        slide: "f-thumbs__slide",
        isResting: "is-resting",
        isSelected: "is-selected",
        isLoading: "is-loading",
        hasThumbs: "has-thumbs"
    },
    minCount: 2,
    parentEl: null,
    thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
    type: "modern"
};
var ye;
(function(t) {
    t[t.Init = 0] = "Init",
    t[t.Ready = 1] = "Ready",
    t[t.Hidden = 2] = "Hidden"
}
)(ye || (ye = {}));
const mr = "isResting"
  , Gt = "thumbWidth"
  , Ye = "thumbHeight"
  , fe = "thumbClipWidth";
let Fa = class extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "modern"
        }),
        Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "thumbWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "thumbClipWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "thumbHeight", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "thumbGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "thumbExtraGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ye.Init
        })
    }
    get isModern() {
        return this.type === "modern"
    }
    onInitSlide(t, e) {
        const i = e.el ? e.el.dataset : void 0;
        i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "",
        e[fe] = parseFloat(i[fe] || "") || e[fe] || 0,
        e[Ye] = parseFloat(i.thumbHeight || "") || e[Ye] || 0),
        this.addSlide(e)
    }
    onInitSlides() {
        this.build()
    }
    onChange() {
        var t;
        if (!this.isModern)
            return;
        const e = this.container
          , i = this.instance
          , n = i.panzoom
          , s = this.carousel
          , r = s ? s.panzoom : null
          , o = i.page;
        if (n && s && r) {
            if (n.isDragging) {
                z(e, this.cn(mr));
                let a = ((t = s.pages[o]) === null || t === void 0 ? void 0 : t.pos) || 0;
                a += i.getProgress(o) * (this[fe] + this.thumbGap);
                let l = r.getBounds();
                -1 * a > l.x.min && -1 * a < l.x.max && r.panTo({
                    x: -1 * a,
                    friction: .12
                })
            } else
                me(e, this.cn(mr), n.isResting);
            this.shiftModern()
        }
    }
    onRefresh() {
        this.updateProps();
        for (const t of this.instance.slides || [])
            this.resizeModernSlide(t);
        this.shiftModern()
    }
    isDisabled() {
        const t = this.option("minCount") || 0;
        if (t) {
            const i = this.instance;
            let n = 0;
            for (const s of i.slides || [])
                s.thumbSrc && n++;
            if (n < t)
                return !0
        }
        const e = this.option("type");
        return ["modern", "classic"].indexOf(e) < 0
    }
    getThumb(t) {
        const e = this.option("thumbTpl") || "";
        return {
            html: this.instance.localize(e, [["%i", t.index], ["%d", t.index + 1], ["%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])
        }
    }
    addSlide(t) {
        const e = this.carousel;
        e && e.addSlide(t.index, this.getThumb(t))
    }
    getSlides() {
        const t = [];
        for (const e of this.instance.slides || [])
            t.push(this.getThumb(e));
        return t
    }
    resizeModernSlide(t) {
        this.isModern && (t[Gt] = t[fe] && t[Ye] ? Math.round(this[Ye] * (t[fe] / t[Ye])) : this[Gt])
    }
    updateProps() {
        const t = this.container;
        if (!t)
            return;
        const e = i => parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + i)) || 0;
        this.thumbGap = e("gap"),
        this.thumbExtraGap = e("extra-gap"),
        this[Gt] = e("width") || 40,
        this[fe] = e("clip-width") || 40,
        this[Ye] = e("height") || 40
    }
    build() {
        const t = this;
        if (t.state !== ye.Init)
            return;
        if (t.isDisabled())
            return void t.emit("disabled");
        const e = t.instance
          , i = e.container
          , n = t.getSlides()
          , s = t.option("type");
        t.type = s;
        const r = t.option("parentEl")
          , o = t.cn("container")
          , a = t.cn("track");
        let l = r == null ? void 0 : r.querySelector("." + o);
        l || (l = document.createElement("div"),
        _(l, o),
        r ? r.appendChild(l) : i.after(l)),
        _(l, `is-${s}`),
        _(i, t.cn("hasThumbs")),
        t.container = l,
        t.updateProps();
        let c = l.querySelector("." + a);
        c || (c = document.createElement("div"),
        _(c, t.cn("track")),
        l.appendChild(c)),
        t.track = c;
        const d = X({}, {
            track: c,
            infinite: !1,
            center: !0,
            fill: s === "classic",
            dragFree: !0,
            slidesPerPage: 1,
            transition: !1,
            preload: .25,
            friction: .12,
            Panzoom: {
                maxVelocity: 0
            },
            Dots: !1,
            Navigation: !1,
            classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide"
            }
        }, t.option("Carousel") || {}, {
            Sync: {
                target: e
            },
            slides: n
        })
          , u = new e.constructor(l,d);
        u.on("createSlide", (h, f) => {
            t.setProps(f.index),
            t.emit("createSlide", f, f.el)
        }
        ),
        u.on("ready", () => {
            t.shiftModern(),
            t.emit("ready")
        }
        ),
        u.on("refresh", () => {
            t.shiftModern()
        }
        ),
        u.on("Panzoom.click", (h, f, p) => {
            t.onClick(p)
        }
        ),
        t.carousel = u,
        t.state = ye.Ready
    }
    onClick(t) {
        t.preventDefault(),
        t.stopPropagation();
        const e = this.instance
          , {pages: i, page: n} = e
          , s = m => {
            if (m) {
                const g = m.closest("[data-carousel-index]");
                if (g)
                    return [parseInt(g.dataset.carouselIndex || "", 10) || 0, g]
            }
            return [-1, void 0]
        }
          , r = (m, g) => {
            const v = document.elementFromPoint(m, g);
            return v ? s(v) : [-1, void 0]
        }
        ;
        let[o,a] = s(t.target);
        if (o > -1)
            return;
        const l = this[fe]
          , c = t.clientX
          , d = t.clientY;
        let[u,h] = r(c - l, d)
          , [f,p] = r(c + l, d);
        h && p ? (o = Math.abs(c - h.getBoundingClientRect().right) < Math.abs(c - p.getBoundingClientRect().left) ? u : f,
        o === n && (o = o === u ? f : u)) : h ? o = u : p && (o = f),
        o > -1 && i[o] && e.slideTo(o)
    }
    getShift(t) {
        var e;
        const i = this
          , {instance: n} = i
          , s = i.carousel;
        if (!n || !s)
            return 0;
        const r = i[Gt]
          , o = i[fe]
          , a = i.thumbGap
          , l = i.thumbExtraGap;
        if (!(!((e = s.slides[t]) === null || e === void 0) && e.el))
            return 0;
        const c = .5 * (r - o)
          , d = n.pages.length - 1;
        let u = n.getProgress(0)
          , h = n.getProgress(d)
          , f = n.getProgress(t, !1, !0)
          , p = 0
          , m = c + l + a;
        const g = u < 0 && u > -1
          , v = h > 0 && h < 1;
        return t === 0 ? (p = m * Math.abs(u),
        v && u === 1 && (p -= m * Math.abs(h))) : t === d ? (p = m * Math.abs(h) * -1,
        g && h === -1 && (p += m * Math.abs(u))) : g || v ? (p = -1 * m,
        p += m * Math.abs(u),
        p += m * (1 - Math.abs(h))) : p = m * f,
        p
    }
    setProps(t) {
        var e;
        const i = this;
        if (!i.isModern)
            return;
        const {instance: n} = i
          , s = i.carousel;
        if (n && s) {
            const r = (e = s.slides[t]) === null || e === void 0 ? void 0 : e.el;
            if (r && r.childNodes.length) {
                let o = E(1 - Math.abs(n.getProgress(t)))
                  , a = E(i.getShift(t));
                r.style.setProperty("--progress", o ? o + "" : ""),
                r.style.setProperty("--shift", a + "")
            }
        }
    }
    shiftModern() {
        const t = this;
        if (!t.isModern)
            return;
        const {instance: e, track: i} = t
          , n = e.panzoom
          , s = t.carousel;
        if (!(e && i && n && s) || n.state === D.Init || n.state === D.Destroy)
            return;
        for (const o of e.slides)
            t.setProps(o.index);
        let r = (t[fe] + t.thumbGap) * (s.slides.length || 0);
        i.style.setProperty("--width", r + "")
    }
    cleanup() {
        const t = this;
        t.carousel && t.carousel.destroy(),
        t.carousel = null,
        t.container && t.container.remove(),
        t.container = null,
        t.track && t.track.remove(),
        t.track = null,
        t.state = ye.Init,
        z(t.instance.container, t.cn("hasThumbs"))
    }
    attach() {
        const t = this
          , e = t.instance;
        e.on("initSlide", t.onInitSlide),
        e.state === B.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(),
        e.on(["change", "Panzoom.afterTransform"], t.onChange),
        e.on("Panzoom.refresh", t.onRefresh)
    }
    detach() {
        const t = this
          , e = t.instance;
        e.off("initSlide", t.onInitSlide),
        e.off("initSlides", t.onInitSlides),
        e.off(["change", "Panzoom.afterTransform"], t.onChange),
        e.off("Panzoom.refresh", t.onRefresh),
        t.cleanup()
    }
}
;
Object.defineProperty(Fa, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Da
});
const yh = Object.assign(Object.assign({}, Da), {
    key: "t",
    showOnStart: !0,
    parentEl: null
})
  , gr = "is-masked"
  , vr = "aria-hidden";
class Na extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "hidden", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        })
    }
    get isEnabled() {
        const e = this.ref;
        return e && !e.isDisabled()
    }
    get isHidden() {
        return this.hidden
    }
    onClick(e, i) {
        i.stopPropagation()
    }
    onCreateSlide(e, i) {
        var n, s, r;
        const o = ((r = (s = (n = this.instance) === null || n === void 0 ? void 0 : n.carousel) === null || s === void 0 ? void 0 : s.slides[i.index]) === null || r === void 0 ? void 0 : r.type) || ""
          , a = i.el;
        if (a && o) {
            let l = `for-${o}`;
            ["video", "youtube", "vimeo", "html5video"].includes(o) && (l += " for-video"),
            _(a, l)
        }
    }
    onInit() {
        var e;
        const i = this
          , n = i.instance
          , s = n.carousel;
        if (i.ref || !s)
            return;
        const r = i.option("parentEl") || n.footer || n.container;
        if (!r)
            return;
        const o = X({}, i.options, {
            parentEl: r,
            classes: {
                container: "f-thumbs fancybox__thumbs"
            },
            Carousel: {
                Sync: {
                    friction: n.option("Carousel.friction") || 0
                }
            },
            on: {
                ready: a => {
                    const l = a.container;
                    l && this.hidden && (i.refresh(),
                    l.style.transition = "none",
                    i.hide(),
                    l.offsetHeight,
                    queueMicrotask( () => {
                        l.style.transition = "",
                        i.show()
                    }
                    ))
                }
            }
        });
        o.Carousel = o.Carousel || {},
        o.Carousel.on = X(((e = i.options.Carousel) === null || e === void 0 ? void 0 : e.on) || {}, {
            click: this.onClick,
            createSlide: this.onCreateSlide
        }),
        s.options.Thumbs = o,
        s.attachPlugins({
            Thumbs: Fa
        }),
        i.ref = s.plugins.Thumbs,
        i.option("showOnStart") || (i.ref.state = ye.Hidden,
        i.hidden = !0)
    }
    onResize() {
        var e;
        const i = (e = this.ref) === null || e === void 0 ? void 0 : e.container;
        i && (i.style.maxHeight = "")
    }
    onKeydown(e, i) {
        const n = this.option("key");
        n && n === i && this.toggle()
    }
    toggle() {
        const e = this.ref;
        if (e && !e.isDisabled())
            return e.state === ye.Hidden ? (e.state = ye.Init,
            void e.build()) : void (this.hidden ? this.show() : this.hide())
    }
    show() {
        const e = this.ref;
        if (!e || e.isDisabled())
            return;
        const i = e.container;
        i && (this.refresh(),
        i.offsetHeight,
        i.removeAttribute(vr),
        i.classList.remove(gr),
        this.hidden = !1)
    }
    hide() {
        const e = this.ref
          , i = e && e.container;
        i && (this.refresh(),
        i.offsetHeight,
        i.classList.add(gr),
        i.setAttribute(vr, "true")),
        this.hidden = !0
    }
    refresh() {
        const e = this.ref;
        if (!e || !e.state)
            return;
        const i = e.container
          , n = (i == null ? void 0 : i.firstChild) || null;
        i && n && n.childNodes.length && (i.style.maxHeight = `${n.getBoundingClientRect().height}px`)
    }
    attach() {
        const e = this
          , i = e.instance;
        i.state === q.Init ? i.on("Carousel.init", e.onInit) : e.onInit(),
        i.on("resize", e.onResize),
        i.on("keydown", e.onKeydown)
    }
    detach() {
        var e;
        const i = this
          , n = i.instance;
        n.off("Carousel.init", i.onInit),
        n.off("resize", i.onResize),
        n.off("keydown", i.onKeydown),
        (e = n.carousel) === null || e === void 0 || e.detachPlugins(["Thumbs"]),
        i.ref = null
    }
}
Object.defineProperty(Na, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: yh
});
const Qi = {
    panLeft: {
        icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
        change: {
            panX: -100
        }
    },
    panRight: {
        icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
        change: {
            panX: 100
        }
    },
    panUp: {
        icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
        change: {
            panY: -100
        }
    },
    panDown: {
        icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
        change: {
            panY: 100
        }
    },
    zoomIn: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
        action: "zoomIn"
    },
    zoomOut: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "zoomOut"
    },
    toggle1to1: {
        icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
        action: "toggleZoom"
    },
    toggleZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "toggleZoom"
    },
    iterateZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "iterateZoom"
    },
    rotateCCW: {
        icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
        action: "rotateCCW"
    },
    rotateCW: {
        icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
        action: "rotateCW"
    },
    flipX: {
        icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
        action: "flipX"
    },
    flipY: {
        icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
        action: "flipY"
    },
    fitX: {
        icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
        action: "fitX"
    },
    fitY: {
        icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
        action: "fitY"
    },
    reset: {
        icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
        action: "reset"
    },
    toggleFS: {
        icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
        action: "toggleFS"
    }
};
var ze;
(function(t) {
    t[t.Init = 0] = "Init",
    t[t.Ready = 1] = "Ready",
    t[t.Disabled = 2] = "Disabled"
}
)(ze || (ze = {}));
const wh = {
    absolute: "auto",
    display: {
        left: ["infobar"],
        middle: [],
        right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
    },
    enabled: "auto",
    items: {
        infobar: {
            tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
        },
        download: {
            tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
        },
        prev: {
            tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
        },
        next: {
            tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
        },
        slideshow: {
            tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
        },
        fullscreen: {
            tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
        },
        thumbs: {
            tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
        },
        close: {
            tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
        }
    },
    parentEl: null
}
  , xh = {
    tabindex: "-1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
}
  , br = "has-toolbar"
  , en = "fancybox__toolbar";
class ja extends de {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ze.Init
        }),
        Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        })
    }
    onReady(e) {
        var i;
        if (!e.carousel)
            return;
        let n = this.option("display")
          , s = this.option("absolute")
          , r = this.option("enabled");
        if (r === "auto") {
            const c = this.instance.carousel;
            let d = 0;
            if (c)
                for (const u of c.slides)
                    (u.panzoom || u.type === "image") && d++;
            d || (r = !1)
        }
        r || (n = void 0);
        let o = 0;
        const a = {
            left: [],
            middle: [],
            right: []
        };
        if (n)
            for (const c of ["left", "middle", "right"])
                for (const d of n[c]) {
                    const u = this.createEl(d);
                    u && ((i = a[c]) === null || i === void 0 || i.push(u),
                    o++)
                }
        let l = null;
        if (o && (l = this.createContainer()),
        l) {
            for (const [c,d] of Object.entries(a)) {
                const u = document.createElement("div");
                _(u, en + "__column is-" + c);
                for (const h of d)
                    u.appendChild(h);
                s !== "auto" || c !== "middle" || d.length || (s = !0),
                l.appendChild(u)
            }
            s === !0 && _(l, "is-absolute"),
            this.state = ze.Ready,
            this.onRefresh()
        } else
            this.state = ze.Disabled
    }
    onClick(e) {
        var i, n;
        const s = this.instance
          , r = s.getSlide()
          , o = r == null ? void 0 : r.panzoom
          , a = e.target
          , l = a && U(a) ? a.dataset : null;
        if (!l)
            return;
        if (l.fancyboxToggleThumbs !== void 0)
            return e.preventDefault(),
            e.stopPropagation(),
            void ((i = s.plugins.Thumbs) === null || i === void 0 || i.toggle());
        if (l.fancyboxToggleFullscreen !== void 0)
            return e.preventDefault(),
            e.stopPropagation(),
            void this.instance.toggleFullscreen();
        if (l.fancyboxToggleSlideshow !== void 0) {
            e.preventDefault(),
            e.stopPropagation();
            const u = (n = s.carousel) === null || n === void 0 ? void 0 : n.plugins.Autoplay;
            let h = u.isActive;
            return o && o.panMode === "mousemove" && !h && o.reset(),
            void (h ? u.stop() : u.start())
        }
        const c = l.panzoomAction
          , d = l.panzoomChange;
        if ((d || c) && (e.preventDefault(),
        e.stopPropagation()),
        d) {
            let u = {};
            try {
                u = JSON.parse(d)
            } catch {}
            o && o.applyChange(u)
        } else
            c && o && o[c] && o[c]()
    }
    onChange() {
        this.onRefresh()
    }
    onRefresh() {
        if (this.instance.isClosing())
            return;
        const e = this.container;
        if (!e)
            return;
        const i = this.instance.getSlide();
        if (!i || i.state !== W.Ready)
            return;
        const n = i && !i.error && i.panzoom;
        for (const o of e.querySelectorAll("[data-panzoom-action]"))
            n ? (o.removeAttribute("disabled"),
            o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""),
            o.setAttribute("tabindex", "-1"));
        let s = n && n.canZoomIn()
          , r = n && n.canZoomOut();
        for (const o of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
            s ? (o.removeAttribute("disabled"),
            o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""),
            o.setAttribute("tabindex", "-1"));
        for (const o of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
            r ? (o.removeAttribute("disabled"),
            o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""),
            o.setAttribute("tabindex", "-1"));
        for (const o of e.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
            r || s ? (o.removeAttribute("disabled"),
            o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""),
            o.setAttribute("tabindex", "-1"));
            const a = o.querySelector("g");
            a && (a.style.display = s ? "" : "none")
        }
    }
    onDone(e, i) {
        var n;
        (n = i.panzoom) === null || n === void 0 || n.on("afterTransform", () => {
            this.instance.isCurrentSlide(i) && this.onRefresh()
        }
        ),
        this.instance.isCurrentSlide(i) && this.onRefresh()
    }
    createContainer() {
        const e = this.instance.container;
        if (!e)
            return null;
        const i = this.option("parentEl") || e;
        let n = i.querySelector("." + en);
        return n || (n = document.createElement("div"),
        _(n, en),
        i.prepend(n)),
        n.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !0
        }),
        e && _(e, br),
        this.container = n,
        n
    }
    createEl(e) {
        const i = this.instance
          , n = i.carousel;
        if (!n || e === "toggleFS" || e === "fullscreen" && !_a())
            return null;
        let s = null;
        const r = n.slides.length || 0;
        let o = 0
          , a = 0;
        for (const c of n.slides)
            (c.panzoom || c.type === "image") && o++,
            (c.type === "image" || c.downloadSrc) && a++;
        if (r < 2 && ["infobar", "prev", "next"].includes(e))
            return s;
        if (Qi[e] !== void 0 && !o || e === "download" && !a)
            return null;
        if (e === "thumbs") {
            const c = i.plugins.Thumbs;
            if (!c || !c.isEnabled)
                return null
        }
        if (e === "slideshow" && (!n.plugins.Autoplay || r < 2))
            return null;
        if (Qi[e] !== void 0) {
            const c = Qi[e];
            s = document.createElement("button"),
            s.setAttribute("title", this.instance.localize(`{{${e.toUpperCase()}}}`)),
            _(s, "f-button"),
            c.action && (s.dataset.panzoomAction = c.action),
            c.change && (s.dataset.panzoomChange = JSON.stringify(c.change)),
            s.appendChild(pe(this.instance.localize(c.icon)))
        } else {
            const c = (this.option("items") || [])[e];
            c && (s = pe(this.instance.localize(c.tpl)),
            typeof c.click == "function" && s.addEventListener("click", d => {
                d.preventDefault(),
                d.stopPropagation(),
                typeof c.click == "function" && c.click.call(this, this, d)
            }
            ))
        }
        const l = s == null ? void 0 : s.querySelector("svg");
        if (l)
            for (const [c,d] of Object.entries(xh))
                l.getAttribute(c) || l.setAttribute(c, String(d));
        return s
    }
    removeContainer() {
        const e = this.container;
        e && e.remove(),
        this.container = null,
        this.state = ze.Disabled;
        const i = this.instance.container;
        i && z(i, br)
    }
    attach() {
        const e = this
          , i = e.instance;
        i.on("Carousel.initSlides", e.onReady),
        i.on("done", e.onDone),
        i.on(["reveal", "Carousel.change"], e.onChange),
        e.onReady(e.instance)
    }
    detach() {
        const e = this
          , i = e.instance;
        i.off("Carousel.initSlides", e.onReady),
        i.off("done", e.onDone),
        i.off(["reveal", "Carousel.change"], e.onChange),
        e.removeContainer()
    }
}
Object.defineProperty(ja, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: wh
});
const Sh = {
    Hash: class extends de {
        onReady() {
            gt = !1
        }
        onChange(t) {
            Ie && clearTimeout(Ie);
            const {hash: e} = Ma()
              , {hash: i} = ui()
              , n = t.isOpeningSlide(t.getSlide());
            n && (ur = i === e ? "" : i),
            e && e !== i && (Ie = setTimeout( () => {
                try {
                    if (t.state === q.Ready) {
                        let s = "replaceState";
                        n && !Ht && (s = "pushState",
                        Ht = !0),
                        window.history[s]({}, document.title, window.location.pathname + window.location.search + e)
                    }
                } catch {}
            }
            , 300))
        }
        onClose(t) {
            if (Ie && clearTimeout(Ie),
            !gt && Ht)
                return Ht = !1,
                gt = !1,
                void window.history.back();
            if (!gt)
                try {
                    window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ur || ""))
                } catch {}
        }
        attach() {
            const t = this.instance;
            t.on("ready", this.onReady),
            t.on(["Carousel.ready", "Carousel.change"], this.onChange),
            t.on("close", this.onClose)
        }
        detach() {
            const t = this.instance;
            t.off("ready", this.onReady),
            t.off(["Carousel.ready", "Carousel.change"], this.onChange),
            t.off("close", this.onClose)
        }
        static parseURL() {
            return ui()
        }
        static startFromUrl() {
            Oa()
        }
        static destroy() {
            window.removeEventListener("hashchange", La, !1)
        }
    }
    ,
    Html: Ra,
    Images: Ia,
    Slideshow: za,
    Thumbs: Na,
    Toolbar: ja
}
  , yr = "with-fancybox"
  , tn = "hide-scrollbar"
  , wr = "--fancybox-scrollbar-compensate"
  , xr = "--fancybox-body-margin"
  , nn = "aria-hidden"
  , sn = "is-using-tab"
  , rn = "is-animated"
  , Sr = "is-compact"
  , Er = "is-loading"
  , on = "is-opening"
  , Ut = "has-caption"
  , Ke = "disabled"
  , Oe = "tabindex"
  , Tr = "download"
  , an = "href"
  , Ze = "src"
  , Ee = t => typeof t == "string"
  , Cr = function() {
    var t = window.getSelection();
    return !!t && t.type === "Range"
};
let ie, ne = null, Ae = null, Pr = 0, _r = 0, Mr = 0, Or = 0;
const Je = new Map;
let Eh = 0;
class R extends ms {
    get isIdle() {
        return this.idle
    }
    get isCompact() {
        return this.option("compact")
    }
    constructor(e=[], i={}, n={}) {
        super(i),
        Object.defineProperty(this, "userSlides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }),
        Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }),
        Object.defineProperty(this, "idle", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "idleTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "startedFs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: q.Init
        }),
        Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }),
        Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "footer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "lastFocus", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }),
        Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        ie || (ie = _a()),
        this.id = i.id || ++Eh,
        Je.set(this.id, this),
        this.userSlides = e,
        this.userPlugins = n,
        queueMicrotask( () => {
            this.init()
        }
        )
    }
    init() {
        if (this.state === q.Destroy)
            return;
        this.state = q.Init,
        this.attachPlugins(Object.assign(Object.assign({}, R.Plugins), this.userPlugins)),
        this.emit("init"),
        this.emit("attachPlugins"),
        this.option("hideScrollbar") === !0 && ( () => {
            if (!wt)
                return;
            const i = document
              , n = i.body
              , s = i.documentElement;
            if (n.classList.contains(tn))
                return;
            let r = window.innerWidth - s.getBoundingClientRect().width;
            const o = parseFloat(window.getComputedStyle(n).marginRight);
            r < 0 && (r = 0),
            s.style.setProperty(wr, `${r}px`),
            o && n.style.setProperty(xr, `${o}px`),
            n.classList.add(tn)
        }
        )(),
        this.initLayout(),
        this.scale();
        const e = () => {
            this.initCarousel(this.userSlides),
            this.state = q.Ready,
            this.attachEvents(),
            this.emit("ready"),
            setTimeout( () => {
                this.container && this.container.setAttribute(nn, "false")
            }
            , 16)
        }
        ;
        this.option("Fullscreen.autoStart") && ie && !ie.isFullscreen() ? ie.request().then( () => {
            this.startedFs = !0,
            e()
        }
        ).catch( () => e()) : e()
    }
    initLayout() {
        var e, i;
        const n = this.option("parentEl") || document.body
          , s = pe(this.localize(this.option("tpl.main") || ""));
        if (s) {
            if (s.setAttribute("id", `fancybox-${this.id}`),
            s.setAttribute("aria-label", this.localize("{{MODAL}}")),
            s.classList.toggle(Sr, this.isCompact),
            _(s, this.option("mainClass") || ""),
            _(s, on),
            this.container = s,
            this.footer = s.querySelector(".fancybox__footer"),
            n.appendChild(s),
            _(document.documentElement, yr),
            ne && Ae || (ne = document.createElement("span"),
            _(ne, "fancybox-focus-guard"),
            ne.setAttribute(Oe, "0"),
            ne.setAttribute(nn, "true"),
            ne.setAttribute("aria-label", "Focus guard"),
            Ae = ne.cloneNode(),
            (e = s.parentElement) === null || e === void 0 || e.insertBefore(ne, s),
            (i = s.parentElement) === null || i === void 0 || i.append(Ae)),
            s.addEventListener("mousedown", r => {
                Pr = r.pageX,
                _r = r.pageY,
                z(s, sn)
            }
            ),
            this.option("closeExisting"))
                for (const r of Je.values())
                    r.id !== this.id && r.close();
            else
                this.option("animated") && (_(s, rn),
                setTimeout( () => {
                    this.isClosing() || z(s, rn)
                }
                , 350));
            this.emit("initLayout")
        }
    }
    initCarousel(e) {
        const i = this.container;
        if (!i)
            return;
        const n = i.querySelector(".fancybox__carousel");
        if (!n)
            return;
        const s = this.carousel = new $e(n,X({}, {
            slides: e,
            transition: "fade",
            Panzoom: {
                lockAxis: this.option("dragToClose") ? "xy" : "x",
                infinite: !!this.option("dragToClose") && "y"
            },
            Dots: !1,
            Navigation: {
                classes: {
                    container: "fancybox__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                }
            },
            initialPage: this.option("startIndex"),
            l10n: this.option("l10n")
        }, this.option("Carousel") || {}));
        s.on("*", (r, o, ...a) => {
            this.emit(`Carousel.${o}`, r, ...a)
        }
        ),
        s.on(["ready", "change"], () => {
            this.manageCaption()
        }
        ),
        this.on("Carousel.removeSlide", (r, o, a) => {
            this.clearContent(a),
            a.state = void 0
        }
        ),
        s.on("Panzoom.touchStart", () => {
            var r, o;
            this.isCompact || this.endIdle(),
            !((r = document.activeElement) === null || r === void 0) && r.closest(".f-thumbs") && ((o = this.container) === null || o === void 0 || o.focus())
        }
        ),
        s.on("settle", () => {
            this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(),
            this.option("autoFocus") && !this.isClosing && this.checkFocus()
        }
        ),
        this.option("dragToClose") && (s.on("Panzoom.afterTransform", (r, o) => {
            const a = this.getSlide();
            if (a && Dn(a.el))
                return;
            const l = this.container;
            if (l) {
                const c = Math.abs(o.current.f)
                  , d = c < 1 ? "" : Math.max(.5, Math.min(1, 1 - c / o.contentRect.fitHeight * 1.5));
                l.style.setProperty("--fancybox-ts", d ? "0s" : ""),
                l.style.setProperty("--fancybox-opacity", d + "")
            }
        }
        ),
        s.on("Panzoom.touchEnd", (r, o, a) => {
            var l;
            const c = this.getSlide();
            if (c && Dn(c.el) || o.isMobile && document.activeElement && ["TEXTAREA", "INPUT"].indexOf((l = document.activeElement) === null || l === void 0 ? void 0 : l.nodeName) !== -1)
                return;
            const d = Math.abs(o.dragOffset.y);
            o.lockedAxis === "y" && (d >= 200 || d >= 50 && o.dragOffset.time < 300) && (a && a.cancelable && a.preventDefault(),
            this.close(a, "f-throwOut" + (o.current.f < 0 ? "Up" : "Down")))
        }
        )),
        s.on("change", r => {
            var o;
            let a = (o = this.getSlide()) === null || o === void 0 ? void 0 : o.triggerEl;
            if (a) {
                const l = new CustomEvent("slideTo",{
                    bubbles: !0,
                    cancelable: !0,
                    detail: r.page
                });
                a.dispatchEvent(l)
            }
        }
        ),
        s.on(["refresh", "change"], r => {
            const o = this.container;
            if (!o)
                return;
            for (const c of o.querySelectorAll("[data-fancybox-current-index]"))
                c.innerHTML = r.page + 1;
            for (const c of o.querySelectorAll("[data-fancybox-count]"))
                c.innerHTML = r.pages.length;
            if (!r.isInfinite) {
                for (const c of o.querySelectorAll("[data-fancybox-next]"))
                    r.page < r.pages.length - 1 ? (c.removeAttribute(Ke),
                    c.removeAttribute(Oe)) : (c.setAttribute(Ke, ""),
                    c.setAttribute(Oe, "-1"));
                for (const c of o.querySelectorAll("[data-fancybox-prev]"))
                    r.page > 0 ? (c.removeAttribute(Ke),
                    c.removeAttribute(Oe)) : (c.setAttribute(Ke, ""),
                    c.setAttribute(Oe, "-1"))
            }
            const a = this.getSlide();
            if (!a)
                return;
            let l = a.downloadSrc || "";
            l || a.type !== "image" || a.error || !Ee(a[Ze]) || (l = a[Ze]);
            for (const c of o.querySelectorAll("[data-fancybox-download]")) {
                const d = a.downloadFilename;
                l ? (c.removeAttribute(Ke),
                c.removeAttribute(Oe),
                c.setAttribute(an, l),
                c.setAttribute(Tr, d || l),
                c.setAttribute("target", "_blank")) : (c.setAttribute(Ke, ""),
                c.setAttribute(Oe, "-1"),
                c.removeAttribute(an),
                c.removeAttribute(Tr))
            }
        }
        ),
        this.emit("initCarousel")
    }
    attachEvents() {
        const e = this
          , i = e.container;
        if (!i)
            return;
        i.addEventListener("click", e.onClick, {
            passive: !1,
            capture: !1
        }),
        i.addEventListener("wheel", e.onWheel, {
            passive: !1,
            capture: !1
        }),
        document.addEventListener("keydown", e.onKeydown, {
            passive: !1,
            capture: !0
        }),
        document.addEventListener("visibilitychange", e.onVisibilityChange, !1),
        document.addEventListener("mousemove", e.onMousemove),
        e.option("trapFocus") && document.addEventListener("focus", e.onFocus, !0),
        window.addEventListener("resize", e.onResize);
        const n = window.visualViewport;
        n && (n.addEventListener("scroll", e.onResize),
        n.addEventListener("resize", e.onResize))
    }
    detachEvents() {
        const e = this
          , i = e.container;
        if (!i)
            return;
        document.removeEventListener("keydown", e.onKeydown, {
            passive: !1,
            capture: !0
        }),
        i.removeEventListener("wheel", e.onWheel, {
            passive: !1,
            capture: !1
        }),
        i.removeEventListener("click", e.onClick, {
            passive: !1,
            capture: !1
        }),
        document.removeEventListener("mousemove", e.onMousemove),
        window.removeEventListener("resize", e.onResize);
        const n = window.visualViewport;
        n && (n.removeEventListener("resize", e.onResize),
        n.removeEventListener("scroll", e.onResize)),
        document.removeEventListener("visibilitychange", e.onVisibilityChange, !1),
        document.removeEventListener("focus", e.onFocus, !0)
    }
    scale() {
        const e = this.container;
        if (!e)
            return;
        const i = window.visualViewport
          , n = Math.max(1, (i == null ? void 0 : i.scale) || 1);
        let s = ""
          , r = ""
          , o = "";
        if (i && n > 1) {
            let a = `${i.offsetLeft}px`
              , l = `${i.offsetTop}px`;
            s = i.width * n + "px",
            r = i.height * n + "px",
            o = `translate3d(${a}, ${l}, 0) scale(${1 / n})`
        }
        e.style.transform = o,
        e.style.width = s,
        e.style.height = r
    }
    onClick(e) {
        var i;
        const {container: n, isCompact: s} = this;
        if (!n || this.isClosing())
            return;
        !s && this.option("idle") && this.resetIdle();
        const r = e.composedPath()[0];
        if (r.closest(".fancybox-spinner") || r.closest("[data-fancybox-close]"))
            return e.preventDefault(),
            void this.close(e);
        if (r.closest("[data-fancybox-prev]"))
            return e.preventDefault(),
            void this.prev();
        if (r.closest("[data-fancybox-next]"))
            return e.preventDefault(),
            void this.next();
        if (e.type === "click" && e.detail === 0 || Math.abs(e.pageX - Pr) > 30 || Math.abs(e.pageY - _r) > 30)
            return;
        const o = document.activeElement;
        if (Cr() && o && n.contains(o))
            return;
        if (s && ((i = this.getSlide()) === null || i === void 0 ? void 0 : i.type) === "image")
            return void (this.clickTimer ? (clearTimeout(this.clickTimer),
            this.clickTimer = null) : this.clickTimer = setTimeout( () => {
                this.toggleIdle(),
                this.clickTimer = null
            }
            , 350));
        if (this.emit("click", e),
        e.defaultPrevented)
            return;
        let a = !1;
        if (r.closest(".fancybox__content")) {
            if (o) {
                if (o.closest("[contenteditable]"))
                    return;
                r.matches(Ki) || o.blur()
            }
            if (Cr())
                return;
            a = this.option("contentClick")
        } else
            r.closest(".fancybox__carousel") && !r.matches(Ki) && (a = this.option("backdropClick"));
        a === "close" ? (e.preventDefault(),
        this.close(e)) : a === "next" ? (e.preventDefault(),
        this.next()) : a === "prev" && (e.preventDefault(),
        this.prev())
    }
    onWheel(e) {
        const i = e.target;
        let n = this.option("wheel", e);
        i.closest(".fancybox__thumbs") && (n = "slide");
        const s = n === "slide"
          , r = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function(l, c) {
            return Math.abs(c) > Math.abs(l) ? c : l
        })
          , o = Math.max(-1, Math.min(1, r))
          , a = Date.now();
        this.pwt && a - this.pwt < 300 ? s && e.preventDefault() : (this.pwt = a,
        this.emit("wheel", e, o),
        e.defaultPrevented || (n === "close" ? (e.preventDefault(),
        this.close(e)) : n === "slide" && (ci(i) || (e.preventDefault(),
        this[o > 0 ? "prev" : "next"]()))))
    }
    onScroll() {
        window.scrollTo(Mr, Or)
    }
    onKeydown(e) {
        if (!this.isTopmost())
            return;
        this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
        const i = e.key
          , n = this.option("keyboard");
        if (!n)
            return;
        const s = e.composedPath()[0]
          , r = document.activeElement && document.activeElement.classList
          , o = r && r.contains("f-button") || s.dataset.carouselPage || s.dataset.carouselIndex;
        if (i !== "Escape" && !o && U(s) && (s.isContentEditable || ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(s.nodeName) !== -1) || (e.key === "Tab" ? _(this.container, sn) : z(this.container, sn),
        e.ctrlKey || e.altKey || e.shiftKey))
            return;
        this.emit("keydown", i, e);
        const a = n[i];
        a && typeof this[a] == "function" && (e.preventDefault(),
        this[a]())
    }
    onResize() {
        const e = this.container;
        if (!e)
            return;
        const i = this.isCompact;
        e.classList.toggle(Sr, i),
        this.manageCaption(this.getSlide()),
        this.isCompact ? this.clearIdle() : this.endIdle(),
        this.scale(),
        this.emit("resize")
    }
    onFocus(e) {
        this.isTopmost() && this.checkFocus(e)
    }
    onMousemove(e) {
        this.prevMouseMoveEvent = e,
        !this.isCompact && this.option("idle") && this.resetIdle()
    }
    onVisibilityChange() {
        document.visibilityState === "visible" ? this.checkFocus() : this.endIdle()
    }
    manageCloseBtn(e) {
        const i = this.optionFor(e, "closeButton") || !1;
        if (i === "auto") {
            const s = this.plugins.Toolbar;
            if (s && s.state === ze.Ready)
                return
        }
        if (!i || !e.contentEl || e.closeBtnEl)
            return;
        const n = this.option("tpl.closeButton");
        if (n) {
            const s = pe(this.localize(n));
            e.closeBtnEl = e.contentEl.appendChild(s),
            e.el && _(e.el, "has-close-btn")
        }
    }
    manageCaption(e=void 0) {
        var i, n;
        const s = "fancybox__caption"
          , r = this.container;
        if (!r)
            return;
        z(r, Ut);
        const o = this.isCompact || this.option("commonCaption")
          , a = !o;
        if (this.caption && this.stop(this.caption),
        a && this.caption && (this.caption.remove(),
        this.caption = null),
        o && !this.caption)
            for (const u of ((i = this.carousel) === null || i === void 0 ? void 0 : i.slides) || [])
                u.captionEl && (u.captionEl.remove(),
                u.captionEl = void 0,
                z(u.el, Ut),
                (n = u.el) === null || n === void 0 || n.removeAttribute("aria-labelledby"));
        if (e || (e = this.getSlide()),
        !e || o && !this.isCurrentSlide(e))
            return;
        const l = e.el;
        let c = this.optionFor(e, "caption", "");
        if (!c)
            return void (o && this.caption && this.animate(this.caption, "f-fadeOut", () => {
                this.caption && (this.caption.innerHTML = "")
            }
            ));
        let d = null;
        if (a) {
            if (d = e.captionEl || null,
            l && !d) {
                const u = s + `_${this.id}_${e.index}`;
                d = document.createElement("div"),
                _(d, s),
                d.setAttribute("id", u),
                e.captionEl = l.appendChild(d),
                _(l, Ut),
                l.setAttribute("aria-labelledby", u)
            }
        } else
            d = this.caption,
            d || (d = r.querySelector("." + s)),
            !d && (d = document.createElement("div"),
            d.dataset.fancyboxCaption = "",
            _(d, s),
            (this.footer || r).prepend(d)),
            _(r, Ut),
            this.caption = d;
        d && (d.innerHTML = "",
        Ee(c) || typeof c == "number" ? d.innerHTML = c + "" : c instanceof HTMLElement && d.appendChild(c))
    }
    checkFocus(e) {
        this.focus(e)
    }
    focus(e) {
        var i;
        if (this.ignoreFocusChange)
            return;
        const n = document.activeElement || null
          , s = (e == null ? void 0 : e.target) || null
          , r = this.container
          , o = (i = this.carousel) === null || i === void 0 ? void 0 : i.viewport;
        if (!r || !o || !e && n && r.contains(n))
            return;
        const a = this.getSlide()
          , l = a && a.state === W.Ready ? a.el : null;
        if (!l || l.contains(n) || r === n)
            return;
        e && e.cancelable && e.preventDefault(),
        this.ignoreFocusChange = !0;
        const c = Array.from(r.querySelectorAll(Ki));
        let d = []
          , u = null;
        for (let f of c) {
            const p = !f.offsetParent || !!f.closest('[aria-hidden="true"]')
              , m = l && l.contains(f)
              , g = !o.contains(f);
            if (f === r || (m || g) && !p) {
                d.push(f);
                const v = f.dataset.origTabindex;
                v !== void 0 && v && (f.tabIndex = parseFloat(v)),
                f.removeAttribute("data-orig-tabindex"),
                !f.hasAttribute("autoFocus") && u || (u = f)
            } else {
                const v = f.dataset.origTabindex === void 0 ? f.getAttribute("tabindex") || "" : f.dataset.origTabindex;
                v && (f.dataset.origTabindex = v),
                f.tabIndex = -1
            }
        }
        let h = null;
        e ? (!s || d.indexOf(s) < 0) && (h = u || r,
        d.length && (n === Ae ? h = d[0] : this.lastFocus !== r && n !== ne || (h = d[d.length - 1]))) : h = a && a.type === "image" ? r : u || r,
        h && dr(h),
        this.lastFocus = document.activeElement,
        this.ignoreFocusChange = !1
    }
    next() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slideNext()
    }
    prev() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slidePrev()
    }
    jumpTo(...e) {
        this.carousel && this.carousel.slideTo(...e)
    }
    isTopmost() {
        var e;
        return ((e = R.getInstance()) === null || e === void 0 ? void 0 : e.id) == this.id
    }
    animate(e=null, i="", n) {
        if (!e || !i)
            return void (n && n());
        this.stop(e);
        const s = r => {
            r.target === e && e.dataset.animationName && (e.removeEventListener("animationend", s),
            delete e.dataset.animationName,
            n && n(),
            z(e, i))
        }
        ;
        e.dataset.animationName = i,
        e.addEventListener("animationend", s),
        _(e, i)
    }
    stop(e) {
        e && e.dispatchEvent(new CustomEvent("animationend",{
            bubbles: !1,
            cancelable: !0,
            currentTarget: e
        }))
    }
    setContent(e, i="", n=!0) {
        if (this.isClosing())
            return;
        const s = e.el;
        if (!s)
            return;
        let r = null;
        if (U(i) ? r = i : (r = pe(i + ""),
        U(r) || (r = document.createElement("div"),
        r.innerHTML = i + "")),
        ["img", "picture", "iframe", "video", "audio"].includes(r.nodeName.toLowerCase())) {
            const o = document.createElement("div");
            o.appendChild(r),
            r = o
        }
        U(r) && e.filter && !e.error && (r = r.querySelector(e.filter)),
        r && U(r) ? (_(r, "fancybox__content"),
        e.id && r.setAttribute("id", e.id),
        s.classList.add(`has-${e.error ? "error" : e.type || "unknown"}`),
        s.prepend(r),
        r.style.display === "none" && (r.style.display = ""),
        getComputedStyle(r).getPropertyValue("display") === "none" && (r.style.display = e.display || this.option("defaultDisplay") || "flex"),
        e.contentEl = r,
        n && this.revealContent(e),
        this.manageCloseBtn(e),
        this.manageCaption(e)) : this.setError(e, "{{ELEMENT_NOT_FOUND}}")
    }
    revealContent(e, i) {
        const n = e.el
          , s = e.contentEl;
        n && s && (this.emit("reveal", e),
        this.hideLoading(e),
        e.state = W.Opening,
        (i = this.isOpeningSlide(e) ? i === void 0 ? this.optionFor(e, "showClass") : i : "f-fadeIn") ? this.animate(s, i, () => {
            this.done(e)
        }
        ) : this.done(e))
    }
    done(e) {
        this.isClosing() || (e.state = W.Ready,
        this.emit("done", e),
        _(e.el, "is-done"),
        this.isCurrentSlide(e) && this.option("autoFocus") && queueMicrotask( () => {
            var i;
            (i = e.panzoom) === null || i === void 0 || i.updateControls(),
            this.option("autoFocus") && this.focus()
        }
        ),
        this.isOpeningSlide(e) && (z(this.container, on),
        !this.isCompact && this.option("idle") && this.setIdle()))
    }
    isCurrentSlide(e) {
        const i = this.getSlide();
        return !(!e || !i) && i.index === e.index
    }
    isOpeningSlide(e) {
        var i, n;
        return ((i = this.carousel) === null || i === void 0 ? void 0 : i.prevPage) === null && e && e.index === ((n = this.getSlide()) === null || n === void 0 ? void 0 : n.index)
    }
    showLoading(e) {
        e.state = W.Loading;
        const i = e.el;
        i && (_(i, Er),
        this.emit("loading", e),
        e.spinnerEl || setTimeout( () => {
            if (!this.isClosing() && !e.spinnerEl && e.state === W.Loading) {
                let n = pe(gs);
                _(n, "fancybox-spinner"),
                e.spinnerEl = n,
                i.prepend(n),
                this.animate(n, "f-fadeIn")
            }
        }
        , 250))
    }
    hideLoading(e) {
        const i = e.el;
        if (!i)
            return;
        const n = e.spinnerEl;
        this.isClosing() ? n == null || n.remove() : (z(i, Er),
        n && this.animate(n, "f-fadeOut", () => {
            n.remove()
        }
        ),
        e.state === W.Loading && (this.emit("loaded", e),
        e.state = W.Ready))
    }
    setError(e, i) {
        if (this.isClosing())
            return;
        const n = new Event("error",{
            bubbles: !0,
            cancelable: !0
        });
        if (this.emit("error", n, e),
        n.defaultPrevented)
            return;
        e.error = i,
        this.hideLoading(e),
        this.clearContent(e);
        const s = document.createElement("div");
        s.classList.add("fancybox-error"),
        s.innerHTML = this.localize(i || "<p>{{ERROR}}</p>"),
        this.setContent(e, s)
    }
    clearContent(e) {
        if (e.state === void 0)
            return;
        this.emit("clearContent", e),
        e.contentEl && (e.contentEl.remove(),
        e.contentEl = void 0);
        const i = e.el;
        i && (z(i, "has-error"),
        z(i, "has-unknown"),
        z(i, `has-${e.type || "unknown"}`)),
        e.closeBtnEl && e.closeBtnEl.remove(),
        e.closeBtnEl = void 0,
        e.captionEl && e.captionEl.remove(),
        e.captionEl = void 0,
        e.spinnerEl && e.spinnerEl.remove(),
        e.spinnerEl = void 0
    }
    getSlide() {
        var e;
        const i = this.carousel;
        return ((e = i == null ? void 0 : i.pages[i == null ? void 0 : i.page]) === null || e === void 0 ? void 0 : e.slides[0]) || void 0
    }
    close(e, i) {
        if (this.isClosing())
            return;
        const n = new Event("shouldClose",{
            bubbles: !0,
            cancelable: !0
        });
        if (this.emit("shouldClose", n, e),
        n.defaultPrevented)
            return;
        e && e.cancelable && (e.preventDefault(),
        e.stopPropagation());
        const s = () => {
            this.proceedClose(e, i)
        }
        ;
        this.startedFs && ie && ie.isFullscreen() ? Promise.resolve(ie.exit()).then( () => s()) : s()
    }
    clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer),
        this.idleTimer = null
    }
    setIdle(e=!1) {
        const i = () => {
            this.clearIdle(),
            this.idle = !0,
            _(this.container, "is-idle"),
            this.emit("setIdle")
        }
        ;
        if (this.clearIdle(),
        !this.isClosing())
            if (e)
                i();
            else {
                const n = this.option("idle");
                n && (this.idleTimer = setTimeout(i, n))
            }
    }
    endIdle() {
        this.clearIdle(),
        this.idle && !this.isClosing() && (this.idle = !1,
        z(this.container, "is-idle"),
        this.emit("endIdle"))
    }
    resetIdle() {
        this.endIdle(),
        this.setIdle()
    }
    toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0)
    }
    toggleFullscreen() {
        ie && (ie.isFullscreen() ? ie.exit() : ie.request().then( () => {
            this.startedFs = !0
        }
        ))
    }
    isClosing() {
        return [q.Closing, q.CustomClosing, q.Destroy].includes(this.state)
    }
    proceedClose(e, i) {
        var n, s;
        this.state = q.Closing,
        this.clearIdle(),
        this.detachEvents();
        const r = this.container
          , o = this.carousel
          , a = this.getSlide()
          , l = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
        if (l && (Pa(l) ? dr(l) : l.focus()),
        r && (z(r, on),
        _(r, "is-closing"),
        r.setAttribute(nn, "true"),
        this.option("animated") && _(r, rn),
        r.style.pointerEvents = "none"),
        o) {
            o.clearTransitions(),
            (n = o.panzoom) === null || n === void 0 || n.destroy(),
            (s = o.plugins.Navigation) === null || s === void 0 || s.detach();
            for (const c of o.slides) {
                c.state = W.Closing,
                this.hideLoading(c);
                const d = c.contentEl;
                d && this.stop(d);
                const u = c == null ? void 0 : c.panzoom;
                u && (u.stop(),
                u.detachEvents(),
                u.detachObserver()),
                this.isCurrentSlide(c) || o.emit("removeSlide", c)
            }
        }
        Mr = window.scrollX,
        Or = window.scrollY,
        window.addEventListener("scroll", this.onScroll),
        this.emit("close", e),
        this.state !== q.CustomClosing ? (i === void 0 && a && (i = this.optionFor(a, "hideClass")),
        i && a ? (this.animate(a.contentEl, i, () => {
            o && o.emit("removeSlide", a)
        }
        ),
        setTimeout( () => {
            this.destroy()
        }
        , 500)) : this.destroy()) : setTimeout( () => {
            this.destroy()
        }
        , 500)
    }
    destroy() {
        var e;
        if (this.state === q.Destroy)
            return;
        window.removeEventListener("scroll", this.onScroll),
        this.state = q.Destroy,
        (e = this.carousel) === null || e === void 0 || e.destroy();
        const i = this.container;
        i && i.remove(),
        Je.delete(this.id);
        const n = R.getInstance();
        n ? n.focus() : (ne && (ne.remove(),
        ne = null),
        Ae && (Ae.remove(),
        Ae = null),
        z(document.documentElement, yr),
        ( () => {
            if (!wt)
                return;
            const s = document
              , r = s.body;
            r.classList.remove(tn),
            r.style.setProperty(xr, ""),
            s.documentElement.style.setProperty(wr, "")
        }
        )(),
        this.emit("destroy"))
    }
    static bind(e, i, n) {
        if (!wt)
            return;
        let s, r = "", o = {};
        if (e === void 0 ? s = document.body : Ee(e) ? (s = document.body,
        r = e,
        typeof i == "object" && (o = i || {})) : (s = e,
        Ee(i) && (r = i),
        typeof n == "object" && (o = n || {})),
        !s || !U(s))
            return;
        r = r || "[data-fancybox]";
        const a = R.openers.get(s) || new Map;
        a.set(r, o),
        R.openers.set(s, a),
        a.size === 1 && s.addEventListener("click", R.fromEvent)
    }
    static unbind(e, i) {
        let n, s = "";
        if (Ee(e) ? (n = document.body,
        s = e) : (n = e,
        Ee(i) && (s = i)),
        !n)
            return;
        const r = R.openers.get(n);
        r && s && r.delete(s),
        s && r || (R.openers.delete(n),
        n.removeEventListener("click", R.fromEvent))
    }
    static destroy() {
        let e;
        for (; e = R.getInstance(); )
            e.destroy();
        for (const i of R.openers.keys())
            i.removeEventListener("click", R.fromEvent);
        R.openers = new Map
    }
    static fromEvent(e) {
        if (e.defaultPrevented || e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey)
            return;
        let i = e.composedPath()[0];
        const n = i.closest("[data-fancybox-trigger]");
        if (n) {
            const p = n.dataset.fancyboxTrigger || ""
              , m = document.querySelectorAll(`[data-fancybox="${p}"]`)
              , g = parseInt(n.dataset.fancyboxIndex || "", 10) || 0;
            i = m[g] || i
        }
        if (!(i && i instanceof Element))
            return;
        let s, r, o, a;
        if ([...R.openers].reverse().find( ([p,m]) => !(!p.contains(i) || ![...m].reverse().find( ([g,v]) => {
            let y = i.closest(g);
            return !!y && (s = p,
            r = g,
            o = y,
            a = v,
            !0)
        }
        ))),
        !s || !r || !o)
            return;
        a = a || {},
        e.preventDefault(),
        i = o;
        let l = []
          , c = X({}, Nn, a);
        c.event = e,
        c.triggerEl = i,
        c.delegate = n;
        const d = c.groupAll
          , u = c.groupAttr
          , h = u && i ? i.getAttribute(`${u}`) : "";
        if ((!i || h || d) && (l = [].slice.call(s.querySelectorAll(r))),
        i && !d && (l = h ? l.filter(p => p.getAttribute(`${u}`) === h) : [i]),
        !l.length)
            return;
        const f = R.getInstance();
        return f && f.options.triggerEl && l.indexOf(f.options.triggerEl) > -1 ? void 0 : (i && (c.startIndex = l.indexOf(i)),
        R.fromNodes(l, c))
    }
    static fromSelector(e, i, n) {
        let s = null
          , r = ""
          , o = {};
        if (Ee(e) ? (s = document.body,
        r = e,
        typeof i == "object" && (o = i || {})) : e instanceof HTMLElement && Ee(i) && (s = e,
        r = i,
        typeof n == "object" && (o = n || {})),
        !s || !r)
            return !1;
        const a = R.openers.get(s);
        return !!a && (o = X({}, a.get(r) || {}, o),
        !!o && R.fromNodes(Array.from(s.querySelectorAll(r)), o))
    }
    static fromNodes(e, i) {
        i = X({}, Nn, i || {});
        const n = [];
        for (const s of e) {
            const r = s.dataset || {}
              , o = r[Ze] || s.getAttribute(an) || s.getAttribute("currentSrc") || s.getAttribute(Ze) || void 0;
            let a;
            const l = i.delegate;
            let c;
            l && n.length === i.startIndex && (a = l instanceof HTMLImageElement ? l : l.querySelector("img:not([aria-hidden])")),
            a || (a = s instanceof HTMLImageElement ? s : s.querySelector("img:not([aria-hidden])")),
            a && (c = a.currentSrc || a[Ze] || void 0,
            !c && a.dataset && (c = a.dataset.lazySrc || a.dataset[Ze] || void 0));
            const d = {
                src: o,
                triggerEl: s,
                thumbEl: a,
                thumbElSrc: c,
                thumbSrc: c
            };
            for (const u in r) {
                let h = r[u] + "";
                h = h !== "false" && (h === "true" || h),
                d[u] = h
            }
            n.push(d)
        }
        return new R(n,i)
    }
    static getInstance(e) {
        return e ? Je.get(e) : Array.from(Je.values()).reverse().find(i => !i.isClosing() && i) || null
    }
    static getSlide() {
        var e;
        return ((e = R.getInstance()) === null || e === void 0 ? void 0 : e.getSlide()) || null
    }
    static show(e=[], i={}) {
        return new R(e,i)
    }
    static next() {
        const e = R.getInstance();
        e && e.next()
    }
    static prev() {
        const e = R.getInstance();
        e && e.prev()
    }
    static close(e=!0, ...i) {
        if (e)
            for (const n of Je.values())
                n.close(...i);
        else {
            const n = R.getInstance();
            n && n.close(...i)
        }
    }
}
Object.defineProperty(R, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.36"
}),
Object.defineProperty(R, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Nn
}),
Object.defineProperty(R, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Sh
}),
Object.defineProperty(R, "openers", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: new Map
});
Mt.plugin(zu);
Mt.plugin(Rn);
Mt.plugin(ju);
K.use([xa]);
window.Alpine = Mt;
window.Swiper = K;
window.Navigation = xa;
window.Thumbs = lh;
window.FreeMode = ch;
window.Fancybox = R;
R.bind("[data-fancybox]", {
    Toolbar: {
        display: {
            right: ["close"]
        }
    }
});
Mt.start();
const vt = {
    loadCount: 0,
    serialize(t, e) {
        let i = [], n;
        for (n in t)
            if (t.hasOwnProperty(n)) {
                let s = e ? e + "[" + n + "]" : n
                  , r = t[n];
                i.push(r !== null && typeof r == "object" ? this.serialize(r, s) : encodeURIComponent(s) + "=" + encodeURIComponent(r))
            }
        return i.join("&")
    },
    formdata(t) {
        let e = new FormData;
        for (const i in t)
            e.append(i, t[i]);
        return e
    },
    async request(t, e, i, n=!1, s=!0) {
        try {
            s && (this.loadCount++,
            document.getElementById("loader").classList.add("active"));
            let o = {
                Accept: "application/json",
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            };
            if (t == "GET")
                var r = await fetch(e + (i.length ? "?" + this.serialize(i) : ""), {
                    method: t,
                    headers: o
                });
            else if (n) {
                o["Content-Type"] = "application/x-www-form-urlencoded";
                var r = await fetch(e, {
                    method: t,
                    headers: o,
                    body: this.serialize(i)
                })
            } else
                var r = await fetch(e, {
                    method: t,
                    headers: o,
                    body: i
                });
            let a = [];
            try {
                a = await r.json()
            } catch {}
            return s && (this.loadCount--,
            this.loadCount == 0 && document.getElementById("loader").classList.remove("active")),
            a.data ? a : {
                success: !1,
                message: "Fatal error",
                data: a
            }
        } catch (o) {
            console.error(o)
        }
        return {
            success: !1,
            message: "Fatal error",
            data: {}
        }
    },
    async post(t, e, i=!1, n=!0) {
        return await this.request("POST", t, e, i, n)
    },
    async get(t, e, i=!1, n=!0) {
        return await this.request("GET", t, e, i, n)
    },
    async put(t, e, i=!1, n=!0) {
        return await this.request("PUT", t, e, i, n)
    },
    async delete(t, e, i=!1, n=!0) {
        return await this.request("DELETE", t, e, i, n)
    }
};
window.req = vt;
const Th = new function() {
    this.add = async (t, e, i=0, n=!1) => {
        const s = await vt.post(CART_ADD_ROUTE, {
            id_products: t,
            quantity: e,
            id_products_sets: i
        }, !0, !0);
        if (n) {
            window.location.href = CHECKOUT_ROUTE;
            return
        }
        this.success(s)
    }
    ,
    this.update = async (t, e, i=0) => {
        const n = await vt.post(CART_UPDATE_ROUTE, {
            id_products: t,
            quantity: e,
            id_products_sets: i
        }, !0, !0);
        this.success(n)
    }
    ,
    this.remove = async (t, e=0) => {
        const i = await vt.post(CART_REMOVE_ROUTE, {
            id_products: t,
            id_products_sets: e
        }, !0, !0);
        this.success(i)
    }
    ,
    this.success = t => {
        t.success && (window.dispatchEvent(new CustomEvent("cart_update",{
            detail: {
                items: t.data.items,
                total: t.data.total,
                subtotal: t.data.subtotal,
                discount: t.data.discount,
                count: t.data.count,
                banks: t.data.banks,
                sets: t.data.sets
            }
        })),
        window.location.href.indexOf("checkout") !== -1 || window.dispatchEvent(new CustomEvent("show_cart",{
            detail: !0
        })),
        document.querySelector("#cart-count") && (document.querySelector("#cart-count").innerText = t.data.count))
    }
    ,
    this.clear = async () => {
        const t = await vt.post(CART_CLEAR_ROUTE, {}, !0, !0);
        this.success(t)
    }
}
;
window.Cart = Th;
