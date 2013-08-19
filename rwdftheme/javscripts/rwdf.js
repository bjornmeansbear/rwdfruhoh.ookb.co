$(document).ready(function() {
  // set common height of triptych blocks on homepage
  var blockwidth = $('.span4').width();
  var blockheight = blockwidth/1.32;
  $('.triptych .trio').height(blockheight);

  // subtract height of projects so prev/next buttons show up in right places
  var projectheight = $('article.project').height();
  var iconheight    = $('article.project div.tags.top').height();
  var imageheight    = $('article.project div.leadimage').height();
  var hedheight     = $('article.project h2').height();
  var relpos        = (80+projectheight-iconheight-hedheight-imageheight)*-1;
  $('.minus-top .btn').css('top',relpos);

  // set slideshow height cleverly
  var wh = $(window).height();
  $('#slideshow').height(wh-300);

});

//gallery keyboard evetns
$(document.documentElement).keyup(function (event) {
  if (event.keyCode == 37){
    $('.cycle-slideshow').cycle('prev');
  }else if (event.keyCode == 39){
    $('.cycle-slideshow').cycle('next')
  }
});
