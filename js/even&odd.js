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
        - Name the function generatePcNumber  expect tow parameters min and max
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
// Retrieve interested elements in DOM
const evenOddFormElement = document.getElementById('evenOdd-form')
const userWordElement = document.getElementById('evenOdd-select')
const userNumberElement = document.getElementById('user-number') 
const evenOddResultFormElement = document.getElementById('evenOdd-result-form')
const messageElement = document.getElementById('evenOdd-message')
const playAgainBtnElement = document.getElementById('play-again-btn')
const resultUserNumberElement = document.getElementById('result-user-number')
const resultUserSelectedElement = document.getElementById('result-user-selected')
const resultPcNumberElement = document.getElementById('result-pc-number')
const resultPcSelectedElement = document.getElementById('result-pc-selected')
const resultSumElement = document.getElementById('result-sum')
const resultSumEvenOddElement = document.getElementById('result-sum-evenOdd')
// Create variable
const min = 1; // Min nr to generate
const max = 5; // Max nr to generate
const message = 'The winner is:'
        
/**
 * 
 * @param {1} min // Min number to generate
 * @param {5} max // Max number to generate
 * @returns {number}
 */
// Create function to generate pc rendom nr
function generatePcNumber(min, max){
    // Generate a nr from min to max
    const pcNumber = Math.floor(Math.random()*(max - min + 1)) + min
    return pcNumber // Return pcNumber
}
// Create function to select the pc word
function selectPcWord(userWord){
    const pcWord = userWord === 'even'? 'odd' : 'even' // Check the user selected to define the pc selected
    return pcWord
}
// Create check even or odd function
function isEvvenOdd (sum){
    let result = sum % 2 === 0 ? 'even' : 'odd' // Chek if is even or odd
    return result // Return the result
}

// --- Proccesing phase
// Add event listener on form element
evenOddFormElement.addEventListener('submit',function(e){
    e.preventDefault(); // Prevent the default form submission action
    const userNumber =  parseInt(userNumberElement.value) // Save the user number
    resultUserNumberElement.innerText += userNumber // Print the user number in resultUserNumberElement on DOM
    const userWord = userWordElement.value // Save the user selected word
    resultUserSelectedElement.innerText += userWord // Print the word in user selected result element on DOM
    const pcNumber = generatePcNumber(min, max) // Save pc number
    const sum = userNumber + pcNumber // Save the sum of tow numbers
    resultSumElement.innerText += sum // Print in result sum element on DOM
    resultPcNumberElement.innerText += pcNumber // Print the Pc rendom number in resultPcNumberElement on DOM
    resultPcSelectedElement.innerText += selectPcWord(userWord) // Print the Ps selected in Dom element
    resultSumEvenOddElement.innerText += isEvvenOdd(sum) // Print the Ps selected in Dom element
    // Compare the reult with userWord to declear the winer
    const winner = userWord === isEvvenOdd(sum) ? `${message}Player` : `${message}CPU`
    // Print message in resultMesssageElement on DOM
    messageElement.innerText = winner

    evenOddFormElement.classList.add('d-none') // Hidden the form element
    evenOddResultFormElement.classList.remove('d-none') // Show the form element
})
