import React, { Component } from 'react';
import Question from './comp/parts/Question.jsx';
import Effects from './comp/Effects.jsx';
import Draw from './comp/DrawScene.jsx';
import './sass/main.css';
import Clear from './assets/clear.svg';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      step: 0,
      sky: '',
      waveFront: 'wave front-wave hide-items',
      waveMid: 'wave mid-wave hide-items',
      waveBack: 'wave back-wave hide-items',
      island: 'island hide-items',
      treeRight: 'tree right-tree no-show',
      treeLeft: 'tree left-tree no-show',
      sun: 'sun hide-sun',
    };

    this.next = this.next.bind(this);
    this.reset = this.reset.bind(this);

    this.drawSky =this.drawSky.bind(this);
    this.drawSea =this.drawSea.bind(this);
    this.drawIsland =this.drawIsland.bind(this);
    this.drawTree =this.drawTree.bind(this);
    this.drawSun =this.drawSun.bind(this);
  }

  //Advance to next scene
  next(){
    var newStep=this.state.step;
    newStep++;
    this.setState({ step: newStep });
  }

  //TODO debug only
  back=()=>{
    var temp=this.state.step;
    if (temp>0) {
      temp--;
      this.setState({step: temp});
    }
  }

  //reset canvas
  reset() {
    this.setState({ step: 0 });
  }

  drawSky(){
    this.setState({sky: 'draw-sky'});
  }

  drawSea(){
    var time=500;
    var current=this;

    var w1=this.state.waveFront.replace('hide-items','draw-front-wave');
    var w2=this.state.waveMid.replace('hide-items','draw-mid-wave');
    var w3=this.state.waveBack.replace('hide-items','draw-back-wave');

    this.setState({waveFront: w1});
    setTimeout(function(){
      current.setState({waveMid: w2});
    }, time);
    setTimeout(function(){
      current.setState({waveBack: w3});
    }, time*2);
  }

  drawIsland(){
    var temp=this.state.island.replace('hide-items','draw-island');
    this.setState({island: temp});
  }

  drawTree(){
    var time=500;
    var current=this;
    var t1=this.state.treeRight.replace('no-show','draw-right-tree');
    var t2=this.state.treeLeft.replace('no-show','draw-left-tree');

    this.setState({treeRight: t1});
    setTimeout(function(){
      current.setState({treeLeft: t2});
    }, time);
  }

  drawSun(){
    var temp=this.state.sun.replace('hide-sun','draw-sun');
    this.setState({sun: temp});
  }

  render() {
    // TODO change following link to the actual link of this project
    var projectLink="http://www.xhsun.me";

    const currentStep=this.state.step;
    var scene=null;
    switch (currentStep) {
      case 0:
        scene=(<Question next={this.next}
          a1="Good" a2="Great"
               response="Nice!">
          Hi there! <br/> How are you today?
        </Question>);
        break;
      case 1:
        scene=<Effects next={this.next}/>;
        break;
      case 2:
        scene=<Draw sky={this.drawSky}
          sea={this.drawSea}
          island={this.drawIsland}
          trees={this.drawTree}
          sun={this.drawSun}
          next={this.next}/>;
        break;
      default:
        scene=null;//TODO change this to last scene
    }
    return (
      <div className="App">
        <a className="exit" href={projectLink}><img src={Clear} alt="exit"/></a>
        {scene}
        {(this.state.step > 1)?(
          <div>
            <span className={this.state.sky}></span>

            <span className={this.state.waveFront}></span>
            <span className={this.state.waveMid}></span>
            <span className={this.state.waveBack}></span>

            <span className={this.state.island}></span>
            <span className={this.state.treeRight}></span>
            <span className={this.state.treeLeft}></span>

            <span className={this.state.sun}></span>
          </div>
        ):null};

        {/* TODO debug only */}
        <div style={{position: 'absolute', top: 0+'px'}}>
          <h3>Current Step: {this.state.step}</h3>
          <a className="button" onClick={this.back}>Back</a>
          <a className="button" onClick={this.next}>Next</a>
        </div>

      </div>
    );
  }
}

export default App;
