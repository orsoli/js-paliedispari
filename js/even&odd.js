/* Even and Odd
    The user chooses between even or odd and enters a number from 1 to 5.
    Generate a random number from 1 to 5 for the computer.
    Determine if the sum of the two numbers is even or odd.
    Declare the winner.
*/

/* Structur
    1. Get from user inputs 'even' or 'odd' and a nr from 1 to 5
    2. Create variables to save the inputs from user
    3. Create a function to generate a rendom nr from 1 to 5
        - Name the function generatePcNumber  expect no parameters
        - Create a rendom nr
        - Return this nr
    4. Create a variable to save the sum of tow numbers(userNr and pcNr)
    5. Create a function to check if the sum is even or odd
        - Name the function isEvenOdd expect a parameter sum
        - Create let variable empty string to save the result
        - Chek if this sum is even or odd
        - if is even result = 'even'
        - if is odd result = 'odd'
    6. Compare the result with user input if result === user input print 'The winer is User' 
    else 'the winer is pc'
*/

//--- Preparation phase
// Create variables
const userWord = prompt('Choose even or odd', 'even').trim().toLocaleLowerCase() // Get word user input trim end lower case
const userNumber = parseInt(prompt('Choose a nr from 1-5', 4).trim()) // Get number input
const min = 1; // Min nr to generate
const max = 5; // Max nr to generate
const message = 'The winner is:'

//! Validation
switch (true) {
    case userWord !== 'even' && userWord !== 'odd': // Check if userWord is not 'even' or 'odd'
    case isNaN(userNumber): // Check if userNumber is not a number
    case !userNumber: // Check if userNumber is empty
    case isNaN(userNumber < 1): // Check if userNumber is less than 1
    console.log('!ERROR: Your inputs are incorrect')
    break

    default:        
        /**
         * 
         * @returns {number}
        */
       // Create generate ps number functions
       function generatePcNumber(){
           // Generate a nr from min to max
           const pcNumber = Math.floor(Math.random()*(max - min + 1)) + min
           console.log(`Pc nr is:${pcNumber}`) // Print in consol pcnumber
           
           return pcNumber // Return pcNumber
        }
        
        // Save the sum of tow numbers
        const sum = userNumber + generatePcNumber();
        console.log('The sum is:',sum) // Print in console the sum 
        
        // Create check even or odd function
        function isEvvenOdd (sum){
            let result = sum % 2 === 0 ? 'even' : 'odd' // Chek if is even or odd
            console.log(result)
            
            return result // Return the result
        }
        
        // --- Proccesing phase
        // Compare the reult with userWord to declear the winer
        const winner = userWord === isEvvenOdd(sum) ? `${message}User` : `${message}PC`
        
        console.log(winner)
    }   