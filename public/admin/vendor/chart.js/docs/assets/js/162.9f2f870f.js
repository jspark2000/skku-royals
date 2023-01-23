;(window.webpackJsonp = window.webpackJsonp || []).push([
  [162],
  {
    491: function (t, a, s) {
      'use strict'
      s.r(a)
      var e = s(6),
        r = Object(e.a)(
          {},
          function () {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: 'subtitle' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#subtitle' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Subtitle')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v(
                      'Subtitle is a second title placed under the main title, by default. It has exactly the same configuration options with the main '
                    ),
                    s(
                      'RouterLink',
                      { attrs: { to: '/configuration/title.html' } },
                      [t._v('title')]
                    ),
                    t._v('.')
                  ],
                  1
                ),
                t._v(' '),
                s('h2', { attrs: { id: 'subtitle-configuration' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#subtitle-configuration' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Subtitle Configuration')
                ]),
                t._v(' '),
                s('p', [
                  t._v('Namespace: '),
                  s('code', [t._v('options.plugins.subtitle')]),
                  t._v('. The global defaults for subtitle are configured in '),
                  s('code', [t._v('Chart.defaults.plugins.subtitle')]),
                  t._v('.')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v('Exactly the same configuration options with '),
                    s(
                      'RouterLink',
                      { attrs: { to: '/configuration/title.html' } },
                      [t._v('title')]
                    ),
                    t._v(
                      ' are available for subtitle, the namespaces only differ.'
                    )
                  ],
                  1
                ),
                t._v(' '),
                s('h2', { attrs: { id: 'example-usage' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#example-usage' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Example Usage')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    "The example below would enable a title of 'Custom Chart Subtitle' on the chart that is created."
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
                          [t._v('plugins')]
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
                          [t._v('subtitle')]
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
                          [t._v('display')]
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
                          [t._v('text')]
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
                          [t._v("'Custom Chart Subtitle'")]
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
      a.default = r.exports
    }
  }
])
