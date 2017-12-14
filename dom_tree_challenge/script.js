$(document).ready(function() {

	//Traversing Sideways challenge Part 2
	$(".card_image").click(function(){	//When an image is clicked...
		$(this).next().children("p").slideDown();		//the paragraph below it is revealed
	});
	//Currently only works for 2 of the left-most card images as the html structure (DOM) for the other cards is different

});