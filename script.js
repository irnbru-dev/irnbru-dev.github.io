$('a[href^="#"]').on("click",function(t){var e=$(this).attr("href");$(e).length&&$("html, body").animate({scrollTop:$(e).offset().top-60},1e3),t.preventDefault()});
