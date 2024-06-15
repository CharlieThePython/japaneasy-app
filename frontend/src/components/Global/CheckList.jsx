"use client";
import { useEffect, useState } from "react";

function CheckList({ setReceivedData }) {
  const [checkedIndices, setCheckedIndices] = useState([]);

  useEffect(() => {
    if (checkedIndices.length > 0) {
      document.getElementById("checklist-submit-button-id").style.display =
        "block";
    } else {
      document.getElementById("checklist-submit-button-id").style.display =
        "none";
    }
  });

  const handleCheckboxChange = (index) => {
    const currentIndex = checkedIndices.indexOf(index);
    let newIndices;
    if (currentIndex === -1) {
      // Si el índice no está en el array, lo agregamos
      newIndices = [...checkedIndices, index];
    } else {
      // Si el índice está en el array, lo eliminamos
      newIndices = checkedIndices.filter((i) => i !== index);
    }
    setCheckedIndices(newIndices);
    localStorage.setItem("receivedData", JSON.stringify(newIndices));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Para modo dev:
    // console.log("Índices de los checkboxes marcados:", checkedIndices);
    setReceivedData(checkedIndices);
  };

  const checkboxes = [];

  for (let i = 0; i < 10; i++) {
    checkboxes.push(
      <tr key={i}>
        <td className="checklist-td">
          <input
            type="checkbox"
            className="checklist-td-input"
            value={8}
            onChange={() => handleCheckboxChange(i)}
            checked={checkedIndices.includes(i)}
          />
        </td>
      </tr>
    );
  }

  return (
    <form
      id="checklist-form-id"
      className="checklist-form"
      onSubmit={handleSubmit}
      action=""
    >
      <table className="checklist">
        <tbody className="checklist-table">{checkboxes}</tbody>
      </table>
    </form>
  );
}

export default CheckList;
