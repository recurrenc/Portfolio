$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
      $(".icon-bar").addClass("showWa");

    } else {
      $(".scroll-up-btn").removeClass("show");
      $(".icon-bar").removeClass("showWa");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Gamer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Gamer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  console.log("Particle js Script Started")

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
          value_area: 1000
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          // src: "img/github.svg",
          width: 100,
          height: 100
        },
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
          sync: false
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.2,
          sync: true
        },
      },
      line_linked: {
        enable: true,
        distance: 90,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: true,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 5
        },
        remove: {
          particles_nb: 2
        },
      },
    },
    retina_detect: true,
  })

  console.log("Particle js Script End")

});

//Particle js script

