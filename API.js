import Question from "./question.js";
import Quiz from "./quiz.js";
import App from "./app.js";


const importedQuestions = (_ => {


    const mainFunction = async _ => {
        //1.fetch API
        const endPoint = `https://opentdb.com/`
        const quantity = 10;
        const difficulty = `easy`;
        const type = `multiple`
        const URL = `${endPoint}api.php?amount=${quantity}&difficulty=${difficulty}&type=${type}`

        //function to shuffle
        const shuffle = arr => {
            let resultArr = [];
            for (let i = arr.length; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * i);
                resultArr.push(arr[randomIndex]);
                arr.splice(randomIndex, 1);
            }
            return resultArr;
        }

        //function to define a correct answer
        const findAnswerKeyIndex = (answers, correct) => {
            let key;
            answers.forEach((elem, index) => {
                if (elem === correct) {
                    key = index;
                }
            })
            return key;
        }


        //function to create new question objects and push them to an array questionsArr
        const renderImportedData = _ => {
            let questionsArr = [];
            importedData.results.forEach((elem, index) => {
                const answers = shuffle(elem.incorrect_answers.concat(elem.correct_answer));
                const answerKey = findAnswerKeyIndex(answers, elem.correct_answer);
                const newQuestionObj = new Question (elem.question, answers, answerKey);
                questionsArr.push(newQuestionObj);
            });
            return questionsArr;
        }

        //create new quiz



        //functions
        const request = await fetch(URL)
        const importedData = await request.json();
        const importedQuiz = await new Quiz(renderImportedData());
        return importedQuiz;
    }

    return {
        mainFunction
    }
})();

export default importedQuestions;




        //Questions list
        // const q1 = new Question (
        //     "What is the earliest cave painting site found?",
        //         ["Altamira, Spain",
        //         "Chauvet, France",
        //         "Maros-Pangkep, Indonesia",
        //         "Lascaux, France"],
        //     2
        // );
        // const q2 = new Question (
        //     "At the territory of which modern country is located ancient Babylon?",
        //         ["Iraq",
        //         "Syria",
        //         "Jordan",
        //         "Iran"],
        //     0
        // );
        // const q3 = new Question (
        //     "Where famous Egyptian pyramids are located?",
        //         ["Karnak",
        //         "Giza",
        //         "Luxor",
        //         "Saqqara"],
        //     1
        // );
        // const q4 = new Question (
        //     "Who was the first female emperor of Egypt?",
        //         ["Nefertiti",
        //         "Cleopatra",
        //         "Tusret",
        //         "Hatshepsut"],
        //     3
        // );
        // const q5 = new Question (
        //     "According to the legend, who Knossos palace (Crete) was built for?",
        //         ["King Minos",
        //         "Minotaur",
        //         "Ariadne",
        //         "Aegeus"],
        //     1
        // );

        //initialize the quiz
        // const myQuiz = new Quiz([q1, q2, q3, q4, q5]);
        // const myQuiz = mainFunction();

