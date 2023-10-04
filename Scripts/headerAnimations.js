const rotatingText = document.querySelector('.rotating-text p');
rotatingText.textContent = rotatingText.textContent.split("")
    .map((character,index)=>{
        console.log(character);
    }).join("")
