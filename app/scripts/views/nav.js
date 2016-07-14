import $ from 'jquery';
import router from '../router';

function renderNav () {
  let $nav = $(`
      <ul>
        <li>read</li>
        <li>write</li>
        <li>join</li>
      </ul>
  `);

  $nav.find('li').on('click', function(evt){
    evt.preventDefault();
    // console.log($(this));
    let navLink = $(this)[0].innerText.toLowerCase();
    // if (router.routes[navLink]){  router.navigate(navLink, {trigger: true});
    // }
    // } else {
    //   'bloposts/' + navLink;
    // }
    router.navigate(navLink, {trigger: true});
  });

  return $nav;
}

export default renderNav;
