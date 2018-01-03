#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('UrbanDictionary search from the command line')
  .command('search', 'Search on Urban Dictionary')
  .parse(process.argv);
