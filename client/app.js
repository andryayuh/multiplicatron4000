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
		let numsToProduct = valuesArray.filter(element => Number.isInteger(element));
		if (numsToProduct.length >= 2) {
			numsToProduct = numsToProduct.reduce((a, b) => multiply(a, b));
			this.renderProduct(numsToProduct);
		} else {
			this.renderProduct(NaN);
		}
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