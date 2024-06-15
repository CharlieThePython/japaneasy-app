import { hiraganaSymbols } from "@/src/kanas/kanas";
import "../../styles/PracticeHiragana.css";

const HiraganaTable = () => {
  const symbolsPerRow = 5;
  const yoIndex = hiraganaSymbols.indexOf("よ");

  const rows = [];
  let row = [];
  for (let i = 0; i < hiraganaSymbols.length; i++) {
    row.push(hiraganaSymbols[i]);

    // Si es el símbolo 'yo', inserta un salto de línea después de este símbolo
    if (i === yoIndex) {
      rows.push(row);
      row = [];
    } else if (row.length === symbolsPerRow) {
      // Si la fila alcanza su límite de símbolos, agrégala y comienza una nueva fila
      rows.push(row);
      row = [];
    }
  }

  // Agrega la última fila si no está vacía
  if (row.length > 0) {
    rows.push(row);
  }

  return (
    <table className="kana-table">
      <tbody className="kana-table-body">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="kana-table-body-tr">
            {row.map((symbol, columnIndex) => (
              <td key={columnIndex} className="kana-table-body-td">
                {symbol}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default HiraganaTable;
