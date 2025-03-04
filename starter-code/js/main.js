const cards = [
	{ name: "aquaman", img: "aquaman.jpg" },
	{ name: "batman", img: "batman.jpg" },
	{ name: "captain america", img: "captain-america.jpg" },
	{ name: "fantastic four", img: "fantastic-four.jpg" },
	{ name: "flash", img: "flash.jpg" },
	{ name: "green arrow", img: "green-arrow.jpg" },
	{ name: "green lantern", img: "green-lantern.jpg" },
	{ name: "ironman", img: "ironman.jpg" },
	{ name: "spiderman", img: "spiderman.jpg" },
	{ name: "superman", img: "superman.jpg" },
	{ name: "the avengers", img: "the-avengers.jpg" },
	{ name: "thor", img: "thor.jpg" },
	{ name: "aquaman", img: "aquaman.jpg" },
	{ name: "batman", img: "batman.jpg" },
	{ name: "captain america", img: "captain-america.jpg" },
	{ name: "fantastic four", img: "fantastic-four.jpg" },
	{ name: "flash", img: "flash.jpg" },
	{ name: "green arrow", img: "green-arrow.jpg" },
	{ name: "green lantern", img: "green-lantern.jpg" },
	{ name: "ironman", img: "ironman.jpg" },
	{ name: "spiderman", img: "spiderman.jpg" },
	{ name: "superman", img: "superman.jpg" },
	{ name: "the avengers", img: "the-avengers.jpg" },
	{ name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", e => {
	for (let pic of memoryGame.cards) {
		document.querySelector("#memory_board").innerHTML += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
	}

	// Bind the click event of each element to a function
	let activeCards = memoryGame.pickedCards;
	document.querySelectorAll(".card").forEach(card => {
		card.addEventListener("click", () => {
			let cardName = card.attributes["data-card-name"].value;
			if (!activeCards.length) {
				activeCards.push(cardName);
				console.log("Pushed Card 1");
			} else if (!activeCards.find(e => e === cardName)) {
				activeCards.push(cardName);
				let c = document.getElementById("pairs_clicked");
				c.textContent = memoryGame.pairsClicked;
				if (memoryGame.checkIfPair(...activeCards)) {
          
				}
			}

			// console.log('Card clicked: ', cardName);
		});
	});
});
