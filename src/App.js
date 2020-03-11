import React from 'react';
import { Route } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';

function App() {
    return (
        <div className="App">
            <Route path="/" component={StoryPage} exact={true} />
            <Route path="/notes" component={NoteListPage} exact={true} />
            <Route path="/notes/:id" component={NotePage} />
        </div>
    );
}

export default App;
