var aspect = .618033;
var axis = .7237;

$(function() {
  var win = $(window);
  var sections = $('.section');
  var spiral = $('.spiral');

  var winWidth;
  var winHeight;
  var spiralOrigin;

  var rotation = 0;
  var sectionCount = sections.length;
  var currentSection = 0;
  var moved = 0;
  var frame;

  resizeHandler();

  win.on('resize', resizeHandler);

  win.on('scroll', function(e){
    e.preventDefault();
  })

  win.on('keydown', function(e) {
    cancelAnimationFrame(frame);

    var direction = (e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 32) 
        ? 1 
        : (e.keyCode === 37 || e.keyCode === 38) ? -1 : undefined;

    if (direction) 
    {
      animate((currentSection + direction) * -90,rotation)
      scrollHandler();
    }
  })

  sections.on('click',function() {
    cancelAnimationFrame(frame)
    animate($(this).index() * -90,rotation);
  })

  function scrollHandler() {
    requestAnimationFrame(function(){
      var scale = Math.pow(aspect,rotation/90);
      currentSection = Math.min(sectionCount + 2,Math.max(-sectionCount,Math.floor((rotation-30)/-90)));

      spiral.css({
        transform: 'rotate(' + rotation + 'deg) scale(' + scale + ')',
      })
      
      sections.removeClass('active')
      sections.eq(currentSection).addClass('active')
    })
  }

  function animate(targR,startR,speed) {
    var distance = startR - targR;
    var mySpeed = speed || .2;
    if (((targR || Math.abs(targR) === 0) && Math.abs(targR - rotation) > .1) || Math.abs(moved) > 1) {
      
      if (targR || Math.abs(targR) === 0) {
        rotation += mySpeed * (targR - rotation);
      } else {
        moved *= .98;
        rotation += moved/-10;
      }
      
      rotation = trimRotation();
      
      scrollHandler();
      
      frame = requestAnimationFrame(function(){
        animate(targR,startR,speed)
      });

    } else if (targR || Math.abs(targR) === 0) {
      cancelAnimationFrame(frame)
      rotation = targR;
      rotation = trimRotation();
      scrollHandler();
    }
  }

  function buildSpiral() {
    spiralOrigin = Math.floor(winWidth * axis) + 'px ' + Math.floor(winWidth * aspect * axis) +'px';
    var sectionWidth = winWidth * aspect;
    var sectionHeight = sectionWidth;

    spiral.css({
      transformOrigin: spiralOrigin,
      backfaceVisiblity: 'hidden'
    })

    sections.each(function(i){
      var myRot = Math.floor(90*i);
      var scale = Math.pow(aspect, i);
      $(this).css({
        width: sectionWidth,
        height: sectionHeight,
        transformOrigin: spiralOrigin,
        backfaceVisiblity: 'hidden',
        backgroundColor: 'rgb(' + Math.floor(155-i*(155/sectionCount)) + ',155,50)',
        transform: 'rotate(' + myRot + 'deg) scale(' + Math.pow(aspect, i) + ') '
      })
    })

    scrollHandler();
  }

  function resizeHandler () {
    winWidth = window.innerWidth/(1000/window.innerHeight);
    winHeight = window.innerHeight;
    buildSpiral()
  }

  function trimRotation() {
    return Math.max(-1500, Math.min(1200, rotation))
  }
})
