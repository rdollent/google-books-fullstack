const React = require('react');
const {connect} = require('react-redux');

//stateless
//get and set localStorage?

class Recent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const LIST = window.localStorage.getItem('list');
        
        return (
            <div>
            
            </div>
            
            )
    }   
}