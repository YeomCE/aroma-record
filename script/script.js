/*sub*/
$(function(){
    $('.nav>li').mouseenter(function(){
      $('.nav>li').children('.sub').stop().slideDown();
    });
    $('.nav>li').mouseleave(function(){
      $('.nav>li').children('.sub').stop().slideUp();
    });
  });

/*popup*/
  $(function(){
    $('.oneday_in .response').click(function(){
      $('#popup').show();
    });
    $('.X').click(function(){
      $('#popup').hide();
    });
  });

/*test1-1*/
  $(function(){
    $('.gender li, .age li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
    });
  });

/*test1-2*/
$(function(){
  $('.like li').click(function(){
    $(this).toggleClass('on');
  });
});

/*test1-3*/
$(function(){
$('.mood li').click(function(){
  $(this).toggleClass('on');
});
});

/*test1-4*/
$(function(){
$('.dislike .check1').click(function(){
  $(this).toggleClass('on');
});
});
$(function(){
$('.dislike .check2').click(function(){
  $(this).addClass('on').siblings().removeClass('on');
});
});

/*test1-5*/
$(function(){
$('.season li').click(function(){
  $(this).toggleClass('on');
});
});

/*test1-6*/
  $(function(){
    $('.mail li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
    });
  });

  /*sub2*/
  $(function(){
    $('.time ul').click(function(){
      $(this).addClass('time_on').siblings().removeClass('time_on');
    });
    $('.time li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
    });
  });

  /*sub3*/
  $(function(){
    $('.mood_list>li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    $('.mood_list>li:nth-child(1)').click(function(){
      $(this).parent('ul').css({'height':'2400px'});
  });
    $('.mood_list>li:nth-child(2)').click(function(){
      $(this).parent('ul').css({'height':'1673px'});
  });
  $('.mood_list>li:nth-child(3)').click(function(){
    $(this).parent('ul').css({'height':'2400px'});
});
$('.mood_list>li:nth-child(4)').click(function(){
  $(this).parent('ul').css({'height':'1673px'});
});
$('.mood_list>li:nth-child(5)').click(function(){
  $(this).parent('ul').css({'height':'944'});
});
$('.mood_list>li:nth-child(6)').click(function(){
  $(this).parent('ul').css({'height':'1673px'});
});
});

