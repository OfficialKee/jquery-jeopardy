"use strict";

let catAmount1 = document.querySelectorAll("#one .item");
let catAmount2 = document.querySelectorAll("#two .item");
let catAmount3 = document.querySelectorAll("#three .item");
let catAmount4 = document.querySelectorAll("#four .item");
let catAmount5 = document.querySelectorAll("#five .item");
let catAmountAll = document.querySelectorAll("#grid .item");
console.log(catAmountAll);

let modalQues = document.querySelector(".quest");
let closeBtn = document.querySelector(".close");
let catScore = document.querySelector("h4");
let catModal = document.querySelector(".modal");
let catTitle = document.querySelector(".title");
let catQuest = document.querySelector(".question");
let catAns = document.querySelector(".answer");
let catAnsBtn = document.querySelector(".answer-btn");

let catObj = {};
let i = 0;
let numReplace = 0;
let catNum = 0;
let count = 0;
let score = `Your Score: $${count}`;
// let count = 0;

//ASYNC/AWAIT FUNCTION
let jeopardyData = async () => {
  let response = await fetch("jeopardy.json");
  let data = await response.json();

  let dataValue = _.groupBy(data, "value");

  let cat100 = dataValue.$100;
  let cat200 = dataValue.$200;
  let cat300 = dataValue.$300;
  let cat400 = dataValue.$400;
  let cat500 = dataValue.$500;

  //DOM Events

  catModal.addEventListener("click", (e) => {
    //Prevent Modal from disappearing (refreshing)
    e.preventDefault();
  });

  catAmount1.forEach((e) => {
    e.addEventListener("click", () => {
      catModal.style.display = "block";

      catObj = cat100[Math.floor(Math.random() * cat100.length)];

      numReplace = catObj.value.replace(/[^0-9]/g, ""); //Removes all non numbers from a string
      catNum = Number(numReplace); //Convert The Category Value to a number

      catTitle.innerText = `${catObj.category} for $${catNum}`;
      catQuest.innerText = catObj.question;

      modalQues.style.display = "block";

      closeBtn.onclick = function () {
        catScore.innerText = score;
        catModal.style.display = "none";
        // closeBtn.style.display = "none";
        catAmount1[i].style.backgroundColor = "#888";
        catAmount1.disabled = `true`;
      };
    });
  });

  catAmount2.forEach((e) => {
    e.addEventListener("click", () => {
      catModal.style.display = "block";

      catObj = cat200[Math.floor(Math.random() * cat200.length)];

      numReplace = catObj.value.replace(/[^0-9]/g, ""); //Removes all non numbers from a string
      catNum = Number(numReplace); //Convert The Category Value to a number

      catTitle.innerText = `${catObj.category} for $${catNum}`;
      catQuest.innerText = catObj.question;

      modalQues.style.display = "block";
    });
  });

  catAmount3.forEach((e) => {
    e.addEventListener("click", () => {
      catModal.style.display = "block";

      catObj = cat300[Math.floor(Math.random() * cat300.length)];

      numReplace = catObj.value.replace(/[^0-9]/g, ""); //Removes all non numbers from a string
      catNum = Number(numReplace); //Convert The Category Value to a number

      catTitle.innerText = `${catObj.category} for $${catNum}`;
      catQuest.innerText = catObj.question;

      modalQues.style.display = "block";
    });
  });

  catAmount4.forEach((e) => {
    e.addEventListener("click", () => {
      catModal.style.display = "block";

      catObj = cat400[Math.floor(Math.random() * cat400.length)];

      numReplace = catObj.value.replace(/[^0-9]/g, ""); //Removes all non numbers from a string
      catNum = Number(numReplace); //Convert The Category Value to a number

      catTitle.innerText = `${catObj.category} for $${catNum}`;
      catQuest.innerText = catObj.question;

      modalQues.style.display = "block";
    });
  });

  catAmount5.forEach((e) => {
    e.addEventListener("click", () => {
      catModal.style.display = "block";

      catObj = cat500[Math.floor(Math.random() * cat500.length)];

      numReplace = catObj.value.replace(/[^0-9]/g, ""); //Removes all non numbers from a string
      catNum = Number(numReplace); //Convert The Category Value to a number

      catTitle.innerText = `${catObj.category} for $${catNum}`;
      catQuest.innerText = catObj.question;

      modalQues.style.display = "block";
    });
  });

  catAnsBtn.addEventListener("click", () => {
    catAns = document.querySelector(".answer");
    let jepAns = catObj.answer.toLowerCase();
    let userAns = catAns.value.toUpperCase();

    if (catAns.value !== jepAns) {
      closeBtn.style.display = "block";
      modalQues.style.display = "none";

      catTitle.innerText = `Wrong Answer!! The Correct Answer is ${catObj.answer}`;
      catAns.value = "";
    } else if (catAns.value === jepAns) {
      closeBtn.style.display = "block";
      modalQues.style.display = "none";

      catTitle.innerText = `${userAns} is the Correct Answer!!`;
      catAns.value = "";

      count += catNum;
      score = `Your Score: $${count}`;
    }
    closeBtn.onclick = function () {
      catScore.innerText = score;
      catModal.style.display = "none";
      // closeBtn.style.display = "none";
      catAmountAll.style.backgroundColor = "#888";
    };
  });
};

jeopardyData();
