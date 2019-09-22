$(function(){
  $(".news-view-list").on("click","a",function(e){
    $(e.target).addClass("active").parent().siblings().children().removeClass("active");
  });
})