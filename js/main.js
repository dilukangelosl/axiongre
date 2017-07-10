var complete = false;

var p = null;
var PJS =   particlesJS.load("particles-js","js/p.json",function(){
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    p = window.pJSDom[0].pJS;
    }
})





var myVivus = new Vivus('cic', {
  type: 'delayed',
  duration: 100,
  animTimingFunction: Vivus.EASE
});
myVivus.stop();
myVivus.setFrameProgress(0);

$('body').mousedown(function(){
  //  $('.logocontainer').css({"width": "100%", "height": "100%","top": "0"});
console.log("Mouse down");

console.log(p);
p.particles.number.value = 100;
/*
    $( "video" ).fadeTo( "slow" , 1, function() {
    // Animation complete.
  });
  */


console.log(PJS);
   if(!complete){
     myVivus.setFrameProgress(0);
   }

  myVivus.play(function() {
  // called after the animation completes
    //$('.logocontainer').css({"width": "100%", "height": "100%","top": "0"});
  console.log("Done");
  complete = true;
})
})

$('body').mouseup(function(){

console.log("Mouse up");
  p.particles.move.speed = 4;
  p.particles.number.value = 22;
    if(!complete){
      myVivus.reset();
      myVivus.stop();


        //$('.logocontainer').css({"width": "400px", "height": "300px","top": "40%"});

/*
        $( "video" ).fadeTo( "slow" , 0, function() {
        // Animation complete.
      });
      */
    }

})
