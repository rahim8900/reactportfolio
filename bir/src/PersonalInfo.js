import React, {Component} from "react";
export default class PersonalInfo extends Component{
    render(){
        const {yas, mekteb, uni, kurs, no} = this.props
        return(
            <>
            <p>yas: {yas} </p>
            <p>Bitirdiyi mekteb no: {mekteb} </p>
            <p>Universitet: {uni} </p>
            <p>Kurs: {kurs} </p>
            <p>Tel no: {no} </p>
            </>
        )
    }
}