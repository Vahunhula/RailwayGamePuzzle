const titleElement = document.querySelector("#title");
const playerNameInput = document.querySelector("#playerName");
const difficultyButtons = document.querySelectorAll(".difficulty-button");
const rulesButton = document.querySelector("#rulesButton");
const startButton = document.querySelector("#startButton");
const difficultyPrompt = document.querySelector("#difficultyPrompt");
const rulesModal = document.querySelector("#rules-modal");
const rulesCloseButton = document.querySelector("#rules-close");
const menuScreen = document.querySelector(".menu-screen");
const gameScreen = document.querySelector(".game-screen");
const displayPlayerName = document.querySelector("#displayPlayerName");
const elapsedTimeDisplay = document.querySelector("#elapsedTime");
const gameMap = document.querySelector("#gameMap");
const backButton = document.querySelector("#backButton");
const resetButton = document.querySelector("#resetButton");
let currentTime;
let waterTileCount = 0;
let allTileCount;
let target;
let isNameEntered = false;
let isDifficultySelected = false;
let timerInterval = null;
let mapGrid;
let railsMap = [];
let designerName;
let playerName = "";
let seconds = 0;
let minutes = 0;
let leaderboardData = [];
let diff = "";

titleElement.textContent = menuData.menuText.title;
playerNameInput.placeholder = menuData.menuText.playerPrompt;
difficultyPrompt.textContent = menuData.menuText.difficultyPrompt;
rulesButton.textContent = menuData.menuText.rulesButton;
startButton.textContent = menuData.menuText.startButton;

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    difficultyButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");

    const size = button.getAttribute("data-size");
    menuData.currentDifficulty = menuData.difficulties.find(
      (d) => d.size === parseInt(size)
    );

    isDifficultySelected = true;
    updateStartButtonState();
  });
});
backButton.addEventListener("click", () => {
  gameScreen.style.display = "none";
  menuScreen.style.display = "block";
  clearInterval(timerInterval);
  timerInterval = null;
});
resetButton.addEventListener("click", () => {
  resetGame();
  clearLeaderboard();
});
function resetGame() {
  waterTileCount = 0;
  initializeMap(menuData.currentDifficulty.size);
  railCount = 0;
  resetTimer();
}
playerNameInput.addEventListener("input", () => {
  isNameEntered = playerNameInput.value.trim() !== "";
  updateStartButtonState();
});
function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  seconds = 0;
  minutes = 0;

  timerInterval = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    elapsedTimeDisplay.textContent = `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

function updateStartButtonState() {
  startButton.disabled = !(isNameEntered && isDifficultySelected);
  startButton.classList.toggle(
    "enabled",
    isNameEntered && isDifficultySelected
  );
}

rulesButton.addEventListener("click", () => {
  rulesModal.classList.add("visible");
});

rulesCloseButton.addEventListener("click", () => {
  rulesModal.classList.remove("visible");
});
seconds = 0;
minutes = 0;
startButton.addEventListener("click", () => {
  playerName = playerNameInput.value.trim();
  displayPlayerName.textContent = playerName;
  loadLeaderboard();
  console.log(playerName);

  menuScreen.style.display = "none";
  gameScreen.style.display = "flex";

  initializeMap(menuData.currentDifficulty.size);

  timerInterval = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    elapsedTimeDisplay.textContent = `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
});
designerName = playerName;
let selectedMapName = "";
function initializeMap(size) {
  gameMap.innerHTML = "";
  railsMap = [];

  if (size === 5) {
    const mapIndex = Math.floor(Math.random() * 5) + 1;
    selectedMapName = `map${mapIndex}`;
    mapGrid = mapGrid1[selectedMapName];
    allTileCount = 25;
    diff = "Easy";
  } else {
    const mapIndex = Math.floor(Math.random() * 5) + 1;
    selectedMapName = `hardMap${mapIndex}`;
    mapGrid = mapGrid2[selectedMapName];
    allTileCount = 49;
    diff = "Hard";
  }

  console.log(`Selected Map: ${selectedMapName}`);
  railsMap = Array.from({ length: size }, () => Array(size).fill(0));

  gameMap.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gameMap.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  mapGrid.forEach((row) => {
    row.forEach((cell) => {
      if (cell.type === TILE_TYPES.WITH_WATER) {
        waterTileCount++;
      }
      const cellElement = document.createElement("div");
      cellElement.classList.add("map-cell");

      switch (cell.type) {
        case TILE_TYPES.WITH_ROCKS:
          cellElement.style.backgroundImage = `url('${TILE_IMAGES.WITH_ROCKS}')`;
          if (cell.o === "270") cellElement.style.transform = "rotate(270deg)";
          else if (cell.o === "180")
            cellElement.style.transform = "rotate(180deg)";
          else if (cell.o === "90")
            cellElement.style.transform = "rotate(90deg)";
          break;
        case TILE_TYPES.WITH_WATER:
          cellElement.style.backgroundImage = `url('${TILE_IMAGES.WITH_WATER}')`;
          break;
        case TILE_TYPES.WITH_BRIDGE:
          cellElement.style.backgroundImage = `url('${TILE_IMAGES.WITH_BRIDGE}')`;
          break;
        case TILE_TYPES.WITH_BRIDGE_HORIZONTAL:
          cellElement.style.backgroundImage = `url('${TILE_IMAGES.WITH_BRIDGE_HORIZONTAL}')`;
          break;
        default:
          cellElement.style.backgroundImage = `url('${TILE_IMAGES.EMPTY}')`;
          break;
      }

      gameMap.appendChild(cellElement);
    });
  });

  console.log(waterTileCount);
  console.log(allTileCount);
  console.log((target = allTileCount - waterTileCount));
}

