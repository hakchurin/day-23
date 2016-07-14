import $ from 'jquery';
import Backbone from 'backbone';

import $login from './views/login';
import renderNav from './views/nav';
import renderMemberForm from './views/postMemberForm';
import renderBlogposts from './views/blogposts';
import renderBlogpostForm from './views/postBlogForm';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    join: 'joinFunction',
    read: 'blogpostsFunction',
    write : 'newBlogpostFunction'
    // 'blogposts/:id' : 'blogpostFunction'
  },
  loginFunction(){
    $('.appContainer').empty().append($login);
  },
  joinFunction(){
    let $memberForm = renderMemberForm();
    let $navBar = renderNav();
    $('.appContainer').empty().append($navBar).append($memberForm);
  },
  blogpostsFunction(){
    let $blogpostPage = renderBlogposts();
    let $navBar = renderNav();
    $('.appContainer').empty().append($navBar).append($blogpostPage);
  },
  newBlogpostFunction(){
    // console.log();
    let $newBlogpost = renderBlogpostForm();
    let $navBar = renderNav();
    $('.appContainer').empty().append($navBar).append($newBlogpost);
  },
  // blogpostFunction(){
  //
  // }
});

const router = new Router();

export default router;
