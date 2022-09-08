const yargs = require('yargs');


yargs.version('1.0.0');


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: (argv) => {
        console.log(`Adding a new Note title: "${argv.title}", and body: "${argv.body}"`);
    }
});

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log('Removing the new Note')
    }
});

// List command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log('List all notes')
    }
});

// Read command
yargs.command({
    command: 'read',
    describe: 'read a single note',
    handler: () => {
        console.log('reading a single note')
    }
});

// yargs.parse();
console.log(yargs.argv);