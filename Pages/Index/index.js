 // Parpadeo de ojos
const leftEye = document.querySelector(".eyes ellipse:nth-child(1)");
const rightEye = document.querySelector(".eyes ellipse:nth-child(2)");

function blink() {
  anime({
    targets: [leftEye, rightEye],
    scaleY: [
      { value: 0.1, duration: 120 },
      { value: 1, duration: 120, delay: 50 }
    ],
    transformOrigin: "center center",
    easing: "easeInOutSine",
    complete: () => setTimeout(blink, Math.random() * 4000 + 2000)
  });
}
blink();

// Movimiento de cabeza y pelo con mouse
const head = document.querySelector(".head");
const hairFront = document.querySelector(".front-hair");
const hairBack = document.querySelector(".back-hair");

document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  anime({
    targets: head,
    translateX: x,
    translateY: y,
    duration: 300,
    easing: "easeOutQuad"
  });

  anime({
    targets: hairFront,
    translateX: x * 1.5,
    translateY: y * 1.5,
    duration: 300,
    easing: "easeOutQuad"
  });

  anime({
    targets: hairBack,
    translateX: x * 0.8,
    translateY: y * 0.8,
    duration: 300,
    easing: "easeOutQuad"
  });
});


document.querySelectorAll('.cool-link').forEach(link => {
  link.addEventListener('mousemove', e => {
    const rect = e.target.getBoundingClientRect();
    link.style.setProperty('--x', `${e.clientX - rect.left}px`);
    link.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});
