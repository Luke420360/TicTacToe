import { Card } from "@mui/material"
import Cross from '../assets/TTTCross.svg';
import Ring from '../assets/TTTRing.svg'

const Cell = ({ cellIndex, row, cell, onClick}:{ cellIndex: number, row: number, cell: number, onClick: (row: number, cell: number) => void }) => {
  return (
        <Card
            onClick={() => onClick(row, cellIndex)}
            sx={{ borderRadius: 0, backgroundColor: '#6574cd', transition: 'transform 0.5s, background-color 0.3s', display: "flex", justifySelf:"center" }}
            className="w-40 h-40 bg-indigo-400 hover:scale-[1.01] hover:bg-indigo-300"
            variant="outlined"
        >
            {getCellValue(cell)}
        </Card>
    )
}

export default Cell

const getCellValue = (cell: number) => {
    switch(cell) {
        case 1: return (
            <img src={Cross} alt="X"/>
            );
        case 2: return (
            <img src={Ring} alt="O"/>
        );
        default: null;
    }
}