const listFruits = [
   { name: 'banan', count: '20', pay: true,},
   { name: 'orange', count: '15', pay: false,},
   { name: 'apple', count: '30', pay: false,},
   { name: 'lemon', count: '45', pay: true,},
   { name: 'apricot', count: '50', pay: false,},
]


function main(){
   for (let index=0;index<listFruits.length;index++){
       if(listFruits[index].pay == false){
           console.log(listFruits[index].name)
       }
   }

   for (let index=0;index<listFruits.length;index++){
       if(listFruits[index].pay == true){
           console.log(listFruits[index].name)
       }
   }
}
main()


function addFruits(){
   for (let index=0;index<listFruits.length;index++){
      if(listFruits[name] == false){
          console.log(listFruits[name].name)
      }
  }
}


console.log(listFruits)
