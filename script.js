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
    timeToHide: 0,
    zIndex: "999",
    spinner: "spinner5",
    bgColor: "#000",
    //imagePath: ""
  });

  // モーダルの表示
  $('.photo img').on('click', function(){
    $('#mask').removeClass('hidden');
    $('#photo_modal img').attr('src', $(this).attr('src'));
    $(this).addClass('active');
    $('#modal').removeClass('hidden');
  });

  //モーダルの画像切り替え
  $('#left').on('click', function(){
    var move_photo = $('.active').parent().prev().children();
    if(move_photo.attr('src')){      
      $('#photo_modal img').attr('src', move_photo.attr('src'));
      $('.active').removeClass('active');
      move_photo.addClass('active');
    }
  });

  $('#right').on('click', function(){
    var move_photo = $('.active').parent().next().children();
    if(move_photo.attr('src')){      
      $('#photo_modal img').attr('src', move_photo.attr('src'));
      $('.active').removeClass('active');
      move_photo.addClass('active');
    }
  });

  //モーダルを閉じる
  $('#mask').on('click', function(){
    $('#mask').addClass('hidden');
    $('#modal').addClass('hidden');
    $('.active').removeClass('active');
  });

});

