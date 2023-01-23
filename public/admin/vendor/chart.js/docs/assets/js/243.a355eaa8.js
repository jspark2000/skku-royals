;(window.webpackJsonp = window.webpackJsonp || []).push([
  [243],
  {
    573: function (n, t, a) {
      'use strict'
      a.r(t)
      var s = a(6),
        e = Object(s.a)(
          {},
          function () {
            var n = this,
              t = n.$createElement,
              a = n._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'log-scale' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#log-scale' }
                    },
                    [n._v('#')]
                  ),
                  n._v(' Log Scale')
                ]),
                n._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst logNumbers = (num) => {\n  const data = [];\n\n  for (let i = 0; i < num; ++i) {\n    data.push(Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5)));\n  }\n\n  return data;\n};\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = logNumbers(chart.data.labels.length);\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: logNumbers(DATA_COUNT),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n      fill: false,\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Line Chart - Logarithmic'\n      }\n    },\n    scales: {\n      x: {\n        display: true,\n      },\n      y: {\n        display: true,\n        type: 'logarithmic',\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
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
                      a('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        n._v('Line')
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
                        { attrs: { to: '/axes/cartesian/logarithmic.html' } },
                        [n._v('Logarithmic Axis')]
                      )
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
      t.default = e.exports
    }
  }
])
