var React = require('react');

var TimerButton = React.createClass({
  handleClick: function(){
    this.props.onClick(this);
  },
  render: function(){
    return (
<<<<<<< HEAD
      <div className="col col-4 px2 py3 border center btn muted" onClick={this.handleClick}>{this.props.timing}</div>
=======
      <div className="col col-4 px2 py3 border center btn" onClick={this.handleClick}>{this.props.timing}</div>
>>>>>>> gh-pages
    )
  }
});

module.exports = TimerButton;
