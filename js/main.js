var complete = false;

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

/*
    $( "video" ).fadeTo( "slow" , 1, function() {
    // Animation complete.
  });
  */

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
