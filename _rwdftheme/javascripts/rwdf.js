$(document).ready(function() {
  // set slideshow height cleverly
  var wh = $(window).height();
  $('#slideshow').height(wh-250);
  $('#slideshow .slide').height(wh-250);

  //prepare whatwedo feed for isotope...
  $('.icons.categories .science a').attr('href', '#filter=.science');
  $('.icons.categories a.science').attr('href', '#filter=.science');
  $('.icons.categories .scholars a').attr('href', '#filter=.scholars');
  $('.icons.categories a.scholars').attr('href', '#filter=scholars');
  $('.icons.categories .arts a').attr('href', '#filter=.arts');
  $('.icons.categories a.arts').attr('href', '#filter=.arts');
  $('.icons.categories .justice a').attr('href', '#filter=.justice');
  $('.icons.categories a.justice').attr('href', '#filter=.justice');
  $('.icons.categories .community a').attr('href', '#filter=.community');
  $('.icons.categories a.community').attr('href', '#filter=.community');

  var $container = $('#projects');
  $container.isotope({ layoutMode : 'fitRows' });

  $('#filters a').click(function(){
        // get href attr, remove leading #
    var href = $(this).attr('href').replace( /^#/, '' ),
        // convert href into object
        // i.e. 'filter=.inner-transition' -> { filter: '.inner-transition' }
        option = $.deparam( href, true );
    // set hash, triggers hashchange on window
    $.bbq.pushState( option );
    return false;
  });

  $('#projects .icons.categories a').click(function(){
        // get href attr, remove leading #
    var href = $(this).attr('href').replace( /^#/, '' ),
        // convert href into object
        // i.e. 'filter=.inner-transition' -> { filter: '.inner-transition' }
        option = $.deparam( href, true );
    // set hash, triggers hashchange on window
    $.bbq.pushState( option );
    return false;
  });

  $(window).bind( 'hashchange', function( event ){
    // get options object from hash
    var hashOptions = $.deparam.fragment();
    // apply options from hash
    $container.isotope( hashOptions );
  })
    // trigger hashchange to capture any hash data on init
    .trigger('hashchange');


});

$(window).bind("load", function() {
  // set common height of triptych blocks on homepage
  var fh = $('.hero .feature').height();
  var blockwidth = $('.triptych .span4').width();
  // var blockheight = blockwidth/1.32;
  var blockheight = ((fh-30)/2);
  $('.triptych .trio').height(blockheight);
  $('.hero .other').height(blockheight);
  // make tagline the same height as the lead feature
  $('.hero .tagline .text').height(blockheight);


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

