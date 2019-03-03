const React = require('react');

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, authors, publisher, imgUrl, link} = this.props
        return (
            <div>
                <p>{title}</p>
                <img src={imgUrl}></img>
                <p>{authors}</p>
                <p>{publisher}</p>
                <a href={link} target="_new">More Info</a>
            </div>
        )
    }
}


module.exports = Book;