// import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';
import user from './username';

const Member = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/day23_B-Log_sriester',
  defaults: {
    username: user.username,
    joinedOn: moment().format('MMMM Do YYYY'),
    memberSince: moment('20120620', 'YYYYMMDD').fromNow()
  }
});

export default Member;
