const mensajes = [
  "Te amo con todo mi corazón 💖",
];

function cambiarMensaje() {
  const random = Math.floor(Math.random() * mensajes.length);
  document.getElementById("textoCarta").innerText = mensajes[random];
}

/* LLUVIA DE CORAZONES */
const canvas = document.getElementById("lluvia");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "pink";

  hearts.forEach(h => {
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size / 4, 0, Math.PI * 2);
    ctx.fill();

    h.y += h.speed;

    if (h.y > canvas.height) {
      h.y = 0;
      h.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawHearts);
}

drawHearts();
document.addEventListener("click", function(e) {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "20px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "flotar 1s ease-out forwards";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});
const elementos = document.querySelectorAll(".galeria img, .carta, .video");

window.addEventListener("scroll", () => {
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});
const visor = document.getElementById("visor");
const imgGrande = document.getElementById("imgGrande");

document.querySelectorAll(".galeria img").forEach(img => {
  img.addEventListener("click", () => {
    visor.style.display = "flex";
    imgGrande.src = img.src;
  });
});

visor.addEventListener("click", () => {
  visor.style.display = "none";
});
const musica = document.getElementById("musica");

function toggleMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
window.addEventListener("load", () => {
  const musica = document.getElementById("musica");
  musica.muted = false;
  musica.play().catch(() => {});
});