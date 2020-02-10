const convertAndTranscribe = require('./index.js').convertAndTranscribe;
const transcribe = require('./index.js').transcribe;

console.log(process.argv[2]);

const filePath = '/app/test.mp3';

// transcribe(filePath)
//     .then((res) => {
//     console.log('transcribe', res);
//     })

const videoFilePath = filePath;
convertAndTranscribe(videoFilePath)
    .then((res) => {
    console.log('transcribe', res);
    })
