import React, { Component } from 'react';
import Typist from 'react-typist';

//Effect for annoyance
class Annoyance extends Component{
  constructor(props) {
    super(props);

    this.state={
      classes: "center center-text",
      effect: "annoyance no-show",
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
    var time=1500;
    var current=this;
    var nextEffect=this.state.effect.replace('no-show','');

    this.setState({ effect: nextEffect });

    setTimeout(function() {
            current.showGlitchEffect();
        }, time);
    setTimeout(function() {
            current.showFontChange();
        }, time*1.8);

    setTimeout(function(){
      current.exitScene();
    }, time*2.5);
  }

  showGlitchEffect=()=>{
    var nextEffect=this.state.effect;
    nextEffect+=' glitch';
    this.setState({effect : nextEffect});
  }

  showFontChange=()=>{
    var nextEffect=this.state.effect.replace('glitch','');
    nextEffect+=' comic-san';
    this.setState({effect : nextEffect});
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
            Or some minor
          </Typist>
        </h1>
        <div className={this.state.effect} data-text="annoyance">annoyance</div>
      </div>
    );
  }
}

export default Annoyance;
