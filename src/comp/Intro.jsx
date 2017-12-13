import React, { Component } from 'react';
import Typist from 'react-typist';

class Intro extends Component {
  constructor(props){
    super(props);

    this.state={
      classes: 'intro center',
      hide: null,
      shouldShow: true,
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

  //for fade out animation and hide current scence
  exitScence=()=>{
    var temp=this.state.classes;
    var trigger=this.hideSelf;
    temp+=' fade';
    this.setState({
      classes: temp,
      hide: trigger
    });
  }

  hideSelf=()=>{
    this.setState({shouldShow : false});
  }

  showFirstButton=()=>{
    this.setState({showFirst : true});
  }

  showSecondButton=()=>{
    this.setState({showSecond : true});
  }

  render() {
    const isVisible = this.state.shouldShow;
    // const isVisible=false;

    let content = (isVisible) ? (
      <div className={this.state.classes} onTransitionEnd={this.state.hide}>
        <h1>
          <Typist
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
            <a className="button" onClick={this.exitScence}>Good</a>
          ) : null}
          {this.state.showSecond ? (
            <a className="button" onClick={this.exitScence}>Great</a>
          ) : null}
        </div>
      </div> ) : <IntroResponse next={this.props.next}/>;
    return (
      <div>{content}</div>
    );
  }
}

class IntroResponse extends Component {
  constructor(props) {
    super(props);

    this.state={
      classes: 'center',
      hide: null,
    };

    this.exitScence=this.exitScence.bind(this);
  }

  //for fade out animation and call next after transition ended
  exitScence(){
    var time=1100;
    var current=this;
    var trigger=this.props.next;
    var temp=this.state.classes;
    temp+=' fade';
    setTimeout(function() {
            current.setState({
              classes: temp,
              hide: trigger
            });
        }, time);
  }

  render(){
    return(
      <div className={this.state.classes} onTransitionEnd={this.state.hide}>
        <h1 className="intro-response">
          <Typist
            avgTypingSpeed={5}
            startDelay={200}
            cursor={{ hideWhenDone: true }}
            onTypingDone={this.exitScence}
          >
            Nice!
          </Typist>
        </h1>
      </div>
    );
  }
}

export default Intro;
