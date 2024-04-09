//NOTE - 
/* 
redline is javascript object (rl)
*/

// step 1 : include the readline module 
const readline = require('readline')

//step 2: create an instance of readline .Interface
const rl = readline.Interface({
    input: process.stdin, 
    output: process.stdout
})

// step 3: promt the user for their name 
rl.question('what is your name?', (name) => {
    // step 4: display greeting 
    console.log(`Hello, ${name}!`)

})
// step 5: close the readline interface.
rl.close()