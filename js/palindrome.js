/* Exercise:
        Palindrome
    Ask the user to input a word.
    Create a function to determine if the input word is a palindrome
*/

/* Structure:
    1. Get the input word from user
    2. Create a function who return our result if the word is Palindrome or not
        - Name this function: 'isPalindrome
        - This function expects one paramter
        - Create a loop to reverse the input word take from user
        - Check the new reverse word if is === input word
        - Return the result
    3. Call the function
*/

// Version-1

// // --- Preparation Phase
// // Create variable to save the input word
// const inputWord = prompt('Insert a word', 'orsro').trim()

// // Create a function to check input word
// function isPalindrome(inputWord){
//     // Create a variable to save the reverse word
//     let reverseWord = "";
//     // Create a loop to reverse the input word
//     for(let i = inputWord.length - 1; i >= 0; i--){
//         // Add letters in reverseWord
//         reverseWord += inputWord.charAt(i)
//     }
//     // Create condition for the result
//     const result = inputWord === reverseWord ? console.log(`${inputWord} is a Palindrome word`) : console.log(`${inputWord} is not a Palindrome word`)
//     // Print in console the result
//     return result;
// }

// //--- Proccesing phase
// // Call back function
// isPalindrome(inputWord)



// Version-2

// --- Preparation Phase
// Create variable to save the input word
const inputWord = prompt('Insert a word', 'orsro').trim()

// Create a function to check input word
function isPalindrome(inputWord){
    // Create a variable to save the reverse word
    const reverseWord = inputWord.split('').reverse().join('')
    // Create condition for the result
    const result = inputWord === reverseWord ? console.log(`${inputWord} is a Palindrome word`) : console.log(`${inputWord} is not a Palindrome word`)
    // Print in console the result
    return result;
}

//--- Proccesing phase
// Call back function
isPalindrome(inputWord)

