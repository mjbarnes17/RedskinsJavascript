var divHTML = '';
var player;
var response;

function print(message) {
	var divOutput = document.getElementById('output');
	divOutput.innerHTML = message;
}

function printRoster(playersArr){
	for (var i = 0; i < playersArr.length; i++) {
		player = playersArr[i];
		divHTML += '<div class="col-sm-6 col-md-4">';
		divHTML += '<div class="thumbnail">';
		divHTML += '<img src="' + player.image + '" alt="...">';
		divHTML += '<div class="caption">';
		divHTML += '<h3>' + player.name + ' <strong><i>#' + player.number + '</i></strong></h3>';
		divHTML += '<p><strong>Position: </strong>' + player.position + '</p>';
		divHTML += '<p><strong>Age: </strong>' + player.age + '</p>';
		divHTML += '<p><strong>Experince: </strong>' + player.experience + ' year(s)</p>';
		divHTML += '<p><strong>College: </strong>' + player.college + '</p>';
		divHTML += '</div>';
		divHTML += '</div>';
		divHTML += '</div>';
	}
	print(divHTML);
}

function getPlayer(player){
	var playerInfo = '<div class="col-sm-6 col-md-4">';
	playerInfo += '<div class="thumbnail">';
	playerInfo += '<img src="' + player.image + '" alt="...">';
	playerInfo += '<div class="caption">';
	playerInfo += '<h3>' + player.name + ' <strong><i>#' + player.number + '</i></strong></h3>';
	playerInfo += '<p><strong>Position: </strong>' + player.position + '</p>';
	playerInfo += '<p><strong>Age: </strong>' + player.age + '</p>';
	playerInfo += '<p><strong>Experince: </strong>' + player.experience + ' year(s)</p>';
	playerInfo += '<p><strong>College: </strong>' + player.college + '</p>';
	playerInfo += '</div>';
	playerInfo += '</div>';
	playerInfo += '</div>';
	return playerInfo;
}

while (true) {
	response = prompt("Enter one of the following players first and last name to display their info: 'Robert Griffin III', 'De Sean Jackson', 'David Amerson', 'Jordan Reed', or 'Alfred Morris'. If you wish to exit the prompt window, enter 'exit' or click the x at the top right hand corner of the window.");
	if (response === null || response.toLowerCase() === 'exit'){
		break;
	}
	for (var i = 0; i < players.length; i++) {
		player = players[i];
		if (player.name === response){
			divHTML += getPlayer(player);
			found = true;
			print(divHTML);
		}
	}
}
