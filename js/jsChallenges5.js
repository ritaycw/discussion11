let thumbnails = document.querySelector(".thumbnail");
let display = document.querySelector("#display")


thumbnails.addEventListener("mouseover", function(event) {
    if (event.target.tagName === "IMG") {
        display.innerHTML = `
                <img src="${event.target.src}" alt="${event.target.alt}">
                <p>${event.target.alt}</p>
            `;
    }
});

thumbnails.addEventListener("mouseout", function () {
    display.innerHTML = "Hover over an image below to display the image and the alt text.";
});
