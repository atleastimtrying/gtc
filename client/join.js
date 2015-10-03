var React = require('react');
module.exports = React.createClass({
  displayName: "Join",
  submit_code: function(){
    console.log(this.refs.code.getDOMNode().value);
  },
  render: function(){
    return(
      <div className="wrapper">
        <h1>Join a game</h1>
        <p>Someone gave you a join code, enter it below to join the game!</p>
        <input type="text" ref="code"/>
        <button onClick={this.submit_code}>Submit</button>
      </div>
    );
  }
});


