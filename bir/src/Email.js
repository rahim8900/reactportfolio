import React, {Component} from "react";
export default class Email extends Component{
    render(){
        return(
            <>
            <p>Email: {this.props.email} </p>
            </>
        )
    }
}