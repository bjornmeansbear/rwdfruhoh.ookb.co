$(document).ready(function() {
  // set common height of triptych blocks on homepage
  var blockwidth = $('.triptych .span4').width();
  var blockheight = blockwidth/1.32;
  $('.triptych .trio').height(blockheight);

  // set slideshow height cleverly
  var wh = $(window).height();
  $('#slideshow').height(wh-300);

  var $container = $('#projects');
  $container.isotope({
  })
  $('#filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
  });

});

$(window).bind("load", function() {
  // make tagline the same height as the lead feature
  var fh = $('.hero .feature').height();
  $('.hero .tagline .text').height(fh);

  // subtract height of projects so prev/next buttons show up in right places
  var containerheight = $('.container.inner').height();
  var btnheight     = containerheight+30;
  var relpos        = (containerheight-30)*-1;
  $('.minus-top .pager a').css('top',relpos);
  $('.minus-top .pager a').height(btnheight);
});

//gallery keyboard events
$(document.documentElement).keyup(function (event) {
  if (event.keyCode == 37){
    $('.cycle-slideshow').cycle('prev');
  }else if (event.keyCode == 39){
    $('.cycle-slideshow').cycle('next')
  }
});


//Working on making sidebar navigation follow active trail.
$("#filters a").click(function() {
  $("#filters").find('li.active').removeClass('active');
  $(this).parent().parent().addClass('active');
});

