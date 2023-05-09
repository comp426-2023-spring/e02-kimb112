// This function shows and hides the shot selection in the interface based 
// on whether or not the #opponent checkbox is checked
function showHideShots() {
    // Get the info from the checkbox
          let check = document.getElementById('opponent');
    // Check if the checkbox is checked and show or hide options accordingly
        if (check.checked == true) {
    // Here, instead of just showing all of the options, use similar logic to 
    // check which of the game radio buttons is checked and show only those
    // options relevant to the game being selected (rps or rpsls). You can 
    // use similar jQuery 
            $('.shots').show()
        } else {
            $('.shots').hide()
        }
    }
    // This function clears the input form and also resets the shot selection
    // radio buttons. 
    function startOver () {
        document.getElementById('userinput').reset();
        showHideShots();
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