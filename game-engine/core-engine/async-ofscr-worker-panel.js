let ofscr = null;
let ctx = null;
const ELes = [];

let upcnt = 0;
let rendercnt = 0;

window.addEventListener('load', () => {
    ofscr = document.querySelector('#gameCanvas').transferControlToOffscreen();
    ctx = ofscr.getContext('2d');
});

const width = 800;
const height = 600;

// 创建主线程的 OffscreenCanvas
const mainCanvas = new OffscreenCanvas(width, height);
const mainContext = mainCanvas.getContext('2d');

// 创建多个 Worker 线程的 OffscreenCanvas
const numWorkers = 4;
const workers = [];

for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker('./core-engine/work-ofscr.js');
    workers.push(worker);
}

// 在主线程中创建 Worker 线程并分配粒子进行绘制
function startDrawing() {
    const len = Math.ceil(ELes.length / numWorkers); // 调整粒子的分配方式
    const promis = workers.map((worker, idx) => new Promise((resolve, reject) => {
        const start = idx * len;
        const end = Math.min(start + len, ELes.length);
        const element = ELes.slice(start, end);
        worker.onmessage = (evt) => {
            resolve(evt.data.bitmap);
        };
        worker.postMessage({ ELes: element });
    }));
    Promise.all(promis).then((bitmaps) => {
        rendercnt++;
        mainContext.clearRect(0, 0, width, height);
        bitmaps.forEach((bitmap) => {
            mainContext.drawImage(bitmap, 0, 0);
        });
    });
}

function clear() {
    ctx.clearRect(0, 0, width, height);
}

function trueRender() {
    upcnt++;
    console.log(`up:${upcnt}`, `rd:${rendercnt}`);

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(mainCanvas, 0, 0);
    startDrawing();
    ELes.length = 0;
}

export {
    ELes,
    trueRender
};
