var complete = false;
var cr = 100;
var p = null;
var PJS =   particlesJS.load("particles-js","js/p.json",function(){
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    p = window.pJSDom[0].pJS;
    }
})





var audio =  $('#audio');
audio.trigger('play');
var vid = document.getElementById("audio");
vid.volume = 0.2;
vid.playbackRate = 1.0;

$('#playi').hide();

$('#playi').click(function(){
audio.trigger('play');
$('#playi').hide();
$('#pausei').show();
})


$('#pausei').click(function(){
audio.trigger('pause');
$('#playi').show();
$('#pausei').hide();
})

var scene = document.getElementById('particles-js');
var parallax = new Parallax(scene);
new WOW().init();

var myVivus = new Vivus('cic', {
  type: 'delayed',
  duration: 180,
  animTimingFunction: Vivus.EASE
});
myVivus.stop();
myVivus.setFrameProgress(0);


var increaseid = null;
var decreaseid = null;

$('body').mousedown(function(){

  var vid = document.getElementById("audio");
  vid.volume = 0.8;
vid.playbackRate = 1.1;

  //  $('.logocontainer').css({"width": "100%", "height": "100%","top": "0"});
console.log("Mouse down");
//or customize things:

if(decreaseid != null){
  clearInterval(decreaseid);
}
increaseid = window.setInterval(
     function () {
        cr = cr + 5;
         document.getElementById("mc").setAttribute("r", cr);

     }, 100);



p.particles.move.speed = 50;
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
  $('#intro').css({"opacity":0})
setInterval(function(){    window.location.href = 'home.html'; }, 1000);

  vid.playbackRate = 1;
})
})

$('body').mouseup(function(){

  if(increaseid != null){
  clearInterval(increaseid);
  }


  var vid = document.getElementById("audio");
  vid.volume = 0.2;
  vid.playbackRate = 0.8;

  decreaseid = window.setInterval(
       function () {
          if(cr != 100){
            cr = cr - 5;
             document.getElementById("mc").setAttribute("r", cr);
          }

       }, 100);


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
