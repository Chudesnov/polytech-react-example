import React from 'react';
import ReactDOM from 'react-dom';
import Example from './src/ExampleComponent';

ReactDOM.render(
    <p>
        <span>It works again</span>
        <Example />
    </p>, 
    document.getElementById('root')
);