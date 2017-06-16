// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var targetSections = document.getElementsByClassName("article-section");
var outputDiv = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");
var pigText = document.getElementById("guinea-pig");

function notifySectionClick() {
	var elementText = event.target.innerHTML.toLowerCase();
	outputDiv.innerHTML = `You clicked on the ${elementText} section`;
}
for (i=0; i<targetSections.length; i++) {
	targetSections[i].addEventListener("click", notifySectionClick);
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
pageTitle.addEventListener("mouseover", function() {
	outputDiv.innerHTML = "You moved your mouse over the header";
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
pageTitle.addEventListener("mouseout", function() {
	outputDiv.innerHTML = "You left me!!";
});

// When you type characters into the input field, the output element should mirror the text in the input field.
inputField.onkeyup = function() {
	outputDiv.innerHTML = inputField.value;
}

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
function changeText(id, css) {
	document.getElementById(id).addEventListener("click", function() {
	pigText.classList.toggle(css);
	console.log(pigText, pigText.classList);
	});
}
changeText("add-color", "blue");
changeText("make-large", "hulkify");
changeText("add-border", "border");
changeText("add-rounding", "rounded");