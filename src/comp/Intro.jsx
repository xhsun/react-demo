import React, { Component } from 'react';
import Typist from 'react-typist';

class Intro extends Component {
  constructor(props){
    super(props);

    this.state={
      classes: 'intro center',
      hide:null,
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
    var temp=this.state.classes;
    var trigger=this.props.next;
    temp+=' fade';
    this.setState({
      classes: temp,
      hide: trigger
    });
  }

  showFirstButton=()=>{
    this.setState({showFirst : true});
  }

  showSecondButton=()=>{
    this.setState({showSecond : true});
  }

  render() {
    return (
      <div className={this.state.classes} onTransitionEnd={this.state.hide}>
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
          </Typist>
        </h1>

        <div className='button-holder'>
          {this.state.showFirst ? (
            <a onClick={this.exitScence}>Good</a>
          ) : null}
          {this.state.showSecond ? (
            <a onClick={this.exitScence}>Great</a>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Intro;
