if (Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'))) {
  a = $('[class*="-png"]');
  a.each(function(i, obj) {
    var iterator = obj.classList.entries();
    for(var value of iterator) {
      if(/-png/.test(value)) {
        cl = value[1];
        $(obj).removeClass(cl);
        ej = cl.replace(/-png$/,"");
        $(obj).addClass(ej)
      }
    }
  });
  a = $('[class*="illo-container"]');
  a.each(function(i, obj) {
    var iterator = obj.classList.entries();
    for(var value of iterator) {
      if(/illo-container/.test(value)) {
        cl = value[1];
        $(obj).removeClass(cl);
        svg = $(obj).find('img').attr('src');
        svgSrc = svg.replace(/png/g,"svg").replace(/@3x/,"");
        $(obj).find('img').attr("src",svgSrc)
      }
    }
  });
}

$('.side-nav').click(function(){
  if ($('.side-nav.active').length > 0) {
    $('.side-nav.active').removeClass('active')
  }
  $(this).addClass('active');
});

if($('.show').length !== 1 ) {
  $('.show').collapse();
}

// Coming from search result page click
if(window.location.hash !== "") {
  // Somehow collapse is not working sync and calling show directly after
  // yields no effect and there is no callback when it is ready
  setTimeout(() => {
    // Folds out the answer manually
    $(window.location.hash).collapse('show')
    // Avoids the answer being hidden by the floating header
    window.scrollTo(0, $(window.location.hash).position().top)
  }, 500)
}
