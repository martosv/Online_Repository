/* 
 var grid = [[0,1,0,0,0,0,0,0,0,0],     //0,0 ... 0,9
			 [0,0,0,0,0,0,0,0,0,0],     //1,0 ... 1,9
			 [0,0,0,0,0,0,0,0,0,0],    //2,0 ... 2,9
			 [0,0,0,0,0,0,0,0,0,0],  //3,0 ... 3,9
			 [0,0,0,0,0,0,0,0,0,0],  //4,0 ... 4,9
			 [0,0,0,0,0,0,0,0,0,0], //5,0 ... 5,9
			 [0,0,0,0,0,0,0,0,0,0], //6,0 ... 6,9
			 [0,0,0,0,0,0,0,0,0,0], //7,0 ... 7,9
			 [0,0,0,0,0,0,0,0,0,0], //8,0 ... 8,9
			 [0,0,0,0,0,0,0,0,0,0]];//9,0 ... 9,9

*/
var grid = [];
var rover = {};

var starting_position = [];

function createGrid() {
	
	for (i = 0 ; i < 10 ; i++) {
 		grid[i] = []; 

 		for (j = 0 ; j < 10; j++) {
 	 		grid[i][j]=0;
 			console.log(grid[i][j]);
 		}
	}
}
function createRover() {
	rover = {
		position: [4][4],
		direction: "N"
	}
}

function showGrid() {
	for (i = 0 ; i < 10 ; i++) {
 		 document.write("<br>");

 		for (j = 0 ; j < 10; j++) {
 	 		document.write("|_"+grid[i][j]+"_|");			
 		}
	}
	document.write("<br>");
}

function initRover(i, j) {
	starting_position = [i, j];

	//console.log(starting_position);

	 rover = {

	 	 position: grid[i][j]="<strong style='color:blue;'>N</strong>"
	 };
	 document.body.innerHTML = "";
	 showGrid();
}


function moveRover(i,j) {
	var move = prompt("Where do you want to move? (N, S, E or W)");
	move = move.toLowerCase();

	var keep_moving = true;

	switch(move) {
		case "n":
		rover.position = grid[i][j]=0
		rover.position = grid[i-=1][j]="<strong style='color:blue;'>N</strong>"
		break;

		case "s":
		rover.position = grid[i][j]=0
		rover.position = grid[i+=1][j]="<strong style='color:blue;'>N</strong>"
		break;

		case "e":
		rover.position = grid[i][j]=0
		rover.position = grid[i][j+=1]="<strong style='color:blue;'>N</strong>"
		break;

		case "w":
		rover.position = grid[i][j]=0
		rover.position = grid[i][j-=1]="<strong style='color:blue;'>N</strong>"
		break;

		
	}
		document.body.innerHTML = "";
		showGrid();
		var ask = prompt("Want to move to another point?(Yes or no)");
		ask = ask.toLowerCase();
		if (ask === "yes") {
			keep_moving = true;
			moveRover(i, j);
		}
		else {
			keep_moving = false;
		}


}



createGrid();

//createRover();

showGrid();

initRover(4, 4);

moveRover(4, 4);


//console.log(grid[0][0]);
