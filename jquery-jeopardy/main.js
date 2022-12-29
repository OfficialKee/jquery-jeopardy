// "use strict";

// Query Selectors
let modalQues = document.querySelector(".quest");
let closeBtn = document.querySelector(".close");
let catScore = document.querySelector("h4");
let catModal = document.querySelector(".modal");
let catTitle = document.querySelector(".title");
let catQuest = document.querySelector(".question");
let catAns = document.querySelector(".answer");
let catAnsBtn = document.querySelector(".answer-btn");
let amount = document.querySelector(".amount");
let catAmountAll = document.querySelectorAll("#grid .item");

// Counts, objects, and variables to be re-declared
let catObj = {};
let numReplace;
let catNum;
let count = 0;

//ASYNC/AWAIT FUNCTION
let jeopardyData = async () => {
  let response = await fetch("jeopardy.json");
  let data = await response.json();

  let dataValue = _.groupBy(data, "value"); //Group Data by value, or $$$

  let cash = Object.keys(dataValue); //Puts all the Value keys in a seperate array

  cash.forEach((c) => {
    catAmountAll.forEach((e, i) => {
      //Loops through the array of values
      e.addEventListener("click", () => {
        catModal.style.display = "block"; //When box is clicked, displays the hidden modal

        if (c === e.innerText) {
          //If the value of cash matches the inner text of the item(cash amount delared in HTML)
          catObj =
            dataValue[c][Math.floor(Math.random() * dataValue[c].length)]; //Gets the array of questions, and randomizes them by the total

          numReplace = catObj.value.replace(/[^0-9]/g, ""); //Removes all non numbers from a string
          catNum = Number(numReplace); //Convert The Category Value to a number

          catTitle.innerText = `${catObj.category} for $${catNum}`; //Sets the 'title' to be whatever the category and the value is for the current question
          catQuest.innerText = catObj.question; //Sets the h3 to be the question

          modalQues.style.display = "block"; //Needed to show the question, text input and button after closing the modal after each question

          closeBtn.onclick = function () {
            //Function for the close button in the modal
            amount.innerText = `$${count}`; //Once the modal is closed, the score is updated
            amount.style.scale = "1.5";
            // amount.style.transition = "400ms ease";
            catModal.style.display = "none"; //Modal is hidden again
            // closeBtn.style.display = "none";
            catAmountAll[i].style.backgroundColor = "#888"; //Each box that was clicked will be grayed out
            catAmountAll[i].style.borderColor = "#aaaaaa";
            catAmountAll[i].style.color = "rgb(49, 47, 47)";
            // catAmountAll[i].style.borderWidth = "5px";
            catAmountAll[i].style.pointerEvents = "none"; //Prevents the player from clicking the box again
            catAmountAll[i].style.transition = "1000ms ease";
          };
        }
      });
    });
  });

  // Modal functions
  catModal.addEventListener("click", (e) => {
    //Prevent Modal from disappearing (refreshing)
    e.preventDefault();
  });

  catAnsBtn.addEventListener("click", () => {
    catAns = document.querySelector(".answer");
    let jepAns = catObj.answer.toLowerCase(); //Make sure user input is same case
    let userAns = catAns.value.toUpperCase(); //Make sure the answer displayed is the same case

    if (catAns.value !== jepAns) {
      closeBtn.style.display = "block"; //Reveals the close button
      modalQues.style.display = "none"; //Hides the div holding the question, text input, and button elements

      catTitle.innerText = `Wrong Answer!! The Correct Answer is "${catObj.answer}"`; //Title is changed from category/value to this staement
      count -= catNum;
      catAns.value = ""; //Clears the input box
    } else if (catAns.value === jepAns) {
      closeBtn.style.display = "block";
      modalQues.style.display = "none";

      catTitle.innerText = `"${userAns}" is the Correct Answer!!`;
      catAns.value = "";

      count += catNum; //Adds the value for the question to a counter
      // amount.innerText = `$${count}`; //Adds the total in the counter to this statement, displayed on the main screen
    }
  });
};

jeopardyData();
