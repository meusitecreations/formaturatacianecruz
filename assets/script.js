// Animações discretas de entrada ao rolar a página.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

// Confirmações enviadas ao endereço configurado via FormSubmit (AJAX).
const form = document.getElementById("rsvp-form");
if (form) {
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const button = document.getElementById("submit-button");
    const feedback = document.getElementById("form-feedback");
    if (form.querySelector('[name="_honey"]').value) return;
    button.disabled = true;
    button.textContent = "Enviando...";
    feedback.textContent = "";
    try {
      const response = await fetch("https://formsubmit.co/ajax/tacianecruzbm@gmail.com", {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });
      const result = await response.json();
      if (!response.ok || result.success === "false") throw new Error("Não foi possível enviar.");
      form.reset();
      feedback.textContent = "Muito obrigada! Sua resposta foi recebida com carinho. ♡";
    } catch (error) {
      feedback.textContent = "Não foi possível enviar agora. Por favor, tente novamente em instantes.";
    } finally {
      button.disabled = false;
      button.textContent = "Confirmar presença";
    }
  });
}

// Copiar a chave PIX na página presente.html.
const copyButton = document.getElementById("copy-pix");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const key = document.getElementById("pix-key").textContent.trim();
    const feedback = document.getElementById("copy-feedback");
    try {
      await navigator.clipboard.writeText(key);
      feedback.textContent = "Chave PIX copiada!";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById("pix-key"));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      feedback.textContent = "Selecione e copie a chave PIX.";
    }
  });
}
