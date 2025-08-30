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
exports.helloAsyncAwait = helloAsyncAwait;
exports.runSimulateTask = runSimulateTask;
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
