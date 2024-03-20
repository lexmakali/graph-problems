// Get the canvas and 2D context
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// Define Tamil alphabets as paths (simplified representation)
const tamilAlphabets = {
  அ: [
    { x: 0, y: 0 },
    { x: 0, y: -20 },
  ],
  ஆ: [
    { x: 0, y: 0 },
    { x: 10, y: -20 },
    { x: 20, y: 0 },
    { x: 10, y: 20 },
    { x: 0, y: 0 },
  ],
  இ: [
    { x: 0, y: 0 },
    { x: 0, y: -20 },
  ],
  ஈ: [
    { x: 0, y: 0 },
    { x: 0, y: -20 },
    { x: 0, y: -40 },
  ],
  // Add more alphabet paths as needed
};

// Draw the random walk along the path of a Tamil alphabet
function drawRandomWalkOnAlphabet(alphabetPath: { x: number; y: number }[]) {
  // Set the starting point
  let x = canvas.width / 2;
  let y = canvas.height / 2;

  // Number of steps
  const numSteps = 500;

  // Draw the random walk
  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 0; i < numSteps; i++) {
    // Randomly choose a point from the alphabet path
    const randomIndex = Math.floor(Math.random() * alphabetPath.length);
    const point = alphabetPath[randomIndex];

    // Move the point to the new position
    x += point.x;
    y += point.y;

    // Draw a small dot at the new position
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  // Close the path
  ctx.closePath();
}

// Example: Draw a random walk on the path of the Tamil alphabet 'அ'
drawRandomWalkOnAlphabet(tamilAlphabets["அ"]);
