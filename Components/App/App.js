import React from 'react';
//import logo from './logo.svg'
import './App.css';
import {Button} from '../Button/Button';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {color: [250,230,0]};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.state.color = {color: this.changeColor}
  }

  changeColor(){
    const Random = [];
      for(let i=0; i<3; i++){
      Random.push(Math.floor(Math.random()*250));
      return Random
    }
  }

  
  render(){
    return (
      <div className="App">
        <h1>OK</h1>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;


