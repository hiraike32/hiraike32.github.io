$(function() {
    var secTopArr = new Array();
    var moveFlug = false;
    var allHeight = $('body').outerHeight(true);
    var bgImg = new Array('#000','#eee', '#555', '#ccc', '#999');
    ////各sectionの位置
    $('div.section').each(function (i) {
        secTopArr[i] = $(this).offset().top;
    });
    var current = -1;
    //現在位置がセクションの位置より大きい場合は背景切り替え
    $(window).scroll(function () {
        for (var i = secTopArr.length-1; i>=0; i--) {
            if ($(window).scrollTop() > secTopArr[i] - 100) {
                chengeBG(i);
                break;
            }
        }
    });
    //背景変更
    function chengeBG(secNum) {
            if (secNum != current && moveFlug == false) {
                $('#bg'+current)
                    .fadeOut(500, function(){
                        $(this).remove();
                    });
                $('#wrap').append('<div id="bg'+secNum+'"></div>');
                $('#bg'+secNum)
                    .height(allHeight)
                    .css('display','none')
                    .fadeIn(500);
                current = secNum;
            }
    }
    $('#nav li').click(function(){
        moveFlug = true;
        var getNum = $(this).index();
        var secTop = $('.section').eq(getNum).offset().top;
        $('html,body').animate({ scrollTop: secTop }, 'slow', function() {
            moveFlug = false;
            chengeBG(getNum);
        });
        return false;
     });
});
