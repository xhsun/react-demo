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

class Intro extends Component {
  constructor(props){
    super(props);

    this.state={
      hide: '',
      showFirst: false,
      showSecond: false,
    };
    this.doneTyping=this.doneTyping.bind(this);
  }

  //typewriter effect is done, show buttons
  doneTyping(){
    var current=this;
    var time=900;
    setTimeout(function() {
            current.showFirstButton();
        }, time);
    setTimeout(function() {
            current.showSecondButton();
        }, time*2);
  }

  //for fade out animation and call next after transition ended
  exitScence=()=>{
    this.setState({hide: 'fade'});
  }

  showFirstButton=()=>{
    this.setState({showFirst : true});
  }

  showSecondButton=()=>{
    this.setState({showSecond : true});
  }

  render() {
    return (
      <div className={this.state.hide} onTransitionEnd={this.props.next}>
        <h1>
          <Typist
            avgTypingSpeed={40}
            startDelay={1000}
            cursor={{ hideWhenDone: true }}
            onTypingDone={this.doneTyping}
          >
            Hi there!
            <br/>
            How are you today?
            <br/>
          </Typist>
        </h1>

        {this.state.showFirst ? (
          <a onClick={this.exitScence}>Good</a>
        ) : null}
        {this.state.showSecond ? (
          <a onClick={this.exitScence}>Great</a>
        ) : null}
      </div>
    );
  }
}

export default App;
