var myQuestions = [
    {
    question:'Which area of UofT are you located at?',
    answers:{
        a:'North East',
        b:'North West',
        c:'South East',
        d:'South West'
    },
    correctAnswer: 'a'
    },
    {
    question:'What kind of arm do you like?',
    answers:{
        a:'English Arm',
        b:'Lawson Arm',
        c:'Pleated Arm',
        d:'Rolled Arm'
    },
    correctAnswer:'b'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
   
    var output = [];
    var answers;
    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + '<strong>'+letter+'</strong>' + '.'
            + questions[i].answers[letter]
          + ' </label>'
        );
      }

      output.push(
        '<div class="question">' +(i+1)+'. '+ questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div><br>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var numCorrect =0;
    userAnswer = (answerContainers[0].querySelector('input[name=question'+0+']:checked')||{}).value;
    if(userAnswer === questions[0].correctAnswer){
        
        resultsContainer.innerHTML = '<p>There is a sofa at New College!</p> <img src="img2.jpg" height=100px width=100px top=90% style ="opacity:1.0;"></img>';
    }

  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}