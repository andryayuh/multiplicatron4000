const multiply = require('./multiplier.js');
	
class ViewManager {
	connectEventHandlers() {
		document.getElementById('form-numbers')
			.addEventListener(
				'submit',
				this.onSubmit.bind(this));
		document.getElementById('addCellButton')
			.addEventListener(
				'click',
				this.addsCellToPage.bind(this));
	}

	onSubmit(event) {
		event.preventDefault();
		let allInputs = document.querySelectorAll('.factor')
		let mappedValues = [];
		allInputs.forEach(function(input) {
			mappedValues.push(parseInt(input.value, 10));
		})
		this.computeAnswer(mappedValues);
	}

	computeAnswer(valuesArray) {
		const product = valuesArray.reduce((a, b) => multiply(a,b), 1);
		console.log(product);
		this.renderProduct(product);
	}

	addsCellToPage() {
		let outerDiv = document.createElement("DIV");
		let input = document.createElement("INPUT");
		input.className = "factor";
		outerDiv.appendChild(input);
		document.getElementById('input-container').appendChild(outerDiv);
	}

	renderProduct(product) {
		document.getElementById('product').textContent = product;
	}
	
}
const viewManager = new ViewManager();
viewManager.connectEventHandlers();