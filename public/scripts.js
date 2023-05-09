import {rps, rpsls} from "./rpsls.js"

function show_result(shot, play_opponent) {
    const result_container = document.querySelector(".results");
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
        `
    }
}

    
    async function playGame () {
        // Get which game is being played based on the value in the form
        let game = $('input[type=radio][name=game]:checked').val();
        // Get which shot is being played based on the value in the form
        let shot = $('input[type=radio][name=shot]:checked').val();
        // Identify the base URL based on browser information
        let baseurl = window.location.href + 'app/'
        // Log the base URL
        console.log(baseurl)
        // This constructs a URL for the opponent option ONLY. To incorporate
        // the other option, you can use a conditional to change the URL based
        // on what is selected. You could also write separate functions, or use
        // a conditional somewhere above in this function to construct the 
        // correct URL
        let url = baseurl + game + '/play/' + shot
        // Log the full URL
        console.log(url)	
    
        let response = await fetch(url)
        let result = await response.json()
        // Log the result
        console.log(result)
        // Here you should include code that uses the DOM API or jQuery to 
        // manipulate another block of HTML in the interface to display the 
        // results in some way. 
    }