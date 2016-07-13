import $ from 'jquery';
import router from '../router';
import user from '../models/username';

let $login = $(`
  <div id="login-page">
    <div class="login-modal">
      <h2>you (B)log here...</h2>
      <input id="login-input" type="text" name="username" placeholder="username..." />
      <input type="submit" name="submit" value="submit" />
    </div>
  </div>
  `);

$login.find('input[type="submit"]').on('click', function(evt){
  evt.preventDefault();
  user.username = $('#login-input').val();
  $('#login-input').val('');
  router.navigate('join', {trigger: true});
});

export default $login;