target = allTileCount - waterTileCount;
const railContainer = document.querySelector("#railContainer");

let draggedRail = null;
let isDragging = false;
let offsetX, offsetY;
let holdTimeout = null;

const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modal-message");
const modalCloseButton = document.querySelector("#modal-close");

function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = "block";
}

modalCloseButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
let railCount = 0;

function initializeRails() {
  Object.keys(RAILS).forEach((railType) => {
    const railElement = document.createElement("img");
    railElement.src = RAILS[railType];
    railElement.alt = RAIL_TYPES[railType];
    railElement.classList.add("rail-tile");
    railElement.dataset.type = RAIL_TYPES[railType];
    railElement.rotation = 0;

    railElement.addEventListener("click", () => {
      railElement.rotation = (railElement.rotation + 90) % 360;
      railElement.style.transform = `rotate(${railElement.rotation}deg)`;
      console.log(railElement.rotation);
    });

    railElement.addEventListener("mousedown", (e) => {
      e.preventDefault();

      draggedRail = railElement;
      isDragging = false;
      holdTimeout = setTimeout(() => {
        isDragging = true;

        const rect = draggedRail.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        draggedRail.style.position = "absolute";
        draggedRail.style.zIndex = "1000";
        draggedRail.style.pointerEvents = "none";

        document.addEventListener("mousemove", onMouseMove);
      }, 500);
    });

    railElement.addEventListener("mouseup", () => {
      clearTimeout(holdTimeout);
    });

    railContainer.appendChild(railElement);
  });
}

