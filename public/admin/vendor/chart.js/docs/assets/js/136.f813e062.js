;(window.webpackJsonp = window.webpackJsonp || []).push([
  [136],
  {
    464: function (t, s, a) {
      'use strict'
      a.r(s)
      var e = a(6),
        r = Object(e.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'time-series-axis' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#time-series-axis' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Time Series Axis')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The time series scale extends from the time scale and supports all the same options. However, for the time series scale, each data point is spread equidistant.'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'example' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#example' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Example')
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
                          [t._v('scales')]
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
                          [t._v("'timeseries'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
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
                a('h2', { attrs: { id: 'more-details' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#more-details' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' More details')
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('Please see '),
                    a(
                      'RouterLink',
                      { attrs: { to: '/axes/cartesian/time.html' } },
                      [t._v('the time scale documentation')]
                    ),
                    t._v(' for all other details.')
                  ],
                  1
                )
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = r.exports
    }
  }
])
