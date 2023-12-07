// imports
import {
  typeEffect,
  formspreeHandling,
  formLabelAnimation,
  backToTop,
  formBehaviour
} from "./scripts.js";

// Rotating text hero animation
const rotatingText = document.querySelector(".rotating-text p");
rotatingText.innerHTML = rotatingText.innerText
  .split("")
  .map(
    (character, index) =>
      `<span style="transform:rotate(${
        index * 9.5
      }deg)">${character.toUpperCase()}</span>`
  )
  .join("");
// Variables
const formLabels = document.querySelectorAll(".formLabel");
const formInputs = document.querySelectorAll(".formInput");
const backToTopDiv = document.querySelector(".backToTop");

// Execution
setTimeout(() => typeEffect(), 200);
formspreeHandling();
formLabelAnimation(formInputs, formLabels);
formBehaviour(formInputs);
backToTop(backToTopDiv);
