var React = require('react');
module.exports = React.createClass({
  displayName: "Colour",
  render: function(){
    return(
      <div className="colour" style={{backgroundColour: this.props.colour}} />
    );
  }
});



