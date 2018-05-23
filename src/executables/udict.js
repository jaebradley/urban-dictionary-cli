#!/usr/bin/env node

import program from 'commander';
import { promptSearchTerm } from '../services/prompters/searchTermPrompter';

import pkg from '../../package.json';

const executeSearch = async () => {
  try {
    await promptSearchTerm();
  } catch (e) {
    console.error(`Rut ro - there was an error: ${e}`); // eslint-disable-line no-console
  }
};

program.version(pkg.version)
  .description('UrbanDictionary search from the command line')
  .parse(process.argv);

executeSearch();
