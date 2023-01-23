;(window.webpackJsonp = window.webpackJsonp || []).push([
  [164],
  {
    493: function (t, s, a) {
      'use strict'
      a.r(s)
      var e = a(6),
        n = Object(e.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'tooltip' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tooltip' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Tooltip')
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'tooltip-configuration' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tooltip-configuration' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Tooltip Configuration')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Namespace: '),
                  a('code', [t._v('options.plugins.tooltip')]),
                  t._v(
                    ', the global options for the chart tooltips is defined in '
                  ),
                  a('code', [t._v('Chart.defaults.plugins.tooltip')]),
                  t._v('.')
                ]),
                t._v(' '),
                a('div', { staticClass: 'custom-block warning' }, [
                  a('p', { staticClass: 'custom-block-title' }, [
                    t._v('WARNING')
                  ]),
                  t._v(' '),
                  a('p', [
                    t._v(
                      'The bubble, doughnut, pie, polar area, and scatter charts override the tooltip defaults. To change the overrides for those chart types, the options are defined in '
                    ),
                    a('code', [t._v('Chart.overrides[type].plugins.tooltip')]),
                    t._v('.')
                  ])
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
                      a('td', [a('code', [t._v('true')])]),
                      t._v(' '),
                      a('td', [t._v('Are on-canvas tooltips enabled?')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('external')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('function')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('null')])]),
                      t._v(' '),
                      a('td', [
                        t._v('See '),
                        a(
                          'a',
                          { attrs: { href: '#external-custom-tooltips' } },
                          [t._v('external tooltip')]
                        ),
                        t._v(' section.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('mode')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('interaction.mode')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          t._v('Sets which elements appear in the tooltip. '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/configuration/interactions.html#modes'
                              }
                            },
                            [t._v('more...')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('intersect')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('boolean')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('interaction.intersect')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('position')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'average'")])]),
                      t._v(' '),
                      a('td', [
                        t._v('The mode for positioning the tooltip. '),
                        a('a', { attrs: { href: '#position-modes' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('callbacks')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('object')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('See the '),
                        a('a', { attrs: { href: '#tooltip-callbacks' } }, [
                          t._v('callbacks section')
                        ]),
                        t._v('.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('itemSort')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('function')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('Sort tooltip items. '),
                        a('a', { attrs: { href: '#sort-callback' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('filter')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('function')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('Filter tooltip items. '),
                        a('a', { attrs: { href: '#filter-callback' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('backgroundColor')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v("'rgba(0, 0, 0, 0.8)'")])]),
                      t._v(' '),
                      a('td', [t._v('Background color of the tooltip.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('titleColor')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v("'#fff'")])]),
                      t._v(' '),
                      a('td', [t._v('Color of title text.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('titleFont')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Font')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v("{weight: 'bold'}")])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          t._v('See '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/fonts.html' } },
                            [t._v('Fonts')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('titleAlign')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'left'")])]),
                      t._v(' '),
                      a('td', [
                        t._v('Horizontal alignment of the title text lines. '),
                        a('a', { attrs: { href: '#text-alignment' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('titleSpacing')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('2')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Spacing to add to top and bottom of each title line.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('titleMarginBottom')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('6')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Margin to add on bottom of title section.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('bodyColor')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v("'#fff'")])]),
                      t._v(' '),
                      a('td', [t._v('Color of body text.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('bodyFont')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Font')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('{}')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          t._v('See '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/fonts.html' } },
                            [t._v('Fonts')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('bodyAlign')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'left'")])]),
                      t._v(' '),
                      a('td', [
                        t._v('Horizontal alignment of the body text lines. '),
                        a('a', { attrs: { href: '#text-alignment' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('bodySpacing')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('2')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Spacing to add to top and bottom of each tooltip item.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('footerColor')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v("'#fff'")])]),
                      t._v(' '),
                      a('td', [t._v('Color of footer text.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('footerFont')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Font')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v("{weight: 'bold'}")])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          t._v('See '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/fonts.html' } },
                            [t._v('Fonts')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('footerAlign')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'left'")])]),
                      t._v(' '),
                      a('td', [
                        t._v('Horizontal alignment of the footer text lines. '),
                        a('a', { attrs: { href: '#text-alignment' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('footerSpacing')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('2')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Spacing to add to top and bottom of each footer line.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('footerMarginTop')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('6')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Margin to add before drawing the footer.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('padding')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/padding.html' } },
                            [a('code', [t._v('Padding')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v('6')])]),
                      t._v(' '),
                      a('td', [t._v('Padding inside the tooltip.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('caretPadding')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('2')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Extra distance to move the end of the tooltip arrow away from the tooltip point.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('caretSize')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('5')])]),
                      t._v(' '),
                      a('td', [t._v('Size, in px, of the tooltip arrow.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('cornerRadius')])]),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v('number')]),
                        t._v('|'),
                        a('code', [t._v('object')])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('6')])]),
                      t._v(' '),
                      a('td', [t._v('Radius of tooltip corner curves.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('multiKeyBackground')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v("'#fff'")])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Color to draw behind the colored boxes when multiple items are in the tooltip.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('displayColors')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('boolean')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('true')])]),
                      t._v(' '),
                      a('td', [
                        t._v('If true, color boxes are shown in the tooltip.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('boxWidth')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('bodyFont.size')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Width of the color box if displayColors is true.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('boxHeight')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('bodyFont.size')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Height of the color box if displayColors is true.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('boxPadding')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('1')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Padding between the color box and the text.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('usePointStyle')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('boolean')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('false')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Use the corresponding point style (from dataset options) instead of color boxes, ex: star, triangle etc. (size is based on the minimum value between boxWidth and boxHeight).'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderColor')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v("'rgba(0, 0, 0, 0)'")])]),
                      t._v(' '),
                      a('td', [t._v('Color of the border.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderWidth')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('0')])]),
                      t._v(' '),
                      a('td', [t._v('Size of the border.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('rtl')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('boolean')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v('true')]),
                        t._v(' for rendering the tooltip from right to left.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('textDirection')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [t._v("canvas' default")]),
                      t._v(' '),
                      a('td', [
                        t._v('This will force the text direction '),
                        a('code', [t._v("'rtl' or 'ltr")]),
                        t._v(
                          ' on the canvas for rendering the tooltips, regardless of the css specified on the canvas'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('xAlign')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Position of the tooltip caret in the X direction. '
                        ),
                        a('a', { attrs: { href: '#tooltip-alignment' } }, [
                          t._v('more')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('yAlign')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Position of the tooltip caret in the Y direction. '
                        ),
                        a('a', { attrs: { href: '#tooltip-alignment' } }, [
                          t._v('more')
                        ])
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'position-modes' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#position-modes' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Position Modes')
                ]),
                t._v(' '),
                a('p', [t._v('Possible modes are:')]),
                t._v(' '),
                a('ul', [
                  a('li', [a('code', [t._v("'average'")])]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'nearest'")])])
                ]),
                t._v(' '),
                a('p', [
                  a('code', [t._v("'average'")]),
                  t._v(
                    ' mode will place the tooltip at the average position of the items displayed in the tooltip. '
                  ),
                  a('code', [t._v("'nearest'")]),
                  t._v(
                    ' will place the tooltip at the position of the element closest to the event position.'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('You can also define '),
                  a('a', { attrs: { href: '#custom-position-modes' } }, [
                    t._v('custom position modes')
                  ]),
                  t._v('.')
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'tooltip-alignment' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tooltip-alignment' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Tooltip Alignment')
                ]),
                t._v(' '),
                a('p', [
                  t._v('The '),
                  a('code', [t._v('xAlign')]),
                  t._v(' and '),
                  a('code', [t._v('yAlign')]),
                  t._v(
                    ' options define the position of the tooltip caret. If these parameters are unset, the optimal caret position is determined.'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('The following values for the '),
                  a('code', [t._v('xAlign')]),
                  t._v(' setting are supported.')
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [a('code', [t._v("'left'")])]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'center'")])]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'right'")])])
                ]),
                t._v(' '),
                a('p', [
                  t._v('The following values for the '),
                  a('code', [t._v('yAlign')]),
                  t._v(' setting are supported.')
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [a('code', [t._v("'top'")])]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'center'")])]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'bottom'")])])
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'text-alignment' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#text-alignment' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Text Alignment')
                ]),
                t._v(' '),
                a('p', [
                  t._v('The '),
                  a('code', [t._v('titleAlign')]),
                  t._v(', '),
                  a('code', [t._v('bodyAlign')]),
                  t._v(' and '),
                  a('code', [t._v('footerAlign')]),
                  t._v(
                    ' options define the horizontal position of the text lines with respect to the tooltip box. The following values are supported.'
                  )
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [a('code', [t._v("'left'")]), t._v(' (default)')]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'right'")])]),
                  t._v(' '),
                  a('li', [a('code', [t._v("'center'")])])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'These options are only applied to text lines. Color boxes are always aligned to the left edge.'
                  )
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'sort-callback' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#sort-callback' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Sort Callback')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Allows sorting of '),
                  a('a', { attrs: { href: '#tooltip-item-context' } }, [
                    t._v('tooltip items')
                  ]),
                  t._v(
                    '. Must implement at minimum a function that can be passed to '
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Array.prototype.sort'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    '. This function can also accept a third parameter that is the data object passed to the chart.'
                  )
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'filter-callback' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#filter-callback' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Filter Callback')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Allows filtering of '),
                  a('a', { attrs: { href: '#tooltip-item-context' } }, [
                    t._v('tooltip items')
                  ]),
                  t._v(
                    '. Must implement at minimum a function that can be passed to '
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Array.prototype.filter'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    '. This function can also accept a fourth parameter that is the data object passed to the chart.'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'tooltip-callbacks' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tooltip-callbacks' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Tooltip Callbacks')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Namespace: '),
                  a('code', [t._v('options.plugins.tooltip.callbacks')]),
                  t._v(
                    ', the tooltip has the following callbacks for providing text. For all functions, '
                  ),
                  a('code', [t._v('this')]),
                  t._v(' will be the tooltip object created from the '),
                  a('code', [t._v('Tooltip')]),
                  t._v(' constructor.')
                ]),
                t._v(' '),
                a('p', [
                  t._v('Namespace: '),
                  a('code', [t._v('data.datasets[].tooltip.callbacks')]),
                  t._v(', items marked with '),
                  a('code', [t._v('Yes')]),
                  t._v(' in the column '),
                  a('code', [t._v('Dataset override')]),
                  t._v(' can be overridden per dataset.')
                ]),
                t._v(' '),
                a('p', [
                  t._v('A '),
                  a('a', { attrs: { href: '#tooltip-item-context' } }, [
                    t._v('tooltip item context')
                  ]),
                  t._v(
                    ' is generated for each item that appears in the tooltip. This is the primary model that the callback methods interact with. For functions that return text, arrays of strings are treated as multiple lines of text.'
                  )
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', [t._v('Name')]),
                      t._v(' '),
                      a('th', [t._v('Arguments')]),
                      t._v(' '),
                      a('th', [t._v('Return Type')]),
                      t._v(' '),
                      a('th', [t._v('Dataset override')]),
                      t._v(' '),
                      a('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', [a('code', [t._v('beforeTitle')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('Returns the text to render before the title.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('title')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns text to render as the title of the tooltip.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('afterTitle')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [t._v('Returns text to render after the title.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('beforeBody')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('Returns text to render before the body section.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('beforeLabel')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td', [t._v('Yes')]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns text to render before an individual label. This will be called for each item in the tooltip.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('label')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td', [t._v('Yes')]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns text to render for an individual item in the tooltip. '
                        ),
                        a('a', { attrs: { href: '#label-callback' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('labelColor')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('object')])]),
                      t._v(' '),
                      a('td', [t._v('Yes')]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns the colors to render for the tooltip item. '
                        ),
                        a('a', { attrs: { href: '#label-color-callback' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('labelTextColor')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Color')])]),
                      t._v(' '),
                      a('td', [t._v('Yes')]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns the colors for the text of the label for the tooltip item.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('labelPointStyle')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('object')])]),
                      t._v(' '),
                      a('td', [t._v('Yes')]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns the point style to use instead of color boxes if usePointStyle is true (object with values '
                        ),
                        a('code', [t._v('pointStyle')]),
                        t._v(' and '),
                        a('code', [t._v('rotation')]),
                        t._v(
                          '). Default implementation uses the point style from the dataset points. '
                        ),
                        a(
                          'a',
                          { attrs: { href: '#label-point-style-callback' } },
                          [t._v('more...')]
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('afterLabel')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td', [t._v('Yes')]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns text to render after an individual label.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('afterBody')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('Returns text to render after the body section.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('beforeFooter')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns text to render before the footer section.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('footer')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Returns text to render as the footer of the tooltip.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('afterFooter')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('TooltipItem[]')])]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string | string[]')])]),
                      t._v(' '),
                      a('td'),
                      t._v(' '),
                      a('td', [
                        t._v('Text to render after the footer section.')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'label-callback' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#label-callback' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Label Callback')
                ]),
                t._v(' '),
                a('p', [
                  t._v('The '),
                  a('code', [t._v('label')]),
                  t._v(
                    ' callback can change the text that displays for a given data point. A common example to show a unit. The example below puts a '
                  ),
                  a('code', [t._v("'$'")]),
                  t._v(' before every row.')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' chart '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('plugins')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('tooltip')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('callbacks')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('label')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' label '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('dataset'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('label '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('||')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("''")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('if')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('label'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                            label '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("': '")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('if')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('parsed'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('y '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('!==')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('null')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                            label '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [
                            t._v('Intl'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            t._v('NumberFormat')
                          ]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'en-US'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('style')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'currency'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('currency')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'USD'")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('format')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('parsed'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('y'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('return')]
                        ),
                        t._v(' label'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h3', { attrs: { id: 'label-color-callback' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#label-color-callback' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Label Color Callback')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'For example, to return a red box with a blue dashed border that has a border radius for each item in the tooltip you could do:'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' chart '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('plugins')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('tooltip')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('callbacks')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('labelColor')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('return')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('borderColor')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'rgb(0, 0, 255)'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('backgroundColor')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'rgb(255, 0, 0)'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('borderWidth')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('2')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('borderDash')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('2')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('2')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('borderRadius')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('2')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('labelTextColor')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('return')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'#543453'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h3', { attrs: { id: 'label-point-style-callback' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#label-point-style-callback' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Label Point Style Callback')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'For example, to draw triangles instead of the regular color box for each item in the tooltip you could do:'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' chart '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('plugins')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('tooltip')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('usePointStyle')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('callbacks')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('labelPointStyle')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('return')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('pointStyle')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'triangle'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('rotation')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h3', { attrs: { id: 'tooltip-item-context' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tooltip-item-context' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Tooltip Item Context')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The tooltip items passed to the tooltip callbacks implement the following interface.'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// The chart the tooltip is being shown on')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('chart')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' Chart\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Label for the tooltip')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('label')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// Parsed data values for the given `dataIndex` and `datasetIndex`'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('parsed')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' object'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// Raw data values for the given `dataIndex` and `datasetIndex`'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('raw')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' object'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Formatted value for the tooltip')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('formattedValue')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// The dataset the item comes from')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('dataset')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' object\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Index of the dataset the item comes from')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('datasetIndex')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Index of this data item in the dataset')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('dataIndex')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// The chart element (point, arc, bar, etc.) for this tooltip item'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('element')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' Element'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h2', { attrs: { id: 'external-custom-tooltips' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#external-custom-tooltips' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' External (Custom) Tooltips')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'External tooltips allow you to hook into the tooltip rendering process so that you can render the tooltip in your own custom way. Generally this is used to create an HTML tooltip instead of an on-canvas tooltip. The '
                  ),
                  a('code', [t._v('external')]),
                  t._v(
                    ' option takes a function which is passed a context parameter containing the '
                  ),
                  a('code', [t._v('chart')]),
                  t._v(' and '),
                  a('code', [t._v('tooltip')]),
                  t._v(
                    '. You can enable external tooltips in the global or chart configuration like so:'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' myPieChart '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'pie'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('plugins')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('tooltip')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Disable the on-canvas tooltip')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('enabled')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('external')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Tooltip Element')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' tooltipEl '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' document'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('getElementById')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'chartjs-tooltip'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Create element on first render')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('if')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('!')]
                        ),
                        t._v('tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        tooltipEl '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' document'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('createElement')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'div'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('id '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'chartjs-tooltip'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('innerHTML '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'<table></table>'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        document'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('body'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('appendChild')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Hide if no tooltip')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' tooltipModel '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('tooltip'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('if')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('opacity '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('===')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('opacity '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('return')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Set caret Position')]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('classList'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('remove')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'above'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'below'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'no-transform'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('if')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('yAlign'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('classList'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('add')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('yAlign'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('else')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('classList'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('add')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'no-transform'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('getBody')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('bodyItem')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('return')]
                        ),
                        t._v(' bodyItem'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('lines'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Set Text')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('if')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('body'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' titleLines '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('title '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('||')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' bodyLines '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('body'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('map')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('getBody'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' innerHtml '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'<thead>'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n                        titleLines'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('forEach')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('title')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                            innerHtml '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'<tr><th>'")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' title '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'</th></tr>'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        innerHtml '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'</thead><tbody>'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n                        bodyLines'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('forEach')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [
                            t._v('body'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' i')
                          ]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' colors '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('labelColors'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        t._v('i'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' style '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'background:'")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' colors'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('backgroundColor'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                            style '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'; border-color:'")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' colors'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('borderColor'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                            style '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'; border-width: 2px'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' span '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'<span style=\"'")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' style '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'\"></span>'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                            innerHtml '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'<tr><td>'")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' span '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' body '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'</td></tr>'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        innerHtml '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'</tbody>'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n                        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' tableRoot '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('querySelector')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'table'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                        tableRoot'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('innerHTML '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' innerHtml'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' position '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('chart'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('canvas'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('getBoundingClientRect')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' bodyFont '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' Chart'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('helpers'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('toFont')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('options'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('bodyFont'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n                    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// Display, position, and set styles for font'
                            )
                          ]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('opacity '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('1')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('position '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'absolute'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('left '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' position'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('left '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' window'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('pageXOffset '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('caretX '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'px'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('top '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' position'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('top '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' window'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('pageYOffset '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('caretY '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'px'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('font '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' bodyFont'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('padding '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('padding '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'px '")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' tooltipModel'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('padding '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('+')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'px'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                    tooltipEl'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('style'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('pointerEvents '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'none'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a(
                  'p',
                  [
                    t._v('See '),
                    a(
                      'RouterLink',
                      { attrs: { to: '/samples/tooltip/html.html' } },
                      [t._v('samples')]
                    ),
                    t._v(
                      ' for examples on how to get started with external tooltips.'
                    )
                  ],
                  1
                ),
                t._v(' '),
                a('h2', { attrs: { id: 'tooltip-model' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tooltip-model' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Tooltip Model')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The tooltip model contains parameters that can be used to render the tooltip.'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('chart')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' Chart'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// The items that we are rendering in the tooltip. See Tooltip Item Interface section'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('dataPoints')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' TooltipItem'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Positioning')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('xAlign')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('yAlign')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// X and Y properties are the top left of the tooltip'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('x')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('y')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('width')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('height')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Where the tooltip points to')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('caretX')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('caretY')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Body')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// The body lines that need to be rendered')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Each object contains 3 parameters')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// before: string[] // lines of text before the line with the color square'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// lines: string[], // lines of text to render as the main item with color square'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// after: string[], // lines of text to render after the main lines'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('body')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' object'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// lines of text that appear after the title but before the body'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('beforeBody')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// line of text that appear after the body and before the footer'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('afterBody')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Title')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// lines of text that form the title')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('title')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Footer')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// lines of text that form the footer')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('footer')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' string'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// colors to render for each item in body[]. This is the color of the squares in the tooltip'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('labelColors')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' Color'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('labelTextColors')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' Color'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// 0 opacity is a hidden tooltip')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('opacity')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// tooltip options')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' Object\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h2', { attrs: { id: 'custom-position-modes' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#custom-position-modes' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Custom Position Modes')
                ]),
                t._v(' '),
                a('p', [
                  t._v('New modes can be defined by adding functions to the '),
                  a('code', [t._v('Chart.Tooltip.positioners')]),
                  t._v(' map.')
                ]),
                t._v(' '),
                a('p', [t._v('Example:')]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('import')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v(' Tooltip '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('from')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'chart.js'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '/**\n * Custom positioner\n * @function Tooltip.positioners.myCustomPositioner\n * @param elements {Chart.Element[]} the tooltip elements\n * @param eventPosition {Point} the position of the event in canvas coordinates\n * @returns {TooltipPosition} the tooltip position\n */'
                            )
                          ]
                        ),
                        t._v('\nTooltip'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('positioners'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('myCustomPositioner')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [
                            t._v('elements'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' eventPosition')
                          ]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// A reference to the tooltip model')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' tooltip '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('this')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('/* ... */')]
                        ),
                        t._v('\n\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('return')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('x')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('y')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// You may also include xAlign and yAlign to override those tooltip options.'
                            )
                          ]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Then, to use it...')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [
                            t._v('Chart'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            t._v('js')
                          ]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    data'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('plugins')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('tooltip')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('position')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'myCustomPositioner'")]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a(
                  'p',
                  [
                    t._v('See '),
                    a(
                      'RouterLink',
                      { attrs: { to: '/samples/tooltip/position.html' } },
                      [t._v('samples')]
                    ),
                    t._v(' for a more detailed example.')
                  ],
                  1
                ),
                t._v(' '),
                a('p', [
                  t._v(
                    "If you're using TypeScript, you'll also need to register the new mode:"
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-typescript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-typescript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('declare')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('module')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'chart.js'")]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n  '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('interface')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('TooltipPositionerMap')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    myCustomPositioner'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' TooltipPositionerFunction'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('<')]
                        ),
                        t._v('ChartType'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('>')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n  '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
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
      s.default = n.exports
    }
  }
])
