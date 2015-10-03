var React = require('react');
var socket = io();
module.exports = React.createClass({
  displayName: "Join",

  getInitialState: function(){
    return {code: false, name: '', state: 'not joined', colour: 'orange'}
  },

  submit_code: function(){
    var code = this.refs.code.getDOMNode().value;
    var name = this.refs.name.getDOMNode().value;
    localStorage.setItem('code', code);
    this.setState({code: code, name: name, state: 'joined', colour: 'aliceblue'});
    socket.emit('join', {code: code, name: name, state: 'joined', colour: 'aliceblue'});
  },

  render: function(){
    if(this.state.state === 'joined'){
      return(
        <div className="wrapper" style={{background: this.state.colour}}>
          <p>You have joined {this.state.code}</p>
          <p>Please wait for your controller ot start the game</p>
        </div>
      );
    }else{
    return(
      <div className="wrapper" style={{background: this.state.colour}}>
        <h1>Join a game</h1>
        <p>Someone gave you a join code, enter it below to join the game!</p>
        <input type="text" ref="name" placeholder="Enter name"/>
        <input type="text" ref="code" placeholder="Enter code"/>
        <button onClick={this.submit_code}>Submit</button>
      </div>
    );
    }
  }
});


