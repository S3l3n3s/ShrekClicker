document.addEventListener("DOMContentLoaded", function () {
  
    // Get DOM elements
    const button = document.getElementById('ShrekButton');
    const CounterDisplay = document.getElementById('CounterDisplay');
    let count = CounterDisplay ? parseInt(CounterDisplay.textContent.split(': ')[1]) : 0;

    // Function to update the counter display
    function updateDisplay() {
        CounterDisplay.textContent = "Counter: " + count;
    }

    if (button) {
        button.addEventListener("click", function () {      
            count++;
            updateDisplay();
            // Example: Navigate to another page
            // window.location.href = "anotherpage.html";
        });
    }
});
