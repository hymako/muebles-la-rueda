const banner = document.getElementById("cc-banner");
const accept = document.getElementById("cc-accept");
const reject = document.getElementById("cc-reject");

const KEY = "mlr-consent";
const saved = localStorage.getItem(KEY);

if (!saved) banner?.classList.remove("hidden");

function updateConsent(granted) {
  // Actualiza Consent Mode
  window.gtag && gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  localStorage.setItem(KEY, granted ? "granted" : "denied");
  banner?.classList.add("hidden");
}

accept?.addEventListener("click", () => updateConsent(true));
reject?.addEventListener("click", () => updateConsent(false));

// Si ya había elección previa, aplica al cargar
if (saved) updateConsent(saved === "granted");
