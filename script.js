const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //toggle for mobile visibilty
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click()
);
//intialize swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}

// Add this JS at the end of your HTML or in a JS file
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('animate');
    }, i * 150); // delay each card
  });

});


window.onscreen = () => {
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

 const sections = document.querySelectorAll('section');
    const navLinksArr = document.querySelectorAll('.nav-menu li a');

    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY + 150;
      sections.forEach((section, index) => {
        if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){
          navLinksArr.forEach(link => link.classList.remove('active'));
          navLinksArr[index].classList.add('active');
        }
      });
    });