;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    389: function (t, e, a) {
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
                a('h1', { attrs: { id: 'interface-dateadapter' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#interface-dateadapter' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Interface: DateAdapter')
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
                a('h3', { attrs: { id: 'options' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#options' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' options')
                ]),
                t._v(' '),
                a('p', [
                  t._v('• '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('options')]),
                  t._v(': '),
                  a('code', [t._v('unknown')])
                ]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L8',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:8'), a('OutboundLink')],
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
                a('h3', { attrs: { id: 'add' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#add' } },
                    [t._v('#')]
                  ),
                  t._v(' add')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('add')]),
                  t._v('('),
                  a('code', [t._v('timestamp')]),
                  t._v(', '),
                  a('code', [t._v('amount')]),
                  t._v(', '),
                  a('code', [t._v('unit')]),
                  t._v('): '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Adds the specified '),
                  a('code', [t._v('amount')]),
                  t._v(' of '),
                  a('code', [t._v('unit')]),
                  t._v(' to the given '),
                  a('code', [t._v('timestamp')]),
                  t._v('.')
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
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Description')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('timestamp')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the input timestamp')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('amount')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the amount to add')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('unit')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('RouterLink', { attrs: { to: '/api/#timeunit' } }, [
                            a('code', [t._v('TimeUnit')])
                          ])
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the unit as string')
                      ])
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
                a('p', [a('code', [t._v('number')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L41',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:41'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'diff' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#diff' } },
                    [t._v('#')]
                  ),
                  t._v(' diff')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('diff')]),
                  t._v('('),
                  a('code', [t._v('a')]),
                  t._v(', '),
                  a('code', [t._v('b')]),
                  t._v(', '),
                  a('code', [t._v('unit')]),
                  t._v('): '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Returns the number of '),
                  a('code', [t._v('unit')]),
                  t._v(' between the given timestamps.')
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
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Description')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('a')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the input timestamp (reference)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('b')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the timestamp to subtract')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('unit')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('RouterLink', { attrs: { to: '/api/#timeunit' } }, [
                            a('code', [t._v('TimeUnit')])
                          ])
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the unit as string')
                      ])
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
                a('p', [a('code', [t._v('number')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L49',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:49'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'endof' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#endof' } },
                    [t._v('#')]
                  ),
                  t._v(' endOf')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('endOf')]),
                  t._v('('),
                  a('code', [t._v('timestamp')]),
                  t._v(', '),
                  a('code', [t._v('unit')]),
                  t._v('): '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Returns end of '),
                  a('code', [t._v('unit')]),
                  t._v(' for the given '),
                  a('code', [t._v('timestamp')]),
                  t._v('.')
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
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Description')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('timestamp')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the input timestamp')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('unit')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('RouterLink', { attrs: { to: '/api/#timeunit' } }, [
                            a('code', [t._v('TimeUnit')])
                          ]),
                          t._v(' | '),
                          a('code', [t._v('"isoWeek"')])
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the unit as string')
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
                a('p', [a('code', [t._v('number')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L65',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:65'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'format' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#format' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' format')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('format')]),
                  t._v('('),
                  a('code', [t._v('timestamp')]),
                  t._v(', '),
                  a('code', [t._v('format')]),
                  t._v('): '),
                  a('code', [t._v('string')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Returns the formatted date in the specified '),
                  a('code', [t._v('format')]),
                  t._v(' for a given '),
                  a('code', [t._v('timestamp')]),
                  t._v('.')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters-4' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters-4' }
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
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Description')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('timestamp')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the timestamp to format')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('format')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('RouterLink', { attrs: { to: '/api/#timeunit' } }, [
                            a('code', [t._v('TimeUnit')])
                          ])
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the date/time token')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-4' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-4' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('string')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L33',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:33'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'formats' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#formats' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' formats')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('formats')]),
                  t._v('(): '),
                  a('code', [t._v('Object')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    "Returns a map of time formats for the supported formatting units defined\nin Unit as well as 'datetime' representing a detailed date/time string."
                  )
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-5' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-5' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('Object')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L20',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:20'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'init' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#init' } },
                    [t._v('#')]
                  ),
                  t._v(' init')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('init')]),
                  t._v('('),
                  a('code', [t._v('chartOptions')]),
                  t._v('): '),
                  a('code', [t._v('void')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Will called with chart options after adapter creation.')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters-5' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters-5' }
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
                        a('code', [t._v('chartOptions')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('code', [t._v('_DeepPartialObject')]),
                          t._v('<'),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/CoreChartOptions.html'
                              }
                            },
                            [a('code', [t._v('CoreChartOptions')])]
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
                          t._v('> & '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/api/#elementchartoptions' } },
                            [a('code', [t._v('ElementChartOptions')])]
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
                          t._v('> & '),
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/api/interfaces/PluginChartOptions.html'
                              }
                            },
                            [a('code', [t._v('PluginChartOptions')])]
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
                          t._v('> & '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/api/#datasetchartoptions' } },
                            [a('code', [t._v('DatasetChartOptions')])]
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
                          t._v('> & '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/api/#scalechartoptions' } },
                            [a('code', [t._v('ScaleChartOptions')])]
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
                          t._v('>>')
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-6' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-6' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('void')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L14',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:14'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'override' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#override' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' override')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('override')]),
                  t._v('('),
                  a('code', [t._v('members')]),
                  t._v('): '),
                  a('code', [t._v('void')])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters-6' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters-6' }
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
                        a('code', [t._v('members')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('code', [t._v('Partial')]),
                          t._v('<'),
                          a(
                            'RouterLink',
                            {
                              attrs: { to: '/api/interfaces/DateAdapter.html' }
                            },
                            [a('code', [t._v('DateAdapter')])]
                          ),
                          t._v('>')
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-7' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-7' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('void')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L7',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:7'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'parse' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#parse' } },
                    [t._v('#')]
                  ),
                  t._v(' parse')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('parse')]),
                  t._v('('),
                  a('code', [t._v('value')]),
                  t._v(', '),
                  a('code', [t._v('format?')]),
                  t._v('): '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Parses the given '),
                  a('code', [t._v('value')]),
                  t._v(' and return the associated timestamp.')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters-7' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters-7' }
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
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Description')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('value')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('unknown')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the value to parse (usually comes from the data)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('format?')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('RouterLink', { attrs: { to: '/api/#timeunit' } }, [
                            a('code', [t._v('TimeUnit')])
                          ])
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('-')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-8' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-8' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('number')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L26',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:26'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: 'startof' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#startof' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' startOf')
                ]),
                t._v(' '),
                a('p', [
                  t._v('▸ '),
                  a('strong', [t._v('startOf')]),
                  t._v('('),
                  a('code', [t._v('timestamp')]),
                  t._v(', '),
                  a('code', [t._v('unit')]),
                  t._v(', '),
                  a('code', [t._v('weekday?')]),
                  t._v('): '),
                  a('code', [t._v('number')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('Returns start of '),
                  a('code', [t._v('unit')]),
                  t._v(' for the given '),
                  a('code', [t._v('timestamp')]),
                  t._v('.')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'parameters-8' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#parameters-8' }
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
                      ]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('Description')
                      ])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('timestamp')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the input timestamp')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('unit')])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        { staticStyle: { 'text-align': 'left' } },
                        [
                          a('RouterLink', { attrs: { to: '/api/#timeunit' } }, [
                            a('code', [t._v('TimeUnit')])
                          ]),
                          t._v(' | '),
                          a('code', [t._v('"isoWeek"')])
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('the unit as string')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('weekday?')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        a('code', [t._v('number')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'left' } }, [
                        t._v('-')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'returns-9' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#returns-9' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Returns')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('number')])]),
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
                        href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/adapters.d.ts#L58',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('adapters.d.ts:58'), a('OutboundLink')],
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
