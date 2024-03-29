import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from './layouts/front/FrontPage';
import BackOffice from './layouts/admin/BackOffice';
import ReviewPage from './layouts/front/ReviewPage'

class Amazon extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" exact component={ FrontPage}/>
                    <Route path="/admin"  component={ BackOffice}/>
                    <Route path="/reviews/:id"  component={ReviewPage}/>
                </Router>
            </div>
        );
    }
}

export default Amazon;