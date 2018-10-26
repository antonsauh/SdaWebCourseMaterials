$(document).ready(function () {
    const questions_count = 3;
    let current_question_number = 1;

    const $question_container = $('#question-container');
    const $next_button = $('#go-to-next');
    const $previous_button = $('#go-to-previous');
    const $submit_button = $('#submit');

    loadQuestionByNumber(current_question_number);
    addInitialButtonListeners();

    function addInitialButtonListeners() {
        $next_button.click(function () {
            if (validateAnswer()) {
                loadNextQuestion();
            }
        });
        $previous_button.click(function () {
            loadPreviousQuestion();
        });
        $submit_button.click(function () {
            if(validateAnswer()){
                window.location.replace('summary.html');
            }
        })
    }

    function loadNextQuestion() {
        if (current_question_number + 1 <= questions_count) {
            current_question_number++;
            loadQuestionByNumber(current_question_number);
        }

    }

    function loadPreviousQuestion() {
        if (current_question_number - 1 >= 1) {
            current_question_number--;
            loadQuestionByNumber(current_question_number);
        }
    }

    function loadQuestionByNumber(questionNumber) {
        changeButtonVisibilityForQuestion(questionNumber);
        $question_container.load('questions/question_' + questionNumber.toString() + '.html',
            null,
            function (){
                loadQuestionDataIfPresent(questionNumber);
            })
    }

    function changeButtonVisibilityForQuestion(questionNumber) {
        if (questionNumber < questions_count) {
            $submit_button.hide();
            $next_button.show();
            if(questionNumber === 1){
                $previous_button.hide();
            }else {
                $previous_button.show();
            }
        } else if (questionNumber === questions_count) {
            $submit_button.show();
            $next_button.hide();
        }

    }

    function validateAnswer() {
        switch (current_question_number) {
            case 1: {
                return validateQuestion1();
            }
            case 2: {
                return validateQuestion2();
            }
            case 3: {
                return validateQuestion3();
            }
            case 4: {
                return validateQuestion4();
            }
            case 5: {
                return validateQuestion5();
            }
        }
    }

    function validateQuestion1() {
        //i check if field is ok
        //if its ok i Do this
        console.log(current_question_number);
        saveQuestionData(current_question_number);
        return true;

        // i
    }

    function validateQuestion2() {
        console.log(current_question_number);
        saveQuestionData(current_question_number);
        return true;
    }

    function validateQuestion3() {
        console.log(current_question_number);
        saveQuestionData(current_question_number);
        return true;
    }

    function validateQuestion4(){
        saveQuestionData(current_question_number);
        return true;
    }
    function validateQuestion5() {
        saveQuestionData(current_question_number);
        return true;
    }


    function loadQuestionDataIfPresent(questionNumber) {
        const data = localStorage.getItem(questionNumber.toString());
        if (data !== null) {
            $('form').fromJSON(data);
        }
    }

    function saveQuestionData(questionNumber) {
        localStorage.setItem(questionNumber.toString(), $('form').toJSON());
    }
});