const playerCards = document.querySelectorAll(".player-card");
const selectedPlayersList = document.getElementById("selectedPlayers");

playerCards.forEach((playerCard, index) => {
  const selectBtn = playerCard.querySelector("#select-btn");

  selectBtn.addEventListener("click", function () {
    const playerName = playerCard.querySelector(".text-xl").textContent;

    const listItem = document.createElement("li");
    listItem.className = "bg-cyan-950 px-5 py-2 text-white mb-2 rounded-md";

    const itemCount = selectedPlayersList.childElementCount + 1;

    listItem.textContent = `${itemCount}. ${playerName}`;

    if (itemCount < 6) {
      selectedPlayersList.appendChild(listItem);
      selectBtn.disabled = true;
      selectBtn.className =
        "mt-4 mb-4 mx-auto bg-slate-200 hover:bg-slate-200 text-md px-5 py-2 rounded-md mx-auto text-slate-500";
    } else {
      alert("Alreary 5 Player Added");
    }
  });
});
