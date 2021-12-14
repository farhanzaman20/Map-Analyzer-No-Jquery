// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, col;

// Solution Functions...
function level1Solution() {
  // USE BINARY IF STATEMENT
  if (col <= 4) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else {
    document.getElementById("currentTile").innerHTML = "Water";
  }
}

function level2Solution() {
  // USE CHAINED IF STATEMENT
  if (col <= 2) {
    document.getElementById("currentTile").innerHTML = "Hills";
  } else if (col >= 3 && col <= 7) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else {
    document.getElementById("currentTile").innerHTML = "Water";
  }
}

function level3Solution() {
  // USE BINARY IF STATEMENT
  if (col >= 3 && col <= 7) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else {
    document.getElementById("currentTile").innerHTML = "Hills";
  }
}

function level4Solution() {
  // USE BINARY IF STATEMENT
  if (row <= 2) {
    document.getElementById("currentTile").innerHTML = "Hills";
  } else {
    document.getElementById("currentTile").innerHTML = "Sand";
  }
}

function level5Solution() {
  // USE CHAINED IF STATEMENT
  if (row <= 2) {
    document.getElementById("currentTile").innerHTML = "Hills";
  } else if (row >= 3 && row <= 5) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else {
    document.getElementById("currentTile").innerHTML = "Water";
  }
}

function level6Solution() {
  // USE BINARY IF STATEMENT
  if (row >= 2 && row <=5) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else {
    document.getElementById("currentTile").innerHTML = "Water";
  }
}

function level7Solution() {
  // USE BINARY IF STATEMENT
  if (row === 4 && col === 7) {
    document.getElementById("currentTile").innerHTML = "Water";
  } else {
    document.getElementById("currentTile").innerHTML = "Sand";
  }
}

function level8Solution() {
  // USE BINARY IF STATEMENT
  if (row === 5 || col === 2) {
    document.getElementById("currentTile").innerHTML = "Tree";
  } else {
    document.getElementById("currentTile").innerHTML = "Sand";
  }
}

function level9Solution() {
  // USE BINARY IF STATEMENT
  if (row <= 5 && col <= 5) {
    document.getElementById("currentTile").innerHTML = "Water";
  } else {
    document.getElementById("currentTile").innerHTML = "Sand";
  }
}

function level10Solution() {
  // USE CHAINED IF STATEMENT
  if (col <= 1) {
    document.getElementById("currentTile").innerHTML = "Hills";
  } else if (col === 2 || col === 3) {
    document.getElementById("currentTile").innerHTML = "Tree";
  } else if (col >= 4 && col <= 7) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else {
    document.getElementById("currentTile").innerHTML = "Water";
  }
}

function level11Solution() {
  // USE CHAINED IF STATEMENT
  if (row <= 3 && col <= 5) {
    document.getElementById("currentTile").innerHTML = "Water";
  } else if (row >= 4 && col <= 5) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else if (row <= 3 && col >= 6) {
    document.getElementById("currentTile").innerHTML = "Hills";
  } else {
    document.getElementById("currentTile").innerHTML = "Tree";
  }
}

function level12Solution() {
  // USE BINARY IF STATEMENT
  if ((row <= 4 && col <= 5) || (row >= 5 && col >= 6)) {
    document.getElementById("currentTile").innerHTML = "Water";
  } else {
    document.getElementById("currentTile").innerHTML = "Sand";
  }
}

function level13Solution() {
  // USE BINARY IF STATEMENT
  if (row >= 2 && row <= 5 && col >= 4 && col <= 9) {
    document.getElementById("currentTile").innerHTML = "Sand";
  } else {
    document.getElementById("currentTile").innerHTML = "Tree";
  }
}

function level14Solution() {
  // USE CHAINED IF STATEMENT
  if (row >= 1 && row <= 5 && col >= 2 && col <= 4) {
    document.getElementById("currentTile").innerHTML = "Tree";
  } else if (row >= 3 && row <= 5 && col >= 7 && col <= 10) {
    document.getElementById("currentTile").innerHTML = "Water";
  } else {
    document.getElementById("currentTile").innerHTML = "Sand";
  }
}
