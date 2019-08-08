// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  //grabbing the menu
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        //calling the animate method
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        // speed
        window.location.hash = hash;
      }
    );
  }
});
