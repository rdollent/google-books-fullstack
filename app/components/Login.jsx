const React = require('react');

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    submit() {
        fetch('/hello').then((res) => res.json()).then((data) => {console.log(data)});
    }

    render() {
        return (
            <div>
                <form action="GET" onSubmit={this.submit}>
                    <input type='text'></input>
                    <input type='password'></input>
                    <button>Submit</button>                
                </form>
            </div>
        )
    }
}

module.exports = Login;