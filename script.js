var icon = document.getElementById("icon");

// Function to apply dark mode
function applyDarkMode() {
    if (localStorage.getItem("dark-theme") === "enabled") {
        document.body.classList.add("dark-theme");
        if (icon) icon.src = "images/moon.png"; // Update icon if available
    }
}

// Apply dark mode on page load
applyDarkMode();

// Toggle dark mode on click
if (icon) {
    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            icon.src = "images/moon.png";
            localStorage.setItem("dark-theme", "enabled"); // Save preference
        } else {
            icon.src = "images/sun.png";
            localStorage.removeItem("dark-theme"); // Remove preference
        }
    };
}

document.getElementById("scheduleGoogleCalendar").addEventListener("click", function() {
    // Get current date and time
    let now = new Date();
    
    // Format: YYYYMMDDTHHmmssZ (ISO 8601 format with UTC timezone)
    let startTime = now.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
    
    // Set end time (example: +1 hour from now)
    let endTime = new Date(now.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";

    // Google Calendar event URL with dynamic date & time
    let googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting&dates=${startTime}/${endTime}&ctz=UTC`;

    // Open in a new tab
    window.open(googleCalendarURL, "_blank");
});

document.getElementById("sendEmail").addEventListener("click", function() {
    // Gmail Compose URL with recipient email
    let gmailURL = "https://mail.google.com/mail/?view=cm&fs=1&to=vincentsarcilla01@gmail.com";

    // Open Gmail in a new tab
    window.open(gmailURL, "_blank");
});

// Function to Open Modal
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("show"); // Show modal
    }
}

// Function to Close Modal
function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("show"); // Hide modal
    }
}

// Close modal when clicking outside the modal-content
window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
}


