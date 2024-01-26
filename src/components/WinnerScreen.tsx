import { Box, Button, Modal } from '@mui/material'
import Confetti from 'react-confetti';

const WinnerScreen = ({ isOpen, onClose, winner }: {isOpen: boolean, onClose: () => void, winner: string}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 300,
        bgcolor: '#202020',
        boxShadow: 24,
        p: 4,
    }
    
    if(!isOpen) return null;
    
    return (
    <>
        <Confetti width={400} height={300} className='z-0 w-screen' />
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={style}>
            <h1 className='text-orange-400 z-10 text-5xl pb-4'>{`Congratiolations!`}</h1>
            <h1 className='text-white z-10 text-3xl text-center'>{`${winner} won this match!`}</h1>
            <div className='flex mt-8 justify-center items-center'>
                <Button href='/' className='' variant='outlined' color='warning'>
                    Rematch?
                </Button>
            </div>
            </Box>
        </Modal>
    </>
    )
}

export default WinnerScreen