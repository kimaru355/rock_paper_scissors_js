const buttons = document.querySelectorAll("button");
let userScore = 0;
let pcScore = 0;
let h1 = document.createElement("h1");
let score = document.createElement("h1");
let result = document.createElement("h1");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});

function endGame(pc, user, outcome) {
  let message;
  if (outcome === "tie") {
    message = `You picked ${user}. Pc picked ${pc}. It's a tie`;
  } else {
    message = `You picked ${user}. Pc picked ${pc}.${outcome} is the winner`;
  }
  showOutcome = document.querySelector("#outcome");
  try {
    showOutcome.removeChild(result);
  } catch (e) {
    // attempt to remove result from previous game
  }
  h1.textContent = message;
  showOutcome.appendChild(h1);
  score.textContent = `You have ${userScore} points. pc has ${pcScore} points.`;
  showOutcome.appendChild(score);
  if (pcScore == 5 || userScore == 5) {
    if (userScore > pcScore) {
      result.textContent = "You have won";
      showOutcome.appendChild(result);
    } else {
      result.textContent = "Pc has won";
      showOutcome.appendChild(result);
    }
    pcScore = 0;
    userScore = 0;
  }
}

function checkWinner(pc, user) {
  if (user === "rock" && pc === "scissors") {
    userScore += 1;
    return "user";
  } else if (user === "paper" && pc === "rock") {
    userScore += 1;
    return "user";
  } else if (user === "scissors" && pc === "paper") {
    userScore += 1;
    return "user";
  } else {
    pcScore += 1;
    return "pc";
  }
}

function game(user) {
  let pc = Math.ceil(Math.random(3) * 3);
  if (pc === 1) {
    pc = "rock";
  } else if (pc === 2) {
    pc = "paper";
  } else {
    pc = "scissors";
  }
  if (pc === user) {
    endGame(pc, user, "tie");
  } else {
    winner = checkWinner(pc, user);
    endGame(pc, user, winner);
  }
}
