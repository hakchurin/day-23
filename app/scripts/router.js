import $ from 'jquery';
import Backbone from 'backbone';

import $login from './views/login';
import $nav from './views/nav';
import renderMemberForm from './views/postMemberForm';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    join: 'joinFunction',
    blogposts: 'blogpostsFunction',
    'blogposts/new' : 'newBlogpostFunction',
    'blogposts/:id' : 'blogpostFunction'
  },
  loginFunction(){
    $('.appContainer').empty().append($login);
  },
  joinFunction(){
    let $memberForm = renderMemberForm();
    $('.appContainer').empty().append($nav).append($memberForm);
  },
  blogpostsFunction(){},
  newBlogpostFunction(){},
  blogpostFunction(){}
});

const router = new Router();

export default router;
