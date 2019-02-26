const React = require('react');
const ReactDOM = require('react-dom');
// use Provider object to connect redux to react
// components and its children inside <Provider> will be able to access the store
const {Provider} = require('react-redux');


// use resolve property and modulesDirectories property
// in webpack.config.js to substitute for alias
// that way, you don't need to list every jsx component in alias in webpack.config.js
const Main = require('Main');

const actions = require('actions');
const store = require('store').createStore();

const unsubscribe = store.subscribe( () => {
    console.log('New state is ', store.getState());
})


ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('app')
);