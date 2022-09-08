let unsorted_values = [];
let cwidth = 800;
let cheight = 500;
let max = 20.0;
let min = 20.0;


function setup() {
	// Create Canvas of given Size
	createCanvas(cwidth, cheight);

	for(let i = 0; i < cwidth/20; i++) {
		unsorted_values[i] = float(random(cheight));
	}

	console.log(unsorted_values);
}

function draw(){
	background(51);
	  
	for(let i = 0; i < unsorted_values.length; i++) {
		stroke(0);
		fill(255);
		
		  
		rect(i*w, height - values[i], w, values[i]);
	}
}

// Definition of sleep function
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}