;(window.webpackJsonp = window.webpackJsonp || []).push([
  [160],
  {
    489: function (e, t, o) {
      'use strict'
      o.r(t)
      var a = o(6),
        n = Object(a.a)(
          {},
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t
            return o(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': e.$parent.slotKey } },
              [
                o('h1', { attrs: { id: 'locale' } }, [
                  o(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#locale' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Locale')
                ]),
                e._v(' '),
                o('p', [
                  e._v(
                    'For applications where the numbers of ticks on scales must be formatted accordingly with a language sensitive number formatting, you can enable this kind of formatting by setting the '
                  ),
                  o('code', [e._v('locale')]),
                  e._v(' option.')
                ]),
                e._v(' '),
                o('p', [
                  e._v('The locale is a string that is a '),
                  o(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      e._v('Unicode BCP 47 locale identifier'),
                      o('OutboundLink')
                    ],
                    1
                  ),
                  e._v('.')
                ]),
                e._v(' '),
                o('p', [
                  e._v('A Unicode BCP 47 locale identifier consists of')
                ]),
                e._v(' '),
                o('ol', [
                  o('li', [e._v('a language code,')]),
                  e._v(' '),
                  o('li', [e._v('(optionally) a script code,')]),
                  e._v(' '),
                  o('li', [e._v('(optionally) a region (or country) code,')]),
                  e._v(' '),
                  o('li', [
                    e._v('(optionally) one or more variant codes, and')
                  ]),
                  e._v(' '),
                  o('li', [
                    e._v('(optionally) one or more extension sequences,')
                  ])
                ]),
                e._v(' '),
                o('p', [
                  e._v('with all present components separated by hyphens.')
                ]),
                e._v(' '),
                o('p', [
                  e._v(
                    'By default the chart is using the default locale of the platform which is running on.'
                  )
                ]),
                e._v(' '),
                o('h2', { attrs: { id: 'configuration-options' } }, [
                  o(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#configuration-options' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Configuration Options')
                ]),
                e._v(' '),
                o('p', [e._v('Namespace: '), o('code', [e._v('options')])]),
                e._v(' '),
                o('table', [
                  o('thead', [
                    o('tr', [
                      o('th', [e._v('Name')]),
                      e._v(' '),
                      o('th', [e._v('Type')]),
                      e._v(' '),
                      o('th', [e._v('Default')]),
                      e._v(' '),
                      o('th', [e._v('Description')])
                    ])
                  ]),
                  e._v(' '),
                  o('tbody', [
                    o('tr', [
                      o('td', [o('code', [e._v('locale')])]),
                      e._v(' '),
                      o('td', [o('code', [e._v('string')])]),
                      e._v(' '),
                      o('td', [o('code', [e._v('undefined')])]),
                      e._v(' '),
                      o('td', [
                        e._v(
                          'a string with a BCP 47 language tag, leveraging on '
                        ),
                        o(
                          'a',
                          {
                            attrs: {
                              href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [e._v('INTL NumberFormat'), o('OutboundLink')],
                          1
                        ),
                        e._v('.')
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
      t.default = n.exports
    }
  }
])
