import React, { Component } from 'react';
import Question from './Question.jsx';
import Pops from './effects/Glow.jsx';
import Annoyance from './effects/Glitch.jsx';
import Movement from './effects/Movement.jsx';

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
        scene=<Question next={this.props.next}
          question="Hmm... \n We are getting a little ahead of ourselves... \n aren't we?"
          a1="Yes" a2="No, just you"
              response="OH Well..."/>;
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

export default Effects;
