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
            console.log("Form Submitted");
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
        changeButtonVisibilityForQuestion(current_question_number);
        $question_container.load('questions/question_' + questionNumber.toString() + '.html');
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

    function validateQuestion1() {
        return true;
    }

    function validateQuestion2() {
        return true;
    }

    function validateQuestion3() {
        return true;
    }

    function validateQuestion4(){
        return true;
    }
    function validateQuestion5() {
        return true;
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
});