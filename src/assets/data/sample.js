/*!For license information please see common_head_js.bundle.c1eedd3b67f1745dbb38.js.LICENSE.txt*/
!function(t) {
    var r = {};
    function e(n) {
        if (r[n])
            return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    e.m = t,
    e.c = r,
    e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {
            enumerable: !0,
            get: n
        })
    }
    ,
    e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    e.t = function(t, r) {
        if (1 & r && (t = e(t)),
        8 & r)
            return t;
        if (4 & r && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (e.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & r && "string" != typeof t)
            for (var o in t)
                e.d(n, o, function(r) {
                    return t[r]
                }
                .bind(null, o));
        return n
    }
    ,
    e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(r, "a", r),
        r
    }
    ,
    e.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }
    ,
    e.p = "/assets/layout/",
    e(e.s = 123)
}({
    0: function(t, r, e) {
        "use strict";
        e.d(r, "b", (function() {
            return o
        }
        )),
        e.d(r, "a", (function() {
            return i
        }
        )),
        e.d(r, "c", (function() {
            return s
        }
        ));
        var n = function(t, r) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, r) {
                t.__proto__ = r
            }
            || function(t, r) {
                for (var e in r)
                    r.hasOwnProperty(e) && (t[e] = r[e])
            }
            )(t, r)
        };
        function o(t, r) {
            function e() {
                this.constructor = t
            }
            n(t, r),
            t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype,
            new e)
        }
        var i = function() {
            return (i = Object.assign || function(t) {
                for (var r, e = 1, n = arguments.length; e < n; e++)
                    for (var o in r = arguments[e])
                        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                return t
            }
            ).apply(this, arguments)
        };
        function s(t, r) {
            var e = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
                    r.indexOf(n[o]) < 0 && (e[n[o]] = t[n[o]])
            }
            return e
        }
    },
    1: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return l
        }
        ));
        var n = e(2);
        var o = e(12)
          , i = e(16);
        var s = e(11);
        function u(t) {
            return t
        }
        function a(t) {
            return 0 === t.length ? u : 1 === t.length ? t[0] : function(r) {
                return t.reduce((function(t, r) {
                    return r(t)
                }
                ), r)
            }
        }
        var c = e(4)
          , l = function() {
            function t(t) {
                this._isScalar = !1,
                t && (this._subscribe = t)
            }
            return t.prototype.lift = function(r) {
                var e = new t;
                return e.source = this,
                e.operator = r,
                e
            }
            ,
            t.prototype.subscribe = function(t, r, e) {
                var s = this.operator
                  , u = function(t, r, e) {
                    if (t) {
                        if (t instanceof n.a)
                            return t;
                        if (t[o.a])
                            return t[o.a]()
                    }
                    return t || r || e ? new n.a(t,r,e) : new n.a(i.a)
                }(t, r, e);
                if (s ? u.add(s.call(u, this.source)) : u.add(this.source || c.a.useDeprecatedSynchronousErrorHandling && !u.syncErrorThrowable ? this._subscribe(u) : this._trySubscribe(u)),
                c.a.useDeprecatedSynchronousErrorHandling && u.syncErrorThrowable && (u.syncErrorThrowable = !1,
                u.syncErrorThrown))
                    throw u.syncErrorValue;
                return u
            }
            ,
            t.prototype._trySubscribe = function(t) {
                try {
                    return this._subscribe(t)
                } catch (r) {
                    c.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0,
                    t.syncErrorValue = r),
                    !function(t) {
                        for (; t; ) {
                            var r = t
                              , e = r.closed
                              , o = r.destination
                              , i = r.isStopped;
                            if (e || i)
                                return !1;
                            t = o && o instanceof n.a ? o : null
                        }
                        return !0
                    }(t) ? console.warn(r) : t.error(r)
                }
            }
            ,
            t.prototype.forEach = function(t, r) {
                var e = this;
                return new (r = f(r))((function(r, n) {
                    var o;
                    o = e.subscribe((function(r) {
                        try {
                            t(r)
                        } catch (t) {
                            n(t),
                            o && o.unsubscribe()
                        }
                    }
                    ), n, r)
                }
                ))
            }
            ,
            t.prototype._subscribe = function(t) {
                var r = this.source;
                return r && r.subscribe(t)
            }
            ,
            t.prototype[s.a] = function() {
                return this
            }
            ,
            t.prototype.pipe = function() {
                for (var t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                return 0 === t.length ? this : a(t)(this)
            }
            ,
            t.prototype.toPromise = function(t) {
                var r = this;
                return new (t = f(t))((function(t, e) {
                    var n;
                    r.subscribe((function(t) {
                        return n = t
                    }
                    ), (function(t) {
                        return e(t)
                    }
                    ), (function() {
                        return t(n)
                    }
                    ))
                }
                ))
            }
            ,
            t.create = function(r) {
                return new t(r)
            }
            ,
            t
        }();
        function f(t) {
            if (t || (t = c.a.Promise || Promise),
            !t)
                throw new Error("no Promise impl found");
            return t
        }
    },
    10: function(t, r, e) {
        "use strict";
        function n(t) {
            setTimeout((function() {
                throw t
            }
            ), 0)
        }
        e.d(r, "a", (function() {
            return n
        }
        ))
    },
    11: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return n
        }
        ));
        var n = function() {
            return "function" == typeof Symbol && Symbol.observable || "@@observable"
        }()
    },
    12: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return n
        }
        ));
        var n = function() {
            return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        }()
    },
    123: function(t, r, e) {
        "use strict";
        e.r(r);
        var n = e(26)
          , o = new n.b;
        window.talonClientService = new n.a(o)
    },
    13: function(t, r, e) {
        "use strict";
        function n(t) {
            return "function" == typeof t
        }
        e.d(r, "a", (function() {
            return n
        }
        ))
    },
    16: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return i
        }
        ));
        var n = e(4)
          , o = e(10)
          , i = {
            closed: !0,
            next: function(t) {},
            error: function(t) {
                if (n.a.useDeprecatedSynchronousErrorHandling)
                    throw t;
                Object(o.a)(t)
            },
            complete: function() {}
        }
    },
    2: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return l
        }
        ));
        var n = e(0)
          , o = e(13)
          , i = e(16)
          , s = e(3)
          , u = e(12)
          , a = e(4)
          , c = e(10)
          , l = function(t) {
            function r(e, n, o) {
                var s = t.call(this) || this;
                switch (s.syncErrorValue = null,
                s.syncErrorThrown = !1,
                s.syncErrorThrowable = !1,
                s.isStopped = !1,
                arguments.length) {
                case 0:
                    s.destination = i.a;
                    break;
                case 1:
                    if (!e) {
                        s.destination = i.a;
                        break
                    }
                    if ("object" == typeof e) {
                        e instanceof r ? (s.syncErrorThrowable = e.syncErrorThrowable,
                        s.destination = e,
                        e.add(s)) : (s.syncErrorThrowable = !0,
                        s.destination = new f(s,e));
                        break
                    }
                default:
                    s.syncErrorThrowable = !0,
                    s.destination = new f(s,e,n,o)
                }
                return s
            }
            return n.b(r, t),
            r.prototype[u.a] = function() {
                return this
            }
            ,
            r.create = function(t, e, n) {
                var o = new r(t,e,n);
                return o.syncErrorThrowable = !1,
                o
            }
            ,
            r.prototype.next = function(t) {
                this.isStopped || this._next(t)
            }
            ,
            r.prototype.error = function(t) {
                this.isStopped || (this.isStopped = !0,
                this._error(t))
            }
            ,
            r.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0,
                this._complete())
            }
            ,
            r.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0,
                t.prototype.unsubscribe.call(this))
            }
            ,
            r.prototype._next = function(t) {
                this.destination.next(t)
            }
            ,
            r.prototype._error = function(t) {
                this.destination.error(t),
                this.unsubscribe()
            }
            ,
            r.prototype._complete = function() {
                this.destination.complete(),
                this.unsubscribe()
            }
            ,
            r.prototype._unsubscribeAndRecycle = function() {
                var t = this._parentOrParents;
                return this._parentOrParents = null,
                this.unsubscribe(),
                this.closed = !1,
                this.isStopped = !1,
                this._parentOrParents = t,
                this
            }
            ,
            r
        }(s.a)
          , f = function(t) {
            function r(r, e, n, s) {
                var u, a = t.call(this) || this;
                a._parentSubscriber = r;
                var c = a;
                return Object(o.a)(e) ? u = e : e && (u = e.next,
                n = e.error,
                s = e.complete,
                e !== i.a && (c = Object.create(e),
                Object(o.a)(c.unsubscribe) && a.add(c.unsubscribe.bind(c)),
                c.unsubscribe = a.unsubscribe.bind(a))),
                a._context = c,
                a._next = u,
                a._error = n,
                a._complete = s,
                a
            }
            return n.b(r, t),
            r.prototype.next = function(t) {
                if (!this.isStopped && this._next) {
                    var r = this._parentSubscriber;
                    a.a.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable ? this.__tryOrSetError(r, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }
            ,
            r.prototype.error = function(t) {
                if (!this.isStopped) {
                    var r = this._parentSubscriber
                      , e = a.a.useDeprecatedSynchronousErrorHandling;
                    if (this._error)
                        e && r.syncErrorThrowable ? (this.__tryOrSetError(r, this._error, t),
                        this.unsubscribe()) : (this.__tryOrUnsub(this._error, t),
                        this.unsubscribe());
                    else if (r.syncErrorThrowable)
                        e ? (r.syncErrorValue = t,
                        r.syncErrorThrown = !0) : Object(c.a)(t),
                        this.unsubscribe();
                    else {
                        if (this.unsubscribe(),
                        e)
                            throw t;
                        Object(c.a)(t)
                    }
                }
            }
            ,
            r.prototype.complete = function() {
                var t = this;
                if (!this.isStopped) {
                    var r = this._parentSubscriber;
                    if (this._complete) {
                        var e = function() {
                            return t._complete.call(t._context)
                        };
                        a.a.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable ? (this.__tryOrSetError(r, e),
                        this.unsubscribe()) : (this.__tryOrUnsub(e),
                        this.unsubscribe())
                    } else
                        this.unsubscribe()
                }
            }
            ,
            r.prototype.__tryOrUnsub = function(t, r) {
                try {
                    t.call(this._context, r)
                } catch (t) {
                    if (this.unsubscribe(),
                    a.a.useDeprecatedSynchronousErrorHandling)
                        throw t;
                    Object(c.a)(t)
                }
            }
            ,
            r.prototype.__tryOrSetError = function(t, r, e) {
                if (!a.a.useDeprecatedSynchronousErrorHandling)
                    throw new Error("bad call");
                try {
                    r.call(this._context, e)
                } catch (r) {
                    return a.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r,
                    t.syncErrorThrown = !0,
                    !0) : (Object(c.a)(r),
                    !0)
                }
                return !1
            }
            ,
            r.prototype._unsubscribe = function() {
                var t = this._parentSubscriber;
                this._context = null,
                this._parentSubscriber = null,
                t.unsubscribe()
            }
            ,
            r
        }(l)
    },
    20: function(t, r, e) {
        "use strict";
        function n(t) {
            return null !== t && "object" == typeof t
        }
        e.d(r, "a", (function() {
            return n
        }
        ))
    },
    21: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return n
        }
        ));
        var n = function() {
            return Array.isArray || function(t) {
                return t && "number" == typeof t.length
            }
        }()
    },
    26: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return h
        }
        )),
        e.d(r, "c", (function() {
            return n
        }
        )),
        e.d(r, "b", (function() {
            return d
        }
        ));
        var n, o = e(0), i = e(31), s = e(7), u = function(t) {
            function r(r) {
                var e = t.call(this) || this;
                return e._value = r,
                e
            }
            return o.b(r, t),
            Object.defineProperty(r.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }),
            r.prototype._subscribe = function(r) {
                var e = t.prototype._subscribe.call(this, r);
                return e && !e.closed && r.next(this._value),
                e
            }
            ,
            r.prototype.getValue = function() {
                if (this.hasError)
                    throw this.thrownError;
                if (this.closed)
                    throw new s.a;
                return this._value
            }
            ,
            r.prototype.next = function(r) {
                t.prototype.next.call(this, this._value = r)
            }
            ,
            r
        }(i.a), a = e(5);
        function c(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function l(t, r, e) {
            return r in t ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = e,
            t
        }
        !function(t) {
            t.NOT_READY = "not_ready",
            t.READY = "ready",
            t.ERROR = "error",
            t.CLOSED = "closed",
            t.SOLVED = "solved"
        }(n || (n = {}));
        var f = function(t) {
            t()
        }
          , h = function() {
            function t(r) {
                !function(t, r) {
                    if (!(t instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.talonLoaderService = r,
                l(this, "_talonStates", {}),
                l(this, "zoneRunner", f)
            }
            var r, e, o;
            return r = t,
            (e = [{
                key: "getState",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return t || (t = this.defaultFlow),
                    this.initStateForFlow(t),
                    this._talonStates[t]
                }
            }, {
                key: "resetState",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    t || (t = this.defaultFlow),
                    this.getState(t).next({
                        state: n.READY,
                        flow: t
                    })
                }
            }, {
                key: "loadFlow",
                value: function() {
                    var t = this
                      , r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    r || (r = this.defaultFlow),
                    this.initStateForFlow(r),
                    a.a.talon.enabled && this.talonLoaderService.isLibraryLoaded.subscribe({
                        next: function(e) {
                            e && t.loadFlowAndInitCallbacks(r)
                        }
                    })
                }
            }, {
                key: "execute",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    t || (t = this.defaultFlow),
                    this.instance.execute(t)
                }
            }, {
                key: "resetZoneRunner",
                value: function() {
                    this.zoneRunner = f
                }
            }, {
                key: "loadFlowAndInitCallbacks",
                value: function(t) {
                    var r = this;
                    this.instance.load({
                        flow: t,
                        onReady: function() {
                            r.getState(t).next({
                                state: n.READY,
                                flow: t
                            })
                        },
                        onComplete: function(e) {
                            r.zoneRunner((function() {
                                r.getState(t).next({
                                    state: n.SOLVED,
                                    flow: t,
                                    data: e
                                })
                            }
                            ))
                        },
                        onClosed: function() {
                            r.zoneRunner((function() {
                                r.getState(t).next({
                                    state: n.CLOSED,
                                    flow: t
                                })
                            }
                            ))
                        },
                        onError: function() {
                            r.zoneRunner((function() {
                                r.getState(t).next({
                                    state: n.ERROR,
                                    flow: t
                                })
                            }
                            ))
                        }
                    })
                }
            }, {
                key: "initStateForFlow",
                value: function(t) {
                    this._talonStates[t] || (this._talonStates[t] = new u({
                        state: n.NOT_READY,
                        flow: t
                    }))
                }
            }, {
                key: "defaultFlow",
                get: function() {
                    return a.a.talon.flow_id || "_DEFAULT_"
                }
            }, {
                key: "instance",
                get: function() {
                    return window.talon
                }
            }]) && c(r.prototype, e),
            o && c(r, o),
            t
        }();
        function p(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function b(t, r, e) {
            return r in t ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = e,
            t
        }
        var d = function() {
            function t() {
                !function(t, r) {
                    if (!(t instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                b(this, "_isLibraryLoaded", new u(!1)),
                b(this, "requestRetriesCount", 5),
                this.loadLibrary()
            }
            var r, e, n;
            return r = t,
            (e = [{
                key: "loadLibrary",
                value: function() {
                    var t = this;
                    this._isLibraryLoaded.value || this.libraryLoader().then((function() {
                        t._isLibraryLoaded.next(!0)
                    }
                    )).catch((function() {
                        t.requestRetriesCount && (t.requestRetriesCount--,
                        setTimeout((function() {
                            t.loadLibrary()
                        }
                        ), 1e3))
                    }
                    ))
                }
            }, {
                key: "libraryLoader",
                value: function() {
                    return new Promise((function(t) {
                        var r = document.createElement("script");
                        r.src = "https://talon-website-prod.ecosec.on.epicgames.com/talon_sdk.js",
                        r.onload = t,
                        document.body.appendChild(r)
                    }
                    ))
                }
            }, {
                key: "isLibraryLoaded",
                get: function() {
                    return this._isLibraryLoaded
                }
            }]) && p(r.prototype, e),
            n && p(r, n),
            t
        }()
    },
    3: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return u
        }
        ));
        var n = e(21)
          , o = e(20)
          , i = e(13)
          , s = function() {
            function t(t) {
                return Error.call(this),
                this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, r) {
                    return r + 1 + ") " + t.toString()
                }
                )).join("\n  ") : "",
                this.name = "UnsubscriptionError",
                this.errors = t,
                this
            }
            return t.prototype = Object.create(Error.prototype),
            t
        }()
          , u = function() {
            function t(t) {
                this.closed = !1,
                this._parentOrParents = null,
                this._subscriptions = null,
                t && (this._ctorUnsubscribe = !0,
                this._unsubscribe = t)
            }
            var r;
            return t.prototype.unsubscribe = function() {
                var r;
                if (!this.closed) {
                    var e = this._parentOrParents
                      , u = this._ctorUnsubscribe
                      , c = this._unsubscribe
                      , l = this._subscriptions;
                    if (this.closed = !0,
                    this._parentOrParents = null,
                    this._subscriptions = null,
                    e instanceof t)
                        e.remove(this);
                    else if (null !== e)
                        for (var f = 0; f < e.length; ++f) {
                            e[f].remove(this)
                        }
                    if (Object(i.a)(c)) {
                        u && (this._unsubscribe = void 0);
                        try {
                            c.call(this)
                        } catch (t) {
                            r = t instanceof s ? a(t.errors) : [t]
                        }
                    }
                    if (Object(n.a)(l)) {
                        f = -1;
                        for (var h = l.length; ++f < h; ) {
                            var p = l[f];
                            if (Object(o.a)(p))
                                try {
                                    p.unsubscribe()
                                } catch (t) {
                                    r = r || [],
                                    t instanceof s ? r = r.concat(a(t.errors)) : r.push(t)
                                }
                        }
                    }
                    if (r)
                        throw new s(r)
                }
            }
            ,
            t.prototype.add = function(r) {
                var e = r;
                if (!r)
                    return t.EMPTY;
                switch (typeof r) {
                case "function":
                    e = new t(r);
                case "object":
                    if (e === this || e.closed || "function" != typeof e.unsubscribe)
                        return e;
                    if (this.closed)
                        return e.unsubscribe(),
                        e;
                    if (!(e instanceof t)) {
                        var n = e;
                        (e = new t)._subscriptions = [n]
                    }
                    break;
                default:
                    throw new Error("unrecognized teardown " + r + " added to Subscription.")
                }
                var o = e._parentOrParents;
                if (null === o)
                    e._parentOrParents = this;
                else if (o instanceof t) {
                    if (o === this)
                        return e;
                    e._parentOrParents = [o, this]
                } else {
                    if (-1 !== o.indexOf(this))
                        return e;
                    o.push(this)
                }
                var i = this._subscriptions;
                return null === i ? this._subscriptions = [e] : i.push(e),
                e
            }
            ,
            t.prototype.remove = function(t) {
                var r = this._subscriptions;
                if (r) {
                    var e = r.indexOf(t);
                    -1 !== e && r.splice(e, 1)
                }
            }
            ,
            t.EMPTY = ((r = new t).closed = !0,
            r),
            t
        }();
        function a(t) {
            return t.reduce((function(t, r) {
                return t.concat(r instanceof s ? r.errors : r)
            }
            ), [])
        }
    },
    30: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return o
        }
        ));
        var n = e(0)
          , o = function(t) {
            function r(r, e) {
                var n = t.call(this) || this;
                return n.subject = r,
                n.subscriber = e,
                n.closed = !1,
                n
            }
            return n.b(r, t),
            r.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var t = this.subject
                      , r = t.observers;
                    if (this.subject = null,
                    r && 0 !== r.length && !t.isStopped && !t.closed) {
                        var e = r.indexOf(this.subscriber);
                        -1 !== e && r.splice(e, 1)
                    }
                }
            }
            ,
            r
        }(e(3).a)
    },
    31: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return f
        }
        ));
        var n = e(0)
          , o = e(1)
          , i = e(2)
          , s = e(3)
          , u = e(7)
          , a = e(30)
          , c = e(12)
          , l = function(t) {
            function r(r) {
                var e = t.call(this, r) || this;
                return e.destination = r,
                e
            }
            return n.b(r, t),
            r
        }(i.a)
          , f = function(t) {
            function r() {
                var r = t.call(this) || this;
                return r.observers = [],
                r.closed = !1,
                r.isStopped = !1,
                r.hasError = !1,
                r.thrownError = null,
                r
            }
            return n.b(r, t),
            r.prototype[c.a] = function() {
                return new l(this)
            }
            ,
            r.prototype.lift = function(t) {
                var r = new h(this,this);
                return r.operator = t,
                r
            }
            ,
            r.prototype.next = function(t) {
                if (this.closed)
                    throw new u.a;
                if (!this.isStopped)
                    for (var r = this.observers, e = r.length, n = r.slice(), o = 0; o < e; o++)
                        n[o].next(t)
            }
            ,
            r.prototype.error = function(t) {
                if (this.closed)
                    throw new u.a;
                this.hasError = !0,
                this.thrownError = t,
                this.isStopped = !0;
                for (var r = this.observers, e = r.length, n = r.slice(), o = 0; o < e; o++)
                    n[o].error(t);
                this.observers.length = 0
            }
            ,
            r.prototype.complete = function() {
                if (this.closed)
                    throw new u.a;
                this.isStopped = !0;
                for (var t = this.observers, r = t.length, e = t.slice(), n = 0; n < r; n++)
                    e[n].complete();
                this.observers.length = 0
            }
            ,
            r.prototype.unsubscribe = function() {
                this.isStopped = !0,
                this.closed = !0,
                this.observers = null
            }
            ,
            r.prototype._trySubscribe = function(r) {
                if (this.closed)
                    throw new u.a;
                return t.prototype._trySubscribe.call(this, r)
            }
            ,
            r.prototype._subscribe = function(t) {
                if (this.closed)
                    throw new u.a;
                return this.hasError ? (t.error(this.thrownError),
                s.a.EMPTY) : this.isStopped ? (t.complete(),
                s.a.EMPTY) : (this.observers.push(t),
                new a.a(this,t))
            }
            ,
            r.prototype.asObservable = function() {
                var t = new o.a;
                return t.source = this,
                t
            }
            ,
            r.create = function(t, r) {
                return new h(t,r)
            }
            ,
            r
        }(o.a)
          , h = function(t) {
            function r(r, e) {
                var n = t.call(this) || this;
                return n.destination = r,
                n.source = e,
                n
            }
            return n.b(r, t),
            r.prototype.next = function(t) {
                var r = this.destination;
                r && r.next && r.next(t)
            }
            ,
            r.prototype.error = function(t) {
                var r = this.destination;
                r && r.error && this.destination.error(t)
            }
            ,
            r.prototype.complete = function() {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }
            ,
            r.prototype._subscribe = function(t) {
                return this.source ? this.source.subscribe(t) : s.a.EMPTY
            }
            ,
            r
        }(f)
    },
    4: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return o
        }
        ));
        var n = !1
          , o = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(t) {
                t && (new Error).stack;
                n = t
            },
            get useDeprecatedSynchronousErrorHandling() {
                return n
            }
        }
    },
    5: function(t, r, e) {
        "use strict";
        function n(t, r) {
            if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function i(t, r, e) {
            return r in t ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = e,
            t
        }
        e.d(r, "a", (function() {
            return s
        }
        ));
        var s = new (function() {
            function t(r) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                n(this, t),
                i(this, "request_hostname", void 0),
                i(this, "request_port", void 0),
                i(this, "domain_prefix", void 0),
                i(this, "environment", void 0),
                i(this, "stage_hostname", void 0);
                var o = document.location.hostname.split(".");
                e && !o.includes("www") && o.length > 2 ? (this.request_hostname = document.location.hostname,
                this.domain_prefix = "") : (this.request_hostname = document.location.hostname.split(".").slice(-2).join("."),
                this.domain_prefix = "www"),
                this.request_port = document.location.port,
                this.environment = r,
                this.stage_hostname = document.location.hostname.split(".").slice(-2).join(".")
            }
            var r, e, s;
            return r = t,
            (e = [{
                key: "build",
                value: function() {
                    return Object.assign(this.hosts_data(), this.environment)
                }
            }, {
                key: "domain",
                value: function() {
                    return [this.request_hostname, this.request_port].filter((function(t) {
                        return t
                    }
                    )).join(":")
                }
            }, {
                key: "domainWithPrefix",
                value: function() {
                    return [this.domain_prefix, this.domain()].filter((function(t) {
                        return t
                    }
                    )).join(".")
                }
            }, {
                key: "stageDomain",
                value: function() {
                    return [this.stage_hostname, this.request_port].filter((function(t) {
                        return t
                    }
                    )).join(":")
                }
            }, {
                key: "hosts_data",
                value: function() {
                    return {
                        mcc_host: "//mcc.".concat(this.domain(), "/admin"),
                        api_host: "//".concat(this.domainWithPrefix()),
                        api_path: "//".concat(this.domainWithPrefix(), "/api/v2"),
                        main_host: "//".concat(this.domainWithPrefix()),
                        websocket_host: "//ws.".concat(this.stageDomain())
                    }
                }
            }]) && o(r.prototype, e),
            s && o(r, s),
            t
        }())({
            production: !0,
            mcc_host: "https://mcc.artstation.com/admin",
            api_host: "https://www.artstation.com",
            api_path: "https://www.artstation.com/api/v2",
            main_host: "https://www.artstation.com",
            websocket_host: "https://ws.artstation.com",
            stripe_publishable_key: "pk_live_xKKqbD2WFICHYKJpbif8OLKK",
            google_analytics_id: "UA-29038430-1",
            google_analytics_optimize: "GTM-MTW7Q84",
            google_maps_key: "AIzaSyDmfHNDDx7E1Ra_NwtfF3NAhxU30E1x8PQ",
            google_adwords: "AW-10796674707",
            matomo_host: "https://matomo.artstation.com/",
            matomo_site_id: 1,
            show_test_endpoints: !1,
            default_title: "ArtStation",
            recaptcha: {
                enabled: !0,
                public_key: "6LdzyiEUAAAAAEgVrLe5wDZww9ijXoBHo26xJ8cg"
            },
            mailgun: {
                public_key: ""
            },
            facebook_app_id: "249255215230397",
            facebook_auth_app_version: "v13.0",
            website_custom_domain_ips: ["3.94.141.51", "34.193.143.10"],
            bitmovin: {
                player_key: "77c65b5f-c632-4ef4-a151-bca9146fd04b",
                analytics_key: "5743e69c-6b1d-4ef7-b900-1f308a69e357"
            },
            mailchimp: {
                prints_newsletter_action: "//ballistiq.us7.list-manage.com/subscribe/post?u=b52a9d5d3d54233d936a84d01&amp;id=e5d6ebb2f8"
            },
            google_api_client_id: "439315463592-acki7vspkk3pv0ja6mbdi6ojjk4544pg.apps.googleusercontent.com",
            google_auth_client_id: "439315463592-150g9t6k7vft6cd71k6s6jqelg9hgr4e.apps.googleusercontent.com",
            mailtrain_list: {
                newsletter: "q8BISXhn",
                podcast: "_dgfx4s5k"
            },
            unreal_software: {
                unreal: 44,
                megascans: 2214,
                twinmotion: 46048
            },
            chargebee: {
                site: "artstation",
                publishable_key: "live_Gk91h31AHNgQxfvDg3dovOwIejGd0S84"
            },
            talon: {
                enabled: !0,
                flow_id: "artstation_prod"
            },
            theo_player_license: "sZP7IYe6T6fcTS3gTS1lImzLClhZFSaZ0Df-CD0k3ZziTSb_0Dxl0Sa_CSR6FOPlUY3zWokgbgjNIOf9flxl0oCZ0SRcFSai0o0-3QBc3mk60lxeFSb_0QP60D0iIKCk0ZfVfK4_bQgZCYxNWoryIQXzImf90SCk3lCoTSCi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3l0kTS0_3u5o0leZFOPeWok1dDrLYtA1Ioh6TgV6CYPzbtx1UQgqW6rlWoz6FOP1bGxLUQXzdDjpIQ4oFK3qWmfVfKXZUw3zCYxNWorLUQXGdDrGFK3qWmfVfKXZUw3zW6r-ImfVfKcqCoXVdQjLUOfVfKjVID-LCDreb6r1bGxLUQXzdDjpIQ4oFGUzI6fVfGxEIDjiWQXrIYfpCoj-f6i6UtUtFKXZUw3zCYxNWo_pCoj-f6i6UtUtFKXZUw3zCYxNWoreIYCpCoj-f6i6UtUtFKXZUw3zCYxNWoreIYCpUtxKf6i6UtUtFKXZUw3zCYxNWorLUQXGdDrGFK3qWmfVfGUtUZr1bGxLUQ_pWDh6Ymi6IQj-CDgpbkjLWt4ZCoh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfG3edt06TgV6dwx-Wuh6Ymi6bo4pIXjNWYAZIY3LdDjpflNzbG4gya"
        }).build()
    },
    7: function(t, r, e) {
        "use strict";
        e.d(r, "a", (function() {
            return n
        }
        ));
        var n = function() {
            function t() {
                return Error.call(this),
                this.message = "object unsubscribed",
                this.name = "ObjectUnsubscribedError",
                this
            }
            return t.prototype = Object.create(Error.prototype),
            t
        }()
    }
});
