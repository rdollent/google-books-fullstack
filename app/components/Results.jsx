const React = require('react');
const {connect} = require('react-redux');

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let bookList = [];

        if(this.props.state) {

       
            bookList = this.props.state.filter((book) => {
                return {title, author, publisher, imageLinks: {smallThumbnail}, previewLink} = book
            });
        }

        
        return (
            <div>
                {bookList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.bookReducer;
};

const Container = connect(mapStateToProps)(Results);


module.exports = Container;