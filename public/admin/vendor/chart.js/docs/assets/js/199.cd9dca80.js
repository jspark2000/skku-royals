;(window.webpackJsonp = window.webpackJsonp || []).push([
  [199],
  {
    529: function (n, t, a) {
      'use strict'
      a.r(t)
      var e = a(6),
        r = Object(e.a)(
          {},
          function () {
            var n = this,
              t = n.$createElement,
              a = n._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'line-chart-drawtime' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#line-chart-drawtime' }
                    },
                    [n._v('#')]
                  ),
                  n._v(' Line Chart drawTime')
                ]),
                n._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:setup:2>\nconst inputs = {\n  min: -100,\n  max: 100,\n  count: 8,\n  decimals: 2,\n  continuity: 1\n};\n\nconst generateLabels = () => {\n  return Utils.months({count: inputs.count});\n};\n\nUtils.srand(3);\nconst generateData = () => (Utils.numbers(inputs));\n// </block:setup>\n\n// <block:data:0>\nconst data = {\n  labels: generateLabels(),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n      fill: true\n    },\n    {\n      label: 'Dataset 2',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),\n      fill: true\n    }\n  ]\n};\n// </block:data>\n\n// <block:actions:3>\nlet smooth = false;\n\nconst actions = [\n  {\n    name: 'drawTime: beforeDatasetDraw (default)',\n    handler: (chart) => {\n      chart.options.plugins.filler.drawTime = 'beforeDatasetDraw';\n      chart.update();\n    }\n  },\n  {\n    name: 'drawTime: beforeDatasetsDraw',\n    handler: (chart) => {\n      chart.options.plugins.filler.drawTime = 'beforeDatasetsDraw';\n      chart.update();\n    }\n  },\n  {\n    name: 'drawTime: beforeDraw',\n    handler: (chart) => {\n      chart.options.plugins.filler.drawTime = 'beforeDraw';\n      chart.update();\n    }\n  },\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Smooth',\n    handler(chart) {\n      smooth = !smooth;\n      chart.options.elements.line.tension = smooth ? 0.4 : 0;\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:1>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      filler: {\n        propagate: false,\n      },\n      title: {\n        display: true,\n        text: (ctx) => 'drawTime: ' + ctx.chart.options.plugins.filler.drawTime\n      }\n    },\n    pointBackgroundColor: '#fff',\n    radius: 10,\n    interaction: {\n      intersect: false,\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
                a('h2', { attrs: { id: 'docs' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [n._v('#')]
                  ),
                  n._v(' Docs')
                ]),
                n._v(' '),
                a('ul', [
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/charts/area.html' } }, [
                        n._v('Area')
                      ]),
                      n._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a(
                              'RouterLink',
                              {
                                attrs: { to: '/charts/area.html#configuration' }
                              },
                              [
                                n._v('Configuration ('),
                                a('code', [n._v('drawTime')]),
                                n._v(')')
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  n._v(' '),
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        n._v('Line')
                      ]),
                      n._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a(
                              'RouterLink',
                              {
                                attrs: { to: '/charts/line.html#line-styling' }
                              },
                              [
                                n._v('Line Styling ('),
                                a('code', [n._v('tension')]),
                                n._v(')')
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  n._v(' '),
                  a(
                    'li',
                    [
                      a(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          n._v('Data structures ('),
                          a('code', [n._v('labels')]),
                          n._v(')')
                        ]
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
      t.default = r.exports
    }
  }
])
