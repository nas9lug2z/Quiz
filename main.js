import Question from "./question.js";
import Quiz from "./quiz.js";
import ImportedQuestions from "./api.js";
import App from "./app.js";
import importedQuestions from "./api.js";

const Main = (_ => {
    const asyncFunc = async _ => {
        const renderQuestions = await ImportedQuestions.mainFunction();
        const renderVisual = await App.renderAll(renderQuestions);
        App.listeners(renderQuestions);
    }
    return {
        asyncFunc
    }
})();

Main.asyncFunc();

export default Main;
