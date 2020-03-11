import React from 'react';
import { Route } from 'react-router-dom';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';

function App() {
    return (
        <div className="App">
            <Route path="/" component={NoteListPage} exact={true} />
            <Route path="/:id" component={NotePage} />
        </div>
    );
}

export default App;
