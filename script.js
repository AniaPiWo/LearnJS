body.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (!animationFinished) {
        event.preventDefault();
        return;
      }
  
      const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)].question;
      const newParagraph = document.createElement("p");
      newParagraph.innerText = randomQuestion;
      document.querySelector("#question-box").appendChild(newParagraph);
    }
});

body.addEventListener("touchstart", function(event) {
     if (!animationFinished) {
        event.preventDefault();
        return;
      }
  
      const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)].question;
      const newParagraph = document.createElement("p");
      newParagraph.innerText = randomQuestion;
      document.querySelector("#question-box").appendChild(newParagraph);
});

  

  




