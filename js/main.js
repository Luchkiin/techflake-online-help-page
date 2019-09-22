// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

//Scroll to top function
function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}

/*Hanmburger menu*/
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});

/*Function for opening a printing window*/
function printFunction() {
  window.print();
}
