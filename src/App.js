import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)

      // your code here!
      for (let i = 0; i < currentWord.length; i += 1) {
        let individualLetter = currentWord[i]} 
        if (isVowel(individualLetter) != -1 && i === 0) { 
            return vowelsArray + "way"}
      }
      
      // Remember: console.log is your friend :)
       
      // filter vowelsArray into the different categories
        //
      // filter the array for "qu" 
      //add  qu to the end and add "ay"
      // if (vowelsArray.includes("q","u")) { 
      //   vowelsArray.shift()//move all character after "u"to (0),
         //push characters removed to the end, 
         //add "quay" to the end of array
         

              
      // filter for vowels at char(0)
      //for words starting with a vowel add way to end of array
         // add "w","a", "y" to the end using push
        //  if(vowelsArray.charAt(0) = ["a","e","i","o","u"])  {

          // filter the array for "qu" 
          //add  qu to the end and add "ay"
          // if (vowelsArray.includes("q","u")) { 
          //   vowelsArray.shift()//move all character after "u"to (0),
             //push characters removed to the end, 
             //add "quay" to the end of array
      
      // filter for y at the end of the array add "y" to the beginning of the array and "ay" to the end of the array
      // use unshift
        //* if(vowelsArray.length)
        //   if(      = "y") 
        

      // filter for y at the beg of the array add "yay" to the end
      //use shift and push "y","a","y"
        //  if(vowelsArray(charAt(0)) = "y")


              
        // else
         // for words starting with consonants
         // move consonants to the end and add "a","y" to the end of the array
          // (vowelsArray.push(vowelsArray(0),(vowelsArray.push("a","y"))))
         
         
         

    

      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      // return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by ~JB & Logan~</footer>
      </>
    )
  }
}

export default App
