// F31
const checkRows = (toCheck) => {
  const anomalies = [];
  for (let rowIndex = 0; rowIndex < toCheck.length; rowIndex++) {
    const row = toCheck[rowIndex];
    if (!checkFormat(row)) {
      anomalies.push(["Line " + (rowIndex + 1) + " incorrect", row]);
    }
  }
  return anomalies;
};

// F32
// toCheck must have a valid pattern (9 x 9)
const checkColumns = (toCheck) => {
  const anomalies = [];
  // for each i we are getting the column i
  for (let i = 0; i < toCheck.length; i++) {
    const col = toCheck.map((row) => row[i]);
    if (!checkFormat(col)) {
      anomalies.push(["Column " + (i + 1) + " incorrect", col]);
    }
  }
  return anomalies;
};

// toCheck must have a valid pattern (9 x 9)
// boxStartRow = 0 | 3 | 6
// boxStartCol = 0 | 3 | 6
const checkRegion = (toCheck, boxStartRow, boxStartCol) => {
  let region = [];

  for (let indexRow = 0; indexRow < 3; indexRow++) {
    for (let indexCol = 0; indexCol < 3; indexCol++) {
      region.push(toCheck[boxStartRow + indexRow][boxStartCol + indexCol]);
    }
  }

  if (!checkFormat(region)) {
    return [
      "Region " +
        (boxStartRow + (boxStartCol === 0 ? 1 : boxStartCol === 3 ? 2 : 3)) +
        " incorrect",
      region,
    ];
  }
  return;
};

// F33
// check All Regions
const checkRegions = (toCheck) => {
  const anomalies = [];
  let boxStartRow = 0;

  while (boxStartRow < 7) {
    let boxStartCol = 0;
    while (boxStartCol < 7) {
      let regionChecked = checkRegion(toCheck, boxStartRow, boxStartCol);
      regionChecked && anomalies.push(regionChecked);
      boxStartCol += 3;
    }
    boxStartRow += 3;
  }
  return anomalies;
};

// Append the results of the sudoku in the HTML
const result = () => {
  const result = document.getElementById("results");

  const tableReadable = readTable(array_number);
  res = [
    checkRows(tableReadable),
    checkColumns(tableReadable),
    checkRegions(tableReadable),
  ];

  if (res[0].length === 0 && res[1].length === 0 && res[2].length === 0) {
    let p = document.createElement("p");
    p.textContent = "The table is correct";
    result.appendChild(p);
  } else {
    let table = document.createElement("table");
    for (let checkingIndex = 0; checkingIndex < res.length; checkingIndex++) {
      const elem = res[checkingIndex];
      for (
        let anomalieIndex = 0;
        anomalieIndex < elem.length;
        anomalieIndex++
      ) {
        const anomalie = elem[anomalieIndex];
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        cell1.textContent = anomalie[0].toString();
        cell2.textContent = anomalie[1].toString();
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
        result.appendChild(table);
      }
    }
  }
};

result();
