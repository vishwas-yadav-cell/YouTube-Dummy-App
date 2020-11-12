import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/search/:searchQuery'>
                        <div className='app_content'>
                            <Sidebar />
                            <SearchPage />
                        </div>
                    </Route>
                    <Route path='/'>
                        <div className='app_content'>
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;