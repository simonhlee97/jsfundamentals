$('#startbtn').click(function(){
        let myArray = [];

        $.ajax({
            type: 'GET',
            url: "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
        }).done(function(data){
            
            data.results.forEach(function(d){
                myArray.push(d);
            });
            
        });
        console.log(myArray[5]);
    });





function oneQuestion(trivia){
    let singleQuestion = [];

    let singleChoices = [];

    let question = trivia['question'];
    let correct = trivia['correct_answer'];
    let incorrect_answers = trivia['incorrect_answers'];

}

function addTrivia(trivia){
    let counter = 1;
    trivia.forEach(function(triviaItem){
        let tenQuestions = document.createElement("div");
        let correct = triviaItem.correct_answer;
        let incorrect1 = triviaItem.incorrect_answers[0];
        let incorrect2 = triviaItem.incorrect_answers[1];
        let incorrect3 = triviaItem.incorrect_answers[2];

        let newArray = [];
        newArray.push(correct, incorrect1, incorrect2, incorrect3);
        newArray.sort(function(a, b){
            return 0.5 - Math.random()
        });

        tenQuestions.innerHTML = ""+
        "<form>"+
        'question ' + counter + ': ' + triviaItem.question + '<br><br>' +
        "<input type='radio' name='choices' value='a'> A. " + newArray[0] + "<br>" +
        "<input type='radio' name='choices' value='b'> B. " + newArray[1] + "<br>" +
        "<input type='radio' name='choices' value='c'> C. " + newArray[2] + "<br>" +
        "<input type='radio' name='choices' value='d'> D. " + newArray[3] + "<br>" +
        "<p><input type='submit' class='myButton'><p></form><hr><p>"
        $('#triviaContainer').append(tenQuestions);
        counter++;
    });
};

// 3. Randomly (suffle) list the 4 answer choices
// 4. Display only Question 1 (hide all others), and show a Next Button
// 5. if time, create a function that calculates score (# of Correct / 10)

// $(function(){
//     $('#startbtn').click(function(){

//         $.ajax({
//             type: 'GET',
//             url: "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
//         }).done(function(data){
//             console.log(data.results);
//             addTrivia(data.results); // pulls 10 questions from API
//             $('#triviaContainer').fadeIn('slow');
//         })
        
//     });
// });

