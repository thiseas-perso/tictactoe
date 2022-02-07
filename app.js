

const Gameboard = (() => {
   const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
   ];
   return { board }
})();


const Player = (name, symb) => {
   let turn = true;
   const getName = () => name;
   const playSymb = () => symb;
   return { turn, getName, playSymb };
};





const gameFlow = (() => {
   const player1 = Player('first', 'X')
   const player2 = Player('second', 'O')
   let gamePlaying = true;
   let playsCount = 0;

   const play = (e) => {

      if (gameFlow.gamePlaying && player1.turn && e.target.innerText == "") {
         e.target.innerText = player1.playSymb();
         indexI = e.target.id[6];
         indexJ = e.target.id[8];
         Gameboard.board[indexI][indexJ] = player1.playSymb();
         player1.turn = false;
         player2.turn = true;
      } else if (gameFlow.gamePlaying && player2.turn && e.target.innerText == "") {
         e.target.innerText = player2.playSymb();
         indexI = e.target.id[6];
         indexJ = e.target.id[8];
         Gameboard.board[indexI][indexJ] = player2.playSymb();
         player2.turn = true;
         player1.turn = true;
      }
      if (gameFlow.gamePlaying) {
         gameFlow.playsCount++;
         checkWin()
         checkTie()
      }
   }

   const checkWin = () => {
      const board = Gameboard.board;
      //check rows and columns
      for (let i = 0; i < 3; i++) {
         let rows = "";
         let columns = "";

         for (let j = 0; j < 3; j++) {
            rows += board[i][j];
            columns += board[j][i];

         }

         switch (rows) {
            case 'XXX':
               console.log('X wins');
               gameFlow.gamePlaying = false;
               break;
            case 'OOO':
               console.log('O wins');
               gameFlow.gamePlaying = false;
               break;
         }
         switch (columns) {
            case 'XXX':
               console.log('X wins');
               gameFlow.gamePlaying = false;
               break;
            case 'OOO':
               console.log('O wins');
               gameFlow.gamePlaying = false;
               break;
         }

      }
      //check diagonals
      let diagonalOne = board[0][0] + board[1][1] + board[2][2]
      switch (diagonalOne) {
         case 'XXX':
            console.log('X wins');
            gameFlow.gamePlaying = false;
            break;
         case 'OOO':
            console.log('O wins');
            gameFlow.gamePlaying = false;
            break;
      }
      let diagonalTwo = board[0][2] + board[1][1] + board[2][0]
      switch (diagonalTwo) {
         case 'XXX':
            console.log('X wins');
            gameFlow.gamePlaying = false;
            break;
         case 'OOO':
            console.log('O wins');
            gameFlow.gamePlaying = false;
            break;
      }

   }

   const checkTie = () => {
      if (gameFlow.playsCount === 9) {
         console.log('tie')
         gameFlow.gamePlaying = false;
      }
   }

   const squares = document.querySelectorAll('.square')
   for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', play)
   }

   return { gamePlaying, playsCount }

})();