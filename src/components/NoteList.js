import React from 'react';

function NoteList({ notes }) {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>{note.title}</li>
            ))}
        </ul>
    );
}

export default NoteList;
