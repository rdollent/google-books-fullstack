const React = require('react');
const {BrowserRouter, Route, Switch} = require('react-router-dom');

const Navigation = require('Navigation');
const Dash = require('Dash');
const Error = require('Error');
const Login = require('Login');


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path='/' component={Dash} exact />
                        <Route path='/login' component={Login} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = Main;
