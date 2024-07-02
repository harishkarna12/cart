jQuery(document).ready(function(){
    $('.mobile_menu_trigger').click(function(){
        $('.main_menu').toggleClass('open');
        $('body').toggleClass('menu_open');
        $(this).find('.fa-bars').toggleClass('fa-xmark')
    });
    $('.welcome_banner_slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,        
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,                
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    });
    $('.welcome_food_slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,        
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<button class="slick-prev fa-solid fa-arrow-left"></button>',
        nextArrow:'<button class="slick-next fa-solid fa-arrow-right"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,                
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                }
            }
        ]
    });
    $('.welcome_food_slider_1').slick({
      infinite: true,
      arrows: false,
      dots: false,
      autoplay: true,        
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,                
            }
          },
          {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                arrows: false,
              }
          }
      ]
  });
    $('.recommendation_food_slider').slick({
        infinite: true,
        arrows: false,
        //dots: true,
        autoplay: true,        
        slidesToShow: 5,
        slidesToScroll: 1,
        //prevArrow:'<button class="slick-prev fa-solid fa-arrow-left"></button>',
        //nextArrow:'<button class="slick-next fa-solid fa-arrow-right"></button>'
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,                
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }
            }
        ]
    });
  
    $('.food_cate_slider').slick({
      infinite: true,
      arrows: true,
      dots: false,       
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow:'<button class="slick-prev fa-solid fa-arrow-left"></button>',
      nextArrow:'<button class="slick-next fa-solid fa-arrow-right"></button>',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,                
            }
          },
          {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                arrows: false,
              }
          }
      ]
  });
  
    $('.account_nav .nav-link').each(function(){
      $(this).click(function(){
          $('.account_sidebar_main').addClass('account_open');
          $('.account_main').addClass('account_open');
      })
    });
    $('.account_mob_back').click(function(){
      $('.account_sidebar_main').removeClass('account_open');
      $('.account_main').removeClass('account_open');
  });

const container = document.getElementById("tab-barscroll");

// Wheel event for desktop
container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        container.scrollLeft += 100;
    } else {
        container.scrollLeft -= 100;
    }
    e.preventDefault(); // Prevent vertical scrolling
});

// Variables to store touch positions
let isTouching = false;
let startX = 0;
let scrollLeft = 0;

// Touch events for mobile
container.addEventListener("touchstart", function (e) {
    isTouching = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
});

container.addEventListener("touchmove", function (e) {
    if (!isTouching) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed if necessary
    container.scrollLeft = scrollLeft - walk;
    e.preventDefault();
});
const tabs = document.querySelectorAll('.tab'); // Make sure to replace '.tab' with your actual tab selector

tabs.forEach(tab => {
    tab.addEventListener('touchstart', function (e) {
        // Prevent default touch behavior
        e.preventDefault();

        // Remove "active" class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add "active" class to the clicked tab
        tab.classList.add('active');
    });
});


$('#tab-barscroll .tab').each(function() {
  $(this).click(function() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
  });
});


$( "#datepicker" ).datepicker();
$('.later_date').click(function(){
  $('.order_calender').toggleClass('cal_open');
})

});

  //8th screen
  function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
  }
  
  
  function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
  }

  // allres
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('vegNonvegToggle');
    const nonvegLabel = document.getElementById('nonvegLabel');
    const vegLabel = document.getElementById('vegLabel');

    function updateLabels() {
        if (toggle.checked) {
            nonvegLabel.style.color = '#323232';
            vegLabel.style.color = 'green';
            vegLabel.style.opacity = 1;
            nonvegLabel.style.opacity = 1;
        } else {
            nonvegLabel.style.color = 'red';
            vegLabel.style.color = '#323232';
            vegLabel.style.opacity = 1;
            nonvegLabel.style.opacity = 1;
        }
    }

    toggle.addEventListener('change', updateLabels);
    updateLabels(); // Initial update
});

function valueChanged() {
  if($('.coupon_question').is(":checked"))   
    $(".answer").show();
  else
    $(".answer").hide();
};

// opt
document.addEventListener('DOMContentLoaded', function () {
  const otpFields = document.querySelectorAll('.otp_field');

  otpFields.forEach((field, index) => {
      field.addEventListener('input', function () {
          if (field.value.length === field.maxLength) {
              const nextField = otpFields[index + 1];
              if (nextField) {
                  nextField.focus();
              }
          }
      });

      field.addEventListener('keydown', function (event) {
          if (event.key === 'Backspace' && field.value.length === 0) {
              const prevField = otpFields[index - 1];
              if (prevField) {
                  prevField.focus();
              }
          }
      });
  });
});





