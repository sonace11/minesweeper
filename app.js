/*
create a function that take a grid of $ and - where each ($) repersents a mine and each(-) repersent mine-free spot.
Return an array where each ($) is replaced by a digit indicating the number of mines immediately mine adjecent to the spot!

mineGrid ([
    ["-","-","-","-","-"],
    ["-","-","-","-","-"],
    ["-","-","$","-","-"],
    ["-","-","-","-","-"],
    ["-","-","-","-","-"]
])
output ->    [
    ["0","0","0","0","0"],
    ["0","1","1","1","0"],
    ["0","1","$","1","0"],
    ["0","1","1","1","0"],
    ["0","0","0","0","0"]
]  
*/

//NOTE - create a function that accept a 2d array arr 
const mineGrid = (arr) => {
   //NOTE - Create a helper function that access the element position (y,x) in arr. if teh y index is valid or exist 
   // I want to return arr[y][x]; otherwise return null (this will prevent accessing undifined elements and to avoid arrors)
   const checkAccess = (y,x) => arr[y] ? arr [y][x] : null 
   //NOTE - Create a helper function that calculates the number of adjacent mines around the cell at position (y,x)
   const getMine = (y,x) => {
    //NOTE - an array is constructed with elements the repersent the content of adjacent cells
    // we are going to use checkAccess for each of the eight possible position adjacent position. 
    return [
       checkAccess(y+1, x), // checks the cell directly below the current (y,x)
       checkAccess(y +1,x +1), // checks the cell diagonally below and to the right of the current cell
       checkAccess ( y+1, x-1),// checks the cell diagonally below and to the left of the current cell
       checkAccess( y, x +1), // checks the cell directly to the right of the current cell.
       checkAccess( y, x -1), // checks the cell directly to the left of the current cell.
       checkAccess ( y -1, x), // check the cell direclt above the current cell.
       checkAccess( y -1, x +1), // check the cell diagonally above and right of the current cell
       checkAccess( y-1, x-1)// check the cell diagonally above and left of the current cell
//NOTE - Construct an array of values repersent the contents of the cells adjacents, after the contructing 
// of the array we will use filter method to keep those elemants that are mines ('$'). 
 ] .filter(adjCell => adjCell === "$").length.toString()
}
return arr.map((r,y) => r.map((c,x) => c === "-" ? getMine(x,y) : c))
}


// my faulty codes
const gridSize = 5
let grid =[]

for(let i= 0;i <  gridSize;i++){
    grid[i] = []
    for(let j=0; j <  gridSize;j++){
 grid [i][j] = ["-"]}
    }
    // faulty codes