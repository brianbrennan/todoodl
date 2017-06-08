import React from 'react';
import ReactDOM from 'react-dom';
import fs from 'fs';

import Toolbar from './../globals/components/toolbar/Toolbar';
import EntryList from './../entry-list/EntryList';
import ActiveEntry from './../entry/ActiveEntry';

import './../globals/scss/style.scss';

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
        this.state.entries = App.getEntries();
        this.state.activeEntry = this.state.entries[0];
    }

    render() {
        return (
            <div className="appWrapper">
                <Toolbar />
                <EntryList entries={this.state.entries}/>
                <ActiveEntry entry={this.state.activeEntry}/>
            </div>
        );
    }

    static getEntries() {
        let entryBuffer = fs.readFileSync('./data/entries.json');
        return JSON.parse(entryBuffer);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);