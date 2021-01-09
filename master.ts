import cluster from 'cluster';
import os from 'os';
const pid = process.pid;

if (cluster.isMaster) {
    console.log(`Master started. PID: ${pid}`);

    const cpus = os.cpus().length;
    for (let i = 0; i < cpus - 1; i++) {
        let worker = cluster.fork();
        console.log(`Worker ${i + 1} started. PID: ${worker.process.pid}`);
        worker.on('exit', () => {
            console.log(`Worker ${i + 1} restarted. PID: ${worker.process.pid}`);
            worker = cluster.fork()
        });
    }
}

if (cluster.isWorker) {
    require('./worker.ts')
}