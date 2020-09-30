let teamOneShootButton = document.querySelector("#team-one-shoot-button");
let teamTwoShootButton = document.querySelector("#team-two-shoot-button");
let resetbutton = document.querySelector("#reset-button");
let teamOneNumGoals = document.querySelector("#team-one-numgoals");
let teamTwoNumGoals = document.querySelector("#team-two-numgoals");
let oneShot = document.querySelector("#team-one-numshots");
let twoShot = document.querySelector("#team-two-numshots");
let numresets = document.querySelector("#num-resets");

teamOneShootButton.addEventListener("click", function () {
  let newCounterValue = Number(oneShot.innerHTML);
  console.log("+ button clicked");
  newCounterValue = newCounterValue + 1;
  oneShot.innerHTML = newCounterValue;
  if (Math.random() > 0.5) {
    let oneGoal = Number(teamOneNumGoals.innerHTML);
    oneGoal = oneGoal + 1;
    teamOneNumGoals.innerHTML = oneGoal;
  }
});

teamTwoShootButton.addEventListener("click", function () {
  let newCounterValue = Number(twoShot.innerHTML);
  console.log("+ button clicked");
  newCounterValue = newCounterValue + 1;
  twoShot.innerHTML = newCounterValue;
  if (Math.random() > 0.5) {
    let twoGoal = Number(teamTwoNumGoals.innerHTML);
    twoGoal = twoGoal + 1;
    teamTwoNumGoals.innerHTML = twoGoal;
  }
});

resetbutton.addEventListener("click", function () {
  oneShot.innerHTML = 0;
  twoShot.innerHTML = 0;
  teamOneNumGoals.innerHTML = 0;
  teamTwoNumGoals.innerHTML = 0;
  let newCounterValue = Number(numresets.innerHTML);
  newCounterValue = newCounterValue + 1;
  numresets.innerHTML = newCounterValue;
});
