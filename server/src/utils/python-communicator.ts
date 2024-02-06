const { spawn } = require("child_process");
const path = require("path");

export const pdfDataExtractor = () => {
  const pythonProcess = spawn("python", [path.resolve(__dirname, "../../pythons-scripts/pdfparser.py")]);

  let pythonOutput = Buffer.from([]);
  
  pythonProcess.stdout.on("data", (data) => {
    pythonOutput = Buffer.concat([pythonOutput, data]);
  });
  
  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python Error: ${data}`);
  });
  
  pythonProcess.on("close", (code) => {
    const decodedOutput = pythonOutput.toString("utf-8");
    return decodedOutput;
    
  });
}
