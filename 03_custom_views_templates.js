// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information

const custom_answers = {
    three_sentence_choice: function(config, CT) {
        return `<div class='babe-view-answer-container'>
                    <p class='babe-view-question'>${config.data[CT].question}</p>
                    <label for='s1' class='babe-response-sentence'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='s1' value="${config.data[CT].option1}" />
                    <label for='s2' class='babe-response-sentence'>${config.data[CT].option2}</label>
                    <input type='radio' name='answer' id='s2' value="${config.data[CT].option2}" />
                    <label for='s3' class='babe-response-sentence'>${config.data[CT].option3}</label>
                    <input type='radio' name='answer' id='s3' value="${config.data[CT].option3}" />
                </div>`;
            },
    demographics: function(config, CT) {
                const quest = babeUtils.view.fill_defaults_post_test(config);
                return `<form>
                            <p class='babe-view-text'>
                                <label for="age">${quest.age.title}:</label>
                                <input type="number" name="age" min="18" max="110" id="age" />
                            </p>
                            <p class='babe-view-text'>
                                <label for="gender">${quest.gender.title}:</label>
                                <select id="gender" name="gender">
                                    <option></option>
                                    <option value="${quest.gender.male}">${quest.gender.male}</option>
                                    <option value="${quest.gender.female}">${quest.gender.female}</option>
                                    <option value="${quest.gender.other}">${quest.gender.other}</option>
                                </select>
                            </p>
                            <p class='babe-view-text'>
                                <label for="education">${quest.edu.title}:</label>
                                <select id="education" name="education">
                                    <option></option>
                                    <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                                    <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                                    <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                                </select>
                            </p>
                            <p class='babe-view-text'>
                                <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                                <input type="text" id="languages"/>
                            </p>
                            <p class="babe-view-text">
                                <label for="comments">${quest.comments.title}</label>
                                <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                            </p>
                            <button id="next" class='babe-view-button'>${config.button}</button>
                    </form>`
            }        
    };
