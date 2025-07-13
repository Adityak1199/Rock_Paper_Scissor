    let userScore = 0;
    let computerScore = 0;

    const choices = document.querySelectorAll(".choice");
    const playerScoreSpan = document.getElementById("player-score");
    const computerScoreSpan = document.getElementById("computer-score");
    const resultMessage = document.getElementById("result-message");

    const getComputerChoice = () => {
      const options = ["rock", "paper", "scissors"];
      const randomNumber = Math.floor(Math.random() * options.length);
      return options[randomNumber];
    };

    const determineWinner = (user, computer) => {
      if (user === computer) return "draw";
      if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
      ) {
        return "user";
      }
      return "computer";
    };

const updateUI = (winner, userChoice, computerChoice) => {
  // Show "User vs Computer" layout
  const vsContainer = document.getElementById("vs-container");
  vsContainer.innerHTML = `
    <div class="flex flex-col items-center bg-gray-200 p-4 rounded-xl shadow-md">
      <p class="text-lg font-semibold mb-2">You chose:</p>
      <img src="${imageMap[userChoice]}" alt="${userChoice}" class="w-24 h-24 rounded-full opacity-100" />
      <span class="mt-2 text-xl font-bold capitalize">${userChoice}</span>
    </div>

    <p class="text-3xl font-bold text-gray-600">VS</p>

    <div class="flex flex-col items-center bg-gray-200 p-4 rounded-xl shadow-md">
      <p class="text-lg font-semibold mb-2">Computer chose:</p>
      <img src="${imageMap[computerChoice]}" alt="${computerChoice}" class="w-24 h-24 rounded-full opacity-100" />
      <span class="mt-2 text-xl font-bold capitalize">${computerChoice}</span>
    </div>
  `;

  // Show result message + score update
  if (winner === "draw") {
    resultMessage.textContent = `It's a draw! You both chose ${userChoice}.`;
    resultMessage.className = "text-yellow-700 font-bold text-lg text-center mt-4";
  } else if (winner === "user") {
    userScore++;
    playerScoreSpan.textContent = userScore;
    resultMessage.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    resultMessage.className = "text-green-700 font-bold text-lg text-center mt-4";
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultMessage.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    resultMessage.className = "text-red-700 font-bold text-lg text-center mt-4";
  }
};


    const playGame = (userChoice) => {
      const computerChoice = getComputerChoice();
      const winner = determineWinner(userChoice, computerChoice);
      updateUI(winner, userChoice, computerChoice);
    };
    const imageMap = {
    rock: "/images/rock.jpg",
    paper: "/images/paper.jpg",
    scissors: "/images/scissor.jpg"
   };
  
    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
      });
    });