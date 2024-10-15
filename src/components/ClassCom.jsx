import React, {Component} from "react";

class ClassCom extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.okay}</h1>
                <p>Hello From Class Component</p>
            </div>        
        )
    }
}
export default ClassCom;