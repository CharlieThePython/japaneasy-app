
function randomizer(){
    
}
export function kanaRandomizer(kanaArray){
let newArray = [];
    kanaArray.map((element)=>{
        newArray.push(...element)
    })

    console.log(newArray);
}