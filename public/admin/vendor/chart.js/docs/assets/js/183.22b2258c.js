;(window.webpackJsonp = window.webpackJsonp || []).push([
  [183],
  {
    513: function (e, t, a) {
      'use strict'
      a.r(t)
      var o = a(6),
        s = Object(o.a)(
          {},
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': e.$parent.slotKey } },
              [
                a('h1', { attrs: { id: '_3-x-migration-guide' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#_3-x-migration-guide' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' 3.x Migration Guide')
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    "Chart.js 3.0 introduces a number of breaking changes. Chart.js 2.0 was released in April 2016. In the years since then, as Chart.js has grown in popularity and feature set, we've learned some lessons about how to better create a charting library. In order to improve performance, offer new features, and improve maintainability, it was necessary to break backwards compatibility, but we aimed to do so only when worth the benefit. Some major highlights of v3 include:"
                  )
                ]),
                e._v(' '),
                a('ul', [
                  a(
                    'li',
                    [
                      e._v('Large '),
                      a(
                        'RouterLink',
                        { attrs: { to: '/general/performance.html' } },
                        [e._v('performance')]
                      ),
                      e._v(
                        ' improvements including the ability to skip data parsing and render charts in parallel via webworkers'
                      )
                    ],
                    1
                  ),
                  e._v(' '),
                  a('li', [
                    e._v(
                      'Additional configurability and scriptable options with better defaults'
                    )
                  ]),
                  e._v(' '),
                  a('li', [e._v('Completely rewritten animation system')]),
                  e._v(' '),
                  a('li', [
                    e._v('Rewritten filler plugin with numerous bug fixes')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Documentation migrated from GitBook to Vuepress')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('API documentation generated and verified by TypeDoc')
                  ]),
                  e._v(' '),
                  a('li', [e._v('No more CSS injection')]),
                  e._v(' '),
                  a('li', [e._v('Tons of bug fixes')]),
                  e._v(' '),
                  a('li', [e._v('Tree shaking')])
                ]),
                e._v(' '),
                a('h2', { attrs: { id: 'end-user-migration' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#end-user-migration' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' End user migration')
                ]),
                e._v(' '),
                a('h3', { attrs: { id: 'setup-and-installation' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#setup-and-installation' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Setup and installation')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v(
                      'Distributed files are now in lower case. For example: '
                    ),
                    a('code', [e._v('dist/chart.js')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a(
                    'li',
                    [
                      e._v('Chart.js is no longer providing the '),
                      a('code', [e._v('Chart.bundle.js')]),
                      e._v(' and '),
                      a('code', [e._v('Chart.bundle.min.js')]),
                      e._v('. Please see the '),
                      a(
                        'RouterLink',
                        { attrs: { to: '/getting-started/installation.html' } },
                        [e._v('installation')]
                      ),
                      e._v(' and '),
                      a(
                        'RouterLink',
                        { attrs: { to: '/getting-started/integration.html' } },
                        [e._v('integration')]
                      ),
                      e._v(
                        ' docs for details on the recommended way to setup Chart.js if you were using these builds.'
                      )
                    ],
                    1
                  ),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('moment')]),
                    e._v(
                      ' is no longer specified as an npm dependency. If you are using the '
                    ),
                    a('code', [e._v('time')]),
                    e._v(' or '),
                    a('code', [e._v('timeseries')]),
                    e._v(' scales, you must include one of '),
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://github.com/chartjs/awesome#adapters',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [e._v('the available adapters'), a('OutboundLink')],
                      1
                    ),
                    e._v(
                      ' and corresponding date library. You no longer need to exclude moment from your build.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The '),
                    a('code', [e._v('Chart')]),
                    e._v(
                      ' constructor will throw an error if the canvas/context provided is already in use'
                    )
                  ]),
                  e._v(' '),
                  a(
                    'li',
                    [
                      e._v(
                        'Chart.js 3 is tree-shakeable. So if you are using it as an '
                      ),
                      a('code', [e._v('npm')]),
                      e._v(
                        ' module in a project and want to make use of this feature, you need to import and register the controllers, elements, scales and plugins you want to use, for a list of all the available items to import see '
                      ),
                      a(
                        'RouterLink',
                        {
                          attrs: {
                            to: '/getting-started/integration.html#bundlers-webpack-rollup-etc'
                          }
                        },
                        [e._v('integration')]
                      ),
                      e._v('. You will not have to call '),
                      a('code', [e._v('register')]),
                      e._v(' if importing Chart.js via a '),
                      a('code', [e._v('script')]),
                      e._v(' tag or from the '),
                      a(
                        'RouterLink',
                        {
                          attrs: {
                            to: '/getting-started/integration.html#bundlers-webpack-rollup-etc'
                          }
                        },
                        [a('code', [e._v('auto')])]
                      ),
                      e._v(' register path as an '),
                      a('code', [e._v('npm')]),
                      e._v(
                        ' module, in this case you will not get the tree shaking benefits. Here is an example of registering components:'
                      )
                    ],
                    1
                  )
                ]),
                e._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('import')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v(' Chart'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' LineController'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' LineElement'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' PointElement'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' LinearScale'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' Title '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('from')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token template-string' }
                          },
                          [
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token template-punctuation string'
                                }
                              },
                              [e._v('`')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [e._v('chart.js')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token template-punctuation string'
                                }
                              },
                              [e._v('`')]
                            )
                          ]
                        ),
                        e._v('\n\nChart'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [e._v('register')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('(')]
                        ),
                        e._v('LineController'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' LineElement'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' PointElement'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' LinearScale'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' Title'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(')')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(';')]
                        ),
                        e._v('\n\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('const')]
                        ),
                        e._v(' chart '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v('=')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('new')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [e._v('Chart')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('(')]
                        ),
                        e._v('ctx'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'line'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [e._v('// data: ...')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('plugins')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('title')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('text')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'Chart Title'")]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('scales')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('x')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'linear'")]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('y')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'linear'")]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(')')]
                        ),
                        e._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h3', { attrs: { id: 'chart-types' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#chart-types' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Chart types')
                ]),
                e._v(' '),
                a('ul', [
                  a(
                    'li',
                    [
                      a('code', [e._v('horizontalBar')]),
                      e._v(
                        ' chart type was removed. Horizontal bar charts can be configured using the new '
                      ),
                      a(
                        'RouterLink',
                        {
                          attrs: { to: '/charts/bar.html#horizontal-bar-chart' }
                        },
                        [a('code', [e._v('indexAxis')])]
                      ),
                      e._v(' option')
                    ],
                    1
                  )
                ]),
                e._v(' '),
                a('h3', { attrs: { id: 'options' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#options' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Options')
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    'A number of changes were made to the configuration options passed to the '
                  ),
                  a('code', [e._v('Chart')]),
                  e._v(' constructor. Those changes are documented below.')
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'generic-changes' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#generic-changes' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Generic changes')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v('Indexable options are now looping. '),
                    a('code', [e._v("backgroundColor: ['red', 'green']")]),
                    e._v(' will result in alternating '),
                    a('code', [e._v("'red'")]),
                    e._v(' / '),
                    a('code', [e._v("'green'")]),
                    e._v(' if there are more than 2 data points.')
                  ]),
                  e._v(' '),
                  a(
                    'li',
                    [
                      e._v(
                        'The input properties of object data can now be freely specified, see '
                      ),
                      a(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [e._v('data structures')]
                      ),
                      e._v(' for details.')
                    ],
                    1
                  ),
                  e._v(' '),
                  a('li', [
                    e._v(
                      'Most options are resolved utilizing proxies, instead of merging with defaults. In addition to easily enabling different resolution routes for different contexts, it allows using other resolved options in scriptable options.\n'
                    ),
                    a('ul', [
                      a('li', [
                        e._v(
                          'Options are by default scriptable and indexable, unless disabled for some reason.'
                        )
                      ]),
                      e._v(' '),
                      a('li', [
                        e._v(
                          'Scriptable options receive a option resolver as second parameter for accessing other options in same context.'
                        )
                      ]),
                      e._v(' '),
                      a(
                        'li',
                        [
                          e._v(
                            'Resolution falls to upper scopes, if no match is found earlier. See '
                          ),
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/options.html' } },
                            [e._v('options')]
                          ),
                          e._v(' for details.')
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'specific-changes' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#specific-changes' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Specific changes')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('elements.rectangle')]),
                    e._v(' is now '),
                    a('code', [e._v('elements.bar')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('hover.animationDuration')]),
                    e._v(' is now configured in '),
                    a('code', [e._v('animation.active.duration')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('responsiveAnimationDuration')]),
                    e._v(' is now configured in '),
                    a('code', [e._v('animation.resize.duration')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Polar area '),
                    a('code', [e._v('elements.arc.angle')]),
                    e._v(' is now configured in degrees instead of radians.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Polar area '),
                    a('code', [e._v('startAngle')]),
                    e._v(' option is now consistent with '),
                    a('code', [e._v('Radar')]),
                    e._v(
                      ', 0 is at top and value is in degrees. Default is changed from '
                    ),
                    a('code', [e._v('-½π')]),
                    e._v(' to  '),
                    a('code', [e._v('0')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Doughnut '),
                    a('code', [e._v('rotation')]),
                    e._v(
                      ' option is now in degrees and 0 is at top. Default is changed from '
                    ),
                    a('code', [e._v('-½π')]),
                    e._v(' to  '),
                    a('code', [e._v('0')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Doughnut '),
                    a('code', [e._v('circumference')]),
                    e._v(' option is now in degrees. Default is changed from '),
                    a('code', [e._v('2π')]),
                    e._v(' to '),
                    a('code', [e._v('360')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Doughnut '),
                    a('code', [e._v('cutoutPercentage')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('cutout')]),
                    e._v(
                      'and accepts pixels as number and percent as string ending with '
                    ),
                    a('code', [e._v('%')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scale')]),
                    e._v(' option was removed in favor of '),
                    a('code', [e._v('options.scales.r')]),
                    e._v(' (or any other scale id, with '),
                    a('code', [e._v("axis: 'r'")]),
                    e._v(')')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes')]),
                    e._v(
                      ' arrays were removed. Scales are now configured directly to '
                    ),
                    a('code', [e._v('options.scales')]),
                    e._v(' object with the object key being the scale Id.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.barPercentage')]),
                    e._v(' was moved to dataset option '),
                    a('code', [e._v('barPercentage')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.barThickness')]),
                    e._v(' was moved to dataset option '),
                    a('code', [e._v('barThickness')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.categoryPercentage')]),
                    e._v(' was moved to dataset option '),
                    a('code', [e._v('categoryPercentage')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.maxBarThickness')]),
                    e._v(' was moved to dataset option '),
                    a('code', [e._v('maxBarThickness')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.minBarLength')]),
                    e._v(' was moved to dataset option '),
                    a('code', [e._v('minBarLength')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.scaleLabel')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].title')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [
                      e._v('scales.[x/y]Axes.scaleLabel.labelString')
                    ]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].title.text')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.beginAtZero')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].beginAtZero')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.max')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].max')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.min')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].min')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.reverse')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].reverse')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.suggestedMax')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].suggestedMax')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.suggestedMin')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].suggestedMin')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.unitStepSize')]),
                    e._v(' was removed. Use '),
                    a('code', [e._v('scales[id].ticks.stepSize')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.ticks.userCallback')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].ticks.callback')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.time.format')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].time.parser')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.time.max')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].max')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.time.min')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('scales[id].min')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('scales.[x/y]Axes.zeroLine*')]),
                    e._v(
                      ' options of axes were removed. Use scriptable scale options instead.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The dataset option '),
                    a('code', [e._v('steppedLine')]),
                    e._v(' was removed. Use '),
                    a('code', [e._v('stepped')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The chart option '),
                    a('code', [e._v('showLines')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('showLine')]),
                    e._v(' to match the dataset option.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The chart option '),
                    a('code', [e._v('startAngle')]),
                    e._v(' was moved to '),
                    a('code', [e._v('radial')]),
                    e._v(' scale options.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v(
                      'To override the platform class used in a chart instance, pass '
                    ),
                    a('code', [e._v('platform: PlatformClass')]),
                    e._v(
                      ' in the config object. Note that the class should be passed, not an instance of the class.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('aspectRatio')]),
                    e._v(
                      ' defaults to 1 for doughnut, pie, polarArea, and radar charts'
                    )
                  ]),
                  e._v(' '),
                  a(
                    'li',
                    [
                      a('code', [e._v('TimeScale')]),
                      e._v(' does not read '),
                      a('code', [e._v('t')]),
                      e._v(
                        ' from object data by default anymore. The default property is '
                      ),
                      a('code', [e._v('x')]),
                      e._v(' or '),
                      a('code', [e._v('y')]),
                      e._v(', depending on the orientation. See '),
                      a(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [e._v('data structures')]
                      ),
                      e._v(' for details on how to change the default.')
                    ],
                    1
                  ),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('tooltips')]),
                    e._v(' namespace was renamed to '),
                    a('code', [e._v('tooltip')]),
                    e._v(' to match the plugin name')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('legend')]),
                    e._v(', '),
                    a('code', [e._v('title')]),
                    e._v(' and '),
                    a('code', [e._v('tooltip')]),
                    e._v(' namespaces were moved from '),
                    a('code', [e._v('options')]),
                    e._v(' to '),
                    a('code', [e._v('options.plugins')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('tooltips.custom')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('plugins.tooltip.external')])
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'defaults' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#defaults' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Defaults')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('global')]),
                    e._v(' namespace was removed from '),
                    a('code', [e._v('defaults')]),
                    e._v('. So '),
                    a('code', [e._v('Chart.defaults.global')]),
                    e._v(' is now '),
                    a('code', [e._v('Chart.defaults')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Dataset controller defaults were relocate to '),
                    a('code', [e._v('overrides')]),
                    e._v('. For example '),
                    a('code', [e._v('Chart.defaults.line')]),
                    e._v(' is now '),
                    a('code', [e._v('Chart.overrides.line')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('default')]),
                    e._v(' prefix was removed from defaults. For example '),
                    a('code', [e._v('Chart.defaults.global.defaultColor')]),
                    e._v(' is now '),
                    a('code', [e._v('Chart.defaults.color')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('defaultColor')]),
                    e._v(' was split to '),
                    a('code', [e._v('color')]),
                    e._v(', '),
                    a('code', [e._v('borderColor')]),
                    e._v(' and '),
                    a('code', [e._v('backgroundColor')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('defaultFontColor')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('color')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('defaultFontFamily')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('font.family')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('defaultFontSize')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('font.size')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('defaultFontStyle')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('font.style')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('defaultLineHeight')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('font.lineHeight')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v(
                      'Horizontal Bar default tooltip mode was changed from '
                    ),
                    a('code', [e._v("'index'")]),
                    e._v(' to '),
                    a('code', [e._v("'nearest'")]),
                    e._v(' to match vertical bar charts')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('legend')]),
                    e._v(', '),
                    a('code', [e._v('title')]),
                    e._v(' and '),
                    a('code', [e._v('tooltip')]),
                    e._v(' namespaces were moved from '),
                    a('code', [e._v('Chart.defaults')]),
                    e._v(' to '),
                    a('code', [e._v('Chart.defaults.plugins')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('elements.line.fill')]),
                    e._v(' default changed from '),
                    a('code', [e._v('true')]),
                    e._v(' to '),
                    a('code', [e._v('false')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Line charts no longer override the default '),
                    a('code', [e._v('interaction')]),
                    e._v(' mode. Default is changed from '),
                    a('code', [e._v("'index'")]),
                    e._v(' to '),
                    a('code', [e._v("'nearest'")]),
                    e._v('.')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'scales' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#scales' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Scales')
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    'The configuration options for scales is the largest change in v3. The '
                  ),
                  a('code', [e._v('xAxes')]),
                  e._v(' and '),
                  a('code', [e._v('yAxes')]),
                  e._v(
                    ' arrays were removed and axis options are individual scales now keyed by scale ID.'
                  )
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    "The v2 configuration below is shown with it's new v3 configuration"
                  )
                ]),
                e._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n  '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('scales')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('xAxes')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('id')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'x'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'time'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('title')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('text')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'Date'")]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('ticks')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('major')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n          '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('enabled')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [e._v('font')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [e._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(')')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n          '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('if')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('(')]
                        ),
                        e._v('context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('tick '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v('&&')]
                        ),
                        e._v(' context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('tick'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('major'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(')')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('return')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n              '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('weight')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'bold'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n              '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('color')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'#FF0000'")]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(';')]
                        ),
                        e._v('\n          '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('yAxes')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('id')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'y'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('title')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('text')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'value'")]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(']')]
                        ),
                        e._v('\n  '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n')
                      ])
                    ]
                  )
                ]),
                a('p', [e._v('And now, in v3:')]),
                e._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('options')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n  '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('scales')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('x')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('type')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'time'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('title')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('text')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'Date'")]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('ticks')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('major')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n          '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('enabled')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [e._v('color')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [e._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(')')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v('=>')]
                        ),
                        e._v(' context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('tick '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v('&&')]
                        ),
                        e._v(' context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('tick'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('major '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v('&&')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'#FF0000'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [e._v('font')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('function')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('(')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [e._v('context')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(')')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n          '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('if')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('(')]
                        ),
                        e._v('context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('tick '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v('&&')]
                        ),
                        e._v(' context'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('tick'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('.')]
                        ),
                        e._v('major'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(')')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [e._v('return')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n              '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('weight')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'bold'")]
                        ),
                        e._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(';')]
                        ),
                        e._v('\n          '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('y')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('title')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('{')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [e._v('true')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v(',')]
                        ),
                        e._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [e._v('text')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [e._v(':')]
                        ),
                        e._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [e._v("'value'")]
                        ),
                        e._v('\n      '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n  '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('}')]
                        ),
                        e._v('\n')
                      ])
                    ]
                  )
                ]),
                a('ul', [
                  a('li', [
                    e._v('The time scale option '),
                    a('code', [e._v("distribution: 'series'")]),
                    e._v(' was removed and a new scale type '),
                    a('code', [e._v('timeseries')]),
                    e._v(' was introduced in its place')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('In the time scale, '),
                    a('code', [e._v('autoSkip')]),
                    e._v(
                      ' is now enabled by default for consistency with the other scales'
                    )
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'animations' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#animations' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Animations')
                ]),
                e._v(' '),
                a(
                  'p',
                  [
                    e._v(
                      'Animation system was completely rewritten in Chart.js v3. Each property can now be animated separately. Please see '
                    ),
                    a(
                      'RouterLink',
                      { attrs: { to: '/configuration/animations.html' } },
                      [e._v('animations')]
                    ),
                    e._v(' docs for details.')
                  ],
                  1
                ),
                e._v(' '),
                a('h4', { attrs: { id: 'customizability' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#customizability' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Customizability')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('custom')]),
                    e._v(
                      ' attribute of elements was removed. Please use scriptable options'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The '),
                    a('code', [e._v('hover')]),
                    e._v(' property of scriptable options '),
                    a('code', [e._v('context')]),
                    e._v(' object was renamed to '),
                    a('code', [e._v('active')]),
                    e._v(' to align it with the datalabels plugin.')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'interactions' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#interactions' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Interactions')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v(
                      'To allow DRY configuration, a root options scope for common interaction options was added. '
                    ),
                    a('code', [e._v('options.hover')]),
                    e._v(' and '),
                    a('code', [e._v('options.plugins.tooltip')]),
                    e._v(' now both extend from '),
                    a('code', [e._v('options.interaction')]),
                    e._v('. Defaults are defined at '),
                    a('code', [e._v('defaults.interaction')]),
                    e._v(
                      ' level, so by default hover and tooltip interactions share the same mode etc.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('interactions')]),
                    e._v(
                      ' are now limited to the chart area + allowed overflow'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v("{mode: 'label'}")]),
                    e._v(' was replaced with '),
                    a('code', [e._v("{mode: 'index'}")])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v("{mode: 'single'}")]),
                    e._v(' was replaced with '),
                    a('code', [e._v("{mode: 'nearest', intersect: true}")])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v("modes['X-axis']")]),
                    e._v(' was replaced with '),
                    a('code', [e._v("{mode: 'index', intersect: false}")])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.onClick')]),
                    e._v(' is now limited to the chart area')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.onClick')]),
                    e._v(' and '),
                    a('code', [e._v('options.onHover')]),
                    e._v(' now receive the '),
                    a('code', [e._v('chart')]),
                    e._v(' instance as a 3rd argument')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.onHover')]),
                    e._v(' now receives a wrapped '),
                    a('code', [e._v('event')]),
                    e._v(
                      ' as the first parameter. The previous first parameter value is accessible via '
                    ),
                    a('code', [e._v('event.native')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.hover.onHover')]),
                    e._v(' was removed, use '),
                    a('code', [e._v('options.onHover')]),
                    e._v('.')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'ticks' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#ticks' } },
                    [e._v('#')]
                  ),
                  e._v(' Ticks')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('options.gridLines')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('options.grid')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.gridLines.offsetGridLines')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('options.grid.offset')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.gridLines.tickMarkLength')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('options.grid.tickLength')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.ticks.fixedStepSize')]),
                    e._v(' is no longer used. Use '),
                    a('code', [e._v('options.ticks.stepSize')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.ticks.major')]),
                    e._v(' and '),
                    a('code', [e._v('options.ticks.minor')]),
                    e._v(
                      ' were replaced with scriptable options for tick fonts.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Ticks.formatters.linear')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.Ticks.formatters.numeric')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('options.ticks.backdropPaddingX')]),
                    e._v(' and '),
                    a('code', [e._v('options.ticks.backdropPaddingY')]),
                    e._v(' were replaced with '),
                    a('code', [e._v('options.ticks.backdropPadding')]),
                    e._v(' in the radial linear scale.')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'tooltip' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tooltip' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Tooltip')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('xLabel')]),
                    e._v(' and '),
                    a('code', [e._v('yLabel')]),
                    e._v(' were removed. Please use '),
                    a('code', [e._v('label')]),
                    e._v(' and '),
                    a('code', [e._v('formattedValue')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The '),
                    a('code', [e._v('filter')]),
                    e._v(
                      ' option will now be passed additional parameters when called and should have the method signature '
                    ),
                    a('code', [
                      e._v('function(tooltipItem, index, tooltipItems, data)')
                    ])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The '),
                    a('code', [e._v('custom')]),
                    e._v(' callback now takes a context object that has '),
                    a('code', [e._v('tooltip')]),
                    e._v(' and '),
                    a('code', [e._v('chart')]),
                    e._v(' properties')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v(
                      'All properties of tooltip model related to the tooltip options have been moved to reside within the '
                    ),
                    a('code', [e._v('options')]),
                    e._v(' property.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The callbacks no longer are given a '),
                    a('code', [e._v('data')]),
                    e._v(
                      ' parameter. The tooltip item parameter contains the chart and dataset instead'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v("The tooltip item's "),
                    a('code', [e._v('index')]),
                    e._v(' parameter was renamed to '),
                    a('code', [e._v('dataIndex')]),
                    e._v(' and '),
                    a('code', [e._v('value')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('formattedValue')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The '),
                    a('code', [e._v('xPadding')]),
                    e._v(' and '),
                    a('code', [e._v('yPadding')]),
                    e._v(' options were merged into a single '),
                    a('code', [e._v('padding')]),
                    e._v(' object')
                  ])
                ]),
                e._v(' '),
                a('h2', { attrs: { id: 'developer-migration' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#developer-migration' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Developer migration')
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    'While the end-user migration for Chart.js 3 is fairly straight-forward, the developer migration can be more complicated. Please reach out for help in the #dev '
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://chartjs-slack.herokuapp.com/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [e._v('Slack'), a('OutboundLink')],
                    1
                  ),
                  e._v(' channel if tips on migrating would be helpful.')
                ]),
                e._v(' '),
                a('p', [e._v('Some of the biggest things that have changed:')]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v(
                      'There is a completely rewritten and more performant animation system.\n'
                    ),
                    a('ul', [
                      a('li', [
                        a('code', [e._v('Element._model')]),
                        e._v(' and '),
                        a('code', [e._v('Element._view')]),
                        e._v(
                          ' are no longer used and properties are now set directly on the elements. You will have to use the method '
                        ),
                        a('code', [e._v('getProps')]),
                        e._v(
                          ' to access these properties inside most methods such as '
                        ),
                        a('code', [e._v('inXRange')]),
                        e._v('/'),
                        a('code', [e._v('inYRange')]),
                        e._v(' and '),
                        a('code', [e._v('getCenterPoint')]),
                        e._v('. Please take a look at '),
                        a(
                          'a',
                          {
                            attrs: {
                              href: 'https://github.com/chartjs/Chart.js/tree/master/src/elements',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [
                            e._v('the Chart.js-provided elements'),
                            a('OutboundLink')
                          ],
                          1
                        ),
                        e._v(' for examples.')
                      ]),
                      e._v(' '),
                      a('li', [
                        e._v(
                          "When building the elements in a controller, it's now suggested to call "
                        ),
                        a('code', [e._v('updateElement')]),
                        e._v(
                          ' to provide the element properties. There are also methods such as '
                        ),
                        a('code', [e._v('getSharedOptions')]),
                        e._v(' and '),
                        a('code', [e._v('includeOptions')]),
                        e._v(
                          ' that have been added to skip redundant computation. Please take a look at '
                        ),
                        a(
                          'a',
                          {
                            attrs: {
                              href: 'https://github.com/chartjs/Chart.js/tree/master/src/controllers',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [
                            e._v('the Chart.js-provided controllers'),
                            a('OutboundLink')
                          ],
                          1
                        ),
                        e._v(' for examples.')
                      ])
                    ])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v(
                      'Scales introduced a new parsing API. This API takes user data and converts it into a more standard format. E.g. it allows users to provide numeric data as a '
                    ),
                    a('code', [e._v('string')]),
                    e._v(' and converts it to a '),
                    a('code', [e._v('number')]),
                    e._v(
                      " where necessary. Previously this was done on the fly as charts were rendered. Now it's done up front with the ability to skip it for better performance if users provide data in the correct format. If you're using standard data format like "
                    ),
                    a('code', [e._v('x')]),
                    e._v('/'),
                    a('code', [e._v('y')]),
                    e._v(
                      " you may not need to do anything. If you're using a custom data format you will have to override some of the parse methods in "
                    ),
                    a('code', [e._v('core.datasetController.js')]),
                    e._v('. An example can be found in '),
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://github.com/chartjs/chartjs-chart-financial',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [e._v('chartjs-chart-financial'), a('OutboundLink')],
                      1
                    ),
                    e._v(', which uses an '),
                    a('code', [e._v('{o, h, l, c}')]),
                    e._v(' data format.')
                  ])
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    'A few changes were made to controllers that are more straight-forward, but will affect all controllers:'
                  )
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v('Options:\n'),
                    a('ul', [
                      a('li', [
                        a('code', [e._v('global')]),
                        e._v(
                          ' was removed from the defaults namespace as it was unnecessary and sometimes inconsistent'
                        )
                      ]),
                      e._v(' '),
                      a('li', [
                        e._v(
                          'Dataset defaults are now under the chart type options instead of vice-versa. This was not able to be done when introduced in 2.x for backwards compatibility. Fixing it removes the biggest stumbling block that new chart developers encountered'
                        )
                      ]),
                      e._v(' '),
                      a('li', [
                        e._v(
                          'Scale default options need to be updated as described in the end user migration section (e.g. '
                        ),
                        a('code', [e._v('x')]),
                        e._v(' instead of '),
                        a('code', [e._v('xAxes')]),
                        e._v(' and '),
                        a('code', [e._v('y')]),
                        e._v(' instead of '),
                        a('code', [e._v('yAxes')]),
                        e._v(')')
                      ])
                    ])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('updateElement')]),
                    e._v(' was changed to '),
                    a('code', [e._v('updateElements')]),
                    e._v(
                      ' and has a new method signature as described below. This provides performance enhancements such as allowing easier reuse of computations that are common to all elements and reducing the number of function calls'
                    )
                  ])
                ]),
                e._v(' '),
                a('h3', { attrs: { id: 'removed' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removed' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removed')
                ]),
                e._v(' '),
                a('p', [
                  e._v('The following properties and methods were removed:')
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'removed-from-chart' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removed-from-chart' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removed from Chart')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [a('code', [e._v('Chart.animationService')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.active')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.borderWidth')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.chart.chart')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Bar')]),
                    e._v('. New charts are created via '),
                    a('code', [e._v('new Chart')]),
                    e._v(' and providing the appropriate '),
                    a('code', [e._v('type')]),
                    e._v(' parameter')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Bubble')]),
                    e._v('. New charts are created via '),
                    a('code', [e._v('new Chart')]),
                    e._v(' and providing the appropriate '),
                    a('code', [e._v('type')]),
                    e._v(' parameter')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.Chart')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.Controller')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Doughnut')]),
                    e._v('. New charts are created via '),
                    a('code', [e._v('new Chart')]),
                    e._v(' and providing the appropriate '),
                    a('code', [e._v('type')]),
                    e._v(' parameter')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.innerRadius')]),
                    e._v(
                      ' now lives on doughnut, pie, and polarArea controllers'
                    )
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.lastActive')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Legend')]),
                    e._v(' was moved to '),
                    a('code', [e._v('Chart.plugins.legend._element')]),
                    e._v(' and made private')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Line')]),
                    e._v('. New charts are created via '),
                    a('code', [e._v('new Chart')]),
                    e._v(' and providing the appropriate '),
                    a('code', [e._v('type')]),
                    e._v(' parameter')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.LinearScaleBase')]),
                    e._v(
                      ' now must be imported and cannot be accessed off the '
                    ),
                    a('code', [e._v('Chart')]),
                    e._v(' object')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.offsetX')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.offsetY')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.outerRadius')]),
                    e._v(
                      ' now lives on doughnut, pie, and polarArea controllers'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.plugins')]),
                    e._v(' was replaced with '),
                    a('code', [e._v('Chart.registry')]),
                    e._v('. Plugin defaults are now in '),
                    a('code', [e._v('Chart.defaults.plugins[id]')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.plugins.register')]),
                    e._v(' was replaced by '),
                    a('code', [e._v('Chart.register')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.PolarArea')]),
                    e._v('. New charts are created via '),
                    a('code', [e._v('new Chart')]),
                    e._v(' and providing the appropriate '),
                    a('code', [e._v('type')]),
                    e._v(' parameter')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.prototype.generateLegend')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.platform')]),
                    e._v('. It only contained '),
                    a('code', [e._v('disableCSSInjection')]),
                    e._v('. CSS is never injected in v3.')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.PluginBase')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Radar')]),
                    e._v('. New charts are created via '),
                    a('code', [e._v('new Chart')]),
                    e._v(' and providing the appropriate '),
                    a('code', [e._v('type')]),
                    e._v(' parameter')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.radiusLength')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.scaleService')]),
                    e._v(' was replaced with '),
                    a('code', [e._v('Chart.registry')]),
                    e._v('. Scale defaults are now in '),
                    a('code', [e._v('Chart.defaults.scales[type]')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Scatter')]),
                    e._v('. New charts are created via '),
                    a('code', [e._v('new Chart')]),
                    e._v(' and providing the appropriate '),
                    a('code', [e._v('type')]),
                    e._v(' parameter')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart.types')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Title')]),
                    e._v(' was moved to '),
                    a('code', [e._v('Chart.plugins.title._element')]),
                    e._v(' and made private')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Tooltip')]),
                    e._v(
                      ' is now provided by the tooltip plugin. The positioners can be accessed from '
                    ),
                    a('code', [e._v('tooltipPlugin.positioners')])
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('ILayoutItem.minSize')])])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'removed-from-dataset-controllers' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removed-from-dataset-controllers' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removed from Dataset Controllers')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('BarController.getDatasetMeta().bar')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.addElementAndReset')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.createMetaData')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.createMetaDataset')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DoughnutController.getRingIndex')])
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'removed-from-elements' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removed-from-elements' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removed from Elements')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [a('code', [e._v('Element.getArea')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Element.height')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Element.hidden')]),
                    e._v(' was replaced by chart level status, usable with '),
                    a('code', [e._v('getDataVisibility(index)')]),
                    e._v(' / '),
                    a('code', [e._v('toggleDataVisibility(index)')])
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Element.initialize')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Element.inLabelRange')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Line.calculatePointY')])])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'removed-from-helpers' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removed-from-helpers' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removed from Helpers')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [a('code', [e._v('helpers.addEvent')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.aliasPixel')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.arrayEquals')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.configMerge')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.findIndex')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.findNextWhere')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.findPreviousWhere')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.extend')]),
                    e._v('. Use '),
                    a('code', [e._v('Object.assign')]),
                    e._v(' instead')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.getValueAtIndexOrDefault')]),
                    e._v('. Use '),
                    a('code', [e._v('helpers.resolve')]),
                    e._v(' instead.')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.indexOf')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.lineTo')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.longestText')]),
                    e._v(' was made private')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.max')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.measureText')]),
                    e._v(' was made private')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.min')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.nextItem')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.niceNum')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.numberOfLabelLines')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.previousItem')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.removeEvent')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.roundedRect')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.scaleMerge')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('helpers.where')])])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'removed-from-layout' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removed-from-layout' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removed from Layout')
                ]),
                e._v(' '),
                a('ul', [a('li', [a('code', [e._v('Layout.defaults')])])]),
                e._v(' '),
                a('h4', { attrs: { id: 'removed-from-scales' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removed-from-scales' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removed from Scales')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [
                      e._v('LinearScaleBase.handleDirectionalChanges')
                    ])
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('LogarithmicScale.minNotZero')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Scale.getRightValue')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Scale.longestLabelWidth')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.longestTextCache')]),
                    e._v(' is now private')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.margins')]),
                    e._v(' is now private')
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Scale.mergeTicksOptions')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Scale.ticksAsNumbers')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.tickValues')]),
                    e._v(' is now private')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('TimeScale.getLabelCapacity')]),
                    e._v(' is now private')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('TimeScale.tickFormatFunction')]),
                    e._v(' is now private')
                  ])
                ]),
                e._v(' '),
                a(
                  'h4',
                  {
                    attrs: {
                      id: 'removed-from-plugins-legend-title-and-tooltip'
                    }
                  },
                  [
                    a(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#removed-from-plugins-legend-title-and-tooltip'
                        }
                      },
                      [e._v('#')]
                    ),
                    e._v(' Removed from Plugins (Legend, Title, and Tooltip)')
                  ]
                ),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('IPlugin.afterScaleUpdate')]),
                    e._v('. Use '),
                    a('code', [e._v('afterLayout')]),
                    e._v(' instead')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Legend.margins')]),
                    e._v(' is now private')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Legend '),
                    a('code', [e._v('onClick')]),
                    e._v(', '),
                    a('code', [e._v('onHover')]),
                    e._v(', and '),
                    a('code', [e._v('onLeave')]),
                    e._v(
                      ' options now receive the legend as the 3rd argument in addition to implicitly via '
                    ),
                    a('code', [e._v('this')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Legend '),
                    a('code', [e._v('onClick')]),
                    e._v(', '),
                    a('code', [e._v('onHover')]),
                    e._v(', and '),
                    a('code', [e._v('onLeave')]),
                    e._v(' options now receive a wrapped '),
                    a('code', [e._v('event')]),
                    e._v(
                      ' as the first parameter. The previous first parameter value is accessible via '
                    ),
                    a('code', [e._v('event.native')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Title.margins')]),
                    e._v(' is now private')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v("The tooltip item's "),
                    a('code', [e._v('x')]),
                    e._v(' and '),
                    a('code', [e._v('y')]),
                    e._v(' attributes were replaced by '),
                    a('code', [e._v('element')]),
                    e._v('. You can use '),
                    a('code', [e._v('element.x')]),
                    e._v(' and '),
                    a('code', [e._v('element.y')]),
                    e._v(' or '),
                    a('code', [e._v('element.tooltipPosition()')]),
                    e._v(' instead.')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'removal-of-public-apis' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removal-of-public-apis' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removal of Public APIs')
                ]),
                e._v(' '),
                a('p', [e._v('The following public APIs were removed.')]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('getElementAtEvent')]),
                    e._v(' is replaced with '),
                    a('code', [
                      e._v(
                        "chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)"
                      )
                    ])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('getElementsAtEvent')]),
                    e._v(' is replaced with '),
                    a('code', [
                      e._v(
                        "chart.getElementsAtEventForMode(e, 'index', { intersect: true }, false)"
                      )
                    ])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('getElementsAtXAxis')]),
                    e._v(' is replaced with '),
                    a('code', [
                      e._v(
                        "chart.getElementsAtEventForMode(e, 'index', { intersect: false }, false)"
                      )
                    ])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('getDatasetAtEvent')]),
                    e._v(' is replaced with '),
                    a('code', [
                      e._v(
                        "chart.getElementsAtEventForMode(e, 'dataset', { intersect: true }, false)"
                      )
                    ])
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'removal-of-private-apis' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#removal-of-private-apis' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Removal of private APIs')
                ]),
                e._v(' '),
                a('p', [e._v('The following private APIs were removed.')]),
                e._v(' '),
                a('ul', [
                  a('li', [a('code', [e._v('Chart._bufferedRender')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Chart._updating')])]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.data.datasets[datasetIndex]._meta')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController._getIndexScaleId')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController._getIndexScale')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController._getValueScaleId')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController._getValueScale')])
                  ]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Element._ctx')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Element._model')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Element._view')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('LogarithmicScale._valueOffset')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('TimeScale.getPixelForOffset')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('TimeScale.getLabelWidth')])]),
                  e._v(' '),
                  a('li', [a('code', [e._v('Tooltip._lastActive')])])
                ]),
                e._v(' '),
                a('h3', { attrs: { id: 'renamed' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#renamed' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Renamed')
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    'The following properties were renamed during v3 development:'
                  )
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('Chart.Animation.animationObject')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.Animation')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.Animation.chartInstance')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.Animation.chart')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.canvasHelpers')]),
                    e._v(' was merged with '),
                    a('code', [e._v('Chart.helpers')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.elements.Arc')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.elements.ArcElement')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.elements.Line')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.elements.LineElement')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.elements.Point')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.elements.PointElement')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.elements.Rectangle')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.elements.BarElement')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.layoutService')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.layouts')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.pluginService')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart.plugins')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.callCallback')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('helpers.callback')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.drawRoundedRectangle')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('helpers.roundedRect')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.getValueOrDefault')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('helpers.valueOrDefault')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('LayoutItem.fullWidth')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('LayoutItem.fullSize')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Point.controlPointPreviousX')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Point.cp1x')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Point.controlPointPreviousY')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Point.cp1y')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Point.controlPointNextX')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Point.cp2x')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Point.controlPointNextY')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Point.cp2y')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.calculateTickRotation')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Scale.calculateLabelRotation')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Tooltip.options.legendColorBackgroupd')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Tooltip.options.multiKeyBackground')])
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'renamed-private-apis' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#renamed-private-apis' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Renamed private APIs')
                ]),
                e._v(' '),
                a('p', [e._v('The private APIs listed below were renamed:')]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('BarController.calculateBarIndexPixels')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('BarController._calculateBarIndexPixels')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('BarController.calculateBarValuePixels')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('BarController._calculateBarValuePixels')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('BarController.getStackCount')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('BarController._getStackCount')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('BarController.getStackIndex')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('BarController._getStackIndex')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('BarController.getRuler')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('BarController._getRuler')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.destroyDatasetMeta')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._destroyDatasetMeta')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.drawDataset')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._drawDataset')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.drawDatasets')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._drawDatasets')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.eventHandler')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._eventHandler')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.handleEvent')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._handleEvent')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.initialize')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._initialize')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.resetElements')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._resetElements')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.unbindEvents')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._unbindEvents')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.updateDataset')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._updateDataset')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.updateDatasets')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._updateDatasets')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.updateLayout')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Chart._updateLayout')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.destroy')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._destroy')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.insertElements')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._insertElements')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.onDataPop')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._onDataPop')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.onDataPush')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._onDataPush')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.onDataShift')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._onDataShift')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.onDataSplice')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._onDataSplice')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.onDataUnshift')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._onDataUnshift')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.removeElements')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._removeElements')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('DatasetController.resyncElements')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('DatasetController._resyncElements')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('LayoutItem.isFullWidth')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('LayoutItem.isFullSize')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('RadialLinearScale.setReductions')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('RadialLinearScale._setReductions')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('RadialLinearScale.pointLabels')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('RadialLinearScale._pointLabels')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.handleMargins')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('Scale._handleMargins')])
                  ])
                ]),
                e._v(' '),
                a('h3', { attrs: { id: 'changed' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed')
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    'The APIs listed in this section have changed in signature or behaviour from version 2.'
                  )
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'changed-in-scales' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-scales' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Scales')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('Scale.getLabelForIndex')]),
                    e._v(' was replaced by '),
                    a('code', [e._v('scale.getLabelForValue')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.getPixelForValue')]),
                    e._v(' now only requires one parameter. For the '),
                    a('code', [e._v('TimeScale')]),
                    e._v(
                      ' that parameter must be millis since the epoch. As a performance optimization, it may take an optional second parameter, giving the index of the data point.'
                    )
                  ])
                ]),
                e._v(' '),
                a('h5', { attrs: { id: 'changed-in-ticks' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-ticks' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Ticks')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('Scale.afterBuildTicks')]),
                    e._v(' now has no parameters like the other callbacks')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.buildTicks')]),
                    e._v(' is now expected to return tick objects')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.convertTicksToLabels')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('generateTickLabels')]),
                    e._v(
                      '. It is now expected to set the label property on the ticks given as input'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Scale.ticks')]),
                    e._v(' now contains objects instead of strings')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('When the '),
                    a('code', [e._v('autoSkip')]),
                    e._v(' option is enabled, '),
                    a('code', [e._v('Scale.ticks')]),
                    e._v(
                      ' now contains only the non-skipped ticks instead of all ticks.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v(
                      'Ticks are now always generated in monotonically increasing order'
                    )
                  ])
                ]),
                e._v(' '),
                a('h5', { attrs: { id: 'changed-in-time-scale' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-time-scale' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Time Scale')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('getValueForPixel')]),
                    e._v(' now returns milliseconds since the epoch')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'changed-in-controllers' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-controllers' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Controllers')
                ]),
                e._v(' '),
                a('h5', { attrs: { id: 'core-controller' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#core-controller' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Core Controller')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v('The first parameter to '),
                    a('code', [e._v('updateHoverStyle')]),
                    e._v(' is now an array of objects containing the '),
                    a('code', [e._v('element')]),
                    e._v(', '),
                    a('code', [e._v('datasetIndex')]),
                    e._v(', and '),
                    a('code', [e._v('index')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('The signature or '),
                    a('code', [e._v('resize')]),
                    e._v(' changed, the first '),
                    a('code', [e._v('silent')]),
                    e._v(' parameter was removed.')
                  ])
                ]),
                e._v(' '),
                a('h5', { attrs: { id: 'dataset-controllers' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#dataset-controllers' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Dataset Controllers')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('updateElement')]),
                    e._v(' was replaced with '),
                    a('code', [e._v('updateElements')]),
                    e._v(' now taking the elements to update, the '),
                    a('code', [e._v('start')]),
                    e._v(' index, '),
                    a('code', [e._v('count')]),
                    e._v(', and '),
                    a('code', [e._v('mode')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('setHoverStyle')]),
                    e._v(' and '),
                    a('code', [e._v('removeHoverStyle')]),
                    e._v(' now additionally take the '),
                    a('code', [e._v('datasetIndex')]),
                    e._v(' and '),
                    a('code', [e._v('index')])
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'changed-in-interactions' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-interactions' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Interactions')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v(
                      'Interaction mode methods now return an array of objects containing the '
                    ),
                    a('code', [e._v('element')]),
                    e._v(', '),
                    a('code', [e._v('datasetIndex')]),
                    e._v(', and '),
                    a('code', [e._v('index')])
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'changed-in-layout' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-layout' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Layout')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('ILayoutItem.update')]),
                    e._v(' no longer has a return value')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'changed-in-helpers' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-helpers' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Helpers')
                ]),
                e._v(' '),
                a('p', [
                  e._v(
                    'All helpers are now exposed in a flat hierarchy, e.g., '
                  ),
                  a('code', [e._v('Chart.helpers.canvas.clipArea')]),
                  e._v(' -> '),
                  a('code', [e._v('Chart.helpers.clipArea')])
                ]),
                e._v(' '),
                a('h5', { attrs: { id: 'canvas-helper' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#canvas-helper' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Canvas Helper')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v('The second parameter to '),
                    a('code', [e._v('drawPoint')]),
                    e._v(' is now the full options object, so '),
                    a('code', [e._v('style')]),
                    e._v(', '),
                    a('code', [e._v('rotation')]),
                    e._v(', and '),
                    a('code', [e._v('radius')]),
                    e._v(' are no longer passed explicitly')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.getMaximumHeight')]),
                    e._v(' was replaced by '),
                    a('code', [e._v('helpers.dom.getMaximumSize')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.getMaximumWidth')]),
                    e._v(' was replaced by '),
                    a('code', [e._v('helpers.dom.getMaximumSize')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.clear')]),
                    e._v(' was renamed to '),
                    a('code', [e._v('helpers.clearCanvas')]),
                    e._v(' and now takes '),
                    a('code', [e._v('canvas')]),
                    e._v(' and optionally '),
                    a('code', [e._v('ctx')]),
                    e._v(' as parameter(s).')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('helpers.retinaScale')]),
                    e._v(' accepts optional third parameter '),
                    a('code', [e._v('forceStyle')]),
                    e._v(', which forces overriding current canvas style. '),
                    a('code', [e._v('forceRatio')]),
                    e._v(' no longer falls back to '),
                    a('code', [e._v('window.devicePixelRatio')]),
                    e._v(', instead it defaults to '),
                    a('code', [e._v('1')]),
                    e._v('.')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'changed-in-platform' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-platform' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in Platform')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [e._v('Chart.platform')]),
                    e._v(
                      ' is no longer the platform object used by charts. Every chart instance now has a separate platform instance.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('Chart.platforms')]),
                    e._v(
                      ' is an object that contains two usable platform classes, '
                    ),
                    a('code', [e._v('BasicPlatform')]),
                    e._v(' and '),
                    a('code', [e._v('DomPlatform')]),
                    e._v('. It also contains '),
                    a('code', [e._v('BasePlatform')]),
                    e._v(', a class that all platforms must extend from.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('If the canvas passed in is an instance of '),
                    a('code', [e._v('OffscreenCanvas')]),
                    e._v(', the '),
                    a('code', [e._v('BasicPlatform')]),
                    e._v(' is automatically used.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('isAttached')]),
                    e._v(' method was added to platform.')
                  ])
                ]),
                e._v(' '),
                a('h4', { attrs: { id: 'changed-in-iplugin-interface' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#changed-in-iplugin-interface' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Changed in IPlugin interface')
                ]),
                e._v(' '),
                a('ul', [
                  a('li', [
                    e._v(
                      'All plugin hooks have unified signature with 3 arguments: '
                    ),
                    a('code', [e._v('chart')]),
                    e._v(', '),
                    a('code', [e._v('args')]),
                    e._v(' and '),
                    a('code', [e._v('options')]),
                    e._v('. This means change in signature for these hooks: '),
                    a('code', [e._v('beforeInit')]),
                    e._v(', '),
                    a('code', [e._v('afterInit')]),
                    e._v(', '),
                    a('code', [e._v('reset')]),
                    e._v(', '),
                    a('code', [e._v('beforeLayout')]),
                    e._v(', '),
                    a('code', [e._v('afterLayout')]),
                    e._v(', '),
                    a('code', [e._v('beforeRender')]),
                    e._v(', '),
                    a('code', [e._v('afterRender')]),
                    e._v(', '),
                    a('code', [e._v('beforeDraw')]),
                    e._v(', '),
                    a('code', [e._v('afterDraw')]),
                    e._v(', '),
                    a('code', [e._v('beforeDatasetsDraw')]),
                    e._v(', '),
                    a('code', [e._v('afterDatasetsDraw')]),
                    e._v(', '),
                    a('code', [e._v('beforeEvent')]),
                    e._v(', '),
                    a('code', [e._v('afterEvent')]),
                    e._v(', '),
                    a('code', [e._v('resize')]),
                    e._v(', '),
                    a('code', [e._v('destroy')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('afterDatasetsUpdate')]),
                    e._v(', '),
                    a('code', [e._v('afterUpdate')]),
                    e._v(', '),
                    a('code', [e._v('beforeDatasetsUpdate')]),
                    e._v(', and '),
                    a('code', [e._v('beforeUpdate')]),
                    e._v(' now receive '),
                    a('code', [e._v('args')]),
                    e._v(' object as second argument. '),
                    a('code', [e._v('options')]),
                    e._v(
                      ' argument is always the last and thus was moved from 2nd to 3rd place.'
                    )
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('afterEvent')]),
                    e._v(' and '),
                    a('code', [e._v('beforeEvent')]),
                    e._v(' now receive a wrapped '),
                    a('code', [e._v('event')]),
                    e._v(' as the '),
                    a('code', [e._v('event')]),
                    e._v(
                      ' property of the second argument. The native event is available via '
                    ),
                    a('code', [e._v('args.event.native')]),
                    e._v('.')
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('Initial '),
                    a('code', [e._v('resize')]),
                    e._v(' is no longer silent. Meaning that '),
                    a('code', [e._v('resize')]),
                    e._v(' event can fire between '),
                    a('code', [e._v('beforeInit')]),
                    e._v(' and '),
                    a('code', [e._v('afterInit')])
                  ]),
                  e._v(' '),
                  a('li', [
                    e._v('New hooks: '),
                    a('code', [e._v('install')]),
                    e._v(', '),
                    a('code', [e._v('start')]),
                    e._v(', '),
                    a('code', [e._v('stop')]),
                    e._v(', and '),
                    a('code', [e._v('uninstall')])
                  ]),
                  e._v(' '),
                  a('li', [
                    a('code', [e._v('afterEvent')]),
                    e._v(
                      ' should notify about changes that need a render by setting '
                    ),
                    a('code', [e._v('args.changed')]),
                    e._v(' to true. Because the '),
                    a('code', [e._v('args')]),
                    e._v(
                      ' are shared with all plugins, it should only be set to true and not false.'
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
      t.default = s.exports
    }
  }
])
