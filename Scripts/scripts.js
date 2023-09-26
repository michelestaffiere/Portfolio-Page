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

// Brief typing animation
const span = document.querySelector(".typing");
const words = [
  "Front-End Developer.",
  "Freelancer.",
  "Tech-Enthusiast.",
  "Cat Dad.",
];
let wordIndex = 0;
let charIndex = 8;
let isDeleting = false;
const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  // console.log(currentWord,currentChar)
  span.textContent = currentChar;
  if (!isDeleting & (charIndex < currentWord.length)) {
    charIndex++;
    setTimeout(typeEffect, 80);
  } else if (isDeleting & (charIndex > 0)) {
    charIndex--;
    setTimeout(typeEffect, 80);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1000);
  }
};



// Boot up animations
const header = document.querySelector("header");
header.classList.add("firstView");
setTimeout(()=>typeEffect(),200);




