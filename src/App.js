import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './activepages/Home';
import Mainjournal from './activepages/Mainjournal';
import Predict from './activepages/Predict.js';
import Banner from "./activepages/Banner"
import BreastCancer from "./activepages/BreastCancer.js"
import COVID19 from "./activepages/COVID19.js"
import Fertility from "./activepages/Fertility.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
      <Router>
        <Banner />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/mainjournal" component={Mainjournal} />
          <Route path="/predict" component={Predict} />
          <Route path="/breastcancer" component={BreastCancer} />
          <Route path="/covid19" component={COVID19}/>
          <Route path="/fertility" component={Fertility} />
        </Switch>
      </Router>
    );
}
export default App;