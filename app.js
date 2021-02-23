const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')

// Cutomise Yargs Version
yargs.version('1.1.0')

// Creating Add Command
yargs.command({
    command: 'add',
    describe: 'Add a Note',
    builder: {
        title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string',
        },
        body: {
                describe: 'Note',
                demandOption: true,
                type: 'string',
        },
    },
    handler(argv){
        console.log(chalk.green.bold('Title: ' + argv.title))
        console.log(chalk.blue('Your Note: ' + argv.body))
        notes.addNote(argv.title, argv.body)
    }
})
//  Creating Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Note Title',
                demandOption: true,
                type: 'string',
        }
                
    },
    handler(argv){
        console.log('Removing a Note')
        notes.removeNote(argv.title)
    }
})
//  Creating Read Command
yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
//  Creating List Command
yargs.command({
    command: 'list',
    describe: 'Listing all the Notes',
    handler(){
        console.log('Listing the Notes')
        notes.listNotes()
    }
})
yargs.parse()