import $ from 'jquery';
import router from '../router';

let $nav = $(`
    <ul>
      <li>Read</li>
      <li>Write</li>
      <li>Join</li>
    </ul>
`);

$nav.find('li').on('click', function(evt){
  evt.preventDefault();
  // console.log($(this)[0].outerText);
  let navLink = $(this)[0].outerText.toLowerCase();
  router.navigate(navLink, {trigger: true});
});

export default $nav;
