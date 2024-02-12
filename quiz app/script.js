const questions = [
  {
    question: "Who is the cm of maharahtra ?",
    answers: [
      { text: "Arvind Kejriwal", correct: false },
      { text: "Bhagwant singh Mann", correct: false },
      { text: "Yogi Adityanath", correct: false },
      { text: "Eknath Sambhajirao Shinde", correct: true },
    ],
  },
  {
    question: "what is the full form of CSS ?",
    answers: [
      { text: "Cascading secure sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascade computer Sheets", correct: false },
      { text: "Casio Style secure", correct: false },
    ],
  },
  {
    question: "what is the capital of Gujrat ?",
    answers: [
      { text: "Surat", correct: false },
      { text: "Gandhinagar", correct: false },
      { text: "Ahmadabad", correct: true },
      { text: "jaisalmer", correct: false },
    ],
  },
   {
    question: "who was the great king of mughals",
    answers: [
      { text: "Babar", correct: false },
      { text: "Humayu", correct: false },
      { text: "Allauddin Khilji", correct: false },
      { text: "Akbar", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore()
{
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
