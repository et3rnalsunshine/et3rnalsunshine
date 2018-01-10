document.getElementsByClassName('menu__item--expandable')[0].addEventListener('click', function() {
    bonzo(this.querySelector('.menu__item__list')).toggleClass('menu__item__list--expanded');
});

document.addEventListener('click', function(event) {
  var target = bonzo(event.target);
  var isAnExpandableMenu = target.hasClass('menu__item__text');
  var isAnExpandedSubMenu = target.hasClass('menu__item__list--expanded');
  var subMenus = bonzo(document.querySelector('.menu__item__list'));

  if(!(isAnExpandedSubMenu || isAnExpandableMenu)) {
    subMenus.removeClass('menu__item__list--expanded');
  }
});