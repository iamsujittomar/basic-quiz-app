const quizData = [
            {
                question: "What is the capital of France?",
                options: {
                    a: "Berlin",
                    b: "Madrid",
                    c: "Paris",
                    d: "Rome"
                },
                answer: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: {
                    a: "Earth",
                    b: "Mars",
                    c: "Jupiter",
                    d: "Saturn"
                },
                answer: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: {
                    a: "Atlantic Ocean",
                    b: "Indian Ocean",
                    c: "Arctic Ocean",
                    d: "Pacific Ocean"
                },
                answer: 3
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: {
                    a: "Charles Dickens",
                    b: "William Shakespeare",
                    c: "Mark Twain",
                    d: "Jane Austen"
                },
                answer: 1
            },
            {
                question: "What is the chemical symbol for gold?",
                options: {
                    a: "Au",
                    b: "Ag",
                    c: "Pb",
                    d: "Fe"
                },
                answer: 0
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: {
                    a: "Oxygen",
                    b: "Carbon Dioxide",
                    c: "Nitrogen",
                    d: "Hydrogen"
                },
                answer: 1
            }
        ];

        const questionElement = document.getElementById("question");
        const optionstag = {
            a: document.getElementById("option_1"),
            b: document.getElementById("option_2"),
            c: document.getElementById("option_3"),
            d: document.getElementById("option_4")
        };
        const answertag = document.querySelectorAll(".answer");
        const submitButton = document.getElementById("submit");

        let currentQuestion = 0;
        let score = 0;

        const loadQuiz = () => {
            deselectAnswers();
            const currentQuizData = quizData[currentQuestion];
            questionElement.innerText = currentQuizData.question;

            let i = 0;
            for (const key in optionstag) {
                optionstag[key].innerText = currentQuizData.options[key];
                answertag[i].setAttribute('data-index', i);
                i++;
            }
        };

        const deselectAnswers = () => {
            answertag.forEach(input => input.checked = false);
        };

        const getSelected = () => {
            let selectedIndex = null;
            answertag.forEach((input) => {
                if (input.checked) {
                    selectedIndex = parseInt(input.getAttribute('data-index'));
                }
            });
            return selectedIndex;
        };

        submitButton.addEventListener("click", () => {
            const selected = getSelected();
            if (selected !== null) {
                if (selected === quizData[currentQuestion].answer) {
                    score++;
                }
                currentQuestion++;

                if (currentQuestion < quizData.length) {
                    loadQuiz();
                } else {
                    document.querySelector(".quiz").innerHTML = `
                        <h2>You scored ${score} out of ${quizData.length}</h2>
                        <button class="btn" onclick="location.reload()">Restart Quiz</button>
                    `;
                }
            }
        });

        loadQuiz();