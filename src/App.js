import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import LeftNavigation from './components/common/LeftNavigation';
import StoryPage from './pages/StoryPage';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';

function App() {
    return (
        <div className="App">
            <Header />
            <LeftNavigation />
            <Route path="/" component={StoryPage} exact={true} />
            <Route path="/notes" component={NoteListPage} exact={true} />
            <Route path="/notes/:id" component={NotePage} />
        </div>
    );
}

export default App;
