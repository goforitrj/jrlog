import React from 'react';
import NoteContainer from '../containers/NoteContainer';
import CounterContainer from '../containers/CounterContainer';

function NotePage({ match }) {
    const { id } = match.params;

    return (
        <div>
            <NoteContainer noteId={parseInt(id, 10)} />
            <CounterContainer />
        </div>
    );
}

export default NotePage;
