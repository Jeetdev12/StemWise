import { useState } from "react";

const User = (props)=>{
 const [count] =useState(0);
 const [count2] =useState(2);
return (
    <div className="user-card">
        <h1>count: {count}</h1>
        <h1>count2: {count2}</h1>
        <h1>Name: {props.Name}</h1>
        <h2>Location: Kanpur</h2>
        <h3>Contact: @drmchser</h3>
    </div>
)
};
export default User;