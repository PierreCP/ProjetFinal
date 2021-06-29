$(window).resize(function(){
    var windowWidth = $(window).width();
    var imgSrc = $('#image');
    if(windowWidth <= 400){			
      imgSrc.attr('src','http://cdn.sstatic.net/Sites//company/img/logos/so/so-icon.png?v=c78bd457575a');
    }
    else if(windowWidth > 400){
      imgSrc.attr('src','/assets/img/background accueil3.png');
    }
  });