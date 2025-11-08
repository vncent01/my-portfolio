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
