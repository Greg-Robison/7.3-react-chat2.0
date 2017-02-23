var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Login = require('./components/index.jsx').Login;
var Layout = require('./components/index.jsx').Layout;
var ChatInput = require('./components/index.jsx').ChatInput;

var Router = Backbone.Router.extend({
  routes:{
    "username": 'signIn',
    "": 'index'
  },
  index: function(){
    console.log('index was run');
    ReactDOM.render(
      React.createElement(Layout),
      document.getElementById('app')
    );

  },
  signIn: function(){
    ReactDOM.render(
      React.createElement(Login),
      document.getElementById('app')
    );
  },
  // index: function(){
  //   console.log('index was run');
  //   ReactDOM.render(
  //     React.createElement(ChatInput),
  //     document.getElementById('app')
  //   );
  //
  // },
});
var chatRouter = new Router();
module.exports = {
  chatRouter
};
