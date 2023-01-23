;(window.webpackJsonp = window.webpackJsonp || []).push([
  [205],
  {
    535: function (t, n, a) {
      'use strict'
      a.r(n)
      var s = a(6),
        e = Object(s.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              a = t._self._c || n
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'stacked-bar-chart-with-groups' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#stacked-bar-chart-with-groups' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Stacked Bar Chart with Groups')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Using the '),
                  a('code', [t._v('stack')]),
                  t._v(' property to divide datasets into multiple stacks.')
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.red,\n      stack: 'Stack 0',\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.blue,\n      stack: 'Stack 0',\n    },\n    {\n      label: 'Dataset 3',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.green,\n      stack: 'Stack 1',\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Bar Chart - Stacked'\n      },\n    },\n    responsive: true,\n    interaction: {\n      intersect: false,\n    },\n    scales: {\n      x: {\n        stacked: true,\n      },\n      y: {\n        stacked: true\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
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
                                attrs: {
                                  to: '/charts/bar.html#stacked-bar-chart'
                                }
                              },
                              [t._v('Stacked Bar Chart')]
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
                      ),
                      t._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a(
                              'RouterLink',
                              {
                                attrs: {
                                  to: '/general/data-structures.html#dataset-configuration'
                                }
                              },
                              [
                                t._v('Dataset Configuration ('),
                                a('code', [t._v('stack')]),
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
      n.default = e.exports
    }
  }
])
