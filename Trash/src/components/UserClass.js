import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
       // console.log(props)
     this.state={
        userInfo: "Dummy",
        Location: "Default",
           avatar_url:"https//dummy-photo"
     };
     console.log(this.props.name + "child constructor");

     };
      async componentDidMount()
    {console.log(this.props.name +"Child component did Mount");
     const data = await fetch("https://api.github.com/users/dremchsr");
     const json = await data.json();
     console.log(json)

     this.setState({
        userInfo: json,}
     )
    }  
    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        console.log(this.props.name +"child Render")

        return (
            <div className="user-card">
                <img src="https://avatars.githubusercontent.com/u/104522305?v=4"></img>
            <h1>Name:{name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact:@drmchser</h3>
            </div>
        )
    }
    componentDidUpdate(){
        console.log("Component Did update ");
    };
    componentWillUnmount(){
        console.log("component will unmount");
    }
};

export default UserClass;


/**
 * -----Mounting------
 * -constructer(dummy)
 * -render(dummy)
 *   <html dummy>
 * Component did Mount called
 *      <API Call>
 *      <this.setState>
 * -----Update_Cycle----
 *    
 *   render(Api data)
 *  <html(new API data)>
 *  component did update
 */

