;(window.webpackJsonp = window.webpackJsonp || []).push([
  [128],
  {
    457: function (t, e, o) {
      'use strict'
      o.r(e)
      var d = o(6),
        v = Object(d.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e
            return o(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                o('h3', { attrs: { id: 'common-tick-options-to-all-axes' } }, [
                  o(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#common-tick-options-to-all-axes' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Common tick options to all axes')
                ]),
                t._v(' '),
                o('p', [
                  t._v('Namespace: '),
                  o('code', [t._v('options.scales[scaleId].ticks')])
                ]),
                t._v(' '),
                o('table', [
                  o('thead', [
                    o('tr', [
                      o('th', [t._v('Name')]),
                      t._v(' '),
                      o('th', [t._v('Type')]),
                      t._v(' '),
                      o('th', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Scriptable')
                      ]),
                      t._v(' '),
                      o('th', [t._v('Default')]),
                      t._v(' '),
                      o('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  o('tbody', [
                    o('tr', [
                      o('td', [o('code', [t._v('backdropColor')])]),
                      t._v(' '),
                      o(
                        'td',
                        [
                          o(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [o('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      o('td', [
                        o('code', [t._v("'rgba(255, 255, 255, 0.75)'")])
                      ]),
                      t._v(' '),
                      o('td', [t._v('Color of label backdrops.')])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('backdropPadding')])]),
                      t._v(' '),
                      o(
                        'td',
                        [
                          o(
                            'RouterLink',
                            { attrs: { to: '/general/padding.html' } },
                            [o('code', [t._v('Padding')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }),
                      t._v(' '),
                      o('td', [o('code', [t._v('2')])]),
                      t._v(' '),
                      o('td', [t._v('Padding of label backdrop.')])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('callback')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('function')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }),
                      t._v(' '),
                      o('td'),
                      t._v(' '),
                      o(
                        'td',
                        [
                          t._v(
                            'Returns the string representation of the tick value as it should be displayed on the chart. See '
                          ),
                          o(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/axes/labelling.html#creating-custom-tick-formats'
                              }
                            },
                            [t._v('callback')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('display')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('boolean')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }),
                      t._v(' '),
                      o('td', [o('code', [t._v('true')])]),
                      t._v(' '),
                      o('td', [t._v('If true, show tick labels.')])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('color')])]),
                      t._v(' '),
                      o(
                        'td',
                        [
                          o(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [o('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      o('td', [o('code', [t._v('Chart.defaults.color')])]),
                      t._v(' '),
                      o('td', [t._v('Color of ticks.')])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('font')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('Font')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      o('td', [o('code', [t._v('Chart.defaults.font')])]),
                      t._v(' '),
                      o(
                        'td',
                        [
                          t._v('See '),
                          o(
                            'RouterLink',
                            { attrs: { to: '/general/fonts.html' } },
                            [t._v('Fonts')]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('major')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('object')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }),
                      t._v(' '),
                      o('td', [o('code', [t._v('{}')])]),
                      t._v(' '),
                      o(
                        'td',
                        [
                          o(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/axes/styling.html#major-tick-configuration'
                              }
                            },
                            [t._v('Major ticks configuration')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('padding')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('number')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }),
                      t._v(' '),
                      o('td', [o('code', [t._v('3')])]),
                      t._v(' '),
                      o('td', [
                        t._v('Sets the offset of the tick labels from the axis')
                      ])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('showLabelBackdrop')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('boolean')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      o('td', [
                        o('code', [t._v('true')]),
                        t._v(' for radial scale, '),
                        o('code', [t._v('false')]),
                        t._v(' otherwise')
                      ]),
                      t._v(' '),
                      o('td', [
                        t._v(
                          'If true, draw a background behind the tick labels.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('textStrokeColor')])]),
                      t._v(' '),
                      o(
                        'td',
                        [
                          o(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [o('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      o('td', [t._v('``')]),
                      t._v(' '),
                      o('td', [
                        t._v('The color of the stroke around the text.')
                      ])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('textStrokeWidth')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('number')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      o('td', [o('code', [t._v('0')])]),
                      t._v(' '),
                      o('td', [t._v('Stroke width around the text.')])
                    ]),
                    t._v(' '),
                    o('tr', [
                      o('td', [o('code', [t._v('z')])]),
                      t._v(' '),
                      o('td', [o('code', [t._v('number')])]),
                      t._v(' '),
                      o('td', { staticStyle: { 'text-align': 'center' } }),
                      t._v(' '),
                      o('td', [o('code', [t._v('0')])]),
                      t._v(' '),
                      o('td', [
                        t._v(
                          'z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.'
                        )
                      ])
                    ])
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
      e.default = v.exports
    }
  }
])
