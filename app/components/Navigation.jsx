const React = require('react');
const  { NavLink } = require('react-router-dom');

// stateless, functional component
const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    )
}

module.exports = Navigation;