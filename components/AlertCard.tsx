import { AiOutlineClose } from "react-icons/ai"

const AlertCard = ({ showCard, hideCard, label }) => {
    return <div className={`transition-all duration-100 pt-16 w-full h-full fixed top-0 left-0 z-10 flex-col justify-center items-center ${showCard ? 'flex' : 'hidden'}`} >
        <div className='absolute bg-black opacity-5 w-full h-full' onClick={hideCard}>

        </div>
        <div className='text-center relative bg-white border rounded-md border-black w-3/4 h-2/4 max-w-sm max-h-24 opacity-95 flex flex-col justify-center items-center gap-2 py-4 px-10'>
            <button type="button" className='absolute -right-3 -top-3 bg-white border rounded-full p-1 border-black' onClick={hideCard}> <AiOutlineClose /></button>
            {label}
        </div>
    </div>
}

export default AlertCard