;(window.webpackJsonp = window.webpackJsonp || []).push([
  [178],
  {
    508: function (t, a, s) {
      'use strict'
      s.r(a)
      var e = s(6),
        n = Object(e.a)(
          {},
          function () {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: 'performance' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#performance' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Performance')
                ]),
                t._v(' '),
                s('p', [
                  t._v('Chart.js charts are rendered on '),
                  s('code', [t._v('canvas')]),
                  t._v(
                    ' elements, which makes rendering quite fast. For large datasets or performance sensitive applications, you may wish to consider the tips below.'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'data-structure-and-format' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#data-structure-and-format' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Data structure and format')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'parsing' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parsing' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Parsing')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v(
                      'Provide prepared data in the internal format accepted by the dataset and scales, and set '
                    ),
                    s('code', [t._v('parsing: false')]),
                    t._v('. See '),
                    s(
                      'RouterLink',
                      { attrs: { to: '/general/data-structures.html' } },
                      [t._v('Data structures')]
                    ),
                    t._v(' for more information.')
                  ],
                  1
                ),
                t._v(' '),
                s('h3', { attrs: { id: 'data-normalization' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#data-normalization' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Data normalization')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'Chart.js is fastest if you provide data with indices that are unique, sorted, and consistent across datasets and provide the '
                  ),
                  s('code', [t._v('normalized: true')]),
                  t._v(
                    ' option to let Chart.js know that you have done so. Even without this option, it can sometimes still be faster to provide sorted data.'
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'decimation' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#decimation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Decimation')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    "Decimating your data will achieve the best results. When there is a lot of data to display on the graph, it doesn't make sense to show tens of thousands of data points on a graph that is only a few hundred pixels wide."
                  )
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v('The '),
                    s(
                      'RouterLink',
                      { attrs: { to: '/configuration/decimation.html' } },
                      [t._v('decimation plugin')]
                    ),
                    t._v(
                      ' can be used with line charts to decimate data before the chart is rendered. This will provide the best performance since it will reduce the memory needed to render the chart.'
                    )
                  ],
                  1
                ),
                t._v(' '),
                s('p', [
                  t._v('Line charts are able to do '),
                  s(
                    'a',
                    {
                      attrs: { href: '#automatic-data-decimation-during-draw' }
                    },
                    [t._v('automatic data decimation during draw')]
                  ),
                  t._v(
                    ', when certain conditions are met. You should still consider decimating data yourself before passing it in for maximum performance since the automatic decimation occurs late in the chart life cycle.'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'tick-calculation' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#tick-calculation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Tick Calculation')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'rotation' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#rotation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Rotation')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    s(
                      'RouterLink',
                      { attrs: { to: '/axes/cartesian/#tick-configuration' } },
                      [t._v('Specify a rotation value')]
                    ),
                    t._v(' by setting '),
                    s('code', [t._v('minRotation')]),
                    t._v(' and '),
                    s('code', [t._v('maxRotation')]),
                    t._v(
                      ' to the same value, which avoids the chart from having to automatically determine a value to use.'
                    )
                  ],
                  1
                ),
                t._v(' '),
                s('h3', { attrs: { id: 'sampling' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#sampling' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Sampling')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v('Set the '),
                    s(
                      'RouterLink',
                      { attrs: { to: '/axes/cartesian/#tick-configuration' } },
                      [s('code', [t._v('ticks.sampleSize')])]
                    ),
                    t._v(
                      ' option. This will determine how large your labels are by looking at only a subset of them in order to render axes more quickly. This works best if there is not a large variance in the size of your labels.'
                    )
                  ],
                  1
                ),
                t._v(' '),
                s('h2', { attrs: { id: 'disable-animations' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#disable-animations' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Disable Animations')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'If your charts have long render times, it is a good idea to disable animations. Doing so will mean that the chart needs to only be rendered once during an update instead of multiple times. This will have the effect of reducing CPU usage and improving general page performance.\nLine charts use Path2D caching when animations are disabled and Path2D is available.'
                  )
                ]),
                t._v(' '),
                s('p', [t._v('To disable animations')]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('animation')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s('h2', { attrs: { id: 'specify-min-and-max-for-scales' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#specify-min-and-max-for-scales' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Specify '),
                  s('code', [t._v('min')]),
                  t._v(' and '),
                  s('code', [t._v('max')]),
                  t._v(' for scales')
                ]),
                t._v(' '),
                s('p', [
                  t._v('If you specify the '),
                  s('code', [t._v('min')]),
                  t._v(' and '),
                  s('code', [t._v('max')]),
                  t._v(
                    ', the scale does not have to compute the range from the data.'
                  )
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('scales')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('x')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'time'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('min')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Date')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'2019-01-01'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('valueOf')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('max')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Date')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'2019-12-31'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('valueOf')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('y')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'linear'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('min')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('max')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('100')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s(
                  'h2',
                  {
                    attrs: {
                      id: 'parallel-rendering-with-web-workers-chromium-only'
                    }
                  },
                  [
                    s(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#parallel-rendering-with-web-workers-chromium-only'
                        }
                      },
                      [t._v('#')]
                    ),
                    t._v(' Parallel rendering with web workers (Chromium only)')
                  ]
                ),
                t._v(' '),
                s('p', [
                  t._v(
                    'Chromium (Chrome: version 69, Edge: 79, Opera: 56) added the ability to '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      t._v('transfer rendering control of a canvas'),
                      s('OutboundLink')
                    ],
                    1
                  ),
                  t._v(' to a web worker. Web workers can use the '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('OffscreenCanvas API'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' to render from a web worker onto canvases in the DOM. Chart.js is a canvas-based library and supports rendering in a web worker - just pass an OffscreenCanvas into the Chart constructor instead of a Canvas element. Note that as of today, this API is only supported in Chromium based browsers.'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'By moving all Chart.js calculations onto a separate thread, the main thread can be freed up for other uses. Some tips and tricks when using Chart.js in a web worker:'
                  )
                ]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    t._v(
                      'Transferring data between threads can be expensive, so ensure that your config and data objects are as small as possible. Try generating them on the worker side if you can (workers can make HTTP requests!) or passing them to your worker as ArrayBuffers, which can be transferred quickly from one thread to another.'
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      "You can't transfer functions between threads, so if your config object includes functions you'll have to strip them out before transferring and then add them back later."
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      "You can't access the DOM from worker threads, so Chart.js plugins that use the DOM (including any mouse interactions) will likely not work."
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      'Ensure that you have a fallback if you support browsers other than the most modern Chromium browsers.'
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      'Resizing the chart must be done manually. See an example in the worker code below.'
                    )
                  ])
                ]),
                t._v(' '),
                s('p', [t._v('Example main thread code:')]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' config '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' canvas '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('HTMLCanvasElement')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' offscreenCanvas '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' canvas'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('transferControlToOffscreen')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' worker '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Worker')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'worker.js'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\nworker'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('postMessage')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('canvas')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' offscreenCanvas'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' config'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        t._v('offscreenCanvas'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s('p', [
                  t._v('Example worker code, in '),
                  s('code', [t._v('worker.js')]),
                  t._v(':')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token function-variable function' }
                          },
                          [t._v('onmessage')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('function')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token parameter' } },
                          [t._v('event')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('canvas'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' config'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' event'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('data'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('const')]
                        ),
                        t._v(' chart '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('canvas'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' config'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [
                            t._v(
                              '// Resizing the chart must be done manually, since OffscreenCanvas does not include event listeners.'
                            )
                          ]
                        ),
                        t._v('\n    canvas'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('width '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('100')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n    canvas'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        t._v('height '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('100')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n    chart'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('.')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token function' } },
                          [t._v('resize')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s('h2', { attrs: { id: 'line-charts' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#line-charts' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Line Charts')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'leave-bezier-curves-disabled' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#leave-bezier-curves-disabled' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Leave Bézier curves disabled')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'If you are drawing lines on your chart, disabling Bézier curves will improve render times since drawing a straight line is more performant than a Bézier curve. Bézier curves are disabled by default.'
                  )
                ]),
                t._v(' '),
                s(
                  'h3',
                  { attrs: { id: 'automatic-data-decimation-during-draw' } },
                  [
                    s(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#automatic-data-decimation-during-draw'
                        }
                      },
                      [t._v('#')]
                    ),
                    t._v(' Automatic data decimation during draw')
                  ]
                ),
                t._v(' '),
                s('p', [
                  t._v('Line element will automatically decimate data, when '),
                  s('code', [t._v('tension')]),
                  t._v(', '),
                  s('code', [t._v('stepped')]),
                  t._v(', and '),
                  s('code', [t._v('borderDash')]),
                  t._v(' are left set to their default values ('),
                  s('code', [t._v('false')]),
                  t._v(', '),
                  s('code', [t._v('0')]),
                  t._v(', and '),
                  s('code', [t._v('[]')]),
                  t._v(
                    ' respectively). This improves rendering speed by skipping drawing of invisible line segments.'
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'enable-spangaps' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#enable-spangaps' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Enable spanGaps')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'If you have a lot of data points, it can be more performant to enable '
                  ),
                  s('code', [t._v('spanGaps')]),
                  t._v(
                    '. This disables segmentation of the line, which can be an unneeded step.'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('To enable '),
                  s('code', [t._v('spanGaps')]),
                  t._v(':')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('datasets')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('spanGaps')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('true')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// enable for a single dataset')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('spanGaps')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('true')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// enable for all datasets')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s('h3', { attrs: { id: 'disable-line-drawing' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#disable-line-drawing' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Disable Line Drawing')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'If you have a lot of data points, it can be more performant to disable rendering of the line for a dataset and only draw points. Doing this means that there is less to draw on the canvas which will improve render performance.'
                  )
                ]),
                t._v(' '),
                s('p', [t._v('To disable lines:')]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('datasets')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('showLine')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// disable for a single dataset')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('showLine')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// disable for all datasets')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s('h3', { attrs: { id: 'disable-point-drawing' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#disable-point-drawing' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Disable Point Drawing')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'If you have a lot of data points, it can be more performant to disable rendering of the points for a dataset and only draw line. Doing this means that there is less to draw on the canvas which will improve render performance.'
                  )
                ]),
                t._v(' '),
                s('p', [t._v('To disable point drawing:')]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('datasets')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('pointRadius')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// disable for a single dataset')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('datasets')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('line')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('pointRadius')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v("// disable for all `'line'` datasets")]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('elements')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('point')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('radius')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('0')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token comment' } },
                          [t._v('// default to disabled in all datasets')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s(
                  'h2',
                  {
                    attrs: {
                      id: 'when-transpiling-with-babel-consider-using-loose-mode'
                    }
                  },
                  [
                    s(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#when-transpiling-with-babel-consider-using-loose-mode'
                        }
                      },
                      [t._v('#')]
                    ),
                    t._v(' When transpiling with Babel, consider using '),
                    s('code', [t._v('loose')]),
                    t._v(' mode')
                  ]
                ),
                t._v(' '),
                s('p', [
                  t._v(
                    'Babel 7.9 changed the way classes are constructed. It is slow, unless used with '
                  ),
                  s('code', [t._v('loose')]),
                  t._v(' mode.\n'),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/babel/babel/issues/11356',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('More information'), s('OutboundLink')],
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
      a.default = n.exports
    }
  }
])
