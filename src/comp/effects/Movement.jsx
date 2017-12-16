import React, { Component } from 'react';
import Typist from 'react-typist';

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

export default Movement;
