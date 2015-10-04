var React = require('react');
var socket = io();
module.exports = React.createClass({
  displayName: "App",
  componentDidMount: function(){
    socket.on('play_game', this.play_game);
  },
  play_game: function(code){
    if(code === localStorage.getItem("code")){
      window.location.assign('/play');
    }
  },
  render: function(){
    return(
      <div className="app">
        {this.props.children}
      </div>
    );
  }
});

