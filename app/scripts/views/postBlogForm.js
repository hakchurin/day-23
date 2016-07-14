import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import Member from '../models/member';
import user from '../models/username';

function renderBlogpostForm() {
  console.log('you\'re on the new blog post form page!');

    let $blogForm = $(`
      <div class="joinContainer">
        <form>
          <input id="title" type="text" name="title" placeholder="title">
          <textarea id="body" name="body" placeholder="we (B)log together..."></textarea>
          <input id="submitBtn" type="submit" name="submit" value="submit">
        </form>
      </div>
    `);

  $blogForm.find('#submitBtn').on('click', function(evt) {
    evt.preventDefault();
    let blogpost = new Blogpost({
        title: $('#title').val(),
        body: $('#body').val()
    });
    console.log(blogpost, ' === blogpost');

    blogpost.save(null, {
        success: function(response) {
          router.navigate('blogposts', {trigger: true});
        },
        error: function() {}
    });
  });
  return $blogForm;
}

export default renderBlogpostForm;
