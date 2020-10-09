import Question from "./question.js";
import Quiz from "./quiz.js";
import ImportedQuestions from "./api.js";

const App = (() => {
    //cache the DOM: get all elements and variables at once
    const quizEl = document.querySelector(".jabquiz");
    const questionEl = document.querySelector(".question");
    const tracker = document.querySelector(".tracker");
    const progressBar = document.querySelector(".progressbar__inner");
    const tagLine = document.querySelector(".tagline");
    const choiceUl = document.querySelector(".choices");
    const choicesList = document.querySelectorAll(".choice");
    const nextButton = document.querySelector(".next");
    const restartButton = document.querySelector(".restart");



    const listeners = () => {
        nextButton.addEventListener("click", function() {
            const selectedRadio = document.querySelector('input[name="choice"]:checked');
            if (selectedRadio) {
                const guessKey = Number(selectedRadio.getAttribute("data-order"));
                ImportedQuestions.myQuiz.guess(guessKey);
                renderAll();
            }
            else {
                alert("Please select an option")
            }
        })
        restartButton.addEventListener("click", function(){
            //1.reset the quiz
            ImportedQuestions.myQuiz.reset();
            //2.render all again
            renderAll();
            //3.restore the next button and choices box
            choiceUl.style.display = "flex";
            nextButton.style.display = "inline-block";
        })
    }


    //Rendering components (output to the screen)
    //function to change inner HTML
    const setInnerHTML = (element, text) => {
        element.innerHTML = text;
    }

    const renderQuestion = () => {
        const currentQuestion = ImportedQuestions.myQuiz.getCurrentQuestion().question;
        setInnerHTML(questionEl, currentQuestion);
    }

    const renderChoices = () => {
        let choiceText = "";
        const currentChoices = ImportedQuestions.myQuiz.getCurrentQuestion().choices;
        currentChoices.forEach((elem, index) => {
            choiceText += `
            <li class="choice">
                <input type="radio" name="choice" class="quiz__input" id="choice-${index}" data-order="${index}">
                <label for="choice-${index}" class="quiz__label">
                    <i></i>
                    <span>${elem}</span>
                </label>
            </li>
            `;
        });
        choiceUl.innerHTML = choiceText;
    }

    const renderTracker = () => {
        const indexNow = ImportedQuestions.myQuiz.currentIndex;
        const totalQuestions = ImportedQuestions.myQuiz.questions.length;
        tracker.innerHTML = `${indexNow + 1} of ${totalQuestions}`;
        const currentProgress = (indexNow/totalQuestions)*100;
        progressBar.style.width = `${currentProgress}%`;
    }

    const renderEndScreen = () => {
        setInnerHTML(questionEl, "Great Job!");
        setInnerHTML(tagLine, "Test is complete!");
        setInnerHTML(tracker, `Your score is ${ImportedQuestions.myQuiz.score} out of ${ImportedQuestions.myQuiz.questions.length}`);
        choiceUl.style.display = "none";
        nextButton.style.display = "none";
        progressBar.style.width = "100%";
    }


    const renderAll = () => {
        if (ImportedQuestions.myQuiz.hasEnded()) {
            renderEndScreen();
        }
        else {
            setInnerHTML(tagLine, "Pick an option below");
            //1. render the question
            renderQuestion();
            //2. render the choices
            renderChoices();
            //3. render the tracker
            renderTracker();
        }

    }

    return {
        renderAll,
        listeners
    }



})();


ImportedQuestions.mainFunction();
App.renderAll();
App.listeners();

