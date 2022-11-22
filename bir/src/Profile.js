import React, {Component} from "react";
import Email from './Email';
import Name from './Name';
import Address from './Address';
import PersonalInfo from './PersonalInfo';
import './index.css';
export default class Profile extends Component{
    render(){
        const {ad, yas, mekteb, uni, kurs, no, address, email} = this.props
        return(
            <div className = 'block'>

            <Name ad={ad}/>
            <PersonalInfo yas = {yas} mekteb = {mekteb} uni ={uni} kurs={kurs} no={no}/>
            <Address address= {address} />
            <Email email={email} />

            </div>
        )
    }
}      