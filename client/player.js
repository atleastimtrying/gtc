var React = require('react');
module.exports = React.createClass({
  displayName: "Player",
  render: function(){
    return(
      <div className="player">
        <h1>{this.props.player.name}</h1>
        <p>{this.props.player.state}</p>
        <p>{this.props.player.colour}</p>
      </div>
    );
  }
})
