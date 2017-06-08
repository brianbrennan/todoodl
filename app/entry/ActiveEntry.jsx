import React from 'react';

export default class ActiveEntry extends React.Component {
    render() {
        return (
            <div className="active-entry">
                <h1>{this.props.entry.title}</h1>
                <section className="description">
                    {this.props.entry.description}
                </section>
            </div>
        );
    }
}