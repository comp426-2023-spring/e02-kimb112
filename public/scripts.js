import {rps, rpsls} from "./rpsls.js"

function show_result(shot, play_opponent) {
    const result_container = document.querySelector(".results");
    //playing against opponent
    if (play_opponent == true) {
        result_container.innerHTML = 
        `
        <div class="result-summary">
            <span>Player:</span>
            <span>${shot.player}</span>
        </div>
        <div class="result-summary">
            <span>Opponent:</span>
            <span>${shot.opponent}</span>
        </div>
        <div class="result-summary">
            <span>Result:</span>
            <span>${shot.result}</span>
        </div>
        `;
    }
    //no opponent
    else {
        result_container.innerHTML = 
        `
        <div class="result-summary">
            <span>Shot:</span>
            <span>${shot.player}</span>
        </div>
        `;
    }
}

function get_user_mode() {
    const user_mode_button = document.querySelector(".mode-selection:checked");
    return user_mode_button ? user_mode_button.getAttribute("id") : null;
}

function get_user_input() {
    const user_selection_button = document.querySelector(".selections-button:checked");
    return user_selection_button ? user_selection_button.getAttribute("selection-summary") : null;
}

document.addEventListener("DOMContentLoaded", () => {
    const start_over = document.querySelector(".start-over-button");
    const play = document.querySelector(".play-button");

    play.addEventListener("click", () => {
        const play_opponent = document.getElementById("opponent").checked;
        const mode = get_user_mode();
    })
})