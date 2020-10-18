const boxContainer = document.getElementById("box-container");
const clearButton = document.getElementById("clear");
const boxesArray = [];

// -----------------------------------
// Handles clicks on boxes - transparent background version
function boxClick(e) {
  if (e.target.style.backgroundImage === '') {
    e.target.style.backgroundImage = 'url("./img/+.png")';
  } else if (e.target.style.backgroundImage === 'url("./img/+.png")') {
    e.target.style.backgroundImage = 'url("./img/-.png")';
  } else if (e.target.style.backgroundImage === 'url("./img/-.png")') {
    e.target.style.backgroundImage = 'url("./img/o.png")';
  } else if (e.target.style.backgroundImage === 'url("./img/o.png")') {
    e.target.style.backgroundImage = 'url("./img/x.png")';
  } else {
    e.target.style.backgroundImage = '';
  }
}

// -----------------------------------
// Generates calendar skeleton
function generateBoxes() {
  for (var i = 0; i < 42; i++) {
    // Make class of div elements for each box (7x6 grid)
    // Each box has unique ID
    let box = document.createElement("div");
    box.id = `box-${i + 1}`;
    box.className = "boxes";
    boxContainer.appendChild(box);
  
    // Add each box to boxesArray by ID
    let boxNumber = document.getElementById(`box-${i + 1}`);
    boxesArray.push(boxNumber);
  
    // Add click listeners to each box
    boxesArray[i].addEventListener("click", boxClick);
  }
}

generateBoxes();

// -----------------------------------
// Handles clicks on "clear" button
function clearBoxes() {
  while (boxContainer.hasChildNodes()) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
  boxesArray.length = 0;
  generateBoxes();
}

clearButton.addEventListener("click", clearBoxes);