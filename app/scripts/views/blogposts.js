import $ from 'jquery';
import Backbone from 'backbone';
// import dotdotdot from 'dotdotdot';

import router from '../router';
import user from '../models/username';

import memberCollection from '../collections/memberCollection';
import Member from '../models/member';
import renderMemberForm from './postMemberForm';

import blogCollection from '../collections/blogCollection';
import Blogpost from '../models/blogpost';
import renderBlogpostForm from './postBlogForm';


//import collections from here to get the whole thing to be displayed!
function renderBlogposts() {

    let $sideBlogList = $(`
    <div class="side-blog-list">
      <ul>
      </ul>
    </div>
    `);

    function addBlogToList(model) {
        let $liContainer = $(`
          <li>
            <h2>${model.get('username')}</h4>
            <h3>${model.get('title')}</h3>
            <p>${model.get('body')}</p>
          </li>
        `);
        $sideBlogList.find('ul').append($liContainer);
    }


    blogCollection.forEach(addBlogToList);
    blogCollection.on('add', addBlogToList);
    blogCollection.fetch();

    let $sideBlog = $(`
      <ul id="single-blog">
        <li>

        <li>
      </ul>
      `);




  return $sideBlogList;
}

export default renderBlogposts;
