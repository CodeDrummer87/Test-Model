let music = new Audio('music/main_theme.mp3');

$(document).ready(function() {
	$('.VL10').on('click', '#door_2', function() {
		OpenTheDoor("#door_2");

	}).on('click', '#door_1', function() {
		$(this).remove();
		OpenTheDoor("#door_1");
	});
});

function OpenTheDoor(id) {
	music.play();
	$(id).css('display', 'none');
	let audio = new Audio('sounds/open_door.mp3');
	audio.play();

	setTimeout(CloseTheDoor, 3000, id);
}

function CloseTheDoor(id) {
	let audio = new Audio('sounds/close_door.mp3');
	audio.play();

	$(id).css('display', 'block');
}