console.log(trelloData);

// Data rendering file
// Read trelloData, find the data display row
// Genereate HTML elements based on the data

function renderColumns() {
	let trelloDataRowRootNode = document.getElementById("dataDisplayRow");
	// Remove all previous data from root node
	trelloDataRowRootNode.innerHTML = "";

	// Generating new HTML content
	trelloData.columns.forEach((column) => {
		console.log(column.name);

		let columnNode = document.createElement("div");

		columnNode.classList.add("trelloColumn");

		// Create content to render column data
		let columnHeading = document.createElement("h3");
		columnHeading.innerText = column.name;
		columnNode.appendChild(columnHeading);

		column.cards.forEach((card) => {
			// Find the card preview, copy it, save the copy to the variable
			let newCard = document
				.getElementById("cardPreview")
				.cloneNode(true);

			// If timestamp is not a number, set it to current time
			if (!card.timestamp || isNaN(card.timestamp)) {
				card.timestamp = Date.now();
			}
			newCard.id = card.timestamp;

			// Find the h3 of the card title and change its content
			newCard.querySelector(".cardDisplay-title").innerText = card.title;

			// Same as above but for the paragraph tag
			newCard.querySelector(".cardDisplay-content").innerText =
				card.content;

			// After data is all done, attach card to column
			columnNode.appendChild(newCard);
		});

		trelloDataRowRootNode.appendChild(columnNode);
	});
}

renderColumns();
