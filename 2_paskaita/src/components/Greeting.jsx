/* eslint-disable react/prop-types */

const Greeting = (props) => {
    return (<div>Hello, {props.name ? props.name : "user" } {props.surname ? props.surname : "another user"} !
    {props.lastLoggedIn && <p>Your last login was at {props.lastLoggedIn}</p>}
    </div>
    )
}

export default Greeting