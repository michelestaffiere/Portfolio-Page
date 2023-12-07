
// Variables.
const header = document.querySelector("header");
header.classList.add("firstView");
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

/**
 * TypeEffect
 * Displays a type writer style animation for desktop screens only.
 * no params, built to target the headers h2 span and nothing else, function will not work if the following required 
 * variables are removed.
 * @requires span 
 * @requires words 
 * @requires wordIndex 
 * @requires charIndex 
 * @requires isDeleting 
 *  @returns {void} 
 */

export const typeEffect = () => {
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

/**
 * Form Spree Handling
 *  prevents default formspree behaviour of redirecting away from page.
 * code provided by formspree.
 *  @returns {void} 
 */
export const formspreeHandling = () =>{
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
            status.innerHTML = "Thank you for reaching out!";
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! please try again later."
              }
            })
          }
        }).catch(error => {
          status.innerHTML = "Oops! please try again later."
        });
      }
      form.addEventListener("submit", handleSubmit)
  };

/** 
 *  formLabelAnimation
 * Adds an animation to labels whose corresponding inputs have been focused.
 * @param {NodeList} inputs - Nodelist of inputs to be targeted.
 * @param {NodeList} labels - Corresponding NodeList of labels related to inputs
 * @returns {void}
*/
export const formLabelAnimation = (inputs,labels) =>{
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
      })
    })
  })
};

export const formBehaviour = (inputs) => {
  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const label = input.previousElementSibling;
      if (input.value !== "") {
        label.classList.add("filled");
        console.log('text inside');
      } else {
        label.classList.remove("filled");
        console.log('no text inside');
      }
    });
  });
};


/**
 * BackToTop
 * Displays a button at a certain Y index  that brings the user back to the top of the page.
 * @param {HTMLElement} element - Element to attach event listener to, and change styles of.
 * @returns {void} 
 */
  export const backToTop = (element) =>{
    element.addEventListener("click", ()=>{
      window.scrollTo(0,0);
    });
    window.addEventListener("scroll",()=>{
      const scrollY = window.scrollY;
      if(scrollY > 300){
        element.style.transform = "translateX(0)";
        element.style.opacity = "1";
      } else{
          element.style.transform = "translateX(500%)";
          element.style.opacity = "0";
      }
    });
  };