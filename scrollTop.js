// Get the button
let mybutton = document.getElementById("toTopBtn");
        
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350|| document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
    setTimeout(function(){ mybutton.style.opacity = "1"; }, 10); // Timeout for display to apply before opacity
  } else {
    mybutton.style.opacity = "0.5";
    setTimeout(function(){ mybutton.style.display = "none"; }, 500); // Timeout for opacity transition to finish before display none
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}