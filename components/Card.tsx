import { AiOutlineClose, AiFillRead, AiOutlineLink } from "react-icons/ai"
import StyledButton from "./StyledButton"
import StyledFilledButton from "./StyledDarkButton"
const Card = ({ learned, showCard, hideCard, currentConcept, onCheckboxChange, currentConceptId }) => {
    return <div className={`transition-all ease-in-out top-0 left-0 h-screen w-full fixed z-10 flex-col justify-center items-center ${showCard ? 'flex' : 'hidden'}`} >
        <div className='absolute bg-black opacity-5 w-full h-full' onClick={hideCard}>

        </div>
        <div className='relative bg-white border rounded-md border-blue-900 w-3/4 h-3/4 max-w-sm max-h-96 opacity-95 flex flex-col justify-start items-center gap-2 py-4 px-10 shadow-md'>
            <button className='absolute -right-3 -top-3 bg-white border rounded-full p-1 border-blue-900 text-blue-900' onClick={hideCard}> <AiOutlineClose /></button>
            <h1 className='text-2xl font-bold border-b border-blue-900 pb-1 px-4 text-center'>{currentConcept}</h1>

            <div className="shadow-inner  rounded-sm overflow-x-scroll w-full flex flex-col items-center justify-center py-4">
                <ul className="list-disc mt-2">
                    <li>texttextetextextexexx</li>
                    <li>sdnkanvkanvkansdvkn</li>
                </ul>
                <div className='text-lg mt-2'>
                    <input id='learned' type="checkbox" checked={learned} className='mr-2' onChange={(e) => onCheckboxChange(e, currentConceptId)}>
                    </input>
                    <label htmlFor="learned"> Learned</label>
                </div>
                <div className='my-4'>
                    <a href="lesson/demo"><StyledFilledButton label="Watch Lesson" /></a>
                </div>
                <div className='w-3/4 mt-2 flex items-center'>
                    <AiFillRead className='mr-2' />
                    <h2 className='text-lg font-semibold'>
                        Material
                    </h2>
                </div>
                <ul>
                    <a href="" className='text-blue-600 underline' ><li className='flex items-center'><AiOutlineLink className='mr-2' /> What is {currentConcept}</li></a>
                    <a href="" className='text-blue-600 underline' ><li className='flex items-center'><AiOutlineLink className='mr-2' /> Further reading about {currentConcept}</li></a>
                    <a href="" className='text-blue-600 underline' ><li className='flex items-center'><AiOutlineLink className='mr-2' />Practice problems for {currentConcept}</li></a>
                </ul>
            </div>

        </div>
    </div>
}

export default Card