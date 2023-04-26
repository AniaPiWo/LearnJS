let questions = [  
    {   
        "question": "What is JavaScript?",    
        "answer": "JavaScript is a high-level, interpreted programming language that is used to create interactive web pages and web applications."  },  
    {    
        "question": "What are the data types in JavaScript?",    
        "answer": "The data types in JavaScript are string, number, boolean, null, undefined, object, and symbol."  },  
    {    
        "question": "What is a variable in JavaScript?",    
        "answer": "A variable is a container that holds a value, which can be a string, number, boolean, null, undefined, object, or symbol."  },
    {    
        "question": "What is the difference between let, var, and const in JavaScript?",    
        "answer": "let and const are block-scoped variables, whereas var is function-scoped. let and const cannot be redeclared in the same scope, but var can. const variables cannot be reassigned once they are defined, but let and var can be reassigned."  },  
    {    
        "question": "What is a function in JavaScript?",    
        "answer": "A function is a block of code that performs a specific task. Functions can take in parameters and return a value."  },
    {    
        "question": "What is the difference between == and === in JavaScript?",    
        "answer": "== checks for value equality, whereas === checks for both value and type equality."  },  
    {    
        "question": "What is an array in JavaScript?",    
        "answer": "An array is a special type of variable that can hold multiple values in a single variable. The values are stored in an ordered list and can be accessed by their index."  },
    {    
        "question": "What is a loop in JavaScript?",    
        "answer": "A loop is a way to execute a block of code multiple times. There are different types of loops in JavaScript, including for, while, and do-while loops."  },
    {    
        "question": "What is an object in JavaScript?",    
        "answer": "An object is a collection of key-value pairs. The keys are strings, and the values can be any data type, including strings, numbers, booleans, null, undefined, objects, and symbols."  },
    {    
        "question": "What is event bubbling in JavaScript?",    
        "answer": "Event bubbling is the process by which an event that is triggered on a nested element is propagated up the DOM tree, triggering any event listeners attached to parent elements."  }
]
const body = document.querySelector("#body")
const questionBox = document.querySelector("#question-box")

const typeWriter = (text, id, shouldDelete) => {
    const element = document.getElementById(id);
    //const cursor = element.querySelector('.cursor');
    return new Promise((resolve) => {
      let i = 0;
      const typing = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
          clearInterval(typing);
          if (shouldDelete) {
            setTimeout(() => {
              element.textContent = "";
              //cursor.classList.add('hide');
              resolve();
            }, 1000);
          } else {
            //cursor.classList.add('hide');
            resolve();
          }
        }
      }, 50);
    });
};
  
const startingAnimation = () => {
    return typeWriter("Loading...", "line", true)
      .then(() => typeWriter("Success!", "line", true))
      .then(() => typeWriter("So, you are JavaScript junior dev wannabe? :)", "line", true))
      .then(() => typeWriter("Let's practice some theory!", "line", true))
      .then(() => typeWriter("I have prepared some questions for you.", "line", true))
      .then(() => typeWriter("Press enter for question...", "line", false))
};
  
let animationFinished = false;
startingAnimation().then(() => {
    animationFinished = true;
});
  
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
  })


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


  

  




