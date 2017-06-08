alert("Press any key to begin. Type in all lowercase letters.");

document.onkeyup = function () {

	// The movie Choices
	var movies = "Snow White, Bambi, Dumbo, Pinnochio, Cinderella, Peter Pan, Alice in Wonderland, The Lady and the Tramp, One Hundred and One Dalmatians, The Jungle Book, The Aristocrats, The Rescuers, The Little Mermaid, Beauty and the Beast, Pocahontas, The Lion King, Hercules, Mulan, The Hunchback of Notre Dame, Tarzan, Fantasia, Anastasia, The Emperor's New Groove, Atlantis, Dinosaur, Lilo and Stitch, Brother Bar, Treasure Planet, Chicken Little, Meet the Robinsons, Bolt, Tangles, The Princess and the Frog, Winnie the Pooh, Wreck it Ralph, Frozen, Big Hero Six, Aladdin, Brave, A Bugs Life, Cars, Monsters Inc, Finding Nemo, The Incredibles, Inside Out, The Little Mermaid";

	// Making the string into an array list.
	var toArray = movies.toLowercase().split(", ");
	console.log(toArray);

	// Choosing a movie.
	var pcChoice = toArray[Math.floor(Math.random() * toArray.length())];
	console.log(pcChoice);
}

	// Get the keys that the users typed. 