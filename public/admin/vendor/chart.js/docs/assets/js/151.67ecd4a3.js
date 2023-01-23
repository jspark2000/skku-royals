;(window.webpackJsonp = window.webpackJsonp || []).push([
  [151],
  {
    480: function (t, a, e) {
      'use strict'
      e.r(a)
      var n = e(6),
        o = Object(n.a)(
          {},
          function () {
            var t = this,
              a = t.$createElement,
              e = t._self._c || a
            return e(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                e('h1', { attrs: { id: 'animations' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#animations' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Animations')
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    'Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes.'
                  )
                ]),
                t._v(' '),
                e(
                  'tabs',
                  [
                    e(
                      'tab',
                      { attrs: { name: 'Looping tension [property]' } },
                      [
                        e('chart-editor', {
                          attrs: {
                            code: "// <block:setup:1>\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n    label: 'Looping tension',\n    data: [65, 59, 80, 81, 26, 55, 40],\n    fill: false,\n    borderColor: 'rgb(75, 192, 192)',\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    animations: {\n      tension: {\n        duration: 1000,\n        easing: 'linear',\n        from: 1,\n        to: 0,\n        loop: true\n      }\n    },\n    scales: {\n      y: { // defining min and max so hiding the dataset does not change scale range\n        min: 0,\n        max: 100\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"
                          }
                        })
                      ],
                      1
                    ),
                    t._v(' '),
                    e(
                      'tab',
                      { attrs: { name: 'Hide and show [mode]' } },
                      [
                        e('chart-editor', {
                          attrs: {
                            code: "// <block:setup:1>\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n    label: 'Try hiding me',\n    data: [65, 59, 80, 81, 26, 55, 40],\n    fill: false,\n    borderColor: 'rgb(75, 192, 192)',\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    transitions: {\n      show: {\n        animations: {\n          x: {\n            from: 0\n          },\n          y: {\n            from: 0\n          }\n        }\n      },\n      hide: {\n        animations: {\n          x: {\n            to: 0\n          },\n          y: {\n            to: 0\n          }\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                t._v(' '),
                e('h2', { attrs: { id: 'animation-configuration' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#animation-configuration' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Animation configuration')
                ]),
                t._v(' '),
                e('p', [t._v('Animation configuration consists of 3 keys.')]),
                t._v(' '),
                e('table', [
                  e('thead', [
                    e('tr', [
                      e('th', [t._v('Name')]),
                      t._v(' '),
                      e('th', [t._v('Type')]),
                      t._v(' '),
                      e('th', [t._v('Details')])
                    ])
                  ]),
                  t._v(' '),
                  e('tbody', [
                    e('tr', [
                      e('td', [t._v('animation')]),
                      t._v(' '),
                      e('td', [e('code', [t._v('object')])]),
                      t._v(' '),
                      e('td', [
                        e('a', { attrs: { href: '#animation' } }, [
                          t._v('animation')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [t._v('animations')]),
                      t._v(' '),
                      e('td', [e('code', [t._v('object')])]),
                      t._v(' '),
                      e('td', [
                        e('a', { attrs: { href: '#animations' } }, [
                          t._v('animations')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [t._v('transitions')]),
                      t._v(' '),
                      e('td', [e('code', [t._v('object')])]),
                      t._v(' '),
                      e('td', [
                        e('a', { attrs: { href: '#transitions' } }, [
                          t._v('transitions')
                        ])
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                e('p', [
                  t._v('These keys can be configured in following paths:')
                ]),
                t._v(' '),
                e('ul', [
                  e('li', [t._v('`` - chart options')]),
                  t._v(' '),
                  e('li', [
                    e('code', [t._v('datasets[type]')]),
                    t._v(' - dataset type options')
                  ]),
                  t._v(' '),
                  e('li', [
                    e('code', [t._v('overrides[type]')]),
                    t._v(' - chart type options')
                  ])
                ]),
                t._v(' '),
                e('p', [
                  t._v('These paths are valid under '),
                  e('code', [t._v('defaults')]),
                  t._v(' for global configuration and '),
                  e('code', [t._v('options')]),
                  t._v(' for instance configuration.')
                ]),
                t._v(' '),
                e('h2', { attrs: { id: 'animation' } }, [
                  e(
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
                e('p', [
                  t._v('The default configuration is defined here: '),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/master/src/core/core.animations.js',
                        target: '_blank'
                      }
                    },
                    [t._v('core.animations.js')]
                  )
                ]),
                t._v(' '),
                e('p', [
                  t._v('Namespace: '),
                  e('code', [t._v('options.animation')])
                ]),
                t._v(' '),
                e('table', [
                  e('thead', [
                    e('tr', [
                      e('th', [t._v('Name')]),
                      t._v(' '),
                      e('th', [t._v('Type')]),
                      t._v(' '),
                      e('th', [t._v('Default')]),
                      t._v(' '),
                      e('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  e('tbody', [
                    e('tr', [
                      e('td', [e('code', [t._v('duration')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('number')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('1000')])]),
                      t._v(' '),
                      e('td', [
                        t._v('The number of milliseconds an animation takes.')
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('easing')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('string')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v("'easeOutQuart'")])]),
                      t._v(' '),
                      e('td', [
                        t._v('Easing function to use. '),
                        e('a', { attrs: { href: '#easing' } }, [
                          t._v('more...')
                        ])
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('delay')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('number')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('undefined')])]),
                      t._v(' '),
                      e('td', [t._v('Delay before starting the animations.')])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('loop')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('boolean')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('undefined')])]),
                      t._v(' '),
                      e('td', [
                        t._v('If set to '),
                        e('code', [t._v('true')]),
                        t._v(', the animations loop endlessly.')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                e(
                  'p',
                  [
                    t._v('These defaults can be overridden in '),
                    e('code', [t._v('options.animation')]),
                    t._v(' or '),
                    e('code', [t._v('dataset.animation')]),
                    t._v(' and '),
                    e('code', [t._v('tooltip.animation')]),
                    t._v('. These keys are also '),
                    e(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/general/options.html#scriptable-options'
                        }
                      },
                      [t._v('Scriptable')]
                    ),
                    t._v('.')
                  ],
                  1
                ),
                t._v(' '),
                e('h2', { attrs: { id: 'animations-2' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#animations-2' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' animations')
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    'Animations options configures which element properties are animated and how.\nIn addition to the main '
                  ),
                  e('a', { attrs: { href: '#animation-configuration' } }, [
                    t._v('animation configuration')
                  ]),
                  t._v(', the following options are available:')
                ]),
                t._v(' '),
                e('p', [
                  t._v('Namespace: '),
                  e('code', [t._v('options.animations[animation]')])
                ]),
                t._v(' '),
                e('table', [
                  e('thead', [
                    e('tr', [
                      e('th', [t._v('Name')]),
                      t._v(' '),
                      e('th', [t._v('Type')]),
                      t._v(' '),
                      e('th', [t._v('Default')]),
                      t._v(' '),
                      e('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  e('tbody', [
                    e('tr', [
                      e('td', [e('code', [t._v('properties')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('string[]')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('key')])]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'The property names this configuration applies to. Defaults to the key name of this object.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('type')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('string')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('typeof property')])]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Type of property, determines the interpolator used. Possible values: '
                        ),
                        e('code', [t._v("'number'")]),
                        t._v(', '),
                        e('code', [t._v("'color'")]),
                        t._v(' and '),
                        e('code', [t._v("'boolean'")]),
                        t._v('. Only really needed for '),
                        e('code', [t._v("'color'")]),
                        t._v(', because '),
                        e('code', [t._v('typeof')]),
                        t._v(' does not get that right.')
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('from')])]),
                      t._v(' '),
                      e('td', [
                        e('code', [t._v('number')]),
                        t._v('|'),
                        e('code', [t._v('Color')]),
                        t._v('|'),
                        e('code', [t._v('boolean')])
                      ]),
                      t._v(' '),
                      e('td', [e('code', [t._v('undefined')])]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Start value for the animation. Current value is used when '
                        ),
                        e('code', [t._v('undefined')])
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('to')])]),
                      t._v(' '),
                      e('td', [
                        e('code', [t._v('number')]),
                        t._v('|'),
                        e('code', [t._v('Color')]),
                        t._v('|'),
                        e('code', [t._v('boolean')])
                      ]),
                      t._v(' '),
                      e('td', [e('code', [t._v('undefined')])]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'End value for the animation. Updated value is used when '
                        ),
                        e('code', [t._v('undefined')])
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('fn')])]),
                      t._v(' '),
                      e('td', [
                        e('code', [
                          t._v('<T>(from: T, to: T, factor: number) => T;')
                        ])
                      ]),
                      t._v(' '),
                      e('td', [e('code', [t._v('undefined')])]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Optional custom interpolator, instead of using a predefined interpolator from '
                        ),
                        e('code', [t._v('type')])
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                e('h3', { attrs: { id: 'default-animations' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#default-animations' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Default animations')
                ]),
                t._v(' '),
                e('table', [
                  e('thead', [
                    e('tr', [
                      e('th', [t._v('Name')]),
                      t._v(' '),
                      e('th', [t._v('Option')]),
                      t._v(' '),
                      e('th', [t._v('Value')])
                    ])
                  ]),
                  t._v(' '),
                  e('tbody', [
                    e('tr', [
                      e('td', [e('code', [t._v('numbers')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('properties')])]),
                      t._v(' '),
                      e('td', [
                        e('code', [
                          t._v("['x', 'y', 'borderWidth', 'radius', 'tension']")
                        ])
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('numbers')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('type')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v("'number'")])])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('colors')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('properties')])]),
                      t._v(' '),
                      e('td', [
                        e('code', [
                          t._v("['color', 'borderColor', 'backgroundColor']")
                        ])
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('colors')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('type')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v("'color'")])])
                    ])
                  ])
                ]),
                t._v(' '),
                e('div', { staticClass: 'custom-block tip' }, [
                  e('p', { staticClass: 'custom-block-title' }, [t._v('Note')]),
                  t._v(' '),
                  e('p', [
                    t._v(
                      'These default animations are overridden by most of the dataset controllers.'
                    )
                  ])
                ]),
                t._v(' '),
                e('h2', { attrs: { id: 'transitions' } }, [
                  e(
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
                e(
                  'p',
                  [
                    t._v('The core transitions are '),
                    e('code', [t._v("'active'")]),
                    t._v(', '),
                    e('code', [t._v("'hide'")]),
                    t._v(', '),
                    e('code', [t._v("'reset'")]),
                    t._v(', '),
                    e('code', [t._v("'resize'")]),
                    t._v(', '),
                    e('code', [t._v("'show'")]),
                    t._v(
                      '.\nA custom transition can be used by passing a custom '
                    ),
                    e('code', [t._v('mode')]),
                    t._v(' to '),
                    e(
                      'RouterLink',
                      { attrs: { to: '/developers/api.html#updatemode' } },
                      [t._v('update')]
                    ),
                    t._v('.\nTransition extends the main '),
                    e('a', { attrs: { href: '#animation-configuration' } }, [
                      t._v('animation configuration')
                    ]),
                    t._v(' and '),
                    e('a', { attrs: { href: '#animations-configuration' } }, [
                      t._v('animations configuration')
                    ]),
                    t._v('.')
                  ],
                  1
                ),
                t._v(' '),
                e('h3', { attrs: { id: 'default-transitions' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#default-transitions' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Default transitions')
                ]),
                t._v(' '),
                e('p', [
                  t._v('Namespace: '),
                  e('code', [t._v('options.transitions[mode]')])
                ]),
                t._v(' '),
                e('table', [
                  e('thead', [
                    e('tr', [
                      e('th', [t._v('Mode')]),
                      t._v(' '),
                      e('th', [t._v('Option')]),
                      t._v(' '),
                      e('th', [t._v('Value')]),
                      t._v(' '),
                      e('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  e('tbody', [
                    e('tr', [
                      e('td', [e('code', [t._v("'active'")])]),
                      t._v(' '),
                      e('td', [t._v('animation.duration')]),
                      t._v(' '),
                      e('td', [t._v('400')]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Override default duration to 400ms for hover animations'
                        )
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v("'resize'")])]),
                      t._v(' '),
                      e('td', [t._v('animation.duration')]),
                      t._v(' '),
                      e('td', [t._v('0')]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Override default duration to 0ms (= no animation) for resize'
                        )
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v("'show'")])]),
                      t._v(' '),
                      e('td', [t._v('animations.colors')]),
                      t._v(' '),
                      e('td', [
                        e('code', [
                          t._v(
                            "{ type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }"
                          )
                        ])
                      ]),
                      t._v(' '),
                      e(
                        'td',
                        [
                          t._v(
                            'Colors are faded in from transparent when dataset is shown using legend / '
                          ),
                          e(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/developers/api.html#showdatasetIndex'
                              }
                            },
                            [t._v('api')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v("'show'")])]),
                      t._v(' '),
                      e('td', [t._v('animations.visible')]),
                      t._v(' '),
                      e('td', [
                        e('code', [t._v("{ type: 'boolean', duration: 0 }")])
                      ]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Dataset visibility is immediately changed to true so the color transition from transparent is visible.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v("'hide'")])]),
                      t._v(' '),
                      e('td', [t._v('animations.colors')]),
                      t._v(' '),
                      e('td', [
                        e('code', [
                          t._v(
                            "{ type: 'color', properties: ['borderColor', 'backgroundColor'], to: 'transparent' }"
                          )
                        ])
                      ]),
                      t._v(' '),
                      e(
                        'td',
                        [
                          t._v(
                            'Colors are faded to transparent when dataset id hidden using legend / '
                          ),
                          e(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/developers/api.html#hidedatasetIndex'
                              }
                            },
                            [t._v('api')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v("'hide'")])]),
                      t._v(' '),
                      e('td', [t._v('animations.visible')]),
                      t._v(' '),
                      e('td', [
                        e('code', [
                          t._v("{ type: 'boolean', easing: 'easeInExpo' }")
                        ])
                      ]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Visibility is changed to false at a very late phase of animation'
                        )
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                e('h2', { attrs: { id: 'disabling-animation' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#disabling-animation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Disabling animation')
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    'To disable an animation configuration, the animation node must be set to '
                  ),
                  e('code', [t._v('false')]),
                  t._v(
                    ', with the exception for animation modes which can be disabled by setting the '
                  ),
                  e('code', [t._v('duration')]),
                  t._v(' to '),
                  e('code', [t._v('0')]),
                  t._v('.')
                ]),
                t._v(' '),
                e('div', { staticClass: 'language-javascript extra-class' }, [
                  e(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      e('code', [
                        t._v('chart'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('options'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('animation '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// disables all animations')]
                        ),
                        t._v('\nchart'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('options'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('animations'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('colors '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              "// disables animation defined by the collection of 'colors' properties"
                            )
                          ]
                        ),
                        t._v('\nchart'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('options'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('animations'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('x '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              "// disables animation defined by the 'x' property"
                            )
                          ]
                        ),
                        t._v('\nchart'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('options'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('transitions'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('active'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('animation'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('duration '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v("// disables the animation for 'active' mode")]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                e('h2', { attrs: { id: 'easing' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#easing' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Easing')
                ]),
                t._v(' '),
                e('p', [t._v('Available options are:')]),
                t._v(' '),
                e('ul', [
                  e('li', [e('code', [t._v("'linear'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInQuad'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutQuad'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutQuad'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInCubic'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutCubic'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutCubic'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInQuart'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutQuart'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutQuart'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInQuint'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutQuint'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutQuint'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInSine'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutSine'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutSine'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInExpo'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutExpo'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutExpo'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInCirc'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutCirc'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutCirc'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInElastic'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutElastic'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutElastic'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInBack'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutBack'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutBack'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInBounce'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeOutBounce'")])]),
                  t._v(' '),
                  e('li', [e('code', [t._v("'easeInOutBounce'")])])
                ]),
                t._v(' '),
                e('p', [
                  t._v('See '),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'http://robertpenner.com/easing/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      t._v("Robert Penner's easing equations"),
                      e('OutboundLink')
                    ],
                    1
                  ),
                  t._v('.')
                ]),
                t._v(' '),
                e('h2', { attrs: { id: 'animation-callbacks' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#animation-callbacks' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Animation Callbacks')
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    'The animation configuration provides callbacks which are useful for synchronizing an external draw to the chart animation.\nThe callbacks can be set only at main '
                  ),
                  e('a', { attrs: { href: '#animation-configuration' } }, [
                    t._v('animation configuration')
                  ]),
                  t._v('.')
                ]),
                t._v(' '),
                e('p', [
                  t._v('Namespace: '),
                  e('code', [t._v('options.animation')])
                ]),
                t._v(' '),
                e('table', [
                  e('thead', [
                    e('tr', [
                      e('th', [t._v('Name')]),
                      t._v(' '),
                      e('th', [t._v('Type')]),
                      t._v(' '),
                      e('th', [t._v('Default')]),
                      t._v(' '),
                      e('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  e('tbody', [
                    e('tr', [
                      e('td', [e('code', [t._v('onProgress')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('function')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('null')])]),
                      t._v(' '),
                      e('td', [
                        t._v('Callback called on each step of an animation.')
                      ])
                    ]),
                    t._v(' '),
                    e('tr', [
                      e('td', [e('code', [t._v('onComplete')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('function')])]),
                      t._v(' '),
                      e('td', [e('code', [t._v('null')])]),
                      t._v(' '),
                      e('td', [
                        t._v(
                          'Callback called when all animations are completed.'
                        )
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                e('p', [t._v('The callback is passed the following object:')]),
                t._v(' '),
                e('div', { staticClass: 'language-javascript extra-class' }, [
                  e(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      e('code', [
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n  '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Chart object')]
                        ),
                        t._v('\n  '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('chart')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' Chart'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n  '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// Number of animations still in progress')]
                        ),
                        t._v('\n  '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('currentStep')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n  '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// `true` for the initial animation of the chart'
                            )
                          ]
                        ),
                        t._v('\n  '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('initial')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' boolean'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n\n  '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// Total number of animations at the start of current animation'
                            )
                          ]
                        ),
                        t._v('\n  '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('numSteps')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' number'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                e('p', [
                  t._v(
                    'The following example fills a progress bar during the chart animation.'
                  )
                ]),
                t._v(' '),
                e('div', { staticClass: 'language-javascript extra-class' }, [
                  e(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      e('code', [
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' chart '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('animation')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        e(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('onProgress')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('animation')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                progress'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('value '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' animation'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('currentStep '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('/')]
                        ),
                        t._v(' animation'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('numSteps'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n            '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        e(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                e(
                  'p',
                  [
                    t._v(
                      'Another example usage of these callbacks can be found '
                    ),
                    e(
                      'RouterLink',
                      { attrs: { to: '/samples/advanced/progress-bar.html' } },
                      [t._v('in this progress bar sample.')]
                    ),
                    t._v(
                      ' which displays a progress bar showing how far along the animation is.'
                    )
                  ],
                  1
                )
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
      a.default = o.exports
    }
  }
])
