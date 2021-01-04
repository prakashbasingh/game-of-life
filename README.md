# game-of-life
https://conway-game-of-life-by-pbs.netlify.app/
![Alt game-of-life-image](./Game-of-life.JPG)

## rules
- Any live cell with fewer than two live neighbors dies, as if by under population.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## coding process
1) create react app using npx create-react-app app-name
2) four components created main, grid, box and button.
3) in main component, first, using class component initial state(value) of speed, rows, columns, and empty array inside array (2d array- mainGrid) setup implemented. 
