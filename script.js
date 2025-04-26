const icon = document.getElementById("icon");

const applyDarkMode = () => {
    if (localStorage.getItem("dark-theme") === "enabled") {
        document.body.classList.add("dark-theme");
        if (icon) icon.src = "images/moon.png";
    }
};

// Apply dark mode on page load
applyDarkMode();

// Toggle dark mode on click
if (icon) {
    icon.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            icon.src = "images/moon.png";
            localStorage.setItem("dark-theme", "enabled");
        } else {
            icon.src = "images/sun.png";
            localStorage.removeItem("dark-theme");
        }
    });
}

const scheduleButton = document.getElementById("scheduleGoogleCalendar");
if (scheduleButton) {
    scheduleButton.addEventListener("click", () => {
        const now = new Date();
        const startTime = now.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
        const endTime = new Date(now.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
        const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting&dates=${startTime}/${endTime}&ctz=UTC`;

        window.open(googleCalendarURL, "_blank");
    });
}

const emailButton = document.getElementById("sendEmail");
if (emailButton) {
    emailButton.addEventListener("click", () => {
        const gmailURL = "https://mail.google.com/mail/?view=cm&fs=1&to=vincentsarcilla01@gmail.com";
        window.open(gmailURL, "_blank");
    });
}

const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("show");
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("show");
};

window.addEventListener("click", (event) => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
