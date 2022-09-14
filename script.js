let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

function swiper(sliders){
  let swiperslider = new Swiper(sliders, {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }
  })
  return swiperslider
}
swiper('.review-slider')
swiper('.brand-slider')


document.addEventListener('DOMContentLoaded',()=>{
  renderPackage()

})

function renderPackage() {
  fetch("http://localhost:3000/tour")
    .then((resp) => resp.json())
    .then((data) => {data.forEach((tour) => {renderAllPackages(tour);
      });
    });
}
function renderAllPackages(tour) {
  const parentDiv = document.getElementById("container");
  const div = document.createElement("div");
  div.className = "swiper-slide box";
  div.innerHTML =`
    <img src="${tour.img}" alt="">
    <div class="content">
      <h3> <i class="fas fa-map-marker-alt"></i> ${tour.location} </h3>
      <p>${tour.description}</p>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="price">${tour.price}</div>
      <a href="#" class="btn">book now</a>
    </div>`;
  parentDiv.appendChild(div);
}
Footer
