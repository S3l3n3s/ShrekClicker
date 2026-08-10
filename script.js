document.addEventListener("DOMContentLoaded", function () {
  
    // Get DOM elements
    const button = document.getElementById('ShrekButton');
    const CounterDisplay = document.getElementById('CounterDisplay');
    const imageContainer = document.getElementById('image-container');
    let count = CounterDisplay ? parseInt(CounterDisplay.textContent.split(': ')[1]) : 0;


    

    // Function to update the counter display
    function updateDisplay() {
        CounterDisplay.textContent = "Counter: " + count;
    }

    function showImage() {
        imageContainer.style.display = "block"; // Show the image
    }  

    function hideImage() {
        imageContainer.style.display = "none"; // Hide the image
    }

    // Function to check the counter and show/hide the image
    function checkCounter() {
        console.log("Current count: " + count); // Debugging line
        if (count >= 100) {
            showImage();
        } else {
            hideImage();
        }
    }

    if (button) {
        button.addEventListener("click", function () {      
            count++;
            checkCounter();
            updateDisplay();
            // Example: Navigate to another page
            // window.location.href = "anotherpage.html";
        });
    }


});
