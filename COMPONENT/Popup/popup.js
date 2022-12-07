const box2 = document.querySelector("section");
const popuphome = document.querySelector(".popuphome");
const copyvalid = document.querySelector(".copyvalid");

copyvalid.addEventListener("click", () => {
    box2.classList.remove("blur");
    popuphome.classList.remove("active");
  });