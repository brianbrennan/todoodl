import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './../globals/components/menu/Menu';
import Page from './../globals/components/pages/Page';
import { Router, Route, browserHistory } from 'react-router';

import './../globals/scss/style.scss';

ReactDOM.render(
    <div className="app-wrapper">
        <Menu></Menu>
        <Router history={browserHistory}>
            <Route path="/" component={Page} />
        </Router>
    </div>,
    document.getElementById('app')
);