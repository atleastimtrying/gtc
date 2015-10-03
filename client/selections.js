var React = require('react');
module.exports = React.createClass({
  displayName: "Selections",
  remove: function(){
    this.props.onRemove(this.props.selection);
  },
  render: function(){
    var selections = this.props.selections.map(function(selection){
      return(<div className="selection" onClick={this.remove()} style={{backgroundColor: this.props.selection}} />);
    }, this);
    return(
      <div className="selections">
        {selections}
      </div>
    );
  }
});



