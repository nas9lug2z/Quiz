import Question from "./question.js";
import Quiz from "./quiz.js";
import ImportedQuestions from "./API.js";

const App = ((myQuiz) => {
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

    const listeners = (myQuiz) => {
        nextButton.addEventListener("click", function() {
            const selectedRadio = document.querySelector('input[name="choice"]:checked');
            if (selectedRadio) {
                const guessKey = Number(selectedRadio.getAttribute("data-order"));
                myQuiz.guess(guessKey);
                renderAll(myQuiz);
            }
            else {
                alert("Please select an option")
            }
        })
        restartButton.addEventListener("click", function(){
            //1.reset the quiz
            myQuiz.reset();
            //2.render all again
            renderAll(myQuiz);
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

    const renderQuestion = (myQuiz) => {
        const currentQuestion = myQuiz.getCurrentQuestion().question;
        setInnerHTML(questionEl, currentQuestion);
    }

    const renderChoices = (myQuiz) => {
        let choiceText = "";
        const currentChoices = myQuiz.getCurrentQuestion().choices;
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

    const renderTracker = (myQuiz) => {
        const indexNow = myQuiz.currentIndex;
        const totalQuestions = myQuiz.questions.length;
        tracker.innerHTML = `${indexNow + 1} of ${totalQuestions}`;
        const currentProgress = (indexNow/totalQuestions)*100;
        progressBar.style.width = `${currentProgress}%`;
    }

    const renderEndScreen = (myQuiz) => {
        setInnerHTML(questionEl, "Great Job!");
        setInnerHTML(tagLine, "Test is complete!");
        setInnerHTML(tracker, `Your score is ${myQuiz.score} out of ${myQuiz.questions.length}`);
        choiceUl.style.display = "none";
        nextButton.style.display = "none";
        progressBar.style.width = "100%";
    }


    const renderAll = (myQuiz) => {
        if (myQuiz.hasEnded()) {
            renderEndScreen(myQuiz);
        }
        else {
            setInnerHTML(tagLine, "Pick an option below");
            //1. render the question
            renderQuestion(myQuiz);
            //2. render the choices
            renderChoices(myQuiz);
            //3. render the tracker
            renderTracker(myQuiz);
        }

    }

    return {
        renderAll,
        listeners
    }



})();

export default App;

