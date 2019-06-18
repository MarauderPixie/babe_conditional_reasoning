const conditionals = {
    simple: [
        {
            play: "If she meets her friend then she will go to a play.",
            library: "If she has an essay to write then she will study late in the library.",
            wet: "If it is raining then she will get wet."
        }
    ],
    additional: [
        {
            play: `If she meets her friend then she will go to a play.
                   <br>
                   If she has enough money then she will go to a play.`,
            library: `If she has an essay to write then she will study late in the library.
                      <br>
                      If the library stays open then she will study late in the library.`,
            wet: `If it is raining then she will get wet.
                  <br>
                  If she goes for a walk then she will get wet.`
        }
    ]
};


const ABC = {
    play: [
        {
            pre_a: "she meets her friend.",
            pre_b: "she does not meet her friend.",
            pre_c: "she may or may not meet her friend.",
            ante_a: "she will go to a play.",
            ante_b: "she will not go to a play.",
            ante_c: "she may or may not go to a play."
        }
    ],
    library: [
        {
            pre_a: "she has an essay to write.",
            pre_b: "she does not have an essay to write.",
            pre_c: "she may or may not have an essay to write.",
            ante_a: "she will study late in the library.",
            ante_b: "she will not study late in the library.",
            ante_c: "she may or may not study late in the library."
        }
    ],
    wet: [
        {
            pre_a: "it is raining.",
            pre_b: "it is not raining.",
            pre_c: "it may or may not be raining.",
            ante_a: "she will get wet.",
            ante_b: "she will not get wet.",
            ante_c: "she may or may not get wet."
        }
    ]
};

const trials = {
    simple: [
        { // going to a play
            QUD: `${conditionals.simple.play}<br /><br />${ABC.play.ante_a}`,
            question: "Therefore...",
            option1: ABC.play.pre_a,
            option2: ABC.play.pre_b,
            option3: ABC.play.neither
        }
    ]
}




/*
######################################
if (coin == "head") {
    frame = conditionals.simple
} else {
    frame = conditionals.additional
}

for (i, j in frame, ABC) {
        for (k in j) { // j=1 <-> ABC.play
            tr_inf += {
                QUD: `${i}<br><br>${k}`,
                question: "Therefore...",
                option1: k.pre_a ? k.pre_a : k.ante_a,
                option2: k.pre_b ? k.pre_b : k.ante_b,
                option3: k.neither
            }
        }
}
######################################


const alt = {
    play = {
        pre: [
            {
                a: "she meets her friend.",
                b: "she does not meet her friend.",
                c: "she may or may not meet her friend."
            }
        ],
        ante: [
            {
                a: "she will go to a play.",
                b: "she will not go to a play.",
                c: "she may or may not go to a play."
            }
        ]
    },
    library = {
        pre: [
            {
                a: "she has an essay to write.",
                b: "she does not have an essay to write.",
                c: "she may or may not have an essay to write."
            }
        ],
        ante: [
            {
                a: "she will study late in the library.",
                b: "she will not study late in the library.",
                c: "she may or may not study late in the library."
            }
        ]        
    },
    wet = {
        pre: [
            {
                a: "it is raining.",
                b: "it is not raining.",
                c: "it may or may not be raining."
            } 
        ],
        ante: [
            {
                a: "she will get wet.",
                b: "she will not get wet.",
                c: "she may or may not get wet."
            }
        ]
    }
};
*/