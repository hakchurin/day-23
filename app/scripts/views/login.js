import $ from 'jquery';
import router from '../router';
import user from '../models/username';

let $login = $(`
  <div id="login-page">
    <div class="login-modal">
      <h2>we (B)log together...</h2>
      <input id="login-input" type="text" name="username" placeholder="username..." />
      <input type="submit" name="submit" value="submit" />
      <input type="button" name="sign-up" value="sign up" />
    </div>
  </div>
  `);

  $login.find('input[type="button"]').on('click', function(evt){
    $('.joinContainer').empty();
    // evt.preventDefault();
    let $joinForm = $(`
      <div class="joinContainer">
        <form class="joinForm">
          <input id="first" type="text" name="first-name" placeholder="First name">
          <input id="last" type="text" name="last-name" placeholder="Last name">
          <input id="address" type="text" name="address" placeholder="Address">
          <input id="phone" type="text" name="phone" placeholder="Phone number">
          <input id="submitBtn" type="submit" name="submit" value="submit">
        </form>
      </div>
    `);
    $('.joinForm').toggleClass('show-form');
    $login.find('.login-modal').append($joinForm);
  });


$login.find('input[type="submit"]').on('click', function(evt){
  evt.preventDefault();
  user.username = $('#login-input').val();
  $('#login-input').val('');
  router.navigate('write', {trigger: true});
  console.log(user.username, ' === user.username');
});

export default $login;
