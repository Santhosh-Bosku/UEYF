window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
document.getElementById("banner").style.backgroundColor = "rgba(0, 0, 0, 0.527)";
document.getElementById("lineone").style.backgroundColor = "black";
document.getElementById("linetwo").style.backgroundColor = "black";
document.getElementById("lineone").style.display = "block";
document.getElementById("logoimg").style.display = "block";
document.getElementById("mainLogo").style.opacity = "0";
document.getElementById("myVideo").pause();
document.getElementById("linetwo").style.display = "block";
document.getElementById("play").style.display = "block";
document.getElementById("pause").style.display = "none"; 
document.getElementById("myBtn").style.display = "none";
document.getElementById("go").style.display = "none";

}
else {
document.getElementById("banner").style.backgroundColor = "rgba(240, 255, 255, 0)";
document.getElementById("lineone").style.backgroundColor = "white";
document.getElementById("linetwo").style.backgroundColor = "white";
document.getElementById("lineone").style.display = "block";
document.getElementById("linetwo").style.display = "block";
document.getElementById("logoimg").style.display = "none";
document.getElementById("mainLogo").style.opacity = "8";
document.getElementById("myBtn").style.display = "block";
document.getElementById("go").style.display = "block";
// uncheck();

}
}

function uncheck()
{
if (document.getElementById("in1").checked = "true")
{
  document.getElementById("logo").style.display = "block";
  document.getElementById("banner").style.backgroundColor = "grey";
  document.getElementById("lineone").style.backgroundColor = "white";
  document.getElementById("linetwo").style.backgroundColor = "white";
  document.getElementById("lineone").style.display = "block";
  document.getElementById("linetwo").style.display = "block";  
}
else
{
  // document.getElementById("banner").style.backgroundColor = "rgba(240, 255, 255, 0)";
  // document.getElementById("lineone").style.backgroundColor = "rgba(240, 255, 255, 0)";
  // document.getElementById("linetwo").style.backgroundColor = "rgba(240, 255, 255, 0)";
}
}



function myFunction() 
{
  if (document.getElementById("myVideo").paused)
  {
    document.getElementById("myVideo").play();
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "none";
  }
  else if(document.getElementById("myVideo").play())
  {
    document.getElementById("myVideo").pause();
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
  }
}

// var slideIndex = 0;
// showSlides();
// var slides,dots;

// function plusSlides(position) {
//     slideIndex += position;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     else if(slideIndex < 1){slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     // for (i = 0; i < dots.length; i++) {
//     //     dots[i].className = dots[i].className.replace(" active", "");

//     //   }
//         slides[slideIndex-1].style.display = "block";  
//         // dots[slideIndex-1].className += " active";
//     }



function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    // dots = document.getElementsByClassName("dot");
    for (i = 0; i < document.getElementsByClassName("mySlides").length; i++) {
      document.getElementsByClassName("mySlides")[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> document.getElementsByClassName("mySlides").length) {slideIndex = 1}    
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    document.getElementsByClassName("mySlides")[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 500); // Change image every 3 seconds
}


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


/***************************************************************************************************/ 



/************************************************************************/ 
