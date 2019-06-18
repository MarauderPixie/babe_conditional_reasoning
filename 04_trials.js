// NOTE:
// I should shuffle the QUD ('simple' & 'additional') itself, similar as was done in the Simon-Task
// that way there are "only" 12 trials needed

const trials = {
    simple: [
        { // going to a play
            // QUD: "If she meets her friend then she will go to a play.",
            QUD: qud_example[0],
            question: `She meets her friend.
                       <br /><br />
                       Therefore...`,
            option1: "she will go to a play.",
            option2: "she will not go to a play.",
            option3: "she may or may not go to a play."
        },
        { 
            // QUD: "If she meets her friend then she will go to a play.",
            QUD: qud_example[0],
            question: `She does not meet her friend.
                       <br /><br />
                       Therefore...`,
            option1: "she will go to a play.",
            option2: "she will not go to a play.",
            option3: "she may or may not go to a play."
        },
        { 
            // QUD: "If she meets her friend then she will go to a play.",
            QUD: qud_example[0],
            question: `She will go to a play.
                       <br /><br />
                       Therefore...`,
            option1: "she meets her friend.",
            option2: "she does not meet her friend.",
            option3: "she may or may not meet her friend."
        },
        { 
            // QUD: "If she meets her friend then she will go to a play.",
            QUD: qud_example[0],
            question: `She will not go to a play.
                       <br /><br />
                       Therefore...`,
            option1: "she meets her friend.",
            option2: "she does not meet her friend.",
            option3: "she may or may not meet her friend."
        },
        { // studying in the library
            // QUD: "If she has an essay to write then she will study late in the library.",
            QUD: qud_example[1],
            question: `She has an essay to write.
                       <br /><br />
                       Therefore...`,
            option1: "she will study late in the library.",
            option2: "she will not study late in the library.",
            option3: "she may or may not study late in the library."
        },
        {
            // QUD: "If she has an essay to write then she will study late in the library.",
            QUD: qud_example[1],
            question: `She does not have an essay to write.
                       <br /><br />
                       Therefore...`,
            option1: "she will study late in the library.",
            option2: "she will not study late in the library.",
            option3: "she may or may not study late in the library."
        },
        {
            // QUD: "If she has an essay to write then she will study late in the library.",
            QUD: qud_example[1],
            question: `She will study late in the library.
                       <br /><br />
                       Therefore...`,
            option1: "she has an essay to write.",
            option2: "she does not have an essay to write.",
            option3: "she may or may not have an essay to write."
        },
        {
            // QUD: "If she has an essay to write then she will study late in the library.",
            QUD: qud_example[1],
            question: `She will not study late in the library.
                       <br /><br />
                       Therefore...`,
            option1: "she has an essay to write.",
            option2: "she does not have an essay to write.",
            option3: "she may or may not have an essay to write."
        },
        { // getting wet
            // QUD: "If it is raining then she will get wet.",
            QUD: qud_example[2],
            question: `It is raining.
                       <br /><br />
                       Therefore...`,
            option1: "she will get wet.",
            option2: "she will not get wet.",
            option3: "she may or may not get wet."
        },
        { 
            // QUD: "If it is raining then she will get wet.",
            QUD: qud_example[2],
            question: `It is not raining.
                       <br /><br />
                       Therefore...`,
            option1: "she will get wet.",
            option2: "she will not get wet.",
            option3: "she may or may not get wet."
        },
        { 
            // QUD: "If it is raining then she will get wet.",
            QUD: qud_example[2],
            question: `She will get wet.
                       <br /><br />
                       Therefore...`,
            option1: "it is raining.",
            option2: "it is not raining.",
            option3: "it may or may not be raining."
        },
        { 
            // QUD: "If it is raining then she will get wet.",
            QUD: qud_example[2],
            question: `She will not get wet.
                       <br /><br />
                       Therefore...`,
            option1: "it is raining.",
            option2: "it is not raining.",
            option3: "it may or may not be raining."
        }
    ]
};
