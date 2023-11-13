// ++++++++++++ server.js ++++++++++++++++

import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';

import { Sequence } from './DateRange.js';

const PORT = 8000;

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
  wasm: "application/wasm",
};

const STATIC_PATH = path.join(process.cwd(), "./static");

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];
  if (url.endsWith("/")) paths.push("index.html");
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + "/404.html";
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http.createServer(async (req, res) => {
  const file = await prepareFile(req.url);
  const statusCode = file.found ? 200 : 404;
  const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
  res.writeHead(statusCode, { "Content-Type": mimeType });
  file.stream.pipe(res);
  console.log(`${req.method} ${req.url} ${statusCode}`);
})
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);


const startDate = new Date('2023 Dec 25');
const endDate = new Date('2024 Jan 22');
const sequence = Sequence.createSequenceOfDates(startDate, endDate, Sequence.MILLISECONDS_IN_A_DAY);
const strings = sequence.map(date => date.toDateString());

const items = ['activities', 'accomodation', 'meals', 'transport'];

for (const item of items) {
  fs.writeFile(`${item}.txt`, strings.join('\n\n'), function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}

// ++++ Sequence.js ++++

class Sequence { 
    constructor() {}

    static createSequenceOfNumbers(start, end, step) {
        const sequence = [];

        sequence.push(start, start + step);

        while (sequence.at(-1) < end) {
            sequence.push(sequence.at(-1) + step);
        }

        return sequence;
    }

    static createSequenceOfDates(startDate, endDate, step) {
        const [start, end] = [startDate.getTime(), endDate.getTime()];
        const sequence = Sequence.createSequenceOfNumbers(start, end, step);

        return sequence.map(n => new Date(n));
    }

    static MILLISECONDS_IN_A_DAY = 86400000;
}

export {
    Sequence,
}
