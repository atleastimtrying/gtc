var React = require('react');
var Colour = require('./colour');
var Selections = require('./selections');
var Input = require('./input');
module.exports = React.createClass({
  displayName: "Play",

  getInitialState: function(){
    return {selections: ['green']};
  },

  remove_selection: function(colour){
    var selections = this.state.selections.filter(function(selection){
      return selection !== colour;
    });
    this.setState({selections: selections});
  },

  add_selection: function(selection){
    var selections = this.state.selections.concat([selection]);
    this.setState({selections: selections});
  },

  render: function(){
    return(
      <div className="wrapper">
        <Colour colour="#FFF000"/>
        <Selections selections={this.state.selections} onRemove={this.remove_selection}/>
        <Input colour_determined={this.add_selection}/>
      </div>
    );
  }
});



