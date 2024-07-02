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
              slidesToShow: 5,                
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              arrows: false,
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
  // popup
// Function to open a popup
function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
}

// Function to close a specific popup
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

// Function to close all popups
function closeAllPopups() {
  document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = 'none';
  });
}

// Event listeners for opening popups
document.getElementById('openFirstPopup').addEventListener('click', function() {
  openPopup('popup1');
});

document.getElementById('openSecondPopup').addEventListener('click', function() {
  closePopup('popup1');
  openPopup('popup2');
});

document.getElementById('openThirdPopup').addEventListener('click', function() {
  closePopup('popup2');
  openPopup('popup3');
});

// Event listener for closing the second popup
document.getElementById('closePopup2').addEventListener('click', function() {
  closePopup('popup2');
});

// Event listener for closing all popups
document.getElementById('closeAllPopups').addEventListener('click', closeAllPopups);

  $('.edit_profile').click(function(){
    console.log('df');
    $('#nav-editprofile').trigger('click');
  });
//dropdown


document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.custom-dropdown');
  var dropdownMenu = document.getElementById('customDropdownMenu');

  dropdown.addEventListener('mouseenter', function() {
    dropdownMenu.classList.add('show');
  });

  dropdown.addEventListener('mouseleave', function() {
    dropdownMenu.classList.remove('show');
  });
});




// Event listener for clicking outside of the popup to close it
window.addEventListener('click', function(event) {
  document.querySelectorAll('.popup').forEach(popup => {
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  });
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

$(document).ready(function() {
  $('star_order').click(function() {
      $('.star_order').addClass('active');
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


  
  
  function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
  }
  // allres
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('NonvegvegToggle');
    const vegLabel = document.getElementById('vegLabel');
    const nonvegLabel = document.getElementById('nonvegLabel');
    function updateLabels() {
        if (toggle.checked) {
          nonvegLabel.style.color = 'red';
          vegLabel.style.color = '#323232';
          vegLabel.style.opacity = 1;
          nonvegLabel.style.opacity = 1;
        } else {
          nonvegLabel.style.color = '#323232';
          vegLabel.style.color = 'green';
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
  //8th screen
  function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
  }


// color change index

document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('.index_profile a');
    const logoutLink = document.querySelector('.index_log a');

    profileLink.addEventListener('click', function(event) {
        profileLink.style.color = '#009A93';
        profileLink.querySelector('.acc').style.color = '#009A93';
        event.preventDefault(); // Prevent default action for demonstration
    });

    logoutLink.addEventListener('click', function(event) {
        logoutLink.style.color = '#009A93';
        logoutLink.querySelector('.log').style.color = '#009A93';
        event.preventDefault(); // Prevent default action for demonstration
    });
});
// star
$(document).ready(function(){
  $('.star-icon').click(function(){
      const path = $(this).find('path');
      const currentFill = path.attr('fill');
      const newFill = currentFill === '#fa0' ? 'none' : '#fa0'; // Toggle between #fa0 and no fill
      path.attr('fill', newFill);
  });
});






