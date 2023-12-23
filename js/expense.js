document
  .getElementById("calculate-per-player")
  .addEventListener("click", function () {
    let perPlayerCost = Number(
      document.getElementById("per-player-cost").value
    );

    document.getElementById("player-expense-display").innerText =
      perPlayerCost * 5;
  });

document
  .getElementById("calculate-total-cost")
  .addEventListener("click", function () {
    let managerCost = Number(document.getElementById("manager-cost").value);
    let coachCost = Number(document.getElementById("coach-cost").value);
    let playerCost = Number(
      document.getElementById("player-expense-display").innerText
    );

    document.getElementById("total-expense-display").innerText =
      managerCost + coachCost + playerCost;
  });
