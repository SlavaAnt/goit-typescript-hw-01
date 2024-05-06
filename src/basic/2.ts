// let person = ["Max", 21];
// переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?

let person: [string, number] = ["Max", 21];

// вар з кортежем
type Person = [string, number];
let person2: Person = ["Max", 21];
