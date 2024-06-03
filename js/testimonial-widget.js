(() => {
  var e = {};
  async function n() {
    document.querySelectorAll(".testimonial-to-embed").forEach((e) => {
      let n;
      if (!(e instanceof HTMLElement) || 0 !== e.childElementCount) return;
      let t = e.getAttribute("data-url"),
        i = "true" === e.getAttribute("data-resize"),
        o = "true" === e.getAttribute("data-resize-width"),
        r = e.getAttribute("data-allow"),
        a = e.getAttribute("data-redirect-click");
      if (t) {
        if (
          (((n = document.createElement("iframe")).src = t),
          (n.style.border = "none"),
          (n.height = "100%"),
          o || (n.width = "100%"),
          r && (n.allow = r),
          a)
        ) {
          let t = document.createElement("a");
          (t.href = a),
            (t.target = "_blank"),
            e.addEventListener("mouseup", () => {
              t.click();
            }),
            (e.style.cursor = "pointer"),
            (n.style.pointerEvents = "none");
        }
        e.append(n);
      }
      i &&
        n &&
        window.iFrameResize({ log: !1, checkOrigin: !1, sizeWidth: o }, n);
    });
  }
  /*! iFrame Resizer (iframeSizer.min.js ) - v4.3.1 - 2021-01-11
   * Desc: Force cross domain iframes to size to content.
   * Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
   * Copyright: (c) 2021 David J. Bradshaw - dave@bradshaw.net
   * License: MIT
   */ !(function (n) {
    if ("undefined" != typeof window) {
      var t,
        i = 0,
        o = !1,
        r = !1,
        a = 7,
        s = "[iFrameSizer]",
        d = s.length,
        c = null,
        l = window.requestAnimationFrame,
        u = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
        f = {},
        m = null,
        g = {
          autoResize: !0,
          bodyBackground: null,
          bodyMargin: null,
          bodyMarginV1: 8,
          bodyPadding: null,
          checkOrigin: !0,
          inPageLinks: !1,
          enablePublicMethods: !0,
          heightCalculationMethod: "bodyOffset",
          id: "iFrameResizer",
          interval: 32,
          log: !1,
          maxHeight: 1 / 0,
          maxWidth: 1 / 0,
          minHeight: 0,
          minWidth: 0,
          mouseEvents: !0,
          resizeFrom: "parent",
          scrolling: !1,
          sizeHeight: !0,
          sizeWidth: !1,
          warningTimeout: 5e3,
          tolerance: 0,
          widthCalculationMethod: "scroll",
          onClose: function () {
            return !0;
          },
          onClosed: function () {},
          onInit: function () {},
          onMessage: function () {
            k("onMessage function not defined");
          },
          onMouseEnter: function () {},
          onMouseLeave: function () {},
          onResized: function () {},
          onScroll: function () {
            return !0;
          },
        },
        h = {};
      window.jQuery &&
        ((t = window.jQuery).fn
          ? t.fn.iFrameResize ||
            (t.fn.iFrameResize = function (e) {
              return this.filter("iframe")
                .each(function (n, t) {
                  H(t, e);
                })
                .end();
            })
          : M("", "Unable to bind to jQuery, it is not fully loaded.")),
        "function" == typeof define && define.amd
          ? define([], P)
          : "object" == typeof e && (e = P()),
        (window.iFrameResize = window.iFrameResize || P());
    }
    function p() {
      return (
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver
      );
    }
    function w(e, n, t) {
      e.addEventListener(n, t, !1);
    }
    function b(e, n, t) {
      e.removeEventListener(n, t, !1);
    }
    function y(e) {
      return f[e] ? f[e].log : o;
    }
    function v(e, n) {
      x("log", e, n, y(e));
    }
    function M(e, n) {
      x("info", e, n, y(e));
    }
    function k(e, n) {
      x("warn", e, n, !0);
    }
    function x(e, n, t, i) {
      var o;
      !0 === i &&
        "object" == typeof window.console &&
        console[e](
          s +
            "[" +
            ((o = "Host page: " + n),
            window.top !== window.self &&
              (o =
                window.parentIFrame && window.parentIFrame.getId
                  ? window.parentIFrame.getId() + ": " + n
                  : "Nested host page: " + n),
            o) +
            "]",
          t
        );
    }
    function z(e) {
      function n() {
        t("Height"),
          t("Width"),
          W(
            function () {
              N(L), R(P), I(P, "onResized", L);
            },
            L,
            "init"
          );
      }
      function t(e) {
        var n = Number(f[P]["max" + e]),
          t = Number(f[P]["min" + e]),
          i = e.toLowerCase(),
          o = Number(L[i]);
        v(P, "Checking " + i + " is in range " + t + "-" + n),
          o < t && ((o = t), v(P, "Set " + i + " to min value")),
          n < o && ((o = n), v(P, "Set " + i + " to max value")),
          (L[i] = "" + o);
      }
      function i(e) {
        return j.substr(j.indexOf(":") + a + e);
      }
      function o(e, n) {
        var t;
        (t = function () {
          var t, i;
          C(
            "Send Page Info",
            "pageInfo:" +
              ((t = document.body.getBoundingClientRect()),
              JSON.stringify({
                iframeHeight: (i = L.iframe.getBoundingClientRect()).height,
                iframeWidth: i.width,
                clientHeight: Math.max(
                  document.documentElement.clientHeight,
                  window.innerHeight || 0
                ),
                clientWidth: Math.max(
                  document.documentElement.clientWidth,
                  window.innerWidth || 0
                ),
                offsetTop: parseInt(i.top - t.top, 10),
                offsetLeft: parseInt(i.left - t.left, 10),
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset,
                documentHeight: document.documentElement.clientHeight,
                documentWidth: document.documentElement.clientWidth,
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth,
              })),
            e,
            n
          );
        }),
          h[n] ||
            (h[n] = setTimeout(function () {
              (h[n] = null), t();
            }, 32));
      }
      function r(e) {
        var n = e.getBoundingClientRect();
        return (
          O(P),
          {
            x: Math.floor(Number(n.left) + Number(c.x)),
            y: Math.floor(Number(n.top) + Number(c.y)),
          }
        );
      }
      function l(e) {
        var n = e ? r(L.iframe) : { x: 0, y: 0 },
          t = { x: Number(L.width) + n.x, y: Number(L.height) + n.y };
        v(
          P,
          "Reposition requested from iFrame (offset x:" +
            n.x +
            " y:" +
            n.y +
            ")"
        ),
          window.top !== window.self
            ? window.parentIFrame
              ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](t.x, t.y)
              : k(
                  P,
                  "Unable to scroll to requested position, window.parentIFrame not found"
                )
            : ((c = t), u(), v(P, "--"));
      }
      function u() {
        !1 !== I(P, "onScroll", c) ? R(P) : (c = null);
      }
      function m(e) {
        var n,
          t = {};
        if (0 === Number(L.width) && 0 === Number(L.height)) {
          var o = i(9).split(":");
          t = { x: o[1], y: o[0] };
        } else t = { x: L.width, y: L.height };
        (n = {
          iframe: L.iframe,
          screenX: Number(t.x),
          screenY: Number(t.y),
          type: L.type,
        }),
          I(P, e, n);
      }
      var g,
        p,
        y,
        x,
        z,
        F,
        H,
        A,
        j = e.data,
        L = {},
        P = null;
      "[iFrameResizerChild]Ready" === j
        ? (function () {
            for (var e in f) C("iFrame requested init", S(e), f[e].iframe, e);
          })()
        : s === ("" + j).substr(0, d) && j.substr(d).split(":")[0] in f
        ? ((F = (z = j.substr(d).split(":"))[1] ? parseInt(z[1], 10) : 0),
          (A = getComputedStyle((H = f[z[0]] && f[z[0]].iframe))),
          f[
            (P = (L = {
              iframe: H,
              id: z[0],
              height:
                F +
                ("border-box" !== A.boxSizing
                  ? 0
                  : (A.paddingTop ? parseInt(A.paddingTop, 10) : 0) +
                    (A.paddingBottom ? parseInt(A.paddingBottom, 10) : 0)) +
                ("border-box" !== A.boxSizing
                  ? 0
                  : (A.borderTopWidth ? parseInt(A.borderTopWidth, 10) : 0) +
                    (A.borderBottomWidth
                      ? parseInt(A.borderBottomWidth, 10)
                      : 0)),
              width: z[2],
              type: z[3],
            }).id)
          ] && (f[P].loaded = !0),
          (x = L.type in { true: 1, false: 1, undefined: 1 }) &&
            v(P, "Ignoring init message from meta parent page"),
          !x &&
            ((y = !0),
            f[(p = P)] ||
              ((y = !1),
              k(L.type + " No settings for " + p + ". Message was: " + j)),
            y) &&
            (v(P, "Received: " + j),
            (g = !0),
            null === L.iframe &&
              (k(P, "IFrame (" + L.id + ") not found"), (g = !1)),
            g &&
              (function () {
                var n,
                  t = e.origin,
                  i = f[P] && f[P].checkOrigin;
                if (
                  i &&
                  "" + t != "null" &&
                  !(i.constructor === Array
                    ? (function () {
                        var e = 0,
                          n = !1;
                        for (
                          v(
                            P,
                            "Checking connection is from allowed list of origins: " +
                              i
                          );
                          e < i.length;
                          e++
                        )
                          if (i[e] === t) {
                            n = !0;
                            break;
                          }
                        return n;
                      })()
                    : ((n = f[P] && f[P].remoteHost),
                      v(P, "Checking connection is from: " + n),
                      t === n))
                )
                  throw Error(
                    "Unexpected message received from: " +
                      t +
                      " for " +
                      L.iframe.id +
                      ". Message was: " +
                      e.data +
                      ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
                  );
                return !0;
              })() &&
              (function () {
                var e, t, a, s, d, g, h;
                switch (
                  (f[P] && f[P].firstRun && f[P] && (f[P].firstRun = !1),
                  L.type)
                ) {
                  case "close":
                    E(L.iframe);
                    break;
                  case "message":
                    (e = i(6)),
                      v(
                        P,
                        "onMessage passed: {iframe: " +
                          L.iframe.id +
                          ", message: " +
                          e +
                          "}"
                      ),
                      (g = { iframe: L.iframe, message: JSON.parse(e) }),
                      I(P, "onMessage", g),
                      v(P, "--");
                    break;
                  case "mouseenter":
                    m("onMouseEnter");
                    break;
                  case "mouseleave":
                    m("onMouseLeave");
                    break;
                  case "autoResize":
                    f[P].autoResize = JSON.parse(i(9));
                    break;
                  case "scrollTo":
                    l(!1);
                    break;
                  case "scrollToOffset":
                    l(!0);
                    break;
                  case "pageInfo":
                    o(f[P] && f[P].iframe, P),
                      (function () {
                        function e(e, i) {
                          function r() {
                            f[t] ? o(f[t].iframe, t) : n();
                          }
                          ["scroll", "resize"].forEach(function (n) {
                            v(t, e + n + " listener for sendPageInfo"),
                              i(window, n, r);
                          });
                        }
                        function n() {
                          e("Remove ", b);
                        }
                        var t = P;
                        e("Add ", w), f[t] && (f[t].stopPageInfo = n);
                      })();
                    break;
                  case "pageInfoStop":
                    f[P] &&
                      f[P].stopPageInfo &&
                      (f[P].stopPageInfo(), delete f[P].stopPageInfo);
                    break;
                  case "inPageLink":
                    (s = decodeURIComponent((a = i(9).split("#")[1] || ""))),
                      (d =
                        document.getElementById(s) ||
                        document.getElementsByName(s)[0])
                        ? ((t = r(d)),
                          v(
                            P,
                            "Moving to in page link (#" +
                              a +
                              ") at x: " +
                              t.x +
                              " y: " +
                              t.y
                          ),
                          (c = { x: t.x, y: t.y }),
                          u(),
                          v(P, "--"))
                        : window.top !== window.self
                        ? window.parentIFrame
                          ? window.parentIFrame.moveToAnchor(a)
                          : v(
                              P,
                              "In page link #" +
                                a +
                                " not found and window.parentIFrame not found"
                            )
                        : v(P, "In page link #" + a + " not found");
                    break;
                  case "reset":
                    T(L);
                    break;
                  case "init":
                    n(), (h = L.iframe), I(P, "onInit", h);
                    break;
                  default:
                    0 === Number(L.width) && 0 === Number(L.height)
                      ? k(
                          "Unsupported message received (" +
                            L.type +
                            "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
                        )
                      : n();
                }
              })()))
        : M(P, "Ignored: " + j);
    }
    function I(e, n, t) {
      var i = null,
        o = null;
      if (f[e]) {
        if ("function" != typeof (i = f[e][n]))
          throw TypeError(n + " on iFrame[" + e + "] is not a function");
        o = i(t);
      }
      return o;
    }
    function F(e) {
      delete f[e.id];
    }
    function E(e) {
      var n = e.id;
      if (!1 !== I(n, "onClose", n)) {
        v(n, "Removing iFrame: " + n);
        try {
          e.parentNode && e.parentNode.removeChild(e);
        } catch (e) {
          k(e);
        }
        I(n, "onClosed", n), v(n, "--"), F(e);
      } else v(n, "Close iframe cancelled by onClose event");
    }
    function O(e) {
      null === c &&
        v(
          e,
          "Get page position: " +
            (c = {
              x:
                window.pageXOffset !== n
                  ? window.pageXOffset
                  : document.documentElement.scrollLeft,
              y:
                window.pageYOffset !== n
                  ? window.pageYOffset
                  : document.documentElement.scrollTop,
            }).x +
            "," +
            c.y
        );
    }
    function R(e) {
      null !== c &&
        (window.scrollTo(c.x, c.y),
        v(e, "Set page position: " + c.x + "," + c.y),
        (c = null));
    }
    function T(e) {
      v(
        e.id,
        "Size reset requested by " +
          ("init" === e.type ? "host page" : "iFrame")
      ),
        O(e.id),
        W(
          function () {
            N(e), C("reset", "reset", e.iframe, e.id);
          },
          e,
          "reset"
        );
    }
    function N(e) {
      function n(n) {
        e.id
          ? ((e.iframe.style[n] = e[n] + "px"),
            v(e.id, "IFrame (" + t + ") " + n + " set to " + e[n] + "px"))
          : v("undefined", "messageData id not set"),
          r ||
            "0" !== e[n] ||
            ((r = !0),
            v(t, "Hidden iFrame detected, creating visibility listener"),
            (function () {
              function e() {
                Object.keys(f).forEach(function (e) {
                  !(function (e) {
                    function n(n) {
                      return "0px" === (f[e] && f[e].iframe.style[n]);
                    }
                    f[e] &&
                      null !== f[e].iframe.offsetParent &&
                      (n("height") || n("width")) &&
                      C("Visibility change", "resize", f[e].iframe, e);
                  })(e);
                });
              }
              var n,
                t = p();
              t &&
                ((n = document.querySelector("body")),
                new t(function (n) {
                  v(
                    "window",
                    "Mutation observed: " + n[0].target + " " + n[0].type
                  ),
                    A(e, 16);
                }).observe(n, {
                  attributes: !0,
                  attributeOldValue: !1,
                  characterData: !0,
                  characterDataOldValue: !1,
                  childList: !0,
                  subtree: !0,
                }));
            })());
      }
      var t = e.iframe.id;
      f[t] && (f[t].sizeHeight && n("height"), f[t].sizeWidth && n("width"));
    }
    function W(e, n, t) {
      t !== n.type && l && !window.jasmine
        ? (v(n.id, "Requesting animation frame"), l(e))
        : e();
    }
    function C(e, n, t, i, o) {
      var r,
        a = !1;
      f[(i = i || t.id)] &&
        (t && "contentWindow" in t && null !== t.contentWindow
          ? ((r = f[i] && f[i].targetOrigin),
            v(
              i,
              "[" +
                e +
                "] Sending msg to iframe[" +
                i +
                "] (" +
                n +
                ") targetOrigin: " +
                r
            ),
            t.contentWindow.postMessage(s + n, r))
          : k(i, "[" + e + "] IFrame(" + i + ") not found"),
        o &&
          f[i] &&
          f[i].warningTimeout &&
          (f[i].msgTimeout = setTimeout(function () {
            !f[i] ||
              f[i].loaded ||
              a ||
              ((a = !0),
              k(
                i,
                "IFrame has not responded within " +
                  f[i].warningTimeout / 1e3 +
                  " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
              ));
          }, f[i].warningTimeout)));
    }
    function S(e) {
      return (
        e +
        ":" +
        f[e].bodyMarginV1 +
        ":" +
        f[e].sizeWidth +
        ":" +
        f[e].log +
        ":" +
        f[e].interval +
        ":" +
        f[e].enablePublicMethods +
        ":" +
        f[e].autoResize +
        ":" +
        f[e].bodyMargin +
        ":" +
        f[e].heightCalculationMethod +
        ":" +
        f[e].bodyBackground +
        ":" +
        f[e].bodyPadding +
        ":" +
        f[e].tolerance +
        ":" +
        f[e].inPageLinks +
        ":" +
        f[e].resizeFrom +
        ":" +
        f[e].widthCalculationMethod +
        ":" +
        f[e].mouseEvents
      );
    }
    function H(e, t) {
      var r,
        a,
        s,
        d,
        c,
        l,
        m =
          ("" === (s = e.id) &&
            ((e.id =
              ((a = (t && t.id) || g.id + i++),
              null !== document.getElementById(a) && (a += i++),
              (s = a))),
            (o = (t || {}).log),
            v(s, "Added missing iframe ID: " + s + " (" + e.src + ")")),
          s);
      function h(n) {
        1 / 0 !== f[m][n] &&
          0 !== f[m][n] &&
          ((e.style[n] = f[m][n] + "px"),
          v(m, "Set " + n + " = " + f[m][n] + "px"));
      }
      function b(e) {
        if (f[m]["min" + e] > f[m]["max" + e])
          throw Error("Value for min" + e + " can not be greater than max" + e);
      }
      m in f && "iFrameResizer" in e
        ? k(m, "Ignored iFrame, already setup.")
        : ((l = (l = t) || {}),
          (f[m] = {
            firstRun: !0,
            iframe: e,
            remoteHost: e.src && e.src.split("/").slice(0, 3).join("/"),
          }),
          (function (e) {
            if ("object" != typeof e)
              throw TypeError("Options is not an object");
          })(l),
          Object.keys(l).forEach(function (e) {
            var n = e.split("Callback");
            if (2 === n.length) {
              var t = "on" + n[0].charAt(0).toUpperCase() + n[0].slice(1);
              (this[t] = this[e]),
                delete this[e],
                k(
                  m,
                  "Deprecated: '" +
                    e +
                    "' has been renamed '" +
                    t +
                    "'. The old method will be removed in the next major version."
                );
            }
          }, l),
          (function (e) {
            for (var n in g)
              Object.prototype.hasOwnProperty.call(g, n) &&
                (f[m][n] = Object.prototype.hasOwnProperty.call(e, n)
                  ? e[n]
                  : g[n]);
          })(l),
          f[m] &&
            (f[m].targetOrigin =
              !0 === f[m].checkOrigin
                ? "" === (r = f[m].remoteHost) ||
                  null !== r.match(/^(about:blank|javascript:|file:\/\/)/)
                  ? "*"
                  : r
                : "*"),
          (function () {
            switch (
              (v(
                m,
                "IFrame scrolling " +
                  (f[m] && f[m].scrolling ? "enabled" : "disabled") +
                  " for " +
                  m
              ),
              (e.style.overflow =
                !1 === (f[m] && f[m].scrolling) ? "hidden" : "auto"),
              f[m] && f[m].scrolling)
            ) {
              case "omit":
                break;
              case !0:
                e.scrolling = "yes";
                break;
              case !1:
                e.scrolling = "no";
                break;
              default:
                e.scrolling = f[m] ? f[m].scrolling : "no";
            }
          })(),
          b("Height"),
          b("Width"),
          h("maxHeight"),
          h("minHeight"),
          h("maxWidth"),
          h("minWidth"),
          ("number" != typeof (f[m] && f[m].bodyMargin) &&
            "0" !== (f[m] && f[m].bodyMargin)) ||
            ((f[m].bodyMarginV1 = f[m].bodyMargin),
            (f[m].bodyMargin = f[m].bodyMargin + "px")),
          (d = S(m)),
          (c = p()) &&
            e.parentNode &&
            new c(function (n) {
              n.forEach(function (n) {
                Array.prototype.slice
                  .call(n.removedNodes)
                  .forEach(function (n) {
                    n === e && E(e);
                  });
              });
            }).observe(e.parentNode, { childList: !0 }),
          w(e, "load", function () {
            var t, i;
            C("iFrame.onload", d, e, n, !0),
              (t = f[m] && f[m].firstRun),
              (i = f[m] && f[m].heightCalculationMethod in u),
              !t && i && T({ iframe: e, height: 0, width: 0, type: "init" });
          }),
          C("init", d, e, n, !0),
          f[m] &&
            (f[m].iframe.iFrameResizer = {
              close: E.bind(null, f[m].iframe),
              removeListeners: F.bind(null, f[m].iframe),
              resize: C.bind(null, "Window resize", "resize", f[m].iframe),
              moveToAnchor: function (e) {
                C("Move to anchor", "moveToAnchor:" + e, f[m].iframe, m);
              },
              sendMessage: function (e) {
                C(
                  "Send Message",
                  "message:" + (e = JSON.stringify(e)),
                  f[m].iframe,
                  m
                );
              },
            }));
    }
    function A(e, n) {
      null === m &&
        (m = setTimeout(function () {
          (m = null), e();
        }, n));
    }
    function j() {
      "hidden" !== document.visibilityState &&
        (v("document", "Trigger event: Visiblity change"),
        A(function () {
          L("Tab Visable", "resize");
        }, 16));
    }
    function L(e, n) {
      Object.keys(f).forEach(function (t) {
        f[t] &&
          "parent" === f[t].resizeFrom &&
          f[t].autoResize &&
          !f[t].firstRun &&
          C(e, n, f[t].iframe, t);
      });
    }
    function P() {
      var e;
      function t(n, t) {
        t &&
          ((function () {
            if (!t.tagName)
              throw TypeError("Object is not a valid DOM element");
            if ("IFRAME" !== t.tagName.toUpperCase())
              throw TypeError(
                "Expected <IFRAME> tag, found <" + t.tagName + ">"
              );
          })(),
          H(t, n),
          e.push(t));
      }
      return (
        (function () {
          var e,
            n = ["moz", "webkit", "o", "ms"];
          for (e = 0; e < n.length && !l; e += 1)
            l = window[n[e] + "RequestAnimationFrame"];
          l
            ? (l = l.bind(window))
            : v("setup", "RequestAnimationFrame not supported");
        })(),
        w(window, "message", z),
        w(window, "resize", function () {
          var e = "resize";
          v("window", "Trigger event: " + e),
            A(function () {
              L("Window " + e, "resize");
            }, 16);
        }),
        w(document, "visibilitychange", j),
        w(document, "-webkit-visibilitychange", j),
        function (i, o) {
          switch (
            ((e = []),
            i &&
              i.enablePublicMethods &&
              k(
                "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
              ),
            typeof o)
          ) {
            case "undefined":
            case "string":
              Array.prototype.forEach.call(
                document.querySelectorAll(o || "iframe"),
                t.bind(n, i)
              );
              break;
            case "object":
              t(i, o);
              break;
            default:
              throw TypeError("Unexpected data type (" + typeof o + ")");
          }
          return e;
        }
      );
    }
  })(),
    "loading" === document.readyState
      ? window.addEventListener("DOMContentLoaded", n)
      : n();
})();
