# Rock, Paper, Scissors

### Instructions:

1. A function for the computer to randomly pick rock, paper, or scissors. Call it **computerPlay()**.
2. A function that plays one round of the game by taking in a users move (case-insensitive) and the computers move and returning the result as a string eg. "You Lose! Paper beats Rock".
3. A function that plays a 5 round game using the previous function. Call it **game()**.
4. The game won't have a UI for now, it will use prompt() to take user input and display results in the console.

-----
### Subproblems

##### How to pick move by random:

Use **Math.random()** to get a random number between 1-3. Then:

1. Create an array of "moves" and use the random number to pick the index for a move and return it, remember **zero indexing** for arrays.

Or ...

2. Use if/else statements to return different moves for different numbers.

##### How to compare the "moves":

Use **toLowerCase()** on users input so function is case insensitive.

There are multiple possible combinations of moves. How to get the result without overdoing the if statements? I'll come back to this question.

##### Play multiple rounds

This can be achieved with a for loop.

-----

### Things I learnt and practiced:

**window.prompt()** instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

    prompt("message for user", defaultValue);

**Ternary operator chaining** can be used like if/else statements. They can be used like below or used to set a variable.

    return condition? if true return this
        : if not new condition ? if thats true return this
        : otherwise return this;

**split()** used to split a string up into an array of substrings depending on the argument given. I used it to split by empty space and so it returned an array of words.

-----

### Improvement ideas

I don't like that there are so many if/else statements in the playRound function, there must be a better way to do this. 
