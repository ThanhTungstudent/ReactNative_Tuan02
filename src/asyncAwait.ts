import { helloAsync, rejectError, simulateTask } from "./promise";

// 11. Convert Exercise 1 into async/await.
export async function helloAsyncAwait(){
    const res = await helloAsync()
    console.log("11: ", res+"Await");
}

// 12. Write an async function that calls simulateTask(2000) and logs the result.
export async function runSimulateTask() {
    const result = await simulateTask(2000)
    console.log("12: ",result);
}

// 13. Handle errors using try/catch with async/await.
export async function handleError() {
    try {
        const result = await rejectError();
        console.log("13: ", result);
        // throw new Error("Something went wrong")
        
    } catch (error: any) {
        console.log("13: Error ", error.message);
    }
}