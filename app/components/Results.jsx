const React = require('react');
const {connect} = require('react-redux');
const Book = require('Book');

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const renderBooks = () => {
            const books = this.props.books;
            if(books) {
                return books.map((book, index) => {
                    return (
                        <Book key={index} 
                            title={book.title} 
                            authors={book.authors} 
                            publisher={book.publisher} 
                            imgUrl={book.imageLinks.smallThumbnail} 
                            link={book.infoLink} 
                        />
                    )
                });
            }
        }

        return (
            <div>
                {renderBooks()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.bookReducer;
};

const Container = connect(mapStateToProps)(Results);


module.exports = Container;