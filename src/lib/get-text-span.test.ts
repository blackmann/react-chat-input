import getTextSpan from './get-text-span'

test('getTextSpan', () => {
  const res = getTextSpan({
    cursor: 5,
    matchOptions: [{ lead: '@', regex: /[\w\d]+/ }],
    text: 'Hi @notgr world',
  })

  expect(res).toStrictEqual({ lead: '@', range: [3, 8], text: 'notgr' })

  const res2 = getTextSpan({
    cursor: 5,
    matchOptions: [{ lead: '@', regex: /\w+/ }],
    text: 'Hi@notgr world',
  })

  expect(res2).toStrictEqual(null)
})
