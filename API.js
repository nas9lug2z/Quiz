import Question from "./question.js";
import Quiz from "./quiz.js";

const importedQuestions = (_ => {

    const mainFunction = async _ => {
        //1.fetch API
        const endPoint = `https://opentdb.com/`
        const quantity = 10;
        const difficulty = `easy`;
        const type = `multiple`
        const URL = `${endPoint}api.php?amount=${quantity}&difficulty=${difficulty}&type=${type}`
        let questionsArr = [];

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


        //function to create new question objects
        const renderImportedData = _ => {
            importedData.results.forEach((elem, index) => {
                const answers = shuffle(elem.incorrect_answers.concat(elem.correct_answer));
                const answerKey = findAnswerKeyIndex(answers, elem.correct_answer);
                console.log(answerKey);
                const newQuestionObj = new Question (elem.question, answers, answerKey);
                questionsArr.push(newQuestionObj);
                
            })
        }


        const importedQuiz = new Quiz([q1, q2, q3, q4, q5]);



        const renderAnswersArr = _ => {
            importedData.results.forEach((elem, index) => {

            })
            return importedData.results[0].incorrect_answers;
        }



        const request = await fetch(URL)
        const importedData = await request.json();
        // const renderedAnswers = await renderAnswersArr();
        console.log(importedData.results)
        const render = await renderImportedData();
        console.log(questionsArr);


        //2.Merge all answers and shuffle them;




        // const renderAnswersArr = _ => {
        //     return importedData.results.incorrect_answers.push(importedData.results.correct_answer);
        // }

        //create questions

        



    }


        //Questions list
        const q1 = new Question (
            "What is the earliest cave painting site found?",
                ["Altamira, Spain",
                "Chauvet, France",
                "Maros-Pangkep, Indonesia",
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

        //initialize the quiz
        const myQuiz = new Quiz([q1, q2, q3, q4, q5]);



    return {
        mainFunction,
        myQuiz
    }
})();

export default importedQuestions;