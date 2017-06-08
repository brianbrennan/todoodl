import React from 'react';
import { remote } from 'electron';

const currentWindow = remote.getCurrentWindow();

export default class Submission extends React.Component () {
    render() {
        return (
            <h1>Submission</h1>
        );
    }
}