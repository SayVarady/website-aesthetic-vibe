function createPetal() {
    //Create a new element with "petal" class
    const petal = document.createElement("div");
    petal.classList.add("petal");
    document.body.appendChild(petal);

    // To display to falling petal in random position
    petal.style.left = Math.random() * 100 + "vw";

    const duration = Math.random() * 5 + 5;
    petal.style.animationDuration = duration + "s";

    const size = Math.random() * 3 + 6;
    petal.style.width = size + "px";
    petal.style.height = size + "px";

    setTimeout(() => {
        petal.remove();
    },  duration * 1000);
}

setInterval(createPetal, 400);