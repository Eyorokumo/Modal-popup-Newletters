// ===============

const openBtn = document.querySelector("button");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");

// =====OPEN MODAL
openBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "grid";
}

// =====CLOSE MODAL
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  // modal.style.display = "none";
  modal.classList.add("close-modal-animation");
  setTimeout(() => {
    modal.style.display = "none";
    window.location.reload();
  }, 500);
}

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});

// ==thank you message for subscription
form.addEventListener("submit", submitForm);

function submitForm() {
  const card = document.querySelector(".card");
  card.innerHTML = "<h1>Thanks for your subscription!</h1>";
  setTimeout(() => {
    closeModal();
  }, 3000);
}
