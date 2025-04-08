// Toggle menu
function toggleMenu() {
    const menuBox = document.getElementById("menuBox");
    menuBox.style.display = menuBox.style.display === "block" ? "none" : "block";
  }
  
  // Sign out
  function signOut() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  }
  
  // Login and protect dashboard
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        if (email && password) {
          localStorage.setItem("loggedIn", "true");
          window.location.href = "dashboard.html";
        } else {
          alert("Please enter email and password");
        }
      });
    }
  
    // Protect dashboard access
    if (document.body.classList.contains("dashboard") && !localStorage.getItem("loggedIn")) {
      window.location.href = "index.html";
    }
  });
  
  // Power button toggle
  function togglePower() {
    const button = document.getElementById("powerBtn");
    button.classList.toggle("active");
  
    const status = document.querySelector(".status-text");
    if (button.classList.contains("active")) {
      status.textContent = "Optimizing...";
    } else {
      status.textContent = "Not started";
    }
  }
  