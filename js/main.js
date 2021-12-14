// Global Variabls
let level = 1;

// Init Map
initMap();

// Helper Functions
function initMap() {
  // Init Map mapData
  initMapData();

  // Add Row Numbers
  for (let rowNum = 0; rowNum < 8; rowNum++) {
    let rowNumEl = document.createElement("div");
    rowNumEl.innerHTML = rowNum;
    document.getElementById("rowNums").append(rowNumEl);
  }

  // Add Col Numbers
  for (let colNum = 0; colNum < 12; colNum++) {
    let colNumEl = document.createElement("div");
    colNumEl.innerHTML = colNum;
    document.getElementById("colNums").append(colNumEl);
  }

  // Create Map Tiles from Map Data Array 
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      let tileEl = document.createElement("div");
      tileEl.id = "c" + row + "-" + col;
      tileEl.classList = mapData[1][row][col];
      tileEl.ondragstart = "return false";
      tileEl.ondrop = "return false";
      tileEl.addEventListener("mouseenter", enterTile);
      tileEl.addEventListener("mouseleave", exitTile);
      document.getElementById("tiles").append(tileEl);
    }
  }

  // Page Tabs
  for (let numLevel = 1; numLevel <= 14; numLevel++) {
    let levelTabEl = document.createElement("div");
    levelTabEl.classList = "inactive";
    levelTabEl.innerHTML = "Level " + numLevel;
    levelTabEl.addEventListener("click", setLevel);
    document.getElementById("levelTabs").append(levelTabEl);
  }

  // Set Level 1 as Active
  document.getElementById("levelTabs").firstChild.classList = "active";
}

// Refresh Map
function drawMap() {
  let map = mapData[level];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      let tileEl = document.getElementById("c" + row + "-" + col)
      tileEl.classList = map[row][col];
    }
  }
}

// When mouse enters tile
function enterTile(event) {
  // Get row and col values from Tile Id
  let tileId = event.target.id;
  tileId = tileId.slice(1);
  tileId = tileId.split("-");
  row = +tileId[0];
  col = +tileId[1];

  // Set border to red upon entering tile
  event.target.style.border = "1px solid red";

  // Display row and col of selected tile
  document.getElementById("row").innerHTML = row;
  document.getElementById("col").innerHTML = col;
  
  testTiles();
}

// When mouse exits tile
function exitTile(event) {
  // Set border to black upon leaving tile
  event.target.style.border = "1px solid black";

  document.getElementById("currentTile").innerHTML = "----";
}

// Select Level
function setLevel(event) {
  document.getElementsByClassName("active").item(0).classList = "inactive";

  event.target.classList = "active";
  let tabHTML = event.target.innerHTML;
  tabHTML = tabHTML.slice(6);
  level = Number(tabHTML);

  drawMap();
}

function testTiles() {
	if (level === 1) {
		level1Solution();
	} else if (level === 2) {
		level2Solution();
	} else if (level === 3) {
		level3Solution();
	} else if (level === 4) {
		level4Solution();
	} else if (level === 5) {
		level5Solution();
	} else if (level === 6) {
		level6Solution();
	} else if (level === 7) {
		level7Solution();
	} else if (level === 8) {
		level8Solution();
	} else if (level === 9) {
		level9Solution();
	} else if (level === 10) {
		level10Solution();
	} else if (level === 11) {
		level11Solution();
	} else if (level === 12) {
		level12Solution();
	} else if (level === 13) {
		level13Solution();
	} else if (level == 14) {
		level14Solution();
	}
}