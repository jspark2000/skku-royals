;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    276: function (t, e, i) {
      !(function (t) {
        'use strict'
        /*!
         * perfect-scrollbar v1.5.2
         * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
         * Licensed under MIT
         */ function e(t) {
          return getComputedStyle(t)
        }
        function i(t, e) {
          for (var i in e) {
            var s = e[i]
            'number' == typeof s && (s += 'px'), (t.style[i] = s)
          }
          return t
        }
        function s(t) {
          var e = document.createElement('div')
          return (e.className = t), e
        }
        var r =
          'undefined' != typeof Element &&
          (Element.prototype.matches ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector)
        function a(t, e) {
          if (!r) throw new Error('No element matching method supported')
          return r.call(t, e)
        }
        function n(t) {
          t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }
        function o(t, e) {
          return Array.prototype.filter.call(t.children, function (t) {
            return a(t, e)
          })
        }
        var h = 'ps',
          l = 'ps__rtl',
          c = {
            thumb: function (t) {
              return 'ps__thumb-' + t
            },
            rail: function (t) {
              return 'ps__rail-' + t
            },
            consuming: 'ps__child--consume'
          },
          p = {
            focus: 'ps--focus',
            clicking: 'ps--clicking',
            active: function (t) {
              return 'ps--active-' + t
            },
            scrolling: function (t) {
              return 'ps--scrolling-' + t
            }
          },
          u = { x: null, y: null }
        function d(t, e) {
          var i = t.element.classList,
            s = p.scrolling(e)
          i.contains(s) ? clearTimeout(u[e]) : i.add(s)
        }
        function f(t, e) {
          u[e] = setTimeout(function () {
            return t.isAlive && t.element.classList.remove(p.scrolling(e))
          }, t.settings.scrollingThreshold)
        }
        var m = function (t) {
            ;(this.element = t), (this.handlers = {})
          },
          g = { isEmpty: { configurable: !0 } }
        ;(m.prototype.bind = function (t, e) {
          void 0 === this.handlers[t] && (this.handlers[t] = []),
            this.handlers[t].push(e),
            this.element.addEventListener(t, e, !1)
        }),
          (m.prototype.unbind = function (t, e) {
            var i = this
            this.handlers[t] = this.handlers[t].filter(function (s) {
              return (
                !(!e || s === e) ||
                (i.element.removeEventListener(t, s, !1), !1)
              )
            })
          }),
          (m.prototype.unbindAll = function () {
            for (var t in this.handlers) this.unbind(t)
          }),
          (g.isEmpty.get = function () {
            var t = this
            return Object.keys(this.handlers).every(function (e) {
              return 0 === t.handlers[e].length
            })
          }),
          Object.defineProperties(m.prototype, g)
        var v = function () {
          this.eventElements = []
        }
        function y(t) {
          if ('function' == typeof window.CustomEvent) return new CustomEvent(t)
          var e = document.createEvent('CustomEvent')
          return e.initCustomEvent(t, !1, !1, void 0), e
        }
        function x(t, e, i, s, r) {
          var a
          if ((void 0 === s && (s = !0), void 0 === r && (r = !1), 'top' === e))
            a = [
              'contentHeight',
              'containerHeight',
              'scrollTop',
              'y',
              'up',
              'down'
            ]
          else {
            if ('left' !== e)
              throw new Error('A proper axis should be provided')
            a = [
              'contentWidth',
              'containerWidth',
              'scrollLeft',
              'x',
              'left',
              'right'
            ]
          }
          !(function (t, e, i, s, r) {
            var a = i[0],
              n = i[1],
              o = i[2],
              h = i[3],
              l = i[4],
              c = i[5]
            void 0 === s && (s = !0), void 0 === r && (r = !1)
            var p = t.element
            ;(t.reach[h] = null),
              p[o] < 1 && (t.reach[h] = 'start'),
              p[o] > t[a] - t[n] - 1 && (t.reach[h] = 'end'),
              e &&
                (p.dispatchEvent(y('ps-scroll-' + h)),
                e < 0
                  ? p.dispatchEvent(y('ps-scroll-' + l))
                  : e > 0 && p.dispatchEvent(y('ps-scroll-' + c)),
                s &&
                  (function (t, e) {
                    d(t, e), f(t, e)
                  })(t, h)),
              t.reach[h] &&
                (e || r) &&
                p.dispatchEvent(y('ps-' + h + '-reach-' + t.reach[h]))
          })(t, i, a, s, r)
        }
        function b(t) {
          return parseInt(t, 10) || 0
        }
        ;(v.prototype.eventElement = function (t) {
          var e = this.eventElements.filter(function (e) {
            return e.element === t
          })[0]
          return e || ((e = new m(t)), this.eventElements.push(e)), e
        }),
          (v.prototype.bind = function (t, e, i) {
            this.eventElement(t).bind(e, i)
          }),
          (v.prototype.unbind = function (t, e, i) {
            var s = this.eventElement(t)
            s.unbind(e, i),
              s.isEmpty &&
                this.eventElements.splice(this.eventElements.indexOf(s), 1)
          }),
          (v.prototype.unbindAll = function () {
            this.eventElements.forEach(function (t) {
              return t.unbindAll()
            }),
              (this.eventElements = [])
          }),
          (v.prototype.once = function (t, e, i) {
            var s = this.eventElement(t),
              r = function (t) {
                s.unbind(e, r), i(t)
              }
            s.bind(e, r)
          })
        var _ = {
          isWebKit:
            'undefined' != typeof document &&
            'WebkitAppearance' in document.documentElement.style,
          supportsTouch:
            'undefined' != typeof window &&
            ('ontouchstart' in window ||
              ('maxTouchPoints' in window.navigator &&
                window.navigator.maxTouchPoints > 0) ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch)),
          supportsIePointer:
            'undefined' != typeof navigator && navigator.msMaxTouchPoints,
          isChrome:
            'undefined' != typeof navigator &&
            /Chrome/i.test(navigator && navigator.userAgent)
        }
        function k(t) {
          var e = t.element,
            s = Math.floor(e.scrollTop),
            r = e.getBoundingClientRect()
          ;(t.containerWidth = Math.round(r.width)),
            (t.containerHeight = Math.round(r.height)),
            (t.contentWidth = e.scrollWidth),
            (t.contentHeight = e.scrollHeight),
            e.contains(t.scrollbarXRail) ||
              (o(e, c.rail('x')).forEach(function (t) {
                return n(t)
              }),
              e.appendChild(t.scrollbarXRail)),
            e.contains(t.scrollbarYRail) ||
              (o(e, c.rail('y')).forEach(function (t) {
                return n(t)
              }),
              e.appendChild(t.scrollbarYRail)),
            !t.settings.suppressScrollX &&
            t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
              ? ((t.scrollbarXActive = !0),
                (t.railXWidth = t.containerWidth - t.railXMarginWidth),
                (t.railXRatio = t.containerWidth / t.railXWidth),
                (t.scrollbarXWidth = w(
                  t,
                  b((t.railXWidth * t.containerWidth) / t.contentWidth)
                )),
                (t.scrollbarXLeft = b(
                  ((t.negativeScrollAdjustment + e.scrollLeft) *
                    (t.railXWidth - t.scrollbarXWidth)) /
                    (t.contentWidth - t.containerWidth)
                )))
              : (t.scrollbarXActive = !1),
            !t.settings.suppressScrollY &&
            t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
              ? ((t.scrollbarYActive = !0),
                (t.railYHeight = t.containerHeight - t.railYMarginHeight),
                (t.railYRatio = t.containerHeight / t.railYHeight),
                (t.scrollbarYHeight = w(
                  t,
                  b((t.railYHeight * t.containerHeight) / t.contentHeight)
                )),
                (t.scrollbarYTop = b(
                  (s * (t.railYHeight - t.scrollbarYHeight)) /
                    (t.contentHeight - t.containerHeight)
                )))
              : (t.scrollbarYActive = !1),
            t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
              (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
            t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
              (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
            (function (t, e) {
              var s = { width: e.railXWidth },
                r = Math.floor(t.scrollTop)
              e.isRtl
                ? (s.left =
                    e.negativeScrollAdjustment +
                    t.scrollLeft +
                    e.containerWidth -
                    e.contentWidth)
                : (s.left = t.scrollLeft),
                e.isScrollbarXUsingBottom
                  ? (s.bottom = e.scrollbarXBottom - r)
                  : (s.top = e.scrollbarXTop + r),
                i(e.scrollbarXRail, s)
              var a = { top: r, height: e.railYHeight }
              e.isScrollbarYUsingRight
                ? e.isRtl
                  ? (a.right =
                      e.contentWidth -
                      (e.negativeScrollAdjustment + t.scrollLeft) -
                      e.scrollbarYRight -
                      e.scrollbarYOuterWidth -
                      9)
                  : (a.right = e.scrollbarYRight - t.scrollLeft)
                : e.isRtl
                ? (a.left =
                    e.negativeScrollAdjustment +
                    t.scrollLeft +
                    2 * e.containerWidth -
                    e.contentWidth -
                    e.scrollbarYLeft -
                    e.scrollbarYOuterWidth)
                : (a.left = e.scrollbarYLeft + t.scrollLeft),
                i(e.scrollbarYRail, a),
                i(e.scrollbarX, {
                  left: e.scrollbarXLeft,
                  width: e.scrollbarXWidth - e.railBorderXWidth
                }),
                i(e.scrollbarY, {
                  top: e.scrollbarYTop,
                  height: e.scrollbarYHeight - e.railBorderYWidth
                })
            })(e, t),
            t.scrollbarXActive
              ? e.classList.add(p.active('x'))
              : (e.classList.remove(p.active('x')),
                (t.scrollbarXWidth = 0),
                (t.scrollbarXLeft = 0),
                (e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0)),
            t.scrollbarYActive
              ? e.classList.add(p.active('y'))
              : (e.classList.remove(p.active('y')),
                (t.scrollbarYHeight = 0),
                (t.scrollbarYTop = 0),
                (e.scrollTop = 0))
        }
        function w(t, e) {
          return (
            t.settings.minScrollbarLength &&
              (e = Math.max(e, t.settings.minScrollbarLength)),
            t.settings.maxScrollbarLength &&
              (e = Math.min(e, t.settings.maxScrollbarLength)),
            e
          )
        }
        function S(t, e) {
          var i = e[0],
            s = e[1],
            r = e[2],
            a = e[3],
            n = e[4],
            o = e[5],
            h = e[6],
            l = e[7],
            c = e[8],
            u = t.element,
            m = null,
            g = null,
            v = null
          function y(e) {
            e.touches && e.touches[0] && (e[r] = e.touches[0].pageY),
              (u[h] = m + v * (e[r] - g)),
              d(t, l),
              k(t),
              e.stopPropagation(),
              e.preventDefault()
          }
          function x() {
            f(t, l),
              t[c].classList.remove(p.clicking),
              t.event.unbind(t.ownerDocument, 'mousemove', y)
          }
          function b(e, n) {
            ;(m = u[h]),
              n && e.touches && (e[r] = e.touches[0].pageY),
              (g = e[r]),
              (v = (t[s] - t[i]) / (t[a] - t[o])),
              n
                ? t.event.bind(t.ownerDocument, 'touchmove', y)
                : (t.event.bind(t.ownerDocument, 'mousemove', y),
                  t.event.once(t.ownerDocument, 'mouseup', x),
                  e.preventDefault()),
              t[c].classList.add(p.clicking),
              e.stopPropagation()
          }
          t.event.bind(t[n], 'mousedown', function (t) {
            b(t)
          }),
            t.event.bind(t[n], 'touchstart', function (t) {
              b(t, !0)
            })
        }
        var C = {
            'click-rail': function (t) {
              t.element,
                t.event.bind(t.scrollbarY, 'mousedown', function (t) {
                  return t.stopPropagation()
                }),
                t.event.bind(t.scrollbarYRail, 'mousedown', function (e) {
                  var i =
                    e.pageY -
                      window.pageYOffset -
                      t.scrollbarYRail.getBoundingClientRect().top >
                    t.scrollbarYTop
                      ? 1
                      : -1
                  ;(t.element.scrollTop += i * t.containerHeight),
                    k(t),
                    e.stopPropagation()
                }),
                t.event.bind(t.scrollbarX, 'mousedown', function (t) {
                  return t.stopPropagation()
                }),
                t.event.bind(t.scrollbarXRail, 'mousedown', function (e) {
                  var i =
                    e.pageX -
                      window.pageXOffset -
                      t.scrollbarXRail.getBoundingClientRect().left >
                    t.scrollbarXLeft
                      ? 1
                      : -1
                  ;(t.element.scrollLeft += i * t.containerWidth),
                    k(t),
                    e.stopPropagation()
                })
            },
            'drag-thumb': function (t) {
              S(t, [
                'containerWidth',
                'contentWidth',
                'pageX',
                'railXWidth',
                'scrollbarX',
                'scrollbarXWidth',
                'scrollLeft',
                'x',
                'scrollbarXRail'
              ]),
                S(t, [
                  'containerHeight',
                  'contentHeight',
                  'pageY',
                  'railYHeight',
                  'scrollbarY',
                  'scrollbarYHeight',
                  'scrollTop',
                  'y',
                  'scrollbarYRail'
                ])
            },
            keyboard: function (t) {
              var e = t.element
              t.event.bind(t.ownerDocument, 'keydown', function (i) {
                if (
                  !(
                    (i.isDefaultPrevented && i.isDefaultPrevented()) ||
                    i.defaultPrevented
                  ) &&
                  (a(e, ':hover') ||
                    a(t.scrollbarX, ':focus') ||
                    a(t.scrollbarY, ':focus'))
                ) {
                  var s,
                    r = document.activeElement
                      ? document.activeElement
                      : t.ownerDocument.activeElement
                  if (r) {
                    if ('IFRAME' === r.tagName)
                      r = r.contentDocument.activeElement
                    else for (; r.shadowRoot; ) r = r.shadowRoot.activeElement
                    if (
                      a((s = r), 'input,[contenteditable]') ||
                      a(s, 'select,[contenteditable]') ||
                      a(s, 'textarea,[contenteditable]') ||
                      a(s, 'button,[contenteditable]')
                    )
                      return
                  }
                  var n = 0,
                    o = 0
                  switch (i.which) {
                    case 37:
                      n = i.metaKey
                        ? -t.contentWidth
                        : i.altKey
                        ? -t.containerWidth
                        : -30
                      break
                    case 38:
                      o = i.metaKey
                        ? t.contentHeight
                        : i.altKey
                        ? t.containerHeight
                        : 30
                      break
                    case 39:
                      n = i.metaKey
                        ? t.contentWidth
                        : i.altKey
                        ? t.containerWidth
                        : 30
                      break
                    case 40:
                      o = i.metaKey
                        ? -t.contentHeight
                        : i.altKey
                        ? -t.containerHeight
                        : -30
                      break
                    case 32:
                      o = i.shiftKey ? t.containerHeight : -t.containerHeight
                      break
                    case 33:
                      o = t.containerHeight
                      break
                    case 34:
                      o = -t.containerHeight
                      break
                    case 36:
                      o = t.contentHeight
                      break
                    case 35:
                      o = -t.contentHeight
                      break
                    default:
                      return
                  }
                  ;(t.settings.suppressScrollX && 0 !== n) ||
                    (t.settings.suppressScrollY && 0 !== o) ||
                    ((e.scrollTop -= o),
                    (e.scrollLeft += n),
                    k(t),
                    (function (i, s) {
                      var r = Math.floor(e.scrollTop)
                      if (0 === i) {
                        if (!t.scrollbarYActive) return !1
                        if (
                          (0 === r && s > 0) ||
                          (r >= t.contentHeight - t.containerHeight && s < 0)
                        )
                          return !t.settings.wheelPropagation
                      }
                      var a = e.scrollLeft
                      if (0 === s) {
                        if (!t.scrollbarXActive) return !1
                        if (
                          (0 === a && i < 0) ||
                          (a >= t.contentWidth - t.containerWidth && i > 0)
                        )
                          return !t.settings.wheelPropagation
                      }
                      return !0
                    })(n, o) && i.preventDefault())
                }
              })
            },
            wheel: function (t) {
              var i = t.element
              function s(s) {
                var r = (function (t) {
                    var e = t.deltaX,
                      i = -1 * t.deltaY
                    return (
                      (void 0 !== e && void 0 !== i) ||
                        ((e = (-1 * t.wheelDeltaX) / 6),
                        (i = t.wheelDeltaY / 6)),
                      t.deltaMode &&
                        1 === t.deltaMode &&
                        ((e *= 10), (i *= 10)),
                      e != e && i != i && ((e = 0), (i = t.wheelDelta)),
                      t.shiftKey ? [-i, -e] : [e, i]
                    )
                  })(s),
                  a = r[0],
                  n = r[1]
                if (
                  !(function (t, s, r) {
                    if (!_.isWebKit && i.querySelector('select:focus'))
                      return !0
                    if (!i.contains(t)) return !1
                    for (var a = t; a && a !== i; ) {
                      if (a.classList.contains(c.consuming)) return !0
                      var n = e(a)
                      if (r && n.overflowY.match(/(scroll|auto)/)) {
                        var o = a.scrollHeight - a.clientHeight
                        if (
                          o > 0 &&
                          ((a.scrollTop > 0 && r < 0) ||
                            (a.scrollTop < o && r > 0))
                        )
                          return !0
                      }
                      if (s && n.overflowX.match(/(scroll|auto)/)) {
                        var h = a.scrollWidth - a.clientWidth
                        if (
                          h > 0 &&
                          ((a.scrollLeft > 0 && s < 0) ||
                            (a.scrollLeft < h && s > 0))
                        )
                          return !0
                      }
                      a = a.parentNode
                    }
                    return !1
                  })(s.target, a, n)
                ) {
                  var o = !1
                  t.settings.useBothWheelAxes
                    ? t.scrollbarYActive && !t.scrollbarXActive
                      ? (n
                          ? (i.scrollTop -= n * t.settings.wheelSpeed)
                          : (i.scrollTop += a * t.settings.wheelSpeed),
                        (o = !0))
                      : t.scrollbarXActive &&
                        !t.scrollbarYActive &&
                        (a
                          ? (i.scrollLeft += a * t.settings.wheelSpeed)
                          : (i.scrollLeft -= n * t.settings.wheelSpeed),
                        (o = !0))
                    : ((i.scrollTop -= n * t.settings.wheelSpeed),
                      (i.scrollLeft += a * t.settings.wheelSpeed)),
                    k(t),
                    (o =
                      o ||
                      (function (e, s) {
                        var r = Math.floor(i.scrollTop),
                          a = 0 === i.scrollTop,
                          n = r + i.offsetHeight === i.scrollHeight,
                          o = 0 === i.scrollLeft,
                          h = i.scrollLeft + i.offsetWidth === i.scrollWidth
                        return (
                          !(Math.abs(s) > Math.abs(e) ? a || n : o || h) ||
                          !t.settings.wheelPropagation
                        )
                      })(a, n)) &&
                      !s.ctrlKey &&
                      (s.stopPropagation(), s.preventDefault())
                }
              }
              void 0 !== window.onwheel
                ? t.event.bind(i, 'wheel', s)
                : void 0 !== window.onmousewheel &&
                  t.event.bind(i, 'mousewheel', s)
            },
            touch: function (t) {
              if (_.supportsTouch || _.supportsIePointer) {
                var i = t.element,
                  s = {},
                  r = 0,
                  a = {},
                  n = null
                _.supportsTouch
                  ? (t.event.bind(i, 'touchstart', p),
                    t.event.bind(i, 'touchmove', u),
                    t.event.bind(i, 'touchend', d))
                  : _.supportsIePointer &&
                    (window.PointerEvent
                      ? (t.event.bind(i, 'pointerdown', p),
                        t.event.bind(i, 'pointermove', u),
                        t.event.bind(i, 'pointerup', d))
                      : window.MSPointerEvent &&
                        (t.event.bind(i, 'MSPointerDown', p),
                        t.event.bind(i, 'MSPointerMove', u),
                        t.event.bind(i, 'MSPointerUp', d)))
              }
              function o(e, s) {
                ;(i.scrollTop -= s), (i.scrollLeft -= e), k(t)
              }
              function h(t) {
                return t.targetTouches ? t.targetTouches[0] : t
              }
              function l(t) {
                return !(
                  (t.pointerType &&
                    'pen' === t.pointerType &&
                    0 === t.buttons) ||
                  ((!t.targetTouches || 1 !== t.targetTouches.length) &&
                    (!t.pointerType ||
                      'mouse' === t.pointerType ||
                      t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                )
              }
              function p(t) {
                if (l(t)) {
                  var e = h(t)
                  ;(s.pageX = e.pageX),
                    (s.pageY = e.pageY),
                    (r = new Date().getTime()),
                    null !== n && clearInterval(n)
                }
              }
              function u(n) {
                if (l(n)) {
                  var p = h(n),
                    u = { pageX: p.pageX, pageY: p.pageY },
                    d = u.pageX - s.pageX,
                    f = u.pageY - s.pageY
                  if (
                    (function (t, s, r) {
                      if (!i.contains(t)) return !1
                      for (var a = t; a && a !== i; ) {
                        if (a.classList.contains(c.consuming)) return !0
                        var n = e(a)
                        if (r && n.overflowY.match(/(scroll|auto)/)) {
                          var o = a.scrollHeight - a.clientHeight
                          if (
                            o > 0 &&
                            ((a.scrollTop > 0 && r < 0) ||
                              (a.scrollTop < o && r > 0))
                          )
                            return !0
                        }
                        if (s && n.overflowX.match(/(scroll|auto)/)) {
                          var h = a.scrollWidth - a.clientWidth
                          if (
                            h > 0 &&
                            ((a.scrollLeft > 0 && s < 0) ||
                              (a.scrollLeft < h && s > 0))
                          )
                            return !0
                        }
                        a = a.parentNode
                      }
                      return !1
                    })(n.target, d, f)
                  )
                    return
                  o(d, f), (s = u)
                  var m = new Date().getTime(),
                    g = m - r
                  g > 0 && ((a.x = d / g), (a.y = f / g), (r = m)),
                    (function (e, s) {
                      var r = Math.floor(i.scrollTop),
                        a = i.scrollLeft,
                        n = Math.abs(e),
                        o = Math.abs(s)
                      if (o > n) {
                        if (
                          (s < 0 &&
                            r === t.contentHeight - t.containerHeight) ||
                          (s > 0 && 0 === r)
                        )
                          return 0 === window.scrollY && s > 0 && _.isChrome
                      } else if (
                        n > o &&
                        ((e < 0 && a === t.contentWidth - t.containerWidth) ||
                          (e > 0 && 0 === a))
                      )
                        return !0
                      return !0
                    })(d, f) && n.preventDefault()
                }
              }
              function d() {
                t.settings.swipeEasing &&
                  (clearInterval(n),
                  (n = setInterval(function () {
                    t.isInitialized
                      ? clearInterval(n)
                      : a.x || a.y
                      ? Math.abs(a.x) < 0.01 && Math.abs(a.y) < 0.01
                        ? clearInterval(n)
                        : t.element
                        ? (o(30 * a.x, 30 * a.y), (a.x *= 0.8), (a.y *= 0.8))
                        : clearInterval(n)
                      : clearInterval(n)
                  }, 10)))
              }
            }
          },
          E = function (t, r) {
            var a = this
            if (
              (void 0 === r && (r = {}),
              'string' == typeof t && (t = document.querySelector(t)),
              !t || !t.nodeName)
            )
              throw new Error(
                'no element is specified to initialize PerfectScrollbar'
              )
            for (var n in ((this.element = t),
            t.classList.add(h),
            (this.settings = {
              handlers: [
                'click-rail',
                'drag-thumb',
                'keyboard',
                'wheel',
                'touch'
              ],
              maxScrollbarLength: null,
              minScrollbarLength: null,
              scrollingThreshold: 1e3,
              scrollXMarginOffset: 0,
              scrollYMarginOffset: 0,
              suppressScrollX: !1,
              suppressScrollY: !1,
              swipeEasing: !0,
              useBothWheelAxes: !1,
              wheelPropagation: !0,
              wheelSpeed: 1
            }),
            r))
              this.settings[n] = r[n]
            ;(this.containerWidth = null),
              (this.containerHeight = null),
              (this.contentWidth = null),
              (this.contentHeight = null)
            var o,
              u,
              d = function () {
                return t.classList.add(p.focus)
              },
              f = function () {
                return t.classList.remove(p.focus)
              }
            ;(this.isRtl = 'rtl' === e(t).direction),
              !0 === this.isRtl && t.classList.add(l),
              (this.isNegativeScroll =
                ((u = t.scrollLeft),
                (t.scrollLeft = -1),
                (o = t.scrollLeft < 0),
                (t.scrollLeft = u),
                o)),
              (this.negativeScrollAdjustment = this.isNegativeScroll
                ? t.scrollWidth - t.clientWidth
                : 0),
              (this.event = new v()),
              (this.ownerDocument = t.ownerDocument || document),
              (this.scrollbarXRail = s(c.rail('x'))),
              t.appendChild(this.scrollbarXRail),
              (this.scrollbarX = s(c.thumb('x'))),
              this.scrollbarXRail.appendChild(this.scrollbarX),
              this.scrollbarX.setAttribute('tabindex', 0),
              this.event.bind(this.scrollbarX, 'focus', d),
              this.event.bind(this.scrollbarX, 'blur', f),
              (this.scrollbarXActive = null),
              (this.scrollbarXWidth = null),
              (this.scrollbarXLeft = null)
            var m = e(this.scrollbarXRail)
            ;(this.scrollbarXBottom = parseInt(m.bottom, 10)),
              isNaN(this.scrollbarXBottom)
                ? ((this.isScrollbarXUsingBottom = !1),
                  (this.scrollbarXTop = b(m.top)))
                : (this.isScrollbarXUsingBottom = !0),
              (this.railBorderXWidth =
                b(m.borderLeftWidth) + b(m.borderRightWidth)),
              i(this.scrollbarXRail, { display: 'block' }),
              (this.railXMarginWidth = b(m.marginLeft) + b(m.marginRight)),
              i(this.scrollbarXRail, { display: '' }),
              (this.railXWidth = null),
              (this.railXRatio = null),
              (this.scrollbarYRail = s(c.rail('y'))),
              t.appendChild(this.scrollbarYRail),
              (this.scrollbarY = s(c.thumb('y'))),
              this.scrollbarYRail.appendChild(this.scrollbarY),
              this.scrollbarY.setAttribute('tabindex', 0),
              this.event.bind(this.scrollbarY, 'focus', d),
              this.event.bind(this.scrollbarY, 'blur', f),
              (this.scrollbarYActive = null),
              (this.scrollbarYHeight = null),
              (this.scrollbarYTop = null)
            var g = e(this.scrollbarYRail)
            ;(this.scrollbarYRight = parseInt(g.right, 10)),
              isNaN(this.scrollbarYRight)
                ? ((this.isScrollbarYUsingRight = !1),
                  (this.scrollbarYLeft = b(g.left)))
                : (this.isScrollbarYUsingRight = !0),
              (this.scrollbarYOuterWidth = this.isRtl
                ? (function (t) {
                    var i = e(t)
                    return (
                      b(i.width) +
                      b(i.paddingLeft) +
                      b(i.paddingRight) +
                      b(i.borderLeftWidth) +
                      b(i.borderRightWidth)
                    )
                  })(this.scrollbarY)
                : null),
              (this.railBorderYWidth =
                b(g.borderTopWidth) + b(g.borderBottomWidth)),
              i(this.scrollbarYRail, { display: 'block' }),
              (this.railYMarginHeight = b(g.marginTop) + b(g.marginBottom)),
              i(this.scrollbarYRail, { display: '' }),
              (this.railYHeight = null),
              (this.railYRatio = null),
              (this.reach = {
                x:
                  t.scrollLeft <= 0
                    ? 'start'
                    : t.scrollLeft >= this.contentWidth - this.containerWidth
                    ? 'end'
                    : null,
                y:
                  t.scrollTop <= 0
                    ? 'start'
                    : t.scrollTop >= this.contentHeight - this.containerHeight
                    ? 'end'
                    : null
              }),
              (this.isAlive = !0),
              this.settings.handlers.forEach(function (t) {
                return C[t](a)
              }),
              (this.lastScrollTop = Math.floor(t.scrollTop)),
              (this.lastScrollLeft = t.scrollLeft),
              this.event.bind(this.element, 'scroll', function (t) {
                return a.onScroll(t)
              }),
              k(this)
          }
        ;(E.prototype.update = function () {
          this.isAlive &&
            ((this.negativeScrollAdjustment = this.isNegativeScroll
              ? this.element.scrollWidth - this.element.clientWidth
              : 0),
            i(this.scrollbarXRail, { display: 'block' }),
            i(this.scrollbarYRail, { display: 'block' }),
            (this.railXMarginWidth =
              b(e(this.scrollbarXRail).marginLeft) +
              b(e(this.scrollbarXRail).marginRight)),
            (this.railYMarginHeight =
              b(e(this.scrollbarYRail).marginTop) +
              b(e(this.scrollbarYRail).marginBottom)),
            i(this.scrollbarXRail, { display: 'none' }),
            i(this.scrollbarYRail, { display: 'none' }),
            k(this),
            x(this, 'top', 0, !1, !0),
            x(this, 'left', 0, !1, !0),
            i(this.scrollbarXRail, { display: '' }),
            i(this.scrollbarYRail, { display: '' }))
        }),
          (E.prototype.onScroll = function (t) {
            this.isAlive &&
              (k(this),
              x(this, 'top', this.element.scrollTop - this.lastScrollTop),
              x(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
              (this.lastScrollTop = Math.floor(this.element.scrollTop)),
              (this.lastScrollLeft = this.element.scrollLeft))
          }),
          (E.prototype.destroy = function () {
            this.isAlive &&
              (this.event.unbindAll(),
              n(this.scrollbarX),
              n(this.scrollbarY),
              n(this.scrollbarXRail),
              n(this.scrollbarYRail),
              this.removePsClasses(),
              (this.element = null),
              (this.scrollbarX = null),
              (this.scrollbarY = null),
              (this.scrollbarXRail = null),
              (this.scrollbarYRail = null),
              (this.isAlive = !1))
          }),
          (E.prototype.removePsClasses = function () {
            this.element.className = this.element.className
              .split(' ')
              .filter(function (t) {
                return !t.match(/^ps([-_].+|)$/)
              })
              .join(' ')
          })
        var A = {
          name: 'PerfectScrollbar',
          props: {
            options: { type: Object, required: !1, default: function () {} },
            tag: { type: String, required: !1, default: 'div' },
            watchOptions: { type: Boolean, required: !1, default: !1 }
          },
          data: function () {
            return { ps: null }
          },
          watch: {
            watchOptions: function (t) {
              !t && this.watcher ? this.watcher() : this.createWatcher()
            }
          },
          mounted: function () {
            this.create(), this.watchOptions && this.createWatcher()
          },
          updated: function () {
            var t = this
            this.$nextTick(function () {
              t.update()
            })
          },
          beforeDestroy: function () {
            this.destroy()
          },
          methods: {
            create: function () {
              ;(this.ps && this.$isServer) ||
                (this.ps = new E(this.$refs.container, this.options))
            },
            createWatcher: function () {
              var t = this
              this.watcher = this.$watch(
                'options',
                function () {
                  t.destroy(), t.create()
                },
                { deep: !0 }
              )
            },
            update: function () {
              this.ps && this.ps.update()
            },
            destroy: function () {
              this.ps && (this.ps.destroy(), (this.ps = null))
            }
          },
          render: function (t) {
            return t(
              this.tag,
              { ref: 'container', class: 'ps', on: this.$listeners },
              this.$slots.default
            )
          }
        }
        function P(t, e) {
          e &&
            (e.name && 'string' == typeof e.name && (A.name = e.name),
            e.options &&
              'object' == typeof e.options &&
              (A.props.options.default = function () {
                return e.options
              }),
            e.tag && 'string' == typeof e.tag && (A.props.tag.default = e.tag),
            e.watchOptions &&
              'boolean' == typeof e.watchOptions &&
              (A.props.watchOptions = e.watchOptions)),
            t.component(A.name, A)
        }
        ;(t.install = P),
          (t.PerfectScrollbar = A),
          (t.default = P),
          Object.defineProperty(t, '__esModule', { value: !0 })
      })(e)
    },
    290: function (t, e, i) {},
    291: function (t, e, i) {},
    292: function (t, e, i) {},
    293: function (t, e, i) {},
    294: function (t, e, i) {},
    295: function (t, e, i) {},
    322: function (t, e, i) {
      'use strict'
      i(290)
    },
    323: function (t, e, i) {
      'use strict'
      i(291)
    },
    324: function (t, e, i) {
      var s = (function (t) {
        var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          i = 0,
          s = {},
          r = {
            manual: t.Prism && t.Prism.manual,
            disableWorkerMessageHandler:
              t.Prism && t.Prism.disableWorkerMessageHandler,
            util: {
              encode: function t(e) {
                return e instanceof a
                  ? new a(e.type, t(e.content), e.alias)
                  : Array.isArray(e)
                  ? e.map(t)
                  : e
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ')
              },
              type: function (t) {
                return Object.prototype.toString.call(t).slice(8, -1)
              },
              objId: function (t) {
                return (
                  t.__id || Object.defineProperty(t, '__id', { value: ++i }),
                  t.__id
                )
              },
              clone: function t(e, i) {
                var s, a
                switch (((i = i || {}), r.util.type(e))) {
                  case 'Object':
                    if (((a = r.util.objId(e)), i[a])) return i[a]
                    for (var n in ((s = {}), (i[a] = s), e))
                      e.hasOwnProperty(n) && (s[n] = t(e[n], i))
                    return s
                  case 'Array':
                    return (
                      (a = r.util.objId(e)),
                      i[a]
                        ? i[a]
                        : ((s = []),
                          (i[a] = s),
                          e.forEach(function (e, r) {
                            s[r] = t(e, i)
                          }),
                          s)
                    )
                  default:
                    return e
                }
              },
              getLanguage: function (t) {
                for (; t; ) {
                  var i = e.exec(t.className)
                  if (i) return i[1].toLowerCase()
                  t = t.parentElement
                }
                return 'none'
              },
              setLanguage: function (t, i) {
                ;(t.className = t.className.replace(RegExp(e, 'gi'), '')),
                  t.classList.add('language-' + i)
              },
              currentScript: function () {
                if ('undefined' == typeof document) return null
                if ('currentScript' in document) return document.currentScript
                try {
                  throw new Error()
                } catch (s) {
                  var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) ||
                    [])[1]
                  if (t) {
                    var e = document.getElementsByTagName('script')
                    for (var i in e) if (e[i].src == t) return e[i]
                  }
                  return null
                }
              },
              isActive: function (t, e, i) {
                for (var s = 'no-' + e; t; ) {
                  var r = t.classList
                  if (r.contains(e)) return !0
                  if (r.contains(s)) return !1
                  t = t.parentElement
                }
                return !!i
              }
            },
            languages: {
              plain: s,
              plaintext: s,
              text: s,
              txt: s,
              extend: function (t, e) {
                var i = r.util.clone(r.languages[t])
                for (var s in e) i[s] = e[s]
                return i
              },
              insertBefore: function (t, e, i, s) {
                var a = (s = s || r.languages)[t],
                  n = {}
                for (var o in a)
                  if (a.hasOwnProperty(o)) {
                    if (o == e)
                      for (var h in i) i.hasOwnProperty(h) && (n[h] = i[h])
                    i.hasOwnProperty(o) || (n[o] = a[o])
                  }
                var l = s[t]
                return (
                  (s[t] = n),
                  r.languages.DFS(r.languages, function (e, i) {
                    i === l && e != t && (this[e] = n)
                  }),
                  n
                )
              },
              DFS: function t(e, i, s, a) {
                a = a || {}
                var n = r.util.objId
                for (var o in e)
                  if (e.hasOwnProperty(o)) {
                    i.call(e, o, e[o], s || o)
                    var h = e[o],
                      l = r.util.type(h)
                    'Object' !== l || a[n(h)]
                      ? 'Array' !== l ||
                        a[n(h)] ||
                        ((a[n(h)] = !0), t(h, i, o, a))
                      : ((a[n(h)] = !0), t(h, i, null, a))
                  }
              }
            },
            plugins: {},
            highlightAll: function (t, e) {
              r.highlightAllUnder(document, t, e)
            },
            highlightAllUnder: function (t, e, i) {
              var s = {
                callback: i,
                container: t,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
              }
              r.hooks.run('before-highlightall', s),
                (s.elements = Array.prototype.slice.apply(
                  s.container.querySelectorAll(s.selector)
                )),
                r.hooks.run('before-all-elements-highlight', s)
              for (var a, n = 0; (a = s.elements[n++]); )
                r.highlightElement(a, !0 === e, s.callback)
            },
            highlightElement: function (e, i, s) {
              var a = r.util.getLanguage(e),
                n = r.languages[a]
              r.util.setLanguage(e, a)
              var o = e.parentElement
              o &&
                'pre' === o.nodeName.toLowerCase() &&
                r.util.setLanguage(o, a)
              var h = {
                element: e,
                language: a,
                grammar: n,
                code: e.textContent
              }
              function l(t) {
                ;(h.highlightedCode = t),
                  r.hooks.run('before-insert', h),
                  (h.element.innerHTML = h.highlightedCode),
                  r.hooks.run('after-highlight', h),
                  r.hooks.run('complete', h),
                  s && s.call(h.element)
              }
              if (
                (r.hooks.run('before-sanity-check', h),
                (o = h.element.parentElement) &&
                  'pre' === o.nodeName.toLowerCase() &&
                  !o.hasAttribute('tabindex') &&
                  o.setAttribute('tabindex', '0'),
                !h.code)
              )
                return r.hooks.run('complete', h), void (s && s.call(h.element))
              if ((r.hooks.run('before-highlight', h), h.grammar))
                if (i && t.Worker) {
                  var c = new Worker(r.filename)
                  ;(c.onmessage = function (t) {
                    l(t.data)
                  }),
                    c.postMessage(
                      JSON.stringify({
                        language: h.language,
                        code: h.code,
                        immediateClose: !0
                      })
                    )
                } else l(r.highlight(h.code, h.grammar, h.language))
              else l(r.util.encode(h.code))
            },
            highlight: function (t, e, i) {
              var s = { code: t, grammar: e, language: i }
              if ((r.hooks.run('before-tokenize', s), !s.grammar))
                throw new Error(
                  'The language "' + s.language + '" has no grammar.'
                )
              return (
                (s.tokens = r.tokenize(s.code, s.grammar)),
                r.hooks.run('after-tokenize', s),
                a.stringify(r.util.encode(s.tokens), s.language)
              )
            },
            tokenize: function (t, e) {
              var i = e.rest
              if (i) {
                for (var s in i) e[s] = i[s]
                delete e.rest
              }
              var c = new o()
              return (
                h(c, c.head, t),
                (function t(e, i, s, o, c, p) {
                  for (var u in s)
                    if (s.hasOwnProperty(u) && s[u]) {
                      var d = s[u]
                      d = Array.isArray(d) ? d : [d]
                      for (var f = 0; f < d.length; ++f) {
                        if (p && p.cause == u + ',' + f) return
                        var m = d[f],
                          g = m.inside,
                          v = !!m.lookbehind,
                          y = !!m.greedy,
                          x = m.alias
                        if (y && !m.pattern.global) {
                          var b = m.pattern.toString().match(/[imsuy]*$/)[0]
                          m.pattern = RegExp(m.pattern.source, b + 'g')
                        }
                        for (
                          var _ = m.pattern || m, k = o.next, w = c;
                          k !== i.tail && !(p && w >= p.reach);
                          w += k.value.length, k = k.next
                        ) {
                          var S = k.value
                          if (i.length > e.length) return
                          if (!(S instanceof a)) {
                            var C,
                              E = 1
                            if (y) {
                              if (!(C = n(_, w, e, v)) || C.index >= e.length)
                                break
                              var A = C.index,
                                P = C.index + C[0].length,
                                I = w
                              for (I += k.value.length; A >= I; )
                                (k = k.next), (I += k.value.length)
                              if (
                                ((I -= k.value.length),
                                (w = I),
                                k.value instanceof a)
                              )
                                continue
                              for (
                                var L = k;
                                L !== i.tail &&
                                (I < P || 'string' == typeof L.value);
                                L = L.next
                              )
                                E++, (I += L.value.length)
                              E--, (S = e.slice(w, I)), (C.index -= w)
                            } else if (!(C = n(_, 0, S, v))) continue
                            A = C.index
                            var T = C[0],
                              N = S.slice(0, A),
                              R = S.slice(A + T.length),
                              V = w + S.length
                            p && V > p.reach && (p.reach = V)
                            var M = k.prev
                            N && ((M = h(i, M, N)), (w += N.length)), l(i, M, E)
                            var O = new a(u, g ? r.tokenize(T, g) : T, x, T)
                            if (((k = h(i, M, O)), R && h(i, k, R), E > 1)) {
                              var D = { cause: u + ',' + f, reach: V }
                              t(e, i, s, k.prev, w, D),
                                p && D.reach > p.reach && (p.reach = D.reach)
                            }
                          }
                        }
                      }
                    }
                })(t, c, e, c.head, 0),
                (function (t) {
                  var e = [],
                    i = t.head.next
                  for (; i !== t.tail; ) e.push(i.value), (i = i.next)
                  return e
                })(c)
              )
            },
            hooks: {
              all: {},
              add: function (t, e) {
                var i = r.hooks.all
                ;(i[t] = i[t] || []), i[t].push(e)
              },
              run: function (t, e) {
                var i = r.hooks.all[t]
                if (i && i.length) for (var s, a = 0; (s = i[a++]); ) s(e)
              }
            },
            Token: a
          }
        function a(t, e, i, s) {
          ;(this.type = t),
            (this.content = e),
            (this.alias = i),
            (this.length = 0 | (s || '').length)
        }
        function n(t, e, i, s) {
          t.lastIndex = e
          var r = t.exec(i)
          if (r && s && r[1]) {
            var a = r[1].length
            ;(r.index += a), (r[0] = r[0].slice(a))
          }
          return r
        }
        function o() {
          var t = { value: null, prev: null, next: null },
            e = { value: null, prev: t, next: null }
          ;(t.next = e), (this.head = t), (this.tail = e), (this.length = 0)
        }
        function h(t, e, i) {
          var s = e.next,
            r = { value: i, prev: e, next: s }
          return (e.next = r), (s.prev = r), t.length++, r
        }
        function l(t, e, i) {
          for (var s = e.next, r = 0; r < i && s !== t.tail; r++) s = s.next
          ;(e.next = s), (s.prev = e), (t.length -= r)
        }
        if (
          ((t.Prism = r),
          (a.stringify = function t(e, i) {
            if ('string' == typeof e) return e
            if (Array.isArray(e)) {
              var s = ''
              return (
                e.forEach(function (e) {
                  s += t(e, i)
                }),
                s
              )
            }
            var a = {
                type: e.type,
                content: t(e.content, i),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: i
              },
              n = e.alias
            n &&
              (Array.isArray(n)
                ? Array.prototype.push.apply(a.classes, n)
                : a.classes.push(n)),
              r.hooks.run('wrap', a)
            var o = ''
            for (var h in a.attributes)
              o +=
                ' ' +
                h +
                '="' +
                (a.attributes[h] || '').replace(/"/g, '&quot;') +
                '"'
            return (
              '<' +
              a.tag +
              ' class="' +
              a.classes.join(' ') +
              '"' +
              o +
              '>' +
              a.content +
              '</' +
              a.tag +
              '>'
            )
          }),
          !t.document)
        )
          return t.addEventListener
            ? (r.disableWorkerMessageHandler ||
                t.addEventListener(
                  'message',
                  function (e) {
                    var i = JSON.parse(e.data),
                      s = i.language,
                      a = i.code,
                      n = i.immediateClose
                    t.postMessage(r.highlight(a, r.languages[s], s)),
                      n && t.close()
                  },
                  !1
                ),
              r)
            : r
        var c = r.util.currentScript()
        function p() {
          r.manual || r.highlightAll()
        }
        if (
          (c &&
            ((r.filename = c.src),
            c.hasAttribute('data-manual') && (r.manual = !0)),
          !r.manual)
        ) {
          var u = document.readyState
          'loading' === u || ('interactive' === u && c && c.defer)
            ? document.addEventListener('DOMContentLoaded', p)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(p)
            : window.setTimeout(p, 16)
        }
        return r
      })(
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
          ? self
          : {}
      )
      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       */ t.exports && (t.exports = s),
        'undefined' != typeof global && (global.Prism = s)
    },
    325: function (t, e) {
      Prism.languages.clike = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
          },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
        ],
        string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0
        },
        'class-name': {
          pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: { punctuation: /[.\\]/ }
        },
        keyword:
          /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
      }
    },
    326: function (t, e) {
      ;(Prism.languages.javascript = Prism.languages.extend('clike', {
        'class-name': [
          Prism.languages.clike['class-name'],
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0
          }
        ],
        keyword: [
          { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
          {
            pattern:
              /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
          }
        ],
        function:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
          pattern: RegExp(
            /(^|[^\w$])/.source +
              '(?:' +
              /NaN|Infinity/.source +
              '|' +
              /0[bB][01]+(?:_[01]+)*n?/.source +
              '|' +
              /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
              '|' +
              /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
              '|' +
              /\d+(?:_\d+)*n/.source +
              '|' +
              /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                .source +
              ')' +
              /(?![\w$])/.source
          ),
          lookbehind: !0
        },
        operator:
          /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      })),
        (Prism.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        Prism.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: Prism.languages.regex
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/
            }
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function'
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: Prism.languages.javascript
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: Prism.languages.javascript
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: Prism.languages.javascript
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: Prism.languages.javascript
            }
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }),
        Prism.languages.insertBefore('javascript', 'string', {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
          'template-string': {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\$\{|\}$/,
                    alias: 'punctuation'
                  },
                  rest: Prism.languages.javascript
                }
              },
              string: /[\s\S]+/
            }
          },
          'string-property': {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property'
          }
        }),
        Prism.languages.insertBefore('javascript', 'operator', {
          'literal-property': {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: 'property'
          }
        }),
        Prism.languages.markup &&
          (Prism.languages.markup.tag.addInlined('script', 'javascript'),
          Prism.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            'javascript'
          )),
        (Prism.languages.js = Prism.languages.javascript)
    },
    327: function (t, e, i) {},
    328: function (t, e, i) {
      'use strict'
      i(292)
    },
    329: function (t, e, i) {
      'use strict'
      i(293)
    },
    330: function (t, e, i) {
      'use strict'
      i(294)
    },
    331: function (t, e, i) {
      'use strict'
      i(295)
    },
    336: function (t, e, i) {
      'use strict'
      i.r(e)
      i(9)
      var s = i(5),
        r = {
          props: { actions: { type: Array, default: () => [] } },
          methods: {
            onClick(t) {
              this.$emit('action', t)
            }
          }
        },
        a = (i(322), i(6)),
        n = Object(a.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e
            return i(
              'div',
              { staticClass: 'chart-actions' },
              t._l(t.actions, function (e, s) {
                return i(
                  'a',
                  {
                    key: s,
                    staticClass: 'chart-action',
                    on: {
                      click: function (i) {
                        return t.onClick(e)
                      }
                    }
                  },
                  [t._v('\n    ' + t._s(e.name) + '\n  ')]
                )
              }),
              0
            )
          },
          [],
          !1,
          null,
          '2afd21f1',
          null
        ).exports,
        o = {
          props: { config: { type: Object, default: null } },
          watch: { config: 'update' },
          mounted() {
            this.update()
          },
          methods: {
            chart() {
              return this._chart
            },
            update() {
              const t = this.config,
                e = this.$refs.canvas
              e &&
                this.config &&
                (this._chart
                  ? (this._chart.stop(),
                    (this._chart.data = t.data || {}),
                    (this._chart.options = t.options || {}),
                    this._chart.update())
                  : ((this._chart = new s.b(e, { ...t })),
                    this.$emit('initialized')))
            }
          }
        },
        h = Object(a.a)(
          o,
          function () {
            var t = this.$createElement,
              e = this._self._c || t
            return e('div', { staticClass: 'chart-view' }, [
              e('canvas', { ref: 'canvas' })
            ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        l = {
          3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
          5: 'class enum extends super const export import',
          6: 'enum',
          strict:
            'implements interface let package private protected public static yield',
          strictBind: 'eval arguments'
        },
        c =
          'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
        p = {
          5: c,
          '5module': c + ' export import',
          6: c + ' const class extends export import super'
        },
        u = /^in(stanceof)?$/,
        d =
          'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
        f =
          '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
        m = new RegExp('[' + d + ']'),
        g = new RegExp('[' + d + f + ']')
      d = f = null
      var v = [
          0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4,
          48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35,
          5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2,
          1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55,
          7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53,
          11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7,
          1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27,
          35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2,
          24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6,
          2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1,
          2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43,
          117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38,
          17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264,
          8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2,
          31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070,
          4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18,
          689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8,
          8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991,
          84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3,
          7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30,
          2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11,
          6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2,
          0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1,
          2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2,
          3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12,
          221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938
        ],
        y = [
          509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166,
          1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46,
          10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2,
          11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0,
          11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8,
          28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71,
          5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2,
          3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5,
          4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306,
          9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1,
          5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9,
          0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10,
          9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239
        ]
      function x(t, e) {
        for (var i = 65536, s = 0; s < e.length; s += 2) {
          if ((i += e[s]) > t) return !1
          if ((i += e[s + 1]) >= t) return !0
        }
      }
      function b(t, e) {
        return t < 65
          ? 36 === t
          : t < 91 ||
              (t < 97
                ? 95 === t
                : t < 123 ||
                  (t <= 65535
                    ? t >= 170 && m.test(String.fromCharCode(t))
                    : !1 !== e && x(t, v)))
      }
      function _(t, e) {
        return t < 48
          ? 36 === t
          : t < 58 ||
              (!(t < 65) &&
                (t < 91 ||
                  (t < 97
                    ? 95 === t
                    : t < 123 ||
                      (t <= 65535
                        ? t >= 170 && g.test(String.fromCharCode(t))
                        : !1 !== e && (x(t, v) || x(t, y))))))
      }
      var k = function (t, e) {
        void 0 === e && (e = {}),
          (this.label = t),
          (this.keyword = e.keyword),
          (this.beforeExpr = !!e.beforeExpr),
          (this.startsExpr = !!e.startsExpr),
          (this.isLoop = !!e.isLoop),
          (this.isAssign = !!e.isAssign),
          (this.prefix = !!e.prefix),
          (this.postfix = !!e.postfix),
          (this.binop = e.binop || null),
          (this.updateContext = null)
      }
      function w(t, e) {
        return new k(t, { beforeExpr: !0, binop: e })
      }
      var S = { beforeExpr: !0 },
        C = { startsExpr: !0 },
        E = {}
      function A(t, e) {
        return void 0 === e && (e = {}), (e.keyword = t), (E[t] = new k(t, e))
      }
      var P = {
          num: new k('num', C),
          regexp: new k('regexp', C),
          string: new k('string', C),
          name: new k('name', C),
          privateId: new k('privateId', C),
          eof: new k('eof'),
          bracketL: new k('[', { beforeExpr: !0, startsExpr: !0 }),
          bracketR: new k(']'),
          braceL: new k('{', { beforeExpr: !0, startsExpr: !0 }),
          braceR: new k('}'),
          parenL: new k('(', { beforeExpr: !0, startsExpr: !0 }),
          parenR: new k(')'),
          comma: new k(',', S),
          semi: new k(';', S),
          colon: new k(':', S),
          dot: new k('.'),
          question: new k('?', S),
          questionDot: new k('?.'),
          arrow: new k('=>', S),
          template: new k('template'),
          invalidTemplate: new k('invalidTemplate'),
          ellipsis: new k('...', S),
          backQuote: new k('`', C),
          dollarBraceL: new k('${', { beforeExpr: !0, startsExpr: !0 }),
          eq: new k('=', { beforeExpr: !0, isAssign: !0 }),
          assign: new k('_=', { beforeExpr: !0, isAssign: !0 }),
          incDec: new k('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
          prefix: new k('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          logicalOR: w('||', 1),
          logicalAND: w('&&', 2),
          bitwiseOR: w('|', 3),
          bitwiseXOR: w('^', 4),
          bitwiseAND: w('&', 5),
          equality: w('==/!=/===/!==', 6),
          relational: w('</>/<=/>=', 7),
          bitShift: w('<</>>/>>>', 8),
          plusMin: new k('+/-', {
            beforeExpr: !0,
            binop: 9,
            prefix: !0,
            startsExpr: !0
          }),
          modulo: w('%', 10),
          star: w('*', 10),
          slash: w('/', 10),
          starstar: new k('**', { beforeExpr: !0 }),
          coalesce: w('??', 1),
          _break: A('break'),
          _case: A('case', S),
          _catch: A('catch'),
          _continue: A('continue'),
          _debugger: A('debugger'),
          _default: A('default', S),
          _do: A('do', { isLoop: !0, beforeExpr: !0 }),
          _else: A('else', S),
          _finally: A('finally'),
          _for: A('for', { isLoop: !0 }),
          _function: A('function', C),
          _if: A('if'),
          _return: A('return', S),
          _switch: A('switch'),
          _throw: A('throw', S),
          _try: A('try'),
          _var: A('var'),
          _const: A('const'),
          _while: A('while', { isLoop: !0 }),
          _with: A('with'),
          _new: A('new', { beforeExpr: !0, startsExpr: !0 }),
          _this: A('this', C),
          _super: A('super', C),
          _class: A('class', C),
          _extends: A('extends', S),
          _export: A('export'),
          _import: A('import', C),
          _null: A('null', C),
          _true: A('true', C),
          _false: A('false', C),
          _in: A('in', { beforeExpr: !0, binop: 7 }),
          _instanceof: A('instanceof', { beforeExpr: !0, binop: 7 }),
          _typeof: A('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _void: A('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _delete: A('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 })
        },
        I = /\r\n?|\n|\u2028|\u2029/,
        L = new RegExp(I.source, 'g')
      function T(t) {
        return 10 === t || 13 === t || 8232 === t || 8233 === t
      }
      var N = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
        R = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        V = Object.prototype,
        M = V.hasOwnProperty,
        O = V.toString
      function D(t, e) {
        return M.call(t, e)
      }
      var B =
        Array.isArray ||
        function (t) {
          return '[object Array]' === O.call(t)
        }
      function F(t) {
        return new RegExp('^(?:' + t.replace(/ /g, '|') + ')$')
      }
      var W = function (t, e) {
        ;(this.line = t), (this.column = e)
      }
      W.prototype.offset = function (t) {
        return new W(this.line, this.column + t)
      }
      var H = function (t, e, i) {
        ;(this.start = e),
          (this.end = i),
          null !== t.sourceFile && (this.source = t.sourceFile)
      }
      function Y(t, e) {
        for (var i = 1, s = 0; ; ) {
          L.lastIndex = s
          var r = L.exec(t)
          if (!(r && r.index < e)) return new W(i, e - s)
          ++i, (s = r.index + r[0].length)
        }
      }
      var X = {
          ecmaVersion: null,
          sourceType: 'script',
          onInsertedSemicolon: null,
          onTrailingComma: null,
          allowReserved: null,
          allowReturnOutsideFunction: !1,
          allowImportExportEverywhere: !1,
          allowAwaitOutsideFunction: null,
          allowSuperOutsideMethod: null,
          allowHashBang: !1,
          locations: !1,
          onToken: null,
          onComment: null,
          ranges: !1,
          program: null,
          sourceFile: null,
          directSourceFile: null,
          preserveParens: !1
        },
        j = !1
      function U(t) {
        var e = {}
        for (var i in X) e[i] = t && D(t, i) ? t[i] : X[i]
        if (
          ('latest' === e.ecmaVersion
            ? (e.ecmaVersion = 1e8)
            : null == e.ecmaVersion
            ? (!j &&
                'object' == typeof console &&
                console.warn &&
                ((j = !0),
                console.warn(
                  'Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.'
                )),
              (e.ecmaVersion = 11))
            : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009),
          null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5),
          B(e.onToken))
        ) {
          var s = e.onToken
          e.onToken = function (t) {
            return s.push(t)
          }
        }
        return (
          B(e.onComment) &&
            (e.onComment = (function (t, e) {
              return function (i, s, r, a, n, o) {
                var h = {
                  type: i ? 'Block' : 'Line',
                  value: s,
                  start: r,
                  end: a
                }
                t.locations && (h.loc = new H(this, n, o)),
                  t.ranges && (h.range = [r, a]),
                  e.push(h)
              }
            })(e, e.onComment)),
          e
        )
      }
      function $(t, e) {
        return 2 | (t ? 4 : 0) | (e ? 8 : 0)
      }
      var K = function (t, e, i) {
          ;(this.options = t = U(t)),
            (this.sourceFile = t.sourceFile),
            (this.keywords = F(
              p[
                t.ecmaVersion >= 6
                  ? 6
                  : 'module' === t.sourceType
                  ? '5module'
                  : 5
              ]
            ))
          var s = ''
          !0 !== t.allowReserved &&
            ((s = l[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3]),
            'module' === t.sourceType && (s += ' await')),
            (this.reservedWords = F(s))
          var r = (s ? s + ' ' : '') + l.strict
          ;(this.reservedWordsStrict = F(r)),
            (this.reservedWordsStrictBind = F(r + ' ' + l.strictBind)),
            (this.input = String(e)),
            (this.containsEsc = !1),
            i
              ? ((this.pos = i),
                (this.lineStart = this.input.lastIndexOf('\n', i - 1) + 1),
                (this.curLine = this.input
                  .slice(0, this.lineStart)
                  .split(I).length))
              : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
            (this.type = P.eof),
            (this.value = null),
            (this.start = this.end = this.pos),
            (this.startLoc = this.endLoc = this.curPosition()),
            (this.lastTokEndLoc = this.lastTokStartLoc = null),
            (this.lastTokStart = this.lastTokEnd = this.pos),
            (this.context = this.initialContext()),
            (this.exprAllowed = !0),
            (this.inModule = 'module' === t.sourceType),
            (this.strict = this.inModule || this.strictDirective(this.pos)),
            (this.potentialArrowAt = -1),
            (this.potentialArrowInForAwait = !1),
            (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
            (this.labels = []),
            (this.undefinedExports = Object.create(null)),
            0 === this.pos &&
              t.allowHashBang &&
              '#!' === this.input.slice(0, 2) &&
              this.skipLineComment(2),
            (this.scopeStack = []),
            this.enterScope(1),
            (this.regexpState = null),
            (this.privateNameStack = [])
        },
        q = {
          inFunction: { configurable: !0 },
          inGenerator: { configurable: !0 },
          inAsync: { configurable: !0 },
          canAwait: { configurable: !0 },
          allowSuper: { configurable: !0 },
          allowDirectSuper: { configurable: !0 },
          treatFunctionsAsVar: { configurable: !0 },
          allowNewDotTarget: { configurable: !0 },
          inClassStaticBlock: { configurable: !0 }
        }
      ;(K.prototype.parse = function () {
        var t = this.options.program || this.startNode()
        return this.nextToken(), this.parseTopLevel(t)
      }),
        (q.inFunction.get = function () {
          return (2 & this.currentVarScope().flags) > 0
        }),
        (q.inGenerator.get = function () {
          return (
            (8 & this.currentVarScope().flags) > 0 &&
            !this.currentVarScope().inClassFieldInit
          )
        }),
        (q.inAsync.get = function () {
          return (
            (4 & this.currentVarScope().flags) > 0 &&
            !this.currentVarScope().inClassFieldInit
          )
        }),
        (q.canAwait.get = function () {
          for (var t = this.scopeStack.length - 1; t >= 0; t--) {
            var e = this.scopeStack[t]
            if (e.inClassFieldInit || 256 & e.flags) return !1
            if (2 & e.flags) return (4 & e.flags) > 0
          }
          return (
            (this.inModule && this.options.ecmaVersion >= 13) ||
            this.options.allowAwaitOutsideFunction
          )
        }),
        (q.allowSuper.get = function () {
          var t = this.currentThisScope(),
            e = t.flags,
            i = t.inClassFieldInit
          return (64 & e) > 0 || i || this.options.allowSuperOutsideMethod
        }),
        (q.allowDirectSuper.get = function () {
          return (128 & this.currentThisScope().flags) > 0
        }),
        (q.treatFunctionsAsVar.get = function () {
          return this.treatFunctionsAsVarInScope(this.currentScope())
        }),
        (q.allowNewDotTarget.get = function () {
          var t = this.currentThisScope(),
            e = t.flags,
            i = t.inClassFieldInit
          return (258 & e) > 0 || i
        }),
        (q.inClassStaticBlock.get = function () {
          return (256 & this.currentVarScope().flags) > 0
        }),
        (K.extend = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
          for (var i = this, s = 0; s < t.length; s++) i = t[s](i)
          return i
        }),
        (K.parse = function (t, e) {
          return new this(e, t).parse()
        }),
        (K.parseExpressionAt = function (t, e, i) {
          var s = new this(i, t, e)
          return s.nextToken(), s.parseExpression()
        }),
        (K.tokenizer = function (t, e) {
          return new this(e, t)
        }),
        Object.defineProperties(K.prototype, q)
      var G = K.prototype,
        z = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/
      function Q() {
        this.shorthandAssign =
          this.trailingComma =
          this.parenthesizedAssign =
          this.parenthesizedBind =
          this.doubleProto =
            -1
      }
      ;(G.strictDirective = function (t) {
        for (;;) {
          ;(R.lastIndex = t), (t += R.exec(this.input)[0].length)
          var e = z.exec(this.input.slice(t))
          if (!e) return !1
          if ('use strict' === (e[1] || e[2])) {
            R.lastIndex = t + e[0].length
            var i = R.exec(this.input),
              s = i.index + i[0].length,
              r = this.input.charAt(s)
            return (
              ';' === r ||
              '}' === r ||
              (I.test(i[0]) &&
                !(
                  /[(`.[+\-/*%<>=,?^&]/.test(r) ||
                  ('!' === r && '=' === this.input.charAt(s + 1))
                ))
            )
          }
          ;(t += e[0].length),
            (R.lastIndex = t),
            (t += R.exec(this.input)[0].length),
            ';' === this.input[t] && t++
        }
      }),
        (G.eat = function (t) {
          return this.type === t && (this.next(), !0)
        }),
        (G.isContextual = function (t) {
          return this.type === P.name && this.value === t && !this.containsEsc
        }),
        (G.eatContextual = function (t) {
          return !!this.isContextual(t) && (this.next(), !0)
        }),
        (G.expectContextual = function (t) {
          this.eatContextual(t) || this.unexpected()
        }),
        (G.canInsertSemicolon = function () {
          return (
            this.type === P.eof ||
            this.type === P.braceR ||
            I.test(this.input.slice(this.lastTokEnd, this.start))
          )
        }),
        (G.insertSemicolon = function () {
          if (this.canInsertSemicolon())
            return (
              this.options.onInsertedSemicolon &&
                this.options.onInsertedSemicolon(
                  this.lastTokEnd,
                  this.lastTokEndLoc
                ),
              !0
            )
        }),
        (G.semicolon = function () {
          this.eat(P.semi) || this.insertSemicolon() || this.unexpected()
        }),
        (G.afterTrailingComma = function (t, e) {
          if (this.type === t)
            return (
              this.options.onTrailingComma &&
                this.options.onTrailingComma(
                  this.lastTokStart,
                  this.lastTokStartLoc
                ),
              e || this.next(),
              !0
            )
        }),
        (G.expect = function (t) {
          this.eat(t) || this.unexpected()
        }),
        (G.unexpected = function (t) {
          this.raise(null != t ? t : this.start, 'Unexpected token')
        }),
        (G.checkPatternErrors = function (t, e) {
          if (t) {
            t.trailingComma > -1 &&
              this.raiseRecoverable(
                t.trailingComma,
                'Comma is not permitted after the rest element'
              )
            var i = e ? t.parenthesizedAssign : t.parenthesizedBind
            i > -1 && this.raiseRecoverable(i, 'Parenthesized pattern')
          }
        }),
        (G.checkExpressionErrors = function (t, e) {
          if (!t) return !1
          var i = t.shorthandAssign,
            s = t.doubleProto
          if (!e) return i >= 0 || s >= 0
          i >= 0 &&
            this.raise(
              i,
              'Shorthand property assignments are valid only in destructuring patterns'
            ),
            s >= 0 &&
              this.raiseRecoverable(s, 'Redefinition of __proto__ property')
        }),
        (G.checkYieldAwaitInDefaultParams = function () {
          this.yieldPos &&
            (!this.awaitPos || this.yieldPos < this.awaitPos) &&
            this.raise(
              this.yieldPos,
              'Yield expression cannot be a default value'
            ),
            this.awaitPos &&
              this.raise(
                this.awaitPos,
                'Await expression cannot be a default value'
              )
        }),
        (G.isSimpleAssignTarget = function (t) {
          return 'ParenthesizedExpression' === t.type
            ? this.isSimpleAssignTarget(t.expression)
            : 'Identifier' === t.type || 'MemberExpression' === t.type
        })
      var Z = K.prototype
      Z.parseTopLevel = function (t) {
        var e = Object.create(null)
        for (t.body || (t.body = []); this.type !== P.eof; ) {
          var i = this.parseStatement(null, !0, e)
          t.body.push(i)
        }
        if (this.inModule)
          for (
            var s = 0, r = Object.keys(this.undefinedExports);
            s < r.length;
            s += 1
          ) {
            var a = r[s]
            this.raiseRecoverable(
              this.undefinedExports[a].start,
              "Export '" + a + "' is not defined"
            )
          }
        return (
          this.adaptDirectivePrologue(t.body),
          this.next(),
          (t.sourceType = this.options.sourceType),
          this.finishNode(t, 'Program')
        )
      }
      var J = { kind: 'loop' },
        tt = { kind: 'switch' }
      ;(Z.isLet = function (t) {
        if (this.options.ecmaVersion < 6 || !this.isContextual('let')) return !1
        R.lastIndex = this.pos
        var e = R.exec(this.input),
          i = this.pos + e[0].length,
          s = this.input.charCodeAt(i)
        if (91 === s || 92 === s || (s > 55295 && s < 56320)) return !0
        if (t) return !1
        if (123 === s) return !0
        if (b(s, !0)) {
          for (var r = i + 1; _((s = this.input.charCodeAt(r)), !0); ) ++r
          if (92 === s || (s > 55295 && s < 56320)) return !0
          var a = this.input.slice(i, r)
          if (!u.test(a)) return !0
        }
        return !1
      }),
        (Z.isAsyncFunction = function () {
          if (this.options.ecmaVersion < 8 || !this.isContextual('async'))
            return !1
          R.lastIndex = this.pos
          var t,
            e = R.exec(this.input),
            i = this.pos + e[0].length
          return !(
            I.test(this.input.slice(this.pos, i)) ||
            'function' !== this.input.slice(i, i + 8) ||
            (i + 8 !== this.input.length &&
              (_((t = this.input.charCodeAt(i + 8))) ||
                (t > 55295 && t < 56320)))
          )
        }),
        (Z.parseStatement = function (t, e, i) {
          var s,
            r = this.type,
            a = this.startNode()
          switch ((this.isLet(t) && ((r = P._var), (s = 'let')), r)) {
            case P._break:
            case P._continue:
              return this.parseBreakContinueStatement(a, r.keyword)
            case P._debugger:
              return this.parseDebuggerStatement(a)
            case P._do:
              return this.parseDoStatement(a)
            case P._for:
              return this.parseForStatement(a)
            case P._function:
              return (
                t &&
                  (this.strict || ('if' !== t && 'label' !== t)) &&
                  this.options.ecmaVersion >= 6 &&
                  this.unexpected(),
                this.parseFunctionStatement(a, !1, !t)
              )
            case P._class:
              return t && this.unexpected(), this.parseClass(a, !0)
            case P._if:
              return this.parseIfStatement(a)
            case P._return:
              return this.parseReturnStatement(a)
            case P._switch:
              return this.parseSwitchStatement(a)
            case P._throw:
              return this.parseThrowStatement(a)
            case P._try:
              return this.parseTryStatement(a)
            case P._const:
            case P._var:
              return (
                (s = s || this.value),
                t && 'var' !== s && this.unexpected(),
                this.parseVarStatement(a, s)
              )
            case P._while:
              return this.parseWhileStatement(a)
            case P._with:
              return this.parseWithStatement(a)
            case P.braceL:
              return this.parseBlock(!0, a)
            case P.semi:
              return this.parseEmptyStatement(a)
            case P._export:
            case P._import:
              if (this.options.ecmaVersion > 10 && r === P._import) {
                R.lastIndex = this.pos
                var n = R.exec(this.input),
                  o = this.pos + n[0].length,
                  h = this.input.charCodeAt(o)
                if (40 === h || 46 === h)
                  return this.parseExpressionStatement(
                    a,
                    this.parseExpression()
                  )
              }
              return (
                this.options.allowImportExportEverywhere ||
                  (e ||
                    this.raise(
                      this.start,
                      "'import' and 'export' may only appear at the top level"
                    ),
                  this.inModule ||
                    this.raise(
                      this.start,
                      "'import' and 'export' may appear only with 'sourceType: module'"
                    )),
                r === P._import ? this.parseImport(a) : this.parseExport(a, i)
              )
            default:
              if (this.isAsyncFunction())
                return (
                  t && this.unexpected(),
                  this.next(),
                  this.parseFunctionStatement(a, !0, !t)
                )
              var l = this.value,
                c = this.parseExpression()
              return r === P.name &&
                'Identifier' === c.type &&
                this.eat(P.colon)
                ? this.parseLabeledStatement(a, l, c, t)
                : this.parseExpressionStatement(a, c)
          }
        }),
        (Z.parseBreakContinueStatement = function (t, e) {
          var i = 'break' === e
          this.next(),
            this.eat(P.semi) || this.insertSemicolon()
              ? (t.label = null)
              : this.type !== P.name
              ? this.unexpected()
              : ((t.label = this.parseIdent()), this.semicolon())
          for (var s = 0; s < this.labels.length; ++s) {
            var r = this.labels[s]
            if (null == t.label || r.name === t.label.name) {
              if (null != r.kind && (i || 'loop' === r.kind)) break
              if (t.label && i) break
            }
          }
          return (
            s === this.labels.length && this.raise(t.start, 'Unsyntactic ' + e),
            this.finishNode(t, i ? 'BreakStatement' : 'ContinueStatement')
          )
        }),
        (Z.parseDebuggerStatement = function (t) {
          return (
            this.next(),
            this.semicolon(),
            this.finishNode(t, 'DebuggerStatement')
          )
        }),
        (Z.parseDoStatement = function (t) {
          return (
            this.next(),
            this.labels.push(J),
            (t.body = this.parseStatement('do')),
            this.labels.pop(),
            this.expect(P._while),
            (t.test = this.parseParenExpression()),
            this.options.ecmaVersion >= 6 ? this.eat(P.semi) : this.semicolon(),
            this.finishNode(t, 'DoWhileStatement')
          )
        }),
        (Z.parseForStatement = function (t) {
          this.next()
          var e =
            this.options.ecmaVersion >= 9 &&
            this.canAwait &&
            this.eatContextual('await')
              ? this.lastTokStart
              : -1
          if (
            (this.labels.push(J),
            this.enterScope(0),
            this.expect(P.parenL),
            this.type === P.semi)
          )
            return e > -1 && this.unexpected(e), this.parseFor(t, null)
          var i = this.isLet()
          if (this.type === P._var || this.type === P._const || i) {
            var s = this.startNode(),
              r = i ? 'let' : this.value
            return (
              this.next(),
              this.parseVar(s, !0, r),
              this.finishNode(s, 'VariableDeclaration'),
              (this.type === P._in ||
                (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
              1 === s.declarations.length
                ? (this.options.ecmaVersion >= 9 &&
                    (this.type === P._in
                      ? e > -1 && this.unexpected(e)
                      : (t.await = e > -1)),
                  this.parseForIn(t, s))
                : (e > -1 && this.unexpected(e), this.parseFor(t, s))
            )
          }
          var a = this.isContextual('let'),
            n = !1,
            o = new Q(),
            h = this.parseExpression(!(e > -1) || 'await', o)
          return this.type === P._in ||
            (n = this.options.ecmaVersion >= 6 && this.isContextual('of'))
            ? (this.options.ecmaVersion >= 9 &&
                (this.type === P._in
                  ? e > -1 && this.unexpected(e)
                  : (t.await = e > -1)),
              a &&
                n &&
                this.raise(
                  h.start,
                  "The left-hand side of a for-of loop may not start with 'let'."
                ),
              this.toAssignable(h, !1, o),
              this.checkLValPattern(h),
              this.parseForIn(t, h))
            : (this.checkExpressionErrors(o, !0),
              e > -1 && this.unexpected(e),
              this.parseFor(t, h))
        }),
        (Z.parseFunctionStatement = function (t, e, i) {
          return this.next(), this.parseFunction(t, it | (i ? 0 : st), !1, e)
        }),
        (Z.parseIfStatement = function (t) {
          return (
            this.next(),
            (t.test = this.parseParenExpression()),
            (t.consequent = this.parseStatement('if')),
            (t.alternate = this.eat(P._else)
              ? this.parseStatement('if')
              : null),
            this.finishNode(t, 'IfStatement')
          )
        }),
        (Z.parseReturnStatement = function (t) {
          return (
            this.inFunction ||
              this.options.allowReturnOutsideFunction ||
              this.raise(this.start, "'return' outside of function"),
            this.next(),
            this.eat(P.semi) || this.insertSemicolon()
              ? (t.argument = null)
              : ((t.argument = this.parseExpression()), this.semicolon()),
            this.finishNode(t, 'ReturnStatement')
          )
        }),
        (Z.parseSwitchStatement = function (t) {
          var e
          this.next(),
            (t.discriminant = this.parseParenExpression()),
            (t.cases = []),
            this.expect(P.braceL),
            this.labels.push(tt),
            this.enterScope(0)
          for (var i = !1; this.type !== P.braceR; )
            if (this.type === P._case || this.type === P._default) {
              var s = this.type === P._case
              e && this.finishNode(e, 'SwitchCase'),
                t.cases.push((e = this.startNode())),
                (e.consequent = []),
                this.next(),
                s
                  ? (e.test = this.parseExpression())
                  : (i &&
                      this.raiseRecoverable(
                        this.lastTokStart,
                        'Multiple default clauses'
                      ),
                    (i = !0),
                    (e.test = null)),
                this.expect(P.colon)
            } else
              e || this.unexpected(),
                e.consequent.push(this.parseStatement(null))
          return (
            this.exitScope(),
            e && this.finishNode(e, 'SwitchCase'),
            this.next(),
            this.labels.pop(),
            this.finishNode(t, 'SwitchStatement')
          )
        }),
        (Z.parseThrowStatement = function (t) {
          return (
            this.next(),
            I.test(this.input.slice(this.lastTokEnd, this.start)) &&
              this.raise(this.lastTokEnd, 'Illegal newline after throw'),
            (t.argument = this.parseExpression()),
            this.semicolon(),
            this.finishNode(t, 'ThrowStatement')
          )
        })
      var et = []
      ;(Z.parseTryStatement = function (t) {
        if (
          (this.next(),
          (t.block = this.parseBlock()),
          (t.handler = null),
          this.type === P._catch)
        ) {
          var e = this.startNode()
          if ((this.next(), this.eat(P.parenL))) {
            e.param = this.parseBindingAtom()
            var i = 'Identifier' === e.param.type
            this.enterScope(i ? 32 : 0),
              this.checkLValPattern(e.param, i ? 4 : 2),
              this.expect(P.parenR)
          } else
            this.options.ecmaVersion < 10 && this.unexpected(),
              (e.param = null),
              this.enterScope(0)
          ;(e.body = this.parseBlock(!1)),
            this.exitScope(),
            (t.handler = this.finishNode(e, 'CatchClause'))
        }
        return (
          (t.finalizer = this.eat(P._finally) ? this.parseBlock() : null),
          t.handler ||
            t.finalizer ||
            this.raise(t.start, 'Missing catch or finally clause'),
          this.finishNode(t, 'TryStatement')
        )
      }),
        (Z.parseVarStatement = function (t, e) {
          return (
            this.next(),
            this.parseVar(t, !1, e),
            this.semicolon(),
            this.finishNode(t, 'VariableDeclaration')
          )
        }),
        (Z.parseWhileStatement = function (t) {
          return (
            this.next(),
            (t.test = this.parseParenExpression()),
            this.labels.push(J),
            (t.body = this.parseStatement('while')),
            this.labels.pop(),
            this.finishNode(t, 'WhileStatement')
          )
        }),
        (Z.parseWithStatement = function (t) {
          return (
            this.strict && this.raise(this.start, "'with' in strict mode"),
            this.next(),
            (t.object = this.parseParenExpression()),
            (t.body = this.parseStatement('with')),
            this.finishNode(t, 'WithStatement')
          )
        }),
        (Z.parseEmptyStatement = function (t) {
          return this.next(), this.finishNode(t, 'EmptyStatement')
        }),
        (Z.parseLabeledStatement = function (t, e, i, s) {
          for (var r = 0, a = this.labels; r < a.length; r += 1) {
            a[r].name === e &&
              this.raise(i.start, "Label '" + e + "' is already declared")
          }
          for (
            var n = this.type.isLoop
                ? 'loop'
                : this.type === P._switch
                ? 'switch'
                : null,
              o = this.labels.length - 1;
            o >= 0;
            o--
          ) {
            var h = this.labels[o]
            if (h.statementStart !== t.start) break
            ;(h.statementStart = this.start), (h.kind = n)
          }
          return (
            this.labels.push({ name: e, kind: n, statementStart: this.start }),
            (t.body = this.parseStatement(
              s ? (-1 === s.indexOf('label') ? s + 'label' : s) : 'label'
            )),
            this.labels.pop(),
            (t.label = i),
            this.finishNode(t, 'LabeledStatement')
          )
        }),
        (Z.parseExpressionStatement = function (t, e) {
          return (
            (t.expression = e),
            this.semicolon(),
            this.finishNode(t, 'ExpressionStatement')
          )
        }),
        (Z.parseBlock = function (t, e, i) {
          for (
            void 0 === t && (t = !0),
              void 0 === e && (e = this.startNode()),
              e.body = [],
              this.expect(P.braceL),
              t && this.enterScope(0);
            this.type !== P.braceR;

          ) {
            var s = this.parseStatement(null)
            e.body.push(s)
          }
          return (
            i && (this.strict = !1),
            this.next(),
            t && this.exitScope(),
            this.finishNode(e, 'BlockStatement')
          )
        }),
        (Z.parseFor = function (t, e) {
          return (
            (t.init = e),
            this.expect(P.semi),
            (t.test = this.type === P.semi ? null : this.parseExpression()),
            this.expect(P.semi),
            (t.update = this.type === P.parenR ? null : this.parseExpression()),
            this.expect(P.parenR),
            (t.body = this.parseStatement('for')),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(t, 'ForStatement')
          )
        }),
        (Z.parseForIn = function (t, e) {
          var i = this.type === P._in
          return (
            this.next(),
            'VariableDeclaration' === e.type &&
              null != e.declarations[0].init &&
              (!i ||
                this.options.ecmaVersion < 8 ||
                this.strict ||
                'var' !== e.kind ||
                'Identifier' !== e.declarations[0].id.type) &&
              this.raise(
                e.start,
                (i ? 'for-in' : 'for-of') +
                  ' loop variable declaration may not have an initializer'
              ),
            (t.left = e),
            (t.right = i ? this.parseExpression() : this.parseMaybeAssign()),
            this.expect(P.parenR),
            (t.body = this.parseStatement('for')),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(t, i ? 'ForInStatement' : 'ForOfStatement')
          )
        }),
        (Z.parseVar = function (t, e, i) {
          for (t.declarations = [], t.kind = i; ; ) {
            var s = this.startNode()
            if (
              (this.parseVarId(s, i),
              this.eat(P.eq)
                ? (s.init = this.parseMaybeAssign(e))
                : 'const' !== i ||
                  this.type === P._in ||
                  (this.options.ecmaVersion >= 6 && this.isContextual('of'))
                ? 'Identifier' === s.id.type ||
                  (e && (this.type === P._in || this.isContextual('of')))
                  ? (s.init = null)
                  : this.raise(
                      this.lastTokEnd,
                      'Complex binding patterns require an initialization value'
                    )
                : this.unexpected(),
              t.declarations.push(this.finishNode(s, 'VariableDeclarator')),
              !this.eat(P.comma))
            )
              break
          }
          return t
        }),
        (Z.parseVarId = function (t, e) {
          ;(t.id = this.parseBindingAtom()),
            this.checkLValPattern(t.id, 'var' === e ? 1 : 2, !1)
        })
      var it = 1,
        st = 2
      function rt(t, e) {
        var i = e.key.name,
          s = t[i],
          r = 'true'
        return (
          'MethodDefinition' !== e.type ||
            ('get' !== e.kind && 'set' !== e.kind) ||
            (r = (e.static ? 's' : 'i') + e.kind),
          ('iget' === s && 'iset' === r) ||
          ('iset' === s && 'iget' === r) ||
          ('sget' === s && 'sset' === r) ||
          ('sset' === s && 'sget' === r)
            ? ((t[i] = 'true'), !1)
            : !!s || ((t[i] = r), !1)
        )
      }
      function at(t, e) {
        var i = t.computed,
          s = t.key
        return (
          !i &&
          (('Identifier' === s.type && s.name === e) ||
            ('Literal' === s.type && s.value === e))
        )
      }
      ;(Z.parseFunction = function (t, e, i, s, r) {
        this.initFunction(t),
          (this.options.ecmaVersion >= 9 ||
            (this.options.ecmaVersion >= 6 && !s)) &&
            (this.type === P.star && e & st && this.unexpected(),
            (t.generator = this.eat(P.star))),
          this.options.ecmaVersion >= 8 && (t.async = !!s),
          e & it &&
            ((t.id = 4 & e && this.type !== P.name ? null : this.parseIdent()),
            !t.id ||
              e & st ||
              this.checkLValSimple(
                t.id,
                this.strict || t.generator || t.async
                  ? this.treatFunctionsAsVar
                    ? 1
                    : 2
                  : 3
              ))
        var a = this.yieldPos,
          n = this.awaitPos,
          o = this.awaitIdentPos
        return (
          (this.yieldPos = 0),
          (this.awaitPos = 0),
          (this.awaitIdentPos = 0),
          this.enterScope($(t.async, t.generator)),
          e & it || (t.id = this.type === P.name ? this.parseIdent() : null),
          this.parseFunctionParams(t),
          this.parseFunctionBody(t, i, !1, r),
          (this.yieldPos = a),
          (this.awaitPos = n),
          (this.awaitIdentPos = o),
          this.finishNode(
            t,
            e & it ? 'FunctionDeclaration' : 'FunctionExpression'
          )
        )
      }),
        (Z.parseFunctionParams = function (t) {
          this.expect(P.parenL),
            (t.params = this.parseBindingList(
              P.parenR,
              !1,
              this.options.ecmaVersion >= 8
            )),
            this.checkYieldAwaitInDefaultParams()
        }),
        (Z.parseClass = function (t, e) {
          this.next()
          var i = this.strict
          ;(this.strict = !0), this.parseClassId(t, e), this.parseClassSuper(t)
          var s = this.enterClassBody(),
            r = this.startNode(),
            a = !1
          for (r.body = [], this.expect(P.braceL); this.type !== P.braceR; ) {
            var n = this.parseClassElement(null !== t.superClass)
            n &&
              (r.body.push(n),
              'MethodDefinition' === n.type && 'constructor' === n.kind
                ? (a &&
                    this.raise(
                      n.start,
                      'Duplicate constructor in the same class'
                    ),
                  (a = !0))
                : n.key &&
                  'PrivateIdentifier' === n.key.type &&
                  rt(s, n) &&
                  this.raiseRecoverable(
                    n.key.start,
                    "Identifier '#" + n.key.name + "' has already been declared"
                  ))
          }
          return (
            (this.strict = i),
            this.next(),
            (t.body = this.finishNode(r, 'ClassBody')),
            this.exitClassBody(),
            this.finishNode(t, e ? 'ClassDeclaration' : 'ClassExpression')
          )
        }),
        (Z.parseClassElement = function (t) {
          if (this.eat(P.semi)) return null
          var e = this.options.ecmaVersion,
            i = this.startNode(),
            s = '',
            r = !1,
            a = !1,
            n = 'method',
            o = !1
          if (this.eatContextual('static')) {
            if (e >= 13 && this.eat(P.braceL))
              return this.parseClassStaticBlock(i), i
            this.isClassElementNameStart() || this.type === P.star
              ? (o = !0)
              : (s = 'static')
          }
          if (
            ((i.static = o),
            !s &&
              e >= 8 &&
              this.eatContextual('async') &&
              ((!this.isClassElementNameStart() && this.type !== P.star) ||
              this.canInsertSemicolon()
                ? (s = 'async')
                : (a = !0)),
            !s && (e >= 9 || !a) && this.eat(P.star) && (r = !0),
            !s && !a && !r)
          ) {
            var h = this.value
            ;(this.eatContextual('get') || this.eatContextual('set')) &&
              (this.isClassElementNameStart() ? (n = h) : (s = h))
          }
          if (
            (s
              ? ((i.computed = !1),
                (i.key = this.startNodeAt(
                  this.lastTokStart,
                  this.lastTokStartLoc
                )),
                (i.key.name = s),
                this.finishNode(i.key, 'Identifier'))
              : this.parseClassElementName(i),
            e < 13 || this.type === P.parenL || 'method' !== n || r || a)
          ) {
            var l = !i.static && at(i, 'constructor'),
              c = l && t
            l &&
              'method' !== n &&
              this.raise(
                i.key.start,
                "Constructor can't have get/set modifier"
              ),
              (i.kind = l ? 'constructor' : n),
              this.parseClassMethod(i, r, a, c)
          } else this.parseClassField(i)
          return i
        }),
        (Z.isClassElementNameStart = function () {
          return (
            this.type === P.name ||
            this.type === P.privateId ||
            this.type === P.num ||
            this.type === P.string ||
            this.type === P.bracketL ||
            this.type.keyword
          )
        }),
        (Z.parseClassElementName = function (t) {
          this.type === P.privateId
            ? ('constructor' === this.value &&
                this.raise(
                  this.start,
                  "Classes can't have an element named '#constructor'"
                ),
              (t.computed = !1),
              (t.key = this.parsePrivateIdent()))
            : this.parsePropertyName(t)
        }),
        (Z.parseClassMethod = function (t, e, i, s) {
          var r = t.key
          'constructor' === t.kind
            ? (e && this.raise(r.start, "Constructor can't be a generator"),
              i && this.raise(r.start, "Constructor can't be an async method"))
            : t.static &&
              at(t, 'prototype') &&
              this.raise(
                r.start,
                'Classes may not have a static property named prototype'
              )
          var a = (t.value = this.parseMethod(e, i, s))
          return (
            'get' === t.kind &&
              0 !== a.params.length &&
              this.raiseRecoverable(a.start, 'getter should have no params'),
            'set' === t.kind &&
              1 !== a.params.length &&
              this.raiseRecoverable(
                a.start,
                'setter should have exactly one param'
              ),
            'set' === t.kind &&
              'RestElement' === a.params[0].type &&
              this.raiseRecoverable(
                a.params[0].start,
                'Setter cannot use rest params'
              ),
            this.finishNode(t, 'MethodDefinition')
          )
        }),
        (Z.parseClassField = function (t) {
          if (
            (at(t, 'constructor')
              ? this.raise(
                  t.key.start,
                  "Classes can't have a field named 'constructor'"
                )
              : t.static &&
                at(t, 'prototype') &&
                this.raise(
                  t.key.start,
                  "Classes can't have a static field named 'prototype'"
                ),
            this.eat(P.eq))
          ) {
            var e = this.currentThisScope(),
              i = e.inClassFieldInit
            ;(e.inClassFieldInit = !0),
              (t.value = this.parseMaybeAssign()),
              (e.inClassFieldInit = i)
          } else t.value = null
          return this.semicolon(), this.finishNode(t, 'PropertyDefinition')
        }),
        (Z.parseClassStaticBlock = function (t) {
          t.body = []
          var e = this.labels
          for (
            this.labels = [], this.enterScope(320);
            this.type !== P.braceR;

          ) {
            var i = this.parseStatement(null)
            t.body.push(i)
          }
          return (
            this.next(),
            this.exitScope(),
            (this.labels = e),
            this.finishNode(t, 'StaticBlock')
          )
        }),
        (Z.parseClassId = function (t, e) {
          this.type === P.name
            ? ((t.id = this.parseIdent()),
              e && this.checkLValSimple(t.id, 2, !1))
            : (!0 === e && this.unexpected(), (t.id = null))
        }),
        (Z.parseClassSuper = function (t) {
          t.superClass = this.eat(P._extends)
            ? this.parseExprSubscripts(!1)
            : null
        }),
        (Z.enterClassBody = function () {
          var t = { declared: Object.create(null), used: [] }
          return this.privateNameStack.push(t), t.declared
        }),
        (Z.exitClassBody = function () {
          for (
            var t = this.privateNameStack.pop(),
              e = t.declared,
              i = t.used,
              s = this.privateNameStack.length,
              r = 0 === s ? null : this.privateNameStack[s - 1],
              a = 0;
            a < i.length;
            ++a
          ) {
            var n = i[a]
            D(e, n.name) ||
              (r
                ? r.used.push(n)
                : this.raiseRecoverable(
                    n.start,
                    "Private field '#" +
                      n.name +
                      "' must be declared in an enclosing class"
                  ))
          }
        }),
        (Z.parseExport = function (t, e) {
          if ((this.next(), this.eat(P.star)))
            return (
              this.options.ecmaVersion >= 11 &&
                (this.eatContextual('as')
                  ? ((t.exported = this.parseIdent(!0)),
                    this.checkExport(e, t.exported.name, this.lastTokStart))
                  : (t.exported = null)),
              this.expectContextual('from'),
              this.type !== P.string && this.unexpected(),
              (t.source = this.parseExprAtom()),
              this.semicolon(),
              this.finishNode(t, 'ExportAllDeclaration')
            )
          if (this.eat(P._default)) {
            var i
            if (
              (this.checkExport(e, 'default', this.lastTokStart),
              this.type === P._function || (i = this.isAsyncFunction()))
            ) {
              var s = this.startNode()
              this.next(),
                i && this.next(),
                (t.declaration = this.parseFunction(s, 4 | it, !1, i))
            } else if (this.type === P._class) {
              var r = this.startNode()
              t.declaration = this.parseClass(r, 'nullableID')
            } else (t.declaration = this.parseMaybeAssign()), this.semicolon()
            return this.finishNode(t, 'ExportDefaultDeclaration')
          }
          if (this.shouldParseExportStatement())
            (t.declaration = this.parseStatement(null)),
              'VariableDeclaration' === t.declaration.type
                ? this.checkVariableExport(e, t.declaration.declarations)
                : this.checkExport(
                    e,
                    t.declaration.id.name,
                    t.declaration.id.start
                  ),
              (t.specifiers = []),
              (t.source = null)
          else {
            if (
              ((t.declaration = null),
              (t.specifiers = this.parseExportSpecifiers(e)),
              this.eatContextual('from'))
            )
              this.type !== P.string && this.unexpected(),
                (t.source = this.parseExprAtom())
            else {
              for (var a = 0, n = t.specifiers; a < n.length; a += 1) {
                var o = n[a]
                this.checkUnreserved(o.local), this.checkLocalExport(o.local)
              }
              t.source = null
            }
            this.semicolon()
          }
          return this.finishNode(t, 'ExportNamedDeclaration')
        }),
        (Z.checkExport = function (t, e, i) {
          t &&
            (D(t, e) &&
              this.raiseRecoverable(i, "Duplicate export '" + e + "'"),
            (t[e] = !0))
        }),
        (Z.checkPatternExport = function (t, e) {
          var i = e.type
          if ('Identifier' === i) this.checkExport(t, e.name, e.start)
          else if ('ObjectPattern' === i)
            for (var s = 0, r = e.properties; s < r.length; s += 1) {
              var a = r[s]
              this.checkPatternExport(t, a)
            }
          else if ('ArrayPattern' === i)
            for (var n = 0, o = e.elements; n < o.length; n += 1) {
              var h = o[n]
              h && this.checkPatternExport(t, h)
            }
          else
            'Property' === i
              ? this.checkPatternExport(t, e.value)
              : 'AssignmentPattern' === i
              ? this.checkPatternExport(t, e.left)
              : 'RestElement' === i
              ? this.checkPatternExport(t, e.argument)
              : 'ParenthesizedExpression' === i &&
                this.checkPatternExport(t, e.expression)
        }),
        (Z.checkVariableExport = function (t, e) {
          if (t)
            for (var i = 0, s = e; i < s.length; i += 1) {
              var r = s[i]
              this.checkPatternExport(t, r.id)
            }
        }),
        (Z.shouldParseExportStatement = function () {
          return (
            'var' === this.type.keyword ||
            'const' === this.type.keyword ||
            'class' === this.type.keyword ||
            'function' === this.type.keyword ||
            this.isLet() ||
            this.isAsyncFunction()
          )
        }),
        (Z.parseExportSpecifiers = function (t) {
          var e = [],
            i = !0
          for (this.expect(P.braceL); !this.eat(P.braceR); ) {
            if (i) i = !1
            else if ((this.expect(P.comma), this.afterTrailingComma(P.braceR)))
              break
            var s = this.startNode()
            ;(s.local = this.parseIdent(!0)),
              (s.exported = this.eatContextual('as')
                ? this.parseIdent(!0)
                : s.local),
              this.checkExport(t, s.exported.name, s.exported.start),
              e.push(this.finishNode(s, 'ExportSpecifier'))
          }
          return e
        }),
        (Z.parseImport = function (t) {
          return (
            this.next(),
            this.type === P.string
              ? ((t.specifiers = et), (t.source = this.parseExprAtom()))
              : ((t.specifiers = this.parseImportSpecifiers()),
                this.expectContextual('from'),
                (t.source =
                  this.type === P.string
                    ? this.parseExprAtom()
                    : this.unexpected())),
            this.semicolon(),
            this.finishNode(t, 'ImportDeclaration')
          )
        }),
        (Z.parseImportSpecifiers = function () {
          var t = [],
            e = !0
          if (this.type === P.name) {
            var i = this.startNode()
            if (
              ((i.local = this.parseIdent()),
              this.checkLValSimple(i.local, 2),
              t.push(this.finishNode(i, 'ImportDefaultSpecifier')),
              !this.eat(P.comma))
            )
              return t
          }
          if (this.type === P.star) {
            var s = this.startNode()
            return (
              this.next(),
              this.expectContextual('as'),
              (s.local = this.parseIdent()),
              this.checkLValSimple(s.local, 2),
              t.push(this.finishNode(s, 'ImportNamespaceSpecifier')),
              t
            )
          }
          for (this.expect(P.braceL); !this.eat(P.braceR); ) {
            if (e) e = !1
            else if ((this.expect(P.comma), this.afterTrailingComma(P.braceR)))
              break
            var r = this.startNode()
            ;(r.imported = this.parseIdent(!0)),
              this.eatContextual('as')
                ? (r.local = this.parseIdent())
                : (this.checkUnreserved(r.imported), (r.local = r.imported)),
              this.checkLValSimple(r.local, 2),
              t.push(this.finishNode(r, 'ImportSpecifier'))
          }
          return t
        }),
        (Z.adaptDirectivePrologue = function (t) {
          for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
            t[e].directive = t[e].expression.raw.slice(1, -1)
        }),
        (Z.isDirectiveCandidate = function (t) {
          return (
            'ExpressionStatement' === t.type &&
            'Literal' === t.expression.type &&
            'string' == typeof t.expression.value &&
            ('"' === this.input[t.start] || "'" === this.input[t.start])
          )
        })
      var nt = K.prototype
      ;(nt.toAssignable = function (t, e, i) {
        if (this.options.ecmaVersion >= 6 && t)
          switch (t.type) {
            case 'Identifier':
              this.inAsync &&
                'await' === t.name &&
                this.raise(
                  t.start,
                  "Cannot use 'await' as identifier inside an async function"
                )
              break
            case 'ObjectPattern':
            case 'ArrayPattern':
            case 'AssignmentPattern':
            case 'RestElement':
              break
            case 'ObjectExpression':
              ;(t.type = 'ObjectPattern'), i && this.checkPatternErrors(i, !0)
              for (var s = 0, r = t.properties; s < r.length; s += 1) {
                var a = r[s]
                this.toAssignable(a, e),
                  'RestElement' !== a.type ||
                    ('ArrayPattern' !== a.argument.type &&
                      'ObjectPattern' !== a.argument.type) ||
                    this.raise(a.argument.start, 'Unexpected token')
              }
              break
            case 'Property':
              'init' !== t.kind &&
                this.raise(
                  t.key.start,
                  "Object pattern can't contain getter or setter"
                ),
                this.toAssignable(t.value, e)
              break
            case 'ArrayExpression':
              ;(t.type = 'ArrayPattern'),
                i && this.checkPatternErrors(i, !0),
                this.toAssignableList(t.elements, e)
              break
            case 'SpreadElement':
              ;(t.type = 'RestElement'),
                this.toAssignable(t.argument, e),
                'AssignmentPattern' === t.argument.type &&
                  this.raise(
                    t.argument.start,
                    'Rest elements cannot have a default value'
                  )
              break
            case 'AssignmentExpression':
              '=' !== t.operator &&
                this.raise(
                  t.left.end,
                  "Only '=' operator can be used for specifying default value."
                ),
                (t.type = 'AssignmentPattern'),
                delete t.operator,
                this.toAssignable(t.left, e)
              break
            case 'ParenthesizedExpression':
              this.toAssignable(t.expression, e, i)
              break
            case 'ChainExpression':
              this.raiseRecoverable(
                t.start,
                'Optional chaining cannot appear in left-hand side'
              )
              break
            case 'MemberExpression':
              if (!e) break
            default:
              this.raise(t.start, 'Assigning to rvalue')
          }
        else i && this.checkPatternErrors(i, !0)
        return t
      }),
        (nt.toAssignableList = function (t, e) {
          for (var i = t.length, s = 0; s < i; s++) {
            var r = t[s]
            r && this.toAssignable(r, e)
          }
          if (i) {
            var a = t[i - 1]
            6 === this.options.ecmaVersion &&
              e &&
              a &&
              'RestElement' === a.type &&
              'Identifier' !== a.argument.type &&
              this.unexpected(a.argument.start)
          }
          return t
        }),
        (nt.parseSpread = function (t) {
          var e = this.startNode()
          return (
            this.next(),
            (e.argument = this.parseMaybeAssign(!1, t)),
            this.finishNode(e, 'SpreadElement')
          )
        }),
        (nt.parseRestBinding = function () {
          var t = this.startNode()
          return (
            this.next(),
            6 === this.options.ecmaVersion &&
              this.type !== P.name &&
              this.unexpected(),
            (t.argument = this.parseBindingAtom()),
            this.finishNode(t, 'RestElement')
          )
        }),
        (nt.parseBindingAtom = function () {
          if (this.options.ecmaVersion >= 6)
            switch (this.type) {
              case P.bracketL:
                var t = this.startNode()
                return (
                  this.next(),
                  (t.elements = this.parseBindingList(P.bracketR, !0, !0)),
                  this.finishNode(t, 'ArrayPattern')
                )
              case P.braceL:
                return this.parseObj(!0)
            }
          return this.parseIdent()
        }),
        (nt.parseBindingList = function (t, e, i) {
          for (var s = [], r = !0; !this.eat(t); )
            if (
              (r ? (r = !1) : this.expect(P.comma), e && this.type === P.comma)
            )
              s.push(null)
            else {
              if (i && this.afterTrailingComma(t)) break
              if (this.type === P.ellipsis) {
                var a = this.parseRestBinding()
                this.parseBindingListItem(a),
                  s.push(a),
                  this.type === P.comma &&
                    this.raise(
                      this.start,
                      'Comma is not permitted after the rest element'
                    ),
                  this.expect(t)
                break
              }
              var n = this.parseMaybeDefault(this.start, this.startLoc)
              this.parseBindingListItem(n), s.push(n)
            }
          return s
        }),
        (nt.parseBindingListItem = function (t) {
          return t
        }),
        (nt.parseMaybeDefault = function (t, e, i) {
          if (
            ((i = i || this.parseBindingAtom()),
            this.options.ecmaVersion < 6 || !this.eat(P.eq))
          )
            return i
          var s = this.startNodeAt(t, e)
          return (
            (s.left = i),
            (s.right = this.parseMaybeAssign()),
            this.finishNode(s, 'AssignmentPattern')
          )
        }),
        (nt.checkLValSimple = function (t, e, i) {
          void 0 === e && (e = 0)
          var s = 0 !== e
          switch (t.type) {
            case 'Identifier':
              this.strict &&
                this.reservedWordsStrictBind.test(t.name) &&
                this.raiseRecoverable(
                  t.start,
                  (s ? 'Binding ' : 'Assigning to ') +
                    t.name +
                    ' in strict mode'
                ),
                s &&
                  (2 === e &&
                    'let' === t.name &&
                    this.raiseRecoverable(
                      t.start,
                      'let is disallowed as a lexically bound name'
                    ),
                  i &&
                    (D(i, t.name) &&
                      this.raiseRecoverable(t.start, 'Argument name clash'),
                    (i[t.name] = !0)),
                  5 !== e && this.declareName(t.name, e, t.start))
              break
            case 'ChainExpression':
              this.raiseRecoverable(
                t.start,
                'Optional chaining cannot appear in left-hand side'
              )
              break
            case 'MemberExpression':
              s && this.raiseRecoverable(t.start, 'Binding member expression')
              break
            case 'ParenthesizedExpression':
              return (
                s &&
                  this.raiseRecoverable(
                    t.start,
                    'Binding parenthesized expression'
                  ),
                this.checkLValSimple(t.expression, e, i)
              )
            default:
              this.raise(t.start, (s ? 'Binding' : 'Assigning to') + ' rvalue')
          }
        }),
        (nt.checkLValPattern = function (t, e, i) {
          switch ((void 0 === e && (e = 0), t.type)) {
            case 'ObjectPattern':
              for (var s = 0, r = t.properties; s < r.length; s += 1) {
                var a = r[s]
                this.checkLValInnerPattern(a, e, i)
              }
              break
            case 'ArrayPattern':
              for (var n = 0, o = t.elements; n < o.length; n += 1) {
                var h = o[n]
                h && this.checkLValInnerPattern(h, e, i)
              }
              break
            default:
              this.checkLValSimple(t, e, i)
          }
        }),
        (nt.checkLValInnerPattern = function (t, e, i) {
          switch ((void 0 === e && (e = 0), t.type)) {
            case 'Property':
              this.checkLValInnerPattern(t.value, e, i)
              break
            case 'AssignmentPattern':
              this.checkLValPattern(t.left, e, i)
              break
            case 'RestElement':
              this.checkLValPattern(t.argument, e, i)
              break
            default:
              this.checkLValPattern(t, e, i)
          }
        })
      var ot = function (t, e, i, s, r) {
          ;(this.token = t),
            (this.isExpr = !!e),
            (this.preserveSpace = !!i),
            (this.override = s),
            (this.generator = !!r)
        },
        ht = {
          b_stat: new ot('{', !1),
          b_expr: new ot('{', !0),
          b_tmpl: new ot('${', !1),
          p_stat: new ot('(', !1),
          p_expr: new ot('(', !0),
          q_tmpl: new ot('`', !0, !0, function (t) {
            return t.tryReadTemplateToken()
          }),
          f_stat: new ot('function', !1),
          f_expr: new ot('function', !0),
          f_expr_gen: new ot('function', !0, !1, null, !0),
          f_gen: new ot('function', !1, !1, null, !0)
        },
        lt = K.prototype
      ;(lt.initialContext = function () {
        return [ht.b_stat]
      }),
        (lt.curContext = function () {
          return this.context[this.context.length - 1]
        }),
        (lt.braceIsBlock = function (t) {
          var e = this.curContext()
          return (
            e === ht.f_expr ||
            e === ht.f_stat ||
            (t !== P.colon || (e !== ht.b_stat && e !== ht.b_expr)
              ? t === P._return || (t === P.name && this.exprAllowed)
                ? I.test(this.input.slice(this.lastTokEnd, this.start))
                : t === P._else ||
                  t === P.semi ||
                  t === P.eof ||
                  t === P.parenR ||
                  t === P.arrow ||
                  (t === P.braceL
                    ? e === ht.b_stat
                    : t !== P._var &&
                      t !== P._const &&
                      t !== P.name &&
                      !this.exprAllowed)
              : !e.isExpr)
          )
        }),
        (lt.inGeneratorContext = function () {
          for (var t = this.context.length - 1; t >= 1; t--) {
            var e = this.context[t]
            if ('function' === e.token) return e.generator
          }
          return !1
        }),
        (lt.updateContext = function (t) {
          var e,
            i = this.type
          i.keyword && t === P.dot
            ? (this.exprAllowed = !1)
            : (e = i.updateContext)
            ? e.call(this, t)
            : (this.exprAllowed = i.beforeExpr)
        }),
        (lt.overrideContext = function (t) {
          this.curContext() !== t && (this.context[this.context.length - 1] = t)
        }),
        (P.parenR.updateContext = P.braceR.updateContext =
          function () {
            if (1 !== this.context.length) {
              var t = this.context.pop()
              t === ht.b_stat &&
                'function' === this.curContext().token &&
                (t = this.context.pop()),
                (this.exprAllowed = !t.isExpr)
            } else this.exprAllowed = !0
          }),
        (P.braceL.updateContext = function (t) {
          this.context.push(this.braceIsBlock(t) ? ht.b_stat : ht.b_expr),
            (this.exprAllowed = !0)
        }),
        (P.dollarBraceL.updateContext = function () {
          this.context.push(ht.b_tmpl), (this.exprAllowed = !0)
        }),
        (P.parenL.updateContext = function (t) {
          var e = t === P._if || t === P._for || t === P._with || t === P._while
          this.context.push(e ? ht.p_stat : ht.p_expr), (this.exprAllowed = !0)
        }),
        (P.incDec.updateContext = function () {}),
        (P._function.updateContext = P._class.updateContext =
          function (t) {
            !t.beforeExpr ||
            t === P._else ||
            (t === P.semi && this.curContext() !== ht.p_stat) ||
            (t === P._return &&
              I.test(this.input.slice(this.lastTokEnd, this.start))) ||
            ((t === P.colon || t === P.braceL) &&
              this.curContext() === ht.b_stat)
              ? this.context.push(ht.f_stat)
              : this.context.push(ht.f_expr),
              (this.exprAllowed = !1)
          }),
        (P.backQuote.updateContext = function () {
          this.curContext() === ht.q_tmpl
            ? this.context.pop()
            : this.context.push(ht.q_tmpl),
            (this.exprAllowed = !1)
        }),
        (P.star.updateContext = function (t) {
          if (t === P._function) {
            var e = this.context.length - 1
            this.context[e] === ht.f_expr
              ? (this.context[e] = ht.f_expr_gen)
              : (this.context[e] = ht.f_gen)
          }
          this.exprAllowed = !0
        }),
        (P.name.updateContext = function (t) {
          var e = !1
          this.options.ecmaVersion >= 6 &&
            t !== P.dot &&
            (('of' === this.value && !this.exprAllowed) ||
              ('yield' === this.value && this.inGeneratorContext())) &&
            (e = !0),
            (this.exprAllowed = e)
        })
      var ct = K.prototype
      ;(ct.checkPropClash = function (t, e, i) {
        if (
          !(
            (this.options.ecmaVersion >= 9 && 'SpreadElement' === t.type) ||
            (this.options.ecmaVersion >= 6 &&
              (t.computed || t.method || t.shorthand))
          )
        ) {
          var s,
            r = t.key
          switch (r.type) {
            case 'Identifier':
              s = r.name
              break
            case 'Literal':
              s = String(r.value)
              break
            default:
              return
          }
          var a = t.kind
          if (this.options.ecmaVersion >= 6)
            '__proto__' === s &&
              'init' === a &&
              (e.proto &&
                (i
                  ? i.doubleProto < 0 && (i.doubleProto = r.start)
                  : this.raiseRecoverable(
                      r.start,
                      'Redefinition of __proto__ property'
                    )),
              (e.proto = !0))
          else {
            var n = e[(s = '$' + s)]
            if (n)
              ('init' === a
                ? (this.strict && n.init) || n.get || n.set
                : n.init || n[a]) &&
                this.raiseRecoverable(r.start, 'Redefinition of property')
            else n = e[s] = { init: !1, get: !1, set: !1 }
            n[a] = !0
          }
        }
      }),
        (ct.parseExpression = function (t, e) {
          var i = this.start,
            s = this.startLoc,
            r = this.parseMaybeAssign(t, e)
          if (this.type === P.comma) {
            var a = this.startNodeAt(i, s)
            for (a.expressions = [r]; this.eat(P.comma); )
              a.expressions.push(this.parseMaybeAssign(t, e))
            return this.finishNode(a, 'SequenceExpression')
          }
          return r
        }),
        (ct.parseMaybeAssign = function (t, e, i) {
          if (this.isContextual('yield')) {
            if (this.inGenerator) return this.parseYield(t)
            this.exprAllowed = !1
          }
          var s = !1,
            r = -1,
            a = -1,
            n = -1
          e
            ? ((r = e.parenthesizedAssign),
              (a = e.trailingComma),
              (n = e.doubleProto),
              (e.parenthesizedAssign = e.trailingComma = -1))
            : ((e = new Q()), (s = !0))
          var o = this.start,
            h = this.startLoc
          ;(this.type !== P.parenL && this.type !== P.name) ||
            ((this.potentialArrowAt = this.start),
            (this.potentialArrowInForAwait = 'await' === t))
          var l = this.parseMaybeConditional(t, e)
          if ((i && (l = i.call(this, l, o, h)), this.type.isAssign)) {
            var c = this.startNodeAt(o, h)
            return (
              (c.operator = this.value),
              this.type === P.eq && (l = this.toAssignable(l, !1, e)),
              s ||
                (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1),
              e.shorthandAssign >= l.start && (e.shorthandAssign = -1),
              this.type === P.eq
                ? this.checkLValPattern(l)
                : this.checkLValSimple(l),
              (c.left = l),
              this.next(),
              (c.right = this.parseMaybeAssign(t)),
              n > -1 && (e.doubleProto = n),
              this.finishNode(c, 'AssignmentExpression')
            )
          }
          return (
            s && this.checkExpressionErrors(e, !0),
            r > -1 && (e.parenthesizedAssign = r),
            a > -1 && (e.trailingComma = a),
            l
          )
        }),
        (ct.parseMaybeConditional = function (t, e) {
          var i = this.start,
            s = this.startLoc,
            r = this.parseExprOps(t, e)
          if (this.checkExpressionErrors(e)) return r
          if (this.eat(P.question)) {
            var a = this.startNodeAt(i, s)
            return (
              (a.test = r),
              (a.consequent = this.parseMaybeAssign()),
              this.expect(P.colon),
              (a.alternate = this.parseMaybeAssign(t)),
              this.finishNode(a, 'ConditionalExpression')
            )
          }
          return r
        }),
        (ct.parseExprOps = function (t, e) {
          var i = this.start,
            s = this.startLoc,
            r = this.parseMaybeUnary(e, !1, !1, t)
          return this.checkExpressionErrors(e) ||
            (r.start === i && 'ArrowFunctionExpression' === r.type)
            ? r
            : this.parseExprOp(r, i, s, -1, t)
        }),
        (ct.parseExprOp = function (t, e, i, s, r) {
          var a = this.type.binop
          if (null != a && (!r || this.type !== P._in) && a > s) {
            var n = this.type === P.logicalOR || this.type === P.logicalAND,
              o = this.type === P.coalesce
            o && (a = P.logicalAND.binop)
            var h = this.value
            this.next()
            var l = this.start,
              c = this.startLoc,
              p = this.parseExprOp(
                this.parseMaybeUnary(null, !1, !1, r),
                l,
                c,
                a,
                r
              ),
              u = this.buildBinary(e, i, t, p, h, n || o)
            return (
              ((n && this.type === P.coalesce) ||
                (o &&
                  (this.type === P.logicalOR || this.type === P.logicalAND))) &&
                this.raiseRecoverable(
                  this.start,
                  'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses'
                ),
              this.parseExprOp(u, e, i, s, r)
            )
          }
          return t
        }),
        (ct.buildBinary = function (t, e, i, s, r, a) {
          'PrivateIdentifier' === s.type &&
            this.raise(
              s.start,
              'Private identifier can only be left side of binary expression'
            )
          var n = this.startNodeAt(t, e)
          return (
            (n.left = i),
            (n.operator = r),
            (n.right = s),
            this.finishNode(n, a ? 'LogicalExpression' : 'BinaryExpression')
          )
        }),
        (ct.parseMaybeUnary = function (t, e, i, s) {
          var r,
            a = this.start,
            n = this.startLoc
          if (this.isContextual('await') && this.canAwait)
            (r = this.parseAwait(s)), (e = !0)
          else if (this.type.prefix) {
            var o = this.startNode(),
              h = this.type === P.incDec
            ;(o.operator = this.value),
              (o.prefix = !0),
              this.next(),
              (o.argument = this.parseMaybeUnary(null, !0, h, s)),
              this.checkExpressionErrors(t, !0),
              h
                ? this.checkLValSimple(o.argument)
                : this.strict &&
                  'delete' === o.operator &&
                  'Identifier' === o.argument.type
                ? this.raiseRecoverable(
                    o.start,
                    'Deleting local variable in strict mode'
                  )
                : 'delete' === o.operator &&
                  (function t(e) {
                    return (
                      ('MemberExpression' === e.type &&
                        'PrivateIdentifier' === e.property.type) ||
                      ('ChainExpression' === e.type && t(e.expression))
                    )
                  })(o.argument)
                ? this.raiseRecoverable(
                    o.start,
                    'Private fields can not be deleted'
                  )
                : (e = !0),
              (r = this.finishNode(
                o,
                h ? 'UpdateExpression' : 'UnaryExpression'
              ))
          } else if (e || this.type !== P.privateId) {
            if (
              ((r = this.parseExprSubscripts(t, s)),
              this.checkExpressionErrors(t))
            )
              return r
            for (; this.type.postfix && !this.canInsertSemicolon(); ) {
              var l = this.startNodeAt(a, n)
              ;(l.operator = this.value),
                (l.prefix = !1),
                (l.argument = r),
                this.checkLValSimple(r),
                this.next(),
                (r = this.finishNode(l, 'UpdateExpression'))
            }
          } else
            (s || 0 === this.privateNameStack.length) && this.unexpected(),
              (r = this.parsePrivateIdent()),
              this.type !== P._in && this.unexpected()
          return i || !this.eat(P.starstar)
            ? r
            : e
            ? void this.unexpected(this.lastTokStart)
            : this.buildBinary(
                a,
                n,
                r,
                this.parseMaybeUnary(null, !1, !1, s),
                '**',
                !1
              )
        }),
        (ct.parseExprSubscripts = function (t, e) {
          var i = this.start,
            s = this.startLoc,
            r = this.parseExprAtom(t, e)
          if (
            'ArrowFunctionExpression' === r.type &&
            ')' !== this.input.slice(this.lastTokStart, this.lastTokEnd)
          )
            return r
          var a = this.parseSubscripts(r, i, s, !1, e)
          return (
            t &&
              'MemberExpression' === a.type &&
              (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1),
              t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1),
              t.trailingComma >= a.start && (t.trailingComma = -1)),
            a
          )
        }),
        (ct.parseSubscripts = function (t, e, i, s, r) {
          for (
            var a =
                this.options.ecmaVersion >= 8 &&
                'Identifier' === t.type &&
                'async' === t.name &&
                this.lastTokEnd === t.end &&
                !this.canInsertSemicolon() &&
                t.end - t.start == 5 &&
                this.potentialArrowAt === t.start,
              n = !1;
            ;

          ) {
            var o = this.parseSubscript(t, e, i, s, a, n, r)
            if (
              (o.optional && (n = !0),
              o === t || 'ArrowFunctionExpression' === o.type)
            ) {
              if (n) {
                var h = this.startNodeAt(e, i)
                ;(h.expression = o), (o = this.finishNode(h, 'ChainExpression'))
              }
              return o
            }
            t = o
          }
        }),
        (ct.parseSubscript = function (t, e, i, s, r, a, n) {
          var o = this.options.ecmaVersion >= 11,
            h = o && this.eat(P.questionDot)
          s &&
            h &&
            this.raise(
              this.lastTokStart,
              'Optional chaining cannot appear in the callee of new expressions'
            )
          var l = this.eat(P.bracketL)
          if (
            l ||
            (h && this.type !== P.parenL && this.type !== P.backQuote) ||
            this.eat(P.dot)
          ) {
            var c = this.startNodeAt(e, i)
            ;(c.object = t),
              l
                ? ((c.property = this.parseExpression()),
                  this.expect(P.bracketR))
                : this.type === P.privateId && 'Super' !== t.type
                ? (c.property = this.parsePrivateIdent())
                : (c.property = this.parseIdent(
                    'never' !== this.options.allowReserved
                  )),
              (c.computed = !!l),
              o && (c.optional = h),
              (t = this.finishNode(c, 'MemberExpression'))
          } else if (!s && this.eat(P.parenL)) {
            var p = new Q(),
              u = this.yieldPos,
              d = this.awaitPos,
              f = this.awaitIdentPos
            ;(this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0)
            var m = this.parseExprList(
              P.parenR,
              this.options.ecmaVersion >= 8,
              !1,
              p
            )
            if (r && !h && !this.canInsertSemicolon() && this.eat(P.arrow))
              return (
                this.checkPatternErrors(p, !1),
                this.checkYieldAwaitInDefaultParams(),
                this.awaitIdentPos > 0 &&
                  this.raise(
                    this.awaitIdentPos,
                    "Cannot use 'await' as identifier inside an async function"
                  ),
                (this.yieldPos = u),
                (this.awaitPos = d),
                (this.awaitIdentPos = f),
                this.parseArrowExpression(this.startNodeAt(e, i), m, !0, n)
              )
            this.checkExpressionErrors(p, !0),
              (this.yieldPos = u || this.yieldPos),
              (this.awaitPos = d || this.awaitPos),
              (this.awaitIdentPos = f || this.awaitIdentPos)
            var g = this.startNodeAt(e, i)
            ;(g.callee = t),
              (g.arguments = m),
              o && (g.optional = h),
              (t = this.finishNode(g, 'CallExpression'))
          } else if (this.type === P.backQuote) {
            ;(h || a) &&
              this.raise(
                this.start,
                'Optional chaining cannot appear in the tag of tagged template expressions'
              )
            var v = this.startNodeAt(e, i)
            ;(v.tag = t),
              (v.quasi = this.parseTemplate({ isTagged: !0 })),
              (t = this.finishNode(v, 'TaggedTemplateExpression'))
          }
          return t
        }),
        (ct.parseExprAtom = function (t, e) {
          this.type === P.slash && this.readRegexp()
          var i,
            s = this.potentialArrowAt === this.start
          switch (this.type) {
            case P._super:
              return (
                this.allowSuper ||
                  this.raise(this.start, "'super' keyword outside a method"),
                (i = this.startNode()),
                this.next(),
                this.type !== P.parenL ||
                  this.allowDirectSuper ||
                  this.raise(
                    i.start,
                    'super() call outside constructor of a subclass'
                  ),
                this.type !== P.dot &&
                  this.type !== P.bracketL &&
                  this.type !== P.parenL &&
                  this.unexpected(),
                this.finishNode(i, 'Super')
              )
            case P._this:
              return (
                (i = this.startNode()),
                this.next(),
                this.finishNode(i, 'ThisExpression')
              )
            case P.name:
              var r = this.start,
                a = this.startLoc,
                n = this.containsEsc,
                o = this.parseIdent(!1)
              if (
                this.options.ecmaVersion >= 8 &&
                !n &&
                'async' === o.name &&
                !this.canInsertSemicolon() &&
                this.eat(P._function)
              )
                return (
                  this.overrideContext(ht.f_expr),
                  this.parseFunction(this.startNodeAt(r, a), 0, !1, !0, e)
                )
              if (s && !this.canInsertSemicolon()) {
                if (this.eat(P.arrow))
                  return this.parseArrowExpression(
                    this.startNodeAt(r, a),
                    [o],
                    !1,
                    e
                  )
                if (
                  this.options.ecmaVersion >= 8 &&
                  'async' === o.name &&
                  this.type === P.name &&
                  !n &&
                  (!this.potentialArrowInForAwait ||
                    'of' !== this.value ||
                    this.containsEsc)
                )
                  return (
                    (o = this.parseIdent(!1)),
                    (!this.canInsertSemicolon() && this.eat(P.arrow)) ||
                      this.unexpected(),
                    this.parseArrowExpression(
                      this.startNodeAt(r, a),
                      [o],
                      !0,
                      e
                    )
                  )
              }
              return o
            case P.regexp:
              var h = this.value
              return (
                ((i = this.parseLiteral(h.value)).regex = {
                  pattern: h.pattern,
                  flags: h.flags
                }),
                i
              )
            case P.num:
            case P.string:
              return this.parseLiteral(this.value)
            case P._null:
            case P._true:
            case P._false:
              return (
                ((i = this.startNode()).value =
                  this.type === P._null ? null : this.type === P._true),
                (i.raw = this.type.keyword),
                this.next(),
                this.finishNode(i, 'Literal')
              )
            case P.parenL:
              var l = this.start,
                c = this.parseParenAndDistinguishExpression(s, e)
              return (
                t &&
                  (t.parenthesizedAssign < 0 &&
                    !this.isSimpleAssignTarget(c) &&
                    (t.parenthesizedAssign = l),
                  t.parenthesizedBind < 0 && (t.parenthesizedBind = l)),
                c
              )
            case P.bracketL:
              return (
                (i = this.startNode()),
                this.next(),
                (i.elements = this.parseExprList(P.bracketR, !0, !0, t)),
                this.finishNode(i, 'ArrayExpression')
              )
            case P.braceL:
              return this.overrideContext(ht.b_expr), this.parseObj(!1, t)
            case P._function:
              return (
                (i = this.startNode()), this.next(), this.parseFunction(i, 0)
              )
            case P._class:
              return this.parseClass(this.startNode(), !1)
            case P._new:
              return this.parseNew()
            case P.backQuote:
              return this.parseTemplate()
            case P._import:
              return this.options.ecmaVersion >= 11
                ? this.parseExprImport()
                : this.unexpected()
            default:
              this.unexpected()
          }
        }),
        (ct.parseExprImport = function () {
          var t = this.startNode()
          this.containsEsc &&
            this.raiseRecoverable(
              this.start,
              'Escape sequence in keyword import'
            )
          var e = this.parseIdent(!0)
          switch (this.type) {
            case P.parenL:
              return this.parseDynamicImport(t)
            case P.dot:
              return (t.meta = e), this.parseImportMeta(t)
            default:
              this.unexpected()
          }
        }),
        (ct.parseDynamicImport = function (t) {
          if (
            (this.next(),
            (t.source = this.parseMaybeAssign()),
            !this.eat(P.parenR))
          ) {
            var e = this.start
            this.eat(P.comma) && this.eat(P.parenR)
              ? this.raiseRecoverable(
                  e,
                  'Trailing comma is not allowed in import()'
                )
              : this.unexpected(e)
          }
          return this.finishNode(t, 'ImportExpression')
        }),
        (ct.parseImportMeta = function (t) {
          this.next()
          var e = this.containsEsc
          return (
            (t.property = this.parseIdent(!0)),
            'meta' !== t.property.name &&
              this.raiseRecoverable(
                t.property.start,
                "The only valid meta property for import is 'import.meta'"
              ),
            e &&
              this.raiseRecoverable(
                t.start,
                "'import.meta' must not contain escaped characters"
              ),
            'module' === this.options.sourceType ||
              this.options.allowImportExportEverywhere ||
              this.raiseRecoverable(
                t.start,
                "Cannot use 'import.meta' outside a module"
              ),
            this.finishNode(t, 'MetaProperty')
          )
        }),
        (ct.parseLiteral = function (t) {
          var e = this.startNode()
          return (
            (e.value = t),
            (e.raw = this.input.slice(this.start, this.end)),
            110 === e.raw.charCodeAt(e.raw.length - 1) &&
              (e.bigint = e.raw.slice(0, -1).replace(/_/g, '')),
            this.next(),
            this.finishNode(e, 'Literal')
          )
        }),
        (ct.parseParenExpression = function () {
          this.expect(P.parenL)
          var t = this.parseExpression()
          return this.expect(P.parenR), t
        }),
        (ct.parseParenAndDistinguishExpression = function (t, e) {
          var i,
            s = this.start,
            r = this.startLoc,
            a = this.options.ecmaVersion >= 8
          if (this.options.ecmaVersion >= 6) {
            this.next()
            var n,
              o = this.start,
              h = this.startLoc,
              l = [],
              c = !0,
              p = !1,
              u = new Q(),
              d = this.yieldPos,
              f = this.awaitPos
            for (
              this.yieldPos = 0, this.awaitPos = 0;
              this.type !== P.parenR;

            ) {
              if (
                (c ? (c = !1) : this.expect(P.comma),
                a && this.afterTrailingComma(P.parenR, !0))
              ) {
                p = !0
                break
              }
              if (this.type === P.ellipsis) {
                ;(n = this.start),
                  l.push(this.parseParenItem(this.parseRestBinding())),
                  this.type === P.comma &&
                    this.raise(
                      this.start,
                      'Comma is not permitted after the rest element'
                    )
                break
              }
              l.push(this.parseMaybeAssign(!1, u, this.parseParenItem))
            }
            var m = this.lastTokEnd,
              g = this.lastTokEndLoc
            if (
              (this.expect(P.parenR),
              t && !this.canInsertSemicolon() && this.eat(P.arrow))
            )
              return (
                this.checkPatternErrors(u, !1),
                this.checkYieldAwaitInDefaultParams(),
                (this.yieldPos = d),
                (this.awaitPos = f),
                this.parseParenArrowList(s, r, l, e)
              )
            ;(l.length && !p) || this.unexpected(this.lastTokStart),
              n && this.unexpected(n),
              this.checkExpressionErrors(u, !0),
              (this.yieldPos = d || this.yieldPos),
              (this.awaitPos = f || this.awaitPos),
              l.length > 1
                ? (((i = this.startNodeAt(o, h)).expressions = l),
                  this.finishNodeAt(i, 'SequenceExpression', m, g))
                : (i = l[0])
          } else i = this.parseParenExpression()
          if (this.options.preserveParens) {
            var v = this.startNodeAt(s, r)
            return (
              (v.expression = i), this.finishNode(v, 'ParenthesizedExpression')
            )
          }
          return i
        }),
        (ct.parseParenItem = function (t) {
          return t
        }),
        (ct.parseParenArrowList = function (t, e, i, s) {
          return this.parseArrowExpression(this.startNodeAt(t, e), i, !1, s)
        })
      var pt = []
      ;(ct.parseNew = function () {
        this.containsEsc &&
          this.raiseRecoverable(this.start, 'Escape sequence in keyword new')
        var t = this.startNode(),
          e = this.parseIdent(!0)
        if (this.options.ecmaVersion >= 6 && this.eat(P.dot)) {
          t.meta = e
          var i = this.containsEsc
          return (
            (t.property = this.parseIdent(!0)),
            'target' !== t.property.name &&
              this.raiseRecoverable(
                t.property.start,
                "The only valid meta property for new is 'new.target'"
              ),
            i &&
              this.raiseRecoverable(
                t.start,
                "'new.target' must not contain escaped characters"
              ),
            this.allowNewDotTarget ||
              this.raiseRecoverable(
                t.start,
                "'new.target' can only be used in functions and class static block"
              ),
            this.finishNode(t, 'MetaProperty')
          )
        }
        var s = this.start,
          r = this.startLoc,
          a = this.type === P._import
        return (
          (t.callee = this.parseSubscripts(this.parseExprAtom(), s, r, !0, !1)),
          a &&
            'ImportExpression' === t.callee.type &&
            this.raise(s, 'Cannot use new with import()'),
          this.eat(P.parenL)
            ? (t.arguments = this.parseExprList(
                P.parenR,
                this.options.ecmaVersion >= 8,
                !1
              ))
            : (t.arguments = pt),
          this.finishNode(t, 'NewExpression')
        )
      }),
        (ct.parseTemplateElement = function (t) {
          var e = t.isTagged,
            i = this.startNode()
          return (
            this.type === P.invalidTemplate
              ? (e ||
                  this.raiseRecoverable(
                    this.start,
                    'Bad escape sequence in untagged template literal'
                  ),
                (i.value = { raw: this.value, cooked: null }))
              : (i.value = {
                  raw: this.input
                    .slice(this.start, this.end)
                    .replace(/\r\n?/g, '\n'),
                  cooked: this.value
                }),
            this.next(),
            (i.tail = this.type === P.backQuote),
            this.finishNode(i, 'TemplateElement')
          )
        }),
        (ct.parseTemplate = function (t) {
          void 0 === t && (t = {})
          var e = t.isTagged
          void 0 === e && (e = !1)
          var i = this.startNode()
          this.next(), (i.expressions = [])
          var s = this.parseTemplateElement({ isTagged: e })
          for (i.quasis = [s]; !s.tail; )
            this.type === P.eof &&
              this.raise(this.pos, 'Unterminated template literal'),
              this.expect(P.dollarBraceL),
              i.expressions.push(this.parseExpression()),
              this.expect(P.braceR),
              i.quasis.push((s = this.parseTemplateElement({ isTagged: e })))
          return this.next(), this.finishNode(i, 'TemplateLiteral')
        }),
        (ct.isAsyncProp = function (t) {
          return (
            !t.computed &&
            'Identifier' === t.key.type &&
            'async' === t.key.name &&
            (this.type === P.name ||
              this.type === P.num ||
              this.type === P.string ||
              this.type === P.bracketL ||
              this.type.keyword ||
              (this.options.ecmaVersion >= 9 && this.type === P.star)) &&
            !I.test(this.input.slice(this.lastTokEnd, this.start))
          )
        }),
        (ct.parseObj = function (t, e) {
          var i = this.startNode(),
            s = !0,
            r = {}
          for (i.properties = [], this.next(); !this.eat(P.braceR); ) {
            if (s) s = !1
            else if (
              (this.expect(P.comma),
              this.options.ecmaVersion >= 5 &&
                this.afterTrailingComma(P.braceR))
            )
              break
            var a = this.parseProperty(t, e)
            t || this.checkPropClash(a, r, e), i.properties.push(a)
          }
          return this.finishNode(i, t ? 'ObjectPattern' : 'ObjectExpression')
        }),
        (ct.parseProperty = function (t, e) {
          var i,
            s,
            r,
            a,
            n = this.startNode()
          if (this.options.ecmaVersion >= 9 && this.eat(P.ellipsis))
            return t
              ? ((n.argument = this.parseIdent(!1)),
                this.type === P.comma &&
                  this.raise(
                    this.start,
                    'Comma is not permitted after the rest element'
                  ),
                this.finishNode(n, 'RestElement'))
              : (this.type === P.parenL &&
                  e &&
                  (e.parenthesizedAssign < 0 &&
                    (e.parenthesizedAssign = this.start),
                  e.parenthesizedBind < 0 &&
                    (e.parenthesizedBind = this.start)),
                (n.argument = this.parseMaybeAssign(!1, e)),
                this.type === P.comma &&
                  e &&
                  e.trailingComma < 0 &&
                  (e.trailingComma = this.start),
                this.finishNode(n, 'SpreadElement'))
          this.options.ecmaVersion >= 6 &&
            ((n.method = !1),
            (n.shorthand = !1),
            (t || e) && ((r = this.start), (a = this.startLoc)),
            t || (i = this.eat(P.star)))
          var o = this.containsEsc
          return (
            this.parsePropertyName(n),
            !t &&
            !o &&
            this.options.ecmaVersion >= 8 &&
            !i &&
            this.isAsyncProp(n)
              ? ((s = !0),
                (i = this.options.ecmaVersion >= 9 && this.eat(P.star)),
                this.parsePropertyName(n, e))
              : (s = !1),
            this.parsePropertyValue(n, t, i, s, r, a, e, o),
            this.finishNode(n, 'Property')
          )
        }),
        (ct.parsePropertyValue = function (t, e, i, s, r, a, n, o) {
          if (
            ((i || s) && this.type === P.colon && this.unexpected(),
            this.eat(P.colon))
          )
            (t.value = e
              ? this.parseMaybeDefault(this.start, this.startLoc)
              : this.parseMaybeAssign(!1, n)),
              (t.kind = 'init')
          else if (this.options.ecmaVersion >= 6 && this.type === P.parenL)
            e && this.unexpected(),
              (t.kind = 'init'),
              (t.method = !0),
              (t.value = this.parseMethod(i, s))
          else if (
            e ||
            o ||
            !(this.options.ecmaVersion >= 5) ||
            t.computed ||
            'Identifier' !== t.key.type ||
            ('get' !== t.key.name && 'set' !== t.key.name) ||
            this.type === P.comma ||
            this.type === P.braceR ||
            this.type === P.eq
          )
            this.options.ecmaVersion >= 6 &&
            !t.computed &&
            'Identifier' === t.key.type
              ? ((i || s) && this.unexpected(),
                this.checkUnreserved(t.key),
                'await' !== t.key.name ||
                  this.awaitIdentPos ||
                  (this.awaitIdentPos = r),
                (t.kind = 'init'),
                e
                  ? (t.value = this.parseMaybeDefault(
                      r,
                      a,
                      this.copyNode(t.key)
                    ))
                  : this.type === P.eq && n
                  ? (n.shorthandAssign < 0 && (n.shorthandAssign = this.start),
                    (t.value = this.parseMaybeDefault(
                      r,
                      a,
                      this.copyNode(t.key)
                    )))
                  : (t.value = this.copyNode(t.key)),
                (t.shorthand = !0))
              : this.unexpected()
          else {
            ;(i || s) && this.unexpected(),
              (t.kind = t.key.name),
              this.parsePropertyName(t),
              (t.value = this.parseMethod(!1))
            var h = 'get' === t.kind ? 0 : 1
            if (t.value.params.length !== h) {
              var l = t.value.start
              'get' === t.kind
                ? this.raiseRecoverable(l, 'getter should have no params')
                : this.raiseRecoverable(
                    l,
                    'setter should have exactly one param'
                  )
            } else
              'set' === t.kind &&
                'RestElement' === t.value.params[0].type &&
                this.raiseRecoverable(
                  t.value.params[0].start,
                  'Setter cannot use rest params'
                )
          }
        }),
        (ct.parsePropertyName = function (t) {
          if (this.options.ecmaVersion >= 6) {
            if (this.eat(P.bracketL))
              return (
                (t.computed = !0),
                (t.key = this.parseMaybeAssign()),
                this.expect(P.bracketR),
                t.key
              )
            t.computed = !1
          }
          return (t.key =
            this.type === P.num || this.type === P.string
              ? this.parseExprAtom()
              : this.parseIdent('never' !== this.options.allowReserved))
        }),
        (ct.initFunction = function (t) {
          ;(t.id = null),
            this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1),
            this.options.ecmaVersion >= 8 && (t.async = !1)
        }),
        (ct.parseMethod = function (t, e, i) {
          var s = this.startNode(),
            r = this.yieldPos,
            a = this.awaitPos,
            n = this.awaitIdentPos
          return (
            this.initFunction(s),
            this.options.ecmaVersion >= 6 && (s.generator = t),
            this.options.ecmaVersion >= 8 && (s.async = !!e),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            this.enterScope(64 | $(e, s.generator) | (i ? 128 : 0)),
            this.expect(P.parenL),
            (s.params = this.parseBindingList(
              P.parenR,
              !1,
              this.options.ecmaVersion >= 8
            )),
            this.checkYieldAwaitInDefaultParams(),
            this.parseFunctionBody(s, !1, !0, !1),
            (this.yieldPos = r),
            (this.awaitPos = a),
            (this.awaitIdentPos = n),
            this.finishNode(s, 'FunctionExpression')
          )
        }),
        (ct.parseArrowExpression = function (t, e, i, s) {
          var r = this.yieldPos,
            a = this.awaitPos,
            n = this.awaitIdentPos
          return (
            this.enterScope(16 | $(i, !1)),
            this.initFunction(t),
            this.options.ecmaVersion >= 8 && (t.async = !!i),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            (t.params = this.toAssignableList(e, !0)),
            this.parseFunctionBody(t, !0, !1, s),
            (this.yieldPos = r),
            (this.awaitPos = a),
            (this.awaitIdentPos = n),
            this.finishNode(t, 'ArrowFunctionExpression')
          )
        }),
        (ct.parseFunctionBody = function (t, e, i, s) {
          var r = e && this.type !== P.braceL,
            a = this.strict,
            n = !1
          if (r)
            (t.body = this.parseMaybeAssign(s)),
              (t.expression = !0),
              this.checkParams(t, !1)
          else {
            var o =
              this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params)
            ;(a && !o) ||
              ((n = this.strictDirective(this.end)) &&
                o &&
                this.raiseRecoverable(
                  t.start,
                  "Illegal 'use strict' directive in function with non-simple parameter list"
                ))
            var h = this.labels
            ;(this.labels = []),
              n && (this.strict = !0),
              this.checkParams(
                t,
                !a && !n && !e && !i && this.isSimpleParamList(t.params)
              ),
              this.strict && t.id && this.checkLValSimple(t.id, 5),
              (t.body = this.parseBlock(!1, void 0, n && !a)),
              (t.expression = !1),
              this.adaptDirectivePrologue(t.body.body),
              (this.labels = h)
          }
          this.exitScope()
        }),
        (ct.isSimpleParamList = function (t) {
          for (var e = 0, i = t; e < i.length; e += 1) {
            if ('Identifier' !== i[e].type) return !1
          }
          return !0
        }),
        (ct.checkParams = function (t, e) {
          for (
            var i = Object.create(null), s = 0, r = t.params;
            s < r.length;
            s += 1
          ) {
            var a = r[s]
            this.checkLValInnerPattern(a, 1, e ? null : i)
          }
        }),
        (ct.parseExprList = function (t, e, i, s) {
          for (var r = [], a = !0; !this.eat(t); ) {
            if (a) a = !1
            else if ((this.expect(P.comma), e && this.afterTrailingComma(t)))
              break
            var n = void 0
            i && this.type === P.comma
              ? (n = null)
              : this.type === P.ellipsis
              ? ((n = this.parseSpread(s)),
                s &&
                  this.type === P.comma &&
                  s.trailingComma < 0 &&
                  (s.trailingComma = this.start))
              : (n = this.parseMaybeAssign(!1, s)),
              r.push(n)
          }
          return r
        }),
        (ct.checkUnreserved = function (t) {
          var e = t.start,
            i = t.end,
            s = t.name
          ;(this.inGenerator &&
            'yield' === s &&
            this.raiseRecoverable(
              e,
              "Cannot use 'yield' as identifier inside a generator"
            ),
          this.inAsync &&
            'await' === s &&
            this.raiseRecoverable(
              e,
              "Cannot use 'await' as identifier inside an async function"
            ),
          this.currentThisScope().inClassFieldInit &&
            'arguments' === s &&
            this.raiseRecoverable(
              e,
              "Cannot use 'arguments' in class field initializer"
            ),
          !this.inClassStaticBlock ||
            ('arguments' !== s && 'await' !== s) ||
            this.raise(
              e,
              'Cannot use ' + s + ' in class static initialization block'
            ),
          this.keywords.test(s) &&
            this.raise(e, "Unexpected keyword '" + s + "'"),
          this.options.ecmaVersion < 6 &&
            -1 !== this.input.slice(e, i).indexOf('\\')) ||
            ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(
              s
            ) &&
              (this.inAsync ||
                'await' !== s ||
                this.raiseRecoverable(
                  e,
                  "Cannot use keyword 'await' outside an async function"
                ),
              this.raiseRecoverable(e, "The keyword '" + s + "' is reserved")))
        }),
        (ct.parseIdent = function (t, e) {
          var i = this.startNode()
          return (
            this.type === P.name
              ? (i.name = this.value)
              : this.type.keyword
              ? ((i.name = this.type.keyword),
                ('class' !== i.name && 'function' !== i.name) ||
                  (this.lastTokEnd === this.lastTokStart + 1 &&
                    46 === this.input.charCodeAt(this.lastTokStart)) ||
                  this.context.pop())
              : this.unexpected(),
            this.next(!!t),
            this.finishNode(i, 'Identifier'),
            t ||
              (this.checkUnreserved(i),
              'await' !== i.name ||
                this.awaitIdentPos ||
                (this.awaitIdentPos = i.start)),
            i
          )
        }),
        (ct.parsePrivateIdent = function () {
          var t = this.startNode()
          return (
            this.type === P.privateId
              ? (t.name = this.value)
              : this.unexpected(),
            this.next(),
            this.finishNode(t, 'PrivateIdentifier'),
            0 === this.privateNameStack.length
              ? this.raise(
                  t.start,
                  "Private field '#" +
                    t.name +
                    "' must be declared in an enclosing class"
                )
              : this.privateNameStack[
                  this.privateNameStack.length - 1
                ].used.push(t),
            t
          )
        }),
        (ct.parseYield = function (t) {
          this.yieldPos || (this.yieldPos = this.start)
          var e = this.startNode()
          return (
            this.next(),
            this.type === P.semi ||
            this.canInsertSemicolon() ||
            (this.type !== P.star && !this.type.startsExpr)
              ? ((e.delegate = !1), (e.argument = null))
              : ((e.delegate = this.eat(P.star)),
                (e.argument = this.parseMaybeAssign(t))),
            this.finishNode(e, 'YieldExpression')
          )
        }),
        (ct.parseAwait = function (t) {
          this.awaitPos || (this.awaitPos = this.start)
          var e = this.startNode()
          return (
            this.next(),
            (e.argument = this.parseMaybeUnary(null, !0, !1, t)),
            this.finishNode(e, 'AwaitExpression')
          )
        })
      var ut = K.prototype
      ;(ut.raise = function (t, e) {
        var i = Y(this.input, t)
        e += ' (' + i.line + ':' + i.column + ')'
        var s = new SyntaxError(e)
        throw ((s.pos = t), (s.loc = i), (s.raisedAt = this.pos), s)
      }),
        (ut.raiseRecoverable = ut.raise),
        (ut.curPosition = function () {
          if (this.options.locations)
            return new W(this.curLine, this.pos - this.lineStart)
        })
      var dt = K.prototype,
        ft = function (t) {
          ;(this.flags = t),
            (this.var = []),
            (this.lexical = []),
            (this.functions = []),
            (this.inClassFieldInit = !1)
        }
      ;(dt.enterScope = function (t) {
        this.scopeStack.push(new ft(t))
      }),
        (dt.exitScope = function () {
          this.scopeStack.pop()
        }),
        (dt.treatFunctionsAsVarInScope = function (t) {
          return 2 & t.flags || (!this.inModule && 1 & t.flags)
        }),
        (dt.declareName = function (t, e, i) {
          var s = !1
          if (2 === e) {
            var r = this.currentScope()
            ;(s =
              r.lexical.indexOf(t) > -1 ||
              r.functions.indexOf(t) > -1 ||
              r.var.indexOf(t) > -1),
              r.lexical.push(t),
              this.inModule && 1 & r.flags && delete this.undefinedExports[t]
          } else if (4 === e) {
            this.currentScope().lexical.push(t)
          } else if (3 === e) {
            var a = this.currentScope()
            ;(s = this.treatFunctionsAsVar
              ? a.lexical.indexOf(t) > -1
              : a.lexical.indexOf(t) > -1 || a.var.indexOf(t) > -1),
              a.functions.push(t)
          } else
            for (var n = this.scopeStack.length - 1; n >= 0; --n) {
              var o = this.scopeStack[n]
              if (
                (o.lexical.indexOf(t) > -1 &&
                  !(32 & o.flags && o.lexical[0] === t)) ||
                (!this.treatFunctionsAsVarInScope(o) &&
                  o.functions.indexOf(t) > -1)
              ) {
                s = !0
                break
              }
              if (
                (o.var.push(t),
                this.inModule && 1 & o.flags && delete this.undefinedExports[t],
                259 & o.flags)
              )
                break
            }
          s &&
            this.raiseRecoverable(
              i,
              "Identifier '" + t + "' has already been declared"
            )
        }),
        (dt.checkLocalExport = function (t) {
          ;-1 === this.scopeStack[0].lexical.indexOf(t.name) &&
            -1 === this.scopeStack[0].var.indexOf(t.name) &&
            (this.undefinedExports[t.name] = t)
        }),
        (dt.currentScope = function () {
          return this.scopeStack[this.scopeStack.length - 1]
        }),
        (dt.currentVarScope = function () {
          for (var t = this.scopeStack.length - 1; ; t--) {
            var e = this.scopeStack[t]
            if (259 & e.flags) return e
          }
        }),
        (dt.currentThisScope = function () {
          for (var t = this.scopeStack.length - 1; ; t--) {
            var e = this.scopeStack[t]
            if (259 & e.flags && !(16 & e.flags)) return e
          }
        })
      var mt = function (t, e, i) {
          ;(this.type = ''),
            (this.start = e),
            (this.end = 0),
            t.options.locations && (this.loc = new H(t, i)),
            t.options.directSourceFile &&
              (this.sourceFile = t.options.directSourceFile),
            t.options.ranges && (this.range = [e, 0])
        },
        gt = K.prototype
      function vt(t, e, i, s) {
        return (
          (t.type = e),
          (t.end = i),
          this.options.locations && (t.loc.end = s),
          this.options.ranges && (t.range[1] = i),
          t
        )
      }
      ;(gt.startNode = function () {
        return new mt(this, this.start, this.startLoc)
      }),
        (gt.startNodeAt = function (t, e) {
          return new mt(this, t, e)
        }),
        (gt.finishNode = function (t, e) {
          return vt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
        }),
        (gt.finishNodeAt = function (t, e, i, s) {
          return vt.call(this, t, e, i, s)
        }),
        (gt.copyNode = function (t) {
          var e = new mt(this, t.start, this.startLoc)
          for (var i in t) e[i] = t[i]
          return e
        })
      var yt =
          'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
        xt = yt + ' Extended_Pictographic',
        bt = {
          9: yt,
          10: xt,
          11: xt,
          12: 'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict'
        },
        _t =
          'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
        kt =
          'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
        wt =
          kt +
          ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
        St =
          wt +
          ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
        Ct = {
          9: kt,
          10: wt,
          11: St,
          12: 'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi'
        },
        Et = {}
      function At(t) {
        var e = (Et[t] = {
          binary: F(bt[t] + ' ' + _t),
          nonBinary: { General_Category: F(_t), Script: F(Ct[t]) }
        })
        ;(e.nonBinary.Script_Extensions = e.nonBinary.Script),
          (e.nonBinary.gc = e.nonBinary.General_Category),
          (e.nonBinary.sc = e.nonBinary.Script),
          (e.nonBinary.scx = e.nonBinary.Script_Extensions)
      }
      At(9), At(10), At(11), At(12)
      var Pt = K.prototype,
        It = function (t) {
          ;(this.parser = t),
            (this.validFlags =
              'gim' +
              (t.options.ecmaVersion >= 6 ? 'uy' : '') +
              (t.options.ecmaVersion >= 9 ? 's' : '') +
              (t.options.ecmaVersion >= 13 ? 'd' : '')),
            (this.unicodeProperties =
              Et[t.options.ecmaVersion >= 12 ? 12 : t.options.ecmaVersion]),
            (this.source = ''),
            (this.flags = ''),
            (this.start = 0),
            (this.switchU = !1),
            (this.switchN = !1),
            (this.pos = 0),
            (this.lastIntValue = 0),
            (this.lastStringValue = ''),
            (this.lastAssertionIsQuantifiable = !1),
            (this.numCapturingParens = 0),
            (this.maxBackReference = 0),
            (this.groupNames = []),
            (this.backReferenceNames = [])
        }
      function Lt(t) {
        return t <= 65535
          ? String.fromCharCode(t)
          : ((t -= 65536),
            String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
      }
      function Tt(t) {
        return (
          36 === t ||
          (t >= 40 && t <= 43) ||
          46 === t ||
          63 === t ||
          (t >= 91 && t <= 94) ||
          (t >= 123 && t <= 125)
        )
      }
      function Nt(t) {
        return (t >= 65 && t <= 90) || (t >= 97 && t <= 122)
      }
      function Rt(t) {
        return Nt(t) || 95 === t
      }
      function Vt(t) {
        return Rt(t) || Mt(t)
      }
      function Mt(t) {
        return t >= 48 && t <= 57
      }
      function Ot(t) {
        return (
          (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
        )
      }
      function Dt(t) {
        return t >= 65 && t <= 70
          ? t - 65 + 10
          : t >= 97 && t <= 102
          ? t - 97 + 10
          : t - 48
      }
      function Bt(t) {
        return t >= 48 && t <= 55
      }
      ;(It.prototype.reset = function (t, e, i) {
        var s = -1 !== i.indexOf('u')
        ;(this.start = 0 | t),
          (this.source = e + ''),
          (this.flags = i),
          (this.switchU = s && this.parser.options.ecmaVersion >= 6),
          (this.switchN = s && this.parser.options.ecmaVersion >= 9)
      }),
        (It.prototype.raise = function (t) {
          this.parser.raiseRecoverable(
            this.start,
            'Invalid regular expression: /' + this.source + '/: ' + t
          )
        }),
        (It.prototype.at = function (t, e) {
          void 0 === e && (e = !1)
          var i = this.source,
            s = i.length
          if (t >= s) return -1
          var r = i.charCodeAt(t)
          if ((!e && !this.switchU) || r <= 55295 || r >= 57344 || t + 1 >= s)
            return r
          var a = i.charCodeAt(t + 1)
          return a >= 56320 && a <= 57343 ? (r << 10) + a - 56613888 : r
        }),
        (It.prototype.nextIndex = function (t, e) {
          void 0 === e && (e = !1)
          var i = this.source,
            s = i.length
          if (t >= s) return s
          var r,
            a = i.charCodeAt(t)
          return (!e && !this.switchU) ||
            a <= 55295 ||
            a >= 57344 ||
            t + 1 >= s ||
            (r = i.charCodeAt(t + 1)) < 56320 ||
            r > 57343
            ? t + 1
            : t + 2
        }),
        (It.prototype.current = function (t) {
          return void 0 === t && (t = !1), this.at(this.pos, t)
        }),
        (It.prototype.lookahead = function (t) {
          return (
            void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
          )
        }),
        (It.prototype.advance = function (t) {
          void 0 === t && (t = !1), (this.pos = this.nextIndex(this.pos, t))
        }),
        (It.prototype.eat = function (t, e) {
          return (
            void 0 === e && (e = !1),
            this.current(e) === t && (this.advance(e), !0)
          )
        }),
        (Pt.validateRegExpFlags = function (t) {
          for (var e = t.validFlags, i = t.flags, s = 0; s < i.length; s++) {
            var r = i.charAt(s)
            ;-1 === e.indexOf(r) &&
              this.raise(t.start, 'Invalid regular expression flag'),
              i.indexOf(r, s + 1) > -1 &&
                this.raise(t.start, 'Duplicate regular expression flag')
          }
        }),
        (Pt.validateRegExpPattern = function (t) {
          this.regexp_pattern(t),
            !t.switchN &&
              this.options.ecmaVersion >= 9 &&
              t.groupNames.length > 0 &&
              ((t.switchN = !0), this.regexp_pattern(t))
        }),
        (Pt.regexp_pattern = function (t) {
          ;(t.pos = 0),
            (t.lastIntValue = 0),
            (t.lastStringValue = ''),
            (t.lastAssertionIsQuantifiable = !1),
            (t.numCapturingParens = 0),
            (t.maxBackReference = 0),
            (t.groupNames.length = 0),
            (t.backReferenceNames.length = 0),
            this.regexp_disjunction(t),
            t.pos !== t.source.length &&
              (t.eat(41) && t.raise("Unmatched ')'"),
              (t.eat(93) || t.eat(125)) && t.raise('Lone quantifier brackets')),
            t.maxBackReference > t.numCapturingParens &&
              t.raise('Invalid escape')
          for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
            var s = i[e]
            ;-1 === t.groupNames.indexOf(s) &&
              t.raise('Invalid named capture referenced')
          }
        }),
        (Pt.regexp_disjunction = function (t) {
          for (this.regexp_alternative(t); t.eat(124); )
            this.regexp_alternative(t)
          this.regexp_eatQuantifier(t, !0) && t.raise('Nothing to repeat'),
            t.eat(123) && t.raise('Lone quantifier brackets')
        }),
        (Pt.regexp_alternative = function (t) {
          for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
        }),
        (Pt.regexp_eatTerm = function (t) {
          return this.regexp_eatAssertion(t)
            ? (t.lastAssertionIsQuantifiable &&
                this.regexp_eatQuantifier(t) &&
                t.switchU &&
                t.raise('Invalid quantifier'),
              !0)
            : !!(t.switchU
                ? this.regexp_eatAtom(t)
                : this.regexp_eatExtendedAtom(t)) &&
                (this.regexp_eatQuantifier(t), !0)
        }),
        (Pt.regexp_eatAssertion = function (t) {
          var e = t.pos
          if (((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36)))
            return !0
          if (t.eat(92)) {
            if (t.eat(66) || t.eat(98)) return !0
            t.pos = e
          }
          if (t.eat(40) && t.eat(63)) {
            var i = !1
            if (
              (this.options.ecmaVersion >= 9 && (i = t.eat(60)),
              t.eat(61) || t.eat(33))
            )
              return (
                this.regexp_disjunction(t),
                t.eat(41) || t.raise('Unterminated group'),
                (t.lastAssertionIsQuantifiable = !i),
                !0
              )
          }
          return (t.pos = e), !1
        }),
        (Pt.regexp_eatQuantifier = function (t, e) {
          return (
            void 0 === e && (e = !1),
            !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
          )
        }),
        (Pt.regexp_eatQuantifierPrefix = function (t, e) {
          return (
            t.eat(42) ||
            t.eat(43) ||
            t.eat(63) ||
            this.regexp_eatBracedQuantifier(t, e)
          )
        }),
        (Pt.regexp_eatBracedQuantifier = function (t, e) {
          var i = t.pos
          if (t.eat(123)) {
            var s = 0,
              r = -1
            if (
              this.regexp_eatDecimalDigits(t) &&
              ((s = t.lastIntValue),
              t.eat(44) &&
                this.regexp_eatDecimalDigits(t) &&
                (r = t.lastIntValue),
              t.eat(125))
            )
              return (
                -1 !== r &&
                  r < s &&
                  !e &&
                  t.raise('numbers out of order in {} quantifier'),
                !0
              )
            t.switchU && !e && t.raise('Incomplete quantifier'), (t.pos = i)
          }
          return !1
        }),
        (Pt.regexp_eatAtom = function (t) {
          return (
            this.regexp_eatPatternCharacters(t) ||
            t.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(t) ||
            this.regexp_eatCharacterClass(t) ||
            this.regexp_eatUncapturingGroup(t) ||
            this.regexp_eatCapturingGroup(t)
          )
        }),
        (Pt.regexp_eatReverseSolidusAtomEscape = function (t) {
          var e = t.pos
          if (t.eat(92)) {
            if (this.regexp_eatAtomEscape(t)) return !0
            t.pos = e
          }
          return !1
        }),
        (Pt.regexp_eatUncapturingGroup = function (t) {
          var e = t.pos
          if (t.eat(40)) {
            if (t.eat(63) && t.eat(58)) {
              if ((this.regexp_disjunction(t), t.eat(41))) return !0
              t.raise('Unterminated group')
            }
            t.pos = e
          }
          return !1
        }),
        (Pt.regexp_eatCapturingGroup = function (t) {
          if (t.eat(40)) {
            if (
              (this.options.ecmaVersion >= 9
                ? this.regexp_groupSpecifier(t)
                : 63 === t.current() && t.raise('Invalid group'),
              this.regexp_disjunction(t),
              t.eat(41))
            )
              return (t.numCapturingParens += 1), !0
            t.raise('Unterminated group')
          }
          return !1
        }),
        (Pt.regexp_eatExtendedAtom = function (t) {
          return (
            t.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(t) ||
            this.regexp_eatCharacterClass(t) ||
            this.regexp_eatUncapturingGroup(t) ||
            this.regexp_eatCapturingGroup(t) ||
            this.regexp_eatInvalidBracedQuantifier(t) ||
            this.regexp_eatExtendedPatternCharacter(t)
          )
        }),
        (Pt.regexp_eatInvalidBracedQuantifier = function (t) {
          return (
            this.regexp_eatBracedQuantifier(t, !0) &&
              t.raise('Nothing to repeat'),
            !1
          )
        }),
        (Pt.regexp_eatSyntaxCharacter = function (t) {
          var e = t.current()
          return !!Tt(e) && ((t.lastIntValue = e), t.advance(), !0)
        }),
        (Pt.regexp_eatPatternCharacters = function (t) {
          for (var e = t.pos, i = 0; -1 !== (i = t.current()) && !Tt(i); )
            t.advance()
          return t.pos !== e
        }),
        (Pt.regexp_eatExtendedPatternCharacter = function (t) {
          var e = t.current()
          return (
            !(
              -1 === e ||
              36 === e ||
              (e >= 40 && e <= 43) ||
              46 === e ||
              63 === e ||
              91 === e ||
              94 === e ||
              124 === e
            ) && (t.advance(), !0)
          )
        }),
        (Pt.regexp_groupSpecifier = function (t) {
          if (t.eat(63)) {
            if (this.regexp_eatGroupName(t))
              return (
                -1 !== t.groupNames.indexOf(t.lastStringValue) &&
                  t.raise('Duplicate capture group name'),
                void t.groupNames.push(t.lastStringValue)
              )
            t.raise('Invalid group')
          }
        }),
        (Pt.regexp_eatGroupName = function (t) {
          if (((t.lastStringValue = ''), t.eat(60))) {
            if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0
            t.raise('Invalid capture group name')
          }
          return !1
        }),
        (Pt.regexp_eatRegExpIdentifierName = function (t) {
          if (
            ((t.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(t))
          ) {
            for (
              t.lastStringValue += Lt(t.lastIntValue);
              this.regexp_eatRegExpIdentifierPart(t);

            )
              t.lastStringValue += Lt(t.lastIntValue)
            return !0
          }
          return !1
        }),
        (Pt.regexp_eatRegExpIdentifierStart = function (t) {
          var e = t.pos,
            i = this.options.ecmaVersion >= 11,
            s = t.current(i)
          return (
            t.advance(i),
            92 === s &&
              this.regexp_eatRegExpUnicodeEscapeSequence(t, i) &&
              (s = t.lastIntValue),
            (function (t) {
              return b(t, !0) || 36 === t || 95 === t
            })(s)
              ? ((t.lastIntValue = s), !0)
              : ((t.pos = e), !1)
          )
        }),
        (Pt.regexp_eatRegExpIdentifierPart = function (t) {
          var e = t.pos,
            i = this.options.ecmaVersion >= 11,
            s = t.current(i)
          return (
            t.advance(i),
            92 === s &&
              this.regexp_eatRegExpUnicodeEscapeSequence(t, i) &&
              (s = t.lastIntValue),
            (function (t) {
              return (
                _(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
              )
            })(s)
              ? ((t.lastIntValue = s), !0)
              : ((t.pos = e), !1)
          )
        }),
        (Pt.regexp_eatAtomEscape = function (t) {
          return (
            !!(
              this.regexp_eatBackReference(t) ||
              this.regexp_eatCharacterClassEscape(t) ||
              this.regexp_eatCharacterEscape(t) ||
              (t.switchN && this.regexp_eatKGroupName(t))
            ) ||
            (t.switchU &&
              (99 === t.current() && t.raise('Invalid unicode escape'),
              t.raise('Invalid escape')),
            !1)
          )
        }),
        (Pt.regexp_eatBackReference = function (t) {
          var e = t.pos
          if (this.regexp_eatDecimalEscape(t)) {
            var i = t.lastIntValue
            if (t.switchU)
              return i > t.maxBackReference && (t.maxBackReference = i), !0
            if (i <= t.numCapturingParens) return !0
            t.pos = e
          }
          return !1
        }),
        (Pt.regexp_eatKGroupName = function (t) {
          if (t.eat(107)) {
            if (this.regexp_eatGroupName(t))
              return t.backReferenceNames.push(t.lastStringValue), !0
            t.raise('Invalid named reference')
          }
          return !1
        }),
        (Pt.regexp_eatCharacterEscape = function (t) {
          return (
            this.regexp_eatControlEscape(t) ||
            this.regexp_eatCControlLetter(t) ||
            this.regexp_eatZero(t) ||
            this.regexp_eatHexEscapeSequence(t) ||
            this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) ||
            (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
            this.regexp_eatIdentityEscape(t)
          )
        }),
        (Pt.regexp_eatCControlLetter = function (t) {
          var e = t.pos
          if (t.eat(99)) {
            if (this.regexp_eatControlLetter(t)) return !0
            t.pos = e
          }
          return !1
        }),
        (Pt.regexp_eatZero = function (t) {
          return (
            48 === t.current() &&
            !Mt(t.lookahead()) &&
            ((t.lastIntValue = 0), t.advance(), !0)
          )
        }),
        (Pt.regexp_eatControlEscape = function (t) {
          var e = t.current()
          return 116 === e
            ? ((t.lastIntValue = 9), t.advance(), !0)
            : 110 === e
            ? ((t.lastIntValue = 10), t.advance(), !0)
            : 118 === e
            ? ((t.lastIntValue = 11), t.advance(), !0)
            : 102 === e
            ? ((t.lastIntValue = 12), t.advance(), !0)
            : 114 === e && ((t.lastIntValue = 13), t.advance(), !0)
        }),
        (Pt.regexp_eatControlLetter = function (t) {
          var e = t.current()
          return !!Nt(e) && ((t.lastIntValue = e % 32), t.advance(), !0)
        }),
        (Pt.regexp_eatRegExpUnicodeEscapeSequence = function (t, e) {
          void 0 === e && (e = !1)
          var i,
            s = t.pos,
            r = e || t.switchU
          if (t.eat(117)) {
            if (this.regexp_eatFixedHexDigits(t, 4)) {
              var a = t.lastIntValue
              if (r && a >= 55296 && a <= 56319) {
                var n = t.pos
                if (
                  t.eat(92) &&
                  t.eat(117) &&
                  this.regexp_eatFixedHexDigits(t, 4)
                ) {
                  var o = t.lastIntValue
                  if (o >= 56320 && o <= 57343)
                    return (
                      (t.lastIntValue =
                        1024 * (a - 55296) + (o - 56320) + 65536),
                      !0
                    )
                }
                ;(t.pos = n), (t.lastIntValue = a)
              }
              return !0
            }
            if (
              r &&
              t.eat(123) &&
              this.regexp_eatHexDigits(t) &&
              t.eat(125) &&
              (i = t.lastIntValue) >= 0 &&
              i <= 1114111
            )
              return !0
            r && t.raise('Invalid unicode escape'), (t.pos = s)
          }
          return !1
        }),
        (Pt.regexp_eatIdentityEscape = function (t) {
          if (t.switchU)
            return (
              !!this.regexp_eatSyntaxCharacter(t) ||
              (!!t.eat(47) && ((t.lastIntValue = 47), !0))
            )
          var e = t.current()
          return (
            !(99 === e || (t.switchN && 107 === e)) &&
            ((t.lastIntValue = e), t.advance(), !0)
          )
        }),
        (Pt.regexp_eatDecimalEscape = function (t) {
          t.lastIntValue = 0
          var e = t.current()
          if (e >= 49 && e <= 57) {
            do {
              ;(t.lastIntValue = 10 * t.lastIntValue + (e - 48)), t.advance()
            } while ((e = t.current()) >= 48 && e <= 57)
            return !0
          }
          return !1
        }),
        (Pt.regexp_eatCharacterClassEscape = function (t) {
          var e = t.current()
          if (
            (function (t) {
              return (
                100 === t ||
                68 === t ||
                115 === t ||
                83 === t ||
                119 === t ||
                87 === t
              )
            })(e)
          )
            return (t.lastIntValue = -1), t.advance(), !0
          if (
            t.switchU &&
            this.options.ecmaVersion >= 9 &&
            (80 === e || 112 === e)
          ) {
            if (
              ((t.lastIntValue = -1),
              t.advance(),
              t.eat(123) &&
                this.regexp_eatUnicodePropertyValueExpression(t) &&
                t.eat(125))
            )
              return !0
            t.raise('Invalid property name')
          }
          return !1
        }),
        (Pt.regexp_eatUnicodePropertyValueExpression = function (t) {
          var e = t.pos
          if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
            var i = t.lastStringValue
            if (this.regexp_eatUnicodePropertyValue(t)) {
              var s = t.lastStringValue
              return (
                this.regexp_validateUnicodePropertyNameAndValue(t, i, s), !0
              )
            }
          }
          if (((t.pos = e), this.regexp_eatLoneUnicodePropertyNameOrValue(t))) {
            var r = t.lastStringValue
            return this.regexp_validateUnicodePropertyNameOrValue(t, r), !0
          }
          return !1
        }),
        (Pt.regexp_validateUnicodePropertyNameAndValue = function (t, e, i) {
          D(t.unicodeProperties.nonBinary, e) ||
            t.raise('Invalid property name'),
            t.unicodeProperties.nonBinary[e].test(i) ||
              t.raise('Invalid property value')
        }),
        (Pt.regexp_validateUnicodePropertyNameOrValue = function (t, e) {
          t.unicodeProperties.binary.test(e) || t.raise('Invalid property name')
        }),
        (Pt.regexp_eatUnicodePropertyName = function (t) {
          var e = 0
          for (t.lastStringValue = ''; Rt((e = t.current())); )
            (t.lastStringValue += Lt(e)), t.advance()
          return '' !== t.lastStringValue
        }),
        (Pt.regexp_eatUnicodePropertyValue = function (t) {
          var e = 0
          for (t.lastStringValue = ''; Vt((e = t.current())); )
            (t.lastStringValue += Lt(e)), t.advance()
          return '' !== t.lastStringValue
        }),
        (Pt.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
          return this.regexp_eatUnicodePropertyValue(t)
        }),
        (Pt.regexp_eatCharacterClass = function (t) {
          if (t.eat(91)) {
            if ((t.eat(94), this.regexp_classRanges(t), t.eat(93))) return !0
            t.raise('Unterminated character class')
          }
          return !1
        }),
        (Pt.regexp_classRanges = function (t) {
          for (; this.regexp_eatClassAtom(t); ) {
            var e = t.lastIntValue
            if (t.eat(45) && this.regexp_eatClassAtom(t)) {
              var i = t.lastIntValue
              !t.switchU ||
                (-1 !== e && -1 !== i) ||
                t.raise('Invalid character class'),
                -1 !== e &&
                  -1 !== i &&
                  e > i &&
                  t.raise('Range out of order in character class')
            }
          }
        }),
        (Pt.regexp_eatClassAtom = function (t) {
          var e = t.pos
          if (t.eat(92)) {
            if (this.regexp_eatClassEscape(t)) return !0
            if (t.switchU) {
              var i = t.current()
              ;(99 === i || Bt(i)) && t.raise('Invalid class escape'),
                t.raise('Invalid escape')
            }
            t.pos = e
          }
          var s = t.current()
          return 93 !== s && ((t.lastIntValue = s), t.advance(), !0)
        }),
        (Pt.regexp_eatClassEscape = function (t) {
          var e = t.pos
          if (t.eat(98)) return (t.lastIntValue = 8), !0
          if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0
          if (!t.switchU && t.eat(99)) {
            if (this.regexp_eatClassControlLetter(t)) return !0
            t.pos = e
          }
          return (
            this.regexp_eatCharacterClassEscape(t) ||
            this.regexp_eatCharacterEscape(t)
          )
        }),
        (Pt.regexp_eatClassControlLetter = function (t) {
          var e = t.current()
          return (
            !(!Mt(e) && 95 !== e) &&
            ((t.lastIntValue = e % 32), t.advance(), !0)
          )
        }),
        (Pt.regexp_eatHexEscapeSequence = function (t) {
          var e = t.pos
          if (t.eat(120)) {
            if (this.regexp_eatFixedHexDigits(t, 2)) return !0
            t.switchU && t.raise('Invalid escape'), (t.pos = e)
          }
          return !1
        }),
        (Pt.regexp_eatDecimalDigits = function (t) {
          var e = t.pos,
            i = 0
          for (t.lastIntValue = 0; Mt((i = t.current())); )
            (t.lastIntValue = 10 * t.lastIntValue + (i - 48)), t.advance()
          return t.pos !== e
        }),
        (Pt.regexp_eatHexDigits = function (t) {
          var e = t.pos,
            i = 0
          for (t.lastIntValue = 0; Ot((i = t.current())); )
            (t.lastIntValue = 16 * t.lastIntValue + Dt(i)), t.advance()
          return t.pos !== e
        }),
        (Pt.regexp_eatLegacyOctalEscapeSequence = function (t) {
          if (this.regexp_eatOctalDigit(t)) {
            var e = t.lastIntValue
            if (this.regexp_eatOctalDigit(t)) {
              var i = t.lastIntValue
              e <= 3 && this.regexp_eatOctalDigit(t)
                ? (t.lastIntValue = 64 * e + 8 * i + t.lastIntValue)
                : (t.lastIntValue = 8 * e + i)
            } else t.lastIntValue = e
            return !0
          }
          return !1
        }),
        (Pt.regexp_eatOctalDigit = function (t) {
          var e = t.current()
          return Bt(e)
            ? ((t.lastIntValue = e - 48), t.advance(), !0)
            : ((t.lastIntValue = 0), !1)
        }),
        (Pt.regexp_eatFixedHexDigits = function (t, e) {
          var i = t.pos
          t.lastIntValue = 0
          for (var s = 0; s < e; ++s) {
            var r = t.current()
            if (!Ot(r)) return (t.pos = i), !1
            ;(t.lastIntValue = 16 * t.lastIntValue + Dt(r)), t.advance()
          }
          return !0
        })
      var Ft = function (t) {
          ;(this.type = t.type),
            (this.value = t.value),
            (this.start = t.start),
            (this.end = t.end),
            t.options.locations && (this.loc = new H(t, t.startLoc, t.endLoc)),
            t.options.ranges && (this.range = [t.start, t.end])
        },
        Wt = K.prototype
      function Ht(t) {
        return 'function' != typeof BigInt ? null : BigInt(t.replace(/_/g, ''))
      }
      function Yt(t) {
        return t <= 65535
          ? String.fromCharCode(t)
          : ((t -= 65536),
            String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
      }
      ;(Wt.next = function (t) {
        !t &&
          this.type.keyword &&
          this.containsEsc &&
          this.raiseRecoverable(
            this.start,
            'Escape sequence in keyword ' + this.type.keyword
          ),
          this.options.onToken && this.options.onToken(new Ft(this)),
          (this.lastTokEnd = this.end),
          (this.lastTokStart = this.start),
          (this.lastTokEndLoc = this.endLoc),
          (this.lastTokStartLoc = this.startLoc),
          this.nextToken()
      }),
        (Wt.getToken = function () {
          return this.next(), new Ft(this)
        }),
        'undefined' != typeof Symbol &&
          (Wt[Symbol.iterator] = function () {
            var t = this
            return {
              next: function () {
                var e = t.getToken()
                return { done: e.type === P.eof, value: e }
              }
            }
          }),
        (Wt.nextToken = function () {
          var t = this.curContext()
          return (
            (t && t.preserveSpace) || this.skipSpace(),
            (this.start = this.pos),
            this.options.locations && (this.startLoc = this.curPosition()),
            this.pos >= this.input.length
              ? this.finishToken(P.eof)
              : t.override
              ? t.override(this)
              : void this.readToken(this.fullCharCodeAtPos())
          )
        }),
        (Wt.readToken = function (t) {
          return b(t, this.options.ecmaVersion >= 6) || 92 === t
            ? this.readWord()
            : this.getTokenFromCode(t)
        }),
        (Wt.fullCharCodeAtPos = function () {
          var t = this.input.charCodeAt(this.pos)
          if (t <= 55295 || t >= 56320) return t
          var e = this.input.charCodeAt(this.pos + 1)
          return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888
        }),
        (Wt.skipBlockComment = function () {
          var t,
            e = this.options.onComment && this.curPosition(),
            i = this.pos,
            s = this.input.indexOf('*/', (this.pos += 2))
          if (
            (-1 === s && this.raise(this.pos - 2, 'Unterminated comment'),
            (this.pos = s + 2),
            this.options.locations)
          )
            for (
              L.lastIndex = i;
              (t = L.exec(this.input)) && t.index < this.pos;

            )
              ++this.curLine, (this.lineStart = t.index + t[0].length)
          this.options.onComment &&
            this.options.onComment(
              !0,
              this.input.slice(i + 2, s),
              i,
              this.pos,
              e,
              this.curPosition()
            )
        }),
        (Wt.skipLineComment = function (t) {
          for (
            var e = this.pos,
              i = this.options.onComment && this.curPosition(),
              s = this.input.charCodeAt((this.pos += t));
            this.pos < this.input.length && !T(s);

          )
            s = this.input.charCodeAt(++this.pos)
          this.options.onComment &&
            this.options.onComment(
              !1,
              this.input.slice(e + t, this.pos),
              e,
              this.pos,
              i,
              this.curPosition()
            )
        }),
        (Wt.skipSpace = function () {
          t: for (; this.pos < this.input.length; ) {
            var t = this.input.charCodeAt(this.pos)
            switch (t) {
              case 32:
              case 160:
                ++this.pos
                break
              case 13:
                10 === this.input.charCodeAt(this.pos + 1) && ++this.pos
              case 10:
              case 8232:
              case 8233:
                ++this.pos,
                  this.options.locations &&
                    (++this.curLine, (this.lineStart = this.pos))
                break
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment()
                    break
                  case 47:
                    this.skipLineComment(2)
                    break
                  default:
                    break t
                }
                break
              default:
                if (
                  !(
                    (t > 8 && t < 14) ||
                    (t >= 5760 && N.test(String.fromCharCode(t)))
                  )
                )
                  break t
                ++this.pos
            }
          }
        }),
        (Wt.finishToken = function (t, e) {
          ;(this.end = this.pos),
            this.options.locations && (this.endLoc = this.curPosition())
          var i = this.type
          ;(this.type = t), (this.value = e), this.updateContext(i)
        }),
        (Wt.readToken_dot = function () {
          var t = this.input.charCodeAt(this.pos + 1)
          if (t >= 48 && t <= 57) return this.readNumber(!0)
          var e = this.input.charCodeAt(this.pos + 2)
          return this.options.ecmaVersion >= 6 && 46 === t && 46 === e
            ? ((this.pos += 3), this.finishToken(P.ellipsis))
            : (++this.pos, this.finishToken(P.dot))
        }),
        (Wt.readToken_slash = function () {
          var t = this.input.charCodeAt(this.pos + 1)
          return this.exprAllowed
            ? (++this.pos, this.readRegexp())
            : 61 === t
            ? this.finishOp(P.assign, 2)
            : this.finishOp(P.slash, 1)
        }),
        (Wt.readToken_mult_modulo_exp = function (t) {
          var e = this.input.charCodeAt(this.pos + 1),
            i = 1,
            s = 42 === t ? P.star : P.modulo
          return (
            this.options.ecmaVersion >= 7 &&
              42 === t &&
              42 === e &&
              (++i,
              (s = P.starstar),
              (e = this.input.charCodeAt(this.pos + 2))),
            61 === e ? this.finishOp(P.assign, i + 1) : this.finishOp(s, i)
          )
        }),
        (Wt.readToken_pipe_amp = function (t) {
          var e = this.input.charCodeAt(this.pos + 1)
          if (e === t) {
            if (this.options.ecmaVersion >= 12)
              if (61 === this.input.charCodeAt(this.pos + 2))
                return this.finishOp(P.assign, 3)
            return this.finishOp(124 === t ? P.logicalOR : P.logicalAND, 2)
          }
          return 61 === e
            ? this.finishOp(P.assign, 2)
            : this.finishOp(124 === t ? P.bitwiseOR : P.bitwiseAND, 1)
        }),
        (Wt.readToken_caret = function () {
          return 61 === this.input.charCodeAt(this.pos + 1)
            ? this.finishOp(P.assign, 2)
            : this.finishOp(P.bitwiseXOR, 1)
        }),
        (Wt.readToken_plus_min = function (t) {
          var e = this.input.charCodeAt(this.pos + 1)
          return e === t
            ? 45 !== e ||
              this.inModule ||
              62 !== this.input.charCodeAt(this.pos + 2) ||
              (0 !== this.lastTokEnd &&
                !I.test(this.input.slice(this.lastTokEnd, this.pos)))
              ? this.finishOp(P.incDec, 2)
              : (this.skipLineComment(3), this.skipSpace(), this.nextToken())
            : 61 === e
            ? this.finishOp(P.assign, 2)
            : this.finishOp(P.plusMin, 1)
        }),
        (Wt.readToken_lt_gt = function (t) {
          var e = this.input.charCodeAt(this.pos + 1),
            i = 1
          return e === t
            ? ((i =
                62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2),
              61 === this.input.charCodeAt(this.pos + i)
                ? this.finishOp(P.assign, i + 1)
                : this.finishOp(P.bitShift, i))
            : 33 !== e ||
              60 !== t ||
              this.inModule ||
              45 !== this.input.charCodeAt(this.pos + 2) ||
              45 !== this.input.charCodeAt(this.pos + 3)
            ? (61 === e && (i = 2), this.finishOp(P.relational, i))
            : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
        }),
        (Wt.readToken_eq_excl = function (t) {
          var e = this.input.charCodeAt(this.pos + 1)
          return 61 === e
            ? this.finishOp(
                P.equality,
                61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
              )
            : 61 === t && 62 === e && this.options.ecmaVersion >= 6
            ? ((this.pos += 2), this.finishToken(P.arrow))
            : this.finishOp(61 === t ? P.eq : P.prefix, 1)
        }),
        (Wt.readToken_question = function () {
          var t = this.options.ecmaVersion
          if (t >= 11) {
            var e = this.input.charCodeAt(this.pos + 1)
            if (46 === e) {
              var i = this.input.charCodeAt(this.pos + 2)
              if (i < 48 || i > 57) return this.finishOp(P.questionDot, 2)
            }
            if (63 === e) {
              if (t >= 12)
                if (61 === this.input.charCodeAt(this.pos + 2))
                  return this.finishOp(P.assign, 3)
              return this.finishOp(P.coalesce, 2)
            }
          }
          return this.finishOp(P.question, 1)
        }),
        (Wt.readToken_numberSign = function () {
          var t = 35
          if (
            this.options.ecmaVersion >= 13 &&
            (++this.pos, b((t = this.fullCharCodeAtPos()), !0) || 92 === t)
          )
            return this.finishToken(P.privateId, this.readWord1())
          this.raise(this.pos, "Unexpected character '" + Yt(t) + "'")
        }),
        (Wt.getTokenFromCode = function (t) {
          switch (t) {
            case 46:
              return this.readToken_dot()
            case 40:
              return ++this.pos, this.finishToken(P.parenL)
            case 41:
              return ++this.pos, this.finishToken(P.parenR)
            case 59:
              return ++this.pos, this.finishToken(P.semi)
            case 44:
              return ++this.pos, this.finishToken(P.comma)
            case 91:
              return ++this.pos, this.finishToken(P.bracketL)
            case 93:
              return ++this.pos, this.finishToken(P.bracketR)
            case 123:
              return ++this.pos, this.finishToken(P.braceL)
            case 125:
              return ++this.pos, this.finishToken(P.braceR)
            case 58:
              return ++this.pos, this.finishToken(P.colon)
            case 96:
              if (this.options.ecmaVersion < 6) break
              return ++this.pos, this.finishToken(P.backQuote)
            case 48:
              var e = this.input.charCodeAt(this.pos + 1)
              if (120 === e || 88 === e) return this.readRadixNumber(16)
              if (this.options.ecmaVersion >= 6) {
                if (111 === e || 79 === e) return this.readRadixNumber(8)
                if (98 === e || 66 === e) return this.readRadixNumber(2)
              }
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return this.readNumber(!1)
            case 34:
            case 39:
              return this.readString(t)
            case 47:
              return this.readToken_slash()
            case 37:
            case 42:
              return this.readToken_mult_modulo_exp(t)
            case 124:
            case 38:
              return this.readToken_pipe_amp(t)
            case 94:
              return this.readToken_caret()
            case 43:
            case 45:
              return this.readToken_plus_min(t)
            case 60:
            case 62:
              return this.readToken_lt_gt(t)
            case 61:
            case 33:
              return this.readToken_eq_excl(t)
            case 63:
              return this.readToken_question()
            case 126:
              return this.finishOp(P.prefix, 1)
            case 35:
              return this.readToken_numberSign()
          }
          this.raise(this.pos, "Unexpected character '" + Yt(t) + "'")
        }),
        (Wt.finishOp = function (t, e) {
          var i = this.input.slice(this.pos, this.pos + e)
          return (this.pos += e), this.finishToken(t, i)
        }),
        (Wt.readRegexp = function () {
          for (var t, e, i = this.pos; ; ) {
            this.pos >= this.input.length &&
              this.raise(i, 'Unterminated regular expression')
            var s = this.input.charAt(this.pos)
            if (
              (I.test(s) && this.raise(i, 'Unterminated regular expression'), t)
            )
              t = !1
            else {
              if ('[' === s) e = !0
              else if (']' === s && e) e = !1
              else if ('/' === s && !e) break
              t = '\\' === s
            }
            ++this.pos
          }
          var r = this.input.slice(i, this.pos)
          ++this.pos
          var a = this.pos,
            n = this.readWord1()
          this.containsEsc && this.unexpected(a)
          var o = this.regexpState || (this.regexpState = new It(this))
          o.reset(i, r, n),
            this.validateRegExpFlags(o),
            this.validateRegExpPattern(o)
          var h = null
          try {
            h = new RegExp(r, n)
          } catch (t) {}
          return this.finishToken(P.regexp, { pattern: r, flags: n, value: h })
        }),
        (Wt.readInt = function (t, e, i) {
          for (
            var s = this.options.ecmaVersion >= 12 && void 0 === e,
              r = i && 48 === this.input.charCodeAt(this.pos),
              a = this.pos,
              n = 0,
              o = 0,
              h = 0,
              l = null == e ? 1 / 0 : e;
            h < l;
            ++h, ++this.pos
          ) {
            var c = this.input.charCodeAt(this.pos),
              p = void 0
            if (s && 95 === c)
              r &&
                this.raiseRecoverable(
                  this.pos,
                  'Numeric separator is not allowed in legacy octal numeric literals'
                ),
                95 === o &&
                  this.raiseRecoverable(
                    this.pos,
                    'Numeric separator must be exactly one underscore'
                  ),
                0 === h &&
                  this.raiseRecoverable(
                    this.pos,
                    'Numeric separator is not allowed at the first of digits'
                  ),
                (o = c)
            else {
              if (
                (p =
                  c >= 97
                    ? c - 97 + 10
                    : c >= 65
                    ? c - 65 + 10
                    : c >= 48 && c <= 57
                    ? c - 48
                    : 1 / 0) >= t
              )
                break
              ;(o = c), (n = n * t + p)
            }
          }
          return (
            s &&
              95 === o &&
              this.raiseRecoverable(
                this.pos - 1,
                'Numeric separator is not allowed at the last of digits'
              ),
            this.pos === a || (null != e && this.pos - a !== e) ? null : n
          )
        }),
        (Wt.readRadixNumber = function (t) {
          var e = this.pos
          this.pos += 2
          var i = this.readInt(t)
          return (
            null == i &&
              this.raise(this.start + 2, 'Expected number in radix ' + t),
            this.options.ecmaVersion >= 11 &&
            110 === this.input.charCodeAt(this.pos)
              ? ((i = Ht(this.input.slice(e, this.pos))), ++this.pos)
              : b(this.fullCharCodeAtPos()) &&
                this.raise(this.pos, 'Identifier directly after number'),
            this.finishToken(P.num, i)
          )
        }),
        (Wt.readNumber = function (t) {
          var e = this.pos
          t ||
            null !== this.readInt(10, void 0, !0) ||
            this.raise(e, 'Invalid number')
          var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e)
          i && this.strict && this.raise(e, 'Invalid number')
          var s = this.input.charCodeAt(this.pos)
          if (!i && !t && this.options.ecmaVersion >= 11 && 110 === s) {
            var r = Ht(this.input.slice(e, this.pos))
            return (
              ++this.pos,
              b(this.fullCharCodeAtPos()) &&
                this.raise(this.pos, 'Identifier directly after number'),
              this.finishToken(P.num, r)
            )
          }
          i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1),
            46 !== s ||
              i ||
              (++this.pos,
              this.readInt(10),
              (s = this.input.charCodeAt(this.pos))),
            (69 !== s && 101 !== s) ||
              i ||
              ((43 !== (s = this.input.charCodeAt(++this.pos)) && 45 !== s) ||
                ++this.pos,
              null === this.readInt(10) && this.raise(e, 'Invalid number')),
            b(this.fullCharCodeAtPos()) &&
              this.raise(this.pos, 'Identifier directly after number')
          var a,
            n =
              ((a = this.input.slice(e, this.pos)),
              i ? parseInt(a, 8) : parseFloat(a.replace(/_/g, '')))
          return this.finishToken(P.num, n)
        }),
        (Wt.readCodePoint = function () {
          var t
          if (123 === this.input.charCodeAt(this.pos)) {
            this.options.ecmaVersion < 6 && this.unexpected()
            var e = ++this.pos
            ;(t = this.readHexChar(
              this.input.indexOf('}', this.pos) - this.pos
            )),
              ++this.pos,
              t > 1114111 &&
                this.invalidStringToken(e, 'Code point out of bounds')
          } else t = this.readHexChar(4)
          return t
        }),
        (Wt.readString = function (t) {
          for (var e = '', i = ++this.pos; ; ) {
            this.pos >= this.input.length &&
              this.raise(this.start, 'Unterminated string constant')
            var s = this.input.charCodeAt(this.pos)
            if (s === t) break
            92 === s
              ? ((e += this.input.slice(i, this.pos)),
                (e += this.readEscapedChar(!1)),
                (i = this.pos))
              : 8232 === s || 8233 === s
              ? (this.options.ecmaVersion < 10 &&
                  this.raise(this.start, 'Unterminated string constant'),
                ++this.pos,
                this.options.locations &&
                  (this.curLine++, (this.lineStart = this.pos)))
              : (T(s) && this.raise(this.start, 'Unterminated string constant'),
                ++this.pos)
          }
          return (
            (e += this.input.slice(i, this.pos++)),
            this.finishToken(P.string, e)
          )
        })
      var Xt = {}
      ;(Wt.tryReadTemplateToken = function () {
        this.inTemplateElement = !0
        try {
          this.readTmplToken()
        } catch (t) {
          if (t !== Xt) throw t
          this.readInvalidTemplateToken()
        }
        this.inTemplateElement = !1
      }),
        (Wt.invalidStringToken = function (t, e) {
          if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Xt
          this.raise(t, e)
        }),
        (Wt.readTmplToken = function () {
          for (var t = '', e = this.pos; ; ) {
            this.pos >= this.input.length &&
              this.raise(this.start, 'Unterminated template')
            var i = this.input.charCodeAt(this.pos)
            if (
              96 === i ||
              (36 === i && 123 === this.input.charCodeAt(this.pos + 1))
            )
              return this.pos !== this.start ||
                (this.type !== P.template && this.type !== P.invalidTemplate)
                ? ((t += this.input.slice(e, this.pos)),
                  this.finishToken(P.template, t))
                : 36 === i
                ? ((this.pos += 2), this.finishToken(P.dollarBraceL))
                : (++this.pos, this.finishToken(P.backQuote))
            if (92 === i)
              (t += this.input.slice(e, this.pos)),
                (t += this.readEscapedChar(!0)),
                (e = this.pos)
            else if (T(i)) {
              switch (((t += this.input.slice(e, this.pos)), ++this.pos, i)) {
                case 13:
                  10 === this.input.charCodeAt(this.pos) && ++this.pos
                case 10:
                  t += '\n'
                  break
                default:
                  t += String.fromCharCode(i)
              }
              this.options.locations &&
                (++this.curLine, (this.lineStart = this.pos)),
                (e = this.pos)
            } else ++this.pos
          }
        }),
        (Wt.readInvalidTemplateToken = function () {
          for (; this.pos < this.input.length; this.pos++)
            switch (this.input[this.pos]) {
              case '\\':
                ++this.pos
                break
              case '$':
                if ('{' !== this.input[this.pos + 1]) break
              case '`':
                return this.finishToken(
                  P.invalidTemplate,
                  this.input.slice(this.start, this.pos)
                )
            }
          this.raise(this.start, 'Unterminated template')
        }),
        (Wt.readEscapedChar = function (t) {
          var e = this.input.charCodeAt(++this.pos)
          switch ((++this.pos, e)) {
            case 110:
              return '\n'
            case 114:
              return '\r'
            case 120:
              return String.fromCharCode(this.readHexChar(2))
            case 117:
              return Yt(this.readCodePoint())
            case 116:
              return '\t'
            case 98:
              return '\b'
            case 118:
              return '\v'
            case 102:
              return '\f'
            case 13:
              10 === this.input.charCodeAt(this.pos) && ++this.pos
            case 10:
              return (
                this.options.locations &&
                  ((this.lineStart = this.pos), ++this.curLine),
                ''
              )
            case 56:
            case 57:
              if (
                (this.strict &&
                  this.invalidStringToken(
                    this.pos - 1,
                    'Invalid escape sequence'
                  ),
                t)
              ) {
                var i = this.pos - 1
                return (
                  this.invalidStringToken(
                    i,
                    'Invalid escape sequence in template string'
                  ),
                  null
                )
              }
            default:
              if (e >= 48 && e <= 55) {
                var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                  r = parseInt(s, 8)
                return (
                  r > 255 && ((s = s.slice(0, -1)), (r = parseInt(s, 8))),
                  (this.pos += s.length - 1),
                  (e = this.input.charCodeAt(this.pos)),
                  ('0' === s && 56 !== e && 57 !== e) ||
                    (!this.strict && !t) ||
                    this.invalidStringToken(
                      this.pos - 1 - s.length,
                      t
                        ? 'Octal literal in template string'
                        : 'Octal literal in strict mode'
                    ),
                  String.fromCharCode(r)
                )
              }
              return T(e) ? '' : String.fromCharCode(e)
          }
        }),
        (Wt.readHexChar = function (t) {
          var e = this.pos,
            i = this.readInt(16, t)
          return (
            null === i &&
              this.invalidStringToken(e, 'Bad character escape sequence'),
            i
          )
        }),
        (Wt.readWord1 = function () {
          this.containsEsc = !1
          for (
            var t = '', e = !0, i = this.pos, s = this.options.ecmaVersion >= 6;
            this.pos < this.input.length;

          ) {
            var r = this.fullCharCodeAtPos()
            if (_(r, s)) this.pos += r <= 65535 ? 1 : 2
            else {
              if (92 !== r) break
              ;(this.containsEsc = !0), (t += this.input.slice(i, this.pos))
              var a = this.pos
              117 !== this.input.charCodeAt(++this.pos) &&
                this.invalidStringToken(
                  this.pos,
                  'Expecting Unicode escape sequence \\uXXXX'
                ),
                ++this.pos
              var n = this.readCodePoint()
              ;(e ? b : _)(n, s) ||
                this.invalidStringToken(a, 'Invalid Unicode escape'),
                (t += Yt(n)),
                (i = this.pos)
            }
            e = !1
          }
          return t + this.input.slice(i, this.pos)
        }),
        (Wt.readWord = function () {
          var t = this.readWord1(),
            e = P.name
          return this.keywords.test(t) && (e = E[t]), this.finishToken(e, t)
        })
      K.acorn = {
        Parser: K,
        version: '8.6.0',
        defaultOptions: X,
        Position: W,
        SourceLocation: H,
        getLineInfo: Y,
        Node: mt,
        TokenType: k,
        tokTypes: P,
        keywordTypes: E,
        TokContext: ot,
        tokContexts: ht,
        isIdentifierChar: _,
        isIdentifierStart: b,
        Token: Ft,
        isNewLine: T,
        lineBreak: I,
        lineBreakG: L,
        nonASCIIwhitespace: N
      }
      var jt = i(276),
        Ut = {
          components: { PerfectScrollbar: jt.PerfectScrollbar },
          props: {
            placeholder: { type: [Boolean, String], default: !0 },
            value: { type: Array, default: () => [] }
          },
          data: () => ({ scrollbars: { wheelPropagation: !1 } }),
          computed: {
            items() {
              return [...this.value].reverse()
            }
          }
        },
        $t =
          (i(323),
          Object(a.a)(
            Ut,
            function () {
              var t = this,
                e = t.$createElement,
                i = t._self._c || e
              return i(
                'perfect-scrollbar',
                {
                  staticClass: 'editor-output',
                  attrs: { options: t.scrollbars }
                },
                [
                  i(
                    'div',
                    { staticClass: 'editor-output-content' },
                    [
                      t._l(t.items, function (e, s) {
                        return i('span', {
                          key: s,
                          domProps: { textContent: t._s(e) }
                        })
                      }),
                      t._v(' '),
                      !t.items.length && t.placeholder
                        ? i('span', {
                            staticClass: 'text-muted',
                            domProps: {
                              textContent: t._s(
                                !0 === t.placeholder ? '...' : t.placeholder
                              )
                            }
                          })
                        : t._e()
                    ],
                    2
                  )
                ]
              )
            },
            [],
            !1,
            null,
            '42be9875',
            null
          ).exports),
        Kt = i(324),
        qt = (i(325), i(326), i(1))
      function Gt() {
        return (Gt =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e]
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
            }
            return t
          }).apply(this, arguments)
      }
      var zt =
          'undefined' != typeof window &&
          navigator &&
          /Win/i.test(navigator.platform),
        Qt =
          'undefined' != typeof window &&
          navigator &&
          /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
        Zt = qt.a.extend({
          props: {
            lineNumbers: { type: Boolean, default: !1 },
            autoStyleLineNumbers: { type: Boolean, default: !0 },
            readonly: { type: Boolean, default: !1 },
            value: { type: String, default: '' },
            highlight: { type: Function, required: !0 },
            tabSize: { type: Number, default: 2 },
            insertSpaces: { type: Boolean, default: !0 },
            ignoreTabKey: { type: Boolean, default: !1 },
            placeholder: { type: String, default: '' }
          },
          data: function () {
            return {
              capture: !0,
              history: { stack: [], offset: -1 },
              lineNumbersHeight: '20px',
              codeData: ''
            }
          },
          watch: {
            value: {
              immediate: !0,
              handler: function (t) {
                this.codeData = t || ''
              }
            },
            content: {
              immediate: !0,
              handler: function () {
                var t = this
                this.lineNumbers &&
                  this.$nextTick(function () {
                    t.setLineNumbersHeight()
                  })
              }
            },
            lineNumbers: function () {
              var t = this
              this.$nextTick(function () {
                t.styleLineNumbers(), t.setLineNumbersHeight()
              })
            }
          },
          computed: {
            isEmpty: function () {
              return 0 === this.codeData.length
            },
            content: function () {
              return this.highlight(this.codeData) + '<br />'
            },
            lineNumbersCount: function () {
              return this.codeData.split(/\r\n|\n/).length
            }
          },
          mounted: function () {
            this._recordCurrentState(), this.styleLineNumbers()
          },
          methods: {
            setLineNumbersHeight: function () {
              this.lineNumbersHeight = getComputedStyle(this.$refs.pre).height
            },
            styleLineNumbers: function () {
              if (this.lineNumbers && this.autoStyleLineNumbers) {
                var t = this.$refs.pre,
                  e = this.$el.querySelector('.prism-editor__line-numbers'),
                  i = window.getComputedStyle(t)
                this.$nextTick(function () {
                  var s = 'border-top-left-radius',
                    r = 'border-bottom-left-radius'
                  if (e) {
                    ;(e.style[s] = i[s]),
                      (e.style[r] = i[r]),
                      (t.style[s] = '0'),
                      (t.style[r] = '0')
                    ;[
                      'background-color',
                      'margin-top',
                      'padding-top',
                      'font-family',
                      'font-size',
                      'line-height'
                    ].forEach(function (t) {
                      e.style[t] = i[t]
                    }),
                      (e.style['margin-bottom'] = '-' + i['padding-top'])
                  }
                })
              }
            },
            _recordCurrentState: function () {
              var t = this.$refs.textarea
              if (t) {
                var e = t.value,
                  i = t.selectionStart,
                  s = t.selectionEnd
                this._recordChange({
                  value: e,
                  selectionStart: i,
                  selectionEnd: s
                })
              }
            },
            _getLines: function (t, e) {
              return t.substring(0, e).split('\n')
            },
            _applyEdits: function (t) {
              var e = this.$refs.textarea,
                i = this.history.stack[this.history.offset]
              i &&
                e &&
                (this.history.stack[this.history.offset] = Gt({}, i, {
                  selectionStart: e.selectionStart,
                  selectionEnd: e.selectionEnd
                })),
                this._recordChange(t),
                this._updateInput(t)
            },
            _recordChange: function (t, e) {
              void 0 === e && (e = !1)
              var i = this.history,
                s = i.stack,
                r = i.offset
              if (s.length && r > -1) {
                this.history.stack = s.slice(0, r + 1)
                var a = this.history.stack.length
                if (a > 100) {
                  var n = a - 100
                  ;(this.history.stack = s.slice(n, a)),
                    (this.history.offset = Math.max(this.history.offset - n, 0))
                }
              }
              var o = Date.now()
              if (e) {
                var h = this.history.stack[this.history.offset]
                if (h && o - h.timestamp < 3e3) {
                  var l,
                    c,
                    p = /[^a-z0-9]([a-z0-9]+)$/i,
                    u =
                      null ===
                        (l = this._getLines(h.value, h.selectionStart).pop()) ||
                      void 0 === l
                        ? void 0
                        : l.match(p),
                    d =
                      null ===
                        (c = this._getLines(t.value, t.selectionStart).pop()) ||
                      void 0 === c
                        ? void 0
                        : c.match(p)
                  if (u && d && d[1].startsWith(u[1]))
                    return void (this.history.stack[this.history.offset] = Gt(
                      {},
                      t,
                      { timestamp: o }
                    ))
                }
              }
              this.history.stack.push(Gt({}, t, { timestamp: o })),
                this.history.offset++
            },
            _updateInput: function (t) {
              var e = this.$refs.textarea
              e &&
                ((e.value = t.value),
                (e.selectionStart = t.selectionStart),
                (e.selectionEnd = t.selectionEnd),
                this.$emit('input', t.value))
            },
            handleChange: function (t) {
              var e = t.target,
                i = e.value,
                s = e.selectionStart,
                r = e.selectionEnd
              this._recordChange(
                { value: i, selectionStart: s, selectionEnd: r },
                !0
              ),
                this.$emit('input', i)
            },
            _undoEdit: function () {
              var t = this.history,
                e = t.stack,
                i = t.offset,
                s = e[i - 1]
              s &&
                (this._updateInput(s),
                (this.history.offset = Math.max(i - 1, 0)))
            },
            _redoEdit: function () {
              var t = this.history,
                e = t.stack,
                i = t.offset,
                s = e[i + 1]
              s &&
                (this._updateInput(s),
                (this.history.offset = Math.min(i + 1, e.length - 1)))
            },
            handleKeyDown: function (t) {
              var e = this.tabSize,
                i = this.insertSpaces,
                s = this.ignoreTabKey
              if (
                !this.$listeners.keydown ||
                (this.$emit('keydown', t), !t.defaultPrevented)
              ) {
                27 === t.keyCode && (t.target.blur(), this.$emit('blur', t))
                var r = t.target,
                  a = r.value,
                  n = r.selectionStart,
                  o = r.selectionEnd,
                  h = (i ? ' ' : '\t').repeat(e)
                if (9 === t.keyCode && !s && this.capture)
                  if ((t.preventDefault(), t.shiftKey)) {
                    var l = this._getLines(a, n),
                      c = l.length - 1,
                      p = this._getLines(a, o).length - 1,
                      u = a
                        .split('\n')
                        .map(function (t, e) {
                          return e >= c && e <= p && t.startsWith(h)
                            ? t.substring(h.length)
                            : t
                        })
                        .join('\n')
                    if (a !== u) {
                      var d = l[c]
                      this._applyEdits({
                        value: u,
                        selectionStart: d.startsWith(h) ? n - h.length : n,
                        selectionEnd: o - (a.length - u.length)
                      })
                    }
                  } else if (n !== o) {
                    var f = this._getLines(a, n),
                      m = f.length - 1,
                      g = this._getLines(a, o).length - 1,
                      v = f[m]
                    this._applyEdits({
                      value: a
                        .split('\n')
                        .map(function (t, e) {
                          return e >= m && e <= g ? h + t : t
                        })
                        .join('\n'),
                      selectionStart: /\S/.test(v) ? n + h.length : n,
                      selectionEnd: o + h.length * (g - m + 1)
                    })
                  } else {
                    var y = n + h.length
                    this._applyEdits({
                      value: a.substring(0, n) + h + a.substring(o),
                      selectionStart: y,
                      selectionEnd: y
                    })
                  }
                else if (8 === t.keyCode) {
                  var x = n !== o
                  if (a.substring(0, n).endsWith(h) && !x) {
                    t.preventDefault()
                    var b = n - h.length
                    this._applyEdits({
                      value: a.substring(0, n - h.length) + a.substring(o),
                      selectionStart: b,
                      selectionEnd: b
                    })
                  }
                } else if (13 === t.keyCode) {
                  if (n === o) {
                    var _ = this._getLines(a, n).pop(),
                      k = null == _ ? void 0 : _.match(/^\s+/)
                    if (k && k[0]) {
                      t.preventDefault()
                      var w = '\n' + k[0],
                        S = n + w.length
                      this._applyEdits({
                        value: a.substring(0, n) + w + a.substring(o),
                        selectionStart: S,
                        selectionEnd: S
                      })
                    }
                  }
                } else if (
                  57 === t.keyCode ||
                  219 === t.keyCode ||
                  222 === t.keyCode ||
                  192 === t.keyCode
                ) {
                  var C
                  57 === t.keyCode && t.shiftKey
                    ? (C = ['(', ')'])
                    : 219 === t.keyCode
                    ? (C = t.shiftKey ? ['{', '}'] : ['[', ']'])
                    : 222 === t.keyCode
                    ? (C = t.shiftKey ? ['"', '"'] : ["'", "'"])
                    : 192 !== t.keyCode || t.shiftKey || (C = ['`', '`']),
                    n !== o &&
                      C &&
                      (t.preventDefault(),
                      this._applyEdits({
                        value:
                          a.substring(0, n) +
                          C[0] +
                          a.substring(n, o) +
                          C[1] +
                          a.substring(o),
                        selectionStart: n,
                        selectionEnd: o + 2
                      }))
                } else
                  !(Qt
                    ? t.metaKey && 90 === t.keyCode
                    : t.ctrlKey && 90 === t.keyCode) ||
                  t.shiftKey ||
                  t.altKey
                    ? (Qt
                        ? t.metaKey && 90 === t.keyCode && t.shiftKey
                        : zt
                        ? t.ctrlKey && 89 === t.keyCode
                        : t.ctrlKey && 90 === t.keyCode && t.shiftKey) &&
                      !t.altKey
                      ? (t.preventDefault(), this._redoEdit())
                      : 77 !== t.keyCode ||
                        !t.ctrlKey ||
                        (Qt && !t.shiftKey) ||
                        (t.preventDefault(), (this.capture = !this.capture))
                    : (t.preventDefault(), this._undoEdit())
              }
            }
          },
          render: function (t) {
            var e = this,
              i = t(
                'div',
                {
                  attrs: {
                    class: 'prism-editor__line-width-calc',
                    style:
                      'height: 0px; visibility: hidden; pointer-events: none;'
                  }
                },
                '999'
              ),
              s = t(
                'div',
                {
                  staticClass: 'prism-editor__line-numbers',
                  style: { 'min-height': this.lineNumbersHeight },
                  attrs: { 'aria-hidden': 'true' }
                },
                [
                  i,
                  Array.from(Array(this.lineNumbersCount).keys()).map(function (
                    e,
                    i
                  ) {
                    return t(
                      'div',
                      {
                        attrs: {
                          class: 'prism-editor__line-number token comment'
                        }
                      },
                      '' + ++i
                    )
                  })
                ]
              ),
              r = t('textarea', {
                ref: 'textarea',
                on: {
                  input: this.handleChange,
                  keydown: this.handleKeyDown,
                  click: function (t) {
                    e.$emit('click', t)
                  },
                  keyup: function (t) {
                    e.$emit('keyup', t)
                  },
                  focus: function (t) {
                    e.$emit('focus', t)
                  },
                  blur: function (t) {
                    e.$emit('blur', t)
                  }
                },
                staticClass: 'prism-editor__textarea',
                class: { 'prism-editor__textarea--empty': this.isEmpty },
                attrs: {
                  spellCheck: 'false',
                  autocapitalize: 'off',
                  autocomplete: 'off',
                  autocorrect: 'off',
                  'data-gramm': 'false',
                  placeholder: this.placeholder,
                  'data-testid': 'textarea',
                  readonly: this.readonly
                },
                domProps: { value: this.codeData }
              }),
              a = t('pre', {
                ref: 'pre',
                staticClass: 'prism-editor__editor',
                attrs: { 'data-testid': 'preview' },
                domProps: { innerHTML: this.content }
              }),
              n = t('div', { staticClass: 'prism-editor__container' }, [r, a])
            return t('div', { staticClass: 'prism-editor-wrapper' }, [
              this.lineNumbers && s,
              n
            ])
          }
        }),
        Jt =
          (i(327),
          {
            components: {
              PerfectScrollbar: jt.PerfectScrollbar,
              PrismEditor: Zt
            },
            props: { value: { type: String, required: !0 } },
            data: () => ({ scrollbars: { wheelPropagation: !1 } }),
            methods: {
              highlight: (t) => Object(Kt.highlight)(t, Kt.languages.js)
            }
          }),
        te =
          (i(328),
          Object(a.a)(
            Jt,
            function () {
              var t = this,
                e = t.$createElement,
                i = t._self._c || e
              return i(
                'perfect-scrollbar',
                {
                  staticClass: 'editor-textarea',
                  attrs: { options: t.scrollbars }
                },
                [
                  i(
                    'div',
                    { staticClass: 'editor-textarea-content' },
                    [
                      i('prism-editor', {
                        attrs: { highlight: t.highlight, value: t.value },
                        on: {
                          input: function (e) {
                            return t.$emit('input', e)
                          }
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            },
            [],
            !1,
            null,
            '05f11386',
            null
          ).exports),
        ee = { components: { PerfectScrollbar: jt.PerfectScrollbar } },
        ie =
          (i(329),
          Object(a.a)(
            ee,
            function () {
              var t = this.$createElement,
                e = this._self._c || t
              return e(
                'div',
                { staticClass: 'tooltip' },
                [
                  e(
                    'div',
                    { staticClass: 'activator' },
                    [this._t('default')],
                    2
                  ),
                  this._v(' '),
                  e(
                    'perfect-scrollbar',
                    { staticClass: 'content' },
                    [this._t('content')],
                    2
                  )
                ],
                1
              )
            },
            [],
            !1,
            null,
            '402b0086',
            null
          ).exports)
      const se = /^\s*<(\/?)block:([\w\s]+)(?::(\d+))?>\s*$/
      var re = {
          components: { EditorOutput: $t, EditorTextarea: te, Tooltip: ie },
          props: {
            delay: { type: Number, default: 500 },
            error: { type: Error, default: null },
            messages: { type: Array, default: () => [] },
            output: { type: [Boolean, String], default: !1 },
            value: { type: String, required: !0 }
          },
          data: () => ({ blocks: [], current: 0, modified: !1, sections: [] }),
          computed: {
            sourceLink() {
              const t = this.$page.relativePath,
                e = this.$site.themeConfig
              return `https://github.com/${e.docsRepo || e.repo}/blob/${
                e.docsBranch || 'master'
              }/${e.docsDir || ''}/${t}`
            }
          },
          watch: {
            output() {
              this.rebuild()
            },
            value: {
              immediate: !0,
              handler() {
                this.rebuild()
              }
            }
          },
          methods: {
            rebuild() {
              try {
                const t = this,
                  e = this.parse(this.value),
                  i = e.filter(({ name: t }) => !!t)
                i.length || i.push({ code: this.value, name: 'JS', order: 0 })
                const s = i
                  .sort((t, e) => t.order - e.order)
                  .map((e) => ({
                    component: te,
                    value: () => e.code,
                    name: e.name,
                    on: {
                      input(i) {
                        ;(e.code = i), t.invalidate()
                      }
                    }
                  }))
                this.output &&
                  s.push({
                    component: $t,
                    value: () => this.messages,
                    name: 'Output',
                    attrs: { placeholder: this.output }
                  }),
                  (this.blocks = e),
                  (this.sections = s),
                  (this.current = this.output ? s.length - 1 : 0)
              } catch (t) {
                this.$emit('update:error', t), (this.blocks = [])
              }
            },
            invalidate() {
              this._timeout &&
                (clearTimeout(this._timeout), (this._timeout = null))
              const t = this.delay
              t
                ? ((this.modified = !0),
                  (this._timeout = setTimeout(() => {
                    ;(this.modified = !1), (this._timeout = null), this.update()
                  }, t)))
                : this.update()
            },
            update() {
              this.$emit('input', this.blocks.map((t) => t.code).join(''))
            },
            parse(t) {
              const e = []
              let i = { order: 0, start: 0, end: 0 }
              return (
                K.parse(t, {
                  ecmaVersion: 2016,
                  onComment(t, s, r, a) {
                    const n = s.match(se)
                    if (!n) return
                    const o = !n[1],
                      h = n[2],
                      l = n[3]
                    ;(o || i.name === h) &&
                      (e.push({ ...i, end: r }),
                      (i = {
                        name: o ? h : void 0,
                        order: l || 0,
                        start: a,
                        end: a
                      }))
                  }
                }),
                i && e.push({ ...i, end: t.length }),
                e
                  .filter(({ start: t, end: e }) => t < e)
                  .map(({ name: e, start: i, end: s, order: r }) => ({
                    code: t.slice(i, s).trim(),
                    order: r,
                    name: e
                  }))
              )
            }
          }
        },
        ae =
          (i(330),
          {
            components: {
              ChartActions: n,
              ChartView: h,
              CodeEditor: Object(a.a)(
                re,
                function () {
                  var t = this,
                    e = t.$createElement,
                    i = t._self._c || e
                  return i('div', { staticClass: 'code-editor' }, [
                    i('div', { staticClass: 'code-editor-header' }, [
                      i(
                        'div',
                        { staticClass: 'code-editor-tabs' },
                        t._l(t.sections, function (e, s) {
                          return i(
                            'button',
                            {
                              key: s,
                              staticClass: 'code-editor-tab',
                              class: { active: t.current === s },
                              on: {
                                click: function (e) {
                                  t.current = s
                                }
                              }
                            },
                            [t._v('\n        ' + t._s(e.name) + '\n      ')]
                          )
                        }),
                        0
                      ),
                      t._v(' '),
                      i(
                        'div',
                        { staticClass: 'code-editor-tools' },
                        [
                          t.modified
                            ? i('i', {
                                staticClass:
                                  'code-editor-tool fas fa-bahai fa-spin text-muted'
                              })
                            : t.error
                            ? i(
                                'tooltip',
                                {
                                  scopedSlots: t._u([
                                    {
                                      key: 'content',
                                      fn: function () {
                                        return [
                                          i(
                                            'pre',
                                            {
                                              staticStyle: {
                                                'white-space': 'pre-wrap'
                                              }
                                            },
                                            [t._v(t._s(t.error))]
                                          )
                                        ]
                                      },
                                      proxy: !0
                                    }
                                  ])
                                },
                                [
                                  i('i', {
                                    staticClass:
                                      'code-editor-tool fas fa-exclamation-triangle text-error'
                                  })
                                ]
                              )
                            : t._e(),
                          t._v(' '),
                          i('a', {
                            staticClass: 'code-editor-tool fab fa-github fa-lg',
                            attrs: {
                              href: t.sourceLink,
                              title: 'View on GitHub',
                              target: '_blank'
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    i(
                      'div',
                      { staticClass: 'code-editor-views' },
                      t._l(t.sections, function (e, s) {
                        return i(
                          e.component,
                          t._g(
                            t._b(
                              {
                                directives: [
                                  {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: t.current === s,
                                    expression: 'current === index'
                                  }
                                ],
                                key: s,
                                tag: 'component',
                                attrs: { value: e.value() }
                              },
                              'component',
                              e.attrs,
                              !1
                            ),
                            e.on
                          )
                        )
                      }),
                      1
                    )
                  ])
                },
                [],
                !1,
                null,
                '66ca8197',
                null
              ).exports
            },
            props: { code: { type: String, required: !0 } },
            data: () => ({
              actions: null,
              config: null,
              error: null,
              messages: [],
              output: !1
            }),
            watch: {
              code(t) {
                this.evaluate(t)
              }
            },
            mounted() {
              this.evaluate(this.code)
            },
            methods: {
              evaluate(t) {
                if (((this.error = null), !t)) return void this.update(null)
                const e = this,
                  i = {
                    log(...t) {
                      e.messages = [...e.messages, t.join(' ')].slice(-50)
                    }
                  },
                  r = {
                    ...(this.$chart || {}).imports,
                    console: { ...console, ...i },
                    Chart: s.b
                  },
                  a = `\n        'use strict';\n        const module = {exports: {}};\n        ${Object.keys(
                    r
                  )
                    .map((t) => `const ${t} = arguments[0].${t}`)
                    .join(
                      ';\n'
                    )};\n        (function(){ ${t} })();\n        return module.exports;\n      `
                try {
                  const t = new Function(a)(r),
                    e = t.config || null
                  ;(this.output = t.output || !1),
                    this.actions || (this.actions = t.actions || null),
                    (this.config = Object.freeze(e))
                } catch (t) {
                  this.error = t
                }
              },
              execute(t) {
                t.handler(this.$refs['chart-view'].chart())
              }
            }
          }),
        ne =
          (i(331),
          Object(a.a)(
            ae,
            function () {
              var t = this,
                e = t.$createElement,
                i = t._self._c || e
              return i(
                'div',
                { staticClass: 'chart-editor' },
                [
                  i('chart-view', {
                    ref: 'chart-view',
                    attrs: { config: t.config }
                  }),
                  t._v(' '),
                  i('chart-actions', {
                    attrs: { actions: t.actions },
                    on: { action: t.execute }
                  }),
                  t._v(' '),
                  i('code-editor', {
                    attrs: {
                      error: t.error,
                      messages: t.messages,
                      output: t.output,
                      value: t.code
                    },
                    on: {
                      'update:error': function (e) {
                        t.error = e
                      },
                      input: t.evaluate
                    }
                  })
                ],
                1
              )
            },
            [],
            !1,
            null,
            '365c20ab',
            null
          ))
      e.default = ne.exports
    }
  }
])
