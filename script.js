

//imports
//import '/myClasses.js';
  
// Get DOM elements
const button = document.getElementById('ShrekButton');
const autoClickerButton = document.getElementById('AutoClickerButton');
const CounterDisplay = document.getElementById('CounterDisplay');
const imageContainer = document.getElementById('image-container');
const autoClickerDisplay = document.getElementById('AutoClickerDisplay');

var increment = 1;
var speed = 1000;
var tId;

let count = document.getElementById('CounterDisplay').textContent;
let autoClickers = autoClickerDisplay ? parseInt(autoClickerDisplay.textContent.split(': ')[1]) : 0;
let autoClickerCost = 100; // Cost of the auto clicker
let autoClickerActive = false; // Flag to track if auto clicker is active

//Cache
/*
caches.open('my-cache-v1').then(cache => {
return cache.addAll([
    './index.html',
    './styles.css',
    './script.js',
    './myClasses.js',
]);
});

caches.match('./index.html').then(response => {
if (response) {
return response; // Serve from cache
}
return fetch('./index.html'); // Fallback to network
}); 
*/


function showImage() {
    imageContainer.style.display = "block"; // Show the image
}  

function hideImage() {
    imageContainer.style.display = "none"; // Hide the image
}

function hideAutoClickerButton() {
    autoClickerButton.style.display = "none"; // Hide the auto clicker button
    autoClickerDisplay.style.display = "none"; // Hide the auto clicker display
} 

function showAutoClickerButton() {
    autoClickerButton.style.display = "block"; // Show the auto clicker button
    autoClickerDisplay.style.display = "block"; // Show the auto clicker display
}

function disableAutoClickerButton() {
    autoClickerButton.disabled = true; // Disable the auto clicker button
}

function enableAutoClickerButton() {
    autoClickerButton.disabled = false; // Enable the auto clicker button
}

function updateClickerCost() {
    autoClickerCost = 100 + (autoClickers * 50);
}
// Function to update the counter display
function updateDisplay() {
    CounterDisplay.textContent = count;
    autoClickerDisplay.textContent = "Auto Clickers: " + autoClickers + " (Cost: $" + autoClickerCost + ")";

    if (count >= autoClickerCost) {
        enableAutoClickerButton();
        
    }else {
        disableAutoClickerButton();
    }               
}

    // Function to check the counter and show/hide the image
function checkCounter() {

    if (count >= autoClickerCost) { // Show autoclicker button if count is 100 or more and less than 5 auto clickers

        showAutoClickerButton(); // Show the auto clicker button when the first auto clicker is purchased
        updateClickerCost(); // Update the cost for the next auto clicker

    }

    updateDisplay(); // Update the display after checking the counter
}

function increaseCounter() {    
    count++;
    checkCounter();
}

function addAutoClicker() {
    autoClickers++;
    count -= autoClickerCost; // Deduct the cost from the count
    updateClickerCost(); // Update the cost for the next auto clicker
    updateDisplay();
    //count += increment;
    tId = setInterval(function() {increaseCounter();}, speed);
        
}

//shrek me
if (button) {
    button.addEventListener("click", function () {    
        increaseCounter();
        updateDisplay();
    });
}

//Auto clicker button
if (autoClickerButton) {
    autoClickerButton.addEventListener("click", function () {
        addAutoClicker();
        updateDisplay();
    });
}

window.addEventListener("load", function () {
    document.querySelectorAll(".start").forEach(function (element) {
        element.addEventListener("click", function () {
            checkCounter();
            updateDisplay();
        });
    });
});

