//Objective is to see whether a word is inside a given 2-D array word search.

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"


//O(n^2) solution similar to 'Number of Islands' where we traverse every possible
//element and dfs from a correct element to find the other correct ones.

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        //Make sure you only call the function if the first character is correct
        if (board[i][j] == word[0] && dfs(i, j, 0)) {
            return true
        }
    }
}

function dfs(i, j, index) {
    if (index == word.length) {
        return true
    }

    if (i < 0 || i >= board.length || board[i][j] !== word[index]) {
        return false
    }

    //Mark as visited
    board[i][j] = '0'

    if (dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1)
    || dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1)) {
        return true
    }

    //Revert the tile back to the initial letter after dfs
    board[i][j] = word[index]

    return false
}

return false