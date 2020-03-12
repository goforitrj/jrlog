import React from 'react';
import { Link } from 'react-router-dom';

function NoteList({ notes }) {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Link className="link-text" to={`/${note.id}`}>{note.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default NoteList;
