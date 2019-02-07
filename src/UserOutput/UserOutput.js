import React from 'react';
import './UserOutput.css'
const userOutput= props => {
return (
    <div className="UserOutput">
        <p onClick= {props.click}>Hi! I am {props.username}</p>
        <p>My name is {props.username}</p>
    </div>
    )
};

export default userOutput;