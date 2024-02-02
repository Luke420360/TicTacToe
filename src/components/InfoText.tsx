
const InfoText = ({xIsNext}: {xIsNext: boolean}) => {
  return (
    <div className="flex justify-center content-center">
      <h4 className="text-white">
        {`${xIsNext? "X" : "O"}'s turn`}
      </h4>
    </div>
  )
}

export default InfoText
