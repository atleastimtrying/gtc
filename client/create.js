var React = require('react');
module.exports = React.createClass({
  displayName: "Create",
  new_code: function(){
    return 'abced';
  },
  render: function(){
    return(
      <div className="wrapper">
        <h1>Create a game</h1>
        <p>A new game has been set up, get other people to join by sharing this sign up code with them</p>
        <p>{this.new_code()}</p>
      </div>
    );
  }
});


