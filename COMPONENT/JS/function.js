//Copier un text
const copie = document.querySelectorAll(".copie");

copie.forEach((copie) => {
    copie.addEventListener("click", () => {
      navigator.clipboard.writeText(copie.innerText);
      box2.classList.add("blur");
      popuphome.classList.add("active");
    });
  });