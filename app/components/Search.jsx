const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.submitInput = this.submitInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.props.submitNewInput(event.target.value);
    }

    submitInput(e) {
        e.preventDefault();
        let searchWord = this.props.input;


        // API key
        // AIzaSyCCNymCGy8woooS7e6VBt4KLXt1UzAC6Pw 
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchWord + '&key=AIzaSyCCNymCGy8woooS7e6VBt4KLXt1UzAC6Pw')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                const booksArr = json.items.map((item) => item.volumeInfo);
                // need title, authors (array), imageLinks.smallThumbnail, publisher, previewLink


            })
            .catch((err) => {console.log(error)});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitInput}>
                    <input type="text" name="search" id="searchBar" onChange={this.handleInput}/>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.inputReducer;
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewInput: (input) => {
            dispatch(actions.addInput(input))
        }
    }
};
  

const Container = connect(mapStateToProps, mapDispatchToProps)(Search);


module.exports = Container;