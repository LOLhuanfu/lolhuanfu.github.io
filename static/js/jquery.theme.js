/*
 * 作品依赖：Z-BlogPHP
 * 作品 ID ：superpage
 * 前端框架：FinchUI
 * _|_|_|_|  _|_|_|  _|      _|    _|_|_|  _|    _|  _|    _|  _|_|_|  
 * _|          _|    _|_|    _|  _|        _|    _|  _|    _|    _|    
 * _|_|_|      _|    _|  _|  _|  _|        _|_|_|_|  _|    _|    _|    
 * _|          _|    _|    _|_|  _|        _|    _|  _|    _|    _|    
 * _|        _|_|_|  _|      _|    _|_|_|  _|    _|    _|_|    _|_|_|     
 * 发布时间：2022-10-30
 * 作者名称：星岚工作室
 * 作者官网：https://www.finchui.com
 * 作者邮箱：hnysnet@qq.com
 * 作者 QQ ：914466480
 * 官方声明：用户已购买的应用只能单一账号下使用,不得二次发布、赠送、转售、租让、盗版等,如被查实将被永久关闭用户账号。                                                              
 */
//判断导航栏高度
$(function() {
	var nav = $(".nav_height_a");
	var win = $(window);
	var sc = $(document);
	win.scroll(function() {
		if (sc.scrollTop() >= 140) {
			nav.addClass("fixednav");
		} else {
			nav.removeClass("fixednav");
      nav.removeClass("hide");
		}
	})
});
$(function(){  
  //页面初始化的时候，获取滚动条的高度（上次高度）  
  var start_height = $(document).scrollTop();  
  //获取导航栏的高度(包含 padding 和 border)  
  var fixednav_height = $('.fixednav').outerHeight();  
  $(window).scroll(function() {  
      //触发滚动事件后，滚动条的高度（本次高度）  
      var end_height = $(document).scrollTop();  
      //触发后的高度 与 元素的高度对比  
      if (end_height > fixednav_height){  
          $('.fixednav').addClass('hide');  
      }else {  
          $('.fixednav').removeClass('hide');  
      }  
      //触发后的高度 与 上次触发后的高度  
      if (end_height < start_height){  
          $('.fixednav').removeClass('hide');  
      }  
      //再次获取滚动条的高度，用于下次触发事件后的对比  
      start_height = $(document).scrollTop();  
  });  
});
// 效果二
$(function() {
	var nav = $(".nav_height_b");
	var win = $(window);
	var sc = $(document);
	win.scroll(function() {
		if (sc.scrollTop() >= 140) {
			nav.addClass("fixednav2");
		} else {
			nav.removeClass("fixednav2");

		}
	})
});

// 手机版网页头部显示效果
//判断网站头部高度
$(function() {
	var nav = $(".header_height_a");
	var win = $(window);
	var sc = $(document);
	win.scroll(function() {
		if (sc.scrollTop() >= 100) {
			nav.addClass("head_fixed");
		} else {
			nav.removeClass("head_fixed");
      nav.removeClass("head_hide");
		}
	})
});
$(function(){  
    //页面初始化的时候，获取滚动条的高度（上次高度）  
    var start_height = $(document).scrollTop();  
    //获取导航栏的高度(包含 padding 和 border)  
    var head_fixed_height = $('.head_fixed').outerHeight();  
    $(window).scroll(function() {  
        //触发滚动事件后，滚动条的高度（本次高度）  
        var end_height = $(document).scrollTop();  
        //触发后的高度 与 元素的高度对比  
        if (end_height > head_fixed_height){  
            $('.head_fixed').addClass('head_hide');  
        }else {  
            $('.head_fixed').removeClass('head_hide');  
        }  
        //触发后的高度 与 上次触发后的高度  
        if (end_height < start_height){  
            $('.head_fixed').removeClass('head_hide');  
        }  
        //再次获取滚动条的高度，用于下次触发事件后的对比  
        start_height = $(document).scrollTop();  
    });  
}); 

$(function() {
	var nav = $(".header_height_b");
	var win = $(window);
	var sc = $(document);
	win.scroll(function() {
		if (sc.scrollTop() >= 100) {
			nav.addClass("head_fixed2");
		} else {
			nav.removeClass("head_fixed2");
		}
	})
});

//当前位置
$(document).ready(function() {
	var A = document.location;
	$(".subcategorys a").each(function() {
		if (this.href == A.toString().split("#")[0]) {
			$(this).addClass("current");
			return false;
		}
	});
});

