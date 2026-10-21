const THEME_KEY = "fbm-theme";

// The initial theme is set by the inline script in each page's <head>,
// before first paint, so that dark mode does not flash light on load.
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDark = document.documentElement.dataset.theme === "dark";
            const nextTheme = isDark ? "light" : "dark";
            applyTheme(nextTheme);
            try {
                localStorage.setItem(THEME_KEY, nextTheme);
            } catch (error) {
                // Storage can be unavailable (e.g. private browsing); the toggle still works.
            }
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

    document.querySelectorAll("[data-email]").forEach((emailLink) => {
        emailLink.addEventListener("click", (event) => {
            event.preventDefault();
            const address = [
                102, 46, 98, 101, 114, 116, 105, 57, 51,
                64,
                103, 109, 97, 105, 108, 46, 99, 111, 109
            ].map((code) => String.fromCharCode(code)).join("");
            window.location.href = `mailto:${address}`;
        });
    });

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
