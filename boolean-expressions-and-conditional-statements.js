/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require("readline-sync");
//Gathering details from player and converting the answer to lowercase and check if it's "yes" to create a true/false boolean
const hasTorch =
  readline.question("Do you have a torch? (yes/no): ").toLowerCase() === "yes";
const hasMap =
  readline.question("Do you have a map? (yes/no): ").toLowerCase() === "yes";
const hasSword =
  readline.question("Do you have a sword? (yes/no): ").toLowerCase() === "yes";
const hasCompass =
  readline.question("Do you have a compass? (yes/no): ").toLowerCase() ===
  "yes";

console.log("===Your adventure begins!===");
console.log(
  "You see three paths: one leads to the mountains, one to the village, and one to the forest.",
);
// Asking the player to choose their path and using trim() to remove spaces at the end and beginning.
const choice = readline
  .question("Do you go to the 'mountains','village' or the 'forest'?")
  .trim();

if (choice.toLowerCase() === "mountains") {
  // Nested conditional: check for the torch if they go to the mountains
  if (hasTorch) {
    console.log("You use your torch to see and safely cross the mountains.");
  } else {
    console.log(
      "It's too dark! You trip and have to turn back without a torch.",
    );
  }
} else if (choice.toLowerCase() === "village") {
  //see if they have the map for the village path
  if (hasMap) {
    console.log("You find your way to the village safely.");
  } else {
    console.log(
      "Without a map, you wander for hours before finding the village, exhausted.",
    );
  }
} else if (choice.toLowerCase() === "forest") {
  // Complex logic: check for compass first, then sword and torch together using logical operators

  if (hasCompass) {
    console.log(
      "Point your compass to West! You find a secret shortcut through the trees.",
    );
  } else if (hasSword && hasTorch) {
    console.log(
      "You fight off monsters along your way with your sword and torch and continue with your adventure!",
    );
  } else {
    console.log(
      "The forest is too thick. Without a compass or tools, you get lost.",
    );
  }
} else {
  //If user enters anything else other than listed options.
  console.log(
    "Your selection is not part of this adventure game. Thanks for playing!",
  );
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
