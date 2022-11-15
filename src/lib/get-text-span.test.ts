import getTextSpan from './get-text-span'

const autoCompleteProfiles = [
  {
    filter: (option: string, keyword: string) =>
      option.toLowerCase().includes(keyword.toLocaleLowerCase()),
    matchRegex: /[\w\d]*/,
    name: 'mention',
    options: ['Not Gr', 'Jamestown', 'Janet Doe'],
    render: (option: string) => option,
    select: (option: string) => ({ text: option, value: option }),
    trigger: '@',
  },
]

test('getTextSpan', () => {
  const res = getTextSpan({
    autoCompleteProfiles,
    cursor: 5,
    text: 'Hi @notgr world',
  })

  expect(res).toStrictEqual({
    lead: '@',
    range: [3, 8],
    type: 'mention',
    typedText: 'notgr',
  })

  const res2 = getTextSpan({
    autoCompleteProfiles,
    cursor: 5,
    text: 'Hi@notgr world',
  })

  expect(res2).toStrictEqual(null)
})
