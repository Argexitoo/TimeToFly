# Project's name
​
TimeToFly
​
## Description
​
The game consists on trying to reach space using a balloon. During the journey into space, birds will appear that could collide with the balloon, thus causing it to explode and return to the starting point.
​
## MVP
​
The MVP includes the following items graphically represented by colors:
​
- Ballon movement with the left,right,up and down arrow
- Marker with current altitude
- Start Screen
- Game over screen
- Win Screen
- Splash Screen
​
## Backlog / nice to have
- That the background changes as the balloon gets higher
- Enemies appear randomly
- Music and sounds
- Be able to climb faster using updrafts
​
## Data structure
class Player {properties: life, direction. Methods: goRight, goLeft}

class Enemy {properties: direction.Methods: _appear, _move}

class Game { properties: player, enemies. Methods:\_start,\_update,\_paint}
​
## States & States Transitions
​
Definition of the different states and their transition (transition functions):
​
- startScreen - Instructions and start button
- gameoverScreen - If the balloon breaks, you lose.
- winScreen - You win once you get to space
- pauseScreen - Pause the game
​
### Git
​
URls for the project repo and deploy
[Link Repo](https://github.com/argexitoo/timetofly)
​
