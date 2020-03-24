const navBtn = document.getElementById("toggle");
const modalBtn = document.getElementById("open");
const modalEl = document.getElementById("modal");
const modalBtnClose = document.getElementById("close");

// Toggle nav
navBtn.addEventListener("click", () => document.body.classList.toggle("show-nav"));

// Show modal
modalBtn.addEventListener("click", () => modalEl.classList.add("show-modal"));

// Hide modal
modalBtnClose.addEventListener("click", () => modalEl.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", e => (e.target == modal ? modal.classList.remove("show-modal") : false));
