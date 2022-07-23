const slider = document.querySelector(".brands__items");

let swiper;

function mobileSlider () {

  if (window.innerWidth <= 768 && slider.dataset.mobile === "false") {

    swiper = new Swiper(slider, {
      slidesPerView: 1.2,
      spaceBetween: 16,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      swiper.disable();
      swiper.destroy(true, true);
    }

  }
  
}

mobileSlider();
window.addEventListener("resize", () => {
  mobileSlider();
});

const buttonShowAll = document.querySelector(".brands-show-all__button");
const brandsItems = document.querySelector(".brands__items");

buttonShowAll.onclick = function () {

    buttonShowAll.classList.toggle("brands-show-all__button--clicked");
    brandsItems.classList.toggle("brands__items--opened");

    if (buttonShowAll.innerHTML === "Показать все") {
      buttonShowAll.innerHTML = "Скрыть";
    } else if (buttonShowAll.innerHTML === "Скрыть") {
      buttonShowAll.innerHTML = "Показать все";
    }
    
}