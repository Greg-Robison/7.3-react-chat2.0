var Backbone = require('backbone');

var Chat = Backbone.Model.extend({
  idAttribute: '_id',

});

var ChatCollection = Backbone.Collection.extend({
  model: Chat,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/greg'
});

module.exports = {
  Chat,
  ChatCollection
};
