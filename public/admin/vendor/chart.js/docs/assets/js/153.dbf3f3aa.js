;(window.webpackJsonp = window.webpackJsonp || []).push([
  [153],
  {
    481: function (t, e, a) {
      'use strict'
      a.r(e)
      var i = a(6),
        r = Object(i.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'data-decimation' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#data-decimation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Data Decimation')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The decimation plugin can be used with line charts to automatically decimate data at the start of the chart lifecycle. Before enabling this plugin, review the '
                  ),
                  a('a', { attrs: { href: '#requirements' } }, [
                    t._v('requirements')
                  ]),
                  t._v(
                    ' to ensure that it will work with the chart you want to create.'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'configuration-options' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#configuration-options' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Configuration Options')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Namespace: '),
                  a('code', [t._v('options.plugins.decimation')]),
                  t._v(', the global options for the plugin are defined in '),
                  a('code', [t._v('Chart.defaults.plugins.decimation')]),
                  t._v('.')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', [t._v('Name')]),
                      t._v(' '),
                      a('th', [t._v('Type')]),
                      t._v(' '),
                      a('th', [t._v('Default')]),
                      t._v(' '),
                      a('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', [a('code', [t._v('enabled')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('boolean')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('false')])]),
                      t._v(' '),
                      a('td', [t._v('Is decimation enabled?')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('algorithm')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'min-max'")])]),
                      t._v(' '),
                      a('td', [
                        t._v('Decimation algorithm to use. See the '),
                        a('a', { attrs: { href: '#decimation-algorithms' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('samples')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('If the '),
                        a('code', [t._v("'lttb'")]),
                        t._v(
                          ' algorithm is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('threshold')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'If the number of samples in the current axis range is above this value, the decimation will be triggered. Defaults to 4 times the canvas width.'
                        ),
                        a('br'),
                        t._v(
                          'The number of point after decimation can be higher than the '
                        ),
                        a('code', [t._v('threshold')]),
                        t._v(' value.')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'decimation-algorithms' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#decimation-algorithms' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Decimation Algorithms')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Decimation algorithm to use for data. Options are:')
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [a('code', [t._v("'lttb'")])]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'min-max'")])])
                ]),
                t._v(' '),
                a(
                  'h3',
                  {
                    attrs: {
                      id: 'largest-triangle-three-bucket-lttb-decimation'
                    }
                  },
                  [
                    a(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#largest-triangle-three-bucket-lttb-decimation'
                        }
                      },
                      [t._v('#')]
                    ),
                    t._v(' Largest Triangle Three Bucket (LTTB) Decimation')
                  ]
                ),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/sveinn-steinarsson/flot-downsample',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('LTTB'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' decimation reduces the number of data points significantly. This is most useful for showing trends in data using only a few data points.'
                  )
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'min-max-decimation' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#min-max-decimation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Min/Max Decimation')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://digital.ni.com/public.nsf/allkb/F694FFEEA0ACF282862576020075F784',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Min/max'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' decimation will preserve peaks in your data but could require up to 4 points for each pixel. This type of decimation would work well for a very noisy signal where you need to see data peaks.'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'requirements' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#requirements' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Requirements')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'To use the decimation plugin, the following requirements must be met:'
                  )
                ]),
                t._v(' '),
                a('ol', [
                  a(
                    'li',
                    [
                      t._v('The dataset must have an '),
                      a(
                        'RouterLink',
                        { attrs: { to: '/charts/line.html#general' } },
                        [a('code', [t._v('indexAxis')])]
                      ),
                      t._v(' of '),
                      a('code', [t._v("'x'")])
                    ],
                    1
                  ),
                  t._v(' '),
                  a('li', [t._v('The dataset must be a line')]),
                  t._v(' '),
                  a(
                    'li',
                    [
                      t._v('The X axis for the dataset must be either a '),
                      a(
                        'RouterLink',
                        { attrs: { to: '/axes/cartesian/linear.html' } },
                        [a('code', [t._v("'linear'")])]
                      ),
                      t._v(' or '),
                      a(
                        'RouterLink',
                        { attrs: { to: '/axes/cartesian/time.html' } },
                        [a('code', [t._v("'time'")])]
                      ),
                      t._v(' type axis')
                    ],
                    1
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      t._v('Data must not need parsing, i.e. '),
                      a(
                        'RouterLink',
                        {
                          attrs: {
                            to: '/general/data-structures.html#dataset-configuration'
                          }
                        },
                        [a('code', [t._v('parsing')])]
                      ),
                      t._v(' must be '),
                      a('code', [t._v('false')])
                    ],
                    1
                  ),
                  t._v(' '),
                  a('li', [
                    t._v(
                      'The dataset object must be mutable. The plugin stores the original data as '
                    ),
                    a('code', [t._v('dataset._data')]),
                    t._v(' and then defines a new '),
                    a('code', [t._v('data')]),
                    t._v(' property on the dataset.')
                  ]),
                  t._v(' '),
                  a('li', [
                    t._v(
                      'There must be more points on the chart than the threshold value. Take a look at the Configuration Options for more information.'
                    )
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'related-samples' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#related-samples' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Related Samples')
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [
                    a(
                      'a',
                      {
                        attrs: { href: '../samples/advanced/data-decimation' }
                      },
                      [t._v('Data Decimation Sample')]
                    )
                  ])
                ])
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = r.exports
    }
  }
])
