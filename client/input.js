var React = require('react');
var average_rgb = require('./average_rgb');
var rgb_to_h = require('./rgb_to_h');
var canvas_video = require('./canvas_video');
module.exports = React.createClass({
  displayName: "Input",

  getInitialState: function(){
    return {colour:"goldenrod"};
  },

  componentDidMount: function(){
    canvas_video.start();
    this.loop();
  },

  componentWillUnmount: function(){
    canvas_video.stop();
  },

  loop: function(){
    this.setState({ colour: this.calculate_rgb() });
    setTimeout(this.loop, 500);
  },

  add_selection: function(){
    this.props.colour_determined(this.state.colour);
  },

  calculate_rgb: function(){
    var context = canvas_video.get_context();
    var rgb = average_rgb(context);
    return "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + " )";
  },

  render: function(){
    var style = { backgroundColor: this.state.colour };
    console.log(style);
    return(
      <div className="input" onClick={this.add_selection} style={style} />
    );
  }
});



