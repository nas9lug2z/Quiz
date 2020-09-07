import Question from "./question.js";
import Quiz from "./quiz.js";


const q1 = new Question (
    "What is the earliest cave painting site found?",
        ["Altamira, Spain",
        "Chauvet, France",
        "Maros-Pangkep karst, Indonesia",
        "Lascaux, France"],
    2
);

const q2 = new Question (
    "At the territory of which modern country is located ancient Babylon?",
        ["Iraq",
        "Syria",
        "Jordan",
        "Iran"],
    0
);

const q3 = new Question (
    "Where famous Egyptian pyramids are located?",
        ["Karnak",
        "Giza",
        "Luxor",
        "Saqqara"],
    1
);

const q4 = new Question (
    "Who was the first female emperor of Egypt?",
        ["Nefertiti",
        "Cleopatra",
        "Tusret",
        "Hatshepsut"],
    3
);

const q5 = new Question (
    "According to the legend, who Knossos palace (Crete) was built for?",
        ["King Minos",
        "Minotaur",
        "Ariadne",
        "Aegeus"],
    1
);



const questions = [q1, q2, q3, q4, q5]
const myQuiz = new Quiz(questions);

const App = (() => {
    //cache the DOM: get all elements and variables at once
})();


