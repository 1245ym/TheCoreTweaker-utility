// Copy PowerShell command
function copyCommand() {
  const command = `irm https://raw.githubusercontent.com/1245ym/TheCoreTweaker/main/TheCoreTweaker.ps1 | iex`;
  navigator.clipboard.writeText(command)
    .then(() => alert("Command copied to clipboard!"))
    .catch(() => alert("Could not copy. Please copy manually."));
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

console.log("TheCoreTweaker modern site loaded.");
