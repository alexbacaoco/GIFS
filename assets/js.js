	// array of characters
	var topics = ["Morty", "Rick Sanchez", "Tina Belcher", "Linda Belcher", "Gene Belcher"];

	// displays info on html page
	function displayCharacterInfo() {

		var characer = $(this).attr("data-name");

		// api code for gifs
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC&limit=10";
	

		// AJAX command
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);

			var container = $("<div>");

			var rating = $("<div");
			rating.text("Rating: " + response.Rated);

			container.append(rating);

			$("#characters").prepend(container);
		});
	}

	// return this when button is clicked
	done(function(response) {
		var results = response.data;

		for (var i = 0; i < results.length; i++) {

			var gifDiv = $("<div class='item'>");

			var rating = results[i].rating;

			var p = $("<p>").text("Rating: " + rating);

			// puts rating at the top each time
			gifDiv.prepend(p);
		}
	})

	function renderButtons() {
		$("#buttons").empty();
		for (var i = 0; i < topics.length; i++) {
			
			var a = $("<button>");
			a.addClass("character");
			a.attr("data-name", movies[i]);
			a.text(movies[i]);
			("#buttons").append(a);
		}
	}

	// submit button
	$("#submit").on("click", function(event) {
		event.preventDefault();

		// push gifs
		var gif = $("#gif-input").val().trim();

		// new movie is added to array
		gif.push(gif);

		// handles movie array
		renderButtons();
	});

		// add event listeners to class of character
		$(document).on("click", ".character", displayCharacterInfo);

		// display initial buttons
		renderButtons();
