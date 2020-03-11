import React from 'react';
import CounterContainer from './containers/CounterContainer';
import NoteListContainer from './containers/NoteListContainer';

function App() {
    return (
        <div className="App">
            <CounterContainer></CounterContainer>
            <NoteListContainer></NoteListContainer>
        </div>
    );
}

export default App;
