import React, { Component } from 'react';
import Typist from 'react-typist';

class ColorShift extends Component {
  constructor(props) {
    super(props);

    this.state={
      classes: "center center-text",
      effect: "shift-color color-change no-show",
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
    var time=5000;
    var current=this;
    var nextEffect=this.state.effect.replace('no-show','');

    this.setState({ effect: nextEffect });

    setTimeout(function(){
      current.exitScene();
    }, time);
  }

  render(){
    return(
      <div className={this.state.classes} onTransitionEnd={this.state.hide}>
        <h1>
          <Typist
            startDelay={1000}
            cursor={{ hideWhenDone: true }}
            onTypingDone={this.showEffect}
          >
            Then let's start with some
          </Typist>
        </h1>
        <div className={this.state.effect}>
          <span>c</span>
          <span>o</span>
          <span>l</span>
          <span>o</span>
          <span>r</span>
        </div>
      </div>
    );
  }
}

export default ColorShift;
