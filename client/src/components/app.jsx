import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import BlogListHome from "./component-pages/Home";
import BlogInfo from "./component-pieces/BlogInfo";

class Navigation extends Component {

    render() {
        return (
            <Router>
                <div className="container ml-2 mr-2">
                    <Switch>
                        <Route exact path="/" component={BlogListHome} />
                        <Route path="/:id" component={BlogInfo} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navigation;