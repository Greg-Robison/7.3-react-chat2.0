var React = require('react');

var models = require('../models/chat.js');



var Layout = React.createClass({
  getInitialState: function(){
    var self = this;
    var chatCollection = new models.ChatCollection();
    chatCollection.fetch().done(function(){
      self.setState({chatCollection: chatCollection});
    });
    return{
      chatCollection: chatCollection
    };
  },
  addChat: function(chatItem){
    var chatList = this.state.chatList;
    chatList.create(chatItem);
    this.setState({chatList: chatList});
  },
   render: function(){
     return (
       <div className="container">
           <div className="row">
              <h1 className="hello">Hello {this.props.router.username}</h1>
           </div>
           <div className="row">
               <div className="col-md-12">
                   <h1 className="heading">The Cool Place To Chat!!</h1>
               </div>
           </div>
           <div className="row">
              <ChatInput addChat={this.addChat}/>
              <ChatOutput chatItems={this.state.chatCollection}/>
           </div>
       </div>

     )}
   });

var ChatInput = React.createClass({
  getInitialState: function(){
    return {
      title: ''
    }
  },
  handleChatChange: function(event){
    this.setState({title: event.target.value});
  },
  addChat: function(event){
    event.preventDefault();
    this.props.addChat(this.state);
    this.setState({title: ''});
  },
  render: function(){
    return(
      <div className="col-md-6">
          <label htmlFor=""><h2 className="sub-heading-left">Input Your Cool Chat!!</h2></label>
          <form onSubmit={this.addChat} className="form-inline" action="index.html" method="post">
              <input  className="btn btn-danger" type="submit" name="" value="Send Your Cool Chat" />
              <textarea onChange={this.handleChatChange} className="form-control" rows="3"></textarea>
          </form>
      </div>
    )
  }
});
var ChatOutput = React.createClass({
  render: function(){
    var items = this.props.chatItems.map(function(chat){
      return(
        <textarea key={chat.cid} className="form-control" rows="3"></textarea>
      );
    });

    return(
      <div className="col-md-6">
          <form>
              <div className="form-group">
                  <label htmlFor=""><h2>Cool Chats!</h2></label>
                    {items}
              </div>
         </form>
      </div>
    )
  }
});
var Login = React.createClass({
  getInitialState: function(){
    return {
      'username': ''
    }
  },
  handleUsernameChange: function(event){
    this.setState({username: event.target.value});
  },
  handleLogin: function(event){
    event.preventDefault();
    var router = this.props.router;
    router.username = this.state.username;
    router.navigate('', {trigger: true});
  },
  render: function(){
    return(
      <div className="col-md-12">
          <form onSubmit={this.handleLogin}className="login form-inline" action="index.html" method="post">

              <input onChange={this.handleUsernameChange}type="text" className="form-control" placeholder="Username" />
              <button type="submit" className="btn btn-danger">Sign In</button>
          </form>
      </div>
    )
  }
});

   module.exports = {
   Layout,
   Login
 };
