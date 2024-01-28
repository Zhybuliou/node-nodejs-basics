import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const scriptFile = __dirname + '/files/script.js';
    const childProcess = spawn('node', [scriptFile, args], { stdio: 'pipe' });

  childProcess.stdout.on('data', (data) => {
    console.log(`Received from child process: ${data.toString()}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`Error from child process: ${data.toString()}`);
  });

  process.stdin.pipe(childProcess.stdin);

  process.stdin.on('data', (data) => {
    if (data.toString().includes('CLOSE')) {
      childProcess.kill();
      process.exit(0);
    }
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '2']);
