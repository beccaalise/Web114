"use strict";

let playerName = "";
let currentIndex = 0;
let score = 0;
let destinations = [];
let currentCategory = "mixed";
let userAnswers = [];

const questionPool = {
  variables: [
    {
        location: "Paris, France",
        category: "variables",
        question: "What keyword declares a variable that can change value?",
        answer: "let",
        fact: "The Eiffel Tower can be 15 cm taller during the summer!",
        image: "assets/paris.jpg",
        type: "multiple",
        choices: ["let", "const", "var", "static"]
    },
    {
        location: "London, England",
        category: "variables",
        question: "Which keyword defines a constant value?",
        answer: "const",
        fact: "Big Ben is actually the bell inside the clock tower!",
        image: "assets/london.jpg",
        type: "multiple",
        choices: ["const", "let", "var", "define"]
    },
    {
        location: "Mumbai, India",
        category: "variables",
        question: "What type is returned by typeof null?",
        answer: "object",
        fact: "Mumbai is home to Bollywood, the largest film industry in the world!",
        image: "assets/mumbai.PNG",
        type: "multiple",
        choices: ["object", "null", "undefined", "string"]
    },
    {
        location: "Seoul, South Korea",
        category: "variables",
        question: "Which keyword was historically used to declare all variables in JavaScript?",
        answer: "var",
        fact: "Seoul is home to the world’s fastest internet speeds.",
        image: "assets/seoul.PNG",
        type: "multiple",
        choices: ["var", "let", "const", "define"],
    },
    {
        location: "Helsinki, Finland",
        category: "variables",
        question: "Which keyword is block-scoped and commonly used today?",
        answer: "let",
        fact: "Helsinki is known for its design and architecture.",
        image: "assets/helsinki.jpg",
        type: "multiple",
        choices: ["let", "var", "const", "static"],
    },
    {
        location: "Copenhagen, Denmark",
        category: "variables",
        question: "What is the default value of an uninitialized variable?",
        answer: "undefined",
        fact: "Copenhagen consistently ranks as one of the happiest cities in the world.",
        image: "assets/copenhagen.jpg",
        type: "multiple",
        choices: ["undefined", "null", "NaN", "0"],
    },
    {
        location: "Dublin, Ireland",
        category: "variables",
        question: "Which keyword defines a variable that cannot be reassigned?",
        answer: "const",
        fact: "Dublin is the home of Guinness beer and rich literary history.",
        image: "assets/dublin.jpg",
        type: "multiple",
        choices: ["const", "let", "var", "final"],
    },
    {
        location: "Brussels, Belgium",
        category: "variables",
        question: "What is the type of a variable declared but not initialized?",
        answer: "undefined",
        fact: "Brussels is the de facto capital of the European Union.",
        image: "assets/brussels.PNG",
        type: "multiple",
        choices: ["undefined", "null", "empty", "string"],
    },
  ],
  operators: [
    {
        location: "Kyoto, Japan",
        category: "operators",
        question: "What is the output of 5 == '5'?",
        choices: ["true", "false"],
        answer: "true",
        fact: "Kyoto has more than 1,600 Buddhist temples!",
        image: "assets/kyoto.jpg",
        type: "multiple",
    },
    {
        location: "Cairo, Egypt",
        category: "operators",
        question: "Which operator checks for both value and type equality?",
        answer: "===",
        fact: "The Great Pyramid of Giza is the only remaining ancient wonder!",
        image: "assets/cairo.jpg",
        type: "multiple",
        choices: ["==", "===", "!=", "="]
    },
    {
        location: "Berlin, Germany",
        category: "operators",
        question: "What does === check in JavaScript?",
        answer: "value and type",
        fact: "Berlin has more bridges than Venice!",
        image: "assets/berlin.jpg",
        type: "multiple",
        choices: ["only value", "only type", "value and type", "none of the above"]
    },
    {
        location: "Buenos Aires, Argentina",
        category: "operators",
        question: "What does the && operator do?",
        answer: "logical and",
        fact: "Buenos Aires has the widest street in the world!",
        image: "assets/aires.PNG",
        type: "multiple",
        choices: ["logical and", "logical or", "equality", "assignment"]
    },
    {
        location: "Hanoi, Vietnam",
        category: "operators",
        question: "Which operator is used for strict equality?",
        answer: "===",
        fact: "Hanoi has a vibrant street food culture.",
        image: "assets/hanoi.PNG",
        type: "multiple",
        choices: ["==", "===", "=", "!="],
    },
    {
        location: "Santiago, Chile",
        category: "operators",
        question: "What does the !== operator check?",
        answer: "not equal and not same type",
        fact: "Santiago is one of the most modern cities in South America.",
        image: "assets/santiago.jpg",
        type: "multiple",
        choices: ["not equal and not same type", "equal", "only value", "only type"],
    },
    {
        location: "Lima, Peru",
        category: "operators",
        question: "Which operator returns true if both conditions are true?",
        answer: "&&",
        fact: "Lima is home to a UNESCO World Heritage historic center.",
        image: "assets/lima.PNG",
        type: "multiple",
        choices: ["&&", "||", "!", "==="],
    },
    {
        location: "Warsaw, Poland",
        category: "operators",
        question: "What does the == operator do?",
        answer: "compares values without type",
        fact: "Warsaw was almost completely rebuilt after WWII.",
        image: "assets/warsaw.jpg",
        type: "multiple",
        choices: ["compares values without type", "strict comparison", "assignment", "logical OR"],
    },
  ],
  arrays: [
    {
        location: "Sydney, Australia",
        category: "arrays",
        question: "What array method adds an item to the end of an array?",
        answer: "push",
        fact: "Sydney Opera House hosts over 1,500 performances each year!",
        image: "assets/sydney.jpg",
        type: "multiple",
        choices: ["push", "pop", "unshift", "concat"]
    },
    {
        location: "San Francisco, USA",
        category: "arrays",
        question: "Which built-in method reverses an array in place?",
        answer: "reverse",
        fact: "San Francisco is home to the iconic Golden Gate Bridge.",
        image: "assets/sanfran.jpg",
        type: "multiple",
        choices: ["reverse", "sort", "slice", "concat"]
    },
    {
        location: "Barcelona, Spain",
        category: "arrays",
        question: "Which array method removes the last item from an array?",
        answer: "pop",
        fact: "Barcelona’s Sagrada Família has been under construction for over 140 years.",
        image: "assets/barcelona.jpg",
        type: "multiple",
        choices: ["pop", "shift", "splice", "remove"]
    },
    {
        location: "Budapest, Hungary",
        category: "arrays",
        question: "Which array method checks if any element meets a condition?",
        answer: "some",
        fact: "Budapest has the oldest subway in mainland Europe.",
        image: "assets/budapest.jpg",
        type: "multiple",
        choices: ["some", "every", "filter", "includes"],
    },
    {
        location: "Bucharest, Romania",
        category: "arrays",
        question: "Which method returns a new array with elements that pass a test?",
        answer: "filter",
        fact: "Bucharest is known as the ‘Little Paris’ of the East.",
        image: "assets/bucharest.jpg",
        type: "multiple",
        choices: ["filter", "map", "slice", "reduce"],
    },
    {
        location: "Vilnius, Lithuania",
        category: "arrays",
        question: "Which method tests whether at least one element meets a condition?",
        answer: "some",
        fact: "Vilnius has a famous bohemian art district called Užupis.",
        image: "assets/vilnius.PNG",
        type: "multiple",
        choices: ["some", "every", "includes", "map"],
    },
    {
        location: "Riga, Latvia",
        category: "arrays",
        question: "Which method joins all array elements into a string?",
        answer: "join",
        fact: "Riga has one of the best-preserved art nouveau architecture districts.",
        image: "assets/riga.jpg",
        type: "multiple",
        choices: ["join", "concat", "reduce", "toString"],
    },
    {
        location: "Tallinn, Estonia",
        category: "arrays",
        question: "Which method adds elements to the beginning of an array?",
        answer: "unshift",
        fact: "Tallinn has free public transport for residents.",
        image: "assets/tallinn.jpg",
        type: "multiple",
        choices: ["unshift", "push", "shift", "concat"],
    },
  ],
  mixed: [
    {
        location: "Paris, France",
        category: "variables",
        question: "What keyword declares a variable that can change value?",
        answer: "let",
        fact: "The Eiffel Tower can be 15 cm taller during the summer!",
        image: "assets/paris.jpg",
        type: "multiple",
        choices: ["let", "const", "var", "define"]
    },
    {
        location: "London, England",
        category: "variables",
        question: "Which keyword defines a constant value?",
        answer: "const",
        fact: "Big Ben is actually the bell inside the clock tower!",
        image: "assets/london.jpg",
        type: "multiple",
        choices: ["const", "let", "var", "define"]
    },
    {
        location: "Mumbai, India",
        category: "variables",
        question: "What type is returned by typeof null?",
        answer: "object",
        fact: "Mumbai is home to Bollywood, the largest film industry in the world!",
        image: "assets/mumbai.PNG",
        type: "multiple",
        choices: ["object", "null", "undefined", "string"]
    },
    {
        location: "Seoul, South Korea",
        category: "variables",
        question: "Which keyword was historically used to declare all variables in JavaScript?",
        answer: "var",
        fact: "Seoul is home to the world’s fastest internet speeds.",
        image: "assets/seoul.PNG",
        type: "multiple",
        choices: ["var", "let", "const", "define"],
    },
    {
        location: "Helsinki, Finland",
        category: "variables",
        question: "Which keyword is block-scoped and commonly used today?",
        answer: "let",
        fact: "Helsinki is known for its design and architecture.",
        image: "assets/helsinki.jpg",
        type: "multiple",
        choices: ["let", "var", "const", "static"],
    },
    {
        location: "Copenhagen, Denmark",
        category: "variables",
        question: "What is the default value of an uninitialized variable?",
        answer: "undefined",
        fact: "Copenhagen consistently ranks as one of the happiest cities in the world.",
        image: "assets/copenhagen.jpg",
        type: "multiple",
        choices: ["undefined", "null", "NaN", "0"],
    },
    {
        location: "Dublin, Ireland",
        category: "variables",
        question: "Which keyword defines a variable that cannot be reassigned?",
        answer: "const",
        fact: "Dublin is the home of Guinness beer and rich literary history.",
        image: "assets/dublin.jpg",
        type: "multiple",
        choices: ["const", "let", "var", "final"],
    },
    {
        location: "Brussels, Belgium",
        category: "variables",
        question: "What is the type of a variable declared but not initialized?",
        answer: "undefined",
        fact: "Brussels is the de facto capital of the European Union.",
        image: "assets/brussels.PNG",
        type: "multiple",
        choices: ["undefined", "null", "empty", "string"],
    },
    {
        location: "Kyoto, Japan",
        category: "operators",
        question: "What is the output of 5 == '5'?",
        choices: ["true", "false"],
        answer: "true",
        fact: "Kyoto has more than 1,600 Buddhist temples!",
        image: "assets/kyoto.jpg",
        type: "multiple",
    },
    {
        location: "Cairo, Egypt",
        category: "operators",
        question: "Which operator checks for both value and type equality?",
        answer: "===",
        fact: "The Great Pyramid of Giza is the only remaining ancient wonder!",
        image: "assets/cairo.jpg",
        type: "multiple",
        choices: ["==", "===", "!=", "="]
    },
    {
        location: "Berlin, Germany",
        category: "operators",
        question: "What does === check in JavaScript?",
        answer: "value and type",
        fact: "Berlin has more bridges than Venice!",
        image: "assets/berlin.jpg",
        type: "multiple",
        choices: ["only value", "only type", "value and type", "none of the above"]
    },
    {
        location: "Buenos Aires, Argentina",
        category: "operators",
        question: "What does the && operator do?",
        answer: "logical and",
        fact: "Buenos Aires has the widest street in the world!",
        image: "assets/aires.jpg",
        type: "multiple",
        choices: ["logical and", "logical or", "equality", "assignment"]
    },
    {
        location: "Hanoi, Vietnam",
        category: "operators",
        question: "Which operator is used for strict equality?",
        answer: "===",
        fact: "Hanoi has a vibrant street food culture.",
        image: "assets/hanoi.PNG",
        type: "multiple",
        choices: ["==", "===", "=", "!="],
    },
    {
        location: "Santiago, Chile",
        category: "operators",
        question: "What does the !== operator check?",
        answer: "not equal and not same type",
        fact: "Santiago is one of the most modern cities in South America.",
        image: "assets/santiago.jpg",
        type: "multiple",
        choices: ["not equal and not same type", "equal", "only value", "only type"],
    },
    {
        location: "Lima, Peru",
        category: "operators",
        question: "Which operator returns true if both conditions are true?",
        answer: "&&",
        fact: "Lima is home to a UNESCO World Heritage historic center.",
        image: "assets/lima.PNG",
        type: "multiple",
        choices: ["&&", "||", "!", "==="],
    },
    {
        location: "Warsaw, Poland",
        category: "operators",
        question: "What does the == operator do?",
        answer: "compares values without type",
        fact: "Warsaw was almost completely rebuilt after WWII.",
        image: "assets/warsaw.jpg",
        type: "multiple",
        choices: ["compares values without type", "strict comparison", "assignment", "logical OR"],
    },
    {
        location: "Sydney, Australia",
        category: "arrays",
        question: "What array method adds an item to the end of an array?",
        answer: "push",
        fact: "Sydney Opera House hosts over 1,500 performances each year!",
        image: "assets/sydney.jpg",
        type: "multiple",
        choices: ["push", "pop", "unshift", "concat"]
    },
    {
        location: "San Francisco, USA",
        category: "arrays",
        question: "Which built-in method reverses an array in place?",
        answer: "reverse",
        fact: "San Francisco is home to the iconic Golden Gate Bridge.",
        image: "assets/sanfran.PNG",
        type: "multiple",
        choices: ["reverse", "sort", "slice", "concat"]
    },
    {
        location: "Barcelona, Spain",
        category: "arrays",
        question: "Which array method removes the last item from an array?",
        answer: "pop",
        fact: "Barcelona’s Sagrada Família has been under construction for over 140 years.",
        image: "assets/barcelona.jpg",
        type: "multiple",
        choices: ["pop", "shift", "splice", "remove"]
    },
    {
        location: "Budapest, Hungary",
        category: "arrays",
        question: "Which array method checks if any element meets a condition?",
        answer: "some",
        fact: "Budapest has the oldest subway in mainland Europe.",
        image: "assets/budapest.jpg",
        type: "multiple",
        choices: ["some", "every", "filter", "includes"],
    },
    {
        location: "Bucharest, Romania",
        category: "arrays",
        question: "Which method returns a new array with elements that pass a test?",
        answer: "filter",
        fact: "Bucharest is known as the ‘Little Paris’ of the East.",
        image: "assets/bucharest.jpg",
        type: "multiple",
        choices: ["filter", "map", "slice", "reduce"],
    },
    {
        location: "Vilnius, Lithuania",
        category: "arrays",
        question: "Which method tests whether at least one element meets a condition?",
        answer: "some",
        fact: "Vilnius has a famous bohemian art district called Užupis.",
        image: "assets/vilnius.PNG",
        type: "multiple",
        choices: ["some", "every", "includes", "map"],
    },
    {
        location: "Riga, Latvia",
        category: "arrays",
        question: "Which method joins all array elements into a string?",
        answer: "join",
        fact: "Riga has one of the best-preserved art nouveau architecture districts.",
        image: "assets/riga.jpg",
        type: "multiple",
        choices: ["join", "concat", "reduce", "toString"],
    },
    {
        location: "Tallinn, Estonia",
        category: "arrays",
        question: "Which method adds elements to the beginning of an array?",
        answer: "unshift",
        fact: "Tallinn has free public transport for residents.",
        image: "assets/tallinn.jpg",
        type: "multiple",
        choices: ["unshift", "push", "shift", "concat"],
    },
  ],
};

