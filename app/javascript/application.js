// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

//contador de caracteres restantes
document.addEventListener("DOMContentLoaded", () => {
	const descriptionField = document.getElementById("tweet-body");
	const charCountElement = document.getElementById("char-count");

	descriptionField.addEventListener("input", () => {
		const remainingChars = 500 - descriptionField.value.length;
		const text = " Characters left";
		charCountElement.innerText = remainingChars + text;
	});
});
