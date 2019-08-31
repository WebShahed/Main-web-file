// var j=0;
// var txt="I am Web Designer and Developer.Besides some other extra knowledge.";
// var speed=80;
//  function typewrite(){
// 	 if( j < txt.length){
// 		 document.getElementById("type_run").innerHTML += txt.charAt(j);
// 		 j++;
// 		 setTimeout(typewrite,speed);
// 	 }
//  }
/*navbar click slow code*/
 $('.js-btn').eq(0).click(() =>{
 	$('html ,body').animate({
 		scrollTop: $('js-section').eq(0).offset().top
 	},200);
 });
  $('.js-btn').eq(1).click(() =>{
 	$('html ,body').animate({
 		scrollTop: $('js-section').eq(1).offset().top
 	},200);
 });
   $('.js-btn').eq(2).click(() =>{
 	$('html ,body').animate({
 		scrollTop: $('js-section').eq(2).offset().top
 	},200);
 });
    $('.js-btn').eq(3).click(() =>{
 	$('html ,body').animate({
 		scrollTop: $('js-section').eq(3).offset().top
 	},200);
 });
     $('.js-btn').eq(4).click(() =>{
 	$('html ,body').animate({
 		scrollTop: $('js-section').eq(4).offset().top
 	},200);
 });

     /*wow text animate code*/
     new WOW().init();

     	/*Mixit Up code */
 var shahed =document.querySelector('.mymixcont');
 var mixer =mixitup(shahed);
		

/*type.js code*/
var typed = new Typed(".type",{
	strings: [
		"Designer",
		"Developer",
		"Freelancer"
	],
	typeSpeed: 60,
	backSpeed: 60,
	loop: true
});
/*for image toggle*/
	$("#toggle").click(function(){
				$("#spinner").css('display','inline-block');
				$("#spinner").fadeToggle("slow");
				$("#click-img").slideToggle(2000);


			});

/*Owl carousel js here*/
// var owl = $('.owl-carousel');
//       owl.owlCarousel({
//         margin: 10,
//         loop: true,
//         responsive: {
//           0: {
//             items: 1
//           },
//           600: {
//             items: 2
//           },
//           1000: {
//             items: 3
//           }
//         }
//       })