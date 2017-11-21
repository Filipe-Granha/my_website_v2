
// $(function() {
// 	$(window).scroll(function() {
// 		if($(window).scrollTop() > 240) {
// 			$('header').addClass('header__sticky');
// 			$('body').addClass('is-scrolling');
// 		}
// 		else{
// 			$('header').removeClass('header__sticky');
// 			$('body').removeClass('is-scrolling');
// 		}
// 	});
// });


function showHeader() {
	if($(window).scrollTop() > 240) {
			$('header').addClass('header__sticky');
			$('body').addClass('is-scrolling');
		}
		else{
			$('header').removeClass('header__sticky');
			$('body').removeClass('is-scrolling');
		}
		}

		$(document).ready(function() {
			showHeader();
			$(window).scroll(function() {
				showHeader();
			});
		});


// 		$("#budgetiny").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// 		$("#tazkz").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// 		$("#map").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// 		$("#properties").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
