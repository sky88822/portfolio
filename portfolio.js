const welcomeMessages = [
  "Welcome",
  "Bienvenido",
  "Bienvenue",
  "Willkommen",
  "Benvenuto"
];

const welcomeTextElement = document.getElementById("welcome-text");

let isTyping = false;
let messageIndex = 0;
const letterDelay = 100;
const messageDelay = 1000;

function typeWelcomeMessage(message) {
  if (isTyping) return;

  let currentIndex = 0;
  welcomeTextElement.textContent = "";
  isTyping = true;

  // Function to type the next letter
  function typeNextLetter() {
    if (currentIndex < message.length) {
      welcomeTextElement.textContent += message[currentIndex];
      currentIndex++;
      setTimeout(typeNextLetter, letterDelay);
    } else {
      setTimeout(() => {
        isTyping = false;
        iterateMessages();
      }, messageDelay);
    }
  }

  typeNextLetter();
}

function iterateMessages() {
  messageIndex = (messageIndex + 1) % welcomeMessages.length;
  typeWelcomeMessage(welcomeMessages[messageIndex]);
}

typeWelcomeMessage(welcomeMessages[messageIndex]);
