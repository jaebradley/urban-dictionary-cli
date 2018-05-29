import { formatSearchResults } from './searchResultsFormatter';

describe('searchResultsFormatter', () => {
  const result1 = {
    word: 'word1',
    definition: 'definition1',
    thumbs_down: 123,
    thumbs_up: 456,
  };

  const result2 = {
    word: 'word1',
    definition: 'definition\n1\r',
    thumbs_down: 123,
    thumbs_up: 456,
  };

  const expected1 = '\u001b[32m456\u001b[39m 👍  \u001b[31m123\u001b[39m 👎  (\u001b[3m79%\u001b[23m)  \u001b[33m\u001b[4m\u001b[1mword1\u001b[22m\u001b[24m\u001b[39m: \u001b[95m\u001b[1mdefinition1\u001b[22m\u001b[39m';

  it('formats single search result', () => {
    const formattedResult = formatSearchResults([result1]);
    expect(formattedResult).toEqual([expected1]);
  });

  it('formats multiple search results', () => {
    const formattedResult = formatSearchResults([result1, result1, result1]);
    expect(formattedResult).toEqual([expected1, expected1, expected1]);
  });

  it('formats definition with tabs and new lines', () => {
    const formattedResult = formatSearchResults([result2]);
    expect(formattedResult).toEqual([expected1]);
  });
});
