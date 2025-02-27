document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real form submission

    let btn = document.querySelector(".send-btn");
    btn.classList.add("sent");

    setTimeout(() => {
        btn.classList.remove("sent");
    }, 2000); // Reset after 2 seconds
});
