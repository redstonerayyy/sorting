let values = [];
let w = 20;
let states = [];

function setup() {
	// Create Canvas of given Size
	createCanvas(800, 500);
	  
	// Assign Array of Random Values
	values = new Array(floor(width/w));
	  
	for(let i = 0; i < values.length; i++) {
		values[i] = float(random(height));
		states[i] = -1; 
	}
	quickSort(values, 0, values.length);
}
  
// Asynchronous Definition of Quick Sort Function
async function quickSort(arr, start, end) {
	if(start >= end) {
		return;
	}
	let index = await partition(arr, start, end);
	states[index] = -1;
	  
	// Promise.all is used so that each function
	// should invoke simultaneously
	await Promise.all([quickSort(arr, start, index-1),
			quickSort(arr, index+1, end)]);
}
  
// Asynchronous Definition of Partition Function
async function partition(arr, start, end) {
	  
	for(let i = start; i< end; i++) {
		states[i] = 1;
	}
	  
	let pivotIndex = start;
	let pivotValue = arr[end];
	states[pivotIndex] = 0;
	  
	for(let i = start; i < end; i++) {
		if(arr[i]<pivotValue) {
			await swap(arr, i, pivotIndex);
			states[pivotIndex] = -1;
			pivotIndex++;
			states[pivotIndex] = 0;
		}
	}
	  
	await swap(arr, pivotIndex, end);
	  
		for(let i = start; i < end; i++) {
			states[i] = -1;
		}
	  
	return pivotIndex;
}
  
// Definition of Draw function
function draw() {
	  
	// Set Background Color 
	background(51);
	  
	for(let i = 0; i < values.length; i++) {
		stroke(0);
		fill(255);
		  
		if(states[i] == 0) {
		  
			// Pivot Element
			fill(255, 0, 0);
		}
		else if (states[i]==1) {
			// Sorting bar
			fill("#58FA82");
		}
		else {
			// Sorted Bars
			fill(255);
		}
		  
		rect(i*w, height - values[i], w, values[i]);
	}
}
  
async function swap(arr, a, b) {
	  
	// Call to sleep function
	await sleep(100);
	let t = arr[a];
	arr[a] = arr[b];
	arr[b] = t;
}
  
// Definition of sleep function
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}