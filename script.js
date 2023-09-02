console.log(trelloData);

// Data rendering file
// Read trelloData, find the data display row
// Genereate HTML elements based on the data

function renderColumns() {
	let trelloDataRowRootNode = document.getElementById("dataDisplayRow");
	// Remove all previous data from root node
	trelloDataRowRootNode.innerHTML = "";
}
