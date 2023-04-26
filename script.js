let questions = [  
    {   
        "question": "What is object destructuring in JavaScript?",    
        "answer": "Object destructuring is a feature in JavaScript that allows you to extract properties from an object and store them in variables with the same name as the properties. It is a shorthand syntax that makes it easier to work with objects, especially when passing objects as function arguments or when working with APIs that return complex data structures."  },  
    {   
        "question": "What is the difference between forEach() and map()",    
        "answer": "The forEach() method and the map() method are both array methods in JavaScript, used for iterating over an array. However, the main difference between them is that forEach() doesn't return a new array, whereas map() does.The forEach() method calls a provided function once for each element in an array, but it does not modify the original array. On the other hand, the map() method also calls a provided function for each element in an array, but it returns a new array with the results of calling the function on each element."  },  
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
        "answer": "Event bubbling is the process by which an event that is triggered on a nested element is propagated up the DOM tree, triggering any event listeners attached to parent elements."  },
    {    
        "question": "What is a callback function in JavaScript?",    
        "answer": "A callback function is a function that is passed as an argument to another function and is executed later in the program's execution."  },
    {    
        "question": "What is a closure in JavaScript?",    
        "answer": "A closure is a function that has access to variables in its outer (enclosing) function's scope chain, even after the outer function has returned."  },
    {    
        "question": "What is a promise in JavaScript?",    
        "answer": "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value."  },
    {    
        "question": "What is asynchronous programming in JavaScript?",    
        "answer": "Asynchronous programming is a programming model that allows code to run independently and not block the execution of other code."  },
    {    
        "question": "What is the difference between synchronous and asynchronous programming?",    
        "answer": "In synchronous programming, the program waits for each operation to complete before moving on to the next one. In asynchronous programming, the program can continue to execute while waiting for operations to complete."  },
    {    
        "question": "What is the event loop in JavaScript?",    
        "answer": "The event loop is a mechanism in JavaScript that allows asynchronous operations to be executed in a non-blocking way by putting them in a queue and executing them when the main thread is idle."  },
    {    
        "question": "What is hoisting in JavaScript?",    
        "answer": "Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their respective scopes."  },
    {    
        "question": "What is the difference between null and undefined in JavaScript?",    
        "answer": "Undefined means a variable has been declared but has not yet been assigned a value. Null is a value that represents no value or an empty object."  },
    {    
        "question": "What is the purpose of the 'use strict' directive in JavaScript?",    
        "answer": "The 'use strict' directive is used to enable strict mode in JavaScript, which enforces stricter parsing and error handling rules."  },
    {    
        "question": "What is the 'this' keyword in JavaScript?",    
        "answer": "The 'this' keyword refers to the object that the function is a method of, or to the global object if the function is not a method of any object."  },
    {    
        "question": "What is the difference between a parameter and an argument in JavaScript?",    
        "answer": "A parameter is a variable that is declared in the function definition. An argument is the value that is passed to the function when it is called."  },
    {    
        "question": "What is a constructor function in JavaScript?",    
        "answer": "A constructor function is a special function that is used to create and initialize objects created with the 'new' keyword."  },
    {    
        "question": "What is a prototype in JavaScript?",    
        "answer": "A prototype is an object that is associated with every object created using a constructor function, and it contains properties and methods that are shared by all instances of the object."  },
    {    
        "question": "What is the difference between the 'var' and 'let' keywords in JavaScript?",    
        "answer": "The 'var' keyword declares a variable globally or locally to an entire function regardless of block scope. The 'let' keyword declares a block-scoped variable that can only be accessed within the block in which it was declared."  },
    {    
        "question": "What is a template literal in JavaScript?",    
        "answer": "A template literal is a string literal that allows embedded expressions, which are evaluated and interpolated into the final string."  },
    {    
        "question": "What is the difference between a for loop and a forEach loop in JavaScript?",    
        "answer": "A for loop is a traditional loop that allows you to loop over an array or object and execute a block of code for each iteration. A forEach loop is a built-in method of arrays that loops over each element and executes a callback function for each iteration."  },
    {    
        "question": "What is the difference between a function declaration and a function expression in JavaScript?",    
        "answer": "A function declaration is a statement that declares a named function, which can be called later in the code. A function expression creates an anonymous function and assigns it to a variable, which can be called later in the code."  },
    {    
        "question": "What is the difference between an object and an array in JavaScript?",    
        "answer": "In JavaScript, an array is a collection of elements that are ordered and accessed by their index, while an object is a collection of key-value pairs where the keys are unique strings used to access the corresponding values."  },
    {    
        "question": "What is the difference between let and const in JavaScript?",    
        "answer": "Let can be reassigned, but const cannot be reassigned once it is defined. Let has block scope, whereas const has block scope and cannot be redeclared."  },
    {    
        "question": "What are the JS paradigms?",    
        "answer": "JavaScript programming paradigms are procedural programming, object-oriented programming, functional programming, and reactive programming."  },
    {    
        "question": "What is a pure function in JS?",    
        "answer": "A pure function in JavaScript is a function that always returns the same value for the same input arguments and does not cause any side effects (e.g. modification of global variables, files, databases, etc.). This makes it easier to predict the behavior of such a function and test it."  },
    {    
        "question": "What is the difference between a framework and a library in JS?",    
        "answer": "In JavaScript, the difference between a framework and a library is that a framework is a complete development framework that imposes its principles, approach and architecture, while a library is a collection of ready-made functions that allow the developer to extend the functionality of the application. In short, the framework dictates the way you work, and the library is a tool that you can use in your code."  },
    {    
        "question": "What is BEM?",    
        "answer": "BEM (Block Element Modifier) ​​is the name of the convention used in HTML and CSS to name classes in order to facilitate the work with CSS code and its subsequent maintenance. This convention is to use class names as blocks, elements, and modifiers, which allows for more readable and understandable code and facilitates team collaboration."  },
    {    
        "question": "What is a virtual DOM?",    
        "answer": "The Virtual DOM (Virtual Document Object Model) is a technique where when the state of an application changes in JavaScript, the entire DOM tree is not refreshed, but only the elements that have changed are refreshed. This is more efficient and faster than traditional DOM operations because it minimizes the number of updates and renderings of page elements. Libraries such as React, Vue.js and Angular use the virtual DOM to increase the performance of web applications."  },
    {    
        "question": "How does useState work?",    
        "answer": "useState is a React hook that allows you to add state to functional components. This hook works by returning a pair of values: the current state and a function to update this state. After using the useState hook, the so-called 'hook state', which is stored inside the component and is bound to it for its lifetime. When we use functions to update the state, React compares the previous state with the new state and calls the component re-render to reflect the changes. In this way, useState allows you to dynamically change the appearance and behavior of components based on their state."  },
    {    
        "question": "How does useEffect work?",    
        "answer": "useEffect is a React hook that allows you to execute side effects in function components. This hook is responsible for the life cycle of components in classes.useEffect consists of two arguments: an effect function and a dependency. An effect function is a function that will be executed every time the component is rendered. The purpose of the effect function is, for example, to update the state or perform network requests.The second argument is a dependency that determines whether the effect function should be executed. You can pass the dependency as a dependency array that contains the values ​​that need to change for the effect function to re-execute. If the dependency array is empty, the effect function will only be executed once after component assembly."  },
    {    
        "question": "How useRef works?",    
        "answer": "useRef is a React hook that returns an object with a current property that can be used to hold a variable that will survive multiple re-renders of a component. The main use of useRef is to access DOM nodes or any other element that behaves like variables but doesn't cause the component to re-render when it changes. This can help avoid excessive component rendering and improve performance."  },
    {    
        "question": "What is the difference between object-oriented and functional programming?",    
        "answer": "useRef is a React hook that returns an object with a current property that can be used to hold a variable that will survive multiple re-renders of a component. The main use of useRef is to access DOM nodes or any other element that behaves like variables but doesn't cause the component to re-render when it changes. This can help avoid excessive component rendering and improve performance."  },
    {    
        "question": "What is the difference between imperativeness and declarativeness?",    
        "answer": "Imperative programming focuses on how to perform a task by providing step-by-step instructions, while declarative programming focuses on what outcome should be achieved without specifying how to achieve it."  },
    {    
        "question": "What is shadowing in js",    
        "answer": "Shadowing in JavaScript refers to when a variable defined in a nested scope has the same name as a variable defined in an outer scope. In this case, the internal variable 'shadows' the external variable, which can lead to unexpected results and errors."  },
]

