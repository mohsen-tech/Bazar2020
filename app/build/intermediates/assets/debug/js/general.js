
$(document).ready(function(){

   $("#menuBtn").click(function(){
     if($(this).hasClass("activeX")){
        $(this).removeClass("activeX");
        $("#rightMenu").animate({width:"0px"})

       // $("#wrapper").animate({paddingRight:"00px"})
        $("#menuBtn").animate({right:"0px"})
     }else{
        $(this).addClass("activeX");
        $("#rightMenu").animate({width:"200px"})

       // $("#wrapper").animate({paddingRight:"150px"})
        $("#menuBtn").animate({right:"200px"})

     }
   })

// NEW.1

// TAB2

$(".itemBox").click(function(){
  if($(this).hasClass("open")){
      $(this).removeClass("open")
      xx=$(this).parent().find(".accoCon").css({display:"none"});

  }else{
      $(this).addClass("open")
      $(this).parent().find(".accoCon").css({display:"block"}) ;

  }
})

// $('#mainSlide').bxSlider({
//   mode: 'fade',
//   captions: false,
//   nextText:"",
//   prevText:"",
//   auto: true,
//   nextText:"",
//   prevText:"",
//   nextSelector: '.nextA',
//   prevSelector: '.prevA'

// })




});