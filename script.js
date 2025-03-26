var icon = document.getElementById("icon");

function applyDarkMode() {
    if (localStorage.getItem("dark-theme") === "enabled") {
        document.body.classList.add("dark-theme");
        if (icon) icon.src = "images/moon.png";
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
            localStorage.setItem("dark-theme", "enabled");
        } else {
            icon.src = "images/sun.png";
            localStorage.removeItem("dark-theme");
        }
    };
}

document.getElementById("scheduleGoogleCalendar").addEventListener("click", function() {

    let now = new Date();
    
    let startTime = now.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
    
    let endTime = new Date(now.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";

    let googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting&dates=${startTime}/${endTime}&ctz=UTC`;

    window.open(googleCalendarURL, "_blank");
});

document.getElementById("sendEmail").addEventListener("click", function() {
    let gmailURL = "https://mail.google.com/mail/?view=cm&fs=1&to=vincentsarcilla01@gmail.com";
    window.open(gmailURL, "_blank");
});

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("show");
    }
}

window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
}


