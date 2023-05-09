// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import { rps, rpsls } from "./rpsls.js";


// will need: show result, get u mode, get u input, then add event listeners to track and update on interaction

// show result ("find" result dynamically within function):
function show_result(outcome, play_opponent) {
    // first initialize result container
    const result_container = document.querySelector(".results");
    // opponent play message inner HTML
    if (play_opponent == true) {
        result_container.innerHTML = `
            <div class="result-summary">
                <span class="result-owner">Player:</span>
                <span class="result-output">${outcome.player}</span>
            </div>
            <div class="result-summary">
                <span class="result-owner">Opponent:</span>
                <span class="result-output">${outcome.opponent}</span>
            </div>
            <div class="result-summary">
                <span class="result-label">Result:</span>
                <span class="result-output">${outcome.result}<strong></span>
            </div>`;
    // single player message innerHTML
    } else {
        result_container.innerHTML = `
            <div class="result-summary">
                <span class="result-output"><strong>${outcome.player.toUpperCase()}<strong></span>
            </div>`;
    }
}

// create initial helpers to prepare for dynamic result display:

// establish input values:
// get user mode
function get_user_mode() {
    const user_mode_button = document.querySelector(".mode-selection:checked");
    return user_mode_button ? user_mode_button.getAttribute("id") : null;
}
// get user input
function get_user_input() {
    const user_selection_button = document.querySelector(".selections-button:checked");
    return user_selection_button ? user_selection_button.getAttribute("selection-summary") : null;
}

// now begin to add event listeners to produce the targetted dynamic result:
// start with DOM content function, use all my included doc content as arg
document.addEventListener("DOMContentLoaded", () => {
    // initialize buttons
    const start_over_button = document.querySelector(".start-over-button");
    const play_button = document.querySelector(".play-button");
    
    // create nested event listener for play button (activate on "click")
    play_button.addEventListener("click", () => {
        // initialize opponent? and mode? constants
        const play_opponent = document.getElementById("opponent").checked;
        const mode = get_user_mode();
        
        // game logic: call rps and rpsls from rpsls.js
        var outcome;
        if (mode == "rps") {
            if (play_opponent == true) {
                const user_selection = get_user_input();
                outcome = rps(user_selection)
            } else {
                outcome = rps();
            }
        } else if (mode == "rpsls") {
            if (play_opponent == true) {
                const user_selection = get_user_input();
                outcome = rpsls(user_selection);
            } else {
                outcome = rpsls();
            } 
        }

        // show result w/ new args
        show_result(outcome, play_opponent);

        // hide play button so that user will intuitively start over and not be frustrated by unexpected actions
        play_button.setAttribute("hidden", true);
    }); 
    
    // next step: give START OVER button functionality w/ event listener (on click):
    start_over_button.addEventListener("click", () => {
        const result_container = document.querySelector(".results");
        // keep container HTML blank unless causes problems? Do this for others that don't have valid HTML
        result_container.innerHTML = "";

        // reset buttons, prepare for inputs, and reset opponent checkbox (out of caution bc not really button)

        // loop through rps or rpsls selection buttons and reset them (like rock, paper, scissors, etc.)
        // leave rps or rpsls selected
        const user_selection_buttons = document.querySelectorAll(".selections-button");
        user_selection_buttons.forEach((b) => {
            b.checked = false;
        });
        
        // reset checkbox separately
        const opp_checkbox = document.getElementById("opponent");
        opp_checkbox.checked = false;
        
        // unhide play button on reset
        play_button.removeAttribute("hidden");
        
        // container for inputs, prepare container for final HTML to show (depending on rps or rpsls)
        const user_selection_buttons_container = document.querySelector(".inputs");
        user_selection_buttons_container.innerHTML = "";
    });

    // for mode,
    document.querySelectorAll(".mode-selection").forEach((user_mode_button) => {
        // add what will essentially be an observer, watching for button change
        user_mode_button.addEventListener("change", () => {
            const user_selection_buttons_container = document.querySelector(".inputs");
            const play_opponent = document.getElementById("opponent").checked;

            // if not playing opponent, essentially do nothing in this func (don't present move selection buttons in single player)
            if (play_opponent == false) {
                user_selection_buttons_container.innerHTML = "";
                return;
            }
    
            const mode = get_user_mode();
            if (mode == "rps") {
                user_selection_buttons_container.innerHTML = `
                    <input type="radio" class="selections-button" name="user-choice" value="rock" selection-summary="rock"> Rock
                    <input type="radio" class="selections-button" name="user-choice" value="paper" selection-summary="paper"> Paper
                    <input type="radio" class="selections-button" name="user-choice" value="scissors" selection-summary="scissors"> Scissors`;
            } else if (mode == "rpsls") {
                user_selection_buttons_container.innerHTML = `
                    <input type="radio" class="selections-button" name="user-choice" value="rock" selection-summary="rock"> Rock
                    <input type="radio" class="selections-button" name="user-choice" value="paper" selection-summary="paper"> Paper
                    <input type="radio" class="selections-button" name="user-choice" value="scissors" selection-summary="scissors"> Scissors
                    <input type="radio" class="selections-button" name="user-choice" value="lizard" selection-summary="lizard"> Lizard
                    <input type="radio" class="selections-button" name="user-choice" value="spock" selection-summary="spock"> Spock`;
            }
        });
    });
});