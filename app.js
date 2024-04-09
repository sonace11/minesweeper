//NOTE - 
/* 
redline is javascript object (rl)
*/

// step 1 : include the readline module 
// const readline = require('readline')

// //step 2: create an instance of readline .Interface
// const rl = readline.Interface({
//     input: process.stdin, 
//     output: process.stdout
// })

// step 3: promt the user for their name 
// rl.question('what is your name?', (name) => {
//     // step 4: display greeting 
//     console.log(`Hello, ${name}!`)
//     rl.close()
//})
// step 5: close the readline interface.


// Include the read line module for command line input 
const readline = require ('readline')

//create an interface for the input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// function to generate a random number between min and max ( inclusive)
function getRandomInteger(min, max){
    min = Math.ceil(min) 
    max = Math.floor(max)
    return Math.floor(Math.random()* (max-min +1)) + min
}

// The secert number to guess between 1 and 100 
const secertNumber = getRandomInteger(1,100)

//counter for number of attempts
let attempts = 0

console.log('Guess the number! It\'s between 1 and 100. You have unlimited attempts.')

// create a fuction to start the game 
function guessNumber() {
    rl.question( 'Enter your guess:',(answer)=> {
        attempts += 1 // increment the number of attemps
        const guess = parseInt(answer,10) // converting the input string to number

        //check if the guess is correct, too high or too low
        if(guess === secertNumber) {
            console.log(`Correct! the number was ${secertNumber}. It took you ${attempts} attempts. `)
            rl.close()
        } else if (guess < secertNumber) {
            console.log('Too low!')
            guessNumber()
        } else if ( guess > secertNumber) {
            console.log('Too high') 
            guessNumber()
        } else {
            console.log('Please enter a valid number')
            guessNumber()
        }
    })
}

guessNumber()