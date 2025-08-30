"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloAsync = helloAsync;
exports.resolveTen = resolveTen;
exports.rejectError = rejectError;
exports.randomNumber = randomNumber;
exports.simulateTask = simulateTask;
exports.chainNumber = chainNumber;
exports.filtersEven = filtersEven;
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
function helloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello Async"), 2000);
    });
}
// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function resolveTen() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 1000);
    });
}
// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function rejectError() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Someting went wrong")), 1000);
    });
}
// 4. Use .then() and .catch() to handle a Promise that returns a random number.
function randomNumber() {
    return new Promise((resolve) => {
        const num = Math.floor(Math.random() * 100);
        resolve(num);
    });
}
// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task done"), time);
    });
}
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
// 8. Create a Promise chain: square the number 2, then double it, then add 5.
function chainNumber(num) {
    return Promise.resolve(num)
        .then((n) => n * n)
        .then((n) => n * 2)
        .then((n) => n + 5);
}
// 9. Write a Promise that reads an array after 1 second and filters even numbers.
function filtersEven(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr.filter((n) => n % 2 === 0));
        }, 1000);
    });
}
// Use .finally() to log "Done" when a Promise finishes (success or failure).
