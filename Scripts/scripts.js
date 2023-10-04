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

/**
 *Typing animation displayed at top of the page. 
 *  No Params, everything defined outside of function.
 */
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
const header = document.querySelector("header");
header.classList.add("firstView");

/**
 * Form Spree Handling
 *  preventing default formspree behaviour or redirecting away from page..
 */
const formspreeHandling = () =>{
  const form = document.getElementById("my-form");
      
      async function handleSubmit(event) {
        event.preventDefault();
        const status = document.getElementById("formStatus");
        const data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = "//Thank you for reaching out!";
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "//Oops! please try again later."
              }
            })
          }
        }).catch(error => {
          status.innerHTML = "//Oops! please try again later."
        });
      }
      form.addEventListener("submit", handleSubmit)
  };

const formLabels = document.querySelectorAll(".formLabel");
const formInputs = document.querySelectorAll(".formInput");
console.log(formInputs,formLabels);

/** 
 *  formLabelAnimation
 * Adds an animation to labels whose corresponding inputs have been focused.
 * @param {Node|NodeList} inputs - Nodelist of inputs to be targeted.
 * @param {Node|NodeList} labels - Corresponding NodeList of labels related to inputs
*/
const formLabelAnimation = (inputs,labels) =>{
  inputs.forEach((input,index)=>{
    const label = labels[index];
    input.addEventListener("focus",()=>{
      label.classList.add("focused");
    }
    );

    inputs.forEach((input,index)=>{
      const label = labels[index];
      input.addEventListener("blur",()=>{
        label.classList.remove("focused");
        input.value = "";
      })
    })
  })
};

// Note: scrapped  this idea (2023-09-28), keeping js incase mind changes.

// Toronto Skyline SVG animation on view.
// const storyBlock = document.querySelector(".story-block");
// const torontoSvgContainer = document.querySelector(".skylineContainer")
// const torontoSvgPath = document.querySelector("svg.torontoSkyline path")


// const observeStoryBlock = new IntersectionObserver(entries =>{
//   entries.forEach(entry =>{
//     if(entry.isIntersecting){
//       torontoSvgContainer.classList.add("visible");
//       torontoSvgPath.classList.add('torontoSkyline-1');
//     }
//   });
// });

//observeStoryBlock.observe(storyBlock);



// page load
setTimeout(()=>typeEffect(),200);
formspreeHandling();
formLabelAnimation(formInputs,formLabels);




