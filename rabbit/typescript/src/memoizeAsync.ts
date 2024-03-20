export {};

const isFunction = (value) =>
  value
    ? Object.prototype.toString.call(value) === "[object Function]" ||
      "function" === typeof value ||
      value instanceof Function
    : false;
const myPromise: Promise<string> = new Promise((resolve, reject) => {
  // Resolve the promise with a string value
  resolve("Hello, world!");
});

// Function that takes a function as input and returns a function as output
function memoizeAsync(
  fn: (signal: AbortSignal) => Promise<string>,
): (signal: AbortSignal) => Promise<string> {
  const cache: Record<string, Promise<string>> = {};
  // This is an example of a transformation that can be applied to the input function
  return function (signal: AbortSignal): Promise<string> {
    const signalKey = JSON.stringify(signal);
    if (cache[signalKey]) {
      return cache[signalKey];
    }
    const asyncFn = fn.call(this, signal);
    cache[signalKey] = asyncFn;
    return asyncFn;
  };
}

async function expensiveFunction(signal: AbortSignal): Promise<string> {
  const response = await fetch("https://example.com", { signal });
  return await response.text();
}

const controller = new AbortController();
const signal = controller.signal;
await expensiveFunction(signal); // fetches then returns the response
await expensiveFunction(signal); // fetches again then returns the response
const memoizedFn = memoizeAsync(expensiveFunction);
console.log(memoizedFn);
const p1 = await memoizedFn(signal); // fetches then returns the response
console.log(p1);
const p2 = await memoizedFn(signal); // returns immediately as the result was cached
console.log(p2);
