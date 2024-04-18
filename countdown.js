// Function for countdown timer
function setupCountdown() {
    // Set the date for May 26th, 2024 at 7:00 AM
    const countdownDate = new Date('May 26, 2024 07:00:00').getTime();

    // Update the countdown every second
    const countdown = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = `
            <div>Countdown to May 26th, 2024 7:00 AM:</div>
            <div>${days}d ${hours}h ${minutes}m ${seconds}s</div>
        `;

        // If the countdown is over, stop the countdown
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Call the setupCountdown function once the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    setupCountdown();
});
