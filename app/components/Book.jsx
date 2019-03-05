const React = require('react');

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {ind, title, authors, publisher, imgUrl, link, error} = this.props


        if(!error) {
            let bookId = 'book-'+ ind;
            const authorList = authors.join(', ');

            return (
                <div id={bookId} className='books'>
                    <p className="titles"><strong>{title}</strong></p>
                    <img src={imgUrl} alt="No preview available"></img>
                    <p><em>{authorList}</em></p>
                    <p>{publisher}</p>
                    <div className="info"><a href={link} target="_new">More Info</a></div>
                </div>
            )

        } else {
            return (
                <div className='books'>
                    <p>{error}</p>
                </div>
            )
        }
        
    }
}


module.exports = Book;