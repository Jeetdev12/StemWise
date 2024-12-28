import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component
{ 
  constructor(props){
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount()
  {console.log("Parent component did Mount");
    }  

  render(){
    console.log("Parent Render");
    return(
      <div>
      <h1>About</h1>
      <h2>this is namaste React web series</h2>
      <UserClass name ={"This is Manjeet yadav (class)"} location={"Kanpur class"}/>
    </div>
    )

  }

}


export default About;

/**
 * parent constructor 
 * parent render
 *    -child1 constructor
 *     -child1 render
 * 
 *     -child2 constructor
 *     - child2 render
 * <DOM UPDATED - IN SINGLE BATCH>
 * 
 *     -child1 componentDidMount
 *     -child2 componentDidMount 
 * -parent componentDidMount
 * 
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */