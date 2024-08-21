const symbols = ["⬛", "🟦", "🟥", "🟩", "🟨", "⬜", "🟪", "🟧", "🌐", "🟫"];

export default function matrixToString(input) {
  return input.map((row) => row.map((e) => symbols[e]).join("")).join("\n");
}
