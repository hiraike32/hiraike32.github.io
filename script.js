$(function(){

  //スクロール時にコンテンツを出現させる
  $('#about, #movie, #writings, #pictures, #codings').css('visibility','hidden');
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
    $('#writings').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 200){
          $(this).addClass("fadeInDown");
        }
    });
    $('#pictures').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 200){
          $(this).addClass("fadeInDown");
        }
    });
    $('#codings').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 200){
          $(this).addClass("fadeInDown");
        }
    });
  });

  $("#fakeloader").fakeLoader();

  //ロード時のアニメーションを設定
  $("#fakeLoader").fakeLoader({
    timeToHide: 1500,
    zIndex: "999",
    spinner: "spinner5",
    bgColor: "#000",
    //imagePath: ""
  });

});

