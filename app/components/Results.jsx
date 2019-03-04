const React = require('react');
const {connect} = require('react-redux');
const Book = require('Book');

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const renderBooks = () => {
            const books = this.props.bookReducer.books;
            const error = this.props.errorReducer;

            if(books && !error) {
                return books.map((book, index) => {
                    // const {title, authors, publisher, imageLinks: {smallThumbnail}, infoLink} = book;
                    let title = book.title || '';
                    let authors = book.authors || [''];
                    let publisher = book.publisher || '';
                    let smallThumbnail = book.imageLinks ?  book.imageLinks.smallThumbnail : 'https://books.google.ca/googlebooks/images/no_cover_thumb.gif';
                    let infoLink = book.infoLink || '';
                    return (
                        <Book key={index}
                            ind={index}
                            title={title} 
                            authors={authors} 
                            publisher={publisher} 
                            imgUrl={smallThumbnail}
                            link={infoLink} 
                        />
                    )
                });
            } else if(error) {
                return (
                    <Book error={error} />
                )
            }
        }

        return (
            <div id='results'>
                {renderBooks()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {bookReducer, errorReducer} = state;
};

const Container = connect(mapStateToProps)(Results);


module.exports = Container;