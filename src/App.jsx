import React, { Component } from 'react';
import Intro from './comp/Intro.jsx';
import './sass/main.css';

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
    return (
      <div className="App">
        {this.state.step === 0 ? (
          <Intro next={this.next}/>
        ) : null}

        {/* <a onClick={this.reset}>Reset</a>
        {this.state.step} */}
        <br/>
      </div>
    );
  }
}

export default App;
