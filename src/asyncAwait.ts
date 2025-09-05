import { helloAsync, rejectError, simulateTask } from "./promise";

// 11. Convert Exercise 1 into async/await.
export async function helloAsyncAwait() {
  const res = await helloAsync();
  console.log("11: ", res + "Await");
}

// 12. Write an async function that calls simulateTask(2000) and logs the result.
export async function runSimulateTask() {
  const result = await simulateTask(2000);
  console.log("12: ", result);
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

// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
export async function takeANumber(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

// 15. Call multiple async functions sequentially using await.
export async function sequentially() {
  const a = await takeANumber(2);
  const b = await takeANumber(3);
  console.log("\n15 Sequentially: ", a, b);
}
// 16. Call multiple async functions in parallel using Promise.all().
export async function parallelCalls() {
  const [a, b] = await Promise.all([takeANumber(2), takeANumber(3)]);
  console.log("\n16 Parallel: ", a, b);
}
// 17. Use for await...of to iterate over an array of Promises.
export async function iteratePromises() {
  const promises = [takeANumber(1), takeANumber(2), takeANumber(3)];
  for await (const result of promises) {
    console.log("\n 17 Iterate: ", result);
  }
}
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
export async function fetchUser(
  id: number
): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
  });
}
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
export async function fetchUsers(ids:number[]): Promise<void> {
    const users = await Promise.all(ids.map((id) => fetchUser(id)))
    console.log("\n19 Users: ", users);
    
}
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
export async function fetchWithTimeout<T>(
    promise: Promise<T>,
    timeout: number
): Promise<T> {
    let timer : ReturnType<typeof setTimeout>
    const timeoutPromise = new Promise<never>((_, reject) => {
        timer = setTimeout(() => {
           reject(new Error("Timeout!")) 
        }, timeout);
    })
    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer))
}