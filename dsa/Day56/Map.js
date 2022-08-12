// const obj = {
//     3232:{
//         name:"Utkarsh",
//         city:'agra'
//     }
//     '3232':{

//     }
// }

const map = new Map();

map.set("name", "Utkarsh");
map.set("college", "LPU");

const name = map.get("name");
const colg = map.get("college");

// console.log(name,colg)

// map.clear()

const entries = map.entries();

// console.log(entries)

// map.delete('college')

// map.forEach((value,key)=>{
//     console.log(value,key)
// })

const isName = map.has("Utkarsh");

// console.log(isName)

console.log(map.size);
