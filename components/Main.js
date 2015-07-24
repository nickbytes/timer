var React = require('react');
var TimerButton = require('./TimerButton');
var FitterHappierText = require('react-fitter-happier-text')

var Main = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 10};
  },
  tick: function() {
    if (this.state.secondsElapsed > 0) {
      this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    }
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  handleClick: function(childComponent){
    this.setState({secondsElapsed: childComponent.props.timing});
  },
  render: function() {

    return (
      <div>
        <div className="flex flex-center" style={{height: '75vh'}}>
          <div className="mx-auto center white h1 muted" style={{fontSize: '100px'}}>{this.state.secondsElapsed}</div>
        </div>


        <div className="white absolute bottom-0 left-0 right-0">
          <TimerButton timing="10" onClick={this.handleClick}/>
          <TimerButton timing="30" onClick={this.handleClick}/>
          <TimerButton timing="60" onClick={this.handleClick}/>
          <TimerButton timing="90" onClick={this.handleClick}/>
          <TimerButton timing="120" onClick={this.handleClick}/>
          <TimerButton timing="400" onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
});

React.render(<Main />, document.getElementById('app'));
