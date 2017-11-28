$(function(){

  //スクロール時にコンテンツを出現させる
  $('#about, #movie').css('visibility','hidden');
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#about').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 200){
          $(this).addClass("fadeInDown");
        }
    });
    $('#movie').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 200){
          $(this).addClass("fadeInDown");
        }
    });
  });


});

