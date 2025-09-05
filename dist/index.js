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
Object.defineProperty(exports, "__esModule", { value: true });
const asyncAwait_1 = require("./asyncAwait");
const promise_1 = require("./promise");
// Bai 1
(0, promise_1.helloAsync)().then((msg) => console.log("1: ", msg));
// Bai 2
(0, promise_1.resolveTen)().then((num) => console.log("2: ", num));
// Bai 3
(0, promise_1.rejectError)()
    .then((msg) => console.log("3: ", msg))
    .catch((err) => console.log("3: Error ", err.message));
// Bai 4
(0, promise_1.randomNumber)()
    .then((num) => console.log("4: Random ", num))
    .catch((err) => console.log("4: Error", err.message));
// Bai 5
(0, promise_1.simulateTask)(2000)
    .then((msg) => console.log("5: ", msg))
    .catch((err) => console.log("5: Error ", err.message));
// Bai 6
Promise.all([(0, promise_1.simulateTask)(1000), (0, promise_1.simulateTask)(2000), (0, promise_1.simulateTask)(3000)]).then((results) => console.log("6: All results ", results));
// Bai 7
Promise.race([(0, promise_1.simulateTask)(1000), (0, promise_1.simulateTask)(2000), (0, promise_1.simulateTask)(3000)]).then((fastest) => console.log("7: Fastest ", fastest));
// Bai 8
(0, promise_1.chainNumber)(2).then((result) => console.log("8: ", result));
// Bai 9
(0, promise_1.filtersEven)([1, 2, 3, 4, 5, 6, 7, 8]).then((res) => console.log("9: ", res));
// Bai 10
(0, promise_1.filtersEven)([1, 2, 3, 4, 5, 6, 7, 8])
    .then((res) => console.log("10: ", res))
    .catch((err) => console.log("10: Error ", console.log(err.message)))
    .finally(() => console.log("10: Done"));
// Bai 11
(0, asyncAwait_1.helloAsyncAwait)();
// Bai 12
(0, asyncAwait_1.runSimulateTask)();
// Bai 13
(0, asyncAwait_1.handleError)();
// Bai 14
function bai14() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n14 Takes a number: ", yield (0, asyncAwait_1.takeANumber)(2));
    });
}
bai14();
// Bai 15
(0, asyncAwait_1.sequentially)();
// Bai 16
(0, asyncAwait_1.parallelCalls)();
// Bai 17
(0, asyncAwait_1.iteratePromises)();
// Bai 18
(0, asyncAwait_1.fetchUser)(1).then((user) => console.log("18 User: ", user));
// Bai 19
(0, asyncAwait_1.fetchUsers)([1, 2, 3]);
// Bai 20
function bai20() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, asyncAwait_1.fetchWithTimeout)((0, promise_1.simulateTask)(3000), 2000);
            console.log("\n20: ", result);
        }
        catch (error) {
            console.error("\n20 Error: ", error.message);
        }
    });
}
bai20();
