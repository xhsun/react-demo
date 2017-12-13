import React, { Component } from 'react';
import Intro from './comp/Intro.jsx';
import Effects from './comp/Effects.jsx';
import './sass/main.css';
import Clear from './assets/clear.svg';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      step: 0,
    };

    this.next = this.next.bind(this);
    this.reset = this.reset.bind(this);
  }

  //Advance to next scene
  next(){
    var newStep=this.state.step;
    newStep++;
    this.setState({ step: newStep });
  }

  //TODO debug only
  back=()=>{
    var temp=this.state.step;
    if (temp>0) {
      temp--;
      this.setState({ step: temp });
    }
  }

  //reset canvas
  reset() {
    this.setState({ step: 0 });
  }

  render() {
    // TODO change following link to the actual link of this project
    var projectLink="http://www.xhsun.me";

    const currentStep=this.state.step;
    var scene=null;
    switch (currentStep) {
      case 0:
        scene=<Intro next={this.next}/>;
        break;
      case 1:
        scene=<Effects next={this.next}/>;
        break;
      default:
        scene=null;//TODO change this to last scene
    }
    return (
      <div className="App">
        <a className="exit" href={projectLink}><img src={Clear} alt="exit"/></a>
        {scene}

        {/* TODO debug only */}
        <a className="button" onClick={this.back}>Back</a>
        <a className="button" onClick={this.next}>Next</a>
        <h3>Current Step: {this.state.step}</h3>
      </div>
    );
  }
}

export default App;
