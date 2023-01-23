;(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    385: function (t, e, a) {
      'use strict'
      a.r(e)
      var r = a(6),
        s = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'interface-corechartoptions-ttype' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#interface-corechartoptions-ttype' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Interface: CoreChartOptions<TType>')
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'type-parameters' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#type-parameters' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Type parameters')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Name')
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Type')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('TType')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          t._v('extends '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/api/#charttype' } },
                            [a('code', [t._v('ChartType')])]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'hierarchy' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#hierarchy' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Hierarchy')
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [
                    a(
                      'p',
                      [
                        a(
                          'RouterLink',
                          {
                            attrs: { to: '/api/interfaces/ParsingOptions.html' }
                          },
                          [a('code', [t._v('ParsingOptions')])]
                        )
                      ],
                      1
                    )
                  ]),
                  t._v(' '),
                  a('li', [
                    a(
                      'p',
                      [
                        a(
                          'RouterLink',
                          { attrs: { to: '/api/#animationoptions' } },
                          [a('code', [t._v('AnimationOptions')])]
                        ),
                        t._v('<'),
                        a('code', [t._v('TType')]),
                        t._v('>')
                      ],
                      1
                    ),
                    t._v(' '),
                    a('p', [
                      t._v('↳ '),
                      a('strong', [a('code', [t._v('CoreChartOptions')])])
                    ]),
                    t._v(' '),
                    a(
                      'p',
                      [
                        t._v('↳↳ '),
                        a(
                          'RouterLink',
                          { attrs: { to: '/api/interfaces/Defaults.html' } },
                          [a('code', [t._v('Defaults')])]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'properties' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#properties' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Properties')
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'animation' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#animation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' animation')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('animation')]),
                    t._v(': '),
                    a('code', [t._v('false')]),
                    t._v(' | '),
                    a('RouterLink', { attrs: { to: '/api/#animationspec' } }, [
                      a('code', [t._v('AnimationSpec')])
                    ]),
                    t._v('<'),
                    a('code', [t._v('TType')]),
                    t._v('> & { '),
                    a('code', [t._v('onComplete?')]),
                    t._v(': ('),
                    a('code', [t._v('event')]),
                    t._v(': '),
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/interfaces/AnimationEvent.html' } },
                      [a('code', [t._v('AnimationEvent')])]
                    ),
                    t._v(') => '),
                    a('code', [t._v('void')]),
                    t._v(' ; '),
                    a('code', [t._v('onProgress?')]),
                    t._v(': ('),
                    a('code', [t._v('event')]),
                    t._v(': '),
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/interfaces/AnimationEvent.html' } },
                      [a('code', [t._v('AnimationEvent')])]
                    ),
                    t._v(') => '),
                    a('code', [t._v('void')]),
                    t._v('  }')
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'inherited-from' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#inherited-from' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Inherited from')
                ]),
                t._v(' '),
                a('p', [t._v('AnimationOptions.animation')]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1640',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1640'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'animations' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#animations' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' animations')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('animations')]),
                    t._v(': '),
                    a('RouterLink', { attrs: { to: '/api/#animationsspec' } }, [
                      a('code', [t._v('AnimationsSpec')])
                    ]),
                    t._v('<'),
                    a('code', [t._v('TType')]),
                    t._v('>')
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'inherited-from-2' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#inherited-from-2' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Inherited from')
                ]),
                t._v(' '),
                a('p', [t._v('AnimationOptions.animations')]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-2' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-2' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1650',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1650'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'aspectratio' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#aspectratio' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' aspectRatio')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('aspectRatio')]),
                  t._v(': '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style.'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(' 2')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-3' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-3' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1505',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1505'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'backgroundcolor' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#backgroundcolor' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' backgroundColor')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('backgroundColor')]),
                    t._v(': '),
                    a('RouterLink', { attrs: { to: '/api/#scriptable' } }, [
                      a('code', [t._v('Scriptable')])
                    ]),
                    t._v('<'),
                    a('RouterLink', { attrs: { to: '/api/#color' } }, [
                      a('code', [t._v('Color')])
                    ]),
                    t._v(', '),
                    a(
                      'RouterLink',
                      {
                        attrs: { to: '/api/interfaces/ScriptableContext.html' }
                      },
                      [a('code', [t._v('ScriptableContext')])]
                    ),
                    t._v('<'),
                    a('code', [t._v('TType')]),
                    t._v('>>')
                  ],
                  1
                ),
                t._v(' '),
                a('p', [t._v('base background color')]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('see')])]),
                  t._v(' Defaults.backgroundColor')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-4' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-4' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1474',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1474'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'bordercolor' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#bordercolor' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' borderColor')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('borderColor')]),
                    t._v(': '),
                    a('RouterLink', { attrs: { to: '/api/#scriptable' } }, [
                      a('code', [t._v('Scriptable')])
                    ]),
                    t._v('<'),
                    a('RouterLink', { attrs: { to: '/api/#color' } }, [
                      a('code', [t._v('Color')])
                    ]),
                    t._v(', '),
                    a(
                      'RouterLink',
                      {
                        attrs: { to: '/api/interfaces/ScriptableContext.html' }
                      },
                      [a('code', [t._v('ScriptableContext')])]
                    ),
                    t._v('<'),
                    a('code', [t._v('TType')]),
                    t._v('>>')
                  ],
                  1
                ),
                t._v(' '),
                a('p', [t._v('base border color')]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('see')])]),
                  t._v(' Defaults.borderColor')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-5' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-5' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1479',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1479'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'clip' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#clip' } },
                    [t._v('#')]
                  ),
                  t._v(' clip')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('clip')]),
                    t._v(': '),
                    a('code', [t._v('number')]),
                    t._v(' | '),
                    a('code', [t._v('false')]),
                    t._v(' | '),
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/interfaces/ChartArea.html' } },
                      [a('code', [t._v('ChartArea')])]
                    )
                  ],
                  1
                ),
                t._v(' '),
                a('p', [
                  t._v(
                    'How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: clip: {left: 5, top: false, right: -2, bottom: 0}'
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-6' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-6' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1463',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1463'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'color' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#color' } },
                    [t._v('#')]
                  ),
                  t._v(' color')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('color')]),
                    t._v(': '),
                    a('RouterLink', { attrs: { to: '/api/#scriptable' } }, [
                      a('code', [t._v('Scriptable')])
                    ]),
                    t._v('<'),
                    a('RouterLink', { attrs: { to: '/api/#color' } }, [
                      a('code', [t._v('Color')])
                    ]),
                    t._v(', '),
                    a(
                      'RouterLink',
                      {
                        attrs: { to: '/api/interfaces/ScriptableContext.html' }
                      },
                      [a('code', [t._v('ScriptableContext')])]
                    ),
                    t._v('<'),
                    a('code', [t._v('TType')]),
                    t._v('>>')
                  ],
                  1
                ),
                t._v(' '),
                a('p', [t._v('base color')]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('see')])]),
                  t._v(' Defaults.color')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-7' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-7' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1469',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1469'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'datasets' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#datasets' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' datasets')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('datasets')]),
                  t._v(': '),
                  a('code', [t._v('Object')])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'type-declaration' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#type-declaration' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Type declaration')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Name')
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Type')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('bar')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/BarControllerDatasetOptions.html'
                              }
                            },
                            [a('code', [t._v('BarControllerDatasetOptions')])]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('bubble')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/BubbleControllerDatasetOptions.html'
                              }
                            },
                            [
                              a('code', [
                                t._v('BubbleControllerDatasetOptions')
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('doughnut')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/DoughnutControllerDatasetOptions.html'
                              }
                            },
                            [
                              a('code', [
                                t._v('DoughnutControllerDatasetOptions')
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('line')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/LineControllerDatasetOptions.html'
                              }
                            },
                            [a('code', [t._v('LineControllerDatasetOptions')])]
                          ),
                          t._v(' & '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/FillerControllerDatasetOptions.html'
                              }
                            },
                            [
                              a('code', [
                                t._v('FillerControllerDatasetOptions')
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('pie')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/DoughnutControllerDatasetOptions.html'
                              }
                            },
                            [
                              a('code', [
                                t._v('DoughnutControllerDatasetOptions')
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('polarArea')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/PolarAreaControllerDatasetOptions.html'
                              }
                            },
                            [
                              a('code', [
                                t._v('PolarAreaControllerDatasetOptions')
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('radar')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/RadarControllerDatasetOptions.html'
                              }
                            },
                            [a('code', [t._v('RadarControllerDatasetOptions')])]
                          ),
                          t._v(' & '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/FillerControllerDatasetOptions.html'
                              }
                            },
                            [
                              a('code', [
                                t._v('FillerControllerDatasetOptions')
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('scatter')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/LineControllerDatasetOptions.html'
                              }
                            },
                            [a('code', [t._v('LineControllerDatasetOptions')])]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-8' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-8' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1450',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1450'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'devicepixelratio' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#devicepixelratio' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' devicePixelRatio')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('devicePixelRatio')]),
                  t._v(': '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v("Override the window's default devicePixelRatio.")
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(' window.devicePixelRatio')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-9' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-9' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1522',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1522'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'events' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#events' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' events')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('events')]),
                  t._v(': keyof '),
                  a('code', [t._v('HTMLElementEventMap')]),
                  t._v('[]')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The events option defines the browser events that the chart should listen to for tooltips and hovering.'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(
                    " ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']"
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-10' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-10' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1532',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1532'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'font' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#font' } },
                    [t._v('#')]
                  ),
                  t._v(' font')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('font')]),
                    t._v(': '),
                    a('code', [t._v('Partial')]),
                    t._v('<'),
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/interfaces/FontSpec.html' } },
                      [a('code', [t._v('FontSpec')])]
                    ),
                    t._v('>')
                  ],
                  1
                ),
                t._v(' '),
                a('p', [t._v('base font')]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('see')])]),
                  t._v(' Defaults.font')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-11' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-11' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1484',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1484'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'hover' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#hover' } },
                    [t._v('#')]
                  ),
                  t._v(' hover')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('hover')]),
                    t._v(': '),
                    a(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/api/interfaces/CoreInteractionOptions.html'
                        }
                      },
                      [a('code', [t._v('CoreInteractionOptions')])]
                    )
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-12' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-12' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1526',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1526'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'indexaxis' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#indexaxis' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' indexAxis')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('indexAxis')]),
                  t._v(': '),
                  a('code', [t._v('"x"')]),
                  t._v(' | '),
                  a('code', [t._v('"y"')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    "The base axis of the chart. 'x' for vertical charts and 'y' for horizontal charts."
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(" 'x'")
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-13' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-13' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1458',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1458'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'interaction' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#interaction' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' interaction')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('interaction')]),
                    t._v(': '),
                    a(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/api/interfaces/CoreInteractionOptions.html'
                        }
                      },
                      [a('code', [t._v('CoreInteractionOptions')])]
                    )
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-14' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-14' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1524',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1524'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'layout' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#layout' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' layout')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('layout')]),
                    t._v(': '),
                    a('code', [t._v('Partial')]),
                    t._v('<{ '),
                    a('code', [t._v('autoPadding')]),
                    t._v(': '),
                    a('code', [t._v('boolean')]),
                    t._v(' ; '),
                    a('code', [t._v('padding')]),
                    t._v(': '),
                    a('RouterLink', { attrs: { to: '/api/#scriptable' } }, [
                      a('code', [t._v('Scriptable')])
                    ]),
                    t._v('<'),
                    a('code', [t._v('number')]),
                    t._v(' | '),
                    a('code', [t._v('Partial')]),
                    t._v('<'),
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/interfaces/ChartArea.html' } },
                      [a('code', [t._v('ChartArea')])]
                    ),
                    t._v('>, '),
                    a(
                      'RouterLink',
                      {
                        attrs: { to: '/api/interfaces/ScriptableContext.html' }
                      },
                      [a('code', [t._v('ScriptableContext')])]
                    ),
                    t._v('<'),
                    a('code', [t._v('TType')]),
                    t._v('>>  }>')
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-15' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-15' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1544',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1544'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'locale' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#locale' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' locale')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('locale')]),
                  t._v(': '),
                  a('code', [t._v('string')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Locale used for number formatting (using '),
                  a('code', [t._v('Intl.NumberFormat')]),
                  t._v(').')
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(" user's browser setting")
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-16' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-16' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1511',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1511'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'maintainaspectratio' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#maintainaspectratio' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' maintainAspectRatio')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('maintainAspectRatio')]),
                  t._v(': '),
                  a('code', [t._v('boolean')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Maintain the original canvas aspect ratio (width / height) when resizing.'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(' true')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-17' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-17' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1494',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1494'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'normalized' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#normalized' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' normalized')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('normalized')]),
                  t._v(': '),
                  a('code', [t._v('boolean')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Chart.js is fastest if you provide data with indices that are unique, sorted, and consistent across datasets and provide the normalized: true option to let Chart.js know that you have done so.'
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'inherited-from-3' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#inherited-from-3' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Inherited from')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/interfaces/ParsingOptions.html' } },
                      [t._v('ParsingOptions')]
                    ),
                    t._v('.'),
                    a(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/api/interfaces/ParsingOptions.html#normalized'
                        }
                      },
                      [t._v('normalized')]
                    )
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-18' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-18' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L58',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:58'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'parsing' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parsing' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' parsing')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('parsing')]),
                  t._v(': '),
                  a('code', [t._v('false')]),
                  t._v(' | { [key: string]: '),
                  a('code', [t._v('string')]),
                  t._v(';  }')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'How to parse the dataset. The parsing can be disabled by specifying parsing: false at chart options or dataset. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.'
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'inherited-from-4' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#inherited-from-4' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Inherited from')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/interfaces/ParsingOptions.html' } },
                      [t._v('ParsingOptions')]
                    ),
                    t._v('.'),
                    a(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/api/interfaces/ParsingOptions.html#parsing'
                        }
                      },
                      [t._v('parsing')]
                    )
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-19' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-19' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L49',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:49'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'resizedelay' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#resizedelay' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' resizeDelay')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('resizeDelay')]),
                  t._v(': '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(' 0')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-20' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-20' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1499',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1499'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'responsive' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#responsive' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' responsive')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('strong', [t._v('responsive')]),
                  t._v(': '),
                  a('code', [t._v('boolean')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Resizes the chart canvas when its container does (important note...).'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('strong', [a('code', [t._v('default')])]),
                  t._v(' true')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-21' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-21' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1489',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1489'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'transitions' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#transitions' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' transitions')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('• '),
                    a('strong', [t._v('transitions')]),
                    t._v(': '),
                    a(
                      'RouterLink',
                      { attrs: { to: '/api/#transitionsspec' } },
                      [a('code', [t._v('TransitionsSpec')])]
                    ),
                    t._v('<'),
                    a('code', [t._v('TType')]),
                    t._v('>')
                  ],
                  1
                ),
                t._v(' '),
                a('h4', { attrs: { id: 'inherited-from-5' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#inherited-from-5' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Inherited from')
                ]),
                t._v(' '),
                a('p', [t._v('AnimationOptions.transitions')]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-22' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-22' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1651',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1651'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'methods' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#methods' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Methods')
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'onclick' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#onclick' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' onClick')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('onClick')]),
                  t._v('('),
                  a('code', [t._v('event')]),
                  t._v(', '),
                  a('code', [t._v('elements')]),
                  t._v(', '),
                  a('code', [t._v('chart')]),
                  t._v('): '),
                  a('code', [t._v('void')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    "Called if the event is of type 'mouseup' or 'click'. Passed the event, an array of active elements, and the chart."
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Parameters')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Name')
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Type')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('event')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: { to: '/api/interfaces/ChartEvent.html' }
                            },
                            [a('code', [t._v('ChartEvent')])]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('elements')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ActiveElement.html'
                              }
                            },
                            [a('code', [t._v('ActiveElement')])]
                          ),
                          t._v('[]')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('chart')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/api/classes/Chart.html' } },
                            [a('code', [t._v('Chart')])]
                          ),
                          t._v('<keyof '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ChartTypeRegistry.html'
                              }
                            },
                            [a('code', [t._v('ChartTypeRegistry')])]
                          ),
                          t._v(', ('),
                          a('code', [t._v('number')]),
                          t._v(' | '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ScatterDataPoint.html'
                              }
                            },
                            [a('code', [t._v('ScatterDataPoint')])]
                          ),
                          t._v(' | '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/BubbleDataPoint.html'
                              }
                            },
                            [a('code', [t._v('BubbleDataPoint')])]
                          ),
                          t._v(')[], '),
                          a('code', [t._v('unknown')]),
                          t._v('>')
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('void')])]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-23' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-23' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1542',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1542'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'onhover' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#onhover' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' onHover')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('onHover')]),
                  t._v('('),
                  a('code', [t._v('event')]),
                  t._v(', '),
                  a('code', [t._v('elements')]),
                  t._v(', '),
                  a('code', [t._v('chart')]),
                  t._v('): '),
                  a('code', [t._v('void')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Called when any of the events fire. Passed the event, an array of active elements (bars, points, etc), and the chart.'
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters-2' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters-2' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Parameters')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Name')
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Type')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('event')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: { to: '/api/interfaces/ChartEvent.html' }
                            },
                            [a('code', [t._v('ChartEvent')])]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('elements')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ActiveElement.html'
                              }
                            },
                            [a('code', [t._v('ActiveElement')])]
                          ),
                          t._v('[]')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('chart')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/api/classes/Chart.html' } },
                            [a('code', [t._v('Chart')])]
                          ),
                          t._v('<keyof '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ChartTypeRegistry.html'
                              }
                            },
                            [a('code', [t._v('ChartTypeRegistry')])]
                          ),
                          t._v(', ('),
                          a('code', [t._v('number')]),
                          t._v(' | '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ScatterDataPoint.html'
                              }
                            },
                            [a('code', [t._v('ScatterDataPoint')])]
                          ),
                          t._v(' | '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/BubbleDataPoint.html'
                              }
                            },
                            [a('code', [t._v('BubbleDataPoint')])]
                          ),
                          t._v(')[], '),
                          a('code', [t._v('unknown')]),
                          t._v('>')
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-2' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-2' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('void')])]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-24' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-24' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1537',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1537'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'onresize' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#onresize' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' onResize')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('onResize')]),
                  t._v('('),
                  a('code', [t._v('chart')]),
                  t._v(', '),
                  a('code', [t._v('size')]),
                  t._v('): '),
                  a('code', [t._v('void')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.'
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters-3' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters-3' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Parameters')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Name')
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Type')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('chart')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/api/classes/Chart.html' } },
                            [a('code', [t._v('Chart')])]
                          ),
                          t._v('<keyof '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ChartTypeRegistry.html'
                              }
                            },
                            [a('code', [t._v('ChartTypeRegistry')])]
                          ),
                          t._v(', ('),
                          a('code', [t._v('number')]),
                          t._v(' | '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/ScatterDataPoint.html'
                              }
                            },
                            [a('code', [t._v('ScatterDataPoint')])]
                          ),
                          t._v(' | '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/BubbleDataPoint.html'
                              }
                            },
                            [a('code', [t._v('BubbleDataPoint')])]
                          ),
                          t._v(')[], '),
                          a('code', [t._v('unknown')]),
                          t._v('>')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('size')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('Object')])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('size.height')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('size.width')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-3' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-3' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('void')])]),
                t._v(' '),
                a('h4', { attrs: { id: 'defined-in-25' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defined-in-25' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Defined in')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L1516',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('index.esm.d.ts:1516'), a('OutboundLink')],
                    1
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
      e.default = s.exports
    }
  }
])
