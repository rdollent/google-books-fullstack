const React = require('react');
const ReactDOM = require('react-dom');


// use resolve property and modulesDirectories property
// in webpack.config.js to substitute for alias
// that way, you don't need to list every jsx component in alias in webpack.config.js
const First = require('First');


ReactDOM.render(
    <First/>,
    document.getElementById('app')
);