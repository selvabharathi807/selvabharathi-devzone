// Select all elements with the class "theme"
const themes = document.getElementsByClassName("theme");

// Add click event listeners to each theme button
Array.from(themes).forEach((theme) => {
  theme.addEventListener("click", (e) => {
    // Set data-theme attribute on <body>
    document.querySelector("body")
      .setAttribute("data-theme", e.target.dataset.theme);
    
    // Store the selected theme in localStorage
    localStorage.setItem("theme", e.target.dataset.theme);
  });
});

// On page load, apply saved theme from localStorage
function getThemeOnLoad() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.querySelector("body").setAttribute("data-theme", theme);
  }
}

// Initialize theme on page load
getThemeOnLoad();

