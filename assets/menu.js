/*
	
	@RobertC 2019
	
	* This is the  jQuery code for the menu animation.
*/

$(document).ready(function(){
	
	// Draw menu container
	$("body").append("<div id = \"load_menu\" >" +
					 "  <div class = \"menu_item\" onclick = \"location.href='home.html';\"> Home </div>" +
					 "  <div class = \"menu_item\" onclick = \"location.href='about.html';\"> About </div>" +
					 "  <div class = \"menu_item\" onclick = \"location.href='contact.html';\"> Contact </div>" +
					 "</div>")

	// Menu animations
	function animation(){
		
		$("#load_menu").hide();
		$("#load_menu").slideDown(900);
	}
	
	// Start animation function!
	animation();
	
});