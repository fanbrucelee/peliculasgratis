// Loader functionality
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500); // Adjust the timeout as needed
});

// Slider functionality
const sliders = document.querySelectorAll(".slider-container");

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        slider.scrollLeft = scrollLeft - walk;
    });
});

// Interactive images functionality
const sliderItems = document.querySelectorAll(".slider-item");

sliderItems.forEach(item => {
    item.addEventListener("click", () => {
        const url = item.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank"); // Opens the link in a new tab
        }
    });
});
