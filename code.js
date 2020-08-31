let music = new Audio('music/main_theme.mp3');
let pant;

$(document).ready(function() {
	$('.VL10').on('click', '#door_2', function() {
		OpenTheDoor("#door_2");
	}).on('click', '#door_1', function() {
		OpenTheDoor("#door_1");
	});

	$('.toggles').on('click', '#back_pantograph', function() {
		pant = $('#pant_1');
		if (!backPantUp) {
			backPantUp = true;
			$(this).css('background-color', 'lightgreen');
			GetPantUp();
		}
		else {
			backPantUp = false;
			$(this).css('background-color', '#fff');
			GetPantDown();
		}	
	}).on('click', '#front_pantograph', function() {
		pant = $('#pant_2');
		if (!frontPantUp) {
			frontPantUp = true;
			$(this).css('background-color', 'lightgreen');
			GetPantUp();
		}
		else {
			frontPantUp = false;
			$(this).css('background-color', '#fff');
			GetPantDown();
		}
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
	ShowDashboard();
}

function ShowDashboard() {
	$('.instruments').css('display', 'block');
	$('.arrow').css('display', 'block');
	$('.toggles').css('display', 'block');
}

//.:: Pantographs
let frontPantUp = false;
let backPantUp = false;

let timer = 0;

function GetPantUp() {
	window.requestAnimationFrame(animPantUp);
}

function GetPantDown() {
	window.requestAnimationFrame(animPantDown);
}

let src="images/locomotives/electric/pant/";

function animPantUp() {
	var animStop = false;
	if(timer < 2) {
		pant.attr("src", src + "pant_2.png");
	}
	else if(timer >= 2 && timer < 3) {
		pant.attr("src", src + "pant_3.png");
	}
	else if(timer >= 3 && timer < 4) {
		pant.attr("src", src + "pant_4.png");
	}
	else if(timer >= 4 && timer < 5) {
		pant.attr("src", src + "pant_5.png");
	}
	else if(timer >= 5 && timer < 6) {
		pant.attr("src", src + "pant_6.png");
	}
	else if(timer >= 6 && timer < 7) {
		pant.attr("src", src + "pant_7.png");
	}
	else if(timer >= 7 && timer < 8) {
		pant.attr("src", src + "pant_8.png");
	}
	else if(timer >= 8 && timer < 9) {
		pant.attr("src", src + "pant_9.png");
	}
	else if(timer >= 9 && timer < 10) {
		pant.attr("src", src + "pant_10.png");
	}
	else if(timer >= 10 && timer < 11) {
		pant.attr("src", src + "pant_11.png");
	}
	else if(timer >= 11 && timer < 12) {
		pant.attr("src", src + "pant_12.png");
	}
	else if(timer >= 12 && timer < 13) {
		pant.attr("src", src + "pant_13.png");
	}
	else if(timer >= 13 && timer < 14) {
		pant.attr("src", src + "pant_14.png");
	}
	else if(timer >= 14 && timer < 15) {
		pant.attr("src", src + "pant_15.png");
	}
	else if(timer >= 15 && timer < 16) {
		pant.attr("src", src + "pant_16.png");
	}
	else if(timer >= 16 && timer < 17) {
		pant.attr("src", src + "pant_15.png");
	}
	else if(timer >= 17 && timer < 18) {
		pant.attr("src", src + "pant_14.png");
	}
	else if(timer >= 18 && timer < 19) {
		pant.attr("src", src + "pant_13.png");
	}
	else if(timer >= 19 && timer < 20) {
		pant.attr("src", src + "pant_14.png");
		animStop = true;
	}
	if(!animStop) {
		timer += 0.2;
		window.requestAnimationFrame(animPantUp);
	}

}

function animPantDown() {
	let animStop = false;
	if(timer >= 15 && timer < 17) {
		pant.attr("src", src + "pant_14.png");
	}
	else if(timer >= 14 && timer < 15) {
		pant.attr("src", src + "pant_13.png");
	}
	else if(timer >= 13 && timer < 14) {
		pant.attr("src", src + "pant_12.png");
	}
	else if(timer >= 12 && timer < 13) {
		pant.attr("src", src + "pant_11.png");
	}
	else if(timer >= 11 && timer < 12) {
		pant.attr("src", src + "pant_10.png");
	}
	else if(timer >= 10 && timer < 11) {
		pant.attr("src", src + "pant_9.png");
	}
	else if(timer >= 9 && timer < 10) {
		pant.attr("src", src + "pant_8.png");
	}
	else if(timer >= 8 && timer < 9) {
		pant.attr("src", src + "pant_7.png");
	}
	else if(timer >= 7 && timer < 8) {
		pant.attr("src", src + "pant_6.png");
	}
	else if(timer >= 6 && timer < 7) {
		pant.attr("src", src + "pant_5.png");
	}
	else if(timer >= 5 && timer < 6) {
		pant.attr("src", src + "pant_4.png");
	}
	else if(timer >= 4 && timer < 5) {
		pant.attr("src", src + "pant_3.png");
	}
	else if(timer >= 3 && timer < 4) {
		pant.attr("src", src + "pant_2.png");
	}
	else if(timer >= 2 && timer < 3) {
		pant.attr("src", src + "pant_1.png");
	}
	else if(timer >= 1 && timer < 2) {
		pant.attr("src", src + "pant_1.png");
	}
	else if(timer >= 0 && timer < 1) {
		pant.attr("src", src + "pant_2.png");
		animStop = true;
	}
	if(animStop !=true) {
		timer -= 0.2;
		window.requestAnimationFrame(animPantDown);
	}
}