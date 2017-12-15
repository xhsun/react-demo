import React, { Component } from 'react';
import Typist from 'react-typist';
import Response from './Response.jsx';

class Question extends Component {
  constructor(props){
    super(props);

    this.state={
      classes: 'center-text center',
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
  exitScene=()=>{
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

    let content = (isVisible) ? (
      <div className={this.state.classes} onTransitionEnd={this.state.hide}>
        <h1>
          <Typist
            className="display-linebreak"
            startDelay={1000}
            cursor={{ hideWhenDone: true }}
            onTypingDone={this.doneTyping}
          >
            {this.props.question.replace(/\\n/g, '\n')}
          </Typist>
        </h1>

        <div className='button-holder'>
          {this.state.showFirst ? (
            <a className="button" onClick={this.exitScene}>{this.props.a1}</a>
          ) : null}
          {this.state.showSecond ? (
            <a className="button" onClick={this.exitScene}>{this.props.a2}</a>
          ) : null}
        </div>
      </div> ) : <Response next={this.props.next} text={this.props.response}/>;
    return (
      <div>{content}</div>
    );
  }
}

export default Question;
