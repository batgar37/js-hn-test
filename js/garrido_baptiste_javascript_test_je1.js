var array_number = new Array(9);
array_number[0] = "4 2 7 3 5 1 9 8 6";
array_number[1] = "9 8 3 7 6 2 5 1 4";
array_number[2] = "1 5 6 8 9 4 7 2 3";
array_number[3] = "2 3 9 1 8 5 4 6 7";
array_number[4] = "7 4 1 6 3 9 2 5 8";
array_number[5] = "5 6 8 2 4 7 1 3 9";
array_number[6] = "8 7 2 9 1 3 6 4 5";
array_number[7] = "3 9 5 4 2 6 8 7 1";
array_number[8] = "6 1 4 5 7 8 3 9 6";

const table = document.getElementById("to_verify");

for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
  let row = document.createElement("tr");
  for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
    let cell = document.createElement("td");
    cell.textContent = (rowIndex * 9 + columnIndex + 1).toString();
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// arrayOneDimension must respect the format
// x line for x numbers in a string separated by a coma
const readTable = (arrayOneDimension) => {
  let toCheck = [];
  for (let index = 0; index < arrayOneDimension.length; index++) {
    const line = arrayOneDimension[index];
    toCheck.push(line.split(" "));
  }
  return toCheck;
};

const displayToVerify = (arrayOneDimension) => {
  // creating a Two Dimension table to verify
  const to_be_verify = readTable(arrayOneDimension);
  // get our HTML table
  const table = document.getElementById("to_be_verify");

  // Fill the HTML table with the two dimension array
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    let row = document.createElement("tr");
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      let cell = document.createElement("td");
      cell.textContent = to_be_verify[rowIndex][columnIndex];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
};

displayToVerify(array_number);
