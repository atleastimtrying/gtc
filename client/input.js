var React = require('react');
module.exports = React.createClass({
  displayName: "Input",

  add_selection: function(){
    this.props.onClick("#ff0fF0");
  },

  render: function(){
    return(
      <div className="input" onClick={this.add_selection}>
      </div>
    );
  }
});



