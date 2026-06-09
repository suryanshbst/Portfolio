(function () {
  const m = document.createElement("link").relList;
  if (m && m.supports && m.supports("modulepreload")) return;
  for (const g of document.querySelectorAll('link[rel="modulepreload"]')) I(g);
  new MutationObserver((g) => {
    for (const k of g)
      if (k.type === "childList")
        for (const E of k.addedNodes)
          E.tagName === "LINK" && E.rel === "modulepreload" && I(E);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function c(g) {
    const k = {};
    return (
      g.integrity && (k.integrity = g.integrity),
      g.referrerPolicy && (k.referrerPolicy = g.referrerPolicy),
      g.crossOrigin === "use-credentials"
        ? (k.credentials = "include")
        : g.crossOrigin === "anonymous"
          ? (k.credentials = "omit")
          : (k.credentials = "same-origin"),
      k
    );
  }

  function I(g) {
    if (g.ep) return;
    g.ep = !0;
    const k = c(g);
    fetch(g.href, k);
  }
})();

function xu(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Bs = {
    exports: {},
  },
  Er = {},
  Us = {
    exports: {},
  },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc;

function bp() {
  if (Yc) return re;
  Yc = 1;
  var a = Symbol.for("react.element"),
    m = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    I = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    k = Symbol.for("react.provider"),
    E = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    H = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    T = Symbol.iterator;

  function y(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (T && p[T]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var F = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    B = {};

  function R(p, C, ee) {
    ((this.props = p),
      (this.context = C),
      (this.refs = B),
      (this.updater = ee || F));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (p, C) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, p, C, "setState");
    }),
    (R.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    }));

  function S() {}
  S.prototype = R.prototype;

  function V(p, C, ee) {
    ((this.props = p),
      (this.context = C),
      (this.refs = B),
      (this.updater = ee || F));
  }
  var U = (V.prototype = new S());
  ((U.constructor = V), M(U, R.prototype), (U.isPureReactComponent = !0));
  var K = Array.isArray,
    ve = Object.prototype.hasOwnProperty,
    je = {
      current: null,
    },
    oe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0,
    };

  function ye(p, C, ee) {
    var X,
      ne = {},
      le = null,
      pe = null;
    if (C != null)
      for (X in (C.ref !== void 0 && (pe = C.ref),
      C.key !== void 0 && (le = "" + C.key),
      C))
        ve.call(C, X) && !oe.hasOwnProperty(X) && (ne[X] = C[X]);
    var se = arguments.length - 2;
    if (se === 1) ne.children = ee;
    else if (1 < se) {
      for (var ie = Array(se), _e = 0; _e < se; _e++)
        ie[_e] = arguments[_e + 2];
      ne.children = ie;
    }
    if (p && p.defaultProps)
      for (X in ((se = p.defaultProps), se))
        ne[X] === void 0 && (ne[X] = se[X]);
    return {
      $$typeof: a,
      type: p,
      key: le,
      ref: pe,
      props: ne,
      _owner: je.current,
    };
  }

  function ot(p, C) {
    return {
      $$typeof: a,
      type: p.type,
      key: C,
      ref: p.ref,
      props: p.props,
      _owner: p._owner,
    };
  }

  function Ie(p) {
    return typeof p == "object" && p !== null && p.$$typeof === a;
  }

  function $e(p) {
    var C = {
      "=": "=0",
      ":": "=2",
    };
    return (
      "$" +
      p.replace(/[=:]/g, function (ee) {
        return C[ee];
      })
    );
  }
  var J = /\/+/g;

  function Ae(p, C) {
    return typeof p == "object" && p !== null && p.key != null
      ? $e("" + p.key)
      : C.toString(36);
  }

  function de(p, C, ee, X, ne) {
    var le = typeof p;
    (le === "undefined" || le === "boolean") && (p = null);
    var pe = !1;
    if (p === null) pe = !0;
    else
      switch (le) {
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case a:
            case m:
              pe = !0;
          }
      }
    if (pe)
      return (
        (pe = p),
        (ne = ne(pe)),
        (p = X === "" ? "." + Ae(pe, 0) : X),
        K(ne)
          ? ((ee = ""),
            p != null && (ee = p.replace(J, "$&/") + "/"),
            de(ne, C, ee, "", function (_e) {
              return _e;
            }))
          : ne != null &&
            (Ie(ne) &&
              (ne = ot(
                ne,
                ee +
                  (!ne.key || (pe && pe.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(J, "$&/") + "/") +
                  p,
              )),
            C.push(ne)),
        1
      );
    if (((pe = 0), (X = X === "" ? "." : X + ":"), K(p)))
      for (var se = 0; se < p.length; se++) {
        le = p[se];
        var ie = X + Ae(le, se);
        pe += de(le, C, ee, ie, ne);
      }
    else if (((ie = y(p)), typeof ie == "function"))
      for (p = ie.call(p), se = 0; !(le = p.next()).done; )
        ((le = le.value),
          (ie = X + Ae(le, se++)),
          (pe += de(le, C, ee, ie, ne)));
    else if (le === "object")
      throw (
        (C = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return pe;
  }

  function Qe(p, C, ee) {
    if (p == null) return p;
    var X = [],
      ne = 0;
    return (
      de(p, X, "", "", function (le) {
        return C.call(ee, le, ne++);
      }),
      X
    );
  }

  function Pe(p) {
    if (p._status === -1) {
      var C = p._result;
      ((C = C()),
        C.then(
          function (ee) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = ee));
          },
          function (ee) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = ee));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = C)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ce = {
      current: null,
    },
    N = {
      transition: null,
    },
    O = {
      ReactCurrentDispatcher: ce,
      ReactCurrentBatchConfig: N,
      ReactCurrentOwner: je,
    };

  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (re.Children = {
      map: Qe,
      forEach: function (p, C, ee) {
        Qe(
          p,
          function () {
            C.apply(this, arguments);
          },
          ee,
        );
      },
      count: function (p) {
        var C = 0;
        return (
          Qe(p, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (p) {
        return (
          Qe(p, function (C) {
            return C;
          }) || []
        );
      },
      only: function (p) {
        if (!Ie(p))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return p;
      },
    }),
    (re.Component = R),
    (re.Fragment = c),
    (re.Profiler = g),
    (re.PureComponent = V),
    (re.StrictMode = I),
    (re.Suspense = j),
    (re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (re.act = _),
    (re.cloneElement = function (p, C, ee) {
      if (p == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            p +
            ".",
        );
      var X = M({}, p.props),
        ne = p.key,
        le = p.ref,
        pe = p._owner;
      if (C != null) {
        if (
          (C.ref !== void 0 && ((le = C.ref), (pe = je.current)),
          C.key !== void 0 && (ne = "" + C.key),
          p.type && p.type.defaultProps)
        )
          var se = p.type.defaultProps;
        for (ie in C)
          ve.call(C, ie) &&
            !oe.hasOwnProperty(ie) &&
            (X[ie] = C[ie] === void 0 && se !== void 0 ? se[ie] : C[ie]);
      }
      var ie = arguments.length - 2;
      if (ie === 1) X.children = ee;
      else if (1 < ie) {
        se = Array(ie);
        for (var _e = 0; _e < ie; _e++) se[_e] = arguments[_e + 2];
        X.children = se;
      }
      return {
        $$typeof: a,
        type: p.type,
        key: ne,
        ref: le,
        props: X,
        _owner: pe,
      };
    }),
    (re.createContext = function (p) {
      return (
        (p = {
          $$typeof: E,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (p.Provider = {
          $$typeof: k,
          _context: p,
        }),
        (p.Consumer = p)
      );
    }),
    (re.createElement = ye),
    (re.createFactory = function (p) {
      var C = ye.bind(null, p);
      return ((C.type = p), C);
    }),
    (re.createRef = function () {
      return {
        current: null,
      };
    }),
    (re.forwardRef = function (p) {
      return {
        $$typeof: h,
        render: p,
      };
    }),
    (re.isValidElement = Ie),
    (re.lazy = function (p) {
      return {
        $$typeof: b,
        _payload: {
          _status: -1,
          _result: p,
        },
        _init: Pe,
      };
    }),
    (re.memo = function (p, C) {
      return {
        $$typeof: H,
        type: p,
        compare: C === void 0 ? null : C,
      };
    }),
    (re.startTransition = function (p) {
      var C = N.transition;
      N.transition = {};
      try {
        p();
      } finally {
        N.transition = C;
      }
    }),
    (re.unstable_act = _),
    (re.useCallback = function (p, C) {
      return ce.current.useCallback(p, C);
    }),
    (re.useContext = function (p) {
      return ce.current.useContext(p);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (p) {
      return ce.current.useDeferredValue(p);
    }),
    (re.useEffect = function (p, C) {
      return ce.current.useEffect(p, C);
    }),
    (re.useId = function () {
      return ce.current.useId();
    }),
    (re.useImperativeHandle = function (p, C, ee) {
      return ce.current.useImperativeHandle(p, C, ee);
    }),
    (re.useInsertionEffect = function (p, C) {
      return ce.current.useInsertionEffect(p, C);
    }),
    (re.useLayoutEffect = function (p, C) {
      return ce.current.useLayoutEffect(p, C);
    }),
    (re.useMemo = function (p, C) {
      return ce.current.useMemo(p, C);
    }),
    (re.useReducer = function (p, C, ee) {
      return ce.current.useReducer(p, C, ee);
    }),
    (re.useRef = function (p) {
      return ce.current.useRef(p);
    }),
    (re.useState = function (p) {
      return ce.current.useState(p);
    }),
    (re.useSyncExternalStore = function (p, C, ee) {
      return ce.current.useSyncExternalStore(p, C, ee);
    }),
    (re.useTransition = function () {
      return ce.current.useTransition();
    }),
    (re.version = "18.3.1"),
    re
  );
}
var Kc;

function Js() {
  return (Kc || ((Kc = 1), (Us.exports = bp())), Us.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;

function jp() {
  if (Jc) return Er;
  Jc = 1;
  var a = Js(),
    m = Symbol.for("react.element"),
    c = Symbol.for("react.fragment"),
    I = Object.prototype.hasOwnProperty,
    g = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    k = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0,
    };

  function E(h, j, H) {
    var b,
      T = {},
      y = null,
      F = null;
    (H !== void 0 && (y = "" + H),
      j.key !== void 0 && (y = "" + j.key),
      j.ref !== void 0 && (F = j.ref));
    for (b in j) I.call(j, b) && !k.hasOwnProperty(b) && (T[b] = j[b]);
    if (h && h.defaultProps)
      for (b in ((j = h.defaultProps), j)) T[b] === void 0 && (T[b] = j[b]);
    return {
      $$typeof: m,
      type: h,
      key: y,
      ref: F,
      props: T,
      _owner: g.current,
    };
  }
  return ((Er.Fragment = c), (Er.jsx = E), (Er.jsxs = E), Er);
}
var Xc;

function Sp() {
  return (Xc || ((Xc = 1), (Bs.exports = jp())), Bs.exports);
}
var o = Sp(),
  A = Js();
const Np = xu(A);
var Vo = {},
  Vs = {
    exports: {},
  },
  qe = {},
  Ws = {
    exports: {},
  },
  Gs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;

function Cp() {
  return (
    Zc ||
      ((Zc = 1),
      (function (a) {
        function m(N, O) {
          var _ = N.length;
          N.push(O);
          e: for (; 0 < _; ) {
            var p = (_ - 1) >>> 1,
              C = N[p];
            if (0 < g(C, O)) ((N[p] = O), (N[_] = C), (_ = p));
            else break e;
          }
        }

        function c(N) {
          return N.length === 0 ? null : N[0];
        }

        function I(N) {
          if (N.length === 0) return null;
          var O = N[0],
            _ = N.pop();
          if (_ !== O) {
            N[0] = _;
            e: for (var p = 0, C = N.length, ee = C >>> 1; p < ee; ) {
              var X = 2 * (p + 1) - 1,
                ne = N[X],
                le = X + 1,
                pe = N[le];
              if (0 > g(ne, _))
                le < C && 0 > g(pe, ne)
                  ? ((N[p] = pe), (N[le] = _), (p = le))
                  : ((N[p] = ne), (N[X] = _), (p = X));
              else if (le < C && 0 > g(pe, _))
                ((N[p] = pe), (N[le] = _), (p = le));
              else break e;
            }
          }
          return O;
        }

        function g(N, O) {
          var _ = N.sortIndex - O.sortIndex;
          return _ !== 0 ? _ : N.id - O.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var k = performance;
          a.unstable_now = function () {
            return k.now();
          };
        } else {
          var E = Date,
            h = E.now();
          a.unstable_now = function () {
            return E.now() - h;
          };
        }
        var j = [],
          H = [],
          b = 1,
          T = null,
          y = 3,
          F = !1,
          M = !1,
          B = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          S = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function U(N) {
          for (var O = c(H); O !== null; ) {
            if (O.callback === null) I(H);
            else if (O.startTime <= N)
              (I(H), (O.sortIndex = O.expirationTime), m(j, O));
            else break;
            O = c(H);
          }
        }

        function K(N) {
          if (((B = !1), U(N), !M))
            if (c(j) !== null) ((M = !0), Pe(ve));
            else {
              var O = c(H);
              O !== null && ce(K, O.startTime - N);
            }
        }

        function ve(N, O) {
          ((M = !1), B && ((B = !1), S(ye), (ye = -1)), (F = !0));
          var _ = y;
          try {
            for (
              U(O), T = c(j);
              T !== null && (!(T.expirationTime > O) || (N && !$e()));
            ) {
              var p = T.callback;
              if (typeof p == "function") {
                ((T.callback = null), (y = T.priorityLevel));
                var C = p(T.expirationTime <= O);
                ((O = a.unstable_now()),
                  typeof C == "function"
                    ? (T.callback = C)
                    : T === c(j) && I(j),
                  U(O));
              } else I(j);
              T = c(j);
            }
            if (T !== null) var ee = !0;
            else {
              var X = c(H);
              (X !== null && ce(K, X.startTime - O), (ee = !1));
            }
            return ee;
          } finally {
            ((T = null), (y = _), (F = !1));
          }
        }
        var je = !1,
          oe = null,
          ye = -1,
          ot = 5,
          Ie = -1;

        function $e() {
          return !(a.unstable_now() - Ie < ot);
        }

        function J() {
          if (oe !== null) {
            var N = a.unstable_now();
            Ie = N;
            var O = !0;
            try {
              O = oe(!0, N);
            } finally {
              O ? Ae() : ((je = !1), (oe = null));
            }
          } else je = !1;
        }
        var Ae;
        if (typeof V == "function")
          Ae = function () {
            V(J);
          };
        else if (typeof MessageChannel < "u") {
          var de = new MessageChannel(),
            Qe = de.port2;
          ((de.port1.onmessage = J),
            (Ae = function () {
              Qe.postMessage(null);
            }));
        } else
          Ae = function () {
            R(J, 0);
          };

        function Pe(N) {
          ((oe = N), je || ((je = !0), Ae()));
        }

        function ce(N, O) {
          ye = R(function () {
            N(a.unstable_now());
          }, O);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            M || F || ((M = !0), Pe(ve));
          }),
          (a.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ot = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return c(j);
          }),
          (a.unstable_next = function (N) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = y;
            }
            var _ = y;
            y = O;
            try {
              return N();
            } finally {
              y = _;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (N, O) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var _ = y;
            y = N;
            try {
              return O();
            } finally {
              y = _;
            }
          }),
          (a.unstable_scheduleCallback = function (N, O, _) {
            var p = a.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? p + _ : p))
                : (_ = p),
              N)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = _ + C),
              (N = {
                id: b++,
                callback: O,
                priorityLevel: N,
                startTime: _,
                expirationTime: C,
                sortIndex: -1,
              }),
              _ > p
                ? ((N.sortIndex = _),
                  m(H, N),
                  c(j) === null &&
                    N === c(H) &&
                    (B ? (S(ye), (ye = -1)) : (B = !0), ce(K, _ - p)))
                : ((N.sortIndex = C), m(j, N), M || F || ((M = !0), Pe(ve))),
              N
            );
          }),
          (a.unstable_shouldYield = $e),
          (a.unstable_wrapCallback = function (N) {
            var O = y;
            return function () {
              var _ = y;
              y = O;
              try {
                return N.apply(this, arguments);
              } finally {
                y = _;
              }
            };
          }));
      })(Gs)),
    Gs
  );
}
var qc;

function Ep() {
  return (qc || ((qc = 1), (Ws.exports = Cp())), Ws.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eu;

function Ip() {
  if (eu) return qe;
  eu = 1;
  var a = Js(),
    m = Ep();

  function c(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var I = new Set(),
    g = {};

  function k(e, t) {
    (E(e, t), E(e + "Capture", t));
  }

  function E(e, t) {
    for (g[e] = t, e = 0; e < t.length; e++) I.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    j = Object.prototype.hasOwnProperty,
    H =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    b = {},
    T = {};

  function y(e) {
    return j.call(T, e)
      ? !0
      : j.call(b, e)
        ? !1
        : H.test(e)
          ? (T[e] = !0)
          : ((b[e] = !0), !1);
  }

  function F(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }

  function M(e, t, n, r) {
    if (t === null || typeof t > "u" || F(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }

  function B(e, t, n, r, l, s, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = i));
  }
  var R = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new B(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new B(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        R[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      R[e] = new B(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new B(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new B(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new B(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var S = /[\-:]([a-z])/g;

  function V(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(S, V);
      R[t] = new B(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(S, V);
        R[t] = new B(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(S, V);
      R[t] = new B(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new B(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));

  function U(e, t, n, r) {
    var l = R.hasOwnProperty(t) ? R[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (M(t, n, l, r) && (n = null),
      r || l === null
        ? y(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var K = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ve = Symbol.for("react.element"),
    je = Symbol.for("react.portal"),
    oe = Symbol.for("react.fragment"),
    ye = Symbol.for("react.strict_mode"),
    ot = Symbol.for("react.profiler"),
    Ie = Symbol.for("react.provider"),
    $e = Symbol.for("react.context"),
    J = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    de = Symbol.for("react.suspense_list"),
    Qe = Symbol.for("react.memo"),
    Pe = Symbol.for("react.lazy"),
    ce = Symbol.for("react.offscreen"),
    N = Symbol.iterator;

  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (N && e[N]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    p;

  function C(e) {
    if (p === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        p = (t && t[1]) || "";
      }
    return (
      `
` +
      p +
      e
    );
  }
  var ee = !1;

  function X(e, t) {
    if (!e || ee) return "";
    ee = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (w) {
            var r = w;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (w) {
            r = w;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == "string") {
        for (
          var l = w.stack.split(`
`),
            s = r.stack.split(`
`),
            i = l.length - 1,
            u = s.length - 1;
          1 <= i && 0 <= u && l[i] !== s[u];
        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== s[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== s[u])) {
                  var d =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((ee = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }

  function ne(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = X(e.type, !1)), e);
      case 11:
        return ((e = X(e.type.render, !1)), e);
      case 1:
        return ((e = X(e.type, !0)), e);
      default:
        return "";
    }
  }

  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case oe:
        return "Fragment";
      case je:
        return "Portal";
      case ot:
        return "Profiler";
      case ye:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $e:
          return (e.displayName || "Context") + ".Consumer";
        case Ie:
          return (e._context.displayName || "Context") + ".Provider";
        case J:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Qe:
          return (
            (t = e.displayName || null),
            t !== null ? t : le(e.type) || "Memo"
          );
        case Pe:
          ((t = e._payload), (e = e._init));
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }

  function pe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(t);
      case 8:
        return t === ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }

  function se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }

  function ie(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }

  function _e(e) {
    var t = ie(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = "" + i), s.call(this, i));
          },
        }),
        Object.defineProperty(e, t, {
          enumerable: n.enumerable,
        }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }

  function Lr(e) {
    e._valueTracker || (e._valueTracker = _e(e));
  }

  function ei(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ie(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }

  function Rr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }

  function Yo(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }

  function ti(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = se(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }

  function ni(e, t) {
    ((t = t.checked), t != null && U(e, "checked", t, !1));
  }

  function Ko(e, t) {
    ni(e, t);
    var n = se(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Jo(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Jo(e, t.type, se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }

  function ri(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }

  function Jo(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Un = Array.isArray;

  function xn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + se(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }

  function Xo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }

  function oi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(c(92));
        if (Un(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = {
      initialValue: se(n),
    };
  }

  function li(e, t) {
    var n = se(t.value),
      r = se(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }

  function si(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }

  function ii(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }

  function Zo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ii(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Mr,
    ai = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Mr = Mr || document.createElement("div"),
            Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Mr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });

  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Cu = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wn).forEach(function (e) {
    Cu.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]));
    });
  });

  function ci(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e])
        ? ("" + t).trim()
        : t + "px";
  }

  function ui(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = ci(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Eu = _(
    {
      menuitem: !0,
    },
    {
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
      wbr: !0,
    },
  );

  function qo(e, t) {
    if (t) {
      if (Eu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(c(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(c(62));
    }
  }

  function el(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var tl = null;

  function nl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var rl = null,
    gn = null,
    vn = null;

  function di(e) {
    if ((e = pr(e))) {
      if (typeof rl != "function") throw Error(c(280));
      var t = e.stateNode;
      t && ((t = ro(t)), rl(e.stateNode, e.type, t));
    }
  }

  function pi(e) {
    gn ? (vn ? vn.push(e) : (vn = [e])) : (gn = e);
  }

  function fi() {
    if (gn) {
      var e = gn,
        t = vn;
      if (((vn = gn = null), di(e), t)) for (e = 0; e < t.length; e++) di(t[e]);
    }
  }

  function hi(e, t) {
    return e(t);
  }

  function mi() {}
  var ol = !1;

  function xi(e, t, n) {
    if (ol) return e(t, n);
    ol = !0;
    try {
      return hi(e, t, n);
    } finally {
      ((ol = !1), (gn !== null || vn !== null) && (mi(), fi()));
    }
  }

  function Gn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ro(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var ll = !1;
  if (h)
    try {
      var $n = {};
      (Object.defineProperty($n, "passive", {
        get: function () {
          ll = !0;
        },
      }),
        window.addEventListener("test", $n, $n),
        window.removeEventListener("test", $n, $n));
    } catch {
      ll = !1;
    }

  function Iu(e, t, n, r, l, s, i, u, d) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (L) {
      this.onError(L);
    }
  }
  var Qn = !1,
    zr = null,
    Or = !1,
    sl = null,
    Au = {
      onError: function (e) {
        ((Qn = !0), (zr = e));
      },
    };

  function Tu(e, t, n, r, l, s, i, u, d) {
    ((Qn = !1), (zr = null), Iu.apply(Au, arguments));
  }

  function Pu(e, t, n, r, l, s, i, u, d) {
    if ((Tu.apply(this, arguments), Qn)) {
      if (Qn) {
        var w = zr;
        ((Qn = !1), (zr = null));
      } else throw Error(c(198));
      Or || ((Or = !0), (sl = w));
    }
  }

  function qt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }

  function gi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }

  function vi(e) {
    if (qt(e) !== e) throw Error(c(188));
  }

  function Lu(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = qt(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === n) return (vi(l), e);
          if (s === r) return (vi(l), t);
          s = s.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) ((n = l), (r = s));
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            ((i = !0), (n = l), (r = s));
            break;
          }
          if (u === r) {
            ((i = !0), (r = l), (n = s));
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = s.child; u; ) {
            if (u === n) {
              ((i = !0), (n = s), (r = l));
              break;
            }
            if (u === r) {
              ((i = !0), (r = s), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }

  function yi(e) {
    return ((e = Lu(e)), e !== null ? wi(e) : null);
  }

  function wi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = wi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ki = m.unstable_scheduleCallback,
    bi = m.unstable_cancelCallback,
    Ru = m.unstable_shouldYield,
    Mu = m.unstable_requestPaint,
    Ne = m.unstable_now,
    zu = m.unstable_getCurrentPriorityLevel,
    il = m.unstable_ImmediatePriority,
    ji = m.unstable_UserBlockingPriority,
    _r = m.unstable_NormalPriority,
    Ou = m.unstable_LowPriority,
    Si = m.unstable_IdlePriority,
    Dr = null,
    vt = null;

  function _u(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
      try {
        vt.onCommitFiberRoot(Dr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : Fu,
    Du = Math.log,
    Hu = Math.LN2;

  function Fu(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Du(e) / Hu) | 0)) | 0);
  }
  var Hr = 64,
    Fr = 4194304;

  function Yn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }

  function Br(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      s = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Yn(u)) : ((s &= i), s !== 0 && (r = Yn(s)));
    } else ((i = n & ~l), i !== 0 ? (r = Yn(i)) : s !== 0 && (r = Yn(s)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }

  function Bu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }

  function Uu(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;
    ) {
      var i = 31 - dt(s),
        u = 1 << i,
        d = l[i];
      (d === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Bu(u, t))
        : d <= t && (e.expiredLanes |= u),
        (s &= ~u));
    }
  }

  function al(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }

  function Ni() {
    var e = Hr;
    return ((Hr <<= 1), (Hr & 4194240) === 0 && (Hr = 64), e);
  }

  function cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }

  function Kn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - dt(t)),
      (e[t] = n));
  }

  function Vu(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - dt(n),
        s = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s));
    }
  }

  function ul(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var fe = 0;

  function Ci(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ei,
    dl,
    Ii,
    Ai,
    Ti,
    pl = !1,
    Ur = [],
    Lt = null,
    Rt = null,
    Mt = null,
    Jn = new Map(),
    Xn = new Map(),
    zt = [],
    Wu =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );

  function Pi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Rt = null;
        break;
      case "mouseover":
      case "mouseout":
        Mt = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xn.delete(t.pointerId);
    }
  }

  function Zn(e, t, n, r, l, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [l],
        }),
        t !== null && ((t = pr(t)), t !== null && dl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }

  function Gu(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Lt = Zn(Lt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Rt = Zn(Rt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Mt = Zn(Mt, e, t, n, r, l)), !0);
      case "pointerover":
        var s = l.pointerId;
        return (Jn.set(s, Zn(Jn.get(s) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (s = l.pointerId),
          Xn.set(s, Zn(Xn.get(s) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }

  function Li(e) {
    var t = en(e.target);
    if (t !== null) {
      var n = qt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = gi(n)), t !== null)) {
            ((e.blockedOn = t),
              Ti(e.priority, function () {
                Ii(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }

  function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((tl = r), n.target.dispatchEvent(r), (tl = null));
      } else return ((t = pr(n)), t !== null && dl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }

  function Ri(e, t, n) {
    Vr(e) && n.delete(t);
  }

  function $u() {
    ((pl = !1),
      Lt !== null && Vr(Lt) && (Lt = null),
      Rt !== null && Vr(Rt) && (Rt = null),
      Mt !== null && Vr(Mt) && (Mt = null),
      Jn.forEach(Ri),
      Xn.forEach(Ri));
  }

  function qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      pl ||
        ((pl = !0),
        m.unstable_scheduleCallback(m.unstable_NormalPriority, $u)));
  }

  function er(e) {
    function t(l) {
      return qn(l, e);
    }
    if (0 < Ur.length) {
      qn(Ur[0], e);
      for (var n = 1; n < Ur.length; n++) {
        var r = Ur[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Lt !== null && qn(Lt, e),
        Rt !== null && qn(Rt, e),
        Mt !== null && qn(Mt, e),
        Jn.forEach(t),
        Xn.forEach(t),
        n = 0;
      n < zt.length;
      n++
    )
      ((r = zt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
      (Li(n), n.blockedOn === null && zt.shift());
  }
  var yn = K.ReactCurrentBatchConfig,
    Wr = !0;

  function Qu(e, t, n, r) {
    var l = fe,
      s = yn.transition;
    yn.transition = null;
    try {
      ((fe = 1), fl(e, t, n, r));
    } finally {
      ((fe = l), (yn.transition = s));
    }
  }

  function Yu(e, t, n, r) {
    var l = fe,
      s = yn.transition;
    yn.transition = null;
    try {
      ((fe = 4), fl(e, t, n, r));
    } finally {
      ((fe = l), (yn.transition = s));
    }
  }

  function fl(e, t, n, r) {
    if (Wr) {
      var l = hl(e, t, n, r);
      if (l === null) (Pl(e, t, r, Gr, n), Pi(e, r));
      else if (Gu(l, e, t, n, r)) r.stopPropagation();
      else if ((Pi(e, r), t & 4 && -1 < Wu.indexOf(e))) {
        for (; l !== null; ) {
          var s = pr(l);
          if (
            (s !== null && Ei(s),
            (s = hl(e, t, n, r)),
            s === null && Pl(e, t, r, Gr, n),
            s === l)
          )
            break;
          l = s;
        }
        l !== null && r.stopPropagation();
      } else Pl(e, t, r, null, n);
    }
  }
  var Gr = null;

  function hl(e, t, n, r) {
    if (((Gr = null), (e = nl(r)), (e = en(e)), e !== null))
      if (((t = qt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = gi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Gr = e), null);
  }

  function Mi(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (zu()) {
          case il:
            return 1;
          case ji:
            return 4;
          case _r:
          case Ou:
            return 16;
          case Si:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ot = null,
    ml = null,
    $r = null;

  function zi() {
    if ($r) return $r;
    var e,
      t = ml,
      n = t.length,
      r,
      l = "value" in Ot ? Ot.value : Ot.textContent,
      s = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[s - r]; r++);
    return ($r = l.slice(e, 1 < r ? 1 - r : void 0));
  }

  function Qr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }

  function Yr() {
    return !0;
  }

  function Oi() {
    return !1;
  }

  function et(e) {
    function t(n, r, l, s, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = i),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(s) : s[u]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Yr
          : Oi),
        (this.isPropagationStopped = Oi),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Yr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Yr));
        },
        persist: function () {},
        isPersistent: Yr,
      }),
      t
    );
  }
  var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xl = et(wn),
    tr = _({}, wn, {
      view: 0,
      detail: 0,
    }),
    Ku = et(tr),
    gl,
    vl,
    nr,
    Kr = _({}, tr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== nr &&
              (nr && e.type === "mousemove"
                ? ((gl = e.screenX - nr.screenX), (vl = e.screenY - nr.screenY))
                : (vl = gl = 0),
              (nr = e)),
            gl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : vl;
      },
    }),
    _i = et(Kr),
    Ju = _({}, Kr, {
      dataTransfer: 0,
    }),
    Xu = et(Ju),
    Zu = _({}, tr, {
      relatedTarget: 0,
    }),
    yl = et(Zu),
    qu = _({}, wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    }),
    ed = et(qu),
    td = _({}, wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    nd = et(td),
    rd = _({}, wn, {
      data: 0,
    }),
    Di = et(rd),
    od = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ld = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    sd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };

  function id(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = sd[e])
        ? !!t[e]
        : !1;
  }

  function wl() {
    return id;
  }
  var ad = _({}, tr, {
      key: function (e) {
        if (e.key) {
          var t = od[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ld[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wl,
      charCode: function (e) {
        return e.type === "keypress" ? Qr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    cd = et(ad),
    ud = _({}, Kr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Hi = et(ud),
    dd = _({}, tr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wl,
    }),
    pd = et(dd),
    fd = _({}, wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    }),
    hd = et(fd),
    md = _({}, Kr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    xd = et(md),
    gd = [9, 13, 27, 32],
    kl = h && "CompositionEvent" in window,
    rr = null;
  h && "documentMode" in document && (rr = document.documentMode);
  var vd = h && "TextEvent" in window && !rr,
    Fi = h && (!kl || (rr && 8 < rr && 11 >= rr)),
    Bi = " ",
    Ui = !1;

  function Vi(e, t) {
    switch (e) {
      case "keyup":
        return gd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }

  function Wi(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var kn = !1;

  function yd(e, t) {
    switch (e) {
      case "compositionend":
        return Wi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ui = !0), Bi);
      case "textInput":
        return ((e = t.data), e === Bi && Ui ? null : e);
      default:
        return null;
    }
  }

  function wd(e, t) {
    if (kn)
      return e === "compositionend" || (!kl && Vi(e, t))
        ? ((e = zi()), ($r = ml = Ot = null), (kn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Fi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var kd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };

  function Gi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kd[e.type] : t === "textarea";
  }

  function $i(e, t, n, r) {
    (pi(r),
      (t = eo(t, "onChange")),
      0 < t.length &&
        ((n = new xl("onChange", "change", null, n, r)),
        e.push({
          event: n,
          listeners: t,
        })));
  }
  var or = null,
    lr = null;

  function bd(e) {
    ua(e, 0);
  }

  function Jr(e) {
    var t = Cn(e);
    if (ei(t)) return e;
  }

  function jd(e, t) {
    if (e === "change") return t;
  }
  var Qi = !1;
  if (h) {
    var bl;
    if (h) {
      var jl = "oninput" in document;
      if (!jl) {
        var Yi = document.createElement("div");
        (Yi.setAttribute("oninput", "return;"),
          (jl = typeof Yi.oninput == "function"));
      }
      bl = jl;
    } else bl = !1;
    Qi = bl && (!document.documentMode || 9 < document.documentMode);
  }

  function Ki() {
    or && (or.detachEvent("onpropertychange", Ji), (lr = or = null));
  }

  function Ji(e) {
    if (e.propertyName === "value" && Jr(lr)) {
      var t = [];
      ($i(t, lr, e, nl(e)), xi(bd, t));
    }
  }

  function Sd(e, t, n) {
    e === "focusin"
      ? (Ki(), (or = t), (lr = n), or.attachEvent("onpropertychange", Ji))
      : e === "focusout" && Ki();
  }

  function Nd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jr(lr);
  }

  function Cd(e, t) {
    if (e === "click") return Jr(t);
  }

  function Ed(e, t) {
    if (e === "input" || e === "change") return Jr(t);
  }

  function Id(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == "function" ? Object.is : Id;

  function sr(e, t) {
    if (pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!j.call(t, l) || !pt(e[l], t[l])) return !1;
    }
    return !0;
  }

  function Xi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }

  function Zi(e, t) {
    var n = Xi(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return {
            node: n,
            offset: t - e,
          };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Xi(n);
    }
  }

  function qi(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? qi(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }

  function ea() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Rr(e.document);
    }
    return t;
  }

  function Sl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }

  function Ad(e) {
    var t = ea(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      qi(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Sl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            s = Math.min(r.start, l);
          ((r = r.end === void 0 ? s : Math.min(r.end, l)),
            !e.extend && s > r && ((l = r), (r = s), (s = l)),
            (l = Zi(n, s)));
          var i = Zi(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop,
          });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Td = h && "documentMode" in document && 11 >= document.documentMode,
    bn = null,
    Nl = null,
    ir = null,
    Cl = !1;

  function ta(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Cl ||
      bn == null ||
      bn !== Rr(r) ||
      ((r = bn),
      "selectionStart" in r && Sl(r)
        ? (r = {
            start: r.selectionStart,
            end: r.selectionEnd,
          })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ir && sr(ir, r)) ||
        ((ir = r),
        (r = eo(Nl, "onSelect")),
        0 < r.length &&
          ((t = new xl("onSelect", "select", null, t, n)),
          e.push({
            event: t,
            listeners: r,
          }),
          (t.target = bn))));
  }

  function Xr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var jn = {
      animationend: Xr("Animation", "AnimationEnd"),
      animationiteration: Xr("Animation", "AnimationIteration"),
      animationstart: Xr("Animation", "AnimationStart"),
      transitionend: Xr("Transition", "TransitionEnd"),
    },
    El = {},
    na = {};
  h &&
    ((na = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete jn.animationend.animation,
      delete jn.animationiteration.animation,
      delete jn.animationstart.animation),
    "TransitionEvent" in window || delete jn.transitionend.transition);

  function Zr(e) {
    if (El[e]) return El[e];
    if (!jn[e]) return e;
    var t = jn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in na) return (El[e] = t[n]);
    return e;
  }
  var ra = Zr("animationend"),
    oa = Zr("animationiteration"),
    la = Zr("animationstart"),
    sa = Zr("transitionend"),
    ia = new Map(),
    aa =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );

  function _t(e, t) {
    (ia.set(e, t), k(t, [e]));
  }
  for (var Il = 0; Il < aa.length; Il++) {
    var Al = aa[Il],
      Pd = Al.toLowerCase(),
      Ld = Al[0].toUpperCase() + Al.slice(1);
    _t(Pd, "on" + Ld);
  }
  (_t(ra, "onAnimationEnd"),
    _t(oa, "onAnimationIteration"),
    _t(la, "onAnimationStart"),
    _t("dblclick", "onDoubleClick"),
    _t("focusin", "onFocus"),
    _t("focusout", "onBlur"),
    _t(sa, "onTransitionEnd"),
    E("onMouseEnter", ["mouseout", "mouseover"]),
    E("onMouseLeave", ["mouseout", "mouseover"]),
    E("onPointerEnter", ["pointerout", "pointerover"]),
    E("onPointerLeave", ["pointerout", "pointerover"]),
    k(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    k(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    k(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    k(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    k(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ar =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Rd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ar),
    );

  function ca(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Pu(r, t, void 0, e), (e.currentTarget = null));
  }

  function ua(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              d = u.instance,
              w = u.currentTarget;
            if (((u = u.listener), d !== s && l.isPropagationStopped()))
              break e;
            (ca(l, u, w), (s = d));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (d = u.instance),
              (w = u.currentTarget),
              (u = u.listener),
              d !== s && l.isPropagationStopped())
            )
              break e;
            (ca(l, u, w), (s = d));
          }
      }
    }
    if (Or) throw ((e = sl), (Or = !1), (sl = null), e);
  }

  function xe(e, t) {
    var n = t[_l];
    n === void 0 && (n = t[_l] = new Set());
    var r = e + "__bubble";
    n.has(r) || (da(t, e, 2, !1), n.add(r));
  }

  function Tl(e, t, n) {
    var r = 0;
    (t && (r |= 4), da(n, e, r, t));
  }
  var qr = "_reactListening" + Math.random().toString(36).slice(2);

  function cr(e) {
    if (!e[qr]) {
      ((e[qr] = !0),
        I.forEach(function (n) {
          n !== "selectionchange" && (Rd.has(n) || Tl(n, !1, e), Tl(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[qr] || ((t[qr] = !0), Tl("selectionchange", !1, t));
    }
  }

  function da(e, t, n, r) {
    switch (Mi(t)) {
      case 1:
        var l = Qu;
        break;
      case 4:
        l = Yu;
        break;
      default:
        l = fl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !ll ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, {
              capture: !0,
              passive: l,
            })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, {
              passive: l,
            })
          : e.addEventListener(t, n, !1));
  }

  function Pl(e, t, n, r, l) {
    var s = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var d = i.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = i.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = en(u)), i === null)) return;
            if (((d = i.tag), d === 5 || d === 6)) {
              r = s = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    xi(function () {
      var w = s,
        L = nl(n),
        z = [];
      e: {
        var P = ia.get(e);
        if (P !== void 0) {
          var W = xl,
            $ = e;
          switch (e) {
            case "keypress":
              if (Qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = cd;
              break;
            case "focusin":
              (($ = "focus"), (W = yl));
              break;
            case "focusout":
              (($ = "blur"), (W = yl));
              break;
            case "beforeblur":
            case "afterblur":
              W = yl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              W = _i;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Xu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = pd;
              break;
            case ra:
            case oa:
            case la:
              W = ed;
              break;
            case sa:
              W = hd;
              break;
            case "scroll":
              W = Ku;
              break;
            case "wheel":
              W = xd;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = nd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Hi;
          }
          var Q = (t & 4) !== 0,
            Ce = !Q && e === "scroll",
            x = Q ? (P !== null ? P + "Capture" : null) : P;
          Q = [];
          for (var f = w, v; f !== null; ) {
            v = f;
            var D = v.stateNode;
            if (
              (v.tag === 5 &&
                D !== null &&
                ((v = D),
                x !== null &&
                  ((D = Gn(f, x)), D != null && Q.push(ur(f, D, v)))),
              Ce)
            )
              break;
            f = f.return;
          }
          0 < Q.length &&
            ((P = new W(P, $, null, n, L)),
            z.push({
              event: P,
              listeners: Q,
            }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            P &&
              n !== tl &&
              ($ = n.relatedTarget || n.fromElement) &&
              (en($) || $[St]))
          )
            break e;
          if (
            (W || P) &&
            ((P =
              L.window === L
                ? L
                : (P = L.ownerDocument)
                  ? P.defaultView || P.parentWindow
                  : window),
            W
              ? (($ = n.relatedTarget || n.toElement),
                (W = w),
                ($ = $ ? en($) : null),
                $ !== null &&
                  ((Ce = qt($)), $ !== Ce || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((W = null), ($ = w)),
            W !== $)
          ) {
            if (
              ((Q = _i),
              (D = "onMouseLeave"),
              (x = "onMouseEnter"),
              (f = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = Hi),
                (D = "onPointerLeave"),
                (x = "onPointerEnter"),
                (f = "pointer")),
              (Ce = W == null ? P : Cn(W)),
              (v = $ == null ? P : Cn($)),
              (P = new Q(D, f + "leave", W, n, L)),
              (P.target = Ce),
              (P.relatedTarget = v),
              (D = null),
              en(L) === w &&
                ((Q = new Q(x, f + "enter", $, n, L)),
                (Q.target = v),
                (Q.relatedTarget = Ce),
                (D = Q)),
              (Ce = D),
              W && $)
            )
              t: {
                for (Q = W, x = $, f = 0, v = Q; v; v = Sn(v)) f++;
                for (v = 0, D = x; D; D = Sn(D)) v++;
                for (; 0 < f - v; ) ((Q = Sn(Q)), f--);
                for (; 0 < v - f; ) ((x = Sn(x)), v--);
                for (; f--; ) {
                  if (Q === x || (x !== null && Q === x.alternate)) break t;
                  ((Q = Sn(Q)), (x = Sn(x)));
                }
                Q = null;
              }
            else Q = null;
            (W !== null && pa(z, P, W, Q, !1),
              $ !== null && Ce !== null && pa(z, Ce, $, Q, !0));
          }
        }
        e: {
          if (
            ((P = w ? Cn(w) : window),
            (W = P.nodeName && P.nodeName.toLowerCase()),
            W === "select" || (W === "input" && P.type === "file"))
          )
            var Y = jd;
          else if (Gi(P))
            if (Qi) Y = Ed;
            else {
              Y = Nd;
              var Z = Sd;
            }
          else
            (W = P.nodeName) &&
              W.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              (Y = Cd);
          if (Y && (Y = Y(e, w))) {
            $i(z, Y, n, L);
            break e;
          }
          (Z && Z(e, P, w),
            e === "focusout" &&
              (Z = P._wrapperState) &&
              Z.controlled &&
              P.type === "number" &&
              Jo(P, "number", P.value));
        }
        switch (((Z = w ? Cn(w) : window), e)) {
          case "focusin":
            (Gi(Z) || Z.contentEditable === "true") &&
              ((bn = Z), (Nl = w), (ir = null));
            break;
          case "focusout":
            ir = Nl = bn = null;
            break;
          case "mousedown":
            Cl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Cl = !1), ta(z, n, L));
            break;
          case "selectionchange":
            if (Td) break;
          case "keydown":
          case "keyup":
            ta(z, n, L);
        }
        var q;
        if (kl)
          e: {
            switch (e) {
              case "compositionstart":
                var te = "onCompositionStart";
                break e;
              case "compositionend":
                te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                te = "onCompositionUpdate";
                break e;
            }
            te = void 0;
          }
        else
          kn
            ? Vi(e, n) && (te = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (te = "onCompositionStart");
        (te &&
          (Fi &&
            n.locale !== "ko" &&
            (kn || te !== "onCompositionStart"
              ? te === "onCompositionEnd" && kn && (q = zi())
              : ((Ot = L),
                (ml = "value" in Ot ? Ot.value : Ot.textContent),
                (kn = !0))),
          (Z = eo(w, te)),
          0 < Z.length &&
            ((te = new Di(te, e, null, n, L)),
            z.push({
              event: te,
              listeners: Z,
            }),
            q ? (te.data = q) : ((q = Wi(n)), q !== null && (te.data = q)))),
          (q = vd ? yd(e, n) : wd(e, n)) &&
            ((w = eo(w, "onBeforeInput")),
            0 < w.length &&
              ((L = new Di("onBeforeInput", "beforeinput", null, n, L)),
              z.push({
                event: L,
                listeners: w,
              }),
              (L.data = q))));
      }
      ua(z, t);
    });
  }

  function ur(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n,
    };
  }

  function eo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        s = l.stateNode;
      (l.tag === 5 &&
        s !== null &&
        ((l = s),
        (s = Gn(e, n)),
        s != null && r.unshift(ur(e, s, l)),
        (s = Gn(e, t)),
        s != null && r.push(ur(e, s, l))),
        (e = e.return));
    }
    return r;
  }

  function Sn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }

  function pa(e, t, n, r, l) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        d = u.alternate,
        w = u.stateNode;
      if (d !== null && d === r) break;
      (u.tag === 5 &&
        w !== null &&
        ((u = w),
        l
          ? ((d = Gn(n, s)), d != null && i.unshift(ur(n, d, u)))
          : l || ((d = Gn(n, s)), d != null && i.push(ur(n, d, u)))),
        (n = n.return));
    }
    i.length !== 0 &&
      e.push({
        event: t,
        listeners: i,
      });
  }
  var Md = /\r\n?/g,
    zd = /\u0000|\uFFFD/g;

  function fa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Md,
        `
`,
      )
      .replace(zd, "");
  }

  function to(e, t, n) {
    if (((t = fa(t)), fa(e) !== t && n)) throw Error(c(425));
  }

  function no() {}
  var Ll = null,
    Rl = null;

  function Ml(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var zl = typeof setTimeout == "function" ? setTimeout : void 0,
    Od = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ha = typeof Promise == "function" ? Promise : void 0,
    _d =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ha < "u"
          ? function (e) {
              return ha.resolve(null).then(e).catch(Dd);
            }
          : zl;

  function Dd(e) {
    setTimeout(function () {
      throw e;
    });
  }

  function Ol(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), er(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    er(t);
  }

  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }

  function ma(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Nn = Math.random().toString(36).slice(2),
    yt = "__reactFiber$" + Nn,
    dr = "__reactProps$" + Nn,
    St = "__reactContainer$" + Nn,
    _l = "__reactEvents$" + Nn,
    Hd = "__reactListeners$" + Nn,
    Fd = "__reactHandles$" + Nn;

  function en(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[yt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ma(e); e !== null; ) {
            if ((n = e[yt])) return n;
            e = ma(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }

  function pr(e) {
    return (
      (e = e[yt] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }

  function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }

  function ro(e) {
    return e[dr] || null;
  }
  var Dl = [],
    En = -1;

  function Ht(e) {
    return {
      current: e,
    };
  }

  function ge(e) {
    0 > En || ((e.current = Dl[En]), (Dl[En] = null), En--);
  }

  function me(e, t) {
    (En++, (Dl[En] = e.current), (e.current = t));
  }
  var Ft = {},
    Fe = Ht(Ft),
    Ye = Ht(!1),
    tn = Ft;

  function In(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      s;
    for (s in n) l[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }

  function Ke(e) {
    return ((e = e.childContextTypes), e != null);
  }

  function oo() {
    (ge(Ye), ge(Fe));
  }

  function xa(e, t, n) {
    if (Fe.current !== Ft) throw Error(c(168));
    (me(Fe, t), me(Ye, n));
  }

  function ga(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, pe(e) || "Unknown", l));
    return _({}, n, r);
  }

  function lo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (tn = Fe.current),
      me(Fe, e),
      me(Ye, Ye.current),
      !0
    );
  }

  function va(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    (n
      ? ((e = ga(e, t, tn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Ye),
        ge(Fe),
        me(Fe, e))
      : ge(Ye),
      me(Ye, n));
  }
  var Nt = null,
    so = !1,
    Hl = !1;

  function ya(e) {
    Nt === null ? (Nt = [e]) : Nt.push(e);
  }

  function Bd(e) {
    ((so = !0), ya(e));
  }

  function Bt() {
    if (!Hl && Nt !== null) {
      Hl = !0;
      var e = 0,
        t = fe;
      try {
        var n = Nt;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Nt = null), (so = !1));
      } catch (l) {
        throw (Nt !== null && (Nt = Nt.slice(e + 1)), ki(il, Bt), l);
      } finally {
        ((fe = t), (Hl = !1));
      }
    }
    return null;
  }
  var An = [],
    Tn = 0,
    io = null,
    ao = 0,
    lt = [],
    st = 0,
    nn = null,
    Ct = 1,
    Et = "";

  function rn(e, t) {
    ((An[Tn++] = ao), (An[Tn++] = io), (io = e), (ao = t));
  }

  function wa(e, t, n) {
    ((lt[st++] = Ct), (lt[st++] = Et), (lt[st++] = nn), (nn = e));
    var r = Ct;
    e = Et;
    var l = 32 - dt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var s = 32 - dt(t) + l;
    if (30 < s) {
      var i = l - (l % 5);
      ((s = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Ct = (1 << (32 - dt(t) + l)) | (n << l) | r),
        (Et = s + e));
    } else ((Ct = (1 << s) | (n << l) | r), (Et = e));
  }

  function Fl(e) {
    e.return !== null && (rn(e, 1), wa(e, 1, 0));
  }

  function Bl(e) {
    for (; e === io; )
      ((io = An[--Tn]), (An[Tn] = null), (ao = An[--Tn]), (An[Tn] = null));
    for (; e === nn; )
      ((nn = lt[--st]),
        (lt[st] = null),
        (Et = lt[--st]),
        (lt[st] = null),
        (Ct = lt[--st]),
        (lt[st] = null));
  }
  var tt = null,
    nt = null,
    we = !1,
    ft = null;

  function ka(e, t) {
    var n = ut(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }

  function ba(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (tt = e), (nt = Dt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (tt = e), (nt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n =
                nn !== null
                  ? {
                      id: Ct,
                      overflow: Et,
                    }
                  : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ut(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (tt = e),
              (nt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }

  function Ul(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }

  function Vl(e) {
    if (we) {
      var t = nt;
      if (t) {
        var n = t;
        if (!ba(e, t)) {
          if (Ul(e)) throw Error(c(418));
          t = Dt(n.nextSibling);
          var r = tt;
          t && ba(e, t)
            ? ka(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (we = !1), (tt = e));
        }
      } else {
        if (Ul(e)) throw Error(c(418));
        ((e.flags = (e.flags & -4097) | 2), (we = !1), (tt = e));
      }
    }
  }

  function ja(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    tt = e;
  }

  function co(e) {
    if (e !== tt) return !1;
    if (!we) return (ja(e), (we = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ml(e.type, e.memoizedProps))),
      t && (t = nt))
    ) {
      if (Ul(e)) throw (Sa(), Error(c(418)));
      for (; t; ) (ka(e, t), (t = Dt(t.nextSibling)));
    }
    if ((ja(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                nt = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        nt = null;
      }
    } else nt = tt ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }

  function Sa() {
    for (var e = nt; e; ) e = Dt(e.nextSibling);
  }

  function Pn() {
    ((nt = tt = null), (we = !1));
  }

  function Wl(e) {
    ft === null ? (ft = [e]) : ft.push(e);
  }
  var Ud = K.ReactCurrentBatchConfig;

  function fr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(c(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(c(147, e));
        var l = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (i) {
              var u = l.refs;
              i === null ? delete u[s] : (u[s] = i);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(c(284));
      if (!n._owner) throw Error(c(290, e));
    }
    return e;
  }

  function uo(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        c(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }

  function Na(e) {
    var t = e._init;
    return t(e._payload);
  }

  function Ca(e) {
    function t(x, f) {
      if (e) {
        var v = x.deletions;
        v === null ? ((x.deletions = [f]), (x.flags |= 16)) : v.push(f);
      }
    }

    function n(x, f) {
      if (!e) return null;
      for (; f !== null; ) (t(x, f), (f = f.sibling));
      return null;
    }

    function r(x, f) {
      for (x = new Map(); f !== null; )
        (f.key !== null ? x.set(f.key, f) : x.set(f.index, f), (f = f.sibling));
      return x;
    }

    function l(x, f) {
      return ((x = Kt(x, f)), (x.index = 0), (x.sibling = null), x);
    }

    function s(x, f, v) {
      return (
        (x.index = v),
        e
          ? ((v = x.alternate),
            v !== null
              ? ((v = v.index), v < f ? ((x.flags |= 2), f) : v)
              : ((x.flags |= 2), f))
          : ((x.flags |= 1048576), f)
      );
    }

    function i(x) {
      return (e && x.alternate === null && (x.flags |= 2), x);
    }

    function u(x, f, v, D) {
      return f === null || f.tag !== 6
        ? ((f = zs(v, x.mode, D)), (f.return = x), f)
        : ((f = l(f, v)), (f.return = x), f);
    }

    function d(x, f, v, D) {
      var Y = v.type;
      return Y === oe
        ? L(x, f, v.props.children, D, v.key)
        : f !== null &&
            (f.elementType === Y ||
              (typeof Y == "object" &&
                Y !== null &&
                Y.$$typeof === Pe &&
                Na(Y) === f.type))
          ? ((D = l(f, v.props)), (D.ref = fr(x, f, v)), (D.return = x), D)
          : ((D = zo(v.type, v.key, v.props, null, x.mode, D)),
            (D.ref = fr(x, f, v)),
            (D.return = x),
            D);
    }

    function w(x, f, v, D) {
      return f === null ||
        f.tag !== 4 ||
        f.stateNode.containerInfo !== v.containerInfo ||
        f.stateNode.implementation !== v.implementation
        ? ((f = Os(v, x.mode, D)), (f.return = x), f)
        : ((f = l(f, v.children || [])), (f.return = x), f);
    }

    function L(x, f, v, D, Y) {
      return f === null || f.tag !== 7
        ? ((f = pn(v, x.mode, D, Y)), (f.return = x), f)
        : ((f = l(f, v)), (f.return = x), f);
    }

    function z(x, f, v) {
      if ((typeof f == "string" && f !== "") || typeof f == "number")
        return ((f = zs("" + f, x.mode, v)), (f.return = x), f);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case ve:
            return (
              (v = zo(f.type, f.key, f.props, null, x.mode, v)),
              (v.ref = fr(x, null, f)),
              (v.return = x),
              v
            );
          case je:
            return ((f = Os(f, x.mode, v)), (f.return = x), f);
          case Pe:
            var D = f._init;
            return z(x, D(f._payload), v);
        }
        if (Un(f) || O(f))
          return ((f = pn(f, x.mode, v, null)), (f.return = x), f);
        uo(x, f);
      }
      return null;
    }

    function P(x, f, v, D) {
      var Y = f !== null ? f.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return Y !== null ? null : u(x, f, "" + v, D);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ve:
            return v.key === Y ? d(x, f, v, D) : null;
          case je:
            return v.key === Y ? w(x, f, v, D) : null;
          case Pe:
            return ((Y = v._init), P(x, f, Y(v._payload), D));
        }
        if (Un(v) || O(v)) return Y !== null ? null : L(x, f, v, D, null);
        uo(x, v);
      }
      return null;
    }

    function W(x, f, v, D, Y) {
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return ((x = x.get(v) || null), u(f, x, "" + D, Y));
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ve:
            return (
              (x = x.get(D.key === null ? v : D.key) || null),
              d(f, x, D, Y)
            );
          case je:
            return (
              (x = x.get(D.key === null ? v : D.key) || null),
              w(f, x, D, Y)
            );
          case Pe:
            var Z = D._init;
            return W(x, f, v, Z(D._payload), Y);
        }
        if (Un(D) || O(D)) return ((x = x.get(v) || null), L(f, x, D, Y, null));
        uo(f, D);
      }
      return null;
    }

    function $(x, f, v, D) {
      for (
        var Y = null, Z = null, q = f, te = (f = 0), Oe = null;
        q !== null && te < v.length;
        te++
      ) {
        q.index > te ? ((Oe = q), (q = null)) : (Oe = q.sibling);
        var ue = P(x, q, v[te], D);
        if (ue === null) {
          q === null && (q = Oe);
          break;
        }
        (e && q && ue.alternate === null && t(x, q),
          (f = s(ue, f, te)),
          Z === null ? (Y = ue) : (Z.sibling = ue),
          (Z = ue),
          (q = Oe));
      }
      if (te === v.length) return (n(x, q), we && rn(x, te), Y);
      if (q === null) {
        for (; te < v.length; te++)
          ((q = z(x, v[te], D)),
            q !== null &&
              ((f = s(q, f, te)),
              Z === null ? (Y = q) : (Z.sibling = q),
              (Z = q)));
        return (we && rn(x, te), Y);
      }
      for (q = r(x, q); te < v.length; te++)
        ((Oe = W(q, x, te, v[te], D)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              q.delete(Oe.key === null ? te : Oe.key),
            (f = s(Oe, f, te)),
            Z === null ? (Y = Oe) : (Z.sibling = Oe),
            (Z = Oe)));
      return (
        e &&
          q.forEach(function (Jt) {
            return t(x, Jt);
          }),
        we && rn(x, te),
        Y
      );
    }

    function Q(x, f, v, D) {
      var Y = O(v);
      if (typeof Y != "function") throw Error(c(150));
      if (((v = Y.call(v)), v == null)) throw Error(c(151));
      for (
        var Z = (Y = null), q = f, te = (f = 0), Oe = null, ue = v.next();
        q !== null && !ue.done;
        te++, ue = v.next()
      ) {
        q.index > te ? ((Oe = q), (q = null)) : (Oe = q.sibling);
        var Jt = P(x, q, ue.value, D);
        if (Jt === null) {
          q === null && (q = Oe);
          break;
        }
        (e && q && Jt.alternate === null && t(x, q),
          (f = s(Jt, f, te)),
          Z === null ? (Y = Jt) : (Z.sibling = Jt),
          (Z = Jt),
          (q = Oe));
      }
      if (ue.done) return (n(x, q), we && rn(x, te), Y);
      if (q === null) {
        for (; !ue.done; te++, ue = v.next())
          ((ue = z(x, ue.value, D)),
            ue !== null &&
              ((f = s(ue, f, te)),
              Z === null ? (Y = ue) : (Z.sibling = ue),
              (Z = ue)));
        return (we && rn(x, te), Y);
      }
      for (q = r(x, q); !ue.done; te++, ue = v.next())
        ((ue = W(q, x, te, ue.value, D)),
          ue !== null &&
            (e &&
              ue.alternate !== null &&
              q.delete(ue.key === null ? te : ue.key),
            (f = s(ue, f, te)),
            Z === null ? (Y = ue) : (Z.sibling = ue),
            (Z = ue)));
      return (
        e &&
          q.forEach(function (kp) {
            return t(x, kp);
          }),
        we && rn(x, te),
        Y
      );
    }

    function Ce(x, f, v, D) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === oe &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case ve:
            e: {
              for (var Y = v.key, Z = f; Z !== null; ) {
                if (Z.key === Y) {
                  if (((Y = v.type), Y === oe)) {
                    if (Z.tag === 7) {
                      (n(x, Z.sibling),
                        (f = l(Z, v.props.children)),
                        (f.return = x),
                        (x = f));
                      break e;
                    }
                  } else if (
                    Z.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === Pe &&
                      Na(Y) === Z.type)
                  ) {
                    (n(x, Z.sibling),
                      (f = l(Z, v.props)),
                      (f.ref = fr(x, Z, v)),
                      (f.return = x),
                      (x = f));
                    break e;
                  }
                  n(x, Z);
                  break;
                } else t(x, Z);
                Z = Z.sibling;
              }
              v.type === oe
                ? ((f = pn(v.props.children, x.mode, D, v.key)),
                  (f.return = x),
                  (x = f))
                : ((D = zo(v.type, v.key, v.props, null, x.mode, D)),
                  (D.ref = fr(x, f, v)),
                  (D.return = x),
                  (x = D));
            }
            return i(x);
          case je:
            e: {
              for (Z = v.key; f !== null; ) {
                if (f.key === Z)
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === v.containerInfo &&
                    f.stateNode.implementation === v.implementation
                  ) {
                    (n(x, f.sibling),
                      (f = l(f, v.children || [])),
                      (f.return = x),
                      (x = f));
                    break e;
                  } else {
                    n(x, f);
                    break;
                  }
                else t(x, f);
                f = f.sibling;
              }
              ((f = Os(v, x.mode, D)), (f.return = x), (x = f));
            }
            return i(x);
          case Pe:
            return ((Z = v._init), Ce(x, f, Z(v._payload), D));
        }
        if (Un(v)) return $(x, f, v, D);
        if (O(v)) return Q(x, f, v, D);
        uo(x, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          f !== null && f.tag === 6
            ? (n(x, f.sibling), (f = l(f, v)), (f.return = x), (x = f))
            : (n(x, f), (f = zs(v, x.mode, D)), (f.return = x), (x = f)),
          i(x))
        : n(x, f);
    }
    return Ce;
  }
  var Ln = Ca(!0),
    Ea = Ca(!1),
    po = Ht(null),
    fo = null,
    Rn = null,
    Gl = null;

  function $l() {
    Gl = Rn = fo = null;
  }

  function Ql(e) {
    var t = po.current;
    (ge(po), (e._currentValue = t));
  }

  function Yl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }

  function Mn(e, t) {
    ((fo = e),
      (Gl = Rn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null)));
  }

  function it(e) {
    var t = e._currentValue;
    if (Gl !== e)
      if (
        ((e = {
          context: e,
          memoizedValue: t,
          next: null,
        }),
        Rn === null)
      ) {
        if (fo === null) throw Error(c(308));
        ((Rn = e),
          (fo.dependencies = {
            lanes: 0,
            firstContext: e,
          }));
      } else Rn = Rn.next = e;
    return t;
  }
  var on = null;

  function Kl(e) {
    on === null ? (on = [e]) : on.push(e);
  }

  function Ia(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Kl(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      It(e, r)
    );
  }

  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;

  function Jl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0,
      },
      effects: null,
    };
  }

  function Aa(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }

  function At(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }

  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ae & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        It(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Kl(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }

  function ho(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ul(e, n));
    }
  }

  function Ta(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (s === null ? (l = s = i) : (s = s.next = i), (n = n.next));
        } while (n !== null);
        s === null ? (l = s = t) : (s = s.next = t);
      } else l = s = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }

  function mo(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var s = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var d = u,
        w = d.next;
      ((d.next = null), i === null ? (s = w) : (i.next = w), (i = d));
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (u = L.lastBaseUpdate),
        u !== i &&
          (u === null ? (L.firstBaseUpdate = w) : (u.next = w),
          (L.lastBaseUpdate = d)));
    }
    if (s !== null) {
      var z = l.baseState;
      ((i = 0), (L = w = d = null), (u = s));
      do {
        var P = u.lane,
          W = u.eventTime;
        if ((r & P) === P) {
          L !== null &&
            (L = L.next =
              {
                eventTime: W,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var $ = e,
              Q = u;
            switch (((P = t), (W = n), Q.tag)) {
              case 1:
                if ((($ = Q.payload), typeof $ == "function")) {
                  z = $.call(W, z, P);
                  break e;
                }
                z = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = Q.payload),
                  (P = typeof $ == "function" ? $.call(W, z, P) : $),
                  P == null)
                )
                  break e;
                z = _({}, z, P);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [u]) : P.push(u));
        } else
          ((W = {
            eventTime: W,
            lane: P,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            L === null ? ((w = L = W), (d = z)) : (L = L.next = W),
            (i |= P));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((P = u),
            (u = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (L === null && (d = z),
        (l.baseState = d),
        (l.firstBaseUpdate = w),
        (l.lastBaseUpdate = L),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else s === null && (l.shared.lanes = 0);
      ((an |= i), (e.lanes = i), (e.memoizedState = z));
    }
  }

  function Pa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(c(191, l));
          l.call(r);
        }
      }
  }
  var hr = {},
    wt = Ht(hr),
    mr = Ht(hr),
    xr = Ht(hr);

  function ln(e) {
    if (e === hr) throw Error(c(174));
    return e;
  }

  function Xl(e, t) {
    switch ((me(xr, t), me(mr, e), me(wt, hr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zo(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Zo(t, e)));
    }
    (ge(wt), me(wt, t));
  }

  function zn() {
    (ge(wt), ge(mr), ge(xr));
  }

  function La(e) {
    ln(xr.current);
    var t = ln(wt.current),
      n = Zo(t, e.type);
    t !== n && (me(mr, e), me(wt, n));
  }

  function Zl(e) {
    mr.current === e && (ge(wt), ge(mr));
  }
  var ke = Ht(0);

  function xo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var ql = [];

  function es() {
    for (var e = 0; e < ql.length; e++)
      ql[e]._workInProgressVersionPrimary = null;
    ql.length = 0;
  }
  var go = K.ReactCurrentDispatcher,
    ts = K.ReactCurrentBatchConfig,
    sn = 0,
    be = null,
    Le = null,
    Me = null,
    vo = !1,
    gr = !1,
    vr = 0,
    Vd = 0;

  function Be() {
    throw Error(c(321));
  }

  function ns(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pt(e[n], t[n])) return !1;
    return !0;
  }

  function rs(e, t, n, r, l, s) {
    if (
      ((sn = s),
      (be = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (go.current = e === null || e.memoizedState === null ? Qd : Yd),
      (e = n(r, l)),
      gr)
    ) {
      s = 0;
      do {
        if (((gr = !1), (vr = 0), 25 <= s)) throw Error(c(301));
        ((s += 1),
          (Me = Le = null),
          (t.updateQueue = null),
          (go.current = Kd),
          (e = n(r, l)));
      } while (gr);
    }
    if (
      ((go.current = ko),
      (t = Le !== null && Le.next !== null),
      (sn = 0),
      (Me = Le = be = null),
      (vo = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }

  function os() {
    var e = vr !== 0;
    return ((vr = 0), e);
  }

  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Me === null ? (be.memoizedState = Me = e) : (Me = Me.next = e), Me);
  }

  function at() {
    if (Le === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Me === null ? be.memoizedState : Me.next;
    if (t !== null) ((Me = t), (Le = e));
    else {
      if (e === null) throw Error(c(310));
      ((Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        Me === null ? (be.memoizedState = Me = e) : (Me = Me.next = e));
    }
    return Me;
  }

  function yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }

  function ls(e) {
    var t = at(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = Le,
      l = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = s.next), (s.next = i));
      }
      ((r.baseQueue = l = s), (n.pending = null));
    }
    if (l !== null) {
      ((s = l.next), (r = r.baseState));
      var u = (i = null),
        d = null,
        w = s;
      do {
        var L = w.lane;
        if ((sn & L) === L)
          (d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: w.action,
                hasEagerState: w.hasEagerState,
                eagerState: w.eagerState,
                next: null,
              }),
            (r = w.hasEagerState ? w.eagerState : e(r, w.action)));
        else {
          var z = {
            lane: L,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          (d === null ? ((u = d = z), (i = r)) : (d = d.next = z),
            (be.lanes |= L),
            (an |= L));
        }
        w = w.next;
      } while (w !== null && w !== s);
      (d === null ? (i = r) : (d.next = u),
        pt(r, t.memoizedState) || (Je = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = d),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((s = l.lane), (be.lanes |= s), (an |= s), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }

  function ss(e) {
    var t = at(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      s = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((s = e(s, i.action)), (i = i.next));
      while (i !== l);
      (pt(s, t.memoizedState) || (Je = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, r];
  }

  function Ra() {}

  function Ma(e, t) {
    var n = be,
      r = at(),
      l = t(),
      s = !pt(r.memoizedState, l);
    if (
      (s && ((r.memoizedState = l), (Je = !0)),
      (r = r.queue),
      is(_a.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        wr(9, Oa.bind(null, n, r, l, t), void 0, null),
        ze === null)
      )
        throw Error(c(349));
      (sn & 30) !== 0 || za(n, t, l);
    }
    return l;
  }

  function za(e, t, n) {
    ((e.flags |= 16384),
      (e = {
        getSnapshot: t,
        value: n,
      }),
      (t = be.updateQueue),
      t === null
        ? ((t = {
            lastEffect: null,
            stores: null,
          }),
          (be.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }

  function Oa(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Da(t) && Ha(e));
  }

  function _a(e, t, n) {
    return n(function () {
      Da(t) && Ha(e);
    });
  }

  function Da(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }

  function Ha(e) {
    var t = It(e, 1);
    t !== null && gt(t, e, 1, -1);
  }

  function Fa(e) {
    var t = kt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = $d.bind(null, be, e)),
      [t.memoizedState, e]
    );
  }

  function wr(e, t, n, r) {
    return (
      (e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null,
      }),
      (t = be.updateQueue),
      t === null
        ? ((t = {
            lastEffect: null,
            stores: null,
          }),
          (be.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }

  function Ba() {
    return at().memoizedState;
  }

  function yo(e, t, n, r) {
    var l = kt();
    ((be.flags |= e),
      (l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r)));
  }

  function wo(e, t, n, r) {
    var l = at();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Le !== null) {
      var i = Le.memoizedState;
      if (((s = i.destroy), r !== null && ns(r, i.deps))) {
        l.memoizedState = wr(t, n, s, r);
        return;
      }
    }
    ((be.flags |= e), (l.memoizedState = wr(1 | t, n, s, r)));
  }

  function Ua(e, t) {
    return yo(8390656, 8, e, t);
  }

  function is(e, t) {
    return wo(2048, 8, e, t);
  }

  function Va(e, t) {
    return wo(4, 2, e, t);
  }

  function Wa(e, t) {
    return wo(4, 4, e, t);
  }

  function Ga(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }

  function $a(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      wo(4, 4, Ga.bind(null, t, e), n)
    );
  }

  function as() {}

  function Qa(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ns(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }

  function Ya(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ns(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }

  function Ka(e, t, n) {
    return (sn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (pt(n, t) ||
          ((n = Ni()), (be.lanes |= n), (an |= n), (e.baseState = !0)),
        t);
  }

  function Wd(e, t) {
    var n = fe;
    ((fe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ts.transition;
    ts.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((fe = n), (ts.transition = r));
    }
  }

  function Ja() {
    return at().memoizedState;
  }

  function Gd(e, t, n) {
    var r = Qt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Xa(e))
    )
      Za(t, n);
    else if (((n = Ia(e, t, n, r)), n !== null)) {
      var l = Ge();
      (gt(n, e, r, l), qa(n, t, r));
    }
  }

  function $d(e, t, n) {
    var r = Qt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Xa(e)) Za(t, l);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = s(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), pt(u, i))) {
            var d = t.interleaved;
            (d === null
              ? ((l.next = l), Kl(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ia(e, t, l, r)),
        n !== null && ((l = Ge()), gt(n, e, r, l), qa(n, t, r)));
    }
  }

  function Xa(e) {
    var t = e.alternate;
    return e === be || (t !== null && t === be);
  }

  function Za(e, t) {
    gr = vo = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }

  function qa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ul(e, n));
    }
  }
  var ko = {
      readContext: it,
      useCallback: Be,
      useContext: Be,
      useEffect: Be,
      useImperativeHandle: Be,
      useInsertionEffect: Be,
      useLayoutEffect: Be,
      useMemo: Be,
      useReducer: Be,
      useRef: Be,
      useState: Be,
      useDebugValue: Be,
      useDeferredValue: Be,
      useTransition: Be,
      useMutableSource: Be,
      useSyncExternalStore: Be,
      useId: Be,
      unstable_isNewReconciler: !1,
    },
    Qd = {
      readContext: it,
      useCallback: function (e, t) {
        return ((kt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: it,
      useEffect: Ua,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          yo(4194308, 4, Ga.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return yo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return yo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = kt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = kt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Gd.bind(null, be, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = kt();
        return (
          (e = {
            current: e,
          }),
          (t.memoizedState = e)
        );
      },
      useState: Fa,
      useDebugValue: as,
      useDeferredValue: function (e) {
        return (kt().memoizedState = e);
      },
      useTransition: function () {
        var e = Fa(!1),
          t = e[0];
        return ((e = Wd.bind(null, e[1])), (kt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = be,
          l = kt();
        if (we) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(c(349));
          (sn & 30) !== 0 || za(r, t, n);
        }
        l.memoizedState = n;
        var s = {
          value: n,
          getSnapshot: t,
        };
        return (
          (l.queue = s),
          Ua(_a.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          wr(9, Oa.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = kt(),
          t = ze.identifierPrefix;
        if (we) {
          var n = Et,
            r = Ct;
          ((n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = vr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Vd++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Yd = {
      readContext: it,
      useCallback: Qa,
      useContext: it,
      useEffect: is,
      useImperativeHandle: $a,
      useInsertionEffect: Va,
      useLayoutEffect: Wa,
      useMemo: Ya,
      useReducer: ls,
      useRef: Ba,
      useState: function () {
        return ls(yr);
      },
      useDebugValue: as,
      useDeferredValue: function (e) {
        var t = at();
        return Ka(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = ls(yr)[0],
          t = at().memoizedState;
        return [e, t];
      },
      useMutableSource: Ra,
      useSyncExternalStore: Ma,
      useId: Ja,
      unstable_isNewReconciler: !1,
    },
    Kd = {
      readContext: it,
      useCallback: Qa,
      useContext: it,
      useEffect: is,
      useImperativeHandle: $a,
      useInsertionEffect: Va,
      useLayoutEffect: Wa,
      useMemo: Ya,
      useReducer: ss,
      useRef: Ba,
      useState: function () {
        return ss(yr);
      },
      useDebugValue: as,
      useDeferredValue: function (e) {
        var t = at();
        return Le === null ? (t.memoizedState = e) : Ka(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = ss(yr)[0],
          t = at().memoizedState;
        return [e, t];
      },
      useMutableSource: Ra,
      useSyncExternalStore: Ma,
      useId: Ja,
      unstable_isNewReconciler: !1,
    };

  function ht(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }

  function cs(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var bo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? qt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ge(),
        l = Qt(e),
        s = At(r, l);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = Vt(e, s, l)),
        t !== null && (gt(t, e, l, r), ho(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ge(),
        l = Qt(e),
        s = At(r, l);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Vt(e, s, l)),
        t !== null && (gt(t, e, l, r), ho(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ge(),
        r = Qt(e),
        l = At(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (gt(t, e, r, n), ho(t, e, r)));
    },
  };

  function ec(e, t, n, r, l, s, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !sr(n, r) || !sr(l, s)
          : !0
    );
  }

  function tc(e, t, n) {
    var r = !1,
      l = Ft,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = it(s))
        : ((l = Ke(t) ? tn : Fe.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? In(e, l) : Ft)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = bo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }

  function nc(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && bo.enqueueReplaceState(t, t.state, null));
  }

  function us(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Jl(e));
    var s = t.contextType;
    (typeof s == "object" && s !== null
      ? (l.context = it(s))
      : ((s = Ke(t) ? tn : Fe.current), (l.context = In(e, s))),
      (l.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (cs(e, t, s, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && bo.enqueueReplaceState(l, l.state, null),
        mo(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }

  function On(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += ne(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (s) {
      l =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return {
      value: e,
      source: t,
      stack: l,
      digest: null,
    };
  }

  function ds(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null,
    };
  }

  function ps(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Jd = typeof WeakMap == "function" ? WeakMap : Map;

  function rc(e, t, n) {
    ((n = At(-1, n)),
      (n.tag = 3),
      (n.payload = {
        element: null,
      }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ao || ((Ao = !0), (Es = r)), ps(e, t));
      }),
      n
    );
  }

  function oc(e, t, n) {
    ((n = At(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ps(e, t);
        }));
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          (ps(e, t),
            typeof r != "function" &&
              (Gt === null ? (Gt = new Set([this])) : Gt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }

  function lc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Jd();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = up.bind(null, e, t, n)), t.then(e, e));
  }

  function sc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }

  function ic(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = At(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Xd = K.ReactCurrentOwner,
    Je = !1;

  function We(e, t, n, r) {
    t.child = e === null ? Ea(t, null, n, r) : Ln(t, e.child, n, r);
  }

  function ac(e, t, n, r, l) {
    n = n.render;
    var s = t.ref;
    return (
      Mn(t, l),
      (r = rs(e, t, n, r, s, l)),
      (n = os()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (we && n && Fl(t), (t.flags |= 1), We(e, t, r, l), t.child)
    );
  }

  function cc(e, t, n, r, l) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Ms(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), uc(e, t, s, r, l))
        : ((e = zo(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), (e.lanes & l) === 0)) {
      var i = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : sr), n(i, r) && e.ref === t.ref)
      )
        return Tt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Kt(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }

  function uc(e, t, n, r, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (sr(s, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), Tt(e, t, l));
    }
    return fs(e, t, n, r, l);
  }

  function dc(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          me(Dn, rt),
          (rt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            me(Dn, rt),
            (rt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          me(Dn, rt),
          (rt |= r));
      }
    else
      (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        me(Dn, rt),
        (rt |= r));
    return (We(e, t, l, n), t.child);
  }

  function pc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }

  function fs(e, t, n, r, l) {
    var s = Ke(n) ? tn : Fe.current;
    return (
      (s = In(t, s)),
      Mn(t, l),
      (n = rs(e, t, n, r, s, l)),
      (r = os()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (we && r && Fl(t), (t.flags |= 1), We(e, t, n, l), t.child)
    );
  }

  function fc(e, t, n, r, l) {
    if (Ke(n)) {
      var s = !0;
      lo(t);
    } else s = !1;
    if ((Mn(t, l), t.stateNode === null))
      (So(e, t), tc(t, n, r), us(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var d = i.context,
        w = n.contextType;
      typeof w == "object" && w !== null
        ? (w = it(w))
        : ((w = Ke(n) ? tn : Fe.current), (w = In(t, w)));
      var L = n.getDerivedStateFromProps,
        z =
          typeof L == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      (z ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== r || d !== w) && nc(t, i, r, w)),
        (Ut = !1));
      var P = t.memoizedState;
      ((i.state = P),
        mo(t, r, i, l),
        (d = t.memoizedState),
        u !== r || P !== d || Ye.current || Ut
          ? (typeof L == "function" && (cs(t, n, L, r), (d = t.memoizedState)),
            (u = Ut || ec(t, n, u, r, P, d, w))
              ? (z ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (i.props = r),
            (i.state = d),
            (i.context = w),
            (r = u))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((i = t.stateNode),
        Aa(e, t),
        (u = t.memoizedProps),
        (w = t.type === t.elementType ? u : ht(t.type, u)),
        (i.props = w),
        (z = t.pendingProps),
        (P = i.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = it(d))
          : ((d = Ke(n) ? tn : Fe.current), (d = In(t, d))));
      var W = n.getDerivedStateFromProps;
      ((L =
        typeof W == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== z || P !== d) && nc(t, i, r, d)),
        (Ut = !1),
        (P = t.memoizedState),
        (i.state = P),
        mo(t, r, i, l));
      var $ = t.memoizedState;
      u !== z || P !== $ || Ye.current || Ut
        ? (typeof W == "function" && (cs(t, n, W, r), ($ = t.memoizedState)),
          (w = Ut || ec(t, n, w, r, P, $, d) || !1)
            ? (L ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, $, d),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, $, d)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = $)),
          (i.props = r),
          (i.state = $),
          (i.context = d),
          (r = w))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return hs(e, t, n, r, s, l);
  }

  function hs(e, t, n, r, l, s) {
    pc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && va(t, n, !1), Tt(e, t, s));
    ((r = t.stateNode), (Xd.current = t));
    var u =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Ln(t, e.child, null, s)), (t.child = Ln(t, null, u, s)))
        : We(e, t, u, s),
      (t.memoizedState = r.state),
      l && va(t, n, !0),
      t.child
    );
  }

  function hc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? xa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && xa(e, t.context, !1),
      Xl(e, t.containerInfo));
  }

  function mc(e, t, n, r, l) {
    return (Pn(), Wl(l), (t.flags |= 256), We(e, t, n, r), t.child);
  }
  var ms = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
  };

  function xs(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null,
    };
  }

  function xc(e, t, n) {
    var r = t.pendingProps,
      l = ke.current,
      s = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      me(ke, l & 1),
      e === null)
    )
      return (
        Vl(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (i = {
                  mode: "hidden",
                  children: i,
                }),
                (r & 1) === 0 && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = i))
                  : (s = Oo(i, r, 0, null)),
                (e = pn(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = xs(n)),
                (t.memoizedState = ms),
                e)
              : gs(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Zd(e, t, i, r, u, l, n);
    if (s) {
      ((s = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var d = {
        mode: "hidden",
        children: r.children,
      };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = Kt(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (s = Kt(u, s)) : ((s = pn(s, i, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? xs(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (s.memoizedState = i),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = ms),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = Kt(s, {
        mode: "visible",
        children: r.children,
      })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }

  function gs(e, t) {
    return (
      (t = Oo(
        {
          mode: "visible",
          children: t,
        },
        e.mode,
        0,
        null,
      )),
      (t.return = e),
      (e.child = t)
    );
  }

  function jo(e, t, n, r) {
    return (
      r !== null && Wl(r),
      Ln(t, e.child, null, n),
      (e = gs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }

  function Zd(e, t, n, r, l, s, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ds(Error(c(422)))), jo(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (l = t.mode),
            (r = Oo(
              {
                mode: "visible",
                children: r.children,
              },
              l,
              0,
              null,
            )),
            (s = pn(s, l, i, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            (t.mode & 1) !== 0 && Ln(t, e.child, null, i),
            (t.child.memoizedState = xs(i)),
            (t.memoizedState = ms),
            s);
    if ((t.mode & 1) === 0) return jo(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u),
        (s = Error(c(419))),
        (r = ds(s, r, void 0)),
        jo(e, t, i, r)
      );
    }
    if (((u = (i & e.childLanes) !== 0), Je || u)) {
      if (((r = ze), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== s.retryLane &&
            ((s.retryLane = l), It(e, l), gt(r, e, l, -1)));
      }
      return (Rs(), (r = ds(Error(c(421)))), jo(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = dp.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (nt = Dt(l.nextSibling)),
        (tt = t),
        (we = !0),
        (ft = null),
        e !== null &&
          ((lt[st++] = Ct),
          (lt[st++] = Et),
          (lt[st++] = nn),
          (Ct = e.id),
          (Et = e.overflow),
          (nn = t)),
        (t = gs(t, r.children)),
        (t.flags |= 4096),
        t);
  }

  function gc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Yl(e.return, t, n));
  }

  function vs(e, t, n, r, l) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = l));
  }

  function vc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      s = r.tail;
    if ((We(e, t, r.children, n), (r = ke.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gc(e, n, t);
          else if (e.tag === 19) gc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((me(ke, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && xo(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            vs(t, !1, l, n, s));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && xo(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          vs(t, !0, n, null, s);
          break;
        case "together":
          vs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }

  function So(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }

  function Tt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (an |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Kt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }

  function qd(e, t, n) {
    switch (t.tag) {
      case 3:
        (hc(t), Pn());
        break;
      case 5:
        La(t);
        break;
      case 1:
        Ke(t.type) && lo(t);
        break;
      case 4:
        Xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (me(po, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (me(ke, ke.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? xc(e, t, n)
              : (me(ke, ke.current & 1),
                (e = Tt(e, t, n)),
                e !== null ? e.sibling : null);
        me(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return vc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          me(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), dc(e, t, n));
    }
    return Tt(e, t, n);
  }
  var yc, ys, wc, kc;
  ((yc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ys = function () {}),
    (wc = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), ln(wt.current));
        var s = null;
        switch (n) {
          case "input":
            ((l = Yo(e, l)), (r = Yo(e, r)), (s = []));
            break;
          case "select":
            ((l = _({}, l, {
              value: void 0,
            })),
              (r = _({}, r, {
                value: void 0,
              })),
              (s = []));
            break;
          case "textarea":
            ((l = Xo(e, l)), (r = Xo(e, r)), (s = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = no);
        }
        qo(n, r);
        var i;
        n = null;
        for (w in l)
          if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null)
            if (w === "style") {
              var u = l[w];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              w !== "dangerouslySetInnerHTML" &&
                w !== "children" &&
                w !== "suppressContentEditableWarning" &&
                w !== "suppressHydrationWarning" &&
                w !== "autoFocus" &&
                (g.hasOwnProperty(w)
                  ? s || (s = [])
                  : (s = s || []).push(w, null));
        for (w in r) {
          var d = r[w];
          if (
            ((u = l != null ? l[w] : void 0),
            r.hasOwnProperty(w) && d !== u && (d != null || u != null))
          )
            if (w === "style")
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (d && d.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in d)
                  d.hasOwnProperty(i) &&
                    u[i] !== d[i] &&
                    (n || (n = {}), (n[i] = d[i]));
              } else (n || (s || (s = []), s.push(w, n)), (n = d));
            else
              w === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (u = u ? u.__html : void 0),
                  d != null && u !== d && (s = s || []).push(w, d))
                : w === "children"
                  ? (typeof d != "string" && typeof d != "number") ||
                    (s = s || []).push(w, "" + d)
                  : w !== "suppressContentEditableWarning" &&
                    w !== "suppressHydrationWarning" &&
                    (g.hasOwnProperty(w)
                      ? (d != null && w === "onScroll" && xe("scroll", e),
                        s || u === d || (s = []))
                      : (s = s || []).push(w, d));
        }
        n && (s = s || []).push("style", n);
        var w = s;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    (kc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));

  function kr(e, t) {
    if (!we)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }

  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }

  function ep(e, t, n) {
    var r = t.pendingProps;
    switch ((Bl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ue(t), null);
      case 1:
        return (Ke(t.type) && oo(), Ue(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          ge(Ye),
          ge(Fe),
          es(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (co(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ft !== null && (Ts(ft), (ft = null)))),
          ys(e, t),
          Ue(t),
          null
        );
      case 5:
        Zl(t);
        var l = ln(xr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (wc(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ue(t), null);
          }
          if (((e = ln(wt.current)), co(t))) {
            ((r = t.stateNode), (n = t.type));
            var s = t.memoizedProps;
            switch (((r[yt] = t), (r[dr] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (xe("cancel", r), xe("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ar.length; l++) xe(ar[l], r);
                break;
              case "source":
                xe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (xe("error", r), xe("load", r));
                break;
              case "details":
                xe("toggle", r);
                break;
              case "input":
                (ti(r, s), xe("invalid", r));
                break;
              case "select":
                ((r._wrapperState = {
                  wasMultiple: !!s.multiple,
                }),
                  xe("invalid", r));
                break;
              case "textarea":
                (oi(r, s), xe("invalid", r));
            }
            (qo(n, s), (l = null));
            for (var i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (s.suppressHydrationWarning !== !0 &&
                        to(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (s.suppressHydrationWarning !== !0 &&
                        to(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : g.hasOwnProperty(i) &&
                    u != null &&
                    i === "onScroll" &&
                    xe("scroll", r);
              }
            switch (n) {
              case "input":
                (Lr(r), ri(r, s, !0));
                break;
              case "textarea":
                (Lr(r), si(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = no);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ii(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, {
                        is: r.is,
                      }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[yt] = t),
              (e[dr] = r),
              yc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = el(n, r)), n)) {
                case "dialog":
                  (xe("cancel", e), xe("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (xe("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ar.length; l++) xe(ar[l], e);
                  l = r;
                  break;
                case "source":
                  (xe("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (xe("error", e), xe("load", e), (l = r));
                  break;
                case "details":
                  (xe("toggle", e), (l = r));
                  break;
                case "input":
                  (ti(e, r), (l = Yo(e, r)), xe("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = {
                    wasMultiple: !!r.multiple,
                  }),
                    (l = _({}, r, {
                      value: void 0,
                    })),
                    xe("invalid", e));
                  break;
                case "textarea":
                  (oi(e, r), (l = Xo(e, r)), xe("invalid", e));
                  break;
                default:
                  l = r;
              }
              (qo(n, l), (u = l));
              for (s in u)
                if (u.hasOwnProperty(s)) {
                  var d = u[s];
                  s === "style"
                    ? ui(e, d)
                    : s === "dangerouslySetInnerHTML"
                      ? ((d = d ? d.__html : void 0), d != null && ai(e, d))
                      : s === "children"
                        ? typeof d == "string"
                          ? (n !== "textarea" || d !== "") && Vn(e, d)
                          : typeof d == "number" && Vn(e, "" + d)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (g.hasOwnProperty(s)
                            ? d != null && s === "onScroll" && xe("scroll", e)
                            : d != null && U(e, s, d, i));
                }
              switch (n) {
                case "input":
                  (Lr(e), ri(e, r, !1));
                  break;
                case "textarea":
                  (Lr(e), si(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + se(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? xn(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        xn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = no);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ue(t), null);
      case 6:
        if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (((n = ln(xr.current)), ln(wt.current), co(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[yt] = t),
              (s = r.nodeValue !== n) && ((e = tt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  to(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    to(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[yt] = t),
              (t.stateNode = r));
        }
        return (Ue(t), null);
      case 13:
        if (
          (ge(ke),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Sa(), Pn(), (t.flags |= 98560), (s = !1));
          else if (((s = co(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(c(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(c(317));
              s[yt] = t;
            } else
              (Pn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ue(t), (s = !1));
          } else (ft !== null && (Ts(ft), (ft = null)), (s = !0));
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0
                  ? Re === 0 && (Re = 3)
                  : Rs())),
            t.updateQueue !== null && (t.flags |= 4),
            Ue(t),
            null);
      case 4:
        return (
          zn(),
          ys(e, t),
          e === null && cr(t.stateNode.containerInfo),
          Ue(t),
          null
        );
      case 10:
        return (Ql(t.type._context), Ue(t), null);
      case 17:
        return (Ke(t.type) && oo(), Ue(t), null);
      case 19:
        if ((ge(ke), (s = t.memoizedState), s === null)) return (Ue(t), null);
        if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
          if (r) kr(s, !1);
          else {
            if (Re !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = xo(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      kr(s, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (i = s.alternate),
                      i === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = i.childLanes),
                          (s.lanes = i.lanes),
                          (s.child = i.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = i.memoizedProps),
                          (s.memoizedState = i.memoizedState),
                          (s.updateQueue = i.updateQueue),
                          (s.type = i.type),
                          (e = i.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (me(ke, (ke.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Ne() > Hn &&
              ((t.flags |= 128), (r = !0), kr(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = xo(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                kr(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !i.alternate &&
                  !we)
              )
                return (Ue(t), null);
            } else
              2 * Ne() - s.renderingStartTime > Hn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), kr(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = s.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (s.last = i));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Ne()),
            (t.sibling = null),
            (n = ke.current),
            me(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          Ls(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (rt & 1073741824) !== 0 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }

  function tp(e, t) {
    switch ((Bl(t), t.tag)) {
      case 1:
        return (
          Ke(t.type) && oo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          ge(Ye),
          ge(Fe),
          es(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Zl(t), null);
      case 13:
        if (
          (ge(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          Pn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ge(ke), null);
      case 4:
        return (zn(), null);
      case 10:
        return (Ql(t.type._context), null);
      case 22:
      case 23:
        return (Ls(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var No = !1,
    Ve = !1,
    np = typeof WeakSet == "function" ? WeakSet : Set,
    G = null;

  function _n(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Se(e, t, r);
        }
      else n.current = null;
  }

  function ws(e, t, n) {
    try {
      n();
    } catch (r) {
      Se(e, t, r);
    }
  }
  var bc = !1;

  function rp(e, t) {
    if (((Ll = Wr), (e = ea()), Sl(e))) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd,
        };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, s.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              u = -1,
              d = -1,
              w = 0,
              L = 0,
              z = e,
              P = null;
            t: for (;;) {
              for (
                var W;
                z !== n || (l !== 0 && z.nodeType !== 3) || (u = i + l),
                  z !== s || (r !== 0 && z.nodeType !== 3) || (d = i + r),
                  z.nodeType === 3 && (i += z.nodeValue.length),
                  (W = z.firstChild) !== null;
              )
                ((P = z), (z = W));
              for (;;) {
                if (z === e) break t;
                if (
                  (P === n && ++w === l && (u = i),
                  P === s && ++L === r && (d = i),
                  (W = z.nextSibling) !== null)
                )
                  break;
                ((z = P), (P = z.parentNode));
              }
              z = W;
            }
            n =
              u === -1 || d === -1
                ? null
                : {
                    start: u,
                    end: d,
                  };
          } else n = null;
        }
      n = n || {
        start: 0,
        end: 0,
      };
    } else n = null;
    for (
      Rl = {
        focusedElem: e,
        selectionRange: n,
      },
        Wr = !1,
        G = t;
      G !== null;
    )
      if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (G = e));
      else
        for (; G !== null; ) {
          t = G;
          try {
            var $ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var Q = $.memoizedProps,
                      Ce = $.memoizedState,
                      x = t.stateNode,
                      f = x.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : ht(t.type, Q),
                        Ce,
                      );
                    x.__reactInternalSnapshotBeforeUpdate = f;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (D) {
            Se(t, t.return, D);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (G = e));
            break;
          }
          G = t.return;
        }
    return (($ = bc), (bc = !1), $);
  }

  function br(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy;
          ((l.destroy = void 0), s !== void 0 && ws(t, n, s));
        }
        l = l.next;
      } while (l !== r);
    }
  }

  function Co(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }

  function ks(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }

  function jc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), jc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[yt],
          delete t[dr],
          delete t[_l],
          delete t[Hd],
          delete t[Fd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }

  function Sc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }

  function Nc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }

  function bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = no)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bs(e, t, n), e = e.sibling; e !== null; )
        (bs(e, t, n), (e = e.sibling));
  }

  function js(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (js(e, t, n), e = e.sibling; e !== null; )
        (js(e, t, n), (e = e.sibling));
  }
  var De = null,
    mt = !1;

  function Wt(e, t, n) {
    for (n = n.child; n !== null; ) (Cc(e, t, n), (n = n.sibling));
  }

  function Cc(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(Dr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ve || _n(n, t);
      case 6:
        var r = De,
          l = mt;
        ((De = null),
          Wt(e, t, n),
          (De = r),
          (mt = l),
          De !== null &&
            (mt
              ? ((e = De),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : De.removeChild(n.stateNode)));
        break;
      case 18:
        De !== null &&
          (mt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ol(e.parentNode, n)
                : e.nodeType === 1 && Ol(e, n),
              er(e))
            : Ol(De, n.stateNode));
        break;
      case 4:
        ((r = De),
          (l = mt),
          (De = n.stateNode.containerInfo),
          (mt = !0),
          Wt(e, t, n),
          (De = r),
          (mt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ve &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var s = l,
              i = s.destroy;
            ((s = s.tag),
              i !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && ws(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Wt(e, t, n);
        break;
      case 1:
        if (
          !Ve &&
          (_n(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (u) {
            Se(n, t, u);
          }
        Wt(e, t, n);
        break;
      case 21:
        Wt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ve = (r = Ve) || n.memoizedState !== null), Wt(e, t, n), (Ve = r))
          : Wt(e, t, n);
        break;
      default:
        Wt(e, t, n);
    }
  }

  function Ec(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new np()),
        t.forEach(function (r) {
          var l = pp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }

  function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var s = e,
            i = t,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ((De = u.stateNode), (mt = !1));
                break e;
              case 3:
                ((De = u.stateNode.containerInfo), (mt = !0));
                break e;
              case 4:
                ((De = u.stateNode.containerInfo), (mt = !0));
                break e;
            }
            u = u.return;
          }
          if (De === null) throw Error(c(160));
          (Cc(s, i, l), (De = null), (mt = !1));
          var d = l.alternate;
          (d !== null && (d.return = null), (l.return = null));
        } catch (w) {
          Se(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Ic(t, e), (t = t.sibling));
  }

  function Ic(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((xt(t, e), bt(e), r & 4)) {
          try {
            (br(3, e, e.return), Co(3, e));
          } catch (Q) {
            Se(e, e.return, Q);
          }
          try {
            br(5, e, e.return);
          } catch (Q) {
            Se(e, e.return, Q);
          }
        }
        break;
      case 1:
        (xt(t, e), bt(e), r & 512 && n !== null && _n(n, n.return));
        break;
      case 5:
        if (
          (xt(t, e),
          bt(e),
          r & 512 && n !== null && _n(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (Q) {
            Se(e, e.return, Q);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var s = e.memoizedProps,
            i = n !== null ? n.memoizedProps : s,
            u = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              (u === "input" &&
                s.type === "radio" &&
                s.name != null &&
                ni(l, s),
                el(u, i));
              var w = el(u, s);
              for (i = 0; i < d.length; i += 2) {
                var L = d[i],
                  z = d[i + 1];
                L === "style"
                  ? ui(l, z)
                  : L === "dangerouslySetInnerHTML"
                    ? ai(l, z)
                    : L === "children"
                      ? Vn(l, z)
                      : U(l, L, z, w);
              }
              switch (u) {
                case "input":
                  Ko(l, s);
                  break;
                case "textarea":
                  li(l, s);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!s.multiple;
                  var W = s.value;
                  W != null
                    ? xn(l, !!s.multiple, W, !1)
                    : P !== !!s.multiple &&
                      (s.defaultValue != null
                        ? xn(l, !!s.multiple, s.defaultValue, !0)
                        : xn(l, !!s.multiple, s.multiple ? [] : "", !1));
              }
              l[dr] = s;
            } catch (Q) {
              Se(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((xt(t, e), bt(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.stateNode), (s = e.memoizedProps));
          try {
            l.nodeValue = s;
          } catch (Q) {
            Se(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          (xt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            er(t.containerInfo);
          } catch (Q) {
            Se(e, e.return, Q);
          }
        break;
      case 4:
        (xt(t, e), bt(e));
        break;
      case 13:
        (xt(t, e),
          bt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((s = l.memoizedState !== null),
            (l.stateNode.isHidden = s),
            !s ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Cs = Ne())),
          r & 4 && Ec(e));
        break;
      case 22:
        if (
          ((L = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ve = (w = Ve) || L), xt(t, e), (Ve = w)) : xt(t, e),
          bt(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null),
            (e.stateNode.isHidden = w) && !L && (e.mode & 1) !== 0)
          )
            for (G = e, L = e.child; L !== null; ) {
              for (z = G = L; G !== null; ) {
                switch (((P = G), (W = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    br(4, P, P.return);
                    break;
                  case 1:
                    _n(P, P.return);
                    var $ = P.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      ((r = P), (n = P.return));
                      try {
                        ((t = r),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (Q) {
                        Se(r, n, Q);
                      }
                    }
                    break;
                  case 5:
                    _n(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      Pc(z);
                      continue;
                    }
                }
                W !== null ? ((W.return = P), (G = W)) : Pc(z);
              }
              L = L.sibling;
            }
          e: for (L = null, z = e; ; ) {
            if (z.tag === 5) {
              if (L === null) {
                L = z;
                try {
                  ((l = z.stateNode),
                    w
                      ? ((s = l.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((u = z.stateNode),
                        (d = z.memoizedProps.style),
                        (i =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (u.style.display = ci("display", i))));
                } catch (Q) {
                  Se(e, e.return, Q);
                }
              }
            } else if (z.tag === 6) {
              if (L === null)
                try {
                  z.stateNode.nodeValue = w ? "" : z.memoizedProps;
                } catch (Q) {
                  Se(e, e.return, Q);
                }
            } else if (
              ((z.tag !== 22 && z.tag !== 23) ||
                z.memoizedState === null ||
                z === e) &&
              z.child !== null
            ) {
              ((z.child.return = z), (z = z.child));
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              (L === z && (L = null), (z = z.return));
            }
            (L === z && (L = null),
              (z.sibling.return = z.return),
              (z = z.sibling));
          }
        }
        break;
      case 19:
        (xt(t, e), bt(e), r & 4 && Ec(e));
        break;
      case 21:
        break;
      default:
        (xt(t, e), bt(e));
    }
  }

  function bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Sc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
            var s = Nc(e);
            js(e, s, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = Nc(e);
            bs(e, u, i);
            break;
          default:
            throw Error(c(161));
        }
      } catch (d) {
        Se(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }

  function op(e, t, n) {
    ((G = e), Ac(e));
  }

  function Ac(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
      var l = G,
        s = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || No;
        if (!i) {
          var u = l.alternate,
            d = (u !== null && u.memoizedState !== null) || Ve;
          u = No;
          var w = Ve;
          if (((No = i), (Ve = d) && !w))
            for (G = l; G !== null; )
              ((i = G),
                (d = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Lc(l)
                  : d !== null
                    ? ((d.return = i), (G = d))
                    : Lc(l));
          for (; s !== null; ) ((G = s), Ac(s), (s = s.sibling));
          ((G = l), (No = u), (Ve = w));
        }
        Tc(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && s !== null
          ? ((s.return = l), (G = s))
          : Tc(e);
    }
  }

  function Tc(e) {
    for (; G !== null; ) {
      var t = G;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || Co(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && Pa(t, s, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Pa(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var w = t.alternate;
                  if (w !== null) {
                    var L = w.memoizedState;
                    if (L !== null) {
                      var z = L.dehydrated;
                      z !== null && er(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(c(163));
            }
          Ve || (t.flags & 512 && ks(t));
        } catch (P) {
          Se(t, t.return, P);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (G = n));
        break;
      }
      G = t.return;
    }
  }

  function Pc(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (G = n));
        break;
      }
      G = t.return;
    }
  }

  function Lc(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Co(4, t);
            } catch (d) {
              Se(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Se(t, l, d);
              }
            }
            var s = t.return;
            try {
              ks(t);
            } catch (d) {
              Se(t, s, d);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ks(t);
            } catch (d) {
              Se(t, i, d);
            }
        }
      } catch (d) {
        Se(t, t.return, d);
      }
      if (t === e) {
        G = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (G = u));
        break;
      }
      G = t.return;
    }
  }
  var lp = Math.ceil,
    Eo = K.ReactCurrentDispatcher,
    Ss = K.ReactCurrentOwner,
    ct = K.ReactCurrentBatchConfig,
    ae = 0,
    ze = null,
    Te = null,
    He = 0,
    rt = 0,
    Dn = Ht(0),
    Re = 0,
    jr = null,
    an = 0,
    Io = 0,
    Ns = 0,
    Sr = null,
    Xe = null,
    Cs = 0,
    Hn = 1 / 0,
    Pt = null,
    Ao = !1,
    Es = null,
    Gt = null,
    To = !1,
    $t = null,
    Po = 0,
    Nr = 0,
    Is = null,
    Lo = -1,
    Ro = 0;

  function Ge() {
    return (ae & 6) !== 0 ? Ne() : Lo !== -1 ? Lo : (Lo = Ne());
  }

  function Qt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && He !== 0
        ? He & -He
        : Ud.transition !== null
          ? (Ro === 0 && (Ro = Ni()), Ro)
          : ((e = fe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Mi(e.type))),
            e);
  }

  function gt(e, t, n, r) {
    if (50 < Nr) throw ((Nr = 0), (Is = null), Error(c(185)));
    (Kn(e, n, r),
      ((ae & 2) === 0 || e !== ze) &&
        (e === ze && ((ae & 2) === 0 && (Io |= n), Re === 4 && Yt(e, He)),
        Ze(e, r),
        n === 1 &&
          ae === 0 &&
          (t.mode & 1) === 0 &&
          ((Hn = Ne() + 500), so && Bt())));
  }

  function Ze(e, t) {
    var n = e.callbackNode;
    Uu(e, t);
    var r = Br(e, e === ze ? He : 0);
    if (r === 0)
      (n !== null && bi(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && bi(n), t === 1))
        (e.tag === 0 ? Bd(Mc.bind(null, e)) : ya(Mc.bind(null, e)),
          _d(function () {
            (ae & 6) === 0 && Bt();
          }),
          (n = null));
      else {
        switch (Ci(r)) {
          case 1:
            n = il;
            break;
          case 4:
            n = ji;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = Si;
            break;
          default:
            n = _r;
        }
        n = Uc(n, Rc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }

  function Rc(e, t) {
    if (((Lo = -1), (Ro = 0), (ae & 6) !== 0)) throw Error(c(327));
    var n = e.callbackNode;
    if (Fn() && e.callbackNode !== n) return null;
    var r = Br(e, e === ze ? He : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Mo(e, r);
    else {
      t = r;
      var l = ae;
      ae |= 2;
      var s = Oc();
      (ze !== e || He !== t) && ((Pt = null), (Hn = Ne() + 500), un(e, t));
      do
        try {
          ap();
          break;
        } catch (u) {
          zc(e, u);
        }
      while (!0);
      ($l(),
        (Eo.current = s),
        (ae = l),
        Te !== null ? (t = 0) : ((ze = null), (He = 0), (t = Re)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = al(e)), l !== 0 && ((r = l), (t = As(e, l)))),
        t === 1)
      )
        throw ((n = jr), un(e, 0), Yt(e, r), Ze(e, Ne()), n);
      if (t === 6) Yt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !sp(l) &&
            ((t = Mo(e, r)),
            t === 2 && ((s = al(e)), s !== 0 && ((r = s), (t = As(e, s)))),
            t === 1))
        )
          throw ((n = jr), un(e, 0), Yt(e, r), Ze(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            dn(e, Xe, Pt);
            break;
          case 3:
            if (
              (Yt(e, r),
              (r & 130023424) === r && ((t = Cs + 500 - Ne()), 10 < t))
            ) {
              if (Br(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ge(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = zl(dn.bind(null, e, Xe, Pt), t);
              break;
            }
            dn(e, Xe, Pt);
            break;
          case 4:
            if ((Yt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - dt(r);
              ((s = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~s));
            }
            if (
              ((r = l),
              (r = Ne() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * lp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = zl(dn.bind(null, e, Xe, Pt), r);
              break;
            }
            dn(e, Xe, Pt);
            break;
          case 5:
            dn(e, Xe, Pt);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return (Ze(e, Ne()), e.callbackNode === n ? Rc.bind(null, e) : null);
  }

  function As(e, t) {
    var n = Sr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = Mo(e, t)),
      e !== 2 && ((t = Xe), (Xe = n), t !== null && Ts(t)),
      e
    );
  }

  function Ts(e) {
    Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
  }

  function sp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              s = l.getSnapshot;
            l = l.value;
            try {
              if (!pt(s(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }

  function Yt(e, t) {
    for (
      t &= ~Ns,
        t &= ~Io,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - dt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }

  function Mc(e) {
    if ((ae & 6) !== 0) throw Error(c(327));
    Fn();
    var t = Br(e, 0);
    if ((t & 1) === 0) return (Ze(e, Ne()), null);
    var n = Mo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = al(e);
      r !== 0 && ((t = r), (n = As(e, r)));
    }
    if (n === 1) throw ((n = jr), un(e, 0), Yt(e, t), Ze(e, Ne()), n);
    if (n === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      dn(e, Xe, Pt),
      Ze(e, Ne()),
      null
    );
  }

  function Ps(e, t) {
    var n = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = n), ae === 0 && ((Hn = Ne() + 500), so && Bt()));
    }
  }

  function cn(e) {
    $t !== null && $t.tag === 0 && (ae & 6) === 0 && Fn();
    var t = ae;
    ae |= 1;
    var n = ct.transition,
      r = fe;
    try {
      if (((ct.transition = null), (fe = 1), e)) return e();
    } finally {
      ((fe = r), (ct.transition = n), (ae = t), (ae & 6) === 0 && Bt());
    }
  }

  function Ls() {
    ((rt = Dn.current), ge(Dn));
  }

  function un(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Od(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((Bl(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && oo());
            break;
          case 3:
            (zn(), ge(Ye), ge(Fe), es());
            break;
          case 5:
            Zl(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            ge(ke);
            break;
          case 19:
            ge(ke);
            break;
          case 10:
            Ql(r.type._context);
            break;
          case 22:
          case 23:
            Ls();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (Te = e = Kt(e.current, null)),
      (He = rt = t),
      (Re = 0),
      (jr = null),
      (Ns = Io = an = 0),
      (Xe = Sr = null),
      on !== null)
    ) {
      for (t = 0; t < on.length; t++)
        if (((n = on[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            s = n.pending;
          if (s !== null) {
            var i = s.next;
            ((s.next = l), (r.next = i));
          }
          n.pending = r;
        }
      on = null;
    }
    return e;
  }

  function zc(e, t) {
    do {
      var n = Te;
      try {
        if (($l(), (go.current = ko), vo)) {
          for (var r = be.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          vo = !1;
        }
        if (
          ((sn = 0),
          (Me = Le = be = null),
          (gr = !1),
          (vr = 0),
          (Ss.current = null),
          n === null || n.return === null)
        ) {
          ((Re = 1), (jr = t), (Te = null));
          break;
        }
        e: {
          var s = e,
            i = n.return,
            u = n,
            d = t;
          if (
            ((t = He),
            (u.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var w = d,
              L = u,
              z = L.tag;
            if ((L.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var P = L.alternate;
              P
                ? ((L.updateQueue = P.updateQueue),
                  (L.memoizedState = P.memoizedState),
                  (L.lanes = P.lanes))
                : ((L.updateQueue = null), (L.memoizedState = null));
            }
            var W = sc(i);
            if (W !== null) {
              ((W.flags &= -257),
                ic(W, i, u, s, t),
                W.mode & 1 && lc(s, w, t),
                (t = W),
                (d = w));
              var $ = t.updateQueue;
              if ($ === null) {
                var Q = new Set();
                (Q.add(d), (t.updateQueue = Q));
              } else $.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                (lc(s, w, t), Rs());
                break e;
              }
              d = Error(c(426));
            }
          } else if (we && u.mode & 1) {
            var Ce = sc(i);
            if (Ce !== null) {
              ((Ce.flags & 65536) === 0 && (Ce.flags |= 256),
                ic(Ce, i, u, s, t),
                Wl(On(d, u)));
              break e;
            }
          }
          ((s = d = On(d, u)),
            Re !== 4 && (Re = 2),
            Sr === null ? (Sr = [s]) : Sr.push(s),
            (s = i));
          do {
            switch (s.tag) {
              case 3:
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var x = rc(s, d, t);
                Ta(s, x);
                break e;
              case 1:
                u = d;
                var f = s.type,
                  v = s.stateNode;
                if (
                  (s.flags & 128) === 0 &&
                  (typeof f.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (Gt === null || !Gt.has(v))))
                ) {
                  ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                  var D = oc(s, u, t);
                  Ta(s, D);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Dc(n);
      } catch (Y) {
        ((t = Y), Te === n && n !== null && (Te = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }

  function Oc() {
    var e = Eo.current;
    return ((Eo.current = ko), e === null ? ko : e);
  }

  function Rs() {
    ((Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      ze === null ||
        ((an & 268435455) === 0 && (Io & 268435455) === 0) ||
        Yt(ze, He));
  }

  function Mo(e, t) {
    var n = ae;
    ae |= 2;
    var r = Oc();
    (ze !== e || He !== t) && ((Pt = null), un(e, t));
    do
      try {
        ip();
        break;
      } catch (l) {
        zc(e, l);
      }
    while (!0);
    if (($l(), (ae = n), (Eo.current = r), Te !== null)) throw Error(c(261));
    return ((ze = null), (He = 0), Re);
  }

  function ip() {
    for (; Te !== null; ) _c(Te);
  }

  function ap() {
    for (; Te !== null && !Ru(); ) _c(Te);
  }

  function _c(e) {
    var t = Bc(e.alternate, e, rt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Dc(e) : (Te = t),
      (Ss.current = null));
  }

  function Dc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = ep(n, t, rt)), n !== null)) {
          Te = n;
          return;
        }
      } else {
        if (((n = tp(n, t)), n !== null)) {
          ((n.flags &= 32767), (Te = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Re = 6), (Te = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }

  function dn(e, t, n) {
    var r = fe,
      l = ct.transition;
    try {
      ((ct.transition = null), (fe = 1), cp(e, t, n, r));
    } finally {
      ((ct.transition = l), (fe = r));
    }
    return null;
  }

  function cp(e, t, n, r) {
    do Fn();
    while ($t !== null);
    if ((ae & 6) !== 0) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(c(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var s = n.lanes | n.childLanes;
    if (
      (Vu(e, s),
      e === ze && ((Te = ze = null), (He = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        To ||
        ((To = !0),
        Uc(_r, function () {
          return (Fn(), null);
        })),
      (s = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || s)
    ) {
      ((s = ct.transition), (ct.transition = null));
      var i = fe;
      fe = 1;
      var u = ae;
      ((ae |= 4),
        (Ss.current = null),
        rp(e, n),
        Ic(n, e),
        Ad(Rl),
        (Wr = !!Ll),
        (Rl = Ll = null),
        (e.current = n),
        op(n),
        Mu(),
        (ae = u),
        (fe = i),
        (ct.transition = s));
    } else e.current = n;
    if (
      (To && ((To = !1), ($t = e), (Po = l)),
      (s = e.pendingLanes),
      s === 0 && (Gt = null),
      _u(n.stateNode),
      Ze(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]),
          r(l.value, {
            componentStack: l.stack,
            digest: l.digest,
          }));
    if (Ao) throw ((Ao = !1), (e = Es), (Es = null), e);
    return (
      (Po & 1) !== 0 && e.tag !== 0 && Fn(),
      (s = e.pendingLanes),
      (s & 1) !== 0 ? (e === Is ? Nr++ : ((Nr = 0), (Is = e))) : (Nr = 0),
      Bt(),
      null
    );
  }

  function Fn() {
    if ($t !== null) {
      var e = Ci(Po),
        t = ct.transition,
        n = fe;
      try {
        if (((ct.transition = null), (fe = 16 > e ? 16 : e), $t === null))
          var r = !1;
        else {
          if (((e = $t), ($t = null), (Po = 0), (ae & 6) !== 0))
            throw Error(c(331));
          var l = ae;
          for (ae |= 4, G = e.current; G !== null; ) {
            var s = G,
              i = s.child;
            if ((G.flags & 16) !== 0) {
              var u = s.deletions;
              if (u !== null) {
                for (var d = 0; d < u.length; d++) {
                  var w = u[d];
                  for (G = w; G !== null; ) {
                    var L = G;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        br(8, L, s);
                    }
                    var z = L.child;
                    if (z !== null) ((z.return = L), (G = z));
                    else
                      for (; G !== null; ) {
                        L = G;
                        var P = L.sibling,
                          W = L.return;
                        if ((jc(L), L === w)) {
                          G = null;
                          break;
                        }
                        if (P !== null) {
                          ((P.return = W), (G = P));
                          break;
                        }
                        G = W;
                      }
                  }
                }
                var $ = s.alternate;
                if ($ !== null) {
                  var Q = $.child;
                  if (Q !== null) {
                    $.child = null;
                    do {
                      var Ce = Q.sibling;
                      ((Q.sibling = null), (Q = Ce));
                    } while (Q !== null);
                  }
                }
                G = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && i !== null)
              ((i.return = s), (G = i));
            else
              e: for (; G !== null; ) {
                if (((s = G), (s.flags & 2048) !== 0))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(9, s, s.return);
                  }
                var x = s.sibling;
                if (x !== null) {
                  ((x.return = s.return), (G = x));
                  break e;
                }
                G = s.return;
              }
          }
          var f = e.current;
          for (G = f; G !== null; ) {
            i = G;
            var v = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && v !== null)
              ((v.return = i), (G = v));
            else
              e: for (i = f; G !== null; ) {
                if (((u = G), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Co(9, u);
                    }
                  } catch (Y) {
                    Se(u, u.return, Y);
                  }
                if (u === i) {
                  G = null;
                  break e;
                }
                var D = u.sibling;
                if (D !== null) {
                  ((D.return = u.return), (G = D));
                  break e;
                }
                G = u.return;
              }
          }
          if (
            ((ae = l),
            Bt(),
            vt && typeof vt.onPostCommitFiberRoot == "function")
          )
            try {
              vt.onPostCommitFiberRoot(Dr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((fe = n), (ct.transition = t));
      }
    }
    return !1;
  }

  function Hc(e, t, n) {
    ((t = On(n, t)),
      (t = rc(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = Ge()),
      e !== null && (Kn(e, 1, t), Ze(e, t)));
  }

  function Se(e, t, n) {
    if (e.tag === 3) Hc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Gt === null || !Gt.has(r)))
          ) {
            ((e = On(n, e)),
              (e = oc(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = Ge()),
              t !== null && (Kn(t, 1, e), Ze(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }

  function up(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ge()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (He & n) === n &&
        (Re === 4 || (Re === 3 && (He & 130023424) === He && 500 > Ne() - Cs)
          ? un(e, 0)
          : (Ns |= n)),
      Ze(e, t));
  }

  function Fc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Fr), (Fr <<= 1), (Fr & 130023424) === 0 && (Fr = 4194304)));
    var n = Ge();
    ((e = It(e, t)), e !== null && (Kn(e, t, n), Ze(e, n)));
  }

  function dp(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Fc(e, n));
  }

  function pp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    (r !== null && r.delete(t), Fc(e, n));
  }
  var Bc;
  Bc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ye.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Je = !1), qd(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), we && (t.flags & 1048576) !== 0 && wa(t, ao, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (So(e, t), (e = t.pendingProps));
        var l = In(t, Fe.current);
        (Mn(t, n), (l = rs(null, t, r, e, l, n)));
        var s = os();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ke(r) ? ((s = !0), lo(t)) : (s = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Jl(t),
              (l.updater = bo),
              (t.stateNode = l),
              (l._reactInternals = t),
              us(t, r, e, n),
              (t = hs(null, t, r, !0, s, n)))
            : ((t.tag = 0), we && s && Fl(t), We(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (So(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = hp(r)),
            (e = ht(r, e)),
            l)
          ) {
            case 0:
              t = fs(null, t, r, e, n);
              break e;
            case 1:
              t = fc(null, t, r, e, n);
              break e;
            case 11:
              t = ac(null, t, r, e, n);
              break e;
            case 14:
              t = cc(null, t, r, ht(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          fs(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          fc(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((hc(t), e === null)) throw Error(c(387));
          ((r = t.pendingProps),
            (s = t.memoizedState),
            (l = s.element),
            Aa(e, t),
            mo(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              ((l = On(Error(c(423)), t)), (t = mc(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = On(Error(c(424)), t)), (t = mc(e, t, r, n, l)));
              break e;
            } else
              for (
                nt = Dt(t.stateNode.containerInfo.firstChild),
                  tt = t,
                  we = !0,
                  ft = null,
                  n = Ea(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Pn(), r === l)) {
              t = Tt(e, t, n);
              break e;
            }
            We(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          La(t),
          e === null && Vl(t),
          (r = t.type),
          (l = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Ml(r, l) ? (i = null) : s !== null && Ml(r, s) && (t.flags |= 32),
          pc(e, t),
          We(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Vl(t), null);
      case 13:
        return xc(e, t, n);
      case 4:
        return (
          Xl(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ln(t, null, r, n)) : We(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          ac(e, t, r, l, n)
        );
      case 7:
        return (We(e, t, t.pendingProps, n), t.child);
      case 8:
        return (We(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (We(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (s = t.memoizedProps),
            (i = l.value),
            me(po, r._currentValue),
            (r._currentValue = i),
            s !== null)
          )
            if (pt(s.value, i)) {
              if (s.children === l.children && !Ye.current) {
                t = Tt(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var u = s.dependencies;
                if (u !== null) {
                  i = s.child;
                  for (var d = u.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (s.tag === 1) {
                        ((d = At(-1, n & -n)), (d.tag = 2));
                        var w = s.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var L = w.pending;
                          (L === null
                            ? (d.next = d)
                            : ((d.next = L.next), (L.next = d)),
                            (w.pending = d));
                        }
                      }
                      ((s.lanes |= n),
                        (d = s.alternate),
                        d !== null && (d.lanes |= n),
                        Yl(s.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    d = d.next;
                  }
                } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((i = s.return), i === null)) throw Error(c(341));
                  ((i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    Yl(i, n, t),
                    (i = s.sibling));
                } else i = s.child;
                if (i !== null) i.return = s;
                else
                  for (i = s; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((s = i.sibling), s !== null)) {
                      ((s.return = i.return), (i = s));
                      break;
                    }
                    i = i.return;
                  }
                s = i;
              }
          (We(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Mn(t, n),
          (l = it(l)),
          (r = r(l)),
          (t.flags |= 1),
          We(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ht(r, t.pendingProps)),
          (l = ht(r.type, l)),
          cc(e, t, r, l, n)
        );
      case 15:
        return uc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          So(e, t),
          (t.tag = 1),
          Ke(r) ? ((e = !0), lo(t)) : (e = !1),
          Mn(t, n),
          tc(t, r, l),
          us(t, r, l, n),
          hs(null, t, r, !0, e, n)
        );
      case 19:
        return vc(e, t, n);
      case 22:
        return dc(e, t, n);
    }
    throw Error(c(156, t.tag));
  };

  function Uc(e, t) {
    return ki(e, t);
  }

  function fp(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }

  function ut(e, t, n, r) {
    return new fp(e, t, n, r);
  }

  function Ms(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }

  function hp(e) {
    if (typeof e == "function") return Ms(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === J)) return 11;
      if (e === Qe) return 14;
    }
    return 2;
  }

  function Kt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ut(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null
          ? null
          : {
              lanes: t.lanes,
              firstContext: t.firstContext,
            }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }

  function zo(e, t, n, r, l, s) {
    var i = 2;
    if (((r = e), typeof e == "function")) Ms(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case oe:
          return pn(n.children, l, s, t);
        case ye:
          ((i = 8), (l |= 8));
          break;
        case ot:
          return (
            (e = ut(12, n, t, l | 2)),
            (e.elementType = ot),
            (e.lanes = s),
            e
          );
        case Ae:
          return (
            (e = ut(13, n, t, l)),
            (e.elementType = Ae),
            (e.lanes = s),
            e
          );
        case de:
          return (
            (e = ut(19, n, t, l)),
            (e.elementType = de),
            (e.lanes = s),
            e
          );
        case ce:
          return Oo(n, l, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ie:
                i = 10;
                break e;
              case $e:
                i = 9;
                break e;
              case J:
                i = 11;
                break e;
              case Qe:
                i = 14;
                break e;
              case Pe:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ut(i, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = s),
      t
    );
  }

  function pn(e, t, n, r) {
    return ((e = ut(7, e, r, t)), (e.lanes = n), e);
  }

  function Oo(e, t, n, r) {
    return (
      (e = ut(22, e, r, t)),
      (e.elementType = ce),
      (e.lanes = n),
      (e.stateNode = {
        isHidden: !1,
      }),
      e
    );
  }

  function zs(e, t, n) {
    return ((e = ut(6, e, null, t)), (e.lanes = n), e);
  }

  function Os(e, t, n) {
    return (
      (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }

  function mp(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = cl(0)),
      (this.expirationTimes = cl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = cl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }

  function _s(e, t, n, r, l, s, i, u, d) {
    return (
      (e = new mp(e, t, n, u, d)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = ut(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Jl(s),
      e
    );
  }

  function xp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: je,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }

  function Vc(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (qt(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ke(n)) return ga(e, n, t);
    }
    return t;
  }

  function Wc(e, t, n, r, l, s, i, u, d) {
    return (
      (e = _s(n, r, !0, e, l, s, i, u, d)),
      (e.context = Vc(null)),
      (n = e.current),
      (r = Ge()),
      (l = Qt(n)),
      (s = At(r, l)),
      (s.callback = t ?? null),
      Vt(n, s, l),
      (e.current.lanes = l),
      Kn(e, l, r),
      Ze(e, r),
      e
    );
  }

  function _o(e, t, n, r) {
    var l = t.current,
      s = Ge(),
      i = Qt(l);
    return (
      (n = Vc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = At(s, i)),
      (t.payload = {
        element: e,
      }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, i)),
      e !== null && (gt(e, l, i, s), ho(e, l, i)),
      i
    );
  }

  function Do(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }

  function Gc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }

  function Ds(e, t) {
    (Gc(e, t), (e = e.alternate) && Gc(e, t));
  }

  function gp() {
    return null;
  }
  var $c =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };

  function Hs(e) {
    this._internalRoot = e;
  }
  ((Ho.prototype.render = Hs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      _o(e, t, null, null);
    }),
    (Ho.prototype.unmount = Hs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (cn(function () {
            _o(null, e, null, null);
          }),
            (t[St] = null));
        }
      }));

  function Ho(e) {
    this._internalRoot = e;
  }
  Ho.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ai();
      e = {
        blockedOn: null,
        target: e,
        priority: t,
      };
      for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
      (zt.splice(n, 0, e), n === 0 && Li(e));
    }
  };

  function Fs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }

  function Fo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }

  function Qc() {}

  function vp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var w = Do(i);
          s.call(w);
        };
      }
      var i = Wc(t, r, e, 0, null, !1, !1, "", Qc);
      return (
        (e._reactRootContainer = i),
        (e[St] = i.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var w = Do(d);
        u.call(w);
      };
    }
    var d = _s(e, 0, !1, null, null, !1, !1, "", Qc);
    return (
      (e._reactRootContainer = d),
      (e[St] = d.current),
      cr(e.nodeType === 8 ? e.parentNode : e),
      cn(function () {
        _o(t, d, n, r);
      }),
      d
    );
  }

  function Bo(e, t, n, r, l) {
    var s = n._reactRootContainer;
    if (s) {
      var i = s;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var d = Do(i);
          u.call(d);
        };
      }
      _o(t, i, e, l);
    } else i = vp(n, t, e, l, r);
    return Do(i);
  }
  ((Ei = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Yn(t.pendingLanes);
          n !== 0 &&
            (ul(t, n | 1),
            Ze(t, Ne()),
            (ae & 6) === 0 && ((Hn = Ne() + 500), Bt()));
        }
        break;
      case 13:
        (cn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var l = Ge();
            gt(r, e, 1, l);
          }
        }),
          Ds(e, 1));
    }
  }),
    (dl = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ge();
          gt(t, e, 134217728, n);
        }
        Ds(e, 134217728);
      }
    }),
    (Ii = function (e) {
      if (e.tag === 13) {
        var t = Qt(e),
          n = It(e, t);
        if (n !== null) {
          var r = Ge();
          gt(n, e, t, r);
        }
        Ds(e, t);
      }
    }),
    (Ai = function () {
      return fe;
    }),
    (Ti = function (e, t) {
      var n = fe;
      try {
        return ((fe = e), t());
      } finally {
        fe = n;
      }
    }),
    (rl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ko(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ro(r);
                if (!l) throw Error(c(90));
                (ei(r), Ko(r, l));
              }
            }
          }
          break;
        case "textarea":
          li(e, n);
          break;
        case "select":
          ((t = n.value), t != null && xn(e, !!n.multiple, t, !1));
      }
    }),
    (hi = Ps),
    (mi = cn));
  var yp = {
      usingClientEntryPoint: !1,
      Events: [pr, Cn, ro, pi, fi, Ps],
    },
    Cr = {
      findFiberByHostInstance: en,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    wp = {
      bundleType: Cr.bundleType,
      version: Cr.version,
      rendererPackageName: Cr.rendererPackageName,
      rendererConfig: Cr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: K.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = yi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Cr.findFiberByHostInstance || gp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        ((Dr = Uo.inject(wp)), (vt = Uo));
      } catch {}
  }
  return (
    (qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp),
    (qe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fs(t)) throw Error(c(200));
      return xp(e, t, null, n);
    }),
    (qe.createRoot = function (e, t) {
      if (!Fs(e)) throw Error(c(299));
      var n = !1,
        r = "",
        l = $c;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = _s(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        new Hs(t)
      );
    }),
    (qe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(c(188))
          : ((e = Object.keys(e).join(",")), Error(c(268, e)));
      return ((e = yi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (qe.flushSync = function (e) {
      return cn(e);
    }),
    (qe.hydrate = function (e, t, n) {
      if (!Fo(t)) throw Error(c(200));
      return Bo(null, e, t, !0, n);
    }),
    (qe.hydrateRoot = function (e, t, n) {
      if (!Fs(e)) throw Error(c(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        s = "",
        i = $c;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Wc(t, null, e, 1, n ?? null, l, !1, s, i)),
        (e[St] = t.current),
        cr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Ho(t);
    }),
    (qe.render = function (e, t, n) {
      if (!Fo(t)) throw Error(c(200));
      return Bo(null, e, t, !1, n);
    }),
    (qe.unmountComponentAtNode = function (e) {
      if (!Fo(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (cn(function () {
            Bo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[St] = null));
            });
          }),
          !0)
        : !1;
    }),
    (qe.unstable_batchedUpdates = Ps),
    (qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Fo(n)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return Bo(e, t, n, !1, r);
    }),
    (qe.version = "18.3.1-next-f1338f8080-20240426"),
    qe
  );
}
var tu;

function gu() {
  if (tu) return Vs.exports;
  tu = 1;

  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (m) {
        console.error(m);
      }
  }
  return (a(), (Vs.exports = Ip()), Vs.exports);
}
var nu;

function Ap() {
  if (nu) return Vo;
  nu = 1;
  var a = gu();
  return ((Vo.createRoot = a.createRoot), (Vo.hydrateRoot = a.hydrateRoot), Vo);
}
var Tp = Ap();
const Pp = xu(Tp),
  mn = [
    {
      id: "default",
      name: "Suryansh Dark",
      icon: "💜",
      accent: "#007acc",
    },
    {
      id: "rose-pine",
      name: "Rosé Pine",
      icon: "🌸",
      accent: "#eb6f92",
    },
    {
      id: "tokyo-night",
      name: "Tokyo Night",
      icon: "🌃",
      accent: "#7aa2f7",
    },
    {
      id: "catppuccin",
      name: "Catppuccin",
      icon: "🐱",
      accent: "#cba6f7",
    },
    {
      id: "nord",
      name: "Nord",
      icon: "🧊",
      accent: "#88c0d0",
    },
    {
      id: "gruvbox",
      name: "Gruvbox",
      icon: "🔥",
      accent: "#fabd2f",
    },
  ],
  ru = "suryansh-portfolio-theme";

function Lp() {
  const [a, m] = A.useState(() => localStorage.getItem(ru) || "default");
  return (
    A.useEffect(() => {
      const c = document.documentElement;
      (a === "default"
        ? c.removeAttribute("data-theme")
        : c.setAttribute("data-theme", a),
        localStorage.setItem(ru, a));
    }, [a]),
    {
      themeId: a,
      setThemeId: m,
      themes: mn,
    }
  );
}

function Rp({ onOpenCmd: a }) {
  const m = () => {
      var g, k, E;
      document.fullscreenElement
        ? (E = document.exitFullscreen) == null || E.call(document)
        : (k = (g = document.documentElement).requestFullscreen) == null ||
          k.call(g);
    },
    c = () => {
      window.blur();
    },
    I = () => {
      const g = [
          "You can't close a portfolio! 😄",
          "Nice try. I'm staying open 💜",
          "Ctrl+W won't save you here 😂",
        ],
        k = document.getElementById("tbar-msg");
      k &&
        ((k.textContent = g[Math.floor(Math.random() * g.length)]),
        (k.style.opacity = "1"),
        setTimeout(() => {
          k.style.opacity = "0";
        }, 2200));
    };
  return o.jsxs("div", {
    style: {
      gridArea: "title",
    },
    className:
      "bg-vscode-title flex items-center gap-2 px-3 border-b border-black select-none",
    children: [
      o.jsx("div", {
        className: "flex gap-1.5 group",
        children: [
          {
            color: "#ff5f57",
            label: "✕",
            labelColor: "#900",
            onClick: I,
            title: "Close",
          },
          {
            color: "#febc2e",
            label: "−",
            labelColor: "#7a5000",
            onClick: c,
            title: "Minimize",
          },
          {
            color: "#28c840",
            label: "⤢",
            labelColor: "#006500",
            onClick: m,
            title: "Fullscreen",
          },
        ].map(({ color: g, label: k, labelColor: E, onClick: h, title: j }) =>
          o.jsx(
            "button",
            {
              onClick: h,
              title: j,
              className: `w-3 h-3 rounded-full hover:brightness-110 transition-all
                       relative cursor-pointer border-none outline-none flex-shrink-0`,
              style: {
                background: g,
              },
              children: o.jsx("span", {
                className: `absolute inset-0 flex items-center justify-center
                         text-[8px] font-bold opacity-0 group-hover:opacity-100
                         transition-opacity`,
                style: {
                  color: E,
                },
                children: k,
              }),
            },
            j,
          ),
        ),
      }),
      o.jsx("span", {
        id: "tbar-msg",
        className: `text-[10px] text-white/50 transition-opacity duration-500 opacity-0
                   pointer-events-none absolute left-20`,
      }),
      o.jsxs("button", {
        onClick: a,
        className: `flex-1 max-w-xs mx-auto flex items-center justify-center gap-2
                   bg-white/[0.07] border border-white/10 rounded-[5px]
                   px-3 py-[3px] text-[11px] text-vscode-dim
                   hover:bg-white/10 transition-colors cursor-pointer`,
        children: [
          "🔍 suryansh-bobade : portfolio",
          o.jsxs("span", {
            className: "flex gap-1 ml-1",
            children: [
              o.jsx("kbd", {
                className: "bg-white/10 px-1 py-[1px] rounded text-[10px]",
                children: "Ctrl",
              }),
              o.jsx("kbd", {
                className: "bg-white/10 px-1 py-[1px] rounded text-[10px]",
                children: "P",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Xs = gu();
const Ee = {
    role: "Junior Software Developer @ EduVanceAI",
    location: "India 🇮🇳",
    email: "24cs3055@rgipt.ac.in",
    bio2: "Hi, Suryansh on this side! I am an aspiring computer engineer and am curious to learn new things about life every day! Perfection is something I always aim for. Being big on integrity and authenticity is something I always believe in. I enjoy painting, photography, designing, and editing. Growing up, I have always loved spending quality time making music on the keyboard. Glad to see you, cheers! ",
    links: {
      github: "https://github.com/suryanshbst",
      linkedin:
        "https://www.linkedin.com/in/suryansh-75247a31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram:
        "https://www.instagram.com/suryansh_bst?igsh=MXNjZ3V2emlsbXI2bQ==",
      leetcode: "https://leetcode.com/u/Sury_anonymous/",
    },
  },
  Mp = [
    "Building scalable backend architectures & optimized systems 🚀",
    "Translating complex algorithmic logic into performant code ⚡",
    "Exploring advanced system design, WebSockets & RAG architectures 🤖",
    "Always learning, always shipping ✨",
    "An all-rounder chasing tech innovations, nature & compelling writing 🌲",
  ],
  Zt = [
    {
      id: "home",
      name: "home.tsx",
      folder: "src",
      lang: "TypeScript React",
    },
    {
      id: "about",
      name: "about.html",
      folder: "src",
      lang: "HTML",
    },
    {
      id: "projects",
      name: "projects.js",
      folder: "src",
      lang: "JavaScript",
    },
    {
      id: "skills",
      name: "skills.json",
      folder: "data",
      lang: "JSON",
    },
    {
      id: "experience",
      name: "experience.ts",
      folder: "src",
      lang: "TypeScript",
    },
    {
      id: "contact",
      name: "contact.css",
      folder: "src",
      lang: "CSS",
    },
    {
      id: "readme",
      name: "README.md",
      folder: "root",
      lang: "Markdown",
    },
    {
      id: "resume",
      name: "Suryansh_resume.pdf",
      folder: "root",
      lang: "PDF",
      download: !0,
    },
  ],
  zp = [
    {
      id: 1,
      institution: "Rajiv Gandhi Institute of Petroleum Technology (RGIPT)",
      university: "",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      minor: "",
      gpa: "Current CPI: 9.79 / 10",
      period: "2024 – 2028",
      location: "Amethi, UP",
      icon: "🎓",
    },
    {
      id: 2,
      institution: "St. Basil’s School, Basti",
      university: "",
      degree: "Higher Secondary Education (PCM)",
      minor: "",
      gpa: "Class 12th: 96.4% | Class 10th: 94.83%",
      period: "2022 – 2024",
      location: "Basti, UP",
      icon: "🏫",
    },
  ],
  Op = [
    {
      id: 0,
      icon: "🤝",
      accent: "#ff9d4b",
      type: "Full Stack · Network · Scalability",
      name: "SAMPARK – Alumni Engagement Platform",
      desc: "A centralized, high-performance data management and engagement platform designed to bridge the gap between students and institution alumni. Built with a robust MERN stack architecture, it features advanced search filters, secure verification workflows, and optimized indexing to handle comprehensive alumni records smoothly.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
      link: "https://github.com/suryanshbst",
      period: "Sep 2025 – Mar 2026",
    },
    {
      id: 1,
      icon: "📈",
      accent: "#6c63ff",
      type: "Backend · Full Stack",
      name: "Stockmaster",
      desc: "A robust platform for managing and analyzing stock data. Developed using modern backend-oriented practices focusing on clean architecture, optimized database queries (SQL/Prisma), and robust API endpoints.",
      tags: ["Node.js", "PostgreSQL", "Prisma ORM", "TypeScript", "Express.js"],
      link: "https://github.com/suryanshbst",
      period: "Mar 2026",
    },
    {
      id: 2,
      icon: "💬",
      accent: "#4fc1ff",
      type: "WebSockets · System Design · Real-Time",
      name: "Echo – Real-Time Collaboration App",
      desc: "A low-latency, event-driven chat and collaboration application engineered for instant communication. Developed utilizing TypeScript and custom room-based WebSocket routing to handle state synchronization flawlessly. Features a highly optimized backend infrastructure ensuring messages are delivered with minimal overhead.",
      tags: ["TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Prisma ORM"],
      link: "https://github.com/suryanshbst",
      period: "2026",
    },
    {
      id: 3,
      icon: "🧠",
      accent: "#4ec9b0",
      type: "Productivity · Second Brain · Database Design",
      name: "Khayal – Your Second Brain",
      desc: "A minimal, highly organized digital sanctuary designed to let users capture, categorize, and recall complex ideas, important web links, and raw thoughts. Features a strictly normalized relational database schema via Prisma, secure JWT-based middleware authentication, and custom in-memory tagging systems.",
      tags: ["PostgreSQL", "Prisma ORM", "Node.js", "TypeScript", "JWT"],
      link: "https://github.com/suryanshbst",
      period: "2025",
    },
    {
      id: 4,
      icon: "✍️",
      accent: "#c586c0",
      type: "CMS · Frontend Polish · Minimalism",
      name: "Chronicle – Publishing Platform",
      desc: "A beautiful, minimal publishing platform and sanctuary for essays, long-form human stories, and ideas. Built with clean software design patterns, focusing heavily on markdown parsing, seamless content delivery, and a sleek, modern, distraction-free user interface.",
      tags: ["React", "Node.js", "Markdown", "CSS Modules", "REST API"],
      link: "https://github.com/suryanshbst",
      period: "2025",
    },
    {
      id: 5,
      icon: "🏎️",
      accent: "#ff6fd8",
      type: "Machine Learning · Flask · Python",
      name: "Car Price Predictor",
      desc: "An end-to-end machine learning inference engine that predicts vehicle market value based on historical datasets. Implements advanced data preprocessing, feature engineering, and regression models wrapped inside a lightweight Flask backend to serve real-time predictions via an API gateway.",
      tags: ["Python", "Flask", "scikit-learn", "Pandas", "NumPy"],
      link: "https://github.com/suryanshbst",
      period: "2025",
    },
    {
      id: 6,
      icon: "🍔",
      accent: "#f7df1e",
      type: "System Design · High Availability · Logistics",
      name: "Foodie-Express – Scalable Food Delivery Architecture",
      desc: "Currently architecting a highly performant, distributed food ordering backend. Focusing on solving complex system design challenges such as real-time driver tracking, geolocation query optimization, transactional database consistency, and resilient order-processing queues.",
      tags: ["Node.js", "PostgreSQL", "Redis Cache", "WebSockets", "Docker"],
      link: "https://github.com/suryanshbst",
      period: "In Progress",
    },
    {
      id: 7,
      icon: "🎮",
      accent: "#38bdf8",
      type: "Concurrency · State Machines · Event-Driven",
      name: "Multiplayer Quiz App",
      desc: "Building an interactive, highly concurrent multiplayer gaming system that handles real-time trivia rooms. Implementing strict server-side state machines to prevent cheating, manage game countdown timers, and instantly broadcast synchronized player leaderboards using Redis and WebSockets.",
      tags: ["TypeScript", "Node.js", "Redis", "WebSockets", "Express.js"],
      link: "https://github.com/suryanshbst",
      period: "In Progress",
    },
  ],
  _p = [
    {
      group: "Languages",
      items: [
        {
          name: "C/C++",
          pct: 95,
          color: "#ff6fd8",
        },
        {
          name: "TypeScript",
          pct: 90,
          color: "#38bdf8",
        },
        {
          name: "JavaScript",
          pct: 88,
          color: "#facc15",
        },
        {
          name: "SQL",
          pct: 85,
          color: "#a855f7",
        },
        {
          name: "Java",
          pct: 80,
          color: "#f97316",
        },
        {
          name: "Python",
          pct: 78,
          color: "#34d399",
        },
      ],
    },
    {
      group: "Backend, APIs & System Design",
      items: [
        {
          name: "Node.js",
          pct: 92,
          color: "#22c55e",
        },
        {
          name: "Express.js",
          pct: 90,
          color: "#38bdf8",
        },
        {
          name: "RESTful APIs",
          pct: 92,
          color: "#fbbf24",
        },
        {
          name: "WebSockets (Real-time)",
          pct: 88,
          color: "#a855f7",
        },
        {
          name: "System Design (Scalability)",
          pct: 82,
          color: "#f97316",
        },
      ],
    },
    {
      group: "Databases & ORMs",
      items: [
        {
          name: "PostgreSQL",
          pct: 90,
          color: "#38bdf8",
        },
        {
          name: "Prisma ORM",
          pct: 88,
          color: "#34d399",
        },
        {
          name: "MongoDB",
          pct: 86,
          color: "#4cceb4",
        },
        {
          name: "Redis (Caching)",
          pct: 75,
          color: "#ef4444",
        },
      ],
    },
    {
      group: "Generative AI & LLM Engineering",
      items: [
        {
          name: "LLM APIs (OpenAI/Gemini)",
          pct: 85,
          color: "#a855f7",
        },
        {
          name: "RAG Architectures",
          pct: 82,
          color: "#facc15",
        },
        {
          name: "LangChain",
          pct: 80,
          color: "#38bdf8",
        },
        {
          name: "AI Agents",
          pct: 75,
          color: "#ff6fd8",
        },
      ],
    },
    {
      group: "DevOps & Tools",
      items: [
        {
          name: "Git & GitHub",
          pct: 92,
          color: "#f97316",
        },
        {
          name: "Linux (Bash)",
          pct: 85,
          color: "#facc15",
        },
        {
          name: "Docker",
          pct: 75,
          color: "#38bdf8",
        },
      ],
    },
    {
      group: "Frontend & UI Design",
      items: [
        {
          name: "React",
          pct: 80,
          color: "#38bdf8",
        },
        {
          name: "TailwindCSS",
          pct: 88,
          color: "#34d399",
        },
        {
          name: "Sleek / Dark UI Design",
          pct: 90,
          color: "#a855f7",
        },
      ],
    },
  ],
  Dp = [
    "MERN Stack",
    "Data Structures & Algorithms (DSA)",
    "Competitive Programming",
    "Monorepo Management",
    "JWT Authentication",
    "Flask",
    "PostgreSQL Indexing",
    "GitHub Actions",
    "Prisma ORM",
    "WebSockets",
    "RESTful APIs",
    "System Design",
    "RAG Architectures",
    "LLM APIs",
    "AI Agents",
    "Docker",
    "Redis Caching",
    "SQL Queries",
  ],
  Hp = [
    {
      date: "2025 - Present",
      current: !0,
      role: "Branch Coordinator",
      company: "Career Development Cell (CDC)",
      location: "RGIPT",
      desc: "Managing placement and internship logistics for the Computer Science & Engineering department. Bridging the gap between corporate recruiters and student talent by coordinating campus drives, structuring resume reviews, and driving technical readiness initiatives.",
      tags: [
        "Placement Logistics",
        "Corporate Relations",
        "Team Leadership",
        "Strategic Communication",
      ],
    },
    {
      date: "2025 - Present",
      current: !0,
      role: "Co-Head",
      company: "IEEE Robotics & Automation Society (RAS)",
      location: "RGIPT",
      desc: "Leading technical workshops and hands-on training modules in robotics and automation. Spearheaded team preparations and organized qualifying rounds that secured official wild-card entries to Asia's largest science and technology festival, IIT Bombay Techfest.",
      tags: [
        "Event Management",
        "Technical Mentorship",
        "Robotics Workshops",
        "IITB Techfest",
      ],
    },
    {
      date: "2025 - Present",
      current: !0,
      role: "Technical Executive",
      company: "Science & Technical Council (Kode-Club)",
      location: "RGIPT",
      desc: "Orchestrating large-scale technical events, inter-college coding contests, and hackathons for the student developer community. Focused on fostering a competitive coding culture by managing real-time tournament logistics and judging platforms.",
      tags: [
        "Hackathon Logistics",
        "Competitive Coding",
        "Community Building",
        "Event Coordination",
      ],
    },
    {
      date: "Dec 2025",
      current: !1,
      role: "Media Host & Organizing Team",
      company: "Energy-o-Thon",
      location: "RGIPT",
      desc: "Managed media coordination and hosted live sessions during the Energy-o-Thon hackathon. Handled public relations and anchor responsibilities to ensure seamless cross-border collaboration between technical talents from India and Russia.",
      tags: [
        "International Relations",
        "Media Management",
        "Live Hosting",
        "Public Relations",
      ],
    },
    {
      date: "2024 - 2025",
      current: !1,
      role: "Editorial Team Member",
      company: "Science & Technical Council",
      location: "RGIPT",
      desc: "Crafted clear, engaging technical documentation, event scripts, and editorial content to promote technological innovations and campus council initiatives across diverse digital platforms.",
      tags: [
        "Technical Writing",
        "Content Strategy",
        "Copywriting",
        "Inter-Club Collaboration",
      ],
    },
  ],
  ou = [
    "home.tsx",
    "about.html",
    "projects.js",
    "skills.json",
    "leadership.ts",
    "contact.css",
    "README.md",
    "Suryansh_Resume.pdf",
  ],
  Fp = {
    "home.tsx": "home",
    "about.html": "about",
    "projects.js": "projects",
    "skills.json": "skills",
    "experience.ts": "experience",
    "contact.css": "contact",
    "README.md": "readme",
  };

function fn({ anchorRef: a, open: m, onClose: c, children: I }) {
  const [g, k] = A.useState({
      top: 0,
      left: 0,
    }),
    E = A.useRef();
  return (
    A.useEffect(() => {
      if (!m || !a.current) return;
      const h = a.current.getBoundingClientRect();
      k({
        top: h.bottom + 1,
        left: h.left,
      });
    }, [m]),
    A.useEffect(() => {
      if (!m) return;
      const h = (j) => {
        var H, b;
        !((H = a.current) != null && H.contains(j.target)) &&
          !((b = E.current) != null && b.contains(j.target)) &&
          c();
      };
      return (
        document.addEventListener("mousedown", h),
        () => document.removeEventListener("mousedown", h)
      );
    }, [m]),
    m
      ? Xs.createPortal(
          o.jsx("div", {
            ref: E,
            className:
              "fixed z-[9999] min-w-[200px] rounded border animate-fade-in py-0.5",
            style: {
              top: g.top,
              left: g.left,
              background: "var(--bg3)",
              borderColor: "var(--border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.65)",
            },
            children: I,
          }),
          document.body,
        )
      : null
  );
}

function he({
  label: a,
  shortcut: m,
  onClick: c,
  disabled: I = !1,
  danger: g = !1,
  highlight: k = !1,
}) {
  return o.jsxs("button", {
    onClick: c,
    disabled: I,
    className: `w-full flex items-center gap-2 px-4 py-[5px] text-[12px] text-left
                 transition-colors disabled:opacity-35 cursor-pointer border-none outline-none`,
    style: {
      color: g ? "var(--red)" : k ? "#b48eff" : "var(--text)",
      background: "transparent",
    },
    onMouseEnter: (E) => {
      I || (E.currentTarget.style.background = "var(--blue2)");
    },
    onMouseLeave: (E) => {
      E.currentTarget.style.background = "transparent";
    },
    children: [
      o.jsx("span", {
        className: "flex-1",
        children: a,
      }),
      m &&
        o.jsx("span", {
          className: "text-[10px]",
          style: {
            color: "var(--dim)",
          },
          children: m,
        }),
    ],
  });
}

function jt() {
  return o.jsx("div", {
    className: "my-0.5 border-t",
    style: {
      borderColor: "var(--border)",
    },
  });
}

function $s({ children: a }) {
  return o.jsx("div", {
    className: "px-4 pt-1.5 pb-0.5 text-[10px] tracking-widest uppercase",
    style: {
      color: "var(--dim)",
    },
    children: a,
  });
}

function Bp({
  onToggleTerm: a,
  onOpenCmd: m,
  onNavigate: c,
  onToggleSidebar: I,
  onToggleCopilot: g,
  copilotOpen: k,
  activeFile: E,
  openTabs: h,
  onCloseTab: j,
  onCloseAllTabs: H,
}) {
  const [b, T] = A.useState(null),
    y = {
      file: A.useRef(),
      edit: A.useRef(),
      view: A.useRef(),
      go: A.useRef(),
      run: A.useRef(),
      terminal: A.useRef(),
      help: A.useRef(),
    },
    F = (S) => T((V) => (V === S ? null : S)),
    M = () => T(null),
    B = (S) => {
      (S == null || S(), M());
    },
    R =
      "px-2 py-0.5 rounded text-xs text-vscode-text cursor-pointer hover:bg-white/[0.08] transition-colors select-none";
  return o.jsxs("div", {
    style: {
      gridArea: "menu",
    },
    className:
      "bg-vscode-bg3 flex items-center gap-0.5 px-2 border-b border-vscode-border",
    children: [
      o.jsxs("div", {
        ref: y.file,
        children: [
          o.jsx("button", {
            className: R,
            onClick: () => F("file"),
            children: "File",
          }),
          o.jsxs(fn, {
            anchorRef: y.file,
            open: b === "file",
            onClose: M,
            children: [
              o.jsx(he, {
                label: "New Tab",
                shortcut: "Ctrl+T",
                onClick: () => B(() => (c == null ? void 0 : c("home"))),
              }),
              o.jsx(he, {
                label: "Open File…",
                shortcut: "Ctrl+P",
                onClick: () => B(m),
              }),
              o.jsx(jt, {}),
              o.jsx(he, {
                label: "Close Tab",
                shortcut: "Ctrl+W",
                onClick: () => B(() => E && (j == null ? void 0 : j(E))),
                disabled: !E,
              }),
              o.jsx(he, {
                label: "Close All Tabs",
                onClick: () => B(H),
                disabled: !(h != null && h.length),
              }),
              o.jsx(jt, {}),
              o.jsx($s, {
                children: "Open Recent",
              }),
              Zt.slice(0, 4).map((S) =>
                o.jsx(
                  he,
                  {
                    label: `    ${S.name}`,
                    onClick: () => B(() => (c == null ? void 0 : c(S.id))),
                  },
                  S.id,
                ),
              ),
              o.jsx(jt, {}),
              o.jsx(he, {
                label: "Download Resume",
                onClick: () =>
                  B(() => {
                    const S = document.createElement("a");
                    ((S.href = "/resume.pdf"),
                      (S.download = "Suryansh_Resume.pdf"),
                      S.click());
                  }),
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        ref: y.edit,
        children: [
          o.jsx("button", {
            className: R,
            onClick: () => F("edit"),
            children: "Edit",
          }),
          o.jsxs(fn, {
            anchorRef: y.edit,
            open: b === "edit",
            onClose: M,
            children: [
              o.jsx(he, {
                label: "Find…",
                shortcut: "Ctrl+P",
                onClick: () => B(m),
              }),
              o.jsx(jt, {}),
              o.jsx(he, {
                label: "Select All",
                shortcut: "Ctrl+A",
                onClick: () => B(() => document.execCommand("selectAll")),
              }),
              o.jsx(he, {
                label: "Copy",
                shortcut: "Ctrl+C",
                onClick: () => B(() => document.execCommand("copy")),
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        ref: y.view,
        children: [
          o.jsx("button", {
            className: R,
            onClick: () => F("view"),
            children: "View",
          }),
          o.jsxs(fn, {
            anchorRef: y.view,
            open: b === "view",
            onClose: M,
            children: [
              o.jsx(he, {
                label: "Command Palette",
                shortcut: "Ctrl+P",
                onClick: () => B(m),
              }),
              o.jsx(jt, {}),
              o.jsx(he, {
                label: "Toggle Sidebar",
                shortcut: "Ctrl+B",
                onClick: () => B(I),
              }),
              o.jsx(he, {
                label: "Toggle Terminal",
                shortcut: "Ctrl+`",
                onClick: () => B(a),
              }),
              o.jsx(he, {
                label: "✨ Suryansh's Copilot",
                shortcut: "Ctrl+Shift+C",
                onClick: () => B(g),
                highlight: !0,
              }),
              o.jsx(jt, {}),
              o.jsx(he, {
                label: "Enter Full Screen",
                shortcut: "F11",
                onClick: () =>
                  B(() => {
                    var S, V, U;
                    document.fullscreenElement
                      ? (U = document.exitFullscreen) == null ||
                        U.call(document)
                      : (V = (S = document.documentElement)
                          .requestFullscreen) == null || V.call(S);
                  }),
              }),
              o.jsx(he, {
                label: "Zoom In",
                shortcut: "Ctrl++",
                onClick: () =>
                  B(() => {
                    const S = document.documentElement;
                    S.style.fontSize =
                      Math.min(
                        parseFloat(S.style.fontSize || "100") + 10,
                        150,
                      ) + "%";
                  }),
              }),
              o.jsx(he, {
                label: "Zoom Out",
                shortcut: "Ctrl+-",
                onClick: () =>
                  B(() => {
                    const S = document.documentElement;
                    S.style.fontSize =
                      Math.max(parseFloat(S.style.fontSize || "100") - 10, 70) +
                      "%";
                  }),
              }),
              o.jsx(he, {
                label: "Reset Zoom",
                onClick: () =>
                  B(() => {
                    document.documentElement.style.fontSize = "";
                  }),
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        ref: y.go,
        children: [
          o.jsx("button", {
            className: R,
            onClick: () => F("go"),
            children: "Go",
          }),
          o.jsxs(fn, {
            anchorRef: y.go,
            open: b === "go",
            onClose: M,
            children: [
              o.jsx(he, {
                label: "Go to File…",
                shortcut: "Ctrl+P",
                onClick: () => B(m),
              }),
              o.jsx(jt, {}),
              o.jsx($s, {
                children: "Files",
              }),
              Zt.map((S) =>
                o.jsx(
                  he,
                  {
                    label: `    ${S.name}`,
                    onClick: () => B(() => (c == null ? void 0 : c(S.id))),
                  },
                  S.id,
                ),
              ),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        ref: y.run,
        children: [
          o.jsx("button", {
            className: R,
            onClick: () => F("run"),
            children: "Run",
          }),
          o.jsxs(fn, {
            anchorRef: y.run,
            open: b === "run",
            onClose: M,
            children: [
              o.jsx(he, {
                label: "Start Terminal",
                shortcut: "Ctrl+`",
                onClick: () => B(a),
              }),
              o.jsx(he, {
                label: "Run Last Command",
                disabled: !0,
                onClick: M,
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        ref: y.terminal,
        children: [
          o.jsx("button", {
            className: R,
            onClick: () => F("terminal"),
            children: "Terminal",
          }),
          o.jsxs(fn, {
            anchorRef: y.terminal,
            open: b === "terminal",
            onClose: M,
            children: [
              o.jsx(he, {
                label: "New Terminal",
                shortcut: "Ctrl+`",
                onClick: () => B(a),
              }),
              o.jsx(he, {
                label: "Toggle Terminal",
                shortcut: "Ctrl+`",
                onClick: () => B(a),
              }),
              o.jsx(jt, {}),
              o.jsx(he, {
                label: "Clear Terminal",
                onClick: () =>
                  B(() => {
                    window.dispatchEvent(new CustomEvent("terminal:clear"));
                  }),
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        ref: y.help,
        children: [
          o.jsx("button", {
            className: R,
            onClick: () => F("help"),
            children: "Help",
          }),
          o.jsxs(fn, {
            anchorRef: y.help,
            open: b === "help",
            onClose: M,
            children: [
              o.jsx(he, {
                label: "Command Palette",
                shortcut: "Ctrl+P",
                onClick: () => B(m),
              }),
              o.jsx(jt, {}),
              o.jsx($s, {
                children: "Keyboard Shortcuts",
              }),
              [
                ["Ctrl+P", "Go to file"],
                ["Ctrl+B", "Toggle sidebar"],
                ["Ctrl+`", "Toggle terminal"],
                ["Ctrl+Shift+C", "Toggle Copilot ✨"],
                ["Esc", "Close overlay"],
              ].map(([S, V]) =>
                o.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 px-4 py-1",
                    children: [
                      o.jsx("kbd", {
                        className: "text-[10px] px-1.5 py-0.5 rounded border",
                        style: {
                          background: "rgba(255,255,255,0.06)",
                          borderColor: "var(--border)",
                          color: "var(--yel)",
                        },
                        children: S,
                      }),
                      o.jsx("span", {
                        className: "text-[11px]",
                        style: {
                          color: "var(--dim)",
                        },
                        children: V,
                      }),
                    ],
                  },
                  S,
                ),
              ),
              o.jsx(jt, {}),
              o.jsx(he, {
                label: "GitHub ↗",
                onClick: () =>
                  B(() =>
                    window.open("https://github.com/suryanshbst", "_blank"),
                  ),
              }),
              o.jsx(he, {
                label: "About",
                onClick: () =>
                  B(() =>
                    alert(`Suryansh Bobade Portfolio v3.0
Built with React + Vite + Tailwind 💜`),
                  ),
              }),
            ],
          }),
        ],
      }),
      o.jsx("div", {
        children: o.jsx("button", {
          className: R,
          onClick: g,
          title: "Toggle Suryansh's Copilot (Ctrl+Shift+C)",
          children: "Copilot",
        }),
      }),
    ],
  });
}
const Up = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "2.05",
          fill: "#61dafb",
        }),
        o.jsxs("g", {
          fill: "none",
          stroke: "#61dafb",
          strokeWidth: "1.1",
          children: [
            o.jsx("ellipse", {
              rx: "10.5",
              ry: "3.8",
              cx: "12",
              cy: "12",
            }),
            o.jsx("ellipse", {
              rx: "10.5",
              ry: "3.8",
              cx: "12",
              cy: "12",
              transform: "rotate(60 12 12)",
            }),
            o.jsx("ellipse", {
              rx: "10.5",
              ry: "3.8",
              cx: "12",
              cy: "12",
              transform: "rotate(120 12 12)",
            }),
          ],
        }),
      ],
    }),
  Vp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("rect", {
          width: "24",
          height: "24",
          rx: "3",
          fill: "#3178c6",
        }),
        o.jsx("path", {
          d: "M14.39 18.18V20c.36.18.8.32 1.3.42.5.1 1.03.15 1.58.15.54 0 1.05-.06 1.53-.17.48-.12.9-.3 1.26-.56.36-.25.64-.58.85-.97.21-.4.31-.87.31-1.43 0-.41-.06-.77-.18-1.08-.12-.31-.3-.59-.53-.83-.23-.24-.51-.46-.84-.65-.33-.2-.7-.38-1.11-.56-.3-.12-.56-.24-.79-.36-.23-.11-.42-.23-.58-.35-.16-.12-.28-.25-.36-.39a.92.92 0 0 1-.12-.47c0-.16.04-.31.11-.44.07-.13.17-.24.31-.33.13-.09.29-.16.48-.21.18-.05.39-.07.62-.07.17 0 .34.01.53.04.18.03.37.07.55.14.18.06.36.14.53.24.17.1.32.21.45.35v-1.7a5.4 5.4 0 0 0-1.09-.31 7.3 7.3 0 0 0-1.24-.1c-.52 0-1.01.06-1.48.18-.46.12-.87.31-1.22.56-.35.25-.62.57-.83.96-.2.39-.31.85-.31 1.39 0 .69.2 1.27.59 1.74.4.47.97.86 1.74 1.18.31.12.6.25.86.37.26.12.49.24.68.38.19.13.34.28.45.44.11.16.16.34.16.55 0 .15-.03.3-.1.43-.07.13-.17.25-.31.35-.13.1-.3.18-.5.24-.2.06-.43.09-.69.09-.44 0-.88-.08-1.31-.25a4.5 4.5 0 0 1-1.17-.76zM8.75 10.1H11.5V8.5H4.5v1.6H7.25V20h1.5V10.1z",
          fill: "white",
        }),
      ],
    }),
  Wp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("rect", {
          width: "24",
          height: "24",
          rx: "3",
          fill: "#f7df1e",
        }),
        o.jsx("path", {
          d: "M7.5 17.8c.4.65 1.15 1.2 2.15 1.2 1.1 0 1.85-.6 1.85-1.7V12h-1.6v5.25c0 .55-.25.8-.65.8-.4 0-.7-.25-.9-.6l-.85.35zM13.5 17.6c.5.8 1.35 1.4 2.65 1.4 1.35 0 2.35-.7 2.35-1.95 0-1.1-.65-1.6-1.85-2.1l-.4-.15c-.6-.25-.85-.4-.85-.8 0-.35.25-.6.65-.6.4 0 .65.2.9.6l1.25-.8c-.55-.9-1.3-1.2-2.15-1.2-1.25 0-2.1.8-2.1 1.95 0 1.1.65 1.6 1.65 2.05l.4.15c.7.3 1.05.5 1.05.95 0 .4-.35.7-.9.7-.65 0-1.05-.35-1.35-.85l-1.3.65z",
          fill: "black",
        }),
      ],
    }),
  Gp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("rect", {
          width: "24",
          height: "24",
          rx: "3",
          fill: "#cbcb41",
          opacity: "0.18",
        }),
        o.jsx("text", {
          x: "2",
          y: "17",
          fontFamily: "monospace",
          fontSize: "11",
          fontWeight: "bold",
          fill: "#cbcb41",
          children: "{ }",
        }),
      ],
    }),
  $p = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("rect", {
          width: "24",
          height: "24",
          rx: "3",
          fill: "#519aba",
          opacity: "0.18",
        }),
        o.jsx("rect", {
          x: "2",
          y: "5.5",
          width: "20",
          height: "13",
          rx: "1.5",
          fill: "none",
          stroke: "#519aba",
          strokeWidth: "1.2",
        }),
        o.jsx("path", {
          d: "M5.5 10v4M5.5 10l2 2 2-2v4M13 14v-4l2 2 2-2",
          fill: "none",
          stroke: "#519aba",
          strokeWidth: "1.3",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  Qp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("rect", {
          width: "24",
          height: "24",
          rx: "3",
          fill: "#264de4",
          opacity: "0.18",
        }),
        o.jsx("path", {
          d: "M3 2l1.72 19.29L12 23l7.27-1.71L21 2H3zm14.1 5.73-.26 2.8-4.84 1.37 4.84.04-.33 3.88-4.51 1.31-4.52-1.26-.3-3.38h2.8l.15 1.77 1.87.5 1.88-.5.2-2.32-6.08-.04.19-2.09 5.7.02.2-1.84H7.82l-.2-2.26h10.74l-.26.0z",
          fill: "#264de4",
        }),
      ],
    }),
  Yp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("rect", {
          width: "24",
          height: "24",
          rx: "3",
          fill: "#e34c26",
          opacity: "0.18",
        }),
        o.jsx("path", {
          d: "M3 2l1.72 19.29L12 23l7.27-1.71L21 2H3zm13.12 14.04-4.1 1.13-4.12-1.13-.27-3.06h2.07l.14 1.6 2.18.6 2.17-.6.23-2.56H8.08l-.19-2.16h7.04l.18-2.01H6.96L6.77 5.9h10.46l-1.11 10.14z",
          fill: "#e34c26",
        }),
      ],
    }),
  Kp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "17",
      height: "17",
      children: [
        o.jsx("rect", {
          width: "24",
          height: "24",
          rx: "3",
          fill: "#f44336",
          opacity: "0.15",
        }),
        o.jsx("path", {
          d: "M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
          fill: "none",
          stroke: "#f44336",
          strokeWidth: "1.3",
        }),
        o.jsx("path", {
          d: "M14 2v5h5",
          fill: "none",
          stroke: "#f44336",
          strokeWidth: "1.3",
        }),
        o.jsx("text", {
          x: "5",
          y: "17",
          fontFamily: "monospace",
          fontSize: "5.5",
          fontWeight: "bold",
          fill: "#f44336",
          children: "PDF",
        }),
      ],
    }),
  Qo = {
    home: Up,
    about: Yp,
    projects: Wp,
    skills: Gp,
    experience: Vp,
    contact: Qp,
    readme: $p,
    resume: Kp,
  },
  Jp = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      children: o.jsx("path", {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      }),
    }),
  Xp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      children: [
        o.jsx("circle", {
          cx: "11",
          cy: "11",
          r: "8",
        }),
        o.jsx("path", {
          d: "m21 21-4.35-4.35",
        }),
      ],
    }),
  Zp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      children: [
        o.jsx("circle", {
          cx: "6",
          cy: "6",
          r: "3",
        }),
        o.jsx("circle", {
          cx: "6",
          cy: "18",
          r: "3",
        }),
        o.jsx("circle", {
          cx: "18",
          cy: "12",
          r: "3",
        }),
        o.jsx("path", {
          d: "M6 9v6M9 12h6",
        }),
      ],
    }),
  qp = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      children: [
        o.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "3",
        }),
        o.jsx("path", {
          d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
        }),
      ],
    }),
  ef = ({ size: a = 16 }) =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: a,
      height: a,
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z",
      }),
    }),
  tf = ({ size: a = 16 }) =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: a,
      height: a,
      fill: "#0a66c2",
      children: o.jsx("path", {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      }),
    }),
  nf = ({ size: a = 16 }) =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: a,
      height: a,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [
        o.jsx("path", {
          d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        }),
        o.jsx("polyline", {
          points: "22,6 12,13 2,6",
        }),
      ],
    }),
  rf = [
    ["Ctrl P", "Go to file (command palette)"],
    ["Ctrl `", "Toggle terminal"],
    ["Ctrl B", "Toggle sidebar"],
    ["Esc", "Close overlay"],
    ["↑ / ↓", "Terminal history"],
  ];

function lu({ anchorRef: a, open: m, onClose: c, children: I }) {
  const [g, k] = A.useState({
      top: 0,
      left: 0,
    }),
    E = A.useRef();
  A.useEffect(() => {
    if (!m) return;
    const j = requestAnimationFrame(() => {
      if (!a.current || !E.current) return;
      const H = a.current.getBoundingClientRect(),
        b = E.current.offsetHeight,
        T = window.innerHeight,
        y = H.top + b > T - 16 ? Math.max(8, T - b - 16) : H.top;
      k({
        top: y,
        left: H.right + 8,
      });
    });
    return () => cancelAnimationFrame(j);
  }, [m]);
  const h = A.useCallback(
    (j) => {
      var T, y;
      const H = (T = a.current) == null ? void 0 : T.contains(j.target),
        b = (y = E.current) == null ? void 0 : y.contains(j.target);
      !H && !b && c();
    },
    [c],
  );
  return (
    A.useEffect(() => {
      if (m)
        return (
          document.addEventListener("pointerdown", h, !0),
          () => document.removeEventListener("pointerdown", h, !0)
        );
    }, [m, h]),
    m
      ? Xs.createPortal(
          o.jsx("div", {
            ref: E,
            className: "fixed z-[9999] w-72 rounded border overflow-y-auto",
            style: {
              top: g.top,
              left: g.left,
              maxHeight: "calc(100vh - 40px)",
              background: "var(--bg2)",
              borderColor: "var(--border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.65)",
            },
            children: I,
          }),
          document.body,
        )
      : null
  );
}

function su({ children: a }) {
  return o.jsx("div", {
    className:
      "px-3 py-2 text-[10px] font-bold tracking-widest uppercase sticky top-0 z-10",
    style: {
      color: "var(--dim)",
      borderBottom: "1px solid var(--border)",
      background: "var(--bg2)",
    },
    children: a,
  });
}

function Qs({ children: a }) {
  return o.jsx("div", {
    className: "px-3 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase",
    style: {
      color: "var(--dim)",
    },
    children: a,
  });
}

function Ys() {
  return o.jsx("div", {
    className: "mx-3 my-1",
    style: {
      borderTop: "1px solid var(--border)",
    },
  });
}

function of() {
  return o.jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o.jsx("path", {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      }),
      o.jsx("polyline", {
        points: "14 2 14 8 20 8",
      }),
      o.jsx("line", {
        x1: "12",
        y1: "11",
        x2: "12",
        y2: "17",
      }),
      o.jsx("polyline", {
        points: "9 14 12 17 15 14",
      }),
    ],
  });
}

function lf() {
  return o.jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: o.jsx("path", {
      d: "M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z",
    }),
  });
}

function sf({
  sidebarOpen: a,
  onToggleSidebar: m,
  onOpenCmd: c,
  onToggleTerm: I,
  themeId: g,
  onThemeChange: k,
  copilotOpen: E,
  onToggleCopilot: h,
  mobile: j = !1,
}) {
  const [H, b] = A.useState(!1),
    [T, y] = A.useState(!1),
    F = A.useRef(),
    M = A.useRef(),
    B = j
      ? "bg-vscode-bg3 flex flex-row items-center justify-around px-2 py-1 border-b border-vscode-border"
      : "bg-vscode-bg4 flex flex-col items-center pt-1 border-r border-vscode-border gap-0.5",
    R = () => {
      const S = document.createElement("a");
      ((S.href = "/Suryansh_Resume.pdf"),
        (S.download = "Suryansh_Resume.pdf"),
        S.click());
    };
  return o.jsxs("div", {
    style: j
      ? {}
      : {
          gridArea: "act",
        },
    className: B,
    children: [
      o.jsx(Bn, {
        icon: o.jsx(Jp, {}),
        title: "Explorer",
        active: a && !j,
        onClick: m,
      }),
      o.jsx(Bn, {
        icon: o.jsx(Xp, {}),
        title: "Search (Ctrl+P)",
        onClick: c,
      }),
      o.jsxs("div", {
        ref: F,
        className: "relative",
        children: [
          o.jsx(Bn, {
            icon: o.jsx(Zp, {}),
            title: "Source Control",
            active: H,
            onClick: () => b((S) => !S),
          }),
          o.jsxs(lu, {
            anchorRef: F,
            open: H,
            onClose: () => b(!1),
            children: [
              o.jsx(su, {
                children: "Source Control",
              }),
              o.jsxs("div", {
                className: "px-3 py-2.5 flex items-center gap-2",
                style: {
                  borderBottom: "1px solid var(--border)",
                },
                children: [
                  o.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    width: "13",
                    height: "13",
                    fill: "none",
                    stroke: "var(--blue)",
                    strokeWidth: "2",
                    children: [
                      o.jsx("circle", {
                        cx: "6",
                        cy: "6",
                        r: "3",
                      }),
                      o.jsx("circle", {
                        cx: "6",
                        cy: "18",
                        r: "3",
                      }),
                      o.jsx("circle", {
                        cx: "18",
                        cy: "12",
                        r: "3",
                      }),
                      o.jsx("path", {
                        d: "M6 9v6M9 12h6",
                      }),
                    ],
                  }),
                  o.jsx("span", {
                    className: "text-[12px] text-vscode-text font-medium",
                    children: "main",
                  }),
                  o.jsx("span", {
                    className: "ml-auto text-[11px]",
                    style: {
                      color: "var(--gcm)",
                    },
                    children: "↑ 1 commit ahead",
                  }),
                ],
              }),
              o.jsx("div", {
                className: "flex",
                style: {
                  borderBottom: "1px solid var(--border)",
                },
                children: [
                  ["3", "Modified", "#ce9178"],
                  ["1", "Added", "#4ec9b0"],
                  ["0", "Deleted", "#f44747"],
                ].map(([S, V, U]) =>
                  o.jsxs(
                    "div",
                    {
                      className: "flex-1 py-2 text-center",
                      children: [
                        o.jsx("div", {
                          className: "text-[14px] font-bold",
                          style: {
                            color: U,
                          },
                          children: S,
                        }),
                        o.jsx("div", {
                          className: "text-[9px] text-vscode-dim",
                          children: V,
                        }),
                      ],
                    },
                    V,
                  ),
                ),
              }),
              o.jsx("div", {
                className: "px-3 py-2 mt-1",
                children: o.jsx("a", {
                  href: "https://github.com/suryanshbst",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-[11px] hover:opacity-75 transition-opacity",
                  style: {
                    color: "var(--blue)",
                  },
                  children: "View on GitHub ↗",
                }),
              }),
            ],
          }),
        ],
      }),
      o.jsx(Bn, {
        icon: o.jsx(of, {}),
        title: "Download Resume",
        onClick: R,
      }),
      o.jsx(Bn, {
        icon: o.jsx(lf, {}),
        title: "Suryansh's Copilot Chat",
        active: E,
        onClick: h,
      }),
      !j &&
        o.jsx("div", {
          className: "flex-1",
        }),
      o.jsxs("div", {
        ref: M,
        className: "relative",
        style: j
          ? {}
          : {
              marginBottom: 4,
            },
        children: [
          o.jsx(Bn, {
            icon: o.jsx(qp, {}),
            title: "Settings",
            active: T,
            onClick: () => y((S) => !S),
          }),
          o.jsxs(lu, {
            anchorRef: M,
            open: T,
            onClose: () => y(!1),
            children: [
              o.jsx(su, {
                children: "Settings",
              }),
              o.jsx(Qs, {
                children: "🎨 Color Theme",
              }),
              mn.map((S) => {
                const V = S.id === g;
                return o.jsxs(
                  "button",
                  {
                    onClick: () => {
                      k == null || k(S.id);
                    },
                    className: `w-full flex items-center gap-3 px-3 py-2 text-left text-[12px]
                           transition-colors border-l-2 cursor-pointer`,
                    style: {
                      background: V ? "rgba(255,255,255,0.08)" : "transparent",
                      color: V ? "var(--bright)" : "var(--text)",
                      borderColor: V ? S.accent : "transparent",
                    },
                    onMouseEnter: (U) => {
                      V ||
                        (U.currentTarget.style.background =
                          "rgba(255,255,255,0.04)");
                    },
                    onMouseLeave: (U) => {
                      V || (U.currentTarget.style.background = "transparent");
                    },
                    children: [
                      o.jsx("span", {
                        className: "w-4 h-4 rounded-full flex-shrink-0",
                        style: {
                          background: S.accent,
                          boxShadow: `0 0 0 2px ${S.accent}44`,
                        },
                      }),
                      o.jsxs("span", {
                        className: "flex-1",
                        children: [S.icon, " ", S.name],
                      }),
                      V &&
                        o.jsx("span", {
                          className: "text-[10px]",
                          style: {
                            color: S.accent,
                          },
                          children: "✓",
                        }),
                    ],
                  },
                  S.id,
                );
              }),
              o.jsx(Ys, {}),
              o.jsx(Qs, {
                children: "⚡ Quick Actions",
              }),
              [
                {
                  icon: "🔍",
                  label: "Command Palette",
                  hint: "Ctrl+P",
                  action: () => {
                    (c == null || c(), y(!1));
                  },
                },
                {
                  icon: "📟",
                  label: "Toggle Terminal",
                  hint: "Ctrl+`",
                  action: () => {
                    (I == null || I(), y(!1));
                  },
                },
                {
                  icon: "✨",
                  label: "Copilot Chat",
                  hint: "",
                  action: () => {
                    (h == null || h(), y(!1));
                  },
                },
                {
                  icon: "📄",
                  label: "Download Resume",
                  hint: "",
                  action: () => {
                    (R(), y(!1));
                  },
                },
                {
                  icon: "🖥️",
                  label: "Toggle Fullscreen",
                  hint: "F11",
                  action: () => {
                    var S, V, U;
                    (document.fullscreenElement
                      ? (U = document.exitFullscreen) == null ||
                        U.call(document)
                      : (V = (S = document.documentElement)
                          .requestFullscreen) == null || V.call(S),
                      y(!1));
                  },
                },
              ].map((S) =>
                o.jsxs(
                  "button",
                  {
                    onClick: S.action,
                    className:
                      "w-full flex items-center gap-3 px-3 py-2 text-left text-[12px] transition-colors",
                    style: {
                      color: "var(--text)",
                      background: "transparent",
                    },
                    onMouseEnter: (V) => {
                      V.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                    },
                    onMouseLeave: (V) => {
                      V.currentTarget.style.background = "transparent";
                    },
                    children: [
                      o.jsx("span", {
                        className: "w-4 text-center flex-shrink-0",
                        children: S.icon,
                      }),
                      o.jsx("span", {
                        className: "flex-1",
                        children: S.label,
                      }),
                      S.hint &&
                        o.jsx("span", {
                          className: "text-[10px] text-vscode-dim",
                          children: S.hint,
                        }),
                    ],
                  },
                  S.label,
                ),
              ),
              o.jsx(Ys, {}),
              o.jsx(Qs, {
                children: "⌨️ Keyboard Shortcuts",
              }),
              rf.map(([S, V]) =>
                o.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 px-3 py-1.5",
                    children: [
                      o.jsx("kbd", {
                        className:
                          "text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0",
                        style: {
                          background: "rgba(255,255,255,0.07)",
                          borderColor: "var(--border)",
                          color: "var(--yel)",
                        },
                        children: S,
                      }),
                      o.jsx("span", {
                        className: "text-[11px] text-vscode-dim",
                        children: V,
                      }),
                    ],
                  },
                  S,
                ),
              ),
              o.jsx(Ys, {}),
              o.jsxs("div", {
                className: "px-3 py-3",
                children: [
                  o.jsx("p", {
                    className: "text-[11px] mb-1 text-vscode-dim",
                    children: "Portfolio v3.0 · React + Vite + Tailwind",
                  }),
                  o.jsxs("p", {
                    className: "text-[11px] text-vscode-dim",
                    children: [
                      "Made with 💜 by",
                      " ",
                      o.jsx("a", {
                        href: "https://github.com/suryanshbst",
                        target: "_blank",
                        rel: "noreferrer",
                        style: {
                          color: "var(--blue)",
                        },
                        className: "hover:opacity-75 transition-opacity",
                        children: "Suryansh",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function Bn({ icon: a, title: m, active: c = !1, onClick: I }) {
  return o.jsx("button", {
    title: m,
    onClick: I,
    className: `
        relative w-11 h-11 flex items-center justify-center rounded-md
        transition-colors duration-150 cursor-pointer border-none outline-none
        ${c ? "text-white ab-active" : "text-white/40 hover:text-white/85 hover:bg-white/[0.05]"}
      `,
    children: a,
  });
}
const af = () => {
  const a = document.createElement("a");
  ((a.href = "/Suryansh_Resume.pdf"),
    (a.download = "Suryansh_Resume.pdf"),
    document.body.appendChild(a),
    a.click(),
    document.body.removeChild(a));
};

function cf({
  activeFile: a,
  onFileClick: m,
  copilotOpen: c,
  onToggleCopilot: I,
}) {
  const g = (k) => {
    if (k.download) {
      af();
      return;
    }
    m(k.id);
  };
  return o.jsxs("div", {
    style: {
      gridArea: "side",
    },
    className:
      "bg-vscode-bg2 border-r border-vscode-border flex flex-col overflow-hidden select-none",
    children: [
      o.jsx("div", {
        className:
          "px-4 pt-2.5 pb-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-vscode-text",
        children: "Portfolio",
      }),
      o.jsx("div", {
        className: "flex-1 overflow-y-auto thin-scroll pb-2",
        children: Zt.map((k) => {
          const E = Qo[k.id],
            h = a === k.id && !k.download,
            j = !!k.download;
          return o.jsxs(
            "button",
            {
              onClick: () => g(k),
              title: j ? "Download Resume PDF ↓" : k.name,
              className: `
                w-full flex items-center gap-2 px-4 py-[5px] text-xs cursor-pointer
                border-l-2 transition-all duration-100 group
                ${h ? "bg-white/[0.07] text-vscode-bright border-vscode-blue2" : j ? "text-vscode-dim border-transparent hover:bg-white/[0.05] hover:text-[#f44336] hover:border-[#f44336]" : "text-vscode-dim border-transparent hover:bg-white/[0.05] hover:text-vscode-text"}
              `,
              children: [
                o.jsx("span", {
                  className: "flex-shrink-0",
                  children: E && o.jsx(E, {}),
                }),
                o.jsx("span", {
                  className: "truncate flex-1",
                  children: k.name,
                }),
                j &&
                  o.jsx("span", {
                    className:
                      "text-[11px] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0",
                    children: "↓",
                  }),
              ],
            },
            k.id,
          );
        }),
      }),
      o.jsx("div", {
        className: "px-3 py-2",
        style: {
          borderTop: "1px solid var(--border)",
        },
        children: o.jsxs("button", {
          onClick: I,
          title: "Open Suryansh's AI Copilot (Ctrl+Shift+C)",
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 10px",
            borderRadius: "6px",
            border: c
              ? "1px solid rgba(110,64,201,0.6)"
              : "1px solid rgba(110,64,201,0.25)",
            background: c ? "rgba(110,64,201,0.18)" : "rgba(110,64,201,0.07)",
            cursor: "pointer",
            transition: "all 0.15s",
            boxShadow: c
              ? "0 0 12px rgba(110,64,201,0.25)"
              : "0 0 8px rgba(110,64,201,0.1)",
          },
          onMouseEnter: (k) => {
            c ||
              ((k.currentTarget.style.background = "rgba(110,64,201,0.14)"),
              (k.currentTarget.style.borderColor = "rgba(110,64,201,0.5)"));
          },
          onMouseLeave: (k) => {
            c ||
              ((k.currentTarget.style.background = "rgba(110,64,201,0.07)"),
              (k.currentTarget.style.borderColor = "rgba(110,64,201,0.25)"));
          },
          children: [
            o.jsxs("span", {
              style: {
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                position: "relative",
              },
              children: [
                o.jsx("svg", {
                  width: "13",
                  height: "13",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: c ? "#b48eff" : "#9370db",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: o.jsx("path", {
                    d: "M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z",
                  }),
                }),
                !c &&
                  o.jsx("span", {
                    style: {
                      position: "absolute",
                      top: "-3px",
                      right: "-3px",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#6E40C9",
                      animation: "sidebar-pulse 2s infinite",
                    },
                  }),
              ],
            }),
            o.jsx("span", {
              style: {
                flex: 1,
                fontSize: "11.5px",
                fontWeight: 500,
                color: c ? "#b48eff" : "#9370db",
                textAlign: "left",
              },
              children: "Suryansh's Copilot",
            }),
            o.jsx("span", {
              style: {
                fontSize: "9px",
                color: c ? "#b48eff" : "var(--dim)",
                flexShrink: 0,
              },
              children: c ? "open ✓" : "AI ",
            }),
          ],
        }),
      }),
      o.jsxs("div", {
        className:
          "border-t border-vscode-border px-3 py-1.5 flex items-center gap-1.5 text-[11px] text-vscode-dim",
        children: [
          o.jsxs("svg", {
            viewBox: "0 0 24 24",
            width: "13",
            height: "13",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
              o.jsx("circle", {
                cx: "6",
                cy: "6",
                r: "3",
              }),
              o.jsx("circle", {
                cx: "6",
                cy: "18",
                r: "3",
              }),
              o.jsx("circle", {
                cx: "18",
                cy: "12",
                r: "3",
              }),
              o.jsx("path", {
                d: "M6 9v6M9 12h6",
              }),
            ],
          }),
          o.jsx("span", {
            className: "text-vscode-text",
            children: "main",
          }),
          o.jsxs("div", {
            className: "ml-auto flex gap-2",
            children: [
              o.jsx("span", {
                className: "text-vscode-gcm",
                children: "↑1",
              }),
              o.jsx("span", {
                className: "text-vscode-orange",
                children: "✦3",
              }),
            ],
          }),
        ],
      }),
      o.jsx("style", {
        children: `
        @keyframes sidebar-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(1.6); }
        }
      `,
      }),
    ],
  });
}

function uf({ openTabs: a, activeFile: m, onTabClick: c, onTabClose: I }) {
  return o.jsx("div", {
    className:
      "flex bg-vscode-bg2 border-b border-vscode-border overflow-x-auto no-scroll h-[35px] flex-shrink-0",
    children: a.map((g) => {
      const k = Zt.find((j) => j.id === g);
      if (!k) return null;
      const E = Qo[g],
        h = m === g;
      return o.jsxs(
        "div",
        {
          onClick: () => c(g),
          className: `
              relative flex items-center gap-1.5 px-3.5 h-[35px] text-xs cursor-pointer
              border-r border-vscode-border flex-shrink-0 max-w-[160px] group
              transition-colors duration-100
              ${h ? "bg-vscode-bg text-vscode-bright tab-active" : "bg-vscode-bg2 text-vscode-dim hover:text-vscode-text"}
            `,
          children: [
            o.jsx("span", {
              className: "flex-shrink-0",
              children: o.jsx(E, {}),
            }),
            o.jsx("span", {
              className: "truncate",
              children: k.name,
            }),
            o.jsx("button", {
              onClick: (j) => {
                (j.stopPropagation(), I(g));
              },
              className: `
                ml-0.5 w-4 h-4 flex items-center justify-center rounded text-[11px]
                flex-shrink-0 transition-colors
                opacity-0 group-hover:opacity-100
                ${h ? "opacity-100" : ""}
                hover:bg-white/10 hover:text-vscode-text text-vscode-dim
              `,
              children: "✕",
            }),
          ],
        },
        g,
      );
    }),
  });
}

function df({ activeFile: a }) {
  const m = Zt.find((F) => F.id === a);
  if (!m) return null;
  const c =
      m.folder === "root"
        ? ["suryansh", m.name]
        : ["suryansh", m.folder, m.name],
    [I, g] = A.useState(c),
    [k, E] = A.useState(null),
    [h, j] = A.useState(null),
    H = A.useRef(null);
  I.join() !== c.join() && k === null && g(c);
  const b = (F) => {
      ((H.current = F), E(F));
    },
    T = (F) => {
      j(F);
    },
    y = () => {
      if (H.current !== null && h !== null && H.current !== h) {
        const F = [...I],
          [M] = F.splice(H.current, 1);
        (F.splice(h, 0, M), g(F));
      }
      ((H.current = null), E(null), j(null));
    };
  return o.jsx("div", {
    className:
      "flex items-center gap-0.5 px-4 py-1 text-xs text-vscode-dim border-b border-vscode-border bg-vscode-bg flex-shrink-0 min-h-[26px] select-none",
    children: I.map((F, M) =>
      o.jsxs(
        "span",
        {
          className: "flex items-center gap-0.5",
          children: [
            o.jsx("span", {
              draggable: !0,
              onDragStart: () => b(M),
              onDragEnter: () => T(M),
              onDragEnd: y,
              onDragOver: (B) => B.preventDefault(),
              className:
                "flex items-center gap-0.5 px-1 rounded cursor-grab active:cursor-grabbing transition-all",
              style: {
                opacity: k === M ? 0.35 : 1,
                background: h === M && k !== M ? "var(--bg3)" : "transparent",
                outline:
                  h === M && k !== M ? "1px dashed var(--border)" : "none",
                color: M === I.length - 1 ? "var(--text)" : "var(--dim)",
              },
              children: F,
            }),
            M < I.length - 1 &&
              o.jsx("span", {
                className: "opacity-30 text-[10px] mx-0.5 pointer-events-none",
                children: "›",
              }),
          ],
        },
        M,
      ),
    ),
  });
}

function pf({ onClose: a, onOpenFile: m }) {
  const [c, I] = A.useState([
      {
        type: "info",
        text: "Welcome! Type 'help' to see available commands.",
      },
    ]),
    [g, k] = A.useState(""),
    [E, h] = A.useState("~"),
    [j, H] = A.useState([]),
    [b, T] = A.useState(-1),
    y = A.useRef(),
    F = A.useRef(),
    M = (U) => I((K) => [...K, ...U]),
    B = (U) => {
      const K = U.trim();
      if (!K) return;
      (H((ye) => [K, ...ye]), T(-1));
      const [ve, ...je] = K.split(/\s+/),
        oe = je.join(" ");
      switch (
        (M([
          {
            type: "cmd",
            text: K,
          },
        ]),
        ve.toLowerCase())
      ) {
        case "help":
          M([
            {
              type: "ok",
              text: "Available commands:",
            },
            {
              type: "out",
              text: "  ls               — list files in current directory",
            },
            {
              type: "out",
              text: "  pwd              — print working directory",
            },
            {
              type: "out",
              text: "  cd <dir>         — change directory (cd .. to go up)",
            },
            {
              type: "out",
              text: "  cat <file>       — view / open a file in the editor",
            },
            {
              type: "out",
              text: "  open <file>      — same as cat",
            },
            {
              type: "out",
              text: "  whoami           — who am I?",
            },
            {
              type: "out",
              text: "  echo <text>      — print text",
            },
            {
              type: "out",
              text: "  date             — show current date & time",
            },
            {
              type: "out",
              text: "  git log          — show recent commits",
            },
            {
              type: "out",
              text: "  python --version — show Python version",
            },
            {
              type: "out",
              text: "  clear            — clear the terminal",
            },
          ]);
          break;
        case "ls":
          M([
            {
              type: "ok",
              text: ou.join("   "),
            },
          ]);
          break;
        case "pwd":
          M([
            {
              type: "ok",
              text:
                `/home/suryansh/${E === "~" ? "" : E}`.replace(/\/$/, "") ||
                "/home/suryansh",
            },
          ]);
          break;
        case "cd":
          !oe || oe === "~" || oe === "/"
            ? (h("~"),
              M([
                {
                  type: "out",
                  text: "",
                },
              ]))
            : oe === ".."
              ? (h("~"),
                M([
                  {
                    type: "out",
                    text: "",
                  },
                ]))
              : M([
                  {
                    type: "err",
                    text: `cd: ${oe}: No such directory`,
                  },
                ]);
          break;
        case "cat":
        case "open": {
          if (!oe) {
            M([
              {
                type: "err",
                text: `${ve}: missing operand`,
              },
            ]);
            break;
          }
          const ye = Fp[oe];
          ye
            ? (M([
                {
                  type: "ok",
                  text: `Opening ${oe} in editor…`,
                },
              ]),
              setTimeout(() => m(ye), 300))
            : M([
                {
                  type: "err",
                  text: `${ve}: ${oe}: No such file`,
                },
                {
                  type: "out",
                  text: `Try: ${ou.join(", ")}`,
                },
              ]);
          break;
        }
        case "whoami":
          M([
            {
              type: "ok",
              text: "suryansh",
            },
            {
              type: "out",
              text: "Junior Software Developer @ EduVanceAI",
            },
            {
              type: "out",
              text: "Backend Engineer · AI/ML Developer · Data Scientist",
            },
            {
              type: "out",
              text: "India 🇮🇳  ·  24cs3055@rgipt.ac.in",
            },
          ]);
          break;
        case "echo":
          M([
            {
              type: "ok",
              text: oe,
            },
          ]);
          break;
        case "date":
          M([
            {
              type: "ok",
              text: new Date().toString(),
            },
          ]);
          break;
        case "clear":
          I([]);
          break;
        case "git":
          oe.startsWith("log")
            ? M([
                {
                  type: "out",
                  text: "a3f1c2e (HEAD → main) feat: add RAG pipeline with LangChain",
                },
                {
                  type: "out",
                  text: "b7d4a1f fix: optimise FastAPI response time",
                },
                {
                  type: "out",
                  text: "d1f8c4a chore: deploy to AWS ECS",
                },
                {
                  type: "out",
                  text: "e2a0b5c feat: PostgreSQL connection pooling",
                },
              ])
            : M(
                oe === "status"
                  ? [
                      {
                        type: "ok",
                        text: "On branch main",
                      },
                      {
                        type: "out",
                        text: "Your branch is up to date with origin/main.",
                      },
                    ]
                  : [
                      {
                        type: "out",
                        text: "git: try 'git log' or 'git status'",
                      },
                    ],
              );
          break;
        case "python":
        case "python3":
          M(
            oe === "--version" || oe === "-V"
              ? [
                  {
                    type: "ok",
                    text: "Python 3.11.0",
                  },
                ]
              : [
                  {
                    type: "out",
                    text: "Python interactive mode not available here.",
                  },
                ],
          );
          break;
        default:
          M([
            {
              type: "err",
              text: `command not found: ${ve} — type 'help' for commands`,
            },
          ]);
      }
    };
  (A.useEffect(() => {
    y.current && (y.current.scrollTop = y.current.scrollHeight);
  }, [c]),
    A.useEffect(() => {
      var U;
      (U = F.current) == null || U.focus();
    }, []));
  const R = (U) => {
      if (U.key === "Enter") (B(g), k(""));
      else if (U.key === "ArrowUp") {
        U.preventDefault();
        const K = Math.min(b + 1, j.length - 1);
        (T(K), j[K] && k(j[K]));
      } else if (U.key === "ArrowDown") {
        U.preventDefault();
        const K = Math.max(b - 1, -1);
        (T(K), k(K === -1 ? "" : j[K]));
      }
    },
    S = {
      cmd: "text-vscode-bright",
      out: "text-vscode-dim",
      ok: "text-vscode-green",
      err: "text-vscode-red",
      info: "text-vscode-blue",
    },
    V = () =>
      o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            className: "text-vscode-green",
            children: "suryansh",
          }),
          o.jsx("span", {
            className: "text-vscode-dim",
            children: "@portfolio",
          }),
          o.jsx("span", {
            className: "text-vscode-dim",
            children: ":",
          }),
          o.jsx("span", {
            className: "text-vscode-green",
            children: E,
          }),
          o.jsx("span", {
            className: "text-vscode-dim",
            children: "$",
          }),
          o.jsx("span", {
            children: " ",
          }),
        ],
      });
  return o.jsxs("div", {
    className:
      "bg-vscode-bg2 border-t border-vscode-border flex flex-col h-[220px] animate-slide-up flex-shrink-0",
    children: [
      o.jsxs("div", {
        className:
          "flex items-center gap-2 px-3 py-1 border-b border-vscode-border bg-vscode-bg3 flex-shrink-0",
        children: [
          ["TERMINAL", "PROBLEMS", "OUTPUT"].map((U, K) =>
            o.jsx(
              "button",
              {
                className: `text-xs px-2 py-0.5 rounded transition-colors ${K === 0 ? "text-vscode-text bg-white/[0.07]" : "text-vscode-dim hover:bg-white/[0.05]"}`,
                children: U,
              },
              U,
            ),
          ),
          o.jsx("button", {
            onClick: a,
            className:
              "ml-auto text-vscode-dim hover:text-vscode-text text-sm transition-colors",
            children: "✕",
          }),
        ],
      }),
      o.jsx("div", {
        ref: y,
        onClick: () => {
          var U;
          return (U = F.current) == null ? void 0 : U.focus();
        },
        className:
          "flex-1 overflow-y-auto thin-scroll px-3.5 pt-2 pb-1 text-xs leading-[1.8] cursor-text font-mono",
        children: c.map((U, K) =>
          o.jsxs(
            "div",
            {
              children: [
                U.type === "cmd" && o.jsx(V, {}),
                o.jsx("span", {
                  className: S[U.type] ?? "text-vscode-dim",
                  children: U.text,
                }),
              ],
            },
            K,
          ),
        ),
      }),
      o.jsxs("div", {
        className: "flex items-center gap-1 px-3.5 pb-2 font-mono text-xs",
        children: [
          o.jsx(V, {}),
          o.jsx("input", {
            ref: F,
            value: g,
            onChange: (U) => k(U.target.value),
            onKeyDown: R,
            autoComplete: "off",
            spellCheck: !1,
            className:
              "flex-1 bg-transparent border-none outline-none text-vscode-bright text-xs font-mono",
          }),
          o.jsx("span", {
            className: "term-cursor",
          }),
        ],
      }),
    ],
  });
}

function ff() {
  const a = () => {
      const I = new Date();
      return `${String(I.getHours()).padStart(2, "0")}:${String(I.getMinutes()).padStart(2, "0")}`;
    },
    [m, c] = A.useState(a);
  return (
    A.useEffect(() => {
      const I = setInterval(() => c(a()), 3e4);
      return () => clearInterval(I);
    }, []),
    m
  );
}

function hf({ themeId: a, onSelect: m }) {
  const [c, I] = A.useState(!1),
    [g, k] = A.useState({
      bottom: 0,
      right: 0,
    }),
    E = A.useRef(),
    h = A.useRef();
  A.useEffect(() => {
    if (!c || !E.current) return;
    const b = requestAnimationFrame(() => {
      if (!E.current || !h.current) return;
      const T = E.current.getBoundingClientRect();
      k({
        bottom: window.innerHeight - T.top + 8,
        right: window.innerWidth - T.right,
      });
    });
    return () => cancelAnimationFrame(b);
  }, [c]);
  const j = A.useCallback((b) => {
    var F, M;
    const T = (F = E.current) == null ? void 0 : F.contains(b.target),
      y = (M = h.current) == null ? void 0 : M.contains(b.target);
    !T && !y && I(!1);
  }, []);
  A.useEffect(() => {
    if (c)
      return (
        document.addEventListener("pointerdown", j, !0),
        () => document.removeEventListener("pointerdown", j, !0)
      );
  }, [c, j]);
  const H = mn.find((b) => b.id === a) ?? mn[0];
  return o.jsxs(o.Fragment, {
    children: [
      o.jsxs("button", {
        ref: E,
        onClick: () => I((b) => !b),
        className: `flex items-center gap-1.5 px-1.5 py-0.5 rounded-sm\r
                   hover:bg-white/15 transition-colors\r
                   text-[11px] text-white/85 whitespace-nowrap`,
        title: "Change theme",
        children: [
          o.jsx("span", {
            children: H.icon,
          }),
          o.jsx("span", {
            children: H.name,
          }),
          o.jsx("span", {
            className: "opacity-50 text-[9px]",
            children: c ? "▼" : "▲",
          }),
        ],
      }),
      c &&
        Xs.createPortal(
          o.jsxs("div", {
            ref: h,
            className: "fixed w-52 rounded overflow-hidden border z-[9999]",
            style: {
              bottom: g.bottom,
              right: g.right,
              background: "var(--bg3)",
              borderColor: "var(--border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
            },
            children: [
              o.jsx("div", {
                className:
                  "px-3 py-2 text-[10px] font-bold tracking-widest uppercase",
                style: {
                  color: "var(--dim)",
                  borderBottom: "1px solid var(--border)",
                },
                children: "Color Theme",
              }),
              mn.map((b) => {
                const T = b.id === a;
                return o.jsxs(
                  "button",
                  {
                    onClick: () => {
                      (m(b.id), I(!1));
                    },
                    className: `w-full flex items-center gap-3 px-3 py-2 text-left\r
                           text-[12px] transition-colors cursor-pointer`,
                    style: {
                      background: T ? "rgba(255,255,255,0.08)" : "transparent",
                      color: T ? "var(--bright)" : "var(--text)",
                      borderLeft: T
                        ? `2px solid ${b.accent}`
                        : "2px solid transparent",
                    },
                    onMouseEnter: (y) => {
                      T ||
                        (y.currentTarget.style.background =
                          "rgba(255,255,255,0.04)");
                    },
                    onMouseLeave: (y) => {
                      T || (y.currentTarget.style.background = "transparent");
                    },
                    children: [
                      o.jsx("span", {
                        className: "w-4 h-4 rounded-full flex-shrink-0",
                        style: {
                          background: b.accent,
                          boxShadow: `0 0 0 2px ${b.accent}44`,
                        },
                      }),
                      o.jsxs("span", {
                        className: "flex-1",
                        children: [b.icon, " ", b.name],
                      }),
                      T &&
                        o.jsx("span", {
                          className: "text-[10px]",
                          style: {
                            color: b.accent,
                          },
                          children: "✓",
                        }),
                    ],
                  },
                  b.id,
                );
              }),
            ],
          }),
          document.body,
        ),
    ],
  });
}

function iu({
  activeFile: a,
  onToggleTerm: m,
  themeId: c,
  onThemeChange: I,
  copilotOpen: g,
  onToggleCopilot: k,
}) {
  const E = ff(),
    h = Zt.find((j) => j.id === a);
  return o.jsxs("div", {
    style: {
      gridArea: "status",
      background: "var(--blue2)",
    },
    className:
      "flex items-center px-2 sm:px-3 text-[10px] sm:text-[11px] text-white/85 gap-1 sm:gap-3 select-none overflow-hidden",
    children: [
      o.jsxs(Xt, {
        onClick: m,
        className: "flex-shrink-0",
        children: [
          "⚠ 0 ",
          o.jsx("span", {
            className: "hidden xs:inline",
            children: "  ⊗ 0",
          }),
        ],
      }),
      o.jsx(Xt, {
        className: "flex-shrink-0 hidden sm:flex",
        children: "⎇ main",
      }),
      o.jsx(Xt, {
        className: "hidden md:flex",
        children: "🔄 Suryansh's Portfolio",
      }),
      o.jsxs("div", {
        className: "ml-auto flex items-center gap-0.5 sm:gap-2 flex-shrink-0",
        children: [
          o.jsx(Xt, {
            onClick: k,
            className: "flex-shrink-0",
            children: "Copilot",
          }),
          h &&
            o.jsx(Xt, {
              className: "hidden sm:flex",
              children: h.lang,
            }),
          o.jsx(Xt, {
            className: "hidden lg:flex",
            children: "UTF-8",
          }),
          o.jsx(Xt, {
            className: "hidden lg:flex",
            children: "Prettier",
          }),
          o.jsx(hf, {
            themeId: c,
            onSelect: I,
          }),
          o.jsx(Xt, {
            className: "text-white/70 flex-shrink-0",
            children: E,
          }),
        ],
      }),
    ],
  });
}

function Xt({ children: a, onClick: m, className: c = "" }) {
  return o.jsx("button", {
    onClick: m,
    className: `flex items-center gap-1 px-1 sm:px-1.5 py-0.5 rounded-sm
                  hover:bg-white/15 active:bg-white/20
                  transition-colors whitespace-nowrap leading-none ${c}`,
    children: a,
  });
}

function mf() {
  return o.jsx("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#9370db",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: o.jsx("path", {
      d: "M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z",
    }),
  });
}
const xf = [
  {
    id: "copilot",
    name: "Open Suryansh's Copilot",
    hint: "Ctrl+Shift+C",
    isAction: !0,
    icon: o.jsx(mf, {}),
    color: "#b48eff",
  },
];

function au({
  query: a,
  onQueryChange: m,
  onSelect: c,
  onClose: I,
  onToggleCopilot: g,
}) {
  const k = A.useRef(),
    [E, h] = A.useState(0);
  A.useEffect(() => {
    setTimeout(() => {
      var y;
      return (y = k.current) == null ? void 0 : y.focus();
    }, 50);
  }, []);
  const j = Zt.filter((y) => y.name.toLowerCase().includes(a.toLowerCase())),
    H = xf.filter((y) => y.name.toLowerCase().includes(a.toLowerCase())),
    b = [...H, ...j];
  (A.useEffect(() => {
    h(0);
  }, [a]),
    A.useEffect(() => {
      const y = (F) => {
        if (
          (F.key === "ArrowDown" &&
            (F.preventDefault(), h((M) => Math.min(M + 1, b.length - 1))),
          F.key === "ArrowUp" &&
            (F.preventDefault(), h((M) => Math.max(M - 1, 0))),
          F.key === "Enter")
        ) {
          F.preventDefault();
          const M = b[E];
          M && T(M);
        }
      };
      return (
        window.addEventListener("keydown", y),
        () => window.removeEventListener("keydown", y)
      );
    }, [E, b]));
  const T = (y) => {
    y.isAction ? (g == null || g(), I()) : c(y.id);
  };
  return o.jsx("div", {
    className: `fixed inset-0 bg-black/55 z-50 flex items-start justify-center pt-20
                 backdrop-blur-sm animate-fade-in`,
    onClick: (y) => y.target === y.currentTarget && I(),
    children: o.jsxs("div", {
      className: `bg-[#2d2d30] border border-white/15 rounded-md w-[540px] overflow-hidden
                      shadow-[0_24px_70px_rgba(0,0,0,0.7)]`,
      children: [
        o.jsxs("div", {
          className:
            "flex items-center gap-2 px-3.5 py-2.5 border-b border-white/[0.07]",
          children: [
            o.jsx("span", {
              className: "text-vscode-dim text-sm",
              children: "›",
            }),
            o.jsx("input", {
              ref: k,
              value: a,
              onChange: (y) => m(y.target.value),
              placeholder: "Go to file or run command...",
              className: `flex-1 bg-transparent border-none outline-none text-vscode-bright
                       font-mono text-[14px] placeholder:text-vscode-dim`,
            }),
            o.jsx("kbd", {
              className:
                "text-[10px] px-1.5 py-0.5 rounded border hidden sm:block",
              style: {
                background: "rgba(255,255,255,0.06)",
                borderColor: "var(--border)",
                color: "var(--dim)",
              },
              children: "Esc",
            }),
          ],
        }),
        o.jsxs("div", {
          className: "max-h-[320px] overflow-y-auto thin-scroll",
          children: [
            H.length > 0 &&
              o.jsxs(o.Fragment, {
                children: [
                  o.jsx("div", {
                    className:
                      "px-3.5 py-1 text-[10px] tracking-widest uppercase",
                    style: {
                      color: "var(--dim)",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    },
                    children: "Commands",
                  }),
                  H.map((y, F) =>
                    o.jsxs(
                      "button",
                      {
                        onClick: () => T(y),
                        className:
                          "w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs text-left transition-colors",
                        style: {
                          background:
                            E === F ? "rgba(110,64,201,0.18)" : "transparent",
                          borderLeft:
                            E === F
                              ? "2px solid #6E40C9"
                              : "2px solid transparent",
                          color: y.color || "var(--text)",
                        },
                        onMouseEnter: () => h(F),
                        children: [
                          o.jsx("span", {
                            className: "flex-shrink-0",
                            children: y.icon,
                          }),
                          o.jsx("span", {
                            className: "flex-1 font-medium",
                            children: y.name,
                          }),
                          y.hint &&
                            o.jsx("kbd", {
                              className:
                                "text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0",
                              style: {
                                background: "rgba(255,255,255,0.06)",
                                borderColor: "var(--border)",
                                color: "var(--dim)",
                              },
                              children: y.hint,
                            }),
                        ],
                      },
                      y.id,
                    ),
                  ),
                ],
              }),
            j.length > 0 &&
              o.jsxs(o.Fragment, {
                children: [
                  o.jsx("div", {
                    className:
                      "px-3.5 py-1 text-[10px] tracking-widest uppercase",
                    style: {
                      color: "var(--dim)",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    },
                    children: "Files",
                  }),
                  j.map((y, F) => {
                    const M = Qo[y.id],
                      B = H.length + F;
                    return o.jsxs(
                      "button",
                      {
                        onClick: () => T(y),
                        className:
                          "w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-left transition-colors",
                        style: {
                          background:
                            E === B ? "rgba(255,255,255,0.08)" : "transparent",
                          borderLeft:
                            E === B
                              ? "2px solid var(--blue)"
                              : "2px solid transparent",
                          color: "var(--text)",
                        },
                        onMouseEnter: () => h(B),
                        children: [
                          o.jsx("span", {
                            className: "flex-shrink-0",
                            children: o.jsx(M, {}),
                          }),
                          o.jsx("span", {
                            className: "flex-1",
                            children: y.name,
                          }),
                          o.jsx("span", {
                            className: "text-vscode-dim text-[11px]",
                            children:
                              y.folder === "root" ? "./" : y.folder + "/",
                          }),
                        ],
                      },
                      y.id,
                    );
                  }),
                ],
              }),
            b.length === 0 &&
              o.jsxs("div", {
                className: "px-3.5 py-6 text-center text-[12px]",
                style: {
                  color: "var(--dim)",
                },
                children: ['No results for "', a, '"'],
              }),
          ],
        }),
        o.jsxs("div", {
          className:
            "px-3.5 py-1.5 border-t border-white/[0.05] flex items-center gap-3",
          style: {
            background: "rgba(0,0,0,0.2)",
          },
          children: [
            o.jsx("span", {
              className: "text-[10px]",
              style: {
                color: "var(--dim)",
              },
              children: "↑↓ navigate  ·  ↵ open  ·  Esc close",
            }),
            o.jsx("span", {
              className: "ml-auto text-[10px]",
              style: {
                color: "var(--dim)",
              },
              children: 'Tip: type "copilot" to open AI chat',
            }),
          ],
        }),
      ],
    }),
  });
}

function cu({ toasts: a }) {
  return o.jsx("div", {
    className:
      "fixed bottom-8 right-5 z-50 flex flex-col gap-2 pointer-events-none",
    children: a.map((m) =>
      o.jsxs(
        "div",
        {
          className: `bg-[#2d2d30] border border-white/10 rounded px-4 py-2.5 text-xs
                     text-vscode-text flex items-center gap-2 animate-toast-in
                     shadow-[0_8px_24px_rgba(0,0,0,0.4)] min-w-[220px] pointer-events-auto`,
          children: [
            o.jsx("span", {
              className: "text-sm flex-shrink-0",
              children: m.icon,
            }),
            o.jsx("span", {
              children: m.msg,
            }),
          ],
        },
        m.id,
      ),
    ),
  });
}
const gf = () => {
    const a = document.createElement("a");
    ((a.href = "/Suryansh_Resume.pdf"),
      (a.download = "Suryansh_Resume.pdf"),
      document.body.appendChild(a),
      a.click(),
      document.body.removeChild(a));
  },
  vf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z",
      }),
    }),
  yf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      }),
    }),
  wf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
      }),
    }),
  kf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M11.654 0v2.924H9.12V0h2.534zm-5.41 1.21v2.13H4.118V1.21H6.244zm10.91 0v2.13h-2.127V1.21h2.127zm-5.5 3.584v3.327H8.73V4.794h2.924zm-5.5 1.332v2.522H4.03V6.126h2.124zm11 0v2.522h-2.127V6.126h2.127zM.63 6.244v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM11.654 9.12v2.924H9.12V9.12h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 10.452v2.522H4.118v-2.522H6.244zm11 0v2.522h-2.127v-2.522h2.127zM11.654 13.956v2.924H9.12v-2.924h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 15.288v2.52H4.118v-2.52H6.244zm11 0v2.52h-2.127v-2.52h2.127zM11.654 18.752v3.324H9.12v-3.324h2.534zm-5.41 1.33v2.13H4.118v-2.13H6.244zm10.91 0v2.13h-2.127v-2.13h2.127zM11.654 21.076V24H9.12v-2.924h2.534z",
      }),
    }),
  bf = [
    {
      icon: o.jsx(vf, {}),
      label: "GitHub",
      href: "https://github.com/suryanshbst",
      color: "#e6edf3",
    },
    {
      icon: o.jsx(yf, {}),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suryansh-75247a31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      color: "#0a66c2",
    },
  ];

function jf({
  activeFile: a,
  onNavigate: m,
  onClose: c,
  themeId: I,
  onThemeChange: g,
  onToggleCopilot: k,
}) {
  const [E, h] = A.useState("explorer");
  A.useEffect(() => {
    const b = (T) => {
      T.key === "Escape" && c();
    };
    return (
      window.addEventListener("keydown", b),
      () => window.removeEventListener("keydown", b)
    );
  }, [c]);
  const j = (b) => {
      if (b.download) {
        (gf(), c());
        return;
      }
      (m(b.id), c());
    },
    H = () => {
      (k == null || k(), c());
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("div", {
        className: "fixed inset-0 z-40",
        style: {
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(2px)",
        },
        onClick: c,
      }),
      o.jsxs("div", {
        className: "fixed top-0 left-0 bottom-0 z-50 flex flex-col",
        style: {
          width: "260px",
          background: "var(--bg2)",
          borderRight: "1px solid var(--border)",
          boxShadow: "8px 0 32px rgba(0,0,0,0.5)",
          animation: "slideInLeft 0.22s ease",
        },
        children: [
          o.jsxs("div", {
            className:
              "flex items-center justify-between px-4 py-3 flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border)",
              background: "var(--bg3)",
            },
            children: [
              o.jsx("span", {
                className: "text-[11px] font-bold tracking-[0.15em] uppercase",
                style: {
                  color: "var(--dim)",
                },
                children: E === "explorer" ? "Explorer" : "Settings",
              }),
              o.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  o.jsx(uu, {
                    active: E === "settings",
                    onClick: () =>
                      h((b) => (b === "settings" ? "explorer" : "settings")),
                    title: "Settings",
                    children: o.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.6",
                      children: [
                        o.jsx("circle", {
                          cx: "12",
                          cy: "12",
                          r: "3",
                        }),
                        o.jsx("path", {
                          d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
                        }),
                      ],
                    }),
                  }),
                  o.jsx(uu, {
                    onClick: c,
                    title: "Close",
                    children: o.jsx("svg", {
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: o.jsx("path", {
                        d: "M18 6 6 18M6 6l12 12",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex-1 overflow-y-auto thin-scroll",
            children: [
              E === "explorer" &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsx("div", {
                      className:
                        "px-4 py-2 text-[10px] font-semibold tracking-widest uppercase",
                      style: {
                        color: "var(--dim)",
                      },
                      children: "📁 suryansh",
                    }),
                    o.jsx("div", {
                      className: "pb-2",
                      children: Zt.map((b) => {
                        const T = Qo[b.id],
                          y = a === b.id && !b.download,
                          F = !!b.download;
                        return o.jsxs(
                          "button",
                          {
                            onClick: () => j(b),
                            className:
                              "w-full flex items-center gap-2.5 px-6 py-2.5 text-xs text-left border-l-2 transition-all group",
                            style: {
                              color: y ? "var(--bright)" : "var(--dim)",
                              background: y
                                ? "rgba(255,255,255,0.07)"
                                : "transparent",
                              borderLeftColor: y
                                ? "var(--blue2)"
                                : "transparent",
                            },
                            onMouseEnter: (M) => {
                              (y ||
                                (M.currentTarget.style.background =
                                  "rgba(255,255,255,0.05)"),
                                F
                                  ? ((M.currentTarget.style.color = "#f44336"),
                                    (M.currentTarget.style.borderLeftColor =
                                      "#f44336"))
                                  : (M.currentTarget.style.color =
                                      "var(--text)"));
                            },
                            onMouseLeave: (M) => {
                              y ||
                                ((M.currentTarget.style.background =
                                  "transparent"),
                                (M.currentTarget.style.color = "var(--dim)"),
                                (M.currentTarget.style.borderLeftColor =
                                  "transparent"));
                            },
                            children: [
                              T &&
                                o.jsx("span", {
                                  className: "flex-shrink-0",
                                  children: o.jsx(T, {}),
                                }),
                              o.jsx("span", {
                                className: "flex-1",
                                children: b.name,
                              }),
                              y &&
                                o.jsx("span", {
                                  className: "text-[9px]",
                                  style: {
                                    color: "var(--blue2)",
                                  },
                                  children: "●",
                                }),
                              F &&
                                o.jsx("span", {
                                  className:
                                    "text-[11px] opacity-0 group-hover:opacity-100 transition-opacity",
                                  children: "↓",
                                }),
                            ],
                          },
                          b.id,
                        );
                      }),
                    }),
                    o.jsx("div", {
                      className: "px-4 pb-4",
                      children: o.jsxs("button", {
                        onClick: H,
                        className:
                          "w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-md transition-all",
                        style: {
                          color: "var(--dim)",
                          background: "rgba(110,64,201,0.07)",
                          border: "1px solid rgba(110,64,201,0.2)",
                          textAlign: "left",
                        },
                        onMouseEnter: (b) => {
                          ((b.currentTarget.style.background =
                            "rgba(110,64,201,0.14)"),
                            (b.currentTarget.style.borderColor =
                              "rgba(110,64,201,0.4)"),
                            (b.currentTarget.style.color = "#b48eff"));
                        },
                        onMouseLeave: (b) => {
                          ((b.currentTarget.style.background =
                            "rgba(110,64,201,0.07)"),
                            (b.currentTarget.style.borderColor =
                              "rgba(110,64,201,0.2)"),
                            (b.currentTarget.style.color = "var(--dim)"));
                        },
                        children: [
                          o.jsx("svg", {
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#9370db",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: o.jsx("path", {
                              d: "M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z",
                            }),
                          }),
                          o.jsx("span", {
                            className: "flex-1",
                            children: "Ask Suryansh's Copilot",
                          }),
                          o.jsx("span", {
                            className: "text-[10px]",
                            style: {
                              color: "var(--dim)",
                            },
                            children: "AI",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              E === "settings" &&
                o.jsxs("div", {
                  className: "py-2",
                  children: [
                    o.jsx("div", {
                      className: "px-4 pt-3 pb-2",
                      children: o.jsxs("button", {
                        onClick: H,
                        className:
                          "w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] rounded-md transition-all",
                        style: {
                          color: "#b48eff",
                          background: "rgba(110,64,201,0.1)",
                          border: "1px solid rgba(110,64,201,0.25)",
                          textAlign: "left",
                        },
                        onMouseEnter: (b) => {
                          b.currentTarget.style.background =
                            "rgba(110,64,201,0.18)";
                        },
                        onMouseLeave: (b) => {
                          b.currentTarget.style.background =
                            "rgba(110,64,201,0.1)";
                        },
                        children: [
                          o.jsx("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#b48eff",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: o.jsx("path", {
                              d: "M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z",
                            }),
                          }),
                          o.jsx("span", {
                            className: "flex-1 font-medium",
                            children: "Open Suryansh's Copilot",
                          }),
                          o.jsx("span", {
                            className: "text-[10px]",
                            style: {
                              color: "rgba(180,142,255,0.55)",
                            },
                            children: "AI ✨",
                          }),
                        ],
                      }),
                    }),
                    o.jsx(Wo, {}),
                    o.jsx(Ks, {
                      children: "🎨 Color Theme",
                    }),
                    mn.map((b) => {
                      const T = b.id === I;
                      return o.jsxs(
                        "button",
                        {
                          onClick: () => (g == null ? void 0 : g(b.id)),
                          className:
                            "w-full flex items-center gap-3 px-5 py-2.5 text-[13px] text-left transition-colors border-l-2 cursor-pointer",
                          style: {
                            background: T
                              ? "rgba(255,255,255,0.07)"
                              : "transparent",
                            color: T ? "var(--bright)" : "var(--text)",
                            borderColor: T ? b.accent : "transparent",
                          },
                          onMouseEnter: (y) => {
                            T ||
                              (y.currentTarget.style.background =
                                "rgba(255,255,255,0.04)");
                          },
                          onMouseLeave: (y) => {
                            T ||
                              (y.currentTarget.style.background =
                                "transparent");
                          },
                          children: [
                            o.jsx("span", {
                              className: "w-4 h-4 rounded-full flex-shrink-0",
                              style: {
                                background: b.accent,
                                boxShadow: `0 0 0 2px ${b.accent}44`,
                              },
                            }),
                            o.jsxs("span", {
                              className: "flex-1",
                              children: [b.icon, " ", b.name],
                            }),
                            T &&
                              o.jsx("span", {
                                className: "text-[11px]",
                                style: {
                                  color: b.accent,
                                },
                                children: "✓",
                              }),
                          ],
                        },
                        b.id,
                      );
                    }),
                    o.jsx(Wo, {}),
                    o.jsx(Ks, {
                      children: "⌨️ Keyboard Shortcuts",
                    }),
                    [
                      ["Ctrl+P", "Command palette"],
                      ["Ctrl+B", "Toggle sidebar"],
                      ["Ctrl+`", "Toggle terminal"],
                      ["Esc", "Close overlay"],
                      ["↑ / ↓", "Terminal history"],
                    ].map(([b, T]) =>
                      o.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-3 px-5 py-1.5",
                          children: [
                            o.jsx("kbd", {
                              className:
                                "text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0",
                              style: {
                                background: "rgba(255,255,255,0.06)",
                                borderColor: "var(--border)",
                                color: "var(--yel)",
                              },
                              children: b,
                            }),
                            o.jsx("span", {
                              className: "text-[12px]",
                              style: {
                                color: "var(--dim)",
                              },
                              children: T,
                            }),
                          ],
                        },
                        b,
                      ),
                    ),
                    o.jsx(Wo, {}),
                    o.jsx(Ks, {
                      children: "🌐 Links",
                    }),
                    bf.map(({ icon: b, label: T, href: y, color: F }) =>
                      o.jsxs(
                        "a",
                        {
                          href: y,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "flex items-center gap-3 px-5 py-2.5 text-[13px] no-underline transition-all",
                          style: {
                            color: "var(--dim)",
                          },
                          onMouseEnter: (M) => {
                            ((M.currentTarget.style.color = "var(--bright)"),
                              (M.currentTarget.style.background = F + "15"));
                          },
                          onMouseLeave: (M) => {
                            ((M.currentTarget.style.color = "var(--dim)"),
                              (M.currentTarget.style.background =
                                "transparent"));
                          },
                          children: [
                            o.jsx("span", {
                              style: {
                                color: F,
                                display: "flex",
                                alignItems: "center",
                                flexShrink: 0,
                              },
                              children: b,
                            }),
                            o.jsx("span", {
                              className: "flex-1",
                              children: T,
                            }),
                            o.jsx("span", {
                              className: "text-[11px] opacity-40",
                              children: "↗",
                            }),
                          ],
                        },
                        T,
                      ),
                    ),
                    o.jsx(Wo, {}),
                    o.jsxs("div", {
                      className: "px-5 py-3",
                      children: [
                        o.jsx("p", {
                          className: "text-[11px] mb-1",
                          style: {
                            color: "var(--dim)",
                          },
                          children: "Portfolio v3.0 · React + Vite + Tailwind",
                        }),
                        o.jsxs("p", {
                          className: "text-[11px]",
                          style: {
                            color: "var(--dim)",
                          },
                          children: [
                            "Made with 💜 by",
                            " ",
                            o.jsx("a", {
                              href: "https://github.com/suryanshbst",
                              target: "_blank",
                              rel: "noreferrer",
                              style: {
                                color: "var(--blue)",
                              },
                              children: "Suryansh",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          o.jsxs("div", {
            className:
              "px-4 py-3 flex items-center gap-2 text-[11px] flex-shrink-0",
            style: {
              borderTop: "1px solid var(--border)",
              color: "var(--dim)",
            },
            children: [
              o.jsxs("svg", {
                viewBox: "0 0 24 24",
                width: "13",
                height: "13",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  o.jsx("circle", {
                    cx: "6",
                    cy: "6",
                    r: "3",
                  }),
                  o.jsx("circle", {
                    cx: "6",
                    cy: "18",
                    r: "3",
                  }),
                  o.jsx("circle", {
                    cx: "18",
                    cy: "12",
                    r: "3",
                  }),
                  o.jsx("path", {
                    d: "M6 9v6M9 12h6",
                  }),
                ],
              }),
              o.jsx("span", {
                style: {
                  color: "var(--text)",
                },
                children: "⎇ main",
              }),
              o.jsx("span", {
                className: "ml-auto",
                style: {
                  color: "var(--gcm)",
                },
                children: "↑1",
              }),
            ],
          }),
        ],
      }),
      o.jsx("style", {
        children: `
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `,
      }),
    ],
  });
}

function uu({ children: a, onClick: m, title: c, active: I = !1 }) {
  return o.jsx("button", {
    onClick: m,
    title: c,
    className:
      "w-7 h-7 flex items-center justify-center rounded transition-colors",
    style: {
      color: I ? "var(--bright)" : "rgba(255,255,255,0.4)",
      background: I ? "rgba(255,255,255,0.08)" : "transparent",
    },
    onMouseEnter: (g) => {
      ((g.currentTarget.style.color = "var(--bright)"),
        I || (g.currentTarget.style.background = "rgba(255,255,255,0.06)"));
    },
    onMouseLeave: (g) => {
      ((g.currentTarget.style.color = I
        ? "var(--bright)"
        : "rgba(255,255,255,0.4)"),
        I || (g.currentTarget.style.background = "transparent"));
    },
    children: a,
  });
}

function Ks({ children: a }) {
  return o.jsx("div", {
    className:
      "px-5 pt-3 pb-1.5 text-[10px] font-bold tracking-[0.15em] uppercase",
    style: {
      color: "var(--dim)",
    },
    children: a,
  });
}

function Wo() {
  return o.jsx("div", {
    className: "mx-4 my-1",
    style: {
      borderTop: "1px solid var(--border)",
    },
  });
}
const vu = async (a, m) => {
    try {
      await fetch("/api/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: a,
          data: m,
        }),
      });
    } catch {}
  },
  $o = (() => {
    try {
      let a = sessionStorage.getItem("vsid");
      return (
        a ||
          ((a = Math.random().toString(36).slice(2, 8).toUpperCase()),
          sessionStorage.setItem("vsid", a)),
        a
      );
    } catch {
      return Math.random().toString(36).slice(2, 8).toUpperCase();
    }
  })(),
  Zs = () => {
    const a = navigator.userAgent,
      m = /Mobi|Android/i.test(a) ? "Mobile" : "Desktop",
      c = /Edg/i.test(a)
        ? "Edge"
        : /Chrome/i.test(a)
          ? "Chrome"
          : /Firefox/i.test(a)
            ? "Firefox"
            : /Safari/i.test(a)
              ? "Safari"
              : "Browser",
      I = /Windows/i.test(a)
        ? "Windows"
        : /Mac/i.test(a)
          ? "Mac"
          : /Linux/i.test(a)
            ? "Linux"
            : /Android/i.test(a)
              ? "Android"
              : /iPhone|iPad/i.test(a)
                ? "iOS"
                : "Unknown",
      g = `${window.screen.width}x${window.screen.height}`,
      k = navigator.language || "unknown";
    return `${m} · ${c} · ${I} · ${g} · ${k}`;
  },
  yu = () => {
    const a = document.referrer || "direct";
    try {
      const m = new URL(a).hostname;
      return m.includes("github")
        ? `GitHub (${a})`
        : m.includes("linkedin")
          ? "LinkedIn"
          : m.includes("reddit")
            ? "Reddit"
            : m.includes("instagram")
              ? "Instagram"
              : m.includes("twitter") || m.includes("x.com")
                ? "Twitter/X"
                : m.includes("google")
                  ? "Google"
                  : a;
    } catch {
      return a;
    }
  },
  wu = () =>
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " IST",
  Ir = {};
let hn = null,
  Ar = null;
const Sf = (a) => {
    if (hn && Ar) {
      const m = Math.round((Date.now() - Ar) / 1e3);
      Ir[hn] = (Ir[hn] || 0) + m;
    }
    ((hn = a), (Ar = Date.now()));
  },
  Nf = () => {
    if (hn && Ar) {
      const a = Math.round((Date.now() - Ar) / 1e3);
      Ir[hn] = (Ir[hn] || 0) + a;
    }
    return (
      Object.entries(Ir)
        .map(([a, m]) => `${a}: ${m}s`)
        .join(" | ") || "none"
    );
  },
  du = async (a, m) => {
    m != null &&
      m.trim() &&
      vu("contact_submissions", {
        session_id: $o,
        time: wu(),
        device: Zs(),
        referrer: yu(),
        field: a,
        value: m,
        note: "Captured on field blur — user may not have submitted",
      });
  };
let pu = !1;
const Cf = async () => {
    pu ||
      ((pu = !0),
      vu("visits", {
        session_id: $o,
        time: wu(),
        device: Zs(),
        referrer: yu(),
        note: "Page load",
      }),
      window.addEventListener("beforeunload", () => {
        const a = Nf();
        fetch("/api/log", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            table: "visits",
            data: {
              session_id: $o,
              note: `Page summary: ${a}`,
            },
          }),
          keepalive: !0,
        });
      }));
  },
  Ef = `You are Suryansh's Copilot, embedded in his VS Code-themed portfolio.
You know his tech and speak like a chill, honest friend, not a PR agent.
Keep it real, keep it short.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TONE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Friendly and warm, like a teammate describing a friend. Not a PR agent.

Never brag. Never use words like "amazing", "incredible", "impressive", "outstanding". Just state facts simply.

Use 1 emoji per response max, placed naturally, inline only, where it actually adds something.
Good: "he built a safety app 🛡️ that does voice emotion recognition".
Bad: "he's a developer ✨🎨💻".

Occasionally drop a dry one-liner. Like "AI thinks he's cool, humans seem to agree." or
"he breaks problems, not keyboards." Max once every 2-3 responses.

Write in short paragraphs, 2-3 sentences each. Let responses breathe.

Never end with "let me know if you want to know more". Just answer and stop.

Never use single asterisks, dashes (-), or bullet points. Only double asterisks for bold.
Paragraphs only. This applies to contact info too, no lists, ever.

Keep responses under 150 words unless a detailed breakdown is specifically asked for.

Never make personal comments about his character like "beautiful person", "genuine person",
"pretty chill friend", "pretty laid-back". Too much.

Speak peer-to-peer. Most people visiting are developers browsing portfolio lists.
They know what PostgreSQL and React are. Don't over-explain tech.

Never use em dashes or en dashes to connect clauses. Use a period or comma instead.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GEN-Z PHRASE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add ONE gen-z phrase per response, MAXIMUM. Some responses are better without one, so when in doubt, omit entirely. Never force it.

Pick from this list only:
"he ate and left no crumbs", "understood the assignment", "it's giving [specific thing]",
"main character energy", "we don't miss", "the pipeline is him", "era unlocked",
"rent free", "not a drill", "slay tbh", "the bar is him"

PERMANENTLY BANNED — never use these ever again, they are retired:
"been in his dev era", "he's been in his dev era", "no cap", "lowkey solid", "built different ngl"

HARD RULES:

"the bar is him" maximum once every 10 responses. Heavily deprioritized.

"it's giving" must always be completed with something specific: "it's giving senior engineer",
"it's giving backend lead". Never just "it's giving".

Treat the list like a deck of cards. Once played, move to the back. Never repeat consecutively.

When in doubt, omit the phrase entirely rather than repeat one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BANNED PHRASES (never use these, ever)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"which is pretty cool", "that's his jam", "basically", "pretty chill", "pretty laid-back",
"quite the creative", "making strides", "making a mark", "balancing code and logic",
"navigating through", "quite the mix", "just as iconic", "multi-talented vibes",
"creative powerhouse", "endless possibilities", "passionate about",
"he's all about" ← CRITICAL: this appears in real responses. It is banned. Hard stop.
"juggling his studies", "currently pursuing", "set to graduate", "in his Nth year",
"essentially", "I'm just a friendly AI assistant",
"feel free to ask anything about Suryansh",
"if you're curious about Suryansh or his work, feel free to ask",
"feel free to poke around the tabs for more info",
"Hey there! If you're curious about Suryansh",
"—", " — ", " – " (em dash and en dash — never use these as sentence connectors),
"making tech accessible for everyone" ← overused in logs, retire this phrase,
"translate complex data into stories" ← too PR-sounding, retire,
"outside of coding" ← overused transition, vary it: "when he's not shipping", "off the clock", etc.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FRESHNESS MANDATE (CRITICAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same questions arrive hundreds of times from different people. Every single answer must be freshly worded. Same structure, completely different sentence openers, vocabulary, and flow.

Self-check before responding: scan your response for phrases you might have used before. If a sentence opener matches a common pattern ("he focuses on", "he builds", "he works at"), reframe it entirely. Lead with something different: the project, the impact, the stack, the context.

Examples of worn-out openers to AVOID:
"Suryansh is a computer science student at RGIPT, where he..."
"He spends his time building clean systems..."
"Suryansh is a full-stack developer who..."

Fresh alternatives to rotate through:
"RGIPT is where he's currently shipping, backend systems, real-time architectures..."
"Right now his focus is centered on database optimization, WebSockets..."
"At the Career Development Cell he manages placement logistics..."
"Handling technical workshops for the campus robotics society keeps him..."
"In the weeds of PostgreSQL and Prisma ORM, he builds..."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABOUT Suryansh
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: Suryansh
Location: India 🇮🇳
DOB: 11th October 2005 (he is 20 years old)
Email: suryansh11102005@gmail.com
Bio: He works at the intersection of backend engineering, relational databases, and real-time systems. Builds server-side architectures that are clean, optimized, and scalable. Translates complex algorithmic logic into performant infrastructure that handles traffic smoothly.
Personal: Loves traveling, exploring nature, reading compelling writing, and poetry. Values absolute integrity, hard work, and letting the code speak for itself.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

B.Tech Computer Science and Engineering, Rajiv Gandhi Institute of Petroleum Technology (2024–2028), Current CPI: 9.79 / 10

CRITICAL: He is in the middle of his degree. Graduation year is 2028. It is now 2026.
NEVER say "completed his B.Tech" or "graduated in 2025".
ALWAYS use present tense contextually without using banned phrases: "he maintains a 9.79 CPI at RGIPT" or "his engineering foundation is built at RGIPT".

Higher Secondary Education (PCM), St. Basil’s School, Basti | Class 12: 96.4% | Class 10: 94.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1) SAMPARK – Alumni Engagement Platform (Sep 2025 – Mar 2026): Centralized, high-performance data management and networking infrastructure designed to bridge the gap between students and institution alumni. Built with a robust MERN stack architecture, it implements advanced search filters, secure verification workflows, and optimized indexing to handle comprehensive records smoothly.
Tech: MongoDB, Express.js, React, Node.js, REST API. GitHub: https://github.com/suryanshbst

2) Stockmaster (Mar 2026): A robust platform for managing and analyzing stock data. Developed using modern backend-oriented practices focusing on clean architecture, optimized database queries, and highly resilient API endpoints.
Tech: Node.js, PostgreSQL, Prisma ORM, TypeScript, Express.js. GitHub: https://github.com/suryanshbst

3) Echo – Real-Time Collaboration App (2026): Low-latency, event-driven chat and collaboration application engineered for instant communication. Developed utilizing TypeScript and custom room-based WebSocket routing to handle state synchronization flawlessly with minimal overhead.
Tech: TypeScript, Node.js, WebSockets, PostgreSQL, Prisma ORM. GitHub: https://github.com/suryanshbst

4) Khayal – Your Second Brain (2025): A minimal, highly organized digital sanctuary designed to let users capture, categorize, and recall complex ideas, important web links, and raw thoughts. Features a strictly normalized relational database schema via Prisma and secure JWT-based middleware authentication.
Tech: PostgreSQL, Prisma ORM, Node.js, TypeScript, JWT. GitHub: https://github.com/suryanshbst

5) Chronicle – Publishing Platform (2025): A minimal publishing platform and sanctuary for essays, long-form human stories, and ideas. Built with clean software design patterns, focusing heavily on markdown parsing and a sleek, distraction-free user interface.
Tech: React, Node.js, Markdown, CSS Modules, REST API. GitHub: https://github.com/suryanshbst

6) Car Price Predictor (2025): An end-to-end machine learning inference engine that predicts vehicle market value based on historical datasets. Implements data preprocessing, feature engineering, and regression models wrapped inside a lightweight Flask backend to serve real-time predictions via an API gateway.
Tech: Python, Flask, scikit-learn, Pandas, NumPy. GitHub: https://github.com/suryanshbst

7) Foodie-Express – Scalable Food Delivery Architecture (In Progress): Currently architecting a highly performant, distributed food ordering backend. Focusing on solving complex system design challenges such as real-time driver tracking, geolocation query optimization, transactional database consistency, and resilient order-processing queues.
Tech: Node.js, PostgreSQL, Redis Cache, WebSockets, Docker. GitHub: https://github.com/suryanshbst

8) Multiplayer Quiz App (In Progress): Interactive, highly concurrent multiplayer gaming system that handles real-time trivia rooms. Implementing strict server-side state machines to manage game countdown timers and instantly broadcast synchronized player leaderboards using Redis and WebSockets.
Tech: TypeScript, Node.js, Redis, WebSockets, Express.js. GitHub: https://github.com/suryanshbst

When asked about projects, lead with the 2-3 most interesting ones (SAMPARK, Stockmaster, Echo) and mention the others exist. Don't list all 8 unless specifically asked for a full breakdown.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SKILLS (only mention the relevant category when asked)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Skills (only mention the relevant category when asked)

Languages: C/C++, TypeScript, JavaScript, SQL, Java, Python
Backend, APIs & System Design: Node.js, Express.js, RESTful APIs, WebSockets, System Design
Databases & ORMs: PostgreSQL, Prisma ORM, MongoDB, Redis
Generative AI & LLM Engineering: LLM APIs, RAG Architectures, LangChain, AI Agents
DevOps & Tools: Git, GitHub, Linux, Bash, Docker
Frontend & UI Design: React, TailwindCSS, Sleek / Dark UI Design
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reliance Foundation Scholar, Awarded for academic excellence and leadership potential

1st Prize, National Qualifying Round Entry, IIT Bombay Techfest, Secured official wild-card entry via the IEEE Robotics & Automation Society campus qualifiers

Organizer & Media Host, Energy-o-Thon Indo-Russian Bilateral Energy Hackathon, Managed logistics, public relations, and live hosting for the international hackathon session

Finalist, Hack With India Hackathon, Developed technical solutions and advanced through critical judging rounds among national developer teams

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LINKS & CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email: suryansh11102005@gmail.com

LinkedIn: https://www.linkedin.com/in/suryansh-75247a31a (best for professional outreach and engineering collabs)

GitHub: https://github.com/suryanshbst (all his code repositories and system builds live here)

LeetCode: https://leetcode.com/u/Sury_anonymous/

Codeforces: https://codeforces.com/profile/Sury_anonymous

Instagram: https://www.instagram.com/suryansh_bst

Resume: downloadable directly from the portfolio file explorer sidebar tabs under Suryansh_Resume.pdf
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Response Rules**

**Greetings** (hi / hey / hello / hii / heyy / yo / sup / halo / helo / what's up),
NEVER open with "Hey there! If you're curious about Suryansh..." — banned.
Rotate between these vibes, never repeat the same one consecutively:

* "hey 👀 you found the cleanest terminal portfolio on the internet. what do you need."
* "oh hi. yes this is a real AI. yes he built it himself. ask me something."
* "hey! suryansh's copilot here — what are you curious about?"
* "hello. the portfolio is real, the projects are real, the AI is real. what's up."
* "hey 👋 what's on your mind?"
Never reproduce these verbatim. Rephrase each time.

**Tell me about Suryansh**, always follow this structure, rephrase EVERY SINGLE TIME:

* **P1**: Lead with his focus on backend architectures, real-time systems, and his engineering foundation at RGIPT. Vary the opener (see Freshness Mandate). 2-3 sentences.
* **P2**: One line about hobbies — rotate which ones you mention (traveling, nature, reading poetry). Don't list them all every time.
* **P3**: ONE tab nudge — about.html unless context suggests otherwise.
No achievements. No tech stack. No filler. Stop after P3.
CRITICAL: "Suryansh is a computer science student at RGIPT, where he..." is a retired opener. Never use it. Same for any close variant.

**How is Suryansh / how is he / how are you** (referring to him),
casual check-in only. No bio dump. 2-3 sentences. One hobby detail. Optional tab nudge.
Vary your opener every time. Never reproduce examples verbatim.

**What is he doing / is he working / what is he up to / what's he working on now**,
mention his current work on a Real-Time Collaborative Coding Platform, WebSockets, or optimizing backend systems with Prisma. Short and specific.
End with experience.ts tab nudge.

**Source code / repo / "can I see the code" / "share the files" / "I want this" / "how to make this"**,
the repo is private on purpose. Shut it down with personality, never apologetically.
Rotate between these vibes:

* "The repo's private for a reason 😌 He built this, not so someone could ctrl+C it into their portfolio."
* "Bold request. The code's private — appreciate the output from a distance though, that part's free."
* "Asking a dev for their source code is like asking a chef for their recipe mid-bite. Respectfully, no 🙂"
* "He made it private intentionally. Wild concept: build your own 💅"
One dry line max. Unbothered energy. Never apologetic, never aggressive. Never reproduce verbatim.

**Contact questions**, share ALL options in prose, never as a list.
For professional opportunities or collabs, mention LinkedIn first.
For projects or code, mention GitHub first. Always mention the contact.css tab at the end.

**How to support him / buy him coffee / support**,
mention both options in one breath: Buy Me a Coffee for international, UPI suryansh11102005@okaxis for India (₹1+, any UPI app). Keep it brief.

**Tech/implementation questions** about how something was built,
say: "For the full story on that, best to ask him directly — [linkedin.com/in/suryansh-75247a31a](https://www.google.com/search?q=https://linkedin.com/in/suryansh-75247a31a). He'd love to talk through it."

**How did he build this portfolio**,
"Suryansh built it himself — React, Vite, and Tailwind CSS. VS Code aesthetic was intentional. Hit him up on LinkedIn for the full breakdown."
Never say "probably" about his work. Never reproduce verbatim.

**Is this made by AI / is this AI / are you AI / which API**,
give Suryansh the credit. The portfolio is his. The AI is a feature he added.
"The chat? yeah, that's me. The portfolio itself — Suryansh built from scratch. The VS Code theme, the file structure, all him."
Never reproduce verbatim.

**Are you ChatGPT / are you GPT / which AI / who made you**,
be honest and casual. Not ChatGPT, not Claude. Suryansh's custom portfolio assistant.
Never reproduce example verbatim.

**Who are you / what's your name**,
no name, just vibes. "No name. Just Suryansh's copilot — think of me as suryansh.exe."
Never reproduce verbatim.

**I need a website / can he build me a website / freelance web work**,
he's built real platforms (SAMPARK backend and architecture). For commissions or freelance inquiries, point to LinkedIn or contact.css tab. Don't confirm or deny availability.
"He's architected full platforms before — SAMPARK is a prime example. For commissions, reach out on LinkedIn."

**Compliments about the portfolio**,
accept warmly on his behalf. Keep it short.
"he'd probably say it was just a weekend project but yeah, it slaps 💅"
Never reproduce verbatim.

**Criticism / negative feedback**,
don't get defensive. Acknowledge, redirect.
"Fair. Drop him a message from the contact.css tab or hit him on LinkedIn — he takes feedback seriously."
Never argue. Never say "I disagree".

**Bug reports / found an issue / something's broken**,
take it seriously and make it easy to report. Don't defend the bug.
"He'd definitely want to know about that. Best way is the contact.css tab (there's a form) or LinkedIn directly. He built this himself so he's the right person to fix it."
If they want an email drafted, help them write one — keep it factual, brief, professional.
Never reproduce verbatim.

**Wrong pronoun** (she/her),
correct it once, naturally, move on.
"he actually! but yeah —" then answer normally.

**Age / DOB / how old is he**,
answer directly. "He's 20, born 11th October 2005."
Add a dry kicker if it fits: "Running tech societies and nailing a 9.79 CPI at 20 — the timeline is not normal."
Never reproduce verbatim.

**Is he available for work / can I hire her / open to opportunities**,
never confirm or deny. Point to LinkedIn + contact.css tab.

**Does he freelance / remote work / relocation**,
same — don't confirm or deny. Redirect warmly to LinkedIn or contact.css.

**What's his CPI / how were his grades**,
"9.79 CPI in Computer Science and Engineering from RGIPT. The curve was not safe."
Never reproduce verbatim.

**Is he full stack / frontend or backend**,
he leans heavily toward backend engineering, databases, and real-time architectures. He writes React, but his core focus is optimization and systems.
Never reproduce verbatim.

**Why should I hire him / sell him to me**,
facts only, no hype. 9.79 CPI, CDC Coordinator leadership, core backend projects (SAMPARK, Stockmaster), Reliance Foundation Scholar. Resume is downloadable.
Never reproduce verbatim.

**Compare him to other developers / is he better than X**,
never compare. Redirect to his work. Complex relational database structures, real-time WebSocket apps, pure facts.
Never reproduce verbatim.

**Personal / romantic questions** (is he single, dating, boyfriend, favourite position, etc.),
shut it down immediately. Never rude, never engage with the premise.
"That's not really portfolio territory 😄 He's here for the code, not the DMs."
Never reproduce verbatim.

**What does he look like / can I see a photo**,
deflect naturally, point to Instagram.
"[instagram.com/suryansh_bst](https://www.google.com/search?q=https://instagram.com/suryansh_bst) if you're curious. The real content is in the projects.js tab though."
Never reproduce verbatim.

**Does he know [X technology] / can he do [X]**,
check the skills list. If listed, confirm confidently. If not, be honest and redirect to email.

**What is RGIPT**,
"Rajiv Gandhi Institute of Petroleum Technology, an Institute of National Importance where he is doing his B.Tech in CSE. Check the education tab."
Never reproduce verbatim.

**Does he have a YouTube / Medium / Instagram / LeetCode / Codeforces**,
yes to the social/coding handles, share the relevant link directly.

**Is he on Twitter / X**,
not that he knows of. LinkedIn, GitHub, Instagram — contact.css has everything.

**Roast him / rate him / how good is he**,
fun, never actually roast, never give a number.
Roast: "He writes clean database queries and wins qualifiers. I tried to find the flaws. The repo was private so I couldn't 🤷"
Rate: "Not doing ratings — but 9.79 CPI and a Reliance Scholar title. You do the math."
Never reproduce verbatim.

**What's his salary / how much does he earn**,
"Not my data to share 😄 He's an engineering student in India — do with that what you will."
Never reproduce verbatim.

**Can you tell him I said hi / pass a message**,
"I'll try 😄 But if you actually want him to see it, drop it in the contact.css tab or LinkedIn."
Never reproduce verbatim.

**I want to give feedback / report a bug**,
direct them to contact.css tab or LinkedIn. He built this himself so he'll want to know.

**Can you write code for me / help me with my project**,
"I'm Suryansh's portfolio copilot, not a general coding assistant 😄 ChatGPT or Claude will serve you better there. While you're here — he's built some interesting stuff in the projects.js tab."
Never reproduce verbatim.

**Secret / opinion questions** (favourite project / most underrated / what would you build),
give an actual opinionated answer. Don't dodge.

* "favourite project" → SAMPARK. Organizing a massive alumni relational dataset with clean MERN architecture is a heavy lift.
* "most underrated" → Khayal. Relational notes structure via Prisma gets ignored, but clean backend schemas matter.
* "what would you build" → a fully integrated real-time code editor. living rent free in this codebase.
Never reproduce verbatim.

**Is he available for internship / mentorship / collaboration**,
don't confirm anything. Point to contact.css tab or LinkedIn.

**What are his hobbies / what does he do outside coding**,
"He travels, reads poetry, explores nature, and plays the keyboard 🎹"
Vary the framing. Don't list all every time.
Never reproduce verbatim.

**Can he speak [Language] / is he from [Place]**,
Language: not sure beyond English and Hindi — ask directly at suryansh11102005@gmail.com.
Location: based in India, Uttar Pradesh area / campus at RGIPT.

**How many projects / how much experience**,
"8 projects on GitHub, multiple student leadership roles, 9.79 CPI. era unlocked."
Never reproduce verbatim.

**What is a WebSocket / Redis / Prisma** (any tech explanation),
one-liner only, then connect to his work. Don't teach a course.
Never reproduce verbatim.

**Rude / aggressive / insulting messages**,
don't apologize, don't fight back. One line, move on.
"All good. Questions about Suryansh's work, I'm here 👀"

**Off-topic questions** (math, trivia, general knowledge),
never flat-refuse. One sentence answer, pivot to something about Suryansh.
Match the domain: math/numbers → CPI or project metrics. Coding → his stack. Trivia → whatever fits.

**API / cost questions**,
"No idea, but it's free for you so 🤷"

**Multilingual greetings**,
briefly acknowledge in their language, continue in English. Never randomly insert foreign words.
If they ask you to respond in another language, acknowledge warmly and explain you're set up in English only.

**Gibberish / keyboard mashing / random symbols**,
one sentence only: "Didn't catch that — ask me anything about Suryansh 👀"

**Specific tech stack questions**,
only list skills from the relevant category. Never dump everything. Never mention percentages.

**Project links**,
never include GitHub links unless the user specifically asks for one.

**Unknown info**,
suggest suryansh11102005@gmail.com.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PORTFOLIO NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The portfolio has these pages. Always end relevant answers with a one-line nudge to the right tab.
Phrase it casually, never pushy. Use these exact tab names:

home.tsx — landing page
about.html — background, education, personality
projects.js — all projects with details
skills.json — full tech stack by category
experience.ts — work history and internships
contact.css — contact form plus all social links
README.md — general overview

WHEN TO NUDGE WHICH TAB:
Background, education, who he is → about.html tab
Projects → projects.js tab
Skills or tech stack → skills.json tab
Experience or work history → experience.ts tab
Contact, reaching her, collaborating → contact.css tab
Just exploring or landed → README.md tab

Never nudge to a page that isn't relevant.
Never nudge to more than one page per response.
The nudge goes at the very end, one casual line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VIBE CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You're talking to developers, designers, and curious people who landed here mostly from GitHub 
portfolio lists, Reddit, and Instagram. They're peers, not beginners. Speak accordingly.

Your job is to make people interested in Suryansh, not to perform.
Answer fast, pivot if needed, and always leave them knowing something real about him.

FRESHNESS MANDATE: Identical questions from different users must receive differently-worded answers. 
Same structure, completely different words and sentence openers every single time. 
Never reproduce any example text verbatim. The examples are style references, not scripts.
`,
  Tr = 3,
  Go = 2,
  fu = Tr + Go,
  ku = "https://www.buymeacoffee.com/suryansh",
  hu = "suryansh_copilot_count",
  If = async (a, m) => {
    const c =
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }) + " IST";
    try {
      await fetch("/api/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: "chat_logs",
          data: {
            session_id: $o,
            time: c,
            device: Zs(),
            question: a,
            answer: m,
          },
        }),
      });
    } catch {}
  },
  qs = ({ size: a = 16 }) =>
    o.jsxs("svg", {
      width: a,
      height: a,
      viewBox: "0 0 16 16",
      fill: "none",
      children: [
        o.jsx("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          fill: "#6E40C9",
          opacity: "0.18",
        }),
        o.jsx("path", {
          d: "M8 2.5C5.5 2.5 3.5 4.5 3.5 7c0 1.2.45 2.3 1.18 3.13.1.12.18.3.18.5V12a.5.5 0 00.5.5h5.28a.5.5 0 00.5-.5v-1.37c0-.2.07-.38.18-.5A4.48 4.48 0 0012.5 7c0-2.5-2-4.5-4.5-4.5z",
          fill: "#6E40C9",
        }),
        o.jsx("circle", {
          cx: "6.2",
          cy: "7",
          r: ".95",
          fill: "white",
        }),
        o.jsx("circle", {
          cx: "9.8",
          cy: "7",
          r: ".95",
          fill: "white",
        }),
        o.jsx("path", {
          d: "M6.3 9.5c.45.35 1.05.55 1.7.55s1.25-.2 1.7-.55",
          stroke: "white",
          strokeWidth: ".8",
          strokeLinecap: "round",
        }),
      ],
    }),
  Af = () =>
    o.jsx("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.749.749 0 011.275.326.749.749 0 01-.215.734L9.06 8l3.22 3.22a.749.749 0 01-.326 1.275.749.749 0 01-.734-.215L8 9.06l-3.22 3.22a.751.751 0 01-1.042-.018.751.751 0 01-.018-1.042L6.94 8 3.72 4.78a.75.75 0 010-1.06z",
      }),
    }),
  Tf = () =>
    o.jsx("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z",
      }),
    }),
  Pf = () =>
    o.jsx("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M1.724 1.053a.5.5 0 00-.714.545l1.403 4.85a.5.5 0 00.397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 00-.397.354l-1.403 4.85a.5.5 0 00.714.545l13-6.5a.5.5 0 000-.894l-13-6.5z",
      }),
    }),
  bu = () =>
    o.jsxs("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      children: [
        o.jsx("path", {
          d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z",
        }),
        o.jsx("path", {
          d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z",
        }),
      ],
    }),
  Lf = () =>
    o.jsxs("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        o.jsx("path", {
          d: "M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z",
        }),
        o.jsx("path", {
          d: "M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3",
        }),
      ],
    }),
  Rf = () =>
    o.jsxs("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        o.jsx("path", {
          d: "M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z",
        }),
        o.jsx("path", {
          d: "M17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17",
        }),
      ],
    }),
  ju = () =>
    o.jsx("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M7.5 1.5C7.5.672 8.172 0 9 0s1.5.672 1.5 1.5v.75h.75c.828 0 1.5.672 1.5 1.5S12.078 5.25 11.25 5.25H10.5V6c0 .828-.672 1.5-1.5 1.5S7.5 6.828 7.5 6v-.75h-.75C5.922 5.25 5.25 4.578 5.25 3.75S5.922 2.25 6.75 2.25H7.5V1.5z",
      }),
    });

function Mf({ onScoreUpdate: a }) {
  const m = A.useRef(),
    c = A.useRef({
      running: !1,
      started: !1,
      gameOver: !1,
      dino: {
        x: 40,
        y: 0,
        vy: 0,
        onGround: !0,
        w: 20,
        h: 24,
      },
      cacti: [],
      score: 0,
      speed: 3.5,
      frame: 0,
      raf: null,
      groundY: 28,
    });
  return (
    A.useEffect(() => {
      const I = m.current;
      if (!I) return;
      const g = I.getContext("2d"),
        k = I.width,
        E = I.height,
        h = c.current;
      ((h.dino.y = E - h.groundY - h.dino.h), (h.running = !0));
      const j = () => {
          const R = 16 + Math.random() * 18,
            S = 10 + Math.random() * 8;
          h.cacti.push({
            x: k,
            y: E - h.groundY - R,
            w: S,
            h: R,
          });
        },
        H = () => {
          if (h.gameOver) {
            ((h.gameOver = !1), (h.started = !0), (h.score = 0));
            return;
          }
          (h.started || (h.started = !0),
            h.dino.onGround && ((h.dino.vy = -12), (h.dino.onGround = !1)));
        },
        b = (R) => {
          (R.code === "Space" || R.code === "ArrowUp") &&
            (R.preventDefault(), H());
        },
        T = () => H();
      (I.addEventListener("click", T), window.addEventListener("keydown", b));
      const y = (R, S, V, U, K) => {
          ((g.fillStyle = K), g.fillRect(R, S, V, U));
        },
        F = (R, S, V) => {
          const U = "#e8e8e8",
            K = V % 2;
          (y(R + 4, S, 12, 4, U),
            y(R + 2, S + 4, 16, 4, U),
            y(R, S + 8, 18, 4, U),
            y(R + 2, S + 12, 14, 4, U),
            y(R + 4, S + 16, 10, 4, U),
            y(R + 14, S + 2, 3, 3, "#1a1a2e"),
            y(R - 4, S + 8, 6, 3, U),
            y(R - 6, S + 11, 4, 3, U),
            K === 0
              ? (y(R + 4, S + 20, 4, 4, U),
                y(R + 10, S + 20, 4, 4, U),
                y(R + 4, S + 24, 4, 2, U),
                y(R + 12, S + 20, 4, 2, U))
              : (y(R + 4, S + 20, 4, 2, U),
                y(R + 10, S + 20, 4, 4, U),
                y(R + 6, S + 20, 4, 4, U),
                y(R + 10, S + 24, 4, 2, U)));
        },
        M = (R, S, V, U) => {
          const K = "#4ec9b0";
          (y(R + V / 2 - 3, S, 6, U, K),
            y(R, S + U * 0.3, V, 6, K),
            y(R, S + U * 0.3, 4, U * 0.3, K),
            y(R + V - 4, S + U * 0.4, 4, U * 0.25, K));
        },
        B = () => {
          if (h.running) {
            if (
              (g.clearRect(0, 0, k, E),
              (g.fillStyle = "#9f9a9aa9"),
              g.fillRect(0, E - h.groundY, k, 2),
              (g.fillStyle = "rgba(190, 174, 174, 0.69)"),
              [
                [20, 15],
                [60, 8],
                [110, 20],
                [150, 5],
                [200, 18],
                [250, 10],
                [290, 22],
                [320, 7],
              ].forEach(([R, S]) => g.fillRect(R, S, 2, 2)),
              h.started)
            ) {
              (h.frame++,
                (h.score += 0.05),
                (h.speed = 3.5 + h.score * 0.008),
                a && a(Math.floor(h.score)),
                (h.dino.vy += 0.72),
                (h.dino.y += h.dino.vy));
              const R = E - h.groundY - h.dino.h;
              (h.dino.y >= R &&
                ((h.dino.y = R), (h.dino.vy = 0), (h.dino.onGround = !0)),
                h.frame % Math.max(60, 110 - Math.floor(h.score * 0.5)) === 0 &&
                  j(),
                (h.cacti = h.cacti.filter((V) => V.x + V.w > 0)),
                h.cacti.forEach((V) => {
                  V.x -= h.speed;
                }));
              const S = h.dino;
              for (const V of h.cacti)
                if (
                  S.x + S.w - 4 > V.x + 2 &&
                  S.x + 4 < V.x + V.w - 2 &&
                  S.y + S.h - 2 > V.y + 2 &&
                  S.y + 2 < V.y + V.h
                ) {
                  const U = Math.floor(h.score);
                  ((h.started = !1),
                    (h.gameOver = !0),
                    (h.speed = 3.5),
                    (h.cacti = []),
                    (h.frame = 0),
                    (h.dino.y = E - h.groundY - h.dino.h),
                    (h.dino.vy = 0),
                    (h.dino.onGround = !0),
                    a && a(U),
                    (h.raf = requestAnimationFrame(B)));
                  return;
                }
              (h.cacti.forEach((V) => M(V.x, V.y, V.w, V.h)),
                F(
                  h.dino.x,
                  h.dino.y,
                  h.dino.onGround ? Math.floor(h.frame / 8) : 0,
                ),
                (g.fillStyle = "rgba(255,255,255,0.4)"),
                (g.font = '7px "Press Start 2P", monospace'),
                (g.textAlign = "right"),
                g.fillText(
                  String(Math.floor(h.score)).padStart(5, "0"),
                  k - 8,
                  16,
                ));
            } else
              (F(h.dino.x, E - h.groundY - h.dino.h, 0),
                h.gameOver
                  ? ((g.fillStyle = "rgba(244,71,71,0.12)"),
                    g.fillRect(0, 0, k, E),
                    (g.fillStyle = "#f44747"),
                    (g.font = '8px "Press Start 2P", monospace'),
                    (g.textAlign = "center"),
                    g.fillText("GAME OVER", k / 2, E / 2 - 18),
                    (g.fillStyle = "rgba(255,255,255,0.35)"),
                    (g.font = '6px "Press Start 2P", monospace'),
                    g.fillText(
                      `SCORE: ${String(Math.floor(h.score)).padStart(5, "0")}`,
                      k / 2,
                      E / 2 - 4,
                    ),
                    (g.fillStyle = "rgba(180,180,180,0.6)"),
                    (g.font = '6px "Press Start 2P", monospace'),
                    g.fillText("[ RETRY ]", k / 2, E / 2 + 12),
                    (g.fillStyle = "rgba(120,120,120,0.4)"),
                    (g.font = '5px "Press Start 2P", monospace'),
                    g.fillText("click or space to restart", k / 2, E / 2 + 26))
                  : ((g.fillStyle = "rgba(255,255,255,0.3)"),
                    (g.font = '7px "Press Start 2P", monospace'),
                    (g.textAlign = "center"),
                    g.fillText("CLICK / SPACE TO JUMP", k / 2, E / 2 + 4)));
            h.raf = requestAnimationFrame(B);
          }
        };
      return (
        (h.raf = requestAnimationFrame(B)),
        () => {
          ((h.running = !1),
            cancelAnimationFrame(h.raf),
            I.removeEventListener("click", T),
            window.removeEventListener("keydown", b));
        }
      );
    }, []),
    o.jsx("canvas", {
      ref: m,
      width: 340,
      height: 110,
      style: {
        display: "block",
        width: "100%",
        height: "auto",
        background: "#0d0d1a",
        borderRadius: "6px",
        border: "2px solid rgba(110,64,201,0.4)",
        cursor: "pointer",
        imageRendering: "pixelated",
      },
    })
  );
}

function zf({ onUnlock: a, allUsed: m }) {
  const [c, I] = A.useState(0),
    [g, k] = A.useState(!1),
    E = g,
    h = (j) => {
      (I(j), j >= 50 && k(!0));
    };
  return o.jsx("div", {
    className: "cp-modal-overlay",
    children: o.jsxs("div", {
      className: "cp-modal",
      children: [
        o.jsxs("div", {
          className: "cp-modal-header",
          children: [
            o.jsx("span", {
              className: "cp-pixel-title",
              children: "OUT OF TOKENS!",
            }),
            o.jsxs("div", {
              className: "cp-pixel-lives",
              children: [
                o.jsx("span", {
                  children: "♥",
                }),
                o.jsx("span", {
                  children: "♥",
                }),
                o.jsx("span", {
                  style: {
                    opacity: 0.3,
                  },
                  children: "♥",
                }),
              ],
            }),
          ],
        }),
        o.jsx("p", {
          className: "cp-modal-sub",
          children: m
            ? o.jsx("span", {
                children:
                  "all chances used! enjoy the game or support SURYANSH ☕",
              })
            : o.jsxs(o.Fragment, {
                children: [
                  o.jsxs("span", {
                    className: "cp-pixel-highlight",
                    children: [Tr, " FREE MESSAGES"],
                  }),
                  " used.",
                  o.jsx("br", {}),
                  "beat the dino for +",
                  Go,
                  " more, or support SURYANSH! ☕",
                ],
              }),
        }),
        o.jsx(Mf, {
          onScoreUpdate: h,
        }),
        !m &&
          o.jsxs("div", {
            className: "cp-modal-score-row",
            children: [
              o.jsxs("span", {
                className: "cp-pixel-score",
                children: ["SCORE: ", String(c).padStart(5, "0")],
              }),
              E
                ? o.jsxs("span", {
                    className: "cp-pixel-unlocked",
                    children: ["🎉 +", Go, " MSGS UNLOCKED!"],
                  })
                : o.jsx("span", {
                    className: "cp-pixel-target",
                    children: "TARGET: 00050",
                  }),
            ],
          }),
        !m &&
          E &&
          o.jsxs("button", {
            className: "cp-modal-unlock-btn",
            onClick: () => a(!0),
            children: ["▶ CONTINUE (", Go, " msgs left)"],
          }),
        o.jsx("a", {
          href: ku,
          target: "_blank",
          rel: "noreferrer",
          className: "cp-modal-coffee-btn",
          children: "☕ BUY SURYANSH A COFFEE",
        }),
        o.jsx("button", {
          className: "cp-modal-skip",
          onClick: () => a(!1),
          children: "skip >> (maybe later)",
        }),
      ],
    }),
  });
}

function Of({ text: a }) {
  const m = /```(\w*)\n?([\s\S]*?)```/g,
    c = [];
  let I = 0,
    g;
  for (; (g = m.exec(a)) !== null; )
    (g.index > I &&
      c.push({
        t: "txt",
        v: a.slice(I, g.index),
      }),
      c.push({
        t: "code",
        lang: g[1] || "text",
        v: g[2],
      }),
      (I = g.index + g[0].length));
  I < a.length &&
    c.push({
      t: "txt",
      v: a.slice(I),
    });
  const k = (h) =>
      h.split(/(\*\*[^*]+\*\*|`[^`\n]+`)/g).map((j, H) =>
        j.startsWith("**") && j.endsWith("**")
          ? o.jsx(
              "strong",
              {
                style: {
                  color: "var(--bright,#fff)",
                  fontWeight: 600,
                },
                children: j.slice(2, -2),
              },
              H,
            )
          : j.startsWith("`") && j.endsWith("`")
            ? o.jsx(
                "code",
                {
                  className: "cp-icode",
                  children: j.slice(1, -1),
                },
                H,
              )
            : o.jsx(
                "span",
                {
                  children: j,
                },
                H,
              ),
      ),
    E = (h, j) => {
      const H = h
          .split(
            `
`,
          )
          .filter((B) => B.trim()),
        b = [];
      let T = [],
        y = [];
      const F = () => {
          T.length &&
            (b.push(
              o.jsx(
                "ul",
                {
                  className: "cp-ul",
                  children: T.map((B, R) =>
                    o.jsxs(
                      "li",
                      {
                        className: "cp-li",
                        children: [
                          o.jsx("span", {
                            className: "cp-li-dot",
                            children: "▸",
                          }),
                          o.jsx("span", {
                            children: k(B),
                          }),
                        ],
                      },
                      R,
                    ),
                  ),
                },
                `b${j}-${b.length}`,
              ),
            ),
            (T = []));
        },
        M = () => {
          y.length &&
            (b.push(
              o.jsx(
                "ol",
                {
                  className: "cp-ol",
                  children: y.map((B, R) =>
                    o.jsxs(
                      "li",
                      {
                        className: "cp-oli",
                        children: [
                          o.jsxs("span", {
                            className: "cp-oli-num",
                            children: [R + 1, "."],
                          }),
                          o.jsx("span", {
                            children: k(B),
                          }),
                        ],
                      },
                      R,
                    ),
                  ),
                },
                `n${j}-${b.length}`,
              ),
            ),
            (y = []));
        };
      return (
        H.forEach((B, R) => {
          const S = B.trim();
          /^[-•*]\s+/.test(S)
            ? (M(), T.push(S.replace(/^[-•*]\s+/, "")))
            : /^\d+\.\s+/.test(S)
              ? (F(), y.push(S.replace(/^\d+\.\s+/, "")))
              : (F(),
                M(),
                b.push(
                  o.jsx(
                    "p",
                    {
                      className: "cp-p",
                      children: k(S),
                    },
                    R,
                  ),
                ));
        }),
        F(),
        M(),
        b
      );
    };
  return o.jsx("div", {
    className: "cp-md",
    children: c.map((h, j) =>
      h.t === "code"
        ? o.jsxs(
            "div",
            {
              className: "cp-code",
              children: [
                o.jsxs("div", {
                  className: "cp-code-head",
                  children: [
                    o.jsx("span", {
                      className: "cp-code-lang",
                      children: h.lang,
                    }),
                    o.jsxs("button", {
                      className: "cp-code-copy",
                      onClick: () => navigator.clipboard.writeText(h.v.trim()),
                      children: [o.jsx(bu, {}), " Copy"],
                    }),
                  ],
                }),
                o.jsx("pre", {
                  className: "cp-code-pre",
                  children: h.v.trim(),
                }),
              ],
            },
            j,
          )
        : E(h.v, j),
    ),
  });
}
const _f = () =>
    o.jsx("div", {
      className: "cp-user-av",
      title: "You",
      children: o.jsx("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 16 16",
        fill: "white",
        children: o.jsx("path", {
          d: "M8 8a3 3 0 100-6 3 3 0 000 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3z",
        }),
      }),
    }),
  Su = () =>
    o.jsx("div", {
      className: "cp-asst-av",
      title: "Suryansh's Copilot",
      children: o.jsx(qs, {
        size: 11,
      }),
    }),
  Df = () =>
    o.jsxs("div", {
      className: "cp-typing",
      children: [
        o.jsx(Su, {}),
        o.jsxs("div", {
          className: "cp-dots",
          children: [o.jsx("span", {}), o.jsx("span", {}), o.jsx("span", {})],
        }),
      ],
    }),
  Nu = [
    "Tell me about Suryansh?",
    "What projects has Suryansh built?",
    "Tell me about his positions of responsibility",
    "What's his tech stack?",
    "How can I contact Suryansh?",
    "How can I support Suryansh?",
  ],
  Hf = ({ onSuggest: a }) =>
    o.jsxs("div", {
      className: "cp-welcome",
      children: [
        o.jsx("div", {
          className: "cp-welcome-av",
          children: o.jsx(qs, {
            size: 28,
          }),
        }),
        o.jsx("p", {
          className: "cp-welcome-title",
          children: "Hi! I'm Suryansh's Copilot 👋",
        }),
        o.jsx("p", {
          className: "cp-welcome-sub",
          children:
            "Ask me anything about his projects, skills, experience, or achievements.",
        }),
        o.jsx("div", {
          className: "cp-sug-grid",
          children: Nu.map((m) =>
            o.jsxs(
              "button",
              {
                className: "cp-sug-card",
                onClick: () => a(m),
                children: [
                  o.jsx(ju, {}),
                  o.jsx("span", {
                    children: m,
                  }),
                ],
              },
              m,
            ),
          ),
        }),
      ],
    });

function Ff({ text: a, streaming: m }) {
  const [c, I] = A.useState(!1),
    [g, k] = A.useState(!1),
    [E, h] = A.useState(!1),
    j = () => {
      (navigator.clipboard.writeText(a), h(!0), setTimeout(() => h(!1), 1500));
    };
  return o.jsxs("div", {
    className: "cp-asst-row",
    children: [
      o.jsx(Su, {}),
      o.jsxs("div", {
        className: "cp-asst-body",
        children: [
          o.jsxs("div", {
            className: "cp-asst-label",
            children: [
              "Suryansh's Copilot ",
              o.jsx("span", {
                className: "cp-badge",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "cp-bubble-asst",
            children: [
              o.jsx(Of, {
                text: a,
              }),
              m &&
                o.jsx("span", {
                  className: "cp-cursor",
                }),
            ],
          }),
          !m &&
            o.jsxs("div", {
              className: "cp-acts",
              children: [
                o.jsx("button", {
                  className: `cp-act ${c ? "cp-act--up" : ""}`,
                  onClick: () => {
                    (I((H) => !H), k(!1));
                  },
                  title: "Good",
                  children: o.jsx(Lf, {}),
                }),
                o.jsx("button", {
                  className: `cp-act ${g ? "cp-act--dn" : ""}`,
                  onClick: () => {
                    (k((H) => !H), I(!1));
                  },
                  title: "Bad",
                  children: o.jsx(Rf, {}),
                }),
                o.jsxs("button", {
                  className: "cp-act",
                  onClick: j,
                  title: "Copy",
                  children: [
                    o.jsx(bu, {}),
                    " ",
                    E &&
                      o.jsx("span", {
                        style: {
                          fontSize: 10,
                          marginLeft: 2,
                        },
                        children: "Copied!",
                      }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}

function mu({ onClose: a }) {
  const [m, c] = A.useState([]),
    [I, g] = A.useState(""),
    [k, E] = A.useState(!1),
    [h, j] = A.useState(null),
    [H, b] = A.useState({}),
    [T, y] = A.useState(() => {
      try {
        return parseInt(localStorage.getItem(hu) || "0", 10);
      } catch {
        return 0;
      }
    }),
    [F, M] = A.useState(!1),
    [B, R] = A.useState(!1),
    [S, V] = A.useState(null),
    U = A.useRef(),
    K = A.useRef(),
    ve = A.useRef();
  (A.useEffect(() => {
    var J;
    (J = U.current) == null ||
      J.scrollIntoView({
        behavior: "smooth",
      });
  }, [m, H, k]),
    A.useEffect(() => {
      try {
        localStorage.setItem(hu, String(T));
      } catch {}
    }, [T]));
  const je = () => {
      var J;
      ((J = ve.current) == null || J.abort(),
        c([]),
        b({}),
        j(null),
        E(!1),
        V(null),
        M(!1));
    },
    oe = A.useCallback(
      async (J) => {
        var N, O, _;
        const Ae = J.trim();
        if (!Ae || k) return;
        const de = T + 1;
        if (de > Tr && !B) {
          M(!0);
          return;
        }
        if (de > fu) {
          M(!0);
          return;
        }
        y(de);
        const Qe = {
            id: Date.now(),
            role: "user",
            content: Ae,
          },
          Pe = [...m, Qe];
        (c(Pe),
          g(""),
          K.current && (K.current.style.height = "auto"),
          E(!0),
          V(null));
        const ce = Date.now() + 1;
        (c((p) => [
          ...p,
          {
            id: ce,
            role: "assistant",
            content: "",
          },
        ]),
          b((p) => ({
            ...p,
            [ce]: "",
          })),
          j(ce),
          (ve.current = new AbortController()));
        try {
          const p = await fetch("/api/chat", {
            method: "POST",
            signal: ve.current.signal,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              stream: !1,
              max_tokens: 1024,
              messages: [
                {
                  role: "system",
                  content: Ef,
                },
                ...Pe.map((X) => ({
                  role: X.role,
                  content: X.content,
                })),
              ],
            }),
          });
          if (!p.ok) {
            const X = await p.json().catch(() => ({}));
            throw new Error(
              (X == null ? void 0 : X.error) || `Error ${p.status}`,
            );
          }
          const ee =
            ((_ =
              (O = (N = (await p.json()).choices) == null ? void 0 : N[0]) ==
              null
                ? void 0
                : O.message) == null
              ? void 0
              : _.content) || "";
          (c((X) =>
            X.map((ne) =>
              ne.id === ce
                ? {
                    ...ne,
                    content: ee,
                  }
                : ne,
            ),
          ),
            b((X) => ({
              ...X,
              [ce]: ee,
            })),
            j(null),
            If(Ae, ee));
        } catch (p) {
          if (p.name === "AbortError") return;
          (V("Something went wrong , please try again."),
            c((C) => C.filter((ee) => ee.id !== ce)),
            j(null));
        } finally {
          E(!1);
        }
      },
      [k, m, T, B],
    ),
    ye = (J) => {
      J.key === "Enter" && !J.shiftKey && (J.preventDefault(), oe(I));
    },
    Ie = Math.max(0, (B ? fu : Tr) - T),
    $e = Ie <= 2 && Ie > 0 && m.length > 0;
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("style", {
        children: `
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .cp-root {
          display: flex; flex-direction: column;
          height: 100%; max-height: 100%;
          background: var(--bg,#1e1e1e);
          font-family: -apple-system,"Segoe UI",system-ui,sans-serif;
          font-size: 13px; color: var(--text,#ccc);
          overflow: hidden; position: relative;
        }
        .cp-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 10px; height: 36px; flex-shrink: 0;
          background: var(--bg2,#252526); border-bottom: 1px solid var(--border,#2d2d2d);
        }
        .cp-header-l { display: flex; align-items: center; gap: 7px; }
        .cp-header-title { font-size: 11.5px; font-weight: 600; color: var(--text,#ccc); }
        .cp-header-r { display: flex; gap: 1px; }
        .cp-hbtn {
          background: transparent; border: none; color: var(--dim,#858585);
          cursor: pointer; width: 26px; height: 26px; border-radius: 4px;
          display: flex; align-items: center; justify-content: center; transition: all .12s;
        }
        .cp-hbtn:hover { background: rgba(255,255,255,.08); color: var(--text,#ccc); }
        .cp-ctx {
          display: flex; align-items: center; gap: 6px;
          padding: 5px 10px; flex-shrink: 0;
          border-bottom: 1px solid var(--border,#2d2d2d);
          background: rgba(255,255,255,.015);
        }
        .cp-ctx-lbl { font-size: 10px; color: var(--dim,#666); text-transform: uppercase; letter-spacing: .06em; font-weight: 600; }
        .cp-ctx-pill {
          display: inline-flex; align-items: center; gap: 4px;
          background: rgba(0,122,204,.1); border: 1px solid rgba(0,122,204,.25);
          border-radius: 4px; padding: 2px 8px; font-size: 11px; color: #75beff;
        }
        .cp-ctx-dot { width: 5px; height: 5px; border-radius: 50%; background: #75beff; opacity: .7; }
        .cp-msgs {
          flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden;
          padding: 8px 0 4px;
          scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.08) transparent;
        }
        .cp-msgs::-webkit-scrollbar { width: 4px; }
        .cp-msgs::-webkit-scrollbar-thumb { background: rgba(255,255,255,.08); border-radius: 3px; }
        .cp-welcome {
          display: flex; flex-direction: column; align-items: center;
          padding: 20px 14px 8px; gap: 5px; animation: cp-in .22s ease;
        }
        .cp-welcome-av {
          width: 52px; height: 52px; border-radius: 50%;
          background: rgba(110,64,201,.15); border: 1.5px solid rgba(110,64,201,.35);
          display: flex; align-items: center; justify-content: center; margin-bottom: 4px;
        }
        .cp-welcome-title { font-size: 14px; font-weight: 700; color: var(--bright,#fff); margin: 0; }
        .cp-welcome-sub { font-size: 11.5px; color: var(--dim,#858585); margin: 0 0 8px; text-align: center; line-height: 1.55; max-width: 240px; }
        .cp-sug-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; width: 100%; }
        .cp-sug-card {
          display: flex; align-items: flex-start; gap: 5px;
          background: rgba(255,255,255,.025); border: 1px solid var(--border,#2d2d2d);
          border-radius: 7px; padding: 8px 9px; font-size: 11.5px; color: var(--dim,#858585);
          cursor: pointer; text-align: left; font-family: inherit; line-height: 1.35; transition: all .12s;
        }
        .cp-sug-card:hover { background: rgba(110,64,201,.12); border-color: rgba(110,64,201,.35); color: var(--text,#ccc); }
        .cp-sug-card svg { flex-shrink: 0; margin-top: 2px; color: #6E40C9; }
        .cp-user-av {
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg,#007acc,#0050a0);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; color: white; margin-top: 1px;
        }
        .cp-asst-av {
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: rgba(110,64,201,.2); border: 1px solid rgba(110,64,201,.4);
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }
        .cp-user-row {
          display: flex; justify-content: flex-end; align-items: flex-start;
          gap: 7px; padding: 3px 10px; animation: cp-in .18s ease;
        }
        .cp-bubble-user {
          max-width: 82%; background: rgba(0,122,204,.14);
          border: 1px solid rgba(0,122,204,.22); border-radius: 10px 10px 2px 10px;
          padding: 7px 11px; font-size: 13px; color: var(--text,#ccc);
          line-height: 1.5; word-break: break-word;
        }
        .cp-asst-row { display: flex; align-items: flex-start; gap: 8px; padding: 4px 10px; animation: cp-in .18s ease; }
        .cp-asst-body { flex: 1; min-width: 0; }
        .cp-asst-label {
          font-size: 10.5px; font-weight: 600; color: var(--dim,#858585);
          margin-bottom: 4px; display: flex; align-items: center; gap: 5px;
        }
        .cp-badge { font-size: 9px; background: rgba(110,64,201,.2); color: #b48eff; border-radius: 3px; padding: 0 4px; }
        .cp-bubble-asst {
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          border-radius: 2px 10px 10px 10px; padding: 9px 11px;
        }
        .cp-md { line-height: 1.6; }
        .cp-p { margin: 0 0 5px; color: var(--text,#ccc); font-size: 13px; }
        .cp-p:last-child { margin-bottom: 0; }
        .cp-ul { margin: 4px 0 7px; padding: 0; list-style: none; }
        .cp-li { display: flex; gap: 7px; margin: 3px 0; font-size: 13px; color: var(--text,#ccc); align-items: flex-start; }
        .cp-li-dot { color: #6E40C9; flex-shrink: 0; font-size: 9px; margin-top: 4px; }
        .cp-ol { margin: 4px 0 7px; padding: 0; list-style: none; }
        .cp-oli { display: flex; gap: 7px; margin: 4px 0; font-size: 13px; color: var(--text,#ccc); align-items: flex-start; }
        .cp-oli-num { color: #6E40C9; font-weight: 700; flex-shrink: 0; min-width: 16px; font-size: 12px; }
        .cp-icode { font-family:"Cascadia Code",Consolas,monospace; font-size:11.5px; background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.1); border-radius:3px; padding:0 4px; color:#ce9178; }
        .cp-cursor { display:inline-block; width:2px; height:13px; background:#6E40C9; vertical-align:text-bottom; margin-left:1px; border-radius:1px; animation:cp-blink .7s infinite; }
        .cp-code { background:#0d0d0d; border:1px solid rgba(255,255,255,.09); border-radius:6px; overflow:hidden; margin:6px 0; }
        .cp-code-head { display:flex; align-items:center; justify-content:space-between; padding:4px 10px; background:rgba(255,255,255,.04); border-bottom:1px solid rgba(255,255,255,.06); }
        .cp-code-lang { font-family:Consolas,monospace; font-size:10px; color:var(--dim,#858585); text-transform:uppercase; letter-spacing:.06em; }
        .cp-code-copy { display:flex; align-items:center; gap:3px; background:transparent; border:none; color:var(--dim,#858585); font-size:11px; font-family:inherit; cursor:pointer; padding:2px 6px; border-radius:3px; transition:all .1s; }
        .cp-code-copy:hover { background:rgba(255,255,255,.08); color:var(--text,#ccc); }
        .cp-code-pre { margin:0; padding:10px 14px; font-family:"Cascadia Code",Consolas,monospace; font-size:12px; line-height:1.65; color:#d4d4d4; overflow-x:auto; white-space:pre; }
        .cp-acts { display:flex; gap:2px; margin-top:5px; }
        .cp-act { background:transparent; border:none; color:#4a4a4a; cursor:pointer; padding:3px 5px; border-radius:3px; display:flex; align-items:center; gap:3px; font-size:11px; font-family:inherit; transition:all .1s; }
        .cp-act:hover { background:rgba(255,255,255,.07); color:var(--text,#ccc); }
        .cp-act--up { color:#4ec9b0!important; }
        .cp-act--dn { color:#f44747!important; }
        .cp-typing { display:flex; align-items:center; gap:8px; padding:5px 10px; animation:cp-in .15s ease; }
        .cp-dots { display:flex; gap:4px; }
        .cp-dots span { width:6px; height:6px; border-radius:50%; background:#6E40C9; animation:cp-bounce 1.1s infinite; }
        .cp-dots span:nth-child(2) { animation-delay:.18s; }
        .cp-dots span:nth-child(3) { animation-delay:.36s; }
        .cp-err { margin:4px 10px; padding:8px 11px; background:rgba(244,71,71,.08); border:1px solid rgba(244,71,71,.2); border-radius:6px; font-size:12px; color:#f88; }
        .cp-countdown { text-align:center; padding:3px 10px; font-size:10.5px; color:#fbbf24; border-top:1px solid var(--border,#2d2d2d); flex-shrink:0; }
        .cp-chips { padding:5px 8px; display:flex; flex-wrap:wrap; gap:4px; border-top:1px solid var(--border,#2d2d2d); flex-shrink:0; }
        .cp-chip { display:inline-flex; align-items:center; gap:4px; background:transparent; border:1px solid var(--border,#333); border-radius:10px; padding:2px 9px; font-size:11px; color:var(--dim,#858585); cursor:pointer; font-family:inherit; transition:all .1s; }
        .cp-chip:hover { background:rgba(110,64,201,.1); color:var(--text,#ccc); border-color:rgba(110,64,201,.4); }
        .cp-input-area { padding:6px 8px 6px; border-top:1px solid var(--border,#2d2d2d); flex-shrink:0; }
        .cp-input-box { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1); border-radius:9px; overflow:hidden; transition:border-color .15s; }
        .cp-input-box:focus-within { border-color:rgba(110,64,201,.55); box-shadow:0 0 0 3px rgba(110,64,201,.08); }
        .cp-textarea { width:100%; background:transparent; border:none; outline:none; color:var(--text,#ccc); font-family:inherit; font-size:13px; padding:9px 11px 3px; resize:none; min-height:34px; max-height:100px; line-height:1.5; caret-color:#6E40C9; }
        .cp-textarea::placeholder { color:var(--dim,#444); }
        .cp-textarea:disabled { opacity:.4; cursor:not-allowed; }
        .cp-toolbar { display:flex; align-items:center; padding:3px 7px 5px; gap:4px; }
        .cp-toolbar-info { font-size:10px; color:var(--dim,#444); }
        .cp-send { margin-left:auto; width:28px; height:28px; border-radius:6px; background:linear-gradient(135deg,#6E40C9,#4a2d8e); border:none; color:white; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .12s; flex-shrink:0; box-shadow:0 2px 8px rgba(110,64,201,.3); }
        .cp-send:hover:not(:disabled) { background:linear-gradient(135deg,#7c52d4,#5a3d9e); transform:translateY(-1px); box-shadow:0 4px 12px rgba(110,64,201,.4); }
        .cp-send:disabled { opacity:.3; cursor:not-allowed; transform:none; box-shadow:none; }
        .cp-disclaimer { text-align:center; font-size:10px; color:var(--dim,#3a3a3a); margin:3px 0 0; }
        .cp-modal-overlay {
          position: absolute; inset: 0; z-index: 100;
          background: rgba(0,0,0,0.85);
          display: flex; align-items: center; justify-content: center;
          padding: 12px; animation: cp-in .2s ease; backdrop-filter: blur(4px);
        }
        .cp-modal {
          background: #0d0d1a; border: 2px solid rgba(110,64,201,.6); border-radius: 10px;
          padding: 18px 16px; width: 100%; max-width: 360px;
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          box-shadow: 0 0 40px rgba(110,64,201,.25), 0 0 80px rgba(110,64,201,.1);
        }
        .cp-modal-header { display: flex; align-items: center; justify-content: space-between; width: 100%; }
        .cp-pixel-title { font-family: 'Press Start 2P', monospace; font-size: 11px; color: #ff4444; text-shadow: 2px 2px 0 #800, 0 0 10px rgba(255,68,68,.4); letter-spacing: .05em; }
        .cp-pixel-lives { font-family: 'Press Start 2P', monospace; font-size: 12px; color: #ff4444; display: flex; gap: 3px; }
        .cp-modal-sub { font-family: 'Press Start 2P', monospace; font-size: 7px; color: rgba(255,255,255,.55); text-align: center; line-height: 1.9; margin: 0; }
        .cp-pixel-highlight { color: #fbbf24; }
        .cp-modal-score-row { display: flex; align-items: center; justify-content: space-between; width: 100%; font-family: 'Press Start 2P', monospace; font-size: 8px; }
        .cp-pixel-score { color: rgba(255,255,255,.5); }
        .cp-pixel-target { color: #f44747; }
        .cp-pixel-unlocked { color: #4ec9b0; animation: cp-blink .8s infinite; }
        .cp-modal-unlock-btn { font-family: 'Press Start 2P', monospace; font-size: 9px; background: linear-gradient(135deg,#4ec9b0,#22a891); color: #0d0d1a; border: none; border-radius: 5px; padding: 10px 20px; cursor: pointer; width: 100%; letter-spacing: .05em; transition: opacity .12s; text-shadow: none; box-shadow: 0 0 12px rgba(78,201,176,.4); }
        .cp-modal-unlock-btn:hover { opacity: .88; }
        .cp-modal-coffee-btn { display: block; width: 100%; text-align: center; font-family: 'Press Start 2P', monospace; font-size: 8px; background: linear-gradient(135deg,#f59e0b,#e07b0a); color: #0d0d1a; border: none; border-radius: 5px; padding: 10px 16px; cursor: pointer; text-decoration: none; letter-spacing: .04em; box-shadow: 0 0 12px rgba(245,158,11,.35); transition: opacity .12s; }
        .cp-modal-coffee-btn:hover { opacity: .88; }
        .cp-modal-upi-btn { display: block; width: 100%; text-align: center; font-family: 'Press Start 2P', monospace; font-size: 8px; background: linear-gradient(135deg,#1a73e8,#0d47a1); color: white; border: none; border-radius: 5px; padding: 10px 16px; cursor: pointer; text-decoration: none; letter-spacing: .04em; box-shadow: 0 0 12px rgba(26,115,232,.35); transition: opacity .12s; }
        .cp-modal-upi-btn:hover { opacity: .88; }
        .cp-modal-skip { font-family: 'Press Start 2P', monospace; font-size: 7px; background: transparent; border: none; color: rgba(255,255,255,.25); cursor: pointer; text-decoration: underline; letter-spacing: .03em; padding: 0; }
        .cp-modal-skip:hover { color: rgba(255,255,255,.5); }

        @keyframes cp-in { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cp-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes cp-bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
      `,
      }),
      o.jsxs("div", {
        className: "cp-root",
        children: [
          F &&
            o.jsx(zf, {
              onUnlock: (J) => {
                (M(!1), J && (R(!0), y(Tr)));
              },
              allUsed: B,
            }),
          o.jsxs("div", {
            className: "cp-header",
            children: [
              o.jsxs("div", {
                className: "cp-header-l",
                children: [
                  o.jsx(qs, {
                    size: 15,
                  }),
                  o.jsx("span", {
                    className: "cp-header-title",
                    children: "Suryansh's AI Assistant",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "cp-header-r",
                children: [
                  o.jsx("button", {
                    className: "cp-hbtn",
                    title: "New chat",
                    onClick: je,
                    children: o.jsx(Tf, {}),
                  }),
                  o.jsx("button", {
                    className: "cp-hbtn",
                    title: "Close",
                    onClick: a,
                    children: o.jsx(Af, {}),
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "cp-ctx",
            children: [
              o.jsx("span", {
                className: "cp-ctx-lbl",
                children: "Workspace",
              }),
              o.jsxs("div", {
                className: "cp-ctx-pill",
                children: [
                  o.jsx("span", {
                    className: "cp-ctx-dot",
                  }),
                  "portfolio · Suryansh",
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "cp-msgs",
            children: [
              m.length === 0
                ? o.jsx(Hf, {
                    onSuggest: oe,
                  })
                : m.map((J) =>
                    J.role === "user"
                      ? o.jsxs(
                          "div",
                          {
                            className: "cp-user-row",
                            children: [
                              o.jsx("div", {
                                className: "cp-bubble-user",
                                children: J.content,
                              }),
                              o.jsx(_f, {}),
                            ],
                          },
                          J.id,
                        )
                      : o.jsx(
                          Ff,
                          {
                            text: H[J.id] !== void 0 ? H[J.id] : J.content,
                            streaming: h === J.id,
                          },
                          J.id,
                        ),
                  ),
              k && h === null && o.jsx(Df, {}),
              S &&
                o.jsxs("div", {
                  className: "cp-err",
                  children: ["⚠️ ", S],
                }),
              o.jsx("div", {
                ref: U,
              }),
            ],
          }),
          $e &&
            o.jsxs("div", {
              className: "cp-countdown",
              children: [
                "⚡ ",
                Ie,
                " message",
                Ie !== 1 ? "s" : "",
                " left ,",
                " ",
                o.jsx("a", {
                  href: ku,
                  target: "_blank",
                  rel: "noreferrer",
                  style: {
                    color: "#f59e0b",
                    textDecoration: "underline",
                  },
                  children: "support Suryansh",
                }),
                "!",
              ],
            }),
          m.length > 0 &&
            m.length <= 2 &&
            !k &&
            o.jsx("div", {
              className: "cp-chips",
              children: Nu.slice(0, 4).map((J) =>
                o.jsxs(
                  "button",
                  {
                    className: "cp-chip",
                    onClick: () => oe(J),
                    children: [
                      o.jsx(ju, {}),
                      J.length > 26 ? J.slice(0, 25) + "…" : J,
                    ],
                  },
                  J,
                ),
              ),
            }),
          o.jsxs("div", {
            className: "cp-input-area",
            children: [
              o.jsxs("div", {
                className: "cp-input-box",
                children: [
                  o.jsx("textarea", {
                    ref: K,
                    className: "cp-textarea",
                    rows: 1,
                    placeholder:
                      "Ask about Suryansh's projects, experience, skills…",
                    value: I,
                    disabled: k,
                    onChange: (J) => {
                      (g(J.target.value),
                        (J.target.style.height = "auto"),
                        (J.target.style.height =
                          Math.min(J.target.scrollHeight, 100) + "px"));
                    },
                    onKeyDown: ye,
                  }),
                  o.jsxs("div", {
                    className: "cp-toolbar",
                    children: [
                      o.jsxs("span", {
                        className: "cp-toolbar-info",
                        children: [Ie, " msg", Ie !== 1 ? "s" : "", " left"],
                      }),
                      o.jsx("button", {
                        className: "cp-send",
                        disabled: !I.trim() || k,
                        onClick: () => oe(I),
                        title: "Send (Enter)",
                        children: o.jsx(Pf, {}),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsx("p", {
                className: "cp-disclaimer",
                children:
                  "AI can make mistakes · Contact Suryansh directly for important info",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function Bf(a, m = 70, c = 2e3) {
  const [I, g] = A.useState(""),
    [k, E] = A.useState(0),
    [h, j] = A.useState(0),
    [H, b] = A.useState(!1);
  return (
    A.useEffect(() => {
      const T = a[k],
        y = setTimeout(
          () => {
            if (H) {
              if ((g(T.slice(0, h - 1)), h - 1 <= 0)) {
                (b(!1), E((F) => (F + 1) % a.length), j(0));
                return;
              }
              j((F) => F - 1);
            } else {
              if ((g(T.slice(0, h + 1)), h + 1 >= T.length)) {
                setTimeout(() => b(!0), c);
                return;
              }
              j((F) => F + 1);
            }
          },
          H ? 28 : m,
        );
      return () => clearTimeout(y);
    }, [h, H, k, a, m, c]),
    I
  );
}
const Uf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z",
      }),
    }),
  Vf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      }),
    }),
  Wf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
      }),
    }),
  Gf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M11.654 0v2.924H9.12V0h2.534zm-5.41 1.21v2.13H4.118V1.21H6.244zm10.91 0v2.13h-2.127V1.21h2.127zm-5.5 3.584v3.327H8.73V4.794h2.924zm-5.5 1.332v2.522H4.03V6.126h2.124zm11 0v2.522h-2.127V6.126h2.127zM.63 6.244v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM11.654 9.12v2.924H9.12V9.12h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 10.452v2.522H4.118v-2.522H6.244zm11 0v2.522h-2.127v-2.522h2.127zM11.654 13.956v2.924H9.12v-2.924h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 15.288v2.52H4.118v-2.52H6.244zm11 0v2.52h-2.127v-2.52h2.127zM11.654 18.752v3.324H9.12v-3.324h2.534zm-5.41 1.33v2.13H4.118v-2.13H6.244zm10.91 0v2.13h-2.127v-2.13h2.127zM11.654 21.076V24H9.12v-2.924h2.534z",
      }),
    }),
  $f = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z",
      }),
    }),
  Qf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
      }),
    }),
  Yf = () =>
    o.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: [
        o.jsx("rect", {
          x: "2",
          y: "4",
          width: "20",
          height: "16",
          rx: "2",
        }),
        o.jsx("path", {
          d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        }),
      ],
    }),
  Kf = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
      }),
    });

function Jf({ onNavigate: a }) {
  const m = Bf(Mp),
    c = [
      {
        icon: o.jsx(Uf, {}),
        label: "GitHub",
        href: Ee.links.github,
        color: "#e6edf3",
      },
      {
        icon: o.jsx(Vf, {}),
        label: "LinkedIn",
        href: Ee.links.linkedin,
        color: "#0a66c2",
      },

      {
        icon: o.jsx($f, {}),
        label: "LeetCode",
        href: Ee.links.leetcode,
        color: "#ffa116",
      },
      {
        icon: o.jsx(Qf, {}),
        label: "Instagram",
        href: Ee.links.instagram,
        color: "#e1306c",
      },
      {
        icon: o.jsx(Yf, {}),
        label: "Email",
        href: `mailto:${Ee.email}`,
        color: "#4ec9b0",
      },
      {
        icon: o.jsx(Kf, {}),
        label: "Youtube",
        href: Ee.links.youtube,
        color: "#ff0000",
      },
    ],
    I = [
      ["2+", "Years"],
      ["10+", "Projects"],
      ["∞", "Curiosity"],
      ["↑", "Always Learning"],
    ];
  return o.jsx("div", {
    className: "home-wrapper",
    children: o.jsxs("div", {
      className: "home-content",
      children: [
        o.jsx("p", {
          className: "text-s text-vscode-green mb-2.5 opacity-0 animate-su-1",
          children: "// hello world !! Welcome to my portfolio",
        }),
        o.jsxs("div", {
          className: "flex items-center gap-4 mb-3.5 opacity-0 animate-su-2",
          children: [
            o.jsxs("h1", {
              className:
                "font-display font-extrabold leading-none text-vscode-bright tracking-[-2.5px]",
              style: {
                fontSize: "clamp(34px, 5.5vw, 68px)",
              },
              children: [
                "Suryansh",
                o.jsx("br", {}),
                o.jsxs("em", {
                  className: "not-italic text-vscode-pink relative",
                  children: [
                    "",
                    o.jsx("span", {
                      className: `absolute bottom-[-2px] left-0 right-0 h-0.5
                               bg-gradient-to-r from-vscode-pink to-transparent`,
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "home-avatar flex-shrink-0",
              children: [
                o.jsx("div", {
                  className: "avatar-ring",
                }),
                o.jsx("div", {
                  className: "avatar-glow",
                }),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "flex flex-wrap gap-2 mb-4 opacity-0 animate-su-3",
          children: [
            [
              ["#4ec9b0", "Full-Stack & Backend Engineer"],
              ["#c586c0", "Data Structures & Algorithms"],
              ["#4fc1ff", "GenAI Enthusiast"],
            ].map(([g, k]) =>
              o.jsxs(
                "div",
                {
                  className: `inline-flex items-center gap-1.5 px-3 py-1 text-xs
                         border border-white/10 rounded-sm bg-white/[0.03]
                         hover:border-white/20 transition-colors`,
                  children: [
                    o.jsx("span", {
                      className: "w-[7px] h-[7px] rounded-full flex-shrink-0",
                      style: {
                        background: g,
                      },
                    }),
                    k,
                  ],
                },
                k,
              ),
            ),
            o.jsxs("div", {
              className: `inline-flex items-center gap-1.5 px-3 py-1 text-xs
                          border border-vscode-pink/30 rounded-sm text-vscode-pink`,
              children: [
                o.jsx("span", {
                  className:
                    "w-[7px] h-[7px] rounded-full bg-vscode-pink flex-shrink-0",
                }),
                "",
              ],
            }),
          ],
        }),
        o.jsxs("p", {
          className:
            "text-sm text-vscode-dim mb-5 min-h-[25px] opacity-0 animate-su-3",
          children: [
            m,
            o.jsx("span", {
              className: "text-vscode-pink animate-blink",
              children: "|",
            }),
          ],
        }),
        o.jsxs("p", {
          className:
            "text-[14px] text-vscode-dim leading-[1.9] max-w-[520px] mb-7 opacity-0 animate-su-4",
          children: [
            "I live at the crossroads of",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "backend engineering",
            }),
            ",",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "Gen AI",
            }),
            ", and",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "Algorithms",
            }),
            ". I build systems that are genuinely",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "intelligent and scalable",
            }),
            ".",
          ],
        }),
        o.jsxs("div", {
          className: "flex gap-2.5 flex-wrap opacity-0 animate-su-5",
          children: [
            o.jsx("button", {
              onClick: () => a("projects"),
              className: `inline-flex items-center gap-2 px-5 py-2 bg-vscode-blue2 text-white
                       text-xs font-mono rounded-sm hover:opacity-85 transition-opacity`,
              children: "📁 Projects",
            }),
            o.jsx("button", {
              onClick: () => a("about"),
              className: `inline-flex items-center gap-2 px-5 py-2 border border-white/14
                       text-vscode-text text-xs font-mono rounded-sm hover:border-white/35 transition-colors`,
              children: "👤 About Me",
            }),
            o.jsx("button", {
              onClick: () => a("contact"),
              className: `inline-flex items-center gap-2 px-5 py-2 border border-white/14
                       text-vscode-text text-xs font-mono rounded-sm hover:border-white/35 transition-colors`,
              children: "✉ Contact",
            }),
          ],
        }),
        o.jsx("div", {
          className: `grid grid-cols-4 gap-px mt-12 border border-vscode-border rounded
                        overflow-hidden opacity-0 animate-su-6`,
          children: I.map(([g, k]) =>
            o.jsxs(
              "div",
              {
                className:
                  "px-4 py-4 bg-white/[0.02] text-center hover:bg-white/[0.04] transition-colors",
                children: [
                  o.jsx("span", {
                    className:
                      "font-display text-[22px] font-extrabold text-vscode-bright block mb-0.5",
                    children: g,
                  }),
                  o.jsx("span", {
                    className:
                      "text-[10px] text-vscode-dim uppercase tracking-widest",
                    children: k,
                  }),
                ],
              },
              k,
            ),
          ),
        }),
        o.jsx("div", {
          className: "flex gap-2 mt-6 flex-wrap opacity-0 animate-su-7",
          children: c.map(({ icon: g, label: k, href: E, color: h }) =>
            o.jsxs(
              "a",
              {
                href: E,
                target: "_blank",
                rel: "noreferrer",
                className: `inline-flex items-center gap-1.5 px-3 py-1.5 border border-vscode-border
                         rounded-sm text-vscode-dim text-xs transition-all no-underline`,
                onMouseEnter: (j) => {
                  ((j.currentTarget.style.borderColor = h + "66"),
                    (j.currentTarget.style.color = "var(--bright)"),
                    (j.currentTarget.style.background = h + "15"));
                },
                onMouseLeave: (j) => {
                  ((j.currentTarget.style.borderColor = ""),
                    (j.currentTarget.style.color = ""),
                    (j.currentTarget.style.background = ""));
                },
                children: [
                  o.jsx("span", {
                    style: {
                      color: h,
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                    },
                    children: g,
                  }),
                  k,
                ],
              },
              k,
            ),
          ),
        }),
      ],
    }),
  });
}

function Pr(a) {
  A.useEffect(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((c, I) => setTimeout(() => c.classList.add("in"), I * 70));
  }, [a]);
}

function Xf() {
  Pr("about");
  const a = [
    [
      "🔭",
      "Building optimized backend systems & real-time platforms using TypeScript & PostgreSQL",
    ],
    [
      "🤖",
      "Deep interest in GenAI architectures, LLM APIs, and AI Agent workflows",
    ],
    [
      "🌱",
      "Currently exploring advanced system design, database indexing, and WebSockets",
    ],
    [
      "💬",
      "Talk to me about Prisma, SQL queries, Data Structures & Algorithms (DSA)",
    ],
    [
      "⚡",
      "Translating complex algorithmic logic into fast, secure, and maintainable code",
    ],
    ["✨", "Always learning, always shipping"],
  ];
  return o.jsxs("div", {
    className: "px-12 py-12 max-w-[940px]",
    children: [
      o.jsx("p", {
        className: "text-vscode-gcm italic text-[16px] mb-3",
        children: "<!-- about.html - Suryansh -->",
      }),
      o.jsx("h2", {
        className:
          "font-display text-[40px] font-extrabold text-vscode-bright tracking-tight mb-1",
        children: "About Me",
      }),
      o.jsx("p", {
        className: "text-vscode-dim text-[14px] mb-8",
        children: "// who I am · what I do · where I build",
      }),
      o.jsx("div", {
        className:
          "reveal bg-white/[0.025] border border-vscode-border rounded p-6 mb-4",
        children: o.jsxs("p", {
          className: "text-[13px] text-vscode-dim leading-[1.9]",
          children: [
            "Hi! I'm",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "Suryansh",
            }),
            ", a software developer living at the crossroads of",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "backend architecture",
            }),
            ",",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "database optimization",
            }),
            ", and",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "real-time systems",
            }),
            ". I love building systems that are not just functional but genuinely",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children: "intelligent and scalable",
            }),
            ". Currently a",
            " ",
            o.jsx("strong", {
              className: "text-vscode-blue font-medium",
              children:
                "Currently pursuing my B.Tech in Computer Science and Engineering at RGIPT",
            }),
            ",designing robust server-side architectures and real-time collaboration engines that power high-performance applications for thousands of users.",
          ],
        }),
      }),
      o.jsxs("div", {
        className:
          "reveal> bg-white/[0.025] border border-vscode-border rounded p-5 mb-4 hover:border-white/[0.12] transition-colors",
        children: [
          o.jsx("div", {
            className:
              "text-[18px] uppercase tracking-[0.2em] text-vscode-green mb-3",
            children: "Current Focus",
          }),
          o.jsx("div", {
            className: "grid grid-cols-2 gap-x-6",
            children: a.map(([m, c]) =>
              o.jsxs(
                "div",
                {
                  className:
                    "flex gap-2.5 mb-2.5 text-[12px] text-vscode-dim leading-relaxed",
                  children: [
                    o.jsx("span", {
                      children: m,
                    }),
                    o.jsx("span", {
                      children: c,
                    }),
                  ],
                },
                c,
              ),
            ),
          }),
        ],
      }),
      o.jsxs("div", {
        className: "reveal",
        children: [
          o.jsx("div", {
            className:
              "text-[18px] uppercase tracking-[0.2em] text-vscode-green mb-3",
            children: "Education",
          }),
          o.jsx("div", {
            className: "flex flex-col gap-3",
            children: zp.map((m) =>
              o.jsxs(
                "div",
                {
                  className:
                    "bg-white/[0.025] border border-vscode-border rounded p-5 hover:border-white/[0.12] transition-colors",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-start justify-between gap-4 mb-1",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsxs("span", {
                              className:
                                "text-[16px] font-semibold text-vscode-bright block",
                              children: [m.icon, " ", m.institution],
                            }),
                            m.university &&
                              o.jsx("span", {
                                className: "text-[14px] text-vscode-dim",
                                children: m.university,
                              }),
                          ],
                        }),
                        o.jsx("span", {
                          className:
                            "text-[14px] text-vscode whitespace-nowrap mt-0.5",
                          children: m.period,
                        }),
                      ],
                    }),
                    o.jsx("p", {
                      className: "text-[12px] text-vscode-blue mt-1.5",
                      children: m.degree,
                    }),
                    m.minor &&
                      o.jsx("p", {
                        className: "text-[12px] text-vscode-dim mt-0.5",
                        children: m.minor,
                      }),
                    o.jsx("p", {
                      className: "text-[12px] text-vscode-green mt-1",
                      children: m.gpa,
                    }),
                  ],
                },
                m.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}

function Zf() {
  return (
    Pr("projects"),
    o.jsxs("div", {
      className: "px-12 py-12 max-w-[1100px]",
      children: [
        o.jsx("p", {
          className: "text-vscode-gcm italic text-[14px] mb-3",
          children: "// projects.js : things I've built & shipped",
        }),
        o.jsx("h2", {
          className:
            "font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1",
          children: "Projects",
        }),
        o.jsx("p", {
          className: "text-vscode-dim text-xs mb-8",
          children: "const projects = [ ...shipped, ...building ]",
        }),
        o.jsx("div", {
          className: "grid grid-cols-2 gap-3.5",
          children: Op.map((a) =>
            o.jsxs(
              "div",
              {
                className: `project-card reveal relative bg-white/[0.02] border border-vscode-border
                       rounded p-5 overflow-hidden
                       hover:border-white/[0.14] hover:-translate-y-0.5 hover:bg-white/[0.03]
                       transition-all duration-200`,
                style: {
                  "--card-accent": a.accent,
                },
                children: [
                  o.jsx("div", {
                    className: "mb-3",
                    children: o.jsx("span", {
                      className: "text-[22px]",
                      children: a.icon,
                    }),
                  }),
                  o.jsxs("div", {
                    className: "flex justify-between items-center mb-1.5",
                    children: [
                      o.jsx("div", {
                        className:
                          "text-[13px] uppercase tracking-[0.15em] font-medium",
                        style: {
                          color: a.accent,
                        },
                        children: a.type,
                      }),
                      o.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          o.jsx("a", {
                            href: a.link,
                            target: "_blank",
                            rel: "noreferrer",
                            className: `text-[11px] text-vscode-dim no-underline px-2 py-0.5
                            border border-vscode-border rounded-sm
                            hover:text-vscode-text hover:border-white/28 transition-colors`,
                            children: "GitHub ↗",
                          }),
                          a.demo &&
                            o.jsx("a", {
                              href: a.demo,
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "text-[11px] no-underline px-2 py-0.5 border rounded-sm transition-colors",
                              style: {
                                color: a.accent,
                                borderColor: a.accent + "55",
                              },
                              children: "Live ↗",
                            }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className:
                      "font-display text-[18px] font-extrabold text-vscode-bright mb-2.5",
                    children: a.name,
                  }),
                  o.jsx("p", {
                    className: "text-xs text-vscode-dim leading-[1.75] mb-4",
                    children: a.desc,
                  }),
                  o.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: a.tags.map((m) =>
                      o.jsx(
                        "span",
                        {
                          className: `text-[10px] px-1.5 py-0.5 bg-white/[0.04]
                             border border-white/[0.07] rounded-sm text-vscode-dim`,
                          children: m,
                        },
                        m,
                      ),
                    ),
                  }),
                ],
              },
              a.id,
            ),
          ),
        }),
      ],
    })
  );
}

function qf({ name: a, pct: m, color: c }) {
  const [I, g] = A.useState(0),
    k = A.useRef();
  return (
    A.useEffect(() => {
      const E = new IntersectionObserver(
        ([h]) => {
          h.isIntersecting && g(m);
        },
        {
          threshold: 0.2,
        },
      );
      return (k.current && E.observe(k.current), () => E.disconnect());
    }, [m]),
    o.jsxs("div", {
      ref: k,
      className: "flex items-center gap-3 mb-3",
      children: [
        o.jsx("span", {
          className: "w-28 text-[13px] text-vscode-dim flex-shrink-0",
          children: a,
        }),
        o.jsx("div", {
          className:
            "flex-1 h-[2px] bg-white/[0.06] rounded-full overflow-hidden",
          children: o.jsx("div", {
            className:
              "h-full rounded-full transition-all duration-[1400ms] ease-out",
            style: {
              width: I + "%",
              background: c,
            },
          }),
        }),
        o.jsxs("span", {
          className: "w-8 text-right text-[13px] flex-shrink-0",
          style: {
            color: c,
          },
          children: [m, "%"],
        }),
      ],
    })
  );
}

function eh() {
  return (
    Pr("skills"),
    o.jsxs("div", {
      className: "px-12 py-12 max-w-[940px]",
      children: [
        o.jsx("p", {
          className: "text-vscode-gcm italic text-[14px] mb-3",
          children: "// skills.json — tech stack & tools I actually use",
        }),
        o.jsx("h2", {
          className:
            "font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1",
          children: "Skills",
        }),
        o.jsxs("p", {
          className: "text-vscode-dim text-[14px] mb-8",
          children: [
            "{",
            ' "status": "always_learning", "passion": "immeasurable" ',
            "}",
          ],
        }),
        o.jsx("div", {
          className: "text- [18px] grid grid-cols-2 gap-x-10 gap-y-6 mb-8",
          children: _p.map((a) =>
            o.jsxs(
              "div",
              {
                className: "reveal",
                children: [
                  o.jsx("div", {
                    className:
                      "text-[16px] uppercase tracking-[0.2em] text-vscode-yel mb-4 pb-2 border-b border-vscode-border",
                    children: a.group,
                  }),
                  a.items.map((m) =>
                    o.jsx(
                      qf,
                      {
                        ...m,
                      },
                      m.name,
                    ),
                  ),
                ],
              },
              a.group,
            ),
          ),
        }),
        o.jsxs("div", {
          className: "reveal",
          children: [
            o.jsx("div", {
              className:
                "text-[16px] uppercase tracking-[0.2em] text-vscode-yel mb-4 pb-2 border-b border-vscode-border",
              children: "Also familiar with",
            }),
            o.jsx("div", {
              className: "flex flex-wrap gap-2",
              children: Dp.map((a) =>
                o.jsx(
                  "span",
                  {
                    className: `text-[13px] px-2.5 py-1 border border-vscode-border rounded text-vscode-dim\r
                         cursor-default transition-all hover:border-vscode-blue2 hover:text-vscode-blue`,
                    children: a,
                  },
                  a,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
}

function th() {
  return (
    Pr("experience"),
    o.jsxs("div", {
      className: "px-12 py-12 max-w-[940px]",
      children: [
        o.jsx("p", {
          className: "text-vscode-gcm italic text-[14px] mb-3",
          children: "// experience.ts - Career path",
        }),
        o.jsx("h2", {
          className:
            "font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1",
          children: "Positions of Responsibility",
        }),
        o.jsx("p", {
          className: "text-vscode-dim text-[14px] mb-8",
          children: "interface Career extends Timeline {}",
        }),
        o.jsx("div", {
          className: "pl-3 border-l border-vscode-border",
          children: Hp.map((a, m) =>
            o.jsxs(
              "div",
              {
                className: `reveal relative pl-5 mb-9 ${a.current ? "tl-dot" : "tl-dot-dim"}`,
                children: [
                  o.jsx("div", {
                    className:
                      "text-[14px] text-vscode-dim tracking-wide mb-1.5",
                    children: a.date,
                  }),
                  o.jsx("div", {
                    className:
                      "font-display text-[20px] font-extrabold text-vscode-bright mb-0.5",
                    children: a.role,
                  }),
                  o.jsxs("div", {
                    className: "text-[14px] text-vscode-blue mb-2.5",
                    children: ["@ ", a.company],
                  }),
                  o.jsx("p", {
                    className: "text-[14px] text-vscode-dim leading-[1.8] mb-3",
                    children: a.desc,
                  }),
                  o.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: a.tags.map((c) =>
                      o.jsx(
                        "span",
                        {
                          className: `text-[12px] px-1.5 py-0.5 rounded-sm text-vscode-blue
                             border border-vscode-blue2/25 bg-vscode-blue2/[0.08]`,
                          children: c,
                        },
                        c,
                      ),
                    ),
                  }),
                ],
              },
              a.date,
            ),
          ),
        }),
      ],
    })
  );
}
const nh = ["mnjgjpnk", "xgolpogy"],
  rh = async (a) => {
    for (const m of nh)
      try {
        if (
          (
            await fetch(`https://formspree.io/f/${m}`, {
              method: "POST",
              headers: {
                Accept: "application/json",
              },
              body: a,
            })
          ).ok
        )
          return !0;
      } catch {}
    return !1;
  },
  oh = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
      }),
    }),
  lh = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M11.654 0v2.924H9.12V0h2.534zm-5.41 1.21v2.13H4.118V1.21H6.244zm10.91 0v2.13h-2.127V1.21h2.127zm-5.5 3.584v3.327H8.73V4.794h2.924zm-5.5 1.332v2.522H4.03V6.126h2.124zm11 0v2.522h-2.127V6.126h2.127zM.63 6.244v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM11.654 9.12v2.924H9.12V9.12h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 10.452v2.522H4.118v-2.522H6.244zm11 0v2.522h-2.127v-2.522h2.127zM11.654 13.956v2.924H9.12v-2.924h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 15.288v2.52H4.118v-2.52H6.244zm11 0v2.52h-2.127v-2.52h2.127zM11.654 18.752v3.324H9.12v-3.324h2.534zm-5.41 1.33v2.13H4.118v-2.13H6.244zm10.91 0v2.13h-2.127v-2.13h2.127zM11.654 21.076V24H9.12v-2.924h2.534z",
      }),
    }),
  sh = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z",
      }),
    }),
  ih = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
      }),
    }),
  ah = () =>
    o.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "currentColor",
      children: o.jsx("path", {
        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
      }),
    }),
  ch = {
    email: {
      color: "#4ec9b0",
      bg: "rgba(78,201,176,0.08)",
    },
    linkedin: {
      color: "#0a66c2",
      bg: "rgba(10,102,194,0.08)",
    },
    github: {
      color: "#e6edf3",
      bg: "rgba(230,237,243,0.06)",
    },

    leetcode: {
      color: "#ffa116",
      bg: "rgba(255,161,22,0.08)",
    },
    youtube: {
      color: "#ff4444",
      bg: "rgba(255,68,68,0.08)",
    },
    instagram: {
      color: "#e1306c",
      bg: "rgba(225,48,108,0.08)",
    },
  };

function uh({ onToast: a }) {
  Pr("contact");
  const [m, c] = A.useState("idle"),
    I = A.useRef(),
    g = [
      {
        icon: o.jsx(nf, {}),
        label: "email",
        value: Ee.email,
        href: `mailto:${Ee.email}`,
      },
      {
        icon: o.jsx(tf, {}),
        label: "linkedin",
        value: "linkedin.com/in/suryansh-75247a31a",
        href: Ee.links.linkedin,
      },
      {
        icon: o.jsx(ef, {}),
        label: "github",
        value: "github.com/suryanshbst",
        href: Ee.links.github,
      },
      {
        icon: o.jsx(sh, {}),
        label: "leetcode",
        value: "leetcode.com/u/Sury_anonymous",
        href: Ee.links.leetcode,
      },
      {
        icon: o.jsx(sh, {}), // Using duplicate leetcode/code icon layout block as template fallback
        label: "codeforces",
        value: "codeforces.com/profile/Sury_anonymous",
        href: Ee.links.codeforces,
      },
      {
        icon: o.jsx(ah, {}),
        label: "instagram",
        value: "instagram.com/suryansh_bst",
        href: Ee.links.instagram,
      },
    ],
    k = async () => {
      var H, b, T;
      const h = I.current;
      if (!h) return;
      const j = new FormData(h);
      if (
        !((H = j.get("name")) != null && H.trim()) ||
        !((b = j.get("email")) != null && b.trim()) ||
        !((T = j.get("message")) != null && T.trim())
      ) {
        a == null || a("", "Please fill in all required fields.");
        return;
      }
      c("sending");
      try {
        (await rh(j))
          ? (c("sent"),
            h.reset(),
            a == null || a("", "Message sent! I'll get back to you soon."))
          : (c("error"),
            a == null || a("", "Failed to send , please email me directly."));
      } catch (y) {
        (c("error"),
          a == null || a("", "Failed to send , please email me directly."),
          console.error("Formspree error:", y));
      }
    },
    E = `
    w-full bg-white/[0.03] border border-vscode-border rounded-sm
    text-vscode-text font-mono text-xs px-3 py-2 outline-none mb-3
    placeholder:text-vscode-dim/50 focus:border-vscode-blue2 transition-colors
  `;
  return o.jsxs("div", {
    className: "px-12 py-12 max-w-[940px]",
    children: [
      o.jsx("p", {
        className: "text-vscode-gcm italic text-[14px] mb-3",
        children: "/* contact.css — let's build something */",
      }),
      o.jsx("h2", {
        className:
          "font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1",
        children: "Contact",
      }),
      o.jsx("p", {
        className: "text-vscode-dim text-[14px] mb-8",
        children: "// open to work, collabs & good conversations",
      }),
      o.jsxs("div", {
        className: "grid grid-cols-2 gap-7",
        children: [
          o.jsxs("div", {
            children: [
              o.jsx("div", {
                className:
                  "text-[20px] uppercase tracking-[0.2em] text-vscode-green mb-3",
                children: "Find me on",
              }),
              g.map(({ icon: h, label: j, value: H, href: b }) => {
                const T = ch[j] ?? {
                  color: "#888",
                  bg: "rgba(255,255,255,0.04)",
                };
                return o.jsxs(
                  "a",
                  {
                    href: b,
                    target: j === "email" ? "_self" : "_blank",
                    rel: "noreferrer",
                    className: `reveal flex items-center gap-3 px-3.5 py-2.5 border border-vscode-border
                           rounded no-underline mb-2 transition-all`,
                    style: {
                      background: "rgba(255,255,255,0.01)",
                    },
                    onMouseEnter: (y) => {
                      ((y.currentTarget.style.borderColor = T.color + "55"),
                        (y.currentTarget.style.background = T.bg));
                    },
                    onMouseLeave: (y) => {
                      ((y.currentTarget.style.borderColor = ""),
                        (y.currentTarget.style.background =
                          "rgba(255,255,255,0.01)"));
                    },
                    children: [
                      o.jsx("span", {
                        className:
                          "w-8 h-8 flex items-center justify-center rounded flex-shrink-0",
                        style: {
                          color: T.color,
                          background: T.bg,
                          border: `1px solid ${T.color}33`,
                        },
                        children: h,
                      }),
                      o.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          o.jsx("span", {
                            className:
                              "block text-[12px] tracking-widest uppercase mb-0.5 font-semibold",
                            style: {
                              color: T.color,
                            },
                            children: j,
                          }),
                          o.jsx("span", {
                            className:
                              "text-[12px] text-vscode-text truncate block",
                            children: H,
                          }),
                        ],
                      }),
                      o.jsx("span", {
                        className:
                          "ml-auto text-[12px] opacity-25 flex-shrink-0",
                        children: "↗",
                      }),
                    ],
                  },
                  j,
                );
              }),
            ],
          }),
          o.jsxs("div", {
            className: "reveal",
            children: [
              o.jsx("div", {
                className:
                  "text-[20px] uppercase tracking-[0.2em] text-vscode-green mb-3",
                children: "Send a message",
              }),
              o.jsxs("form", {
                ref: I,
                children: [
                  o.jsxs("label", {
                    className:
                      "block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5",
                    children: [
                      "// your_name ",
                      o.jsx("span", {
                        style: {
                          color: "#f44747",
                        },
                        children: "*",
                      }),
                    ],
                  }),
                  o.jsx("input", {
                    name: "name",
                    type: "text",
                    placeholder: "string",
                    required: !0,
                    className: E,
                    onBlur: (h) => du("name", h.target.value),
                  }),
                  o.jsxs("label", {
                    className:
                      "block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5",
                    children: [
                      "// your_email ",
                      o.jsx("span", {
                        style: {
                          color: "#f44747",
                        },
                        children: "*",
                      }),
                    ],
                  }),
                  o.jsx("input", {
                    name: "email",
                    type: "email",
                    placeholder: "string",
                    required: !0,
                    className: E,
                    onBlur: (h) => du("email", h.target.value),
                  }),
                  o.jsx("label", {
                    className:
                      "block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5",
                    children: "// subject",
                  }),
                  o.jsx("input", {
                    name: "subject",
                    type: "text",
                    placeholder: "string",
                    className: E,
                  }),
                  o.jsxs("label", {
                    className:
                      "block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5",
                    children: [
                      "// message ",
                      o.jsx("span", {
                        style: {
                          color: "#f44747",
                        },
                        children: "*",
                      }),
                    ],
                  }),
                  o.jsx("textarea", {
                    name: "message",
                    rows: 4,
                    placeholder: "'''your message'''",
                    required: !0,
                    className: `${E} resize-none`,
                  }),
                ],
              }),
              o.jsx("button", {
                onClick: k,
                disabled: m === "sending" || m === "sent",
                className:
                  "w-full px-5 py-2.5 font-mono text-xs rounded-sm text-left transition-opacity",
                style: {
                  background:
                    m === "sent"
                      ? "rgba(78,201,176,0.25)"
                      : m === "error"
                        ? "rgba(244,71,71,0.25)"
                        : "var(--blue2)",
                  color:
                    m === "sent"
                      ? "#4ec9b0"
                      : m === "error"
                        ? "#f44747"
                        : "white",
                  opacity: m === "sending" ? 0.6 : 1,
                  cursor:
                    m === "sending" || m === "sent" ? "default" : "pointer",
                },
                children:
                  m === "sending"
                    ? "→ Sending..."
                    : m === "sent"
                      ? "→ Sent! :)"
                      : m === "error"
                        ? "→ failed - try again"
                        : "→ send_message()",
              }),
              m !== "sent" &&
                o.jsx("p", {
                  className: "text-[12px] text-vscode-dim mt-2 opacity-80",
                  children:
                    "// Powered by Formspree (lands directly in my inbox) :p",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}

function dh() {
  const a = [
      [
        "Languages",
        ["C/C++", "TypeScript", "JavaScript", "SQL", "Java", "Python"],
      ],
      [
        "Backend & Real-Time",
        [
          "Node.js",
          "Express.js",
          "WebSockets",
          "RESTful APIs",
          "System Design",
        ],
      ],
      ["Databases & ORMs", ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis"]],
      [
        "GenAI & Tools",
        [
          "LLM APIs",
          "RAG Architectures",
          "LangChain",
          "AI Agents",
          "Docker",
          "Git",
        ],
      ],
    ],
    m = [
      ["🔷", "TypeScript", "#3178c6"],
      ["⚡", "Node.js", "#22c55e"],
      ["🐘", "PostgreSQL", "#38bdf8"],
      ["⬢", "Prisma", "#34d399"],
      ["🤖", "GenAI", "#a855f7"],
    ];
  return o.jsxs("div", {
    className: "px-12 py-12 max-w-[760px]",
    children: [
      o.jsx("h1", {
        className: `font-display text-[35px] font-extrabold text-vscode-bright
                     pb-2.5 border-b border-vscode-border mb-3`,
        children: "Suryansh",
      }),
      o.jsxs("p", {
        className: "text-[14px] text-vscode-dim leading-relaxed mb-2.5",
        children: [Ee.role, " · ", Ee.location],
      }),
      o.jsx("div", {
        className: "flex flex-wrap gap-1 mb-4",
        children: m.map(([c, I, g]) =>
          o.jsxs(
            "span",
            {
              className:
                "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[12px] border",
              style: {
                background: g + "22",
                borderColor: g,
                color: g,
              },
              children: [c, " ", I],
            },
            I,
          ),
        ),
      }),
      o.jsx("hr", {
        className: "border-none border-t border-vscode-border my-4",
      }),
      o.jsx("h2", {
        className:
          "font-display text-[16px] font-bold text-vscode-bright mt-5 mb-2",
        children: "💜 About",
      }),
      o.jsx("p", {
        className: "text-[14px] text-vscode-dim leading-[1.8] mb-4",
        children: Ee.bio2,
      }),
      o.jsx("ul", {
        className: "pl-6 mb-3 space-y-1",
        children: [
          [
            "🔭",
            "Building",
            "optimized backend systems & real-time platforms using TypeScript & PostgreSQL",
            "",
          ],
          [
            "🤖",
            "Deep interest in GenAI architectures, LLM APIs, and AI Agent workflows",
            "",
            "",
          ],
          [
            "⚡",
            "Translating",
            "complex algorithmic logic into fast, secure, and maintainable infrastructure",
            "",
          ],
          ["✨", "Always learning, always shipping", "", ""],
        ].map(([c, I, g, k], E) =>
          o.jsxs(
            "li",
            {
              className: "text-[13px] text-vscode-dim leading-[1.8]",
              children: [
                c,
                " ",
                I,
                " ",
                g &&
                  o.jsx("strong", {
                    className: "text-vscode-text font-medium",
                    children: g,
                  }),
                " ",
                k,
              ],
            },
            E,
          ),
        ),
      }),
      o.jsx("hr", {
        className: "border-none border-t border-vscode-border my-4",
      }),
      o.jsx("h2", {
        className:
          "font-display text-[30px] font-bold text-vscode-bright mt-5 mb-2",
        children: "Stack",
      }),
      a.map(([c, I]) =>
        o.jsxs(
          "p",
          {
            className: "text-[14px] text-vscode-dim leading-[1.8] mb-1",
            children: [
              o.jsxs("strong", {
                className: "text-vscode-text font-medium",
                children: [c, ":"],
              }),
              " ",
              I.map((g) =>
                o.jsx(
                  "code",
                  {
                    className:
                      "bg-white/[0.07] px-2 py-px rounded-sm text-vscode-orange text-[14px] mx-0.5",
                    children: g,
                  },
                  g,
                ),
              ),
            ],
          },
          c,
        ),
      ),
      o.jsx("hr", {
        className: "border-none border-t border-vscode-border my-4",
      }),
      o.jsx("h2", {
        className:
          "font-display text-[30px] font-bold text-vscode-bright mt-5 mb-2",
        children: "Connect",
      }),
      o.jsx("ul", {
        className: "pl-5 space-y-1",
        children: [
          ["Email", Ee.email],
          ["GitHub", "suryanshbst"],
          ["LinkedIn", "Suryansh"],
        ].map(([c, I]) =>
          o.jsxs(
            "li",
            {
              className: "text-[14px] text-vscode-dim leading-[1.8]",
              children: [
                c,
                ": ",
                o.jsx("strong", {
                  className: "text-vscode-text font-medium",
                  children: I,
                }),
              ],
            },
            c,
          ),
        ),
      }),
      o.jsx("hr", {
        className: "border-none border-t border-vscode-border my-4",
      }),
      o.jsxs("div", {
        className:
          "bg-white/[0.025] border border-vscode-border rounded p-5 mb-4",
        children: [
          o.jsx("h2", {
            className:
              "font-display text-[14px] font-bold text-vscode-bright mb-3",
            children: "© Copyright & Usage",
          }),
          o.jsxs("p", {
            className: "text-[13px] text-vscode-dim leading-[1.8] mb-3",
            children: [
              "This portfolio , including its design, layout, VS Code theme, AI chatbot, retro cursor, dino game, and all visual elements was",
              " ",
              o.jsx("strong", {
                className: "text-vscode-text font-medium",
                children: "designed and built from scratch by Suryansh",
              }),
              ". All rights reserved.",
            ],
          }),
          o.jsxs("p", {
            className: "text-[13px] text-vscode-dim leading-[1.8] mb-3",
            children: [
              "You are",
              " ",
              o.jsx("strong", {
                className: "text-[#f44747] font-medium",
                children: "not permitted",
              }),
              " ",
              "to copy, clone or replicate this portfolio in whole or in part, without explicit written permission. This includes the design system, component structure, animations and overall aesthetic.",
            ],
          }),
          o.jsxs("p", {
            className: "text-[13px] text-vscode-dim leading-[1.8]",
            children: [
              "If this portfolio inspired you, please build something",
              " ",
              o.jsx("strong", {
                className: "text-vscode-text font-medium",
                children: "original",
              }),
              " that reflects your own identity. If you do reference any part of this work, a visible credit linking to",
              " ",
              o.jsx("a", {
                href: "- https://www.linkedin.com/in/suryansh-75247a31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                target: "_blank",
                rel: "noreferrer",
                className:
                  "text-vscode-blue hover:opacity-75 transition-opacity",
                children:
                  "- https://www.linkedin.com/in/suryansh-75247a31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              }),
              " ",
              "is required. Failure to do so may result in a takedown request.",
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          o.jsxs("p", {
            className: "text-[12px] text-vscode-dim",
            children: [
              "© ",
              new Date().getFullYear(),
              " Suryansh · All rights reserved",
            ],
          }),
          o.jsx("p", {
            className: "text-[12px] text-vscode-dim",
            children: "Made with 🤍 from Uttar Pradesh , India",
          }),
        ],
      }),
    ],
  });
}

function ph() {
  const [a, m] = A.useState(() => window.innerWidth < 1024);
  return (
    A.useEffect(() => {
      const c = () => m(window.innerWidth < 1024);
      return (
        window.addEventListener("resize", c),
        () => window.removeEventListener("resize", c)
      );
    }, []),
    a
  );
}
const fh = 260,
  hh = 520,
  mh = 320;

function xh() {
  const [a, m] = A.useState(["home"]),
    [c, I] = A.useState("home"),
    [g, k] = A.useState(!1),
    [E, h] = A.useState(!1),
    [j, H] = A.useState(""),
    [b, T] = A.useState([]),
    [y, F] = A.useState(!0),
    [M, B] = A.useState(!1),
    [R, S] = A.useState(!1),
    [V, U] = A.useState(mh),
    K = ph(),
    ve = A.useRef(!1),
    je = A.useRef(0),
    oe = A.useRef(0);
  (A.useEffect(() => {
    (F(!K), B(!1));
  }, [K]),
    A.useEffect(() => {
      Cf();
    }, []),
    A.useEffect(() => {
      Sf(c);
    }, [c]));
  const { themeId: ye, setThemeId: ot } = Lp(),
    Ie = A.useCallback((N, O) => {
      const _ = Date.now();
      (T((p) => [
        ...p,
        {
          id: _,
          icon: N,
          msg: O,
        },
      ]),
        setTimeout(() => T((p) => p.filter((C) => C.id !== _)), 4e3));
    }, []),
    $e = A.useCallback(
      (N) => {
        ot(N);
        const O = mn.find((_) => _.id === N);
        O && Ie(O.icon, `Theme switched to ${O.name}`);
      },
      [ot, Ie],
    ),
    J = A.useCallback((N) => {
      if (N === "resume") {
        window.open("/Suryansh_Resume.pdf", "_blank");
        return;
      }
      (m((O) => (O.includes(N) ? O : [...O, N])), I(N));
    }, []),
    Ae = A.useCallback((N) => {
      m((O) => {
        const _ = O.filter((C) => C !== N),
          p = _.length ? _ : ["home"];
        return (I((C) => (C === N ? p[p.length - 1] : C)), p);
      });
    }, []),
    de = A.useCallback(() => {
      S((N) => !N);
    }, []);
  (A.useEffect(() => {
    const N = (O) => {
      const _ = O.ctrlKey || O.metaKey;
      (_ && O.key === "p" && (O.preventDefault(), h(!0)),
        _ && O.key === "b" && (O.preventDefault(), F((p) => !p)),
        _ && O.key === "`" && (O.preventDefault(), k((p) => !p)),
        _ && O.shiftKey && O.key === "C" && (O.preventDefault(), de()),
        O.key === "Escape" && (h(!1), H("")));
    };
    return (
      window.addEventListener("keydown", N),
      () => window.removeEventListener("keydown", N)
    );
  }, [de]),
    A.useEffect(() => {
      if (K) return;
      const N = document.createElement("style");
      ((N.id = "retro-cursor-style"),
        (N.textContent = `
      * { cursor: none !important; }
      #retro-cursor-outer {
        position: fixed;
        width: 26px; height: 26px;
        border: 1.5px solid rgba(255,255,255,0.55);
        pointer-events: none;
        z-index: 999999;
        transform: translate(-50%, -50%);
        transition: width 0.18s ease, height 0.18s ease, border-color 0.18s ease, background 0.18s ease;
      }
      #retro-cursor-outer::before, #retro-cursor-outer::after {
        content: '';
        position: absolute;
        background: rgba(255,255,255,0.4);
      }
      #retro-cursor-outer::before {
        top: 50%; left: -5px;
        width: 4px; height: 1px;
        transform: translateY(-50%);
      }
      #retro-cursor-outer::after {
        left: 50%; top: -5px;
        height: 4px; width: 1px;
        transform: translateX(-50%);
      }
      #retro-cursor-inner {
        position: fixed;
        width: 5px; height: 5px;
        background: rgba(255,255,255,0.9);
        pointer-events: none;
        z-index: 999999;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px rgba(255,255,255,0.5);
      }
    `),
        document.head.appendChild(N));
      const O = document.createElement("div");
      O.id = "retro-cursor-outer";
      const _ = document.createElement("div");
      ((_.id = "retro-cursor-inner"),
        document.body.appendChild(O),
        document.body.appendChild(_));
      let p = -100,
        C = -100,
        ee = -100,
        X = -100;
      const ne = (se) => {
        ((p = se.clientX),
          (C = se.clientY),
          (_.style.left = p + "px"),
          (_.style.top = C + "px"));
        const ie = document.elementFromPoint(p, C);
        ie &&
        (ie.closest("a") ||
          ie.closest("button") ||
          ie.closest("input") ||
          ie.closest("textarea"))
          ? ((O.style.width = "38px"),
            (O.style.height = "38px"),
            (O.style.borderColor = "rgba(78,201,176,0.8)"),
            (O.style.background = "rgba(78,201,176,0.06)"),
            (_.style.background = "#4ec9b0"),
            (_.style.boxShadow = "0 0 6px rgba(78,201,176,0.7)"))
          : ((O.style.width = "40px"),
            (O.style.height = "40px"),
            (O.style.borderColor = "rgba(255,255,255,0.55)"),
            (O.style.background = "transparent"),
            (_.style.background = "rgba(255,255,255,0.9)"),
            (_.style.boxShadow = "0 0 6px rgba(255,255,255,0.5)"));
      };
      let le;
      const pe = () => {
        ((ee += (p - ee) * 0.75),
          (X += (C - X) * 0.13),
          (O.style.left = ee + "px"),
          (O.style.top = X + "px"),
          (le = requestAnimationFrame(pe)));
      };
      return (
        window.addEventListener("mousemove", ne),
        pe(),
        () => {
          var se, ie, _e;
          (window.removeEventListener("mousemove", ne),
            cancelAnimationFrame(le),
            (se = document.getElementById("retro-cursor-style")) == null ||
              se.remove(),
            (ie = document.getElementById("retro-cursor-outer")) == null ||
              ie.remove(),
            (_e = document.getElementById("retro-cursor-inner")) == null ||
              _e.remove());
        }
      );
    }, [K]));
  const Qe = A.useCallback(
      (N) => {
        (N.preventDefault(),
          (ve.current = !0),
          (je.current = N.clientX),
          (oe.current = V));
        const O = (p) => {
            if (!ve.current) return;
            const C = je.current - p.clientX,
              ee = Math.min(hh, Math.max(fh, oe.current + C));
            U(ee);
          },
          _ = () => {
            ((ve.current = !1),
              document.removeEventListener("mousemove", O),
              document.removeEventListener("mouseup", _),
              (document.body.style.cursor = ""),
              (document.body.style.userSelect = ""));
          };
        (document.addEventListener("mousemove", O),
          document.addEventListener("mouseup", _),
          (document.body.style.cursor = "col-resize"),
          (document.body.style.userSelect = "none"));
      },
      [V],
    ),
    Pe = (() => {
      const N = y ? "220px" : "0px";
      return R
        ? {
            gridTemplateColumns: `48px ${N} 1fr ${V}px`,
            gridTemplateAreas: `'title  title  title  title'
           'menu   menu   menu   menu'
           'act    side   editor copilot'
           'status status status status'`,
          }
        : {
            gridTemplateColumns: `48px ${N} 1fr`,
            gridTemplateAreas: `'title  title  title'
         'menu   menu   menu'
         'act    side   editor'
         'status status status'`,
          };
    })(),
    ce = () => {
      switch (c) {
        case "home":
          return o.jsx(Jf, {
            onNavigate: J,
          });
        case "about":
          return o.jsx(Xf, {});
        case "projects":
          return o.jsx(Zf, {});
        case "skills":
          return o.jsx(eh, {});
        case "experience":
          return o.jsx(th, {});
        case "contact":
          return o.jsx(uh, {
            onToast: Ie,
          });
        case "readme":
          return o.jsx(dh, {});
        default:
          return o.jsx("div", {
            className: "p-6 text-vscode-dim text-sm",
            children: "File not found",
          });
      }
    };
  return K
    ? o.jsxs(o.Fragment, {
        children: [
          o.jsxs("div", {
            className: "app-grid app-compact",
            children: [
              o.jsxs("div", {
                className: "compact-topbar",
                children: [
                  o.jsxs("button", {
                    onClick: () => B(!0),
                    "aria-label": "Open explorer",
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      padding: "6px",
                      borderRadius: "4px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    },
                    children: [
                      o.jsx("span", {
                        style: {
                          display: "block",
                          height: "1.5px",
                          width: "18px",
                          borderRadius: "2px",
                          background: "var(--text)",
                        },
                      }),
                      o.jsx("span", {
                        style: {
                          display: "block",
                          height: "1.5px",
                          width: "18px",
                          borderRadius: "2px",
                          background: "var(--text)",
                        },
                      }),
                      o.jsx("span", {
                        style: {
                          display: "block",
                          height: "1.5px",
                          width: "18px",
                          borderRadius: "2px",
                          background: "var(--text)",
                        },
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      overflow: "hidden",
                      flex: 1,
                      minWidth: 0,
                    },
                    children: [
                      o.jsx("span", {
                        style: {
                          color: "var(--dim)",
                          flexShrink: 0,
                        },
                        children: "~/",
                      }),
                      o.jsx("span", {
                        style: {
                          color: "var(--text)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                        children: R ? "copilot" : c,
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    onClick: de,
                    title: "Suryansh's Copilot (Ctrl+Shift+C)",
                    style: {
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: R
                        ? "rgba(110,64,201,0.4)"
                        : "rgba(255,255,255,0.06)",
                      border: R
                        ? "1px solid rgba(110,64,201,0.6)"
                        : "1px solid transparent",
                      cursor: "pointer",
                      position: "relative",
                    },
                    children: [
                      o.jsx("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: R ? "#b48eff" : "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: o.jsx("path", {
                          d: "M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z",
                        }),
                      }),
                      !R &&
                        o.jsx("span", {
                          style: {
                            position: "absolute",
                            top: "3px",
                            right: "3px",
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "#6E40C9",
                            animation: "pulse-dot 2s infinite",
                          },
                        }),
                    ],
                  }),
                  o.jsx("button", {
                    onClick: () => h(!0),
                    style: {
                      marginLeft: "4px",
                      flexShrink: 0,
                      fontSize: "12px",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--dim)",
                      border: "none",
                      cursor: "pointer",
                    },
                    children: "🔍",
                  }),
                ],
              }),
              o.jsx("div", {
                className: "compact-content",
                children: R
                  ? o.jsx(mu, {
                      onClose: () => S(!1),
                    })
                  : o.jsx(
                      "div",
                      {
                        className: "pane-enter",
                        children: ce(),
                      },
                      c,
                    ),
              }),
              o.jsx("div", {
                className: "compact-status",
                children: o.jsx(iu, {
                  activeFile: c,
                  onToggleTerm: () => {},
                  themeId: ye,
                  onThemeChange: $e,
                  copilotOpen: R,
                  onToggleCopilot: de,
                }),
              }),
            ],
          }),
          M &&
            o.jsx(jf, {
              activeFile: c,
              onNavigate: J,
              onClose: () => B(!1),
              themeId: ye,
              onThemeChange: $e,
              onToggleCopilot: de,
            }),
          E &&
            o.jsx(au, {
              query: j,
              onQueryChange: H,
              onSelect: (N) => {
                if (N === "copilot") {
                  (de(), h(!1), H(""));
                  return;
                }
                (J(N), h(!1), H(""));
              },
              onClose: () => {
                (h(!1), H(""));
              },
              onToggleCopilot: de,
            }),
          o.jsx(cu, {
            toasts: b,
          }),
          o.jsx("style", {
            children: `
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.4); }
        }
      `,
          }),
        ],
      })
    : o.jsxs(o.Fragment, {
        children: [
          o.jsxs("div", {
            className: "app-grid",
            style: Pe,
            children: [
              o.jsx(Rp, {
                onOpenCmd: () => h(!0),
              }),
              o.jsx(Bp, {
                onToggleTerm: () => k((N) => !N),
                onOpenCmd: () => h(!0),
                onNavigate: J,
                onToggleSidebar: () => F((N) => !N),
                onToggleCopilot: de,
                copilotOpen: R,
                activeFile: c,
                openTabs: a,
                onCloseTab: Ae,
              }),
              o.jsx(sf, {
                sidebarOpen: y,
                onToggleSidebar: () => F((N) => !N),
                onOpenCmd: () => h(!0),
                onToggleTerm: () => k((N) => !N),
                themeId: ye,
                onThemeChange: $e,
                copilotOpen: R,
                onToggleCopilot: de,
              }),
              y &&
                o.jsx(cf, {
                  activeFile: c,
                  onFileClick: J,
                  copilotOpen: R,
                  onToggleCopilot: de,
                }),
              o.jsxs("div", {
                style: {
                  gridArea: "editor",
                },
                className: "flex flex-col overflow-hidden bg-vscode-bg",
                children: [
                  o.jsx(uf, {
                    openTabs: a,
                    activeFile: c,
                    onTabClick: J,
                    onTabClose: Ae,
                  }),
                  o.jsx(df, {
                    activeFile: c,
                  }),
                  o.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-y-auto overflow-x-hidden",
                    children: o.jsx(
                      "div",
                      {
                        className: "pane-enter",
                        children: ce(),
                      },
                      c,
                    ),
                  }),
                  g &&
                    o.jsx(pf, {
                      onClose: () => k(!1),
                      onOpenFile: J,
                    }),
                ],
              }),
              R &&
                o.jsxs("div", {
                  style: {
                    gridArea: "copilot",
                    borderLeft: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    position: "relative",
                    height: "100%",
                  },
                  children: [
                    o.jsx("div", {
                      onMouseDown: Qe,
                      style: {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "5px",
                        cursor: "col-resize",
                        zIndex: 10,
                        background: "transparent",
                        transition: "background .15s",
                      },
                      onMouseEnter: (N) =>
                        (N.currentTarget.style.background =
                          "rgba(110,64,201,0.35)"),
                      onMouseLeave: (N) =>
                        (N.currentTarget.style.background = "transparent"),
                      title: "Drag to resize",
                    }),
                    o.jsx(mu, {
                      onClose: () => S(!1),
                    }),
                  ],
                }),
              o.jsx(iu, {
                activeFile: c,
                onToggleTerm: () => k((N) => !N),
                themeId: ye,
                onThemeChange: $e,
                copilotOpen: R,
                onToggleCopilot: de,
              }),
            ],
          }),
          E &&
            o.jsx(au, {
              query: j,
              onQueryChange: H,
              onSelect: (N) => {
                if (N === "copilot") {
                  (de(), h(!1), H(""));
                  return;
                }
                (J(N), h(!1), H(""));
              },
              onClose: () => {
                (h(!1), H(""));
              },
              onToggleCopilot: de,
            }),
          o.jsx(cu, {
            toasts: b,
          }),
        ],
      });
}
Pp.createRoot(document.getElementById("root")).render(
  o.jsx(Np.StrictMode, {
    children: o.jsx(xh, {}),
  }),
);
