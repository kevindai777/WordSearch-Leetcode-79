//Java Solution

class Solution {
    public boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == word.charAt(0) && dfs(i, j, word, board, 0)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    public boolean dfs(int i, int j, String word, char[][] board, int index) {
        if (index == word.length()) {
            return true;
        }
        
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word.charAt(index)) {
            return false;
        }
        
        board[i][j] = '#';
        if (dfs(i + 1, j, word, board, index + 1) || dfs(i - 1, j, word, board, index + 1) || dfs(i, j + 1, word, board, index + 1) || dfs(i, j - 1, word, board, index + 1)) {
            return true;
        }
        
        board[i][j] = word.charAt(index);
        
        return false;
    }
}