import Question from "./question.js";
import Quiz from "./quiz.js";
import ImportedQuestions from "./api.js";
import App from "./app.js";
import importedQuestions from "./api.js";

const main = (async _ => {
    const renderQuestions = await ImportedQuestions.mainFunction();
    console.log(renderQuestions)
    const renderVisual = await App.renderAll(renderQuestions);
    App.listeners(renderQuestions);
})();



// console.log(ImportedQuestions.mainFunction());
// const quiz = ImportedQuestions.mainFunction();
// App.renderAll(quiz)