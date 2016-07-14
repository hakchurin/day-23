import Backbone from 'backbone';
// import moment from 'moment';

// import user from './username';
import Member from '../models/member';
// import Blogpost from './blogpost';

const MemberCollection = Backbone.Collection.extend({
  url: 'https://tiny-za-server.herokuapp.com/collections/day23_B-Log_sriester-members',
  model: Member
});

export default MemberCollection;
