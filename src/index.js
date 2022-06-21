const billAmt = document.querySelector(".billAmt");
const nextBtn = document.querySelector(".next");
const cashRecieved = document.querySelector(".cashRecieved");
const checkBtn = document.querySelector(".check");
const error = document.querySelector(".error");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const balanceDiv = document.querySelector(".balance");
const output = document.querySelector(".output");
const cashRecievedDiv = document.querySelector(".cashRecievedDiv");

const arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener("click", () => {
  if (billAmt.value === "" || billAmt.value < 0) {
    error.innerHTML = "Enter valid bill amount";
    //console.log("err");
  } else {
    error.innerHTML = "";
    nextBtn.style.display = "none";
    cashRecievedDiv.style.display = "block";
  }
});

checkBtn.addEventListener("click", () => {
  //console.log(Number(billAmt.value));
  clearNoOfNotes();
  if (
    Number(billAmt.value) &&
    (cashRecieved.value === "" || cashRecieved.value < 0)
  ) {
    error.innerHTML = "Enter valid cash Recieved";
  } else {
    error.innerHTML = "";
    cashRecievedDiv.style.display = "block";
    balanceDiv.style.display = "block";
    calculateNotes(billAmt.value, cashRecieved.value);
  }
});

function calculateNotes(bill, cash) {
  let returnAmt = cash - bill;

  if (returnAmt < 1) {
    error.innerHTML = "No amount should be returned";
  }
  balanceDiv.style.display = "block";

  for (let i = 0; i < arrayNoteAmt.length; i++) {
    returnAmt = compare(returnAmt, arrayNoteAmt[i], i);
  }
}

function compare(remainder, noteAmt, index) {
  if (remainder >= noteAmt) {
    let notes = Math.floor(remainder / noteAmt);
    remainder = remainder - notes * noteAmt;
    noOfNotes[index].innerText = `${notes}`;
  }
  return remainder;
}

function clearNoOfNotes() {
  for (let notes of noOfNotes) {
    notes.innerText = "";
  }
}
