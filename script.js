const AdviceComponent = document.getElementById("clash-royale-advice-component");
const AdviceComponentText = document.getElementById("clash-royale-advice-component-message");

const defaultAdvice = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

async function getRandomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip.advice;
}

function setNewAdviceText(text = "") {
  AdviceComponentText.textContent = text;
}

async function showNewAdvice() {
  try {
    const advice = await getRandomAdvice();
    setNewAdviceText(advice);
  } catch {
    setNewAdviceText(defaultAdvice);
  }
}

AdviceComponent.addEventListener("click", showNewAdvice);
