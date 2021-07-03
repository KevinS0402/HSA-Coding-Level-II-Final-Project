import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Music from './Music';
import Book from './Book';
import Contact from './Contact'

const Webpages = () => {
    return(
        <Router>
        <Switch>
            <Route exact path = "/">
                <Home />
            </Route>
            <Route exact path = "/about">
                <About />
            </Route>
            <Route exact path = "/music">
                <Music />
            </Route>
            <Route exact path = "/book">
                <Book />
            </Route>
            <Route exact path = "/contact">
                <Contact />
            </Route>
        </Switch>
        </Router>
    );
};

export default Webpages;