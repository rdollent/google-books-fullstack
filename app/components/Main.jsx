const React = require('react');

const Search = require('Search');
const Results = require('Results');
const Recent = require('Recent');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        fetch('/hello').then((res) => res.json()).then((data) => {console.log(data)});

        return (
            <div id='main'>
                <Search/>
                <Recent/>
                <Results/>
            </div>
        )
    }
}

module.exports = Main;
