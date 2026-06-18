const THEME_KEY = "fbm-theme";

function applyTheme(theme) {
    document.body.classList.toggle("dark-theme", theme === "dark");
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    applyTheme(savedTheme);

    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDark = document.body.classList.contains("dark-theme");
            const nextTheme = isDark ? "light" : "dark";
            applyTheme(nextTheme);
            localStorage.setItem(THEME_KEY, nextTheme);
        });
    }

    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        const updateBackToTop = () => {
            if (window.scrollY > 250) {
                backToTop.classList.add("show-back-to-top");
            } else {
                backToTop.classList.remove("show-back-to-top");
            }
        };

        window.addEventListener("scroll", updateBackToTop, { passive: true });
        updateBackToTop();
    }

    const emailContact = document.querySelector("#email-contact");
    if (emailContact) {
        emailContact.addEventListener("click", (event) => {
            event.preventDefault();
            const address = [
                102, 46, 98, 101, 114, 116, 105, 57, 51,
                64,
                103, 109, 97, 105, 108, 46, 99, 111, 109
            ].map((code) => String.fromCharCode(code)).join("");
            window.location.href = `mailto:${address}`;
        });
    }

    document.querySelectorAll(".toggle-abstract").forEach((button) => {
        button.addEventListener("click", () => {
            const abstract = button.nextElementSibling;
            if (!abstract || !abstract.classList.contains("abstract-content")) {
                return;
            }

            const isOpen = abstract.classList.toggle("open");
            button.textContent = isOpen ? "Hide Abstract" : "Show Abstract";
        });
    });
});
