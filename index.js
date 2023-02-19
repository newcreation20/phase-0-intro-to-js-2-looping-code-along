function writeCards(names){
  let messages = []
for (let i = 0; i < names.length; i++) {
    // console.log(`I'm ${age} years old. Happy birthday to me!`);
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return messages
}

function countDown(number){
    for (let i = number; i >= 0 ; i--){
        console.log(i)
    }
}