'use client'

import { hiraganaPracticeSymbols, hiraganaSymbols } from '@/src/kanas/kanas';
import { divideArrayIntoRows } from '@/src/kanas/practiceFunctions';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import '@/src/styles/Study.css'
import { kanaRandomizer } from '@/src/kanaRandomizer/kanaRandomizer';

function StudyHiraganaComponent() {
  const searchParams = useSearchParams();
  const data = searchParams.get('receivedData');
  console.log('searchParams',data)
  const [receivedData, setReceivedData] = useState([]);
  
  const storedIndices = localStorage.getItem('receivedData');
  console.log('storedIndices',storedIndices)

  useEffect(() => {
    // Obtenemos los datos almacenados en localStorage
    const storedData = localStorage.getItem('receivedData');
    console.log('Datos almacenados en localStorage:', storedData);
    // Si hay datos almacenados, los establecemos en el estado
    if (storedData) {
      setReceivedData(JSON.parse(storedData));
    }
  }, []);


  console.log('receivedData',receivedData)

  const filteredRows = hiraganaPracticeSymbols.filter((element, index) => receivedData.includes(index));
  console.log('filteredRows',filteredRows)
  kanaRandomizer(filteredRows);
  return (
    <div>
      <h1>Study Hiragana</h1>
      <h1 className='kana-h1'>{receivedData ? (
        filteredRows.map(element =>{
          return element;
        })
      ) : (
        <p>No data received</p>
      )}
      </h1>
    </div>
  );
}

export default StudyHiraganaComponent;
