const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("enter a new name");
  para.textContent = "Player 1 :" + name;
}