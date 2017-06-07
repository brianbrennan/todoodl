import React from 'react';
import { remote } from 'electron';

const currentWindow = remote.getCurrentWindow();

export default class Toolbar extends React.Component {
    render() {
        return (
            <div className="global-toolbar">
                <div className="minimize-button" onClick={Toolbar.minimizeApp}>
                    _
                </div>
                <div className="maximize-button" onClick={Toolbar.maximizeApp}>
                    &#9633;
                </div>
                <div className="close-button" onClick={Toolbar.closeApp}>
                    X
                </div>
            </div>
        );
    }

    static minimizeApp() {
        currentWindow.minimize();
    }

    static maximizeApp() {
        if(currentWindow.isMaximized()) {
            currentWindow.unmaximize();
        } else {
            currentWindow.maximize();
        }
    }

    static closeApp() {
        currentWindow.close();
    }
}