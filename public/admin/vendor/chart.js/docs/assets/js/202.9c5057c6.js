;(window.webpackJsonp = window.webpackJsonp || []).push([
  [202],
  {
    532: function (t, n, a) {
      'use strict'
      a.r(n)
      var r = a(6),
        s = Object(r.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              a = t._self._c || n
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'bar-chart-border-radius' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#bar-chart-border-radius' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Bar Chart Border Radius')
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Fully Rounded',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      borderWidth: 2,\n      borderRadius: Number.MAX_VALUE,\n      borderSkipped: false,\n    },\n    {\n      label: 'Small Radius',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      borderWidth: 2,\n      borderRadius: 5,\n      borderSkipped: false,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Bar Chart'\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
                a('h2', { attrs: { id: 'docs' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [t._v('#')]
                  ),
                  t._v(' Docs')
                ]),
                t._v(' '),
                a('ul', [
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/charts/bar.html' } }, [
                        t._v('Bar')
                      ]),
                      t._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a(
                              'RouterLink',
                              {
                                attrs: { to: '/charts/bar.html#borderradius' }
                              },
                              [a('code', [t._v('borderRadius')])]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          t._v('Data structures ('),
                          a('code', [t._v('labels')]),
                          t._v(')')
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
      n.default = s.exports
    }
  }
])
