function animateButton(btn) {
  const form = btn.closest("form");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  btn.innerHTML = "Envoi...";
  btn.classList.add("animate__animated", "animate__pulse");
  btn.disabled = true;
  btn.style.backgroundColor = "#de1414ff";

  setTimeout(() => {
    btn.innerHTML = "Envoyé !";
    btn.classList.remove("animate__pulse");
    btn.classList.add("animate__bounceIn");
    btn.style.backgroundColor = "#28a745";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
  }, 2000);

  setTimeout(() => {
    btn.innerHTML = "Envoyer";
    btn.classList.remove("animate__bounceIn");
    btn.style.backgroundColor = "";
    btn.disabled = false;
  }, 4000);
}

fetch("/portfolio-timothee/composent/footer/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
