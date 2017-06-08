

var buttons = [""];

var addButton = function () {
	buttons.map(function(e) {

		var button = $("<button>");
		button.html(e);
		button.attr("data-name", e);
	
		$("buttonContainer").append(button);
	});

};

addButton();

var runAjax = function(link) {
	$(".images").empty();

	$.ajax({
		url: link, 
		method: "GET"
	})
	.done(function(response) {

		for (var i = 0; i < response.data.length; i++) {
			var image = $("<image>");
			image.attr({
				src:response.data[i].images.fixed_height.url,
				"data-animate": response.data[i].images.fixed_height.url,
				"data-still": response.data[i].images.fixed_height_still.url,
				"data-name": "still"
			});
			$(".images").append(image);
		}
	});
};


$("#search").on("click", function() {
	$(".buttonContainer").empty();

	var input = $("#searchButton").val().replace(" ", "+");

	if (input !== " ") {
		buttons.push(input);
		var link = "https://api.giphy.com/v1/gifs/search?q=" + input 
		+ "&api_key=dc6zaTOxFJmzC";
		console.log("link: " + link);

		runAjax(link); 
	}

	$("searchButton").val(" ");

	addButton();
});

$(".buttonContainer").on("click", "button", function() {

	var input = $(this).attr("data-name");
		console.log("input: " + input);
		link = "https://api.giphy.com/v1/gifs/search?q=" + input 
		+ "&api_key=dc6zaTOxFJmzC";
	runAjax(link);
});

$(".images").on("click", "img", function() {

	if ($(this).attr("data-name") === "still" ) {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-name", "animate");
	}

	else {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-name", "still")
	}
});



