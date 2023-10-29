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
