import { promptSearchTerm } from '../services/prompters/searchTermPrompter';

const executeSearch = async () => {
  try {
    await promptSearchTerm();
  } catch (e) {
    console.error(`Rut ro - there was an error: ${e}`); // eslint-disable-line no-console
  }
};

executeSearch();
