//rock-paper-scissors
export function rps(shot) {
    const elements = [ 'rock','paper','scissors'];

    if (shot == null) {
        var random_element = Math.floor(Math.random() * 3);
        var random_element_move = elements[random_element];
        return {player:random_element_move};
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
        console.log(`Rules for Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`);
        process.exit(1);
    }

    var opponent_random_element = Math.floor(Math.random() * 3);
    const opponent_shot = elements[opponent_random_element];

    var result;
    //compare player vs opponent
    if (shot == opponent_shot) {
        result = "tie";
    } else if 
        (shot == "scissors" && opponent_shot == "paper" ||
         shot == "paper" && opponent_shot == "rock" ||
         shot == "rock" && opponent_shot == "scissors") {
        result = "win";
    } else {
        result = "lose";
    }

    return {player:shot, opponent:opponent_shot, result:result};
}

//rock-paper-scissors-lizard-spock
export function rpsls(shot) {
    const elements = [ 'rock','paper','scissors','lizard','spock'];
    
    if (shot == null) {
        var random_element = Math.floor(Math.random() * 5);
        var random_element_move = elements[random_element];
        return {player:random_element_move};
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
        console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`);
        process.exit(1);
    }

    var opponent_random_element = Math.floor(Math.random() * 5);
    const opponent_shot = elements[opponent_random_element];

    var result;
    //compare player vs opponent
    if (shot == opponent_shot) {
        result = "tie";
    } else if 
        (shot == "scissors" && (opponent_shot == "paper" || opponent_shot == "lizard") ||
         shot == "paper" && (opponent_shot == "rock" || opponent_shot == "spock") ||
         shot == "rock" && (opponent_shot == "scissors" || opponent_shot == "lizard") ||
         shot == "lizard" && (opponent_shot == "spock" || opponent_shot == "paper") || 
         shot == "spock" && (opponent_shot == "scissors" || opponent_shot == "rock")) {
        result = "win";
    } else {
        result = "lose";
    }

    return {player:shot, opponent:opponent_shot, result:result};
}