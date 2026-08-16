//window.addEventListener("load", function () {

    //imports
    //import './myClasses.js';
  
    // Get DOM elements
    const button = document.getElementById('ShrekButton');
    const autoClickerButton = document.getElementById('AutoClickerButton');
    const CounterDisplay = document.getElementById('CounterDisplay');
    let count = document.getElementById('CounterDisplay').textContent;
    const imageContainer = document.getElementById('image-container');
    const autoClickerDisplay = document.getElementById('AutoClickerDisplay');
   
    var increment = 1;
    var speed = 1000;
    var tId;

    let autoClickers = autoClickerDisplay ? parseInt(autoClickerDisplay.textContent.split(': ')[1]) : 0;
    let autoClickerCost = 100; // Cost of the auto clicker
    let autoClickerActive = false; // Flag to track if auto clicker is active
    //const myCursor = new MyCursor(); // Create an instance of MyCursor


    // Function to update the counter display
    function updateDisplay() {
        CounterDisplay.textContent = count;
        autoClickerDisplay.textContent = "Auto Clickers: " + autoClickers;
    }

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

    // Function to check the counter and show/hide the image
    function checkCounter() {
        //console.log("Current count: " + count); // Debugging line
        if (count >= autoClickerCost) { // Show image and button if count is 100 or more and less than 5 auto clickers
               
            showAutoClickerButton();

            autoClickerCost = 100 + (autoClickers * 50); // Increase cost for next auto clicker
        
            if (autoClickerCost > count) { // Show button if they have already purchased at least 1 auto clicker
                disableAutoClickerButton();
            }else {
                enableAutoClickerButton();
            } 
        } 
        else {
           disableAutoClickerButton();
        }
}

    function increaseCounter() {    
        count++;
        checkCounter();
    }

    function addAutoClicker() {
        autoClickers++;
        count -= autoClickerCost; // Deduct the cost from the count
        updateDisplay();
        checkCounter();
        tId = setInterval(function() {document.getElementById("CounterDisplay").innerHTML = count += increment;}, speed);
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
            
        });
    }

   window.addEventListener("load", function () {
        document.querySelectorAll(".start").forEach(function (element) {
            element.addEventListener("click", function () {
                //addAutoClicker();
            });
        });
    });

//});
