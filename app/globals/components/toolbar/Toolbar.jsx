import React from 'react';
import { remote } from 'electron';

const currentWindow = remote.getCurrentWindow();

export default class Toolbar extends React.Component {
    render() {
        return (
            <div className="global-toolbar">
                <div className="minimize-button" onClick={this.minimizeApp}>
                    _
                </div>
                <div className="maximize-button" onClick={this.maximizeApp}>
                    &#9633;
                </div>
                <div className="close-button" onClick={this.closeApp}>
                    X
                </div>
            </div>
        );
    }

    minimizeApp() {
        currentWindow.minimize();
    }

    maximizeApp() {
        currentWindow.maximize();
    }

    closeApp() {
        currentWindow.close();
    }


}