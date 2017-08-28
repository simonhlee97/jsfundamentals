function addTrivia(trivia){
    trivia.forEach(function(triviaItem){
        let tenQuestions = document.createElement("div");
        let correct = triviaItem.correct_answer;
        let incorrect1 = triviaItem.incorrect_answers[0];
        let incorrect2 = triviaItem.incorrect_answers[1];
        let incorrect3 = triviaItem.incorrect_answers[2];

        tenQuestions.innerHTML = ""+
        "<form>"+
        'question 1: ' + triviaItem.question + '<br><br>' +
        "<input type='radio' name='choices' value='correct_answer'> A. " + correct + "<br>" +
        "<input type='radio' name='choices' value='incorrect_answer[0]'> B. " + incorrect1 + "<br>" +
        "<input type='radio' name='choices' value='incorrect_answer[1]'> C. " + incorrect2 + "<br>" +
        "<input type='radio' name='choices' value='incorrect_answer[2]'> D. " + incorrect3 + "<br>" +
        "<p><input type='submit' class='myButton'><p></form><hr><p>"
        $('#triviaContainer').append(tenQuestions);
    });
};

// 3. Randomly (suffle) list the 4 answer choices
// 4. Display only Question 1 (hide all others), and show a Next Button
// 5. if time, create a function that calculates score (# of Correct / 10)

$(function(){
    $('#startbtn').click(function(){

        $.ajax({
            type: 'GET',
            url: "https://opentdb.com/api.php?amount=10&type=multiple"
        }).done(function(data){
            console.log(data.results);
            addTrivia(data.results);
        })
        
    });
});