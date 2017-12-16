import React, { Component } from 'react';
import Typist from 'react-typist';

class Message extends Component {
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
    var time=1000;
    var current=this;
    var trigger=this.props.next;
    var temp=this.state.classes;
    temp+=' fade';
    if (this.props.onShown != null) {
      this.props.onShown.bind(this);
      this.props.onShown();
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
        <h1>
          <Typist
            startDelay={1000}
            cursor={{ hideWhenDone: true }}
            onTypingDone={this.exitScene}
          >
            {this.props.children}
          </Typist>
        </h1>
      </div>
    );
  }
}

export default Message;
