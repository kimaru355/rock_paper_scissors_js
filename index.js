function endGame(pc, user, outcome) {
  let message;
  if (outcome === "tie") {
    message = `You picked ${user}. Pc picked ${pc}. It's a tie`;
  } else {
    message = `You picked ${user}. Pc picked ${pc}.${outcome} is the winner`;
  }
  showWinner = document.getElementById("outcome");
  showWinner.innerHTML = `<h1>${message}</h1>`;
}

function checkWinner(pc, user) {
  if (user === "rock" && pc === "scissors") {
    return "user";
  } else if (user === "paper" && pc === "rock") {
    return "user";
  } else if (user === "scissors" && pc === "paper") {
    return "user";
  } else {
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
