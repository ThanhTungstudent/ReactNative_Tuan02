"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloAsyncAwait = helloAsyncAwait;
exports.runSimulateTask = runSimulateTask;
exports.handleError = handleError;
exports.takeANumber = takeANumber;
exports.sequentially = sequentially;
exports.parallelCalls = parallelCalls;
exports.iteratePromises = iteratePromises;
exports.fetchUser = fetchUser;
exports.fetchUsers = fetchUsers;
exports.fetchWithTimeout = fetchWithTimeout;
const promise_1 = require("./promise");
// 11. Convert Exercise 1 into async/await.
function helloAsyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, promise_1.helloAsync)();
        console.log("11: ", res + "Await");
    });
}
// 12. Write an async function that calls simulateTask(2000) and logs the result.
function runSimulateTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, promise_1.simulateTask)(2000);
        console.log("12: ", result);
    });
}
// 13. Handle errors using try/catch with async/await.
function handleError() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, promise_1.rejectError)();
            console.log("13: ", result);
            // throw new Error("Something went wrong")
        }
        catch (error) {
            console.log("13: Error ", error.message);
        }
    });
}
// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
function takeANumber(num) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        return num * 3;
    });
}
// 15. Call multiple async functions sequentially using await.
function sequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield takeANumber(2);
        const b = yield takeANumber(3);
        console.log("\n15 Sequentially: ", a, b);
    });
}
// 16. Call multiple async functions in parallel using Promise.all().
function parallelCalls() {
    return __awaiter(this, void 0, void 0, function* () {
        const [a, b] = yield Promise.all([takeANumber(2), takeANumber(3)]);
        console.log("\n16 Parallel: ", a, b);
    });
}
// 17. Use for await...of to iterate over an array of Promises.
function iteratePromises() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const promises = [takeANumber(1), takeANumber(2), takeANumber(3)];
        try {
            for (var _d = true, promises_1 = __asyncValues(promises), promises_1_1; promises_1_1 = yield promises_1.next(), _a = promises_1_1.done, !_a; _d = true) {
                _c = promises_1_1.value;
                _d = false;
                const result = _c;
                console.log("\n 17 Iterate: ", result);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = promises_1.return)) yield _b.call(promises_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
        });
    });
}
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
function fetchUsers(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield Promise.all(ids.map((id) => fetchUser(id)));
        console.log("\n19 Users: ", users);
    });
}
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
function fetchWithTimeout(promise, timeout) {
    return __awaiter(this, void 0, void 0, function* () {
        let timer;
        const timeoutPromise = new Promise((_, reject) => {
            timer = setTimeout(() => {
                reject(new Error("Timeout!"));
            }, timeout);
        });
        return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
    });
}
