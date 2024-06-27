const header = document.getElementsByTagName("h1");

header[0].innerHTML = "BBC JavaScript";

const div = document.getElementById("content") as HTMLDivElement;

const p = document.createElement("p");
p.textContent = "Welcome to our coffee shop!";
div.append(p);

const shopButton = document.getElementById("shops") as HTMLButtonElement;
const drinkButton = document.getElementById("drinks");

shopButton.addEventListener("click", () => {
  console.log("I was clicked!");
});

const div1 = document.querySelector<HTMLDivElement>(".content");
