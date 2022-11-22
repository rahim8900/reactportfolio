import React,{Component} from 'react';
import Profile from './Profile';

export default class App extends Component{
  render(){
    return(
      <>
      < Profile ad="Rahim Hasanov" yas = {19} mekteb = {238} uni ="ADNSU" kurs="3" no="051" address="Niazmi r." email="rehim@gmail.com" />
      </>
    )
  }
}
