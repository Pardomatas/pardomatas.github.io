$(function(){$(".page-scroll a").bind("click",function(o){var l=$(this);$("html, body").stop().animate({scrollTop:$(l.attr("href")).offset().top},1500,"easeInOutExpo"),o.preventDefault()})}),$(function(){$("body").on("input propertychange",".floating-label-form-group",function(o){$(this).toggleClass("floating-label-form-group-with-value",!!$(o.target).val())}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus")})}),$("body").scrollspy({target:".navbar-fixed-top"}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});