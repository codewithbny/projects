const canvas = document.getElementById("sharkCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let shark = new Image();
shark.src = "https://i.imgur.com/5MnY9sY.png"; // Replace with a shark image URL
let sharkX = canvas.width / 2;
let sharkY = canvas.height / 2;
let mouseX = sharkX;
let mouseY = sharkY;

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Move shark towards mouse position
canvas.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Draw and move the shark
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Smooth shark movement
    sharkX += (mouseX - sharkX) * 0.02;
    sharkY += (mouseY - sharkY) * 0.02;

    ctx.drawImage(shark, sharkX - 50, sharkY - 50, 100, 100);

    requestAnimationFrame(animate);
}

shark.onload = () => {
    animate();
};
