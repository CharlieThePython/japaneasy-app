export function divideArrayIntoRows(array, elementsPerRow) {
  const rows = [];
  let row = [];

  array.forEach((symbol, index) => {
    row.push(symbol);
    if (row.length === elementsPerRow) {
      rows.push(row);
      row = [];
    } else if (index === array.length - 1) {
      rows.push(row);
    }
  });

  if (rows.length >= 2) {
    const lastTwoRows = rows.slice(-2);
    const lastRow = lastTwoRows.pop();
    const secondLastRow = lastTwoRows.pop();

    const missingElementsLast = elementsPerRow - lastRow.length;
    const missingElementsSecondLast = elementsPerRow - secondLastRow.length;

    for (let i = 0; i < missingElementsLast; i++) {
      lastRow.push("");
    }

    for (let i = 0; i < missingElementsSecondLast; i++) {
      secondLastRow.push("");
    }
  }

  return rows;
}
