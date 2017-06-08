$(document).ready(function() {

	var crystal = {
		wins: 0,
		losses: 0;
		score: 0;
		crystalIndex = [0, 1, 2, 3],

		randomNumber:function(first, second) {
			var result = Math.floor(Math.random() * second) + first;
			return result;
		},
		result: 0
	};

	var total = crystal.randomNumber(9, 30);


	function random() {
	for (var i = 0; i < crystal.crystalIndex.length; i++) {
		crystal.crystalIndex[i] = crystal.randomNumber(1, 10);
	};
}
	console.log(crystal.crystalIndex);



	var mikeMike = $(".crystal p");

	for(var i = 0; i < mikeMike.length; i++) {
		$(mikeMike[i].html(crystal.crystalIndex[i]));
	}

	$(".crystal").on("click", function() {
		var scoreSum = $(this).children(this).text();

		var num = parseInt(scoreSum);

		crystal.result = crystal.result + num;
		console.log(crystal.result);

		if (crystal.total === crystal.result) {
			crystal.wins++;
			$(".wins").html("Winner winner chicken dinner! " + crystal.wins);
			crystal.total = crystal.randomNumber(9, 30);
			console.log(crystal.crystalIndex);
		}

		else if(crystal.result > crystal.total) {
			crystal.losses++;
			$(".losses").html("LOOOOOSER: " + crystal.losses);
		
		}
	})




};

console.log(crystal.result)