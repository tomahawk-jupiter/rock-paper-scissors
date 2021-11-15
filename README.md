# Rock, Paper, Scissors

A rock, paper, scissors game. Created to practice JavaScript and DOM manipulation aswell as working with Git and GitHub.

### Useful Functions:

##### window.prompt()
Instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

    prompt("message for user", defaultValue);

##### Ternary operator chaining

Can be used to return values conditionally or set variables:

    return condition? if true return this
        : if not new condition ? if thats true return this
        : otherwise return this;

##### split()
Used to split a string up into an array of substrings depending on the argument given. I used it to split by empty space and so it returned an array of words.

##### event.target.value

Get the value attribute from the target element on click event.

-----

### Improvement ideas

I don't like that there are so many if/else statements in the playRound function, there must be a better way to do this.
