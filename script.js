const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// ✅ Collapse nav when a link is clicked (on mobile)
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  });
});

// Sticky header scroll effect
const hdr = document.querySelector('.site-header');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 4);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------- Tabs Script ----------------
const tabs = document.querySelectorAll("[data-tab]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    const target = document.querySelector(tab.dataset.tab);
    target.classList.add("active");
  });
});

// Contact button opens email client
const emailBtn = document.getElementById("emailButton");
if (emailBtn) {
  emailBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const email = "ayowoleatinuke@gmail.com";
    const subject = "Inquiry from your website";
    const body = "Hello Atinuke,";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
