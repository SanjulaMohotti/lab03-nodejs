const fs = require('fs');

fs.writeFile('file.txt', 'Hello World from Write Feature!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});