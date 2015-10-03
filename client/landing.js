var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  displayName: "Landing",
  render: function(){
    return(
      <div className="wrapper">
        <h2>Get that colour!</h2>
        <p>A local multiplayer game where finding the closest colour is your goal</p>
        <Link to="/create" className="btn">Create a game!</Link>
        <Link to="/join" className="btn">Join a game!</Link>
      </div>
    );
  }
});

