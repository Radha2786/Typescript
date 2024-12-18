function processPromises<T>(...promises: Promise<T>[]): Promise<(T | -1)[]> {
    const results: (T | -1)[] = [];
    let shouldStop = false;
  
    return promises.reduce<Promise<(T | -1)[]>>(async (acc, promise) => {
      if (shouldStop) return acc;
  
      const accumulatedResults = await acc;
      try {
        const result = await promise;
        accumulatedResults.push(result);
      } catch {
        accumulatedResults.push(-1);
        shouldStop = true; // Stop processing further promises
      }
      return accumulatedResults;
    }, Promise.resolve(results));
  }
  
  // Example Usage
  (async () => {
    const promise1 = Promise.resolve(42);
    const promise2 = Promise.reject("Error");
    const promise3 = Promise.resolve(99);
  
    const results = await processPromises(promise1, promise2, promise3);
    console.log(results); // Output: [42, -1]
  })();
  