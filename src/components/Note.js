import React from 'react';

function Note({ note }) {
    const { title, body } = note;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default Note;
