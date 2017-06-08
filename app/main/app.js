import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from './../globals/components/toolbar/Toolbar';
import EntryList from './../entry-list/EntryList';
import ActiveEntry from './../entry/ActiveEntry';

import './../globals/scss/style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="appWrapper">
                <Toolbar />
                <EntryList />
                <ActiveEntry />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);