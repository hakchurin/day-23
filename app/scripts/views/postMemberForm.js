import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import Member from '../models/member';
import user from '../models/username';

function renderMemberForm() {
  console.log('you\'re on the member form page!');
    let $joinForm = $(`
      <div class="joinContainer">
        <form>
          <input id="first" type="text" name="first-name" placeholder="First name">
          <input id="last" type="text" name="last-name" placeholder="Last name">
          <input id="address" type="text" name="address" placeholder="Address">
          <input id="phone" type="text" name="phone" placeholder="Phone number">
          <input id="submitBtn" type="submit" name="submit" value="submit">
        </form>
      </div>
    `);

  $joinForm.find('#submitBtn').on('click', function(evt) {
    evt.preventDefault();
    let member = new Member({
        firstName: $('#first').val(),
        lastName: $('#last').val(),
        address: $('#address').val(),
        phone: $('#phone').val()
    });
    console.log(member, '===member');

    member.save(null, {
        success: function(response) {
          router.navigate('blogposts', {trigger: true});
        },
        error: function() {}
    });
  });
  return $joinForm;
}

export default renderMemberForm;
