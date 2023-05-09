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