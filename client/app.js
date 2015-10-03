var React = require('react');
module.exports = React.createClass({
  displayName: "App",
  render: function(){
    return(
      <div className="app">
        {this.props.children}
      </div>
    );
  }
});

