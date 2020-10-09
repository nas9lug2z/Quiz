import Question from "./question.js";
import Quiz from "./quiz.js";
import ImportedQuestions from "./API.js";
import App from "./app.js";

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
