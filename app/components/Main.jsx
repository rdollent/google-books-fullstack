const React = require('react');

const Search = require('Search');


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Search/>
                <Results/>
            </div>
        )
    }
}

module.exports = Main;
