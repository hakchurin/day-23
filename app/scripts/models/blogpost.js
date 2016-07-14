import Backbone from 'backbone';
import moment from 'moment';

import user from './username';
import Member from './member';

const Blogpost = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/day23_B-Log_sriester-blogposts',
  idAttribute: '_id',
  defaults: {
    username: user.username,
    timestamp: moment().format('MMMM Do YYYY'),
  }
});

export default Blogpost;
