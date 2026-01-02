// Select toggle button and icon
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn?.querySelector("i");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  icon?.classList.replace("fa-moon", "fa-sun");
} else {
  document.body.classList.remove("dark-theme");
  icon?.classList.replace("fa-sun", "fa-moon");
}

// Toggle dark mode
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon?.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon?.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

const mobileToggle = document.getElementById("mobile-toggle");
const sidebar = document.querySelector(".sidebar");

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("active");
  document.body.classList.toggle("sidebar-open");
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  if (
    document.body.classList.contains("sidebar-open") &&
    !sidebar.contains(e.target) &&
    !mobileToggle.contains(e.target)
  ) {
    sidebar.classList.remove("active");
    document.body.classList.remove("sidebar-open");
  }
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