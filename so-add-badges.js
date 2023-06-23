
const chatGPTReleaseDate = new Date("2022-11-30");
for(element of document.querySelectorAll("span.relativetime")) { 
	let elementDate = new Date(element.getAttribute("title"));
	if (elementDate < chatGPTReleaseDate) {
		element.classList.add("prechatgpt");
	} else {
		element.classList.add("postchatgpt");
	}
}
console.log("foo");
