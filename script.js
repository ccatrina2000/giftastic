
		//Initial aray of animals
		var animals = ["Dog", "Cat", "Lion", "Bear", "Snake", "Frog", "Chicken", "Monkey", "Elephant", "Zebra"];

		//function for rendering buttons with animals from the array
		function renderButtons() {

		//make sure content is empty before adding buttons
		$('#button-div').empty();

			//loop through array of animals to generate buttons
			for ( var i = 0; i < animals.length; i++) {
				
				//create a button	
				var a = $("<button>");

				//add a class to each button
				a.addClass("animal");

				//add a name attribute
				a.attr("animal-name", animals[i]);

				//give each button text
				a.text(animals[i]);

				//append button in HTML
				$('#button-div').append(a);

			};

		};

		renderButtons();

				
		//clicking on an exising button will get gifs
		$("button").on("click", function () {

			var buttonSelected = $(this).attr('animal-name');

			console.log(buttonSelected);

		//api key
		var apiKey = "dc6zaTOxFJmzC";	

		//assign variable to a URL
		var queryURL = "http://api.giphy.com/vi/gifs/random?api_key=" + apiKey + "&tag=" + buttonSelected +"&limit=10";

		//create AJAX to get query
		$.ajax({
			url: queryURL,
			method: "GET"
		})

		//grab the URL
		.done(function(response) {

			//response data
			var results = response.data;

			console.log(response);

			console.log(results);

			console.log(queryURL);

			//loop through each result
			for(var i = 0; i < results.length; i++)

				//create a div
				var animalDiv = $("<div>");

				//create a <p> tag
				var p = $("<p>").text("Image" + results[i]);

				//create and store image
				var animalImage = $("<img>");

				//src attribute of the image
				animalImage.attr("src", results[i].images.fixed_height.url);
				animalImage.attr("data-state", "still")

				//append image and <p> tag
				animalDiv.append(animalImage);
				animalDiv.append(p);

				//prepend animalDiv
				$("#images").prepend(animalDiv);
			});

		});

	
		//when new animal is entered and clicked
		$('#addAnimal').on("click", function(event) {
			event.preventDefault();

			//grab text entered in text box
			var animalInput = $("#newAnimal").val();

			//push the new to end of array
			animals.push(animalInput);

			//create new button
			renderButtons();

			//api key
			var apiKey = "2TwA9PsZx2m6l5ix4ZADlybKVldHmfhA";	

			//assign variable to a URL
			var queryURL = "http://api.giphy.com/vi/gifs/random?api_key=" + apiKey + "animal=" + animalInput + "&limit=10";

			//create AJAX to get query
			$.ajax({
				url: queryURL,
				method: "GET"
			})

			//grab the URL
			.done(function(response) {

			//response data
			var results = response.data;

			console.log(response);

			console.log(results);

			console.log(queryURL);

			//loop through each result
			for(var i = 0; i < results.length; i++)

				//create a div
				var animalDiv = $("<div>");

				//create a <p> tag
				var p = $("<p>").text("Image" + results[i]);

				//create and store image
				var animalImage = $("<img>");

				//src attribute of the image
				animalImage.attr("src", results[i].images.fixed_height.url);
				animalImage.attr("data-state", "still");

				//append image and <p> tag
				animalDiv.append(animalImage);
				animalDiv.append(p);

				//prepend animalDiv
				$("#images").prepend(animalDiv);

			//reset input for new animal
			animalInput.reset();	

		});

	});

		//getting the animation of the images
		 $(".gif").on("click", function() {

		 	//creating initial state
            var state = $(this).attr("data-state");

            //if state is Still, change to animate, else change to still
            if (state === "still") {
            	$(this).attr("src", $(this).attr("data-animate"));
            	$(this).attr("data-state", "animate");
            }
            	else {
            		$(this).attr("src", $(this).attr("data-still"));
            		$(this).attr("data-state", "still");
            	}
          });


      
				

		




			


			



	