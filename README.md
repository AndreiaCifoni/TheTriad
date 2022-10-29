# The Triad
This game is for all puzzle lovers! 

The Triad is a version of the phone app Zen Match, which is inspired by the famous Mahjong. In this modern version, the tiles are placed on a board, and when clicked, they will go to the bottom bar. But be careful! The bar can only hold "safely" 6 tiles, and in the 7th, the game is over! When three similar tiles are selected, they vanish from the bar. 

Once the board and the bottom bar are clean, you'll win the game!

________________________________________________________________________
## Getting Started
The project is deployed and it can be found in the link below:

[The Triad](https://AndreiaCifoni.github.io/TheTriad)

________________________________________________________________________
## Usage
In the Home page you can find three sections to choose between different difficulties. From the beginner to expert, the boards change in the shape and variety of tiles to be matched.

****photo Home Page

Each board has a nav bar with a Restart button to start the game all over and a Home button to come back to the Home page.

****photo board with game going on

When the game is lost, you can either Restart or come back to the Home to change the level of difficulty.
And when the tiles are cleaned from the board, a new board is open for play.

________________________________________________________________________
## About the project

### Challenges
During the construction of this project, I had some challenges with structure and design.

The first big challenge was the data structure of the board. I needed to set individual characteristics to each tile and, at the same time, place each piece in a position that allowed me to give the board the desired shape.

The design of the boards was made from sketch on paper so I could have an idea of how the disposition of elements was going to work on my screen.

The tiles should be allocated in separate objects so they can have the proper keys of title, url, and individual id. These values were going to be used to show properly the pieces on the board.

Then it was decided on how each layer was going to be placed, if it was going to overlap the pieces right on top of each other, or with a slight shift so the player could see the underneath tile and set their strategy.

Gathering all the information and the drawings, I could decide on organizing the objects in an array representing the rows of the board, then inside another array to represent the layers overlapped and the last array as the board. As the example below:

const tileLevel = [

  [{tile}, {tile}, {tile}],
  
  [{tile}, {tile}, {tile}],
  
  [{tile}, {tile}, {tile}],
  
];

const boardLayout = [ tileLevel1, tileLevel2, tileLevel3]


Another structural challenge was deciding how the Components were going to hold the content and what was their respective main role in the functionality of the game.

Drawing the game page and listing the activities to be performed by each individual block, for example, the bottom bar and the board, helped construct the working tree of components. In this tree, it was possible to set the parent/child components and where the functions and states were going to be placed so it could be shared for more than one element.

After listing all the actions that the game has and building their respective functions, it was time for the design. 

The main obstacle found in the design was to properly align the levels with the slight shift between the layers. The best choice for positioning was to work with a combination of CSS grid and flexbox.

By the design, since the middle level should be shifted, the best option was to implement the className with a ternary conditional in the level element. The CSS grid was applied and the composition of the board was right how I expected. The only problem was that an HTML element, the level `<div>`, was on top of my tiles, preventing the bottom layer from being clicked. 

After a lot of tests and research, the best approach found was to use "pointer-events" on the `<div>`, and in that way, I could click through the element and reach the layers underneath.

The project was finished by adjusting all the elements and making the media query for mobile responsiveness.
    
### Built with
This application was built with:

* JavaScript
* React
* CSS
* HTML

________________________________________________________________________
## Contact
Andreia Cifoni - andreiacifoni@gmail.com

Linkedin: https://linkedin.com/in/andreiacifoni