const body = document.querySelector("#body")
const questionBox = document.querySelector("#question-box")
let animationFinished = false;

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
  
const startingAnimation = async () => {
    //await typeWriter("Loading...", "line", true);
    await typeWriter("Success!", "line", true);
    await typeWriter("So, you are JavaScript junior dev wannabe? :)", "line", true);
    await typeWriter("Let's practice some theory!", "line", true);
    await typeWriter("I have prepared some questions for you...", "line", true);
    return typeWriter("Press enter for new question...", "line", false);
};




function displayButton() {
    if (animationFinished) {
      const enterBtn = document.createElement('button');
      enterBtn.textContent = 'Enter';
      document.body.appendChild(enterBtn);

      enterBtn.addEventListener("click", function () {
        enterBtn.style.display = 'none';
        const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)].question;
        const newParagraph = document.createElement("p");
        newParagraph.innerText = randomQuestion;
        document.querySelector("#question-box").appendChild(newParagraph);

        const answerBtn = document.createElement('button');
        answerBtn.textContent = 'Show Answer';
        document.body.appendChild(answerBtn);
    
        answerBtn.addEventListener("click", function () {
          const currentQuestion = document.querySelector("#question-box p:last-child");
          const answer = questions.find(q => q.question === currentQuestion.innerText).answer;
          currentQuestion.innerText += `\n ${answer}`;
          answerBtn.style.display = 'none';
          enterBtn.style.display = 'inline-block';
      });
    })}} 

  

startingAnimation().then(() => {
    animationFinished = true;
    displayButton() 
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
        console.log(newParagraph);
    }
  })





  