function onMouseMove(e) {
  if (isDragging && draggedRail) {
    draggedRail.style.left = `${e.clientX - offsetX}px`;
    draggedRail.style.top = `${e.clientY - offsetY}px`;
  }
}
let railToPlace;
document.addEventListener("mouseup", (e) => {
  if (isDragging && draggedRail) {
    isDragging = false;

    const mapRect = gameMap.getBoundingClientRect();
    const cellSize = mapRect.width / menuData.currentDifficulty.size;

    const x = e.clientX - mapRect.left;
    const y = e.clientY - mapRect.top;

    const row = Math.floor(y / cellSize);
    const col = Math.floor(x / cellSize);

    if (
      row < 0 ||
      row >= menuData.currentDifficulty.size ||
      col < 0 ||
      col >= menuData.currentDifficulty.size
    ) {
      showModal("Please place the rail within the map.");
      resetDraggedRail();
      return;
    }

    const mapCell =
      gameMap.children[row * menuData.currentDifficulty.size + col];
    if (mapCell.querySelector(".rail-tile")) {
      showModal("A rail is already placed here.");
      resetDraggedRail();
      return;
    }

    let targetTile;
    if (menuData.currentDifficulty.size === 5) {
      targetTile = mapGrid1[selectedMapName][row][col];
    } else {
      targetTile = mapGrid2[selectedMapName][row][col];
    }

    if (
      (targetTile.type === TILE_TYPES.WITH_BRIDGE ||
        targetTile.type === TILE_TYPES.WITH_BRIDGE_HORIZONTAL) &&
      draggedRail.dataset.type === "curveRail"
    ) {
      showModal("Cannot place curve rail on bridge.");
      resetDraggedRail();
      return;
    } else if (
      (targetTile.type === TILE_TYPES.WITH_BRIDGE ||
        targetTile.type === TILE_TYPES.WITH_BRIDGE_HORIZONTAL) &&
      draggedRail.dataset.type === "straightRail"
    ) {
      if (
        targetTile.type === TILE_TYPES.WITH_BRIDGE_HORIZONTAL &&
        draggedRail.rotation === 0
      ) {
        draggedRail.rotation = 90;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.BRIDGE_RAIL;
        railsMap[row][col] = "bridgeRailHorizontal";
      } else if (
        targetTile.type === TILE_TYPES.WITH_BRIDGE_HORIZONTAL &&
        draggedRail.rotation === 180
      ) {
        draggedRail.rotation = 270;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.BRIDGE_RAIL;
        railsMap[row][col] = "bridgeRailHorizontal";
      } else if (
        targetTile.type === TILE_TYPES.WITH_BRIDGE_HORIZONTAL &&
        draggedRail.rotation === 90
      ) {
        draggedRail.rotation = 90;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.BRIDGE_RAIL;
        railsMap[row][col] = "bridgeRailHorizontal";
      } else if (
        targetTile.type === TILE_TYPES.WITH_BRIDGE_HORIZONTAL &&
        draggedRail.rotation === 270
      ) {
        draggedRail.rotation = 270;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.BRIDGE_RAIL;
        railsMap[row][col] = "bridgeRailHorizontal";
      } else if (
        targetTile.type === TILE_TYPES.WITH_BRIDGE &&
        draggedRail.rotation === 90
      ) {
        draggedRail.rotation = 0;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.BRIDGE_RAIL;
        railsMap[row][col] = "bridgeRail";
      } else if (
        targetTile.type === TILE_TYPES.WITH_BRIDGE &&
        draggedRail.rotation === 270
      ) {
        draggedRail.rotation = 180;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.BRIDGE_RAIL;
        railsMap[row][col] = "bridgeRail";
      } else {
        railToPlace = PLACED_RAILS.BRIDGE_RAIL;
        railsMap[row][col] = "bridgeRail";
      }
    } else if (
      targetTile.type === TILE_TYPES.WITH_ROCKS &&
      draggedRail.dataset.type === "curveRail"
    ) {
      if (targetTile.o === "90") {
        draggedRail.rotation = 0;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.ROCKS_RAIL;
        railsMap[row][col] = "rocksRail90";
      } else if (targetTile.o === "180") {
        draggedRail.rotation = 0;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.ROCKS_RAIL;
        railsMap[row][col] = "rocksRail180";
      } else if (targetTile.o === "270") {
        draggedRail.rotation = 0;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.ROCKS_RAIL;
        railsMap[row][col] = "rocksRail270";
      } else {
        draggedRail.rotation = 0;
        draggedRail.style.transform = `rotate(${draggedRail.rotation}deg)`;
        railToPlace = PLACED_RAILS.ROCKS_RAIL;
        railsMap[row][col] = "rocksRail";
      }
    } else if (
      targetTile.type === TILE_TYPES.WITH_ROCKS &&
      draggedRail.dataset.type === "straightRail"
    ) {
      showModal("Cannot place straight rail on a mountain.");
      resetDraggedRail();
      return;
    } else if (targetTile.type === TILE_TYPES.WITH_WATER) {
      showModal("Cannot place on oasis.");
      resetDraggedRail();
      return;
    } else {
      railToPlace = draggedRail.src;
      if (draggedRail.dataset.type === "straightRail") {
        if (draggedRail.rotation === 0 || draggedRail.rotation === 180) {
          railsMap[row][col] = "bridgeRail";
        } else if (
          draggedRail.rotation === 90 ||
          draggedRail.rotation === 270
        ) {
          railsMap[row][col] = "bridgeRailHorizontal";
        }
      } else if (draggedRail.dataset.type === "curveRail") {
        if (draggedRail.rotation === 0) {
          railsMap[row][col] = "rocksRail";
        } else if (draggedRail.rotation === 90) {
          railsMap[row][col] = "rocksRail90";
        } else if (draggedRail.rotation === 180) {
          railsMap[row][col] = "rocksRail180";
        } else if (draggedRail.rotation === 270) {
          railsMap[row][col] = "rocksRail270";
        }
      }
    }
    console.log(draggedRail.dataset.type);
    console.log(targetTile.type);

    placedRail = document.createElement("img");
    placedRail.src = railToPlace;
    placedRail.style.transform = draggedRail.style.transform;
    placedRail.classList.add("rail-tile");
    placedRail.dataset.o = draggedRail.rotation.toString();

    placedRail.style.width = `${cellSize}px`;
    placedRail.style.height = `${cellSize}px`;

    mapCell.appendChild(placedRail);
    railCount++;
    console.log("Rail count:", railCount);

    console.log("RailsMap:", railsMap);

    placedRail.addEventListener("click", () => {
      railsMap[row][col] = 0;
      gameMap.children[row * menuData.currentDifficulty.size + col].innerHTML =
        "";
      railCount--;

      console.log(railsMap);
      console.log("Rail count:", railCount);
    });
    updateAndLogTime();
    console.log(railCount);

    console.log(`Current Time: ${currentTime}`);
    if (railCount === target) {
      gameFinished();
    }
    resetDraggedRail();
  }
});

