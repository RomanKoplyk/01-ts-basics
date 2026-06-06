function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log("Task 6 (numbers):", getFirstElement<number>([1, 2, 3])); // Виведе: 1
console.log("Task 6 (strings):", getFirstElement<string>(["a", "b", "c"])); // Виведе: "a"
console.log(
  "Task 6 (booleans):",
  getFirstElement<boolean>([true, false, true]),
); // Виведе: true
