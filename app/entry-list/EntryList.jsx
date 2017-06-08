import React from 'react';

export default class EntryList extends React.Component {
    render() {
        let entriesForList = this.props.entries.map(function(entry) {
            return(
                <div className="entry-in-list">
                    <h1>{entry.title}</h1>
                </div>
            );
        });

        return (
            <div className="entry-list">
                {entriesForList}
            </div>
        );
    }
}