;(window.webpackJsonp = window.webpackJsonp || []).push([
  [233],
  {
    563: function (t, n, r) {
      'use strict'
      r.r(n)
      var e = r(6),
        o = Object(e.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              r = t._self._c || n
            return r(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                r('h1', { attrs: { id: 'chart-area-border' } }, [
                  r(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#chart-area-border' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Chart Area Border')
                ]),
                t._v(' '),
                r('chart-editor', {
                  attrs: {
                    code: "// <block:data:2>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    }\n  ]\n};\n// </block:data>\n\n// <block:plugin:1>\nconst chartAreaBorder = {\n  id: 'chartAreaBorder',\n  beforeDraw(chart, args, options) {\n    const {ctx, chartArea: {left, top, width, height}} = chart;\n    ctx.save();\n    ctx.strokeStyle = options.borderColor;\n    ctx.lineWidth = options.borderWidth;\n    ctx.setLineDash(options.borderDash || []);\n    ctx.lineDashOffset = options.borderDashOffset;\n    ctx.strokeRect(left, top, width, height);\n    ctx.restore();\n  }\n};\n// </block:plugin>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      chartAreaBorder: {\n        borderColor: 'red',\n        borderWidth: 2,\n        borderDash: [5, 5],\n        borderDashOffset: 2,\n      }\n    }\n  },\n  plugins: [chartAreaBorder]\n};\n// </block:config>\n\nmodule.exports = {\n  config: config,\n};\n"
                  }
                }),
                r('h2', { attrs: { id: 'docs' } }, [
                  r(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [t._v('#')]
                  ),
                  t._v(' Docs')
                ]),
                t._v(' '),
                r('ul', [
                  r(
                    'li',
                    [
                      r('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        t._v('Line')
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  r(
                    'li',
                    [
                      r(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          t._v('Data structures ('),
                          r('code', [t._v('labels')]),
                          t._v(')')
                        ]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  r(
                    'li',
                    [
                      r(
                        'RouterLink',
                        { attrs: { to: '/developers/plugins.html' } },
                        [t._v('Plugins')]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      n.default = o.exports
    }
  }
])
