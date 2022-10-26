$(document).ready(function(){

    //hamburger Toggle
    $('.humbarger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();
    
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          event.preventDefault(); 
        }
      });
});

});

/* Homepage Nav Bar*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }