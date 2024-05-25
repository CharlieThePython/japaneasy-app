
function randomizer(array,translationsArray){
  const newMainArray = []
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];// Changing Elements
          [translationsArray[i], translationsArray[j]] = [translationsArray[j], translationsArray[i]];
        }
        newMainArray.push(array);
        newMainArray.push(translationsArray);
        return newMainArray;
}
export function kanaRandomizer(kanaArray,kanaTranslations){
let newArray = [];
let newTranslationsArray = [];
    kanaArray.map((element)=>{
        newArray.push(...element)
    })
    kanaTranslations.map((element)=>{
      newTranslationsArray.push(...element)
  })
    console.log('newArray',newArray);
    return randomizer(newArray,newTranslationsArray);
}