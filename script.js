const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "I too love u too Mythili muu 😘";
  gif.src = "puuung-love.gif";
});


noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  
  const maxTop = 300; 
  const constrainedTop = Math.min(randomY, maxTop);  

  
  noBtn.style.left = randomX + "px";
  noBtn.style.top = constrainedTop + "px";
});
