import React, { Component } from 'react';
import Question from './parts/Question.jsx';
import Message from './parts/Message.jsx';

class Draw extends Component {
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
    if (temp<6) {
      temp++;
      this.setState({ stage: temp });
    }
  }

  //TODO debug only
  // back=()=>{
  //   var temp=this.state.stage;
  //   if (temp>0) {
  //     temp--;
  //     this.setState({ stage: temp });
  //   }
  // }

  render(){
    const currentStage=this.state.stage;
    var scene=null;
    switch (currentStage) {
      case 0:
      scene=(<Question next={this.next}
        a1="I Do" a2="I Don't"
        response="Then blue it is!"
        onResponse={this.props.sky}>
        Say... <br/> Do you like blue? <br/> <span className="blue-txt">Sky blue</span> to be exact
      </Question>);
        break;
      case 1:
      scene=(<Message next={this.next}>
        Now that we got something started... <br/> we need... <br/> Hmmm...
      </Message>);
        break;
      case 2:
        scene=(<div><Message next={this.next} onShown={this.props.sea}>
          Sea?
        </Message></div>);
        break;
      case 3:
      scene=(<Message next={this.next} onShown={this.props.island}>
        Island?
      </Message>);
        break;
      case 4:
      scene=(<div><Message next={this.next} onShown={this.props.trees}>
        Palm trees!
      </Message></div>);
        break;
      case 5:
      scene=(<Message next={this.next} onShown={this.props.sun}>
        Can't forget about the sun!
      </Message>);
        break;
      default:
        scene=(<Question next={this.props.next}
          a1="great" a2="fantastic"
          response="Aww... THANKS!">
          What do you think?
        </Question>);
    }
    return(
      <div className="base">
        {scene}
        {/* TODO debug only */}
        {/* <div style={{position: 'absolute', top: 140+'px'}}>
          <h3>Current Stage: {this.state.stage}</h3>
          <a className="button" onClick={this.back}>Back</a>
          <a className="button" onClick={this.next}>Next</a>
        </div> */}
      </div>
    );
  }
}

export default Draw;
