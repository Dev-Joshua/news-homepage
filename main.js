console.log("Cargado");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM cargado y procesado");

  const menuBtn = document.querySelector("#menuHam");
  const navMenu = document.querySelector(".nav-menu ul");

  menuBtn.addEventListener("click", (event) => {
    //interruptor
    menuBtn.classList.toggle("inactive");
    navMenu.classList.toggle("visible");
  });
});
