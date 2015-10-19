/* Event On Click quoteButton */

$(".quoteButton").on('click', function(){

	/* Get random quote via JSONP */

	$.getJSON( "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function( data ) {

		var text = data.quoteText;
		var author = data.quoteAuthor;

	/* Assign author unknown to some quotes */

		if (author === '') {
			author = 'Unknown';
		}

	/* Attach quote in div quote class with fade-in */

  $(".inside").hide().html('<p><em>"' + text + '"</em></p>' + ' <br><p> ' + author + ' </p> ').fadeIn('slow');

	/* Create attribute for anchor Twitter button - open new window to tweet the quote */

	$('.tweet-btn').attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + text + '"' + ' - ' + author);


	});
});