questionPool.mixed = [...questionPool.variables, ...questionPool.operators, ...questionPool.arrays];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  window.alert("Get ready to test your JavaScript skills and travel the world! 🌍");
  playerName = window.prompt("What is your name?");
  if (!playerName) playerName = "Traveler";
  document.getElementById("welcome").textContent = `Welcome to the JavaScript Travel Quiz, ${playerName}!`;

  score = 0;
  currentIndex = 0;
  userAnswers = [];

  currentCategory = document.getElementById("category").value;
  const allQuestions = currentCategory === "mixed"
    ? [...questionPool.variables, ...questionPool.operators, ...questionPool.arrays]
    : [...questionPool[currentCategory]];

  shuffleArray(allQuestions);
  destinations = allQuestions.slice(0, 5);

  document.getElementById("setup-section").style.display = "none";
  const quizSection = document.getElementById("quiz-section");
  quizSection.style.display = "block";
  quizSection.className = currentCategory;

  displayQuestion();
}

function displayQuestion() {
  const current = destinations[currentIndex];
  document.getElementById("location").textContent = `🌍 Destination: ${current.location}`;
  document.getElementById("question").textContent = current.question;

  const wrapper = document.getElementById("answer-wrapper");
  wrapper.innerHTML = "";

  current.choices.forEach(choice => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer-choice";
    radio.value = choice;
    label.appendChild(radio);
    label.append(` ${choice}`);
    wrapper.appendChild(label);
    wrapper.appendChild(document.createElement("br"));
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "";

  const feedbackImg = document.getElementById("feedback-img");
  feedbackImg.src = "";
  feedbackImg.alt = "";
  feedbackImg.classList.remove("show");
  
  document.getElementById("fact").textContent = "";

  let categoryMessage = "";
    switch (currentCategory) {
    case "variables":
        categoryMessage = "🧪 Let's review variables!";
        break;
    case "operators":
        categoryMessage = "⚖️ Time to compare values!";
        break;
    case "arrays":
        categoryMessage = "📦 Array time!";
        break;
    default:
        categoryMessage = "🌐 Mixed challenge ahead!";
    }
  console.log(categoryMessage);
}

function getUserAnswer() {
  const selected = document.querySelector("input[name='answer-choice']:checked");
  return selected ? selected.value.trim().toLowerCase() : "";
}

function checkAnswer() {
  const userInput = getUserAnswer();
  const current = destinations[currentIndex];
  const correctAnswer = current.answer.toLowerCase();
  const feedback = document.getElementById("feedback");

  const isCorrect = userInput === correctAnswer;

  if (isCorrect) {
    score++;
    feedback.textContent = "✅ Correct!";
    feedback.className = "correct";

    const feedbackImg = document.getElementById("feedback-img");
    feedbackImg.src = current.image;
    feedbackImg.alt = `Image of ${current.location}`;
    feedbackImg.classList.add("show");
    
    document.getElementById("fact").textContent = current.fact;
    addPassportStamp(current.location);
  } else {
    feedback.textContent = `❌ Not quite. Correct answer: ${current.answer}`;
    feedback.className = "incorrect";
  }

  userAnswers.push({
    question: current.question,
    userAnswer: userInput,
    correctAnswer: correctAnswer,
    wasCorrect: isCorrect
  });

  document.getElementById("score").textContent = score;
  currentIndex++;

  if (currentIndex < destinations.length) {
    setTimeout(displayQuestion, 2000);
  } else {
    setTimeout(showSummary, 2000);
  }
}

function showSummary() {
  document.getElementById("quiz-section").style.display = "none";
  const summary = document.getElementById("summary-section");
  summary.style.display = "block";

  document.getElementById("final-score").textContent =
    `🎓 You scored ${score} out of ${destinations.length}, ${playerName}!`;

  const summaryList = document.getElementById("summary-list");
  summaryList.innerHTML = "";

  userAnswers.forEach((answer, index) => {
    const div = document.createElement("div");
    div.className = `summary-item ${answer.wasCorrect ? "correct" : "incorrect"}`;
    div.innerHTML = `<strong>Q${index + 1}:</strong> ${answer.question}<br />
      <strong>Your answer:</strong> ${answer.userAnswer}<br />
      <strong>Correct answer:</strong> ${answer.correctAnswer}`;
    summaryList.appendChild(div);
  });
}

function addPassportStamp(location) {
  const stamp = document.createElement("span");
  stamp.textContent = "✉️";
  stamp.title = location;
  document.getElementById("passport").appendChild(stamp);
}

function resetGame() {
  document.getElementById("summary-section").style.display = "none";
  document.getElementById("setup-section").style.display = "block";
  document.getElementById("submitBtn").style.display = "inline-block";
  document.getElementById("passport").innerHTML = "";
  document.getElementById("score").textContent = "0";
}

document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("submitBtn").addEventListener("click", checkAnswer);
document.getElementById("playAgain").addEventListener("click", resetGame);
