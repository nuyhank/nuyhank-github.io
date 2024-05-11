$(document).ready(function() {
    $("#bthome").on('click', function () {
      // html, body 요소 모두에 애니메이션을 적용합니다.
      $("html, body").animate({ scrollTop: '0' }, 500);
    });
  });
  
  $(document).ready(function() {
    // 메뉴바 링크를 클릭하면 해당 섹션으로 스크롤 이동
    $("nav a").on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      var targetPosition = $(target).offset().top;
      $('html, body').animate({ scrollTop: targetPosition }, 500);
    });
  });

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

$(document).ready(function() {
  $("#bthome").on('click', function () {
    // html, body 요소 모두에 애니메이션을 적용합니다.
    $("html, body").animate({ scrollTop: '0' }, 500);
  });
});

$(document).ready(function() {
  // 메뉴바 링크를 클릭하면 해당 섹션으로 스크롤 이동
  $("nav a").on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr("href");
    var targetPosition = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 500);
  });
});

window.addEventListener('contextmenu', function (e) {
e.preventDefault();
});

// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 224;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
if (imgIndex > 0) {
  $btnNext.removeAttribute("disabled");
  position += IMG_WIDTH;
  $slideImgs.style.transform = `translateX(${position}px)`;
  imgIndex = imgIndex - 1;
}
if (imgIndex == 0) {
  $btnPrev.setAttribute("disabled", "true");
}
};

let next = function () {
if (imgIndex < 3) {
  $btnPrev.removeAttribute("disabled");
  position -= IMG_WIDTH;
  $slideImgs.style.transform = `translateX(${position}px)`;
  $slideImgs.style.transition = "transform .5s ease-out";
  imgIndex = imgIndex + 1;
}
if (imgIndex == 2) {
  $btnNext.setAttribute("disabled", "true");
}
};

let init = function () {
$btnPrev.setAttribute("disabled", "true");
$btnPrev.addEventListener("click", prev);
$btnNext.addEventListener("click", next);
};

document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll('.page-transition');

  function smoothScroll(targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }

  function handleScroll() {
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var rect = section.getBoundingClientRect();

      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        smoothScroll(section);
        break;
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
});


init();