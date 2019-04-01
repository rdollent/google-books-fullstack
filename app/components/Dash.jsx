const React = require('react');

const Search = require('Search');
const Results = require('Results');
const Recent = require('Recent');



class Dash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='dash'>
                <Search/>
                <Recent/>
                <Results/>
            </div>   
        )
    }
}

module.exports = Dash;
