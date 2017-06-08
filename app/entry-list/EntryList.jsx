import React from 'react';
import fs from 'fs';

export default class EntryList extends React.Component {
    render() {
        let entries = EntryList.getEntries();

        entries = entries.map(function(entry) {
            return(
                <div className="entry-in-list">
                    <h1>{entry.title}</h1>
                </div>
            );
        });

        return (
            <div className="entry-list">
                {entries}
            </div>
        );
    }
    
    static getEntries() {
        let entries = fs.readFileSync('./data/entries.json');
        return JSON.parse(entries);
    }
}