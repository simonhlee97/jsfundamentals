
// var $question = $('#bigBox');
// data.results is an array of 10 objects with questions and answer choices

// var mustacheTemp = ""+
//             "<form>"+
//             "Question #1: {{question}}<br><br>" +
//             "<input type='radio' name='choices' value='a'>{{randomChoice1}}<br>" +
//             "<input type='radio' name='choices' value='b'>{{randomChoice2}}<br>" +
//             "<input type='radio' name='choices' value='c'>{{randomChoice3}}<br>" +
//             "<input type='radio' name='choices' value='d'>{{randomChoice4}}" +
//             "<p><p></form><p>"

// function addData(data){
//                 $question.append(Mustache.render(mustacheTemp, data));
//             };

// var myArray = [];
// var count = 1;
// $('#startbtn').click(function(){

//         $.ajax({
//             type: 'GET',
//             url: "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
//         }).done(function(data){
//             data.results.forEach(function(d){
//                 myArray.push(d);
//             });

//             let correct = myArray[0].correct_answer;
//             let incorrect1 = myArray[0].incorrect_answers[0];
//             let incorrect2 = myArray[0].incorrect_answers[1];
//             let incorrect3 = myArray[0].incorrect_answers[2];

//             let randomChoices = [];
//             // push the 4 choices to a new array and randomly re-sort
//             randomChoices.push(correct, incorrect1, incorrect2, incorrect3);
//             randomChoices.sort(function(a, b){
//                 return 0.5 - Math.random()
//             });

//             let theContainer = document.createElement("div");
//             theContainer.innerHTML = ""+
//             "<form>"+
//             "Question # " + count + ": " + myArray[0].question + "<br><br>" +
//             "<input type='radio' name='choices' value='a'> A. " + randomChoices[0] + "<br>" +
//             "<input type='radio' name='choices' value='b'> B. " + randomChoices[1] + "<br>" +
//             "<input type='radio' name='choices' value='c'> C. " + randomChoices[2] + "<br>" +
//             "<input type='radio' name='choices' value='d'> D. " + randomChoices[3] + "<br>" +
//             "<p><p></form><p>"
//             $('#bigBox').append(theContainer);
//             $('#next').fadeIn(1000);
//             $('#prev').fadeIn(1000);
//             $('#bigBox').fadeIn(1000);
//             count++;

//             // function createRadios(index)

//         });
//     $('#startbtn').fadeOut('slow');
// });

// $('#next').click(function nextQuestion(){
//     $('#bigBox').fadeOut('slow');
//     console.log(myArray);
//     console.log(myArray[1].question);
//     console.log(myArray[1].correct_answer);
// });


function addTrivia(trivia){
    let counter = 1;
    trivia.forEach(function(triviaItem){
        let tenQuestions = document.createElement("div");
        let correct = triviaItem.correct_answer;
        let incorrect1 = triviaItem.incorrect_answers[0];
        let incorrect2 = triviaItem.incorrect_answers[1];
        let incorrect3 = triviaItem.incorrect_answers[2];
		
		// push the 4 answer choices into an empty array, and randomly sort
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

$(function(){
    $('#startbtn').click(function(){

        $.ajax({
            type: 'GET',
            url: "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
        }).done(function(data){
            console.log(data.results);
            addTrivia(data.results); // pulls 10 questions from API
            $('#triviaContainer').fadeIn('slow');
        })
        
    });
});

