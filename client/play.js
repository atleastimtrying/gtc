var React = require('react');
var Colour = require('./colour');
var Selections = require('./selections');
var Input = require('./input');
module.exports = React.createClass({
  displayName: "Play",
  getInitialState: function(){
    return {selections: []};
  },
  remove_selection: function(colour){
    var new_selections = this.state.selections.filter(function(selection){
      return selection !== colour;
    });
    this.setState({selections: new_selections});
  },
  add_selection: function(selection){
    this.state.selections.push(selection);
    this.setState(this.state);
  },
  render: function(){
    return(
      <div className="wrapper">
        <Colour colour="#FFF000"/>
        <Selections selections={this.state.selections} onRemove={this.remove_selection}/>
        <Input onClick={this.add_selection}/>
      </div>
    );
  }
});



