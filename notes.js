const chalk = require('chalk')
const fs = require('fs')

const addNote =(title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => 
    note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log(chalk.red.bold('Note Title Taken'))
    }

}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => 
        note.title !== title
    )
    if (notesToKeep.length === notes.length) {
        console.log('No such Note found')
    } else {
         console.log('Note was removed')
         saveNotes(notesToKeep)
    }
    
}
const listNotes = () => {
    const notes = loadNotes()
    console.log (chalk.blueBright.inverse('Your Notes'))
notes.forEach((note) => {
console.log(note.title)
})
}
const readNotes = (title) => {
const notes = loadNotes()
const note = notes.find ((note) => note.title === title)
if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
} else {
    console.log(chalk.inverse.red('Note not Found!'))
}
}
const saveNotes = (notes) => {
 const dataJSON = JSON.stringify(notes)
 fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => 
{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    } catch (e) {
        return[]
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes,
}