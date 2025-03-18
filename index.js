function rolldice() {
  const numOfDice = document.getElementById("diceCount").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    values.push(randomValue);
    images.push(`<img src="dice_faces/dice${randomValue}.png">`);
  }

  diceResult.textContent = `You rolled: ${values.join(", ")}`;
  diceImages.innerHTML = images;
}
