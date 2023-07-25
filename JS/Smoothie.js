function createSmoothie() {
    const name = document.getElementById("name").value; // Get the value of the name input field.
    const smoothieType = document.getElementById("smoothieType").value; // Get the value of the smoothie type select field.
    const toppings = document.getElementById("toppings").value; // Get the value of the toppings input field.
    const extras = document.getElementById("extras").value; // Get the value of the extras input field.

    // Create a Smoothie object with the user's inputs
    const smoothie = {
        name: name,
        smoothieType: smoothieType,
        toppings: toppings,
        extras: extras
    };

    // Display the smoothie description to the user
    const smoothieOutput = document.getElementById("smoothieOutput"); // Get the smoothie output div.
    smoothieOutput.innerHTML = `
        <h3>Your Smoothie:</h3>
        <p><strong>Name:</strong> ${smoothie.name}</p>
        <p><strong>Type:</strong> ${smoothie.smoothieType}</p>
        <p><strong>Toppings:</strong> ${smoothie.toppings}</p>
        <p><strong>Extras:</strong> ${smoothie.extras}</p>
    `; // Set the innerHTML of the smoothie output div to display the smoothie description.
}