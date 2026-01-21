Pokémon Memory Card Game:

A fun and interactive memory card game built with React.
Test your memory by clicking on Pokémon cards — but don’t click the same card twice!

This project uses the PokéAPI to fetch real Pokémon data and images dynamically.
Cards are shuffled using the Fisher–Yates algorithm, ensuring an unbiased and efficient shuffle after every move.

Live Demo: https://memory-card-eight-omega.vercel.app/

Built With:

1)React (Hooks)
2)JavaScript (ES6+)
3)CSS
4)PokéAPI

How to Play:

1)The game starts with a grid of Pokémon cards.
2)Click on a Pokémon card to earn 1 point.
3)After every click, all cards are shuffled.
4)Do not click the same Pokémon more than once.
5)Clicking a Pokémon you’ve already clicked will reset your score to 0.
6)Your High Score is saved and updated whenever you beat it.

Win Condition:

Click 15 unique Pokémon cards without repeating any.
When you win, the game resets and you can try again!

Scoring System:

1)Correct (new Pokémon): +1 point
2)Repeated Pokémon: Score resets to 0
3)High Score: Tracks your best performance

Features:

1)Dynamic Pokémon data from PokéAPI
2)Card shuffle after every click
3)Score and High Score tracking
4)Win detection and game reset
5)Responsive layout

API Used:

PokéAPI
– Pokémon data and official artwork

What I Learned:

1)Working with React hooks (useState, useEffect)
2)Creating custom hooks
3)Managing game state
4)Handling side effects properly in React
5)Fetching and transforming API data

Future Improvements

1)Difficulty levels
2)Timer mode
3)Sound effects
4)Mobile animations
5)Leaderboard

Author:

Anuj Kumar
GitHub: https://github.com/Anuj-Kumar0
