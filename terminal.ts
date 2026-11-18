// This file prints a few TypeScript examples.

interface Snack { name: string; emoji: string; }
const snacks: Snack[] = [
  { name: "strawberries", emoji: "🍓" },
  { name: "tea", emoji: "🍵" },
  { name: "cookies", emoji: "🍪" },
];

function printWelcome(name: string): void { console.log(`Hello, ${name}! Welcome to Cute Notes.`); }

function printSnackList(items: Snack[]): void {
  console.log("Today's tiny snack list:");
  items.forEach((item, index) => console.log(`${index + 1}. ${item.emoji} ${item.name}`));
}

// This function counts down by calling itself.
function countdown(number: number): void {
  if (number === 0) { console.log("The tiny countdown is complete! ✨"); return; }
  console.log(number);
  countdown(number - 1);
}

async function printAsyncMessage(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 250));
  console.log("This message arrived asynchronously. 🌈");
}

async function main(): Promise<void> {
  printWelcome("friend");
  printSnackList(snacks);
  countdown(3);
  await printAsyncMessage();
}

main();
