var React = require('react');
var socket = io();
var Player = require('./player');
module.exports = React.createClass({
  displayName: "Create",

  getInitialState: function(){
    return {code: false, players: []};
  },

  componentDidMount: function(){
    socket.on('code_created', this.code_created);
    socket.on('new_player', this.new_player);
    socket.emit('create_game');
  },

  componentWillUnMount: function(){
    socket.off('code_created', this.code_created);
    socket.off('new_player', this.new_player);
  },

  new_player: function(player){
    this.state.players.push(player);
    this.setState(this.state);
  },

  code_created: function(code){
    this.state.code = code;
    this.setState(this.state);
  },

  show_code: function(){
    if(this.state.code){
      return(
        <p>{this.state.code}</p>
      );
    }else{
      return(<p>Fetching code...</p>)
    }
  },

  start_game: function(){
    socket.emit('start_game', this.state);
  },

  show_players: function(){
    return(this.state.players.map(function(player, index){
      return(<Player player={player} />);
    }, this));
  },
  show_start_btn: function(){
    if(this.state.players.length > 0){
      return(<button onClick={this.start_game}>Start!</button>);
    }
  },

  render: function(){
    return(
      <div className="wrapper">
        <h1>Create a game</h1>
        <p>This is your control panel screen, please leave this open while you play on other devices!</p>
        {this.show_code()}
        {this.show_players()}
        {this.show_start_btn()}
      </div>
    );
  }
});


