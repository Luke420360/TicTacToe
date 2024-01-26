import Cell from "./Cell"

const Row = ({ rowIndex, row, onCellClick }:{ rowIndex: number, row: [], onCellClick: (row: number, cell: number) => void }) => {
  return (
    <div className="flex content-center justify-center">
        {row.map((cell, index) => <Cell key={index} cellIndex={index} row={rowIndex} cell={cell} onClick={onCellClick}/>)}
    </div>
  )
}

export default Row