// Get all player cards and the list
const playerCards = document.querySelectorAll(".player-card");
const selectedPlayersList = document.getElementById("selectedPlayers");

// Add click event listeners to all player cards
playerCards.forEach((playerCard, index) => {
  const selectBtn = playerCard.querySelector("#select-btn");

  selectBtn.addEventListener("click", function () {
    // Get the player's name from the selected player div
    const playerName = playerCard.querySelector(".text-xl").textContent;

    // Create a new list item element
    const listItem = document.createElement("li");
    listItem.className = "bg-cyan-950 px-5 py-2 text-white mb-2 rounded-md";

    // Increment the current number of items in the list
    const itemCount = selectedPlayersList.childElementCount + 1;

    // Set the content of the list item
    listItem.textContent = `${itemCount}. ${playerName}`;

    // Append the list item to the selected players list
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