function resetDraggedRail() {
  if (draggedRail) {
    draggedRail.style.position = "";
    draggedRail.style.zIndex = "";
    draggedRail.style.pointerEvents = "auto";
    draggedRail.style.left = "";
    draggedRail.style.top = "";
  }
  draggedRail = null;
}

initializeRails();

function allRailsPlaced() {
  if (railCount === target) {
    return true;
  } else {
    return false;
  }
}
function gameFinished() {
  if (railCount === target) {
    if (allRailsPlaced() && noTrack() && isRailMapValid(railsMap)) {
      addPlayerToLeaderboard(playerName, currentTime, diff);
      showModal(
        `Congratulation! ${playerName} You have successfully completed the game! in : ${currentTime},`
      );
      showLeaderboardModal();
      resetGame();
    }
  } else {
    showModal(
      "Not all rails have been placed or every cell where no track can be placed is not empty."
    );
  }
}

function logCurrentTime() {
  console.log(currentTime);
}

function noTrack() {
  const mapCells = gameMap.children;
  for (let i = 0; i < mapCells.length; i++) {
    const cell = mapCells[i];
    const rail = cell.querySelector(".rail-tile");

    if (rail && cell.style.backgroundImage.includes(TILE_IMAGES.WITH_WATER)) {
      return false;
    }
  }
  return true;
}

const exits = {
  bridgeRail: { top: true, bottom: true },
  bridgeRailHorizontal: { left: true, right: true },
  rocksRail: { bottom: true, right: true },
  rocksRail90: { bottom: true, left: true },
  rocksRail180: { top: true, left: true },
  rocksRail270: { top: true, right: true },
  0: {},
};

