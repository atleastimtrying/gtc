var React = require('react');
module.exports = React.createClass({
  displayName: "Selections",
  remove: function(selection){
    this.props.onRemove(selection);
  },

  generate_selections: function(){
    return this.props.selections.map(function(selection, index){
      return(<div key={index} className="selection" onClick={this.remove.bind(this, selection)} style={{backgroundColor: selection}} />);
    }, this);
  },

  render: function(){
    var selections = this.generate_selections();
    return(
      <div className="selections">
        {selections}
      </div>
    );
  }
});



