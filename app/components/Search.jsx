const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.textInput = React.createRef();
        this.submitInput = this.submitInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            input: event.target.value
        });
        console.log(this.state);
    }

    submitInput(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.submitNewInput(this.state.input);
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
    return {input: state}
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