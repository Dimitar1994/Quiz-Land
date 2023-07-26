


const Questions = [{
    q: "Which of this is the same as result += value?",
    a: [{ text: "result = value + value", isCorrect: false },
    { text: "result = value", isCorrect: false },
    { text: "result=result + value", isCorrect: true },
    { text: "result = ++value", isCorrect: false }
    ]

},
{
    q: "Wich of these IS NOT a logical operator ?",
    a: [{ text: "!", isCorrect: false, isSelected: false },
    { text: "&&", isCorrect: false },
    { text: " ||", isCorrect: false },
    { text: "|", isCorrect: true }
    ]

},
{
    q: "Which of the following is INCORRECT variable name ?",
    a: [{ text: "_2result", isCorrect: false },
    { text: "_result", isCorrect: false },
    { text: "2result", isCorrect: true },
    { text: "$result", isCorrect: false }
    ]

},
{
    q: "How to convert an object into JSON string ?",
    a: [{ text: "JSON.toString()", isCorrect: false },
    { text: "JSON.value()", isCorrect: false },
    { text: "JSON.stringify()", isCorrect: true },
    { text: "JSON.parse()", isCorrect: false }
    ]

}

]

let currentQuestion = 0
let score = 0

/* Load questions*/

function loadQuestion() {
    const question = document.getElementById("questions")
    const options = document.getElementById("options")

    question.textContent = Questions[currentQuestion].q;
    options.innerHTML = ""

    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currentQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        options.appendChild(choicesdiv);
    }
}

loadQuestion();





function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("options").remove()
        document.getElementById("questions").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

/** Check answer */

function checkAnswer() {
    const selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
    const correctАnswer = Questions[currentQuestion].a[selectedAnswer].isCorrect;

    const search = Questions[currentQuestion].a.filter(function (item) {
        return item.isCorrect === true;
    });


    const wrongAnswerText = `The correct answer is " ${search[0.].text} "`;



    if (correctАnswer) {
        Swal.fire({
            title: 'Congratulations',
            text: 'Correct answer',
            imageUrl: 'https://images.unsplash.com/photo-1629906701520-7c0180c6e58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmdyYXR1bGF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        score++;
        nextQuestion();


    } else {
        Swal.fire({
            title: 'Wrong answer ',
            text: wrongAnswerText,
            imageUrl: 'https://images.unsplash.com/photo-1636110291887-a1a76d79ccaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdyb25nJTIwYW5zd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        nextQuestion();
    }
}

/**Load score */

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.classList.remove("d-none");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
} 