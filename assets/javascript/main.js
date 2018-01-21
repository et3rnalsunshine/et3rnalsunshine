document.getElementsByClassName('menu__item--expandable')[0].addEventListener('click', onMenuToggle);
document.addEventListener('click', onMenuBlur);
document.addEventListener('touchstart', function() {
    console.log('something');
});

function onMenuBlur(event) {
  var target = bonzo(event.target);
  var isAnExpandableMenu = target.hasClass('menu__item__text');
  var isAnExpandedSubMenu = target.hasClass('menu__item__list--expanded');
  var subMenus = bonzo(document.querySelector('.menu__item__list'));

  if(!(isAnExpandedSubMenu || isAnExpandableMenu)) {
    subMenus.removeClass('menu__item__list--expanded');
  }
};

function onMenuToggle() {
    bonzo(this.querySelector('.menu__item__list')).toggleClass('menu__item__list--expanded');
};