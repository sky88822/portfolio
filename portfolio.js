document.addEventListener("DOMContentLoaded", function() {
  const welcomeTranslations = ["Welcome", "Bienvenido", "Bienvenue", "Willkommen", "Bienvenue", "Benvenuto"];
  let currentTranslationIndex = 0;

  const welcomeTextElement = document.getElementById("welcome-text");

  function typewrite(element, text, speed = 100) {
      element.textContent = '';
      let i = 0;

      function typing() {
          if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
              setTimeout(typing, speed);
          }
      }

      typing();
  }


  function changeWelcomeText() {

      const currentTranslation = welcomeTranslations[currentTranslationIndex];


      typewrite(welcomeTextElement, currentTranslation, 150);


      currentTranslationIndex = (currentTranslationIndex + 1) % welcomeTranslations.length;
  }


  changeWelcomeText();
  setInterval(changeWelcomeText, 3000);
});

// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// const marqueeContent = document.querySelector("ul.marquee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for(let i=0; i<marqueeElementsDisplayed; i++) {
//   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// }


$('#manualCarousel').carousel({
  interval: 3000 
});
