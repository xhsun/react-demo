import React, { Component } from 'react';
import Intro from './comp/Intro.jsx';
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

  //reset canvas
  reset() {
    this.setState({ step: 0 });
  }

  render() {
    // TODO change following link to the actual link of this project
    var projectLink="http://www.xhsun.me";
    return (
      <div className="App">
        <a className="exit" href={projectLink}><img src={Clear}/></a>
        {this.state.step === 0 ? (
          <Intro next={this.next}/>
        ) : null}

        {/* <a onClick={this.reset}>Reset</a>
        {this.state.step} */}
      </div>
    );
  }
}

export default App;
