//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset>fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//carousel
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
});

const images = [
    "public/img/1.png",
    "public/img/2.png",
    "public/img/8.png",
    "public/img/12.png",
    "public/img/13.png",
    // Tambahkan path gambar lainnya di sini
];

let currentIndex = 0;

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("background").style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackgroundImage, 3000); // Ganti gambar setiap 5 detik
  

  