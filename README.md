# The Triad
This game is for all puzzle lovers! 

The Triad is a version of the phone app Zen Match, which is inspired by the famous Mahjong. In this modern version, the tiles are placed on a board, and when clicked, they will go the bottom bar. But be careful! The bar can only hold "safely" 6 tiles, and in the 7th, the game is over! When three similar tiles are selected, they vanish from the bar. 

Once the board and the bottom bar are clean, you'll win the game!


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
    
### Built with
This application was built with:

* JavaScript
* React
* CSS
* HTML


## Getting Started
The project is deployed and it can be found in the link below:
[The Triad](https://AndreiaCifoni.github.io/TheTriad)

## Usage
In the Home page you can find three sections to choose between different difficulties. From the beginner to expert, the boards change in the shape and variety of tiles to be matched.

****photo Home Page

Each board has a nav bar with a Restart button to start the game all over and a Home button to come back to the Home page.

****photo board with game going on

When the game is lost, you can either Restart or come back to the Home to change the level of difficulty.
And when the tiles are cleaned from the board, a new board is open for play.


## Contact
Andreia Cifoni - andreiacifoni@gmail.com


## Acknowledgments
Helpful resources used during the constructions of the page:
- 




