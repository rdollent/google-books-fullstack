const React = require('react');

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" name="search" id=""/>
                <button>Submit</button>
            </div>
        )
    }
}

module.exports = Search;