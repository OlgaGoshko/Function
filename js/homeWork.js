 // Телефонна книга, де є можливість:
// 1. додавати номер телефону
// 2. змінювати номер телефону
// 3. додавати номер телефону у чорний список
// 4. видалити номер телефону

const phoneNumber = {
   roman: {
       tel: '+380952365824',
       blacklist: false,
   },
   kolia: {
       tel: '+380952365824',
       blacklist: true,
   },
   olia: {
       tel: '+380952365824',
       blacklist: false,
   },
}

function addNumber(){
   const name = prompt('Введіть ім*я, під яким бажаєте записати номер: ')
   const number = prompt('Введіть номер телефону: ')
   const blackListStatusPrompt = prompt('Чи додати елемент в чорний список (так або ні): ')
   let blackListStatusValue = false

if (blackListStatusPrompt === 'так'){
   blackListStatusValue = true
} 

   phoneNumber[name] = {
       tel: number,
       blacklist: blackListStatusValue,
   }
}

addNumber()
console.log(phoneNumber)

function setNumber(){
   const name = prompt('Введіть ім*я, в якому бажаєте змінити номер телефону: ')
   const number = prompt('Введіть номер телефону: ')

   if (phoneNumber[name]){
       phoneNumber[name].tel = number
   } else {
       console.log('Такого запису не існує')
   }
}

// setNumber()
// console.log(phoneNumber)

function blackListNumber(){
   const name = prompt('Введіть ім*я, номер телефону якого бажаєте додати в чорний список: ')
   const number = prompt('Введіть номер телефону: ')
   let blackListStatusValue = true

   phoneNumber[name] = {
      tel: number,
      blacklist: blackListStatusValue,
   }
}

// blackListNumber()
// console.log(phoneNumber)

function deleteNumber(){
   const name = prompt('Введіть ім*я, номер телефону який бажаєте видалити: ')
  
   delete phoneNumber[name]
}

// deleteNumber()
// console.log(phoneNumber)
