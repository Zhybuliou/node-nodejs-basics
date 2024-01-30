import { Worker } from 'worker_threads';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import  os from 'os';

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = __dirname + '/worker.js';
    const cpusLength = os.cpus().length;
    const results = [];

    for (let i = 0; i < cpusLength; i++) {
        const workerResult = await new Promise((resolve) => {
            const worker = new Worker(file, { workerData: 10 + i });
            worker.on("message", (message) =>
              resolve({ status: "resolved", data: message })
            );
            worker.on('error', () => {
                resolve({ status: 'error', data: null });
              });
      }) 
      results.push(workerResult);
    }
      console.log(results)
};

await performCalculations();