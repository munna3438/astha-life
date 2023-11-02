// preloader
$(window).on("load", function () {
  $("#loader").fadeOut("slow");
});

//hamBurger
$(".more-container").click(function () {
  $(".hamBurger").toggleClass("active");
  $(".more-text").toggleClass("active");
  $(".mega-menu").toggleClass("mmenu-active");
});

//carousel
$(document).ready(function () {
  // Initialize your carousel
  // $("#carouselExampleAutoplaying").carousel({
  //   interval: 2000, // Set the autoplay interval (in milliseconds)
  // });

  var currentBtnIndex = 1;

  // Event handler for the carousel slide event
  $("#carouselExampleAutoplaying").on("slid.bs.carousel", function () {
    $("#details-btn").removeClass("details-btn-" + currentBtnIndex);

    currentBtnIndex = (currentBtnIndex % 3) + 1;

    // Add the new color class to the button
    $("#details-btn").addClass("details-btn-" + currentBtnIndex);
  });

  // Initially, set the button's color class to the first color
  $("#details-btn").addClass("details-btn-1");
});
/*
//carousel
$(".next").click(function () {
  let item1 = $(".item1").hasClass("item-1");
  let item2 = $(".item1").hasClass("item-2");
  let item3 = $(".item1").hasClass("item-3");

  if (item1) {
    $(".item1").addClass("item-3");
    $(".item3").addClass("item-2");
    $(".item2").addClass("item-1");
    $(".item1").removeClass("item-1");
    $(".item3").removeClass("item-3");
    $(".item2").removeClass("item-2");
  }
  if (item2) {
    $(".item1").addClass("item-1");
    $(".item3").addClass("item-3");
    $(".item2").addClass("item-2");
    $(".item1").removeClass("item-2");
    $(".item3").removeClass("item-1");
    $(".item2").removeClass("item-3");
  }
  if (item3) {
    $(".item1").addClass("item-2");
    $(".item3").addClass("item-1");
    $(".item2").addClass("item-3");
    $(".item1").removeClass("item-3");
    $(".item3").removeClass("item-2");
    $(".item2").removeClass("item-1");
  }
});

$(".preview").click(function () {
  let item1 = $(".item1").hasClass("item-1");
  let item2 = $(".item1").hasClass("item-2");
  let item3 = $(".item1").hasClass("item-3");

  if (item1) {
    $(".item1").addClass("item-2");
    $(".item2").addClass("item-3");
    $(".item3").addClass("item-1");
    $(".item1").removeClass("item-1");
    $(".item3").removeClass("item-3");
    $(".item2").removeClass("item-2");
  }
  if (item2) {
    $(".item1").addClass("item-3");
    $(".item3").addClass("item-2");
    $(".item2").addClass("item-1");
    $(".item1").removeClass("item-2");
    $(".item3").removeClass("item-1");
    $(".item2").removeClass("item-3");
  }
  if (item3) {
    $(".item1").addClass("item-1");
    $(".item3").addClass("item-3");
    $(".item2").addClass("item-2");
    $(".item1").removeClass("item-3");
    $(".item3").removeClass("item-2");
    $(".item2").removeClass("item-1");
  }
});
*/

// service carousel

// var swiper = new Swiper(".mySwiper", {
//   // slidesPerView: 3,
//   spaceBetween: 30,
//   grabCursor: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   slidesPerView: "auto",
//   effect: coverflow,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 0,
//     slideShadows: true,
//   },
// });
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 0,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
