const express = require('express');
const path = require("path");
const { exec } = require('child_process');
const jarFilePath = './tmis-0.0.1-SNAPSHOT.jar';
const buildFilePath = '../tmis run windows/build';
const app = express();
const baseLocalOrigin = 'http://localhost:'
const port = 8088;

exec(`java -jar ${jarFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing JAR file: ${error}`);
      return;
    }
  
    // Process the output
    // console.log(stdout);
  });
app.use(express.static(path.join(__dirname, `${buildFilePath}`)));
app.use(express.static("public"));


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, `${buildFilePath}/index.html`));
});

app.listen(port, () => {
    console.log(`Server is running on ${baseLocalOrigin}${port}`);
});