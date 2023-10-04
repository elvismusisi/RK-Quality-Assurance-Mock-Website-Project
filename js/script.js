
//javascript


$(function(){

"use strict";
var topoffset=40;

var slideqty =$('#featured .item').length;
var wheight = $(window).height();
var randSlide = Math.floor(Math.random()*slideqty);

$('#featured .item').eq(randSlide).addClass('active');

$('.fullheight').css('height',wheight);

//replacing IMG INSIDE with a background image

$("#featured .item img").each(function(){
 
 var imgSrc=$(this).attr('src');
 //$(this).parent().css({'background-image':'url ('+imgSrc') '} );

$(this).parent().css({'background-image': 'url('+imgSrc+')'});
$(this).remove();
 
});

//adjust height of fullheight element

$(window).resize(function(){

 wheight = $(window).height();

$('.fullheight').css('height',wheight);


});











//Activate scrollspy
$('body').scrollspy({
target:'header .navbar',
offset:topoffset

});


//Add an inbody class to nav when scrollspy event fires
$('.navbar-fixed-top').on('activate.bs.scrollspy',function(){

var hash = $(this).find('li.active a').attr('href');
if(hash !== '#featured') {
	$('header nav').addClass('inbody');
} else {
	$('header nav').removeClass('inbody');
}


});



//Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling






// Automatically generate carousel indicators

for(var i=0; i < slideqty; i++){

	var insertText = '<li data-target="#featured" data-slide-to="'+ i + '"> </li>';

	$('#featured ol').append(insertText);
}






$('.carousel').carousel({
	interval:2000,
	
});

$('[data-toggle="popover"]').popover();



});

$(document).ready(function(){
  $('#dropdownMenuButton').on('show.bs.dropdown', function () {
    console.log("Dropdown is being shown!");
  });
});

function toggleDropdown(num) {
  const content = document.getElementById('dropdown-' + num);
  const icon = content.previousElementSibling.querySelector('i');
  
  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      icon.className = 'fas fa-chevron-down';
  } else {
      content.style.display = 'none';
      icon.className = 'fas fa-chevron-right';
  }
}

document.getElementById("emailButton").addEventListener("click", function() {
  const emailAddress = "client@email.com";  // Change this to your client's email
  const subject = encodeURIComponent("Contact from the web page");
  const emailBody = encodeURIComponent("Hello,\n\nI am interested in contacting you from the website.");

  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${emailBody}`;
});



$(document).ready(function() {
  $('.process-item').click(function() {
      const processId = $(this).attr('data-process');
      $('.process-description').hide();
      $('#process-' + processId).show();
  });
});

//
