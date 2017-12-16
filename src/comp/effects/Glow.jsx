import React, { Component } from 'react';
import Typist from 'react-typist';

//For glowing effect
class Pops extends Component{
  constructor(props) {
    super(props);

    this.state={
      classes: "center center-text",
      effect: "pops no-show",
      background: "full-size",
      hide: null,
    };
    this.showEffect=this.showEffect.bind(this);
  }

  //for fade out animation and hide current scence
  exitScene=()=>{
    var temp=this.state.classes;
    var trigger=this.props.next;
    temp+=' fade';
    this.setState({
      classes: temp,
      hide: trigger
    });
  }

  showEffect(){
    var time=2000;
    var current=this;
    var nextEffect=this.state.effect.replace('no-show','');

    this.setState({ effect: nextEffect });

    setTimeout(function() {current.turnOn();}, 500);
    setTimeout(function() {current.turnOff();}, 700);
    setTimeout(function() {current.turnOn();}, 900);
    setTimeout(function() {current.turnOff();}, 1400);
    setTimeout(function() {current.turnOn();}, 1800);
    setTimeout(function() {current.showGlow();}, time);

    setTimeout(function(){
      current.exitScene();
    }, time*3);
  }

  turnOn=()=>{
    var nextEffect=this.state.effect;
    nextEffect+=' glow white-txt';
    this.setState({effect : nextEffect});
  }

  turnOff=()=>{
    var nextEffect=this.state.effect.replace('glow white-txt','');
    this.setState({effect : nextEffect});
  }

  showGlow=()=>{
    var back=this.state.background;
    back+=' blackout';
    this.setState({background : back});
  }

  render(){
    return(
      <div className={this.state.background}>
        <div className={this.state.classes} onTransitionEnd={this.state.hide}>
          <h1>
            <Typist
              startDelay={1000}
              avgTypingSpeed={1}
              cursor={{ hideWhenDone: true }}
              onTypingDone={this.showEffect}
            >
              Or maybe with something that really
            </Typist>
          </h1>

          <div className={this.state.effect}>Pops</div>
        </div>
      </div>
    );
  }
}

export default Pops;
