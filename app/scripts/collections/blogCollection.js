import Backbone from 'backbone';
// import moment from 'moment';

// import user from './username';
// import Member from './member';
import Blogpost from '../models/blogpost';

const BlogCollection = Backbone.Collection.extend({
  url: 'https://tiny-za-server.herokuapp.com/collections/day23_B-Log_sriester-blogposts',
  model: Blogpost
});

let blogCollection = new BlogCollection();

export default blogCollection;
