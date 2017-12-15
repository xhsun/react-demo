import React, { Component } from 'react';
import Typist from 'react-typist';

class Effects extends Component {
  constructor(props) {
    super(props);
    this.state={
      stage: 0,
    }

    this.next = this.next.bind(this);
  }

  //Advance to next scene
  next(){
    var temp=this.state.stage;
    if (temp<3) {
      temp++;
      this.setState({ stage: temp });
    }
  }

  //TODO debug only
  back=()=>{
    var temp=this.state.stage;
    if (temp>0) {
      temp--;
      this.setState({ stage: temp });
    }
  }

  render(){
    const currentStage=this.state.stage;
    var scene=null;
    switch (currentStage) {
      case 0:
        scene=<Movement next={this.next}/>;
        break;
      case 1:
        scene=<Annoyance next={this.next}/>
        break;
      case 2:
        scene=<Pops next={this.next}/>
        break;
      default:
        scene=null;//TODO change this to last scene
    }
    return(
      <div className="base">
        {scene}

        {/* TODO debug only */}
        <div style={{position: 'absolute', top: 140+'px'}}>
          <h3>Current Stage: {this.state.stage}</h3>
          <a className="button" onClick={this.back}>Back</a>
          <a className="button" onClick={this.next}>Next</a>
        </div>

      </div>
    );
  }
}

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

//Effect for movement
class Movement extends Component {
  constructor(props) {
    super(props);

    this.state={
      classes: "center center-text",
      effect: "movement no-show",
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
    var time=1000;
    var current=this;
    var nextEffect=this.state.effect.replace('no-show','');

    this.setState({ effect: nextEffect });

    setTimeout(function() {
            current.showMovement();
        }, time);
    setTimeout(function() {
            current.showOverlay();
        }, time*2.5);

    setTimeout(function(){
      current.exitScene();
    }, time*5);
  }

  showMovement=()=>{
    var nextEffect=this.state.effect;
    nextEffect+=' trans-text';
    this.setState({effect : nextEffect});
  }

  showOverlay=()=>{
    var nextEffect=this.state.effect;
    nextEffect+=' shadow';
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
            So...
            <Typist.Delay ms={500} />
            <br/>
            Shall we start with some
          </Typist>
        </h1>
        <div className={this.state.effect}>Movement</div>
      </div>
    );
  }
}

export default Effects;