//   导航栏模块
$(document).ready(function () {
  var A = location.href,
  url1 = $(".breadcrumb a:eq(1)").attr("href"),
  url2 = $(".breadcrumb a:eq(2)").attr("href"),
  url3 = $(".breadcrumb a:eq(3)").attr("href"),
  url4 = $(".breadcrumb a:eq(4)").attr("href"),
  url5 = $(".breadcrumb a:eq(5)").attr("href"),
  Main = $(document).width();
  if (Main <= 720) {
    // 手机版
    if ($(".nav li a").each(function () {
        ($(this).attr("href") != A && $(this).attr("href") != url1 && $(this).attr("href") != url2 && $(this).attr("href") != url3 && $(this).attr("href") != url4 && $(this).attr("href") != url5) ||(
          $(this).parent().addClass("current-li"),
          $(this).parent().parents('.current-li').children(".nav-show").addClass("nav-hide"),
          $(this).parent().siblings().removeClass("current-li")
          ),
          $(this).parent().find("li").length > 0 && $(this).after('<i class="nav-show"></i>');
      })); 
    $(".nav li .nav-show").click(function () {
      $(this).siblings("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      $(this).toggleClass("nav-hide");
      $(this).parent().siblings().find(".nav-show").removeClass("nav-hide");
    });
  }
  else{
    // PC版
    if ($(".nav li a").each(function () {
      ($(this).attr("href") != A && $(this).attr("href") != url1 && $(this).attr("href") != url2 && $(this).attr("href") != url3 && $(this).attr("href") != url4 && $(this).attr("href") != url5) ||(
          $(this).parent().addClass("current-li"),
          $(this).parent().siblings().removeClass("current-li")
          ),
          $(this).parent().find("li").length > 0 && $(this).addClass("nav-show");
      })
    );
    $(".nav li").hover(
      function () {
        $(this).find("ul:first").stop(true, true).slideDown("fast").css({ display: "block" });
        $(this).find("li").length > 0 && $(this).find(".nav-show").addClass("nav-hide");
      },
      function () {
        $(this).find("ul:first").stop(true, true).slideUp("fast").css({ display: "none" });
        $(this).find("li").length > 0 && $(this).find(".nav-show").removeClass("nav-hide");
      }
    );
    $(".nav li ul").hover(
      function () {
        $(this).parent().addClass("current-li");
      },
      function () {
        if ($(this).siblings().attr("href") != A && $(this).siblings().attr("href") != url1 && $(this).siblings().attr("href") != url3 && $(this).siblings().attr("href") != url4 && $(this).siblings().attr("href") != url5) 
        {
          $(this).parent().removeClass("current-li");
        }
      }
    );
  }
//判断当前网址链接高亮显示
  $(".nav a").each(function() {
    if (this.href == A.toString().split("#")[0]) {
      $(this).addClass("current");
      $(this).siblings(".nav-show").addClass("nav-hide");
      return false;
    };
  });
});

// 按钮
$(document).ready(function() {
    //展开手机版导航栏
    $("#nav").click(function() {
		$(".nav").fadeToggle(500);
        $(".search").fadeOut();
		$(".contact").fadeOut();
	});
    //展开手机版搜索框
	$("#search").click(function() {
		$(".search").fadeToggle(500);
        $(".nav").fadeOut();
		$(".contact").fadeOut();
	});
    //展开手机版联系我们
	$("#contact").click(function() {
		$(".contact").fadeToggle(500);
        $(".nav").fadeOut();
		$(".search").fadeOut();
	});
    //展开PC版搜索框
	$("#nav_search").click(function() {
		$(".search").fadeToggle(500);
	});
    var DW = $(document).width(); 
	if(DW <= 721){ 
    $(".main").click(function() {
        $(".contact").fadeOut();
        $(".nav").fadeOut();
        $(".search").fadeOut();
    });
    }
    else{
     $(".main").click(function() {
        $(".search").fadeOut();
    });  
    }
});
//评论列表点赞
$(document).ready(function(){
    var toggle = true;
    $("button.comment_zan").click(function(){
    var res = $(this).children("span").text(); 
    if (toggle) {
    toggle = false;
    $(this).children("span").text(res*1+1);
    }else{
    toggle = true;    
    $(this).children("span").text(res*1-1);
    }
    $(this).addClass("zan_red").parents("li").siblings().find("button.comment_zan").removeClass("zan_red");
    var zanid = $(this).attr("id");
    var zanshu = $(this).children("span").text();
    $.cookie(zanid, zanshu, { expires: 7, path: '/' }); 
    });
  
});
//踩
  $(document).ready(function(){
  var toggle = true;
  $("button.comment_cai").click(function(){
    var res = $(this).children("span").text();
    if (toggle) {
    toggle = false;
    $(this).children("span").text(res*1+1);
    }else{
    toggle = true;    
    $(this).children("span").text(res*1-1);
    }
    $(this).addClass("cai_hei").parents("li").siblings().find("button.comment_cai").removeClass("cai_hei");
    var caiid = $(this).attr("id");
    var caishu = $(this).children("span").text();
    $.cookie(caiid, caishu, { expires: 7, path: '/' }); 
  });    
});
//判断搜索框显示的显示内容
$(document).ready(function() {
$(".search input").focus(function(){  
    $(this).parent().children(".input_clear").show();  
}); 
$(".search input").blur(function(){  
    if($(this).val()=='')  
    {  
    $(this).parent().children(".input_clear").hide();  
    }  
});  
$(".input_clear").click(function(){  
    $(this).parent().find('input').val('');  
    $(this).hide();  
});
})

//判断二级分类
$(document).ready(function() {
	$(".catalog ul").each(function() {
		$(this).parents('li').addClass("ulyes");  
	});
});
//自动复制
function copycontact(){
const range = document.createRange();
range.selectNode(document.getElementById("copy_contact"));
const selection = window.getSelection();
if(selection.rangeCount > 0) selection.removeAllRanges();
selection.addRange(range);
document.execCommand("copy");
alert("复制成功！");
};
