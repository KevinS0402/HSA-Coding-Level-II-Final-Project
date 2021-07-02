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
            <Route exact path="/" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/music" component = {Music} />
            <Route path = "/book" component = {Book} />
            <Route path = "/contact" component = {Contact} />
        </Router>
    );
};

export default Webpages;