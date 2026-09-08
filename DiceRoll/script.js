function rollDice() {
    const numOfDice = Number(document.getElementById("numOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    if (!Number.isInteger(numOfDice) || numOfDice < 1) {
        diceResult.textContent = "Please enter at least 1 die.";
        diceImages.innerHTML = "";
        return;
    }

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);

        images.push(
            `<img src="images/${value}.png" alt="Dice ${value}">`
        );
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}