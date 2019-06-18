// In this file you can specify the trial data for your experiment


const trial_info = {
    simple: [
        {
            QUD: "If she has an essay to write, then she will study late in the library.<br><br>She has an essay to write.<br>Therefore, she will study late in the library.",
            question: "Do you accept this conclusion?",
            option1: yes,
            option2: no,
            option3: "maybe",
            correct: yes
        },
        {
            QUD: "If she meets her friend then she will go to a play.",
            question: "Do you accept this conclusion?",
            option1: yes,
            option2: no,
            option3: "maybe",
            correct: yes
        },
        {
            QUD: "If it is raining then she will get wet.",
            question: "Do you accept this conclusion?",
            option1: yes,
            option2: no,
            option3: "maybe",
            correct: yes
        }
    ],
    additional: [
        {
            QUD: "If she has an essay to write, then she will study late in the library.<br>If the library stays open, then she will study in the library.<br><br>She has an essay to write.<br>Therefore, she will study late in the library.",
            question: "Do you accept this conclusion?",
            option1: yes,
            option2: no,
            correct: yes
        },
        {
            QUD: "If she meets her friend then she will go to a play.<br>If she has enough money then she will go to a play.",
            question: "Do you accept this conclusion?",
            option1: yes,
            option2: no,
            correct: yes
        },
        {
            QUD: "If it is raining then she will get wet.<br>If she goes out for a walk",
            question: "Do you accept this conclusion?",
            option1: yes,
            option2: no,
            correct: yes
        }
    ]
};
