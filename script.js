//window.addEventListener("load", function () {

    //imports
    //import './myClasses.js';
  
    // Get DOM elements
    const button = document.getElementById('ShrekButton');
    const autoClickerButton = document.getElementById('AutoClickerButton');
    const CounterDisplay = document.getElementById('CounterDisplay');
    let count = CounterDisplay ? parseInt(CounterDisplay.textContent.split(': ')[1]) : 0;
    const imageContainer = document.getElementById('image-container');
    const autoClickerDisplay = document.getElementById('AutoClickerDisplay');
   
    var increment = 1;
    var speed = 1000;
    var tId;

    let autoClickers = autoClickerDisplay ? parseInt(autoClickerDisplay.textContent.split(': ')[1]) : 0;
    let autoClickerActive = false; // Flag to track if auto clicker is active
    //const myCursor = new MyCursor(); // Create an instance of MyCursor


    // Function to update the counter display
    function updateDisplay() {
        CounterDisplay.textContent = "Counter: " + count;
        autoClickerDisplay.textContent = "Auto Clickers: " + autoClickers;
    }

    function showImage() {
        imageContainer.style.display = "block"; // Show the image
    }  

    function hideImage() {
        imageContainer.style.display = "none"; // Hide the image
    }

    // Function to check the counter and show/hide the image
    function checkCounter() {
        //console.log("Current count: " + count); // Debugging line
        if (count >= 100) {
            showImage();
        } else {
            hideImage();
        }
    }

    function increaseCounter() {    
        count++;
        checkCounter();
    }

    function inc() {
    //clearInterval(tId); // stop anything already running
    tId = setInterval(function() {
    document.getElementById("CounterDisplay").innerHTML = count += increment;
  }, speed);
}

//shrek me
    if (button) {
        button.addEventListener("click", function () {    
            increaseCounter();
            updateDisplay();
        });
    }
//regular click
    if (autoClickerButton) {
        autoClickerButton.addEventListener("click", function () {
            inc();
            updateDisplay();
        });
    }

   window.addEventListener("load", function () {
        document.querySelectorAll(".start").forEach(function (element) {
            element.addEventListener("click", function () {
                console.log("Auto clicker started!");
                //increaseCounter();

                inc();

            });
        });
    });

//});
