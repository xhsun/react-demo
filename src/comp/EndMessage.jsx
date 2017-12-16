import React, {Component} from 'react';

class EndMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: 'ending-msg no-show',
      line2: 'ending-msg no-show'
    };

    this.showLines = this.showLines.bind(this);
  }

  showLines() {
    var time = 500;
    var current = this;
    if (this.props.reset != null) {
      this.props.reset.bind(this);
      this.props.reset();
    }
    setTimeout(function() {
      current.setState({line1: 'ending-msg'});
    }, time);
    setTimeout(function() {
      current.setState({line2: 'ending-msg'});
    }, time * 3);
  }

  render() {
    var profileLink = "http://www.xhsun.me";
    var reactLink = "https://reactjs.org/";
    return (<div className="center center-text">
      <h1 className={this.state.line1}>I'm <a className="name" href={profileLink}>Hannah Sun</a></h1>
      <h1 className={this.state.line2}>This is my <a className="react" href={reactLink}>React.js</a> demo</h1>
      {this.showLines()}
    </div>);
  }
}

export default EndMessage;