const oppositeDirection = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

function isRailMapValid(railMap) {
  const rows = railMap.length;
  const cols = railMap[0].length;

  function areExitsAligned(tile, direction, neighborTile) {
    return (
      exits[tile][direction] &&
      exits[neighborTile][oppositeDirection[direction]]
    );
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const tile = railMap[row][col];

      if (tile === 0) continue;

      const neighbors = {
        top: row > 0 ? railMap[row - 1][col] : null,
        bottom: row < rows - 1 ? railMap[row + 1][col] : null,
        left: col > 0 ? railMap[row][col - 1] : null,
        right: col < cols - 1 ? railMap[row][col + 1] : null,
      };

      for (const [direction, neighborTile] of Object.entries(neighbors)) {
        if (exits[tile][direction]) {
          if (
            neighborTile === 0 ||
            !neighborTile ||
            !areExitsAligned(tile, direction, neighborTile)
          ) {
            return false;
          }
        }
      }
    }
  }

  return true;
}

function updateAndLogTime() {
  currentTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}
const leaderModal = document.querySelector("#leaderModal");
const closeModal = document.querySelector("#closeModal");
const leaderboardContent = document.querySelector("#leaderboardContent");
const restartGame = document.querySelector("#restartGame");

function showLeaderboardModal(playerName, time, difficulty) {
  leaderboardContent.innerHTML = leaderboardData
    .sort((a, b) => a.time - b.time)
    .map(
      (entry) =>
        `<p>${entry.playerName} - ${entry.time} seconds - ${entry.difficulty}</p>`
    )
    .join("");
  leaderModal.style.display = "block";
}

closeModal.addEventListener("click", () => {
  leaderModal.style.display = "none";
});

restartGame.addEventListener("click", () => {
  leaderModal.style.display = "none";
  resetGame();
});

function addPlayerToLeaderboard(playerName, time, difficulty) {
  const [minutes, seconds] = time.split(":").map(Number);
  const totalTimeInSeconds = minutes * 60 + seconds;

  leaderboardData.push({ playerName, time: totalTimeInSeconds, difficulty });

  leaderboardData.sort((a, b) => a.time - b.time);
  updateLeaderboardModal();
  saveLeaderboard();
}

function updateLeaderboardModal() {
  leaderboardContent.innerHTML = "";

  leaderboardData.forEach((entry, index) => {
    const entryElement = document.createElement("p");
    entryElement.textContent = `${index + 1}. ${entry.name} - ${entry.time}s (${
      entry.difficulty
    })`;
    leaderboardContent.appendChild(entryElement);
  });
}

const openLeaderboardBtn = document.querySelector("#openLeaderboardBtn");

openLeaderboardBtn.addEventListener("click", () => {
  leaderboardContent.innerHTML = leaderboardData
    .sort((a, b) => a.time - b.time)
    .map(
      (entry) =>
        `<p>${entry.playerName} - ${entry.time} seconds - ${entry.difficulty}</p>`
    )
    .join("");
  leaderModal.style.display = "block";
});

function saveLeaderboard() {
  localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
}

function loadLeaderboard() {
  const savedData = localStorage.getItem("leaderboardData");
  if (savedData) {
    leaderboardData = JSON.parse(savedData);
  }
}
function showLeaderboard() {
  const sortedLeaderboard = leaderboardData.sort((a, b) => a.time - b.time);

  leaderboardContent.innerHTML = "";

  sortedLeaderboard.forEach((entry, index) => {
    const entryElement = document.createElement("p");
    entryElement.textContent = `${index + 1}. ${entry.playerName} - ${
      entry.time
    } seconds (${entry.difficulty})`;
    leaderboardContent.appendChild(entryElement);
  });

  leaderModal.style.display = "block";
}
function clearLeaderboard() {
  leaderboardData = [];

  localStorage.removeItem("leaderboardData");

  leaderboardContent.innerHTML = "<p>Leaderboard is empty</p>";

  leaderModal.style.display = "none";
}
