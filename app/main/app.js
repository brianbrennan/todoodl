import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from './../globals/components/toolbar/Toolbar';
import EntryList from './../entry-list/EntryList';
import './../globals/scss/style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="appWrapper">
                <Toolbar />
                <EntryList />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);