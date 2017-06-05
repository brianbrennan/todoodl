import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './../globals/components/menu/Menu';
import Page from './../globals/components/pages/Page';

import './../globals/scss/style.scss';

ReactDOM.render(
    <div className="app-wrapper">
        <Page></Page>
    </div>,
    document.getElementById('app')
);