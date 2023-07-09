
$(document).ready(function () {
  $('.navbar-nav li a').addClass('border-animation');

  /*====== Homepage Button Animation ======*/
  $('.btn-sub1').hover(
    function(){
      $('.fa-angle-right').css({
        "transform" : "rotate(180deg)",
        "margin-left" : "5px"
      });
    },
    function(){
      $('.fa-angle-right').css({
        "transform" : "rotate(0deg)",
        "margin-left" : "0px"
      });
    }
  );

  $('.btn-sub2').hover(
    function(){
      $('.fa-angle-double-right').css({
        "transform" : "rotate(180deg)",
        "margin-right" : "5px"
    });
    },
    function(){
      $('.fa-angle-double-right').css({
        "transform" : "rotate(0deg)",
        "margin-right" : "0px"
      });
    }
  );

  /*========== Features Animation ==========*/
  $('.content-1 .col-md-4 .circle').hover(
    function(){
      $(this).css({
        "width" : "105px",
        "height" : "105px",
        "color" : "#3f494c"
      });
    },
    function(){
      $(this).css({
        "width" : "100px",
        "height" : "100px",
        "color" : "#ef233c",
      });
    
    }
  );

  /*========== Progress Bar Animation ==========*/
  const x = 854;
  const y = 672;

  $(window).on("scroll", function(){
    //var scrollH = $(document).height();
    var scrollT = $(document).scrollTop();

    if (scrollT > x) {
      $('.pro-1').css("width","90%");
      $('.pro-2').css("width","94%");
      $('.pro-3').css("width","89%");
    } else if (scrollT < y) {
      $('.pro-1, .pro-2, .pro-3').css("width","0%");
    }
  });

  /*========== Pricing Animation ==========*/
  var basic_span = ".basic .basic-border:nth-child";

  $('.basic a').hover(
    function(){
      $(basic_span + '(1)').css("width", "100%");
      $(basic_span + '(2)').css("height", "100%");
      $(basic_span + '(3)').css("height", "100%");
      $(basic_span + '(4)').css("width", "100%");

      $('.basic hr').css("background-color", "red");
    },
    function(){
      $(basic_span + '(1)').css("width", "30px");
      $(basic_span + '(2)').css("height", "30px");
      $(basic_span + '(3)').css("height", "30px");
      $(basic_span + '(4)').css("width", "30px");

      $('.basic hr').css("background-color", "inherit");
    }
  );

  var enterprise_span = ".enterprise .basic-border:nth-child";

  $('.enterprise a').hover(
    function(){
      $(enterprise_span + '(1)').css("width", "100%");
      $(enterprise_span + '(2)').css("height", "100%");
      $(enterprise_span + '(3)').css("height", "100%");
      $(enterprise_span + '(4)').css("width", "100%");

      $('.enterprise hr').css("background-color", "red");
    },
    function(){
      $(enterprise_span + '(1)').css("width", "30px");
      $(enterprise_span + '(2)').css("height", "30px");
      $(enterprise_span + '(3)').css("height", "30px");
      $(enterprise_span + '(4)').css("width", "30px");

      $('.enterprise hr').css("background-color", "inherit");
    }
  );

  /*--- Pro Animation ----*/
  var pro_span = ".pro .pro-span:nth-child";
  $('.pro #pro-button').hover(
    function(){
      $(pro_span + '(1)').css({
        "height" : "100%",
        "bottom" : "0%"
      });
      $(pro_span + '(2)').css({
        "height" : "100%",
        "bottom" : "0%"
      });
    },
    function(){
      $(pro_span + '(1)').css({
        "height" : "130px",
        "bottom" : "40%"
      });
      $(pro_span + '(2)').css({
        "height" : "130px",
        "bottom" : "40%"
      });
    }
  );

  /*========== Our Services ==========*/
  $('.content-4 .nav-tabs:nth-child(1)').css({
    "background-color" : "#ffffff",
    "border-top" : "3px solid #e30022"
  });
  // First Tab
  $('.content-4 .nav-tabs:nth-child(1)').on('focusin', function(){
    $(this).css({
    "background-color" : "#ffffff",
    "border-top" : "3px solid #e30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(1)').on('focusout', function(){
    $(this).css({
    "background-color" : "#edf2f4",
    "border-top" : "0"
    });
  });
  // Second Tab
  $('.content-4 .nav-tabs:nth-child(2)').on('focusin', function(){
    $('.content-4 .nav-tabs:nth-child(1)').css({  // removes border from first tab
    "background-color" : "#edf2f4",
    "border-top" : "0"
    });
    
    $(this).css({
    "background-color" : "#ffffff",
    "border-top" : "3px solid #e30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(2)').on('focusout', function(){
    $(this).css({
    "background-color" : "#edf2f4",
    "border-top" : "0"
    });
  });

  // Third Tab
  $('.content-4 .nav-tabs:nth-child(3)').on('focusin', function(){
    $('.content-4 .nav-tabs:nth-child(1)').css({  // removes border from first tab
    "background-color" : "#edf2f4",
    "border-top" : "0"
    });
    $(this).css({
    "background-color" : "#ffffff",
    "border-top" : "3px solid #e30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(3)').on('focusout', function(){
    $(this).css({
    "background-color" : "#edf2f4",
    "border-top" : "0"
    });
  });
  // Fourth Tab
  $('.content-4 .nav-tabs:nth-child(4)').on('focusin', function(){
    $('.content-4 .nav-tabs:nth-child(1)').css({  // removes border from first tab
    "background-color" : "#edf2f4",
    "border-top" : "0"
    });
    $(this).css({
    "background-color" : "#ffffff",
    "border-top" : "3px solid #e30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(4)').on('focusout', function(){
    $(this).css({
    "background-color" : "#edf2f4",
    "border-top" : "0"
    });
  });
  
  /*========== Form Validation ==========*/
  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }
  // For Email
  $('#email').on('focusout', function(){
    if($(this).val() != ""){
      if(validateEmail($(this).val())){
        $(this).css('border', '1px solid green');
      } else {
        $(this).css('border', '1px solid red');
        $('#error').text('Invalid Email Address');
      }
    } else {
      $(this).css('border', '1px solid red');
      $('#error').text('Email is Required');
    } 
  });
  // For Message
  $('#message').on('focusout', function(){
    if($(this).val() != ""){
      $(this).css('border', '1px solid green');
      $('#error').text('');
    } else {
      $(this).css('border', '1px solid red');
      $('#error').text('Your Message is Required');
    }
  });
  // For Name and Subject
  $('#name, #subject').on('focusout', function(){
    if($(this).val() != ""){
      $(this).css('border', '1px solid green');
    } else {
      $(this).css('border', '1px solid rgb(212, 212, 212)');
    }
  });

  /*========== Scroll Up  ==========*/
  $('.top a').on("click", function(){
    $('html, body').animate({
      scrollTop : 0
    }, 1500);
  });

  /*========== Sticky Navbar ==========*/
  $(window).scroll(function() {
    if ($(document).scrollTop() > 450) {
      $('nav').addClass('fixed-top').addClass('sticky'); 
    } else {
      $('nav').removeClass('fixed-top').removeClass('sticky'); 
    }
  });

  /*========== Navigation Link ==========*/
  // For home
  $('.nav-item #home').on('click', function () {
    $('html, body').animate({ scrollTop : 0}, 1000);
  });
  // For Features
  $('.nav-item #features').on('click', function () {
    $('html, body').animate({ scrollTop : 520}, 1000);
  });
  // For About
  $('.nav-item #about ').on('click', function () {
    $('html, body').animate({ scrollTop : 1054}, 1000);
  });
  // For Pricing
  $('.nav-item #pricing').on('click', function () {
    $('html, body').animate({ scrollTop : 1520}, 1000);
  });
  // For Services
  $('.nav-item #services').on('click', function () {
    $('html, body').animate({ scrollTop : 2280}, 1000);
  });
  // For Contact Us
  $('.nav-item #contact').on('click', function () {
    $('html, body').animate({ scrollTop : 3370}, 1000);
  });

});