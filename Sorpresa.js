// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", async () => {
  try {
    soplido.currentTime = 0;
    await soplido.play();

    llama.style.animation = "apagar 0.5s forwards";

    setTimeout(async () => {
      cancion.currentTime = 0;
      await cancion.play();
      overlay.classList.add("hidden");
    }, 1000);

  } catch (error) {
    console.error("Error al reproducir audio:", error);
  }
});

