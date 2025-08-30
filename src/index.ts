import { helloAsyncAwait, runSimulateTask } from "./asyncAwait";
import { chainNumber, filtersEven, helloAsync, randomNumber, rejectError, resolveTen, simulateTask } from "./promise";

// Bai 1
helloAsync().then((msg) => console.log("1: ", msg))

// Bai 2
resolveTen().then((num) => console.log("2: ", num))

// Bai 3
rejectError()
.then((msg) => console.log("3: ", msg))
.catch((err) => console.log("3: Error ", err.message))

// Bai 4
randomNumber()
.then((num) => console.log("4: Random ", num))
.catch((err) => console.log("4: Error", err.message))

// Bai 5
simulateTask(2000)
.then((msg) => console.log("5: ", msg))
.catch((err) => console.log("5: Error ", err.message))

// Bai 6
Promise.all([simulateTask(1000), simulateTask(2000), simulateTask(3000)])
.then((results) => console.log("6: All results ", results))

// Bai 7
Promise.race([simulateTask(1000), simulateTask(2000), simulateTask(3000)])
.then((fastest) => console.log("7: Fastest ", fastest))

// Bai 8
chainNumber(2).then((result) => console.log("8: ", result))

// Bai 9
filtersEven([1,2,3,4,5,6,7,8]).then((res) => console.log("9: ", res))

// Bai 10
filtersEven([1,2,3,4,5,6,7,8])
.then((res) => console.log("10: ", res))
.catch((err) => console.log("10: Error ", console.log(err.message)))
.finally(() => console.log("10: Done"))

// Bai 11
helloAsyncAwait()

// Bai 12
runSimulateTask()
