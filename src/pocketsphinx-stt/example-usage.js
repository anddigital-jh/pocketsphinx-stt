const pocketsphinx_transcribe = require('./index.js');

const audioFile = process.argv[2];

pocketsphinx_transcribe(audioFile).then((result) => {
  console.log(JSON.stringify(result, null, 2));
}).catch((error) => {
  console.log(error);
});