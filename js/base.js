//动画注入
var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);

$(".menu-button").click(function(){
    $(".newMenu").addClass("active");
    $('body').css('overflow','hidden');
})
$(".menu__corner img").click(function(){
    $(".newMenu").removeClass("active");
    $('body').css('overflow','auto');
})

$(".contact-widget").click(function(){
    $(".contact-widget").addClass("active");
    $(".contact-widget__body__details__detail").addClass("active");
    // $(".contact-widget").addClass("active-large");
    $("#contact-widget__body").addClass("active");
})

$(".btn").click(function(event){
    // $(this).parent().parent().removeClass('active active-large');
    event.stopPropagation(); 
    $(".contact-widget").removeClass("active");
    $(this).parent().removeClass("active");
})


$(".poz").click(function(){
    $('#hangzhou').addClass("active");
    $('#ningbo').removeClass("active");
    $('#shanghai').removeClass("active");
    $(".contact-window").removeClass("active");
    $(".contact-window3").addClass("active");
})
$(".wwa").click(function(){
    $('#shanghai').addClass("active");
    $('#ningbo').removeClass("active");
    $('#hangzhou').removeClass("active");
    $(".contact-window").removeClass("active");
    $(".contact-window2").addClass("active");
})
$(".gdy").click(function(){
    $('#ningbo').addClass("active");
    $('#shanghai').removeClass("active");
    $('#hangzhou').removeClass("active");
    $(".contact-window").removeClass("active");
    $(".contact-window1").addClass("active");
})