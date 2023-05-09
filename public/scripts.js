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

        var move;
        if (mode == "rps") {
            if (play_opponent == true) {
                const user_selection = get_user_input();
                move = rps(user_selection)
            } else {
                shot = rps();
            }
        } else if (mode = "rpsls") {
            if (play_opponent == true) {
                const user_selection = get_user_input();
                shot = rpsls(user_selection);
            } else {
                shot = rpsls();
            }
        }
        show_result(move, play_opponent)
    });

    start_over.addEventListener("click", () => {
        const result_container = document.querySelector(".results");
        result_container.innerHTML = "";
        const user_selection_buttons = document.querySelectorAll(".selections-button");
        user_selection_buttons.forEach((b) => {
            b.checked = false;
        });

        const opponent_checkbox = document.getElementById("opponent");
        opponent_checkbox.checked = false;

        play.removeAttribute("hidden");

        const user_selection_buttons_container = document.querySelector(".inputs");
        user_selection_buttons_container.innerHTML = "";
    });

    document.querySelectorAll(".mode-selection").forEach((user_mode_button) => {
        user_mode_button.addEventListener("change", () => {
            const user_selection_buttons_container = document.querySelector(".inputs");
            const play_opponent = document.getElementById("opponent").checked;

            if (play_opponent == false) {
                user_selection_buttons_container.innerHTML = "";
                return;
            }

            const mode = get_user_mode();
            if (mode = "rps") {
                user_selection_buttons_container.innerHTML =
                `
                <input type="radio" class="selections-button" name="user-choice" value="rock" selection-summary="rock"> Rock
                <br />
                <input type="radio" class="selections-button" name="user-choice" value="paper" selection-summary="rock"> Paper
                <br />
                <input type="radio" class="selections-button" name="user-choice" value="scissors selection-summary="rock"> Scissors
                <br />
                `;
            }
            else if (mode = "rpsls") {
                user_selection_buttons_container.innerHTML =
                `
                <input type="radio" class="selections-button" name="user-choice" value="rock" selection-summary="rock"> Rock
                <br />
                <input type="radio" class="selections-button" name="user-choice" value="paper" selection-summary="rock"> Paper
                <br />
                <input type="radio" class="selections-button" name="user-choice" value="scissors selection-summary="rock"> Scissors
                <br />
                <input type="radio" class="selections-button" name="user-choice" value="lizard" selection-summary="rock"> Lizard
                <br />
                <input type="radio" class="selections-button" name="user-choice" value="spock" selection-summary="rock"> Spock
                <br />
                `;
            }
        })
    })
})