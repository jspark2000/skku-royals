;(window.webpackJsonp = window.webpackJsonp || []).push([
  [245],
  {
    576: function (t, n, a) {
      'use strict'
      a.r(n)
      var e = a(6),
        s = Object(e.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              a = t._self._c || n
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'time-scale-combo-chart' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#time-scale-combo-chart' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Time Scale - Combo Chart')
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = [];\n\nfor (let i = 0; i < DATA_COUNT; ++i) {\n  labels.push(Utils.newDate(i));\n}\n\nconst data = {\n  labels: labels,\n  datasets: [{\n    type: 'bar',\n    label: 'Dataset 1',\n    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    borderColor: Utils.CHART_COLORS.red,\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    type: 'bar',\n    label: 'Dataset 2',\n    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    borderColor: Utils.CHART_COLORS.blue,\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    type: 'line',\n    label: 'Dataset 3',\n    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),\n    borderColor: Utils.CHART_COLORS.green,\n    fill: false,\n    data: Utils.numbers(NUMBER_CFG),\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      title: {\n        text: 'Chart.js Combo Time Scale',\n        display: true\n      }\n    },\n    scales: {\n      x: {\n        type: 'time',\n        display: true,\n        offset: true,\n        time: {\n          unit: 'day'\n        }\n      },\n    },\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
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
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        t._v('Line')
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
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a(
                        'RouterLink',
                        { attrs: { to: '/axes/cartesian/time.html' } },
                        [t._v('Time Scale')]
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
