$(document).ready(function () {
  // activating nav-menu elements
  $("header .nav-bar li a").click(function () {
    $("header .nav-bar li a.active").removeClass("active");
    $(this).addClass("active");
  });
  //   revealing animation while scrolling
  new WOW().init();

  $(".slider-hospital").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".doctor-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // sticky-header
  window.onscroll = function () {
    headerFunction();
  };

  var body = document.body;
  var sticky = body.offsetTop;

  function headerFunction() {
    if (window.pageYOffset > 150) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }

  //   mobile-menu
  function MobileMenu() {
    let menuIcon = document.querySelector(".hamburger");
    let body = document.querySelector("body");
    let overlay = document.querySelector(".overlay");
    menuIcon.addEventListener("click", function () {
      body.classList.toggle("active");
    });
    overlay.addEventListener("click", function () {
      body.classList.remove("active");
    });
    $(".mobile-menu ul li").click(() => {
      body.classList.remove("active");
    });
    $(".mobile-menu .close").click(() => {
      body.classList.remove("active");
    });
  }
  MobileMenu();

  // counting-cards
  $(".counting").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },

      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
});
