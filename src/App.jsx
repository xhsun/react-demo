import React, { Component } from 'react';
import Typist from 'react-typist';
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
    //if newStep is less than total
    this.setState({ step: newStep });
    //clear canvas and show next
  }

  //reset canvas
  reset() {
    this.setState({ step: 0 });
    //reset canvas
  }

  render() {
    return (
      <div className="App">
        <Intro next={this.next}/>
        <br/>
      </div>
    );
  }
}

class Intro extends Component {
  //TODO only show button after text done type out
  render() {
    return (
      <div>
        <h1>
          <Typist
            avgTypingSpeed={40}
            startDelay={1000}
            cursor={{ hideWhenDone: true }}
          >
            Hi there!
            <br/>
            How are you today?
            <br/>
          </Typist>
        </h1>
        <button onClick={this.props.next}>
          Good
        </button>
        <button onClick={this.props.next}>
          Great!
        </button>
      </div>
    );
  }
}

export default App;
