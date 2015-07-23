var React = require('react');

var TimerButton = React.createClass({
  handleClick: function(){
    this.props.onClick(this);
  },
  render: function(){
    return (
      <div className="col col-4 px2 py3 border center" onClick={this.handleClick}>{this.props.timing}</div>
    )
  }
});

module.exports = TimerButton;
