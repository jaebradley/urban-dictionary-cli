import chalk from 'chalk';

const formatThumbsUpPercentage = ({ thumbsUp, thumbsDown }) => (
  chalk.italic(`${Math.round((thumbsUp / (thumbsUp + thumbsDown)) * 100)}%`)
);

const formatWord = (word) => (
  chalk.yellow.underline.bold(word)
);

const formatDefinition = (definition) => (
  chalk.magentaBright.bold(definition.replace(/\r?\n?/g, '').trim())
);

const formatThumbsUpCount = (count) => (
  chalk.green(count)
);

const formatThumbsDownCount = (count) => (
  chalk.red(count)
);

const formatSearchResult = (result) => {
  const { word, definition } = result;
  const thumbsDown = result.thumbs_down;
  const thumbsUp = result.thumbs_up;
  const formattedDefinition = formatDefinition(definition);
  const formattedWord = formatWord(word);
  const formattedPercentage = formatThumbsUpPercentage({ thumbsUp, thumbsDown });
  const formattedThumbsUpCount = formatThumbsUpCount(thumbsUp);
  const formattedThumbsDownCount = formatThumbsDownCount(thumbsDown);
  return `${formattedThumbsUpCount} 👍  ${formattedThumbsDownCount} 👎  (${formattedPercentage})  ${formattedWord}: ${formattedDefinition}`;
};

const formatSearchResults = (results) => (
  results.map((result) => formatSearchResult(result))
);

export {
  formatThumbsUpPercentage,
  formatWord,
  formatDefinition,
  formatThumbsUpCount,
  formatThumbsDownCount,
  formatSearchResult,
  formatSearchResults,
};
