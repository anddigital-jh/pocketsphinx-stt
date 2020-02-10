const convertAndTranscribe = require('./index.js').convertAndTranscribe;
const transcribe = require('./index.js').transcribe;

const filePath = process.argv[2];

// transcribe(filePath)
//     .then((res) => {
//     console.log('transcribe', res);
//     })

const videoFilePath = process.argv[2];
convertAndTranscribe(videoFilePath)
    .then((res) => {
    console.log('transcribe', res);
    })
