import React from 'react';
const electron = window.require('electron');

//const currentWindow = electron.remote.getCurrentWindow();

export default class Toolbar extends React.Component {
    render() {
        return (
            <div className="global-toolbar">
                <div className="close-button" onClick={this.closeApp}>
                    X
                </div>
            </div>
        );
    }

    static closeApp() {
        console.log('test');
    }
}