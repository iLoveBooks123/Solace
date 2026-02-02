const btn = document.getElementById("affirmation-btn");
const popup = document.getElementById("affirmation-popup");
const affirmationText = document.getElementById("affirmation-text");

btn.addEventListener("click", () => {
  popup.classList.toggle("hidden");
});

// Your existing affirmations array
const affirmations = [
  "You are allowed to take things one moment at a time.",
  "You are stronger than you think.",
  "Every step forward counts, no matter how small.",
  "Your feelings are valid and important.",
  "Take a deep breath — you’ve got this."
];

function newAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  affirmationText.textContent = random;
}
