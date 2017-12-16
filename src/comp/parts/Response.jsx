import React, { Component } from 'react';
import Typist from 'react-typist';

class Response extends Component {
  constructor(props) {
    super(props);

    this.state={
      classes: 'center center-text',
      hide: null,
    };

    this.exitScene=this.exitScene.bind(this);
  }

  //for fade out animation and call next after transition ended
  exitScene(){
    var time=1100;
    var current=this;
    var trigger=this.props.next;
    var temp=this.state.classes;
    temp+=' fade';
    if (this.props.onResponse != null) {
      this.props.onResponse.bind(this);
      this.props.onResponse();
    }
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
            onTypingDone={this.exitScene}
          >
            {this.props.text}
          </Typist>
        </h1>
      </div>
    );
  }
}

export default Response;
