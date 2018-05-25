import inquirer from 'inquirer';
import InquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { search as urbanDictionarySearch } from 'urban-dictionary-client';

import { formatSearchResults } from '../formatters/searchResultsFormatter';

inquirer.registerPrompt('autocomplete', InquirerAutocompletePrompt);

const search = async (input) => {
  if (!input) {
    return [];
  }
  const { list } = await urbanDictionarySearch(input);
  return formatSearchResults(list);
};

const promptSearchTerm = async () => (
  inquirer.prompt([
    {
      name: 'searchTerm',
      message: 'Input search term',
      type: 'autocomplete',
      source: (answers, input) => search(input),
    },
  ])
);

export { search, promptSearchTerm };
