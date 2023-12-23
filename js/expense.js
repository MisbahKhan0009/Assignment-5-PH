let perPlayerCostField = document.getElementById("per-player-cost").value;
let managerCostField = document.getElementById("manager-cost").value;
let CoachCostField = document.getElementById("coach-cost").value;

document
  .getElementById("calculate-per-player")
  .addEventListener("click", function () {
    let perPlayerCost = Number(
      document.getElementById("per-player-cost").value
    );

    if (isNaN(perPlayerCostField.value)) {
      alert("Please enter a number on expense field.");
    } else {
      document.getElementById("player-expense-display").innerText =
        perPlayerCost * 5;
    }
  });

document
  .getElementById("calculate-total-cost")
  .addEventListener("click", function () {
    let managerCost = Number(document.getElementById("manager-cost").value);
    let coachCost = Number(document.getElementById("coach-cost").value);
    let playerCost = Number(
      document.getElementById("player-expense-display").innerText
    );

    if (isNaN(managerCostField.value) || isNaN(CoachCostField.value)) {
      alert("Please enter a number on expense field.");
    } else {
      document.getElementById("total-expense-display").innerText =
        managerCost + coachCost + playerCost;
    }
  });
