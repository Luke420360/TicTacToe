import { Container } from "@mui/material";
import { useState } from "react";
import Row from "./Row";
import WinnerScreen from "./WinnerScreen";
import InfoText from "./InfoText";

const TTTGrid = () => {
  const initialBoard = Array(3).fill(Array(3).fill(null));    
  const [grid, setGrid] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string>("");

  const handleCellClick = (row: number, cell: number) => {
    if(winner) return;
    if (grid[row][cell]) return;
    const newBoard = grid.map((rowArray, rowIndex) =>
    rowIndex === row
      ? rowArray.map((cellValue: number, cellIndex: number) =>
          cellIndex === cell ? (isXNext ? 1 : 2) : cellValue
        )
      : rowArray
    );
    setIsXNext(!isXNext);
    setGrid(newBoard);
    }
    if (!winner){
        const result = checkGrid(grid);
        if (result) {
            setWinner(`${result === "Tie" ? 'Nobody' : result}`)
        };
    }

  return (
    <Container>
        <InfoText xIsNext={isXNext}/>
        <WinnerScreen isOpen={winner ? true : false} onClose={() => {}} winner={winner}/>
        {grid.map((row, index) => {
            return(
                <Row key={index} rowIndex={index} row={row} onCellClick={handleCellClick} />
            )
        })}
    </Container>
  )
}

export default TTTGrid

const checkGrid = (grid: [][]) => {
    let counterX = 0;
    let counterY = 0;
    for (let Row = 0; Row < grid.length; Row++) {
        counterX = 0;
        counterY = 0;
        for (let Col = 0; Col < grid.length; Col++) {
            if (grid[Row][Col] === 1) counterX++;
            else if (grid[Row][Col] === 2) counterY++;
            if (counterX === 3) return "X";
            if(counterY === 3) return "O";
        }
    }
    
    for (let Col = 0; Col < grid.length; Col++) {
        counterX = 0;
        counterY = 0;
        for (let Row = 0; Row < grid.length; Row++) {
            if (grid[Row][Col] === 1) counterX++;
            else if (grid[Row][Col] === 2) counterY++;
            if (counterX === 3) return "X";
            else if(counterY === 3) return "O";
        }
    }

    for (let diagonal = 0; diagonal < 2; diagonal++) {
        counterX = 0;
        counterY = 0;
        const startLeft = diagonal === 0;
        let Col = startLeft ? 0 : 2;
        for (let Row = 0; Row < grid.length; Row++) {
            if (grid[Row][Col] === 1) counterX++;
            else if (grid[Row][Col] === 2) counterY++;
            if (counterX === 3) return "X";
            else if(counterY === 3) return "O";
            if(startLeft) Col++;
            else Col--;
        }
    }

    //Checking for a tie
    let isTie = true;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === null) {
                isTie = false;
                break;
            }
        }
    }
    if(isTie) return "Tie";
}