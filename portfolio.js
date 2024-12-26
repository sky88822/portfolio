document.addEventListener("DOMContentLoaded", function() {
  // Array of "Welcome" translations
  const welcomeTranslations = ["Welcome", "Bienvenido", "Bienvenue", "Willkommen", "Bienvenue", "Benvenuto"];
  let currentTranslationIndex = 0;

  const welcomeTextElement = document.getElementById("welcome-text");

  // Function to apply typewriting effect
  function typewrite(element, text, speed = 100) {
      element.textContent = ''; // Clear the text initially
      let i = 0;

      function typing() {
          if (i < text.length) {
              element.textContent += text.charAt(i); // Add the next character
              i++;
              setTimeout(typing, speed); // Call typing again after a short delay
          }
      }

      typing(); // Start typing the text
  }

  // Function to change the "Welcome" text every 3 seconds
  function changeWelcomeText() {
      // Get the current translation
      const currentTranslation = welcomeTranslations[currentTranslationIndex];

      // Apply typewriting effect to the current "Welcome" translation
      typewrite(welcomeTextElement, currentTranslation, 150);

      // Update the index for the next translation
      currentTranslationIndex = (currentTranslationIndex + 1) % welcomeTranslations.length;
  }

  // Start the welcome text change every 3 seconds
  changeWelcomeText(); // Initial call to display the first text
  setInterval(changeWelcomeText, 3000); // Change the text every 3 seconds
});
