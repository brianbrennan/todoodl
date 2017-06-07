import React from 'react';
import ReactDOM from 'react-dom';

import './../globals/scss/style.scss';

class App extends React.Component {

    render() {
        return (
            <h1>Test9</h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);