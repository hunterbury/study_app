import React, {useEffect, useState} from 'react'
import AddButton from './AddButton'

const NoteList = () => {
  let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        // let response = await fetch('/api/notes/')
        // let data = await response.json()
        let data = ['note for thie one', 'heres another note']
        setNotes(data)
    }

  return (
    <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className="notes-list">
                {notes.map((note, index) => (
                    // <ListItem key={index} note={note} />
                    <li>{note}</li>
                ))}
            </div>
            <AddButton />
        </div>
  )
}

export default NoteList