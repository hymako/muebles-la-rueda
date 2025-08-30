import "./styles.css";

// Año footer
document.getElementById("year").textContent = new Date().getFullYear();

// Nav móvil
const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
btn?.addEventListener("click", () => nav.classList.toggle("nav--open"));
if (nav) {
  nav.classList.remove("nav--open");
}

// Formspree
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.textContent = "Enviando…";
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (res.ok) { form.reset(); msg.textContent = "¡Gracias! Te contactaremos pronto."; }
    else { msg.textContent = "No se pudo enviar. Prueba más tarde."; }
  } catch { msg.textContent = "Error de red. Inténtalo de nuevo."; }
});
