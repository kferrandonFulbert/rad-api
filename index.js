#!/usr/bin/env node

import { parseArgs } from './src/utils/parser.js';
import { generateRoute, generateController } from './src/commands/generate.js';

async function main() {
    const args = parseArgs(process.argv.slice(2));
console.log(args);
    try {
        if (args.command === 'generate') {
            if (!args.table) {
                console.error('❌ Error: Table name is required');
                console.log('Usage: kapi generate route <tableName>');
                process.exit(1);
            }
            if (args.type === 'route') {
                await generateRoute(args.table, args.path);
            }

            else if (args.type === 'controller') {
                
                await generateController(args.table, args.path);
            }
        }
        else {
            console.log('🔧 KAPI - Rapid API Development');
            console.log('\nUsage:');
            console.log('  kapi generate route <tableName>  - Generate a route file for a table');
            console.log('  kapi generate controller <tableName>  - Generate a controller file for a table');
            console.log('\nExamples:');
            console.log('  kapi generate route citations');
            console.log('  kapi generate route users');
        }
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

main();
