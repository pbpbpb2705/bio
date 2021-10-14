import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Banner from './pages/Banner';
import Members from './pages/Members';
import Journal from './pages/Journal';
import Mainjournal from './pages/Mainjournal';
import Journal2 from './pages/Journal2';
import Blog from './pages/Blog';
import Checklist from './pages/Checklist';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Banner />
            <Profile />
            <Checklist />
            <Blog/>
            <Switch>
                <Route path="/Home" component={Home} />
                <Route path="/Mainjournal" component={Mainjournal} />
            </Switch>
            <Contact />
        </Router>
    );
}
export default App;