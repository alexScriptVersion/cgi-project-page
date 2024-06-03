// Include the fs module
const fs = require("fs");
const path = require("path");

// Specify the path of the CSV file
const filePath = "task_statuses.csv";

let outputData;

// Read the CSV file
fs.readFile(path.resolve(__dirname, filePath), "utf8", (err, data) => {
  if (err) {
    console.error("Error while reading:", err);
    return;
  }

  // Split the data into lines
  const lines = data.split("\n");

  // Initialize the output array
  const output = [];

  // Loop through each line and split it into fields
  lines.forEach((line) => {
    const fields = line.split(",");
    output.push(fields);
  });

  // Log the output array
  console.log(output[1]);

  assignData(output);

})

function assignData(data) {
  outputData = data;
  //console.log(outputData)
  //export outputData;
}

// otherwise, try fs.readFileSync(filename, [encoding]). See https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile.