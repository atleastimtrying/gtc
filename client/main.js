var React = require('react');
var ReactRouter = require('react-router');
var history = require('history').createHistory();

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./app');
var Landing = require('./landing');
var Create = require('./create');
var Join = require('./join');
var Play = require('./play');

window.addEventListener('load', function(){
  React.render(
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="join" component={Join}/>
        <Route path="create" component={Create}/>
        <Route path="play" component={Play}/>
      </Route>
    </Router>
  , document.body);
});


