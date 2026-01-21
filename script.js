// ========= CONFIG =========
// Cambia tu WhatsApp aquí (sin +, sin espacios)
const WHATS = "527121051795";

// ========= MENU MOVIL =========
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn?.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.querySelectorAll(".menu a").forEach(a => {
  a.addEventListener("click", () => menu.classList.remove("show"));
});

// ========= SCROLL SUAVE =========
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  });
});

// ========= NAVBAR SCROLL EFFECT =========
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// ========= WHATSAPP =========
function openWhatsApp(text) {
  const msg = encodeURIComponent(text);
  window.open(`https://wa.me/${WHATS}?text=${msg}`, "_blank");
}

document.getElementById("btnWhatsTop")?.addEventListener("click", (e) => {
  e.preventDefault();
  openWhatsApp("Hola! Quiero cotizar una página web (Plan Básico). ¿Me puedes dar informes?");
});

document.getElementById("waFloat")?.addEventListener("click", (e) => {
  e.preventDefault();
  openWhatsApp("Hola! Vi tu página y quiero una landing (Plan Básico). ¿Me puedes cotizar?");
});

// ========= FORM A WHATSAPP =========
document.getElementById("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;

  const nombre = form.nombre.value.trim();
  const telefono = form.telefono.value.trim();
  const mensaje = form.mensaje.value.trim();

  const text =
`Hola! Soy ${nombre}.
Mi WhatsApp/Teléfono: ${telefono}.
Quiero: ${mensaje}
¿Me puedes cotizar por favor?`;

  openWhatsApp(text);
  form.reset();
});

// ========= YEAR =========
document.getElementById("year").textContent = new Date().getFullYear();

// ========= Mostrar WA en texto =========
const waText = document.getElementById("waText");
if (waText) waText.textContent = "+52 712 101 795";
