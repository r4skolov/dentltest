let header = document.querySelector('.header');
// ========== фикс шапки
window.onscroll = () => {
  let Y = window.scrollY;
  if (Y > 108) {
    header.classList.add('fixed-block');
    header.classList.add('header__fixed');
    document.body.style.paddingTop = 101 + 'px';
  } else if (Y < 100) {
    header.classList.remove('header__fixed');
    header.classList.remove('fixed-block');
    document.body.style.paddingTop = 0 + 'px';
  }

}
// ==============================================


//=======================попапы
const showPopupBtns = document.querySelectorAll('.js-show-popup');
const popups = document.querySelectorAll('.js-popup');
const body = document.body;
const overlay = document.querySelector('.js-overlay');

const CLASS_ACTIVE = 'active';
const CLASS_OVERFLOW = '_scroll-disabled';



const showPopup = (event) => {
  const openBtn = event.target.closest('.js-show-popup');
  const activePopup = document.querySelector('.js-popup.active');
  const targetPopup = document.querySelector(`[data-popup=${openBtn.dataset.trigger}]`);


  if (activePopup) {
    activePopup.classList.remove(CLASS_ACTIVE);

  }

  if (openBtn.dataset.tab) {
    targetPopup.querySelector(`[data-tab="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTIVE);
    targetPopup.querySelector(`[data-content="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTIVE);

  }

  targetPopup.classList.add(CLASS_ACTIVE);
  body.classList.add(CLASS_OVERFLOW);
  overlay.classList.add(CLASS_ACTIVE);

};

const hidePopup = (activePopup) => {
  if (!activePopup) {
    return;
  }
  body.classList.remove(CLASS_OVERFLOW);
  overlay.classList.remove(CLASS_ACTIVE);
  activePopup.classList.remove(CLASS_ACTIVE);
  document.body.style.paddingRight = '0px';

  if (document.querySelector('.active[data-content]') && document.querySelector('.active[data-tab]')) {
    document.querySelector('.active[data-content]').classList.remove(CLASS_ACTIVE);
    document.querySelector('.active[data-tab]').classList.remove(CLASS_ACTIVE);
  }
};

const showPopupInit = () => {
  if (showPopupBtns.length) {
    showPopupBtns.forEach((opener) => {
      opener.addEventListener('click', (event) => {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.style.paddingRight = paddingOffset;
        let headerTwo = document.querySelector('.fixed-block');
        let Y = window.scrollY;
        if (Y > 250) {
          headerTwo.style.paddingRight = paddingOffset;
        }
        showPopup(event);
      });
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      hidePopup(document.querySelector('.js-popup.active'));
      let headerTwo = document.querySelector('.fixed-block');
      let Y = window.scrollY;
      if (Y > 250) {
        headerTwo.style.paddingRight = '0px';
      }
    });
  }
  if (popups.length) {
    popups.forEach((popup) => {
      popup.addEventListener('click', (event) => {
        const closeBtn = event.target.closest('.js-popup-close');

        if (!closeBtn) {
          return;
        }
        hidePopup(popup);
        let headerTwo = document.querySelector('.fixed-block');
        let Y = window.scrollY;
        if (Y > 250) {
          headerTwo.style.paddingRight = '0px';
        }
      });
    });
  }
};

if (popups.length) {
  showPopupInit();
}
//======================================================

// счетчик карты товара

window.addEventListener('click', function (event) {

  let counter;

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

    const counterWrapper = event.target.closest('.counter-wrapper');

    counter = counterWrapper.querySelector('[data-action="counter"]');
  }

  if (event.target.dataset.action === 'plus') {
    counter.value = ++counter.value;
  }

  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.value) > 1) {
      counter.value = --counter.value;
    }
  }
});
//====================================================

// бургер меню - каталог 

function burgerMenu() {
  function disableScroll() {
    let pagePosition = window.scrollY;
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    let headerTwo = document.querySelector('.fixed-block');
    let Y = window.scrollY;
    document.body.classList.add('scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.paddingRight = paddingOffset;

    if (Y > 250) {
      headerTwo.style.paddingRight = paddingOffset;
    }
  }

  function enableScroll() {

    let headerTwo = document.querySelector('.fixed-block');
    let Y = window.scrollY;
    document.body.classList.remove('scroll');
    document.body.removeAttribute('data-position');
    document.body.style.paddingRight = '0px';
    if (Y > 250) {
      headerTwo.style.paddingRight = '0px';
    }

  }

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuMobile = document.querySelector('.header__top');
  const catalogMobile = document.querySelector('.js-menu-mobile');


  if (window.innerWidth >= 768) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('menu--active');
      menu.classList.add('overlaybg');

      if (burger.classList.contains('burger--active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });

  }

  if (window.innerWidth < 768) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      menuMobile.classList.toggle('active');
      if (burger.classList.contains('burger--active')) {
        disableScroll();
      } else {
        enableScroll();
      }
      if (menu.classList.contains('menu--active')) {
        menu.classList.remove('menu--active');
        catalogMobile.classList.remove('active');
      }

      catalogMobile.addEventListener('click', () => {
        catalogMobile.classList.toggle('active');
        menu.classList.toggle('menu--active');

      })
    })
  }



  const menuBtn = document.querySelectorAll('.menu__btn')
  const menuRight = document.querySelectorAll('.menu__right')
  const menuItem = document.querySelectorAll('.menu__list-item');
  const menuBack = document.querySelectorAll('.menu__back');

  menuBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let rightMenu = currentBtn.closest('.menu__list-item').querySelector('.menu__right');
      let currentLi = currentBtn.closest('.menu__list-item');

      menuBtn.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('active')
        }
      });

      menuRight.forEach(el => {
        if (el !== rightMenu) {
          el.classList.remove('active')
        }
      });

      menuItem.forEach(el => {
        if (el !== currentLi) {
          el.classList.remove('active')
        }
      });

      rightMenu.classList.toggle('active');
      currentLi.classList.toggle('active');
      currentBtn.classList.toggle('active');

    })

  });

  menuBack.forEach(el => {
    el.addEventListener('click', (e) => {

      if (e.target.classList.contains('menu__back')) {
        menuRight.forEach(el => {
          el.classList.remove('active')
        });

        menuBtn.forEach(el => {
          el.classList.remove('active')
        });

        menuItem.forEach(el => {
          el.classList.remove('active')
        });
      }
    });
  });

  const menuBtnDown = document.querySelectorAll('.menu__dropdown-btn');
  const menuDropDown = document.querySelectorAll('.dropdown-list');
  const menuDropItem = document.querySelectorAll('.menu__dropdown-item');

  menuBtnDown.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let currentDrop = currentBtn.closest('.menu__dropdown-item').querySelector('.dropdown-list');
      let currentLi = currentBtn.closest('.menu__dropdown-item');



      menuBtnDown.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('active')
        }
      });

      menuDropDown.forEach(el => {
        if (el !== currentDrop) {
          el.classList.remove('active')
        }
      });

      menuDropItem.forEach(el => {
        if (el !== currentLi) {
          el.classList.remove('active')
        }
      });


      currentLi.classList.toggle('active');
      currentDrop.classList.toggle('active');
      currentBtn.classList.toggle('active');
    })
  })

  document.addEventListener("click", (e) => {
    if ((!e.target.closest(".menu__wrapper")) && (e.target.closest(".menu"))) {
      menu.classList.remove('menu--active');
      burger.classList.remove('burger--active');
      enableScroll();
    }

    if (!e.target.closest('.menu__wrapper')) {
      menuBtn.forEach(el => {
        el.classList.remove('active');
      });

      menuRight.forEach(el => {
        el.classList.remove('active');
      });

      menuItem.forEach(el => {
        el.classList.remove('active')
      });

      menuDropDown.forEach(el => {
        el.classList.remove('active')
      });

      menuDropItem.forEach(el => {
        el.classList.remove('active')
      });

      menuBtnDown.forEach(el => {
        el.classList.remove('active')
      });

    }
  });

}
burgerMenu();

//====================================================

// кастом скролл 
function customScroll() {
  document.querySelectorAll('.js-scroll').forEach (el => {
      new SimpleBar(el, { autoHide: false });
  })
}

if (window.innerWidth >= 1280) {
  customScroll();
}
// ==================================================